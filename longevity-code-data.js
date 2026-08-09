// External book module — The Longevity Code (longevity science, new 2025-2030 dietary guidelines)
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.LONGEVITY_CODE_BOOK = {
    id: "longevity-code",
    title: "The Longevity Code: The New Science of Living Longer, Stronger",
    author: "Synthesis Curriculum",
    description: "The proven science of a longer healthspan — the new 2025-2030 food pyramid, the protein revolution, fitness, sleep, connection, and an honest guide to the longevity-drug frontier.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "Lifespan vs. Healthspan: The Decade You Can Win Back",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Last Ten Years of Your Life Are Already Scheduled",
            content: "Here's a number nobody puts on birthday cards: the average American lives to about **76-78 years** — but stays *healthy* only until about **65**.\n\nThat's a final decade — sometimes more — spent managing chronic disease: heart failure, diabetes, arthritis, memory loss. Doctors' waiting rooms instead of hiking trails. Pill organizers instead of passports.\n\nHere's the part that should make you sit up: **that decade is not fixed**. It's the most modifiable stretch of your entire life. The science of the last 15 years shows that how long you stay strong, sharp, and independent is driven far more by what you do than by the genes you inherited — twin studies put genetics at only about **20-25%** of the longevity equation.\n\nThis book is about winning that decade back. Not living forever — living *well* until the very end. And it starts with understanding the single most important distinction in all of longevity science.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HIDDEN DECADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two numbers that define your future</text>
                    <rect x="100" y="170" width="900" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">LIFESPAN</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="64">~76-78 years</text>
                    <text x="550" y="370" text-anchor="middle" fill="#888" font-size="18">How long the average American lives</text>
                    <rect x="100" y="450" width="900" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="520" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">HEALTHSPAN</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-weight="bold" font-size="64">~65 years</text>
                    <text x="550" y="650" text-anchor="middle" fill="#888" font-size="18">How long the average American stays healthy</text>
                    <rect x="100" y="730" width="900" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">The gap: 11+ years</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="20">A final decade of chronic disease —</text>
                    <text x="550" y="885" text-anchor="middle" fill="#fff" font-size="20">and the most modifiable years of your life</text>
                    <text x="550" y="990" text-anchor="middle" fill="#888" font-size="16">Genetics explain only ~20-25% of longevity. The rest is yours.</text>
                </svg>`,
                caption: "The 11-year gap between how long we live and how long we live well"
            }
        },
        {
            type: "concept",
            title: "Lifespan Counts Years. Healthspan Counts Good Years.",
            content: "These two words sound similar, but they measure completely different things:\n\n• **Lifespan** — the total number of years you're alive. In the US, roughly **76-78 years** on average.\n• **Healthspan** — the years you live *free of serious chronic disease and disability*. In the US, healthy life expectancy is only about **65 years**.\n\nSubtract one from the other and you get the **healthspan gap**: more than a decade, on average, spent with heart disease, type 2 diabetes, cancer, COPD, or dementia — often several at once.\n\nHere's the trap of 20th-century medicine: it got spectacularly good at extending *lifespan* — statins, stents, dialysis, ICUs — without extending *healthspan* at the same rate. We learned to keep sick people alive longer, which stretched the sick years, not the strong ones.\n\nLongevity science flips the goal. The target is not maximum years. The target is **maximum healthy years** — pushing the onset of disease so late that the gap nearly closes. Every lesson in this book serves that one goal.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO DIFFERENT QUESTIONS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Years alive vs. years well</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">LIFESPAN</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="19">"How long am I alive?"</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="18">US average: ~76-78 years</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="16">What 20th-century medicine</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">optimized: statins, stents, ICUs</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">HEALTHSPAN</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="19">"How long am I well?"</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">US average: ~65 years</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="16">Free of serious chronic disease</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">and disability — strong, independent</text>
                    <rect x="100" y="560" width="900" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE HEALTHSPAN GAP: 11+ YEARS</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="18">Heart disease, diabetes, dementia — often several at once</text>
                    <rect x="100" y="740" width="900" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE NEW GOAL</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="19">Not maximum years —</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="19">maximum HEALTHY years</text>
                </svg>`,
                caption: "Lifespan measures quantity; healthspan measures quality"
            }
        },
        {
            type: "visual",
            title: "Two Ways to Live the Same 80 Years",
            content: "Picture two life curves. In the first, health starts sliding in the 50s and declines for decades — a long, slow fade through medication, hospitalization, and dependence.\n\nIn the second, health stays high — hiking at 70, lifting groceries at 80, sharp at the dinner table — and then declines steeply only at the very end.\n\nSame lifespan. Radically different lives. The second curve is called a **rectangularized** survival curve, and it's the entire aim of longevity medicine: stay on the plateau as long as possible, and make the fall short.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO CURVES, SAME LIFESPAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Which decline do you want?</text>
                    <line x1="120" y1="880" x2="1010" y2="880" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="180" x2="120" y2="880" stroke="#888" stroke-width="2"/>
                    <text x="80" y="220" text-anchor="middle" fill="#888" font-size="16" transform="rotate(-90 80 220)"></text>
                    <text x="60" y="540" text-anchor="middle" fill="#888" font-size="16" transform="rotate(-90 60 540)">HEALTH / FUNCTION</text>
                    <text x="565" y="930" text-anchor="middle" fill="#888" font-size="16">AGE</text>
                    <text x="120" y="960" text-anchor="middle" fill="#888" font-size="16">20</text>
                    <text x="400" y="960" text-anchor="middle" fill="#888" font-size="16">50</text>
                    <text x="700" y="960" text-anchor="middle" fill="#888" font-size="16">65</text>
                    <text x="1000" y="960" text-anchor="middle" fill="#888" font-size="16">80</text>
                    <path d="M120 230 C 350 260, 420 380, 560 560 C 700 730, 850 830, 1000 870" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <path d="M120 220 C 450 225, 700 235, 870 280 C 960 320, 990 600, 1000 865" stroke="#10b981" stroke-width="5" fill="none"/>
                    <rect x="180" y="300" width="360" height="110" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="360" y="345" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">THE LONG FADE</text>
                    <text x="360" y="382" text-anchor="middle" fill="#fff" font-size="15">Decline starts in the 50s, lasts decades</text>
                    <rect x="450" y="130" width="420" height="70" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="660" y="160" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THE RECTANGULAR CURVE</text>
                    <text x="660" y="188" text-anchor="middle" fill="#fff" font-size="15">High function late, short steep decline</text>
                    <rect x="150" y="990" width="800" height="70" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1033" text-anchor="middle" fill="#ffd700" font-size="18">Goal: stay on the plateau, shorten the fall</text>
                </svg>`,
                caption: "The rectangularized curve: full function late into life, then a short decline"
            }
        },
        {
            type: "example",
            title: "Margaret and Ruth: A Tale of Two 76-Year-Olds",
            content: "Meet two women, both born the same year, both alive at 76.\n\n**Margaret** got her first chronic diagnosis — type 2 diabetes — at 58. Then hypertension at 61, a knee replacement at 66, a mild stroke at 71. She takes **nine medications**, uses a walker, and hasn't traveled in six years. Her last decade has been spent *managing decline*.\n\n**Ruth** lifts weights twice a week at the YMCA — she started at 60. She walks 3 miles most mornings, eats protein at every meal, and hosts Sunday dinner for her grandkids. Her only prescription is a low-dose blood pressure pill. Last spring she hiked a rim trail at the Grand Canyon.\n\nSame lifespan so far. **Eleven years of difference in healthspan.**\n\nHere's what matters: Ruth isn't genetically lucky — her mother died of a heart attack at 68. She's the product of choices that research says are available to almost everyone, started in her 50s and 60s. This entire book is the instruction manual for becoming Ruth.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO WOMEN, BOTH 76</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same lifespan — very different healthspans</text>
                    <rect x="60" y="170" width="460" height="520" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">MARGARET</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">Diabetes at 58</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="17">Hypertension at 61</text>
                    <text x="290" y="380" text-anchor="middle" fill="#fff" font-size="17">Knee replacement at 66</text>
                    <text x="290" y="425" text-anchor="middle" fill="#fff" font-size="17">Stroke at 71</text>
                    <text x="290" y="490" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">9 medications</text>
                    <text x="290" y="535" text-anchor="middle" fill="#888" font-size="16">Walker, homebound,</text>
                    <text x="290" y="565" text-anchor="middle" fill="#888" font-size="16">no travel in 6 years</text>
                    <text x="290" y="640" text-anchor="middle" fill="#ef4444" font-size="17">18 years managing decline</text>
                    <rect x="580" y="170" width="460" height="520" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">RUTH</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">Strength training 2x/week</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="17">Walks 3 miles daily</text>
                    <text x="810" y="380" text-anchor="middle" fill="#fff" font-size="17">Protein at every meal</text>
                    <text x="810" y="425" text-anchor="middle" fill="#fff" font-size="17">Sunday dinners with family</text>
                    <text x="810" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">1 medication</text>
                    <text x="810" y="535" text-anchor="middle" fill="#888" font-size="16">Hiked the Grand Canyon</text>
                    <text x="810" y="565" text-anchor="middle" fill="#888" font-size="16">rim trail last spring</text>
                    <text x="810" y="640" text-anchor="middle" fill="#10b981" font-size="17">Still on the plateau</text>
                    <rect x="100" y="760" width="900" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE KICKER</text>
                    <text x="550" y="868" text-anchor="middle" fill="#fff" font-size="18">Ruth is not genetically lucky — her mother died at 68.</text>
                    <text x="550" y="905" text-anchor="middle" fill="#fff" font-size="18">She is the product of learnable choices, started at 60.</text>
                </svg>`,
                caption: "Eleven years of healthspan difference — built from choices, not genes"
            }
        },
        {
            type: "quiz",
            question: "The US healthspan gap refers to which of the following?",
            options: [
                { text: "The difference in life expectancy between men and women", correct: false },
                { text: "The ~11-year difference between average lifespan (~76-78) and healthy life expectancy (~65)", correct: true },
                { text: "The number of years added by modern medicine since 1900", correct: false },
                { text: "The gap between US life expectancy and the world's longest-lived countries", correct: false }
            ],
            explanation: "The healthspan gap is the difference between how long Americans live (~76-78 years) and how long they stay healthy (~65 years) — an average of 11+ years spent with chronic disease and disability. The other options describe real gaps, but not this one. The whole aim of longevity science is to shrink this gap by delaying disease onset, not merely adding years of being alive.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE HEALTHSPAN GAP</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="18">Two numbers, one subtraction</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">Years alive minus years healthy</text>
                    <rect x="150" y="400" width="380" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="470" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LIFESPAN</text>
                    <text x="340" y="540" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">?</text>
                    <rect x="570" y="400" width="380" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="470" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HEALTHSPAN</text>
                    <text x="760" y="540" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">?</text>
                    <rect x="250" y="700" width="600" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="20">Can you name both numbers</text>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="20">and the gap between them?</text>
                </svg>`,
                caption: "Test your understanding of the lesson's core numbers"
            }
        },
        {
            type: "concept",
            title: "Compression of Morbidity: The 1980 Idea That Started It All",
            content: "In 1980, Stanford physician **James Fries** published a paper in the *New England Journal of Medicine* that became the founding document of healthspan science. His idea: **compression of morbidity**.\n\n*Morbidity* means the period of life spent sick. Fries argued that since the human lifespan seems to have a practical ceiling, the great opportunity isn't stretching life longer — it's **squeezing the sick years into a smaller and smaller window at the very end**.\n\nPicture it:\n• **Scenario A**: disease starts at 55, death at 78 → **23 sick years**\n• **Scenario B**: disease starts at 74, death at 80 → **6 sick years**\n\nScenario B adds only two years of life but *erases 17 years of illness*. That's compression.\n\nFries also made a testable prediction: people with better health habits wouldn't just live longer — their disability would start later and be compressed. Decades of follow-up on Stanford alumni runners backed him up: lifelong runners postponed disability by **more than a decade** compared to non-runners.\n\nEvery strategy in this book is, at its core, a compression strategy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">COMPRESSION OF MORBIDITY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fries, NEJM 1980 — squeeze the sick years</text>
                    <text x="130" y="230" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">SCENARIO A: the long fade</text>
                    <rect x="130" y="260" width="560" height="70" rx="12" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="410" y="303" text-anchor="middle" fill="#10b981" font-size="17">Healthy to 55</text>
                    <rect x="690" y="260" width="290" height="70" rx="12" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="835" y="303" text-anchor="middle" fill="#ef4444" font-size="17">23 sick years</text>
                    <text x="130" y="470" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">SCENARIO B: compressed</text>
                    <rect x="130" y="500" width="770" height="70" rx="12" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="515" y="543" text-anchor="middle" fill="#10b981" font-size="17">Healthy to 74</text>
                    <rect x="900" y="500" width="80" height="70" rx="12" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="940" y="543" text-anchor="middle" fill="#ef4444" font-size="14">6 yrs</text>
                    <rect x="130" y="650" width="850" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="555" y="705" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">+2 years of life, -17 years of illness</text>
                    <text x="555" y="748" text-anchor="middle" fill="#fff" font-size="18">Compression beats extension</text>
                    <rect x="130" y="830" width="850" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="555" y="890" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE PREDICTION CAME TRUE</text>
                    <text x="555" y="935" text-anchor="middle" fill="#fff" font-size="17">Stanford runners study: lifelong exercisers postponed</text>
                    <text x="555" y="963" text-anchor="middle" fill="#fff" font-size="17">disability by more than a decade vs. non-runners</text>
                </svg>`,
                caption: "Fries 1980: squeeze illness into the smallest possible window at the end of life"
            }
        },
        {
            type: "concept",
            title: "The Hallmarks of Aging: Your Map for This Book",
            content: "Why do we age at all? In 2023, **Carlos López-Otín** and colleagues published the updated **Hallmarks of Aging** in the journal *Cell* — the field's consensus list of **12 interconnected biological processes** that drive aging. Think of it as the engine-room diagram of getting old.\n\nA few hallmarks you'll meet repeatedly in this book:\n\n• **Deregulated nutrient sensing** — the insulin/IGF-1, **mTOR**, **AMPK**, and sirtuin pathways that decide whether your cells build, burn, or repair. Food and fasting speak directly to these.\n• **Mitochondrial dysfunction** — your cellular power plants get leaky and inefficient. Exercise is the strongest known countermeasure.\n• **Cellular senescence** — damaged 'zombie cells' that stop dividing but spew inflammatory signals.\n• **Epigenetic alterations** — the chemical switches on your DNA drift with age (and are the basis of 'biological age' clocks).\n\nHere's the crucial insight: **every hallmark responds to behavior**. Exercise, diet, sleep, and stress each reach into this machinery. Aging isn't a cliff you fall off — it's a set of dials, and you're holding several of them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">12 HALLMARKS OF AGING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lopez-Otin 2023, Cell — the engine room of aging</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">NUTRIENT SENSING</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="15">Insulin/IGF-1, mTOR, AMPK, sirtuins</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="14">Responds to: food, fasting, protein</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MITOCHONDRIA</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="15">Power plants get leaky with age</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="14">Responds to: exercise, most of all</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SENESCENT CELLS</text>
                    <text x="300" y="470" text-anchor="middle" fill="#fff" font-size="15">'Zombie cells' leaking inflammation</text>
                    <text x="300" y="500" text-anchor="middle" fill="#888" font-size="14">Accumulate with age and damage</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="430" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">EPIGENETIC DRIFT</text>
                    <text x="800" y="470" text-anchor="middle" fill="#fff" font-size="15">DNA switches shift with age</text>
                    <text x="800" y="500" text-anchor="middle" fill="#888" font-size="14">Basis of biological-age clocks</text>
                    <rect x="80" y="570" width="940" height="120" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="17">Plus 8 more: genomic instability, telomere attrition, proteostasis loss,</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="17">macroautophagy decline, stem cell exhaustion, altered signaling, dysbiosis, inflammation</text>
                    <rect x="80" y="740" width="940" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE KEY INSIGHT</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="18">Every hallmark responds to behavior — aging is a set of dials, not a cliff</text>
                </svg>`,
                caption: "The 12 hallmarks — the biological map this book keeps returning to"
            }
        },
        {
            type: "example",
            title: "Proof the Dials Turn: Aging Is Modifiable",
            content: "This isn't wishful thinking — humans have already moved the dials in controlled research:\n\n• **CALERIE 2 (Nature Aging, 2023)**: In a 2-year randomized trial, adults who cut calories by ~11-12% slowed their measured **pace of aging** (the DunedinPACE epigenetic clock) by about **2-3%**, and improved blood pressure, insulin sensitivity, and cholesterol. Small number, big meaning: a *behavior* changed a *biological aging measure* in a randomized trial.\n\n• **Mandsager 2018 (JAMA Network Open)**: Among **122,007 patients** on treadmill tests, low cardiorespiratory fitness predicted death more strongly than smoking, diabetes, or heart disease — and there was **no upper limit** to the benefit of being fitter. Fitness is trainable at *any* age.\n\n• **Grip strength (PURE study, The Lancet, 2015)**: Across 17 countries, every 5-kg drop in grip strength meant a ~16% higher risk of death — a stronger predictor than systolic blood pressure. Strength, too, is trainable into your 90s.\n\nThe pattern is unmistakable: the biggest known levers on aging are behaviors, and they work no matter when you start.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DIALS TURN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three landmark studies say aging is modifiable</text>
                    <rect x="80" y="170" width="940" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">CALERIE 2 — Nature Aging 2023</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">2-year RCT: ~11-12% calorie cut slowed the</text>
                    <text x="550" y="315" text-anchor="middle" fill="#fff" font-size="18">DunedinPACE pace of aging by ~2-3%</text>
                    <text x="550" y="358" text-anchor="middle" fill="#888" font-size="16">A behavior changed a biological aging clock — in an RCT</text>
                    <rect x="80" y="430" width="940" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">MANDSAGER 2018 — 122,007 patients</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Low fitness predicted death more strongly than smoking</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="18">— and there was NO upper limit to fitness benefit</text>
                    <text x="550" y="618" text-anchor="middle" fill="#888" font-size="16">Fitness is trainable at any age</text>
                    <rect x="80" y="690" width="940" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">GRIP STRENGTH — PURE, Lancet 2015</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">Each 5-kg drop in grip = ~16% higher death risk,</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="18">outpredicting systolic blood pressure</text>
                    <text x="550" y="878" text-anchor="middle" fill="#888" font-size="16">Strength is trainable into your 90s</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">The biggest levers on aging are behaviors</text>
                </svg>`,
                caption: "Randomized trials and huge cohorts: behavior moves the biology of aging"
            }
        },
        {
            type: "concept",
            title: "The Proven Big Five: Your Toolkit for This Book",
            content: "Longevity headlines love exotic molecules — rapamycin, NAD+ boosters, young blood. But when you rank interventions by *human outcome data*, five unglamorous levers dominate everything else. They're the spine of this book:\n\n1. **Train** — cardio for VO2max, strength for muscle, power after 60. The strongest mortality data in all of medicine (Mandsager 2018).\n\n2. **Eat real food, protein forward** — the 2025-2030 Dietary Guidelines' new pyramid: whole foods, ultra-processed food demoted, a protein serving at every meal, **1.2-1.6 g/kg/day** for adults.\n\n3. **Sleep ~7 hours** — mortality follows a U-curve with its low point near 7 hours; deep sleep runs the brain's overnight **glymphatic** cleanup.\n\n4. **Stay connected** — the Harvard Study of Adult Development found relationship quality at 50 predicted health at 80 better than cholesterol did. Loneliness carries mortality risk comparable to ~15 cigarettes a day (Holt-Lunstad 2010).\n\n5. **Measure what matters** — cheap functional biomarkers (VO2max, grip strength, waist-to-height ratio, ApoB, resting heart rate) often predict aging as well as fancy epigenetic clocks.\n\nEach gets its own deep-dive lessons ahead.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PROVEN BIG FIVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ranked by human outcome data — not hype</text>
                    <rect x="120" y="160" width="860" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="24">1.</text>
                    <text x="230" y="220" text-anchor="start" fill="#fff" font-weight="bold" font-size="21">TRAIN</text>
                    <text x="230" y="262" text-anchor="start" fill="#888" font-size="16">Cardio + strength + power — strongest mortality data in medicine</text>
                    <rect x="120" y="320" width="860" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="180" y="380" text-anchor="start" fill="#10b981" font-weight="bold" font-size="24">2.</text>
                    <text x="230" y="380" text-anchor="start" fill="#fff" font-weight="bold" font-size="21">EAT REAL FOOD, PROTEIN FORWARD</text>
                    <text x="230" y="422" text-anchor="start" fill="#888" font-size="16">New 2025-2030 pyramid — 1.2-1.6 g/kg protein, UPF demoted</text>
                    <rect x="120" y="480" width="860" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="180" y="540" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="24">3.</text>
                    <text x="230" y="540" text-anchor="start" fill="#fff" font-weight="bold" font-size="21">SLEEP ~7 HOURS</text>
                    <text x="230" y="582" text-anchor="start" fill="#888" font-size="16">U-curve low point near 7h — glymphatic brain cleanup at night</text>
                    <rect x="120" y="640" width="860" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="180" y="700" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="24">4.</text>
                    <text x="230" y="700" text-anchor="start" fill="#fff" font-weight="bold" font-size="21">STAY CONNECTED</text>
                    <text x="230" y="742" text-anchor="start" fill="#888" font-size="16">Loneliness ~ 15 cigarettes/day of risk (Holt-Lunstad 2010)</text>
                    <rect x="120" y="800" width="860" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="180" y="860" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="24">5.</text>
                    <text x="230" y="860" text-anchor="start" fill="#fff" font-weight="bold" font-size="21">MEASURE WHAT MATTERS</text>
                    <text x="230" y="902" text-anchor="start" fill="#888" font-size="16">VO2max, grip, waist-to-height, ApoB, resting heart rate</text>
                    <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="17">No pill on Earth beats these five — yet</text>
                </svg>`,
                caption: "The five levers with real human outcome data — the spine of this book"
            }
        },
        {
            type: "application",
            title: "Start Winning the Decade Back Today",
            content: "You don't need a lab or a longevity clinic to begin. Do these five things this week:\n\n1. **Calculate your gap number** — Subtract 65 from 78. That 13-year window is what you're playing for. Write it somewhere you'll see it.\n\n2. **Take two baselines** — Time how long you can stand on one leg (under 10 seconds at midlife is a warning sign), and test how fast you walk a mile. These are free functional biomarkers.\n\n3. **Add one strength session** — Even one 20-minute session of squats, push-ups (wall push-ups count), and rows starts reversing muscle loss this week.\n\n4. **Audit one day of eating** — Count how many items came from a package with more than five ingredients. Just count. Awareness comes before change.\n\n5. **Book one connection** — Call, walk, or eat with someone you like. Relationship quality is a longevity intervention, not a luxury.\n\nNone of this is medical advice — loop in your clinician, especially before new exercise if you have heart or joint conditions. But start. The compression clock is running.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THIS WEEK'S MOVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five free actions to start compression now</text>
                    <rect x="150" y="160" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="215" text-anchor="start" fill="#fff" font-size="19">Calculate your gap number</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="15">78 minus 65 — the window you are playing for</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="365" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="365" text-anchor="start" fill="#fff" font-size="19">Take two baselines</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="15">One-leg stand time + one-mile walk speed</text>
                    <rect x="150" y="460" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="515" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="515" text-anchor="start" fill="#fff" font-size="19">Add one strength session</text>
                    <text x="245" y="555" text-anchor="start" fill="#888" font-size="15">20 minutes: squats, push-ups, rows</text>
                    <rect x="150" y="610" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="665" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="665" text-anchor="start" fill="#fff" font-size="19">Audit one day of eating</text>
                    <text x="245" y="705" text-anchor="start" fill="#888" font-size="15">Count packaged items with 5+ ingredients</text>
                    <rect x="150" y="760" width="800" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="815" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="815" text-anchor="start" fill="#fff" font-size="19">Book one connection</text>
                    <text x="245" y="855" text-anchor="start" fill="#888" font-size="15">Call, walk, or eat with someone you like</text>
                    <text x="550" y="970" text-anchor="middle" fill="#888" font-size="16">Not medical advice — partner with your clinician</text>
                </svg>`,
                caption: "Five zero-cost actions that begin compressing morbidity this week"
            }
        },
        {
            type: "quote",
            content: "The good life is built with good relationships — and the people who were most satisfied in their relationships at age 50 were the healthiest at age 80.",
            author: "Robert Waldinger, director, Harvard Study of Adult Development",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="20">From the longest-running study of adult life</text>
                    <rect x="100" y="200" width="900" height="330" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="280" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"The good life is built with good</text>
                    <text x="160" y="325" text-anchor="start" fill="#fff" font-style="italic" font-size="22">relationships — and the people most satisfied</text>
                    <text x="160" y="370" text-anchor="start" fill="#fff" font-style="italic" font-size="22">in their relationships at age 50 were</text>
                    <text x="160" y="415" text-anchor="start" fill="#fff" font-style="italic" font-size="22">the healthiest at age 80."</text>
                    <text x="940" y="485" text-anchor="end" fill="#8b5cf6" font-size="18">— Robert Waldinger</text>
                    <rect x="150" y="620" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">85+ YEARS OF DATA</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">The Harvard Study has tracked lives since 1938 —</text>
                    <text x="550" y="758" text-anchor="middle" fill="#fff" font-size="17">relationship quality beat cholesterol as a predictor</text>
                </svg>`,
                caption: "Waldinger's Harvard study: connection is core longevity biology"
            }
        },
        {
            type: "quiz",
            question: "According to Fries' 1980 'compression of morbidity' framework, which outcome counts as the biggest win?",
            options: [
                { text: "Extending total lifespan by as many years as possible, regardless of health", correct: false },
                { text: "Delaying the onset of chronic disease so the sick period shrinks into a short window at the end of life", correct: true },
                { text: "Using better medications to manage chronic diseases for more years", correct: false },
                { text: "Eliminating aging entirely so morbidity never occurs", correct: false }
            ],
            explanation: "Compression of morbidity means squeezing the years of illness into the smallest possible window before death — delaying disease onset faster than we extend lifespan. Managing disease longer with medication actually *expands* morbidity, which is what 20th-century medicine inadvertently did. And Fries assumed aging and death remain — his insight was about postponing dysfunction, not abolishing it. Behavior change is the proven compression tool.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COMPRESSION OF MORBIDITY</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="18">Fries, NEJM 1980</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">What is the real target of longevity science?</text>
                    <rect x="150" y="420" width="800" height="110" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="465" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">MORE YEARS, SAME SICKNESS?</text>
                    <text x="550" y="503" text-anchor="middle" fill="#888" font-size="16">That expands morbidity</text>
                    <rect x="150" y="570" width="800" height="110" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">LATER DISEASE, SHORTER DECLINE?</text>
                    <text x="550" y="653" text-anchor="middle" fill="#888" font-size="16">That compresses it</text>
                    <rect x="250" y="760" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-size="19">Which one did Fries argue for —</text>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="19">and which did modern medicine deliver?</text>
                </svg>`,
                caption: "Test the lesson's founding idea"
            }
        }
    ]
},
{
    id: 2,
    title: "The New Pyramid: Why the Rules Just Changed",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "On January 7, 2026, the US Government Changed Its Mind About Food",
            content: "For 15 years, the official symbol of American nutrition was a plate. Before that, for two decades, it was a pyramid that told you to eat **6-11 servings of bread, cereal, rice, and pasta** every day — a recommendation that coincided with the steepest rise in obesity and type 2 diabetes in American history.\n\nThen, on **January 7, 2026**, the USDA and HHS released the **2025-2030 Dietary Guidelines for Americans** — and with them, a **redesigned food pyramid** that replaces MyPlate entirely.\n\nThe headline message is almost shockingly simple: **eat real food**. Ultra-processed foods and refined carbohydrates are explicitly demoted. Protein is promoted to a serving at *every meal*. The carb-heavy base that defined the 1992 pyramid is gone.\n\nIf you learned nutrition from a school poster — or built your grocery list around 'low-fat' — the rules you memorized just got rewritten. This lesson walks you through exactly what changed, why, and how to eat under the new rules starting tomorrow morning.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">JANUARY 7, 2026</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The day the official rules of eating changed</text>
                    <rect x="80" y="180" width="290" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">1992 PYRAMID</text>
                    <polygon points="225,270 165,360 285,360" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="345" text-anchor="middle" fill="#fff" font-size="13">6-11 carb servings</text>
                    <path d="M385 290 L430 290" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,290 416,281 416,299" fill="#14b8a6"/>
                    <rect x="440" y="180" width="290" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="585" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MYPLATE 2011</text>
                    <circle cx="585" cy="320" r="48" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="585" y1="272" x2="585" y2="368" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="537" y1="320" x2="633" y2="320" stroke="#f59e0b" stroke-width="2"/>
                    <path d="M745 290 L790 290" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="790,290 776,281 776,299" fill="#14b8a6"/>
                    <rect x="800" y="180" width="220" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="910" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">2026 PYRAMID</text>
                    <polygon points="910,270 855,360 965,360" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="910" y="345" text-anchor="middle" fill="#fff" font-size="13">Real food base</text>
                    <rect x="100" y="480" width="900" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="545" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">THE NEW CORE MESSAGE</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-weight="bold" font-size="34">"Eat real food"</text>
                    <text x="550" y="650" text-anchor="middle" fill="#888" font-size="17">2025-2030 Dietary Guidelines for Americans, USDA and HHS</text>
                    <rect x="100" y="740" width="430" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="315" y="795" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">DEMOTED</text>
                    <text x="315" y="840" text-anchor="middle" fill="#fff" font-size="16">Ultra-processed foods, refined carbs</text>
                    <rect x="570" y="740" width="430" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="785" y="795" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">PROMOTED</text>
                    <text x="785" y="840" text-anchor="middle" fill="#fff" font-size="16">Protein at every meal, whole foods</text>
                </svg>`,
                caption: "Three eras of official US nutrition advice — and the 2026 reset"
            }
        },
        {
            type: "concept",
            title: "What the New Pyramid Actually Says",
            content: "The redesigned pyramid in the **2025-2030 Dietary Guidelines** rebuilds the hierarchy of your plate from the ground up:\n\n• **The base is real, whole food** — vegetables, fruits, legumes, whole grains, nuts, fish, eggs, meat, dairy. If your great-grandmother would recognize it as food, it likely lives here.\n\n• **Protein moves up in priority** — the guidelines now call for a **protein serving at each meal**, not just 'some protein daily.' The adult intake range rises to **1.2-1.6 g per kg of body weight per day**, replacing reliance on the 0.8 g/kg RDA that had stood for roughly 70 years.\n\n• **Ultra-processed foods (UPFs) are explicitly demoted** — for the first time, official US guidance tells you to *avoid* ultra-processed foods, not just 'limit added sugars.' Refined carbohydrates — white bread, sugary cereals, pastries — lose the privileged position they held since 1992.\n\n• **The shape matters** — a pyramid communicates *hierarchy*: eat lots from the bottom, little from the top. UPFs and refined carbs now sit in the tiny tip where fats and oils once did.\n\nIn one sentence: **build every meal from whole foods, anchor it with protein, and treat ultra-processed products as the new 'sparingly.'**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 2026 PYRAMID</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A new hierarchy for your plate</text>
                    <polygon points="550,160 200,900 900,900" fill="none" stroke="#888" stroke-width="2"/>
                    <polygon points="550,160 455,360 645,360" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">SPARINGLY</text>
                    <text x="550" y="330" text-anchor="middle" fill="#fff" font-size="14">UPFs, refined carbs</text>
                    <polygon points="455,360 645,360 740,560 360,560" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">MODERATE</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="15">Dairy, healthy oils, whole-grain extras</text>
                    <polygon points="360,560 740,560 830,740 270,740" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">PROTEIN AT EVERY MEAL</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="15">Fish, eggs, poultry, meat, beans — 1.2-1.6 g/kg/day</text>
                    <polygon points="270,740 830,740 900,900 200,900" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REAL WHOLE FOOD BASE</text>
                    <text x="550" y="852" text-anchor="middle" fill="#fff" font-size="15">Vegetables, fruits, legumes, whole grains, nuts</text>
                    <rect x="200" y="960" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="18">Eat lots from the bottom,</text>
                    <text x="550" y="1032" text-anchor="middle" fill="#ffd700" font-size="18">almost nothing from the tip</text>
                </svg>`,
                caption: "The redesigned pyramid: whole foods at the base, UPFs exiled to the tip"
            }
        },
        {
            type: "visual",
            title: "1992 vs. 2026: The Pyramid Flipped",
            content: "Put the two pyramids side by side and the revolution is obvious. In **1992**, the base — the 'eat most' zone — was bread, cereal, rice, and pasta: **6-11 servings a day**, with no distinction between white bread and steel-cut oats. Fats sat in the 'use sparingly' tip, which pushed food companies to create thousands of low-fat, high-sugar processed products.\n\nIn **2026**, the base is whole, minimally processed food, protein anchors every meal, and the 'sparingly' tip belongs to **ultra-processed foods and refined carbs** — the very things the old base encouraged.\n\nThirty-four years of nutrition science, summarized in one swap.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GREAT FLIP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What 'eat most' vs 'eat least' means, then and now</text>
                    <rect x="60" y="160" width="460" height="620" rx="20" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">1992</text>
                    <polygon points="290,250 130,700 450,700" fill="none" stroke="#ef4444" stroke-width="2"/>
                    <polygon points="290,250 245,380 335,380" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="1"/>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="12">Fats: sparingly</text>
                    <polygon points="245,380 335,380 390,540 190,540" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1"/>
                    <text x="290" y="470" text-anchor="middle" fill="#fff" font-size="13">Dairy, meat 2-3 servings</text>
                    <polygon points="190,540 390,540 450,700 130,700" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="610" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="15">BREAD, CEREAL, RICE, PASTA</text>
                    <text x="290" y="645" text-anchor="middle" fill="#fff" font-size="14">6-11 servings/day</text>
                    <text x="290" y="745" text-anchor="middle" fill="#888" font-size="15">Refined carbs at the base</text>
                    <rect x="580" y="160" width="460" height="620" rx="20" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2026</text>
                    <polygon points="810,250 650,700 970,700" fill="none" stroke="#10b981" stroke-width="2"/>
                    <polygon points="810,250 765,380 855,380" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="1"/>
                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="12">UPFs: avoid</text>
                    <polygon points="765,380 855,380 910,540 710,540" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="1"/>
                    <text x="810" y="470" text-anchor="middle" fill="#fff" font-size="13">Protein at every meal</text>
                    <polygon points="710,540 910,540 970,700 650,700" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="610" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="15">REAL WHOLE FOOD</text>
                    <text x="810" y="645" text-anchor="middle" fill="#fff" font-size="14">Vegetables, fruit, legumes, whole grains</text>
                    <text x="810" y="745" text-anchor="middle" fill="#888" font-size="15">Whole food at the base</text>
                    <rect x="150" y="840" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">34 YEARS OF SCIENCE, ONE SWAP</text>
                    <text x="550" y="948" text-anchor="middle" fill="#fff" font-size="17">The old base became the new tip</text>
                </svg>`,
                caption: "1992's 'eat most' foods became 2026's 'eat least' foods"
            }
        },
        {
            type: "example",
            title: "How We Got Here: Pyramid, Plate, Pyramid Again",
            content: "The road to January 2026 runs through two failed icons:\n\n**1992 — The Food Guide Pyramid.** Built in the era of fat panic, it put **6-11 daily servings of grains** at the base and lumped all fats — olive oil and margarine alike — into the 'use sparingly' tip. Americans obliged: SnackWell's cookies, fat-free everything, soaring refined-carb intake. Between 1990 and 2010, US adult obesity climbed from roughly **12% to 36%**. The pyramid didn't cause it alone, but it gave sugar-heavy processed food a health halo.\n\n**2011 — MyPlate.** A simpler icon: half your plate fruits and vegetables, quarters for grains and protein, dairy on the side. Better — but it never distinguished a lentil stew from chicken nuggets, or steel-cut oats from white bread. 'Protein' and 'grains' were categories, not qualities. And it said nothing about **ultra-processed food**, even as UPFs grew to nearly **60% of American calories**.\n\n**2026 — The new pyramid.** Armed with a decade of UPF research — including **Hall's 2019 NIH ward study** showing ultra-processed diets drive ~500 extra calories a day — the guidelines finally name the real dividing line: not fat vs. carbs, but **real food vs. industrial food**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE ERAS OF ADVICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How official guidance evolved — and why</text>
                    <rect x="100" y="160" width="900" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">1992: FOOD GUIDE PYRAMID</text>
                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-size="17">Fat feared, 6-11 grain servings at the base</text>
                    <text x="550" y="303" text-anchor="middle" fill="#fff" font-size="17">Low-fat processed food got a health halo</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="15">Adult obesity 1990-2010: ~12% to ~36%</text>
                    <rect x="100" y="420" width="900" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">2011: MYPLATE</text>
                    <text x="550" y="528" text-anchor="middle" fill="#fff" font-size="17">Half plate produce — but no line between</text>
                    <text x="550" y="563" text-anchor="middle" fill="#fff" font-size="17">whole foods and ultra-processed versions</text>
                    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="15">UPFs grew to nearly 60% of US calories</text>
                    <rect x="100" y="680" width="900" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">2026: THE NEW PYRAMID</text>
                    <text x="550" y="788" text-anchor="middle" fill="#fff" font-size="17">The real line: real food vs. industrial food</text>
                    <text x="550" y="823" text-anchor="middle" fill="#fff" font-size="17">UPFs demoted, protein at every meal</text>
                    <text x="550" y="865" text-anchor="middle" fill="#888" font-size="15">Informed by Hall 2019: UPF diet = ~500 extra kcal/day</text>
                    <text x="550" y="990" text-anchor="middle" fill="#888" font-size="17">Each icon corrected the last one's blind spot</text>
                </svg>`,
                caption: "1992's fat panic, 2011's category blindness, 2026's real-food line"
            }
        },
        {
            type: "quiz",
            question: "What is the single biggest change the 2025-2030 Dietary Guidelines' new pyramid makes compared to MyPlate and the 1992 pyramid?",
            options: [
                { text: "It bans dietary fat again, returning to 1990s low-fat advice", correct: false },
                { text: "It eliminates grains entirely in favor of a low-carb approach", correct: false },
                { text: "It draws the main line between real whole foods and ultra-processed foods, demoting UPFs and refined carbs while promoting protein at each meal", correct: true },
                { text: "It replaces food groups with calorie-counting targets for each age group", correct: false }
            ],
            explanation: "The 2026 redesign's core shift is the dividing line itself: real food vs. ultra-processed food. UPFs and refined carbs move to the 'avoid/sparingly' tip, while protein earns a serving at every meal. It does NOT ban fat — healthy fats are part of the whole-food base — and it keeps whole grains, fruits, and vegetables. The old advice failed partly because it judged nutrients (fat, carbs) instead of food quality.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE 2026 REDESIGN</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">What line does the new pyramid draw?</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">Fat vs carbs? Calories? Or something else?</text>
                    <rect x="150" y="400" width="380" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="470" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REAL FOOD</text>
                    <text x="340" y="520" text-anchor="middle" fill="#fff" font-size="16">Vegetables, fish, eggs,</text>
                    <text x="340" y="550" text-anchor="middle" fill="#fff" font-size="16">beans, whole grains</text>
                    <text x="340" y="600" text-anchor="middle" fill="#888" font-size="15">The base</text>
                    <rect x="570" y="400" width="380" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="470" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">INDUSTRIAL FOOD</text>
                    <text x="760" y="520" text-anchor="middle" fill="#fff" font-size="16">UPFs, refined carbs,</text>
                    <text x="760" y="550" text-anchor="middle" fill="#fff" font-size="16">sugary drinks</text>
                    <text x="760" y="600" text-anchor="middle" fill="#888" font-size="15">The tip</text>
                    <rect x="250" y="720" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ffd700" font-size="19">Which change defines the</text>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="19">new guidelines?</text>
                </svg>`,
                caption: "Test what you know about the 2026 redesign"
            }
        },
        {
            type: "concept",
            title: "The Harvard Comparison: Vindication of the Healthy Eating Plate",
            content: "Here's a delicious irony of nutrition history. Back in **2011**, when the USDA launched MyPlate, the **Harvard T.H. Chan School of Public Health** published a rival graphic — the **Healthy Eating Plate** — specifically to fix MyPlate's blind spots. Harvard's version:\n\n• Specified **whole** grains, not just 'grains'\n• Urged **healthy protein** (fish, poultry, beans, nuts) and told you to limit red and processed meat\n• Added **healthy oils** like olive and canola — MyPlate ignored fats entirely\n• Said outright to **avoid sugary drinks** and limit refined grains, warning they 'act like sugar' in the body\n\nFor 15 years, Harvard's plate was the evidence-based alternative that official guidance wouldn't fully embrace.\n\nThe **2026 pyramid closes most of that gap**. Real food emphasis, refined-carb demotion, quality-of-protein language, room for healthy fats — the new federal guidance now reads much closer to Harvard than to the old MyPlate.\n\nThe practical takeaway for you: mainstream, evidence-based nutrition has *converged*. When Harvard epidemiologists and federal guidelines finally agree — eat whole food, mind carb quality, prioritize protein quality — you can stop chasing diet-of-the-month headlines. The consensus is here.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GREAT CONVERGENCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Harvard's 2011 critique became 2026 policy</text>
                    <rect x="60" y="170" width="460" height="470" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">HARVARD PLATE, 2011</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="16">WHOLE grains specifically</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="16">Healthy protein, less red meat</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="16">Healthy oils included</text>
                    <text x="290" y="440" text-anchor="middle" fill="#fff" font-size="16">Avoid sugary drinks</text>
                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="16">Refined grains 'act like sugar'</text>
                    <text x="290" y="560" text-anchor="middle" fill="#888" font-size="15">The evidence-based rival</text>
                    <text x="290" y="590" text-anchor="middle" fill="#888" font-size="15">to MyPlate for 15 years</text>
                    <rect x="580" y="170" width="460" height="470" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">NEW PYRAMID, 2026</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="16">Whole grains retained</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="16">Protein at every meal</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="16">Whole-food fats in the base</text>
                    <text x="810" y="440" text-anchor="middle" fill="#fff" font-size="16">UPFs demoted to the tip</text>
                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="16">Refined carbs demoted</text>
                    <text x="810" y="560" text-anchor="middle" fill="#888" font-size="15">Federal guidance now reads</text>
                    <text x="810" y="590" text-anchor="middle" fill="#888" font-size="15">much closer to Harvard</text>
                    <path d="M520 400 L580 400" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="580,400 566,391 566,409" fill="#14b8a6"/>
                    <rect x="150" y="710" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">WHY THIS MATTERS TO YOU</text>
                    <text x="550" y="818" text-anchor="middle" fill="#fff" font-size="17">Evidence-based nutrition has converged —</text>
                    <text x="550" y="852" text-anchor="middle" fill="#fff" font-size="17">you can stop chasing diet-of-the-month headlines</text>
                </svg>`,
                caption: "Harvard's Healthy Eating Plate and the 2026 pyramid now largely agree"
            }
        },
        {
            type: "concept",
            title: "What Stayed the Same (And Why That's Good News)",
            content: "Headlines scream 'everything changed!' — but scientists at USDA and HHS kept every pillar that decades of evidence still supports. Knowing what *didn't* change protects you from overcorrecting into fad territory:\n\n• **Whole grains stay in.** Oats, brown rice, quinoa, whole-wheat bread remain in the recommended base. The demotion targets *refined* grains. This is not a keto document.\n\n• **Fruits and vegetables remain the plate's workhorses.** The push for variety and color continues — fiber targets of roughly **25-38 g/day** remain (most Americans still get only ~15 g).\n\n• **Sodium limits hold** at about **2,300 mg/day** — the hypertension evidence never wavered.\n\n• **Added sugar limits continue** — under **10% of daily calories**, with sugary drinks singled out.\n\nWhy does the continuity matter? Because it shows the guidelines are being driven by *evidence*, not fashion. Where the science held (produce, whole grains, sodium), the advice held. Where the science shifted (UPFs, protein needs, refined carbs), the advice shifted.\n\nThat's exactly what you want from a guidance system — and it means the new pyramid is a *refinement* of healthy eating, not a whiplash reversal. If you already eat vegetables and whole grains, keep going. Now add the new layers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT STAYED, WHAT CHANGED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Evidence held, evidence shifted</text>
                    <rect x="60" y="170" width="460" height="500" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">KEPT</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">Whole grains in the base</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="17">Fruits and vegetables central</text>
                    <text x="290" y="405" text-anchor="middle" fill="#fff" font-size="17">Fiber 25-38 g/day target</text>
                    <text x="290" y="460" text-anchor="middle" fill="#fff" font-size="17">Sodium under ~2,300 mg/day</text>
                    <text x="290" y="515" text-anchor="middle" fill="#fff" font-size="17">Added sugar under 10% of calories</text>
                    <text x="290" y="590" text-anchor="middle" fill="#888" font-size="15">The science never wavered here</text>
                    <rect x="580" y="170" width="460" height="500" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">CHANGED</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">Pyramid replaces MyPlate</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="17">UPFs explicitly demoted</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="17">Refined carbs to the tip</text>
                    <text x="810" y="460" text-anchor="middle" fill="#fff" font-size="17">Protein at every meal</text>
                    <text x="810" y="515" text-anchor="middle" fill="#fff" font-size="17">Adult protein 1.2-1.6 g/kg/day</text>
                    <text x="810" y="590" text-anchor="middle" fill="#888" font-size="15">The science moved here</text>
                    <rect x="150" y="740" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">REFINEMENT, NOT REVERSAL</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="17">If you already eat produce and whole grains,</text>
                    <text x="550" y="878" text-anchor="middle" fill="#fff" font-size="17">keep going — now add the new layers</text>
                </svg>`,
                caption: "Continuity where evidence held; change where evidence moved"
            }
        },
        {
            type: "example",
            title: "The Science Behind the Demotion: 500 Calories You Never Ordered",
            content: "Why did ultra-processed food finally get named in federal guidelines? One study made it undeniable.\n\nIn **2019, Kevin Hall's team at the NIH** ran something almost never done in nutrition: a **fully controlled ward study**. Twenty adults lived at the NIH Clinical Center for 4 weeks. For 2 weeks they ate an **ultra-processed diet**; for 2 weeks a **minimally processed diet** — *matched* for calories offered, sugar, fat, fiber, and macros. They could eat as much or little as they wanted.\n\nThe result stunned even the researchers: on the ultra-processed diet, people spontaneously ate about **500 more calories per day** — and gained roughly **2 pounds in 2 weeks**. Same offered nutrients. The difference was the *processing itself*: softer textures, faster eating, hyper-palatable engineered flavor, weaker satiety signaling.\n\nThe framework behind the term is the **NOVA classification**, which sorts food by processing level — group 1 (whole foods) to group 4 (industrial formulations of extracts and additives: sodas, packaged snacks, reconstituted meats, most breakfast cereals).\n\nWhen nearly **60% of American calories** come from NOVA group 4, a 500-calorie-a-day nudge isn't a rounding error — it's a national epidemic with a mechanism. That's what pushed UPFs into the pyramid's tip.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HALL 2019: THE NIH WARD STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The experiment that demoted ultra-processed food</text>
                    <rect x="100" y="160" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">20 ADULTS, 4 WEEKS, LOCKED WARD</text>
                    <text x="550" y="252" text-anchor="middle" fill="#fff" font-size="16">Diets matched for offered calories, sugar, fat, fiber, macros</text>
                    <rect x="60" y="320" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="380" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ULTRA-PROCESSED WEEKS</text>
                    <text x="290" y="450" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">+500 kcal/day</text>
                    <text x="290" y="510" text-anchor="middle" fill="#fff" font-size="17">eaten spontaneously</text>
                    <text x="290" y="565" text-anchor="middle" fill="#888" font-size="16">~2 lbs gained in 2 weeks</text>
                    <text x="290" y="605" text-anchor="middle" fill="#888" font-size="15">Faster eating, weaker satiety</text>
                    <rect x="580" y="320" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="380" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHOLE-FOOD WEEKS</text>
                    <text x="810" y="450" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">Baseline</text>
                    <text x="810" y="510" text-anchor="middle" fill="#fff" font-size="17">calories self-regulated</text>
                    <text x="810" y="565" text-anchor="middle" fill="#888" font-size="16">Weight stable to slightly down</text>
                    <text x="810" y="605" text-anchor="middle" fill="#888" font-size="15">Same people, same month</text>
                    <rect x="100" y="710" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">NOVA GROUP 4 = ~60% OF US CALORIES</text>
                    <text x="550" y="812" text-anchor="middle" fill="#fff" font-size="17">Sodas, packaged snacks, most cereals, reconstituted meats</text>
                    <rect x="200" y="920" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="18">A 500 kcal/day nudge, applied to a nation —</text>
                    <text x="550" y="992" text-anchor="middle" fill="#ffd700" font-size="18">that is why UPFs moved to the tip</text>
                </svg>`,
                caption: "Hall 2019: processing itself — not macros — drove 500 extra daily calories"
            }
        },
        {
            type: "example",
            title: "A Day of Eating Under the New Pyramid",
            content: "What does January 2026 guidance look like on an actual plate? Here's a day for a 150-lb (68 kg) adult aiming at the new targets:\n\n**Breakfast** — 3 scrambled eggs with spinach, a slice of whole-grain toast, half an avocado, black coffee. *Protein: ~22 g. Real food: 100%.*\n\n**Lunch** — Big bowl: quinoa, chickpeas, grilled chicken thigh, roasted peppers, olive-oil vinaigrette. An apple. *Protein: ~38 g, plus 12 g of fiber.*\n\n**Snack** — Plain Greek yogurt with walnuts and blueberries. *Protein: ~18 g — instead of the granola bar (NOVA group 4) it replaced.*\n\n**Dinner** — Baked salmon, lentils, roasted broccoli with olive oil, side salad. *Protein: ~35 g, omega-3s, more fiber.*\n\n**The tally**: about **113 g protein** (~1.66 g/kg — top of the new range), **~35 g fiber**, sodium in range, added sugar minimal, and **zero ultra-processed items** — without counting a single calorie.\n\nNotice what made it work: every meal *started* from a protein anchor, vegetables filled the volume, and whole-food carbs (quinoa, lentils, fruit, toast) played the supporting role the new pyramid assigns them. That's the template — swap ingredients freely.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE DAY, NEW RULES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A 68 kg adult eating to the 2026 pyramid</text>
                    <rect x="100" y="160" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="215" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">BREAKFAST</text>
                    <text x="160" y="255" text-anchor="start" fill="#fff" font-size="16">3 eggs + spinach, whole-grain toast, avocado</text>
                    <text x="940" y="235" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="22">22 g</text>
                    <rect x="100" y="330" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="385" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">LUNCH</text>
                    <text x="160" y="425" text-anchor="start" fill="#fff" font-size="16">Quinoa-chickpea bowl with chicken, apple</text>
                    <text x="940" y="405" text-anchor="end" fill="#10b981" font-weight="bold" font-size="22">38 g</text>
                    <rect x="100" y="500" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="555" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">SNACK</text>
                    <text x="160" y="595" text-anchor="start" fill="#fff" font-size="16">Greek yogurt, walnuts, blueberries</text>
                    <text x="940" y="575" text-anchor="end" fill="#8b5cf6" font-weight="bold" font-size="22">18 g</text>
                    <rect x="100" y="670" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="725" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">DINNER</text>
                    <text x="160" y="765" text-anchor="start" fill="#fff" font-size="16">Salmon, lentils, broccoli, salad</text>
                    <text x="940" y="745" text-anchor="end" fill="#6366f1" font-weight="bold" font-size="22">35 g</text>
                    <rect x="100" y="870" width="900" height="170" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">TOTAL: ~113 g protein (~1.66 g/kg)</text>
                    <text x="550" y="975" text-anchor="middle" fill="#fff" font-size="17">~35 g fiber, zero ultra-processed items,</text>
                    <text x="550" y="1008" text-anchor="middle" fill="#fff" font-size="17">no calorie counting required</text>
                </svg>`,
                caption: "Protein anchors each meal; whole foods fill the rest — the daily template"
            }
        },
        {
            type: "application",
            title: "Rebuild One Day Around the New Pyramid",
            content: "Don't overhaul your diet — run one 24-hour experiment tomorrow:\n\n1. **Anchor each meal with protein first** — Decide the protein (eggs, fish, chicken, Greek yogurt, beans, tofu) before anything else goes on the plate. That's the new 'serving each meal' rule in action.\n\n2. **Run the five-ingredient scan** — Before eating anything packaged, read the label. Ingredients you wouldn't stock in a home kitchen (maltodextrin, soy protein isolate, artificial flavor)? That's NOVA group 4 — swap it once today.\n\n3. **Make one refined-to-whole swap** — White bread to whole-grain, sugary cereal to oats, white rice to brown or quinoa. One swap, not five.\n\n4. **Fill half the plate with plants** — The part that never changed. Two colors minimum per meal, aiming toward 25-38 g fiber.\n\n5. **Score your day tonight** — Out of three meals: how many had a protein anchor? How many UPF items got through? A 2-out-of-3 day beats a perfect plan you never run.\n\nRepeat the winning day twice this week. Habits form from repeated days, not resolutions — and this is not medical advice, so loop in your clinician for personal conditions like kidney disease.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR 24-HOUR EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Run the new pyramid for one day</text>
                    <rect x="150" y="160" width="800" height="135" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="217" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="217" text-anchor="start" fill="#fff" font-size="19">Anchor each meal with protein first</text>
                    <text x="245" y="257" text-anchor="start" fill="#888" font-size="15">Pick the protein before anything else hits the plate</text>
                    <rect x="150" y="315" width="800" height="135" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="372" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="372" text-anchor="start" fill="#fff" font-size="19">Run the five-ingredient label scan</text>
                    <text x="245" y="412" text-anchor="start" fill="#888" font-size="15">Kitchen-stranger ingredients = NOVA group 4 — swap once</text>
                    <rect x="150" y="470" width="800" height="135" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="527" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="527" text-anchor="start" fill="#fff" font-size="19">Make one refined-to-whole swap</text>
                    <text x="245" y="567" text-anchor="start" fill="#888" font-size="15">White bread to whole-grain, cereal to oats — just one</text>
                    <rect x="150" y="625" width="800" height="135" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="682" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="682" text-anchor="start" fill="#fff" font-size="19">Fill half the plate with plants</text>
                    <text x="245" y="722" text-anchor="start" fill="#888" font-size="15">Two colors per meal, toward 25-38 g fiber</text>
                    <rect x="150" y="780" width="800" height="135" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="837" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="837" text-anchor="start" fill="#fff" font-size="19">Score your day tonight</text>
                    <text x="245" y="877" text-anchor="start" fill="#888" font-size="15">Protein anchors hit? UPFs that got through? 2/3 wins</text>
                    <text x="550" y="985" text-anchor="middle" fill="#888" font-size="16">Repeat the winning day twice this week</text>
                </svg>`,
                caption: "Five moves to live the new guidelines for one full day"
            }
        },
        {
            type: "concept",
            title: "The Longevity Angle: Why This Pyramid Is in a Longevity Book",
            content: "This isn't just a nutrition-policy story — the new pyramid is a **longevity intervention** wearing a government logo. Connect it to the evidence you'll meet across this book:\n\n• **The Mediterranean overlap.** The new pyramid's pattern — plants, legumes, fish, olive oil, minimal processing — is essentially the diet tested in **PREDIMED (NEJM)**, the Spanish randomized trial where a Mediterranean pattern cut major cardiovascular events by about **30%**.\n\n• **The brain bonus.** The **MIND diet** (Morris 2015) — greens, berries, nuts, fish, beans — was associated with a **~53% lower Alzheimer's risk** in high adherers. Observational, yes, but it's the same real-food architecture.\n\n• **The Blue Zones echo.** The famous long-lived regions share a pattern: plants, beans, movement, purpose, community. Honest note: **Newman's 2024 analysis** showed record-keeping errors inflate some extreme-age claims — but the *dietary pattern* those regions share matches what the trials found anyway. The pattern stands even where the birth certificates wobble.\n\n• **The hallmarks connection.** Whole food, adequate protein, and stable glucose speak directly to **deregulated nutrient sensing** — the insulin/IGF-1, mTOR, and AMPK pathways from Lesson 1.\n\nWhen policy, trials, and the world's longest-lived kitchens all point the same direction, that's about as close to certainty as nutrition science gets.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ALL ROADS, ONE PATTERN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four evidence streams converge on real food</text>
                    <circle cx="550" cy="600" r="130" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="585" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">REAL FOOD</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="16">plants + protein</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="16">minimal processing</text>
                    <rect x="80" y="180" width="420" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">PREDIMED RCT (NEJM)</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="15">Mediterranean diet: ~30% fewer</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="15">cardiovascular events</text>
                    <line x1="330" y1="330" x2="470" y2="510" stroke="#ef4444" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="600" y="180" width="420" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">MIND DIET (Morris 2015)</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="15">~53% lower Alzheimer's risk</text>
                    <text x="810" y="303" text-anchor="middle" fill="#888" font-size="14">observational, high adherers</text>
                    <line x1="770" y1="330" x2="630" y2="510" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="80" y="800" width="420" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="855" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">BLUE ZONES PATTERN</text>
                    <text x="290" y="895" text-anchor="middle" fill="#fff" font-size="15">Plants, beans, movement, purpose</text>
                    <text x="290" y="925" text-anchor="middle" fill="#888" font-size="13">(age records questioned — Newman 2024 —</text>
                    <text x="290" y="947" text-anchor="middle" fill="#888" font-size="13">but the shared diet matches trial data)</text>
                    <line x1="330" y1="800" x2="470" y2="690" stroke="#10b981" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="600" y="800" width="420" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="855" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">2026 GUIDELINES</text>
                    <text x="810" y="895" text-anchor="middle" fill="#fff" font-size="15">New pyramid: real food base,</text>
                    <text x="810" y="925" text-anchor="middle" fill="#fff" font-size="15">protein each meal, UPFs demoted</text>
                    <line x1="770" y1="800" x2="630" y2="690" stroke="#6366f1" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                </svg>`,
                caption: "Trials, cohorts, long-lived regions, and now federal policy agree"
            }
        },
        {
            type: "quote",
            content: "Eat food. Not too much. Mostly plants.",
            author: "Michael Pollan, In Defense of Food (2008) — eighteen years before it became official policy",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="20">Seven words that aged perfectly</text>
                    <rect x="100" y="220" width="900" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="330" text-anchor="middle" fill="#fff" font-style="italic" font-size="40">"Eat food. Not too much.</text>
                    <text x="550" y="400" text-anchor="middle" fill="#fff" font-style="italic" font-size="40">Mostly plants."</text>
                    <text x="940" y="470" text-anchor="end" fill="#8b5cf6" font-size="18">— Michael Pollan, 2008</text>
                    <rect x="150" y="600" width="800" height="220" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">18 YEARS AHEAD OF POLICY</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="17">'Eat food' meant real food, not edible</text>
                    <text x="550" y="748" text-anchor="middle" fill="#fff" font-size="17">food-like substances — in 2026, the US</text>
                    <text x="550" y="781" text-anchor="middle" fill="#fff" font-size="17">Dietary Guidelines finally agreed</text>
                </svg>`,
                caption: "Pollan's 2008 maxim became the 2026 pyramid's core message"
            }
        },
        {
            type: "quiz",
            question: "Which of these did the 2025-2030 Dietary Guidelines KEEP from previous guidance?",
            options: [
                { text: "The recommendation to eat 6-11 servings of grains, including refined grains", correct: false },
                { text: "Whole grains, fruits and vegetables, fiber targets, and the ~2,300 mg sodium limit", correct: true },
                { text: "The MyPlate icon, now updated with an ultra-processed food warning", correct: false },
                { text: "The 0.8 g/kg protein RDA as the recommended target for healthy adults", correct: false }
            ],
            explanation: "The new guidelines kept what decades of evidence still supports: whole grains, produce as the plate's workhorse, fiber goals of 25-38 g/day, sodium under ~2,300 mg, and added-sugar limits. The MyPlate icon itself was retired and replaced by the redesigned pyramid; the 6-11 refined-grain servings died with the 1992 pyramid; and the 0.8 g/kg RDA was superseded by the 1.2-1.6 g/kg adult range — the subject of the next lesson.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">KEPT VS. RETIRED</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">The 2026 guidelines changed some rules</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">and deliberately preserved others</text>
                    <rect x="150" y="400" width="380" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">STILL STANDING?</text>
                    <text x="340" y="525" text-anchor="middle" fill="#fff" font-size="16">Whole grains? Sodium caps?</text>
                    <text x="340" y="560" text-anchor="middle" fill="#fff" font-size="16">Fiber targets? Produce?</text>
                    <rect x="570" y="400" width="380" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="465" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">RETIRED?</text>
                    <text x="760" y="525" text-anchor="middle" fill="#fff" font-size="16">MyPlate icon? 6-11 grain</text>
                    <text x="760" y="560" text-anchor="middle" fill="#fff" font-size="16">servings? 0.8 g/kg as target?</text>
                    <rect x="250" y="710" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ffd700" font-size="19">Sort the survivors from</text>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="19">the casualties</text>
                </svg>`,
                caption: "Can you separate what stayed from what went?"
            }
        }
    ]
},
{
    id: 3,
    title: "The Protein Revolution: 1.2-1.6 g/kg",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Number That Stood Still for 70 Years",
            content: "Since the 1950s, one number has quietly shaped every school lunch, hospital tray, and nutrition label in America: **0.8 grams of protein per kilogram of body weight per day** — the official RDA.\n\nHere's what almost nobody was told: that number was never a target for thriving. It was calculated from **nitrogen balance studies** as the *minimum* to prevent deficiency in young, healthy adults. It's the protein equivalent of 'the least amount of water that keeps you from dehydrating' — a floor, not an optimum. And it barely budged for roughly **70 years**.\n\nMeanwhile, the science moved. Muscle biopsies, stable-isotope tracer studies, and aging research revealed that adults — especially past 50 — need substantially more protein to hold onto muscle, and that *when* and *how* you eat it matters almost as much as how much.\n\nOn **January 7, 2026**, the guidelines finally caught up: the new adult range is **1.2-1.6 g/kg/day** — 50 to 100% higher than the old RDA. This lesson gives you the science, the surprising paradox behind it, and the exact math for your own body.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">70 YEARS OF 0.8</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The RDA that never moved — until now</text>
                    <rect x="100" y="180" width="900" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="245" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">THE OLD RDA (~1950s-2025)</text>
                    <text x="550" y="325" text-anchor="middle" fill="#fff" font-weight="bold" font-size="58">0.8 g/kg</text>
                    <text x="550" y="385" text-anchor="middle" fill="#888" font-size="18">The minimum to avoid deficiency —</text>
                    <text x="550" y="415" text-anchor="middle" fill="#888" font-size="18">a floor mistaken for a target</text>
                    <path d="M550 470 L550 530" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="550,545 535,522 565,522" fill="#14b8a6"/>
                    <rect x="100" y="580" width="900" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE NEW RANGE (JAN 2026)</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-weight="bold" font-size="58">1.2-1.6 g/kg</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="18">50-100% higher — built for muscle,</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="18">function, and healthy aging</text>
                    <rect x="200" y="900" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">Ages 65+: about 1.0-1.5 g/kg</text>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="19">to preserve physical function</text>
                </svg>`,
                caption: "From deficiency floor to optimization range: the 2026 protein reset"
            }
        },
        {
            type: "concept",
            title: "Why 0.8 Was a Floor, Not a Finish Line",
            content: "To understand the revolution, you need to know how the old number was born.\n\nThe **0.8 g/kg RDA** came from **nitrogen balance studies**: feed people protein, measure nitrogen in versus nitrogen out (urine, sweat, stool), and find the intake where losses equal gains. Balance achieved? Deficiency prevented. Job done — *by that definition*.\n\nBut nitrogen balance answers only one question: *how little can you eat without visibly breaking down?* It says nothing about:\n\n• **Muscle preservation** through your 50s, 60s, and beyond\n• **Recovery** from illness, surgery, or hard training\n• **Satiety and body composition** — protein is the most filling macronutrient\n• **Function** — grip strength, walking speed, getting off the floor\n\nModern methods — like the **indicator amino acid oxidation (IAAO)** technique, which tracks how the body actually *uses* amino acids — consistently estimate optimal intakes **30-60% higher** than nitrogen balance suggested, even in young adults.\n\nThe deeper problem: the RDA was derived largely from studies of **healthy young men**. Applying it to a 70-year-old recovering from a hip fracture is like using a teenager's water requirement for a marathon runner in the desert.\n\nThat's why the 2025-2030 guidelines moved to **1.2-1.6 g/kg** — a range built for *optimal function*, not bare survival.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FLOOR VS. OPTIMUM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What each protein level actually buys you</text>
                    <rect x="120" y="700" width="860" height="140" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">0.8 g/kg — THE FLOOR</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="17">Prevents visible deficiency (nitrogen balance)</text>
                    <rect x="120" y="480" width="860" height="140" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="535" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">1.0-1.2 g/kg — MAINTENANCE</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="17">Holds muscle for most sedentary adults</text>
                    <rect x="120" y="260" width="860" height="140" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="315" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">1.2-1.6 g/kg — THE NEW TARGET</text>
                    <text x="550" y="360" text-anchor="middle" fill="#fff" font-size="17">Muscle preservation, satiety, recovery, function</text>
                    <path d="M550 690 L550 640" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,630 538,650 562,650" fill="#14b8a6"/>
                    <path d="M550 470 L550 420" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,410 538,430 562,430" fill="#14b8a6"/>
                    <rect x="120" y="890" width="860" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="945" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY THE FLOOR WAS TOO LOW</text>
                    <text x="550" y="990" text-anchor="middle" fill="#fff" font-size="16">IAAO amino-acid tracing estimates optimal intake 30-60%</text>
                    <text x="550" y="1020" text-anchor="middle" fill="#fff" font-size="16">above nitrogen-balance numbers — even in the young</text>
                </svg>`,
                caption: "Climbing from deficiency prevention to functional optimum"
            }
        },
        {
            type: "visual",
            title: "Your Number by Age: The Full Map",
            content: "The new guidance isn't one number — it's a range that shifts with your stage of life. General adults: **1.2-1.6 g/kg/day**. Healthy adults **65 and older: about 1.0-1.5 g/kg** to preserve physical function, with the higher end favored for anyone fighting muscle loss or recovering from illness (under clinical guidance).\n\nAthletes and hard trainers often sit at the top of the adult range. The one group that must personalize with a physician: people with **diagnosed kidney disease**, for whom protein targets are a medical decision.\n\nFind your lane on the chart — then hold onto it, because the next card does your math.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LANE BY LIFE STAGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Daily protein in g per kg of body weight</text>
                    <line x1="150" y1="880" x2="1000" y2="880" stroke="#888" stroke-width="2"/>
                    <text x="150" y="925" text-anchor="middle" fill="#888" font-size="16">0.6</text>
                    <text x="360" y="925" text-anchor="middle" fill="#888" font-size="16">1.0</text>
                    <text x="570" y="925" text-anchor="middle" fill="#888" font-size="16">1.4</text>
                    <text x="780" y="925" text-anchor="middle" fill="#888" font-size="16">1.8</text>
                    <text x="990" y="925" text-anchor="middle" fill="#888" font-size="16">2.2</text>
                    <text x="575" y="975" text-anchor="middle" fill="#888" font-size="17">g/kg/day</text>
                    <text x="160" y="215" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">OLD RDA (retired as target)</text>
                    <rect x="150" y="235" width="105" height="70" rx="12" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="202" y="278" text-anchor="middle" fill="#fff" font-size="16">0.8</text>
                    <text x="160" y="395" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">ADULTS (new 2026 range)</text>
                    <rect x="465" y="415" width="210" height="70" rx="12" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="570" y="458" text-anchor="middle" fill="#fff" font-size="16">1.2 - 1.6</text>
                    <text x="160" y="575" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">HEALTHY 65+ (preserve function)</text>
                    <rect x="360" y="595" width="262" height="70" rx="12" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="490" y="638" text-anchor="middle" fill="#fff" font-size="16">1.0 - 1.5</text>
                    <text x="160" y="755" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">HARD TRAINERS / ATHLETES</text>
                    <rect x="570" y="775" width="315" height="70" rx="12" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="727" y="818" text-anchor="middle" fill="#fff" font-size="16">1.4 - 2.0</text>
                    <rect x="150" y="1000" width="800" height="70" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="1043" text-anchor="middle" fill="#3b82f6" font-size="17">Kidney disease? Protein is a medical decision — see your doctor</text>
                </svg>`,
                caption: "The protein ranges by life stage under the 2026 guidelines"
            }
        },
        {
            type: "example",
            title: "Do the Math: What 1.2-1.6 g/kg Means for YOUR Body",
            content: "Grab your weight and a calculator — this takes 30 seconds.\n\n**Step 1: Convert to kilograms.** Divide pounds by 2.2.\n\n**Step 2: Multiply by 1.2 and by 1.6.** That's your daily range.\n\nWorked examples:\n\n• **150-lb woman** → 68 kg → **82-109 g/day**. Old RDA said 54 g. She's likely been 30-50 g short *every day*.\n\n• **180-lb man** → 82 kg → **98-131 g/day**. Old RDA said 65 g — about what he gets from one chicken breast and a protein bar, leaving him far under the new range.\n\n• **200-lb adult** → 91 kg → **109-145 g/day**. If actively losing weight, protein at the top of the range protects muscle while fat comes off.\n\n• **130-lb woman, age 70** → 59 kg → using the 65+ range of 1.0-1.5: **59-89 g/day** — yet the average older woman eats closer to 50 g.\n\nOne honest nuance: if you carry significant excess weight, many clinicians calculate from a mid-range or 'adjusted' body weight instead, since lean tissue drives the need — one more reason to confirm your personal target with your clinician or a registered dietitian.\n\nWrite your two numbers down. The rest of this lesson shows you how to hit them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">30-SECOND PROTEIN MATH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pounds / 2.2 = kg, then x 1.2 and x 1.6</text>
                    <rect x="100" y="160" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">150 lb woman</text>
                    <text x="160" y="262" text-anchor="start" fill="#888" font-size="16">= 68 kg (old RDA: 54 g)</text>
                    <text x="940" y="245" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">82-109 g/day</text>
                    <rect x="100" y="335" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="395" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">180 lb man</text>
                    <text x="160" y="437" text-anchor="start" fill="#888" font-size="16">= 82 kg (old RDA: 65 g)</text>
                    <text x="940" y="420" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">98-131 g/day</text>
                    <rect x="100" y="510" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">200 lb adult</text>
                    <text x="160" y="612" text-anchor="start" fill="#888" font-size="16">= 91 kg (top of range protects muscle in weight loss)</text>
                    <text x="940" y="595" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">109-145 g/day</text>
                    <rect x="100" y="685" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="745" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">130 lb woman, age 70</text>
                    <text x="160" y="787" text-anchor="start" fill="#888" font-size="16">= 59 kg, using 65+ range 1.0-1.5 g/kg</text>
                    <text x="940" y="770" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">59-89 g/day</text>
                    <rect x="150" y="900" width="800 " height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="955" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">YOUR TURN</text>
                    <text x="550" y="1000" text-anchor="middle" fill="#fff" font-size="17">Weight / 2.2 x 1.2 and x 1.6 — write both numbers down</text>
                </svg>`,
                caption: "Four worked examples — then calculate your own daily range"
            }
        },
        {
            type: "quiz",
            question: "Why was the original 0.8 g/kg protein RDA too low as a lifelong target?",
            options: [
                { text: "It was calculated before protein was discovered to build muscle", correct: false },
                { text: "It was the minimum to prevent deficiency from nitrogen balance studies in healthy young adults — a floor, not an optimum for muscle, function, or aging", correct: true },
                { text: "It was set high deliberately, so most people actually need less than 0.8 g/kg", correct: false },
                { text: "It only applied to athletes, so ordinary adults were never covered by it", correct: false }
            ],
            explanation: "The 0.8 g/kg RDA came from nitrogen balance studies asking one narrow question: what's the least protein that prevents measurable breakdown in healthy young adults? It never addressed muscle preservation with age, recovery, satiety, or physical function. Modern IAAO tracer methods put optimal intakes 30-60% higher even in the young. That's why the 2025-2030 guidelines raised the adult range to 1.2-1.6 g/kg — optimization replaced bare adequacy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE 0.8 QUESTION</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">What was the old RDA actually designed to do?</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">And what did it leave out?</text>
                    <rect x="150" y="400" width="380" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="470" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHAT IT MEASURED</text>
                    <text x="340" y="530" text-anchor="middle" fill="#fff" font-size="16">Nitrogen in vs. nitrogen out</text>
                    <text x="340" y="565" text-anchor="middle" fill="#888" font-size="15">in healthy young adults</text>
                    <rect x="570" y="400" width="380" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="470" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHAT IT IGNORED</text>
                    <text x="760" y="530" text-anchor="middle" fill="#fff" font-size="16">Muscle, aging, recovery,</text>
                    <text x="760" y="565" text-anchor="middle" fill="#888" font-size="15">satiety, physical function</text>
                    <rect x="250" y="710" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ffd700" font-size="19">Floor or finish line —</text>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="19">which was 0.8 g/kg?</text>
                </svg>`,
                caption: "Test your grasp of why the old RDA fell short"
            }
        },
        {
            type: "concept",
            title: "The Protein Paradox: When More Becomes Better",
            content: "Here's the twist that confused the field for a decade — and explains why age matters so much.\n\nIn **2014, Morgan Levine and Valter Longo's team** published a headline-grabbing analysis in *Cell Metabolism*. Following thousands of US adults, they found:\n\n• **Under age ~65**: people eating **high-protein** diets had substantially *higher* mortality — including roughly a fourfold increase in cancer death risk in the high-protein group — while **lower protein** looked protective.\n\n• **Over age 65**: the association *flipped completely*. Higher protein now associated with **lower** mortality — older adults eating more protein died less, including less from cancer.\n\nThe proposed biology: in midlife, high protein keeps growth pathways like **IGF-1 and mTOR** revved up, which may favor cellular aging and tumor growth. But in late life, IGF-1 falls off a cliff, and the dominant threat is no longer overgrowth — it's **wasting**: losing the muscle that keeps you alive and independent.\n\nTwo honest caveats: this was **observational** data (association, not proof), and the same study found the midlife risk was much weaker when protein came from **plants**.\n\nThe deep lesson isn't 'avoid protein young, load up old.' It's that **protein needs are age-dependent** — and past 50-65, the danger of too little decisively outweighs the theoretical risk of too much. The next card shows the machinery behind the flip.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LEVINE 2014 PARADOX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cell Metabolism — the association that flips at ~65</text>
                    <rect x="60" y="180" width="460" height="420" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">UNDER ~65</text>
                    <text x="290" y="300" text-anchor="middle" fill="#fff" font-size="17">High protein associated with</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="17">HIGHER mortality</text>
                    <text x="290" y="390" text-anchor="middle" fill="#888" font-size="15">~4x cancer death risk in the</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="15">high-protein group (observational)</text>
                    <text x="290" y="480" text-anchor="middle" fill="#fff" font-size="16">Proposed driver: IGF-1 and</text>
                    <text x="290" y="512" text-anchor="middle" fill="#fff" font-size="16">mTOR growth signaling stays high</text>
                    <text x="290" y="565" text-anchor="middle" fill="#888" font-size="14">Risk weaker when protein was plant-based</text>
                    <rect x="580" y="180" width="460" height="420" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">OVER 65</text>
                    <text x="810" y="300" text-anchor="middle" fill="#fff" font-size="17">Higher protein associated with</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="17">LOWER mortality</text>
                    <text x="810" y="390" text-anchor="middle" fill="#888" font-size="15">The association fully reversed —</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="15">including cancer deaths</text>
                    <text x="810" y="480" text-anchor="middle" fill="#fff" font-size="16">IGF-1 declines steeply with age;</text>
                    <text x="810" y="512" text-anchor="middle" fill="#fff" font-size="16">the new threat is muscle wasting</text>
                    <text x="810" y="565" text-anchor="middle" fill="#888" font-size="14">Too little protein becomes the danger</text>
                    <path d="M520 390 L580 390" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="580,390 564,380 564,400" fill="#14b8a6"/>
                    <rect x="100" y="680" width="900 " height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">THE REAL LESSON</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="18">Protein needs are age-dependent — and past 50-65,</text>
                    <text x="550" y="825" text-anchor="middle" fill="#fff" font-size="18">too little is far more dangerous than too much</text>
                    <text x="550" y="950" text-anchor="middle" fill="#888" font-size="16">Observational data — association, not proof. But the flip shaped the new guidelines.</text>
                </svg>`,
                caption: "Levine 2014: the protein-mortality association reverses around age 65"
            }
        },
        {
            type: "concept",
            title: "Why Aging Flips the Need: Sarcopenia and Anabolic Resistance",
            content: "Two biological forces explain why your protein requirement *rises* just as your appetite typically falls:\n\n**1. Sarcopenia — the silent muscle theft.** Starting around age 30, adults lose roughly **3-8% of muscle mass per decade**, and the drain accelerates after 60. By their 80s, many people have lost **30% or more** of peak muscle. This isn't cosmetic: muscle is your glucose sink (protecting against diabetes), your metabolic engine, your fall protection, and your survival reserve for surviving illness, surgery, and hospital stays. Recall from Lesson 1: in the PURE study (*Lancet* 2015), grip strength predicted death better than blood pressure.\n\n**2. Anabolic resistance — the muffled signal.** Young muscle responds to a modest 15 g dose of protein by switching on **muscle protein synthesis (MPS)**. Older muscle becomes partially 'deaf' to the same signal — the identical dose produces a much weaker building response. The machinery still works; it just needs a **louder knock**: more protein per sitting, ideally paired with resistance exercise, which restores much of the sensitivity.\n\nPut the two together and the paradox resolves: aging bodies *waste faster* while *responding less* to each meal. That's why the 65+ guidance (**~1.0-1.5 g/kg**) sits so far above the old 0.8 floor — and why the *per-meal dose* on the next card matters as much as the daily total.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DOUBLE SQUEEZE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why older bodies need MORE protein, not less</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SARCOPENIA</text>
                    <text x="290" y="270" text-anchor="middle" fill="#888" font-size="15">Muscle loss with age</text>
                    <rect x="130" y="310" width="80" height="150" rx="8" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="170" y="500" text-anchor="middle" fill="#888" font-size="14">Age 30</text>
                    <rect x="250" y="350" width="80" height="110" rx="8" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="500" text-anchor="middle" fill="#888" font-size="14">Age 60</text>
                    <rect x="370" y="390" width="80" height="70" rx="8" fill="rgba(239,68,68,0.4)" stroke="#ef4444" stroke-width="2"/>
                    <text x="410" y="500" text-anchor="middle" fill="#888" font-size="14">Age 80</text>
                    <text x="290" y="535" text-anchor="middle" fill="#fff" font-size="15">3-8% lost per decade, faster after 60</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">ANABOLIC RESISTANCE</text>
                    <text x="810" y="270" text-anchor="middle" fill="#888" font-size="15">Same dose, weaker response</text>
                    <text x="700" y="330" text-anchor="middle" fill="#fff" font-size="15">Young muscle:</text>
                    <text x="700" y="360" text-anchor="middle" fill="#10b981" font-size="15">15 g switches MPS on</text>
                    <text x="920" y="330" text-anchor="middle" fill="#fff" font-size="15">Older muscle:</text>
                    <text x="920" y="360" text-anchor="middle" fill="#ef4444" font-size="15">15 g barely registers</text>
                    <rect x="640" y="410" width="340" height="110" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="16">THE FIX: a louder knock</text>
                    <text x="810" y="492" text-anchor="middle" fill="#fff" font-size="14">25-30 g per meal + resistance training</text>
                    <rect x="100" y="620" width="900" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY MUSCLE = SURVIVAL</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">Glucose sink, metabolic engine, fall protection,</text>
                    <text x="550" y="758" text-anchor="middle" fill="#fff" font-size="17">and your reserve for surviving illness and surgery</text>
                    <rect x="200" y="860" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="18">Wasting faster + responding less =</text>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="18">the need rises exactly when appetite falls</text>
                </svg>`,
                caption: "Sarcopenia plus anabolic resistance: the biology behind the higher 65+ target"
            }
        },
        {
            type: "concept",
            title: "The Per-Meal Rule: 25-30 Grams and the Leucine Trigger",
            content: "Your daily total is only half the story. Muscle protein synthesis works like a **light switch, not a dimmer** — each meal either flips it on or doesn't.\n\n• **The threshold**: about **25-30 g of protein per meal** reliably triggers MPS in most adults (older adults sit at the higher end — some research suggests up to 35-40 g).\n\n• **The trigger molecule**: the amino acid **leucine**. Roughly **2.5-3 g of leucine** in one sitting is what actually flips the switch. A 30-g serving of most animal proteins clears the bar automatically; plant meals often need bigger portions or combinations.\n\n• **Why distribution beats loading**: the switch can only stay 'on' for a few hours per activation. The classic American pattern — 10 g at breakfast (toast, coffee), 20 g at lunch (sandwich), 60 g at dinner (giant entrée) — hits the trigger *once* and wastes the surplus, because excess protein beyond the synthesis ceiling gets oxidized for energy, not banked as muscle.\n\n• **The better pattern**: the same 90 g split as **30 / 30 / 30** flips the switch **three times a day** — three building windows instead of one. This is precisely why the new pyramid says *a protein serving at each meal* rather than 'get protein daily.'\n\nBreakfast is where almost everyone loses this game. Fix breakfast, and the day usually fixes itself.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 30-GRAM SWITCH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same 90 g/day — one trigger vs. three</text>
                    <text x="130" y="190" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">TYPICAL PATTERN: one switch flip</text>
                    <rect x="130" y="220" width="250" height="180" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="255" y="270" text-anchor="middle" fill="#888" font-size="15">Breakfast</text>
                    <text x="255" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">10 g</text>
                    <text x="255" y="370" text-anchor="middle" fill="#ef4444" font-size="14">below threshold</text>
                    <rect x="425" y="220" width="250" height="180" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="15">Lunch</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">20 g</text>
                    <text x="550" y="370" text-anchor="middle" fill="#ef4444" font-size="14">below threshold</text>
                    <rect x="720" y="220" width="250" height="180" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="845" y="270" text-anchor="middle" fill="#888" font-size="15">Dinner</text>
                    <text x="845" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">60 g</text>
                    <text x="845" y="370" text-anchor="middle" fill="#f59e0b" font-size="14">surplus oxidized</text>
                    <text x="130" y="500" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">OPTIMAL PATTERN: three switch flips</text>
                    <rect x="130" y="530" width="250" height="180" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="255" y="580" text-anchor="middle" fill="#888" font-size="15">Breakfast</text>
                    <text x="255" y="630" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">30 g</text>
                    <text x="255" y="680" text-anchor="middle" fill="#10b981" font-size="14">MPS ON</text>
                    <rect x="425" y="530" width="250" height="180" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="15">Lunch</text>
                    <text x="550" y="630" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">30 g</text>
                    <text x="550" y="680" text-anchor="middle" fill="#10b981" font-size="14">MPS ON</text>
                    <rect x="720" y="530" width="250" height="180" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="845" y="580" text-anchor="middle" fill="#888" font-size="15">Dinner</text>
                    <text x="845" y="630" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">30 g</text>
                    <text x="845" y="680" text-anchor="middle" fill="#10b981" font-size="14">MPS ON</text>
                    <rect x="130" y="780" width="840" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE TRIGGER: ~2.5-3 g LEUCINE PER MEAL</text>
                    <text x="550" y="878" text-anchor="middle" fill="#fff" font-size="16">Most 30 g animal-protein servings clear it; plant meals may need more volume</text>
                    <rect x="230" y="960" width="640" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="18">Fix breakfast and the day fixes itself</text>
                </svg>`,
                caption: "Muscle protein synthesis is a switch — flip it at every meal, not just dinner"
            }
        },
        {
            type: "example",
            title: "What 30 Grams Actually Looks Like on a Plate",
            content: "Numbers become habits only when you can *see* them. Each of these delivers roughly **30 g of protein** — one MPS trigger:\n\n**Animal-based (leucine bar cleared easily):**\n• **4 oz (120 g) chicken breast** — about the size of your palm\n• **5 oz salmon fillet** — plus omega-3s\n• **5 eggs**, or 3 eggs + 2 slices of smoked salmon\n• **1 cup (225 g) plain Greek yogurt** + a handful of almonds\n• **1.25 cups cottage cheese**\n• **1 scoop whey protein** (24-27 g) + a splash of milk\n\n**Plant-based (aim for volume + combinations):**\n• **1.5 cups cooked lentils** (~27 g) + a slice of whole-grain bread\n• **1 block (350 g) firm tofu**, or 1 cup tempeh\n• **1 cup edamame + 2 tbsp peanut butter on whole-grain toast**\n• **Soy milk smoothie**: 1.5 cups soy milk + 3 tbsp hemp seeds + oats\n\nAnchor each meal with ONE item from this list and your daily math nearly solves itself: three anchors ≈ 90 g, plus the incidental protein in grains, vegetables, and snacks typically carries a 68-kg person into the **1.2-1.6 g/kg** zone without a spreadsheet.\n\nTonight's test: which anchor is tomorrow's breakfast?",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 30-GRAM MENU</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Each item = one muscle-building trigger</text>
                    <rect x="60" y="170" width="460" height="560" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">ANIMAL-BASED</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">4 oz chicken breast</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="17">5 oz salmon fillet</text>
                    <text x="290" y="405" text-anchor="middle" fill="#fff" font-size="17">5 eggs</text>
                    <text x="290" y="460" text-anchor="middle" fill="#fff" font-size="17">1 cup Greek yogurt + almonds</text>
                    <text x="290" y="515" text-anchor="middle" fill="#fff" font-size="17">1.25 cups cottage cheese</text>
                    <text x="290" y="570" text-anchor="middle" fill="#fff" font-size="17">1 scoop whey + milk</text>
                    <text x="290" y="650" text-anchor="middle" fill="#888" font-size="15">Leucine bar (~2.5-3 g)</text>
                    <text x="290" y="680" text-anchor="middle" fill="#888" font-size="15">cleared automatically</text>
                    <rect x="580" y="170" width="460" height="560" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PLANT-BASED</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">1.5 cups lentils + bread</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="17">1 block firm tofu (350 g)</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="17">1 cup tempeh</text>
                    <text x="810" y="460" text-anchor="middle" fill="#fff" font-size="17">Edamame + peanut butter toast</text>
                    <text x="810" y="515" text-anchor="middle" fill="#fff" font-size="17">Soy milk + hemp seed smoothie</text>
                    <text x="810" y="570" text-anchor="middle" fill="#fff" font-size="17">Beans + rice + pumpkin seeds</text>
                    <text x="810" y="650" text-anchor="middle" fill="#888" font-size="15">Aim for bigger volume or</text>
                    <text x="810" y="680" text-anchor="middle" fill="#888" font-size="15">combinations to hit leucine</text>
                    <rect x="150" y="790" width="800" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE SHORTCUT</text>
                    <text x="550" y="895" text-anchor="middle" fill="#fff" font-size="17">One anchor per meal = ~90 g/day before snacks —</text>
                    <text x="550" y="928" text-anchor="middle" fill="#fff" font-size="17">most people reach 1.2-1.6 g/kg without counting</text>
                </svg>`,
                caption: "Visual portions that each deliver one ~30 g protein trigger"
            }
        },
        {
            type: "concept",
            title: "Animal vs. Plant: Quality, Completeness, and Smart Combining",
            content: "Not all protein grams are equal — but the differences are manageable once you know three ideas:\n\n**1. Completeness.** Your body builds muscle from 20 amino acids; **9 are essential** (you must eat them). Animal proteins — eggs, dairy, meat, fish — contain all nine in strong ratios. Most single plant foods run low in one: grains skimp on **lysine**, legumes on **methionine**.\n\n**2. Quality scores and leucine density.** On scientific scales like **DIAAS**, whey, eggs, and milk score at the top; soy ranks as the strongest common plant protein; most other plants score lower — partly from amino profile, partly digestibility. Practically: a plant-based eater may need **10-20% more total grams** and slightly bigger per-meal doses to hit the same **2.5-3 g leucine** trigger.\n\n**3. Combining solves completeness.** The classic pairings cover each other's gaps — **rice + beans**, **hummus + whole-wheat pita**, **peanut butter + whole-grain bread**, **lentils + barley**. You don't even need them in the same bite; the same day works.\n\nAnd remember the Levine 2014 detail: in midlife, **plant-forward protein looked far safer** in the observational data. The evidence-backed sweet spot for most people: a *mix* — soy, legumes, and nuts sharing the plate with fish, eggs, and dairy, with red and processed meat playing the minor role the Harvard plate assigned them back in 2011.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROTEIN QUALITY 101</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Completeness, leucine, and smart pairing</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">ANIMAL PROTEINS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="16">All 9 essential aminos, strong ratios</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="16">Top DIAAS: whey, eggs, milk</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="16">30 g serving clears leucine bar</text>
                    <text x="290" y="435" text-anchor="middle" fill="#888" font-size="15">Watch: limit red and</text>
                    <text x="290" y="465" text-anchor="middle" fill="#888" font-size="15">processed meat</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PLANT PROTEINS</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="16">Soy = strongest common plant source</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="16">Grains low in lysine, legumes</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="16">low in methionine</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="15">Plan ~10-20% more grams and</text>
                    <text x="810" y="440" text-anchor="middle" fill="#888" font-size="15">bigger doses to hit leucine</text>
                    <text x="810" y="470" text-anchor="middle" fill="#888" font-size="15">Bonus: safer midlife signal (Levine)</text>
                    <rect x="100" y="560" width="900" height="230" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">COMBINING COVERS THE GAPS</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="17">Rice + beans | Hummus + pita | Peanut butter + whole grain</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">Lentils + barley | Tofu + quinoa</text>
                    <text x="550" y="755" text-anchor="middle" fill="#888" font-size="15">Same day is fine — they don't need to share a bite</text>
                    <rect x="150" y="850" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE SWEET SPOT: A MIX</text>
                    <text x="550" y="950" text-anchor="middle" fill="#fff" font-size="17">Soy, legumes, nuts + fish, eggs, dairy —</text>
                    <text x="550" y="982" text-anchor="middle" fill="#fff" font-size="17">red and processed meat in the minor role</text>
                </svg>`,
                caption: "Animal completeness vs. plant safety signal — the mix wins"
            }
        },
        {
            type: "application",
            title: "Hit Your Number Starting Tomorrow",
            content: "Turn the science into a week of automatic habits:\n\n1. **Do your math tonight** — Weight in pounds / 2.2 = kg. Multiply by 1.2 and 1.6 (or 1.0-1.5 if you're 65+). Write the range on a sticky note where you eat breakfast.\n\n2. **Rebuild breakfast first** — It's the meal that's almost always 10-15 g short. Greek yogurt + nuts, 3-4 eggs, or a whey/soy smoothie gets you to 25-30 g before 9 a.m.\n\n3. **Assign one anchor per meal** — From the 30-gram menu: palm-size meat or fish, a block of tofu, a cup of Greek yogurt, 1.5 cups of lentils. Choose tomorrow's three anchors *tonight*.\n\n4. **Count one full day** — Just once this week, tally your actual grams with a food app or label math. Most people discover they're 30-50 g under — you can't fix what you haven't measured.\n\n5. **Pair protein with resistance** — Two strength sessions this week make every gram count double: exercise is the strongest known antidote to anabolic resistance.\n\nCheck with your clinician first if you have kidney disease or are on a medically managed diet. For everyone else: the floor era is over — eat to the range your muscles actually need.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR PROTEIN WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves from floor to optimum</text>
                    <rect x="150" y="160" width="800" height="135" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="217" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="217" text-anchor="start" fill="#fff" font-size="19">Do your math tonight</text>
                    <text x="245" y="257" text-anchor="start" fill="#888" font-size="15">lbs / 2.2 x 1.2 and x 1.6 — sticky note it</text>
                    <rect x="150" y="315" width="800" height="135" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="372" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="372" text-anchor="start" fill="#fff" font-size="19">Rebuild breakfast first</text>
                    <text x="245" y="412" text-anchor="start" fill="#888" font-size="15">25-30 g before 9 a.m. — yogurt, eggs, or smoothie</text>
                    <rect x="150" y="470" width="800" height="135" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="527" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="527" text-anchor="start" fill="#fff" font-size="19">Assign one anchor per meal</text>
                    <text x="245" y="567" text-anchor="start" fill="#888" font-size="15">Pick tomorrow's three anchors tonight</text>
                    <rect x="150" y="625" width="800" height="135" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="682" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="682" text-anchor="start" fill="#fff" font-size="19">Count one full day</text>
                    <text x="245" y="722" text-anchor="start" fill="#888" font-size="15">Most people find they are 30-50 g under</text>
                    <rect x="150" y="780" width="800" height="135" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="837" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="837" text-anchor="start" fill="#fff" font-size="19">Pair protein with resistance training</text>
                    <text x="245" y="877" text-anchor="start" fill="#888" font-size="15">2 sessions/week — the antidote to anabolic resistance</text>
                    <text x="550" y="985" text-anchor="middle" fill="#888" font-size="16">Kidney disease or medical diets: clinician first</text>
                </svg>`,
                caption: "Five steps that move you from the 0.8 floor to the 1.2-1.6 range"
            }
        },
        {
            type: "quiz",
            question: "A healthy 72-year-old eats 10 g of protein at breakfast, 20 g at lunch, and 60 g at dinner (90 g total). Based on this lesson, what is the main problem with this pattern?",
            options: [
                { text: "Her daily total is too high for her age and risks overworking healthy kidneys", correct: false },
                { text: "Her total is reasonable for 65+, but the skewed distribution means only dinner flips the muscle-building switch — breakfast and lunch fall below the ~25-30 g threshold, and dinner's surplus is largely oxidized", correct: true },
                { text: "At 72 she should be eating less protein than younger adults, so all three meals are oversized", correct: false },
                { text: "Nothing is wrong — as long as the daily total is met, meal timing has no effect on muscle protein synthesis", correct: false }
            ],
            explanation: "At ~59-70 kg, 90 g/day sits comfortably within the 65+ guidance of about 1.0-1.5 g/kg — the total is fine, and higher protein associates with LOWER mortality after 65 (Levine 2014). The problem is distribution: with anabolic resistance, meals below ~25-30 g (and ~2.5-3 g leucine) barely flip the MPS switch, while the 60-g dinner exceeds the ceiling and the surplus is burned as fuel. Redistributing to roughly 30/30/30 turns one building window into three.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE CASE OF THE 72-YEAR-OLD</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">90 g/day, split 10 / 20 / 60</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">Is the problem the total, the timing, or both?</text>
                    <rect x="130" y="410" width="250" height="170" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="255" y="465" text-anchor="middle" fill="#888" font-size="15">Breakfast</text>
                    <text x="255" y="515" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">10 g</text>
                    <text x="255" y="555" text-anchor="middle" fill="#ef4444" font-size="14">switch OFF?</text>
                    <rect x="425" y="410" width="250" height="170" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="465" text-anchor="middle" fill="#888" font-size="15">Lunch</text>
                    <text x="550" y="515" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">20 g</text>
                    <text x="550" y="555" text-anchor="middle" fill="#ef4444" font-size="14">switch OFF?</text>
                    <rect x="720" y="410" width="250" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="845" y="465" text-anchor="middle" fill="#888" font-size="15">Dinner</text>
                    <text x="845" y="515" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">60 g</text>
                    <text x="845" y="555" text-anchor="middle" fill="#f59e0b" font-size="14">surplus wasted?</text>
                    <rect x="250" y="680" width="600 " height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="730" text-anchor="middle" fill="#ffd700" font-size="19">Apply the paradox, the threshold,</text>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="19">and the 65+ range together</text>
                </svg>`,
                caption: "The capstone question: total, timing, and age in one scenario"
            }
        },
        {
            type: "quote",
            content: "Muscle is the organ of longevity. We don't stop moving because we grow old — we grow old because we lose the muscle that lets us move.",
            author: "Adapted from the sarcopenia research tradition of Irwin Rosenberg, who coined the term in 1988",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="20">The idea that renamed aging</text>
                    <rect x="100" y="200" width="900" height="330" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="290" text-anchor="start" fill="#fff" font-style="italic" font-size="23">"Muscle is the organ of longevity.</text>
                    <text x="160" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="23">We don't stop moving because we grow old —</text>
                    <text x="160" y="390" text-anchor="start" fill="#fff" font-style="italic" font-size="23">we grow old because we lose</text>
                    <text x="160" y="440" text-anchor="start" fill="#fff" font-style="italic" font-size="23">the muscle that lets us move."</text>
                    <text x="940" y="500" text-anchor="end" fill="#8b5cf6" font-size="17">— after Irwin Rosenberg, who named sarcopenia (1988)</text>
                    <rect x="150" y="610" width="800" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">YOUR TAKEAWAY</text>
                    <text x="550" y="722" text-anchor="middle" fill="#fff" font-size="17">1.2-1.6 g/kg, ~30 g per meal, leucine trigger,</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="17">strength training — protect the organ of longevity</text>
                </svg>`,
                caption: "Sarcopenia has a name since 1988 — and now, a countermeasure plan"
            }
        }
    ]
},
{
    id: 4,
    title: "Eat Real Food: The Ultra-Processed Verdict",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Experiment That Ended the Debate",
            content: "In 2019, twenty adults moved into a ward at the National Institutes of Health and let a scientist named Kevin Hall control every bite they ate for a month. Two weeks on ultra-processed food, two weeks on whole food — same calories offered, same protein, same sugar, same fiber on paper. They could eat as much or as little as they wanted.\n\nOn the ultra-processed diet, the same people ate about **500 extra calories every single day** — without noticing, without feeling greedier, without being hungrier. In two weeks they gained roughly two pounds. On whole food, they lost two.\n\nThat single study explains more about modern weight gain than a decade of diet books. And it is why, for the first time ever, the **2025–2030 Dietary Guidelines for Americans** tell you plainly: eat real food. This lesson shows you what 'ultra-processed' actually means, why it hijacks your appetite, and how to de-process your kitchen without going full monk.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NIH WARD EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hall 2019 — same offered calories, free to eat</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">ULTRA-PROCESSED</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="20">2 weeks, eat freely</text>
                    <text x="290" y="360" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="52">+500 kcal</text>
                    <text x="290" y="405" text-anchor="middle" fill="#888" font-size="18">extra per day, unnoticed</text>
                    <text x="290" y="470" text-anchor="middle" fill="#fff" font-size="22">Weight: gained ~2 lb</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">UNPROCESSED</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="20">2 weeks, eat freely</text>
                    <text x="810" y="360" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="52">Baseline</text>
                    <text x="810" y="405" text-anchor="middle" fill="#888" font-size="18">appetite self-regulated</text>
                    <text x="810" y="470" text-anchor="middle" fill="#fff" font-size="22">Weight: lost ~2 lb</text>
                    <rect x="100" y="620" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SAME PEOPLE. SAME MENU MACROS.</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="20">The only variable was the degree of processing</text>
                    <text x="550" y="748" text-anchor="middle" fill="#888" font-size="17">Randomized crossover trial, NIH metabolic ward</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Processing itself changes how much you eat</text>
                </svg>`,
                caption: "Two weeks of ultra-processed eating added ~500 calories a day — automatically"
            }
        },
        {
            type: "concept",
            title: "NOVA: The Four Groups Hiding in Your Grocery Store",
            content: "Nutrition scientists needed a way to talk about processing, not just nutrients. The answer is the **NOVA classification**, developed by Carlos Monteiro's team in Brazil, which sorts everything you eat into four groups:\n\n• **Group 1 — Unprocessed or minimally processed**: foods as nature made them, perhaps cleaned, frozen, or ground. Apples, eggs, oats, frozen broccoli, plain yogurt, dried beans.\n\n• **Group 2 — Processed culinary ingredients**: things you cook WITH. Olive oil, butter, salt, honey, vinegar.\n\n• **Group 3 — Processed foods**: Group 1 plus Group 2, made for preservation. Canned tuna, cheese, sourdough bread, canned tomatoes.\n\n• **Group 4 — Ultra-processed foods (UPF)**: industrial formulations made mostly FROM food-derived substances — protein isolates, modified starches, refined oils — plus additives you would never keep in your pantry: emulsifiers, colorings, flavor compounds, sweeteners.\n\nThe practical test: could you make it in a home kitchen from grocery ingredients? Sourdough bread, yes. A shelf-stable snack cake with 35 ingredients, never.\n\nRoughly **58% of calories in the American diet** now come from Group 4 — and for kids it is closer to two-thirds.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NOVA LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four groups, from orchard to factory</text>
                    <rect x="100" y="150" width="900" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="205" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">GROUP 1 — MINIMALLY PROCESSED</text>
                    <text x="150" y="243" text-anchor="start" fill="#fff" font-size="19">Apples, eggs, oats, beans, frozen broccoli</text>
                    <text x="150" y="275" text-anchor="start" fill="#888" font-size="16">Nature's food, maybe cleaned or frozen</text>
                    <rect x="100" y="330" width="900" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="385" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">GROUP 2 — CULINARY INGREDIENTS</text>
                    <text x="150" y="423" text-anchor="start" fill="#fff" font-size="19">Olive oil, butter, salt, honey, vinegar</text>
                    <rect x="100" y="490" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="545" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">GROUP 3 — PROCESSED FOODS</text>
                    <text x="150" y="583" text-anchor="start" fill="#fff" font-size="19">Canned tuna, cheese, sourdough, canned tomatoes</text>
                    <rect x="100" y="650" width="900" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="150" y="705" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">GROUP 4 — ULTRA-PROCESSED</text>
                    <text x="150" y="743" text-anchor="start" fill="#fff" font-size="19">Sodas, snack cakes, instant noodles, chicken</text>
                    <text x="150" y="775" text-anchor="start" fill="#fff" font-size="19">nuggets, most packaged breads and cereals</text>
                    <text x="150" y="815" text-anchor="start" fill="#888" font-size="16">Industrial formulations + additives no kitchen owns</text>
                    <rect x="150" y="900" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="948" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">~58% of US calories are Group 4</text>
                    <text x="550" y="985" text-anchor="middle" fill="#888" font-size="17">The kitchen test: could you make it at home?</text>
                </svg>`,
                caption: "NOVA sorts food by processing — Group 4 dominates the modern diet"
            }
        },
        {
            type: "visual",
            title: "Same Aisle, Different Group",
            content: "NOVA is easiest to learn in the grocery store, where near-identical products sit in different groups. **Plain oats** are Group 1; a flavored instant-oatmeal packet with maltodextrin and 'natural flavors' is Group 4. **Plain yogurt** is Group 1; squeezable dessert-flavored yogurt tubes are Group 4. **Sourdough from flour, water, salt** is Group 3; shelf-soft sandwich bread with emulsifiers and dough conditioners is Group 4.\n\nThe pattern: it is not the food category that matters — it is what happened to it on the way to the shelf.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME AISLE, DIFFERENT GROUP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three grocery pairs that look alike</text>
                    <text x="290" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">REAL FOOD</text>
                    <text x="810" y="180" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">ULTRA-PROCESSED</text>
                    <rect x="60" y="220" width="460" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Plain rolled oats</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="17">1 ingredient: oats</text>
                    <text x="290" y="352" text-anchor="middle" fill="#10b981" font-size="16">NOVA Group 1</text>
                    <rect x="580" y="220" width="460" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Instant flavored oatmeal</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="17">Sugar, maltodextrin, flavors</text>
                    <text x="810" y="352" text-anchor="middle" fill="#ef4444" font-size="16">NOVA Group 4</text>
                    <rect x="60" y="430" width="460" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Plain whole-milk yogurt</text>
                    <text x="290" y="530" text-anchor="middle" fill="#888" font-size="17">Milk + live cultures</text>
                    <text x="290" y="562" text-anchor="middle" fill="#10b981" font-size="16">NOVA Group 1</text>
                    <rect x="580" y="430" width="460" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Dessert yogurt tubes</text>
                    <text x="810" y="530" text-anchor="middle" fill="#888" font-size="17">Sweeteners, gums, dyes</text>
                    <text x="810" y="562" text-anchor="middle" fill="#ef4444" font-size="16">NOVA Group 4</text>
                    <rect x="60" y="640" width="460" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="700" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Bakery sourdough</text>
                    <text x="290" y="740" text-anchor="middle" fill="#888" font-size="17">Flour, water, salt, time</text>
                    <text x="290" y="772" text-anchor="middle" fill="#10b981" font-size="16">NOVA Group 3</text>
                    <rect x="580" y="640" width="460" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="700" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">Shelf-soft sandwich bread</text>
                    <text x="810" y="740" text-anchor="middle" fill="#888" font-size="17">Emulsifiers, conditioners</text>
                    <text x="810" y="772" text-anchor="middle" fill="#ef4444" font-size="16">NOVA Group 4</text>
                    <rect x="150" y="870" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="912" text-anchor="middle" fill="#ffd700" font-size="20">It is not the food category —</text>
                    <text x="550" y="944" text-anchor="middle" fill="#ffd700" font-size="20">it is what happened on the way to the shelf</text>
                </svg>`,
                caption: "Three near-identical grocery pairs, one processing gap"
            }
        },
        {
            type: "example",
            title: "Inside the Hall Study: What 500 Extra Calories Looks Like",
            content: "The **Hall 2019 trial** (published in Cell Metabolism) was small — 20 adults — but it was the kind of study almost never done: a **randomized controlled trial inside a locked metabolic ward**, where every gram eaten was weighed.\n\nThe details matter:\n\n• Both menus were matched for offered calories, carbs, fat, protein, sugar, sodium, and fiber — the ultra-processed arm even got fiber supplements to keep it fair\n\n• Participants rated both diets as **equally pleasant**. Nobody thought the ultra-processed food tasted better\n\n• Yet on UPF they ate **~508 kcal/day more**, mostly from carbs and fat, and mostly at breakfast and lunch\n\n• They also ate **faster** — more calories per minute — and gained about **0.9 kg (2 lb) in 14 days**, then lost the same amount in the whole-food phase\n\nThe wow moment: nobody chose to overeat. Their appetite system simply failed to register the ultra-processed calories in time. When the food environment changed, the same brains and the same willpower produced opposite results — which means your grocery cart is a more powerful tool than your discipline.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">INSIDE THE WARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hall 2019, Cell Metabolism — the details</text>
                    <rect x="80" y="160" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">MATCHED MENUS</text>
                    <text x="300" y="255" text-anchor="middle" fill="#fff" font-size="17">Same calories, macros, sugar,</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="17">sodium and fiber offered</text>
                    <rect x="580" y="160" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="215" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">EQUAL TASTE RATINGS</text>
                    <text x="800" y="255" text-anchor="middle" fill="#fff" font-size="17">Both diets rated equally</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="17">pleasant by participants</text>
                    <rect x="80" y="380" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="435" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">+508 KCAL / DAY</text>
                    <text x="300" y="475" text-anchor="middle" fill="#fff" font-size="17">Overeating on UPF, mostly</text>
                    <text x="300" y="505" text-anchor="middle" fill="#fff" font-size="17">carbs and fat, eaten faster</text>
                    <rect x="580" y="380" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">2 LB IN 14 DAYS</text>
                    <text x="800" y="475" text-anchor="middle" fill="#fff" font-size="17">Gained on UPF, lost the same</text>
                    <text x="800" y="505" text-anchor="middle" fill="#fff" font-size="17">on the whole-food phase</text>
                    <rect x="100" y="620" width="900" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">NOBODY CHOSE TO OVEREAT</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="19">The appetite system failed to register UPF calories</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="17">Same people, same willpower — opposite results</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Your cart beats your willpower</text>
                </svg>`,
                caption: "A locked-ward RCT: processing alone drove 500 extra daily calories"
            }
        },
        {
            type: "quiz",
            question: "In the Hall 2019 NIH metabolic-ward trial, what happened when participants switched to the ultra-processed diet?",
            options: [
                { text: "They ate the same calories but gained weight because UPF slows metabolism", correct: false },
                { text: "They spontaneously ate about 500 extra calories a day and gained ~2 lb in two weeks", correct: true },
                { text: "They ate more only because the ultra-processed meals tasted much better", correct: false },
                { text: "They overate at first but their appetite corrected within a few days", correct: false }
            ],
            explanation: "Participants ate roughly 508 extra calories per day on the ultra-processed diet and gained about 0.9 kg (2 lb) in 14 days — then lost it on whole food. Crucially, both diets were rated equally pleasant, so 'it just tastes better' fails as the explanation, and the overeating persisted through the whole two-week phase. Processing itself — not taste, not metabolism magic — drove the intake gap.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE HALL 2019 TRIAL</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">20 adults, NIH metabolic ward, crossover design</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Menus matched — only processing differed</text>
                    <rect x="150" y="380" width="380" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">UPF PHASE</text>
                    <text x="340" y="500" text-anchor="middle" fill="#fff" font-size="30">? kcal</text>
                    <text x="340" y="550" text-anchor="middle" fill="#888" font-size="16">What changed?</text>
                    <rect x="570" y="380" width="380" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHOLE-FOOD PHASE</text>
                    <text x="760" y="500" text-anchor="middle" fill="#fff" font-size="30">? kcal</text>
                    <text x="760" y="550" text-anchor="middle" fill="#888" font-size="16">What changed?</text>
                    <rect x="200" y="670" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="20">Both diets were rated equally pleasant —</text>
                    <text x="550" y="742" text-anchor="middle" fill="#ffd700" font-size="20">so what drove the difference?</text>
                </svg>`,
                caption: "Test your understanding of the landmark ward study"
            }
        },
        {
            type: "concept",
            title: "Why UPF Overrides Your Appetite",
            content: "Ultra-processed food is not 'bad' because of one villain nutrient. It overeats you through **engineering**:\n\n• **Hyperpalatability** — combinations of fat + sugar + salt at ratios almost never found together in nature. A potato has starch; a potato chip has starch, refined oil, and salt tuned in a lab. Your reward circuits were never calibrated for that stack\n\n• **Softness and eating speed** — industrial processing pre-chews your food. Soft, dry, calorie-dense food goes down fast, and in the Hall trial UPF meals were eaten at a significantly higher **calories-per-minute** rate. Satiety signals take ~15–20 minutes to arrive; fast food outruns them\n\n• **Calorie density** — with water and fiber stripped out, each bite carries more energy, so your stomach's stretch sensors under-report\n\n• **Additive cocktails** — emulsifiers, sweeteners, and flavorings are tested one-by-one for safety, but you eat them in combinations, dozens per day. Early research suggests some emulsifiers alter the gut microbiome and gut barrier in ways we are only beginning to map\n\nNone of this requires you to be weak-willed. It requires you to be human, with a Stone Age appetite system facing space-age food.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR APPETITE OVERRIDES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How processing outruns your satiety system</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">1. HYPERPALATABLE</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="17">Fat + sugar + salt ratios</text>
                    <text x="300" y="295" text-anchor="middle" fill="#fff" font-size="17">that nature never combined</text>
                    <text x="300" y="333" text-anchor="middle" fill="#888" font-size="15">Reward circuits overwhelmed</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">2. SOFT AND FAST</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="17">Pre-chewed texture means more</text>
                    <text x="800" y="295" text-anchor="middle" fill="#fff" font-size="17">calories per minute</text>
                    <text x="800" y="333" text-anchor="middle" fill="#888" font-size="15">Satiety needs 15-20 min to arrive</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="465" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">3. CALORIE DENSE</text>
                    <text x="300" y="505" text-anchor="middle" fill="#fff" font-size="17">Water and fiber stripped out,</text>
                    <text x="300" y="535" text-anchor="middle" fill="#fff" font-size="17">more energy in every bite</text>
                    <text x="300" y="573" text-anchor="middle" fill="#888" font-size="15">Stretch sensors under-report</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="465" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">4. ADDITIVE COCKTAILS</text>
                    <text x="800" y="505" text-anchor="middle" fill="#fff" font-size="17">Emulsifiers and sweeteners,</text>
                    <text x="800" y="535" text-anchor="middle" fill="#fff" font-size="17">tested alone, eaten together</text>
                    <text x="800" y="573" text-anchor="middle" fill="#888" font-size="15">Gut microbiome effects emerging</text>
                    <rect x="100" y="680" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THIS IS NOT A WILLPOWER PROBLEM</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="19">A Stone Age appetite system meets space-age food</text>
                    <text x="550" y="808" text-anchor="middle" fill="#888" font-size="16">The fix is upstream: change what enters the house</text>
                </svg>`,
                caption: "Four engineered features that make UPF quietly overeat you"
            }
        },
        {
            type: "concept",
            title: "2026: The Guidelines Finally Say It Out Loud",
            content: "On **January 7, 2026**, the USDA and HHS released the **2025–2030 Dietary Guidelines for Americans** — and for the first time in the guidelines' 45-year history, they explicitly warn Americans away from **ultra-processed foods**.\n\nWhat changed:\n\n• A redesigned **food pyramid replaces MyPlate**, built around one core message: **eat real food**\n\n• Explicit advice to **avoid ultra-processed foods and refined carbohydrates** — previous editions only spoke in nutrient code ('limit added sugars, sodium, saturated fat'), which UPF makers could engineer around\n\n• A **protein serving at each meal**, with the adult guidance raised to **1.2–1.6 g per kg of body weight per day** — a level meant to protect muscle as you age\n\n• Whole grains, fruits, vegetables, and sodium limits stay\n\nWhy this matters for longevity: the previous nutrient-by-nutrient approach let a snack cake qualify as acceptable if it was 'low fat.' Naming the processing pattern itself closes that loophole. Official guidance now points the same direction as the Hall trial: the shortest path to a longevity diet is not tracking twenty nutrients — it is choosing foods that never needed a label in the first place.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A 45-YEAR FIRST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">2025-2030 Dietary Guidelines, released Jan 7, 2026</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">OLD APPROACH</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">Nutrient code only:</text>
                    <text x="290" y="310" text-anchor="middle" fill="#888" font-size="17">limit sugar, sodium, sat fat</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="18">Loophole: a low-fat snack</text>
                    <text x="290" y="392" text-anchor="middle" fill="#fff" font-size="18">cake could pass the test</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">MyPlate icon, 0.8 g/kg protein</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2025-2030 APPROACH</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">Names the pattern:</text>
                    <text x="810" y="310" text-anchor="middle" fill="#888" font-size="17">avoid ultra-processed foods</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="18">New food pyramid, core</text>
                    <text x="810" y="392" text-anchor="middle" fill="#fff" font-size="18">message: eat real food</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">Protein raised to 1.2-1.6 g/kg</text>
                    <rect x="100" y="560" width="900" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHAT STAYED</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="19">Whole grains, fruits and vegetables, sodium limits</text>
                    <text x="550" y="690" text-anchor="middle" fill="#888" font-size="17">Plus protein at every meal to protect aging muscle</text>
                    <rect x="150" y="790" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="20">The best longevity foods never</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="20">needed a nutrition label at all</text>
                </svg>`,
                caption: "The first US guidelines to name ultra-processed food as the problem"
            }
        },
        {
            type: "example",
            title: "The 15-Gram Problem: America's Fiber Gap",
            content: "Here is the flip side of the ultra-processed story. Processing does not just add things — it strips out the single nutrient most consistently linked to living longer: **fiber**.\n\nThe target: **25 g/day for women, 38 g/day for men** (roughly 25–38 g depending on your size). The American average: **about 15 g** — less than half the male target. Over 90% of Americans miss the mark.\n\nWhat that gap costs you:\n\n• Fiber feeds gut bacteria that produce **short-chain fatty acids** like butyrate, which calm inflammation — one of the core hallmarks of aging\n\n• It slows glucose absorption, flattening the blood-sugar spikes that grind away at blood vessels\n\n• It binds cholesterol and lowers **ApoB**-carrying particles\n\n• In large cohort studies, every 10 g/day of additional fiber tracks with roughly **10% lower all-cause mortality**\n\nNow the practical math: one cup of cooked lentils is 15 g — a whole American day's worth in a single bowl. An apple is 4 g, a cup of raspberries 8 g, two slices of true whole-grain bread about 6 g. You do not need supplements. You need beans, berries, oats, and vegetables to reclaim the shelf space UPF took.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIBER GAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where you are vs where longevity lives</text>
                    <text x="180" y="200" text-anchor="start" fill="#fff" font-size="20">US average</text>
                    <rect x="180" y="220" width="290" height="60" rx="12" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="500" y="260" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">~15 g</text>
                    <text x="180" y="350" text-anchor="start" fill="#fff" font-size="20">Target, women</text>
                    <rect x="180" y="370" width="480" height="60" rx="12" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="690" y="410" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">25 g</text>
                    <text x="180" y="500" text-anchor="start" fill="#fff" font-size="20">Target, men</text>
                    <rect x="180" y="520" width="730" height="60" rx="12" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="180" y="620" text-anchor="start" fill="#888" font-size="17">38 g — the US average is under half of this</text>
                    <rect x="80" y="680" width="300" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="735" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">LENTILS, 1 CUP</text>
                    <text x="230" y="780" text-anchor="middle" fill="#fff" font-size="24">15 g</text>
                    <text x="230" y="815" text-anchor="middle" fill="#888" font-size="15">A US day in one bowl</text>
                    <rect x="400" y="680" width="300" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RASPBERRIES, 1 CUP</text>
                    <text x="550" y="780" text-anchor="middle" fill="#fff" font-size="24">8 g</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="15">Berries punch high</text>
                    <rect x="720" y="680" width="300" height="160" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="870" y="735" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">APPLE, MEDIUM</text>
                    <text x="870" y="780" text-anchor="middle" fill="#fff" font-size="24">4 g</text>
                    <text x="870" y="815" text-anchor="middle" fill="#888" font-size="15">Skin on, always</text>
                    <rect x="150" y="900" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="948" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">+10 g fiber/day tracks with ~10% lower</text>
                    <text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="20">all-cause mortality in cohort studies</text>
                </svg>`,
                caption: "Americans eat ~15 g of fiber a day — the target is 25-38 g"
            }
        },
        {
            type: "concept",
            title: "Read Labels Like a Scientist (in 10 Seconds)",
            content: "You do not need to memorize additive names. You need three fast heuristics, applied to the **ingredient list** — not the front of the package, which is advertising:\n\n• **The length test** — whole foods have short lists. One to five recognizable ingredients is usually Group 1–3. Fifteen-plus ingredients is almost always Group 4\n\n• **The pantry test** — if the list contains things you could plausibly keep in a home kitchen (flour, oats, salt, olive oil, honey), fine. If it reads like a chemistry set — **maltodextrin, soy protein isolate, high-fructose corn syrup, mono- and diglycerides, 'natural flavors'** — it is an industrial formulation\n\n• **The first-three rule** — ingredients are listed by weight. If sugar (under any of its ~60 aliases), refined flour, or refined oil sits in the first three slots, that is what the product mostly is\n\nOne warning: **'health halo' words are marketing**, not classification. 'Organic,' 'gluten-free,' 'plant-based,' and 'high-protein' appear on thousands of Group 4 products. An organic ultra-processed cookie is still an ultra-processed cookie. The back of the package tells the truth; the front tells a story.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 10-SECOND LABEL READ</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three tests, applied to the ingredient list</text>
                    <rect x="100" y="160" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. THE LENGTH TEST</text>
                    <text x="150" y="255" text-anchor="start" fill="#fff" font-size="18">1-5 recognizable ingredients: likely real food</text>
                    <text x="150" y="288" text-anchor="start" fill="#888" font-size="16">15+ ingredients: almost always ultra-processed</text>
                    <rect x="100" y="340" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="395" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. THE PANTRY TEST</text>
                    <text x="150" y="435" text-anchor="start" fill="#fff" font-size="18">Could you keep these ingredients in your kitchen?</text>
                    <text x="150" y="468" text-anchor="start" fill="#888" font-size="16">Maltodextrin and protein isolate: no kitchen owns them</text>
                    <rect x="100" y="520" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="575" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3. THE FIRST-THREE RULE</text>
                    <text x="150" y="615" text-anchor="start" fill="#fff" font-size="18">Ingredients are sorted by weight — the first three</text>
                    <text x="150" y="648" text-anchor="start" fill="#888" font-size="16">ARE the product. Sugar, refined flour, refined oil? Pass.</text>
                    <rect x="100" y="720" width="900" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BEWARE THE HEALTH HALO</text>
                    <text x="550" y="815" text-anchor="middle" fill="#fff" font-size="19">Organic, gluten-free, plant-based, high-protein —</text>
                    <text x="550" y="848" text-anchor="middle" fill="#fff" font-size="19">all appear on thousands of Group 4 products</text>
                    <text x="550" y="880" text-anchor="middle" fill="#888" font-size="16">The front of the pack is advertising; the back is data</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Flip the package. Ten seconds. Done.</text>
                </svg>`,
                caption: "Three heuristics that classify any product in seconds"
            }
        },
        {
            type: "quote",
            content: "Eat food. Not too much. Mostly plants.",
            author: "Michael Pollan, In Defense of Food",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="180" width="900" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-style="italic" font-size="40">"Eat food. Not too much.</text>
                    <text x="550" y="345" text-anchor="middle" fill="#fff" font-style="italic" font-size="40">Mostly plants."</text>
                    <text x="900" y="430" text-anchor="end" fill="#8b5cf6" font-size="20">— Michael Pollan, In Defense of Food</text>
                    <rect x="100" y="540" width="900" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">SEVEN WORDS, WRITTEN IN 2008</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="19">Eighteen years before the 2025-2030 guidelines,</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="19">Pollan's rule already contained their core message.</text>
                    <text x="550" y="720" text-anchor="middle" fill="#888" font-size="16">By 'food' he meant what your great-grandmother would recognize</text>
                    <rect x="250" y="820" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">Science finally caught up to the sentence</text>
                </svg>`,
                caption: "The seven-word rule that predicted the new guidelines"
            }
        },
        {
            type: "application",
            title: "De-Process Your Week: Five Swaps That Do the Work",
            content: "You do not need to quit ultra-processed food cold turkey. Displace it. Each swap below removes an appetite-override and adds fiber or protein:\n\n1. **Breakfast cereal → overnight oats**: rolled oats + milk or yogurt + frozen berries + a spoon of peanut butter. Two minutes tonight, +8 g fiber tomorrow\n\n2. **Soda and sweet coffee drinks → sparkling water or coffee with milk**: the single largest UPF calorie source for most people, gone in one decision\n\n3. **Snack bars and chips → nuts, fruit, or cheese**: pre-portion nuts into small containers on Sunday so grabbing them is as fast as opening a bag\n\n4. **Shelf-soft bread → real bakery bread**: sourdough or true whole-grain with five or fewer ingredients; freeze slices so it never goes stale\n\n5. **Frozen entrées → one-pot batch meal**: cook one big pot of chili, lentil soup, or curry each Sunday. That is 3–4 real-food dinners for less money than the frozen versions\n\nStart with whichever swap covers the most of your current calories — for most people, that is the drinks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR DE-PROCESSING PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five swaps — displace, do not deprive</text>
                    <rect x="100" y="160" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="200" y="215" text-anchor="start" fill="#fff" font-size="19">Breakfast cereal becomes overnight oats</text>
                    <text x="200" y="252" text-anchor="start" fill="#888" font-size="16">Oats + yogurt + berries: +8 g fiber before 9 am</text>
                    <rect x="100" y="315" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="200" y="370" text-anchor="start" fill="#fff" font-size="19">Soda becomes sparkling water</text>
                    <text x="200" y="407" text-anchor="start" fill="#888" font-size="16">The biggest single UPF calorie source, gone</text>
                    <rect x="100" y="470" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="525" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="200" y="525" text-anchor="start" fill="#fff" font-size="19">Snack bars become nuts, fruit, or cheese</text>
                    <text x="200" y="562" text-anchor="start" fill="#888" font-size="16">Pre-portion on Sunday so real food is the fast option</text>
                    <rect x="100" y="625" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="680" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="200" y="680" text-anchor="start" fill="#fff" font-size="19">Shelf-soft bread becomes real bakery bread</text>
                    <text x="200" y="717" text-anchor="start" fill="#888" font-size="16">Five ingredients or fewer; freeze the slices</text>
                    <rect x="100" y="780" width="900" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="835" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="200" y="835" text-anchor="start" fill="#fff" font-size="19">Frozen entrees become one Sunday batch pot</text>
                    <text x="200" y="872" text-anchor="start" fill="#888" font-size="16">Chili or lentil soup: 3-4 dinners, less money</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Start with the swap covering the most calories</text>
                </svg>`,
                caption: "Five displacement swaps, ranked by ease and impact"
            }
        },
        {
            type: "concept",
            title: "The Honest Caveats — and Why They Don't Change the Verdict",
            content: "Good science means saying what we do NOT know:\n\n• **NOVA is blunt.** Group 4 lumps a protein shake with a soda. Some UPF items — fortified whole-grain products, plain frozen meals with clean ingredients — are clearly better than others. Researchers are working on finer classifications\n\n• **Most UPF evidence is observational.** People who eat more UPF differ in income, stress, and exercise. Cohort links to obesity, diabetes, heart disease, and dementia could be partly confounded\n\n• **The Hall RCT was short** — two weeks — and small, 20 people\n\nBut here is why the verdict stands anyway: the observational data (dozens of cohorts, millions of people, dose-response patterns) and the randomized ward data **point the same direction and give each other what the other lacks**. The RCT supplies causation for the intake mechanism; the cohorts supply scale and duration. When both roads lead to the same city, you drive there.\n\nAnd note what the fix is NOT: it is not fear of every packaged item. Frozen vegetables, canned beans, tinned fish, and plain yogurt are processed and genuinely great. The target is the industrial Group 4 core: sweetened drinks, refined snacks, reconstituted meats, and dessert-like breakfasts.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WEIGHING THE EVIDENCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two kinds of proof, one direction</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">RANDOMIZED TRIAL</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Hall 2019 ward study</text>
                    <text x="290" y="310" text-anchor="middle" fill="#10b981" font-size="17">Proves causation for intake</text>
                    <text x="290" y="350" text-anchor="middle" fill="#ef4444" font-size="17">But: 20 people, 2 weeks</text>
                    <text x="290" y="405" text-anchor="middle" fill="#888" font-size="16">Depth without duration</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">COHORT STUDIES</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Millions followed for decades</text>
                    <text x="810" y="310" text-anchor="middle" fill="#10b981" font-size="17">Scale, duration, dose-response</text>
                    <text x="810" y="350" text-anchor="middle" fill="#ef4444" font-size="17">But: confounding possible</text>
                    <text x="810" y="405" text-anchor="middle" fill="#888" font-size="16">Duration without control</text>
                    <path d="M290 490 L520 570" stroke="#14b8a6" stroke-width="3"/>
                    <path d="M810 490 L580 570" stroke="#14b8a6" stroke-width="3"/>
                    <rect x="250" y="580" width="600" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">SAME DIRECTION</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="18">Each supplies what the other lacks</text>
                    <rect x="100" y="760" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">NOT EVERY PACKAGE IS THE ENEMY</text>
                    <text x="550" y="855" text-anchor="middle" fill="#fff" font-size="18">Frozen vegetables, canned beans, tinned fish, plain</text>
                    <text x="550" y="888" text-anchor="middle" fill="#fff" font-size="18">yogurt are processed — and genuinely great for you</text>
                </svg>`,
                caption: "RCT depth plus cohort scale — and what the target is not"
            }
        },
        {
            type: "quiz",
            question: "Which shopping decision best applies the ultra-processed evidence from this lesson?",
            options: [
                { text: "Avoid everything in a package, including frozen vegetables and canned beans", correct: false },
                { text: "Choose products labeled organic or high-protein, since those are not ultra-processed", correct: false },
                { text: "Flip to the ingredient list and favor short, pantry-recognizable lists over long chemical ones", correct: true },
                { text: "Focus only on calorie counts, since processing does not matter if calories match", correct: false }
            ],
            explanation: "The ingredient list is the honest signal: short lists of kitchen-recognizable ingredients mark NOVA Groups 1-3, while long industrial lists mark Group 4. 'Organic' and 'high-protein' are health-halo marketing that appears on plenty of ultra-processed products. Avoiding all packages overshoots — frozen vegetables, canned beans, and tinned fish are processed and excellent. And Hall 2019 showed calories are exactly what you cannot trust yourself to match: processing itself drove ~500 extra daily calories.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">PUTTING IT IN THE CART</text>
                    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="18">NOVA groups, health halos, the Hall trial —</text>
                    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="16">which habit actually uses the evidence?</text>
                    <rect x="150" y="370" width="380" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">FRONT OF PACK</text>
                    <text x="340" y="475" text-anchor="middle" fill="#fff" font-size="17">Organic! High-protein!</text>
                    <text x="340" y="510" text-anchor="middle" fill="#888" font-size="15">Advertising</text>
                    <rect x="570" y="370" width="380" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BACK OF PACK</text>
                    <text x="760" y="475" text-anchor="middle" fill="#fff" font-size="17">The ingredient list</text>
                    <text x="760" y="510" text-anchor="middle" fill="#888" font-size="15">Data</text>
                    <rect x="200" y="640" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="20">Which side of the package tells the truth?</text>
                </svg>`,
                caption: "Final check: turning the science into a shopping habit"
            }
        }
    ]
},
{
    id: 5,
    title: "The Longevity Plates of the World",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Island Where People 'Forget to Die'",
            content: "On the Greek island of Ikaria, a man named Stamatis Moraitis was diagnosed with terminal lung cancer in the United States and given nine months to live. He moved home to Ikaria to be buried near his parents — then spent his days gardening, drinking mountain tea, eating beans and greens with olive oil, and napping. He lived roughly **three more decades** and reportedly outlived his American doctors.\n\nOne story proves nothing — remember that, because this lesson is honest about evidence. But it points at a real question: certain places and eating patterns keep showing up wherever people stay healthy into old age. Spain and Greece. The hills of Sardinia. Okinawa. The islands of Japan and the kitchens of the Mediterranean.\n\nHere is what makes this lesson different from a travel documentary: one of these eating patterns has been tested in a **large randomized controlled trial** — the gold standard — and it worked. You are about to see which claims rest on granite, which rest on sand, and how to build your own longevity plate without moving to an island.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PLATES THAT OUTLIVE US</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where healthy old age keeps showing up</text>
                    <circle cx="280" cy="300" r="110" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="280" y="290" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">MEDITERRANEAN</text>
                    <text x="280" y="325" text-anchor="middle" fill="#fff" font-size="16">Spain, Greece, Italy</text>
                    <circle cx="550" cy="480" r="110" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="470" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">BLUE ZONES</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="16">Sardinia, Okinawa, Ikaria</text>
                    <circle cx="820" cy="300" r="110" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="820" y="290" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">MIND DIET</text>
                    <text x="820" y="325" text-anchor="middle" fill="#fff" font-size="16">Built for the brain</text>
                    <line x1="360" y1="380" x2="470" y2="430" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="740" y1="380" x2="630" y2="430" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="390" y1="300" x2="710" y2="300" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="100" y="680" width="900" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE QUESTION OF THIS LESSON</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="19">Which of these claims rest on granite,</text>
                    <text x="550" y="808" text-anchor="middle" fill="#fff" font-size="19">and which rest on sand?</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">One of them passed a randomized trial</text>
                </svg>`,
                caption: "Three famous longevity patterns — tested with very different rigor"
            }
        },
        {
            type: "concept",
            title: "PREDIMED: The Diet That Passed the Gold Standard",
            content: "Most diet advice comes from watching what people eat and seeing who gets sick — useful, but confounded. **PREDIMED** did something rare: it ran a **randomized controlled trial** of an entire eating pattern.\n\nThe setup:\n\n• **~7,400 Spanish adults** at high cardiovascular risk\n\n• Randomized to a **Mediterranean diet supplemented with extra-virgin olive oil**, the same diet with **mixed nuts**, or a low-fat control diet\n\n• Followed for about **five years**\n\nThe result, published in the **New England Journal of Medicine**: the Mediterranean diet groups had roughly **30% fewer major cardiovascular events** — heart attacks, strokes, cardiovascular deaths — than the control group. The trial was stopped early because the benefit was already clear.\n\nOne honest footnote: the original 2013 paper was retracted and republished in 2018 after auditors found randomization problems at a few sites. The reanalysis, with those participants handled correctly, **found essentially the same ~30% result**.\n\nWhat the diet actually was: vegetables, fruit, legumes, fish, whole grains, wine with meals for those who already drank — and at least **four tablespoons of extra-virgin olive oil a day**. Not low-fat. Rich, satisfying food, tested like a drug, and it worked.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PREDIMED, NEJM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~7,400 adults, randomized, ~5 years</text>
                    <rect x="80" y="170" width="300" height="230" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MED DIET +</text>
                    <text x="230" y="257" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">OLIVE OIL</text>
                    <text x="230" y="305" text-anchor="middle" fill="#fff" font-size="17">4+ tbsp extra-virgin</text>
                    <text x="230" y="335" text-anchor="middle" fill="#fff" font-size="17">olive oil daily</text>
                    <rect x="400" y="170" width="300" height="230" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">MED DIET +</text>
                    <text x="550" y="257" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">MIXED NUTS</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="17">~30 g walnuts,</text>
                    <text x="550" y="335" text-anchor="middle" fill="#fff" font-size="17">almonds, hazelnuts</text>
                    <rect x="720" y="170" width="300" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">CONTROL:</text>
                    <text x="870" y="257" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">LOW-FAT</text>
                    <text x="870" y="305" text-anchor="middle" fill="#fff" font-size="17">Standard advice</text>
                    <text x="870" y="335" text-anchor="middle" fill="#fff" font-size="17">to reduce all fat</text>
                    <rect x="150" y="460" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="530" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">~30% FEWER</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="21">major cardiovascular events vs control</text>
                    <text x="550" y="615" text-anchor="middle" fill="#888" font-size="16">Heart attack, stroke, cardiovascular death</text>
                    <rect x="100" y="700" width="900" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE HONEST FOOTNOTE</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="18">2013 paper retracted over site randomization flaws,</text>
                    <text x="550" y="828" text-anchor="middle" fill="#fff" font-size="18">republished 2018 — the ~30% result held</text>
                    <rect x="250" y="930" width="600" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#10b981" font-size="20">A whole diet, tested like a drug. It worked.</text>
                </svg>`,
                caption: "PREDIMED: the rare eating pattern proven in a randomized trial"
            }
        },
        {
            type: "visual",
            title: "Anatomy of the Mediterranean Plate",
            content: "Forget the postcard. The working Mediterranean pattern is specific: **olive oil as the principal fat** (extra-virgin, poured generously), **legumes at least three times a week**, **fish twice a week**, **vegetables at every meal**, fruit as the default dessert, whole grains, nuts most days, dairy mostly as yogurt and cheese, and red meat rare — a garnish, not a centerpiece. Wine, if used at all, is small, with food, and never mandatory: current evidence has pushed alcohol's 'healthy' halo close to zero.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MEDITERRANEAN PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Daily foundations to rare garnishes</text>
                    <rect x="100" y="160" width="900" height="170" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="215" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">EVERY DAY</text>
                    <text x="150" y="255" text-anchor="start" fill="#fff" font-size="19">Vegetables at every meal, extra-virgin olive oil,</text>
                    <text x="150" y="288" text-anchor="start" fill="#fff" font-size="19">whole grains, fruit for dessert, nuts most days</text>
                    <rect x="100" y="360" width="900" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="415" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">MOST WEEKS: 2-4 TIMES</text>
                    <text x="150" y="455" text-anchor="start" fill="#fff" font-size="19">Legumes 3+ times, fish twice, poultry and eggs</text>
                    <text x="150" y="488" text-anchor="start" fill="#888" font-size="16">Yogurt and cheese in moderate, regular amounts</text>
                    <rect x="100" y="540" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="595" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">RARE: A GARNISH, NOT A CENTERPIECE</text>
                    <text x="150" y="635" text-anchor="start" fill="#fff" font-size="19">Red meat a few times a month, sweets for</text>
                    <text x="150" y="668" text-anchor="start" fill="#fff" font-size="19">celebrations, almost nothing ultra-processed</text>
                    <rect x="100" y="720" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="775" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">THE WINE ASTERISK</text>
                    <text x="150" y="815" text-anchor="start" fill="#fff" font-size="19">Small, with meals, only if you already drink —</text>
                    <text x="150" y="848" text-anchor="start" fill="#888" font-size="17">newer evidence has shrunk alcohol's halo to near zero</text>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">Rich, satisfying food — not deprivation</text>
                </svg>`,
                caption: "The tested pattern: daily, weekly, and rare tiers of the plate"
            }
        },
        {
            type: "example",
            title: "The MIND Diet: Feeding an Aging Brain",
            content: "In 2015, epidemiologist **Martha Clare Morris** at Rush University asked a sharper question: what if you tuned the Mediterranean pattern specifically for the **brain**?\n\nHer team blended Mediterranean and DASH diets, then weighted the foods with the best neuro-evidence. The **MIND diet** scores you on 15 components, including:\n\n• **Green leafy vegetables 6+ servings a week** — its signature move\n• **Berries specifically** (not just 'fruit') — blueberries and strawberries carry the flavonoid data\n• Nuts, beans, whole grains, fish, olive oil, poultry\n• Limits: red meat, butter, cheese, pastries, fried food\n\nFollowing **923 older adults** for about 4.5 years, Morris found those with the **highest MIND scores had ~53% lower risk of Alzheimer's disease** — and even middling adherence tracked with ~35% lower risk.\n\nNow the honest part, and say it with us: **this is observational**. People who eat leafy greens differ in dozens of ways from people who do not. A later randomized MIND trial (2023) found both the MIND group and the calorie-matched control improved similarly over three years — so the 53% figure is an association, not a proven causal effect. The pattern is promising and low-risk, not miracle-grade. That distinction is what separates science from marketing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIND DIET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Morris 2015 — 923 older adults, ~4.5 years</text>
                    <rect x="60" y="170" width="460" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">EAT THESE</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Leafy greens 6+ servings/wk</text>
                    <text x="290" y="305" text-anchor="middle" fill="#fff" font-size="18">Berries, nuts, beans</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="18">Whole grains, fish, olive oil</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="16">Berries, not just any fruit</text>
                    <rect x="580" y="170" width="460" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">LIMIT THESE</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Red meat, butter, cheese</text>
                    <text x="810" y="305" text-anchor="middle" fill="#fff" font-size="18">Pastries and sweets</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="18">Fried and fast food</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="16">Scored across 15 components</text>
                    <rect x="150" y="490" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="36">~53% LOWER</text>
                    <text x="550" y="595" text-anchor="middle" fill="#fff" font-size="20">Alzheimer's risk at highest adherence</text>
                    <text x="550" y="628" text-anchor="middle" fill="#888" font-size="16">~35% lower even at middling adherence</text>
                    <rect x="100" y="710" width="900" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE HONEST LABEL: OBSERVATIONAL</text>
                    <text x="550" y="805" text-anchor="middle" fill="#fff" font-size="18">An association, not proven causation — a 2023</text>
                    <text x="550" y="838" text-anchor="middle" fill="#fff" font-size="18">randomized trial showed no clear cognitive edge</text>
                    <text x="550" y="870" text-anchor="middle" fill="#888" font-size="16">Promising and low-risk, not miracle-grade</text>
                </svg>`,
                caption: "Brain-tuned eating: a striking association, honestly labeled"
            }
        },
        {
            type: "quiz",
            question: "What is the key difference in evidence strength between PREDIMED and the MIND diet's famous 53% finding?",
            options: [
                { text: "PREDIMED was a randomized controlled trial; the MIND 53% figure comes from an observational cohort", correct: true },
                { text: "Both were randomized trials, but PREDIMED enrolled far more participants", correct: false },
                { text: "The MIND finding is stronger because 53% is a bigger number than 30%", correct: false },
                { text: "Both are observational studies, so neither can support any dietary advice", correct: false }
            ],
            explanation: "PREDIMED randomly assigned ~7,400 people to diets and counted real cardiovascular events — that design supports causal claims. Morris 2015 followed 923 people who chose their own food, so the ~53% lower Alzheimer's risk is an association that could be partly confounded; a 2023 randomized MIND trial found no clear cognitive advantage over the control. A bigger percentage from a weaker design is not stronger evidence — design beats effect size.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="170" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">READING THE EVIDENCE</text>
                    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="18">Two famous findings, two very different designs</text>
                    <text x="550" y="263" text-anchor="middle" fill="#888" font-size="16">Which claim can bear more weight?</text>
                    <rect x="150" y="360" width="380" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PREDIMED</text>
                    <text x="340" y="465" text-anchor="middle" fill="#fff" font-size="24">~30% fewer</text>
                    <text x="340" y="500" text-anchor="middle" fill="#fff" font-size="17">CV events</text>
                    <text x="340" y="545" text-anchor="middle" fill="#888" font-size="16">Design: ?</text>
                    <rect x="570" y="360" width="380" height="240" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="760" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">MIND (MORRIS 2015)</text>
                    <text x="760" y="465" text-anchor="middle" fill="#fff" font-size="24">~53% lower</text>
                    <text x="760" y="500" text-anchor="middle" fill="#fff" font-size="17">Alzheimer's risk</text>
                    <text x="760" y="545" text-anchor="middle" fill="#888" font-size="16">Design: ?</text>
                    <rect x="200" y="670" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="20">Design beats effect size. Which is which?</text>
                </svg>`,
                caption: "Test yourself: trial versus cohort, and why it matters"
            }
        },
        {
            type: "concept",
            title: "The Blue Zones: A Beautiful Pattern...",
            content: "In the early 2000s, demographer Michel Poulain and researcher Gianni Pes circled a cluster of extraordinarily long-lived villages in Sardinia's mountains with a blue marker — the first '**Blue Zone**.' Journalist **Dan Buettner** expanded the list: **Okinawa** (Japan), **Ikaria** (Greece), **Nicoya** (Costa Rica), and **Loma Linda** (California, home to vegetarian Seventh-day Adventists).\n\nAcross these scattered cultures, the daily patterns rhymed:\n\n• **Overwhelmingly plant-based** eating — meat a few times a month in many zones\n\n• **Beans as the cornerstone**: lentils, chickpeas, black beans, Okinawan soy\n\n• **Olive oil, nuts, whole grains**, home gardens\n\n• **Natural, constant movement** — shepherding, gardening, walking steep villages — not gyms\n\n• A sense of **purpose** (the Okinawan ikigai, the Nicoyan plan de vida)\n\n• **Tight community and family ties** — Okinawan moai groups commit to each other for life\n\n• Rituals to **downshift stress**: naps, prayer, happy hour with friends\n\nBuettner distilled these into the '**Power 9**.' It is an inspiring picture: longevity as a byproduct of an ordinary day well-designed, rather than a project you grind at. But before you book a flight — the next card delivers the uncomfortable audit.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIVE BLUE ZONES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Scattered cultures, rhyming habits</text>
                    <circle cx="220" cy="260" r="90" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="220" y="252" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">SARDINIA</text>
                    <text x="220" y="285" text-anchor="middle" fill="#fff" font-size="14">Italy</text>
                    <circle cx="550" cy="220" r="90" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">OKINAWA</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="14">Japan</text>
                    <circle cx="880" cy="260" r="90" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="880" y="252" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">IKARIA</text>
                    <text x="880" y="285" text-anchor="middle" fill="#fff" font-size="14">Greece</text>
                    <circle cx="360" cy="450" r="90" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="360" y="442" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">NICOYA</text>
                    <text x="360" y="475" text-anchor="middle" fill="#fff" font-size="14">Costa Rica</text>
                    <circle cx="740" cy="450" r="90" fill="rgba(236,72,153,0.25)" stroke="#ec4899" stroke-width="2"/>
                    <text x="740" y="442" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">LOMA LINDA</text>
                    <text x="740" y="475" text-anchor="middle" fill="#fff" font-size="14">California</text>
                    <rect x="100" y="620" width="900" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE SHARED PATTERN</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="18">Plants and beans at the center, olive oil and nuts</text>
                    <text x="550" y="752" text-anchor="middle" fill="#fff" font-size="18">Constant natural movement, not gyms</text>
                    <text x="550" y="786" text-anchor="middle" fill="#fff" font-size="18">Purpose (ikigai), tight community, daily downshift</text>
                    <text x="550" y="828" text-anchor="middle" fill="#888" font-size="16">Buettner's Power 9: an ordinary day, well designed</text>
                    <rect x="250" y="930" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">Beautiful. Now for the audit...</text>
                </svg>`,
                caption: "Five zones, one rhyme: plants, beans, movement, purpose, people"
            }
        },
        {
            type: "concept",
            title: "...And the Auditor Who Checked the Birth Certificates",
            content: "In 2024, Oxford-affiliated researcher **Saul Justin Newman** won an Ig Nobel Prize for doing something devastatingly simple: checking the paperwork behind extreme-age claims.\n\nWhat he found:\n\n• Regions with the most reported **supercentenarians** (110+) often had the **worst historical record-keeping**, plus higher poverty and shorter average lifespans — the opposite of what you would expect if the ages were real\n\n• When the US states introduced birth certificates, local supercentenarian counts **fell sharply**\n\n• In one audit, Greece appeared to have large numbers of 'centenarians' who were **collecting pensions while deceased**; Japan's 2010 review famously found records of thousands of missing or dead 'living' centenarians\n\n• Errors flow one way: clerical mistakes, lost records, and pension fraud all **inflate** age claims\n\nDoes this demolish the Blue Zones? Here is the honest read: it seriously wounds the **extreme-age claims** — the 105-and-up records that made the headlines. Blue Zones researchers dispute Newman's critique and point to their validation work in specific villages, and the debate is live. What Newman's audit does NOT touch is a different question: whether the **lifestyle pattern** those communities share is healthy. For that, we have better evidence than birth certificates — and it is the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NEWMAN AUDIT (2024)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What happens when you check the paperwork</text>
                    <rect x="100" y="160" width="900" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="212" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">FINDING 1</text>
                    <text x="150" y="250" text-anchor="start" fill="#fff" font-size="18">Most 'supercentenarians' cluster where historical</text>
                    <text x="150" y="282" text-anchor="start" fill="#888" font-size="16">record-keeping was worst — not where health was best</text>
                    <rect x="100" y="330" width="900" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="382" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">FINDING 2</text>
                    <text x="150" y="420" text-anchor="start" fill="#fff" font-size="18">Introduce birth certificates, and reported</text>
                    <text x="150" y="452" text-anchor="start" fill="#888" font-size="16">supercentenarian counts fall sharply</text>
                    <rect x="100" y="500" width="900" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="552" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">FINDING 3</text>
                    <text x="150" y="590" text-anchor="start" fill="#fff" font-size="18">Pension fraud and clerical error only push one way:</text>
                    <text x="150" y="622" text-anchor="start" fill="#888" font-size="16">they inflate age claims, never deflate them</text>
                    <rect x="60" y="690" width="460" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="745" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WOUNDED</text>
                    <text x="290" y="790" text-anchor="middle" fill="#fff" font-size="18">The extreme-age records —</text>
                    <text x="290" y="822" text-anchor="middle" fill="#fff" font-size="18">the 110+ headline claims</text>
                    <text x="290" y="865" text-anchor="middle" fill="#888" font-size="15">Debate is live; researchers dispute</text>
                    <rect x="580" y="690" width="460" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="745" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">UNTOUCHED</text>
                    <text x="810" y="790" text-anchor="middle" fill="#fff" font-size="18">Whether the lifestyle</text>
                    <text x="810" y="822" text-anchor="middle" fill="#fff" font-size="18">pattern itself is healthy</text>
                    <text x="810" y="865" text-anchor="middle" fill="#888" font-size="15">That rests on separate evidence</text>
                    <rect x="200" y="960" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1005" text-anchor="middle" fill="#ffd700" font-size="19">Kill the myth, keep the mechanism</text>
                </svg>`,
                caption: "Newman 2024: extreme-age claims wobble; the lifestyle question stands apart"
            }
        },
        {
            type: "concept",
            title: "Why the Pattern Survives Its Own Scandal",
            content: "Here is the move that makes you a better thinker, not just a better eater: the Blue Zones' **dietary pattern does not need the age records to be true**, because it independently matches the strongest evidence we have.\n\nLook at what the zones eat, then look at what the trials and big cohorts reward:\n\n• **Plants, olive oil, nuts, fish, legumes** → this is essentially the diet PREDIMED randomized and found ~30% fewer cardiovascular events\n\n• **Leafy greens and berries** → the backbone of the MIND association\n\n• **Beans and whole grains** → high fiber, and fiber intake tracks with roughly 10% lower all-cause mortality per 10 g/day across cohorts\n\n• **Minimal ultra-processed food** → the Hall 2019 ward trial showed processing itself drives overeating\n\n• **Movement, purpose, community** → each independently associated with lower mortality in large studies (you will meet the Harvard Study and Holt-Lunstad's loneliness meta-analysis later in this book)\n\nIn other words: even if not a single Sardinian ever actually reached 110, the way Sardinian villagers eat and live is still the way the evidence points. The marketing needed the birth certificates. **The biology never did.** Triangulation — multiple weak-to-strong lines of evidence converging — is how careful scientists decide what to actually do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TRIANGULATION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The pattern stands on trial evidence, not folklore</text>
                    <rect x="80" y="170" width="440" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="222" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">ZONES EAT: PLANTS, OIL,</text>
                    <text x="300" y="252" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">NUTS, FISH, BEANS</text>
                    <text x="300" y="292" text-anchor="middle" fill="#fff" font-size="16">= the PREDIMED diet: ~30% fewer CV events</text>
                    <rect x="580" y="170" width="440" height="150" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="222" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">ZONES EAT: GREENS</text>
                    <text x="800" y="252" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">AND SIMPLE FRUIT</text>
                    <text x="800" y="292" text-anchor="middle" fill="#fff" font-size="16">= the MIND backbone: brain association</text>
                    <rect x="80" y="360" width="440" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="412" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">ZONES EAT: BEANS,</text>
                    <text x="300" y="442" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WHOLE GRAINS</text>
                    <text x="300" y="482" text-anchor="middle" fill="#fff" font-size="16">= high fiber: ~10% lower mortality per 10 g</text>
                    <rect x="580" y="360" width="440" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="412" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">ZONES AVOID:</text>
                    <text x="800" y="442" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">ULTRA-PROCESSED FOOD</text>
                    <text x="800" y="482" text-anchor="middle" fill="#fff" font-size="16">= Hall 2019: UPF drives +500 kcal/day</text>
                    <path d="M300 510 L520 610" stroke="#14b8a6" stroke-width="3"/>
                    <path d="M800 510 L580 610" stroke="#14b8a6" stroke-width="3"/>
                    <path d="M300 320 L300 360" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <path d="M800 320 L800 360" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="250" y="620" width="600" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">FOUR ROADS, ONE CITY</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="18">Independent evidence converges on the pattern</text>
                    <rect x="100" y="810" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">The marketing needed the birth certificates.</text>
                    <text x="550" y="898" text-anchor="middle" fill="#fff" font-size="19">The biology never did.</text>
                </svg>`,
                caption: "The Blue Zones plate matches trial evidence — with or without the age records"
            }
        },
        {
            type: "example",
            title: "The Common Denominators: What Every Longevity Plate Shares",
            content: "Stack the Mediterranean, MIND, Okinawan, Sardinian, Nicoyan, and Adventist plates on top of each other and hold them up to the light. Six features shine through every one:\n\n• **Plants dominate** — 80–95% of calories from plant foods in most patterns\n\n• **Legumes daily-ish** — the single most agreed-upon longevity food: Sardinian chickpeas, Okinawan soy, Nicoyan black beans, Adventist lentils\n\n• **The fat is liquid or crunchy** — olive oil and nuts, not industrial fats\n\n• **Fish over red meat** where meat appears at all; red meat is celebratory\n\n• **Fiber is enormous by American standards** — often 40–50 g/day versus the US average of ~15 g\n\n• **Almost zero ultra-processed food** — historically because it did not exist there; the pattern erodes wherever UPF arrives\n\nJust as telling is what is ABSENT from every plate: no protein powders, no superfood du jour, no $50 green juice. Notice also what varies freely — carbs (Okinawa was ~85% carbs from sweet potatoes; Ikaria far fatter from oil), dairy, even wine. The lesson: the details are negotiable. **The skeleton is not.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SIX COMMON DENOMINATORS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What survives when you stack every plate</text>
                    <rect x="80" y="160" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">1. PLANTS DOMINATE</text>
                    <text x="300" y="255" text-anchor="middle" fill="#fff" font-size="16">80-95% of calories from</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="16">plant foods</text>
                    <rect x="580" y="160" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">2. BEANS DAILY-ISH</text>
                    <text x="800" y="255" text-anchor="middle" fill="#fff" font-size="16">The most agreed-upon</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="16">longevity food on Earth</text>
                    <rect x="80" y="350" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="405" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">3. LIQUID/CRUNCHY FAT</text>
                    <text x="300" y="445" text-anchor="middle" fill="#fff" font-size="16">Olive oil and nuts,</text>
                    <text x="300" y="475" text-anchor="middle" fill="#fff" font-size="16">not industrial fats</text>
                    <rect x="580" y="350" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="405" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">4. FISH OVER RED MEAT</text>
                    <text x="800" y="445" text-anchor="middle" fill="#fff" font-size="16">Red meat is celebratory,</text>
                    <text x="800" y="475" text-anchor="middle" fill="#fff" font-size="16">not daily</text>
                    <rect x="80" y="540" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="595" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">5. MASSIVE FIBER</text>
                    <text x="300" y="635" text-anchor="middle" fill="#fff" font-size="16">Often 40-50 g/day</text>
                    <text x="300" y="665" text-anchor="middle" fill="#fff" font-size="16">vs ~15 g US average</text>
                    <rect x="580" y="540" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="595" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">6. NEAR-ZERO UPF</text>
                    <text x="800" y="635" text-anchor="middle" fill="#fff" font-size="16">The pattern erodes wherever</text>
                    <text x="800" y="665" text-anchor="middle" fill="#fff" font-size="16">ultra-processed food arrives</text>
                    <rect x="100" y="750" width="900" height="140" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="21">WHAT VARIES FREELY: carbs, dairy, wine</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="18">Okinawa ~85% carbs; Ikaria rich in oil — both thrived</text>
                    <rect x="250" y="950" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Details negotiable. Skeleton not.</text>
                </svg>`,
                caption: "Six shared features — and the details every culture bends freely"
            }
        },
        {
            type: "quote",
            content: "The calculus of aging offers us two options: we can live a shorter life with more years of disability, or we can live the longest possible life with the fewest bad years.",
            author: "Dan Buettner, The Blue Zones",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="160" width="900" height="330" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">"The calculus of aging offers us two options:</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">we can live a shorter life with more years of</text>
                    <text x="550" y="340" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">disability, or we can live the longest possible</text>
                    <text x="550" y="390" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">life with the fewest bad years."</text>
                    <text x="900" y="450" text-anchor="end" fill="#8b5cf6" font-size="20">— Dan Buettner, The Blue Zones</text>
                    <rect x="100" y="550" width="900" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">COMPRESSION OF MORBIDITY</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="19">Whatever you make of the age records, this goal —</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="19">shrinking the sick years, not just adding birthdays —</text>
                    <text x="550" y="720" text-anchor="middle" fill="#888" font-size="17">is the same one Fries named in 1980. It is this book's goal too.</text>
                    <rect x="250" y="810" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="20">Fewest bad years. That is the target.</text>
                </svg>`,
                caption: "The real prize: not more birthdays, but fewer bad years"
            }
        },
        {
            type: "application",
            title: "Build Your Own Longevity Plate — No Passport Required",
            content: "You do not need Sardinia. You need the skeleton, translated into your grocery store this week:\n\n1. **Adopt the bean habit**: put legumes in 4+ dinners this week — canned chickpeas, black beans, or lentil soup all count. This is the single highest-agreement move\n\n2. **Switch your default fat**: put a bottle of extra-virgin olive oil next to the stove and use it for cooking, dressing, and drizzling — PREDIMED used 4 tablespoons a day\n\n3. **Greens six times a week**: one big salad or a pile of sautéed spinach/kale most days — the MIND diet's signature component\n\n4. **Berries twice a week**: frozen blueberries are cheap, keep forever, and carry the same flavonoids\n\n5. **Demote red meat to weekends**: fish or beans take its weekday slot\n\n6. **Borrow one non-food habit**: a daily walk after dinner, a weekly standing meal with friends or family — the zones never separated food from movement and company\n\nPick the two that are easiest for you and start there. The pattern compounds; it does not demand perfection on day one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LONGEVITY PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six moves, no passport required</text>
                    <rect x="100" y="160" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="200" y="212" text-anchor="start" fill="#fff" font-size="19">Beans in 4+ dinners this week</text>
                    <text x="200" y="248" text-anchor="start" fill="#888" font-size="15">Canned counts — the highest-agreement move</text>
                    <rect x="100" y="300" width="900" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="352" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">2.</text>
                    <text x="200" y="352" text-anchor="start" fill="#fff" font-size="19">Extra-virgin olive oil as your default fat</text>
                    <text x="200" y="388" text-anchor="start" fill="#888" font-size="15">PREDIMED dosage: about 4 tablespoons a day</text>
                    <rect x="100" y="440" width="900" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="492" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">3.</text>
                    <text x="200" y="492" text-anchor="start" fill="#fff" font-size="19">Leafy greens six days a week</text>
                    <text x="200" y="528" text-anchor="start" fill="#888" font-size="15">The MIND diet's signature component</text>
                    <rect x="100" y="580" width="900" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="632" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">4.</text>
                    <text x="200" y="632" text-anchor="start" fill="#fff" font-size="19">Berries twice a week — frozen is fine</text>
                    <text x="200" y="668" text-anchor="start" fill="#888" font-size="15">Same flavonoids, half the price</text>
                    <rect x="100" y="720" width="900" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="772" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">5.</text>
                    <text x="200" y="772" text-anchor="start" fill="#fff" font-size="19">Red meat becomes a weekend food</text>
                    <text x="200" y="808" text-anchor="start" fill="#888" font-size="15">Fish or beans take the weekday slot</text>
                    <rect x="100" y="860" width="900" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="912" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">6.</text>
                    <text x="200" y="912" text-anchor="start" fill="#fff" font-size="19">Borrow one non-food habit: walk after dinner,</text>
                    <text x="200" y="948" text-anchor="start" fill="#888" font-size="15">one standing weekly meal with people you love</text>
                    <rect x="250" y="1010" width="600" height="60" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1050" text-anchor="middle" fill="#ffd700" font-size="19">Pick the easiest two. Start today.</text>
                </svg>`,
                caption: "Translate the skeleton into your own kitchen this week"
            }
        },
        {
            type: "quiz",
            question: "The Newman 2024 critique found serious record-keeping problems behind extreme-age claims in longevity hotspots. Why does the Blue Zones dietary pattern still carry weight?",
            options: [
                { text: "Because the birth-certificate problems were later fully disproven, restoring the age records", correct: false },
                { text: "Because the same eating pattern is independently supported by trial and cohort evidence like PREDIMED and fiber data", correct: true },
                { text: "It does not — the critique invalidates the diet along with the age claims", correct: false },
                { text: "Because dietary patterns cannot be evaluated scientifically, so critiques do not apply to them", correct: false }
            ],
            explanation: "Newman's audit wounds the extreme-age records (the debate is ongoing, and Blue Zones researchers dispute it), but the diet's credibility never rested on those records. The pattern — plants, beans, olive oil, nuts, minimal UPF — is what PREDIMED randomized to a ~30% reduction in cardiovascular events, what the fiber cohorts reward, and what the Hall trial's logic supports. Independent lines of evidence converging is exactly why you can discard the folklore and keep the plate.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MYTH VS MECHANISM</text>
                    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="18">The age records wobble under audit —</text>
                    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="16">so what holds the dietary pattern up?</text>
                    <rect x="150" y="370" width="380" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">FOLKLORE</text>
                    <text x="340" y="475" text-anchor="middle" fill="#fff" font-size="17">Extreme-age records,</text>
                    <text x="340" y="507" text-anchor="middle" fill="#fff" font-size="17">missing birth certificates</text>
                    <text x="340" y="550" text-anchor="middle" fill="#888" font-size="15">Newman 2024: audit failed</text>
                    <rect x="570" y="370" width="380" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">EVIDENCE</text>
                    <text x="760" y="475" text-anchor="middle" fill="#fff" font-size="17">PREDIMED RCT, fiber</text>
                    <text x="760" y="507" text-anchor="middle" fill="#fff" font-size="17">cohorts, Hall 2019</text>
                    <text x="760" y="550" text-anchor="middle" fill="#888" font-size="15">Independent, converging</text>
                    <rect x="200" y="660" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="20">Which pillar was the plate standing on?</text>
                </svg>`,
                caption: "Final check: separating the folklore from the mechanism"
            }
        }
    ]
},
{
    id: 6,
    title: "Eat Less, Live Longer? The Restriction Science",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Hungry Rats That Refused to Age",
            content: "In 1935, Cornell nutritionist **Clive McCay** did something that looked like cruelty and turned out to be a revolution: he fed young rats a diet with about a third fewer calories — full nutrition, just less energy — and watched them live up to **30–40% longer** than their well-fed siblings. They stayed sleeker, got tumors later, and aged visibly slower.\n\nThat one experiment launched ninety years of the most seductive idea in longevity science: **eat less, live longer**. It works in yeast. It works in worms, flies, mice, and (with caveats) monkeys. Silicon Valley executives now skip breakfast because of those rats.\n\nBut you are not a rat, and here is what this lesson delivers that most fasting content skips: the actual **human** trial data — a real randomized study called CALERIE — plus the honest state of autophagy science, and a crucial plot twist almost nobody mentions: **after about age 65, the advice flips**. The same restriction that may slow aging in a 40-year-old can quietly strip an 80-year-old of the muscle that keeps them alive. Let's separate what is proven, what is promising, and what is dangerous.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NINETY YEARS OF A BIG IDEA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eat less, live longer — from rats to you</text>
                    <rect x="80" y="170" width="440" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">McCAY, 1935</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="18">Rats fed ~1/3 fewer calories</text>
                    <text x="300" y="305" text-anchor="middle" fill="#fff" font-size="18">with full nutrition</text>
                    <text x="300" y="370" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="38">+30-40%</text>
                    <text x="300" y="415" text-anchor="middle" fill="#888" font-size="16">longer lives, slower aging</text>
                    <rect x="580" y="170" width="440" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SINCE THEN</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="18">Works in yeast, worms,</text>
                    <text x="800" y="305" text-anchor="middle" fill="#fff" font-size="18">flies, mice — monkeys</text>
                    <text x="800" y="340" text-anchor="middle" fill="#fff" font-size="18">with caveats</text>
                    <text x="800" y="400" text-anchor="middle" fill="#888" font-size="16">The most conserved longevity</text>
                    <text x="800" y="428" text-anchor="middle" fill="#888" font-size="16">lever in biology</text>
                    <rect x="100" y="510" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">BUT YOU ARE NOT A RAT</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="19">This lesson: the human RCT data, the honest</text>
                    <text x="550" y="638" text-anchor="middle" fill="#fff" font-size="19">autophagy story, and the age-65 plot twist</text>
                    <rect x="150" y="730" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="778" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SPOILER: AFTER ~65, THE ADVICE FLIPS</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="17">The bigger risk becomes eating too little, not too much</text>
                </svg>`,
                caption: "From McCay's 1935 rats to the question that matters: does it work in humans?"
            }
        },
        {
            type: "concept",
            title: "Why Would Eating Less Slow Aging At All?",
            content: "Caloric restriction is not magic starvation. It works — where it works — by flipping ancient **nutrient-sensing switches**, the same ones listed among the hallmarks of aging (López-Otín 2023):\n\n• **mTOR** — the cell's growth foreman. Abundant food keeps mTOR shouting 'build!' Restriction quiets it, and the cell shifts from growth mode to **maintenance and repair mode**\n\n• **AMPK** — the fuel gauge. Low energy activates AMPK, which boosts mitochondrial housekeeping\n\n• **Insulin/IGF-1** — chronically high signaling accelerates aging pathways across species; restriction lowers it\n\n• **Sirtuins** — NAD-dependent repair enzymes that respond to energy scarcity\n\nThe evolutionary logic: in famine, an organism that pauses reproduction and growth to **repair and recycle** survives to breed later. Restriction borrows that survival program.\n\nThe monkey plot twist that keeps scientists humble: two famous decades-long trials disagreed. The **Wisconsin** study found restricted rhesus monkeys lived longer; the **NIA** study found little lifespan difference — partly because its control monkeys already ate a healthy, non-obesogenic diet. Translation: restriction clearly beats overfeeding, but whether it beats an already-excellent diet is a much closer call. Keep that in mind as we get to humans.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NUTRIENT SWITCHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How scarcity flips cells into repair mode</text>
                    <rect x="80" y="160" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">mTOR quiets</text>
                    <text x="300" y="255" text-anchor="middle" fill="#fff" font-size="17">Growth foreman stops shouting;</text>
                    <text x="300" y="287" text-anchor="middle" fill="#fff" font-size="17">cell shifts to maintenance</text>
                    <rect x="580" y="160" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">AMPK wakes</text>
                    <text x="800" y="255" text-anchor="middle" fill="#fff" font-size="17">Fuel gauge reads low; boosts</text>
                    <text x="800" y="287" text-anchor="middle" fill="#fff" font-size="17">mitochondrial housekeeping</text>
                    <rect x="80" y="360" width="440" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="415" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">Insulin/IGF-1 falls</text>
                    <text x="300" y="455" text-anchor="middle" fill="#fff" font-size="17">Chronic growth signaling eases</text>
                    <text x="300" y="487" text-anchor="middle" fill="#fff" font-size="17">across the whole body</text>
                    <rect x="580" y="360" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="415" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">Sirtuins engage</text>
                    <text x="800" y="455" text-anchor="middle" fill="#fff" font-size="17">NAD-dependent repair enzymes</text>
                    <text x="800" y="487" text-anchor="middle" fill="#fff" font-size="17">respond to scarcity</text>
                    <path d="M550 550 L550 600" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,610 542,596 558,596" fill="#14b8a6"/>
                    <rect x="250" y="620" width="600" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="668" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">GROWTH MODE → REPAIR MODE</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">An ancient famine-survival program, borrowed</text>
                    <rect x="100" y="790" width="900" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE MONKEY SPLIT DECISION</text>
                    <text x="550" y="885" text-anchor="middle" fill="#fff" font-size="18">Wisconsin: restricted monkeys lived longer. NIA: little</text>
                    <text x="550" y="918" text-anchor="middle" fill="#fff" font-size="18">difference — its controls already ate an excellent diet</text>
                </svg>`,
                caption: "Four nutrient sensors, one repair program — and a humbling monkey result"
            }
        },
        {
            type: "concept",
            title: "CALERIE 2: The Human Trial That Finally Happened",
            content: "For decades, 'eat less, live longer' rested on animal cages. Then came **CALERIE 2** — the first sizeable randomized trial of sustained caloric restriction in **healthy, non-obese humans**.\n\nThe design:\n\n• **~220 adults**, normal-to-slightly-overweight, randomized 2:1 to caloric restriction or eat-as-usual\n\n• Target: 25% restriction for **two years**. Reality check: participants actually managed about **11–12%** — roughly 250–300 fewer calories a day. Even paid volunteers could not sustain 25%\n\nThe results (with the key analysis in **Nature Aging, 2023**):\n\n• **DunedinPACE** — an epigenetic speedometer of aging built from DNA methylation — slowed by **~2–3%** in the restriction group\n\n• **Cardiometabolic markers improved**: blood pressure, LDL, insulin sensitivity, inflammatory markers like CRP\n\n• Mood and quality of life held up fine at this moderate dose\n\nA 2–3% slower aging pace sounds small, but modeling suggests effects of that size, sustained, translate to meaningfully lower mortality risk at the population level. The honest framing: CALERIE proves moderate restriction **changes aging biology in humans** — it does not yet prove longer human lives. Nobody has run the 50-year trial. But the arrow points the same way the animals do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CALERIE 2</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~220 healthy adults, 2 years, randomized</text>
                    <rect x="80" y="160" width="440" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE TARGET</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="34">−25%</text>
                    <text x="300" y="310" text-anchor="middle" fill="#888" font-size="16">calories for two years</text>
                    <rect x="580" y="160" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="215" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE REALITY</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="34">−11-12%</text>
                    <text x="800" y="310" text-anchor="middle" fill="#888" font-size="16">~250-300 kcal/day achieved</text>
                    <rect x="150" y="410" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">DUNEDINPACE: AGING SLOWED ~2-3%</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="19">An epigenetic speedometer of biological aging,</text>
                    <text x="550" y="538" text-anchor="middle" fill="#fff" font-size="19">read from DNA methylation — Nature Aging 2023</text>
                    <rect x="150" y="620" width="800" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">CARDIOMETABOLIC WINS</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="18">Blood pressure, LDL, insulin sensitivity,</text>
                    <text x="550" y="748" text-anchor="middle" fill="#fff" font-size="18">inflammation (CRP) all improved</text>
                    <rect x="100" y="820" width="900" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="872" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">HONEST FRAME: proves changed aging biology,</text>
                    <text x="550" y="908" text-anchor="middle" fill="#fff" font-size="19">not yet longer lives — no 50-year trial exists</text>
                </svg>`,
                caption: "The first real human CR trial: modest dose, measurable slowing"
            }
        },
        {
            type: "visual",
            title: "What 11% Actually Looks Like",
            content: "Forget monk-like deprivation. The restriction that moved the biology in CALERIE was about **250–300 calories a day** — a large bagel with cream cheese, a bottle of soda plus a cookie, or the mindless handfuls between meals. Participants ate real meals, with families, at restaurants. The aging effect came not from suffering but from a **persistent, modest gap** — held for two years. That is simultaneously encouraging (it is achievable) and sobering (even this took paid volunteers real effort).",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT 11% LOOKS LIKE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">About 250-300 calories a day — that is all</text>
                    <rect x="80" y="170" width="300" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">ONE BAGEL</text>
                    <text x="230" y="265" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">+ CREAM CHEESE</text>
                    <text x="230" y="315" text-anchor="middle" fill="#fff" font-size="22">~300 kcal</text>
                    <rect x="400" y="170" width="300" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">SODA</text>
                    <text x="550" y="265" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">+ A COOKIE</text>
                    <text x="550" y="315" text-anchor="middle" fill="#fff" font-size="22">~290 kcal</text>
                    <rect x="720" y="170" width="300" height="200" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="870" y="230" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">MINDLESS</text>
                    <text x="870" y="265" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">GRAZING</text>
                    <text x="870" y="315" text-anchor="middle" fill="#fff" font-size="22">~250+ kcal</text>
                    <rect x="100" y="430" width="900" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">NOT SUFFERING — A PERSISTENT GAP</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="19">Real meals, restaurants, families — minus one</text>
                    <text x="550" y="563" text-anchor="middle" fill="#fff" font-size="19">daily indulgence, held steady for two years</text>
                    <rect x="100" y="660" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">TWO TRUTHS AT ONCE</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="18">Encouraging: this dose is achievable.</text>
                    <text x="550" y="788" text-anchor="middle" fill="#fff" font-size="18">Sobering: even paid volunteers found it hard.</text>
                    <rect x="250" y="880" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">Consistency beat severity</text>
                </svg>`,
                caption: "The trial's effective dose: one daily indulgence, consistently skipped"
            }
        },
        {
            type: "quiz",
            question: "In CALERIE 2, what did two years of ~11-12% caloric restriction actually demonstrate in healthy humans?",
            options: [
                { text: "It extended participants' lifespans by a measurable number of years", correct: false },
                { text: "It slowed the DunedinPACE epigenetic pace of aging ~2-3% and improved cardiometabolic markers", correct: true },
                { text: "Nothing — participants failed to restrict, so the trial produced no usable data", correct: false },
                { text: "It slowed aging, but only at the full 25% restriction target", correct: false }
            ],
            explanation: "CALERIE participants aimed for 25% but sustained about 11-12% — and even that modest, real-world dose slowed the DunedinPACE epigenetic aging measure by roughly 2-3% (Nature Aging, 2023) while improving blood pressure, LDL, insulin sensitivity, and inflammation. The trial could not measure lifespan — no human study has run long enough — which is exactly why 'changes aging biology' is the honest claim, not 'proven to extend life.'",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CALERIE 2</text>
                    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="18">~220 adults, 2 years, ~11-12% restriction achieved</text>
                    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="16">What did it actually show?</text>
                    <rect x="150" y="370" width="380" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MEASURED</text>
                    <text x="340" y="475" text-anchor="middle" fill="#fff" font-size="17">Epigenetic pace of aging,</text>
                    <text x="340" y="507" text-anchor="middle" fill="#fff" font-size="17">blood markers, mood</text>
                    <text x="340" y="550" text-anchor="middle" fill="#888" font-size="15">2-year window</text>
                    <rect x="570" y="370" width="380" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NOT MEASURED</text>
                    <text x="760" y="475" text-anchor="middle" fill="#fff" font-size="17">Actual lifespan — that</text>
                    <text x="760" y="507" text-anchor="middle" fill="#fff" font-size="17">trial would take 50 years</text>
                    <text x="760" y="550" text-anchor="middle" fill="#888" font-size="15">Nobody has run it</text>
                    <rect x="200" y="660" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="20">Precision matters: what is the honest claim?</text>
                </svg>`,
                caption: "Test yourself on what the human trial did — and did not — prove"
            }
        },
        {
            type: "concept",
            title: "Autophagy: The Recycling Story, Told Straight",
            content: "Fasting's most famous selling point is **autophagy** — literally 'self-eating.' When nutrients run low, cells tag damaged proteins and worn-out parts, wrap them in membranes, and dissolve them for spare parts. **Mitophagy** is the same recycling applied to broken mitochondria — directly relevant, since mitochondrial dysfunction is a core hallmark of aging. Yoshinori Ohsumi won the **2016 Nobel Prize** for working out the machinery in yeast.\n\nNow the part the podcasts skip:\n\n• **In animals**, the evidence is genuinely strong: boosting autophagy extends lifespan in yeast, worms, flies, and mice; blocking it accelerates aging and neurodegeneration\n\n• **In humans**, we know fasting activates the pathway — but we **cannot easily measure autophagy in living human tissue**, so nobody can tell you '16 hours flips the switch.' Every precise hour-count you have heard is extrapolated from mice, whose metabolism runs roughly seven times faster than ours\n\n• No human trial has shown fasting-induced autophagy extends life or prevents disease. It is a plausible mechanism, not a proven outcome\n\nSo the honest label reads: **autophagy is real, elegant, Nobel-certified biology — with animal-grade evidence for the longevity payoff**. Reason for interest, not a prescription with a timer on it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">AUTOPHAGY, TOLD STRAIGHT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cellular recycling — and its evidence grade</text>
                    <rect x="60" y="160" width="220" height="110" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="170" y="207" text-anchor="middle" fill="#fff" font-size="16">Damaged parts</text>
                    <text x="170" y="237" text-anchor="middle" fill="#888" font-size="14">proteins, mitochondria</text>
                    <path d="M280 215 L340 215" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,215 328,207 328,223" fill="#14b8a6"/>
                    <rect x="340" y="160" width="220" height="110" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="450" y="207" text-anchor="middle" fill="#fff" font-size="16">Tagged and</text>
                    <text x="450" y="237" text-anchor="middle" fill="#fff" font-size="16">wrapped</text>
                    <path d="M560 215 L620 215" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="620,215 608,207 608,223" fill="#14b8a6"/>
                    <rect x="620" y="160" width="220" height="110" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="207" text-anchor="middle" fill="#fff" font-size="16">Dissolved into</text>
                    <text x="730" y="237" text-anchor="middle" fill="#fff" font-size="16">spare parts</text>
                    <path d="M840 215 L900 215" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="900,215 888,207 888,223" fill="#14b8a6"/>
                    <rect x="900" y="160" width="150" height="110" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="975" y="207" text-anchor="middle" fill="#fff" font-size="16">Rebuilt</text>
                    <text x="975" y="237" text-anchor="middle" fill="#888" font-size="14">renewal</text>
                    <rect x="100" y="330" width="900" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="380" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">OHSUMI, NOBEL PRIZE 2016</text>
                    <text x="550" y="418" text-anchor="middle" fill="#fff" font-size="18">Machinery mapped in yeast; mitophagy recycles mitochondria</text>
                    <rect x="60" y="500" width="460" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="555" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">ANIMALS: STRONG</text>
                    <text x="290" y="600" text-anchor="middle" fill="#fff" font-size="17">Boosting autophagy extends</text>
                    <text x="290" y="632" text-anchor="middle" fill="#fff" font-size="17">lifespan in yeast, worms,</text>
                    <text x="290" y="664" text-anchor="middle" fill="#fff" font-size="17">flies, and mice</text>
                    <text x="290" y="720" text-anchor="middle" fill="#888" font-size="15">Blocking it accelerates aging</text>
                    <rect x="580" y="500" width="460" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HUMANS: UNPROVEN</text>
                    <text x="810" y="600" text-anchor="middle" fill="#fff" font-size="17">Cannot measure it in living</text>
                    <text x="810" y="632" text-anchor="middle" fill="#fff" font-size="17">tissue; no outcome trial;</text>
                    <text x="810" y="664" text-anchor="middle" fill="#fff" font-size="17">hour-counts come from mice</text>
                    <text x="810" y="720" text-anchor="middle" fill="#888" font-size="15">Mouse metabolism runs ~7x faster</text>
                    <rect x="150" y="840" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="20">Real biology, animal-grade longevity evidence —</text>
                    <text x="550" y="918" text-anchor="middle" fill="#ffd700" font-size="20">a reason for interest, not a timer to obey</text>
                </svg>`,
                caption: "Cellular recycling is Nobel-certified — the longevity payoff is still animal-grade"
            }
        },
        {
            type: "concept",
            title: "FMD and Time-Restricted Eating: The Honest Scorecard",
            content: "Two popular 'restriction lite' strategies, graded honestly:\n\n**Fasting-Mimicking Diet (FMD)** — Valter Longo's protocol: 5 days a month of a low-calorie (~750–1,100 kcal), low-protein, plant-based diet engineered to keep nutrient sensors quiet while letting you technically eat.\n\n• **Small human trials** (around 100 participants) show cycles reduce weight, blood pressure, IGF-1, and inflammatory markers, with effects lasting months\n• A 2024 follow-up reported reduced biological age estimates by ~2.5 years on blood-marker clocks\n• Grade: **promising, small-n** — real signals, but nothing like PREDIMED's scale, and Longo has commercial ties to the product (disclosed, donated — but worth knowing)\n\n**Time-Restricted Eating (TRE)** — the 16:8-style eating window.\n\n• The **TREAT randomized trial** (Lowe 2020): 16:8 with no other instructions produced **no significant fat-loss advantage** over three meals a day — and a concerning signal of lean-mass loss\n• Later trials show TRE helps mainly when it **cuts calories or aligns eating with circadian biology** — late-night eating produces bigger glucose spikes for the same food\n• Grade: **a useful fence, not a magic window**. It works when it stops nighttime grazing; the clock itself confers little\n\nNeither is dangerous for healthy adults. Neither is the miracle its hashtag suggests.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST SCORECARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two popular protocols, graded on evidence</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">FASTING-MIMICKING</text>
                    <text x="290" y="257" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">DIET (LONGO)</text>
                    <text x="290" y="305" text-anchor="middle" fill="#fff" font-size="17">5 days/month, ~750-1100 kcal,</text>
                    <text x="290" y="337" text-anchor="middle" fill="#fff" font-size="17">low protein, plant-based</text>
                    <text x="290" y="385" text-anchor="middle" fill="#10b981" font-size="17">Small trials: better weight, BP,</text>
                    <text x="290" y="417" text-anchor="middle" fill="#10b981" font-size="17">IGF-1, inflammation</text>
                    <text x="290" y="465" text-anchor="middle" fill="#ef4444" font-size="17">But: ~100-person studies,</text>
                    <text x="290" y="497" text-anchor="middle" fill="#ef4444" font-size="17">commercial ties disclosed</text>
                    <rect x="120" y="525" width="340" height="45" rx="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">GRADE: PROMISING, SMALL-N</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">TIME-RESTRICTED</text>
                    <text x="810" y="257" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">EATING (16:8)</text>
                    <text x="810" y="305" text-anchor="middle" fill="#fff" font-size="17">Eat within a set daily window,</text>
                    <text x="810" y="337" text-anchor="middle" fill="#fff" font-size="17">fast the remaining hours</text>
                    <text x="810" y="385" text-anchor="middle" fill="#ef4444" font-size="17">TREAT RCT (Lowe 2020): no fat-</text>
                    <text x="810" y="417" text-anchor="middle" fill="#ef4444" font-size="17">loss edge, lean-mass warning</text>
                    <text x="810" y="465" text-anchor="middle" fill="#10b981" font-size="17">Helps when it cuts calories or</text>
                    <text x="810" y="497" text-anchor="middle" fill="#10b981" font-size="17">stops late-night eating</text>
                    <rect x="640" y="525" width="340" height="45" rx="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">GRADE: FENCE, NOT MAGIC</text>
                    <rect x="100" y="650" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE CIRCADIAN KERNEL THAT HOLDS UP</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="18">The same meal eaten late at night produces bigger</text>
                    <text x="550" y="778" text-anchor="middle" fill="#fff" font-size="18">glucose spikes — timing is biology, not branding</text>
                    <rect x="250" y="860" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Not dangerous. Not miracles. Tools.</text>
                </svg>`,
                caption: "FMD and 16:8 graded honestly: promising tools, oversold hashtags"
            }
        },
        {
            type: "concept",
            title: "The Great Inversion: Why Advice Flips After 65",
            content: "Here is the card that could save a family member's independence. Everything above applies to **younger and middle-aged adults**. Past roughly age 65, the risk calculus **inverts**.\n\nThe evidence for the flip — **Levine 2014** (Cell Metabolism) found that under age 65, LOW protein intake associated with lower mortality... but in adults **over 65, higher protein associated with LOWER mortality**. The same input, opposite sign.\n\nWhy aging flips the equation:\n\n• **Sarcopenia** — from your 30s you lose roughly 3–8% of muscle per decade, accelerating after 60. Muscle is your metabolic reserve, your glucose sink, and your crash protection\n\n• **Anabolic resistance** — an aging body responds more weakly to protein, so the SAME muscle maintenance needs MORE protein, not less. This is why the 2025–2030 guidelines set older adults at about **1.0–1.5 g/kg/day**\n\n• **The fall math is brutal**: for an 80-year-old, a hip fracture carries roughly 20–30% one-year mortality. Frailty kills faster than the diseases restriction might prevent\n\n• Appetite naturally declines with age (the 'anorexia of aging'), so under-eating often happens **by accident**\n\nFor a 45-year-old, a modest calorie gap may slow aging. For an 80-year-old, the same gap can dismantle the muscle that keeps them off the floor. **Restriction is a young person's experiment; protein protection is an older person's prescription.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GREAT INVERSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Levine 2014: the same input, opposite sign</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">UNDER ~65</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">Modest restriction may slow</text>
                    <text x="290" y="307" text-anchor="middle" fill="#fff" font-size="18">aging biology (CALERIE)</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Lower protein intake tracked</text>
                    <text x="290" y="387" text-anchor="middle" fill="#fff" font-size="18">with lower mortality</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">Growth pathways dialed down =</text>
                    <text x="290" y="473" text-anchor="middle" fill="#888" font-size="16">repair mode advantage</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">OVER ~65</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">Bigger risk: under-eating</text>
                    <text x="810" y="307" text-anchor="middle" fill="#fff" font-size="18">protein and losing muscle</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">HIGHER protein tracked</text>
                    <text x="810" y="387" text-anchor="middle" fill="#fff" font-size="18">with lower mortality</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">Anabolic resistance: same result</text>
                    <text x="810" y="473" text-anchor="middle" fill="#888" font-size="16">now needs MORE protein</text>
                    <rect x="100" y="560" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">WHY: SARCOPENIA + THE FALL MATH</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="18">3-8% muscle lost per decade; hip fracture at 80</text>
                    <text x="550" y="688" text-anchor="middle" fill="#fff" font-size="18">carries roughly 20-30% one-year mortality</text>
                    <rect x="100" y="780" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">2025-2030 GUIDELINES: OLDER ADULTS ~1.0-1.5 g/kg/day</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="18">Protein at every meal, to preserve physical function</text>
                    <rect x="150" y="960" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="19">Restriction: a young person's experiment.</text>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="19">Protein protection: an older person's prescription.</text>
                </svg>`,
                caption: "The same calorie gap that may help at 45 can endanger at 80"
            }
        },
        {
            type: "example",
            title: "Two People, One Diet, Opposite Outcomes",
            content: "Meet two hypothetical people trying the same '14 hours fasting, lighter dinners' routine:\n\n**Maya, 42**, desk job, slightly overweight, strong appetite. The eating window quietly deletes her 10 pm snacks — about 300 calories a day, CALERIE's effective dose. Over a year she loses gentle weight, her blood pressure drifts down, her glucose curves flatten. For Maya, the fence works: mild restriction, real food, no lost muscle because she strength trains and eats protein at each meal.\n\n**Frank, 78**, recently widowed, cooking for one, appetite fading — the '**anorexia of aging**.' The same routine stacks onto meals he was already skipping. He does not notice the 8 pounds that leave over six months, but 5 of them are **muscle**. Rising from his armchair gets harder. One icy morning, the leg strength that would have caught a stumble... is not there. A hip fracture at his age carries roughly **20–30% one-year mortality**.\n\nSame protocol. One person got a longevity tool; the other got frailty on a schedule. This is why every reputable clinician screens the SAME advice through **age, muscle mass, medical status, and appetite** — and why 'is fasting good?' is an incomplete question. Good **for whom** is the question.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME DIET, OPPOSITE FATES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A 14-hour fast, two very different bodies</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MAYA, 42</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="17">Strong appetite, strength</text>
                    <text x="290" y="302" text-anchor="middle" fill="#fff" font-size="17">trains, protein each meal</text>
                    <text x="290" y="350" text-anchor="middle" fill="#10b981" font-size="17">Window deletes late snacks:</text>
                    <text x="290" y="382" text-anchor="middle" fill="#10b981" font-size="17">~300 kcal/day, gently</text>
                    <text x="290" y="430" text-anchor="middle" fill="#fff" font-size="17">BP drifts down, glucose</text>
                    <text x="290" y="462" text-anchor="middle" fill="#fff" font-size="17">curves flatten, muscle kept</text>
                    <text x="290" y="515" text-anchor="middle" fill="#888" font-size="16">Outcome: a working tool</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">FRANK, 78</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="17">Fading appetite, cooking</text>
                    <text x="810" y="302" text-anchor="middle" fill="#fff" font-size="17">for one, already skips meals</text>
                    <text x="810" y="350" text-anchor="middle" fill="#ef4444" font-size="17">Fast stacks on missed meals:</text>
                    <text x="810" y="382" text-anchor="middle" fill="#ef4444" font-size="17">8 lb lost, 5 of them muscle</text>
                    <text x="810" y="430" text-anchor="middle" fill="#fff" font-size="17">Chair rises get harder;</text>
                    <text x="810" y="462" text-anchor="middle" fill="#fff" font-size="17">a stumble goes uncaught</text>
                    <text x="810" y="515" text-anchor="middle" fill="#888" font-size="16">Outcome: frailty on a schedule</text>
                    <rect x="100" y="610" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE SCREEN EVERY CLINICIAN RUNS</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">Age, muscle mass, medical status, appetite —</text>
                    <text x="550" y="738" text-anchor="middle" fill="#fff" font-size="18">the same advice passes one and fails the other</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">'Is fasting good?' — good FOR WHOM?</text>
                </svg>`,
                caption: "One protocol, two bodies: why context decides everything"
            }
        },
        {
            type: "concept",
            title: "Who Should Not Restrict — Full Stop",
            content: "Some groups should skip caloric restriction and extended fasting entirely, no matter what the algorithm serves them:\n\n• **Anyone with a history of eating disorders** — restriction protocols are a well-documented relapse trigger; the 'clean fast' can become the socially-acceptable mask for anorexia\n\n• **Adults over ~70, or anyone frail or losing weight unintentionally** — the inversion card applies; protect protein and muscle instead\n\n• **Pregnant or breastfeeding women** — this is a season for building, not restricting\n\n• **Children and teenagers** — growing bodies should never be in engineered deficits\n\n• **People with type 1 diabetes, or type 2 on insulin or sulfonylureas** — fasting can cause dangerous hypoglycemia; any change needs medication adjustment WITH a clinician\n\n• **Underweight people** (BMI under ~18.5) and anyone recovering from surgery, cancer treatment, or serious illness — repair runs on raw materials\n\nAnd for everyone else, one non-negotiable: restriction should trim **calories**, never **nutrition**. In CALERIE, participants took supplements and were monitored — bone density and lean mass were tracked, and modest losses occurred even there. If you cannot restrict while keeping protein, produce, and micronutrients intact, you are not doing longevity — you are doing malnutrition with better branding. This is exactly the conversation to have with your own clinician first.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHO SHOULD NOT RESTRICT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hard stops — no matter what the feed says</text>
                    <rect x="100" y="160" width="900" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="207" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">EATING DISORDER HISTORY</text>
                    <text x="150" y="242" text-anchor="start" fill="#fff" font-size="16">Restriction protocols are a documented relapse trigger</text>
                    <rect x="100" y="290" width="900" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="337" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">OVER ~70, FRAIL, OR LOSING WEIGHT UNINTENTIONALLY</text>
                    <text x="150" y="372" text-anchor="start" fill="#fff" font-size="16">The inversion applies — protect protein and muscle instead</text>
                    <rect x="100" y="420" width="900" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="467" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">PREGNANT, BREASTFEEDING, CHILDREN, TEENS</text>
                    <text x="150" y="502" text-anchor="start" fill="#fff" font-size="16">Building seasons — never engineered deficits</text>
                    <rect x="100" y="550" width="900" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="597" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">INSULIN OR SULFONYLUREA USERS, TYPE 1 DIABETES</text>
                    <text x="150" y="632" text-anchor="start" fill="#fff" font-size="16">Hypoglycemia risk — meds must be adjusted with a clinician</text>
                    <rect x="100" y="680" width="900" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="727" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">UNDERWEIGHT, POST-SURGERY, IN TREATMENT</text>
                    <text x="150" y="762" text-anchor="start" fill="#fff" font-size="16">Repair runs on raw materials — feed the recovery</text>
                    <rect x="100" y="830" width="900" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="885" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FOR EVERYONE ELSE: TRIM CALORIES, NEVER NUTRITION</text>
                    <text x="550" y="925" text-anchor="middle" fill="#fff" font-size="18">If protein, produce, or micronutrients fall, it is not</text>
                    <text x="550" y="958" text-anchor="middle" fill="#fff" font-size="18">longevity — it is malnutrition with better branding</text>
                </svg>`,
                caption: "The hard-stop list — and the one rule for everyone else"
            }
        },
        {
            type: "quote",
            content: "A little starvation can really do more for the average sick man than can the best medicines and the best doctors.",
            author: "Mark Twain",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM — WITH A CAVEAT</text>
                    <rect x="100" y="160" width="900" height="290" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">"A little starvation can really do more</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">for the average sick man than can the best</text>
                    <text x="550" y="340" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">medicines and the best doctors."</text>
                    <text x="900" y="405" text-anchor="end" fill="#8b5cf6" font-size="20">— Mark Twain</text>
                    <rect x="100" y="510" width="900" height="230" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="570" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">TWAIN WAS HALF RIGHT</text>
                    <text x="550" y="612" text-anchor="middle" fill="#fff" font-size="19">A century later, CALERIE gave his hunch real data —</text>
                    <text x="550" y="647" text-anchor="middle" fill="#fff" font-size="19">for midlife adults, at a modest dose, with nutrition intact.</text>
                    <text x="550" y="690" text-anchor="middle" fill="#888" font-size="17">The half he missed: past 65, the little starvation switches sides.</text>
                    <rect x="250" y="800" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">Even great intuitions need an age filter</text>
                </svg>`,
                caption: "A 19th-century hunch, a 21st-century asterisk"
            }
        },
        {
            type: "application",
            title: "The Practical Middle Path — Start Tonight",
            content: "You do not need a 20-hour fast or a $200 fasting kit. You need the parts of restriction science with the best benefit-to-risk ratio:\n\n1. **Close the kitchen for 12 hours** — finish dinner by 7:30 pm, eat breakfast after 7:30 am. A gentle overnight window aligns with circadian biology, stops late-night grazing, and is safe for nearly everyone\n\n2. **Move dinner earlier and lighter** — the same meal late at night produces bigger glucose spikes; front-load your calories when you can\n\n3. **Protect protein FIRST** — before cutting anything, anchor each meal with a protein serving (target 1.2–1.6 g/kg/day; 1.0–1.5 g/kg if you are 65+). Restriction should come out of refined carbs and processed snacks, never out of muscle\n\n4. **Let real food do the restricting** — Hall 2019 showed whole foods cut ~500 calories a day automatically. That is CALERIE's dose, achieved without counting\n\n5. **If you are 65+, invert the checklist** — skip deliberate deficits, eat protein at every meal, and lift something twice a week to make that protein stick\n\n6. **Talk to your clinician before anything more aggressive** — especially if you take diabetes or blood-pressure medication\n\nThe middle path gets you most of the biology with almost none of the risk.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIDDLE PATH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Most of the biology, almost none of the risk</text>
                    <rect x="100" y="160" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="200" y="212" text-anchor="start" fill="#fff" font-size="19">Close the kitchen 12 hours overnight</text>
                    <text x="200" y="248" text-anchor="start" fill="#888" font-size="15">Dinner by 7:30 pm, breakfast after 7:30 am</text>
                    <rect x="100" y="300" width="900" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="352" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">2.</text>
                    <text x="200" y="352" text-anchor="start" fill="#fff" font-size="19">Dinner earlier and lighter</text>
                    <text x="200" y="388" text-anchor="start" fill="#888" font-size="15">Late meals spike glucose harder — same food, worse curve</text>
                    <rect x="100" y="440" width="900" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="492" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">3.</text>
                    <text x="200" y="492" text-anchor="start" fill="#fff" font-size="19">Protein first: 1.2-1.6 g/kg/day, every meal</text>
                    <text x="200" y="528" text-anchor="start" fill="#888" font-size="15">Cut refined carbs and snacks — never muscle</text>
                    <rect x="100" y="580" width="900" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="632" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">4.</text>
                    <text x="200" y="632" text-anchor="start" fill="#fff" font-size="19">Let real food restrict for you</text>
                    <text x="200" y="668" text-anchor="start" fill="#888" font-size="15">Hall 2019: whole food cuts ~500 kcal/day automatically</text>
                    <rect x="100" y="720" width="900" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="772" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">5.</text>
                    <text x="200" y="772" text-anchor="start" fill="#fff" font-size="19">Over 65? Invert: no deficits, protein up,</text>
                    <text x="200" y="808" text-anchor="start" fill="#888" font-size="15">lift twice a week to make the protein stick</text>
                    <rect x="100" y="860" width="900" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="912" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">6.</text>
                    <text x="200" y="912" text-anchor="start" fill="#fff" font-size="19">Clinician first for anything more aggressive</text>
                    <text x="200" y="948" text-anchor="start" fill="#888" font-size="15">Especially with diabetes or blood-pressure meds</text>
                    <rect x="250" y="1010" width="600" height="60" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1050" text-anchor="middle" fill="#ffd700" font-size="19">Gentle, consistent, protein-protected</text>
                </svg>`,
                caption: "Six steps that capture the science without the risk"
            }
        },
        {
            type: "quiz",
            question: "Your 76-year-old father, who has been losing weight without trying, asks if he should start an 18-hour daily fast 'for autophagy.' Based on this lesson, what is the best-evidence answer?",
            options: [
                { text: "Yes — autophagy benefits are proven in humans and matter most at his age", correct: false },
                { text: "Yes, but only if he extends the fast to 24 hours weekly for a stronger effect", correct: false },
                { text: "No — at his age with unintentional weight loss, the priority flips to protein at every meal, preserved muscle, and a clinician's input", correct: true },
                { text: "No — fasting is useless at every age because CALERIE showed restriction does nothing", correct: false }
            ],
            explanation: "He hits two hard-stop flags: age over ~70 and unintentional weight loss. Levine 2014 showed the protein-mortality relationship inverts after 65, and sarcopenia plus anabolic resistance mean deficits now cost muscle — the thing that prevents the falls and fractures that carry 20-30% one-year mortality at his age. Autophagy's longevity payoff is animal-grade evidence, not proven in humans. And CALERIE showed restriction does change aging biology — in midlife adults, which he is not.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE FAMILY QUESTION</text>
                    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="18">Age 76, unintentional weight loss,</text>
                    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="16">wants an 18-hour fast 'for autophagy'</text>
                    <rect x="150" y="370" width="380" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">RED FLAGS?</text>
                    <text x="340" y="475" text-anchor="middle" fill="#fff" font-size="17">Age over ~70</text>
                    <text x="340" y="507" text-anchor="middle" fill="#fff" font-size="17">Losing weight unintentionally</text>
                    <text x="340" y="550" text-anchor="middle" fill="#888" font-size="15">Check the hard-stop list</text>
                    <rect x="570" y="370" width="380" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHAT FLIPS AT 65+?</text>
                    <text x="760" y="475" text-anchor="middle" fill="#fff" font-size="17">Protein needs, muscle risk,</text>
                    <text x="760" y="507" text-anchor="middle" fill="#fff" font-size="17">the whole restriction calculus</text>
                    <text x="760" y="550" text-anchor="middle" fill="#888" font-size="15">Levine 2014: the inversion</text>
                    <rect x="200" y="670" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="20">Apply the lesson: what do you tell him?</text>
                </svg>`,
                caption: "Final check: applying the inversion to a real conversation"
            }
        }
    ]
},
{
    id: 7,
    title: "The Fitness Prescription for a Long Life",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "What If Being Unfit Was Riskier Than Smoking?",
            content: "In 2018, cardiologist Wael Jaber and his team at the Cleveland Clinic published something that stunned even them. They had treadmill-tested **122,007 patients** and followed them for years. The finding, published as **Mandsager 2018** in JAMA Network Open: low cardiorespiratory fitness was associated with a **greater risk of death than smoking, diabetes, or heart disease**.\n\nRead that again. The thing you can change with a pair of walking shoes carried more mortality risk than a pack-a-day habit.\n\nAnd here is the twist that makes this lesson personal: the researchers found **no upper limit** to the benefit. The fittest people — even those in their 70s and 80s — kept gaining. Your body is holding a prescription with no maximum dose. This lesson teaches you exactly how to fill it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STUNNING FINDING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Mandsager 2018 — 122,007 patients</text>
                    <rect x="150" y="150" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">122,007 TREADMILL TESTS</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="19">Cleveland Clinic, followed for years</text>
                    <text x="550" y="340" text-anchor="middle" fill="#888" font-size="20">Mortality risk associated with each factor</text>
                    <rect x="150" y="370" width="440" height="60" rx="12" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="180" y="408" text-anchor="start" fill="#fff" font-size="19">Smoking</text>
                    <rect x="150" y="450" width="500" height="60" rx="12" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="180" y="488" text-anchor="start" fill="#fff" font-size="19">Diabetes</text>
                    <rect x="150" y="530" width="560" height="60" rx="12" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="180" y="568" text-anchor="start" fill="#fff" font-size="19">Coronary artery disease</text>
                    <rect x="150" y="610" width="800" height="60" rx="12" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="3"/>
                    <text x="180" y="648" text-anchor="start" fill="#fff" font-weight="bold" font-size="19">LOW FITNESS — the biggest bar of all</text>
                    <rect x="150" y="720" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE GOOD NEWS</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="19">Fitness is the one risk factor you can train</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">And there was no upper limit to the benefit</text>
                </svg>`,
                caption: "In 122,007 patients, low fitness carried more mortality risk than smoking"
            }
        },
        {
            type: "concept",
            title: "Fitness: The Strongest Predictor You Control",
            content: "The **Mandsager 2018** study (JAMA Network Open) grouped 122,007 patients by treadmill performance into five fitness bands, from **low** to **elite**. Then it counted who died over roughly a decade of follow-up.\n\nThe results rewrote the risk tables:\n\n• **Low fitness vs elite fitness** carried a mortality risk increase comparable to — and by some comparisons larger than — **smoking, diabetes, or coronary artery disease**\n• Moving from **low to below-average** fitness produced the single biggest drop in risk — the first gains are the cheapest\n• **No upper limit**: elite performers still did better than high performers. Extra fitness never stopped paying\n• The benefit held at **every age**, including patients over 70\n\nWhy does cardiorespiratory fitness predict so powerfully? Because a treadmill test secretly measures everything at once: heart pumping capacity, lung function, blood vessel health, mitochondrial density, and muscle quality. **VO2max** — your maximum rate of oxygen use — is a full-body audit disguised as exercise.\n\nDoctors can't prescribe a pill this powerful. But you can prescribe it to yourself, starting today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FITNESS LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five bands, each rung lowers mortality risk</text>
                    <rect x="150" y="160" width="800" height="90" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">LOW</text>
                    <text x="200" y="232" text-anchor="start" fill="#fff" font-size="17">Highest risk band — riskier than smoking</text>
                    <rect x="150" y="270" width="800" height="90" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="310" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">BELOW AVERAGE</text>
                    <text x="200" y="342" text-anchor="start" fill="#fff" font-size="17">Biggest single improvement happens here</text>
                    <rect x="150" y="380" width="800" height="90" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="420" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">AVERAGE</text>
                    <text x="200" y="452" text-anchor="start" fill="#fff" font-size="17">Risk keeps falling with each step up</text>
                    <rect x="150" y="490" width="800" height="90" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="530" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">HIGH</text>
                    <text x="200" y="562" text-anchor="start" fill="#fff" font-size="17">Large survival advantage at every age</text>
                    <rect x="150" y="600" width="800" height="90" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="640" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">ELITE</text>
                    <text x="200" y="672" text-anchor="start" fill="#fff" font-size="17">Lowest mortality — benefit never plateaued</text>
                    <rect x="150" y="740" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHY VO2MAX PREDICTS SO WELL</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="18">One test audits heart, lungs, vessels,</text>
                    <text x="550" y="862" text-anchor="middle" fill="#fff" font-size="18">mitochondria, and muscle all at once</text>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">No upper limit was found — ever</text>
                </svg>`,
                caption: "Each step up the fitness ladder lowered mortality — with no ceiling"
            }
        },
        {
            type: "visual",
            title: "The First Step Pays the Most",
            content: "Here is the most hopeful detail hiding in the Mandsager data: the risk curve is **steepest at the bottom**. Going from the least-fit group to merely below-average produced the largest single reduction in mortality risk in the entire study.\n\nTranslation: if you currently do almost nothing, you are standing on the most valuable real estate in exercise science. A daily 20-minute walk buys you more longevity per minute than an elite athlete's extra interval session buys them. The curve keeps rising forever — but it rises **fastest for beginners**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BENEFIT CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Survival benefit vs fitness level</text>
                    <line x1="150" y1="700" x2="980" y2="700" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="700" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="18">Fitness level (low to elite)</text>
                    <text x="110" y="440" text-anchor="middle" fill="#888" font-size="18" transform="rotate(-90 110 440)">Survival benefit</text>
                    <path d="M150 700 Q 260 420 400 340 Q 600 240 950 200" stroke="#10b981" stroke-width="5" fill="none"/>
                    <circle cx="150" cy="700" r="14" fill="#ef4444"/>
                    <text x="215" y="660" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">You start here</text>
                    <circle cx="330" cy="380" r="14" fill="#f59e0b"/>
                    <text x="330" y="340" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">Steepest gain</text>
                    <circle cx="950" cy="200" r="14" fill="#10b981"/>
                    <text x="890" y="165" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Still climbing</text>
                    <rect x="150" y="800" width="380" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="340" y="850" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">BEGINNERS</text>
                    <text x="340" y="890" text-anchor="middle" fill="#fff" font-size="17">Biggest gains per minute</text>
                    <rect x="570" y="800" width="380" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="850" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ATHLETES</text>
                    <text x="760" y="890" text-anchor="middle" fill="#fff" font-size="17">Benefit never plateaus</text>
                    <rect x="200" y="970" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="20">The least fit have the most to gain</text>
                </svg>`,
                caption: "The mortality benefit curve is steepest at the bottom and never flattens"
            }
        },
        {
            type: "example",
            title: "The Handshake That Predicts Your Future",
            content: "In 2015, The Lancet published results from the **PURE study** — the Prospective Urban Rural Epidemiology project — which tracked roughly **140,000 adults across 17 countries** for about four years. One of their measurements was almost comically simple: squeeze this device as hard as you can.\n\nThe result: **grip strength predicted death better than systolic blood pressure did.** Every **5 kg drop** in grip strength was associated with a **16% higher risk of death from any cause**, a 17% higher risk of cardiovascular death, and more heart attacks and strokes.\n\nWhy would a handshake forecast mortality? Grip strength is a **proxy for total-body muscle mass and neuromuscular health**. Weak grip usually means weak everything — and muscle is your metabolic reserve, your glucose disposal system, and your armor when illness or a fall arrives.\n\nThis is why a 75-year-old who can carry her own groceries, open her own jars, and rise from a chair without using her arms is displaying a vital sign — one that predicts her future as well as anything her doctor measures with a cuff.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">GRIP STRENGTH SPEAKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">PURE study, Lancet 2015 — 140,000 adults, 17 countries</text>
                    <rect x="150" y="150" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="23">EVERY 5 KG WEAKER GRIP</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="19">= 16% higher risk of death from any cause</text>
                    <text x="550" y="278" text-anchor="middle" fill="#888" font-size="17">and 17% higher cardiovascular death risk</text>
                    <rect x="60" y="350" width="460" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">BLOOD PRESSURE</text>
                    <text x="290" y="445" text-anchor="middle" fill="#fff" font-size="18">The classic vital sign</text>
                    <text x="290" y="480" text-anchor="middle" fill="#888" font-size="16">Measured at every visit</text>
                    <text x="290" y="515" text-anchor="middle" fill="#888" font-size="16">Weaker mortality predictor</text>
                    <rect x="580" y="350" width="460" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="400" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">GRIP STRENGTH</text>
                    <text x="810" y="445" text-anchor="middle" fill="#fff" font-size="18">The overlooked vital sign</text>
                    <text x="810" y="480" text-anchor="middle" fill="#888" font-size="16">Almost never measured</text>
                    <text x="810" y="515" text-anchor="middle" fill="#888" font-size="16">Stronger mortality predictor</text>
                    <rect x="150" y="620" width="800" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="672" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">WHY A HANDSHAKE PREDICTS</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="18">Grip is a window into total-body muscle:</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="17">metabolic reserve, glucose disposal,</text>
                    <text x="550" y="783" text-anchor="middle" fill="#888" font-size="17">and your armor against falls and illness</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Muscle is a vital sign — keep yours strong</text>
                </svg>`,
                caption: "In PURE, grip strength predicted death better than blood pressure"
            }
        },
        {
            type: "quiz",
            question: "What did the Mandsager 2018 study of 122,007 patients find about low cardiorespiratory fitness?",
            options: [
                { text: "It was risky, but still safer than smoking or diabetes", correct: false },
                { text: "It carried a mortality risk greater than smoking, and the benefit of fitness had no upper limit", correct: true },
                { text: "It only mattered for patients under 50; benefits plateaued in older adults", correct: false },
                { text: "Extreme fitness increased mortality, creating a U-shaped risk curve", correct: false }
            ],
            explanation: "Mandsager 2018 (JAMA Network Open) found low fitness was associated with greater mortality risk than smoking, diabetes, or heart disease — and found no upper limit to the benefit: elite performers still outlived merely high performers, at every age studied. The U-shaped-curve option is the most tempting distractor because it gets repeated online, but this study specifically looked for an upper harm threshold and did not find one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MANDSAGER 2018</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">122,007 patients, treadmill-tested</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did low fitness mean for mortality?</text>
                    <rect x="150" y="360" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="412" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">CLUE 1</text>
                    <text x="550" y="452" text-anchor="middle" fill="#fff" font-size="18">Compare it to smoking and diabetes</text>
                    <rect x="150" y="520" width="800" height="130" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="572" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">CLUE 2</text>
                    <text x="550" y="612" text-anchor="middle" fill="#fff" font-size="18">Was there a ceiling on the benefit?</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Think back to the fitness ladder</text>
                </svg>`,
                caption: "Test your understanding of the landmark fitness study"
            }
        },
        {
            type: "concept",
            title: "Your Engine Shrinks 10% a Decade — Unless You Fight",
            content: "**VO2max** — your aerobic engine size — declines about **10% per decade** after your 30s if you're sedentary. That quiet slide is why climbing stairs feels harder at 55 than at 35, and it's why so many people cross the **independence threshold** in their 70s: the point where daily life itself demands nearly your entire aerobic capacity.\n\nBut here is the crucial word: *sedentary*. The decline is not a fixed sentence:\n\n• VO2max is **trainable at any age** — studies have improved it in people in their 60s, 70s, even 90s\n• Masters athletes lose closer to **5% per decade**, roughly half the sedentary rate\n• A few months of consistent **Zone 2 training** (a pace where you can talk in full sentences, but singing would be hard) measurably grows the engine back\n\nThink of VO2max as a retirement account for movement. Every training session is a deposit. The higher your peak, the more decades you can 'spend down' before ordinary life — carrying luggage, playing with grandkids, walking a hilly city — becomes a maximal effort.\n\nYou are not aging out of fitness. You are, at most, resting out of it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO AGING CURVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">VO2max across the decades</text>
                    <line x1="150" y1="720" x2="980" y2="720" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="720" x2="150" y2="170" stroke="#888" stroke-width="2"/>
                    <text x="250" y="765" text-anchor="middle" fill="#888" font-size="17">30</text>
                    <text x="480" y="765" text-anchor="middle" fill="#888" font-size="17">50</text>
                    <text x="710" y="765" text-anchor="middle" fill="#888" font-size="17">70</text>
                    <text x="930" y="765" text-anchor="middle" fill="#888" font-size="17">90</text>
                    <text x="110" y="450" text-anchor="middle" fill="#888" font-size="17" transform="rotate(-90 110 450)">VO2max</text>
                    <path d="M180 240 L 930 640" stroke="#10b981" stroke-width="5" fill="none"/>
                    <text x="700" y="500" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Trained: ~5% per decade</text>
                    <path d="M180 250 Q 500 480 930 700" stroke="#ef4444" stroke-width="5" fill="none" stroke-dasharray="12"/>
                    <text x="480" y="620" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">Sedentary: ~10% per decade</text>
                    <line x1="150" y1="680" x2="980" y2="680" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8"/>
                    <text x="840" y="668" text-anchor="middle" fill="#f59e0b" font-size="16">Independence threshold</text>
                    <rect x="60" y="820" width="460" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="870" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SEDENTARY PATH</text>
                    <text x="290" y="910" text-anchor="middle" fill="#fff" font-size="17">Crosses the threshold in the 70s</text>
                    <rect x="580" y="820" width="460" height="140" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="870" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TRAINED PATH</text>
                    <text x="810" y="910" text-anchor="middle" fill="#fff" font-size="17">Decades more above the line</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">VO2max is trainable at ANY age</text>
                </svg>`,
                caption: "Sedentary VO2max falls ~10% per decade; training cuts the loss roughly in half"
            }
        },
        {
            type: "concept",
            title: "After 60, Train for Power, Not Just Strength",
            content: "Lifting weights twice a week is associated with **10–17% lower all-cause mortality** in large cohort studies — muscle is longevity currency. But past age 60, exercise scientists make a critical upgrade to the prescription: prioritize **power** — force produced *quickly*.\n\nHere's why. As you age, you lose **fast-twitch muscle fibers** faster than slow-twitch ones. Power (strength x speed) declines earlier and steeper than pure strength. And power is what real life runs on:\n\n• **Catching yourself** when you trip — you have about half a second to get a foot down. That's a power event, not a strength event\n• **Climbing stairs** without hauling on the railing\n• **Rising from a chair** without using your arms — the classic chair-stand test predicts disability years ahead\n\nTraining power is simple: take the *lifting* half of an exercise and do it **with intent to move fast** (the lowering stays slow and controlled). Chair rises done briskly. Step-ups with a quick drive. Light weights moved explosively. Sit-to-stands against the clock.\n\nStrength keeps you capable. **Power keeps you upright.** Falls are a leading cause of injury death after 65 — power training is fall prevention you can do beside your kitchen counter.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STRENGTH vs POWER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">After 60, speed of movement is the priority</text>
                    <rect x="60" y="160" width="460" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STRENGTH</text>
                    <text x="290" y="255" text-anchor="middle" fill="#fff" font-size="18">How much force</text>
                    <text x="290" y="290" text-anchor="middle" fill="#888" font-size="16">Declines gradually with age</text>
                    <text x="290" y="330" text-anchor="middle" fill="#888" font-size="16">2x/week lifting linked to</text>
                    <text x="290" y="362" text-anchor="middle" fill="#fff" font-size="17">10-17% lower mortality</text>
                    <rect x="580" y="160" width="460" height="280" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">POWER</text>
                    <text x="810" y="255" text-anchor="middle" fill="#fff" font-size="18">Force x speed</text>
                    <text x="810" y="290" text-anchor="middle" fill="#888" font-size="16">Declines earlier and faster</text>
                    <text x="810" y="330" text-anchor="middle" fill="#888" font-size="16">Fast-twitch fibers vanish first</text>
                    <text x="810" y="362" text-anchor="middle" fill="#fff" font-size="17">What catches you when you trip</text>
                    <rect x="150" y="490" width="800" height="300 " rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="542" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">POWER EVENTS IN REAL LIFE</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="18">Catching a trip — half a second to react</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="18">Climbing stairs without the railing</text>
                    <text x="550" y="666" text-anchor="middle" fill="#fff" font-size="18">Rising from a chair, arms free</text>
                    <text x="550" y="712" text-anchor="middle" fill="#888" font-size="16">How to train it: lift fast, lower slow —</text>
                    <text x="550" y="744" text-anchor="middle" fill="#888" font-size="16">brisk chair rises, quick step-ups, light loads</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Strength keeps you capable. Power keeps you upright.</text>
                </svg>`,
                caption: "Power — force produced quickly — declines first and matters most after 60"
            }
        },
        {
            type: "example",
            title: "The Chair Test That Saw a Fall Coming",
            content: "Picture two 68-year-olds, Ruth and Elaine, both 'healthy' on paper. Ask each to do a simple test used in geriatric clinics worldwide: **five chair stands** — sit-to-stand five times, arms crossed, as fast as safely possible.\n\n• **Ruth**: 9 seconds. She trains twice a week with brisk step-ups, quick sit-to-stands, and light dumbbell presses done with speed.\n• **Elaine**: 19 seconds, using momentum and a grunt on the last two. She walks occasionally but hasn't done resistance work in decades.\n\nA year later, both catch a toe on a curb. Ruth's leg shoots forward — a fast, powerful step — and she recovers with a startled laugh. Elaine's leg responds a beat too slowly. She falls, fractures her hip, and enters the statistic no one wants: falls are a **leading cause of injury death in adults over 65**, and roughly a third of older adults fall each year.\n\nThe difference wasn't luck. It was **rate of force development** — trainable in any kitchen, with a chair, for free. The chair-stand test isn't measuring fitness trivia. It's a preview of the moment that decides whether a trip becomes a story or a hospitalization.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A TALE OF TWO TRIPS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The 5x chair-stand test predicts the outcome</text>
                    <rect x="60" y="160" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RUTH, 68</text>
                    <text x="290" y="258" text-anchor="middle" fill="#fff" font-size="18">5 chair stands: 9 seconds</text>
                    <text x="290" y="296" text-anchor="middle" fill="#888" font-size="16">Trains power 2x/week</text>
                    <text x="290" y="330" text-anchor="middle" fill="#888" font-size="16">Fast step-ups, quick sit-to-stands</text>
                    <text x="290" y="385" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Trips on curb...</text>
                    <text x="290" y="425" text-anchor="middle" fill="#fff" font-size="17">Fast recovery step. Laughs it off.</text>
                    <rect x="580" y="160" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ELAINE, 68</text>
                    <text x="810" y="258" text-anchor="middle" fill="#fff" font-size="18">5 chair stands: 19 seconds</text>
                    <text x="810" y="296" text-anchor="middle" fill="#888" font-size="16">No resistance work in decades</text>
                    <text x="810" y="330" text-anchor="middle" fill="#888" font-size="16">Occasional walking only</text>
                    <text x="810" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">Trips on curb...</text>
                    <text x="810" y="425" text-anchor="middle" fill="#fff" font-size="17">Leg responds late. Hip fracture.</text>
                    <rect x="150" y="540" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="592" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE STAKES</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">Falls: a leading cause of injury death over 65</text>
                    <text x="550" y="670" text-anchor="middle" fill="#888" font-size="17">About 1 in 3 older adults falls each year</text>
                    <rect x="150" y="770" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="822" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE DIFFERENCE WAS TRAINABLE</text>
                    <text x="550" y="862" text-anchor="middle" fill="#fff" font-size="18">Rate of force development — built at home,</text>
                    <text x="550" y="895" text-anchor="middle" fill="#fff" font-size="18">with a chair, for free</text>
                    <rect x="200" y="980" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="20">Test yourself: 5 chair stands, arms crossed</text>
                </svg>`,
                caption: "Two identical trips, two outcomes — decided by trainable leg power"
            }
        },
        {
            type: "concept",
            title: "Your Metabolism Isn't Slowing. Your Muscle Is Leaving.",
            content: "'My metabolism slowed down after 40' may be the most repeated — and most wrong — sentence in health. In 2021, Herman Pontzer and an international team published a landmark analysis in *Science* using doubly labeled water (the gold standard for measuring energy burn) in **over 6,400 people aged 8 days to 95 years**.\n\nThe finding, from **Pontzer 2021**: adjusted for body composition, metabolism is essentially **stable from age 20 to 60**. No mysterious slowdown at 30. None at 40. None at 50. Only after 60 does it decline, and gently — about **0.7% per year**.\n\nSo why do people gain weight and feel their engine fading in midlife? Two reasons, both under your influence:\n\n• **Muscle loss** — sarcopenia can quietly claim 3–8% of muscle per decade after 30 if unopposed. Less muscle means less daily burn and less strength\n• **Activity loss** — careers, commutes, and couches shrink daily movement year by year\n\nThis is genuinely liberating news. A slowing metabolism would be fate. Muscle loss and inactivity are **choices with alternatives** — and the entire fitness prescription in this lesson is the alternative. The engine isn't dying; it's understaffed. Rehire the muscle.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE METABOLISM MYTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pontzer 2021, Science — 6,400+ people measured</text>
                    <line x1="150" y1="560" x2="980" y2="560" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="560" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="240" y="600" text-anchor="middle" fill="#888" font-size="17">20</text>
                    <text x="470" y="600" text-anchor="middle" fill="#888" font-size="17">40</text>
                    <text x="700" y="600" text-anchor="middle" fill="#888" font-size="17">60</text>
                    <text x="930" y="600" text-anchor="middle" fill="#888" font-size="17">90</text>
                    <text x="110" y="370" text-anchor="middle" fill="#888" font-size="16" transform="rotate(-90 110 370)">Adjusted burn</text>
                    <path d="M240 290 L 700 292" stroke="#10b981" stroke-width="6" fill="none"/>
                    <path d="M700 292 L 930 380" stroke="#f59e0b" stroke-width="6" fill="none"/>
                    <text x="470" y="255" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">FLAT from 20 to 60</text>
                    <text x="850" y="450" text-anchor="middle" fill="#f59e0b" font-size="17">-0.7%/yr after 60</text>
                    <rect x="60" y="650" width="460" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="700" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE REAL CULPRITS</text>
                    <text x="290" y="742" text-anchor="middle" fill="#fff" font-size="17">Muscle loss: 3-8% per decade</text>
                    <text x="290" y="775" text-anchor="middle" fill="#fff" font-size="17">Shrinking daily activity</text>
                    <rect x="580" y="650" width="460" height="190" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="700" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE LIBERATION</text>
                    <text x="810" y="742" text-anchor="middle" fill="#fff" font-size="17">Both are changeable choices</text>
                    <text x="810" y="775" text-anchor="middle" fill="#fff" font-size="17">Not metabolic fate</text>
                    <rect x="200" y="900" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">The engine isn't dying — it's understaffed.</text>
                    <text x="550" y="972" text-anchor="middle" fill="#ffd700" font-size="20">Rehire the muscle.</text>
                </svg>`,
                caption: "Adjusted metabolism is flat from 20 to 60 — midlife weight gain is muscle and movement loss"
            }
        },
        {
            type: "application",
            title: "Your Weekly Longevity Template",
            content: "Here is the whole lesson condensed into one repeatable week. It covers every mortality-linked domain — aerobic engine, strength, power, and balance — in about 4–5 hours total:\n\n1. **Zone 2 cardio, ~150 minutes/week** — brisk walking, cycling, or swimming at a pace where you can talk but not sing. Split it however you like: five 30-minute sessions works beautifully\n\n2. **Strength training, 2 sessions/week** — squats or sit-to-stands, a push (wall or floor push-ups), a pull (rows with a band), and a carry (walk with groceries or dumbbells). That 2x/week habit tracks with 10–17% lower mortality\n\n3. **Power work, 10 minutes, 2x/week** — after warming up: 3 sets of 5 *brisk* chair rises, quick step-ups, or light presses moved fast. Lift fast, lower slow\n\n4. **Balance practice, daily** — single-leg stand while brushing your teeth; 30 seconds per side. Progress by closing your eyes\n\n5. **Daily walks** — every walk counts toward Zone 2, and post-meal walks blunt glucose spikes\n\nStart at half these doses if you're new — remember, the steepest gains belong to beginners. And clear any new program with your clinician if you have heart or joint conditions.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LONGEVITY WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four domains, about 4-5 hours total</text>
                    <rect x="150" y="150" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1. ZONE 2 CARDIO</text>
                    <text x="200" y="240" text-anchor="start" fill="#fff" font-size="18">~150 min/week — talk, but can't sing</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">2. STRENGTH x2</text>
                    <text x="200" y="400" text-anchor="start" fill="#fff" font-size="18">Squat, push, pull, carry — 10-17% lower mortality</text>
                    <rect x="150" y="470" width="800" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">3. POWER x2</text>
                    <text x="200" y="560" text-anchor="start" fill="#fff" font-size="18">10 min: brisk chair rises, fast step-ups</text>
                    <rect x="150" y="630" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="680" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">4. BALANCE DAILY</text>
                    <text x="200" y="720" text-anchor="start" fill="#fff" font-size="18">Single-leg stand, 30 sec/side, while brushing teeth</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="840" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">5. WALK EVERY DAY</text>
                    <text x="200" y="880" text-anchor="start" fill="#fff" font-size="18">Post-meal walks blunt glucose spikes too</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">New to this? Start at half doses — gains are steepest there</text>
                </svg>`,
                caption: "The complete weekly prescription: cardio, strength, power, balance, walking"
            }
        },
        {
            type: "quote",
            content: "Exercise is the closest thing we have found to a miracle drug. If it came in pill form, everyone would take it — and no pharmaceutical on Earth could compete with its effect on how long and how well you live.",
            author: "Adapted from a sentiment echoed across the longevity literature, from the Cleveland Clinic researchers to exercise physiologists worldwide",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"Exercise is the closest thing we have</text>
                    <text x="160" y="262" text-anchor="start" fill="#fff" font-style="italic" font-size="22">found to a miracle drug. If it came in</text>
                    <text x="160" y="304" text-anchor="start" fill="#fff" font-style="italic" font-size="22">pill form, everyone would take it."</text>
                    <text x="940" y="380" text-anchor="end" fill="#8b5cf6" font-size="17">— echoed across the longevity literature</text>
                    <rect x="150" y="500" width="800" height="280" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="555" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT THE 'PILL' DELIVERS</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">Lower all-cause mortality — no upper limit</text>
                    <text x="550" y="636" text-anchor="middle" fill="#fff" font-size="18">Preserved independence and fall protection</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="18">A metabolic engine that stays staffed</text>
                    <text x="550" y="720" text-anchor="middle" fill="#888" font-size="16">Side effects: better sleep, mood, and memory</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">The prescription is free. The dose is weekly.</text>
                </svg>`,
                caption: "A moment of reflection on the miracle drug you already own"
            }
        },
        {
            type: "quiz",
            question: "Why do exercise scientists say power training becomes the priority after age 60?",
            options: [
                { text: "Power training burns more calories than any other exercise, reversing metabolic slowdown", correct: false },
                { text: "Fast-twitch fibers and speed of force decline earliest, and power is what prevents falls and preserves stairs and chair rises", correct: true },
                { text: "Heavy strength training becomes unsafe after 60, so fast light movements are the only option", correct: false },
                { text: "Power training raises VO2max faster than Zone 2 cardio does", correct: false }
            ],
            explanation: "Power — force produced quickly — declines earlier and faster than pure strength because fast-twitch fibers are lost first with age. Real-life emergencies like catching a trip give you about half a second to respond: a power event. Heavy strength training remains safe and valuable for most older adults with sensible progression — the point isn't that lifting is dangerous, it's that adding intentional speed to movements trains the specific capacity that keeps you upright and independent.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">POWER AFTER 60</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Why does speed of movement become</text>
                    <text x="550" y="258" text-anchor="middle" fill="#fff" font-size="18">the training priority?</text>
                    <rect x="60" y="360" width="460" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="412" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">CLUE 1</text>
                    <text x="290" y="455" text-anchor="middle" fill="#fff" font-size="17">Which muscle fibers</text>
                    <text x="290" y="488" text-anchor="middle" fill="#fff" font-size="17">disappear first?</text>
                    <rect x="580" y="360" width="460" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="412" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CLUE 2</text>
                    <text x="810" y="455" text-anchor="middle" fill="#fff" font-size="17">How long do you have</text>
                    <text x="810" y="488" text-anchor="middle" fill="#fff" font-size="17">to catch a trip?</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Think of Ruth and Elaine at the curb</text>
                </svg>`,
                caption: "Final check: the case for training speed, not just strength"
            }
        },
        {
            type: "concept",
            title: "The Prescription, Signed",
            content: "Step back and look at what the evidence just handed you:\n\n• **Mandsager 2018** (122,007 patients): low fitness out-risks smoking, and the benefit of getting fitter **never hits a ceiling**\n• **PURE, Lancet 2015** (140,000 adults): grip strength — a proxy for total-body muscle — predicts mortality better than blood pressure\n• **VO2max** falls ~10% per decade if you sit still, but is trainable at any age; masters athletes cut the loss in half\n• **Strength 2x/week** tracks with 10–17% lower all-cause mortality; after 60, add **speed** to protect against falls\n• **Pontzer 2021**: your metabolism is stable from 20 to 60 — midlife decline is muscle loss and inactivity, both reversible\n\nNotice what's *not* on this list: expensive equipment, supplements, or genetic luck. The entire fitness prescription runs on walking shoes, something heavy, a chair, and consistency.\n\nIn the next lesson we'll examine the molecules — rapamycin, metformin, NAD+ boosters — that promise to do chemically what you just learned to do physically. Spoiler: none of them yet beats what you can do with this week's template. You are already holding the best drug in the pharmacy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EVIDENCE STACK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five findings, one prescription</text>
                    <rect x="150" y="150" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="198" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">MANDSAGER 2018</text>
                    <text x="200" y="234" text-anchor="start" fill="#fff" font-size="17">Low fitness out-risks smoking; no benefit ceiling</text>
                    <rect x="150" y="290" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="338" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">PURE 2015</text>
                    <text x="200" y="374" text-anchor="start" fill="#fff" font-size="17">Grip strength outpredicts blood pressure</text>
                    <rect x="150" y="430" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="478" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">VO2MAX SCIENCE</text>
                    <text x="200" y="514" text-anchor="start" fill="#fff" font-size="17">-10%/decade sedentary — trainable at any age</text>
                    <rect x="150" y="570" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="618" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">STRENGTH + POWER</text>
                    <text x="200" y="654" text-anchor="start" fill="#fff" font-size="17">2x/week lifting: 10-17% lower mortality</text>
                    <rect x="150" y="710" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="758" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">PONTZER 2021</text>
                    <text x="200" y="794" text-anchor="start" fill="#fff" font-size="17">Metabolism stable 20-60 — muscle loss is the culprit</text>
                    <rect x="200" y="880" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Requirements: shoes, something heavy,</text>
                    <text x="550" y="952" text-anchor="middle" fill="#ffd700" font-size="20">a chair, and consistency</text>
                </svg>`,
                caption: "The complete evidence stack behind the fitness prescription"
            }
        }
    ]
},
{
    id: 8,
    title: "The Longevity Molecules: Proven, Promising, or Hype?",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The $500 Bottle vs the $0 Walk",
            content: "Somewhere right now, a longevity enthusiast is swallowing a handful of expensive capsules — NAD+ boosters, resveratrol, maybe off-label rapamycin — while skipping their morning walk to do it.\n\nThey have the pyramid upside down.\n\nThe anti-aging supplement industry is worth tens of billions of dollars, and its favorite trick is a two-word sleight of hand: **'studies show.'** Studies of what? Usually mice. Sometimes worms. Occasionally yeast.\n\nHere's what this lesson gives you that no supplement label will: an honest **report card** on the famous longevity molecules — rapamycin, metformin, NAD+ precursors, senolytics, and the surprise contender, GLP-1 drugs. You'll learn which grades are earned, which are borrowed from rodents, and why the boring trio of **exercise, diet, and sleep** still holds every human outcome record.\n\nBy the end, you'll be able to read any breathless headline about an 'anti-aging breakthrough' and know — in about ten seconds — whether it deserves your attention or your eye-roll.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UPSIDE-DOWN PYRAMID</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where longevity money goes vs where evidence lives</text>
                    <rect x="60" y="160" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE HYPE STACK</text>
                    <text x="290" y="258" text-anchor="middle" fill="#fff" font-size="18">$500 supplement bottles</text>
                    <text x="290" y="294" text-anchor="middle" fill="#fff" font-size="18">"Studies show..." (in mice)</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">Biohacker protocols</text>
                    <text x="290" y="378" text-anchor="middle" fill="#888" font-size="16">Human lifespan proof: none yet</text>
                    <rect x="580" y="160" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE PROVEN STACK</text>
                    <text x="810" y="258" text-anchor="middle" fill="#fff" font-size="18">Exercise (free)</text>
                    <text x="810" y="294" text-anchor="middle" fill="#fff" font-size="18">Real food (grocery money)</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">Sleep (free)</text>
                    <text x="810" y="378" text-anchor="middle" fill="#888" font-size="16">Human outcome data: decades of it</text>
                    <rect x="150" y="600" width="800 " height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THIS LESSON'S PROMISE</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">An honest grade for every famous molecule:</text>
                    <text x="550" y="736" text-anchor="middle" fill="#fff" font-size="18">rapamycin, metformin, NAD+, senolytics, GLP-1s</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Learn to spot hype in ten seconds flat</text>
                </svg>`,
                caption: "Billions flow to unproven molecules while the proven stack stays cheap"
            }
        },
        {
            type: "concept",
            title: "The Evidence Ladder: Mice Are Not Small Humans",
            content: "Before grading any molecule, you need the grading scale. Longevity claims live on an **evidence ladder**, and each rung up is dramatically harder to reach:\n\n• **Rung 1 — Worms, flies, yeast**: Cheap, fast, and where most 'anti-aging breakthrough' headlines are born. Thousands of compounds work here\n• **Rung 2 — Mice**: Better, especially the NIA's **Interventions Testing Program (ITP)** — a rigorous three-site trial system for mouse lifespan. But mice live ~2.5 years and die of different things than you do\n• **Rung 3 — Human biomarkers**: The molecule changes blood markers or aging clocks in people. Suggestive, not proof — markers can move while outcomes don't\n• **Rung 4 — Human outcomes**: Randomized trials showing fewer heart attacks, less disease, longer life. This is the only rung that counts as *proven*\n\nThe sobering statistic: the overwhelming majority of drugs that succeed in mice **fail in human trials** — across medicine broadly, roughly 90% of drugs entering human testing never reach approval.\n\nSo when a label says 'shown to extend lifespan,' your first question is now automatic: **on which rung?** Every grade in this lesson comes from asking exactly that.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EVIDENCE LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Each rung up is harder — and rarer</text>
                    <rect x="150" y="160" width="800" height="140" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="212" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">RUNG 4: HUMAN OUTCOMES</text>
                    <text x="200" y="252" text-anchor="start" fill="#fff" font-size="17">RCTs with fewer deaths/diseases — PROVEN</text>
                    <rect x="150" y="330" width="800" height="140" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="382" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">RUNG 3: HUMAN BIOMARKERS</text>
                    <text x="200" y="422" text-anchor="start" fill="#fff" font-size="17">Blood markers move — suggestive, not proof</text>
                    <rect x="150" y="500" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="552" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">RUNG 2: MICE</text>
                    <text x="200" y="592" text-anchor="start" fill="#fff" font-size="17">NIA ITP is the gold standard here — still mice</text>
                    <rect x="150" y="670" width="800" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="722" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">RUNG 1: WORMS, FLIES, YEAST</text>
                    <text x="200" y="762" text-anchor="start" fill="#fff" font-size="17">Where most headlines are born</text>
                    <rect x="150" y="850" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="902" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">THE FILTER</text>
                    <text x="550" y="942" text-anchor="middle" fill="#fff" font-size="18">~90% of drugs entering human trials fail</text>
                    <rect x="200" y="1010" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1055" text-anchor="middle" fill="#ffd700" font-size="20">Always ask: on which rung?</text>
                </svg>`,
                caption: "The four-rung evidence ladder — only human outcomes count as proven"
            }
        },
        {
            type: "concept",
            title: "Rapamycin: The Most Promising Unproven Drug",
            content: "If longevity science has a celebrity molecule, it's **rapamycin** — a compound first found in soil bacteria from Easter Island (Rapa Nui), now a prescription immune drug used in organ transplantation.\n\nWhy the excitement? Rapamycin inhibits **mTOR**, the nutrient-sensing growth pathway you met in the hallmarks of aging — essentially telling cells to shift from 'grow' mode to 'maintain and recycle' mode.\n\nThe evidence, honestly stated:\n\n• **Mice: robust.** In the NIA's **Interventions Testing Program** — the most rigorous mouse lifespan platform in existence — rapamycin extended lifespan **reproducibly, in both sexes, across multiple sites**, even when started late in life. Very few compounds have ever done this\n• **Humans: unproven.** Trials are ongoing — including dosing studies in healthy adults and even a large trial in companion dogs (the Dog Aging Project) as a bridge species. Some small human studies suggest low intermittent doses may be tolerable and may modestly improve immune response in older adults\n• **The catch**: at transplant doses it suppresses immunity and disrupts metabolism. The low-dose longevity protocols circulating online are **experiments without a control group**\n\n**Grade: Promising — the best animal data in the field, zero human lifespan proof.** Watch this space; don't self-prescribe it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RAPAMYCIN REPORT CARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From Easter Island soil to the NIA's mouse labs</text>
                    <rect x="150" y="150" width="800" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="202" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MECHANISM</text>
                    <text x="550" y="244" text-anchor="middle" fill="#fff" font-size="18">Inhibits mTOR — shifts cells from</text>
                    <text x="550" y="278" text-anchor="middle" fill="#fff" font-size="18">'grow' mode to 'maintain and recycle'</text>
                    <rect x="60" y="350" width="460" height="260" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="402" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">MICE: ROBUST</text>
                    <text x="290" y="448" text-anchor="middle" fill="#fff" font-size="17">NIA ITP: reproducible lifespan</text>
                    <text x="290" y="482" text-anchor="middle" fill="#fff" font-size="17">extension, both sexes,</text>
                    <text x="290" y="516" text-anchor="middle" fill="#fff" font-size="17">multiple sites</text>
                    <text x="290" y="562" text-anchor="middle" fill="#888" font-size="16">Works even started late in life</text>
                    <rect x="580" y="350" width="460" height="260" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="402" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HUMANS: UNPROVEN</text>
                    <text x="810" y="448" text-anchor="middle" fill="#fff" font-size="17">Dosing trials ongoing</text>
                    <text x="810" y="482" text-anchor="middle" fill="#fff" font-size="17">Dog Aging Project underway</text>
                    <text x="810" y="516" text-anchor="middle" fill="#fff" font-size="17">No lifespan proof in people</text>
                    <text x="810" y="562" text-anchor="middle" fill="#888" font-size="16">Immune/metabolic side effects</text>
                    <rect x="150" y="670" width="800" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="722" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">CAUTION</text>
                    <text x="550" y="762" text-anchor="middle" fill="#fff" font-size="18">Online low-dose protocols are experiments</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="18">without a control group</text>
                    <rect x="200" y="880" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">GRADE: PROMISING</text>
                    <text x="550" y="952" text-anchor="middle" fill="#ffd700" font-size="18">Best animal data in the field — unproven in humans</text>
                </svg>`,
                caption: "Rapamycin: reproducible mouse lifespan extension, human proof still pending"
            }
        },
        {
            type: "concept",
            title: "Metformin and the Trial That Never Launched",
            content: "**Metformin** — a cheap, generic diabetes drug derived from French lilac — became a longevity darling for good reasons: it activates **AMPK** (the cellular fuel-gauge pathway), and observational studies once suggested diabetics on metformin lived as long as, or longer than, non-diabetics.\n\nThen the story got complicated:\n\n• The famous observational finding suffered from **survivorship and comparison biases**; later, better-controlled analyses shrank or erased the advantage\n• In the NIA ITP mouse program, metformin alone produced **little to no lifespan extension** — a striking contrast with rapamycin\n• Some trials suggest metformin may even **blunt part of the benefit of exercise** on muscle adaptation and cardiorespiratory gains\n\nThe field's answer was supposed to be **TAME — Targeting Aging with Metformin** — a landmark trial designed by Nir Barzilai around 2015 to test whether metformin delays a *cluster* of age-related diseases in about 3,000 older adults. TAME's real mission was bigger than metformin: to force the FDA to recognize **aging itself as a treatable target**.\n\nA decade later, TAME remains **largely stalled on funding** — a cheap generic drug offers no patent payoff, and no company will fund a $50+ million trial it can't profit from.\n\n**Grade: Questionable for healthy people — and Exhibit A for how economics, not science, decides which questions get answered.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">METFORMIN'S ARC</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From longevity darling to cautionary tale</text>
                    <rect x="60" y="160" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="210" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THE HOPE</text>
                    <text x="210" y="252" text-anchor="middle" fill="#fff" font-size="16">Activates AMPK</text>
                    <text x="210" y="285" text-anchor="middle" fill="#fff" font-size="16">Early studies looked</text>
                    <text x="210" y="315" text-anchor="middle" fill="#fff" font-size="16">remarkable</text>
                    <rect x="400" y="160" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE DOUBTS</text>
                    <text x="550" y="252" text-anchor="middle" fill="#fff" font-size="16">Biases found in data</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="16">Weak in ITP mice</text>
                    <text x="550" y="315" text-anchor="middle" fill="#fff" font-size="16">May blunt exercise gains</text>
                    <rect x="740" y="160" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="890" y="210" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">THE STALL</text>
                    <text x="890" y="252" text-anchor="middle" fill="#fff" font-size="16">TAME trial designed</text>
                    <text x="890" y="285" text-anchor="middle" fill="#fff" font-size="16">~2015 — still waiting</text>
                    <text x="890" y="315" text-anchor="middle" fill="#fff" font-size="16">on funding</text>
                    <rect x="150" y="440" width="800" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="492" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHY TAME MATTERED</text>
                    <text x="550" y="536" text-anchor="middle" fill="#fff" font-size="18">Designed to make the FDA recognize aging</text>
                    <text x="550" y="570" text-anchor="middle" fill="#fff" font-size="18">itself as a treatable target — ~3,000 adults,</text>
                    <text x="550" y="604" text-anchor="middle" fill="#fff" font-size="18">tracking a cluster of age diseases</text>
                    <rect x="150" y="720" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="772" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">THE ECONOMICS LESSON</text>
                    <text x="550" y="812" text-anchor="middle" fill="#fff" font-size="18">A cheap generic has no patent payoff —</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="18">so no one funds the $50M+ answer</text>
                    <rect x="200" y="930" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">GRADE: QUESTIONABLE</text>
                    <text x="550" y="1002" text-anchor="middle" fill="#ffd700" font-size="18">For healthy people — the trial never launched</text>
                </svg>`,
                caption: "Metformin's rise, doubts, and the decade-stalled TAME trial"
            }
        },
        {
            type: "quiz",
            question: "A supplement label says its key ingredient was 'shown in studies to extend lifespan by 30%.' Using the evidence ladder, what is the FIRST question to ask?",
            options: [
                { text: "What dose was used in the studies?", correct: false },
                { text: "In which species — worms, mice, or humans with actual outcome data?", correct: true },
                { text: "Was the study published in a peer-reviewed journal?", correct: false },
                { text: "How many participants were enrolled in the study?", correct: false }
            ],
            explanation: "Species is the master question because it determines which rung of the evidence ladder the claim lives on. A 30% lifespan extension in worms or mice is common and routinely fails to translate — roughly 90% of drugs entering human trials never reach approval. Dose, peer review, and sample size all matter, but only after you know the claim involves humans at all. Most 'proven in studies' longevity claims quietly sit on rungs 1 and 2.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">'STUDIES SHOW...'</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">A label claims 30% lifespan extension</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What do you ask first?</text>
                    <rect x="60" y="360" width="300" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WORMS?</text>
                    <text x="210" y="465" text-anchor="middle" fill="#888" font-size="16">Rung 1</text>
                    <rect x="400" y="360" width="300" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MICE?</text>
                    <text x="550" y="465" text-anchor="middle" fill="#888" font-size="16">Rung 2</text>
                    <rect x="740" y="360" width="300" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HUMANS?</text>
                    <text x="890" y="465" text-anchor="middle" fill="#888" font-size="16">Rungs 3-4</text>
                    <rect x="200" y="610" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">One question sorts hype from hope</text>
                </svg>`,
                caption: "Test the ten-second hype filter"
            }
        },
        {
            type: "concept",
            title: "NAD+ Boosters and Senolytics: The Gap Between Story and Data",
            content: "Two more famous names, two more honest grades.\n\n**NAD+ precursors (NR, NMN).** The story is elegant: **NAD+** — a coenzyme central to energy metabolism and sirtuin function — declines with age, so restoring it should restore youth. Mouse studies delivered exciting metabolic improvements, and sales exploded into a multibillion-dollar market.\n\nThe human data? **Underwhelming so far.** Supplements do raise blood NAD+ levels — that part works. But randomized human trials have mostly failed to show meaningful improvements in muscle function, insulin sensitivity, or other hard endpoints in healthy adults. Raising the level of a molecule is not the same as reversing aging.\n\n**Grade: Hype outpacing evidence.**\n\n**Senolytics.** These drugs (like the dasatinib + quercetin combo) aim to clear **senescent 'zombie' cells** — damaged cells that refuse to die and secrete inflammatory signals, one of the hallmarks of aging. In mice, clearing them improved healthspan strikingly.\n\nIn humans, we have **early pilot studies** — small trials in conditions like idiopathic pulmonary fibrosis and diabetic kidney disease showed hints of feasibility, with larger trials ongoing.\n\n**Grade: Early and genuinely interesting — but a pilot study is a question, not an answer.** Neither of these belongs in your cart yet.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO MORE GRADES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">NAD+ boosters and senolytics, honestly scored</text>
                    <rect x="60" y="160" width="460" height="400" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">NAD+ (NR, NMN)</text>
                    <text x="290" y="258" text-anchor="middle" fill="#fff" font-size="17">Story: restore a declining</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">coenzyme, restore youth</text>
                    <text x="290" y="336" text-anchor="middle" fill="#10b981" font-size="17">Mice: exciting metabolism</text>
                    <text x="290" y="372" text-anchor="middle" fill="#ef4444" font-size="17">Humans: levels rise, but hard</text>
                    <text x="290" y="404" text-anchor="middle" fill="#ef4444" font-size="17">endpoints mostly unmoved</text>
                    <text x="290" y="460" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">GRADE: HYPE ></text>
                    <text x="290" y="492" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">EVIDENCE</text>
                    <rect x="580" y="160" width="460" height="400" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">SENOLYTICS</text>
                    <text x="810" y="258" text-anchor="middle" fill="#fff" font-size="17">Story: clear senescent</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">'zombie' cells</text>
                    <text x="810" y="336" text-anchor="middle" fill="#10b981" font-size="17">Mice: striking healthspan gains</text>
                    <text x="810" y="372" text-anchor="middle" fill="#f59e0b" font-size="17">Humans: early pilot trials</text>
                    <text x="810" y="404" text-anchor="middle" fill="#f59e0b" font-size="17">only — hints, not proof</text>
                    <text x="810" y="460" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">GRADE: EARLY,</text>
                    <text x="810" y="492" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">INTERESTING</text>
                    <rect x="150" y="620" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="672" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE COMMON PATTERN</text>
                    <text x="550" y="716" text-anchor="middle" fill="#fff" font-size="18">Raising a molecule's level is not the same</text>
                    <text x="550" y="750" text-anchor="middle" fill="#fff" font-size="18">as reversing aging</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">A pilot study is a question, not an answer</text>
                </svg>`,
                caption: "NAD+ boosters and senolytics: elegant stories still waiting for human proof"
            }
        },
        {
            type: "concept",
            title: "GLP-1 Drugs: The Accidental Longevity Contender",
            content: "Here's the plot twist nobody in longevity science saw coming: the closest thing to a proven 'longevity drug' wasn't designed for aging at all. It was designed for diabetes.\n\n**GLP-1 receptor agonists** — semaglutide (Ozempic, Wegovy) and successors — mimic a gut hormone that regulates appetite and blood sugar. Then came **SELECT (2023)**, a randomized trial of over **17,600 adults** with overweight or obesity and cardiovascular disease but **no diabetes**:\n\n• Semaglutide cut **major adverse cardiac events — heart attacks, strokes, cardiovascular death — by about 20%**\n• That is a Rung 4 result: a real human outcome, in a massive randomized trial\n• Follow-up analyses suggest benefits on kidney disease and inflammation too\n\nThis is why researchers call GLP-1s the **accidental longevity drug**: they hit aging's biggest killer (cardiovascular disease) through weight, inflammation, and metabolic pathways.\n\nNow the honest caveats: these are drugs for people with **specific medical indications** — not healthy-person life-extension pills. They carry real side effects (GI issues, and **muscle loss** alongside fat loss — which you now know is longevity currency), most benefits reverse if you stop, and long-term data in healthy people doesn't exist.\n\n**Grade: Proven — for the right patient, for cardiovascular outcomes. Not a general anti-aging pill.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ACCIDENTAL CONTENDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">SELECT trial 2023 — 17,600+ non-diabetic adults</text>
                    <rect x="150" y="150" width="800" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="205" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">SEMAGLUTIDE: -20%</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="19">major cardiac events — heart attack,</text>
                    <text x="550" y="283" text-anchor="middle" fill="#fff" font-size="19">stroke, cardiovascular death</text>
                    <rect x="150" y="360" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="410" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WHY IT COUNTS</text>
                    <text x="550" y="450" text-anchor="middle" fill="#fff" font-size="18">Rung 4: randomized human outcome data</text>
                    <rect x="60" y="520" width="460" height="270" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="572" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE PROMISE</text>
                    <text x="290" y="618" text-anchor="middle" fill="#fff" font-size="17">Hits aging's biggest killer:</text>
                    <text x="290" y="650" text-anchor="middle" fill="#fff" font-size="17">cardiovascular disease</text>
                    <text x="290" y="696" text-anchor="middle" fill="#888" font-size="16">Kidney and inflammation</text>
                    <text x="290" y="728" text-anchor="middle" fill="#888" font-size="16">benefits emerging too</text>
                    <rect x="580" y="520" width="460" height="270" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="572" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE CAVEATS</text>
                    <text x="810" y="618" text-anchor="middle" fill="#fff" font-size="17">For specific indications only</text>
                    <text x="810" y="650" text-anchor="middle" fill="#fff" font-size="17">Muscle loss alongside fat loss</text>
                    <text x="810" y="696" text-anchor="middle" fill="#888" font-size="16">Benefits reverse on stopping;</text>
                    <text x="810" y="728" text-anchor="middle" fill="#888" font-size="16">no healthy-person data</text>
                    <rect x="200" y="850" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">GRADE: PROVEN — for the right patient</text>
                    <text x="550" y="922" text-anchor="middle" fill="#ffd700" font-size="18">Not a general anti-aging pill</text>
                </svg>`,
                caption: "SELECT 2023: semaglutide cut major cardiac events ~20% in non-diabetics"
            }
        },
        {
            type: "example",
            title: "Anatomy of a Supplement-Aisle Seduction",
            content: "Walk the longevity aisle — physical or online — and watch the same five tricks repeat. Here's a real-world composite of a $79/month 'cellular anti-aging complex':\n\n• **'Clinically studied ingredients.'** The study: 12 weeks, 40 people, funded by the manufacturer, measuring a blood marker — not health outcomes. Or worse: the 'clinical' study was in mice\n• **'Boosts NAD+ by 40%!'** True — and, as you now know, raising the level of a molecule has not translated into better muscle function or insulin sensitivity in human trials. The number is real; the implication is borrowed\n• **'Nobel Prize-winning science.'** The prize honored research on a *pathway* (say, autophagy or telomeres) — not this product, which has never been tested\n• **'Patented bioavailable form.'** A patent proves ownership, not efficacy\n• **The mouse-to-man leap**: 'shown to extend lifespan' (in mice, in the footnote your eye skips)\n\nThe supplement industry can legally do all of this because supplements — unlike drugs — **don't need to prove efficacy before sale** under US law (DSHEA, 1994).\n\nMeanwhile the actual anti-aging stack — Zone 2 cardio, strength training, 7 hours of sleep, real food — has decades of human outcome data and costs almost nothing. The aisle is selling you the *feeling* of doing something. The gym gives you the substance.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIVE RED FLAGS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The supplement-aisle playbook, decoded</text>
                    <rect x="150" y="150" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="195" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">1. 'CLINICALLY STUDIED'</text>
                    <text x="200" y="230" text-anchor="start" fill="#fff" font-size="16">Tiny, short, maker-funded — or in mice</text>
                    <rect x="150" y="280" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="325" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">2. 'BOOSTS LEVELS 40%'</text>
                    <text x="200" y="360" text-anchor="start" fill="#fff" font-size="16">Real number, borrowed implication</text>
                    <rect x="150" y="410" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="455" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">3. 'NOBEL PRIZE SCIENCE'</text>
                    <text x="200" y="490" text-anchor="start" fill="#fff" font-size="16">The prize honored a pathway, not this pill</text>
                    <rect x="150" y="540" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">4. 'PATENTED FORM'</text>
                    <text x="200" y="620" text-anchor="start" fill="#fff" font-size="16">Patents prove ownership, not efficacy</text>
                    <rect x="150" y="670" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="715" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">5. 'EXTENDS LIFESPAN'</text>
                    <text x="200" y="750" text-anchor="start" fill="#fff" font-size="16">...in mice, says the footnote you skipped</text>
                    <rect x="150" y="820" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY IT'S LEGAL</text>
                    <text x="550" y="910" text-anchor="middle" fill="#fff" font-size="17">US supplements need no efficacy proof before sale (DSHEA 1994)</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">The aisle sells the feeling. The gym sells the substance.</text>
                </svg>`,
                caption: "The five-trick playbook behind most anti-aging supplement marketing"
            }
        },
        {
            type: "concept",
            title: "The Punchline: The Podium Is Already Taken",
            content: "Line up every longevity molecule against the boring trio, and score them on the only rung that matters — **human outcome data**:\n\n• **Exercise**: Mandsager 2018 — low fitness riskier than smoking across 122,007 patients; strength training 2x/week linked to 10–17% lower mortality. Human data: massive, consistent, decades deep\n• **Diet**: PREDIMED — a Mediterranean pattern cut cardiovascular events ~30% in a randomized trial. Human data: strong\n• **Sleep**: ~7 hours tracks with the lowest mortality across huge cohorts; glymphatic brain-clearing runs during deep sleep. Human data: robust and consistent\n\nNow the molecules:\n\n• **Rapamycin**: spectacular in mice, unproven in humans\n• **Metformin**: trial never launched\n• **NAD+ boosters**: human results underwhelming\n• **Senolytics**: pilots only\n• **GLP-1s**: genuinely proven — but for specific patients, and semaglutide's ~20% cardiac event reduction still operates *through* the same territory (weight, metabolism, inflammation) that exercise and diet address for free\n\nThe honest summary of the entire field in one sentence: **nothing in a capsule yet beats what your shoes, your kitchen, and your bedroom already deliver.** The molecules are worth watching. The behaviors are worth *doing* — today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FINAL SCOREBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Human outcome data — the only rung that counts</text>
                    <rect x="60" y="150" width="460" height="420" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="290" y="202" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE BEHAVIORS</text>
                    <text x="290" y="248" text-anchor="middle" fill="#fff" font-size="18">Exercise — decades of data</text>
                    <text x="290" y="284" text-anchor="middle" fill="#888" font-size="15">Mandsager 2018; 2x/wk strength</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">Diet — randomized proof</text>
                    <text x="290" y="366" text-anchor="middle" fill="#888" font-size="15">PREDIMED: ~30% fewer CV events</text>
                    <text x="290" y="412" text-anchor="middle" fill="#fff" font-size="18">Sleep — huge cohorts</text>
                    <text x="290" y="448" text-anchor="middle" fill="#888" font-size="15">~7h lowest mortality</text>
                    <text x="290" y="510" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">STATUS: PROVEN</text>
                    <rect x="580" y="150" width="460" height="420" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="202" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE MOLECULES</text>
                    <text x="810" y="248" text-anchor="middle" fill="#fff" font-size="17">Rapamycin: mice only</text>
                    <text x="810" y="284" text-anchor="middle" fill="#fff" font-size="17">Metformin: trial stalled</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">NAD+: underwhelming</text>
                    <text x="810" y="356" text-anchor="middle" fill="#fff" font-size="17">Senolytics: pilots only</text>
                    <text x="810" y="402" text-anchor="middle" fill="#10b981" font-size="17">GLP-1s: proven, but for</text>
                    <text x="810" y="434" text-anchor="middle" fill="#10b981" font-size="17">specific patients only</text>
                    <text x="810" y="510" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">STATUS: WATCHING</text>
                    <rect x="150" y="630" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="682" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE ONE-SENTENCE SUMMARY</text>
                    <text x="550" y="726" text-anchor="middle" fill="#fff" font-size="18">Nothing in a capsule yet beats what your shoes,</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="18">your kitchen, and your bedroom already deliver</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Watch the molecules. DO the behaviors.</text>
                </svg>`,
                caption: "Behaviors hold every human outcome record; molecules are still auditioning"
            }
        },
        {
            type: "application",
            title: "Your Hype-Proof Evaluation Protocol",
            content: "Next time a longevity product, podcast, or headline tempts you, run this five-step filter — it takes under two minutes:\n\n1. **Ask the species question** — Search the claim + 'human trial.' If the evidence is worms or mice, file it under 'interesting, not actionable'\n\n2. **Find the endpoint** — Did the human study measure real outcomes (deaths, heart attacks, function) or just a blood marker moving? Markers are hints, not proof\n\n3. **Check who paid** — Manufacturer-funded, 8-week, 40-person studies are marketing with a methods section. Look for independent replication\n\n4. **Apply the opportunity-cost test** — Would the monthly cost ($50–150 for most stacks) buy something *proven* instead? A gym membership, a pair of running shoes, better groceries, a blackout curtain?\n\n5. **Talk to your clinician before any actual drug** — rapamycin, metformin, and GLP-1s are prescription medicines with real side-effect profiles and real interactions. 'Longevity clinic' does not mean 'evidence-based'\n\nAnd one habit to adopt permanently: whenever you feel the pull of a shortcut molecule, let it trigger a walk. You'll be doing the one intervention every study agrees on — while the evidence for the capsule catches up, or doesn't.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TWO-MINUTE FILTER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps before any longevity purchase</text>
                    <rect x="150" y="150" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="198" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1. SPECIES CHECK</text>
                    <text x="200" y="235" text-anchor="start" fill="#fff" font-size="17">Search the claim + 'human trial'</text>
                    <rect x="150" y="290" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="338" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2. ENDPOINT CHECK</text>
                    <text x="200" y="375" text-anchor="start" fill="#fff" font-size="17">Real outcomes, or just a marker moving?</text>
                    <rect x="150" y="430" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="478" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">3. FUNDING CHECK</text>
                    <text x="200" y="515" text-anchor="start" fill="#fff" font-size="17">Who paid? Any independent replication?</text>
                    <rect x="150" y="570" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="618" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">4. OPPORTUNITY COST</text>
                    <text x="200" y="655" text-anchor="start" fill="#fff" font-size="17">Would $100/month buy something proven?</text>
                    <rect x="150" y="710" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="758" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">5. CLINICIAN CHECK</text>
                    <text x="200" y="795" text-anchor="start" fill="#fff" font-size="17">Real drugs need real medical supervision</text>
                    <rect x="200" y="880" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Bonus habit: let every shortcut temptation</text>
                    <text x="550" y="952" text-anchor="middle" fill="#ffd700" font-size="20">trigger a walk instead</text>
                </svg>`,
                caption: "Run every longevity claim through this five-step filter"
            }
        },
        {
            type: "quote",
            content: "No supplement, drug, or intervention has been shown to extend lifespan in humans. The things that have — not smoking, exercise, diet, sleep, and connection — are free, and almost nobody wants to hear it.",
            author: "A summary of the field's consensus, echoed by aging researchers from the NIA to academic geroscience labs",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="320" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="222" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"No supplement, drug, or intervention has</text>
                    <text x="160" y="264" text-anchor="start" fill="#fff" font-style="italic" font-size="22">been shown to extend lifespan in humans.</text>
                    <text x="160" y="306" text-anchor="start" fill="#fff" font-style="italic" font-size="22">The things that have... are free, and</text>
                    <text x="160" y="348" text-anchor="start" fill="#fff" font-style="italic" font-size="22">almost nobody wants to hear it."</text>
                    <text x="940" y="420" text-anchor="end" fill="#8b5cf6" font-size="17">— the geroscience consensus</text>
                    <rect x="150" y="540" width="800" height="240" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE FREE STACK</text>
                    <text x="550" y="642" text-anchor="middle" fill="#fff" font-size="18">Not smoking • Exercise • Real food</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="18">Sleep • Human connection</text>
                    <text x="550" y="726" text-anchor="middle" fill="#888" font-size="16">Every one backed by human outcome data</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Boring advice, extraordinary evidence</text>
                </svg>`,
                caption: "The uncomfortable consensus of aging research"
            }
        },
        {
            type: "quiz",
            question: "Which statement most accurately grades the longevity molecules covered in this lesson?",
            options: [
                { text: "Rapamycin is proven in humans; GLP-1 drugs remain purely theoretical", correct: false },
                { text: "NAD+ boosters have the strongest human outcome data of any molecule", correct: false },
                { text: "Rapamycin has robust mouse data but no human proof; GLP-1s have real human outcome data (SELECT: ~20% fewer cardiac events) but only for specific patients", correct: true },
                { text: "Metformin's TAME trial proved metformin extends healthy lifespan in non-diabetics", correct: false }
            ],
            explanation: "Rapamycin is the field's best animal-data molecule — reproducible lifespan extension in the NIA ITP mouse program — but human trials are still ongoing, so it stays 'promising, unproven.' GLP-1s earned genuine Rung-4 proof in SELECT 2023 (semaglutide, ~20% reduction in major cardiac events in 17,600+ non-diabetics), but for defined medical populations, not as a healthy-person longevity pill. TAME, the tempting distractor, was designed around 2015 and has never launched — it proved nothing because it never ran.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="160" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="175" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">GRADE THE MOLECULES</text>
                    <text x="550" y="218" text-anchor="middle" fill="#fff" font-size="18">Which report card matches the evidence?</text>
                    <rect x="60" y="330" width="300" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="385" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">RAPAMYCIN</text>
                    <text x="210" y="425" text-anchor="middle" fill="#fff" font-size="16">Which species has</text>
                    <text x="210" y="455" text-anchor="middle" fill="#fff" font-size="16">the proof?</text>
                    <rect x="400" y="330" width="300" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="385" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">GLP-1s</text>
                    <text x="550" y="425" text-anchor="middle" fill="#fff" font-size="16">What did SELECT</text>
                    <text x="550" y="455" text-anchor="middle" fill="#fff" font-size="16">2023 show?</text>
                    <rect x="740" y="330" width="300" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="890" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">METFORMIN</text>
                    <text x="890" y="425" text-anchor="middle" fill="#fff" font-size="16">Did TAME ever</text>
                    <text x="890" y="455" text-anchor="middle" fill="#fff" font-size="16">actually run?</text>
                    <rect x="200" y="600" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#ffd700" font-size="20">Match each molecule to its evidence rung</text>
                </svg>`,
                caption: "Final check: the honest report card"
            }
        }
    ]
},
{
    id: 9,
    title: "How Old Are You Really? The Biological Age Toolkit",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Two 50-Year-Olds Walk Into a Clinic...",
            content: "Same birthday, same birth year. One runs a 10K on Saturdays, sleeps seven hours, and takes the stairs two at a time. The other is winded by one flight, pre-diabetic, and hasn't seen a resting heart rate under 75 in years.\n\nTheir driver's licenses say the same thing: 50. But their bodies are telling two completely different stories — and modern science can now read those stories with startling precision. By some measures, these two 'same-aged' people can differ by **20 biological years**.\n\nThat number on your license? It's your **chronological age** — an accounting fact, fixed and unchangeable. Your **biological age** — how far your cells, vessels, and organs have actually traveled down the aging road — is a different quantity entirely. It can run fast, run slow, and here's the part that changes everything: **it can respond to what you do.**\n\nThis lesson hands you the toolkit — from research-grade epigenetic clocks to a free test you can do beside a kitchen chair — to answer the most personal question in longevity science: *how old are you, really?*",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME AGE. DIFFERENT AGE.</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two people born the same day, 20 years apart</text>
                    <rect x="60" y="160" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PERSON A</text>
                    <text x="290" y="255" text-anchor="middle" fill="#fff" font-size="18">License says: 50</text>
                    <text x="290" y="298" text-anchor="middle" fill="#888" font-size="16">Runs 10Ks, sleeps 7 hours</text>
                    <text x="290" y="330" text-anchor="middle" fill="#888" font-size="16">Resting HR 58</text>
                    <text x="290" y="395" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">Body says: ~42</text>
                    <rect x="580" y="160" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PERSON B</text>
                    <text x="810" y="255" text-anchor="middle" fill="#fff" font-size="18">License says: 50</text>
                    <text x="810" y="298" text-anchor="middle" fill="#888" font-size="16">Winded by one flight</text>
                    <text x="810" y="330" text-anchor="middle" fill="#888" font-size="16">Pre-diabetic, resting HR 78</text>
                    <text x="810" y="395" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">Body says: ~61</text>
                    <rect x="150" y="560" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWO KINDS OF AGE</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="18">Chronological: fixed accounting fact</text>
                    <text x="550" y="696" text-anchor="middle" fill="#fff" font-size="18">Biological: how far your cells have traveled</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">Only one of them responds to what you do</text>
                </svg>`,
                caption: "Chronological age is fixed; biological age is a moving, changeable target"
            }
        },
        {
            type: "concept",
            title: "Biological Age: The Number That Actually Predicts",
            content: "Why do scientists bother with a second age? Because **chronological age is a shockingly blunt predictor**. Some 70-year-olds run marathons; some 50-year-olds are in decline. Aging doesn't happen on a schedule — it happens at a **rate**, and rates differ person to person.\n\n**Biological age** attempts to measure where your body actually is:\n\n• It integrates the state of your **cells** (epigenetic marks, senescence), your **cardiovascular system** (fitness, vessel health), your **metabolism** (glucose, lipids), and your **functional capacity** (strength, speed, balance)\n• People whose biological age runs *ahead* of their birthdays have higher risk of chronic disease, disability, and earlier death\n• People whose biological age runs *behind* — the '50-going-on-40' crowd — carry measurably lower risk\n\nThe landmark **Dunedin Study** in New Zealand, which has followed about 1,000 people born in 1972–73 for five decades, showed that by their mid-40s, participants' measured **pace of aging** ranged from about **0.4 to 2.4 'biological years' per calendar year** — a sixfold spread. Same birthdays. Wildly different aging speeds.\n\nThat spread is the whole opportunity: if aging has a pace, then the pace has a dial. The rest of this lesson is about reading your dial — and turning it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PACE OF AGING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dunedin Study: 1,000 people, five decades</text>
                    <rect x="150" y="150" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="202" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ONE CALENDAR YEAR PASSES...</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">How many biological years do YOU age?</text>
                    <rect x="150" y="330" width="800" height="90" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="368" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">SLOW AGERS: ~0.4 yr/yr</text>
                    <text x="200" y="400" text-anchor="start" fill="#fff" font-size="16">Cells drifting at less than half speed</text>
                    <rect x="150" y="440" width="800" height="90" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="478" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">AVERAGE: ~1.0 yr/yr</text>
                    <text x="200" y="510" text-anchor="start" fill="#fff" font-size="16">Aging on schedule</text>
                    <rect x="150" y="550" width="800" height="90" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="588" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">FAST AGERS: ~2.4 yr/yr</text>
                    <text x="200" y="620" text-anchor="start" fill="#fff" font-size="16">More than two years of wear per year lived</text>
                    <rect x="150" y="690" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="742" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">A SIXFOLD SPREAD</text>
                    <text x="550" y="786" text-anchor="middle" fill="#fff" font-size="18">Same birthdays — wildly different aging</text>
                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="18">speeds, visible by the mid-40s</text>
                    <rect x="200" y="910" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="20">If aging has a pace, the pace has a dial</text>
                </svg>`,
                caption: "The Dunedin cohort aged between 0.4 and 2.4 biological years per calendar year"
            }
        },
        {
            type: "concept",
            title: "Epigenetic Clocks: Reading Age Off Your DNA",
            content: "The most sophisticated biological-age tools read the **epigenome** — the chemical annotation layer on your DNA. Specifically, they read **DNA methylation**: small chemical tags that switch genes on and off, and that shift in predictable patterns as you age.\n\nThree generations of clocks matter:\n\n• **Horvath clock (2013)** — the original. Steve Horvath found that methylation at just a few hundred DNA sites could predict chronological age across nearly every tissue in the body with stunning accuracy. First generation: trained to guess your *birthday*\n• **GrimAge (2019)** — second generation, trained not on birthdays but on **mortality**. Built from methylation signatures of smoking, inflammation, and blood proteins, it predicts time-to-death and disease onset better than the originals. Its grim name is earned\n• **DunedinPACE (2022)** — third generation, built from the Dunedin cohort's five decades of data. Instead of asking 'how old are you?', it measures your current **speed of aging** — like a speedometer rather than an odometer\n\nThat speedometer-vs-odometer distinction is the key upgrade: an odometer tells you the miles already driven (you can't undo them), but a speedometer tells you how fast you're accumulating damage *right now* — which is exactly the number an intervention can change.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE CLOCK GENERATIONS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Reading age from DNA methylation patterns</text>
                    <rect x="150" y="150" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">HORVATH (2013)</text>
                    <text x="200" y="240" text-anchor="start" fill="#fff" font-size="17">Predicts chronological age from methylation</text>
                    <text x="200" y="274" text-anchor="start" fill="#888" font-size="16">Gen 1: trained to guess your birthday</text>
                    <rect x="150" y="350" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="400" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">GRIMAGE (2019)</text>
                    <text x="200" y="440" text-anchor="start" fill="#fff" font-size="17">Trained on mortality — predicts time-to-death</text>
                    <text x="200" y="474" text-anchor="start" fill="#888" font-size="16">Gen 2: built from smoking, inflammation signals</text>
                    <rect x="150" y="550" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="600" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">DUNEDINPACE (2022)</text>
                    <text x="200" y="640" text-anchor="start" fill="#fff" font-size="17">Measures your current SPEED of aging</text>
                    <text x="200" y="674" text-anchor="start" fill="#888" font-size="16">Gen 3: a speedometer, not an odometer</text>
                    <rect x="60" y="770" width="460" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="822" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ODOMETER</text>
                    <text x="290" y="862" text-anchor="middle" fill="#fff" font-size="16">Miles already driven —</text>
                    <text x="290" y="892" text-anchor="middle" fill="#fff" font-size="16">can't be undone</text>
                    <rect x="580" y="770" width="460" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="822" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SPEEDOMETER</text>
                    <text x="810" y="862" text-anchor="middle" fill="#fff" font-size="16">Damage rate right now —</text>
                    <text x="810" y="892" text-anchor="middle" fill="#fff" font-size="16">interventions change THIS</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">The newest clocks measure speed, not mileage</text>
                </svg>`,
                caption: "Horvath, GrimAge, DunedinPACE — from guessing birthdays to measuring aging speed"
            }
        },
        {
            type: "example",
            title: "CALERIE: The Trial That Made the Clock Move",
            content: "Epigenetic clocks would be trivia if nothing could move them. Enter **CALERIE 2** — the first long-term randomized controlled trial of calorie restriction in healthy, non-obese humans.\n\nThe setup: about **220 adults**, randomized to either **~11–12% calorie restriction** (the achieved level — participants aimed for 25%) or eating as usual, for **two years**.\n\nThe aging analysis, published in *Nature Aging* in 2023, used the tools from the last card:\n\n• **DunedinPACE — the speedometer — slowed by roughly 2–3%** in the restriction group versus controls\n• First- and second-generation clocks (including GrimAge-style measures) showed **little or no significant change** — exactly what you'd expect: two years is barely a tick on an odometer, but a speedometer registers immediately\n• Cardiometabolic markers — blood pressure, insulin sensitivity, cholesterol — improved alongside\n\nA 2–3% slower pace sounds modest, but researchers noted that population models link slowdowns of that scale, sustained over decades, to meaningfully lower mortality risk — some analyses compared its potential impact to what quitting smoking delivers.\n\nThe deeper lesson for you: **choose measures that can actually respond on a human timescale.** CALERIE proved the pace of aging is not just measurable — it's *movable*, with nothing more exotic than eating somewhat less, consistently.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CALERIE 2</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The trial that moved the aging speedometer</text>
                    <rect x="150" y="150" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="202" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DESIGN</text>
                    <text x="550" y="244" text-anchor="middle" fill="#fff" font-size="18">~220 healthy adults, randomized, 2 years</text>
                    <text x="550" y="278" text-anchor="middle" fill="#888" font-size="16">Achieved ~11-12% calorie restriction vs usual diet</text>
                    <rect x="60" y="340" width="460" height="250" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="392" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">DUNEDINPACE</text>
                    <text x="290" y="435" text-anchor="middle" fill="#fff" font-size="18">Slowed ~2-3%</text>
                    <text x="290" y="478" text-anchor="middle" fill="#888" font-size="16">The speedometer registered</text>
                    <text x="290" y="510" text-anchor="middle" fill="#888" font-size="16">the change immediately</text>
                    <rect x="580" y="340" width="460" height="250" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="392" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">OLDER CLOCKS</text>
                    <text x="810" y="435" text-anchor="middle" fill="#fff" font-size="18">Little to no change</text>
                    <text x="810" y="478" text-anchor="middle" fill="#888" font-size="16">Two years is barely a tick</text>
                    <text x="810" y="510" text-anchor="middle" fill="#888" font-size="16">on an odometer</text>
                    <rect x="150" y="650" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="702" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">WHY 2-3% MATTERS</text>
                    <text x="550" y="746" text-anchor="middle" fill="#fff" font-size="18">Sustained for decades, models compare the</text>
                    <text x="550" y="780" text-anchor="middle" fill="#fff" font-size="18">impact to quitting smoking</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">The pace of aging is measurable — and movable</text>
                </svg>`,
                caption: "CALERIE 2 slowed DunedinPACE ~2-3% with modest calorie restriction"
            }
        },
        {
            type: "quiz",
            question: "Why did the CALERIE trial detect an effect with DunedinPACE when first-generation clocks like Horvath's showed little change?",
            options: [
                { text: "DunedinPACE is more accurate at predicting chronological age than Horvath's clock", correct: false },
                { text: "DunedinPACE measures the current speed of aging, which can shift within a 2-year trial, while first-generation clocks reflect accumulated 'mileage'", correct: true },
                { text: "The Horvath clock only works in elderly populations, and CALERIE enrolled younger adults", correct: false },
                { text: "Calorie restriction affects only metabolism, which epigenetic clocks cannot detect at all", correct: false }
            ],
            explanation: "DunedinPACE is a speedometer — it measures how fast you're aging right now, so a two-year intervention can visibly move it (~2-3% slower in CALERIE). First-generation clocks like Horvath's behave more like odometers, reflecting decades of accumulated change, so two years barely registers. The first option is the tempting trap: Horvath's clock is actually excellent at predicting chronological age — that's precisely why it's less sensitive to short-term changes in aging rate.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SPEEDOMETER vs ODOMETER</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Why did only DunedinPACE move</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">in a 2-year trial?</text>
                    <rect x="60" y="360" width="460" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="412" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">CLUE 1</text>
                    <text x="290" y="455" text-anchor="middle" fill="#fff" font-size="17">What does each clock</text>
                    <text x="290" y="488" text-anchor="middle" fill="#fff" font-size="17">generation measure?</text>
                    <rect x="580" y="360" width="460" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="412" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CLUE 2</text>
                    <text x="810" y="455" text-anchor="middle" fill="#fff" font-size="17">How long was the</text>
                    <text x="810" y="488" text-anchor="middle" fill="#fff" font-size="17">intervention?</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Think: which gauge responds in real time?</text>
                </svg>`,
                caption: "Test your grasp of the clock generations"
            }
        },
        {
            type: "concept",
            title: "The Consumer Test Trap: When Your 'Bio Age' Is Noise",
            content: "Type 'biological age test' into any search engine and you'll find kits from $100 to $500 promising your 'true age' from a few drops of blood or saliva. Before you buy, understand the gap between **research-grade** and **consumer-grade**:\n\n• **Technical noise**: Methylation arrays have measurement error. Research studies average across large samples where noise cancels out. Your single result carries error bars of **several years** — which the marketing rarely mentions. Some early consumer tests returned results differing by 3–5+ years on *duplicate samples from the same blood draw*\n• **Normal fluctuation**: Illness, sleep deprivation, stress, and even sample handling shift methylation. Your 'bio age' can vary meaningfully week to week\n• **Algorithm roulette**: Different companies use different clocks trained on different populations. The same sample can yield different 'ages' from different vendors\n• **The incentive problem**: Some sellers of tests also sell the supplements meant to 'fix' your result. A test that scares you is a test that sells product\n\nThis doesn't make the science fake — research-grade DunedinPACE in a controlled trial like CALERIE is genuinely informative. It means a **single consumer snapshot is weak evidence about you**.\n\nIf you do test: use the **same company, same conditions, yearly** — and care about the *trend across years*, never one number.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RESEARCH vs RETAIL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The same science, very different reliability</text>
                    <rect x="60" y="160" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">RESEARCH-GRADE</text>
                    <text x="290" y="258" text-anchor="middle" fill="#fff" font-size="17">Large samples — noise</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">averages out</text>
                    <text x="290" y="336" text-anchor="middle" fill="#888" font-size="16">Controlled conditions</text>
                    <text x="290" y="368" text-anchor="middle" fill="#888" font-size="16">Validated clocks (DunedinPACE)</text>
                    <text x="290" y="425" text-anchor="middle" fill="#10b981" font-size="17">Detected CALERIE's 2-3% shift</text>
                    <rect x="580" y="160" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">CONSUMER KITS</text>
                    <text x="810" y="258" text-anchor="middle" fill="#fff" font-size="17">One sample — error bars</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">of several years</text>
                    <text x="810" y="336" text-anchor="middle" fill="#888" font-size="16">Duplicate samples: 3-5+ yr gaps</text>
                    <text x="810" y="368" text-anchor="middle" fill="#888" font-size="16">Different vendors, different 'ages'</text>
                    <text x="810" y="425" text-anchor="middle" fill="#ef4444" font-size="17">Often sold beside 'fix-it' pills</text>
                    <rect x="150" y="550" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="602" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">WHAT MOVES YOUR NUMBER</text>
                    <text x="550" y="646" text-anchor="middle" fill="#fff" font-size="18">Illness, bad sleep, stress, sample handling —</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="18">your 'bio age' fluctuates week to week</text>
                    <rect x="150" y="790" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="842" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">IF YOU TEST ANYWAY</text>
                    <text x="550" y="882" text-anchor="middle" fill="#fff" font-size="18">Same company, same conditions, once a year —</text>
                    <text x="550" y="915" text-anchor="middle" fill="#fff" font-size="18">trust trends, never one number</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">A single snapshot is weak evidence about you</text>
                </svg>`,
                caption: "Consumer epigenetic tests carry multi-year error bars a single result can't escape"
            }
        },
        {
            type: "concept",
            title: "The $0 Biomarkers That Predict Like the $500 Test",
            content: "Here's the field's best-kept secret: a handful of **cheap functional biomarkers** predict mortality and healthspan as well as — and in head-to-head comparisons sometimes better than — expensive epigenetic panels. Your six-item toolkit:\n\n• **VO2max (estimated)**: The strongest single predictor you've met (Mandsager 2018). Estimate free via the **Cooper 12-minute run/walk test** or your smartwatch's cardio-fitness score\n• **Grip strength**: PURE (Lancet 2015) — every 5 kg weaker linked to 16% higher mortality. A dynamometer costs about $30\n• **Chair-stand test**: Five sit-to-stands, arms crossed. Over ~12–15 seconds in midlife flags declining lower-body power — your fall-risk crystal ball\n• **Waist-to-height ratio**: Keep your waist **under half your height** — a better metabolic-risk screen than BMI, which can't tell muscle from fat\n• **Resting heart rate**: Tracks autonomic and cardiovascular health; sustained rises predict risk. Free on any wearable, or fingers-on-wrist\n• **ApoB (one lab visit)**: The particle count that actually drives atherosclerosis — a truer read than standard LDL-C, usually under $50 as an add-on\n\nNotice what these share: unlike a methylation readout, every one is **directly trainable**. Your VO2max, grip, and waistline don't just *measure* your aging — they're levers that *change* it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SIX-ITEM TOOLKIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cheap biomarkers that rival the $500 test</text>
                    <rect x="80" y="150" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">VO2MAX (EST.)</text>
                    <text x="300" y="240" text-anchor="middle" fill="#fff" font-size="16">Cooper test or smartwatch</text>
                    <text x="300" y="272" text-anchor="middle" fill="#888" font-size="15">Strongest single predictor</text>
                    <rect x="580" y="150" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="200" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">GRIP STRENGTH</text>
                    <text x="800" y="240" text-anchor="middle" fill="#fff" font-size="16">$30 dynamometer</text>
                    <text x="800" y="272" text-anchor="middle" fill="#888" font-size="15">5 kg weaker = +16% mortality</text>
                    <rect x="80" y="360" width="440" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="410" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">CHAIR-STAND x5</text>
                    <text x="300" y="450" text-anchor="middle" fill="#fff" font-size="16">Free, needs one chair</text>
                    <text x="300" y="482" text-anchor="middle" fill="#888" font-size="15">Fall-risk crystal ball</text>
                    <rect x="580" y="360" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WAIST-TO-HEIGHT</text>
                    <text x="800" y="450" text-anchor="middle" fill="#fff" font-size="16">Keep it under 0.5</text>
                    <text x="800" y="482" text-anchor="middle" fill="#888" font-size="15">Beats BMI for metabolic risk</text>
                    <rect x="80" y="570" width="440" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="620" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">RESTING HR</text>
                    <text x="300" y="660" text-anchor="middle" fill="#fff" font-size="16">Free on any wearable</text>
                    <text x="300" y="692" text-anchor="middle" fill="#888" font-size="15">Sustained rises predict risk</text>
                    <rect x="580" y="570" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="620" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">APOB (LAB)</text>
                    <text x="800" y="660" text-anchor="middle" fill="#fff" font-size="16">~$50, one blood draw/year</text>
                    <text x="800" y="692" text-anchor="middle" fill="#888" font-size="15">Truer than standard LDL-C</text>
                    <rect x="150" y="800" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="852" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE SHARED SUPERPOWER</text>
                    <text x="550" y="895" text-anchor="middle" fill="#fff" font-size="18">Every one is directly trainable — measure AND lever</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">Total cost: about $80 and one lab visit</text>
                </svg>`,
                caption: "Six cheap, trainable biomarkers that predict aging as well as expensive panels"
            }
        },
        {
            type: "example",
            title: "Maria's Dashboard: A Year of Turning the Dial",
            content: "Maria, 54, decided to skip the $400 methylation kit and build the functional dashboard instead. Her January baseline:\n\n• **Estimated VO2max** (smartwatch): 26 — 'low' for her age\n• **Grip strength**: 24 kg\n• **Chair stands x5**: 14.5 seconds\n• **Waist-to-height**: 0.56 (waist 37 in, height 66 in)\n• **Resting heart rate**: 74\n• **ApoB** (added to her annual physical): 112 mg/dL — higher than ideal\n\nNothing was an emergency. Everything was information. She adopted the weekly template from Lesson 7 — Zone 2 walks, two strength sessions with brisk chair rises — and shifted dinner earlier with more protein and fiber.\n\nHer January-one-year-later numbers: VO2max 31, grip 27 kg, chair stands 10.8 seconds, waist-to-height 0.51, resting HR 66, ApoB 94 (she and her doctor also discussed medication thresholds — a conversation the number *triggered*, which is exactly its job).\n\nNo single reading was dramatic. But **six arrows all pointing the right direction** is a signal no noisy consumer test can match. Maria's driver's license aged one year. Her dashboard says the woman holding it got younger.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MARIA'S YEAR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six arrows, all pointing the right way</text>
                    <rect x="150" y="150" width="800" height="110" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="195" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">VO2MAX (EST.)</text>
                    <text x="200" y="232" text-anchor="start" fill="#fff" font-size="17">26 to 31</text>
                    <text x="880" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">UP</text>
                    <rect x="150" y="280" width="800" height="110" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="325" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">GRIP STRENGTH</text>
                    <text x="200" y="362" text-anchor="start" fill="#fff" font-size="17">24 kg to 27 kg</text>
                    <text x="880" y="345" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">UP</text>
                    <rect x="150" y="410" width="800" height="110" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="455" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">CHAIR STANDS x5</text>
                    <text x="200" y="492" text-anchor="start" fill="#fff" font-size="17">14.5 s to 10.8 s</text>
                    <text x="880" y="475" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">FASTER</text>
                    <rect x="150" y="540" width="800" height="110" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">WAIST-TO-HEIGHT</text>
                    <text x="200" y="622" text-anchor="start" fill="#fff" font-size="17">0.56 to 0.51 — approaching the 0.5 target</text>
                    <text x="880" y="605" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">DOWN</text>
                    <rect x="150" y="670" width="800" height="110" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="715" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">RESTING HR</text>
                    <text x="200" y="752" text-anchor="start" fill="#fff" font-size="17">74 to 66</text>
                    <text x="880" y="735" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">DOWN</text>
                    <rect x="150" y="800" width="800" height="110" rx="15" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="845" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">APOB</text>
                    <text x="200" y="882" text-anchor="start" fill="#fff" font-size="17">112 to 94 mg/dL — and a doctor conversation</text>
                    <text x="880" y="865" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">DOWN</text>
                    <rect x="200" y="960" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Her license aged one year.</text>
                    <text x="550" y="1032" text-anchor="middle" fill="#ffd700" font-size="20">Her dashboard got younger.</text>
                </svg>`,
                caption: "One year of Maria's functional dashboard — six metrics, six improvements"
            }
        },
        {
            type: "concept",
            title: "Trend Beats Snapshot: How to Actually Use the Numbers",
            content: "The single most important skill in self-measurement isn't taking the measurement — it's **interpreting it like a scientist instead of a patient waiting for a verdict**. Four rules:\n\n• **Measure yearly, under matched conditions.** Same month, same time of day, rested, not ill. Conditions are half the measurement. A 'bio age' taken during a stressful, sleepless week isn't your aging — it's your week\n• **React to trends, not ticks.** One worse reading is noise: a bad night, a cold, a measurement quirk. The same arrow moving the same direction **two to three years running** is a trend — that's your cue to act\n• **Rank your signals.** Functional markers (VO2max, grip, chair-stand) and established labs (ApoB) have decades of outcome data behind them. If your smartwatch 'age' disagrees with your treadmill performance, believe the treadmill\n• **Let numbers trigger conversations, not panic.** A rising ApoB or resting heart rate is a *prompt* for a clinician visit — where real context (family history, medications, blood pressure) turns data into decisions\n\nThe quiet magic of a yearly dashboard: it converts aging from a vague dread into a **feedback loop**. Dread makes people avoid the scale, skip the physical, look away. A feedback loop makes them curious — and curious people intervene ten years earlier.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">READ LIKE A SCIENTIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four rules for your yearly numbers</text>
                    <rect x="150" y="150" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1. MATCHED CONDITIONS</text>
                    <text x="200" y="238" text-anchor="start" fill="#fff" font-size="17">Same month, rested, not ill — yearly</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2. TRENDS, NOT TICKS</text>
                    <text x="200" y="398" text-anchor="start" fill="#fff" font-size="17">One bad reading = noise; 2-3 years = signal</text>
                    <rect x="150" y="470" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3. RANK YOUR SIGNALS</text>
                    <text x="200" y="558" text-anchor="start" fill="#fff" font-size="17">Believe the treadmill over the watch's 'age'</text>
                    <rect x="150" y="630" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="680" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4. CONVERSATIONS, NOT PANIC</text>
                    <text x="200" y="718" text-anchor="start" fill="#fff" font-size="17">Rising numbers prompt a clinician visit</text>
                    <rect x="150" y="810" width="800" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="862" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">DREAD vs FEEDBACK LOOP</text>
                    <text x="550" y="902" text-anchor="middle" fill="#fff" font-size="18">Dread avoids the scale; curiosity intervenes</text>
                    <text x="550" y="935" text-anchor="middle" fill="#fff" font-size="18">ten years earlier</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Aging becomes a feedback loop, not a verdict</text>
                </svg>`,
                caption: "Four rules that turn noisy measurements into a usable aging dashboard"
            }
        },
        {
            type: "application",
            title: "Build Your Bio-Age Scorecard This Week",
            content: "Everything you need: a chair, a tape measure, a stopwatch, and one lab visit. Here's the launch plan:\n\n1. **Today — chair-stand test (2 min):** Five sit-to-stands from a firm chair, arms crossed. Record the seconds. Midlife target: under ~12–15 seconds\n\n2. **Today — waist-to-height (2 min):** Measure your waist at the navel, relaxed. Divide by your height (same units). Target: **under 0.5**\n\n3. **This week — resting heart rate:** Check on waking for 3 mornings (wearable or 30-second wrist count x2) and average them\n\n4. **This weekend — estimate VO2max:** Walk/run as far as you can in 12 minutes (Cooper test) and note the distance, or record your watch's cardio-fitness score. Grip: a ~$30 dynamometer, best of three squeezes per hand\n\n5. **This month — one lab visit:** At your next physical, ask to add **ApoB** to the standard panel. While there, share your scorecard — it makes the visit dramatically more useful\n\n6. **Set the annual recurrence:** Calendar reminder, same month next year, matched conditions. Store results in a note titled 'Dashboard'\n\nThat's the whole system: **six numbers, once a year, react to trends.** Cheaper than one methylation kit — and unlike the kit, every number on your card doubles as a training target.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR SCORECARD LAUNCH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A chair, a tape measure, one lab visit</text>
                    <rect x="150" y="150" width="800" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="197" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">1. TODAY: CHAIR-STAND x5</text>
                    <text x="200" y="233" text-anchor="start" fill="#fff" font-size="16">Arms crossed — aim under ~12-15 seconds</text>
                    <rect x="150" y="285" width="800" height="115" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="332" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">2. TODAY: WAIST / HEIGHT</text>
                    <text x="200" y="368" text-anchor="start" fill="#fff" font-size="16">Target: under 0.5</text>
                    <rect x="150" y="420" width="800" height="115" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="467" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">3. THIS WEEK: RESTING HR</text>
                    <text x="200" y="503" text-anchor="start" fill="#fff" font-size="16">Three waking mornings, averaged</text>
                    <rect x="150" y="555" width="800" height="115" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="602" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">4. WEEKEND: VO2MAX + GRIP</text>
                    <text x="200" y="638" text-anchor="start" fill="#fff" font-size="16">Cooper 12-min test; best-of-3 grip squeezes</text>
                    <rect x="150" y="690" width="800" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="737" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">5. THIS MONTH: ADD APOB</text>
                    <text x="200" y="773" text-anchor="start" fill="#fff" font-size="16">One add-on at your annual physical</text>
                    <rect x="150" y="825" width="800" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="872" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">6. SET ANNUAL REPEAT</text>
                    <text x="200" y="908" text-anchor="start" fill="#fff" font-size="16">Same month yearly, matched conditions</text>
                    <rect x="200" y="980" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="20">Six numbers, once a year, react to trends</text>
                </svg>`,
                caption: "The complete bio-age scorecard: home tests plus one lab add-on"
            }
        },
        {
            type: "quote",
            content: "The goal of measuring your biological age is not to know a number. It is to catch the curve while it still bends — because the person who measures at 45 gets to intervene at 45, not discover at 65.",
            author: "The working philosophy of geroscience, from the Dunedin investigators to preventive cardiology",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="320" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="222" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"The goal is not to know a number.</text>
                    <text x="160" y="264" text-anchor="start" fill="#fff" font-style="italic" font-size="22">It is to catch the curve while it still bends —</text>
                    <text x="160" y="306" text-anchor="start" fill="#fff" font-style="italic" font-size="22">the person who measures at 45 intervenes</text>
                    <text x="160" y="348" text-anchor="start" fill="#fff" font-style="italic" font-size="22">at 45, not discovers at 65."</text>
                    <text x="940" y="420" text-anchor="end" fill="#8b5cf6" font-size="17">— the working philosophy of geroscience</text>
                    <line x1="150" y1="800" x2="950" y2="800" stroke="#888" stroke-width="2"/>
                    <path d="M180 560 Q 480 590 700 680 Q 830 740 930 795" stroke="#ef4444" stroke-width="4" fill="none" stroke-dasharray="10"/>
                    <path d="M180 560 Q 520 575 780 630 Q 900 660 940 690" stroke="#10b981" stroke-width="4" fill="none"/>
                    <circle cx="420" cy="580" r="12" fill="#ffd700"/>
                    <text x="420" y="545" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">Measure here (45)</text>
                    <text x="700" y="860" text-anchor="middle" fill="#ef4444" font-size="16">Unmeasured path — discovered at 65</text>
                    <text x="550" y="895" text-anchor="middle" fill="#10b981" font-size="16">Measured path — curve caught early</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Measurement buys you the earliest possible start</text>
                </svg>`,
                caption: "Catch the curve while it still bends"
            }
        },
        {
            type: "quiz",
            question: "You take a $300 consumer epigenetic test and it says you're 4 years 'older' than your birthday. Based on this lesson, what's the wisest response?",
            options: [
                { text: "Buy the NAD+ supplement stack the testing company recommends to reverse the result", correct: false },
                { text: "Treat it as an emergency and demand a full-body MRI from your doctor", correct: false },
                { text: "Recognize the multi-year error bars on single consumer tests, check your trainable functional markers (VO2max, grip, waist-to-height), and track trends yearly", correct: true },
                { text: "Ignore biological age entirely — since chronological age is fixed, aging can't be influenced", correct: false }
            ],
            explanation: "A single consumer methylation result carries error bars of several years — duplicate samples from one blood draw have differed by 3-5+ years — so a 4-year gap is well within noise. The evidence-based move is to build the cheap functional dashboard (VO2max, grip, chair-stand, waist-to-height, resting HR, ApoB), measure under matched conditions yearly, and react to multi-year trends. The supplement-stack answer is the trap: companies that sell both the scary test and its 'cure' have an obvious incentive problem.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SCARY TEST RESULT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">A consumer kit says you're 4 years 'older'</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What does a scientist do next?</text>
                    <rect x="60" y="360" width="460" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="412" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">REMEMBER</text>
                    <text x="290" y="455" text-anchor="middle" fill="#fff" font-size="17">Duplicate samples differed</text>
                    <text x="290" y="488" text-anchor="middle" fill="#fff" font-size="17">by 3-5+ years</text>
                    <rect x="580" y="360" width="460" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="412" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AND ASK</text>
                    <text x="810" y="455" text-anchor="middle" fill="#fff" font-size="17">Who profits from a</text>
                    <text x="810" y="488" text-anchor="middle" fill="#fff" font-size="17">frightening number?</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Trends under matched conditions beat snapshots</text>
                </svg>`,
                caption: "Final check: interpreting a noisy bio-age result"
            }
        },
        {
            type: "concept",
            title: "The Toolkit, Assembled",
            content: "You now hold the complete biological-age toolkit. The inventory:\n\n• **The concept**: Chronological age is an accounting fact; **biological age** is where your body actually is — and the Dunedin cohort proved aging speeds vary sixfold (0.4 to 2.4 years per year) between people with identical birthdays\n• **The high-tech tier**: Epigenetic clocks — **Horvath** (guesses birthdays), **GrimAge** (predicts mortality), **DunedinPACE** (measures current speed). Research-grade instruments, noisy as consumer snapshots\n• **The proof it moves**: **CALERIE 2** slowed DunedinPACE ~2–3% in two years with ~11–12% calorie restriction — the pace of aging bent, in a randomized trial, with behavior alone\n• **The people's tier**: Six cheap, trainable markers — estimated VO2max, grip strength, chair-stands, waist-to-height under 0.5, resting heart rate, and ApoB — that predict as well or better, and double as training targets\n• **The discipline**: Yearly, matched conditions, trends over ticks, numbers as conversation-starters with your clinician\n\nNotice how this lesson completes a circle with the whole book: the *behaviors* from earlier lessons — Zone 2, strength, power, protein, real food, sleep — are the levers. The scorecard is the gauge cluster. Levers without gauges is guessing; gauges without levers is dread.\n\nTogether? That's a pilot flying the plane.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE COMPLETE TOOLKIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Gauges + levers = a pilot flying the plane</text>
                    <rect x="150" y="150" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="198" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">THE CONCEPT</text>
                    <text x="200" y="234" text-anchor="start" fill="#fff" font-size="16">Aging speeds vary sixfold — Dunedin cohort</text>
                    <rect x="150" y="290" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="338" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">HIGH-TECH TIER</text>
                    <text x="200" y="374" text-anchor="start" fill="#fff" font-size="16">Horvath, GrimAge, DunedinPACE — research-grade</text>
                    <rect x="150" y="430" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="478" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">PROOF IT MOVES</text>
                    <text x="200" y="514" text-anchor="start" fill="#fff" font-size="16">CALERIE 2: pace slowed ~2-3% in two years</text>
                    <rect x="150" y="570" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="618" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">PEOPLE'S TIER</text>
                    <text x="200" y="654" text-anchor="start" fill="#fff" font-size="16">Six cheap markers that double as training targets</text>
                    <rect x="150" y="710" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="758" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">THE DISCIPLINE</text>
                    <text x="200" y="794" text-anchor="start" fill="#fff" font-size="16">Yearly, matched conditions, trends over ticks</text>
                    <rect x="150" y="870" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">LEVERS + GAUGES</text>
                    <text x="550" y="958" text-anchor="middle" fill="#fff" font-size="18">Levers without gauges is guessing;</text>
                    <text x="550" y="990" text-anchor="middle" fill="#fff" font-size="18">gauges without levers is dread</text>
                </svg>`,
                caption: "The assembled toolkit: concept, clocks, proof, cheap markers, and discipline"
            }
        }
    ]
},
{
    id: 10,
    title: "The Social Secret: Relationships as Longevity Medicine",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The 87-Year Experiment That Changed Everything",
            content: "In 1938, Harvard researchers began tracking 724 young men — some Harvard sophomores, some boys from Boston's poorest neighborhoods — to answer one question: what makes a good life?\n\nThey measured everything. Blood work, brain scans, careers, marriages, failures. The study never stopped. It's still running today, now following the original men's children — the longest study of adult life ever conducted.\n\nAfter 87 years and four generations of researchers, the answer surprised everyone. It wasn't cholesterol. It wasn't wealth, fame, or even genes.\n\nIt was **relationships**. The people most satisfied with their relationships at age 50 were the healthiest at age 80.\n\nIn this lesson, you'll see why loneliness rivals smoking as a mortality risk, why connection changes your biology — not just your mood — and how to build it deliberately, at any age.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LONGEST STUDY OF LIFE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Harvard Study of Adult Development, 1938 to today</text>
                    <rect x="100" y="160" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">1938: 724 young men enrolled</text>
                    <text x="550" y="252" text-anchor="middle" fill="#fff" font-size="19">Harvard students + boys from Boston's poorest streets</text>
                    <line x1="550" y1="280" x2="550" y2="330" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,340 540,322 560,322" fill="#14b8a6"/>
                    <rect x="100" y="350" width="900" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="402" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">87 years of measurement</text>
                    <text x="550" y="442" text-anchor="middle" fill="#fff" font-size="19">Blood work, brain scans, careers, marriages, health records</text>
                    <line x1="550" y1="470" x2="550" y2="520" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,530 540,512 560,512" fill="#14b8a6"/>
                    <rect x="100" y="540" width="900" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="595" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">The #1 predictor of a long, healthy life:</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">Quality of relationships</text>
                    <rect x="150" y="740" width="800" height="220" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="795" text-anchor="middle" fill="#888" font-size="20">What it beat as a predictor:</text>
                    <text x="550" y="845" text-anchor="middle" fill="#ef4444" font-size="22">Cholesterol at midlife</text>
                    <text x="550" y="885" text-anchor="middle" fill="#ef4444" font-size="22">Wealth and career success</text>
                    <text x="550" y="925" text-anchor="middle" fill="#ef4444" font-size="22">Fame and social class</text>
                    <rect x="150" y="1000" width="800" height="70" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#10b981" font-size="21">This lesson: connection as real, physical medicine</text>
                </svg>`,
                caption: "87 years of data point to one surprising answer"
            }
        },
        {
            type: "concept",
            title: "Relationship Satisfaction at 50 Predicts Health at 80",
            content: "The **Harvard Study of Adult Development** is now led by its fourth director, psychiatrist **Robert Waldinger**. Its most famous finding sounds almost too simple to be science:\n\n**The people who were most satisfied with their relationships at age 50 were the healthiest at age 80** — and this predicted late-life health better than their cholesterol levels did.\n\nWhat the data showed:\n\n• **Good relationships protect the body** — the most connected participants stayed physically healthier for longer\n• **They protect the brain** — people in securely attached relationships at 80 kept sharper memories\n• **Quality beats quantity** — it's not how many friends you have, but whether you can count on them; high-conflict marriages were worse for health than divorce\n• **Loneliness was toxic** — lonelier participants saw health decline earlier and died younger\n\nNote the honest caveat: this is a long observational study, not a randomized trial. But the finding has been replicated across dozens of other cohorts, in both sexes and multiple cultures — and the effect sizes are large enough that researchers treat connection as a genuine health exposure, like diet or exercise.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MEASURED AT 50, SEEN AT 80</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What best predicted healthy aging in the Harvard Study</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">WEAKER PREDICTOR</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="21">Cholesterol at age 50</text>
                    <rect x="140" y="320" width="300" height="34" rx="17" fill="rgba(239,68,68,0.25)"/>
                    <rect x="140" y="320" width="150" height="34" rx="17" fill="#ef4444"/>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="18">Useful for heart risk,</text>
                    <text x="290" y="435" text-anchor="middle" fill="#888" font-size="18">but a weaker forecast of</text>
                    <text x="290" y="470" text-anchor="middle" fill="#888" font-size="18">overall health at 80</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">STRONGER PREDICTOR</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="21">Relationship satisfaction</text>
                    <rect x="660" y="320" width="300" height="34" rx="17" fill="rgba(16,185,129,0.25)"/>
                    <rect x="660" y="320" width="285" height="34" rx="17" fill="#10b981"/>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="18">Best forecast of physical</text>
                    <text x="810" y="435" text-anchor="middle" fill="#888" font-size="18">health, memory, and</text>
                    <text x="810" y="470" text-anchor="middle" fill="#888" font-size="18">happiness at age 80</text>
                    <rect x="100" y="560" width="900" height="200 " rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">Three findings that held up</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="20">Quality beats quantity of friendships</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="20">Secure bonds at 80 protected memory</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="20">High-conflict ties hurt more than being single</text>
                    <rect x="150" y="820" width="800 " height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="858" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Honest caveat: observational data</text>
                    <text x="550" y="893" text-anchor="middle" fill="#fff" font-size="18">But replicated across dozens of cohorts worldwide</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="21">Your relationships are a vital sign</text>
                </svg>`,
                caption: "In the Harvard Study, connection out-predicted cholesterol"
            }
        },
        {
            type: "visual",
            title: "Loneliness by the Numbers",
            content: "In 2010, psychologist **Julianne Holt-Lunstad** pooled **148 studies covering 308,849 people** and found something stunning: people with strong social relationships had roughly **50% greater odds of survival** over the study periods than those without.\n\nHer 2015 follow-up meta-analysis (70 studies, 3.4 million people) quantified the danger side: **social isolation raised mortality risk by ~29%, loneliness by ~26%, and living alone by ~32%**.\n\nThe comparison that made headlines — and that the US Surgeon General repeated in his 2023 advisory on loneliness: the mortality impact of weak social connection is **comparable to smoking up to 15 cigarettes a day**, and larger than the impact of obesity or physical inactivity.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE COST OF DISCONNECTION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Holt-Lunstad meta-analyses, 2010 and 2015</text>
                    <rect x="100" y="150" width="900" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="203" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">2010: 148 studies, 308,849 people</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="21">Strong relationships: ~50% greater odds of survival</text>
                    <text x="550" y="340" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">2015: increased mortality risk from...</text>
                    <text x="200" y="405" text-anchor="start" fill="#fff" font-size="20">Living alone</text>
                    <rect x="420" y="382" width="480" height="36" rx="18" fill="rgba(255,255,255,0.06)"/>
                    <rect x="420" y="382" width="384" height="36" rx="18" fill="#ef4444"/>
                    <text x="830" y="408" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">+32%</text>
                    <text x="200" y="475" text-anchor="start" fill="#fff" font-size="20">Social isolation</text>
                    <rect x="420" y="452" width="480" height="36" rx="18" fill="rgba(255,255,255,0.06)"/>
                    <rect x="420" y="452" width="348" height="36" rx="18" fill="#f59e0b"/>
                    <text x="830" y="478" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">+29%</text>
                    <text x="200" y="545" text-anchor="start" fill="#fff" font-size="20">Loneliness</text>
                    <rect x="420" y="522" width="480" height="36" rx="18" fill="rgba(255,255,255,0.06)"/>
                    <rect x="420" y="522" width="312" height="36" rx="18" fill="#ec4899"/>
                    <text x="830" y="548" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">+26%</text>
                    <rect x="100" y="620" width="900" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">The famous comparison</text>
                    <text x="550" y="722" text-anchor="middle" fill="#fff" font-size="21">Weak social connection harms survival about as much</text>
                    <text x="550" y="757" text-anchor="middle" fill="#fff" font-size="21">as smoking up to 15 cigarettes a day</text>
                    <rect x="100" y="840" width="440" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="320" y="890" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Worse than obesity</text>
                    <text x="320" y="928" text-anchor="middle" fill="#888" font-size="17">as a mortality risk factor</text>
                    <rect x="560" y="840" width="440" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="780" y="890" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">2023 Surgeon General</text>
                    <text x="780" y="928" text-anchor="middle" fill="#888" font-size="17">declared a loneliness epidemic</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Connection is a dose. Isolation is a toxin.</text>
                </svg>`,
                caption: "3.4 million people of data: isolation kills at smoking-like rates"
            }
        },
        {
            type: "example",
            title: "Roseto, Pennsylvania: The Town That Baffled Cardiologists",
            content: "In the 1950s and 60s, physician Stewart Wolf noticed something impossible about **Roseto, Pennsylvania**, a small town of Italian immigrants: men there died of heart attacks at **roughly half the rate** of the neighboring towns — and of the US average for men over 65.\n\nHere's the twist. Rosetans were not health nuts:\n\n• They **smoked** unfiltered cigars and cigarettes\n• They cooked with **lard** instead of olive oil\n• Many worked brutal jobs in slate quarries\n• Obesity was common\n\nWhat they had was **each other**. Three-generation households. Evening strolls where everyone stopped to talk. 22 civic organizations in a town of under 2,000. Nobody displayed wealth; nobody struggled alone.\n\nResearchers predicted that as young Rosetans Americanized — moving to suburbs, chasing individual success — the protection would vanish. By the 1970s, that's exactly what happened: Roseto's heart attack rate **rose to match its neighbors**.\n\nThe **Roseto effect** became a classic demonstration that community itself — independent of diet and exercise — can protect the heart.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROSETO EFFECT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Community as heart protection, 1950s-1970s</text>
                    <rect x="60" y="160" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT THEY DID WRONG</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="19">Smoked cigars daily</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="19">Cooked with lard</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="19">Hard quarry labor</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="19">Common obesity</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="17">By risk-factor math, they</text>
                    <text x="290" y="488" text-anchor="middle" fill="#888" font-size="17">should have died young</text>
                    <rect x="580" y="160" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT THEY DID RIGHT</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="19">3-generation households</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="19">Evening social strolls</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="19">22 civic clubs, ~2,000 people</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="19">No one struggled alone</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="17">Result: heart attack deaths</text>
                    <text x="810" y="488" text-anchor="middle" fill="#888" font-size="17">about HALF the US male rate</text>
                    <rect x="100" y="580" width="900" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">The natural experiment completed itself</text>
                    <text x="550" y="682" text-anchor="middle" fill="#fff" font-size="20">As younger Rosetans left for suburbs and individual success,</text>
                    <text x="550" y="717" text-anchor="middle" fill="#fff" font-size="20">the protection vanished — by the 1970s their heart attack</text>
                    <text x="550" y="752" text-anchor="middle" fill="#fff" font-size="20">rate climbed to match every neighboring town</text>
                    <rect x="100" y="830" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="882" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">The lesson</text>
                    <text x="550" y="925" text-anchor="middle" fill="#fff" font-size="20">Community protected hearts independent of diet and exercise</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Belonging is a cardiovascular intervention</text>
                </svg>`,
                caption: "Lard, cigars, and half the heart attacks — until community faded"
            }
        },
        {
            type: "quiz",
            question: "According to the Holt-Lunstad meta-analyses, the mortality impact of weak social connection is most comparable to which risk factor?",
            options: [
                { text: "Being about 10 pounds overweight — real but modest", correct: false },
                { text: "Smoking up to 15 cigarettes a day — and worse than obesity", correct: true },
                { text: "Skipping annual physicals — a minor screening effect", correct: false },
                { text: "It raises illness rates but has no measured effect on mortality", correct: false }
            ],
            explanation: "Pooling 148 studies of 308,849 people (2010) and later 70 studies of 3.4 million people (2015), Holt-Lunstad found weak social connection raises mortality risk comparably to smoking up to 15 cigarettes a day — a larger effect than obesity or physical inactivity. The 'modest effect' answers are the classic misconception: because loneliness feels psychological, people assume its damage is too. The data say it's a first-tier physical risk factor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">RANKING THE RISK</text>
                    <text x="550" y="228" text-anchor="middle" fill="#fff" font-size="20">Where does loneliness sit among</text>
                    <text x="550" y="263" text-anchor="middle" fill="#fff" font-size="20">the classic mortality risk factors?</text>
                    <rect x="150" y="380" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="428" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">Recall the meta-analyses</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="19">148 studies in 2010, 3.4 million people in 2015</text>
                    <rect x="150" y="530" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="578" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">Think in comparisons</text>
                    <text x="550" y="615" text-anchor="middle" fill="#fff" font-size="19">Cigarettes? Obesity? Inactivity? What did it match?</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Hint: the Surgeon General quoted this number</text>
                </svg>`,
                caption: "Test your understanding of the loneliness data"
            }
        },
        {
            type: "concept",
            title: "Why Connection Is Physiological, Not Just Emotional",
            content: "How does a friendship reach your arteries? Through at least **three biological pathways**:\n\n**1. Stress buffering.** Humans co-regulate. In the presence of a trusted person, your threat response literally quiets — lower **cortisol**, lower blood pressure reactivity. In one famous Waldinger phrase, good relationships are 'stress relievers'; chronic loneliness leaves your body marinating in low-grade fight-or-flight.\n\n**2. Inflammation.** Remember the hallmarks of aging — chronic inflammation accelerates nearly all of them. Research by **Steve Cole (UCLA)** found that chronically lonely people show a shifted gene-expression profile: **more pro-inflammatory activity, less antiviral activity**. Loneliness doesn't just feel bad; it changes which genes your immune cells run.\n\n**3. Health behaviors.** Connected people are watched over. Someone notices your cough, nags you to see a doctor, walks with you, gives you a reason to cook real food. Isolated people drink more, sleep worse, move less, and skip care.\n\nThis is why the effect sizes rival smoking: connection acts on **stress physiology, immune function, and behavior simultaneously** — the same three channels most longevity interventions target one at a time.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW FRIENDSHIP REACHES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR ARTERIES</text>
                    <text x="550" y="145" text-anchor="middle" fill="#888" font-size="23">Three biological pathways of connection</text>
                    <circle cx="550" cy="250" r="70" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="243" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">SOCIAL</text>
                    <text x="550" y="273" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">BOND</text>
                    <line x1="480" y1="300" x2="230" y2="390" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="550" y1="320" x2="550" y2="390" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="620" y1="300" x2="870" y2="390" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="60" y="400" width="300" height="290" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="450" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">1. STRESS</text>
                    <text x="210" y="482" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">BUFFERING</text>
                    <text x="210" y="530" text-anchor="middle" fill="#fff" font-size="17">Trusted people quiet</text>
                    <text x="210" y="560" text-anchor="middle" fill="#fff" font-size="17">your threat response</text>
                    <text x="210" y="605" text-anchor="middle" fill="#888" font-size="16">Lower cortisol, lower</text>
                    <text x="210" y="633" text-anchor="middle" fill="#888" font-size="16">BP reactivity</text>
                    <rect x="400" y="400" width="300" height="290" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">2. INFLAMMATION</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="17">Loneliness shifts immune</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="17">gene expression toward</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="17">pro-inflammatory activity</text>
                    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="16">Cole (UCLA) research;</text>
                    <text x="550" y="633" text-anchor="middle" fill="#888" font-size="16">fuels aging hallmarks</text>
                    <rect x="740" y="400" width="300" height="290" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">3. BEHAVIORS</text>
                    <text x="890" y="500" text-anchor="middle" fill="#fff" font-size="17">Connected people are</text>
                    <text x="890" y="530" text-anchor="middle" fill="#fff" font-size="17">watched over: nudged to</text>
                    <text x="890" y="560" text-anchor="middle" fill="#fff" font-size="17">move, eat, see doctors</text>
                    <text x="890" y="605" text-anchor="middle" fill="#888" font-size="16">Isolation breeds worse</text>
                    <text x="890" y="633" text-anchor="middle" fill="#888" font-size="16">sleep, drink, inactivity</text>
                    <rect x="100" y="750" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">Why the effect rivals smoking</text>
                    <text x="550" y="848" text-anchor="middle" fill="#fff" font-size="19">Connection hits stress, immunity, and behavior at once —</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="19">three channels most interventions target one at a time</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">Loneliness is biology, not just a feeling</text>
                </svg>`,
                caption: "Three simultaneous pathways from bond to body"
            }
        },
        {
            type: "concept",
            title: "Purpose: The Ikigai Effect",
            content: "Connection has a twin: **purpose** — a reason to get up in the morning. The Japanese call it **ikigai**.\n\nThe evidence:\n\n• **The Ohsaki Study (Sone 2008)** followed over 43,000 Japanese adults for 7 years. Those who reported having ikigai had significantly **lower all-cause mortality** — especially from cardiovascular disease — than those who didn't.\n• US data agree: in the Health and Retirement Study, adults with the highest sense of **purpose in life** had markedly lower mortality over the following years than those with the lowest (Alimujiang 2019).\n• **Volunteering** — purpose in action — associates with lower mortality too. A 2020 analysis of ~13,000 older adults (Kim, American Journal of Preventive Medicine) found those volunteering **2+ hours per week** had substantially lower risk of death and depression, and higher physical activity.\n\nWhy would purpose extend life? The proposed pathways mirror connection: purposeful people show **lower cortisol and inflammatory markers**, sleep better, use preventive healthcare more, and — crucially — purpose usually pulls you **toward other people**.\n\nHonest framing: these are observational associations, and healthier people may find purpose easier. But the associations survive heavy adjustment, and the downside of cultivating purpose is zero.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IKIGAI: A REASON TO WAKE UP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Purpose as a measurable longevity factor</text>
                    <rect x="100" y="160" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="23">Ohsaki Study (Sone 2008)</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="20">43,000+ Japanese adults followed 7 years:</text>
                    <text x="550" y="288" text-anchor="middle" fill="#fff" font-size="20">having ikigai = lower all-cause mortality</text>
                    <rect x="100" y="350" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="320" y="402" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">US replication</text>
                    <text x="320" y="445" text-anchor="middle" fill="#fff" font-size="18">Highest purpose-in-life</text>
                    <text x="320" y="477" text-anchor="middle" fill="#fff" font-size="18">scores = lower mortality</text>
                    <text x="320" y="518" text-anchor="middle" fill="#888" font-size="16">Alimujiang 2019, HRS cohort</text>
                    <rect x="560" y="350" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="780" y="402" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">Volunteering</text>
                    <text x="780" y="445" text-anchor="middle" fill="#fff" font-size="18">2+ hours/week linked to</text>
                    <text x="780" y="477" text-anchor="middle" fill="#fff" font-size="18">lower death + depression</text>
                    <text x="780" y="518" text-anchor="middle" fill="#888" font-size="16">Kim 2020, ~13,000 older adults</text>
                    <rect x="100" y="600" width="900" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="653" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">Proposed pathways</text>
                    <text x="550" y="698" text-anchor="middle" fill="#fff" font-size="19">Lower cortisol and inflammation, better sleep,</text>
                    <text x="550" y="731" text-anchor="middle" fill="#fff" font-size="19">more preventive care — and purpose usually</text>
                    <text x="550" y="764" text-anchor="middle" fill="#fff" font-size="19">pulls you toward other people</text>
                    <rect x="100" y="850" width="900" height="110" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="895" text-anchor="middle" fill="#888" font-size="18">Honest note: observational data — but heavily adjusted,</text>
                    <text x="550" y="930" text-anchor="middle" fill="#888" font-size="18">repeatedly replicated, and the downside of purpose is zero</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Purpose is connection pointed at something</text>
                </svg>`,
                caption: "From Ohsaki to volunteering: purpose tracks with survival"
            }
        },
        {
            type: "concept",
            title: "Lonely in a Crowd: It's Quality, Not Quantity",
            content: "Here's the nuance most people miss: **loneliness is subjective**. It's the gap between the connection you *have* and the connection you *want*.\n\nThat means:\n\n• You can have **500 followers and feel desperately alone** — surface contact doesn't register as connection\n• You can live **happily with a small circle** — some people thrive on two deep friendships\n• **Solitude is not loneliness** — chosen alone-time can be restorative; unchosen isolation is what corrodes\n• **A bad relationship can be worse than none** — the Harvard Study found high-conflict marriages damaged health more than divorce\n\nWhat counts as a health-grade relationship? Researchers keep landing on one question: **'Who could you call at 3 a.m. in a crisis?'** People who can name even one or two names carry most of the protective effect.\n\nOkinawa institutionalized this. A **moai** is a small group — often five friends — formed in childhood and committed for life, meeting regularly to share news, support, and sometimes money. Some moais have lasted over 90 years. Members effectively never face a crisis alone.\n\nThe goal isn't popularity. It's a handful of people who genuinely know you — and systems, like the moai, that keep those bonds maintained.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">QUALITY OVER QUANTITY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Loneliness is the gap between wanted and actual connection</text>
                    <rect x="60" y="160" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">DOESN'T PROTECT</text>
                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="19">Hundreds of followers</text>
                    <text x="290" y="306" text-anchor="middle" fill="#fff" font-size="19">Constant surface contact</text>
                    <text x="290" y="344" text-anchor="middle" fill="#fff" font-size="19">High-conflict marriage</text>
                    <text x="290" y="382" text-anchor="middle" fill="#fff" font-size="19">Busy but unknown</text>
                    <text x="290" y="430" text-anchor="middle" fill="#888" font-size="16">Harvard: bad bonds beat none — downward</text>
                    <rect x="580" y="160" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PROTECTS</text>
                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="19">1-2 people who truly know you</text>
                    <text x="810" y="306" text-anchor="middle" fill="#fff" font-size="19">Someone to call at 3 a.m.</text>
                    <text x="810" y="344" text-anchor="middle" fill="#fff" font-size="19">Chosen solitude when needed</text>
                    <text x="810" y="382" text-anchor="middle" fill="#fff" font-size="19">Regular, committed rituals</text>
                    <text x="810" y="430" text-anchor="middle" fill="#888" font-size="16">Depth carries the protective effect</text>
                    <rect x="100" y="520" width="900" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="575" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">The Okinawan moai</text>
                    <text x="550" y="622" text-anchor="middle" fill="#fff" font-size="20">A committed group of ~5 friends, often formed in</text>
                    <text x="550" y="657" text-anchor="middle" fill="#fff" font-size="20">childhood, meeting for life — sharing news, support,</text>
                    <text x="550" y="692" text-anchor="middle" fill="#fff" font-size="20">even money. Some moais have lasted 90+ years.</text>
                    <circle cx="330" cy="850" r="55" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <circle cx="440" cy="800" r="55" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="550" cy="870" r="55" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <circle cx="660" cy="800" r="55" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <circle cx="770" cy="850" r="55" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#888" font-size="17">Five people, one lifetime commitment</text>
                    <rect x="200" y="990" width="700" height="75" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1037" text-anchor="middle" fill="#ffd700" font-size="20">Aim for depth you can call at 3 a.m.</text>
                </svg>`,
                caption: "The 3 a.m. test: depth, not follower counts, protects health"
            }
        },
        {
            type: "example",
            title: "Connection Is Trainable: Proof From Real Programs",
            content: "Good news if your circle has shrunk — connection responds to deliberate practice, at any age:\n\n**Experience Corps** placed adults 55+ as volunteer tutors in elementary schools, about 15 hours a week. Johns Hopkins researchers found volunteers didn't just help kids read — over two years, seniors showed **improved memory and executive function**, and brain imaging revealed **increased hippocampal volume** in some groups. Purpose plus people literally reshaped aging brains.\n\n**Men's Sheds**, born in Australia and now numbering over 2,500 worldwide, give older men — statistically the loneliest demographic — a workshop to build things 'shoulder to shoulder.' Health surveys report reduced depression and isolation. The insight: many men bond over shared *tasks*, not scheduled 'talks.'\n\n**The 'weak ties' finding**: sociologist Mark Granovetter's classic work — and newer studies by Gillian Sandstrom — show even brief chats with baristas, neighbors, and dog-walkers measurably boost daily well-being and sense of belonging. Deep ties are the foundation, but casual ones are the daily vitamins.\n\nThe pattern across all three: **structure beats intention**. People rarely socialize their way out of loneliness by 'trying harder' — they join something with a schedule, a role, and a reason to show up.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CONNECTION IS TRAINABLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three programs with measured results</text>
                    <rect x="80" y="160" width="300" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">EXPERIENCE</text>
                    <text x="230" y="242" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">CORPS</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="16">Adults 55+ tutoring</text>
                    <text x="230" y="318" text-anchor="middle" fill="#fff" font-size="16">kids ~15 hrs/week</text>
                    <text x="230" y="365" text-anchor="middle" fill="#10b981" font-size="16">Improved memory,</text>
                    <text x="230" y="393" text-anchor="middle" fill="#10b981" font-size="16">hippocampal volume</text>
                    <text x="230" y="440" text-anchor="middle" fill="#888" font-size="15">Johns Hopkins studies</text>
                    <rect x="400" y="160" width="300" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MEN'S SHEDS</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="16">2,500+ workshops where</text>
                    <text x="550" y="318" text-anchor="middle" fill="#fff" font-size="16">men build side by side</text>
                    <text x="550" y="365" text-anchor="middle" fill="#10b981" font-size="16">Less depression,</text>
                    <text x="550" y="393" text-anchor="middle" fill="#10b981" font-size="16">less isolation</text>
                    <text x="550" y="440" text-anchor="middle" fill="#888" font-size="15">Bond over tasks, not talks</text>
                    <rect x="720" y="160" width="300" height="320" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="212" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">WEAK TIES</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="16">Chats with baristas,</text>
                    <text x="870" y="318" text-anchor="middle" fill="#fff" font-size="16">neighbors, dog-walkers</text>
                    <text x="870" y="365" text-anchor="middle" fill="#10b981" font-size="16">Boost daily mood and</text>
                    <text x="870" y="393" text-anchor="middle" fill="#10b981" font-size="16">belonging</text>
                    <text x="870" y="440" text-anchor="middle" fill="#888" font-size="15">Granovetter; Sandstrom</text>
                    <rect x="100" y="540" width="900" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">The shared pattern</text>
                    <text x="550" y="642" text-anchor="middle" fill="#fff" font-size="20">Structure beats intention: a schedule, a role,</text>
                    <text x="550" y="677" text-anchor="middle" fill="#fff" font-size="20">and a reason to show up — not 'trying harder'</text>
                    <rect x="100" y="780" width="900" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">Intergenerational bonus</text>
                    <text x="550" y="878" text-anchor="middle" fill="#fff" font-size="19">Mixing generations helped both ends: kids gained</text>
                    <text x="550" y="911" text-anchor="middle" fill="#fff" font-size="19">reading skills while elders gained brain volume</text>
                    <rect x="200" y="990" width="700" height="75" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1037" text-anchor="middle" fill="#ffd700" font-size="20">Join something. Biology follows the calendar.</text>
                </svg>`,
                caption: "Tutoring, sheds, and small talk: measured paths out of isolation"
            }
        },
        {
            type: "application",
            title: "Your Connection Prescription",
            content: "Treat this like a training plan — because physiologically, it is one:\n\n1. **Text one person today.** Not a like, an actual message: 'Thought of you — how are you doing?' Reconnection studies show people consistently underestimate how much old friends appreciate being contacted.\n\n2. **Install one weekly ritual.** A standing call with a sibling, Sunday dinner, a Saturday walk with a friend. Rituals survive busy seasons; intentions don't. Same day, same time, recurring.\n\n3. **Join one thing with a schedule.** A class, club, team, choir, volunteer shift, or faith community. You need a role and a reason to show up — structure beats willpower.\n\n4. **Add service.** Aim toward the evidence dose: about **2 hours of volunteering per week**. Purpose plus people is the double-dose combination.\n\n5. **Build one intergenerational tie.** Mentor someone younger; genuinely interview someone older about their life. Both directions independently predict well-being.\n\n6. **Audit your 3 a.m. list.** Write down who you could call in a crisis. If the list feels thin, that's not shameful — it's your training target for the next year.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR CONNECTION PRESCRIPTION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six moves, starting today</text>
                    <rect x="100" y="150" width="900" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="200" y="200" text-anchor="start" fill="#fff" font-size="20">Text one person today — a real message</text>
                    <text x="200" y="238" text-anchor="start" fill="#888" font-size="16">Old friends appreciate it more than you predict</text>
                    <rect x="100" y="290" width="900" height="115" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="340" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="200" y="340" text-anchor="start" fill="#fff" font-size="20">Install one weekly ritual — same day, same time</text>
                    <text x="200" y="378" text-anchor="start" fill="#888" font-size="16">Rituals survive busy seasons; intentions don't</text>
                    <rect x="100" y="430" width="900" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="480" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="200" y="480" text-anchor="start" fill="#fff" font-size="20">Join one thing with a schedule and a role</text>
                    <text x="200" y="518" text-anchor="start" fill="#888" font-size="16">Class, club, team, choir, or faith community</text>
                    <rect x="100" y="570" width="900" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="620" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="200" y="620" text-anchor="start" fill="#fff" font-size="20">Volunteer ~2 hours per week</text>
                    <text x="200" y="658" text-anchor="start" fill="#888" font-size="16">The dose linked to lower mortality (Kim 2020)</text>
                    <rect x="100" y="710" width="900" height="115" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="760" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="200" y="760" text-anchor="start" fill="#fff" font-size="20">Build one intergenerational tie</text>
                    <text x="200" y="798" text-anchor="start" fill="#888" font-size="16">Mentor younger; deeply interview older</text>
                    <rect x="100" y="850" width="900" height="115" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="900" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">6.</text>
                    <text x="200" y="900" text-anchor="start" fill="#fff" font-size="20">Audit your 3 a.m. list — who could you call?</text>
                    <text x="200" y="938" text-anchor="start" fill="#888" font-size="16">A thin list is a training target, not a verdict</text>
                    <rect x="200" y="995" width="700" height="72" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">Schedule connection like you schedule workouts</text>
                </svg>`,
                caption: "A six-step training plan for your social health"
            }
        },
        {
            type: "quote",
            content: "Good relationships keep us happier and healthier. Period.",
            author: "Robert Waldinger, director of the Harvard Study of Adult Development",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="22">The clearest sentence in longevity science</text>
                    <text x="550" y="290" text-anchor="middle" fill="#ffd700" font-size="120" opacity="0.35">"</text>
                    <rect x="100" y="330" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#fff" font-style="italic" font-size="30">Good relationships keep us</text>
                    <text x="550" y="485" text-anchor="middle" fill="#fff" font-style="italic" font-size="30">happier and healthier.</text>
                    <text x="550" y="545" text-anchor="middle" fill="#ffd700" font-style="italic" font-weight="bold" font-size="34">Period.</text>
                    <text x="850" y="680" text-anchor="end" fill="#8b5cf6" font-size="21">— Robert Waldinger</text>
                    <text x="850" y="715" text-anchor="end" fill="#888" font-size="17">Director, Harvard Study of Adult Development</text>
                    <rect x="150" y="790" width="800" height="170" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Why it lands</text>
                    <text x="550" y="888" text-anchor="middle" fill="#fff" font-size="18">One sentence summarizing 87 years of data,</text>
                    <text x="550" y="921" text-anchor="middle" fill="#fff" font-size="18">from the man who now runs the study</text>
                    <rect x="250" y="1000" width="600" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1042" text-anchor="middle" fill="#ffd700" font-size="19">A moment of reflection</text>
                </svg>`,
                caption: "87 years of research, distilled to nine words"
            }
        },
        {
            type: "quiz",
            question: "Loneliness harms long-term health partly by changing biology, not just mood. Which mechanism below is supported by the research in this lesson?",
            options: [
                { text: "Loneliness shifts immune gene expression toward inflammation and blunts stress buffering", correct: true },
                { text: "Loneliness only matters because lonely people exercise less — behavior explains everything", correct: false },
                { text: "Loneliness directly damages heart muscle cells through a dedicated 'isolation hormone'", correct: false },
                { text: "Loneliness affects mental health, but leaves physical biomarkers unchanged", correct: false }
            ],
            explanation: "Steve Cole's UCLA research found chronic loneliness shifts immune-cell gene expression toward pro-inflammatory, less antiviral activity, while missing social bonds removes the cortisol-lowering 'stress buffering' effect of trusted company. Behavior (option B) is one real pathway, but only one of three — stress physiology and inflammation operate even at identical activity levels. There's no single 'isolation hormone,' and the whole point of the data is that biomarkers do change.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">MECHANISMS</text>
                    <text x="550" y="228" text-anchor="middle" fill="#fff" font-size="20">How does loneliness physically</text>
                    <text x="550" y="263" text-anchor="middle" fill="#fff" font-size="20">accelerate aging?</text>
                    <rect x="100" y="370" width="280" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="240" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">STRESS?</text>
                    <text x="240" y="470" text-anchor="middle" fill="#888" font-size="16">Cortisol, blood pressure</text>
                    <rect x="410" y="370" width="280" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">IMMUNITY?</text>
                    <text x="550" y="470" text-anchor="middle" fill="#888" font-size="16">Gene expression shifts</text>
                    <rect x="720" y="370" width="280" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="860" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">BEHAVIOR?</text>
                    <text x="860" y="470" text-anchor="middle" fill="#888" font-size="16">Sleep, movement, care</text>
                    <rect x="200" y="590" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="20">Hint: how many of these pathways are real?</text>
                </svg>`,
                caption: "Test your grasp of the biology of connection"
            }
        },
        {
            type: "concept",
            title: "Prescribe It Like Exercise",
            content: "Zoom out and the picture is remarkable. Across an 87-year cohort study, meta-analyses of 3.4 million people, a town-sized natural experiment, and randomized volunteer programs, the same signal keeps appearing: **connection behaves like a longevity intervention** — with effect sizes in smoking territory.\n\nSo treat it with the same seriousness you'd give training or nutrition:\n\n• **It has a dose** — weekly rituals, ~2 volunteer hours, daily weak-tie contact\n• **It has a mechanism** — stress buffering, lower inflammation, better health behaviors\n• **It's trainable at any age** — Experience Corps grew hippocampi in seniors; moais form in childhood but Men's Sheds form at 70\n• **It compounds** — connected people move more, sleep better, and recover faster, feeding every other lesson in this book\n\nAnd notice how the pieces interlock: the Blue Zone patterns you learned earlier weren't just beans and walking — they were beans and walking **with other people**, wrapped in purpose. The next lesson covers sleep, and yes — lonely people sleep measurably worse, too.\n\nSome health systems now practice **'social prescribing'** — doctors literally prescribing community groups. You don't need to wait for a prescription. You can write your own this week.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CONNECTION AS MEDICINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">It meets every test of a real intervention</text>
                    <rect x="80" y="160" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HAS A DOSE</text>
                    <text x="300" y="258" text-anchor="middle" fill="#fff" font-size="17">Weekly rituals, ~2 volunteer</text>
                    <text x="300" y="288" text-anchor="middle" fill="#fff" font-size="17">hours, daily weak ties</text>
                    <rect x="580" y="160" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">HAS A MECHANISM</text>
                    <text x="800" y="258" text-anchor="middle" fill="#fff" font-size="17">Stress buffering, lower</text>
                    <text x="800" y="288" text-anchor="middle" fill="#fff" font-size="17">inflammation, behaviors</text>
                    <rect x="80" y="380" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">TRAINABLE AT ANY AGE</text>
                    <text x="300" y="478" text-anchor="middle" fill="#fff" font-size="17">Experience Corps grew</text>
                    <text x="300" y="508" text-anchor="middle" fill="#fff" font-size="17">hippocampi in seniors</text>
                    <rect x="580" y="380" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">IT COMPOUNDS</text>
                    <text x="800" y="478" text-anchor="middle" fill="#fff" font-size="17">Connected people move,</text>
                    <text x="800" y="508" text-anchor="middle" fill="#fff" font-size="17">sleep, and recover better</text>
                    <rect x="100" y="620" width="900" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">The Blue Zone re-read</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="19">It was never just beans and walking — it was beans</text>
                    <text x="550" y="751" text-anchor="middle" fill="#fff" font-size="19">and walking with other people, wrapped in purpose</text>
                    <rect x="100" y="850" width="900" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">'Social prescribing' is now real medicine</text>
                    <text x="550" y="938" text-anchor="middle" fill="#fff" font-size="18">Doctors prescribe community groups — you can self-prescribe</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Next lesson: the repair shift — sleep</text>
                </svg>`,
                caption: "Dose, mechanism, trainability: connection passes every test"
            }
        }
    ]
},
{
    id: 11,
    title: "Sleep, Rhythm, and Nightly Repair",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Repair Crew That Clocks In When You Clock Out",
            content: "Every night, while you lie unconscious, a crew goes to work.\n\nYour brain cells shrink to open channels, and cerebrospinal fluid **washes through your brain**, flushing out metabolic waste — including the beta-amyloid proteins implicated in Alzheimer's. Your pituitary releases pulses of **growth hormone** to repair muscle and bone. Your immune system runs quality control, consolidating the day's threat intelligence. Your metabolism resets its insulin sensitivity for tomorrow.\n\nMiss the shift, and none of that maintenance happens. Do it night after night, and you age faster — measurably.\n\nHere's the strange part: sleep is the one longevity intervention that costs nothing, feels good, and takes a third of your life whether you do it well or badly. Yet roughly **one in three adults** shortchanges it chronically.\n\nIn this lesson: the U-shaped curve that says ~7 hours wins, why deep sleep fades with age (and what actually preserves it), how late-night eating sabotages your glucose, and the sleep disorder that silently accelerates aging in nearly a billion people.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NIGHT SHIFT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What your body repairs while you sleep</text>
                    <circle cx="550" cy="250" r="90" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="3"/>
                    <path d="M580 200 A 60 60 0 1 0 600 290 A 48 48 0 1 1 580 200" fill="#ffd700" opacity="0.9"/>
                    <text x="550" y="380" text-anchor="middle" fill="#888" font-size="18">You, unconscious. Meanwhile...</text>
                    <rect x="80" y="430" width="440" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="482" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">BRAIN RINSE</text>
                    <text x="300" y="525" text-anchor="middle" fill="#fff" font-size="17">Fluid flushes waste,</text>
                    <text x="300" y="555" text-anchor="middle" fill="#fff" font-size="17">including beta-amyloid</text>
                    <rect x="580" y="430" width="440" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="482" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">HORMONE PULSES</text>
                    <text x="800" y="525" text-anchor="middle" fill="#fff" font-size="17">Growth hormone repairs</text>
                    <text x="800" y="555" text-anchor="middle" fill="#fff" font-size="17">muscle and bone</text>
                    <rect x="80" y="650" width="440" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="702" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">IMMUNE TUNE-UP</text>
                    <text x="300" y="745" text-anchor="middle" fill="#fff" font-size="17">Defenses consolidate</text>
                    <text x="300" y="775" text-anchor="middle" fill="#fff" font-size="17">the day's threat intel</text>
                    <rect x="580" y="650" width="440" height="180" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="702" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">METABOLIC RESET</text>
                    <text x="800" y="745" text-anchor="middle" fill="#fff" font-size="17">Insulin sensitivity</text>
                    <text x="800" y="775" text-anchor="middle" fill="#fff" font-size="17">restored for tomorrow</text>
                    <rect x="100" y="880" width="900 " height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="918" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Miss the shift, skip the maintenance</text>
                    <text x="550" y="952" text-anchor="middle" fill="#fff" font-size="18">~1 in 3 adults chronically shortchanges sleep</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">The free intervention you're already scheduled for</text>
                </svg>`,
                caption: "Four repair systems run only while you sleep"
            }
        },
        {
            type: "concept",
            title: "The U-Shaped Curve: Why ~7 Hours Wins",
            content: "Plot sleep duration against death rates across millions of people, and you get a **U-shaped curve**.\n\nA landmark meta-analysis (**Cappuccio 2010**, pooling 16 studies and over 1.3 million people) found:\n\n• **Short sleepers** (typically under 6 hours) had about **12% higher risk of death** over follow-up\n• **The bottom of the curve** — lowest mortality — sits around **7 hours** per night\n• **Long sleepers** (over 8-9 hours) showed *even higher* risk — around 30% in that analysis\n\nTwo honest caveats:\n\n**1. Long sleep is mostly a symptom, not a cause.** Undiagnosed illness, depression, sleep apnea, and inflammation make people sleep long. Nobody thinks capping healthy sleep extends life.\n\n**2. Short sleep looks genuinely causal.** Unlike long sleep, short sleep has experimental backup: restrict healthy volunteers to 4-5 hours in a lab and within days you can measure **impaired glucose tolerance, elevated blood pressure, increased hunger hormones, and weakened immune response** (Spiegel and Van Cauter's classic 1999 study showed young men developing pre-diabetic glucose handling after six nights of 4-hour sleep).\n\nThe practical target: **7-9 hours of opportunity in bed**, landing most adults at ~7-8 hours of actual sleep. Consistency matters as much as the number — and that's the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE U-SHAPED CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sleep duration vs mortality risk (Cappuccio 2010)</text>
                    <line x1="120" y1="620" x2="1000" y2="620" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="620" x2="120" y2="170" stroke="#888" stroke-width="2"/>
                    <text x="60" y="200" text-anchor="start" fill="#888" font-size="16">Risk</text>
                    <text x="1000" y="660" text-anchor="end" fill="#888" font-size="16">Hours of sleep</text>
                    <path d="M170 220 Q 340 560 550 570 Q 760 560 950 240" fill="none" stroke="#6366f1" stroke-width="5"/>
                    <circle cx="170" cy="220" r="14" fill="#ef4444"/>
                    <text x="200" y="200" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="18">Under 6h: +12%</text>
                    <circle cx="550" cy="570" r="16" fill="#10b981"/>
                    <text x="550" y="680" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">~7h: lowest mortality</text>
                    <circle cx="950" cy="240" r="14" fill="#f59e0b"/>
                    <text x="920" y="200" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="18">Over 9h: +30%</text>
                    <text x="170" y="660" text-anchor="middle" fill="#888" font-size="17">5h</text>
                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="17">7h</text>
                    <text x="950" y="660" text-anchor="middle" fill="#888" font-size="17">9h+</text>
                    <rect x="80" y="730" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="780" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Long sleep: a symptom</text>
                    <text x="300" y="820" text-anchor="middle" fill="#fff" font-size="16">Illness and apnea make people</text>
                    <text x="300" y="850" text-anchor="middle" fill="#fff" font-size="16">sleep long — reverse causation</text>
                    <rect x="580" y="730" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="780" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Short sleep: causal</text>
                    <text x="800" y="820" text-anchor="middle" fill="#fff" font-size="16">Lab restriction impairs glucose,</text>
                    <text x="800" y="850" text-anchor="middle" fill="#fff" font-size="16">BP, hunger, immunity in days</text>
                    <rect x="150" y="960" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="998" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">Target: 7-9 hours of opportunity in bed</text>
                    <text x="550" y="1032" text-anchor="middle" fill="#fff" font-size="18">1.3 million people say the sweet spot is ~7-8 hours</text>
                </svg>`,
                caption: "Both tails of the curve carry risk — but for different reasons"
            }
        },
        {
            type: "concept",
            title: "The Glymphatic System: Your Brain's Overnight Power Wash",
            content: "In 2012-2013, neuroscientist **Maiken Nedergaard's** lab at the University of Rochester discovered something textbooks had missed: the brain has a dedicated waste-clearance plumbing system — the **glymphatic system** — and it runs primarily **during deep sleep**.\n\nWhat they observed in mice was startling:\n\n• During slow-wave (deep) sleep, brain cells **shrink by up to ~60% of their volume**, widening the channels between them\n• **Cerebrospinal fluid** then pulses through, flushing metabolic waste into the body's drainage\n• Clearance of **beta-amyloid** — the protein that aggregates in Alzheimer's — roughly **doubled during sleep** compared to waking\n\nHuman evidence is accumulating: even **one night** of total sleep deprivation raises measurable beta-amyloid in human brains on PET scans (Shokri-Kojori 2018, NIH). Long-term observational data link chronic poor sleep with higher dementia risk.\n\nHonest framing: the detailed mechanism is best documented in mice, and human glymphatic research is young. But the direction of evidence is consistent — and it reframes sleep entirely. Deep sleep isn't rest. It's **active neurological sanitation**, and it's the only time the cleaning crew can get into the building.\n\nThat's why the *quality* of sleep — how much deep sleep you get — matters as much as duration. Which raises a problem: deep sleep declines with age.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GLYMPHATIC SYSTEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Discovered 2012-13, Nedergaard Lab, U. Rochester</text>
                    <rect x="80" y="160" width="440" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">AWAKE</text>
                    <circle cx="220" cy="300" r="48" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="310" cy="290" r="48" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="265" cy="370" r="48" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="410" y="310" text-anchor="middle" fill="#888" font-size="15">cells swollen,</text>
                    <text x="410" y="338" text-anchor="middle" fill="#888" font-size="15">channels closed</text>
                    <text x="300" y="460" text-anchor="middle" fill="#fff" font-size="17">Waste accumulates all day</text>
                    <rect x="580" y="160" width="440" height="330" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="212" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">DEEP SLEEP</text>
                    <circle cx="710" cy="300" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="820" cy="290" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="760" cy="380" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <path d="M660 260 Q 760 330 880 260" fill="none" stroke="#14b8a6" stroke-width="3" stroke-dasharray="7"/>
                    <path d="M660 420 Q 760 350 880 420" fill="none" stroke="#14b8a6" stroke-width="3" stroke-dasharray="7"/>
                    <text x="920" y="315" text-anchor="middle" fill="#888" font-size="15">cells shrink</text>
                    <text x="920" y="343" text-anchor="middle" fill="#888" font-size="15">up to ~60%</text>
                    <text x="800" y="460" text-anchor="middle" fill="#fff" font-size="17">Fluid flushes waste out</text>
                    <rect x="100" y="550" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="602" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="23">Beta-amyloid clearance ~doubles in sleep</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="19">The same protein that aggregates in Alzheimer's —</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="19">cleared mainly during slow-wave (deep) sleep</text>
                    <rect x="100" y="760" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">Human evidence</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="18">One sleepless night raises amyloid on human PET scans</text>
                    <rect x="100" y="930" width="900" height="70" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="975" text-anchor="middle" fill="#888" font-size="17">Honest note: mechanism best shown in mice; human field is young</text>
                    <rect x="250" y="1020" width="600" height="60" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="19">Deep sleep = neurological sanitation</text>
                </svg>`,
                caption: "Cells shrink, fluid flows, waste leaves — only in deep sleep"
            }
        },
        {
            type: "visual",
            title: "Deep Sleep Declines With Age — But It's Defensible",
            content: "Slow-wave (deep) sleep peaks in childhood and declines steadily through adulthood — by some estimates older adults get a **fraction of the deep sleep they got at 20**, and growth hormone release falls with it.\n\nBut here's what the doom headlines skip: a meaningful share of that decline tracks with things you control. Five levers reliably protect deep sleep:\n\n• **Exercise** — regular aerobic and resistance training measurably increases slow-wave sleep; it's the single strongest natural enhancer\n• **Morning light** — bright outdoor light within an hour of waking anchors your circadian clock, deepening night-time sleep pressure\n• **Consistency** — same bedtime and wake time, even weekends; irregular schedules fragment deep sleep\n• **Cool, dark, quiet room** — around **65°F / 18°C**; your core temperature must drop to enter deep sleep\n• **Alcohol honesty** — a nightcap *feels* sedating but **fragments the second half of the night**, suppressing both deep and REM sleep. It's a sleep thief wearing a lullaby.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DEFENDING DEEP SLEEP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">It declines with age — five levers slow the slide</text>
                    <line x1="120" y1="420" x2="1000" y2="420" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="420" x2="120" y2="160" stroke="#888" stroke-width="2"/>
                    <text x="70" y="180" text-anchor="start" fill="#888" font-size="15">Deep</text>
                    <text x="70" y="205" text-anchor="start" fill="#888" font-size="15">sleep</text>
                    <path d="M140 190 Q 400 240 980 390" fill="none" stroke="#ef4444" stroke-width="4"/>
                    <path d="M140 190 Q 420 220 980 300" fill="none" stroke="#10b981" stroke-width="4" stroke-dasharray="9"/>
                    <text x="960" y="370" text-anchor="end" fill="#ef4444" font-size="16">untrained decline</text>
                    <text x="960" y="280" text-anchor="end" fill="#10b981" font-size="16">defended decline</text>
                    <text x="160" y="450" text-anchor="middle" fill="#888" font-size="16">20</text>
                    <text x="560" y="450" text-anchor="middle" fill="#888" font-size="16">50</text>
                    <text x="960" y="450" text-anchor="middle" fill="#888" font-size="16">80</text>
                    <rect x="100" y="500" width="900" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="540" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">1. EXERCISE</text>
                    <text x="150" y="573" text-anchor="start" fill="#fff" font-size="17">The strongest natural deep-sleep enhancer</text>
                    <rect x="100" y="610" width="900" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="650" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">2. MORNING LIGHT</text>
                    <text x="150" y="683" text-anchor="start" fill="#fff" font-size="17">Bright outdoor light within 1 hour of waking</text>
                    <rect x="100" y="720" width="900" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="760" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">3. CONSISTENCY</text>
                    <text x="150" y="793" text-anchor="start" fill="#fff" font-size="17">Same bed and wake time — weekends included</text>
                    <rect x="100" y="830" width="900" height="90" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="870" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">4. COOL, DARK, QUIET</text>
                    <text x="150" y="903" text-anchor="start" fill="#fff" font-size="17">~65 F / 18 C — core temperature must drop</text>
                    <rect x="100" y="940" width="900" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="980" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">5. ALCOHOL HONESTY</text>
                    <text x="150" y="1013" text-anchor="start" fill="#fff" font-size="17">Feels sedating, but fragments deep and REM sleep</text>
                </svg>`,
                caption: "Age tilts the curve — your habits set the slope"
            }
        },
        {
            type: "quiz",
            question: "Large meta-analyses show sleep duration and mortality form a U-shaped curve. What is the most accurate interpretation?",
            options: [
                { text: "Sleeping 9+ hours is as directly harmful as sleeping 5 — cap your sleep to be safe", correct: false },
                { text: "~7h associates with lowest mortality; short sleep looks causal in lab studies, while long sleep is largely a marker of underlying illness", correct: true },
                { text: "The curve proves everyone needs exactly 7 hours; individual variation is a myth", correct: false },
                { text: "Only total hours matter — the timing and consistency of sleep have no measurable effects", correct: false }
            ],
            explanation: "Cappuccio's 2010 pooled analysis of 1.3+ million people found lowest mortality near 7 hours. Short sleep has experimental support for causality — restricting volunteers to 4-5 hours impairs glucose tolerance, blood pressure, and immunity within days. Long sleep's association is mostly reverse causation: illness, depression, and apnea lengthen sleep. That's why 'cap your sleep' is the tempting-but-wrong answer, and why the 7-9 hour opportunity window — not a rigid 7 — is the evidence-based target.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE U-CURVE</text>
                    <text x="550" y="228" text-anchor="middle" fill="#fff" font-size="20">Both tails rise — but do they rise</text>
                    <text x="550" y="263" text-anchor="middle" fill="#fff" font-size="20">for the same reason?</text>
                    <path d="M280 560 Q 420 420 550 415 Q 680 420 820 560" fill="none" stroke="#6366f1" stroke-width="5" transform="rotate(180 550 490)"/>
                    <circle cx="550" cy="565" r="0" fill="#10b981"/>
                    <path d="M300 400 Q 430 560 550 565 Q 670 560 800 400" fill="none" stroke="#8b5cf6" stroke-width="5"/>
                    <circle cx="550" cy="565" r="12" fill="#10b981"/>
                    <text x="550" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">sweet spot ~7h</text>
                    <text x="300" y="380" text-anchor="middle" fill="#ef4444" font-size="17">short: causal?</text>
                    <text x="800" y="380" text-anchor="middle" fill="#f59e0b" font-size="17">long: symptom?</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Hint: what did the lab restriction studies show?</text>
                </svg>`,
                caption: "Interpret the curve like an epidemiologist"
            }
        },
        {
            type: "concept",
            title: "Circadian Eating: The Same Meal Costs More at Midnight",
            content: "Your metabolism isn't a flat rate — it runs on a **circadian schedule**. Insulin sensitivity peaks in the morning and early afternoon, then declines toward night as melatonin rises.\n\nThe consequence is measurable and a little unsettling: **the identical meal produces a bigger glucose spike at night than in the morning**. In controlled studies, evening glucose tolerance can look almost 'pre-diabetic' in people who are perfectly healthy at 8 a.m.\n\nWhat the research shows:\n\n• **Late eating and weight**: In a controlled crossover trial (Vujović 2022, Cell Metabolism), eating the same meals **4 hours later** increased hunger, decreased energy expenditure, and shifted fat tissue toward storage\n• **Shift work is the extreme case**: chronic circadian disruption in shift workers associates with higher rates of obesity, type 2 diabetes, and cardiovascular disease — enough that the WHO classifies night-shift work as a probable carcinogen\n• **Melatonin and insulin clash**: taking in carbs while melatonin is elevated (late night, very early morning) impairs the insulin response\n\nThe practical rules that fall out:\n\n• **Front-load calories** — make breakfast and lunch substantial, dinner lighter\n• **Close the kitchen ~3 hours before bed** — this also protects deep sleep, since active digestion raises core temperature\n• **Keep meal timing consistent** — your metabolic organs anticipate food like your brain anticipates the alarm clock",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME MEAL, DIFFERENT COST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Glucose response to an identical meal by time of day</text>
                    <rect x="80" y="170" width="440" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">8 A.M.</text>
                    <line x1="140" y1="460" x2="460" y2="460" stroke="#888" stroke-width="2"/>
                    <path d="M150 450 Q 240 330 300 400 Q 370 450 450 455" fill="none" stroke="#10b981" stroke-width="5"/>
                    <text x="300" y="500" text-anchor="middle" fill="#fff" font-size="17">Modest spike, quick return</text>
                    <rect x="580" y="170" width="440" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="222" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">10 P.M.</text>
                    <line x1="640" y1="460" x2="960" y2="460" stroke="#888" stroke-width="2"/>
                    <path d="M650 450 Q 730 240 810 300 Q 890 380 950 430" fill="none" stroke="#ef4444" stroke-width="5"/>
                    <text x="800" y="500" text-anchor="middle" fill="#fff" font-size="17">Bigger spike, slower return</text>
                    <rect x="100" y="580" width="900" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="632" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">Vujovic 2022 (Cell Metabolism)</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="19">Same meals eaten 4 hours later: more hunger, less</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="19">energy burned, fat tissue shifted toward storage</text>
                    <rect x="100" y="780" width="900" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="832" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">Three circadian eating rules</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="19">Front-load: bigger breakfast and lunch, lighter dinner</text>
                    <text x="550" y="918" text-anchor="middle" fill="#fff" font-size="19">Close the kitchen ~3 hours before bed</text>
                    <text x="550" y="956" text-anchor="middle" fill="#fff" font-size="19">Keep meal times consistent day to day</text>
                    <rect x="200" y="1020" width="700" height="60" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="19">When you eat is a real metabolic variable</text>
                </svg>`,
                caption: "Insulin sensitivity fades at night — your dinner knows it"
            }
        },
        {
            type: "example",
            title: "Sleep Apnea: The Aging Accelerant Hiding in a Snore",
            content: "Meet the most under-diagnosed aging accelerant in medicine.\n\n**Obstructive sleep apnea (OSA)**: during sleep, the airway repeatedly collapses. Breathing stops — sometimes hundreds of times a night — and each pause ends with a micro-awakening and an oxygen dip.\n\nThe scale is staggering. A 2019 analysis in *The Lancet Respiratory Medicine* (Benjafield) estimated **nearly 1 billion adults worldwide** have OSA — and as many as **80% of moderate-to-severe cases are undiagnosed**.\n\nWhy it accelerates aging:\n\n• **It shreds deep sleep** — the micro-awakenings prevent exactly the slow-wave sleep that runs glymphatic clearance and growth-hormone release\n• **Intermittent low oxygen** stresses the cardiovascular system: untreated OSA drives hypertension, atrial fibrillation, and raises stroke risk\n• **It sabotages metabolism** — OSA independently worsens insulin resistance\n• Studies even show OSA associates with **accelerated epigenetic aging** — and treatment appears to partially reverse the signal\n\n**Red flags**: loud snoring, witnessed pauses in breathing, gasping awake, morning headaches, waking unrefreshed despite 'enough' hours, daytime sleepiness. Risk climbs with weight, age, and neck size — but thin people get it too.\n\nIf any of that sounds like you or your partner: a **home sleep test** is now cheap and simple. Treatment (CPAP, oral appliances, weight loss) transforms lives — many people describe it as getting a decade back.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HIDDEN ACCELERANT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Obstructive sleep apnea by the numbers</text>
                    <rect x="80" y="160" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="30">~1 billion</text>
                    <text x="300" y="262" text-anchor="middle" fill="#fff" font-size="18">adults affected worldwide</text>
                    <text x="300" y="295" text-anchor="middle" fill="#888" font-size="15">Benjafield 2019, Lancet Resp Med</text>
                    <rect x="580" y="160" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="30">up to 80%</text>
                    <text x="800" y="262" text-anchor="middle" fill="#fff" font-size="18">of serious cases undiagnosed</text>
                    <text x="800" y="295" text-anchor="middle" fill="#888" font-size="15">The snore nobody investigates</text>
                    <rect x="100" y="360" width="900" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="412" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">How it accelerates aging</text>
                    <text x="550" y="458" text-anchor="middle" fill="#fff" font-size="19">Shreds deep sleep — blocks glymphatic clearance</text>
                    <text x="550" y="494" text-anchor="middle" fill="#fff" font-size="19">Oxygen dips drive hypertension, AFib, stroke risk</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="19">Worsens insulin resistance independently</text>
                    <text x="550" y="566" text-anchor="middle" fill="#fff" font-size="19">Linked to faster epigenetic aging — treatment helps</text>
                    <rect x="100" y="630" width="900" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="682" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">Red flags</text>
                    <text x="550" y="726" text-anchor="middle" fill="#fff" font-size="19">Loud snoring, witnessed breathing pauses, gasping awake,</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="19">morning headaches, unrefreshed despite 'enough' hours,</text>
                    <text x="550" y="794" text-anchor="middle" fill="#fff" font-size="19">daytime sleepiness (thin people get it too)</text>
                    <rect x="100" y="860" width="900" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">The fix is real</text>
                    <text x="550" y="948" text-anchor="middle" fill="#fff" font-size="18">Home sleep tests are cheap; CPAP and appliances transform lives</text>
                    <rect x="200" y="1010" width="700" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1052" text-anchor="middle" fill="#ffd700" font-size="19">If you snore and wake tired — get tested</text>
                </svg>`,
                caption: "A billion people, mostly undiagnosed, aging faster nightly"
            }
        },
        {
            type: "concept",
            title: "Can't Sleep? The Fix Isn't a Pill — It's CBT-I",
            content: "What if you do everything right and still lie awake at 2 a.m.?\n\nIf poor sleep strikes **at least 3 nights a week for 3+ months** and hurts your days, that's **chronic insomnia** — and the treatment with the best evidence isn't medication. It's **CBT-I: Cognitive Behavioral Therapy for Insomnia**.\n\nSince 2016, the **American College of Physicians** has recommended CBT-I as the **first-line treatment** for chronic insomnia in adults — before any drug. Why:\n\n• **It works as well as sleeping pills short-term and better long-term** — benefits persist for years after treatment ends, while pills stop working when you stop taking them\n• **No dependence, no morning grogginess**, no fall risk in older adults (a real issue with sedatives)\n• Typical course: **4-8 sessions**, and digital versions (validated apps and online programs) work too\n\nWhat CBT-I actually does — it's practical, not talk-your-feelings therapy:\n\n• **Stimulus control**: bed is for sleep only; awake more than ~20 minutes, get up until sleepy\n• **Sleep restriction**: temporarily compress time in bed to rebuild sleep pressure — counterintuitive and remarkably effective\n• **Cognitive work**: dismantle the 3 a.m. catastrophizing ('I'll be ruined tomorrow') that fuels the anxiety-insomnia loop\n\nOne more honesty note: occasional bad nights are **normal** and not dangerous. Anxiety about sleep destroys more sleep than caffeine does.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CBT-I: THE FIRST-LINE FIX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">ACP 2016: recommended before any sleeping pill</text>
                    <rect x="100" y="160" width="900" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="207" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">When it's insomnia (not just a bad week)</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">3+ nights a week, for 3+ months, with daytime impact</text>
                    <rect x="60" y="310" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="362" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">SLEEPING PILLS</text>
                    <text x="290" y="412" text-anchor="middle" fill="#fff" font-size="18">Work only while taken</text>
                    <text x="290" y="448" text-anchor="middle" fill="#fff" font-size="18">Tolerance + dependence risk</text>
                    <text x="290" y="484" text-anchor="middle" fill="#fff" font-size="18">Grogginess, fall risk in elders</text>
                    <text x="290" y="520" text-anchor="middle" fill="#fff" font-size="18">Don't fix the root cause</text>
                    <text x="290" y="575" text-anchor="middle" fill="#888" font-size="16">Sometimes useful short-term</text>
                    <rect x="580" y="310" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="362" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">CBT-I</text>
                    <text x="810" y="412" text-anchor="middle" fill="#fff" font-size="18">Benefits persist for years</text>
                    <text x="810" y="448" text-anchor="middle" fill="#fff" font-size="18">No dependence, no hangover</text>
                    <text x="810" y="484" text-anchor="middle" fill="#fff" font-size="18">4-8 sessions; apps work too</text>
                    <text x="810" y="520" text-anchor="middle" fill="#fff" font-size="18">Retrains the sleep system</text>
                    <text x="810" y="575" text-anchor="middle" fill="#888" font-size="16">First-line per ACP guidelines</text>
                    <rect x="100" y="670" width="900" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="722" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">What CBT-I actually trains</text>
                    <text x="550" y="768" text-anchor="middle" fill="#fff" font-size="19">Stimulus control: bed = sleep; awake 20 min, get up</text>
                    <text x="550" y="804" text-anchor="middle" fill="#fff" font-size="19">Sleep restriction: compress time in bed to rebuild pressure</text>
                    <text x="550" y="840" text-anchor="middle" fill="#fff" font-size="19">Cognitive work: defuse the 3 a.m. catastrophizing loop</text>
                    <rect x="150" y="950" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="988" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Occasional bad nights are normal</text>
                    <text x="550" y="1022" text-anchor="middle" fill="#fff" font-size="17">Sleep anxiety destroys more sleep than caffeine does</text>
                </svg>`,
                caption: "Retrain the system instead of sedating it"
            }
        },
        {
            type: "example",
            title: "One Bad Week: Watching Sleep Debt Hit Your Bloodwork",
            content: "How fast does sleep loss show up in your biology? Faster than almost anyone believes.\n\n**Six nights.** In Eve Van Cauter's University of Chicago studies, healthy young men restricted to about 4 hours of sleep for six nights saw their glucose handling deteriorate toward a **pre-diabetic pattern** — reversed after recovery sleep.\n\n**One week.** A 2013 study (Möller-Levet, PNAS) found a single week of under-6-hour nights altered the expression of **over 700 genes** — including ones governing inflammation, immunity, and stress response.\n\n**One night.** After a single night of total sleep deprivation, PET scans show increased **beta-amyloid** in the human brain; other studies find natural killer cell activity — your anti-cancer immune patrol — drops sharply after even partial deprivation (Irwin's classic finding: one night of 4-hour sleep cut NK activity ~70% temporarily).\n\n**And the rhinovirus test**: Aric Prather (2015) exposed 164 volunteers to a common cold virus. Those averaging **under 6 hours** of sleep were about **4x more likely** to develop a cold than those sleeping 7+ — sleep out-predicted age, stress, and smoking.\n\nThe encouraging flip side: these markers **recover** when sleep does. Your biology forgives a bad week. What it doesn't forgive is making the bad week your baseline.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW FAST DEBT SHOWS UP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Measured effects of sleep restriction, by timescale</text>
                    <rect x="100" y="160" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="180" y="222" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">1 night</text>
                    <text x="620" y="210" text-anchor="middle" fill="#fff" font-size="18">Beta-amyloid rises on brain PET scans;</text>
                    <text x="620" y="245" text-anchor="middle" fill="#fff" font-size="18">natural killer cell activity drops ~70% (temporary)</text>
                    <rect x="100" y="340" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="180" y="402" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">6 nights</text>
                    <text x="620" y="390" text-anchor="middle" fill="#fff" font-size="18">4-hour sleep pushes healthy young men toward</text>
                    <text x="620" y="425" text-anchor="middle" fill="#fff" font-size="18">pre-diabetic glucose handling (Van Cauter)</text>
                    <rect x="100" y="520" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="180" y="582" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">1 week</text>
                    <text x="620" y="570" text-anchor="middle" fill="#fff" font-size="18">700+ genes shift expression — inflammation,</text>
                    <text x="620" y="605" text-anchor="middle" fill="#fff" font-size="18">immunity, stress response (Moller-Levet 2013)</text>
                    <rect x="100" y="700" width="900" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="752" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">The cold-virus experiment (Prather 2015)</text>
                    <text x="550" y="798" text-anchor="middle" fill="#fff" font-size="19">Under 6h sleepers were ~4x more likely to catch the cold</text>
                    <text x="550" y="833" text-anchor="middle" fill="#fff" font-size="19">than 7h+ sleepers — beating age, stress, and smoking</text>
                    <rect x="100" y="910" width="900" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">The forgiving part</text>
                    <text x="550" y="998" text-anchor="middle" fill="#fff" font-size="18">Markers recover with sleep — just don't make debt your baseline</text>
                </svg>`,
                caption: "One night to one week: sleep debt is visible in your labs"
            }
        },
        {
            type: "application",
            title: "Your Sleep Upgrade Protocol",
            content: "Don't overhaul everything. Run this as a two-week experiment and keep what works:\n\n1. **Anchor your wake time.** Same time every day, weekends included — it's the single most powerful lever. Your bedtime will start finding itself.\n\n2. **Get 10 minutes of outdoor light within an hour of waking.** Coffee on the porch, walk the block. This sets the circadian clock that controls tonight's deep sleep.\n\n3. **Set a caffeine curfew ~10 hours before bed** (caffeine's half-life is 5-6 hours) **and close the kitchen ~3 hours before bed.** Late meals spike glucose and raise core temperature.\n\n4. **Do the alcohol experiment.** Two weeks without evening drinks; if you track sleep, watch your deep sleep and resting heart rate change. Decide with data, not habit.\n\n5. **Make the cave: cool, dark, quiet.** Target ~65°F / 18°C, blackout or eye mask, earplugs or white noise. Phone charges outside the bedroom — the scroll is a bigger thief than the light.\n\n6. **Escalate smartly.** Snoring plus daytime exhaustion → ask about a **home sleep apnea test**. Sleepless 3+ nights/week for 3+ months → ask for **CBT-I** specifically, before pills.\n\nGive yourself a 7-9 hour opportunity window nightly. You can't force sleep — you can only build the runway and let it land.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR SLEEP UPGRADE PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A two-week experiment — keep what works</text>
                    <rect x="100" y="150" width="900" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="200" y="200" text-anchor="start" fill="#fff" font-size="20">Anchor your wake time — 7 days a week</text>
                    <text x="200" y="238" text-anchor="start" fill="#888" font-size="16">The single most powerful lever</text>
                    <rect x="100" y="290" width="900" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="340" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">2.</text>
                    <text x="200" y="340" text-anchor="start" fill="#fff" font-size="20">10 min outdoor light within 1 hour of waking</text>
                    <text x="200" y="378" text-anchor="start" fill="#888" font-size="16">Sets the clock that controls tonight's deep sleep</text>
                    <rect x="100" y="430" width="900" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="480" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="200" y="480" text-anchor="start" fill="#fff" font-size="20">Caffeine curfew 10h before bed; kitchen closes 3h before</text>
                    <text x="200" y="518" text-anchor="start" fill="#888" font-size="16">Half-life of caffeine is 5-6 hours; late meals spike glucose</text>
                    <rect x="100" y="570" width="900" height="115" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="620" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">4.</text>
                    <text x="200" y="620" text-anchor="start" fill="#fff" font-size="20">Two-week alcohol experiment — decide with data</text>
                    <text x="200" y="658" text-anchor="start" fill="#888" font-size="16">Watch deep sleep and resting heart rate respond</text>
                    <rect x="100" y="710" width="900" height="115" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="760" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">5.</text>
                    <text x="200" y="760" text-anchor="start" fill="#fff" font-size="20">Make the cave: ~65 F, blackout dark, quiet, no phone</text>
                    <text x="200" y="798" text-anchor="start" fill="#888" font-size="16">The scroll steals more sleep than the screen light</text>
                    <rect x="100" y="850" width="900" height="115" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="150" y="900" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">6.</text>
                    <text x="200" y="900" text-anchor="start" fill="#fff" font-size="20">Escalate: snoring + exhaustion = apnea test; chronic = CBT-I</text>
                    <text x="200" y="938" text-anchor="start" fill="#888" font-size="16">Ask for CBT-I by name, before pills</text>
                    <rect x="200" y="995" width="700" height="72" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20">Build the runway; let sleep land itself</text>
                </svg>`,
                caption: "Six levers, two weeks, keep what your data supports"
            }
        },
        {
            type: "quote",
            content: "Sleep is the single most effective thing we can do to reset our brain and body health each day.",
            author: "Matthew Walker, professor of neuroscience, UC Berkeley — Why We Sleep",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="22">From the world's best-known sleep scientist</text>
                    <text x="550" y="290" text-anchor="middle" fill="#ffd700" font-size="120" opacity="0.35">"</text>
                    <rect x="100" y="330" width="900" height="300" rx="20" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">Sleep is the single most effective</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">thing we can do to reset our brain</text>
                    <text x="550" y="531" text-anchor="middle" fill="#fff" font-style="italic" font-size="27">and body health each day.</text>
                    <text x="850" y="700" text-anchor="end" fill="#3b82f6" font-size="21">— Matthew Walker</text>
                    <text x="850" y="735" text-anchor="end" fill="#888" font-size="17">Professor of Neuroscience, UC Berkeley</text>
                    <text x="850" y="765" text-anchor="end" fill="#888" font-size="17">Author of Why We Sleep</text>
                    <rect x="150" y="820" width="800" height="150" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Why it matters here</text>
                    <text x="550" y="918" text-anchor="middle" fill="#fff" font-size="18">Every system this book covers — brain, heart, muscle,</text>
                    <text x="550" y="951" text-anchor="middle" fill="#fff" font-size="18">immunity, metabolism — runs its repairs on the night shift</text>
                    <rect x="250" y="1000" width="600" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1042" text-anchor="middle" fill="#ffd700" font-size="19">A moment of reflection</text>
                </svg>`,
                caption: "The nightly reset button, in one sentence"
            }
        },
        {
            type: "quiz",
            question: "Your friend has a nightly whiskey 'to help him sleep,' snores loudly, and eats dinner at 10 p.m. Based on this lesson, which critique is most accurate?",
            options: [
                { text: "The whiskey genuinely helps him fall asleep, so it's a net positive for sleep quality", correct: false },
                { text: "His only real risk is the late dinner — alcohol and snoring don't affect sleep architecture", correct: false },
                { text: "Alcohol fragments the second half of the night, loud snoring warrants an apnea test, and the 10 p.m. meal produces a larger glucose spike than the same meal earlier", correct: true },
                { text: "Everything is fine as long as he gets a full 8 hours of time in bed", correct: false }
            ],
            explanation: "All three habits undermine the repair shift. Alcohol is sedating at first but suppresses REM and fragments the night's second half — sedation isn't sleep. Loud snoring is a leading red flag for obstructive sleep apnea, which shreds deep sleep and accelerates cardiovascular and metabolic aging; up to 80% of serious cases go undiagnosed. And circadian studies show identical meals eaten late at night produce bigger glucose spikes because insulin sensitivity falls in the evening. Eight hours in bed can't fix fragmented, apneic, glucose-spiked sleep.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE CASE STUDY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="20">Nightly whiskey + loud snoring</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="20">+ dinner at 10 p.m. — diagnose it</text>
                    <rect x="100" y="360" width="280" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="240" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">THE NIGHTCAP</text>
                    <text x="240" y="465" text-anchor="middle" fill="#888" font-size="16">Sedation = sleep?</text>
                    <rect x="410" y="360" width="280" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE SNORE</text>
                    <text x="550" y="465" text-anchor="middle" fill="#888" font-size="16">Harmless noise?</text>
                    <rect x="720" y="360" width="280" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="860" y="425" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">THE 10 P.M. MEAL</text>
                    <text x="860" y="465" text-anchor="middle" fill="#888" font-size="16">Timing irrelevant?</text>
                    <rect x="200" y="590" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="20">Hint: how many of the three are real problems?</text>
                </svg>`,
                caption: "Apply the whole lesson to one very common evening"
            }
        },
        {
            type: "concept",
            title: "Sleep Is the Multiplier",
            content: "Zoom out to see where sleep sits in your longevity system: it's not one pillar among five — it's the **multiplier on the other four**.\n\n• **Training**: growth hormone pulses during deep sleep do the actual muscle repair; sleep-deprived athletes lose power, coordination, and injury resistance. The gains you earned in Lesson 6 are *collected* at night.\n• **Nutrition**: short sleep raises ghrelin (hunger) and lowers leptin (satiety) — sleep-deprived people eat roughly **300+ extra calories a day**, mostly refined carbs. Willpower at the pantry is partly a sleep stat.\n• **Connection**: sleep loss measurably increases social withdrawal and makes faces look more threatening in brain imaging — tired people isolate, and (from Lesson 10) isolation ages you.\n• **Measurement**: resting heart rate and HRV — your dashboard numbers — respond to sleep within days, making it the fastest feedback loop you own.\n\nThe rhythm piece ties it together: **your body is an orchestra of clocks** — liver, muscle, gut, brain — and consistent sleep-wake timing, morning light, and daytime eating keep them synchronized. Circadian disruption, at its extreme in shift work, is linked to obesity, diabetes, and cardiovascular disease.\n\nOne lesson remains. You have all five instruments — training, food, sleep, connection, measurement. The finale builds them into a single plan for your next fifty years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SLEEP: THE MULTIPLIER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">It amplifies — or undermines — every other pillar</text>
                    <circle cx="550" cy="330" r="110" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">SLEEP</text>
                    <text x="550" y="358" text-anchor="middle" fill="#888" font-size="16">the night shift</text>
                    <line x1="460" y1="260" x2="260" y2="180" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="640" y1="260" x2="840" y2="180" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="450" y1="400" x2="260" y2="520" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="650" y1="400" x2="840" y2="520" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="80" y="130" width="280" height="90" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="168" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">TRAINING</text>
                    <text x="220" y="200" text-anchor="middle" fill="#fff" font-size="14">gains collected at night</text>
                    <rect x="740" y="130" width="280" height="90" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="880" y="168" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">NUTRITION</text>
                    <text x="880" y="200" text-anchor="middle" fill="#fff" font-size="14">short sleep = +300 kcal/day</text>
                    <rect x="80" y="480" width="280" height="90" rx="18" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                    <text x="220" y="518" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">CONNECTION</text>
                    <text x="220" y="550" text-anchor="middle" fill="#fff" font-size="14">tired people isolate</text>
                    <rect x="740" y="480" width="280" height="90" rx="18" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="880" y="518" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">MEASUREMENT</text>
                    <text x="880" y="550" text-anchor="middle" fill="#fff" font-size="14">fastest feedback loop</text>
                    <rect x="100" y="630" width="900" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="682" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">An orchestra of clocks</text>
                    <text x="550" y="726" text-anchor="middle" fill="#fff" font-size="19">Liver, muscle, gut, and brain each keep time — consistent</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="19">sleep, morning light, and daytime eating conduct them</text>
                    <rect x="100" y="860" width="900" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">You now hold all five instruments</text>
                    <text x="550" y="943" text-anchor="middle" fill="#fff" font-size="18">Train, eat, sleep, connect, measure</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Finale next: your 100-year plan</text>
                </svg>`,
                caption: "One pillar that multiplies the other four"
            }
        }
    ]
},
{
    id: 12,
    title: "Your 100-Year Plan",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Meet Yourself at 100",
            content: "Close your eyes for a second and picture yourself at 100.\n\nNot the cultural cartoon — frail, parked in a chair. Picture the version this book has been building: standing up from a chair without using your hands. Carrying groceries up the stairs. Remembering the punchline. Surrounded by people who know you. Still curious.\n\nThat person isn't a fantasy, and they're not built by genetics alone — twin studies suggest genes explain only about **20-25% of lifespan variation**. The rest is the compounding output of systems you run daily.\n\nHere's the number that should change how you feel about today: US life expectancy is ~76-78 years, but **healthy** life expectancy is only ~65. The mission of this entire book has been to close that gap — **compression of morbidity** (Fries, 1980): live long, stay strong, and compress the frail years into as few as possible.\n\nYou've now learned every proven tool. This final lesson assembles them into one machine: the big five, a decade-by-decade roadmap, a yearly dashboard, and the identity shift that makes it all stick. Your 100-year plan starts now.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MEET YOURSELF AT 100</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two futures — the same starting point: today</text>
                    <rect x="60" y="160" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE DEFAULT PATH</text>
                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="18">Lifespan ~76-78 years</text>
                    <text x="290" y="304" text-anchor="middle" fill="#fff" font-size="18">Healthy years end ~65</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="18">A final decade of frailty,</text>
                    <text x="290" y="376" text-anchor="middle" fill="#fff" font-size="18">dependence, and decline</text>
                    <rect x="120" y="420" width="340" height="34" rx="17" fill="rgba(255,255,255,0.06)"/>
                    <rect x="120" y="420" width="290" height="34" rx="17" fill="#10b981"/>
                    <rect x="410" y="420" width="50" height="34" fill="#ef4444"/>
                    <text x="290" y="484" text-anchor="middle" fill="#888" font-size="15">green = healthy, red = morbidity</text>
                    <rect x="580" y="160" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE TRAINED PATH</text>
                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="18">Longer lifespan — and</text>
                    <text x="810" y="304" text-anchor="middle" fill="#fff" font-size="18">healthspan nearly matching it</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="18">Strong, sharp, connected</text>
                    <text x="810" y="376" text-anchor="middle" fill="#fff" font-size="18">deep into the 90s</text>
                    <rect x="640" y="420" width="340" height="34" rx="17" fill="rgba(255,255,255,0.06)"/>
                    <rect x="640" y="420" width="325" height="34" rx="17" fill="#10b981"/>
                    <rect x="965" y="420" width="15" height="34" fill="#ef4444"/>
                    <text x="810" y="484" text-anchor="middle" fill="#888" font-size="15">compression of morbidity (Fries 1980)</text>
                    <rect x="100" y="560" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="612" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="23">Genes explain only ~20-25% of lifespan</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="19">The rest is the compounding output of daily systems —</text>
                    <text x="550" y="688" text-anchor="middle" fill="#fff" font-size="19">which means most of the outcome is still yours to write</text>
                    <rect x="100" y="770" width="900" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">This finale assembles everything</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="19">The big five system, a decade-by-decade roadmap,</text>
                    <text x="550" y="904" text-anchor="middle" fill="#fff" font-size="19">a yearly dashboard, and the identity that sustains it</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Your 100-year plan starts on this card</text>
                </svg>`,
                caption: "Same lifespan question, two very different last decades"
            }
        },
        {
            type: "concept",
            title: "The Proven Big Five: One Compounding System",
            content: "Strip away the hype, and everything with **human outcome data** fits in one hand:\n\n**1. TRAIN** — Cardiorespiratory fitness is among the strongest mortality predictors ever measured (Mandsager 2018: low fitness riskier than smoking, with no upper benefit limit). Strength training 2x/week alone associates with 10-17% lower all-cause mortality.\n\n**2. EAT REAL FOOD + ADEQUATE PROTEIN** — The 2025-2030 Dietary Guidelines' core message: mostly unprocessed food, and a protein serving at each meal (1.2-1.6 g/kg/day for adults). PREDIMED showed a Mediterranean pattern cuts cardiovascular events ~30%.\n\n**3. SLEEP** — ~7-8 hours, consistent, with the circadian rhythm — the multiplier on all other pillars.\n\n**4. CONNECT** — Relationship quality predicts late-life health better than cholesterol; isolation carries smoking-scale risk.\n\n**5. MEASURE** — Cheap functional biomarkers (VO2max, grip, waist-to-height, ApoB, resting HR) catch drift years before disease.\n\nHere's the crucial insight: these aren't five separate chores — they're **one system with feedback loops**. Training improves sleep. Sleep restores the willpower that protects your diet. Protein makes training productive. Friends get you moving. Measurement tells you it's working, which keeps you going.\n\nMiss one pillar and it drags the others. Run all five, even imperfectly, and they **compound** — which is why the boring basics beat every biohack with a price tag.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PROVEN BIG FIVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One system — every pillar feeds the others</text>
                    <circle cx="550" cy="480" r="105" fill="rgba(255,215,0,0.12)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="465" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">LONGEVITY</text>
                    <text x="550" y="500" text-anchor="middle" fill="#888" font-size="16">compounds</text>
                    <text x="550" y="528" text-anchor="middle" fill="#888" font-size="16">daily</text>
                    <circle cx="550" cy="215" r="85" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="207" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TRAIN</text>
                    <text x="550" y="238" text-anchor="middle" fill="#fff" font-size="13">fitness = top predictor</text>
                    <circle cx="855" cy="380" r="85" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="855" y="365" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">EAT REAL</text>
                    <text x="855" y="395" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">+ PROTEIN</text>
                    <text x="855" y="426" text-anchor="middle" fill="#fff" font-size="13">1.2-1.6 g/kg/day</text>
                    <circle cx="760" cy="740 " r="85" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="3"/>
                    <text x="760" y="732" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">SLEEP</text>
                    <text x="760" y="763" text-anchor="middle" fill="#fff" font-size="13">~7-8h, consistent</text>
                    <circle cx="340" cy="740" r="85" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="3"/>
                    <text x="340" y="732" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">CONNECT</text>
                    <text x="340" y="763" text-anchor="middle" fill="#fff" font-size="13">beats cholesterol</text>
                    <circle cx="245" cy="380" r="85" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="245" y="372" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">MEASURE</text>
                    <text x="245" y="403" text-anchor="middle" fill="#fff" font-size="13">catch drift early</text>
                    <line x1="550" y1="300" x2="550" y2="375" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="780" y1="420" x2="648" y2="462" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="710" y1="670" x2="618" y2="558" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="390" y1="670" x2="482" y2="558" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <line x1="320" y1="420" x2="452" y2="462" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="100" y="880" width="900" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="925" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">The feedback loops are the point</text>
                    <text x="550" y="963" text-anchor="middle" fill="#fff" font-size="18">Training aids sleep; sleep guards diet; friends get you moving</text>
                    <rect x="200" y="1010" width="700" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1052" text-anchor="middle" fill="#ffd700" font-size="19">Boring basics beat priced biohacks</text>
                </svg>`,
                caption: "Five pillars, one flywheel"
            }
        },
        {
            type: "visual",
            title: "The Evidence Hierarchy: Proven, Promising, Hype",
            content: "Before you spend another dollar or hour, file every longevity claim into one of three drawers:\n\n**PROVEN (human outcome data — do these):** exercise (cardio + strength + power), real food with adequate protein, 7-8 hours of consistent sleep, strong relationships and purpose, not smoking, and tracking cheap functional biomarkers.\n\n**PROMISING (real science, incomplete human evidence — watch, don't bet):** calorie restriction (CALERIE 2 slowed the DunedinPACE aging pace ~2-3%), fasting-mimicking diets, rapamycin (robust in mice via the NIA's Interventions Testing Program; human dosing trials ongoing), GLP-1 drugs (SELECT 2023: semaglutide cut major cardiac events ~20% in non-diabetics), senolytics in early pilots.\n\n**HYPE (marketing ahead of data — keep your wallet):** consumer NAD+ boosters (mouse promise, underwhelming human trials so far), unvalidated 'biological age' tests, mega-dose supplement stacks, and anything promising to 'reverse aging' for $99 a month.\n\nThe honest scientist's rule from Lesson 9 still governs: **nothing in the promising or hype drawers outperforms the proven drawer** — and the proven drawer is mostly free.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EVIDENCE HIERARCHY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">File every claim into one of three drawers</text>
                    <rect x="100" y="150" width="900" height="270" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="205" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">PROVEN — human outcome data</text>
                    <text x="550" y="252" text-anchor="middle" fill="#fff" font-size="19">Exercise: cardio + strength + power (Mandsager 2018)</text>
                    <text x="550" y="288" text-anchor="middle" fill="#fff" font-size="19">Real food + protein 1.2-1.6 g/kg (2025-30 Guidelines)</text>
                    <text x="550" y="324" text-anchor="middle" fill="#fff" font-size="19">Sleep ~7-8h - Connection + purpose - No smoking</text>
                    <text x="550" y="360" text-anchor="middle" fill="#fff" font-size="19">Track: VO2max, grip, waist-to-height, ApoB, resting HR</text>
                    <text x="550" y="400" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">ACTION: do these — mostly free</text>
                    <rect x="100" y="450" width="900" height="250" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="550" y="505" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">PROMISING — watch, don't bet</text>
                    <text x="550" y="552" text-anchor="middle" fill="#fff" font-size="19">CALERIE 2 calorie restriction (~2-3% slower aging pace)</text>
                    <text x="550" y="588" text-anchor="middle" fill="#fff" font-size="19">Rapamycin (mice: robust; humans: trials ongoing)</text>
                    <text x="550" y="624" text-anchor="middle" fill="#fff" font-size="19">GLP-1s (SELECT 2023: -20% major cardiac events)</text>
                    <text x="550" y="664" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">ACTION: follow the trials with interest</text>
                    <rect x="100" y="730" width="900" height="250" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="785" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">HYPE — marketing ahead of data</text>
                    <text x="550" y="832" text-anchor="middle" fill="#fff" font-size="19">Consumer NAD+ boosters (human trials underwhelming)</text>
                    <text x="550" y="868" text-anchor="middle" fill="#fff" font-size="19">Unvalidated bio-age tests - mega supplement stacks</text>
                    <text x="550" y="904" text-anchor="middle" fill="#fff" font-size="19">'Reverse aging' subscriptions at $99/month</text>
                    <text x="550" y="944" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">ACTION: keep your wallet closed</text>
                    <rect x="150" y="1005" width="800" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1050" text-anchor="middle" fill="#ffd700" font-size="20">Nothing below the top drawer beats the top drawer</text>
                </svg>`,
                caption: "Three drawers: act on the top one, watch the middle, skip the bottom"
            }
        },
        {
            type: "concept",
            title: "The Roadmap, Part 1: Your 30s, 40s, and 50s",
            content: "Longevity is a relay race across decades — each one hands off to the next. The theme of the first half: **build reserves while building them is cheap**.\n\n**30s-40s: Build the reservoir.**\n• **VO2max and muscle are retirement accounts** — you'll lose ~10% of aerobic capacity per sedentary decade and 3-8% of muscle per decade after 30. The higher your peak now, the longer the runway later\n• Lock in the habits: 150+ min/week cardio (some of it hard), strength 2-3x/week, sleep consistency, real food as your default\n• Establish baselines: know your ApoB, blood pressure, waist-to-height, and roughly your VO2max — drift is easiest to reverse early\n• Build the marriage, friendships, and rituals you'll harvest at 80 — the Harvard Study's 50-year-olds were already writing their 80-year-old health\n\n**50s: The pivot decade.**\n• **Protein goes up** — anabolic resistance begins; aim firmly at 1.2-1.6 g/kg/day with 25-30g+ per meal\n• **Strength training becomes non-negotiable** — sarcopenia accelerates now; for women, menopause adds rapid bone-density loss, making resistance training and adequate protein urgent\n• Run your **first full dashboard year**: ApoB, blood pressure, glucose markers, VO2max test, grip, DEXA if available — plus the standard cancer screenings your clinician recommends\n• Audit the calendar: the 50s are when careers quietly eat training, sleep, and friendships. Defend all three.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROADMAP: FIRST HALF</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Build reserves while building them is cheap</text>
                    <rect x="100" y="160" width="900" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">30s-40s: BUILD THE RESERVOIR</text>
                    <text x="550" y="266" text-anchor="middle" fill="#fff" font-size="19">VO2max + muscle = retirement accounts you fill now</text>
                    <text x="550" y="302" text-anchor="middle" fill="#fff" font-size="19">150+ min/wk cardio (some hard) - strength 2-3x/wk</text>
                    <text x="550" y="338" text-anchor="middle" fill="#fff" font-size="19">Baselines: ApoB, BP, waist-to-height, VO2max</text>
                    <text x="550" y="374" text-anchor="middle" fill="#fff" font-size="19">Build the relationships you'll harvest at 80</text>
                    <rect x="180" y="420" width="740" height="90" rx="16" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="458" text-anchor="middle" fill="#888" font-size="17">Why now: -10% VO2max per sedentary decade;</text>
                    <text x="550" y="490" text-anchor="middle" fill="#888" font-size="17">3-8% muscle lost per decade after 30</text>
                    <line x1="550" y1="550" x2="550" y2="600" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,610 540,592 560,592" fill="#14b8a6"/>
                    <rect x="100" y="620" width="900" height="380" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="550" y="675" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">50s: THE PIVOT DECADE</text>
                    <text x="550" y="726" text-anchor="middle" fill="#fff" font-size="19">Protein UP: 1.2-1.6 g/kg/day, 25-30g+ per meal</text>
                    <text x="550" y="762" text-anchor="middle" fill="#fff" font-size="19">Strength training becomes NON-NEGOTIABLE</text>
                    <text x="550" y="798" text-anchor="middle" fill="#fff" font-size="19">First full dashboard year + standard screenings</text>
                    <text x="550" y="834" text-anchor="middle" fill="#fff" font-size="19">Defend training, sleep, friendships from career creep</text>
                    <rect x="180" y="880" width="740" height="90" rx="16" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="918" text-anchor="middle" fill="#888" font-size="17">Why now: anabolic resistance begins; menopause</text>
                    <text x="550" y="950" text-anchor="middle" fill="#888" font-size="17">accelerates bone loss — lifting counters both</text>
                    <rect x="250" y="1020" width="600" height="60" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="19">Every decade hands off to the next</text>
                </svg>`,
                caption: "Decades 30-59: fill the reservoirs, then pivot to defense"
            }
        },
        {
            type: "quiz",
            question: "Why do protein needs and strength training become MORE critical in your 50s and beyond, according to this book?",
            options: [
                { text: "Metabolism collapses at 50, so extra protein is needed to reignite it", correct: false },
                { text: "Anabolic resistance means aging muscle responds less to protein and loading — so you need more of both to hold the line against sarcopenia", correct: true },
                { text: "They aren't more critical — the 0.8 g/kg RDA and light walking are sufficient at every age", correct: false },
                { text: "Protein mainly matters after 50 because it directly rebuilds bone mineral", correct: false }
            ],
            explanation: "Pontzer's 2021 data showed metabolism stays stable from ~20-60, so option A's 'collapse' is a myth. The real driver is anabolic resistance: aging muscle mounts a weaker building response to the same protein dose and training stimulus, while sarcopenia accelerates. That's why the Levine 2014 'protein paradox' flips after 65 and why the new guidelines raised adult protein to 1.2-1.6 g/kg — well above the 0.8 RDA that stood for ~70 years. Lifting provides the signal; protein provides the material.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE 50s PIVOT</text>
                    <text x="550" y="228" text-anchor="middle" fill="#fff" font-size="20">Why do protein and lifting move from</text>
                    <text x="550" y="263" text-anchor="middle" fill="#fff" font-size="20">'good idea' to 'non-negotiable'?</text>
                    <rect x="100" y="370" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="320" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">AGING MUSCLE</text>
                    <text x="320" y="468" text-anchor="middle" fill="#fff" font-size="17">Weaker response to the</text>
                    <text x="320" y="498" text-anchor="middle" fill="#fff" font-size="17">same dose of protein + load</text>
                    <rect x="560" y="370" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="780" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE COUNTER</text>
                    <text x="780" y="468" text-anchor="middle" fill="#fff" font-size="17">Raise the dose: more protein,</text>
                    <text x="780" y="498" text-anchor="middle" fill="#fff" font-size="17">consistent strength signal</text>
                    <rect x="200" y="620" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="20">Hint: recall the 'protein paradox' that flips at 65</text>
                </svg>`,
                caption: "Test the logic behind the 50s pivot"
            }
        },
        {
            type: "concept",
            title: "The Roadmap, Part 2: Your 60s, 70s, and Beyond",
            content: "The second half's theme: **power, protein, and the metrics of independence**.\n\n**60s: Fight for power.**\n• **Power — force times speed — fades roughly twice as fast as strength** after 60, and power is what catches a stumble before it becomes a fall\n• Train it deliberately (as Lesson 6 taught): lighter loads moved fast, sit-to-stands, stair intervals, medicine-ball throws\n• **Protein at every meal** — 25-30g+ per sitting, because older muscle needs a bigger per-meal dose to trigger building\n• Add **balance work** — single-leg stands while the coffee brews; falls are the doorway to late-life decline, and balance is trainable\n\n**70s+: Guard independence like treasure.**\nThe metrics that matter now aren't vanity numbers — they're **independence metrics**:\n• **Chair stands**: how many times can you rise from a chair, no hands, in 30 seconds? (The 30-second chair stand test — a validated fall-risk screen)\n• **Gait speed**: walking pace predicts survival so strongly that Studenski's 2011 JAMA analysis of 34,485 adults could estimate life expectancy from it; comfortably above ~1.0 m/s is the zone you defend\n• **Grip strength**: the PURE study (Lancet 2015) found each 5-kg drop in grip predicted a 16% rise in all-cause mortality\n\nNone of these have an expiration date. Nonagenarians in supervised trials have **doubled leg strength** in months. The machine responds to training as long as you keep sending the signal.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROADMAP: SECOND HALF</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Power, protein, and the metrics of independence</text>
                    <rect x="100" y="160" width="900" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="215" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">60s: FIGHT FOR POWER</text>
                    <text x="550" y="266" text-anchor="middle" fill="#fff" font-size="19">Power fades ~2x faster than strength after 60</text>
                    <text x="550" y="302" text-anchor="middle" fill="#fff" font-size="19">Train fast: light loads moved quickly, sit-to-stands</text>
                    <text x="550" y="338" text-anchor="middle" fill="#fff" font-size="19">Protein EVERY meal: 25-30g+ per sitting</text>
                    <text x="550" y="374" text-anchor="middle" fill="#fff" font-size="19">Daily balance work — falls are the doorway to decline</text>
                    <rect x="180" y="405" width="740" height="65" rx="16" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="445" text-anchor="middle" fill="#888" font-size="17">Power is what catches a stumble before it's a fall</text>
                    <line x1="550" y1="500" x2="550" y2="545" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,555 540,537 560,537" fill="#14b8a6"/>
                    <rect x="100" y="565" width="900" height="420" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="3"/>
                    <text x="550" y="620" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">70s+: THE INDEPENDENCE METRICS</text>
                    <rect x="140" y="655" width="820" height="90" rx="16" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="693" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">CHAIR STANDS — 30 seconds, no hands</text>
                    <text x="550" y="726" text-anchor="middle" fill="#fff" font-size="17">Validated screen for leg power and fall risk</text>
                    <rect x="140" y="760" width="820" height="90" rx="16" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="798" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">GAIT SPEED — defend ~1.0 m/s and above</text>
                    <text x="550" y="831" text-anchor="middle" fill="#fff" font-size="17">Studenski 2011: walking pace predicted survival</text>
                    <rect x="140" y="865" width="820" height="90" rx="16" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="903" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">GRIP STRENGTH — each 5-kg drop = +16% mortality</text>
                    <text x="550" y="936" text-anchor="middle" fill="#fff" font-size="17">PURE study, Lancet 2015 — track it yearly</text>
                    <rect x="150" y="1010" width="800" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1052" text-anchor="middle" fill="#ffd700" font-size="19">Nonagenarians have doubled leg strength — it's never too late</text>
                </svg>`,
                caption: "Decades 60+: train power, eat protein, defend independence"
            }
        },
        {
            type: "visual",
            title: "Your Yearly Dashboard",
            content: "Once a year — birthday week works beautifully — run your personal audit. Everything here is cheap or free, and together these numbers predict your trajectory better than most expensive 'biological age' tests:\n\n• **VO2max estimate** (12-minute walk/run test, or watch estimate) — the strongest single predictor\n• **Grip strength** (a $30 dynamometer) — your systemic strength proxy\n• **Waist-to-height ratio** — keep waist under half your height\n• **ApoB** (or at minimum non-HDL cholesterol) plus **blood pressure** — the cardiovascular pair\n• **Resting heart rate and sleep average** from any tracker — your recovery trend\n• **Chair stands in 30 seconds** — leg power, the independence currency\n• **The 3 a.m. list** — can you still name two people you'd call in a crisis?\n\nWrite the numbers down. The value isn't any single reading — it's **your trend across years**, which turns vague worry into specific, fixable signals.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR YEARLY DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Birthday-week audit: cheap numbers, priceless trends</text>
                    <rect x="80" y="160" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VO2MAX ESTIMATE</text>
                    <text x="300" y="252" text-anchor="middle" fill="#fff" font-size="17">12-min test or watch estimate</text>
                    <text x="300" y="292" text-anchor="middle" fill="#888" font-size="15">strongest single predictor</text>
                    <rect x="580" y="160" width="440" height="170" rx="20" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="212" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">GRIP STRENGTH</text>
                    <text x="800" y="252" text-anchor="middle" fill="#fff" font-size="17">$30 dynamometer, both hands</text>
                    <text x="800" y="292" text-anchor="middle" fill="#888" font-size="15">systemic strength proxy</text>
                    <rect x="80" y="360" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="412" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WAIST-TO-HEIGHT</text>
                    <text x="300" y="452" text-anchor="middle" fill="#fff" font-size="17">Waist under half your height</text>
                    <text x="300" y="492" text-anchor="middle" fill="#888" font-size="15">a tape measure beats a scale</text>
                    <rect x="580" y="360" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="412" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">APOB + BLOOD PRESSURE</text>
                    <text x="800" y="452" text-anchor="middle" fill="#fff" font-size="17">The cardiovascular pair</text>
                    <text x="800" y="492" text-anchor="middle" fill="#888" font-size="15">one lab draw, one cuff</text>
                    <rect x="80" y="560" width="440" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="612" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">RESTING HR + SLEEP</text>
                    <text x="300" y="652" text-anchor="middle" fill="#fff" font-size="17">Any tracker's yearly average</text>
                    <text x="300" y="692" text-anchor="middle" fill="#888" font-size="15">your recovery trend line</text>
                    <rect x="580" y="560" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="612" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CHAIR STANDS + 3 A.M. LIST</text>
                    <text x="800" y="652" text-anchor="middle" fill="#fff" font-size="17">Leg power + who you'd call</text>
                    <text x="800" y="692" text-anchor="middle" fill="#888" font-size="15">independence + connection</text>
                    <rect x="100" y="780" width="900 " height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">Write them down — the trend is the treasure</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="19">Cheap functional numbers often predict aging as well</text>
                    <text x="550" y="913" text-anchor="middle" fill="#fff" font-size="19">as pricey 'biological age' tests — and they're fixable</text>
                    <rect x="200" y="980" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1025" text-anchor="middle" fill="#ffd700" font-size="20">One audit a year turns worry into signals</text>
                </svg>`,
                caption: "Seven numbers, once a year, tracked for life"
            }
        },
        {
            type: "concept",
            title: "The Compounding Math of Small Habits",
            content: "Here's why 'small' habits aren't small — the arithmetic of consistency:\n\n**15 minutes.** Wen's 2011 *Lancet* study of 416,175 Taiwanese adults found that just **15 minutes of daily moderate exercise** — half the guideline — associated with **3 extra years of life expectancy** and 14% lower all-cause mortality. The first 15 minutes are the most valuable minutes of exercise on Earth.\n\n**One habit, ten years.** A daily 15-minute walk is ~91 hours a year — under four days. Compounded across a decade, those four days a year buy you disproportionate returns because biology rewards *frequency of signal* more than heroic single doses. Your mitochondria, muscles, and blood vessels adapt to what you do **most days**, not what you did once.\n\n**The drift works both ways.** Gaining just 1-2 pounds a year — invisible month to month — is 20-40 pounds in two decades. Losing 1% of muscle a year unnoticed is a fall risk at 80. Compounding doesn't care about direction; it amplifies whatever you repeat.\n\n**The five-pillar multiplier.** Because the pillars feed each other, small wins stack: a 15-minute walk improves tonight's deep sleep, which improves tomorrow's food choices, which improves next month's ApoB. You're not adding five small effects — you're **multiplying** them.\n\nThe practical conclusion: never skip twice. One missed day is noise. Two is the start of a new trend line.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE COMPOUNDING MATH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Small daily signals, amplified across decades</text>
                    <rect x="100" y="160" width="900" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">Wen 2011 (Lancet): 416,175 adults</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="20">15 min/day of moderate exercise = ~3 extra years</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="20">of life expectancy and 14% lower mortality</text>
                    <line x1="150" y1="620" x2="950" y2="620" stroke="#888" stroke-width="2"/>
                    <text x="180" y="655" text-anchor="middle" fill="#888" font-size="16">year 1</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">year 10</text>
                    <text x="920" y="655" text-anchor="middle" fill="#888" font-size="16">year 30</text>
                    <path d="M160 600 Q 550 580 690 500 Q 850 400 940 380" fill="none" stroke="#10b981" stroke-width="5"/>
                    <text x="800" y="350" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">daily habit, compounding up</text>
                    <path d="M160 600 Q 550 615 720 660 Q 860 700 940 720" fill="none" stroke="#ef4444" stroke-width="5"/>
                    <text x="790" y="765" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">1-2 lb/year drift, compounding down</text>
                    <rect x="100" y="810" width="440" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="320" y="858" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">Frequency beats heroics</text>
                    <text x="320" y="895" text-anchor="middle" fill="#fff" font-size="16">Biology adapts to what you</text>
                    <text x="320" y="922" text-anchor="middle" fill="#fff" font-size="16">do MOST days</text>
                    <rect x="560" y="810" width="440" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="780" y="858" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">Wins multiply, not add</text>
                    <text x="780" y="895" text-anchor="middle" fill="#fff" font-size="16">Walk improves sleep improves</text>
                    <text x="780" y="922" text-anchor="middle" fill="#fff" font-size="16">food choices improves labs</text>
                    <rect x="150" y="980" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1018" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">The rule: never skip twice</text>
                    <text x="550" y="1052" text-anchor="middle" fill="#fff" font-size="18">One miss is noise; two is a new trend line</text>
                </svg>`,
                caption: "Compounding amplifies whatever you repeat — choose the curve"
            }
        },
        {
            type: "concept",
            title: "Identity Beats Willpower",
            content: "Last mechanism, and maybe the most important: **why some people are still training at 85 while others quit at 45**. It isn't discipline. It's identity.\n\nWillpower is a battery — it drains with stress, decisions, and fatigue (and as Lesson 11 showed, with lost sleep). People who rely on daily acts of heroic self-control eventually meet a week that flattens them.\n\nWhat lasts is different:\n\n• **Identity**: 'I don't exercise... I'm someone who trains.' The behavior stops being a choice you re-litigate daily and becomes a fact about you, like brushing your teeth. Each workout is a **vote for that identity** — and votes accumulate\n• **Systems**: the gym bag packed the night before, the standing Tuesday walk with a friend, protein defaults at each meal, the phone charging outside the bedroom. Good systems make the healthy choice the lazy choice\n• **Environment**: you are your kitchen counter, your commute, and (from Lesson 10) your five closest people. The Roseto lesson in reverse — build a personal village where health is just what everyone does\n\nNotice this is exactly how the Blue Zones work: **nobody in Okinawa 'stays motivated.'** Movement, beans, purpose, and moais are woven into the architecture of ordinary days. Their environment votes for them.\n\nYou can't move to a Blue Zone tomorrow. But you can build one, habit by habit, ritual by ritual — a personal culture where your 100-year-old self is simply the person you've been becoming all along.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IDENTITY BEATS WILLPOWER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why some people still train at 85</text>
                    <rect x="60" y="160" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WILLPOWER</text>
                    <text x="290" y="262" text-anchor="middle" fill="#fff" font-size="18">A battery that drains with</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="18">stress, decisions, lost sleep</text>
                    <rect x="130" y="330" width="320" height="36" rx="18" fill="rgba(255,255,255,0.06)"/>
                    <rect x="130" y="330" width="90" height="36" rx="18" fill="#ef4444"/>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="16">Re-decides every single day;</text>
                    <text x="290" y="432" text-anchor="middle" fill="#888" font-size="16">one hard week flattens it</text>
                    <rect x="580" y="160" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">IDENTITY</text>
                    <text x="810" y="262" text-anchor="middle" fill="#fff" font-size="18">'I'm someone who trains' —</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">a fact, not a daily debate</text>
                    <rect x="650" y="330" width="320" height="36" rx="18" fill="rgba(255,255,255,0.06)"/>
                    <rect x="650" y="330" width="305" height="36" rx="18" fill="#10b981"/>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="16">Every workout is a vote;</text>
                    <text x="810" y="432" text-anchor="middle" fill="#888" font-size="16">votes accumulate for decades</text>
                    <rect x="100" y="540" width="900" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">Systems make identity effortless</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="19">Gym bag packed at night - standing Tuesday walk -</text>
                    <text x="550" y="674" text-anchor="middle" fill="#fff" font-size="19">protein defaults - phone charges outside the bedroom</text>
                    <text x="550" y="712" text-anchor="middle" fill="#888" font-size="17">Make the healthy choice the lazy choice</text>
                    <rect x="100" y="800" width="900" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="855" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">The Blue Zone secret was never motivation</text>
                    <text x="550" y="900" text-anchor="middle" fill="#fff" font-size="19">Movement, beans, purpose, and moais are built into</text>
                    <text x="550" y="934" text-anchor="middle" fill="#fff" font-size="19">ordinary days — the environment votes for them</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="20">Build a personal Blue Zone, one ritual at a time</text>
                </svg>`,
                caption: "Cast votes for the person your 100-year-old self will thank"
            }
        },
        {
            type: "application",
            title: "Start Your Plan This Week",
            content: "Not someday. This week. One starter move per pillar:\n\n1. **TRAIN**: Schedule three sessions in your calendar right now — two strength (even 30 minutes of the basics: squat, push, pull, hinge, carry) and one where you get genuinely out of breath. If you're past 60, finish one session with 5 fast sit-to-stands.\n\n2. **EAT**: Audit one day of protein. Tally the grams; compare against 1.2-1.6 g/kg of your body weight. Then fix breakfast first — it's almost always the weakest meal (aim 25-30g).\n\n3. **SLEEP**: Pick your wake time and hold it all 7 days. Set tonight's phone-out-of-bedroom rule while you're at it.\n\n4. **CONNECT**: Send the text you've been meaning to send. Put one recurring social ritual on the calendar — the same weekly slot, a real human.\n\n5. **MEASURE**: Book the blood draw (ApoB on the order), measure your waist against half your height, count your 30-second chair stands, and write all of it — plus the date — where next year's audit will find it.\n\nThen, the meta-step: **tell someone your plan.** Accountability is a social technology — you'll be using Lesson 10 to power Lessons 5 through 9.\n\nThis is deliberately underwhelming. Five small moves. But you now know the math: consistency, multiplied across five feeding pillars, compounded over decades, is the entire secret. There isn't another one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">START THIS WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One starter move per pillar — deliberately small</text>
                    <rect x="100" y="150" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="203" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">1. TRAIN</text>
                    <text x="150" y="243" text-anchor="start" fill="#fff" font-size="18">Calendar 3 sessions now: 2 strength + 1 breathless</text>
                    <rect x="100" y="305" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="358" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">2. EAT</text>
                    <text x="150" y="398" text-anchor="start" fill="#fff" font-size="18">Audit one day's protein vs 1.2-1.6 g/kg; fix breakfast first</text>
                    <rect x="100" y="460" width="900" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="513" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">3. SLEEP</text>
                    <text x="150" y="553" text-anchor="start" fill="#fff" font-size="18">One wake time, all 7 days; phone out of the bedroom</text>
                    <rect x="100" y="615" width="900" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="150" y="668" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">4. CONNECT</text>
                    <text x="150" y="708" text-anchor="start" fill="#fff" font-size="18">Send the overdue text; book one weekly social ritual</text>
                    <rect x="100" y="770" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="823" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">5. MEASURE</text>
                    <text x="150" y="863" text-anchor="start" fill="#fff" font-size="18">Book labs (ApoB), tape the waist, count chair stands, log it</text>
                    <rect x="100" y="925" width="900" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="975" text-anchor="middle" fill="#fff" font-size="19">Meta-step: tell someone your plan — accountability is social tech</text>
                    <rect x="200" y="1025" width="700" height="55" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1061" text-anchor="middle" fill="#ffd700" font-size="19">Small, weekly, forever — that's the whole secret</text>
                </svg>`,
                caption: "Five starter moves — all doable before Sunday"
            }
        },
        {
            type: "quote",
            content: "Aging is not lost youth but a new stage of opportunity and strength.",
            author: "Betty Friedan, The Fountain of Age",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="22">A reframe to carry out of this book</text>
                    <text x="550" y="290" text-anchor="middle" fill="#ffd700" font-size="120" opacity="0.35">"</text>
                    <rect x="100" y="330" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#fff" font-style="italic" font-size="29">Aging is not lost youth</text>
                    <text x="550" y="485" text-anchor="middle" fill="#fff" font-style="italic" font-size="29">but a new stage of</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-style="italic" font-size="29">opportunity and strength.</text>
                    <text x="850" y="680" text-anchor="end" fill="#8b5cf6" font-size="21">— Betty Friedan</text>
                    <text x="850" y="715" text-anchor="end" fill="#888" font-size="17">The Fountain of Age (1993)</text>
                    <rect x="150" y="780" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Why it fits this book</text>
                    <text x="550" y="878" text-anchor="middle" fill="#fff" font-size="18">Friedan wrote it at 72, after years studying how culture</text>
                    <text x="550" y="911" text-anchor="middle" fill="#fff" font-size="18">wrongly equates aging with decline — the same myth the</text>
                    <text x="550" y="944" text-anchor="middle" fill="#fff" font-size="18">data in these 12 lessons has been dismantling</text>
                    <rect x="250" y="1000" width="600" height="65" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1042" text-anchor="middle" fill="#ffd700" font-size="19">A moment of reflection</text>
                </svg>`,
                caption: "Friedan's reframe: a stage to train for, not mourn"
            }
        },
        {
            type: "quiz",
            question: "A wellness influencer says: 'Skip the boring basics — this $199/month NAD+ and senolytic stack is how you really reverse aging.' Using this book's evidence hierarchy, what's the correct response?",
            options: [
                { text: "Reasonable — NAD+ boosters and senolytics have strong human outcome data behind them", correct: false },
                { text: "Backwards — those sit in the promising/hype drawers with weak human data, while the 'boring basics' (train, eat real, sleep, connect, measure) are the only tools with proven human outcomes", correct: true },
                { text: "Correct in spirit — supplements can fully substitute for exercise if properly dosed", correct: false },
                { text: "Wrong only about price — cheaper NAD+ stacks would make the claim sound", correct: false }
            ],
            explanation: "This is the book's central discipline. NAD+ precursors showed mouse promise but underwhelming human trials; senolytics are in early pilots. Neither has mortality outcome data. Meanwhile exercise, real food with adequate protein, sleep, and connection have massive human evidence — Mandsager's 122,007-patient fitness data, PREDIMED's ~30% event reduction, the 1.3-million-person sleep curve, Holt-Lunstad's 3.4 million. Nothing in a bottle currently beats them, at any price. The hierarchy — proven, promising, hype — is your lifetime filter for every future headline.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE $199 CLAIM</text>
                    <text x="550" y="228" text-anchor="middle" fill="#fff" font-size="20">'Skip the basics — buy the stack.'</text>
                    <text x="550" y="263" text-anchor="middle" fill="#fff" font-size="20">Run it through the hierarchy.</text>
                    <rect x="100" y="370" width="280" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PROVEN</text>
                    <text x="240" y="470" text-anchor="middle" fill="#888" font-size="16">human outcome data</text>
                    <rect x="410" y="370" width="280" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">PROMISING</text>
                    <text x="550" y="470" text-anchor="middle" fill="#888" font-size="16">watch, don't bet</text>
                    <rect x="720" y="370" width="280" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="860" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HYPE</text>
                    <text x="860" y="470" text-anchor="middle" fill="#888" font-size="16">wallet stays closed</text>
                    <rect x="200" y="610" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">Hint: which drawer holds mortality outcome data?</text>
                </svg>`,
                caption: "The lifetime filter, applied one last time"
            }
        },
        {
            type: "concept",
            title: "A Letter From Your Future Self",
            content: "Imagine a letter arriving from yourself, fifty years from now:\n\n*'I'm writing from a morning you made possible. I got out of bed without thinking about it. Walked to the market — the long way, past the water. My grip is still strong enough to open every jar, my legs still trusted on every stair. This afternoon three generations show up for dinner, and I remember all their stories.*\n\n*None of this came from a breakthrough. It came from the Tuesday workouts you didn't skip. The protein at breakfast. The wake time you held. The friends you kept texting. The numbers you checked every birthday and quietly corrected. I am the compound interest on ten thousand ordinary days.'*\n\nHere's what the science says about that letter: it's **available**. Not guaranteed — biology keeps its surprises — but available in a way no generation before you could claim. You know the healthspan gap, and that it can be compressed. You know fitness outranks nearly every risk factor, that muscle and protein needs rise with age, that sleep runs the repairs, that loneliness is a toxin and connection a medicine, and that seven cheap numbers can watch the whole system.\n\nMost people will never learn what you now know. Fewer still will act on it. The whole difference between those futures is what you repeat, starting this week.\n\nYour move. Your century.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FROM YOUR FUTURE SELF</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The compound interest on ten thousand ordinary days</text>
                    <rect x="130" y="150" width="840" height="420" rx="20" fill="rgba(255,215,0,0.06)" stroke="#ffd700" stroke-width="2"/>
                    <text x="190" y="215" text-anchor="start" fill="#ffd700" font-style="italic" font-size="20">Dear younger me,</text>
                    <text x="190" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="18">Got up easily. Walked the long way, past the water.</text>
                    <text x="190" y="305" text-anchor="start" fill="#fff" font-style="italic" font-size="18">Grip still opens every jar; legs still trust the stairs.</text>
                    <text x="190" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="18">Three generations at my table tonight — and I</text>
                    <text x="190" y="375" text-anchor="start" fill="#fff" font-style="italic" font-size="18">remember all their stories.</text>
                    <text x="190" y="430" text-anchor="start" fill="#fff" font-style="italic" font-size="18">It wasn't a breakthrough. It was the Tuesdays you</text>
                    <text x="190" y="465" text-anchor="start" fill="#fff" font-style="italic" font-size="18">didn't skip, the wake time you held, the friends you</text>
                    <text x="190" y="500" text-anchor="start" fill="#fff" font-style="italic" font-size="18">kept texting, the numbers you quietly corrected.</text>
                    <text x="810" y="545" text-anchor="end" fill="#ffd700" font-style="italic" font-size="19">— You, at 100</text>
                    <rect x="100" y="620" width="280" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="675" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">KNOWN</text>
                    <text x="240" y="712" text-anchor="middle" fill="#fff" font-size="15">You have the proven map:</text>
                    <text x="240" y="738" text-anchor="middle" fill="#fff" font-size="15">the big five, the dashboard</text>
                    <rect x="410" y="620" width="280" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">AVAILABLE</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="15">Not guaranteed — but open</text>
                    <text x="550" y="738" text-anchor="middle" fill="#fff" font-size="15">as never before in history</text>
                    <rect x="720" y="620" width="280" height="150" rx="20" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="2"/>
                    <text x="860" y="675" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">YOURS</text>
                    <text x="860" y="712" text-anchor="middle" fill="#fff" font-size="15">Decided by what you</text>
                    <text x="860" y="738" text-anchor="middle" fill="#fff" font-size="15">repeat, starting this week</text>
                    <rect x="100" y="810" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">The Longevity Code — complete</text>
                    <text x="550" y="908" text-anchor="middle" fill="#fff" font-size="18">Train - Eat real + protein - Sleep - Connect - Measure</text>
                    <text x="550" y="941" text-anchor="middle" fill="#888" font-size="16">Partner with your clinician; this book is education, not medical advice</text>
                    <rect x="200" y="1000" width="700" height="70" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">Your move. Your century.</text>
                </svg>`,
                caption: "The letter is unwritten — you hold the pen"
            }
        }
    ]
}
    ]
};
