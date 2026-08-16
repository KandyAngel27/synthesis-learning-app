// External book module — The Gut: Your Second Brain
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.GUT_SECOND_BRAIN_BOOK = {
    id: "gut-second-brain",
    title: "The Gut: Your Second Brain",
    author: "Synthesis Curriculum",
    description: "The science of your microbiome — fiber, fermented foods and the Stanford trial, the gut-brain axis, IBS basics, and an honest, evidence-graded guide to probiotics.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "Meet Your Second Brain",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You Are Never Alone. Literally.",
            content: "Right now, as you read this, roughly **38 trillion microbes** are living in and on your body -- most of them packed into your colon. That is about one microbe for every human cell you own.\n\nThey are not freeloaders. They digest food you cannot, train your immune system, manufacture vitamins, and -- here is the wild part -- talk to your brain all day long through a dedicated nerve highway.\n\nScientists now call the gut 'the second brain,' and they are not being poetic. Your gut has its own nervous system with hundreds of millions of neurons that can run digestion without asking your head for permission.\n\nOver the next 12 lessons, you will meet these residents, learn what they eat, discover how they shape your mood, and get an honest, hype-free guide to probiotics. By the end, you will never think about a gut feeling the same way again.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOU ARE AN ECOSYSTEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">38 trillion microbes call you home</text>
                    <circle cx="550" cy="420" r="220" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="390" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="30">38 TRILLION</text>
                    <text x="550" y="435" text-anchor="middle" fill="#fff" font-size="22">microbial cells</text>
                    <text x="550" y="475" text-anchor="middle" fill="#888" font-size="18">mostly in your colon</text>
                    <circle cx="200" cy="280" r="14" fill="#10b981"/>
                    <circle cx="260" cy="600" r="10" fill="#8b5cf6"/>
                    <circle cx="880" cy="300" r="12" fill="#f59e0b"/>
                    <circle cx="850" cy="580" r="10" fill="#14b8a6"/>
                    <circle cx="150" cy="450" r="8" fill="#ec4899"/>
                    <circle cx="950" cy="450" r="9" fill="#3b82f6"/>
                    <rect x="150" y="720" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="778" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THEY ARE NOT PASSENGERS</text>
                    <text x="550" y="818" text-anchor="middle" fill="#fff" font-size="18">They digest, defend, manufacture,</text>
                    <text x="550" y="848" text-anchor="middle" fill="#888" font-size="16">and talk to your brain all day long</text>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">This book: meet them, feed them, use them</text>
                </svg>`,
                caption: "Trillions of microbial residents, working around the clock"
            }
        },
        {
            type: "concept",
            title: "The Real Census: 38 Trillion",
            content: "For decades, textbooks claimed you carry **10 bacterial cells for every human cell**. It was a great headline. It was also wrong.\n\nIn 2016, researchers **Ron Sender, Shai Fuchs, and Ron Milo** at the Weizmann Institute redid the math from actual measurements instead of a back-of-the-envelope guess from 1972. Their estimate for a reference adult:\n\n• **~38 trillion bacteria** -- the microbial side\n• **~30 trillion human cells** -- your side\n• Ratio: roughly **1:1**, not 10:1\n\nA few things worth knowing:\n\n• The vast majority of those microbes live in your **colon** (large intestine) -- the density there is among the highest of any ecosystem on Earth\n• Together they weigh about **0.2 to 1 kilogram** -- somewhere between an apple and a bag of sugar\n• The count swings daily: one good bowel movement can briefly tip the ratio in favor of your human cells\n\nThe myth-busting matters less than the punchline that survived it: **cell for cell, you are about half microbe**. That is not contamination. That is you.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REAL HEADCOUNT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sender, Fuchs and Milo, 2016</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">OLD MYTH (1972)</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="34" font-weight="bold">10 : 1</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="18">microbes to human cells</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">a rough guess that stuck</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">around for 40+ years</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2016 RECOUNT</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="34" font-weight="bold">~1 : 1</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="18">38T microbes, 30T human</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">measured, not guessed</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Weizmann Institute</text>
                    <rect x="150" y="560" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="618" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHERE AND HOW MUCH</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="18">Most live in the colon</text>
                    <text x="550" y="698" text-anchor="middle" fill="#888" font-size="16">Total biomass: about 0.2 to 1 kg</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">Cell for cell, you are about half microbe</text>
                </svg>`,
                caption: "The 2016 recount that retired the 10:1 myth"
            }
        },
        {
            type: "visual",
            title: "Where Your Microbes Actually Live",
            content: "Your microbes are not spread evenly. Your stomach is too acidic for most, your small intestine moves too fast, but your **colon** is a slow, warm, oxygen-free fermentation tank -- microbial paradise.\n\nThe population density climbs by a factor of roughly a million as you travel from stomach to colon. That is why almost everything in this book -- fiber, short-chain fatty acids, the gut barrier -- happens in the last five feet of your digestive tract.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MICROBIAL MAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Density climbs a million-fold on the way down</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="222" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">STOMACH</text>
                    <text x="220" y="260" text-anchor="start" fill="#fff" font-size="18">Very few microbes -- too acidic</text>
                    <text x="880" y="240" text-anchor="end" fill="#888" font-size="16">sparse</text>
                    <path d="M550 300 L550 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,350 542,336 558,336" fill="#14b8a6"/>
                    <rect x="150" y="360" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="412" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">SMALL INTESTINE</text>
                    <text x="220" y="450" text-anchor="start" fill="#fff" font-size="18">More microbes, but food moves fast</text>
                    <text x="880" y="430" text-anchor="end" fill="#888" font-size="16">moderate</text>
                    <path d="M550 490 L550 530" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,540 542,526 558,526" fill="#14b8a6"/>
                    <rect x="150" y="550" width="800" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="220" y="608" text-anchor="start" fill="#10b981" font-weight="bold" font-size="24">COLON</text>
                    <text x="220" y="650" text-anchor="start" fill="#fff" font-size="18">Slow, warm, oxygen-free ferment tank</text>
                    <text x="220" y="688" text-anchor="start" fill="#888" font-size="16">Home to the vast majority of your 38 trillion</text>
                    <text x="880" y="640" text-anchor="end" fill="#10b981" font-weight="bold" font-size="18">DENSE</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">The action is in the last five feet</text>
                </svg>`,
                caption: "From acidic desert to fermentation jungle in one tract"
            }
        },
        {
            type: "example",
            title: "How a Guess Became Gospel for 40 Years",
            content: "The 10:1 myth has a traceable origin story -- and it is a lesson in how science can fossilize.\n\nIn **1972**, microbiologist **Thomas Luckey** made a rough estimate: about 100 trillion microbes in a gram-by-gram guess of gut contents. Someone else divided that by an old estimate of 10 trillion human cells. The tidy ratio -- **10:1!** -- was irresistible. It appeared in textbooks, TED talks, and grant applications for four decades, usually with no citation at all.\n\nThen in 2016, Sender, Fuchs, and Milo actually checked. They pulled measured data on colon volume, bacterial density, and human cell counts (most of your cells, it turns out, are tiny red blood cells). The famous ratio collapsed to roughly **1.3:1** -- close to even.\n\n**Why this matters for you**: gut science is young and moves fast. Some things you have heard -- even from credible sources -- are outdated. This book will flag what is solid, what is early, and what is hype. Healthy skepticism is a gut-health skill.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ANATOMY OF A MYTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How 10:1 survived four decades unchecked</text>
                    <rect x="150" y="180" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="232" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">1972</text>
                    <text x="320" y="232" text-anchor="start" fill="#fff" font-size="18">Luckey makes a rough estimate</text>
                    <text x="320" y="270" text-anchor="start" fill="#888" font-size="16">a ballpark guess, never measured</text>
                    <path d="M550 310 L550 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,360 542,346 558,346" fill="#14b8a6"/>
                    <rect x="150" y="370" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="422" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">1972-2016</text>
                    <text x="400" y="422" text-anchor="start" fill="#fff" font-size="18">10:1 repeated everywhere</text>
                    <text x="400" y="460" text-anchor="start" fill="#888" font-size="16">textbooks, talks, headlines -- no citation</text>
                    <path d="M550 500 L550 540" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,550 542,536 558,536" fill="#14b8a6"/>
                    <rect x="150" y="560" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="612" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">2016</text>
                    <text x="320" y="612" text-anchor="start" fill="#fff" font-size="18">Sender, Fuchs and Milo recount</text>
                    <text x="320" y="650" text-anchor="start" fill="#888" font-size="16">measured data lands near 1.3 to 1</text>
                    <rect x="150" y="760" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="812" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE LESSON</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="18">Gut science is young -- keep your skepticism</text>
                </svg>`,
                caption: "A 1972 guess, 40 years of repetition, one 2016 recount"
            }
        },
        {
            type: "quiz",
            question: "According to the 2016 analysis by Sender, Fuchs, and Milo, what is the approximate ratio of microbial cells to human cells in your body?",
            options: [
                { text: "Roughly 10 to 1 -- microbes vastly outnumber human cells", correct: false },
                { text: "Roughly 1 to 1 -- about 38 trillion microbes to 30 trillion human cells", correct: true },
                { text: "Roughly 1 to 10 -- human cells vastly outnumber microbes", correct: false },
                { text: "Roughly 100 to 1 -- but only counting the colon", correct: false }
            ],
            explanation: "The 2016 recount put the figure at about 38 trillion microbial cells to 30 trillion human cells -- roughly 1:1, or more precisely about 1.3:1. The famous 10:1 ratio was a 1972 back-of-the-envelope guess that got repeated for four decades without being checked. The 100x figure belongs to genes, not cells: microbial genes outnumber your human genes by roughly 100-150 times.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE MICROBIAL CENSUS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">One famous ratio was retired in 2016</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did the recount actually find?</text>
                    <circle cx="380" cy="450" r="110" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="380" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">Microbes</text>
                    <text x="380" y="480" text-anchor="middle" fill="#fff" font-size="18">?</text>
                    <circle cx="720" cy="450" r="110" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="3"/>
                    <text x="720" y="440" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">Human cells</text>
                    <text x="720" y="480" text-anchor="middle" fill="#fff" font-size="18">?</text>
                    <text x="550" y="460" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">vs</text>
                </svg>`,
                caption: "Test your understanding of the cell count"
            }
        },
        {
            type: "concept",
            title: "Your Second Genome",
            content: "Here is where the numbers get genuinely staggering. Your human genome carries roughly **20,000 to 25,000 protein-coding genes**. Your gut microbes, combined, carry **millions** -- outnumbering your own genes by roughly **100 to 150 times**.\n\nThink of it as a **second genome**, and notice the crucial difference:\n\n• Your **human genome** was fixed at conception. Barring gene therapy, you cannot change it\n• Your **microbial genome** turns over constantly. It responds to what you eat, how you sleep, what medications you take -- within days\n\nThose extra genes are not decorative. They are working code:\n\n• Genes for **digesting fibers** your own enzymes cannot touch\n• Genes for **synthesizing vitamins** like K2, B12, and folate\n• Genes for **metabolizing drugs** -- part of why the same medication can hit two people differently\n• Genes for **training immune cells** that patrol your gut lining\n\nThis is the most hopeful idea in the whole field: you inherited one genome, but you get to **influence the other one every single day**. Every meal is, in a very real sense, a software update.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO GENOMES, ONE YOU</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Microbial genes outnumber yours 100-150x</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">HUMAN GENOME</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">~20-25k genes</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="18">Fixed at conception</text>
                    <text x="290" y="373" text-anchor="middle" fill="#888" font-size="16">You cannot edit it</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MICROBIAL GENOME</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">Millions of genes</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">Changes within days</text>
                    <text x="810" y="373" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">You edit it with every meal</text>
                    <rect x="150" y="580" width="800" height="230" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="638" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">WHAT THOSE EXTRA GENES DO</text>
                    <text x="550" y="683" text-anchor="middle" fill="#fff" font-size="18">Digest fibers your enzymes cannot</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="18">Make vitamins K2, B12, folate</text>
                    <text x="550" y="753" text-anchor="middle" fill="#fff" font-size="18">Metabolize drugs, train immune cells</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Every meal is a software update</text>
                </svg>`,
                caption: "The genome you inherit vs the genome you influence"
            }
        },
        {
            type: "concept",
            title: "The Brain in Your Belly",
            content: "Lining your gastrointestinal tract, from esophagus to rectum, is the **enteric nervous system (ENS)** -- roughly **500 million neurons** woven into the gut wall. That is more neurons than in a cat's entire brain, and about five times more than in your spinal cord.\n\nNeuroscientist **Michael Gershon** of Columbia University popularized the nickname in his 1998 book: **'The Second Brain.'** It earned the title honestly:\n\n• It runs **semi-independently**. The ENS coordinates digestion -- mixing, secreting, moving food along -- without waiting for instructions from your head\n• It uses the **same chemical language** as your brain: over 30 neurotransmitters, including dopamine and serotonin\n• It has its own **reflexes and sensory neurons**, constantly sampling what is happening inside your gut\n\nThe classic demonstration: even when the vagus nerve connecting gut to brain is severed, the ENS keeps peristalsis -- the rhythmic wave that moves food along -- going on its own. No other organ can do anything like that.\n\nTo be clear, your second brain does not compose poetry or hold grudges. But it senses, decides, and acts locally -- and, as you are about to see, it reports upstairs constantly.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ENTERIC NERVOUS SYSTEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Around 500 million neurons in your gut wall</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">~500,000,000 NEURONS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">More than a cat's whole brain</text>
                    <text x="550" y="303" text-anchor="middle" fill="#888" font-size="16">About 5x your spinal cord</text>
                    <rect x="80" y="390" width="440" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">SEMI-INDEPENDENT</text>
                    <text x="300" y="490" text-anchor="middle" fill="#fff" font-size="17">Runs digestion without</text>
                    <text x="300" y="522" text-anchor="middle" fill="#fff" font-size="17">orders from your head</text>
                    <rect x="580" y="390" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SAME LANGUAGE</text>
                    <text x="800" y="490" text-anchor="middle" fill="#fff" font-size="17">30+ neurotransmitters,</text>
                    <text x="800" y="522" text-anchor="middle" fill="#fff" font-size="17">including serotonin</text>
                    <rect x="150" y="660" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE PROOF</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="18">Cut the gut-brain connection and</text>
                    <text x="550" y="788" text-anchor="middle" fill="#888" font-size="16">peristalsis keeps going on its own</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">Gershon called it 'The Second Brain'</text>
                </svg>`,
                caption: "A nervous system that runs your gut on local authority"
            }
        },
        {
            type: "example",
            title: "Your Second Brain in Daily Life",
            content: "You have felt your enteric nervous system at work your whole life -- you just never gave it credit.\n\n**The pre-presentation stomach**. Minutes before a job interview or a big speech, your stomach knots and flutters. That is stress hormones and brain signals hitting the dense web of gut neurons, which respond by changing motility and blood flow. The 'butterflies' are a genuine neurological event, not a metaphor.\n\n**Digestion on autopilot**. You have never once consciously moved food through your 30-odd feet of intestine. While you sleep, the ENS runs the **migrating motor complex** -- housekeeping waves that sweep leftover debris through your gut roughly every 90 to 120 minutes between meals. That faint stomach growl when you are hungry? That is the sweep, not emptiness.\n\n**The lab-bench demo**. In physiology labs, a section of intestine placed in a warm nutrient bath will keep performing peristalsis -- squeezing rhythmically, moving contents along -- with **no brain and no spinal cord attached**. The circuitry is fully local.\n\nYour head brain gets the credit, but your gut brain does the shift work.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ENS ON DUTY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three moments you have already lived</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">BUTTERFLIES BEFORE A SPEECH</text>
                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-size="18">Stress signals hit gut neurons --</text>
                    <text x="550" y="302" text-anchor="middle" fill="#888" font-size="16">motility and blood flow shift instantly</text>
                    <rect x="150" y="380" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">DIGESTION WHILE YOU SLEEP</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="18">Housekeeping waves sweep the gut</text>
                    <text x="550" y="512" text-anchor="middle" fill="#888" font-size="16">every 90-120 minutes between meals</text>
                    <rect x="150" y="590" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE LAB-BENCH DEMO</text>
                    <text x="550" y="688" text-anchor="middle" fill="#fff" font-size="18">Isolated intestine keeps squeezing --</text>
                    <text x="550" y="722" text-anchor="middle" fill="#888" font-size="16">no brain or spinal cord attached</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Your gut brain does the shift work</text>
                </svg>`,
                caption: "Butterflies, night sweeps, and self-driving intestines"
            }
        },
        {
            type: "concept",
            title: "The Vagus Nerve: A Highway That Mostly Runs Uphill",
            content: "Connecting your two brains is the **vagus nerve** -- the longest cranial nerve in your body, wandering ('vagus' is Latin for wandering, same root as 'vagabond') from your brainstem down to your heart, lungs, and gut.\n\nHere is the fact that reframes everything: about **90 percent of vagus nerve fibers are afferent** -- they carry signals **UP**, from gut to brain, not down.\n\nLet that land. The gut-brain highway is mostly a **one-way street pointed at your head**. Your brain is not so much commanding your gut as **listening to it**.\n\nWhat travels up the line?\n\n• **Stretch and fullness signals** -- part of how you know when to stop eating\n• **Nutrient reports** -- sensors detect fats, sugars, and proteins in the gut\n• **Inflammation alerts** -- immune activity in the gut wall gets phoned in\n• **Microbial messages** -- some gut bacteria produce compounds that stimulate vagal endings directly\n\nThis is the physical wiring behind the phrase **gut feeling**. When your gut is inflamed, starved of fiber, or hosting an unhappy microbial community, your brain hears about it -- as shifts in mood, appetite, and energy. We will trace exactly how in the gut-brain axis lessons later in this book.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE VAGUS HIGHWAY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">90 percent of its fibers carry signals UP</text>
                    <rect x="350" y="160" width="400" height="130" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="215" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">BRAIN</text>
                    <text x="550" y="255" text-anchor="middle" fill="#888" font-size="16">mostly listening</text>
                    <path d="M480 640 L480 320" stroke="#10b981" stroke-width="8"/>
                    <polygon points="480,300 464,330 496,330" fill="#10b981"/>
                    <text x="380" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">90%</text>
                    <text x="380" y="512" text-anchor="middle" fill="#888" font-size="15">gut to brain</text>
                    <path d="M620 320 L620 640" stroke="#6366f1" stroke-width="3" stroke-dasharray="10"/>
                    <polygon points="620,660 606,632 634,632" fill="#6366f1"/>
                    <text x="730" y="480" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">10%</text>
                    <text x="730" y="512" text-anchor="middle" fill="#888" font-size="15">brain to gut</text>
                    <rect x="350" y="680" width="400" height="130" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="735" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">GUT</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="16">mostly reporting</text>
                    <rect x="120" y="870" width="860 " height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="922" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WHAT GOES UP THE LINE</text>
                    <text x="550" y="962" text-anchor="middle" fill="#fff" font-size="17">Fullness, nutrients, inflammation, microbial signals</text>
                </svg>`,
                caption: "A nerve highway where most lanes point at your head"
            }
        },
        {
            type: "example",
            title: "The Bacteria That Needed the Phone Line",
            content: "One elegant experiment shows how literally microbes use the vagus nerve to reach the brain.\n\nIn **2011**, researcher **Javier Bravo** and colleagues (published in **PNAS**) fed mice a bacterium called ***Lactobacillus rhamnosus* JB-1** for 28 days. The results were striking:\n\n• Treated mice showed **less anxiety-like and depression-like behavior** in standard maze and swim tests\n• Their brains showed **altered GABA receptor expression** -- GABA being the calming neurotransmitter targeted by anti-anxiety drugs\n• Their stress hormone (corticosterone) response was **blunted**\n\nThen came the twist. The researchers repeated the experiment in mice whose **vagus nerve had been surgically cut**. Same bacteria, same dose, same duration -- and the behavioral and brain effects **vanished**. No phone line, no message.\n\n**Honest caveats**: these were mice, not people, and human trials of this strain have been mixed -- a 2019 attempt to translate the finding to healthy men found no significant effect. So do not buy a supplement based on this study. Its real value is proof of mechanism: gut bacteria can change brain chemistry and behavior, and at least sometimes, the vagus nerve is the route.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BRAVO EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">PNAS 2011 -- mice, bacteria, one cut nerve</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VAGUS INTACT</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">28 days of L. rhamnosus</text>
                    <text x="290" y="340" text-anchor="middle" fill="#10b981" font-size="17">Less anxious behavior</text>
                    <text x="290" y="375" text-anchor="middle" fill="#10b981" font-size="17">GABA receptors shifted</text>
                    <text x="290" y="410" text-anchor="middle" fill="#10b981" font-size="17">Lower stress hormones</text>
                    <text x="290" y="480" text-anchor="middle" fill="#888" font-size="16">Message delivered</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">VAGUS CUT</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">Same bacteria, same dose</text>
                    <text x="810" y="340" text-anchor="middle" fill="#ef4444" font-size="17">No behavior change</text>
                    <text x="810" y="375" text-anchor="middle" fill="#ef4444" font-size="17">No brain changes</text>
                    <text x="810" y="410" text-anchor="middle" fill="#ef4444" font-size="17">Effects vanished</text>
                    <text x="810" y="480" text-anchor="middle" fill="#888" font-size="16">No line, no message</text>
                    <rect x="150" y="610" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HONEST CAVEAT</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">Mouse study -- human trials of this</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="16">strain have been mixed, so no hype</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Proof of mechanism, not a supplement ad</text>
                </svg>`,
                caption: "Cut the phone line and the bacterial message never arrives"
            }
        },
        {
            type: "application",
            title: "Start Listening to Your Second Brain",
            content: "You cannot see your microbes, but you can start noticing the gut-brain conversation today:\n\n1. **Keep a two-line gut journal for one week**. Each evening, jot what you ate and one word for how your gut and mood felt. Patterns often appear by day five -- and you will need this baseline for later lessons\n\n2. **Notice one 'gut feeling' in real time**. Next time your stomach knots before something stressful, name it: that is your ENS reacting. Naming it is the first step to working with it\n\n3. **Try one slow, screen-free meal**. Chewing thoroughly and eating without distraction gives vagal fullness signals time to reach your brain -- about 20 minutes\n\n4. **Do 60 seconds of slow exhale breathing** -- roughly 4 seconds in, 6 to 8 seconds out. Long exhales stimulate the vagus nerve and are one of the best-evidenced quick ways to calm the whole axis\n\nNone of this is medical advice -- if you have persistent gut symptoms, a doctor beats any book. This is about building awareness of a conversation that has been running your whole life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THIS WEEK'S PRACTICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four ways to tune into the gut-brain line</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="222" text-anchor="start" fill="#fff" font-size="18">Keep a two-line gut journal for a week</text>
                    <text x="240" y="258" text-anchor="start" fill="#888" font-size="15">food + one word for gut and mood</text>
                    <rect x="150" y="330" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="382" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="382" text-anchor="start" fill="#fff" font-size="18">Catch one gut feeling in real time</text>
                    <text x="240" y="418" text-anchor="start" fill="#888" font-size="15">name it: that is your ENS talking</text>
                    <rect x="150" y="490" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="542" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="542" text-anchor="start" fill="#fff" font-size="18">Eat one slow, screen-free meal</text>
                    <text x="240" y="578" text-anchor="start" fill="#888" font-size="15">fullness signals need about 20 minutes</text>
                    <rect x="150" y="650" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="702" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="702" text-anchor="start" fill="#fff" font-size="18">60 seconds of slow-exhale breathing</text>
                    <text x="240" y="738" text-anchor="start" fill="#888" font-size="15">long exhales stimulate the vagus nerve</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">Awareness first -- the tools come next</text>
                </svg>`,
                caption: "Your first week of gut-brain awareness"
            }
        },
        {
            type: "concept",
            title: "Where This Book Is Taking You",
            content: "You now hold the three foundation facts: you are **half microbe by cell count**, you carry a **second, editable genome**, and your gut runs a **500-million-neuron nervous system** wired mostly upward into your brain. Here is how the rest of the journey unfolds:\n\n• **Lessons 2-3: The residents and their food**. Who actually lives in your gut, how your personal ecosystem formed, and why fiber -- the most neglected nutrient in the Western diet -- is the master key\n\n• **Middle lessons: The gut at work**. Fermented foods, the gut barrier and what 'leaky gut' really means, the immune system connection, and the gut-brain axis in full detail -- including what gut microbes have to do with mood\n\n• **Later lessons: When things go wrong**. IBS and other functional gut disorders, what the evidence actually says, and practical strategies\n\n• **Final lessons: The honest probiotics guide**. What supplements can and cannot do, how to read a label, and a synthesis of everything into one sustainable way of eating and living\n\nOne promise throughout: when the evidence is early, correlational, or mouse-only, you will be told exactly that. The microbiome field has enough hype. You are here for the real thing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROAD AHEAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Twelve lessons, one working gut</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="222" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">LESSONS 2-3</text>
                    <text x="220" y="260" text-anchor="start" fill="#fff" font-size="18">The residents and their food: fiber</text>
                    <path d="M550 300 L550 335" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,345 542,331 558,331" fill="#14b8a6"/>
                    <rect x="150" y="355" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="407" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">MIDDLE</text>
                    <text x="220" y="445" text-anchor="start" fill="#fff" font-size="18">Fermented foods, gut barrier, gut-brain axis</text>
                    <path d="M550 485 L550 520" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,530 542,516 558,516" fill="#14b8a6"/>
                    <rect x="150" y="540" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="592" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">LATER</text>
                    <text x="220" y="630" text-anchor="start" fill="#fff" font-size="18">IBS and gut disorders, evidence first</text>
                    <path d="M550 670 L550 705" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,715 542,701 558,701" fill="#14b8a6"/>
                    <rect x="150" y="725" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="220" y="777" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">FINAL</text>
                    <text x="220" y="815" text-anchor="start" fill="#fff" font-size="18">The honest probiotics guide + synthesis</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="20">Evidence over hype, every lesson</text>
                </svg>`,
                caption: "The full route from residents to real-world practice"
            }
        },
        {
            type: "quiz",
            question: "About 90 percent of vagus nerve fibers are afferent. What does that tell you about the gut-brain connection?",
            options: [
                { text: "The brain sends most of the signals, tightly controlling digestion from above", correct: false },
                { text: "Most traffic flows upward -- the gut reports to the brain far more than the brain commands the gut", correct: true },
                { text: "The vagus nerve only becomes active during digestion after meals", correct: false },
                { text: "Gut signals cannot influence mood because the nerve carries only motor commands", correct: false }
            ],
            explanation: "Afferent fibers carry signals toward the brain, and they make up about 90 percent of the vagus nerve. That means the gut-brain highway mostly runs uphill: fullness, nutrient, inflammation, and even microbial signals travel up constantly, while only about 10 percent of fibers carry commands down. The tempting first option gets it backwards -- your brain spends far more of this connection listening than commanding. That wiring is the anatomical basis of a gut feeling.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE VAGUS NERVE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">90 percent of its fibers are afferent</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which way does the traffic flow?</text>
                    <rect x="400" y="360" width="300" height="100" rx="20" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">BRAIN</text>
                    <text x="470" y="560" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">?</text>
                    <path d="M550 620 L550 480" stroke="#888" stroke-width="4" stroke-dasharray="8"/>
                    <rect x="400" y="640" width="300" height="100" rx="20" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">GUT</text>
                </svg>`,
                caption: "Which direction dominates the gut-brain highway?"
            }
        }
    ]
},
{
    id: 2,
    title: "The Microbiome: Your Inner Rainforest",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "A Rainforest or a Parking Lot?",
            content: "Picture two landscapes. The first is a rainforest: thousands of species, layered canopies, everything recycling everything else. Knock out one species and ten others cover its job. The second is a parking lot with a few weeds pushing through the cracks: simple, fragile, one bad season away from bare asphalt.\n\nYour gut is one of these landscapes. Which one depends less on your genes than on how you have lived and eaten -- and it is more changeable than you think.\n\nEcologists have a word for what separates the forest from the lot: **diversity**. And in microbiome science, diversity has emerged as the closest thing we have to a single headline marker of gut health.\n\nIn this lesson you will meet the major players by name, learn how your personal ecosystem was seeded on the day you were born, and discover the surprisingly short list of things that actually reshape it in adulthood. Spoiler: dinner tonight is on that list.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO GUT LANDSCAPES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Which one are you cultivating?</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RAINFOREST GUT</text>
                    <circle cx="180" cy="300" r="26" fill="rgba(16,185,129,0.5)"/>
                    <circle cx="260" cy="340" r="20" fill="rgba(99,102,241,0.5)"/>
                    <circle cx="340" cy="295" r="23" fill="rgba(245,158,11,0.5)"/>
                    <circle cx="410" cy="350" r="17" fill="rgba(236,72,153,0.5)"/>
                    <circle cx="200" cy="400" r="19" fill="rgba(59,130,246,0.5)"/>
                    <circle cx="300" cy="420" r="24" fill="rgba(20,184,166,0.5)"/>
                    <circle cx="390" cy="430" r="15" fill="rgba(139,92,246,0.5)"/>
                    <text x="290" y="510" text-anchor="middle" fill="#fff" font-size="17">Many species, many backups</text>
                    <text x="290" y="545" text-anchor="middle" fill="#888" font-size="15">resilient to shocks</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">PARKING LOT GUT</text>
                    <circle cx="750" cy="330" r="22" fill="rgba(239,68,68,0.4)"/>
                    <circle cx="870" cy="380" r="16" fill="rgba(136,136,136,0.4)"/>
                    <circle cx="800" cy="430" r="12" fill="rgba(239,68,68,0.3)"/>
                    <text x="810" y="510" text-anchor="middle" fill="#fff" font-size="17">Few species, no backups</text>
                    <text x="810" y="545" text-anchor="middle" fill="#888" font-size="15">fragile under stress</text>
                    <rect x="150" y="660" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE HEADLINE MARKER</text>
                    <text x="550" y="758" text-anchor="middle" fill="#fff" font-size="18">Diversity -- and it responds to how you eat</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Dinner tonight is a landscaping decision</text>
                </svg>`,
                caption: "Rainforest versus parking lot: two possible guts"
            }
        },
        {
            type: "concept",
            title: "Diversity: The Health Marker That Keeps Showing Up",
            content: "When researchers compare the microbiomes of healthy people with those of people who have obesity, type 2 diabetes, inflammatory bowel disease, or *C. difficile* infection, one pattern repeats: **lower diversity in the sicker group**.\n\n**Why would variety matter so much?** Ecology gives us three reasons:\n\n• **Redundancy** -- in a diverse gut, several species can do each critical job (like producing butyrate). If antibiotics wipe out one, others cover the shift\n• **Competitive exclusion** -- a crowded ecosystem leaves no open niches. Invaders like *C. diff* struggle to find a foothold when every seat is taken\n• **Metabolic range** -- more species means more enzymes, which means more kinds of fiber get fermented into useful compounds\n\n**Now the honest part**: most of this evidence is **correlational**. Low diversity travels with disease, but that does not prove low diversity *causes* disease -- illness, medication, and poor diet can all lower diversity themselves. Causation likely runs in both directions.\n\nAnd diversity is not everything: a gut can be diverse and still host troublemakers. But as a single, rough compass needle for gut health, diversity is the best one science currently has.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHY DIVERSITY WINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three lessons borrowed from ecology</text>
                    <rect x="80" y="170" width="300" height="220" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">REDUNDANCY</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">Several species can</text>
                    <text x="230" y="300" text-anchor="middle" fill="#fff" font-size="16">do each critical job</text>
                    <text x="230" y="345" text-anchor="middle" fill="#888" font-size="14">backups for every role</text>
                    <rect x="400" y="170" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NO OPEN SEATS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">Crowded guts leave</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="16">no niche for invaders</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="14">blocks C. diff and friends</text>
                    <rect x="720" y="170" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MORE ENZYMES</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">More species ferment</text>
                    <text x="870" y="300" text-anchor="middle" fill="#fff" font-size="16">more kinds of fiber</text>
                    <text x="870" y="345" text-anchor="middle" fill="#888" font-size="14">wider metabolic range</text>
                    <rect x="150" y="470" width="800 " height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="528" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE HONEST CAVEAT</text>
                    <text x="550" y="573" text-anchor="middle" fill="#fff" font-size="18">Most evidence is correlational --</text>
                    <text x="550" y="608" text-anchor="middle" fill="#fff" font-size="18">low diversity travels with disease,</text>
                    <text x="550" y="643" text-anchor="middle" fill="#888" font-size="16">but causation likely runs both ways</text>
                    <rect x="200" y="740" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="20">Best available compass, not a diagnosis</text>
                </svg>`,
                caption: "Redundancy, crowding, and range: the case for variety"
            }
        },
        {
            type: "concept",
            title: "Meet the Major Families",
            content: "Microbiome papers throw around Latin names like confetti. You only need three big groups (phyla) to follow almost any conversation:\n\n• **Bacteroidetes** -- versatile carb specialists. Many are champion fiber degraders with huge toolkits of carbohydrate-digesting enzymes. Often abundant in people eating varied, plant-heavy diets\n\n• **Firmicutes** -- a huge, mixed family. It includes many of your best **butyrate producers** (like *Faecalibacterium prausnitzii*, one of the most common bacteria in healthy guts) as well as some less helpful characters. Judging the whole phylum together is like judging all mammals by one raccoon\n\n• **Actinobacteria** -- a smaller group featuring the famous ***Bifidobacteria*** -- early colonizers of infant guts, fed by breast milk, and the genus behind the 'Bifido' on many yogurt labels\n\n**A myth to skip**: you may have heard that the **Firmicutes-to-Bacteroidetes ratio** determines obesity. Early mouse studies suggested it, headlines loved it, but larger human studies failed to replicate a consistent pattern. Reality check: these phyla are enormous categories -- like 'vertebrates' -- and health differences play out at the species and strain level, not in a two-number ratio.\n\nNames matter less than function. What your microbes *do* beats what they are called.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BIG THREE PHYLA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Huge families, plain-language jobs</text>
                    <rect x="150" y="170" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">BACTEROIDETES</text>
                    <text x="220" y="265" text-anchor="start" fill="#fff" font-size="18">Versatile carb and fiber specialists</text>
                    <text x="220" y="298" text-anchor="start" fill="#888" font-size="15">big enzyme toolkits for plant food</text>
                    <rect x="150" y="350" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="220" y="405" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">FIRMICUTES</text>
                    <text x="220" y="445" text-anchor="start" fill="#fff" font-size="18">Mixed family with star butyrate makers</text>
                    <text x="220" y="478" text-anchor="start" fill="#888" font-size="15">includes F. prausnitzii, a healthy-gut regular</text>
                    <rect x="150" y="530" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="585" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">ACTINOBACTERIA</text>
                    <text x="220" y="625" text-anchor="start" fill="#fff" font-size="18">Home of Bifidobacteria, infant-gut pioneers</text>
                    <text x="220" y="658" text-anchor="start" fill="#888" font-size="15">the Bifido on your yogurt label</text>
                    <rect x="150" y="740" width="800" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">MYTH TO SKIP</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="17">The Firmicutes-Bacteroidetes obesity ratio</text>
                    <text x="550" y="868" text-anchor="middle" fill="#888" font-size="15">did not replicate in larger human studies</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Function beats family name</text>
                </svg>`,
                caption: "Three phyla to know -- and one ratio myth to retire"
            }
        },
        {
            type: "example",
            title: "The Hadza: A Window Into Ancestral Guts",
            content: "How diverse can a human microbiome get? For a benchmark, researchers went to Tanzania.\n\nThe **Hadza** are one of the last hunter-gatherer communities on Earth -- roughly a thousand people foraging tubers, berries, baobab fruit, honey, and wild game. Their fiber intake is estimated at **100 grams or more per day**, mostly from wild plants. The average American eats about **15 grams**.\n\nWhen the **Sonnenburg lab at Stanford** and collaborators sequenced Hadza stool samples (published in *Science*, 2017), they found:\n\n• Substantially **higher species diversity** than in American or European guts\n• Bacterial species that are **rare or entirely absent** in industrialized populations\n• A striking **seasonal cycle**: gut profiles shifted between wet and dry seasons as foraged foods changed, then cycled back -- a flexibility Western guts rarely display\n\n**What this does NOT mean**: nobody is suggesting you forage for tubers, and the Hadza are not a picture of perfect health by every measure -- their lives differ from yours in a thousand ways beyond diet, so this is an observational comparison, not a prescription.\n\nWhat it does suggest: the industrialized microbiome may be running at a fraction of its ancestral variety. Some researchers call the missing species part of the 'disappearing microbiota' hypothesis -- and fiber, the subject of the next lesson, is the leading suspect.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HADZA BENCHMARK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sonnenburg lab, Science 2017</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HADZA FORAGERS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">~100g+ fiber/day</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="17">Higher gut diversity</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="17">Species absent in the West</text>
                    <text x="290" y="405" text-anchor="middle" fill="#888" font-size="15">gut shifts with the seasons</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">AVERAGE AMERICAN</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">~15g fiber/day</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="17">Lower gut diversity</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="17">Missing ancestral species</text>
                    <text x="810" y="405" text-anchor="middle" fill="#888" font-size="15">stable but narrowed</text>
                    <rect x="150" y="600" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">READ IT CAREFULLY</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="17">Observational comparison, not a prescription --</text>
                    <text x="550" y="728" text-anchor="middle" fill="#888" font-size="15">lifestyles differ in a thousand ways beyond diet</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Western guts may run at partial variety</text>
                </svg>`,
                caption: "A hunter-gatherer benchmark for microbial diversity"
            }
        },
        {
            type: "quiz",
            question: "Why do researchers treat microbiome diversity as a useful health marker -- and what is the key limitation of that evidence?",
            options: [
                { text: "Diversity is useful because it proves which bacteria are good; the limitation is that tests are expensive", correct: false },
                { text: "Higher diversity means redundancy, invader resistance, and metabolic range -- but most evidence is correlational, so causation is not settled", correct: true },
                { text: "Diversity directly causes good health, as proven by randomized trials in humans", correct: false },
                { text: "Diversity matters only in infancy; adult microbiomes are fixed and cannot change", correct: false }
            ],
            explanation: "Diverse ecosystems have backups for critical jobs, leave fewer niches open to invaders like C. diff, and ferment a wider range of fibers. That is why low diversity keeps showing up alongside conditions from IBD to type 2 diabetes. But most of this evidence is correlational: disease, drugs, and poor diet can themselves reduce diversity, so the causal arrow likely points both ways. The claim about definitive randomized proof overstates the science -- exactly the kind of overclaim this book avoids.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DIVERSITY AS A MARKER</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Why does variety matter, and what</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">can the evidence NOT yet tell us?</text>
                    <circle cx="330" cy="470" r="90" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="330" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Many</text>
                    <text x="330" y="492" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">species</text>
                    <circle cx="770" cy="470" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="770" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">Few</text>
                    <text x="770" y="492" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">species</text>
                    <text x="550" y="480" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">vs</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="19">Correlation is not yet causation</text>
                </svg>`,
                caption: "Test what diversity can -- and cannot -- tell you"
            }
        },
        {
            type: "concept",
            title: "Day One: How Your Ecosystem Was Seeded",
            content: "In the womb, you were essentially **microbe-free**. Your ecosystem's founding population arrived in the first hours and days of life -- and how you were born shaped the guest list.\n\n**Vaginal birth**: the baby is coated in the mother's vaginal and gut microbes on the way out. First colonizers tend to include *Lactobacillus* and, soon after, *Bifidobacterium* -- species evolved for exactly this handoff.\n\n**C-section birth**: first contact skews toward **skin and environment microbes** -- *Staphylococcus*, hospital-surface species. Studies consistently show C-section babies start with different gut communities, lower in *Bacteroides* and *Bifidobacteria*, for months and sometimes years.\n\n**Now the crucial honest caveats**:\n\n• The differences **largely converge by age 1-3** in most studies\n• C-section is linked in observational data to modestly higher rates of asthma, allergy, and obesity -- but **correlation is not causation**, and confounders (why the C-section happened, antibiotics given, feeding method) muddy the water\n• A C-section is often the **medically right call** and saves lives. This is biology to understand, not a scorecard for guilt\n\nBirth mode deals the opening hand. It does not decide the game.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FOUNDING POPULATION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Birth mode shapes the first guest list</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VAGINAL BIRTH</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="17">Seeded by mother's</text>
                    <text x="290" y="312" text-anchor="middle" fill="#fff" font-size="17">vaginal and gut microbes</text>
                    <text x="290" y="365" text-anchor="middle" fill="#10b981" font-size="16">Lactobacillus first,</text>
                    <text x="290" y="398" text-anchor="middle" fill="#10b981" font-size="16">Bifidobacteria soon after</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">an evolved handoff</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">C-SECTION BIRTH</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="17">Seeded by skin and</text>
                    <text x="810" y="312" text-anchor="middle" fill="#fff" font-size="17">environment microbes</text>
                    <text x="810" y="365" text-anchor="middle" fill="#f59e0b" font-size="16">fewer Bacteroides and</text>
                    <text x="810" y="398" text-anchor="middle" fill="#f59e0b" font-size="16">Bifidobacteria early on</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">often the right medical call</text>
                    <rect x="150" y="580" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="638" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE HONEST PICTURE</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="17">Differences largely converge by age 1-3;</text>
                    <text x="550" y="713" text-anchor="middle" fill="#888" font-size="15">disease links are observational, heavily confounded</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">The opening hand, not the whole game</text>
                </svg>`,
                caption: "Two birth routes, two different starting communities"
            }
        },
        {
            type: "concept",
            title: "Milk That Feeds the Baby's Microbes, Not the Baby",
            content: "Human breast milk contains a puzzle that stumped scientists for decades: **human milk oligosaccharides (HMOs)** -- over 150 different complex sugars, the third most abundant solid component of milk after lactose and fat.\n\nThe puzzle? **Babies cannot digest them.** HMOs pass through the infant's stomach and small intestine untouched.\n\nThe answer is beautiful: HMOs are not baby food. **They are microbe food.** Mothers burn real metabolic energy manufacturing custom sugars whose entire job is to feed the infant's gut bacteria -- especially ***Bifidobacterium longum infantis***, a subspecies exquisitely equipped with genes for dismantling HMOs.\n\nWhat the system accomplishes:\n\n• **Selective fertilizer** -- Bifidobacteria bloom to dominate breastfed infant guts, while less friendly species get crowded out\n• **Decoy defense** -- some HMOs mimic gut-surface receptors, so pathogens latch onto sugar decoys and get flushed instead of infecting\n• **Immune training** during the most sensitive window of development\n\nEvolution literally invented a **prebiotic** -- food for beneficial microbes -- millions of years before the word existed. Formula science is racing to add synthetic HMOs, and some now include one or two, but matching a 150-sugar personalized cocktail is a tall order.\n\nFed is best; this is biology, not judgment. But it reveals how seriously nature takes the infant microbiome.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HMO PUZZLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Milk sugars the baby cannot digest</text>
                    <rect x="150" y="170" width="800" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">150+ COMPLEX MILK SUGARS</text>
                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-size="17">Third biggest solid in milk -- indigestible to infants</text>
                    <path d="M550 310 L550 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,360 542,346 558,346" fill="#14b8a6"/>
                    <rect x="150" y="370" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THEY ARE MICROBE FOOD</text>
                    <text x="550" y="468" text-anchor="middle" fill="#fff" font-size="17">Custom fuel for B. infantis and friends</text>
                    <rect x="80" y="560" width="300" height="190" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="615" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">FERTILIZER</text>
                    <text x="230" y="655" text-anchor="middle" fill="#fff" font-size="15">Bifido bloom crowds</text>
                    <text x="230" y="685" text-anchor="middle" fill="#fff" font-size="15">out rivals</text>
                    <rect x="400" y="560" width="300" height="190" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">DECOY DEFENSE</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="15">Pathogens grab sugar</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="15">decoys, get flushed</text>
                    <rect x="720" y="560" width="300" height="190" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="615" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">IMMUNE COACH</text>
                    <text x="870" y="655" text-anchor="middle" fill="#fff" font-size="15">Trains defenses in a</text>
                    <text x="870" y="685" text-anchor="middle" fill="#fff" font-size="15">critical window</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="19">Evolution's original prebiotic</text>
                </svg>`,
                caption: "Milk sugars built to feed microbes, not the baby"
            }
        },
        {
            type: "visual",
            title: "The Critical Window: Birth to Age Three",
            content: "Your microbiome did not drift toward its adult form -- it assembled through a fairly predictable ecological succession, like a forest regrowing after a fire.\n\nMilk-adapted specialists dominate infancy. Solid foods trigger a massive shift toward fiber fermenters. By roughly **age 2 to 3**, the community stabilizes into an adult-like configuration that becomes surprisingly resilient.\n\nThat early window matters doubly because it overlaps with the immune system's main training period. Early-life microbiome disruption -- repeated antibiotics, for instance -- is linked in observational studies to later allergy and asthma risk, though causation in humans is still being untangled.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ECOLOGICAL SUCCESSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your gut's first three years</text>
                    <rect x="150" y="180" width="800" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="220" y="232" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">BIRTH</text>
                    <text x="220" y="270" text-anchor="start" fill="#fff" font-size="17">First colonizers arrive -- birth mode</text>
                    <text x="220" y="300" text-anchor="start" fill="#888" font-size="15">deals the opening hand</text>
                    <path d="M550 320 L550 355" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,365 542,351 558,351" fill="#14b8a6"/>
                    <rect x="150" y="375" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="427" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">MILK MONTHS</text>
                    <text x="220" y="465" text-anchor="start" fill="#fff" font-size="17">HMO-fed Bifidobacteria dominate</text>
                    <text x="220" y="495" text-anchor="start" fill="#888" font-size="15">a low-diversity specialist economy</text>
                    <path d="M550 515 L550 550" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,560 542,546 558,546" fill="#14b8a6"/>
                    <rect x="150" y="570" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="622" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">SOLID FOODS</text>
                    <text x="220" y="660" text-anchor="start" fill="#fff" font-size="17">Fiber fermenters surge, diversity climbs</text>
                    <text x="220" y="690" text-anchor="start" fill="#888" font-size="15">the biggest remodel of a lifetime</text>
                    <path d="M550 710 L550 745" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,755 542,741 558,741" fill="#14b8a6"/>
                    <rect x="150" y="765" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="817" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">AGE 2-3</text>
                    <text x="220" y="855" text-anchor="start" fill="#fff" font-size="17">Adult-like community locks in --</text>
                    <text x="220" y="885" text-anchor="start" fill="#888" font-size="15">resilient, and immune training overlaps</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">A forest regrowing on a fixed schedule</text>
                </svg>`,
                caption: "From first colonizers to a stable adult community"
            }
        },
        {
            type: "example",
            title: "Ten Volunteers, Five Days, One Stunning Result",
            content: "How fast can an adult microbiome change? In 2014, **Lawrence David**, Peter Turnbaugh, and colleagues published a small but famous experiment in *Nature* that answered with a stopwatch.\n\n**The setup**: about ten volunteers ate two extreme diets for five days each, with daily stool sequencing:\n\n• An **entirely animal-based diet** -- meats, eggs, cheeses, zero plant fiber\n• An **entirely plant-based diet** -- grains, legumes, fruits, vegetables\n\n**The results**:\n\n• The animal-based diet **changed microbial community structure within roughly 2 days** -- bile-tolerant species like *Bilophila wadsworthia* bloomed, fiber fermenters like *Roseburia* crashed\n• Gene expression shifted too: the community pivoted from fermenting carbs to breaking down protein\n• When volunteers returned to normal eating, their microbiomes **swung back within about 2 days**\n\nOne vegetarian volunteer's lifelong plant-adapted community reorganized in days on the meat diet -- decades of dietary identity, overridden by a long weekend.\n\n**The honest read**: tiny study, short duration, extreme diets -- it tells us about *speed*, not about which diet is healthier. But the headline stands: your microbiome is not a fixed inheritance. It is a fast-responding ecosystem, holding a mirror up to your last few days of meals.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CHANGE IN DAYS, NOT YEARS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lawrence David et al., Nature 2014</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ALL-ANIMAL DIET</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">Meat, eggs, cheese -- no fiber</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="17">Bile-tolerant species bloom</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="15">fiber fermenters crash</text>
                    <text x="290" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">~2 days to shift</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ALL-PLANT DIET</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">Grains, beans, fruit, veg</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="17">Fermenters hold the floor</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="15">carb-burning gene activity</text>
                    <text x="810" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">~2 days back</text>
                    <rect x="150" y="580" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HONEST READ</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">Ten people, five days, extreme diets --</text>
                    <text x="550" y="708" text-anchor="middle" fill="#888" font-size="15">it proves speed of change, not which diet wins</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="19">Your gut mirrors your last few days of meals</text>
                </svg>`,
                caption: "Extreme diets rewired gut communities within days"
            }
        },
        {
            type: "concept",
            title: "What Shapes Your Microbiome as an Adult",
            content: "Rank the forces sculpting your adult gut ecosystem, strongest first:\n\n**1. Diet -- the dominant lever.** Day to day, what you eat is the single biggest modifiable influence. Fiber variety, fermented foods, and overall dietary pattern shape which species thrive. Studies comparing populations find diet explains more microbiome variation than nationality or even genetics -- research on thousands of twins shows identical twins share only modestly more microbiome similarity than fraternal twins. You are not doomed to your parents' gut\n\n**2. Medications.** Antibiotics are the wrecking ball -- a single course can depress diversity for weeks to months, and some species may not return. But it is not just antibiotics: a large 2018 screen found that about **1 in 4 non-antibiotic drugs** tested (including common antacids like PPIs, and metformin) inhibited gut bacteria in the lab\n\n**3. Geography and environment.** Where you live -- soil, water, buildings, urban vs rural -- leaves a detectable signature\n\n**4. Household and pets.** People who live together share microbes; dog owners measurably share with their dogs. Early-life dog exposure is associated with lower allergy risk (associational evidence, but consistent)\n\n**5. Exercise, sleep, stress** -- each nudges the ecosystem in smaller ways.\n\nNotice what tops the list: the lever you pull three times a day.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SCULPTING FORCES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ranked by day-to-day influence</text>
                    <rect x="150" y="170" width="800" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="228" text-anchor="start" fill="#10b981" font-weight="bold" font-size="24">1. DIET</text>
                    <text x="200" y="268" text-anchor="start" fill="#fff" font-size="18">The dominant modifiable lever --</text>
                    <text x="200" y="298" text-anchor="start" fill="#888" font-size="15">beats nationality and even genetics</text>
                    <rect x="150" y="350" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="402" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">2. MEDICATIONS</text>
                    <text x="200" y="440" text-anchor="start" fill="#fff" font-size="17">Antibiotics hit hardest; ~1 in 4 other</text>
                    <text x="200" y="468" text-anchor="start" fill="#888" font-size="15">drugs tested also inhibit gut bacteria</text>
                    <rect x="150" y="510" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="562" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">3. GEOGRAPHY</text>
                    <text x="200" y="600" text-anchor="start" fill="#fff" font-size="17">Soil, water, city vs country leave a signature</text>
                    <rect x="150" y="660" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="712" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4. HOUSEHOLD + PETS</text>
                    <text x="200" y="750" text-anchor="start" fill="#fff" font-size="17">Cohabitants share microbes -- dogs included</text>
                    <rect x="150" y="810" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="862" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">5. LIFESTYLE</text>
                    <text x="200" y="900" text-anchor="start" fill="#fff" font-size="17">Exercise, sleep, and stress each nudge it</text>
                    <rect x="200" y="970" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="19">The top lever gets pulled three times a day</text>
                </svg>`,
                caption: "Diet leads, drugs disrupt, environment fine-tunes"
            }
        },
        {
            type: "application",
            title: "Diversify Your Inner Ecosystem This Week",
            content: "You cannot control how you were born or where you grew up. You fully control the strongest lever. Start here:\n\n1. **Count your plants**. List every distinct plant you ate in the past week -- vegetables, fruits, whole grains, legumes, nuts, seeds, herbs, and spices all count. Most people eating a Western diet land under 15. Get your baseline number\n\n2. **Add three new species to your cart**. Not three more apples -- three plants you did not buy last week. A new bean, a new grain, a fresh herb. Diversity in, diversity out\n\n3. **Treat antibiotics with respect, not fear**. Take them exactly when prescribed -- they save lives -- but never pressure a doctor for antibiotics for a likely-viral illness. Your microbes pay the collateral cost\n\n4. **If you share a home with a dog**, congratulations -- you are already running a microbial exchange program. No dog required, though: gardening and time outdoors offer their own exposures\n\nSmall aside: none of this requires a microbiome test kit. Consumer tests are fun but cannot yet tell you anything actionable that your plant count does not.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ECOSYSTEM UPKEEP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four moves for a more diverse gut</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="222" text-anchor="start" fill="#fff" font-size="18">Count last week's distinct plants</text>
                    <text x="240" y="260" text-anchor="start" fill="#888" font-size="15">herbs, spices, nuts and seeds all count</text>
                    <rect x="150" y="340" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="392" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="392" text-anchor="start" fill="#fff" font-size="18">Add three plants you did not buy last week</text>
                    <text x="240" y="430" text-anchor="start" fill="#888" font-size="15">a new bean, a new grain, a fresh herb</text>
                    <rect x="150" y="510" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="562" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="562" text-anchor="start" fill="#fff" font-size="18">Use antibiotics wisely -- never casually</text>
                    <text x="240" y="600" text-anchor="start" fill="#888" font-size="15">life-saving when needed, costly when not</text>
                    <rect x="150" y="680" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="732" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="732" text-anchor="start" fill="#fff" font-size="18">Get outside -- pets, gardens, dirt</text>
                    <text x="240" y="770" text-anchor="start" fill="#888" font-size="15">everyday microbial exchange programs</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="19">No test kit needed -- just a plant count</text>
                </svg>`,
                caption: "Practical diversity moves you can start today"
            }
        },
        {
            type: "concept",
            title: "Your Microbial Fingerprint",
            content: "Here is the finding that should free you from chasing anyone else's gut: **no two microbiomes are alike**. Not spouses who share every meal. Not even identical twins with identical DNA.\n\nStudies can identify individuals from their microbiome profile with surprising accuracy -- it is that personal. Your community reflects your birth, your childhood home, every course of antibiotics, every phase of your eating life. It is a **biography written in bacteria**.\n\nThis is why the search for the single 'perfect microbiome' has quietly failed:\n\n• The Human Microbiome Project found healthy people hosting **wildly different communities** -- there is no master species checklist for health\n• Two healthy guts can share as little as a minority of their species, yet perform the **same functions** -- different casts, same play\n• Scientists increasingly define gut health by **what the ecosystem does** (fermenting fiber, producing butyrate, maintaining the barrier, resisting invaders) rather than exactly who is in it\n\nPractical consequences: be skeptical of any product or test claiming to give you 'the ideal microbiome' -- there is no such target. Your goal is not someone else's gut. It is a **more diverse, well-fed, resilient version of your own**.\n\nWhich raises the obvious question: what do you feed it? That is Lesson 3.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NO TWO GUTS ALIKE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A biography written in bacteria</text>
                    <circle cx="330" cy="360" r="150" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/>
                    <text x="330" y="330" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">PERSON A</text>
                    <circle cx="280" cy="390" r="14" fill="#10b981"/>
                    <circle cx="340" cy="420" r="11" fill="#f59e0b"/>
                    <circle cx="380" cy="370" r="12" fill="#ec4899"/>
                    <circle cx="300" cy="440" r="9" fill="#14b8a6"/>
                    <circle cx="770" cy="360" r="150" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="770" y="330" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">PERSON B</text>
                    <circle cx="720" cy="400" r="12" fill="#3b82f6"/>
                    <circle cx="790" cy="420" r="15" fill="#10b981"/>
                    <circle cx="820" cy="380" r="9" fill="#ffd700"/>
                    <circle cx="750" cy="360" r="10" fill="#ef4444"/>
                    <text x="550" y="370" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">=/=</text>
                    <rect x="150" y="580" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="638" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">SAME PLAY, DIFFERENT CAST</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="18">Healthy guts differ wildly in species yet</text>
                    <text x="550" y="713" text-anchor="middle" fill="#888" font-size="16">perform the same core functions</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">The goal is a better version of YOUR gut</text>
                </svg>`,
                caption: "Unique communities, shared functions, no perfect template"
            }
        },
        {
            type: "quiz",
            question: "The Lawrence David 2014 Nature study put volunteers on extreme all-animal or all-plant diets. What was its key finding?",
            options: [
                { text: "The microbiome took about six months to show any measurable change", correct: false },
                { text: "The animal-based diet permanently destroyed the volunteers' fiber-fermenting species", correct: false },
                { text: "Microbial community structure shifted within about two days of the diet change -- and reversed just as fast afterward", correct: true },
                { text: "It proved plant-based diets are healthier than animal-based diets for everyone", correct: false }
            ],
            explanation: "The study's headline was speed: gut community structure and gene activity shifted within roughly two days of starting the extreme diets, with bile-tolerant species blooming on the animal diet, then swung back about two days after normal eating resumed. Nothing was permanent, and with about ten people on five-day extreme diets, it could not crown a winner between diets -- it demonstrated responsiveness. Your microbiome mirrors your recent meals, which is exactly what makes it changeable.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE 2014 DIET-SWITCH STUDY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Extreme diets, daily stool sequencing</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">How fast did gut communities respond?</text>
                    <rect x="120" y="400" width="260 " height="120" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="250" y="455" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">Months?</text>
                    <rect x="420" y="400" width="260" height="120" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">Weeks?</text>
                    <rect x="720" y="400" width="260" height="120" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="850" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Days?</text>
                    <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">?</text>
                </svg>`,
                caption: "How quickly does diet reshape the gut?"
            }
        }
    ]
},
{
    id: 3,
    title: "Fiber: The Forgotten Nutrient",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Nutrient Almost Nobody Gets Enough Of",
            content: "Quick: name the nutrient deficiency affecting more Americans than any other. Not vitamin D. Not iron. Not protein -- almost nobody in the developed world is short on protein.\n\nIt is **fiber**. Only about **5 to 7 percent of Americans** meet the recommended intake. That makes fiber deficiency arguably the most widespread nutritional gap in the country -- so common that researchers have a name for it: **the fiber gap**.\n\nHere is why this belongs in a gut book and not just a cereal commercial: fiber is not really food for you. You cannot digest it. Fiber is **food for your microbes** -- the 38 trillion residents you met in Lesson 1. When they go unfed, they do not just quietly starve. They start eating something else. Something you need. (More on that unsettling discovery later in this lesson.)\n\nBy the end of this lesson you will know exactly what to feed your inner rainforest, why a compound called butyrate might be the most important molecule you have never heard of, and the one number worth tracking -- hint: it is not grams.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIBER GAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">America's most widespread nutrient shortfall</text>
                    <rect x="150" y="200" width="800" height="90" rx="20" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">Meeting fiber goals</text>
                    <rect x="150" y="200" width="52" height="90" rx="10" fill="#10b981"/>
                    <text x="230" y="330" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">only ~5-7%</text>
                    <rect x="150" y="400" width="800" height="90" rx="20" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">Falling short</text>
                    <text x="230" y="530" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">~93-95% of Americans</text>
                    <rect x="150" y="620" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="678" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE TWIST</text>
                    <text x="550" y="720" text-anchor="middle" fill="#fff" font-size="18">Fiber is not food for you --</text>
                    <text x="550" y="755" text-anchor="middle" fill="#888" font-size="16">it is food for your 38 trillion microbes</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Unfed microbes find something else to eat</text>
                </svg>`,
                caption: "Nineteen out of twenty Americans miss the fiber target"
            }
        },
        {
            type: "concept",
            title: "The Numbers Behind the Gap",
            content: "Let's put hard numbers on the fiber gap:\n\n• **Recommended intake**: about **25 grams per day for women** and **38 grams per day for men** (the Institute of Medicine's guideline, roughly 14 g per 1,000 calories)\n• **Actual average American intake**: around **15 grams per day**\n• **Share of Americans meeting the target**: roughly **5 to 7 percent**, depending on the survey\n\nIn other words, the average person gets about **half** of what their gut needs, and 19 out of 20 people fall short.\n\n**How did this happen?** Processing. Refining wheat into white flour strips away the bran and germ -- and most of the fiber. Juicing an orange discards the pulp. Modern food engineering has systematically removed the one component your microbes depend on, because fiber affects shelf life, texture, and softness.\n\n**Why care?** Beyond the microbiome story, fiber intake has one of the most robust track records in all of nutrition science: large meta-analyses (including a 2019 *Lancet* review commissioned by the WHO, covering 185 prospective studies) associate the highest fiber intakes with **15 to 30 percent lower** all-cause mortality, heart disease, stroke, and type 2 diabetes risk compared to the lowest intakes. Observational data, yes -- but unusually consistent, dose-dependent, and backed by trial evidence on cholesterol and blood pressure.\n\nFew habits have this much evidence behind them. Almost nobody does it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TARGET VS REALITY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Grams of fiber per day</text>
                    <rect x="100" y="200" width="280" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="255" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WOMEN</text>
                    <text x="240" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">25g</text>
                    <text x="240" y="390" text-anchor="middle" fill="#888" font-size="16">recommended</text>
                    <rect x="410" y="200" width="280" height="330" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="255" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">MEN</text>
                    <text x="550" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">38g</text>
                    <text x="550" y="390" text-anchor="middle" fill="#888" font-size="16">recommended</text>
                    <rect x="720" y="200" width="280" height="330" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="860" y="255" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ACTUAL</text>
                    <text x="860" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">~15g</text>
                    <text x="860" y="390" text-anchor="middle" fill="#888" font-size="16">average intake</text>
                    <rect x="150" y="600" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="658" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE EVIDENCE BASE</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="17">Lancet 2019 review of 185 studies: highest fiber</text>
                    <text x="550" y="733" text-anchor="middle" fill="#888" font-size="15">intakes linked to 15-30 percent lower major disease risk</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Half the fuel, nineteen in twenty short</text>
                </svg>`,
                caption: "Recommended targets tower over actual intake"
            }
        },
        {
            type: "concept",
            title: "Fermentation: Where Fiber Becomes Medicine",
            content: "So what actually happens to the fiber you eat? Your own enzymes cannot break it down, so it arrives in the colon intact -- and there, the magic starts.\n\nYour microbes **ferment** it. Armed with thousands of carbohydrate-digesting enzymes your genome lacks, they dismantle fiber and release **short-chain fatty acids (SCFAs)** -- small molecules that turn out to be some of the most important compounds in human health. The big three:\n\n• **Acetate** -- the most abundant; circulates body-wide, feeds other microbes, plays roles in appetite and fat metabolism\n• **Propionate** -- travels to the liver; involved in blood sugar regulation and satiety signaling\n• **Butyrate** -- the star of this lesson. Read on\n\n**Butyrate** deserves its own spotlight because of what it does at home base:\n\n• It is the **primary fuel for colonocytes** -- the cells lining your colon get up to 70 percent of their energy from butyrate, not from your bloodstream. Your colon wall is literally powered by microbial output\n• It **strengthens the gut barrier**, supporting the tight junctions that keep gut contents where they belong\n• It **calms inflammation**, promoting regulatory immune cells and dialing down inflammatory signaling in the gut wall\n\nOne clean chain to remember: **fiber in, fermentation, butyrate out, barrier strong, inflammation down**. No supplement replicates this pipeline. You have to feed it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FERMENTATION LINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From roughage to short-chain fatty acids</text>
                    <rect x="150" y="180" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIBER ARRIVES INTACT</text>
                    <text x="550" y="263" text-anchor="middle" fill="#888" font-size="16">your enzymes cannot touch it</text>
                    <path d="M550 290 L550 325" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,335 542,321 558,321" fill="#14b8a6"/>
                    <rect x="150" y="345" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="393" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">MICROBES FERMENT IT</text>
                    <text x="550" y="428" text-anchor="middle" fill="#888" font-size="16">thousands of enzymes you do not have</text>
                    <path d="M550 455 L550 490" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,500 542,486 558,486" fill="#14b8a6"/>
                    <rect x="80" y="510" width="300" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="565" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">ACETATE</text>
                    <text x="230" y="605" text-anchor="middle" fill="#fff" font-size="15">circulates body-wide</text>
                    <rect x="400" y="510" width="300" height="160" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">PROPIONATE</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="15">liver, blood sugar</text>
                    <rect x="720" y="510" width="300" height="160" rx="20" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="870" y="565" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">BUTYRATE</text>
                    <text x="870" y="605" text-anchor="middle" fill="#fff" font-size="15">the colon's own fuel</text>
                    <rect x="150" y="740" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE CHAIN</text>
                    <text x="550" y="838" text-anchor="middle" fill="#fff" font-size="17">Fiber in, fermentation, butyrate out,</text>
                    <text x="550" y="871" text-anchor="middle" fill="#888" font-size="16">barrier strong, inflammation down</text>
                </svg>`,
                caption: "Fermentation turns indigestible fiber into vital SCFAs"
            }
        },
        {
            type: "visual",
            title: "Butyrate's Three Jobs",
            content: "One molecule, three critical roles -- all happening in the last five feet of your gut.\n\nColonocytes burning butyrate keep the colon lining renewed. A fed lining maintains **tight junctions** -- the protein seals between cells that decide what passes into your bloodstream. And butyrate signaling nudges the local immune system toward tolerance instead of inflammation.\n\nStarve the pipeline and all three jobs suffer at once. That is why researchers keep finding low butyrate producers in conditions from inflammatory bowel disease to metabolic syndrome -- correlational so far in humans, but mechanistically well-mapped in the lab.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE MOLECULE, THREE JOBS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why butyrate earns the spotlight</text>
                    <circle cx="550" cy="330" r="130" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">BUTYRATE</text>
                    <text x="550" y="360" text-anchor="middle" fill="#888" font-size="16">made only by microbes</text>
                    <line x1="440" y1="420" x2="240" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="460" x2="550" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="660" y1="420" x2="860" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="80" y="580" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="635" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">FUEL</text>
                    <text x="230" y="678" text-anchor="middle" fill="#fff" font-size="15">Powers colon cells --</text>
                    <text x="230" y="708" text-anchor="middle" fill="#fff" font-size="15">up to 70% of their energy</text>
                    <text x="230" y="750" text-anchor="middle" fill="#888" font-size="14">keeps the lining renewed</text>
                    <rect x="400" y="580" width="300" height="220" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">BARRIER</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="15">Supports tight junctions</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="15">between lining cells</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="14">contents stay contained</text>
                    <rect x="720" y="580" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="635" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">CALM</text>
                    <text x="870" y="678" text-anchor="middle" fill="#fff" font-size="15">Promotes regulatory</text>
                    <text x="870" y="708" text-anchor="middle" fill="#fff" font-size="15">immune cells</text>
                    <text x="870" y="750" text-anchor="middle" fill="#888" font-size="14">inflammation dialed down</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="19">Starve the pipeline, all three jobs suffer</text>
                </svg>`,
                caption: "Fuel, barrier, calm: butyrate's triple duty"
            }
        },
        {
            type: "quiz",
            question: "What is butyrate, and why does it matter so much for your colon?",
            options: [
                { text: "A type of soluble fiber found in oats that lowers cholesterol", correct: false },
                { text: "A short-chain fatty acid made by microbes fermenting fiber -- it fuels colon cells, supports the gut barrier, and calms inflammation", correct: true },
                { text: "A digestive enzyme your pancreas releases to break down plant matter", correct: false },
                { text: "A hormone your brain sends down the vagus nerve to speed up digestion", correct: false }
            ],
            explanation: "Butyrate is not fiber itself, an enzyme, or a hormone -- it is a short-chain fatty acid produced when your gut microbes ferment the fiber you cannot digest. Colonocytes get up to 70 percent of their energy from it, it supports the tight junctions that seal your gut barrier, and it promotes anti-inflammatory immune signaling. The first option is the classic mix-up: oat fiber is the raw material; butyrate is what your microbes manufacture from raw material like it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">BUTYRATE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">The molecule your colon runs on</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">But what exactly is it?</text>
                    <rect x="200" y="380" width="700 " height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="432" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIBER + MICROBES = ?</text>
                    <text x="550" y="470" text-anchor="middle" fill="#888" font-size="16">follow the fermentation line</text>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="44">?</text>
                </svg>`,
                caption: "Test your grasp of the colon's favorite fuel"
            }
        },
        {
            type: "concept",
            title: "Know Your Fibers: Soluble, Insoluble, Resistant",
            content: "Fiber is not one thing -- it is a family, and your microbes have favorites.\n\n• **Soluble fiber** dissolves in water into a gel. Think **oats, beans, apples, citrus, psyllium**. Highly fermentable -- microbes love it -- and the gel slows digestion, which steadies blood sugar and helps lower LDL cholesterol\n\n• **Insoluble fiber** does not dissolve. Think **wheat bran, leafy greens, vegetable skins, nuts**. Less fermentable, but it adds bulk and keeps things moving -- the classic 'roughage'\n\n• **Resistant starch** is the sleeper category: starch that *resists* digestion in the small intestine and reaches the colon like fiber. The kitchen trick: **cooking and then cooling** potatoes, rice, or pasta converts some ordinary starch into resistant starch (retrogradation -- and the effect largely survives reheating). **Green (unripe) bananas**, beans, and raw oats are naturally rich in it. Resistant starch is a favorite substrate for butyrate producers\n\nThen there are the **prebiotic all-stars** -- foods dense in fermentable fibers like inulin and fructooligosaccharides that beneficial microbes feast on:\n\n**Onions, garlic, leeks, asparagus, oats, beans, slightly underripe bananas, and Jerusalem artichokes.**\n\nNotice these are ordinary grocery items, not powders. A 'prebiotic' is simply food for beneficial microbes -- and your kitchen already stocks the best ones.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIBER FAMILY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three types, one hungry ecosystem</text>
                    <rect x="80" y="170" width="300" height="260" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">SOLUBLE</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="15">Dissolves into a gel</text>
                    <text x="230" y="305" text-anchor="middle" fill="#fff" font-size="15">oats, beans, apples</text>
                    <text x="230" y="350" text-anchor="middle" fill="#888" font-size="14">highly fermentable,</text>
                    <text x="230" y="380" text-anchor="middle" fill="#888" font-size="14">steadies blood sugar</text>
                    <rect x="400" y="170" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">INSOLUBLE</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="15">Bulk that keeps</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="15">things moving</text>
                    <text x="550" y="350" text-anchor="middle" fill="#888" font-size="14">bran, greens, skins --</text>
                    <text x="550" y="380" text-anchor="middle" fill="#888" font-size="14">the classic roughage</text>
                    <rect x="720" y="170" width="300" height="260" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">RESISTANT</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="15">Starch that acts like</text>
                    <text x="870" y="305" text-anchor="middle" fill="#fff" font-size="15">fiber in the colon</text>
                    <text x="870" y="350" text-anchor="middle" fill="#888" font-size="14">cooled rice + potatoes,</text>
                    <text x="870" y="380" text-anchor="middle" fill="#888" font-size="14">green bananas, beans</text>
                    <rect x="150" y="500" width="800" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="558" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">PREBIOTIC ALL-STARS</text>
                    <text x="550" y="603" text-anchor="middle" fill="#fff" font-size="18">Onions, garlic, leeks, asparagus,</text>
                    <text x="550" y="638" text-anchor="middle" fill="#fff" font-size="18">oats, beans, underripe bananas</text>
                    <text x="550" y="683" text-anchor="middle" fill="#888" font-size="15">ordinary groceries, not powders</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">Your kitchen already stocks the best ones</text>
                </svg>`,
                caption: "Soluble, insoluble, resistant -- feed all three lanes"
            }
        },
        {
            type: "example",
            title: "The Leftover Rice Trick",
            content: "Here is resistant starch in action, using food you already eat.\n\n**Scenario one**: you cook white rice and eat it hot with dinner. Most of its starch digests quickly in your small intestine -- a fast glucose delivery, minimal payload for your colon microbes.\n\n**Scenario two**: you cook the same rice, refrigerate it overnight, and eat it tomorrow as fried rice or a cold rice salad. During cooling, some starch molecules recrystallize into a structure your enzymes cannot easily attack -- **retrogradation**. That fraction now behaves like fiber: it sails past your small intestine and lands in the colon, where butyrate producers throw a feast. The bonus: the resistant fraction largely survives reheating, so leftover fried rice still counts.\n\nThe same trick works with **potatoes** (think chilled potato salad), **pasta salad**, and **overnight oats**. And a **green-tinged banana** delivers several grams of resistant starch that a fully speckled ripe one has already converted to sugar.\n\n**Keep it honest**: the shift is real but modest -- cooling does not transform rice into a health food, and studies measuring the change report a few grams' difference per serving, with the exact amount varying by food and method. But it is a free upgrade to food you were eating anyway -- and in a 15-gram-a-day culture, a few free grams matter. (Usual food-safety rules apply: cool rice promptly.)",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LEFTOVER UPGRADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cook, cool, and feed the colon</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">RICE, EATEN HOT</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">Starch digests fast in the</text>
                    <text x="290" y="328" text-anchor="middle" fill="#fff" font-size="17">small intestine</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="15">quick glucose, little left</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="15">for colon microbes</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">COOKED, THEN COOLED</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">Retrogradation locks some</text>
                    <text x="810" y="328" text-anchor="middle" fill="#fff" font-size="17">starch against digestion</text>
                    <text x="810" y="385" text-anchor="middle" fill="#10b981" font-size="15">extra resistant starch reaches</text>
                    <text x="810" y="415" text-anchor="middle" fill="#10b981" font-size="15">the colon -- survives reheating</text>
                    <rect x="150" y="580" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ALSO WORKS FOR</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="17">Potato salad, pasta salad, overnight oats,</text>
                    <text x="550" y="710" text-anchor="middle" fill="#888" font-size="15">and green-tinged bananas</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="19">A modest but free upgrade -- a few grams</text>
                </svg>`,
                caption: "Same rice, different fate for your microbes"
            }
        },
        {
            type: "example",
            title: "Thirty Plants a Week: The American Gut Finding",
            content: "If fiber grams are hard to track, here is a number that is not -- and it comes from one of the largest citizen-science microbiome projects ever run.\n\nThe **American Gut Project**, led by Rob Knight's lab with over **10,000 participants** sending in samples and diet surveys, published a striking pattern in 2018: participants who ate **more than 30 different plant types per week** had significantly **more diverse gut microbiomes** than those eating **10 or fewer**.\n\nDetails worth noticing:\n\n• The comparison was about **variety, not virtue**. Thirty-plants people were not necessarily vegetarian -- some ate meat. What distinguished their guts was the *range* of plants\n• 'Plant types' is generous: **every distinct vegetable, fruit, grain, legume, nut, seed, herb, and spice counts**. Garlic in the sauce counts. Two kinds of lettuce count as two\n• High plant-variety eaters also carried fewer antibiotic-resistance genes in their gut bacteria -- an intriguing secondary finding\n\n**The honest caveats**: this is cross-sectional, self-reported-diet data. It shows association, not proof that hitting 30 causes the diversity. People who eat 30 plants a week differ in many other ways.\n\nStill, the logic is mechanistically sound -- different fibers feed different microbes, so variety should breed variety -- and '30 different plants' has become the most practical, trackable gut-health target in nutrition. Not a superfood. A **super habit**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">30 PLANTS A WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">American Gut Project, 10,000+ participants</text>
                    <rect x="60" y="180" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">30+ PLANT TYPES</text>
                    <circle cx="180" cy="310" r="16" fill="#10b981"/>
                    <circle cx="240" cy="340" r="13" fill="#3b82f6"/>
                    <circle cx="300" cy="300" r="15" fill="#f59e0b"/>
                    <circle cx="360" cy="345" r="12" fill="#ec4899"/>
                    <circle cx="420" cy="310" r="14" fill="#8b5cf6"/>
                    <circle cx="210" cy="400" r="12" fill="#14b8a6"/>
                    <circle cx="280" cy="420" r="15" fill="#ffd700"/>
                    <circle cx="350" cy="410" r="11" fill="#6366f1"/>
                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="17">Measurably more diverse guts</text>
                    <rect x="580" y="180" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">10 OR FEWER</text>
                    <circle cx="740" cy="330" r="16" fill="rgba(239,68,68,0.5)"/>
                    <circle cx="820" cy="370" r="13" fill="rgba(136,136,136,0.5)"/>
                    <circle cx="880" cy="320" r="11" fill="rgba(239,68,68,0.4)"/>
                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="17">Narrower microbial range</text>
                    <rect x="150" y="590" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHAT COUNTS AS A PLANT</text>
                    <text x="550" y="688" text-anchor="middle" fill="#fff" font-size="17">Veg, fruit, grains, legumes, nuts, seeds,</text>
                    <text x="550" y="721" text-anchor="middle" fill="#888" font-size="16">herbs and spices -- garlic in the sauce counts</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">Variety beats any single superfood</text>
                </svg>`,
                caption: "Plant variety tracked with gut diversity at scale"
            }
        },
        {
            type: "concept",
            title: "When Starved Microbes Eat You",
            content: "Now for the unsettling discovery promised at the start of this lesson.\n\nYour colon is coated in a protective **mucus layer** -- a slick barrier of complex sugars that keeps trillions of bacteria at a respectful distance from your gut wall. It is your first line of defense.\n\nIn a landmark series of mouse experiments, the **Sonnenburg lab at Stanford** (with Eric Martens' group at Michigan) asked: what happens when gut microbes get no fiber?\n\n**The answer**: deprived of plant fiber, otherwise-normal gut bacteria switched food sources -- and began **eating the mucus layer itself**. The sugars in mucus are chemically similar enough to serve as a backup meal. In fiber-starved mice:\n\n• The mucus layer grew **measurably thinner**\n• Bacteria encroached **closer to the gut wall**\n• Mice became **more vulnerable to invading pathogens** and showed more inflammation markers\n\nA follow-up multigenerational study added a darker twist: on low-fiber diets, microbial species disappeared **progressively across generations** of mice, and the lost diversity **did not return** when fiber was restored -- the species were simply gone, unless reintroduced.\n\n**Honest framing**: this is mouse work. Human mucus biology is similar but not identical, and human multigenerational data does not exist. But the mechanism is well-documented and the implication is hard to ignore: **fiber is not just food for microbes -- it is what keeps them from nibbling the walls.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MUCUS EATERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sonnenburg lab mouse studies</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIBER-FED GUT</text>
                    <rect x="110" y="450" width="360" height="70" rx="10" fill="rgba(16,185,129,0.35)"/>
                    <text x="290" y="493" text-anchor="middle" fill="#fff" font-size="15">thick mucus barrier</text>
                    <circle cx="180" cy="320" r="14" fill="#10b981"/>
                    <circle cx="260" cy="350" r="12" fill="#3b82f6"/>
                    <circle cx="340" cy="315" r="13" fill="#f59e0b"/>
                    <circle cx="410" cy="355" r="11" fill="#8b5cf6"/>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="14">microbes kept at a distance</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">FIBER-STARVED GUT</text>
                    <rect x="630" y="480" width="360" height="40" rx="10" fill="rgba(239,68,68,0.3)"/>
                    <text x="810" y="507" text-anchor="middle" fill="#fff" font-size="14">thinned mucus</text>
                    <circle cx="700" cy="420" r="14" fill="#ef4444"/>
                    <circle cx="780" cy="445" r="12" fill="#f59e0b"/>
                    <circle cx="860" cy="425" r="13" fill="#ef4444"/>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="15">microbes switch to eating</text>
                    <text x="810" y="362" text-anchor="middle" fill="#fff" font-size="15">the mucus layer itself</text>
                    <rect x="150" y="630" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE GENERATIONAL TWIST</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">Species lost over low-fiber generations</text>
                    <text x="550" y="758" text-anchor="middle" fill="#888" font-size="15">did not return when fiber came back -- mouse data</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="19">Fiber keeps microbes off the walls</text>
                </svg>`,
                caption: "Unfed microbes turn to the gut's own mucus lining"
            }
        },
        {
            type: "application",
            title: "Raising Your Fiber Without Regretting It",
            content: "Doubling your fiber overnight is the classic rookie mistake -- your current microbial workforce is not staffed for it, and the result is a gassy, bloated week that convinces people fiber 'does not agree with them.' Do it like this instead:\n\n1. **Add roughly 5 grams per day each week** -- one new serving of beans, oats, or vegetables. Give your fermenters two to four weeks to scale up their workforce\n\n2. **Reframe the gas**. Some increase is literally the sound of fermentation -- your microbes cheering. It typically settles as your ecosystem adapts. Persistent, painful bloating is different: slow down, and see a doctor if it continues\n\n3. **Drink more water as you climb**. Fiber without fluid can firm things up too much -- soluble fiber especially needs water to form its gel\n\n4. **Start a weekly plant count**. Tally every distinct plant, herb, and spice. Under 10? Aim for 15 next week. Chase 30 over a month or two -- it gamifies variety, which beats chasing grams\n\n5. **Lean on cheap workhorses**: a can of beans (rinsed) is around 12-15 g of fiber for under a dollar. Oats, frozen vegetables, and lentils carry more fiber per dollar than any superfood powder\n\nOne caution, not medical advice: if you have IBS, IBD, or other GI conditions, fiber changes can trigger symptoms -- pace it with your clinician.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR FIBER RAMP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Slow, hydrated, and gamified</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="222" text-anchor="start" fill="#fff" font-size="18">Add ~5g per day each week -- not all at once</text>
                    <text x="240" y="258" text-anchor="start" fill="#888" font-size="15">let the fermenters staff up</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="372" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="372" text-anchor="start" fill="#fff" font-size="18">Expect some gas -- fermentation applause</text>
                    <text x="240" y="408" text-anchor="start" fill="#888" font-size="15">it settles; painful bloating means slow down</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="522" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="522" text-anchor="start" fill="#fff" font-size="18">Drink more water as fiber climbs</text>
                    <text x="240" y="558" text-anchor="start" fill="#888" font-size="15">soluble fiber needs fluid to gel</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="672" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="672" text-anchor="start" fill="#fff" font-size="18">Track weekly plant count -- chase 30</text>
                    <text x="240" y="708" text-anchor="start" fill="#888" font-size="15">variety beats gram-counting</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="822" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="822" text-anchor="start" fill="#fff" font-size="18">Use cheap workhorses: beans, oats, lentils</text>
                    <text x="240" y="858" text-anchor="start" fill="#888" font-size="15">a rinsed can of beans: ~12-15g for under a dollar</text>
                    <rect x="200" y="940" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="19">GI conditions? Pace it with your clinician</text>
                </svg>`,
                caption: "Five steps up the fiber ramp without the misery"
            }
        },
        {
            type: "concept",
            title: "The Lesson in One Sentence",
            content: "Strip this lesson to its skeleton and one sentence remains: **eat a wide variety of plants, most days, forever** -- everything else is detail.\n\nWalk the logic chain one more time, because it connects everything you have learned so far:\n\n• You host **38 trillion microbes**, mostly in your colon (Lesson 1)\n• Their diversity is your ecosystem's best rough health marker, and **diet is the strongest lever** you own (Lesson 2)\n• Their preferred food is **fiber** -- which 19 out of 20 people underfeed\n• Fed microbes produce **butyrate**, which fuels your colon lining, seals your gut barrier, and calms inflammation\n• Starved microbes **eat the mucus lining** -- at least in mice -- and species can vanish for good\n• **Variety matters more than any single food**, because different fibers feed different specialists: 30 plant types a week is the trackable target\n\nNotice what is *absent* from this chain: no exotic superfood, no powder, no test kit, no subscription. The entire intervention lives in the produce aisle, the bean aisle, and the spice rack -- arguably the cheapest evidence-backed health upgrade available.\n\nNext lesson: what happens when you add *live microbes* to the mix -- fermented foods, from yogurt to kimchi, and what the evidence really says about them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WHOLE CHAIN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three lessons, one through-line</text>
                    <rect x="150" y="180" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">38 trillion residents, mostly in the colon</text>
                    <text x="550" y="262" text-anchor="middle" fill="#888" font-size="15">Lesson 1</text>
                    <path d="M550 290 L550 320" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,330 542,316 558,316" fill="#14b8a6"/>
                    <rect x="150" y="340" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="388" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">Diversity is the marker, diet is the lever</text>
                    <text x="550" y="422" text-anchor="middle" fill="#888" font-size="15">Lesson 2</text>
                    <path d="M550 450 L550 480" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,490 542,476 558,476" fill="#14b8a6"/>
                    <rect x="150" y="500" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="548" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Fiber feeds them; butyrate pays you back</text>
                    <text x="550" y="582" text-anchor="middle" fill="#888" font-size="15">Lesson 3</text>
                    <path d="M550 610 L550 640" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,650 542,636 558,636" fill="#14b8a6"/>
                    <rect x="150" y="660" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="718" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">EAT A WIDE VARIETY OF PLANTS,</text>
                    <text x="550" y="758" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">MOST DAYS, FOREVER</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#f59e0b" font-size="18">Next: fermented foods and live microbes</text>
                </svg>`,
                caption: "From residents to fiber to one durable habit"
            }
        },
        {
            type: "quiz",
            question: "What did the American Gut Project find about plant variety and the microbiome?",
            options: [
                { text: "People eating 30+ different plants weekly had more diverse microbiomes than those eating fewer than 10 -- an association, not proven causation", correct: true },
                { text: "Vegetarians had the most diverse microbiomes regardless of how many plant types they ate", correct: false },
                { text: "Eating one high-fiber superfood daily produced the same diversity as eating 30 different plants", correct: false },
                { text: "A randomized trial proved that 30 plants per week causes a 30 percent drop in disease risk", correct: false }
            ],
            explanation: "Across 10,000+ participants, those reporting more than 30 distinct plant types weekly -- vegetables, grains, legumes, nuts, herbs, and spices all counting -- had measurably more diverse gut microbiomes than those under 10. Variety was the differentiator, not vegetarianism: some high scorers ate meat. And because different fibers feed different microbes, no single superfood can substitute for range. It remains cross-sectional, self-reported data -- a strong association with sound mechanism, not a randomized trial.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE AMERICAN GUT PROJECT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">10,000+ people, one plant-count pattern</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did the data show?</text>
                    <rect x="120" y="400" width="400" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="320" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">30+ plants</text>
                    <text x="320" y="505" text-anchor="middle" fill="#888" font-size="16">per week</text>
                    <rect x="580" y="400" width="400" height="150" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="780" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">Under 10</text>
                    <text x="780" y="505" text-anchor="middle" fill="#888" font-size="16">per week</text>
                    <text x="550" y="650" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">?</text>
                </svg>`,
                caption: "What separated the two groups' gut ecosystems?"
            }
        }
    ]
},
{
    id: 4,
    title: "Fermented Foods & the Stanford Trial",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Jar in Your Fridge Might Be Medicine",
            content: "In 2021, a team at Stanford ran an experiment that quietly rearranged what nutrition scientists thought they knew. They took 36 healthy adults and asked half of them to eat a lot of fermented food -- yogurt, kefir, kimchi, sauerkraut, kombucha -- for 10 weeks. The other half loaded up on fiber, the long-reigning champion of gut health advice.\n\nThe fermented-food group walked away with something remarkable: a measurably more diverse microbiome and lower inflammation across 19 different blood markers.\n\nThat is not a supplement. Not a drug. A jar of sauerkraut and a cup of kefir.\n\nThis lesson takes you inside that trial -- what they actually did, what they actually found, and what the fine print says. Because the details matter, and this study has some genuinely surprising ones. By the end, you will know exactly what counts as a real fermented food (hint: most pickles do not) and how to use this evidence in your own kitchen.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STANFORD TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">10 weeks that changed gut science</text>
                    <circle cx="550" cy="380" r="160" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="350" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="30">FERMENTED</text>
                    <text x="550" y="395" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="30">FOODS</text>
                    <text x="550" y="445" text-anchor="middle" fill="#fff" font-size="20">6 servings a day</text>
                    <rect x="150" y="620" width="380" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="340" y="675" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DIVERSITY</text>
                    <text x="340" y="715" text-anchor="middle" fill="#fff" font-size="19">Went UP</text>
                    <rect x="570" y="620" width="380" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="760" y="675" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">INFLAMMATION</text>
                    <text x="760" y="715" text-anchor="middle" fill="#fff" font-size="19">Went DOWN</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Food as a microbiome intervention</text>
                </svg>`,
                caption: "The headline result: fermented foods raised diversity and lowered inflammation"
            }
        },
        {
            type: "concept",
            title: "Inside the Trial: What They Actually Did",
            content: "The study is **Wastyk et al., published in Cell in 2021**, run jointly by the **Sonnenburg and Gardner labs** at Stanford. Here is the design:\n\n• **36 healthy adults**, randomized into two groups\n• **10 weeks** on their assigned diet, with ramp-up time before and monitoring after\n• **Group 1 -- High-fermented-food diet**: built up to roughly **6 servings per day** of foods like yogurt, kefir, kimchi, sauerkraut, kombucha, and vegetable brine drinks\n• **Group 2 -- High-fiber diet**: built up to a large daily fiber intake from legumes, whole grains, nuts, seeds, fruits, and vegetables\n\nThroughout, researchers tracked two things: **microbiome composition** (stool samples) and **immune status** (blood samples measuring dozens of inflammatory proteins and immune cell signaling).\n\nWhy this design is clever: both diets are 'healthy' by any conventional standard. This was not junk food versus health food. It was a head-to-head test of two respected gut-health strategies -- and that is exactly why the result surprised people.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TRIAL DESIGN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Wastyk et al., Cell 2021</text>
                    <rect x="350" y="150" width="400" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">36 HEALTHY ADULTS</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Randomized into two arms</text>
                    <path d="M450 270 L290 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="290,340 304,336 298,326" fill="#14b8a6"/>
                    <path d="M650 270 L810 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="810,340 796,336 802,326" fill="#14b8a6"/>
                    <rect x="70" y="360" width="450" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="295" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">FERMENTED ARM</text>
                    <text x="295" y="465" text-anchor="middle" fill="#fff" font-size="19">~6 servings per day</text>
                    <text x="295" y="505" text-anchor="middle" fill="#888" font-size="17">Yogurt, kefir, kimchi</text>
                    <text x="295" y="540" text-anchor="middle" fill="#888" font-size="17">Sauerkraut, kombucha</text>
                    <text x="295" y="575" text-anchor="middle" fill="#888" font-size="17">Vegetable brine drinks</text>
                    <rect x="580" y="360" width="450" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="805" y="415" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">FIBER ARM</text>
                    <text x="805" y="465" text-anchor="middle" fill="#fff" font-size="19">High daily fiber intake</text>
                    <text x="805" y="505" text-anchor="middle" fill="#888" font-size="17">Legumes, whole grains</text>
                    <text x="805" y="540" text-anchor="middle" fill="#888" font-size="17">Nuts, seeds, fruits</text>
                    <text x="805" y="575" text-anchor="middle" fill="#888" font-size="17">Vegetables</text>
                    <rect x="150" y="730" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">TRACKED FOR 10 WEEKS</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="19">Stool samples: microbiome composition</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="19">Blood samples: inflammatory markers</text>
                </svg>`,
                caption: "Two healthy diets, head to head, with stool and blood tracked throughout"
            }
        },
        {
            type: "concept",
            title: "The Result Nobody Expected",
            content: "After 10 weeks, the two arms looked very different.\n\n**The fermented-food group:**\n• **Microbiome diversity increased** -- more distinct species detected, and the effect grew with dose: more servings, more diversity\n• **19 inflammatory markers decreased**, including **interleukin-6 (IL-6)**, a signaling protein tied to chronic inflammation, rheumatoid arthritis, type 2 diabetes, and general immune overdrive\n• Immune cells showed calmer, less activated signaling overall\n\n**The fiber group:**\n• Diversity did **not** significantly increase in 10 weeks\n• Inflammatory markers did not broadly drop\n• But -- and this matters -- their microbes showed **increased capacity to digest fiber**, measured by more carbohydrate-degrading enzymes in stool\n\nInterestingly, the new diversity in the fermented arm was mostly **not** the microbes from the food itself. The fermented foods seemed to change the gut environment in ways that let other resident species flourish. The food was less a delivery truck and more a gardener.\n\nOne surprising, well-measured result from one small trial -- but a real one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RESULTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What 10 weeks changed</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">FERMENTED ARM</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="19">Diversity UP</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Dose-dependent effect</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="19">19 inflammatory</text>
                    <text x="290" y="408" text-anchor="middle" fill="#fff" font-size="19">markers DOWN</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">Including IL-6</text>
                    <text x="290" y="500" text-anchor="middle" fill="#fff" font-size="19">Calmer immune signaling</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">FIBER ARM</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="19">Diversity: no change</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">In 10 weeks</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="19">Inflammation:</text>
                    <text x="810" y="408" text-anchor="middle" fill="#fff" font-size="19">no broad drop</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="19">Fiber-digesting</text>
                    <text x="810" y="498" text-anchor="middle" fill="#fff" font-size="19">capacity GREW</text>
                    <rect x="150" y="620" width="800" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="678" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE SURPRISE</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="19">New diversity was mostly NOT the food microbes</text>
                    <text x="550" y="765" text-anchor="middle" fill="#888" font-size="17">Fermented foods changed the gut environment</text>
                    <text x="550" y="798" text-anchor="middle" fill="#888" font-size="17">so resident species could flourish</text>
                </svg>`,
                caption: "Diversity rose and 19 inflammatory markers fell -- only in the fermented arm"
            }
        },
        {
            type: "example",
            title: "What 6 Servings a Day Actually Looked Like",
            content: "Six servings of fermented food sounds like a lot until you see a real day from the trial's playbook. Participants were coached to build up gradually, and a typical day looked something like this:\n\n• **Breakfast**: a cup of plain yogurt with live cultures (1 serving)\n• **Mid-morning**: a glass of kefir, roughly 6 ounces (1 serving)\n• **Lunch**: a half-cup of kimchi alongside a rice bowl (1 serving)\n• **Afternoon**: a bottle of kombucha (1 serving)\n• **Dinner**: sauerkraut piled on whatever protein was already planned (1 serving)\n• **Evening**: a small glass of vegetable brine drink -- yes, basically drinking the sauerkraut juice (1 serving)\n\nNotice what this is not: no exotic supplements, no foods you cannot find in a normal American grocery store, no cooking skills beyond opening jars.\n\nParticipants did not start at six servings. They ramped up over several weeks, which also gave their digestive systems time to adjust -- a detail worth copying, as you will see in the practice card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A TRIAL DAY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six servings, zero exotic ingredients</text>
                    <rect x="150" y="150" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="250" y="200" text-anchor="start" fill="#fff" font-size="18">Breakfast: yogurt with live cultures</text>
                    <rect x="150" y="260" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="310" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="250" y="310" text-anchor="start" fill="#fff" font-size="18">Mid-morning: a glass of kefir</text>
                    <rect x="150" y="370" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="420" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="250" y="420" text-anchor="start" fill="#fff" font-size="18">Lunch: half-cup of kimchi</text>
                    <rect x="150" y="480" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="530" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="250" y="530" text-anchor="start" fill="#fff" font-size="18">Afternoon: kombucha</text>
                    <rect x="150" y="590" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="640" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="250" y="640" text-anchor="start" fill="#fff" font-size="18">Dinner: sauerkraut on the side</text>
                    <rect x="150" y="700" width="800" height="80" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="200" y="750" text-anchor="start" fill="#14b8a6" font-weight="bold" font-size="20">6.</text>
                    <text x="250" y="750" text-anchor="start" fill="#fff" font-size="18">Evening: vegetable brine drink</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">All from a normal grocery store</text>
                </svg>`,
                caption: "A realistic day at the trial's full dose of six servings"
            }
        },
        {
            type: "quiz",
            question: "In the Stanford fermented-food trial (Wastyk et al., 2021), what happened to the HIGH-FIBER group after 10 weeks?",
            options: [
                { text: "Their microbiome diversity increased even more than the fermented group's", correct: false },
                { text: "Their diversity did not significantly increase, but their microbes' fiber-digesting capacity grew", correct: true },
                { text: "Their inflammation increased, showing fiber is harmful to the gut", correct: false },
                { text: "They showed identical results to the fermented-food group", correct: false }
            ],
            explanation: "The fiber arm's diversity did not significantly rise in 10 weeks -- the surprise of the study -- but their gut microbes did show increased capacity to break down fiber, suggesting the community was adapting. The tempting wrong answer is that fiber failed or harmed the gut: it did not. Fiber remains strongly supported by decades of evidence; 10 weeks may simply be too short for diversity to shift. The fermented arm, meanwhile, gained diversity and dropped 19 inflammatory markers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWO ARMS, TWO OUTCOMES</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Fermented: diversity up, inflammation down</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Fiber: what happened there?</text>
                    <circle cx="350" cy="450" r="90" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FERMENTED</text>
                    <text x="350" y="480" text-anchor="middle" fill="#fff" font-size="16">Clear shift</text>
                    <circle cx="750" cy="450" r="90" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <text x="750" y="445" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">FIBER</text>
                    <text x="750" y="480" text-anchor="middle" fill="#fff" font-size="16">?</text>
                </svg>`,
                caption: "Test your understanding of the trial's two arms"
            }
        },
        {
            type: "concept",
            title: "Does This Mean Fiber Lost? No.",
            content: "Read enough headlines about this trial and you might conclude fiber is overrated. That would be exactly the wrong takeaway -- and the researchers themselves said so.\n\nHere is the honest interpretation:\n\n• **Ten weeks is short.** Microbiome diversity may simply take longer to respond to fiber than to fermented foods. A community adapting its enzymes -- which the fiber group measurably did -- is often the first step before new species gain a foothold.\n\n• **Fiber's evidence base is enormous.** Decades of epidemiology tie high fiber intake to lower rates of heart disease, colon cancer, and type 2 diabetes. One 10-week trial does not outweigh that mountain.\n\n• **Baseline diversity mattered.** In the fiber arm, people who started with more diverse microbiomes responded better -- hinting that fiber works best when you already have the workforce to ferment it.\n\n• **The two are teammates, not rivals.** Fermented foods may diversify the community; fiber feeds it. The Sonnenburg lab's own suggestion: do both.\n\nThe trial did not dethrone fiber. It added a second, faster-acting tool to the kit.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIBER STILL MATTERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Teammates, not rivals</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">10 WEEKS IS SHORT</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="17">Fiber may need longer</text>
                    <text x="300" y="303" text-anchor="middle" fill="#888" font-size="15">Enzymes adapt first</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">DECADES OF DATA</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="17">Heart disease, cancer,</text>
                    <text x="800" y="303" text-anchor="middle" fill="#fff" font-size="17">diabetes: all lower</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">BASELINE MATTERED</text>
                    <text x="300" y="510" text-anchor="middle" fill="#fff" font-size="17">Diverse guts responded</text>
                    <text x="300" y="543" text-anchor="middle" fill="#fff" font-size="17">to fiber best</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="465" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">DO BOTH</text>
                    <text x="800" y="510" text-anchor="middle" fill="#fff" font-size="17">Fermented: diversify</text>
                    <text x="800" y="543" text-anchor="middle" fill="#fff" font-size="17">Fiber: feed the community</text>
                    <rect x="200" y="680" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="730" text-anchor="middle" fill="#ffd700" font-size="20">A second tool, not a replacement</text>
                </svg>`,
                caption: "Why the trial adds to fiber's story instead of ending it"
            }
        },
        {
            type: "concept",
            title: "What Counts as a LIVE Fermented Food",
            content: "This is where most people get tripped up at the grocery store. The trial's benefits came from foods with **living microbial cultures** -- and plenty of things that look fermented are not.\n\n**Counts (live cultures):**\n• **Yogurt** labeled 'live and active cultures'\n• **Kefir** -- a drinkable fermented milk with far more strains than yogurt\n• **Kimchi** and **sauerkraut** -- but only from the **refrigerated section**\n• **Miso** -- the unpasteurized kind, added after cooking\n• **Kombucha** -- fermented tea, refrigerated\n\n**Does NOT count:**\n• **Shelf-stable or canned sauerkraut** -- it was heat-treated for shelf life, which kills the cultures\n• **Vinegar pickles** -- most grocery pickles are cucumbers soaked in vinegar, never fermented at all. Sour taste, zero live microbes\n• **Bread, beer, and wine** -- fermented during production, but baking and filtering remove or kill the organisms\n\nThe one-second test: **is it in the fridge, and does the label say live or raw?** Room-temperature aisle almost always means the microbes are gone.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LIVE OR NOT?</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The grocery store field guide</text>
                    <rect x="60" y="170" width="460" height="440" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="23">COUNTS</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Live-culture yogurt</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Kefir</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="18">Refrigerated kimchi</text>
                    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="18">Refrigerated sauerkraut</text>
                    <text x="290" y="440" text-anchor="middle" fill="#fff" font-size="18">Unpasteurized miso</text>
                    <text x="290" y="480" text-anchor="middle" fill="#fff" font-size="18">Kombucha</text>
                    <text x="290" y="540" text-anchor="middle" fill="#888" font-size="16">Found in the fridge section</text>
                    <rect x="580" y="170" width="460" height="440" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="23">DOES NOT COUNT</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Canned sauerkraut</text>
                    <text x="810" y="313" text-anchor="middle" fill="#888" font-size="15">Heat killed the cultures</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="18">Vinegar pickles</text>
                    <text x="810" y="393" text-anchor="middle" fill="#888" font-size="15">Never fermented at all</text>
                    <text x="810" y="440" text-anchor="middle" fill="#fff" font-size="18">Bread, beer, wine</text>
                    <text x="810" y="473" text-anchor="middle" fill="#888" font-size="15">Microbes removed or killed</text>
                    <text x="810" y="540" text-anchor="middle" fill="#888" font-size="16">Shelf-stable aisle</text>
                    <rect x="150" y="680" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="20">One-second test: refrigerated + label</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="16">says live, raw, or active cultures</text>
                </svg>`,
                caption: "Refrigerated with live cultures counts; heat-treated and vinegar-brined does not"
            }
        },
        {
            type: "concept",
            title: "How Fermentation Works: Humanity's Oldest Biotech",
            content: "Fermentation is not mysterious. It is a controlled takeover by friendly microbes.\n\nWhen you salt shredded cabbage and press it under its own brine, you create an environment where **lactic acid bacteria** -- especially species like Lactobacillus and Leuconostoc -- thrive while spoilage organisms cannot. Those bacteria eat the vegetable's natural sugars and excrete **lactic acid**, which:\n\n• Drops the pH so low that dangerous microbes (including botulism-causing Clostridium) cannot survive\n• Creates the signature sour tang of sauerkraut, kimchi, and yogurt\n• Preserves the food for months without refrigeration or canning\n\nThis is **humanity's oldest food preservation technology**. Evidence of fermented beverages goes back about 9,000 years in China; Korean kimchi traditions span well over a thousand years; nearly every culture on Earth independently invented some fermented staple.\n\nAnd on safety: properly fermented vegetables have an outstanding record. The USDA has noted that lab-confirmed cases of foodborne illness from properly fermented vegetables are essentially unheard of -- the acid environment is genuinely hostile to pathogens. Your ancestors bet their winters on it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW FERMENTATION WORKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A friendly microbial takeover</text>
                    <rect x="60" y="200" width="220" height="120" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="170" y="250" text-anchor="middle" fill="#fff" font-size="17">Salt + cabbage</text>
                    <text x="170" y="285" text-anchor="middle" fill="#888" font-size="14">under brine</text>
                    <path d="M280 260 L340 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,260 328,252 328,268" fill="#14b8a6"/>
                    <rect x="340" y="200" width="220" height="120" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="450" y="250" text-anchor="middle" fill="#fff" font-size="17">Lactic acid</text>
                    <text x="450" y="285" text-anchor="middle" fill="#888" font-size="14">bacteria thrive</text>
                    <path d="M560 260 L620 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="620,260 608,252 608,268" fill="#14b8a6"/>
                    <rect x="620" y="200" width="220" height="120" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="730" y="250" text-anchor="middle" fill="#fff" font-size="17">Acid builds,</text>
                    <text x="730" y="285" text-anchor="middle" fill="#888" font-size="14">pH drops</text>
                    <path d="M840 260 L890 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="890,260 878,252 878,268" fill="#14b8a6"/>
                    <rect x="890" y="200" width="160" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="970" y="250" text-anchor="middle" fill="#fff" font-size="17">Pathogens</text>
                    <text x="970" y="285" text-anchor="middle" fill="#888" font-size="14">locked out</text>
                    <rect x="150" y="420" width="800" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="475" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">ANCIENT TECHNOLOGY</text>
                    <text x="550" y="520" text-anchor="middle" fill="#fff" font-size="18">Fermented beverages: ~9,000 years ago in China</text>
                    <text x="550" y="558" text-anchor="middle" fill="#fff" font-size="18">Kimchi traditions: over 1,000 years in Korea</text>
                    <text x="550" y="596" text-anchor="middle" fill="#888" font-size="16">Nearly every culture invented a fermented staple</text>
                    <rect x="200" y="700" width="700" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SAFETY RECORD: OUTSTANDING</text>
                    <text x="550" y="772" text-anchor="middle" fill="#888" font-size="16">The acid environment is hostile to pathogens</text>
                </svg>`,
                caption: "Lactic acid bacteria acidify the food, preserving it and locking pathogens out"
            }
        },
        {
            type: "example",
            title: "Kefir: The Diversity Heavyweight",
            content: "If you only add one fermented food, the strongest case is for **kefir** -- and the numbers explain why.\n\nA typical live-culture **yogurt** contains **2 to 7 bacterial strains**, usually Lactobacillus bulgaricus and Streptococcus thermophilus plus a few added extras.\n\n**Kefir**, made by fermenting milk with 'kefir grains' -- rubbery cauliflower-like colonies of bacteria and yeast living in a cooperative matrix -- routinely contains **30 to 60 microbial species**, spanning both bacteria and yeasts. It is less a food and more a portable ecosystem.\n\nKefir's origin story fits the theme: it comes from the **Caucasus Mountains**, where herders fermented milk in leather bags and the grains were passed down through families like heirlooms. The same grains, fed daily with fresh milk, can live for decades.\n\nA practical note: kefir tastes like drinkable yogurt with a slight fizz and tang. If plain is too sharp at first, blend it with a banana. And because the microbes have digested most of the lactose, many lactose-sensitive people tolerate kefir surprisingly well -- though that is a general observation, not a promise for your particular gut.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">KEFIR VS YOGURT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Microbial strain counts compared</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">YOGURT</text>
                    <text x="290" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">2-7</text>
                    <text x="290" y="345" text-anchor="middle" fill="#888" font-size="17">bacterial strains</text>
                    <circle cx="230" cy="420" r="18" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="290" cy="420" r="18" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="350" cy="420" r="18" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">KEFIR</text>
                    <text x="810" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">30-60</text>
                    <text x="810" y="345" text-anchor="middle" fill="#888" font-size="17">species, bacteria + yeasts</text>
                    <circle cx="700" cy="410" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <circle cx="740" cy="435" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <circle cx="780" cy="405" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <circle cx="820" cy="435" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <circle cx="860" cy="410" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <circle cx="900" cy="435" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="1"/>
                    <rect x="150" y="600" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">FROM THE CAUCASUS MOUNTAINS</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">Kefir grains passed down like family heirlooms</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="16">The same grains can live for decades</text>
                </svg>`,
                caption: "Kefir carries roughly ten times the microbial variety of yogurt"
            }
        },
        {
            type: "application",
            title: "Your Fermented-Food Ramp",
            content: "Do not try to jump to six servings tomorrow -- the trial participants ramped up, and so should you. Sudden large doses of fermented food can mean bloating while your gut adjusts.\n\n**Your plan:**\n\n1. **This week: 1 serving a day.** Easiest entry points: live-culture yogurt at breakfast, or swap one soda for a kombucha.\n\n2. **Check your labels.** Refrigerated section only. Look for 'live cultures,' 'raw,' or 'unpasteurized.' Put back anything shelf-stable.\n\n3. **Week 2-3: add a second serving.** Try kefir -- the diversity heavyweight. Blend with fruit if plain is too tangy.\n\n4. **Week 4: attach a ferment to dinner.** A forkful of kimchi or sauerkraut on the side of whatever you already cook. No recipe changes needed.\n\n5. **Keep your fiber.** The evidence says both, not either-or. Beans, oats, and vegetables feed the diversity that fermented foods help build.\n\nIf you have a compromised immune system or a medical condition, check with your doctor before making big dietary changes -- this is education, not medical advice.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR RAMP PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Build up like the trial did</text>
                    <rect x="150" y="160" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="250" y="210" text-anchor="start" fill="#fff" font-size="18">This week: 1 serving a day</text>
                    <rect x="150" y="280" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="330" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="250" y="330" text-anchor="start" fill="#fff" font-size="18">Check labels: refrigerated, live cultures</text>
                    <rect x="150" y="400" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="450" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="250" y="450" text-anchor="start" fill="#fff" font-size="18">Week 2-3: add kefir as serving two</text>
                    <rect x="150" y="520" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="250" y="570" text-anchor="start" fill="#fff" font-size="18">Week 4: kimchi or kraut with dinner</text>
                    <rect x="150" y="640" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="690" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="250" y="690" text-anchor="start" fill="#fff" font-size="18">Keep your fiber: both, not either-or</text>
                    <rect x="200" y="780" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">Slow ramp = comfortable gut</text>
                </svg>`,
                caption: "A four-week ramp from one serving toward the trial's dose"
            }
        },
        {
            type: "concept",
            title: "The Fine Print: What This Trial Cannot Tell You",
            content: "Good science reporting includes the limits, so here they are, plainly.\n\n• **It was small.** 36 people total, roughly 18 per arm. Small trials can produce real findings, but they can also overestimate effects. Replication matters, and larger follow-ups are still accumulating.\n\n• **Everyone was healthy.** These were healthy adults. The trial cannot tell you whether fermented foods help people with IBS, autoimmune disease, or any diagnosis -- those are separate questions needing separate trials.\n\n• **It was short.** Ten weeks tells you about ten weeks. Whether the diversity gains persist, keep growing, or fade after people stop is not fully known.\n\n• **Inflammatory markers are not diseases.** Lower IL-6 is genuinely encouraging, because chronic inflammation underlies many conditions. But the trial measured blood markers, not heart attacks prevented or years of life added.\n\nSo the fair summary: **promising, mechanistically sensible, cheap, safe, and delicious -- but not a miracle, and not medicine.** That combination -- low risk, plausible benefit -- is exactly the category where trying it yourself is reasonable while science catches up.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FINE PRINT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Honest limits of one good study</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">SMALL</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="17">36 people total</text>
                    <text x="300" y="303" text-anchor="middle" fill="#888" font-size="15">Needs replication</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HEALTHY ADULTS ONLY</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="17">Says nothing about</text>
                    <text x="800" y="303" text-anchor="middle" fill="#fff" font-size="17">treating any disease</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">SHORT</text>
                    <text x="300" y="490" text-anchor="middle" fill="#fff" font-size="17">10 weeks measured</text>
                    <text x="300" y="523" text-anchor="middle" fill="#888" font-size="15">Long-term? Unknown</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">MARKERS, NOT DISEASES</text>
                    <text x="800" y="490" text-anchor="middle" fill="#fff" font-size="17">Lower IL-6 is a signal,</text>
                    <text x="800" y="523" text-anchor="middle" fill="#fff" font-size="17">not a cured outcome</text>
                    <rect x="150" y="640" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FAIR SUMMARY</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="18">Promising, cheap, safe -- not a miracle</text>
                </svg>`,
                caption: "Small, short, healthy-adults-only: promising evidence, honestly framed"
            }
        },
        {
            type: "quiz",
            question: "Your friend buys shelf-stable canned sauerkraut and vinegar pickles for gut health. Based on this lesson, what should you tell them?",
            options: [
                { text: "Great choices -- anything sour contains live probiotic cultures", correct: false },
                { text: "Neither delivers live cultures: canning heat kills microbes, and vinegar pickles were never fermented", correct: true },
                { text: "The pickles count but the sauerkraut does not, since cucumbers ferment naturally in the jar", correct: false },
                { text: "Both work as long as they are eaten with a high-fiber meal", correct: false }
            ],
            explanation: "Shelf-stable sauerkraut was heat-treated for preservation, which kills the lactic acid bacteria that made it. And most grocery pickles are cucumbers soaked in vinegar -- sour, but never fermented, so there were no live microbes to begin with. The sour taste is the trap: acidity does not equal living cultures. For the benefits seen in the Stanford trial, look in the refrigerated section for labels saying live, raw, or active cultures.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GROCERY TEST</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Sour taste does not equal live cultures</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which products actually deliver microbes?</text>
                    <rect x="150" y="380" width="380" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SHELF AISLE</text>
                    <text x="340" y="485" text-anchor="middle" fill="#fff" font-size="16">Canned kraut, vinegar pickles</text>
                    <rect x="570" y="380" width="380" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FRIDGE SECTION</text>
                    <text x="760" y="485" text-anchor="middle" fill="#fff" font-size="16">Live kraut, kimchi, kefir</text>
                </svg>`,
                caption: "Can your friend's shopping cart pass the live-culture test?"
            }
        },
        {
            type: "quote",
            content: "The immune system is really set up to be responsive to our environment, and the biggest environmental exposure we have is what we put in our mouths.",
            author: "Christopher Gardner, Stanford, co-author of the fermented-food trial",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="21">'The immune system is really set up to be</text>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="21">responsive to our environment, and the</text>
                    <text x="160" y="300" text-anchor="start" fill="#fff" font-style="italic" font-size="21">biggest environmental exposure we have</text>
                    <text x="160" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="21">is what we put in our mouths.'</text>
                    <text x="940" y="395" text-anchor="end" fill="#8b5cf6" font-size="17">-- Christopher Gardner, Stanford</text>
                    <circle cx="550" cy="650" r="120" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">3 MEALS A DAY</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="17">= 1,000+ immune</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">inputs a year</text>
                </svg>`,
                caption: "Every meal is a message to your immune system"
            }
        }
    ]
}
,
{
    id: 5,
    title: "The Gut-Brain Axis: The Conversation You Never Hear",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Why Does Fear Hit You in the Stomach?",
            content: "Think about the last time you got genuinely bad news. Where did you feel it first?\n\nNot in your head. In your gut. The drop. The clench. The sudden loss of appetite -- or the sudden urgent need for a bathroom.\n\nLanguage figured this out long before science did. You get 'butterflies in your stomach.' You have a 'gut feeling.' Something takes 'guts.' You cannot 'stomach' a person. Nearly every language on Earth wires emotion to the belly, and it turns out that is not poetry. It is anatomy.\n\nYour gut and your brain are in constant, high-bandwidth conversation -- through a dedicated nerve, through your immune system, and through chemicals your gut microbes manufacture around the clock. Most of the traffic flows in a direction that might surprise you: from the gut UP to the brain, not the other way around.\n\nThis lesson maps that conversation: the three channels it runs on, what mouse experiments and human studies actually show, and where the popular story gets ahead of the evidence.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GUT-BRAIN AXIS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A conversation you feel but never hear</text>
                    <circle cx="550" cy="280" r="110" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="290" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">BRAIN</text>
                    <path d="M520 400 L520 620" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="520,400 512,414 528,414" fill="#14b8a6"/>
                    <path d="M580 620 L580 400" stroke="#6366f1" stroke-width="2" stroke-dasharray="8"/>
                    <polygon points="580,620 572,606 588,606" fill="#6366f1"/>
                    <text x="420" y="520" text-anchor="end" fill="#14b8a6" font-size="18">Gut to brain:</text>
                    <text x="420" y="550" text-anchor="end" fill="#14b8a6" font-size="18">heavy traffic</text>
                    <text x="690" y="520" text-anchor="start" fill="#6366f1" font-size="18">Brain to gut:</text>
                    <text x="690" y="550" text-anchor="start" fill="#6366f1" font-size="18">lighter traffic</text>
                    <ellipse cx="550" cy="750" rx="130" ry="100" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="760" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">GUT</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="20">Most of the talking flows upward</text>
                </svg>`,
                caption: "Two organs, one conversation -- and the gut does most of the talking"
            }
        },
        {
            type: "concept",
            title: "Three Channels, One Conversation",
            content: "The gut-brain axis is not one connection. It is three parallel communication channels running at once:\n\n• **Channel 1 -- The vagus nerve.** A physical cable of nerve fibers running from your brainstem down to your gut (and heart, and lungs). Fast, direct, electrical. Think of it as the phone line.\n\n• **Channel 2 -- Immune signaling.** Roughly 70% of your immune system lives in and around your gut. When gut immune cells detect trouble, they release **cytokines** -- signaling proteins that circulate in blood and change how the brain operates. Inflammation in the gut can become 'sickness behavior' in the head: fatigue, low mood, withdrawal. Think of it as the emergency broadcast system.\n\n• **Channel 3 -- Microbial metabolites.** Your gut bacteria manufacture chemicals constantly: **short-chain fatty acids (SCFAs)** like butyrate from fermenting fiber, plus compounds along the **tryptophan pathway** that feed into serotonin and other neuroactive chemistry. These molecules act on nerve endings, immune cells, and hormone-producing gut cells. Think of it as the postal service -- slower, but carrying detailed packages.\n\nThree channels, all running, all the time. You only notice when the message is loud.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE CHANNELS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How gut and brain stay in touch</text>
                    <rect x="80" y="170" width="300" height="300" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">VAGUS NERVE</text>
                    <text x="230" y="275" text-anchor="middle" fill="#fff" font-size="17">Direct nerve cable</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="17">Fast, electrical</text>
                    <text x="230" y="360" text-anchor="middle" fill="#888" font-size="16">The phone line</text>
                    <rect x="400" y="170" width="300" height="300" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">IMMUNE SIGNALS</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="17">Cytokines in blood</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="17">~70% of immunity</text>
                    <text x="550" y="343" text-anchor="middle" fill="#fff" font-size="17">lives in the gut</text>
                    <text x="550" y="390" text-anchor="middle" fill="#888" font-size="16">Emergency broadcast</text>
                    <rect x="720" y="170" width="300" height="300" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">METABOLITES</text>
                    <text x="870" y="275" text-anchor="middle" fill="#fff" font-size="17">SCFAs like butyrate</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="17">Tryptophan pathway</text>
                    <text x="870" y="360" text-anchor="middle" fill="#888" font-size="16">The postal service</text>
                    <path d="M230 470 L500 620" stroke="#14b8a6" stroke-width="2"/>
                    <path d="M550 470 L550 620" stroke="#14b8a6" stroke-width="2"/>
                    <path d="M870 470 L600 620" stroke="#14b8a6" stroke-width="2"/>
                    <circle cx="550" cy="720" r="100" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="730" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">BRAIN</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">All three channels run simultaneously</text>
                </svg>`,
                caption: "Nerve, immune, and chemical channels all converge on the brain"
            }
        },
        {
            type: "concept",
            title: "The Vagus Nerve: 90% Gut-to-Brain",
            content: "Here is the fact that reframes everything: the **vagus nerve**, the main cable between gut and brain, is about **90% afferent** -- meaning roughly nine out of ten fibers carry signals **from the gut UP to the brain**, not commands going down.\n\nSit with that. The organ arrangement you probably imagined -- a CEO brain issuing orders to a servant gut -- is backwards. The wiring looks more like a field reporter (gut) constantly filing dispatches to headquarters (brain), which mostly just listens.\n\nWhat is the gut reporting?\n\n• **Stretch and fullness** -- how much food arrived\n• **Nutrient content** -- sensors detect sugars, fats, and amino acids\n• **Inflammation status** -- is anything wrong down here?\n• **Microbial activity** -- certain bacteria produce compounds that vagal endings respond to\n\nIn animal experiments, some effects of gut bacteria on behavior vanish when the vagus nerve is cut, showing the nerve is a genuine transmission route, not a bystander.\n\nAnd because this is Synthesis, one honest caveat: the exact ratio varies by source and species -- 80-90% is the usual range cited. The direction of the story does not change: the gut talks, the brain listens.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE VAGUS NERVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ninety percent of fibers point UP</text>
                    <circle cx="550" cy="250" r="90" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="260" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">BRAIN</text>
                    <path d="M480 350 L480 680" stroke="#14b8a6" stroke-width="8"/>
                    <polygon points="480,350 468,370 492,370" fill="#14b8a6"/>
                    <path d="M620 680 L620 350" stroke="#6366f1" stroke-width="2"/>
                    <polygon points="620,680 610,662 630,662" fill="#6366f1"/>
                    <rect x="90" y="450" width="300" height="130" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="240" y="503" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="26">~90%</text>
                    <text x="240" y="545" text-anchor="middle" fill="#fff" font-size="17">Gut reporting up</text>
                    <rect x="710" y="450" width="300" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="860" y="503" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">~10%</text>
                    <text x="860" y="545" text-anchor="middle" fill="#fff" font-size="17">Brain commands down</text>
                    <ellipse cx="550" cy="790" rx="130" ry="90" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="800" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">GUT</text>
                    <rect x="150" y="940" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">The gut talks. The brain mostly listens.</text>
                </svg>`,
                caption: "Roughly nine of ten vagal fibers carry gut dispatches upward"
            }
        },
        {
            type: "example",
            title: "You Already Have the Evidence",
            content: "You do not need a lab to verify the gut-brain axis. You have run the experiments yourself.\n\n**The pre-performance stomach.** Before a job interview, a big exam, a first date -- 'butterflies.' That is your brain's threat assessment being broadcast to your gut via the vagus nerve and stress hormones, shunting blood away from digestion and changing gut muscle activity. Your gut is being told: not now, we might need to run.\n\n**Stress diarrhea.** Cramming for finals, a brutal work deadline, grief -- and suddenly your bowels are chaos. Stress hormones like CRF (corticotropin-releasing factor) directly accelerate colon motility. Half of all students seem to discover this during exam week.\n\n**The gut feeling.** You meet someone and something feels off before you can say why. One plausible account: your brain is integrating subtle threat cues below conscious awareness, and part of that computation surfaces as visceral sensation -- vagal and hormonal feedback you experience as a feeling in your torso.\n\n**Appetite loss in grief.** Heartbreak famously kills hunger. The same signaling that makes you feel emotionally gutted -- notice the word -- suppresses digestive priorities.\n\nEveryday life keeps proving the axis exists. Science's job has been explaining the wiring.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EVERYDAY EVIDENCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Experiments you have already run</text>
                    <rect x="80" y="170" width="440" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">BUTTERFLIES</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="17">Interview, exam, date:</text>
                    <text x="300" y="303" text-anchor="middle" fill="#fff" font-size="17">brain alerts gut</text>
                    <rect x="580" y="170" width="440" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">STRESS DIARRHEA</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="17">CRF hormone speeds</text>
                    <text x="800" y="303" text-anchor="middle" fill="#fff" font-size="17">the colon directly</text>
                    <rect x="80" y="400" width="440" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">GUT FEELINGS</text>
                    <text x="300" y="500" text-anchor="middle" fill="#fff" font-size="17">Subconscious threat cues</text>
                    <text x="300" y="533" text-anchor="middle" fill="#fff" font-size="17">felt as visceral sensation</text>
                    <rect x="580" y="400" width="440" height="190" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">GRIEF APPETITE</text>
                    <text x="800" y="500" text-anchor="middle" fill="#fff" font-size="17">Emotional pain suppresses</text>
                    <text x="800" y="533" text-anchor="middle" fill="#fff" font-size="17">digestive priorities</text>
                    <rect x="150" y="660" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="20">Language knew first: gut feeling, gutted,</text>
                    <text x="550" y="732" text-anchor="middle" fill="#888" font-size="17">cannot stomach it, takes guts</text>
                </svg>`,
                caption: "Four everyday experiences that are the gut-brain axis in action"
            }
        },
        {
            type: "quiz",
            question: "About 90% of vagus nerve fibers are afferent. What does that mean for the gut-brain relationship?",
            options: [
                { text: "The brain sends 90% of its commands through the vagus nerve to control digestion", correct: false },
                { text: "Most vagal fibers carry signals from the gut up to the brain -- the gut talks, the brain listens", correct: true },
                { text: "90% of gut bacteria can directly stimulate the brain through the bloodstream", correct: false },
                { text: "The vagus nerve is 90% inactive unless you are digesting a meal", correct: false }
            ],
            explanation: "Afferent fibers carry information TOWARD the brain. With roughly nine of ten vagal fibers pointing upward, the gut is the reporter and the brain is the listener -- the reverse of the top-down hierarchy most people imagine. The tempting wrong answer flips the direction: the brain does send some commands down, but that is the minority of the traffic. The gut files constant dispatches about stretch, nutrients, inflammation, and microbial activity.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">AFFERENT = TOWARD THE BRAIN</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Which way does most vagal traffic flow?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think: who is the reporter, who listens?</text>
                    <circle cx="550" cy="430" r="70" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">BRAIN</text>
                    <path d="M550 520 L550 620" stroke="#14b8a6" stroke-width="6"/>
                    <polygon points="550,520 538,540 562,540" fill="#14b8a6"/>
                    <circle cx="550" cy="700" r="70" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="710" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">GUT</text>
                </svg>`,
                caption: "Which direction carries ninety percent of the traffic?"
            }
        },
        {
            type: "concept",
            title: "The Serotonin Headline -- and the Honest Footnote",
            content: "You have probably heard this one: 'most of your serotonin is made in your gut.' It is true -- roughly **90-95% of the body's serotonin** is produced in the gut, mostly by specialized **enterochromaffin cells** lining the intestine, with gut microbes helping regulate production.\n\nBut here is where pop science takes a shortcut that this lesson will not: **gut serotonin does not travel to your brain and become brain serotonin.** Serotonin cannot cross the **blood-brain barrier**. The brain manufactures its own supply, separately, from the amino acid tryptophan.\n\nSo what does gut serotonin actually do?\n\n• **Regulates gut motility** -- it is a master signal for the muscle contractions that move food along\n• **Activates vagal nerve endings** -- gut serotonin can ring the phone line to the brain, even though the molecule itself stays behind\n• **Talks to immune cells and platelets** locally\n\nAnd the indirect route matters: microbes influence how much **tryptophan** -- the raw ingredient the brain DOES import -- is available and what it gets converted into along the way.\n\nSo the honest version: your gut is a serotonin factory whose product works locally and whose signals travel. Not a mood-chemical pipeline to the skull. The real story is subtler -- and still remarkable.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SEROTONIN TRUTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Made in the gut, but it stays local</text>
                    <ellipse cx="300" cy="330" rx="200" ry="140" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="300" y="290" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">GUT</text>
                    <text x="300" y="335" text-anchor="middle" fill="#fff" font-size="19">90-95% of body</text>
                    <text x="300" y="370" text-anchor="middle" fill="#fff" font-size="19">serotonin made here</text>
                    <text x="300" y="415" text-anchor="middle" fill="#888" font-size="15">Enterochromaffin cells</text>
                    <rect x="560" y="250" width="30" height="200" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="575" y="510" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">BLOOD-BRAIN</text>
                    <text x="575" y="540" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">BARRIER</text>
                    <text x="575" y="575" text-anchor="middle" fill="#888" font-size="15">Serotonin cannot cross</text>
                    <circle cx="830" cy="330" r="130" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="830" y="300" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">BRAIN</text>
                    <text x="830" y="345" text-anchor="middle" fill="#fff" font-size="18">Makes its OWN</text>
                    <text x="830" y="378" text-anchor="middle" fill="#fff" font-size="18">serotonin supply</text>
                    <rect x="80" y="650" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="705" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">GUT SEROTONIN DOES</text>
                    <text x="300" y="750" text-anchor="middle" fill="#fff" font-size="16">Drive gut motility</text>
                    <text x="300" y="783" text-anchor="middle" fill="#fff" font-size="16">Ring the vagal phone line</text>
                    <text x="300" y="816" text-anchor="middle" fill="#fff" font-size="16">Signal immune cells locally</text>
                    <rect x="580" y="650" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="705" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE INDIRECT ROUTE</text>
                    <text x="800" y="750" text-anchor="middle" fill="#fff" font-size="16">Microbes shape tryptophan --</text>
                    <text x="800" y="783" text-anchor="middle" fill="#fff" font-size="16">the ingredient the brain</text>
                    <text x="800" y="816" text-anchor="middle" fill="#fff" font-size="16">imports to make its own</text>
                </svg>`,
                caption: "Gut serotonin acts locally and signals upward -- it never enters the brain"
            }
        },
        {
            type: "example",
            title: "The Germ-Free Mice That Started It All",
            content: "The modern gut-brain field traces back to a landmark experiment. In **2004, Nobuyuki Sudo and colleagues in Japan** studied **germ-free mice** -- animals raised in sterile bubbles with no microbiome at all.\n\nWhen mildly stressed (brief restraint), germ-free mice mounted an **exaggerated stress response**: their **HPA axis** -- the hypothalamus-pituitary-adrenal system that governs stress hormones -- released roughly double the stress hormones of normal mice facing the same situation.\n\nTwo details made this famous:\n\n• **A single bacterial species partially fixed it.** Colonizing the mice with **Bifidobacterium infantis** normalized the stress response.\n• **Timing was everything.** The fix only worked if the bacteria arrived **early in life**. Colonize adult mice, and the exaggerated stress response stuck. A developmental window had closed.\n\nLater experiments went further: transfer the microbiome from a timid mouse strain into a bold strain, and the recipients became measurably more timid -- and vice versa. In mice, aspects of **temperament transferred with the microbes**.\n\nNow the honesty check: mice are not people. Germ-free is an extreme condition no human experiences. What these experiments prove is the principle -- microbes CAN shape stress physiology and behavior in a mammal. Whether and how much they do in you is the harder question, and it is where we go next.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SUDO 2004</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The germ-free mouse experiment</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">GERM-FREE MICE</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">No microbiome at all</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Mild stress led to roughly</text>
                    <text x="290" y="353" text-anchor="middle" fill="#fff" font-size="18">DOUBLE the stress hormones</text>
                    <text x="290" y="405" text-anchor="middle" fill="#888" font-size="16">Exaggerated HPA-axis response</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE PARTIAL FIX</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">Bifidobacterium infantis</text>
                    <text x="810" y="308" text-anchor="middle" fill="#fff" font-size="18">normalized the response</text>
                    <text x="810" y="355" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">But ONLY early in life</text>
                    <text x="810" y="405" text-anchor="middle" fill="#888" font-size="16">A developmental window closed</text>
                    <rect x="150" y="540" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">MICROBIOME SWAPS SWAP BEHAVIOR</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Timid-strain microbes made bold mice timid,</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">and bold-strain microbes made timid mice bolder</text>
                    <rect x="200" y="780" width="700" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">HONESTY CHECK</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="16">Mice prove the principle, not the human dose</text>
                </svg>`,
                caption: "Germ-free mice overreacted to stress -- and one microbe, given early, fixed it"
            }
        },
        {
            type: "concept",
            title: "The Human Evidence: Younger and Messier",
            content: "Human gut-brain research is where you need your skeptic hat -- worn loosely, not cynically.\n\n**The strongest correlational finding:** In 2019, **Mireia Valles-Colomer and colleagues** published in Nature Microbiology an analysis of over 1,000 people in the Belgian Flemish Gut Flora Project (validated in a second Dutch cohort). Two genera of **butyrate-producing bacteria -- Faecalibacterium and Coprococcus -- were consistently depleted in people with depression**, even after controlling for antidepressant use. Butyrate is the anti-inflammatory, gut-lining-feeding molecule you have met before, so a mechanism is at least plausible.\n\nBut correlation cuts both ways: depression changes appetite, diet, sleep, and exercise -- all of which reshape the microbiome. The arrow could point either direction, or both.\n\n**The intervention evidence:** Small trials of **psychobiotics** -- probiotics taken to influence mood -- show mixed results. Some report modest improvements in anxiety or low mood; others find nothing; most are short, small, and use different strains, making them hard to compare. Meta-analyses land on 'possible small effect, more research needed' -- science-speak for genuinely unresolved.\n\nWhere does that leave you? The axis is real. The mouse mechanisms are real. The human mood payoff is plausible but unproven. That is not a disappointing answer -- it is an accurate one, and the next card shows what has better evidence.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HUMAN EVIDENCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Real signals, honest uncertainty</text>
                    <rect x="150" y="160" width="800" height="240" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">VALLES-COLOMER 2019</text>
                    <text x="550" y="258" text-anchor="middle" fill="#fff" font-size="18">1,000+ people, two independent cohorts</text>
                    <text x="550" y="296" text-anchor="middle" fill="#fff" font-size="18">Butyrate producers depleted in depression</text>
                    <text x="550" y="334" text-anchor="middle" fill="#888" font-size="16">Faecalibacterium and Coprococcus</text>
                    <text x="550" y="372" text-anchor="middle" fill="#f59e0b" font-size="16">Correlation -- the arrow could point either way</text>
                    <rect x="150" y="440" width="800" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="495" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">PSYCHOBIOTIC TRIALS</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Small, short, mixed results</text>
                    <text x="550" y="578" text-anchor="middle" fill="#888" font-size="16">Possible small effect -- genuinely unresolved</text>
                    <rect x="80" y="700" width="300" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="755" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">AXIS: REAL</text>
                    <text x="230" y="795" text-anchor="middle" fill="#fff" font-size="15">Anatomy is settled</text>
                    <rect x="400" y="700" width="300" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MICE: PROVEN</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="15">Mechanism works</text>
                    <rect x="720" y="700" width="300" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="755" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">HUMANS: OPEN</text>
                    <text x="870" y="795" text-anchor="middle" fill="#fff" font-size="15">Plausible, unproven</text>
                </svg>`,
                caption: "The evidence ladder: settled anatomy, proven mouse mechanisms, open human questions"
            }
        },
        {
            type: "example",
            title: "The SMILES Trial: Where Diet and Mood Have Real Data",
            content: "While psychobiotic pills remain unproven, whole-diet studies have delivered something stronger.\n\nThe **SMILES trial** (Jacka et al., 2017, Australia) was the first randomized controlled trial to test diet as a **treatment** for depression -- not prevention, treatment.\n\n**The setup:** 67 adults with moderate-to-severe depression, most already on medication or in therapy, were randomized to either:\n\n• **Dietary support**: seven sessions with a dietitian implementing a modified Mediterranean diet -- whole grains, vegetables, fruit, legumes, olive oil, fish, and yes, fermented dairy like yogurt\n• **Social support**: matched time and attention -- friendly conversation sessions, no diet advice\n\n**The result after 12 weeks:** the diet group's depression scores dropped roughly **11 points** on the MADRS scale versus about 4 in the control group. About **32% of the diet group reached remission** versus 8% of controls. The improvement was not explained by weight change.\n\nCaveats, as always: single trial, modest size, participants knew their group, and the diet targets many pathways at once -- microbiome, inflammation, nutrients -- so nobody can say which mattered most.\n\nBut notice the practical shape of this: as an **adjunct to standard care** (never a replacement for it), improving diet quality has actual randomized trial support for mood. Feeding your gut well is one plausible reason why.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SMILES TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Jacka et al., 2017 -- diet as treatment</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">DIET GROUP</text>
                    <text x="290" y="270" text-anchor="middle" fill="#888" font-size="16">Mediterranean-style + dietitian</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">-11 pts</text>
                    <text x="290" y="372" text-anchor="middle" fill="#888" font-size="16">depression score drop</text>
                    <text x="290" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">32%</text>
                    <text x="290" y="460" text-anchor="middle" fill="#888" font-size="16">reached remission</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SOCIAL SUPPORT</text>
                    <text x="810" y="270" text-anchor="middle" fill="#888" font-size="16">Matched time and attention</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">-4 pts</text>
                    <text x="810" y="372" text-anchor="middle" fill="#888" font-size="16">depression score drop</text>
                    <text x="810" y="425" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">8%</text>
                    <text x="810" y="460" text-anchor="middle" fill="#888" font-size="16">reached remission</text>
                    <rect x="150" y="560" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="612" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">12 WEEKS, 67 ADULTS WITH DEPRESSION</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="17">Diet as an ADJUNCT to standard care -- not a replacement</text>
                    <rect x="200" y="750" width="700" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#f59e0b" font-size="17">Caveats: single trial, modest size,</text>
                    <text x="550" y="820" text-anchor="middle" fill="#888" font-size="16">participants knew their group</text>
                </svg>`,
                caption: "Diet quality beat matched social support as an add-on depression treatment"
            }
        },
        {
            type: "application",
            title: "Feeding the Axis: What to Actually Do",
            content: "Given the evidence -- solid anatomy, proven mouse mechanisms, promising-but-early human data -- here is a rational response, calibrated to what we actually know:\n\n1. **Upgrade diet quality first, pills second.** The SMILES trial tested a Mediterranean-style pattern, not a supplement. Whole grains, legumes, vegetables, olive oil, fish, fermented dairy. That is the version with randomized trial support.\n\n2. **Feed your butyrate producers.** The bacteria depleted in depression studies run on fiber. Oats, beans, onions, slightly-cooled potatoes -- daily.\n\n3. **Use your body's calming lever.** Slow exhale-heavy breathing stimulates the vagus nerve -- one gut-brain channel you can influence in 60 seconds. Try 4 counts in, 8 counts out, five times, before a stressful moment.\n\n4. **Notice your own gut-brain data.** For one week, jot down gut symptoms and stress levels side by side. Most people find the correlation obvious once they look.\n\n5. **Keep expectations honest.** Feeding your gut is plausibly mood-supporting, not a treatment for depression. If your mood is genuinely struggling, talk to a professional -- diet worked in SMILES as an add-on to care, not instead of it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FEEDING THE AXIS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five calibrated actions</text>
                    <rect x="150" y="160" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="250" y="210" text-anchor="start" fill="#fff" font-size="18">Diet quality first -- the SMILES pattern</text>
                    <rect x="150" y="280" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="330" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">2.</text>
                    <text x="250" y="330" text-anchor="start" fill="#fff" font-size="18">Daily fiber for butyrate producers</text>
                    <rect x="150" y="400" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="450" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="250" y="450" text-anchor="start" fill="#fff" font-size="18">Slow exhale breathing: 4 in, 8 out, x5</text>
                    <rect x="150" y="520" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="250" y="570" text-anchor="start" fill="#fff" font-size="18">Track gut symptoms vs stress for a week</text>
                    <rect x="150" y="640" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="690" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="250" y="690" text-anchor="start" fill="#fff" font-size="18">Honest expectations: support, not treatment</text>
                    <rect x="200" y="780" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="18">Struggling mood? Talk to a professional.</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="16">Diet is an add-on to care, not a substitute</text>
                </svg>`,
                caption: "Five actions matched to the strength of the evidence"
            }
        },
        {
            type: "quiz",
            question: "About 90-95% of your body's serotonin is made in the gut. Why does this NOT mean gut serotonin directly becomes your brain's mood chemistry?",
            options: [
                { text: "Because gut serotonin is a chemically different molecule from brain serotonin", correct: false },
                { text: "Because serotonin cannot cross the blood-brain barrier -- the brain makes its own supply separately", correct: true },
                { text: "Because stomach acid destroys serotonin before it can reach the bloodstream", correct: false },
                { text: "Because gut serotonin is only produced during digestion, when the brain is inactive", correct: false }
            ],
            explanation: "Serotonin is the same molecule everywhere, but it cannot cross the blood-brain barrier, so the gut's massive supply stays out of the brain, which synthesizes its own from tryptophan. Gut serotonin still matters: it drives gut motility and activates vagal nerve endings that signal the brain. And microbes influence tryptophan availability -- the ingredient the brain does import. The influence is real but indirect, which is exactly the nuance the pop-science shortcut skips.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SEROTONIN SHORTCUT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Made in the gut -- but does it reach the brain?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What does the barrier block?</text>
                    <circle cx="330" cy="480" r="90" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="330" y="475" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">GUT</text>
                    <text x="330" y="508" text-anchor="middle" fill="#fff" font-size="15">90-95%</text>
                    <rect x="520" y="400" width="24" height="160" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="750" cy="480" r="90" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="750" y="475" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">BRAIN</text>
                    <text x="750" y="508" text-anchor="middle" fill="#fff" font-size="15">Own supply</text>
                </svg>`,
                caption: "Why the gut's serotonin factory does not ship to the brain"
            }
        },
        {
            type: "quote",
            content: "The gut is not a silent organ. It is constantly talking to the brain, and the microbes are part of the conversation.",
            author: "John Cryan, neuroscientist, University College Cork",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="250" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="21">'The gut is not a silent organ. It is</text>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="21">constantly talking to the brain, and the</text>
                    <text x="160" y="300" text-anchor="start" fill="#fff" font-style="italic" font-size="21">microbes are part of the conversation.'</text>
                    <text x="940" y="360" text-anchor="end" fill="#8b5cf6" font-size="17">-- John Cryan, University College Cork</text>
                    <circle cx="400" cy="620" r="70" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="400" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">GUT</text>
                    <line x1="480" y1="620" x2="620" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <circle cx="700" cy="620" r="70" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="700" y="630" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">BRAIN</text>
                    <text x="550" y="760" text-anchor="middle" fill="#888" font-size="17">Three channels. Constant traffic. Mostly upward.</text>
                </svg>`,
                caption: "A moment of reflection on the conversation inside you"
            }
        }
    ]
}
,
{
    id: 6,
    title: "IBS: When the Second Brain Misfires",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Most Common Gut Disorder Nobody Talks About",
            content: "Somewhere between 5 and 10 percent of people on Earth are living with it right now. It cancels plans, dictates seating choices in restaurants and classrooms, and turns road trips into bathroom-mapping exercises. Yet many people who have it have never said its name out loud to anyone but a search engine.\n\nIrritable bowel syndrome -- IBS.\n\nFor decades, people with IBS heard some version of 'your tests are normal, it is probably stress' -- with the unspoken implication that it was imaginary. That era is ending. Medicine now classifies IBS as a **disorder of gut-brain interaction**: the hardware is intact, but the communication system you met in the last lesson -- the axis, the second brain, the whole conversation -- is misfiring. Real wiring. Real symptoms. Real, measurable mechanisms.\n\nThis lesson covers what IBS actually is, the red flags that mean it is NOT IBS and needs a doctor promptly, and the honest evidence on what helps -- including a diet protocol with real trial data and, surprisingly, hypnosis that actually works.\n\nOne thing upfront: this is education, not diagnosis. Gut symptoms deserve a real medical evaluation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IBS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">When the gut-brain conversation misfires</text>
                    <circle cx="550" cy="350" r="150" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="330" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="40">5-10%</text>
                    <text x="550" y="380" text-anchor="middle" fill="#fff" font-size="20">of people worldwide</text>
                    <rect x="80" y="600" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="655" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE OLD STORY</text>
                    <text x="300" y="700" text-anchor="middle" fill="#fff" font-size="17">'Tests are normal --</text>
                    <text x="300" y="730" text-anchor="middle" fill="#fff" font-size="17">probably just stress'</text>
                    <rect x="580" y="600" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="655" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE NEW STORY</text>
                    <text x="800" y="700" text-anchor="middle" fill="#fff" font-size="17">A disorder of</text>
                    <text x="800" y="730" text-anchor="middle" fill="#fff" font-size="17">gut-brain interaction</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Real wiring. Real symptoms. Real tools.</text>
                </svg>`,
                caption: "IBS affects one in ten to one in twenty people -- and it is not imaginary"
            }
        },
        {
            type: "concept",
            title: "A Disorder of Gut-Brain Interaction",
            content: "The official framing changed in 2016, when the **Rome Foundation** -- the international body that defines functional gut disorders -- reclassified IBS under **Rome IV** as a **disorder of gut-brain interaction (DGBI)**.\n\nThat phrase is doing precise work. Unpack it:\n\n• **Not structural damage.** In IBS, scopes and scans look normal. There is no visible inflammation, no ulcers, no bleeding lesions. This is what separates IBS from **IBD** (inflammatory bowel disease -- Crohn's and ulcerative colitis), which involves visible, sometimes dangerous tissue damage. Similar initials, very different diseases.\n\n• **Not imaginary either.** 'Normal-looking' is not the same as 'working normally.' In IBS the gut's sensing, signaling, and movement systems malfunction in measurable ways -- researchers can demonstrate heightened nerve sensitivity and altered motility in the lab.\n\n• **The interaction is the problem.** Signals between the gut's own nervous system, the microbiome, the immune system, and the brain are miscalibrated. Volume knobs turned too high, timing off, feedback loops stuck.\n\nAn analogy: IBD is a hardware failure -- damaged components you can photograph. IBS is a software problem -- intact hardware running miscalibrated code. Software problems are invisible in photos, and every bit as real to the user.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IBS IS NOT IBD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Software problem vs hardware damage</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">IBS</text>
                    <text x="290" y="270" text-anchor="middle" fill="#888" font-size="16">Disorder of gut-brain interaction</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">Scopes look normal</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="18">No tissue damage</text>
                    <text x="290" y="405" text-anchor="middle" fill="#fff" font-size="18">Signaling miscalibrated</text>
                    <text x="290" y="465" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">A software problem</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">IBD</text>
                    <text x="810" y="270" text-anchor="middle" fill="#888" font-size="16">Crohn's, ulcerative colitis</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">Visible inflammation</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="18">Real tissue damage</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="18">Can be dangerous</text>
                    <text x="810" y="465" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">A hardware failure</text>
                    <rect x="150" y="600" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">ROME IV, 2016</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">IBS reclassified: disorder of gut-brain interaction</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="16">Normal-looking is not the same as working normally</text>
                </svg>`,
                caption: "IBS: intact hardware, miscalibrated signaling -- fundamentally different from IBD"
            }
        },
        {
            type: "concept",
            title: "Rome IV: How IBS Is Actually Defined",
            content: "Since no scan or blood test can confirm IBS, doctors diagnose it by pattern -- using the **Rome IV criteria**:\n\n**Recurrent abdominal pain, on average at least 1 day per week over the last 3 months**, associated with **two or more** of the following:\n\n• Pain **related to defecation** (often relieved by it, sometimes worsened)\n• A change in **stool frequency** (more often, or less)\n• A change in **stool form** (harder, or looser)\n\nNote what sits at the center: **pain**. Bloating and irregular bowel habits alone do not meet criteria -- pain is the defining feature, which fits the visceral-hypersensitivity mechanism you will meet shortly.\n\nFrom there, IBS is sorted into **subtypes** based on which stool pattern dominates on symptomatic days:\n\n• **IBS-C** -- constipation-predominant\n• **IBS-D** -- diarrhea-predominant\n• **IBS-M** -- mixed, alternating between both\n\nSubtypes matter because treatments differ -- what helps IBS-C can worsen IBS-D. They are also not fixed: many people migrate between subtypes over years.\n\nA diagnosis of exclusion? Partly -- doctors also rule out red-flag conditions first. That checklist is coming two cards from now, and it is the most important list in this lesson.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ROME IV CRITERIA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Diagnosed by pattern, not by scan</text>
                    <rect x="150" y="160" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">THE CORE REQUIREMENT</text>
                    <text x="550" y="258" text-anchor="middle" fill="#fff" font-size="18">Recurrent abdominal PAIN, at least 1 day/week</text>
                    <text x="550" y="292" text-anchor="middle" fill="#888" font-size="16">over the last 3 months, plus 2 of 3 below</text>
                    <rect x="80" y="350" width="300" height="170" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="405" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">RELATED TO</text>
                    <text x="230" y="435" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">DEFECATION</text>
                    <text x="230" y="480" text-anchor="middle" fill="#888" font-size="15">Often relieved by it</text>
                    <rect x="400" y="350" width="300" height="170" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="405" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">STOOL FREQUENCY</text>
                    <text x="550" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">CHANGES</text>
                    <text x="550" y="480" text-anchor="middle" fill="#888" font-size="15">More or less often</text>
                    <rect x="720" y="350" width="300" height="170" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="405" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">STOOL FORM</text>
                    <text x="870" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">CHANGES</text>
                    <text x="870" y="480" text-anchor="middle" fill="#888" font-size="15">Harder or looser</text>
                    <rect x="80" y="590" width="300" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="645" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">IBS-C</text>
                    <text x="230" y="685" text-anchor="middle" fill="#fff" font-size="15">Constipation-dominant</text>
                    <rect x="400" y="590" width="300" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">IBS-D</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="15">Diarrhea-dominant</text>
                    <rect x="720" y="590" width="300" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="645" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">IBS-M</text>
                    <text x="870" y="685" text-anchor="middle" fill="#fff" font-size="15">Mixed, alternating</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="850" text-anchor="middle" fill="#888" font-size="17">Subtypes guide treatment and can shift over time</text>
                </svg>`,
                caption: "Pain plus bowel-habit changes define IBS; the dominant stool pattern sets the subtype"
            }
        },
        {
            type: "concept",
            title: "What Is Actually Going Wrong: Four Mechanisms",
            content: "IBS is probably several overlapping problems wearing one label. The four best-documented mechanisms:\n\n• **Visceral hypersensitivity -- the volume knob problem.** Gut nerves fire pain signals at sensations most people never notice. In balloon-distension studies, people with IBS report pain at pressures that controls barely register. Normal digestion -- gas moving, stretch after a meal -- arrives in consciousness as pain. The gut is not producing more sensation; the nervous system is amplifying it.\n\n• **Motility changes.** The rhythmic contractions that move contents along run too fast (diarrhea), too slow (constipation), or erratically (the IBS-M seesaw).\n\n• **Post-infectious IBS.** Roughly 10% of people who suffer a bout of bacterial gastroenteritis -- food poisoning -- develop IBS afterward, sometimes lasting years. The infection clears; the miscalibration remains. This is some of the strongest evidence that IBS is a real biological process: a documented trigger, a persistent change.\n\n• **Microbiome differences.** IBS microbiomes differ from controls on average -- often less diverse, sometimes with small-intestinal overgrowth patterns -- though findings vary between studies and no single 'IBS signature' has been nailed down.\n\nStress does not cause IBS by itself -- but because the axis is the problem, stress reliably turns the volume up. That is mechanism, not imagination.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR MECHANISMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Overlapping problems, one label</text>
                    <rect x="80" y="170" width="440" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HYPERSENSITIVITY</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="16">Nerve volume knob</text>
                    <text x="300" y="300" text-anchor="middle" fill="#fff" font-size="16">turned way up</text>
                    <text x="300" y="345" text-anchor="middle" fill="#888" font-size="14">Normal gas reads as pain</text>
                    <rect x="580" y="170" width="440" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MOTILITY CHANGES</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="16">Too fast, too slow,</text>
                    <text x="800" y="300" text-anchor="middle" fill="#fff" font-size="16">or erratic rhythm</text>
                    <text x="800" y="345" text-anchor="middle" fill="#888" font-size="14">Drives C, D, and M patterns</text>
                    <rect x="80" y="430" width="440" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="485" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">POST-INFECTIOUS</text>
                    <text x="300" y="530" text-anchor="middle" fill="#fff" font-size="16">~10% after bacterial</text>
                    <text x="300" y="560" text-anchor="middle" fill="#fff" font-size="16">gastroenteritis</text>
                    <text x="300" y="605" text-anchor="middle" fill="#888" font-size="14">Infection gone, wiring changed</text>
                    <rect x="580" y="430" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="485" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MICROBIOME SHIFTS</text>
                    <text x="800" y="530" text-anchor="middle" fill="#fff" font-size="16">Often less diverse</text>
                    <text x="800" y="560" text-anchor="middle" fill="#fff" font-size="16">than controls</text>
                    <text x="800" y="605" text-anchor="middle" fill="#888" font-size="14">No single signature found</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="768" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">STRESS: AMPLIFIER, NOT AUTHOR</text>
                    <text x="550" y="805" text-anchor="middle" fill="#888" font-size="16">It turns the volume up on an already-sensitive system</text>
                </svg>`,
                caption: "Amplified nerves, disordered motility, post-infection changes, microbiome shifts"
            }
        },
        {
            type: "quiz",
            question: "Under Rome IV, IBS is classified as a 'disorder of gut-brain interaction.' What does this classification mean?",
            options: [
                { text: "IBS is primarily psychological -- symptoms are produced by stress and anxiety alone", correct: false },
                { text: "IBS involves visible intestinal inflammation and tissue damage, like Crohn's disease", correct: false },
                { text: "The gut's structure is intact, but its sensing, motility, and brain-signaling systems are measurably miscalibrated", correct: true },
                { text: "IBS is caused by a single identified bacterial infection that never fully clears", correct: false }
            ],
            explanation: "In IBS, scopes and scans look normal -- no visible damage, which distinguishes it from IBD -- yet the gut's signaling systems malfunction in measurable ways: nerves fire pain at normal pressures, motility runs too fast or slow, and gut-brain communication is miscalibrated. The tempting wrong answer is 'just stress': stress amplifies IBS through the gut-brain axis, but it is an amplifier acting on real, demonstrable physiology, not the author of imaginary symptoms.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DISORDER OF GUT-BRAIN INTERACTION</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Not damage. Not imagination. Then what?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think hardware vs software</text>
                    <rect x="200" y="380" width="700" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">HARDWARE: INTACT</text>
                    <text x="550" y="468" text-anchor="middle" fill="#fff" font-size="16">Scopes and scans look normal</text>
                    <rect x="200" y="540" width="700" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SOFTWARE: MISCALIBRATED</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="16">Sensing, motility, and signaling misfire</text>
                </svg>`,
                caption: "What kind of problem is IBS?"
            }
        },
        {
            type: "concept",
            title: "RED FLAGS: When It Is NOT IBS",
            content: "This is the most important card in this lesson. IBS is diagnosed partly by ruling out conditions that need urgent attention -- and certain symptoms are **NOT part of IBS**. If you have any of these, see a doctor promptly. Not to scare you: most turn out to have benign explanations. But they require actual evaluation, not a self-diagnosis of IBS.\n\n**The red flags:**\n\n• **Blood in your stool** -- red or black/tarry\n• **Unintended weight loss** -- pounds dropping without trying\n• **Fever** accompanying gut symptoms\n• **Symptoms that wake you from sleep** -- IBS characteristically quiets at night; pain or diarrhea that wakes you points elsewhere\n• **Onset after age 50** -- new significant bowel symptoms at this age warrant screening\n• **Family history of IBD or colon cancer** -- raises the bar for ruling things out\n• **Anemia** on blood work, or trouble swallowing, or persistent vomiting\n\nNone of these means catastrophe -- hemorrhoids cause visible blood far more often than cancer does. But each one takes 'assume IBS' off the table until a professional has looked.\n\nThe rule is simple: **IBS is a diagnosis you receive from a doctor after evaluation -- never one you assign yourself to avoid making the appointment.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RED FLAGS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">These mean see a doctor -- not IBS</text>
                    <rect x="150" y="150" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="200" text-anchor="start" fill="#fff" font-size="18">Blood in stool -- red or black/tarry</text>
                    <rect x="150" y="250" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="300" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="300" text-anchor="start" fill="#fff" font-size="18">Unintended weight loss</text>
                    <rect x="150" y="350" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="400" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="400" text-anchor="start" fill="#fff" font-size="18">Fever with gut symptoms</text>
                    <rect x="150" y="450" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="500" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="500" text-anchor="start" fill="#fff" font-size="18">Symptoms that wake you from sleep</text>
                    <rect x="150" y="550" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="600" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="600" text-anchor="start" fill="#fff" font-size="18">New onset after age 50</text>
                    <rect x="150" y="650" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="700" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">!</text>
                    <text x="250" y="700" text-anchor="start" fill="#fff" font-size="18">Family history of IBD or colon cancer</text>
                    <rect x="150" y="780" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="828" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">IBS IS A DIAGNOSIS YOU RECEIVE,</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">NOT ONE YOU ASSIGN YOURSELF</text>
                </svg>`,
                caption: "Any of these symptoms means a real medical evaluation, promptly"
            }
        },
        {
            type: "concept",
            title: "The Low-FODMAP Diet: Powerful, and Widely Misused",
            content: "The best-studied dietary treatment for IBS comes from **Monash University** in Australia: the **low-FODMAP diet**.\n\n**FODMAPs** -- fermentable oligosaccharides, disaccharides, monosaccharides, and polyols -- are short-chain carbohydrates that absorb poorly in the small intestine. They pull in water and get rapidly fermented by colon bacteria, producing gas. In a normal gut: unnoticed. In a hypersensitive IBS gut: stretch plus gas equals pain, bloating, and chaos.\n\nHigh-FODMAP foods include onions, garlic, wheat, beans, apples, milk, honey, and sugar-free sweeteners -- healthy foods, mostly. That is the point: IBS symptoms are often triggered by fine foods hitting an oversensitive system.\n\nIn randomized trials, low-FODMAP eating improves symptoms for roughly **50-70%** of people with IBS -- remarkable for a diet.\n\nBut here is what the internet routinely gets wrong: **it is a 3-phase diagnostic protocol, not a forever diet.**\n\n• **Phase 1 -- ELIMINATE** (2-6 weeks): strip out high-FODMAP foods\n• **Phase 2 -- REINTRODUCE**: systematically test each FODMAP group to find YOUR triggers\n• **Phase 3 -- PERSONALIZE**: restrict only what provably bothers you\n\nWhy not stay in Phase 1 forever? Because FODMAPs feed your beneficial microbes -- long-term full restriction measurably starves butyrate producers like Bifidobacteria. Ideally, run the protocol with a **dietitian**: guided patients get better results and fewer nutritional potholes.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LOW-FODMAP: 3 PHASES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A protocol, not a forever diet</text>
                    <rect x="60" y="200" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="255" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">1. ELIMINATE</text>
                    <text x="210" y="300" text-anchor="middle" fill="#fff" font-size="16">2-6 weeks</text>
                    <text x="210" y="335" text-anchor="middle" fill="#fff" font-size="16">Strip high-FODMAP</text>
                    <text x="210" y="365" text-anchor="middle" fill="#fff" font-size="16">foods out</text>
                    <path d="M360 310 L400 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="400,310 388,302 388,318" fill="#14b8a6"/>
                    <rect x="400" y="200" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="255" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">2. REINTRODUCE</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="16">Test each FODMAP</text>
                    <text x="550" y="330" text-anchor="middle" fill="#fff" font-size="16">group systematically</text>
                    <text x="550" y="365" text-anchor="middle" fill="#888" font-size="14">Find YOUR triggers</text>
                    <path d="M700 310 L740 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="740,310 728,302 728,318" fill="#14b8a6"/>
                    <rect x="740" y="200" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="255" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">3. PERSONALIZE</text>
                    <text x="890" y="300" text-anchor="middle" fill="#fff" font-size="16">Restrict only what</text>
                    <text x="890" y="330" text-anchor="middle" fill="#fff" font-size="16">provably bothers you</text>
                    <text x="890" y="365" text-anchor="middle" fill="#888" font-size="14">Widest livable diet</text>
                    <rect x="150" y="490" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="545" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">TRIAL RESULTS: HELPS 50-70%</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="17">Monash University program -- remarkable for a diet</text>
                    <rect x="150" y="680" width="800" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="732" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">WHY NOT FOREVER?</text>
                    <text x="550" y="772" text-anchor="middle" fill="#fff" font-size="17">Full restriction starves your beneficial microbes --</text>
                    <text x="550" y="802" text-anchor="middle" fill="#888" font-size="16">FODMAPs are food for butyrate producers</text>
                </svg>`,
                caption: "Eliminate, reintroduce, personalize -- and never park in phase one"
            }
        },
        {
            type: "example",
            title: "Maya Runs the Protocol",
            content: "Here is what the low-FODMAP protocol looks like in a life, not a paper.\n\nMaya, 28, has had IBS-D for four years -- diagnosed by a gastroenterologist after her red-flag workup came back clean. Lunch out is followed by an afternoon of cramping and urgent bathroom trips often enough that she schedules meetings around it.\n\n**Weeks 1-4 (Eliminate):** Working with a dietitian, she strips high-FODMAP foods: no onion or garlic (they hide in nearly every sauce and stock), wheat bread swapped for sourdough spelt, apples swapped for oranges, milk for lactose-free. By week three, her symptom diary shows cramping down from most days to twice a week. That improvement is the green light for phase two -- no response would have meant FODMAPs are not her problem.\n\n**Weeks 5-12 (Reintroduce):** One FODMAP group at a time, three-day tests, normal diet otherwise. Lactose test: nothing. Wheat: mild. Garlic and onion (fructans): day two ends the test early -- cramps are back.\n\n**Ongoing (Personalize):** Maya's final diet restricts exactly one group -- fructans -- plus moderate wheat portions. Milk is back. Apples are back. Beans are back, in normal portions.\n\nThe payoff of doing all three phases: instead of a joyless forever-diet of fifteen safe foods, she has one real restriction and a gut her microbes can still live well in.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MAYA'S PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Twelve weeks to one real answer</text>
                    <rect x="150" y="160" width="800" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WEEKS 1-4: ELIMINATE</text>
                    <text x="550" y="258" text-anchor="middle" fill="#fff" font-size="17">No onion, garlic, wheat, apples, milk</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">Cramping: most days down to twice a week</text>
                    <rect x="150" y="370" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WEEKS 5-12: REINTRODUCE</text>
                    <text x="550" y="468" text-anchor="middle" fill="#fff" font-size="17">Lactose: fine. Wheat: mild.</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="17">Garlic + onion (fructans): symptoms return</text>
                    <text x="550" y="542" text-anchor="middle" fill="#888" font-size="16">One group at a time, three-day tests</text>
                    <rect x="150" y="610" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ONGOING: PERSONALIZE</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="17">Only fructans restricted -- milk, apples, beans back</text>
                    <text x="550" y="745" text-anchor="middle" fill="#888" font-size="16">One restriction instead of fifteen</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">The reintroduction phase IS the treatment</text>
                </svg>`,
                caption: "Elimination found relief; reintroduction found the single real culprit"
            }
        },
        {
            type: "example",
            title: "The Treatment That Sounds Fake but Is Not: Gut Hypnotherapy",
            content: "If someone told you hypnosis treats a bowel disorder, you would be right to raise an eyebrow. Now look at the data.\n\n**Gut-directed hypnotherapy** -- a structured protocol of guided relaxation and suggestion focused specifically on calming and normalizing gut function -- has been tested in randomized trials for over three decades, beginning with Whorwell's work in the 1980s.\n\nThe standout comparison: in **2016, Simone Peters and colleagues at Monash University** -- the same institution that built the low-FODMAP diet -- ran a randomized trial pitting hypnotherapy directly against their own diet. Result: **gut-directed hypnotherapy improved IBS symptoms about as much as the low-FODMAP diet** -- roughly 70% of both groups improved -- and the benefits held at six-month follow-up.\n\nWhy would hypnosis work on a bowel? Recall the mechanism: IBS pain is largely **visceral hypersensitivity** -- the brain amplifying gut signals. Hypnotherapy appears to retrain that amplification, turning the volume knob back down through the same gut-brain axis that got miscalibrated. It treats the software problem at the software layer.\n\n**Cognitive behavioral therapy (CBT)** for IBS has a similar evidence story, and **peppermint oil** capsules have modest randomized-trial support as an antispasmodic -- a meta-analysis pegs it as beating placebo, with mild heartburn as the main side effect.\n\nNone of this means IBS is in your head. It means the treatment can enter through it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PETERS 2016</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hypnotherapy vs low-FODMAP, head to head</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">GUT-DIRECTED</text>
                    <text x="290" y="268" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">HYPNOTHERAPY</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">~70%</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="16">improved</text>
                    <text x="290" y="435" text-anchor="middle" fill="#fff" font-size="16">Held at 6-month follow-up</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">LOW-FODMAP</text>
                    <text x="810" y="268" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">DIET</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">~70%</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="16">improved</text>
                    <text x="810" y="435" text-anchor="middle" fill="#fff" font-size="16">The reigning champion</text>
                    <rect x="150" y="540" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="592" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">A STATISTICAL TIE</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="17">Retraining the brain's volume knob rivaled changing the food</text>
                    <rect x="80" y="720" width="440" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="770" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">CBT FOR IBS</text>
                    <text x="300" y="810" text-anchor="middle" fill="#fff" font-size="15">Similar strong trial record</text>
                    <rect x="580" y="720" width="440" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="770" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">PEPPERMINT OIL</text>
                    <text x="800" y="810" text-anchor="middle" fill="#fff" font-size="15">Modest RCT support</text>
                </svg>`,
                caption: "Mind-based treatment tied the best diet -- because the axis is the target"
            }
        },
        {
            type: "application",
            title: "The IBS Toolbox: Managed, Not Cured",
            content: "IBS has no cure -- and pretending otherwise sells books, not relief. What exists is a genuinely effective toolbox. If IBS is part of your life (formally diagnosed -- see the red-flag card), here is how to work it:\n\n1. **Get the real diagnosis first.** If you have gut symptoms and have never been evaluated, that appointment is step one. Rule out red flags; know your subtype.\n\n2. **Keep a 2-week symptom diary before changing anything.** Food, stress, sleep, symptoms. Patterns you cannot see day-to-day become obvious on paper -- and it makes any clinician visit twice as productive.\n\n3. **If food seems implicated, do low-FODMAP properly.** All three phases, ideally with a dietitian. Commit to reintroduction from day one -- write the end date down.\n\n4. **Take the brain-side tools seriously.** Gut-directed hypnotherapy (apps like Nerva deliver the Monash protocol digitally) and CBT have trial evidence rivaling the diet. Using them is not an admission that it is in your head -- it is using the axis in reverse.\n\n5. **Modest helpers:** peppermint oil capsules before meals have real, if modest, trial support. Regular sleep and movement lower the gut's stress amplifier.\n\nManaged well, most people with IBS get their calendar back. That is not a cure -- but it is a life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE IBS TOOLBOX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Managed, not cured -- and that works</text>
                    <rect x="150" y="160" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="250" y="210" text-anchor="start" fill="#fff" font-size="18">Real diagnosis first -- rule out red flags</text>
                    <rect x="150" y="280" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="330" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="250" y="330" text-anchor="start" fill="#fff" font-size="18">Two-week symptom diary before changes</text>
                    <rect x="150" y="400" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="450" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="250" y="450" text-anchor="start" fill="#fff" font-size="18">Low-FODMAP: all 3 phases, with a dietitian</text>
                    <rect x="150" y="520" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="250" y="570" text-anchor="start" fill="#fff" font-size="18">Brain-side tools: hypnotherapy, CBT</text>
                    <rect x="150" y="640" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="690" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="250" y="690" text-anchor="start" fill="#fff" font-size="18">Peppermint oil, sleep, regular movement</text>
                    <rect x="200" y="780" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="19">Managed well, you get your calendar back</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="16">Not a cure -- but a life</text>
                </svg>`,
                caption: "Five tools with real evidence, in the order to deploy them"
            }
        },
        {
            type: "quiz",
            question: "Which of these symptoms is a RED FLAG that means 'see a doctor promptly' rather than assuming IBS?",
            options: [
                { text: "Bloating and cramping that reliably worsen during a stressful work week", correct: false },
                { text: "Abdominal pain that improves after a bowel movement", correct: false },
                { text: "Diarrhea and pain that repeatedly wake you from sleep at night", correct: true },
                { text: "Alternating constipation and diarrhea over several months", correct: false }
            ],
            explanation: "IBS characteristically quiets during sleep -- symptoms that repeatedly wake you at night point away from IBS and require medical evaluation, along with blood in stool, unintended weight loss, fever, onset after 50, and family history of IBD or colon cancer. The other three options are classic IBS features: stress-amplified symptoms, pain relieved by defecation (a Rome IV criterion), and the alternating pattern of IBS-M. Red flags do not mean catastrophe -- they mean a professional needs to look.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">IBS PATTERN OR RED FLAG?</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Three of these fit IBS. One does not.</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which one takes self-diagnosis off the table?</text>
                    <rect x="200" y="380" width="700" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">TYPICAL IBS</text>
                    <text x="550" y="468" text-anchor="middle" fill="#fff" font-size="16">Stress-linked, relieved by defecation, alternating</text>
                    <rect x="200" y="540" width="700" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">RED FLAG</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="16">The pattern that breaks the IBS mold</text>
                </svg>`,
                caption: "Can you spot the symptom that is not IBS?"
            }
        },
        {
            type: "quiz",
            question: "Why should the low-FODMAP elimination phase NOT be continued indefinitely, even when it relieves symptoms?",
            options: [
                { text: "Because the body builds tolerance and symptoms always return within weeks", correct: false },
                { text: "Because FODMAPs feed beneficial gut microbes -- long-term full restriction starves butyrate producers", correct: true },
                { text: "Because low-FODMAP foods are too high in calories for long-term health", correct: false },
                { text: "Because elimination only works while supervised in a laboratory setting", correct: false }
            ],
            explanation: "FODMAPs are fermentable carbohydrates -- which means they are food for your beneficial bacteria, including butyrate producers like Bifidobacteria that maintain the gut lining and calm inflammation. Studies show long-term full restriction measurably reduces these populations. That is why the protocol has three phases: eliminate briefly to confirm FODMAPs matter, reintroduce to identify your specific triggers, then personalize so you restrict as little as possible. The reintroduction phase is not optional -- it is the point.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE FOREVER-DIET TRAP</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Elimination works -- so why must it end?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think about who else eats FODMAPs</text>
                    <circle cx="350" cy="470" r="90" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="350" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">RESTRICT ALL,</text>
                    <text x="350" y="490" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">FOREVER</text>
                    <circle cx="750" cy="470" r="90" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="750" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">TEST, THEN</text>
                    <text x="750" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">PERSONALIZE</text>
                    <text x="550" y="640" text-anchor="middle" fill="#888" font-size="17">One path starves your microbes. One does not.</text>
                </svg>`,
                caption: "Why phase one has an expiration date"
            }
        }
    ]
},
{
    id: 7,
    title: "Probiotics, Graded Honestly",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The 60-Billion-Dollar Bet in Your Fridge",
            content: "Walk down any pharmacy aisle and you will see them: bottles promising to 'restore gut balance,' 'boost immunity,' and 'support digestive wellness.' The global probiotic industry is worth more than **60 billion dollars** a year - bigger than the worldwide box office for movies.\n\nHere is the uncomfortable question: how much of that money buys something real?\n\nThe honest answer is more interesting than either extreme. Probiotics are neither miracle nor scam. A handful of specific strains have solid evidence for specific situations - and the vast majority of products on the shelf are supported by little more than a vibe and a green label.\n\nThis lesson is your consumer-protection briefing. By the end, you will know exactly which claims hold up, what the leading gastroenterology association actually recommends, and why the fermented-foods aisle may beat the supplement aisle on evidence per dollar. Not medical advice - just the data, graded honestly.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PROBIOTIC AISLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A 60-billion-dollar industry, graded honestly</text>
                    <rect x="100" y="170" width="900" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">60+ BILLION DOLLARS / YEAR</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="20">Global probiotic market size</text>
                    <rect x="100" y="360" width="430" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">A FEW REAL WINS</text>
                    <text x="315" y="465" text-anchor="middle" fill="#fff" font-size="18">Specific strains, specific</text>
                    <text x="315" y="500" text-anchor="middle" fill="#fff" font-size="18">conditions, decent trials</text>
                    <rect x="570" y="360" width="430" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">A LOT OF MARKETING</text>
                    <text x="785" y="465" text-anchor="middle" fill="#fff" font-size="18">Vague claims, huge CFU</text>
                    <text x="785" y="500" text-anchor="middle" fill="#fff" font-size="18">counts, thin evidence</text>
                    <rect x="150" y="640" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">This lesson: learn to tell the difference</text>
                    <text x="550" y="722" text-anchor="middle" fill="#888" font-size="16">Evidence first, hype never</text>
                </svg>`,
                caption: "The probiotic market: a few real wins buried in a mountain of marketing"
            }
        },
        {
            type: "concept",
            title: "What a Probiotic Actually Is",
            content: "The word gets slapped on everything from yogurt to skincare, but **probiotic** has a precise scientific definition, set by a WHO/FAO expert panel in 2001:\n\n**Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host.**\n\nEvery phrase in that sentence is doing work:\n\n• **Live** - dead bacteria do not count (those are called postbiotics or paraprobiotics)\n• **Adequate amounts** - enough organisms must survive to matter, not a token sprinkle\n• **Demonstrated health benefit** - shown in actual human trials, not assumed\n\nBy this definition, most products marketed as probiotics do not qualify - they contain live bacteria, sure, but no one has ever demonstrated that *those particular strains at that particular dose* do anything for the condition on the label.\n\nA useful mental model: **probiotic is a job title, not a species**. A bacterium earns it by passing clinical trials for a specific use, the way a drug earns approval. Most bacteria in most bottles have never taken the exam.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REAL DEFINITION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">WHO/FAO, 2001 - three tests to pass</text>
                    <rect x="100" y="160" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#fff" font-size="20">Live microorganisms that, in adequate amounts,</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="20">confer a health benefit on the host</text>
                    <rect x="100" y="340" width="280" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="400" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">LIVE</text>
                    <text x="240" y="445" text-anchor="middle" fill="#fff" font-size="17">Dead cells do</text>
                    <text x="240" y="478" text-anchor="middle" fill="#fff" font-size="17">not count</text>
                    <rect x="410" y="340" width="280" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="400" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">ENOUGH</text>
                    <text x="550" y="445" text-anchor="middle" fill="#fff" font-size="17">Adequate dose</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">must survive</text>
                    <rect x="720" y="340" width="280" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="860" y="400" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">PROVEN</text>
                    <text x="860" y="445" text-anchor="middle" fill="#fff" font-size="17">Benefit shown in</text>
                    <text x="860" y="478" text-anchor="middle" fill="#fff" font-size="17">human trials</text>
                    <rect x="150" y="600" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#ffd700" font-size="20">Probiotic is a job title, not a species</text>
                </svg>`,
                caption: "Three requirements: alive, dosed adequately, and proven to help in humans"
            }
        },
        {
            type: "concept",
            title: "Strain-Specific or Meaningless",
            content: "Here is the single most important idea in this lesson: **probiotic evidence is strain-specific and condition-specific**.\n\nAsking 'do probiotics work?' is exactly as meaningless as asking 'do pills work?' Which pill? For what? Aspirin works for headaches, not for infections. Same logic here.\n\nBacterial names have three levels, and the third one is where the evidence lives:\n\n• **Genus** - Lactobacillus (like a last name)\n• **Species** - Lactobacillus rhamnosus (first name)\n• **Strain** - Lactobacillus rhamnosus **GG** (the specific individual, with its own genome)\n\nTwo strains of the same species can behave as differently as two drugs. One strain of E. coli (Nissle 1917) is a studied probiotic; another strain of E. coli (O157:H7) can kill you. Same species. Wildly different organisms.\n\nSo when a label says 'contains Lactobacillus,' that tells you roughly as much as a resume that says 'contains a human.' The question is always: **which strain, at what dose, tested for what condition, in which trial?** If the label cannot answer that, the label is decoration.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STRAIN IS EVERYTHING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Evidence lives at the strain level, not the genus</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">GENUS</text>
                    <text x="200" y="245" text-anchor="start" fill="#fff" font-size="17">Lactobacillus - tells you almost nothing</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="335" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">SPECIES</text>
                    <text x="200" y="365" text-anchor="start" fill="#fff" font-size="17">Lactobacillus rhamnosus - still not enough</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="455" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">STRAIN</text>
                    <text x="200" y="485" text-anchor="start" fill="#fff" font-size="17">L. rhamnosus GG - this is where trials happen</text>
                    <rect x="100" y="560" width="430" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="615" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">E. coli Nissle 1917</text>
                    <text x="315" y="655" text-anchor="middle" fill="#fff" font-size="17">A studied probiotic</text>
                    <text x="315" y="688" text-anchor="middle" fill="#888" font-size="15">Used since World War I</text>
                    <rect x="570" y="560" width="430" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="615" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">E. coli O157:H7</text>
                    <text x="785" y="655" text-anchor="middle" fill="#fff" font-size="17">Dangerous pathogen</text>
                    <text x="785" y="688" text-anchor="middle" fill="#888" font-size="15">Same species, deadly strain</text>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="20">Asking if probiotics work = asking if pills work</text>
                </svg>`,
                caption: "Same species, different strain, completely different organism"
            }
        },
        {
            type: "example",
            title: "The Short List That Actually Delivers",
            content: "So what has real evidence? The honest short list:\n\n**1. Preventing antibiotic-associated diarrhea.** About 1 in 5 people on antibiotics get diarrhea. Two strains - **Saccharomyces boulardii** (a yeast) and **Lactobacillus rhamnosus GG** - have moderate-quality evidence for prevention. The number needed to treat is roughly **10 to 13**: treat 10-13 people, prevent one case. Not magic, but genuinely useful, and Cochrane reviews back it.\n\n**2. Infant colic.** In **breastfed** infants, the strain **Lactobacillus reuteri DSM 17938** reduced crying time in several randomized trials. Evidence in formula-fed infants is much weaker - a perfect example of condition-specificity.\n\n**3. IBS symptoms.** Certain multi-strain products show **modest** improvements in bloating and pain in some trials. Effects are small, inconsistent between products, and hard to predict for any one person.\n\nNotice the pattern: named strain, named condition, measured effect size. That is what real evidence looks like. Nothing here says 'boosts immunity' or 'restores balance' - those phrases appear on labels precisely because they are too vague to be tested or falsified.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST SHORT LIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Named strain + named condition + real trials</text>
                    <rect x="100" y="170" width="900" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">ANTIBIOTIC-ASSOCIATED DIARRHEA</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">S. boulardii and L. rhamnosus GG</text>
                    <text x="550" y="300" text-anchor="middle" fill="#888" font-size="16">Moderate evidence - NNT about 10-13</text>
                    <rect x="100" y="390" width="900" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">INFANT COLIC (BREASTFED)</text>
                    <text x="550" y="485" text-anchor="middle" fill="#fff" font-size="18">L. reuteri DSM 17938 cut crying time</text>
                    <text x="550" y="520" text-anchor="middle" fill="#888" font-size="16">Weak evidence in formula-fed infants</text>
                    <rect x="100" y="610" width="900" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">IBS SYMPTOMS</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">Some multi-strain products, modest effect</text>
                    <text x="550" y="740" text-anchor="middle" fill="#888" font-size="16">Small, inconsistent, product-specific</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="19">Real evidence names the strain and the condition</text>
                </svg>`,
                caption: "Three uses with genuine trial support - note how specific each one is"
            }
        },
        {
            type: "quiz",
            question: "Your friend says 'studies show probiotics improve gut health.' Based on this lesson, what is the sharpest problem with that claim?",
            options: [
                { text: "Probiotics are dangerous, so no studies would show benefits", correct: false },
                { text: "Evidence is strain- and condition-specific, so a blanket claim about probiotics is as empty as saying pills work", correct: true },
                { text: "Only prescription probiotics have ever been studied in humans", correct: false },
                { text: "Studies only exist for yeast-based probiotics, never bacteria", correct: false }
            ],
            explanation: "The claim fails because it treats probiotics as one thing. Evidence exists for specific strains (like L. rhamnosus GG) for specific conditions (like antibiotic-associated diarrhea) - it cannot be generalized to every strain for every purpose, just as aspirin evidence says nothing about antibiotics. Probiotics are not broadly dangerous, and both bacteria and yeasts have been studied, so the other options miss the real issue: specificity.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STRAIN SPECIFICITY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Evidence belongs to one strain, one condition</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Blanket claims about probiotics are untestable</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">ASK YOURSELF</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Which strain? What dose? What condition?</text>
                    <text x="550" y="500" text-anchor="middle" fill="#888" font-size="16">If the claim cannot answer, it is marketing</text>
                </svg>`,
                caption: "Test your understanding of strain-specific evidence"
            }
        },
        {
            type: "concept",
            title: "What the Gastroenterologists Actually Say",
            content: "If probiotics were as powerful as the labels suggest, you would expect the **American Gastroenterological Association** - the professional body for digestive-disease specialists - to recommend them widely. In their **2020 clinical guidelines**, they did nearly the opposite.\n\nAfter reviewing the full evidence base, the AGA concluded:\n\n• For most digestive conditions - including **Crohn's disease, ulcerative colitis, and IBS** - the evidence was **insufficient to recommend probiotics** at all\n• They suggested specific strains only in a few narrow settings, such as preventing a dangerous gut disease (**necrotizing enterocolitis**) in preterm infants and preventing **C. difficile** infection in some patients on antibiotics - and even there, mostly as conditional recommendations based on low-quality evidence\n• For **healthy people**, they found no evidence supporting routine probiotic use - and noted that many people taking daily probiotics are spending money on an unanswered question\n\nThat last point deserves repeating: the leading experts on your digestive system do not recommend daily probiotics for healthy people. The 60-billion-dollar market runs mostly on hope, not on guidelines.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">AGA GUIDELINES, 2020</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the specialist society concluded</text>
                    <rect x="100" y="170" width="900" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">MOST CONDITIONS: INSUFFICIENT EVIDENCE</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">Crohn's, ulcerative colitis, IBS - no</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="18">recommendation could be made</text>
                    <rect x="100" y="380" width="900" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">A FEW NARROW USES ONLY</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="18">Preterm infants, some antibiotic patients -</text>
                    <text x="550" y="508" text-anchor="middle" fill="#fff" font-size="18">specific strains, conditional recommendations</text>
                    <rect x="100" y="590" width="900" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">HEALTHY PEOPLE</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="18">No evidence supporting routine daily use</text>
                    <text x="550" y="718" text-anchor="middle" fill="#888" font-size="16">Money spent on an unanswered question</text>
                </svg>`,
                caption: "The AGA 2020 review: narrow yes, broad no, healthy people not at all"
            }
        },
        {
            type: "concept",
            title: "Transient Visitors, Not New Residents",
            content: "The biggest myth in probiotic marketing is the idea of **colonization** - that swallowed bacteria move in, set up shop, and permanently 'reseed' your gut.\n\nFor most people, most strains, that is not what happens. **Probiotics are tourists, not immigrants.** They pass through, may do useful work in transit, and are gone within days to weeks of your last dose. Whatever benefit they provide generally **stops when you stop taking them**.\n\nA landmark 2018 study by **Eran Zmora and colleagues, published in Cell**, made this vivid. Researchers gave volunteers an 11-strain probiotic and then - unusually - used colonoscopies to sample the gut lining directly instead of trusting stool samples:\n\n• Whether the strains took hold at all was **highly person-specific**\n• Some people were **permissive** - the strains lingered in their gut mucosa\n• Others were outright **resisters** - their existing microbiome and gut environment blocked the newcomers almost completely\n• Stool samples often failed to predict which group someone was in\n\nThe takeaway: even when a strain has good evidence, your personal gut ecosystem decides whether it can even stay long enough to act. One more reason blanket promises on labels cannot be trusted.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TOURISTS, NOT IMMIGRANTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Zmora 2018, Cell - who colonizes, who resists</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">11-STRAIN PROBIOTIC + GUT BIOPSIES</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="17">Sampled the gut lining directly, not just stool</text>
                    <rect x="100" y="350" width="430" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PERMISSIVE</text>
                    <text x="315" y="455" text-anchor="middle" fill="#fff" font-size="17">Strains lingered in</text>
                    <text x="315" y="488" text-anchor="middle" fill="#fff" font-size="17">the gut mucosa</text>
                    <text x="315" y="530" text-anchor="middle" fill="#888" font-size="15">Some people</text>
                    <rect x="570" y="350" width="430" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="410" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">RESISTERS</text>
                    <text x="785" y="455" text-anchor="middle" fill="#fff" font-size="17">Existing microbiome</text>
                    <text x="785" y="488" text-anchor="middle" fill="#fff" font-size="17">blocked the newcomers</text>
                    <text x="785" y="530" text-anchor="middle" fill="#888" font-size="15">Other people</text>
                    <rect x="150" y="650" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="19">Benefits are transient - they stop when you stop</text>
                    <text x="550" y="732" text-anchor="middle" fill="#888" font-size="16">Your gut ecosystem decides who gets to stay</text>
                </svg>`,
                caption: "Colonization is person-specific: permissive guts vs resister guts"
            }
        },
        {
            type: "visual",
            title: "CFU Counts: Big Numbers, Small Meaning",
            content: "Labels shout **billions of CFUs** (colony-forming units) as if more always means better. It does not.\n\n• CFU counts a dose of organisms **at manufacture** - many products contain far fewer live cells by the time you buy them\n• **Survival through stomach acid varies wildly** between strains - a huge dose of a fragile strain can arrive in your intestines mostly dead\n• Clinical trials use specific doses of specific strains - **50 billion CFU of an untested strain has less evidence than 1 billion CFU of a tested one**\n\nCFU is a quantity claim, not a quality claim. It tells you how much was packed, not whether any of it works.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CFU ILLUSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Quantity on the label, question marks in the gut</text>
                    <rect x="100" y="170" width="430" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="315" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">50 BILLION CFU</text>
                    <text x="315" y="272" text-anchor="middle" fill="#fff" font-size="17">Untested strain blend</text>
                    <text x="315" y="305" text-anchor="middle" fill="#fff" font-size="17">Unknown acid survival</text>
                    <text x="315" y="345" text-anchor="middle" fill="#888" font-size="15">Big number, no trials</text>
                    <rect x="570" y="170" width="430" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="785" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">1-10 BILLION CFU</text>
                    <text x="785" y="272" text-anchor="middle" fill="#fff" font-size="17">Named, tested strain</text>
                    <text x="785" y="305" text-anchor="middle" fill="#fff" font-size="17">Dose matched to trials</text>
                    <text x="785" y="345" text-anchor="middle" fill="#888" font-size="15">Smaller number, real data</text>
                    <path d="M340 500 L340 560" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,560 332,548 348,548" fill="#14b8a6"/>
                    <rect x="100" y="470" width="900" height="0" fill="none"/>
                    <rect x="150" y="580" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">STOMACH ACID IS A GAUNTLET</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Survival varies wildly by strain - many</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="18">organisms arrive dead or never arrive</text>
                    <rect x="150" y="810" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="19">CFU measures quantity packed, not quality proven</text>
                </svg>`,
                caption: "A tested strain at trial dose beats an untested strain at any dose"
            }
        },
        {
            type: "example",
            title: "Fermented Foods vs the Supplement Aisle",
            content: "Here is a plot twist: the strongest recent evidence for live microbes in healthy people came not from a supplement, but from **food**.\n\nIn 2021, Stanford researchers **Justin Sonnenburg and Christopher Gardner** ran a 10-week randomized trial (published in Cell) comparing two diets in healthy adults:\n\n• A **high-fiber diet** group\n• A **high-fermented-foods** group - working up to about **6 servings a day** of yogurt, kefir, kimchi, sauerkraut, kombucha, and fermented cottage cheese\n\nThe fermented-foods group showed **increased microbiome diversity** and **decreased markers of inflammation** - 19 inflammatory signaling molecules dropped, including interleukin-6. The high-fiber group got benefits too, but the diversity boost belonged to the fermented arm.\n\nWhy might food beat capsules? Fermented foods deliver live microbes **plus the food matrix** - fibers, fermentation by-products, peptides, and acids that arrive together, the way the microbes evolved to travel. A capsule delivers isolated organisms and filler.\n\nOn evidence per dollar, a tub of plain yogurt or a jar of sauerkraut currently outperforms most of the supplement aisle. It is also dinner.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STANFORD TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sonnenburg and Gardner, 2021 - 10 weeks</text>
                    <rect x="100" y="170" width="430" height="280" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="315" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">HIGH FIBER</text>
                    <text x="315" y="272" text-anchor="middle" fill="#fff" font-size="17">Whole grains, beans,</text>
                    <text x="315" y="305" text-anchor="middle" fill="#fff" font-size="17">fruits, vegetables</text>
                    <text x="315" y="350" text-anchor="middle" fill="#888" font-size="15">Benefits, but diversity</text>
                    <text x="315" y="380" text-anchor="middle" fill="#888" font-size="15">did not clearly rise</text>
                    <rect x="570" y="170" width="430" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="785" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FERMENTED FOODS</text>
                    <text x="785" y="272" text-anchor="middle" fill="#fff" font-size="17">Yogurt, kefir, kimchi,</text>
                    <text x="785" y="305" text-anchor="middle" fill="#fff" font-size="17">sauerkraut - 6 servings/day</text>
                    <text x="785" y="350" text-anchor="middle" fill="#888" font-size="15">Diversity up, 19 inflammation</text>
                    <text x="785" y="380" text-anchor="middle" fill="#888" font-size="15">markers down</text>
                    <rect x="150" y="510" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">WHY FOOD MAY WIN</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="18">Live microbes + fibers + fermentation</text>
                    <text x="550" y="638" text-anchor="middle" fill="#fff" font-size="18">by-products, delivered together</text>
                    <rect x="150" y="730" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#ffd700" font-size="19">Best evidence per dollar: the fermented food aisle</text>
                </svg>`,
                caption: "Six daily servings of fermented foods raised diversity and lowered inflammation"
            }
        },
        {
            type: "concept",
            title: "The Fine Print: Safety and Regulation",
            content: "Two more things the labels will not tell you.\n\n**Probiotics are supplements, not drugs.** In the US, that means no FDA approval before sale, no requirement to prove the bottle contains what it claims, and independent tests have repeatedly found products with **missing strains, wrong strains, or far fewer live cells** than advertised. Third-party verification seals (USP, NSF) help but are rare.\n\n**For most healthy people, probiotics are very safe** - the common side effects are mild gas and bloating that fade in days. But 'very safe for most' is not 'safe for all':\n\n• People who are **immunocompromised**, critically ill, or have **central IV lines** have - rarely - developed bloodstream infections from probiotic organisms, including documented cases of S. boulardii fungemia in ICU patients\n• **Premature infants** should only receive strains under medical supervision\n• If you have a serious illness, the casual 'it cannot hurt' logic does not apply - **ask your doctor first**\n\nNone of this is cause for alarm. It is cause for the same skepticism you would bring to any product that takes your money while promising your health. That is not cynicism - it is consumer protection.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">READ THE FINE PRINT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Regulation gaps and rare but real risks</text>
                    <rect x="100" y="170" width="900" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SUPPLEMENTS, NOT DRUGS</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">No pre-market FDA approval - tests find</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="18">wrong strains and dead cells in many bottles</text>
                    <text x="550" y="335" text-anchor="middle" fill="#888" font-size="15">Look for USP or NSF third-party seals</text>
                    <rect x="100" y="400" width="430" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MOST PEOPLE</text>
                    <text x="315" y="498" text-anchor="middle" fill="#fff" font-size="17">Very safe - worst case</text>
                    <text x="315" y="531" text-anchor="middle" fill="#fff" font-size="17">is mild, brief bloating</text>
                    <rect x="570" y="400" width="430" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="455" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HIGHER RISK</text>
                    <text x="785" y="498" text-anchor="middle" fill="#fff" font-size="17">Immunocompromised, ICU,</text>
                    <text x="785" y="531" text-anchor="middle" fill="#fff" font-size="17">central lines, preemies</text>
                    <text x="785" y="570" text-anchor="middle" fill="#888" font-size="15">Ask a doctor first</text>
                    <rect x="150" y="690" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="745" text-anchor="middle" fill="#6366f1" font-size="19">Skepticism about health products is self-defense</text>
                </svg>`,
                caption: "Safe for most, unregulated for all, risky for a vulnerable few"
            }
        },
        {
            type: "application",
            title: "Your Probiotic Decision Framework",
            content: "Use this the next time you are standing in the supplement aisle:\n\n1. **Food first.** Add one fermented food to your day - plain yogurt, kefir, kimchi, or sauerkraut (refrigerated, labeled 'live cultures'). Best evidence per dollar, plus actual nutrition.\n\n2. **Match strain to situation.** Only buy a supplement for a specific, evidence-backed use - for example, S. boulardii or L. rhamnosus GG when you are prescribed antibiotics. Check that the exact strain name is on the label.\n\n3. **Ignore CFU bragging.** Pick the tested strain at roughly the trial dose, not the biggest number on the shelf.\n\n4. **Set an end date.** Benefits are transient, so match the course to the situation - for antibiotics, during the course and about a week after. If you notice nothing, stop paying.\n\n5. **Check with your doctor** if you are immunocompromised, seriously ill, or shopping for an infant. Rare risks are real risks for the vulnerable.\n\nThat is the whole game: specific strain, specific reason, specific timeframe - or just eat the sauerkraut.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR DECISION FRAMEWORK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps before you spend a dollar</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="210" text-anchor="start" fill="#fff" font-size="18">Food first - one fermented food daily</text>
                    <text x="240" y="243" text-anchor="start" fill="#888" font-size="15">Yogurt, kefir, kimchi, live-culture sauerkraut</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="350" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="350" text-anchor="start" fill="#fff" font-size="18">Supplements only for evidence-backed uses</text>
                    <text x="240" y="383" text-anchor="start" fill="#888" font-size="15">Exact strain name must be on the label</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="490" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="490" text-anchor="start" fill="#fff" font-size="18">Ignore CFU bragging - match the trial dose</text>
                    <text x="240" y="523" text-anchor="start" fill="#888" font-size="15">Tested strain beats big number</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="630" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="630" text-anchor="start" fill="#fff" font-size="18">Set an end date - benefits are transient</text>
                    <text x="240" y="663" text-anchor="start" fill="#888" font-size="15">Notice nothing? Stop paying</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="770" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="770" text-anchor="start" fill="#fff" font-size="18">Immunocompromised or ill? Doctor first</text>
                    <text x="240" y="803" text-anchor="start" fill="#888" font-size="15">Rare risks are real for the vulnerable</text>
                </svg>`,
                caption: "Specific strain, specific reason, specific timeframe - or eat the sauerkraut"
            }
        },
        {
            type: "visual",
            title: "The Whole Lesson on One Card",
            content: "The honest grade sheet: probiotics earn an **A for a few narrow, strain-specific uses**, an **incomplete for most of what the labels claim**, and fermented foods quietly take the top of the class for everyday use. Skepticism plus sauerkraut is a perfectly respectable gut strategy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REPORT CARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Probiotics, graded honestly</text>
                    <rect x="100" y="170" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="230" text-anchor="start" fill="#10b981" font-weight="bold" font-size="30">A-</text>
                    <text x="290" y="222" text-anchor="start" fill="#fff" font-size="18">Specific strains for AAD prevention,</text>
                    <text x="290" y="255" text-anchor="start" fill="#fff" font-size="18">breastfed infant colic</text>
                    <rect x="100" y="350" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="410" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="30">C</text>
                    <text x="290" y="402" text-anchor="start" fill="#fff" font-size="18">Multi-strain products for IBS -</text>
                    <text x="290" y="435" text-anchor="start" fill="#fff" font-size="18">modest, inconsistent effects</text>
                    <rect x="100" y="530" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="590" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="30">F</text>
                    <text x="290" y="582" text-anchor="start" fill="#fff" font-size="18">Daily use for healthy people, vague</text>
                    <text x="290" y="615" text-anchor="start" fill="#fff" font-size="18">balance and immunity claims</text>
                    <rect x="100" y="710" width="900" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="200" y="770" text-anchor="start" fill="#ffd700" font-weight="bold" font-size="30">A</text>
                    <text x="290" y="762" text-anchor="start" fill="#fff" font-size="18">Fermented foods - diversity up,</text>
                    <text x="290" y="795" text-anchor="start" fill="#fff" font-size="18">inflammation down, and it is dinner</text>
                </svg>`,
                caption: "The final grades: narrow supplement wins, fermented foods top of class"
            }
        },
        {
            type: "quiz",
            question: "The Zmora 2018 study in Cell gave volunteers an 11-strain probiotic and sampled their gut lining directly. What did it find about colonization?",
            options: [
                { text: "All participants were permanently colonized within two weeks", correct: false },
                { text: "Colonization was person-specific - some guts were permissive while resisters blocked the strains almost entirely", correct: true },
                { text: "No probiotic strain has ever survived passage through stomach acid", correct: false },
                { text: "Colonization succeeded only in participants who also ate fermented foods", correct: false }
            ],
            explanation: "Zmora and colleagues found colonization was highly person-specific: permissive individuals carried the strains in their gut mucosa, while resisters' existing microbiomes blocked the newcomers - and stool samples often failed to predict which group someone was in. Universal permanent colonization is exactly the marketing myth the study punctured. Some strains do survive stomach acid, and the study did not hinge on fermented food intake, so the other options misstate the findings.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COLONIZATION</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Do swallowed strains actually move in?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Zmora 2018 sampled the gut lining to find out</text>
                    <rect x="150" y="360" width="380" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">PERMISSIVE?</text>
                    <text x="340" y="465" text-anchor="middle" fill="#888" font-size="15">Strains linger a while</text>
                    <rect x="570" y="360" width="380" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">RESISTER?</text>
                    <text x="760" y="465" text-anchor="middle" fill="#888" font-size="15">Newcomers bounced out</text>
                </svg>`,
                caption: "Final check: what really happens after you swallow the capsule"
            }
        }
    ]
},
{
    id: 8,
    title: "The Gut Barrier: Your Inner Border Control",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "One Cell Between You and the Outside World",
            content: "Here is a fact that should keep you up at night - or at least make you respect your lunch: the wall separating the trillions of bacteria in your gut from your bloodstream is, in most places, **exactly one cell thick**.\n\nOne cell. Thinner than a sheet of tissue paper. On one side: partially digested food, bacterial toxins, and a microbial population larger than the number of humans who have ever lived. On the other side: your immune system, your blood supply, you.\n\nThat single-cell layer, plus the mucus that blankets it and the immune army camped just beneath it, is one of the most sophisticated border-control systems in biology. It lets nutrients in, keeps invaders out, and negotiates with trillions of microbes every second of your life.\n\nWhen it works, you never think about it. When it fails - in celiac disease, in inflammatory bowel disease, in critical illness - the consequences are serious. And somewhere in between lies one of the most hyped and misunderstood phrases in wellness: 'leaky gut.' This lesson gives you the real architecture, the real science, and the real verdict.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE CELL THICK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The thinnest border you depend on</text>
                    <rect x="100" y="180" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">GUT INTERIOR</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">Food, microbes, bacterial toxins</text>
                    <rect x="100" y="380" width="900" height="70" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">EPITHELIUM - ONE CELL THICK</text>
                    <rect x="100" y="490" width="900" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">YOUR BODY</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="18">Immune cells, blood supply, you</text>
                    <rect x="150" y="710" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#ffd700" font-size="19">Trillions of microbes, one layer of cells,</text>
                    <text x="550" y="792" text-anchor="middle" fill="#ffd700" font-size="19">and everything depends on the border holding</text>
                </svg>`,
                caption: "A single layer of epithelial cells separates your microbiome from your bloodstream"
            }
        },
        {
            type: "concept",
            title: "The Architecture of the Border",
            content: "Your gut barrier is not one wall - it is a **layered defense system**, like a castle:\n\n• **The mucus blanket** - the moat. A slippery gel layer coats the entire gut lining. In the colon, where bacterial density is highest, there are **two layers**: a loose outer layer where microbes live and feed, and a dense inner layer that is normally almost **sterile** - bacteria are held at arm's length from your cells.\n\n• **The epithelium** - the wall itself. A single sheet of cells that fully renews every **3 to 5 days**, one of the fastest-regenerating tissues in your body. It absorbs nutrients while blocking most everything else.\n\n• **Tight junctions** - the gates. Protein complexes (with names like claudin, occludin, and zonulin-regulated pathways) stitch neighboring cells together. They are not glue - they are **adjustable gates** that can loosen or tighten in response to signals.\n\n• **The immune garrison** - roughly **70 percent of your body's immune cells** are stationed in tissue along the gut, sampling what comes through and deciding: tolerate or attack.\n\nEvery part matters. Thin the mucus, starve the cells, or jam the gates open, and the whole border weakens.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR-LAYER DEFENSE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Moat, wall, gates, and garrison</text>
                    <rect x="150" y="160" width="800" height="120" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#14b8a6" font-weight="bold" font-size="20">MUCUS BLANKET</text>
                    <text x="200" y="248" text-anchor="start" fill="#fff" font-size="17">Two layers in the colon - inner layer near-sterile</text>
                    <rect x="150" y="310" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="360" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">EPITHELIUM</text>
                    <text x="200" y="398" text-anchor="start" fill="#fff" font-size="17">One cell thick, renews every 3-5 days</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="510" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">TIGHT JUNCTIONS</text>
                    <text x="200" y="548" text-anchor="start" fill="#fff" font-size="17">Adjustable protein gates between cells</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="660" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">IMMUNE GARRISON</text>
                    <text x="200" y="698" text-anchor="start" fill="#fff" font-size="17">About 70 percent of immune cells live along the gut</text>
                    <rect x="150" y="790" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="19">Weaken any layer and the whole border suffers</text>
                </svg>`,
                caption: "The gut barrier as a castle: moat, wall, gates, garrison"
            }
        },
        {
            type: "visual",
            title: "Tight Junctions: Gates, Not Glue",
            content: "The crucial detail most people miss: tight junctions are **dynamic**. Your body deliberately opens them a crack to let certain nutrients through (a process called paracellular transport) and tightens them under threat.\n\nThis is why 'gut permeability' is not a defect - **it is a dial**. Every healthy gut is slightly permeable by design. Problems arise when the dial gets stuck open: too much unfiltered traffic crosses, and the immune garrison starts reacting to things it should never meet.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PERMEABILITY IS A DIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Tight junctions open and close on command</text>
                    <rect x="100" y="180" width="180" height="220" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="190" y="300" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">CELL</text>
                    <rect x="320" y="180" width="180" height="220" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="410" y="300" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">CELL</text>
                    <line x1="285" y1="200" x2="315" y2="200" stroke="#8b5cf6" stroke-width="4"/>
                    <line x1="285" y1="250" x2="315" y2="250" stroke="#8b5cf6" stroke-width="4"/>
                    <line x1="285" y1="300" x2="315" y2="300" stroke="#8b5cf6" stroke-width="4"/>
                    <text x="300" y="440" text-anchor="middle" fill="#8b5cf6" font-size="16">Gates closed</text>
                    <rect x="600" y="180" width="180" height="220" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="690" y="300" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">CELL</text>
                    <rect x="820" y="180" width="180" height="220" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="910" y="300" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">CELL</text>
                    <line x1="785" y1="190" x2="815" y2="190" stroke="#ef4444" stroke-width="4"/>
                    <line x1="785" y1="390" x2="815" y2="390" stroke="#ef4444" stroke-width="4"/>
                    <text x="800" y="440" text-anchor="middle" fill="#ef4444" font-size="16">Gates stuck open</text>
                    <rect x="100" y="520" width="430" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="575" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HEALTHY</text>
                    <text x="315" y="615" text-anchor="middle" fill="#fff" font-size="17">Selective traffic -</text>
                    <text x="315" y="648" text-anchor="middle" fill="#fff" font-size="17">nutrients in, junk out</text>
                    <rect x="570" y="520" width="430" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="575" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">STUCK OPEN</text>
                    <text x="785" y="615" text-anchor="middle" fill="#fff" font-size="17">Unfiltered traffic meets</text>
                    <text x="785" y="648" text-anchor="middle" fill="#fff" font-size="17">the immune garrison</text>
                    <rect x="150" y="760" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="19">Every healthy gut is slightly permeable by design</text>
                </svg>`,
                caption: "Tight junctions are adjustable gates - trouble starts when the dial sticks open"
            }
        },
        {
            type: "concept",
            title: "Butyrate: Fuel for the Wall",
            content: "Remember butyrate from the fiber lesson? Here is where it pays off.\n\nThe cells of your colon lining - **colonocytes** - are unusual. Most cells in your body run on glucose from your blood. Colonocytes get **60 to 70 percent of their energy** from a different source entirely: **butyrate**, the short-chain fatty acid your microbes produce when they ferment fiber.\n\nThink about what that means. **The wall of your border is fed by the residents on the other side of it.** Your barrier is quite literally powered by your microbiome - as long as you feed the microbiome fiber.\n\nButyrate does more than fuel the cells:\n\n• Stimulates **mucus production**, thickening the moat\n• Strengthens **tight junction proteins**, keeping the gates well-regulated\n• Calms inflammation locally by signaling to the immune garrison\n• Keeps the colonocyte environment low in oxygen, which favors beneficial oxygen-hating microbes over inflammation-loving ones\n\nStarve your microbes of fiber and the chain breaks: less butyrate, hungrier wall cells, thinner mucus, weaker junctions. Some mucus-degrading bacteria even switch to **eating the mucus layer itself** when fiber runs out - the moat starts draining. Fiber is barrier maintenance.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BUTYRATE PIPELINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fiber in, barrier fuel out</text>
                    <rect x="80" y="200" width="280" height="130" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="255" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FIBER</text>
                    <text x="220" y="295" text-anchor="middle" fill="#fff" font-size="16">You eat it</text>
                    <path d="M360 265 L420 265" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="420,265 408,257 408,273" fill="#14b8a6"/>
                    <rect x="420" y="200" width="280" height="130" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="560" y="255" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">MICROBES</text>
                    <text x="560" y="295" text-anchor="middle" fill="#fff" font-size="16">Ferment it</text>
                    <path d="M700 265 L760 265" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="760,265 748,257 748,273" fill="#14b8a6"/>
                    <rect x="760" y="200" width="280" height="130" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="900" y="255" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BUTYRATE</text>
                    <text x="900" y="295" text-anchor="middle" fill="#fff" font-size="16">Fuels the wall</text>
                    <rect x="100" y="400" width="900" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">COLONOCYTES RUN ON BUTYRATE</text>
                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="18">60-70 percent of their energy comes from microbes</text>
                    <rect x="100" y="580" width="900" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">BONUS EFFECTS</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">Thickens mucus, strengthens tight junctions,</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="17">calms local inflammation</text>
                    <rect x="150" y="810" width="800" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ef4444" font-size="18">No fiber? Some microbes eat the mucus layer</text>
                    <text x="550" y="882" text-anchor="middle" fill="#888" font-size="15">The moat drains when the residents go hungry</text>
                </svg>`,
                caption: "Your barrier is powered by microbial fiber fermentation - feed the pipeline"
            }
        },
        {
            type: "quiz",
            question: "Colonocytes - the cells lining your colon - are unusual because they get 60-70 percent of their energy from which source?",
            options: [
                { text: "Glucose delivered through the bloodstream, like most body cells", correct: false },
                { text: "Butyrate, a short-chain fatty acid made by gut microbes fermenting fiber", correct: true },
                { text: "Dietary fat absorbed directly from passing food", correct: false },
                { text: "Ketones produced by the liver during overnight fasting", correct: false }
            ],
            explanation: "Colonocytes are a striking exception to the body's glucose economy: they draw 60-70 percent of their energy from butyrate, produced when your microbes ferment fiber. That means the gut wall is fueled by the residents it contains - and a fiber-starved microbiome leaves the wall underpowered, with thinner mucus and weaker tight junctions. Glucose is the answer for most other cells, which is exactly what makes this one a favorite exam trap.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">FUELING THE WALL</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">What do colon lining cells actually run on?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Hint: most body cells burn glucose - these do not</text>
                    <rect x="150" y="360" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIBER TO MICROBES TO FUEL</text>
                    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="16">The barrier is fed from the inside</text>
                </svg>`,
                caption: "Mid-lesson check: the barrier's unusual energy source"
            }
        },
        {
            type: "concept",
            title: "Leaky Gut: The Real and the Rebranded",
            content: "Now the controversial part. Type 'leaky gut' into a search engine and you will find it blamed for acne, anxiety, autism, fatigue, brain fog, and just about everything else - usually next to a supplement for sale. Time to separate two very different claims.\n\n**Claim 1: Intestinal permeability can increase. TRUE.** This is real, measurable science. Researchers quantify it with lactulose-mannitol absorption tests and blood markers. Permeability is genuinely increased in:\n\n• **Celiac disease** - gliadin (a wheat protein) triggers junction-loosening via zonulin signaling\n• **Inflammatory bowel disease** (Crohn's, ulcerative colitis)\n• **Critical illness**, severe burns, major surgery\n• Heavy **NSAID** or alcohol use\n\n**Claim 2: 'Leaky gut syndrome' explains your acne, anxiety, and fatigue - and this cleanse will fix it. NOT SUPPORTED.** 'Leaky gut syndrome' as a stand-alone diagnosis is **not recognized** by any major medical body. The home test kits are largely unvalidated. The cure protocols are unproven. And crucially, where increased permeability does appear alongside disease, nobody has established that it is the **cause** rather than a consequence.\n\nThe honest summary: **real phenomenon, fake syndrome**. Permeability matters; the wellness-industry version of it is a story stretched far past the evidence.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO LEAKY GUTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Real phenomenon vs rebranded syndrome</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE SCIENCE</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="17">Increased permeability is</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="17">real and measurable</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="15">Seen in celiac, IBD,</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="15">critical illness, NSAID use</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="15">Measured by lactulose-</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">mannitol tests</text>
                    <text x="290" y="510" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">VERDICT: REAL</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE SYNDROME</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="17">Catch-all diagnosis blamed</text>
                    <text x="810" y="303" text-anchor="middle" fill="#fff" font-size="17">for acne, anxiety, fatigue</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="15">Not recognized by any</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="15">major medical body</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="15">Unvalidated tests,</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">unproven cure protocols</text>
                    <text x="810" y="510" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">VERDICT: NOT SUPPORTED</text>
                    <rect x="150" y="650" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="19">Cause or consequence? For most conditions,</text>
                    <text x="550" y="732" text-anchor="middle" fill="#ffd700" font-size="19">science honestly does not know yet</text>
                </svg>`,
                caption: "Real phenomenon, fake syndrome - hold both ideas at once"
            }
        },
        {
            type: "example",
            title: "What Genuinely Opens the Gates",
            content: "Skip the mystery - research has identified specific things that measurably increase intestinal permeability:\n\n• **NSAIDs** (ibuprofen, naproxen): regular use damages the gut lining directly. Studies using capsule cameras find small-intestine injury in a majority of long-term users - one reason doctors warn against daily ibuprofen habits.\n\n• **Alcohol**: dose-dependently loosens tight junctions and feeds endotoxin into the portal vein - part of how heavy drinking injures the liver.\n\n• **Intense, prolonged exercise**: during events like marathons run in heat, blood is diverted away from the gut to muscles and skin. Studies of endurance athletes show temporary spikes in permeability markers - one reason 'runner's gut' misery is so common. (Moderate exercise, by contrast, is good for the barrier.)\n\n• **Gliadin in celiac disease**: in genetically susceptible people, this wheat protein triggers zonulin release, which jams the junction gates open - a well-mapped molecular pathway.\n\nNotice what this list is: specific exposures with measured effects, mostly temporary and dose-dependent. Notice what it is not: a reason to believe your Tuesday afternoon brain fog is a barrier emergency.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROVEN GATE-OPENERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Measured causes of increased permeability</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NSAIDs</text>
                    <text x="300" y="272" text-anchor="middle" fill="#fff" font-size="16">Direct lining damage in</text>
                    <text x="300" y="302" text-anchor="middle" fill="#fff" font-size="16">most long-term users</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ALCOHOL</text>
                    <text x="800" y="272" text-anchor="middle" fill="#fff" font-size="16">Dose-dependent junction</text>
                    <text x="800" y="302" text-anchor="middle" fill="#fff" font-size="16">loosening, endotoxin leak</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="470" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">EXTREME EXERCISE</text>
                    <text x="300" y="512" text-anchor="middle" fill="#fff" font-size="16">Marathons in heat divert</text>
                    <text x="300" y="542" text-anchor="middle" fill="#fff" font-size="16">blood away from the gut</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="470" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">GLIADIN + CELIAC</text>
                    <text x="800" y="512" text-anchor="middle" fill="#fff" font-size="16">Zonulin pathway jams</text>
                    <text x="800" y="542" text-anchor="middle" fill="#fff" font-size="16">the gates open</text>
                    <rect x="150" y="670" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#10b981" font-size="18">Mostly temporary, mostly dose-dependent</text>
                    <text x="550" y="752" text-anchor="middle" fill="#888" font-size="15">Moderate exercise actually helps the barrier</text>
                </svg>`,
                caption: "Four exposures with measured effects on the barrier - specifics, not vibes"
            }
        },
        {
            type: "example",
            title: "The Emulsifier Experiments",
            content: "Here is a study that changed how many scientists look at the ingredient label.\n\nIn 2015, **Benoit Chassaing** and colleagues published a striking experiment in **Nature**. They fed mice two of the most common food emulsifiers - **carboxymethylcellulose (CMC)** and **polysorbate-80** - at doses meant to mirror processed-food consumption.\n\nThe results in mice:\n\n• The protective **mucus layer thinned**, and bacteria moved closer to the epithelium - the near-sterile inner zone was breached\n• Microbiome composition shifted toward **pro-inflammatory** profiles\n• Mice developed **low-grade inflammation** and metabolic changes; mice genetically prone to colitis got worse colitis\n\nEmulsifiers are in ice cream, salad dressings, packaged breads, and countless other products - they keep textures smooth and shelf-stable.\n\n**The honest caveats:** these were mice, at doses hard to map onto human diets. Human evidence is still emerging - a small 2022 controlled-feeding trial found CMC altered the microbiome and metabolome in some healthy volunteers, with a few showing microbes encroaching into the mucus. Not proof of harm in humans - but enough that 'inert food additive' is no longer a safe assumption. Watch this space.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EMULSIFIER STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Chassaing 2015, Nature - CMC and polysorbate-80</text>
                    <rect x="100" y="170" width="430" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">NORMAL MOUSE GUT</text>
                    <text x="315" y="268" text-anchor="middle" fill="#fff" font-size="16">Thick mucus keeps microbes</text>
                    <text x="315" y="298" text-anchor="middle" fill="#fff" font-size="16">away from the lining</text>
                    <text x="315" y="345" text-anchor="middle" fill="#888" font-size="15">Inner zone near-sterile</text>
                    <rect x="570" y="170" width="430" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">EMULSIFIER-FED</text>
                    <text x="785" y="268" text-anchor="middle" fill="#fff" font-size="16">Mucus thinned, bacteria</text>
                    <text x="785" y="298" text-anchor="middle" fill="#fff" font-size="16">encroached on the wall</text>
                    <text x="785" y="345" text-anchor="middle" fill="#888" font-size="15">Low-grade inflammation</text>
                    <rect x="100" y="470" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WHERE THEY HIDE</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="17">Ice cream, dressings, packaged breads, sauces</text>
                    <rect x="100" y="660" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">HONEST CAVEAT</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="17">Mouse data - human evidence still emerging</text>
                </svg>`,
                caption: "In mice, common emulsifiers thinned mucus and drove inflammation"
            }
        },
        {
            type: "concept",
            title: "Metabolic Endotoxemia: The Slow Leak Hypothesis",
            content: "Why would a slightly leakier barrier matter if you are not seriously ill? Enter one of the most active hypotheses in metabolic research: **metabolic endotoxemia**.\n\nThe outer membrane of many gut bacteria contains a molecule called **LPS (lipopolysaccharide)** - also known as **endotoxin**. Your immune system treats LPS as a five-alarm fire signal; in large amounts it causes septic shock.\n\nThe hypothesis, first laid out by **Patrice Cani and colleagues in 2007**:\n\n• A weakened barrier lets **small amounts of LPS** seep continuously into circulation\n• Not enough to cause sepsis - just enough to keep the immune system **simmering** at a low-grade, chronic level\n• That chronic inflammation is a known contributor to **insulin resistance, obesity-related dysfunction, and cardiovascular risk**\n\nIn Cani's mouse experiments, a high-fat diet raised circulating LPS, and infusing LPS alone was enough to trigger insulin resistance and weight gain. Human studies consistently find higher LPS levels associated with obesity and type 2 diabetes - though association is not proof of causation, and human trials are ongoing.\n\nGrade this one honestly: **plausible mechanism, strong animal data, suggestive human data, verdict pending**. It is a live scientific question - which is exactly why the barrier is worth protecting in the meantime.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SLOW LEAK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Metabolic endotoxemia - Cani 2007 hypothesis</text>
                    <rect x="80" y="180" width="290" height="140" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">WEAK BARRIER</text>
                    <text x="225" y="275" text-anchor="middle" fill="#fff" font-size="15">Gates loosened</text>
                    <path d="M370 250 L430 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,250 418,242 418,258" fill="#14b8a6"/>
                    <rect x="430" y="180" width="290" height="140" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="575" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">LPS SEEPS IN</text>
                    <text x="575" y="275" text-anchor="middle" fill="#fff" font-size="15">Tiny, constant dose</text>
                    <path d="M720 250 L780 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="780,250 768,242 768,258" fill="#14b8a6"/>
                    <rect x="780" y="180" width="240" height="140" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="900" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">SIMMERING</text>
                    <text x="900" y="275" text-anchor="middle" fill="#fff" font-size="15">Chronic inflammation</text>
                    <rect x="100" y="390" width="900" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">DOWNSTREAM SUSPECTS</text>
                    <text x="550" y="485" text-anchor="middle" fill="#fff" font-size="18">Insulin resistance, metabolic dysfunction,</text>
                    <text x="550" y="518" text-anchor="middle" fill="#fff" font-size="18">cardiovascular risk</text>
                    <rect x="100" y="600" width="900" height="170" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">EVIDENCE GRADE</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="17">Strong in mice, suggestive in humans -</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="17">plausible mechanism, verdict pending</text>
                </svg>`,
                caption: "A slow LPS leak keeping inflammation simmering - active research, honest grading"
            }
        },
        {
            type: "application",
            title: "Barrier Maintenance You Can Start Today",
            content: "No cleanse required. The barrier responds to boring, proven inputs:\n\n1. **Feed the wall.** Hit your fiber target (aim toward 25-38 g/day) - butyrate production is barrier maintenance. Beans, oats, vegetables, whole grains.\n\n2. **Add fermented foods.** The Stanford trial's diversity and anti-inflammatory benefits support the barrier's microbial neighborhood.\n\n3. **Audit your NSAID habit.** Occasional ibuprofen is fine for most people; a daily habit deserves a conversation with your doctor about alternatives.\n\n4. **Keep alcohol moderate.** Barrier damage is dose-dependent - every drink you do not have is a small favor to your tight junctions.\n\n5. **Sleep like it matters** - because it does. Poor sleep is linked to increased inflammation and altered gut function; the barrier repairs on a schedule.\n\nWhat you do NOT need: leaky-gut test kits, restrictive cleanse protocols, or 40-dollar 'gut sealing' powders. The unglamorous basics have the evidence. The glamorous stuff has the marketing budget.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BARRIER MAINTENANCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five boring, proven moves</text>
                    <rect x="150" y="160" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="205" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="205" text-anchor="start" fill="#fff" font-size="18">Feed the wall - fiber toward 25-38 g/day</text>
                    <text x="240" y="238" text-anchor="start" fill="#888" font-size="15">Butyrate is barrier fuel</text>
                    <rect x="150" y="290" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="335" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="335" text-anchor="start" fill="#fff" font-size="18">Add fermented foods daily</text>
                    <text x="240" y="368" text-anchor="start" fill="#888" font-size="15">Diversity supports the neighborhood</text>
                    <rect x="150" y="420" width="800" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="465" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="465" text-anchor="start" fill="#fff" font-size="18">Audit daily NSAID habits with your doctor</text>
                    <text x="240" y="498" text-anchor="start" fill="#888" font-size="15">Occasional use is fine for most</text>
                    <rect x="150" y="550" width="800" height="100" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="595" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="595" text-anchor="start" fill="#fff" font-size="18">Keep alcohol moderate - damage is dose-dependent</text>
                    <rect x="150" y="680" width="800" height="100" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="725" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="725" text-anchor="start" fill="#fff" font-size="18">Protect sleep - the barrier repairs on a schedule</text>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ef4444" font-size="18">Not needed: test kits, cleanses, sealing powders</text>
                </svg>`,
                caption: "The evidence backs the boring basics, not the glamorous protocols"
            }
        },
        {
            type: "concept",
            title: "Why 70 Percent of Your Immune System Lives Here",
            content: "One last piece of the architecture deserves its own card: the **immune garrison**.\n\nThe tissue along your gut - called **GALT (gut-associated lymphoid tissue)** - houses roughly **70 percent of your body's immune cells**. That is not an accident of anatomy. It is strategy: the gut is where your body meets the most foreign material, every single day.\n\nThe garrison's hardest job is not fighting - it is **judgment**:\n\n• **Tolerate** food proteins and friendly microbes (attack these and you get food allergies or inflammatory disease)\n• **Attack** genuine pathogens fast and hard\n• Specialized cells called **dendritic cells** even reach through the epithelium to sample gut contents directly, like border agents inspecting cargo\n\nYour microbiome trains this judgment from birth. Germ-free mice - raised with no microbiome at all - develop stunted, poorly calibrated immune systems. Early microbial exposure teaches the garrison what normal looks like, which is one reason childhood microbiome disruption keeps showing up in allergy and autoimmunity research.\n\nSo when you protect the barrier and feed the microbiome, you are not just tending digestion - you are maintaining the training environment for most of your immune system. The border and the army are one system.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE IMMUNE GARRISON</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">GALT - where 70 percent of immune cells live</text>
                    <rect x="100" y="170" width="900" height="140" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">WHY THE GUT?</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">It is where you meet the most foreign material</text>
                    <rect x="100" y="350" width="430" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TOLERATE</text>
                    <text x="315" y="450" text-anchor="middle" fill="#fff" font-size="16">Food proteins and</text>
                    <text x="315" y="480" text-anchor="middle" fill="#fff" font-size="16">friendly microbes</text>
                    <text x="315" y="522" text-anchor="middle" fill="#888" font-size="14">Fail here: allergies</text>
                    <rect x="570" y="350" width="430" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="410" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ATTACK</text>
                    <text x="785" y="450" text-anchor="middle" fill="#fff" font-size="16">Genuine pathogens,</text>
                    <text x="785" y="480" text-anchor="middle" fill="#fff" font-size="16">fast and hard</text>
                    <text x="785" y="522" text-anchor="middle" fill="#888" font-size="14">Fail here: infection</text>
                    <rect x="100" y="630" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE MICROBIOME IS THE TRAINER</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">Germ-free mice grow stunted immune systems -</text>
                    <text x="550" y="756" text-anchor="middle" fill="#fff" font-size="17">early exposure teaches judgment</text>
                </svg>`,
                caption: "The gut immune system's hardest job is judgment, and microbes train it"
            }
        },
        {
            type: "quiz",
            question: "A wellness influencer claims a home test diagnosed their 'leaky gut syndrome' and a supplement protocol cured their acne and anxiety. What is the most scientifically accurate response?",
            options: [
                { text: "Intestinal permeability is entirely fictional, so every part of the claim is false", correct: false },
                { text: "Increased permeability is real and measurable in certain diseases, but leaky gut syndrome as a catch-all diagnosis - and its tests and cures - lacks scientific validation", correct: true },
                { text: "The claim is fully supported - leaky gut syndrome is a recognized diagnosis with validated treatments", correct: false },
                { text: "Permeability only increases in athletes, so the influencer cannot have it", correct: false }
            ],
            explanation: "The nuance is the whole answer. Increased intestinal permeability is genuine, measurable science - documented in celiac disease, IBD, critical illness, and NSAID or alcohol use. But 'leaky gut syndrome' as an explanation for acne, anxiety, and fatigue is not recognized by any major medical body, and the home tests and cure protocols sold for it are largely unvalidated. Dismissing the phenomenon entirely is as wrong as swallowing the syndrome whole - hold both facts at once.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">LEAKY GUT CLAIMS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Real phenomenon vs marketed syndrome</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Can you hold both ideas at once?</text>
                    <rect x="150" y="360" width="380" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">MEASURABLE</text>
                    <text x="340" y="460" text-anchor="middle" fill="#888" font-size="15">Celiac, IBD, illness</text>
                    <rect x="570" y="360" width="380" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">UNVALIDATED</text>
                    <text x="760" y="460" text-anchor="middle" fill="#888" font-size="15">Catch-all cures and kits</text>
                </svg>`,
                caption: "Final check: grading the leaky gut claim honestly"
            }
        }
    ]
},
{
    id: 9,
    title: "What Damages the Garden",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Things That Salt the Soil",
            content: "You have spent eight lessons learning what your inner garden does for you - digesting, training immunity, fueling the barrier, even talking to your brain. Now the harder question: **what tears it up?**\n\nSome of the answers will not surprise you. Some will. One of the biggest microbiome disruptors is also one of medicine's greatest lifesaving inventions. One lurks in the ingredient list of your sandwich bread. One is sitting in your work schedule. And one is the low hum of stress you have stopped noticing.\n\nHere is why this lesson matters: you cannot protect what you cannot name. Once you can spot the genuine threats - and, just as important, ignore the fake ones - you can make trades with your eyes open. Take the antibiotic when you need it. Skip it when you do not. Read the label. Guard your sleep.\n\nAnd hold on to the good news we will end with: this garden is astonishingly good at regrowing. The damage list is real, but almost nothing on it is permanent if you change the inputs.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT SALTS THE SOIL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The five real threats to your inner garden</text>
                    <rect x="80" y="170" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ANTIBIOTICS</text>
                    <text x="300" y="270" text-anchor="middle" fill="#888" font-size="15">Lifesaving and costly</text>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ULTRA-PROCESSED FOOD</text>
                    <text x="800" y="270" text-anchor="middle" fill="#888" font-size="15">Low fiber, additives</text>
                    <rect x="80" y="380" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CHRONIC STRESS</text>
                    <text x="300" y="480" text-anchor="middle" fill="#888" font-size="15">The axis runs both ways</text>
                    <rect x="580" y="380" width="440" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="440" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">LOST SLEEP</text>
                    <text x="800" y="480" text-anchor="middle" fill="#888" font-size="15">Microbes keep a clock too</text>
                    <rect x="80" y="590" width="940" height="170" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">ALCOHOL</text>
                    <text x="550" y="690" text-anchor="middle" fill="#888" font-size="15">Dose-dependent damage to microbes and barrier</text>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#10b981" font-size="19">The good news: this garden regrows</text>
                </svg>`,
                caption: "Five evidence-backed disruptors - and a garden built to recover"
            }
        },
        {
            type: "concept",
            title: "Antibiotics: Lifesaving and Costly",
            content: "Let us start with the most important nuance in this lesson. **Antibiotics are one of the greatest inventions in human history.** Before them, a scratched knee could kill you. Nothing here argues against taking prescribed antibiotics - ever.\n\nBut honesty requires the other half: antibiotics are carpet bombing, not sniper fire. They cannot tell a pathogen from the beneficial microbes you have cultivated for years.\n\nThe clearest picture comes from a 2018 study by **Albert Palleja and colleagues** in Nature Microbiology. Twelve healthy men took a 4-day course of three broad-spectrum antibiotics (meropenem, gentamicin, vancomycin) - a hospital-grade combination. Then researchers tracked their microbiomes for six months:\n\n• Diversity **crashed** immediately - beneficial species plummeted while resistant and opportunistic organisms briefly flourished\n• Recovery took **weeks to months**, with the community mostly rebuilt by **6 months**\n• But not fully: **9 common beneficial species never returned** in the average participant\n\nThat is the real shape of the cost. Not catastrophe - the garden largely regrows - but each course can leave permanent gaps, and repeated courses compound. This is why the goal is never 'avoid antibiotics.' It is **spend them like the precious resource they are**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PALLEJA STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">4 days of antibiotics, 6 months of tracking</text>
                    <rect x="80" y="180" width="290" height="180" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="225" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">DAY 0</text>
                    <text x="225" y="275" text-anchor="middle" fill="#fff" font-size="15">Diverse, healthy</text>
                    <text x="225" y="305" text-anchor="middle" fill="#fff" font-size="15">community</text>
                    <path d="M370 270 L430 270" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,270 418,262 418,278" fill="#14b8a6"/>
                    <rect x="430" y="180" width="290" height="180" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="575" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">DAY 4-8</text>
                    <text x="575" y="275" text-anchor="middle" fill="#fff" font-size="15">Diversity crashes,</text>
                    <text x="575" y="305" text-anchor="middle" fill="#fff" font-size="15">opportunists flourish</text>
                    <path d="M720 270 L780 270" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="780,270 768,262 768,278" fill="#14b8a6"/>
                    <rect x="780" y="180" width="240" height="180" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="900" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">6 MONTHS</text>
                    <text x="900" y="275" text-anchor="middle" fill="#fff" font-size="15">Mostly recovered -</text>
                    <text x="900" y="305" text-anchor="middle" fill="#fff" font-size="15">but not fully</text>
                    <rect x="100" y="420" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="475" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">9 COMMON SPECIES NEVER RETURNED</text>
                    <text x="550" y="515" text-anchor="middle" fill="#fff" font-size="17">Each course can leave permanent gaps</text>
                    <rect x="150" y="630" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="19">Antibiotics are precious - spend them wisely,</text>
                    <text x="550" y="712" text-anchor="middle" fill="#ffd700" font-size="19">never skip them when prescribed</text>
                </svg>`,
                caption: "Palleja 2018: crash, mostly recover by 6 months, 9 species lost"
            }
        },
        {
            type: "example",
            title: "The 30 Percent Problem",
            content: "So how do you 'spend antibiotics wisely' in real life? Consider the numbers.\n\nThe **CDC estimates that about 30 percent of outpatient antibiotic prescriptions in the US are unnecessary** - tens of millions of courses per year. The biggest driver: antibiotics prescribed for **viral infections they cannot possibly treat** - colds, flu, most sore throats, most bronchitis, many sinus and ear infections.\n\nWhy does this happen? Studies of prescribing behavior find a very human answer: **patient pressure**. Doctors report prescribing antibiotics they know are useless because patients expect to leave with something. One study found clinicians were significantly more likely to prescribe antibiotics in the final hour of a clinic shift - decision fatigue in action.\n\nSo the rules of engagement:\n\n• **NEVER skip or shorten a prescribed course** on microbiome grounds - untreated bacterial infections are far more dangerous than any diversity dip\n• **DO ask your doctor**: 'Is this bacterial or viral? Is there a wait-and-see option?' Watchful waiting is standard practice for many ear and sinus infections\n• **DON'T pressure** for antibiotics when told they will not help - you would be paying microbiome costs for zero benefit\n\nYou are not the prescriber. But you are half of every prescribing conversation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 30 PERCENT PROBLEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">CDC: nearly 1 in 3 outpatient courses unnecessary</text>
                    <rect x="100" y="170" width="900" height="90" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <rect x="100" y="170" width="630" height="90" rx="20" fill="rgba(16,185,129,0.25)" stroke="none"/>
                    <text x="415" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">70 PERCENT: APPROPRIATE</text>
                    <rect x="730" y="170" width="270" height="90" rx="20" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="865" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">30 PERCENT</text>
                    <rect x="100" y="310" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="365" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">TOP CULPRIT: VIRAL INFECTIONS</text>
                    <text x="550" y="405" text-anchor="middle" fill="#fff" font-size="17">Colds, flu, most bronchitis - antibiotics do nothing</text>
                    <rect x="100" y="480" width="430" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="535" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ALWAYS</text>
                    <text x="315" y="578" text-anchor="middle" fill="#fff" font-size="16">Finish prescribed courses</text>
                    <text x="315" y="610" text-anchor="middle" fill="#fff" font-size="16">Ask: bacterial or viral?</text>
                    <text x="315" y="642" text-anchor="middle" fill="#fff" font-size="16">Ask about wait-and-see</text>
                    <rect x="570" y="480" width="430" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="535" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NEVER</text>
                    <text x="785" y="578" text-anchor="middle" fill="#fff" font-size="16">Skip doses to save microbes</text>
                    <text x="785" y="610" text-anchor="middle" fill="#fff" font-size="16">Pressure for antibiotics</text>
                    <text x="785" y="642" text-anchor="middle" fill="#fff" font-size="16">Use leftover antibiotics</text>
                    <rect x="150" y="770" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#6366f1" font-size="18">You are half of every prescribing conversation</text>
                </svg>`,
                caption: "Take what you need, question what you do not - the rules of engagement"
            }
        },
        {
            type: "concept",
            title: "Ultra-Processed Food: The NOVA Lens",
            content: "Nutrition researchers increasingly classify food not by nutrients but by **processing level**, using the **NOVA system** developed by Carlos Monteiro's team in Brazil:\n\n• **Group 1 - Unprocessed or minimally processed**: vegetables, fruits, meat, milk, plain yogurt, frozen peas\n• **Group 2 - Processed culinary ingredients**: oil, butter, salt, sugar\n• **Group 3 - Processed foods**: canned beans, cheese, fresh bread - Group 1 foods plus Group 2 ingredients\n• **Group 4 - Ultra-processed foods (UPFs)**: industrial formulations of extracted substances - think soft drinks, packaged snacks, instant noodles, reconstituted meats. If the ingredient list reads like a chemistry set, it is Group 4.\n\nUPFs now supply **more than half of calories** eaten in the US and UK. For your microbiome, they are a triple hit:\n\n• **Almost no fiber** - your microbes' primary food is simply absent\n• **Emulsifiers and additives** - the mucus-thinning suspects from the barrier lesson\n• **They displace real food** - every UPF calorie is a whole-plant calorie not eaten\n\nA landmark NIH inpatient trial by Kevin Hall (2019) found people ate about **500 more calories per day** on an ultra-processed diet than on a matched unprocessed one. The garden analogy writes itself: UPFs are not just poor soil - they replace the compost.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NOVA LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Classify by processing, not just nutrients</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="205" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">GROUP 1: MINIMALLY PROCESSED</text>
                    <text x="200" y="240" text-anchor="start" fill="#fff" font-size="16">Vegetables, fruit, meat, milk, plain yogurt</text>
                    <rect x="150" y="290" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="335" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">GROUP 2: CULINARY INGREDIENTS</text>
                    <text x="200" y="370" text-anchor="start" fill="#fff" font-size="16">Oil, butter, salt, sugar</text>
                    <rect x="150" y="420" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="465" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">GROUP 3: PROCESSED FOODS</text>
                    <text x="200" y="500" text-anchor="start" fill="#fff" font-size="16">Canned beans, cheese, fresh bread</text>
                    <rect x="150" y="550" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="595" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">GROUP 4: ULTRA-PROCESSED</text>
                    <text x="200" y="630" text-anchor="start" fill="#fff" font-size="16">Industrial formulations - the chemistry-set list</text>
                    <rect x="100" y="710" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE TRIPLE HIT</text>
                    <text x="550" y="805" text-anchor="middle" fill="#fff" font-size="17">No fiber + additives + displaces real food -</text>
                    <text x="550" y="837" text-anchor="middle" fill="#fff" font-size="17">over half of US and UK calories are Group 4</text>
                </svg>`,
                caption: "The NOVA classification - your microbiome cares most about Group 4"
            }
        },
        {
            type: "quiz",
            question: "In the Palleja 2018 study, healthy men took a 4-day broad-spectrum antibiotic course. What happened to their microbiomes over the following 6 months?",
            options: [
                { text: "Full recovery within one week - antibiotics have no lasting microbiome effects", correct: false },
                { text: "Mostly recovered by 6 months, but 9 common beneficial species never returned", correct: true },
                { text: "Permanent total collapse - diversity never began to recover", correct: false },
                { text: "No measurable change, because healthy microbiomes resist antibiotics completely", correct: false }
            ],
            explanation: "The study's nuance is the lesson: diversity crashed immediately, recovery took weeks to months, and the community was mostly rebuilt by 6 months - but 9 common beneficial species were still missing. Both extreme answers are wrong: antibiotics are neither harmless to the microbiome nor permanently catastrophic. The garden largely regrows, with gaps. That is exactly why you finish prescribed courses but never take antibiotics for viral infections that they cannot treat.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ANTIBIOTIC RECOVERY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">4 days of antibiotics, then what?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Palleja 2018 tracked 12 men for 6 months</text>
                    <rect x="150" y="360" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">NEITHER HARMLESS NOR HOPELESS</text>
                    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="16">The truth sits between the extremes</text>
                </svg>`,
                caption: "Mid-lesson check: what antibiotics really do to the garden"
            }
        },
        {
            type: "concept",
            title: "Artificial Sweeteners: The Personalized Plot Twist",
            content: "Zero-calorie sweeteners were supposed to be a free lunch: sweetness without sugar. The microbiome research says: it is complicated - and personal.\n\nThe key work comes from **Eran Elinav's lab** at the Weizmann Institute:\n\n• **Suez 2014 (Nature)**: In mice, saccharin altered the microbiome and induced glucose intolerance - transferring the altered microbes into germ-free mice transferred the problem. A small 7-person human pilot hinted the same could happen in people.\n\n• **Suez 2022 (Cell)**: A rigorous follow-up in **120 humans** tested four sweeteners at below-regulatory doses for two weeks. **All four altered the microbiome. Saccharin and sucralose measurably worsened glucose responses** in healthy adults - and crucially, the effect was **person-specific**. Some participants' glucose control degraded; others' did not. Transferring responders' microbes into germ-free mice reproduced their glucose problems - strong evidence the microbes were doing the mediating.\n\nThe honest read:\n\n• Sweeteners are **not inert** - the old assumption that they pass through without biological effect is dead\n• They are **not proven broadly harmful** either - effects were modest, short-term, and hit only some people\n• If you use them to displace large amounts of sugar, that trade may still favor you\n\nSame substance, different gardens, different outcomes. The microbiome keeps teaching the same lesson: **there is no universal answer, only your answer.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NOT INERT, NOT POISON</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Suez 2014 and 2022 - sweeteners meet microbes</text>
                    <rect x="100" y="170" width="900" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">2022 TRIAL: 120 PEOPLE, 4 SWEETENERS</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="17">All four altered the microbiome - saccharin and</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="17">sucralose worsened glucose responses in some</text>
                    <rect x="100" y="380" width="430" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="315" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">RESPONDERS</text>
                    <text x="315" y="482" text-anchor="middle" fill="#fff" font-size="16">Glucose control degraded -</text>
                    <text x="315" y="512" text-anchor="middle" fill="#fff" font-size="16">their microbes transferred</text>
                    <text x="315" y="542" text-anchor="middle" fill="#fff" font-size="16">the problem to mice</text>
                    <rect x="570" y="380" width="430" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="785" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">NON-RESPONDERS</text>
                    <text x="785" y="482" text-anchor="middle" fill="#fff" font-size="16">Little or no glucose</text>
                    <text x="785" y="512" text-anchor="middle" fill="#fff" font-size="16">change from the same</text>
                    <text x="785" y="542" text-anchor="middle" fill="#fff" font-size="16">sweetener dose</text>
                    <rect x="150" y="670" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="19">Same substance, different gardens,</text>
                    <text x="550" y="752" text-anchor="middle" fill="#ffd700" font-size="19">different outcomes - personal, not universal</text>
                </svg>`,
                caption: "Sweeteners alter microbiomes in everyone but glucose in only some"
            }
        },
        {
            type: "concept",
            title: "Stress: The Axis Runs Both Ways",
            content: "The gut-brain lesson showed your microbes talking to your brain. Chronic stress is the conversation flowing the other direction - and it is not subtle.\n\nWhen stress becomes chronic, **cortisol** and the sympathetic nervous system reshape the gut environment:\n\n• **Motility changes** - stress speeds up or slows down transit (hello, stress-related bathroom emergencies and stress constipation), which changes which microbes thrive\n• **Blood flow drops** - the fight-or-flight system diverts blood from digestion to muscles, altering the oxygen and nutrient landscape microbes live in\n• **Mucus production falls and permeability rises** - stress hormones loosen the barrier you just learned to protect\n• **Composition shifts** - animal studies consistently show stress reduces beneficial Lactobacillus populations; human studies of students during exam periods have found similar dips\n\nOne classic demonstration: in a study of mothers under prenatal stress, higher stress hormones tracked with measurably different infant microbiomes - the conversation starts early.\n\nThe practical takeaway is humbling: **you cannot out-supplement chronic stress.** A perfect diet feeding a stress-flooded gut is planting good seeds in a windstorm. Stress management - sleep, movement, social connection, therapy where needed - is microbiome care, even though it never touches your plate.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STRESS HITS THE GUT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cortisol reshapes the microbial landscape</text>
                    <circle cx="550" cy="230" r="70" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="238" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">CORTISOL</text>
                    <line x1="490" y1="290" x2="300" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="610" y1="290" x2="800" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="520" y1="298" x2="380" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="580" y1="298" x2="720" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MOTILITY SHIFTS</text>
                    <text x="300" y="485" text-anchor="middle" fill="#fff" font-size="15">Transit speeds or stalls</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">BLOOD FLOW DROPS</text>
                    <text x="800" y="485" text-anchor="middle" fill="#fff" font-size="15">Digestion gets deprioritized</text>
                    <rect x="80" y="630" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="685" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">BARRIER LOOSENS</text>
                    <text x="300" y="725" text-anchor="middle" fill="#fff" font-size="15">Less mucus, more permeability</text>
                    <rect x="580" y="630" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="685" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">MICROBES SHIFT</text>
                    <text x="800" y="725" text-anchor="middle" fill="#fff" font-size="15">Beneficial species decline</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="19">You cannot out-supplement chronic stress</text>
                </svg>`,
                caption: "Four routes from chronic stress to a damaged garden"
            }
        },
        {
            type: "example",
            title: "Night Shifts and Nightcaps",
            content: "Two everyday exposures round out the damage list - one from your schedule, one from your glass.\n\n**Circadian disruption.** Your microbes keep a daily rhythm - some species' populations oscillate with your feeding and sleeping cycles. Break the rhythm and you break their schedule:\n\n• In a striking 2014 study from the Elinav lab, mice subjected to **jet-lag conditions** developed dysbiosis, glucose intolerance, and weight gain - and transplanting their microbes into normal mice transferred the metabolic problems\n• The same paper found jet-lagged **humans'** microbiomes shifted toward profiles associated with metabolic disease, partially reversing after recovery\n• Epidemiology consistently finds **shift workers** carry elevated rates of obesity, diabetes, and GI disorders - microbiome disruption is one plausible contributing pathway\n\n**Alcohol.** The dose makes the poison, literally:\n\n• Heavy drinking reliably produces **dysbiosis, increased permeability, and endotoxin leakage** - a documented chain in alcoholic liver disease\n• Moderate drinking is murkier; some studies suggest red wine polyphenols may even feed beneficial microbes - though no doctor prescribes merlot\n\nIf you work nights: you cannot always choose your shift, but consistent meal timing, protected sleep blocks, and extra attention to diet quality are the levers you do control.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CLOCKS AND GLASSES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Circadian disruption and alcohol, graded</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">BROKEN CLOCKS</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="16">Microbes oscillate daily -</text>
                    <text x="290" y="300" text-anchor="middle" fill="#fff" font-size="16">jet lag broke the rhythm</text>
                    <text x="290" y="345" text-anchor="middle" fill="#888" font-size="15">Jet-lagged mouse microbes</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="15">transferred glucose problems</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="15">Shift workers: higher rates of</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="15">obesity, diabetes, GI issues</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">ALCOHOL</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="16">Dose-dependent damage:</text>
                    <text x="810" y="300" text-anchor="middle" fill="#fff" font-size="16">heavy use is unambiguous</text>
                    <text x="810" y="345" text-anchor="middle" fill="#888" font-size="15">Dysbiosis, permeability,</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="15">endotoxin to the liver</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="15">Moderate use: murkier -</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="15">no doctor prescribes merlot</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">SHIFT WORKER LEVERS</text>
                    <text x="550" y="698" text-anchor="middle" fill="#fff" font-size="16">Consistent meal timing, protected sleep, diet quality</text>
                </svg>`,
                caption: "Your microbes keep a schedule and count your drinks"
            }
        },
        {
            type: "visual",
            title: "The Damage Dashboard",
            content: "The full threat list on one screen, ranked by how strong the human evidence is. Notice what is NOT here: gluten for people without celiac disease, lectins, 'toxins' - the villains of wellness marketing did not make the evidence cut.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DAMAGE DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ranked by strength of human evidence</text>
                    <rect x="150" y="160" width="800" height="105" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="205" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">STRONG: ANTIBIOTICS</text>
                    <text x="200" y="240" text-anchor="start" fill="#fff" font-size="15">Direct human trials - crash, partial recovery, lost species</text>
                    <rect x="150" y="295" width="800" height="105" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="340" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">STRONG: HEAVY ALCOHOL</text>
                    <text x="200" y="375" text-anchor="start" fill="#fff" font-size="15">Dysbiosis, permeability, endotoxemia - well documented</text>
                    <rect x="150" y="430" width="800" height="105" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="475" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">MODERATE: ULTRA-PROCESSED DIETS</text>
                    <text x="200" y="510" text-anchor="start" fill="#fff" font-size="15">Low fiber proven - additive effects strongest in animals</text>
                    <rect x="150" y="565" width="800" height="105" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="610" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">MODERATE: CIRCADIAN DISRUPTION</text>
                    <text x="200" y="645" text-anchor="start" fill="#fff" font-size="15">Strong mechanism + shift-worker epidemiology</text>
                    <rect x="150" y="700" width="800" height="105" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="745" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">EMERGING: STRESS, SWEETENERS</text>
                    <text x="200" y="780" text-anchor="start" fill="#fff" font-size="15">Real effects shown - size and universality still open</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#10b981" font-size="17">Not on the list: gluten without celiac, lectins, vague toxins</text>
                    <text x="550" y="925" text-anchor="middle" fill="#888" font-size="14">Wellness villains that did not make the evidence cut</text>
                </svg>`,
                caption: "The real threats ranked - and the fake ones left off"
            }
        },
        {
            type: "application",
            title: "Your Damage Audit",
            content: "Turn the threat list into a 10-minute personal audit:\n\n1. **Count your recent antibiotic courses.** More than one in the past year? Nothing to panic about - but double down on fiber and fermented foods during and after any future course, and always ask the bacterial-or-viral question.\n\n2. **Run the NOVA test on your kitchen.** Pick your five most-eaten packaged foods and read the ingredient lists. Chemistry-set lists (emulsifiers like polysorbate-80 or carboxymethylcellulose, plus sweeteners) mark your Group 4 exposure. Swap the worst offender for a Group 1-3 alternative.\n\n3. **Name your stress honestly.** If you have had a simmering-stress month, treat one recovery behavior - a daily walk, a fixed bedtime, ten minutes of anything that downshifts you - as gut care, not indulgence.\n\n4. **Count drinks per week** - not per occasion. The barrier responds to the total dose.\n\n5. **Check your rhythm.** Wildly different sleep and meal times between weekdays and weekends is mini jet lag, weekly. Pick consistent meal windows first - they are the easiest lever.\n\nNo perfection required. The goal is knowing which of the five levers is YOUR biggest one - most people find one obvious standout.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR DAMAGE AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ten minutes, five checks, one standout lever</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="210" text-anchor="start" fill="#fff" font-size="18">Count antibiotic courses this year</text>
                    <text x="240" y="243" text-anchor="start" fill="#888" font-size="15">Fiber + fermented foods around any future course</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="350" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="350" text-anchor="start" fill="#fff" font-size="18">NOVA-test your five most-eaten packaged foods</text>
                    <text x="240" y="383" text-anchor="start" fill="#888" font-size="15">Swap the worst Group 4 offender</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="490" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="490" text-anchor="start" fill="#fff" font-size="18">Name your stress - schedule one recovery behavior</text>
                    <text x="240" y="523" text-anchor="start" fill="#888" font-size="15">It is gut care, not indulgence</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="630" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="630" text-anchor="start" fill="#fff" font-size="18">Count drinks per week, not per occasion</text>
                    <text x="240" y="663" text-anchor="start" fill="#888" font-size="15">The barrier responds to total dose</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="770" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="770" text-anchor="start" fill="#fff" font-size="18">Check weekday vs weekend rhythm drift</text>
                    <text x="240" y="803" text-anchor="start" fill="#888" font-size="15">Consistent meal windows are the easy lever</text>
                </svg>`,
                caption: "Find your one standout lever - perfection not required"
            }
        },
        {
            type: "concept",
            title: "The Garden Regrows",
            content: "End on the most hopeful finding in microbiome science: **responsiveness cuts both ways**. The same plasticity that lets damage happen lets repair happen - fast.\n\nThe landmark demonstration is **Lawrence David's 2014 study in Nature**. Volunteers switched to an entirely animal-based diet (meats, eggs, cheeses) or an entirely plant-based one. Their microbiomes shifted measurably **within 24 to 48 hours** - species abundances, gene expression, bile-tolerant organisms blooming on the animal diet. When volunteers returned to normal eating, their microbiomes swung back within days.\n\nWhat this means for your damage list:\n\n• A round of antibiotics, a stressful season, a junk-food vacation - none of it is a life sentence. The community begins responding to better inputs **within days**\n• Structure takes longer than composition: full diversity recovery after major disruption takes **weeks to months**, and as Palleja showed, a few species may not return\n• The garden regrows toward whatever you consistently feed it - which is why the boring daily inputs beat any dramatic intervention\n\nYou will never have a pristine microbiome. Nobody does. What you can have is a resilient one - diverse enough, well-fed enough, and rhythmic enough to absorb life's hits and regrow. That has been the entire point of this book so far: **you are not the garden's victim. You are its gardener.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GARDEN REGROWS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">David 2014 - diet shifts show within days</text>
                    <rect x="80" y="180" width="290" height="170" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">DISRUPTION</text>
                    <text x="225" y="275" text-anchor="middle" fill="#fff" font-size="15">Antibiotics, stress,</text>
                    <text x="225" y="305" text-anchor="middle" fill="#fff" font-size="15">junk-food stretch</text>
                    <path d="M370 265 L430 265" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,265 418,257 418,273" fill="#14b8a6"/>
                    <rect x="430" y="180" width="290" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="575" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">BETTER INPUTS</text>
                    <text x="575" y="275" text-anchor="middle" fill="#fff" font-size="15">Fiber, ferments,</text>
                    <text x="575" y="305" text-anchor="middle" fill="#fff" font-size="15">sleep, rhythm</text>
                    <path d="M720 265 L780 265" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="780,265 768,257 768,273" fill="#14b8a6"/>
                    <rect x="780" y="180" width="240" height="170" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="900" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">REGROWTH</text>
                    <text x="900" y="275" text-anchor="middle" fill="#fff" font-size="15">Begins within</text>
                    <text x="900" y="305" text-anchor="middle" fill="#fff" font-size="15">days</text>
                    <rect x="100" y="420" width="900" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="475" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE TIMELINE</text>
                    <text x="550" y="515" text-anchor="middle" fill="#fff" font-size="17">Composition shifts in 24-48 hours -</text>
                    <text x="550" y="548" text-anchor="middle" fill="#fff" font-size="17">full diversity recovery takes weeks to months</text>
                    <rect x="150" y="640" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="20">You are not the garden's victim.</text>
                    <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="20">You are its gardener.</text>
                </svg>`,
                caption: "Damage is rarely a life sentence - the community responds to inputs in days"
            }
        },
        {
            type: "quiz",
            question: "In the Suez 2022 trial, 120 healthy adults consumed artificial sweeteners for two weeks. Which statement best captures the findings?",
            options: [
                { text: "All sweeteners caused severe glucose problems in every participant, proving they are toxic", correct: false },
                { text: "Sweeteners passed through everyone with zero biological effect, confirming they are inert", correct: false },
                { text: "All four sweeteners altered microbiomes, and saccharin and sucralose worsened glucose responses - but only in some people, a person-specific effect", correct: true },
                { text: "Only participants who also ate sugar showed any microbiome changes", correct: false }
            ],
            explanation: "The nuance is the finding: all four sweeteners changed participants' microbiomes, and saccharin and sucralose measurably worsened glucose responses - but only in some individuals. Transferring responders' microbes into germ-free mice reproduced the glucose problems, implicating the microbiome as the mediator. So sweeteners are neither proven universally harmful nor biologically inert - the two extreme options fail. Person-specific effects are becoming the signature theme of microbiome science.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SWEETENER SCIENCE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">120 people, 4 sweeteners, 2 weeks</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did Suez 2022 actually show?</text>
                    <rect x="150" y="360" width="800" height="160" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">NEITHER INERT NOR UNIVERSALLY TOXIC</text>
                    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="16">Person-specific effects, mediated by microbes</text>
                </svg>`,
                caption: "Final check: reading sweetener evidence without the extremes"
            }
        }
    ]
},
{
    id: 10,
    title: "Beyond Digestion: Gut, Immunity, Weight & Skin",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Organ That Moonlights Everywhere",
            content: "Quick question: where does most of your immune system live? Not your bone marrow. Not your lymph nodes. Roughly **70 percent of your immune cells** sit in the walls of your gut, in a network called **gut-associated lymphoid tissue (GALT)**.\n\nThat single fact changes everything about how you should think about this organ. Your gut isn't just a food tube -- it's a training academy for immunity, a chemical messenger to your fat cells, and, if early research holds up, a silent partner to your skin and liver.\n\nIn this lesson you'll see how far the gut's reach extends -- and, just as important, where the evidence is solid versus where it's still a pile of intriguing correlations. By the end, you'll understand why researchers call the gut a **hub organ**, and why the same two levers keep showing up as the answer.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HUB ORGAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your gut talks to everything</text>
                    <circle cx="550" cy="550" r="140" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">YOUR GUT</text>
                    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="18">and its microbes</text>
                    <circle cx="250" cy="300" r="90" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="250" y="295" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">IMMUNE</text>
                    <text x="250" y="325" text-anchor="middle" fill="#fff" font-size="17">70 pct of cells</text>
                    <circle cx="850" cy="300" r="90" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="850" y="295" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">WEIGHT</text>
                    <text x="850" y="325" text-anchor="middle" fill="#fff" font-size="17">appetite signals</text>
                    <circle cx="250" cy="820" r="90" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="250" y="815" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">SKIN</text>
                    <text x="250" y="845" text-anchor="middle" fill="#fff" font-size="17">early evidence</text>
                    <circle cx="850" cy="820" r="90" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="850" y="815" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">LIVER</text>
                    <text x="850" y="845" text-anchor="middle" fill="#fff" font-size="17">direct pipeline</text>
                    <line x1="330" y1="360" x2="450" y2="470" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="770" y1="360" x2="650" y2="470" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="330" y1="760" x2="450" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="770" y1="760" x2="650" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                </svg>`,
                caption: "The gut connects to immunity, weight, skin, and liver -- with very different levels of proof"
            }
        },
        {
            type: "concept",
            title: "Your Gut Is an Immune Training Academy",
            content: "The **GALT** -- gut-associated lymphoid tissue -- is the largest immune organ in your body. It sits one cell layer away from trillions of microbes, which sounds like a design flaw until you realize it's the whole point.\n\nYour immune system isn't born knowing friend from foe. It **learns** -- and gut microbes are the teachers:\n\n\u2022 **Peyer's patches** in the intestinal wall constantly sample microbes and food particles, like border agents checking passports\n\u2022 Friendly microbes teach **regulatory T cells** to stay calm around harmless things -- pollen, peanuts, your own tissue\n\u2022 Microbial molecules like **polysaccharide A** from Bacteroides fragilis directly promote these calming cells in animal studies\n\u2022 A microbiome missing key species in early life is linked to an immune system that overreacts -- the pattern behind allergy and autoimmunity\n\nThink of it this way: a well-trained immune system is like a good bouncer -- firm with real threats, relaxed with regulars. An untrained one starts fights with everyone, including you.\n\nThis training window matters most in the **first years of life**, which is why researchers obsess over birth mode, breastfeeding, and early antibiotics -- the topics from Lesson 2 come full circle here.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IMMUNE TRAINING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Microbes teach immune cells what to ignore</text>
                    <rect x="100" y="170" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">GALT: 70 PCT OF IMMUNE CELLS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="19">The largest immune organ lives in your gut wall</text>
                    <rect x="100" y="370" width="430" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">TRAINED</text>
                    <text x="315" y="470" text-anchor="middle" fill="#fff" font-size="18">Tolerates pollen, food,</text>
                    <text x="315" y="505" text-anchor="middle" fill="#fff" font-size="18">and your own tissue</text>
                    <text x="315" y="545" text-anchor="middle" fill="#888" font-size="16">Fights real pathogens</text>
                    <text x="315" y="580" text-anchor="middle" fill="#888" font-size="16">Calm, precise responses</text>
                    <rect x="570" y="370" width="430" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="785" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">UNTRAINED</text>
                    <text x="785" y="470" text-anchor="middle" fill="#fff" font-size="18">Overreacts to harmless</text>
                    <text x="785" y="505" text-anchor="middle" fill="#fff" font-size="18">triggers -- allergies</text>
                    <text x="785" y="545" text-anchor="middle" fill="#888" font-size="16">Linked to asthma, eczema</text>
                    <text x="785" y="580" text-anchor="middle" fill="#888" font-size="16">and autoimmune patterns</text>
                    <rect x="150" y="700" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#ffd700" font-size="20">Regulatory T cells learn calm from microbes --</text>
                    <text x="550" y="772" text-anchor="middle" fill="#ffd700" font-size="20">especially in the first years of life</text>
                </svg>`,
                caption: "A microbe-trained immune system knows when NOT to fight"
            }
        },
        {
            type: "example",
            title: "Amish vs. Hutterite: A Natural Experiment",
            content: "In 2016, the New England Journal of Medicine published one of the cleanest natural experiments in allergy science.\n\nThe **Amish** of Indiana and the **Hutterites** of South Dakota are genetically similar farming communities with similar diets, large families, and low smoking rates. One big difference: Amish children grow up on **single-family farms**, working close to animals and barns. Hutterite children live on **industrialized communal farms** where machines do the animal work, away from the kids.\n\nThe results were striking:\n\n\u2022 Asthma prevalence in Amish schoolchildren: about **5 percent**\n\u2022 In Hutterite schoolchildren: about **21 percent** -- roughly four times higher\n\u2022 Amish house dust contained far more **endotoxin** -- fragments of bacteria\n\u2022 Amish children's innate immune cells showed a distinctly calmer, better-regulated profile\n\nWhen researchers gave Amish dust extracts to mice, it **protected them** from airway hyperreactivity. Hutterite dust did not.\n\nThis is the **old friends hypothesis** in action: it's not about being dirty, it's about early, rich exposure to the microbial world our immune systems evolved expecting. Your gut microbes are a big part of that expected input.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A NATURAL EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">NEJM 2016: two farming communities</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">AMISH</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Traditional single-family</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="18">farms, kids near animals</text>
                    <text x="290" y="345" text-anchor="middle" fill="#888" font-size="16">Dust rich in endotoxin</text>
                    <rect x="120" y="390" width="340" height="110" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">5 PCT</text>
                    <text x="290" y="478" text-anchor="middle" fill="#fff" font-size="17">childhood asthma</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">HUTTERITE</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Industrialized communal</text>
                    <text x="810" y="303" text-anchor="middle" fill="#fff" font-size="18">farms, kids kept away</text>
                    <text x="810" y="345" text-anchor="middle" fill="#888" font-size="16">Much lower dust endotoxin</text>
                    <rect x="640" y="390" width="340" height="110" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">21 PCT</text>
                    <text x="810" y="478" text-anchor="middle" fill="#fff" font-size="17">childhood asthma</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="20">Similar genes, similar diets --</text>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-size="20">4x difference in asthma from microbial exposure</text>
                </svg>`,
                caption: "Stein et al., NEJM 2016: microbial exposure, not genetics, drove a 4x asthma gap"
            }
        },
        {
            type: "concept",
            title: "The Old Friends Hypothesis",
            content: "The original **hygiene hypothesis** (David Strachan, 1989) noticed that kids with more older siblings got fewer allergies, and guessed that infections were somehow protective. The modern, better-supported version is the **old friends hypothesis**: what protects you isn't disease -- it's early exposure to the harmless microbes humans co-evolved with.\n\nThose old friends came from:\n\n\u2022 **Soil and animals** -- farm dust, pets, outdoor play\n\u2022 **Other people** -- siblings, daycare, crowded households\n\u2022 **Fermented and unwashed foods** -- a steady trickle of environmental microbes\n\u2022 **Vaginal birth and breastfeeding** -- the founding transfers from Lesson 2\n\nModern life quietly cut most of these channels. Allergies, asthma, eczema, and autoimmune conditions have climbed steeply in industrialized countries over the past 70 years -- far too fast for genetics to explain.\n\n**Important honesty check**: this doesn't mean you should skip handwashing or vaccines. Hygiene against actual pathogens saves lives. The argument is narrower -- that we also need contact with the harmless microbial world, especially in childhood. Owning a dog, playing outside, and eating fermented foods are the practical, low-risk versions of that idea.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">OLD FRIENDS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The exposures your immune system expects</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SOIL AND ANIMALS</text>
                    <text x="300" y="272" text-anchor="middle" fill="#888" font-size="16">Farm dust, pets, outdoor play</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">OTHER PEOPLE</text>
                    <text x="800" y="272" text-anchor="middle" fill="#888" font-size="16">Siblings, daycare, crowds</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">LIVE-CULTURE FOODS</text>
                    <text x="300" y="492" text-anchor="middle" fill="#888" font-size="16">Fermented, fresh, less sterile</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">EARLY-LIFE TRANSFER</text>
                    <text x="800" y="492" text-anchor="middle" fill="#888" font-size="16">Birth mode, breastfeeding</text>
                    <rect x="150" y="620" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NOT AN ARGUMENT AGAINST HYGIENE</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="17">Keep the handwashing and vaccines --</text>
                    <text x="550" y="740" text-anchor="middle" fill="#888" font-size="16">add back the harmless exposures</text>
                </svg>`,
                caption: "Old friends, not old diseases: the exposures that train immune tolerance"
            }
        },
        {
            type: "quiz",
            question: "In the 2016 Amish-Hutterite study, what best explains why Amish children had about one quarter the asthma rate of Hutterite children?",
            options: [
                { text: "The Amish have protective genes the Hutterites lack", correct: false },
                { text: "Rich early exposure to farm-animal microbes trained calmer immune responses", correct: true },
                { text: "Amish children ate significantly more fiber and fewer processed foods", correct: false },
                { text: "Hutterite children were exposed to more air pollution from farm machinery", correct: false }
            ],
            explanation: "The two communities are genetically similar and eat similar diets, which is exactly what made the comparison powerful. The key difference was microbial exposure: Amish children work close to animals on single-family farms, and their endotoxin-rich house dust was linked to calmer innate immune profiles -- it even protected mice from airway hyperreactivity. The genetics answer is the classic trap: the study design specifically ruled it out.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE FARM EFFECT</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">Two similar communities, one big difference</text>
                    <text x="550" y="285" text-anchor="middle" fill="#888" font-size="16">What actually drove the 4x asthma gap?</text>
                    <rect x="230" y="400" width="290" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="375" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">SAME GENES</text>
                    <text x="375" y="488" text-anchor="middle" fill="#888" font-size="15">ruled out by design</text>
                    <rect x="580" y="400" width="290" height="120" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="725" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">SAME DIET</text>
                    <text x="725" y="488" text-anchor="middle" fill="#888" font-size="15">also ruled out</text>
                    <rect x="230" y="570" width="640" height="110" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">DIFFERENT MICROBIAL EXPOSURE</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="15">the variable that remained</text>
                </svg>`,
                caption: "Test your understanding of the farm-children evidence"
            }
        },
        {
            type: "concept",
            title: "Gut Microbes and Body Weight: The Evidence",
            content: "In 2006, Jeffrey Gordon's lab at Washington University published a famous finding: the gut microbiomes of **lean and obese people are measurably different**. Peter Turnbaugh's twin studies showed obese individuals tended to have lower microbial diversity and a community that extracts more calories from the same food.\n\nThe stunning part came from **germ-free mice** -- mice raised with no microbes at all:\n\n\u2022 Transplant microbes from an **obese mouse** into germ-free mice, and they gain significantly more fat than mice given lean-donor microbes -- **eating the same chow**\n\u2022 In a 2013 follow-up (Ridaura et al., Science), microbes from human twin pairs -- one obese, one lean -- reproduced the donors' body types in mice\n\u2022 Even wilder: housing the two mouse groups together let lean-type microbes invade and **protect the obese-type mice** from fat gain, but only when the mice ate a high-fiber diet\n\nSo in mice, the causal arrow is real: microbes can drive weight gain. But keep that species label in mind -- the human story, as you'll see next, is much messier. The mouse experiments prove **possibility**, not human destiny.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TWIN EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ridaura et al., Science 2013</text>
                    <rect x="80" y="180" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">OBESE TWIN DONOR</text>
                    <text x="300" y="278" text-anchor="middle" fill="#fff" font-size="17">Microbes transplanted to</text>
                    <text x="300" y="310" text-anchor="middle" fill="#fff" font-size="17">germ-free mice</text>
                    <text x="300" y="348" text-anchor="middle" fill="#888" font-size="16">Result: mice gain more fat</text>
                    <rect x="580" y="180" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LEAN TWIN DONOR</text>
                    <text x="800" y="278" text-anchor="middle" fill="#fff" font-size="17">Same mice, same chow,</text>
                    <text x="800" y="310" text-anchor="middle" fill="#fff" font-size="17">different microbes</text>
                    <text x="800" y="348" text-anchor="middle" fill="#888" font-size="16">Result: mice stay lean</text>
                    <path d="M550 450 L550 510" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,510 542,498 558,498" fill="#14b8a6"/>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE COHOUSING TWIST</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="18">Housed together, lean-type microbes invaded and</text>
                    <text x="550" y="662" text-anchor="middle" fill="#fff" font-size="18">protected -- but only on a high-fiber diet</text>
                    <rect x="200" y="770" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="19">In mice, microbes can drive weight --</text>
                    <text x="550" y="842" text-anchor="middle" fill="#ffd700" font-size="19">and diet decides which microbes win</text>
                </svg>`,
                caption: "Same food, different microbes, different body fat -- in mice"
            }
        },
        {
            type: "concept",
            title: "But You Are Not a Germ-Free Mouse",
            content: "Here's the honest part most headlines skip. In humans, the microbiome-weight story is **tangled**:\n\n\u2022 **Correlation is solid**: lower diversity and certain community patterns track with obesity across many human cohorts\n\u2022 **Causation is murky**: diet shapes both your weight AND your microbiome, so the microbes could be passengers, drivers, or both\n\u2022 Early claims like the **Firmicutes-to-Bacteroidetes ratio** as an obesity signature failed to replicate consistently across studies\n\u2022 Human fecal transplant trials for obesity have produced **modest, inconsistent** results -- nothing like the dramatic mouse effects\n\nThe most defensible summary: your microbiome **contributes** to how you extract energy, how hungry you feel, and how your metabolism responds to food -- but it is **not destiny**. Genetics, total intake, activity, sleep, medications, and stress all sit in the same equation.\n\nWhy does this framing matter? Because supplement companies sell the mouse story: fix your bugs, melt your fat. The evidence doesn't support that shortcut. What it does support is less flashy: a high-fiber, plant-diverse diet shifts the microbiome AND improves weight-related outcomes -- the two levers travel together. That's not medical advice; it's just where the data actually points.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MICE VS HUMANS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where the weight evidence stands</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">IN MICE</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Causal: transplants</text>
                    <text x="290" y="318" text-anchor="middle" fill="#fff" font-size="18">transfer body type</text>
                    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="16">Controlled diet and genes</text>
                    <text x="290" y="393" text-anchor="middle" fill="#888" font-size="16">Germ-free start possible</text>
                    <text x="290" y="440" text-anchor="middle" fill="#10b981" font-size="17">Verdict: proven driver</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">IN HUMANS</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Correlations everywhere,</text>
                    <text x="810" y="318" text-anchor="middle" fill="#fff" font-size="18">causality entangled with diet</text>
                    <text x="810" y="360" text-anchor="middle" fill="#888" font-size="16">FMT trials: modest, mixed</text>
                    <text x="810" y="393" text-anchor="middle" fill="#888" font-size="16">Ratio claims failed to replicate</text>
                    <text x="810" y="440" text-anchor="middle" fill="#f59e0b" font-size="17">Verdict: contributor, not destiny</text>
                    <rect x="150" y="580" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ffd700" font-size="20">The honest claim: microbes contribute to weight --</text>
                    <text x="550" y="665" text-anchor="middle" fill="#ffd700" font-size="20">they do not decide it</text>
                </svg>`,
                caption: "Mouse experiments prove possibility; human data says contributor, not destiny"
            }
        },
        {
            type: "concept",
            title: "How Microbes Talk to Your Appetite",
            content: "If microbes influence weight at all, there has to be a mechanism. The best-mapped one runs through the **short-chain fatty acids (SCFAs)** you met in Lesson 3 -- butyrate, propionate, and acetate, the molecules your microbes make from fiber.\n\nSCFAs dock onto receptors (**FFAR2 and FFAR3**) on specialized gut cells called **enteroendocrine L-cells**, which respond by releasing two appetite hormones:\n\n\u2022 **GLP-1 (glucagon-like peptide-1)** -- slows stomach emptying, improves insulin response, signals fullness. Sound familiar? It's the same pathway that drugs like semaglutide amplify pharmacologically\n\u2022 **PYY (peptide YY)** -- travels to the hypothalamus and dials down hunger\n\nIn controlled human studies, delivering propionate directly to the colon increased GLP-1 and PYY release and reduced how much people ate at a buffet meal.\n\n**Keep the claim honest**: this is strong mechanistic plausibility, not proof that eating fiber will melt weight off. The hormonal nudges are real but gentle -- nothing like drug doses. Still, it means the fiber-fed microbiome is literally on the satiety team: every bowl of beans sends a small, well-documented signal upstream that says you've had enough.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIBER TO FULLNESS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The SCFA appetite pathway</text>
                    <rect x="100" y="170" width="900" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">1. FIBER ARRIVES IN THE COLON</text>
                    <text x="550" y="252" text-anchor="middle" fill="#888" font-size="17">Microbes ferment it into SCFAs</text>
                    <path d="M550 300 L550 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,340 542,328 558,328" fill="#14b8a6"/>
                    <rect x="100" y="360" width="900" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="405" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">2. SCFAS DOCK ON L-CELLS</text>
                    <text x="550" y="442" text-anchor="middle" fill="#888" font-size="17">Via FFAR2 and FFAR3 receptors</text>
                    <path d="M550 490 L550 530" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,530 542,518 558,518" fill="#14b8a6"/>
                    <rect x="100" y="550" width="430" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="315" y="605" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">GLP-1</text>
                    <text x="315" y="645" text-anchor="middle" fill="#888" font-size="16">Fullness, insulin response</text>
                    <rect x="570" y="550" width="430" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="785" y="605" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">PYY</text>
                    <text x="785" y="645" text-anchor="middle" fill="#888" font-size="16">Hunger dialed down</text>
                    <rect x="200" y="760" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="19">Gentle, real hormonal nudges --</text>
                    <text x="550" y="832" text-anchor="middle" fill="#ffd700" font-size="19">mechanism confirmed, magnitude modest</text>
                </svg>`,
                caption: "Fiber-fed microbes release SCFAs that trigger the body's own satiety hormones"
            }
        },
        {
            type: "concept",
            title: "The Gut-Skin and Gut-Liver Axes",
            content: "Two more spokes of the hub, with very different evidence grades.\n\n**Gut-skin axis (early evidence)**: People with **acne**, **eczema**, and **rosacea** show altered gut microbiomes more often than controls, and infants with low gut diversity are more likely to develop eczema later. Small trials of certain probiotics show modest benefit for infant eczema -- enough for researchers to keep digging, not enough for confident claims. The proposed mechanisms: gut-driven immune calibration (the GALT again) and inflammatory signals reaching skin through the blood. Grade it a **C-plus**: real correlations, plausible mechanism, thin trial evidence.\n\n**Gut-liver axis (much stronger)**: Your gut and liver are physically plumbed together -- everything absorbed from the intestine flows first to the liver through the **portal vein**. That means the liver is the first responder to whatever leaks from the gut. In **metabolic dysfunction-associated steatotic liver disease (MASLD)**, formerly called fatty liver, increased intestinal permeability and bacterial products like **LPS** reaching the liver are well-documented contributors to inflammation. Remember the leaky barrier from Lesson 8? The liver is where those leaks land first.\n\nOne axis is a promising sketch; the other is anatomical fact plus solid disease evidence. Both point the same direction: gut integrity matters beyond the gut.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO MORE AXES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Different spokes, different evidence grades</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="24">GUT-SKIN</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Acne, eczema, rosacea</text>
                    <text x="290" y="318" text-anchor="middle" fill="#fff" font-size="18">correlate with gut changes</text>
                    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="16">Small probiotic trials:</text>
                    <text x="290" y="392" text-anchor="middle" fill="#888" font-size="16">modest infant eczema benefit</text>
                    <rect x="130" y="440" width="320" height="80" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="490" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="24">GRADE: C+</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">GUT-LIVER</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Portal vein: gut blood</text>
                    <text x="810" y="318" text-anchor="middle" fill="#fff" font-size="18">flows straight to liver</text>
                    <text x="810" y="360" text-anchor="middle" fill="#888" font-size="16">Leaked LPS drives liver</text>
                    <text x="810" y="392" text-anchor="middle" fill="#888" font-size="16">inflammation in MASLD</text>
                    <rect x="650" y="440" width="320" height="80" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="490" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">GRADE: B+</text>
                    <rect x="150" y="630" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-size="20">Same lesson twice: barrier integrity</text>
                    <text x="550" y="708" text-anchor="middle" fill="#ffd700" font-size="20">matters far beyond the gut wall</text>
                </svg>`,
                caption: "Gut-skin: promising sketch. Gut-liver: anatomy plus solid disease evidence"
            }
        },
        {
            type: "example",
            title: "The Acne Clue Hiding in Old Research",
            content: "Here's a curious thread researchers keep pulling. Back in the 1930s, dermatologists John Stokes and Donald Pillsbury proposed that **emotional states alter gut flora, which then influences skin inflammation** -- a gut-brain-skin axis, sketched 80 years before the tools existed to test it.\n\nModern data has been kinder to them than anyone expected:\n\n\u2022 A Russian study of 114 acne patients found **54 percent had significantly altered gut flora**\n\u2022 A large Chinese cohort found people with acne had lower levels of Firmicutes and Bifidobacteria than clear-skinned controls\n\u2022 Patients with rosacea have been found to carry small intestinal bacterial overgrowth (**SIBO**) at markedly higher rates -- and in one Italian study of 113 patients, treating the SIBO cleared or greatly improved rosacea in most treated patients, with results lasting at least 9 months\n\n**The honest caveats**: these are small studies, mostly correlational, and acne trials of probiotics remain preliminary. Nobody should throw out their dermatologist's advice based on this -- and none of this is medical advice.\n\nBut as a case study in how science moves, it's perfect: a fringe 1930s hypothesis, revived by microbiome tools, now sitting in the promising-but-unproven pile awaiting the big trials.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">AN 80-YEAR-OLD HUNCH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The gut-brain-skin axis, 1930 to today</text>
                    <rect x="100" y="180" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">1930: STOKES AND PILLSBURY</text>
                    <text x="550" y="272" text-anchor="middle" fill="#fff" font-size="18">Propose emotions alter gut flora, gut flora alters skin</text>
                    <path d="M550 330 L550 375" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,375 542,363 558,363" fill="#14b8a6"/>
                    <rect x="100" y="395" width="430" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="315" y="450" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">ACNE</text>
                    <text x="315" y="492" text-anchor="middle" fill="#fff" font-size="17">54 pct of 114 patients had</text>
                    <text x="315" y="524" text-anchor="middle" fill="#fff" font-size="17">altered gut flora</text>
                    <rect x="570" y="395" width="430" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="785" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ROSACEA</text>
                    <text x="785" y="492" text-anchor="middle" fill="#fff" font-size="17">Treating SIBO cleared skin,</text>
                    <text x="785" y="524" text-anchor="middle" fill="#fff" font-size="17">lasting 9-plus months</text>
                    <rect x="150" y="650" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">CAVEAT BOX</text>
                    <text x="550" y="733" text-anchor="middle" fill="#888" font-size="16">Small studies, mostly correlational -- promising, not proven</text>
                </svg>`,
                caption: "A 1930s hypothesis finding new life -- and still awaiting definitive trials"
            }
        },
        {
            type: "application",
            title: "Put the Hub-Organ View to Work",
            content: "You can't run a clinical trial on yourself, but you can act on the strongest links today:\n\n1. **Feed the immune trainers** -- the fiber and fermented foods from Lessons 3 and 4 are the best-supported way to support the microbes that teach immune calm. Add one serving of each today.\n\n2. **Get your old-friends exposure** -- spend 30 minutes outside, garden with bare hands, pet the dog. Low-risk, biologically sensible, free.\n\n3. **Use the satiety pathway** -- front-load meals with fiber (beans, oats, vegetables) so SCFA-driven GLP-1 and PYY signals work with you, not against you.\n\n4. **Protect the barrier for your liver's sake** -- the Lesson 9 damage list (heavy alcohol, ultra-processed diets, unnecessary antibiotics) is also a liver-protection list.\n\n5. **Hold correlations loosely** -- if a headline claims gut bacteria cause a disease, ask: mice or humans? Correlation or trial? You now know the difference.\n\nNone of this is a prescription -- it's the short list of moves with the best evidence behind them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR ACTION PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves backed by the strongest links</text>
                    <rect x="150" y="160" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="210" text-anchor="start" fill="#fff" font-size="18">Feed the immune trainers: fiber plus fermented foods</text>
                    <rect x="150" y="280" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="330" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="330" text-anchor="start" fill="#fff" font-size="18">Get outside: 30 minutes of old-friends exposure</text>
                    <rect x="150" y="400" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="450" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="450" text-anchor="start" fill="#fff" font-size="18">Front-load fiber so satiety hormones work for you</text>
                    <rect x="150" y="520" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="570" text-anchor="start" fill="#fff" font-size="18">Protect the barrier -- your liver gets the leaks first</text>
                    <rect x="150" y="640" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="690" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="690" text-anchor="start" fill="#fff" font-size="18">Ask of every headline: mice or humans? Trial or correlation?</text>
                </svg>`,
                caption: "Act on the strong links, stay skeptical of the weak ones"
            }
        },
        {
            type: "concept",
            title: "The Pattern: Many Correlations, Few Levers",
            content: "Step back and the whole lesson resolves into one pattern worth memorizing.\n\nThe gut is a **hub organ**. Its microbes touch immune calibration, energy harvest, appetite hormones, skin, and liver -- and the research literature is overflowing with associations between microbiome patterns and nearly every chronic condition you can name.\n\nBut associations are cheap. **Proven causal levers are rare.** Sort the evidence honestly and you get a short list:\n\n\u2022 **Fiber and plant diversity** -- repeatedly shown in trials to shift the microbiome and improve downstream markers\n\u2022 **Fermented foods** -- the Stanford trial's diversity and inflammation results from Lesson 4\n\u2022 **Avoiding unnecessary antibiotics** -- protects what you have\n\u2022 **Sleep, stress management, exercise** -- each independently shifts the microbiome in the right direction\n\nNotice what's NOT on the list: exotic supplements, microbiome sequencing kits promising personalized fixes, single miracle strains for weight loss.\n\nThe hub-organ picture is genuinely exciting -- it's why microbiome science attracts billions in funding. But excitement and evidence run on different clocks. Your advantage as a learner is knowing which clock you're reading. The next lesson turns this short list of real levers into a complete, practical protocol.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EVIDENCE FUNNEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Thousands of correlations, a handful of levers</text>
                    <rect x="100" y="170" width="900" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">CORRELATIONS: THOUSANDS</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="17">Nearly every chronic disease shows microbiome links</text>
                    <path d="M550 310 L550 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,350 542,338 558,338" fill="#14b8a6"/>
                    <rect x="180" y="370" width="740" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">MECHANISMS: DOZENS</text>
                    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="17">SCFAs, immune training, barrier, portal vein</text>
                    <path d="M550 510 L550 550" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,550 542,538 558,538" fill="#14b8a6"/>
                    <rect x="260" y="570" width="580" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PROVEN LEVERS: FEW</text>
                    <text x="550" y="668" text-anchor="middle" fill="#fff" font-size="18">Fiber and plant diversity, fermented foods,</text>
                    <text x="550" y="702" text-anchor="middle" fill="#fff" font-size="18">antibiotic prudence, sleep, movement</text>
                    <rect x="200" y="830" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="19">Excitement and evidence run on</text>
                    <text x="550" y="902" text-anchor="middle" fill="#ffd700" font-size="19">different clocks -- know which one you read</text>
                </svg>`,
                caption: "The funnel from correlation to proven lever is steep -- and diet survives every cut"
            }
        },
        {
            type: "quiz",
            question: "A headline claims a gut bacterium causes obesity, citing mice that gained fat after receiving microbes from obese donors. What is the most accurate takeaway?",
            options: [
                { text: "The study proves gut bacteria cause obesity in humans too", correct: false },
                { text: "Mouse transplant studies show microbes CAN drive weight gain, but human causality remains entangled with diet and lifestyle", correct: true },
                { text: "The study is meaningless because mice are nothing like humans", correct: false },
                { text: "It confirms that a low Firmicutes-to-Bacteroidetes ratio is the reliable obesity signature", correct: false }
            ],
            explanation: "Germ-free mouse studies like Turnbaugh 2006 and Ridaura 2013 genuinely demonstrate causal potential -- same chow, different microbes, different body fat. But in humans, diet shapes both weight and microbiome, fecal transplant trials show modest and inconsistent effects, and the famous Firmicutes ratio failed to replicate. Dismissing mouse work entirely is as wrong as over-extrapolating it: the honest position is contributor, not destiny.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">READING THE WEIGHT EVIDENCE</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">Mouse causality vs human complexity</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">What can you honestly conclude?</text>
                    <rect x="150" y="390" width="380" height="150" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">MICE: CAUSAL</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">controlled, germ-free,</text>
                    <text x="340" y="512" text-anchor="middle" fill="#888" font-size="15">dramatic effects</text>
                    <rect x="570" y="390" width="380" height="150" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">HUMANS: TANGLED</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">diet drives both weight</text>
                    <text x="760" y="512" text-anchor="middle" fill="#888" font-size="15">and microbiome</text>
                    <rect x="200" y="600" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="19">Contributor, not destiny --</text>
                    <text x="550" y="672" text-anchor="middle" fill="#ffd700" font-size="19">the phrase that keeps you honest</text>
                </svg>`,
                caption: "Final check: separating mouse proof from human hype"
            }
        }
    ]
},
{
    id: 11,
    title: "Feeding the Garden: The Protocol",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Ten Lessons of Science, One Page of Practice",
            content: "You've spent ten lessons learning what your gut microbes are, how they got there, what feeds them, what starves them, and how far their influence reaches. Now comes the question that actually matters: **what do you do on Tuesday?**\n\nHere's the good news. When you rank everything by evidence quality, the protocol that emerges is short, cheap, and almost boring. No exotic supplements. No $400 sequencing kits. No 30-day cleanses.\n\nSix moves. That's the whole playbook: plant variety, fiber, fermented foods, a Mediterranean frame, a short avoid list, and three lifestyle basics. Every one is backed by the studies you've already met in this book -- the American Gut Project, the Stanford fermented-food trial, the athlete microbiome studies.\n\nThis lesson assembles them into a protocol you can actually run: what to do, in what order, with a 7-day starter menu, a budget reality check, and fixes for the three obstacles that stop most people. Not medical advice -- just the evidence, organized for action.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six evidence-ranked moves</text>
                    <rect x="150" y="160" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="210" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="210" text-anchor="start" fill="#fff" font-size="18">Plant variety: track toward 30 per week</text>
                    <rect x="150" y="270" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="320" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="320" text-anchor="start" fill="#fff" font-size="18">Fiber: 25-38 g per day, raised gradually</text>
                    <rect x="150" y="380" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="430" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="430" text-anchor="start" fill="#fff" font-size="18">Fermented foods: build toward daily servings</text>
                    <rect x="150" y="490" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="540" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="540" text-anchor="start" fill="#fff" font-size="18">Mediterranean pattern as the frame</text>
                    <rect x="150" y="600" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="650" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="650" text-anchor="start" fill="#fff" font-size="18">Minimize: ultra-processed food, needless antibiotics, heavy alcohol</text>
                    <rect x="150" y="710" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="760" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">6.</text>
                    <text x="240" y="760" text-anchor="start" fill="#fff" font-size="18">Live: sleep 7-9 hours, manage stress, move</text>
                </svg>`,
                caption: "The whole playbook on one card -- the rest of the lesson unpacks it"
            }
        },
        {
            type: "concept",
            title: "Move 1: Chase 30 Plants a Week",
            content: "The single best-supported dietary target in microbiome science comes from the **American Gut Project**, which analyzed samples from over 10,000 citizen scientists. The standout finding wasn't about being vegetarian or low-carb. It was **variety**: people eating **30 or more different plant types per week** had significantly more diverse microbiomes than people eating 10 or fewer -- regardless of diet label.\n\nWhy variety? Different microbes specialize in different plant fibers and **polyphenols**. Feed one plant, you feed a few species. Feed thirty, you fund the whole ecosystem.\n\nThe counting rules are generous, and that's what makes this achievable:\n\n\u2022 Every distinct **vegetable, fruit, whole grain, and legume** counts as one\n\u2022 **Herbs and spices count** -- basil, cumin, cinnamon, garlic, each one\n\u2022 **Nuts and seeds count** -- walnuts, chia, sesame, all separate\n\u2022 Coffee and dark chocolate? Both plants. Both count.\n\nA three-bean chili with onion, garlic, tomato, cumin, oregano, and chili powder is **10 plants in one bowl**.\n\nStart by simply counting a normal week -- most people land between 10 and 15 and are shocked. Then climb. The counting itself changes behavior: you start seeing a spice rack as a diversity toolkit.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">30 PLANTS A WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">American Gut: variety beats labels</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">10 OR FEWER</text>
                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="18">plants per week</text>
                    <circle cx="200" cy="330" r="16" fill="#ef4444" opacity="0.6"/>
                    <circle cx="260" cy="350" r="16" fill="#ef4444" opacity="0.5"/>
                    <circle cx="320" cy="325" r="16" fill="#ef4444" opacity="0.6"/>
                    <circle cx="380" cy="350" r="16" fill="#ef4444" opacity="0.5"/>
                    <text x="290" y="430" text-anchor="middle" fill="#888" font-size="16">Lower microbiome diversity</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">30 OR MORE</text>
                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="18">plants per week</text>
                    <circle cx="680" cy="320" r="13" fill="#10b981" opacity="0.7"/>
                    <circle cx="730" cy="345" r="13" fill="#6366f1" opacity="0.7"/>
                    <circle cx="780" cy="318" r="13" fill="#f59e0b" opacity="0.7"/>
                    <circle cx="830" cy="345" r="13" fill="#8b5cf6" opacity="0.7"/>
                    <circle cx="880" cy="320" r="13" fill="#ec4899" opacity="0.7"/>
                    <circle cx="930" cy="345" r="13" fill="#14b8a6" opacity="0.7"/>
                    <circle cx="705" cy="380" r="13" fill="#3b82f6" opacity="0.7"/>
                    <circle cx="755" cy="395" r="13" fill="#10b981" opacity="0.7"/>
                    <circle cx="805" cy="378" r="13" fill="#f59e0b" opacity="0.7"/>
                    <circle cx="855" cy="395" r="13" fill="#ec4899" opacity="0.7"/>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">Significantly higher diversity</text>
                    <rect x="150" y="540" width="800" height="190" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">EVERYTHING COUNTS</text>
                    <text x="550" y="638" text-anchor="middle" fill="#fff" font-size="18">Herbs, spices, nuts, seeds, legumes, grains --</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="18">a three-bean chili can be 10 plants in one bowl</text>
                    <text x="550" y="708" text-anchor="middle" fill="#888" font-size="16">Over 10,000 participants, the pattern held across diet labels</text>
                </svg>`,
                caption: "American Gut Project: 30-plus plant types per week tracked with the most diverse microbiomes"
            }
        },
        {
            type: "concept",
            title: "Moves 2 and 3: Fiber Dose, Fermented Dose",
            content: "**Fiber: 25-38 grams a day, raised gradually.** The official targets (25 g for women, 38 g for men) would feel revolutionary for most people -- the average American gets about **15 grams**. From Lesson 3 you know why the target matters: fiber is the raw material for butyrate, the fuel of your colon lining.\n\nThe key word is **gradually**. Your microbiome needs 2-4 weeks to shift toward fiber-fermenting species. Jump from 15 g to 35 g overnight and the bloating will convince you fiber is your enemy. Add roughly **5 grams every few days** instead:\n\n\u2022 Half a cup of cooked lentils: about 8 g\n\u2022 A cup of raspberries: 8 g\n\u2022 An avocado: 10 g\n\u2022 A cup of cooked oats: 4 g\n\n**Fermented foods: build toward several servings a day.** The Stanford trial from Lesson 4 used about **6 daily servings** to produce its diversity gains and drops in 19 inflammatory markers -- that's the studied dose. But 6 is a ceiling to grow toward, not an entry fee. Even **1-2 daily servings** -- a cup of kefir, a forkful of kimchi with dinner -- starts the habit and the exposure. A serving is modest: half a cup of yogurt or kefir, a quarter to half cup of sauerkraut or kimchi, a cup of kombucha.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO DAILY DOSES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fiber grams and fermented servings</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">FIBER</text>
                    <rect x="120" y="260" width="200" height="45" rx="10" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="290" text-anchor="middle" fill="#fff" font-size="16">Average: 15 g</text>
                    <rect x="120" y="330" width="340" height="45" rx="10" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="16">Target: 25-38 g</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="16">Add about 5 g every few days</text>
                    <text x="290" y="460" text-anchor="middle" fill="#888" font-size="16">Lentils 8 g, raspberries 8 g,</text>
                    <text x="290" y="492" text-anchor="middle" fill="#888" font-size="16">avocado 10 g, oats 4 g</text>
                    <text x="290" y="545" text-anchor="middle" fill="#6366f1" font-size="17">Ramp over 2-4 weeks</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">FERMENTED</text>
                    <rect x="640" y="260" width="180" height="45" rx="10" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="290" text-anchor="middle" fill="#fff" font-size="16">Start: 1-2 servings</text>
                    <rect x="640" y="330" width="340" height="45" rx="10" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="16">Stanford dose: about 6</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="16">A serving is small:</text>
                    <text x="810" y="460" text-anchor="middle" fill="#888" font-size="16">half cup kefir or yogurt,</text>
                    <text x="810" y="492" text-anchor="middle" fill="#888" font-size="16">forkful of kimchi or kraut</text>
                    <text x="810" y="545" text-anchor="middle" fill="#f59e0b" font-size="17">6 is a ceiling, not an entry fee</text>
                    <rect x="200" y="650" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="19">Both doses climb gradually --</text>
                    <text x="550" y="722" text-anchor="middle" fill="#ffd700" font-size="19">your microbiome needs weeks to retool</text>
                </svg>`,
                caption: "The two quantified targets: fiber grams and fermented servings, both ramped slowly"
            }
        },
        {
            type: "concept",
            title: "Moves 4 and 5: The Frame and the Avoid List",
            content: "**The Mediterranean pattern is the frame** that holds the individual moves together -- and it's the eating pattern with the deepest overall evidence base in nutrition science, including microbiome benefits shown in trials like the 2020 NU-AGE study, where a year of Mediterranean eating in older adults shifted the microbiome toward species linked with healthy aging and reduced frailty.\n\nThe pattern in one breath:\n\n\u2022 **Olive oil** as the main fat -- its polyphenols feed beneficial microbes\n\u2022 **Fish and seafood** a few times a week\n\u2022 **Beans, lentils, whole grains, vegetables, fruit, nuts** daily -- notice this covers your plant count and fiber dose automatically\n\u2022 Meat and sweets as occasional guests, not daily tenants\n\n**The minimize list is short and familiar from Lesson 9**:\n\n\u2022 **Ultra-processed foods** -- emulsifiers and sweeteners with worrying microbiome effects, plus they displace the plants\n\u2022 **Unnecessary antibiotics** -- never skip needed ones, but don't pressure a doctor for antibiotics for a viral cold\n\u2022 **Heavy alcohol** -- a reliable barrier-damager and microbiome disruptor\n\nNotice the word **minimize**, not eliminate. A protocol you can hold for years beats a perfect one you abandon by March.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FRAME AND FILTER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eat mostly this, minimize that</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE FRAME</text>
                    <text x="290" y="262" text-anchor="middle" fill="#888" font-size="16">Mediterranean pattern</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="18">Olive oil as main fat</text>
                    <text x="290" y="348" text-anchor="middle" fill="#fff" font-size="18">Fish a few times weekly</text>
                    <text x="290" y="386" text-anchor="middle" fill="#fff" font-size="18">Beans and whole grains daily</text>
                    <text x="290" y="424" text-anchor="middle" fill="#fff" font-size="18">Vegetables, fruit, nuts daily</text>
                    <text x="290" y="462" text-anchor="middle" fill="#888" font-size="16">Meat and sweets: occasional</text>
                    <text x="290" y="520" text-anchor="middle" fill="#10b981" font-size="16">NU-AGE 2020: healthier aging profile</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE FILTER</text>
                    <text x="810" y="262" text-anchor="middle" fill="#888" font-size="16">Minimize, not eliminate</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="18">Ultra-processed foods</text>
                    <text x="810" y="348" text-anchor="middle" fill="#888" font-size="15">emulsifiers, sweeteners, displacement</text>
                    <text x="810" y="392" text-anchor="middle" fill="#fff" font-size="18">Unnecessary antibiotics</text>
                    <text x="810" y="430" text-anchor="middle" fill="#888" font-size="15">take needed ones, skip pressure</text>
                    <text x="810" y="474" text-anchor="middle" fill="#fff" font-size="18">Heavy alcohol</text>
                    <text x="810" y="512" text-anchor="middle" fill="#888" font-size="15">a reliable barrier-damager</text>
                    <rect x="200" y="630" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="19">A protocol you can hold for years</text>
                    <text x="550" y="702" text-anchor="middle" fill="#ffd700" font-size="19">beats a perfect one you abandon</text>
                </svg>`,
                caption: "The Mediterranean frame plus a three-item minimize list"
            }
        },
        {
            type: "quiz",
            question: "According to the American Gut Project's key finding, which strategy best supports microbiome diversity?",
            options: [
                { text: "Eating strictly vegetarian, since animal products lower diversity", correct: false },
                { text: "Eating 30 or more different plant types weekly, with herbs, spices, nuts, and seeds all counting", correct: true },
                { text: "Maximizing total vegetable quantity, since volume matters more than variety", correct: false },
                { text: "Taking a daily multi-strain probiotic alongside any normal diet", correct: false }
            ],
            explanation: "The American Gut Project's standout result was about variety, not labels or volume: people eating 30-plus different plant types per week had significantly more diverse microbiomes than those eating 10 or fewer -- and this held whether or not they were vegetarian. Different microbes specialize in different fibers and polyphenols, so breadth funds more species than bulk. The vegetarian option is the classic trap: diet label mattered less than plant count.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DIVERSITY DRIVER</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">10,000-plus samples, one clear pattern</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">What actually predicted a diverse microbiome?</text>
                    <rect x="150" y="390" width="380" height="140" rx="15" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">NOT THE LABEL</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">vegan, keto, omnivore --</text>
                    <text x="340" y="510" text-anchor="middle" fill="#888" font-size="15">weaker predictor</text>
                    <rect x="570" y="390" width="380" height="140" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THE PLANT COUNT</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">30-plus types weekly --</text>
                    <text x="760" y="510" text-anchor="middle" fill="#888" font-size="15">the strong predictor</text>
                </svg>`,
                caption: "Test yourself on the book's most practical single number"
            }
        },
        {
            type: "concept",
            title: "Move 6: Sleep, Stress, and Sweat",
            content: "Diet gets the headlines, but three non-food levers independently shape your microbiome.\n\n**Sleep 7-9 hours.** Even two nights of partial sleep deprivation measurably shifts microbial composition in human studies, and your microbes run their own circadian rhythms keyed to yours. Chronic short sleep also raises cortisol -- and you know from Lesson 5 what stress hormones do downstream.\n\n**Manage stress -- the axis runs both ways.** Lesson 5 showed gut microbes influencing mood; the reverse lane is just as real. Psychological stress alters gut motility, secretion, and blood flow, reshaping the microbial habitat within days. This is why stress management -- walks, breathing exercises, therapy, whatever genuinely works for you -- belongs in a gut protocol without any hand-waving.\n\n**Exercise is its own microbiome intervention.** In 2014, researchers studying Irish professional rugby players (Clarke et al., Gut) found the athletes had markedly **higher microbial diversity** than matched controls. Later controlled work (Allen et al., 2018) showed six weeks of endurance training increased **butyrate-producing microbes** in previously sedentary adults -- independent of diet changes -- and the gains faded when training stopped.\n\nThe pattern: your microbes eat what you eat, but they also live how you live.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NON-FOOD LEVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your microbes live how you live</text>
                    <rect x="80" y="170" width="300" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SLEEP</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="17">7-9 hours nightly</text>
                    <text x="230" y="315" text-anchor="middle" fill="#888" font-size="15">Two short nights shift</text>
                    <text x="230" y="342" text-anchor="middle" fill="#888" font-size="15">composition; microbes</text>
                    <text x="230" y="369" text-anchor="middle" fill="#888" font-size="15">keep circadian rhythms</text>
                    <rect x="400" y="170" width="300" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">STRESS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="17">The axis runs both ways</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="15">Stress alters motility,</text>
                    <text x="550" y="342" text-anchor="middle" fill="#888" font-size="15">secretion, and blood flow</text>
                    <text x="550" y="369" text-anchor="middle" fill="#888" font-size="15">-- reshaping the habitat</text>
                    <rect x="720" y="170" width="300" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">EXERCISE</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="17">Independent booster</text>
                    <text x="870" y="315" text-anchor="middle" fill="#888" font-size="15">Rugby players: higher</text>
                    <text x="870" y="342" text-anchor="middle" fill="#888" font-size="15">diversity; 6 weeks training</text>
                    <text x="870" y="369" text-anchor="middle" fill="#888" font-size="15">raised butyrate producers</text>
                    <rect x="150" y="540" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#ffd700" font-size="20">Clarke 2014, Allen 2018: movement changed microbes</text>
                    <text x="550" y="625" text-anchor="middle" fill="#ffd700" font-size="20">even when diet stayed the same</text>
                </svg>`,
                caption: "Sleep, stress, and exercise each independently move the microbiome"
            }
        },
        {
            type: "example",
            title: "A 7-Day Starter Menu (Patterns, Not Recipes)",
            content: "Here's what the protocol looks like on an actual plate. Think patterns you rotate, not rigid recipes:\n\n**Breakfast pattern**: overnight oats with kefir, berries, chia, and walnuts (6 plants plus a fermented serving before 9 am). Alternate days: plain yogurt with banana, cinnamon, and whatever fruit is cheap.\n\n**Lunch pattern**: a grain-and-greens bowl -- barley or brown rice, a big handful of spinach or whatever greens exist, half a cup of any bean, olive oil and lemon, sauerkraut on the side. Swap the grain, green, and bean daily and this one template generates 9 different plants a week by itself.\n\n**Dinner pattern**: Mediterranean default -- lentil soup with carrots, celery, garlic, and cumin one night; sardines or salmon with roasted vegetables another; whole-wheat pasta with tomato, olives, and white beans a third. Kimchi or kraut as a standing side.\n\n**Snacks**: fruit, a handful of mixed nuts, hummus with carrot sticks.\n\nRun a loose version of this for one week and count: most people clear **25 plants and 30 grams of fiber** without ever eating a dish they'd call health food. The trick was never willpower -- it was templates that stack diversity automatically.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A DAY ON THE PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Templates that stack diversity automatically</text>
                    <rect x="100" y="170" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">BREAKFAST: OVERNIGHT OATS + KEFIR</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="18">Oats, kefir, berries, chia, walnuts, cinnamon</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">6 plants + 1 fermented serving before 9 am</text>
                    <rect x="100" y="360" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">LUNCH: GRAIN + GREENS + BEAN BOWL</text>
                    <text x="550" y="450" text-anchor="middle" fill="#fff" font-size="18">Rotate the grain, green, and bean daily</text>
                    <text x="550" y="485" text-anchor="middle" fill="#888" font-size="16">One template = 9 different plants a week</text>
                    <rect x="100" y="550" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">DINNER: MEDITERRANEAN DEFAULT</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Lentil soup, fish night, bean pasta night</text>
                    <text x="550" y="675" text-anchor="middle" fill="#888" font-size="16">Kimchi or kraut as a standing side</text>
                    <rect x="200" y="760" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-size="19">One loose week: about 25 plants, 30 g fiber --</text>
                    <text x="550" y="838" text-anchor="middle" fill="#ffd700" font-size="19">no willpower required</text>
                </svg>`,
                caption: "Three meal templates carry the whole protocol"
            }
        },
        {
            type: "example",
            title: "The $25 Gut Health Budget",
            content: "There's a booming industry ready to sell you gut health: $60 probiotic subscriptions, $150 green powders, $400 microbiome tests. Here's the inconvenient truth for that industry: **the best-evidenced foods are among the cheapest in the store**.\n\nA week of protocol staples, at typical US prices:\n\n\u2022 **Dried lentils and beans**, 2 lbs: about $3 -- dozens of servings of the highest-fiber food category\n\u2022 **Old-fashioned oats**, 42 oz canister: about $4 -- weeks of breakfasts\n\u2022 **Frozen mixed vegetables**, 4 bags: about $5 -- nutritionally comparable to fresh, zero spoilage\n\u2022 **Bananas, carrots, cabbage, seasonal fruit**: about $6\n\u2022 **Plain yogurt**, large tub: about $3\n\u2022 **Homemade sauerkraut**: a head of cabbage plus salt, roughly **$1 for a big jar** -- versus $8-10 for artisanal store kraut. Shred, salt at 2 percent by weight, pack in a jar, wait 1-2 weeks\n\nTotal: **around $22-25** for a week's worth of microbiome-feeding staples.\n\nCompare: one month of a heavily marketed probiotic runs $40-60 for a handful of strains that -- as Lesson 7 taught you -- probably don't colonize you anyway. The garden doesn't want your money. It wants your beans.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST BUDGET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Evidence per dollar, compared</text>
                    <rect x="60" y="170" width="460" height="430" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">STAPLES: ~25 DOLLARS/WK</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="17">Dried beans and lentils: 3</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="17">Oats, big canister: 4</text>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="17">Frozen vegetables x4: 5</text>
                    <text x="290" y="380" text-anchor="middle" fill="#fff" font-size="17">Fresh produce: 6</text>
                    <text x="290" y="415" text-anchor="middle" fill="#fff" font-size="17">Plain yogurt tub: 3</text>
                    <text x="290" y="450" text-anchor="middle" fill="#fff" font-size="17">DIY sauerkraut jar: 1</text>
                    <rect x="120" y="490" width="340" height="80" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="525" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Evidence: strong</text>
                    <text x="290" y="555" text-anchor="middle" fill="#888" font-size="15">fiber + fermented trials</text>
                    <rect x="580" y="170" width="460" height="430" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE UPSELL AISLE</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="17">Probiotic subscription: 40-60/mo</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="17">Greens powder: 80-150/mo</text>
                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="17">Microbiome test kit: 100-400</text>
                    <text x="810" y="395" text-anchor="middle" fill="#888" font-size="15">Strains rarely colonize (Lesson 7),</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="15">tests can't yet guide treatment</text>
                    <rect x="640" y="490" width="340" height="80" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="525" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">Evidence: weak to none</text>
                    <text x="810" y="555" text-anchor="middle" fill="#888" font-size="15">marketing outruns data</text>
                    <rect x="200" y="660" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="19">The garden doesn't want your money --</text>
                    <text x="550" y="732" text-anchor="middle" fill="#ffd700" font-size="19">it wants your beans</text>
                </svg>`,
                caption: "About 25 dollars a week buys the best-evidenced gut foods in the store"
            }
        },
        {
            type: "concept",
            title: "The Three Obstacles (and Their Fixes)",
            content: "Three predictable problems derail most people who try this protocol. All three have known fixes.\n\n**Obstacle 1: Gas and bloating.** When you raise fiber and beans, fermentation ramps up before your microbial community rebalances -- gas is literally the sound of a community in transition. **Fix: go slower.** Halve your fiber jump, rinse canned beans well, cook beans thoroughly, and give it 2-4 weeks. Persistent severe symptoms are a reason to see a doctor, not push through.\n\n**Obstacle 2: Picky eaters (including you).** You don't need anyone to love lentils. **Fix: blend and add, don't replace.** Blend white beans into pasta sauce, lentils into chili, spinach into smoothies. Add one new plant alongside familiar food instead of swapping meals wholesale. Spices count toward plant diversity precisely so that flavor can carry the strategy.\n\n**Obstacle 3: No time.** The protocol dies when every meal is a project. **Fix: batch once, eat all week.** One Sunday hour: a pot of beans, a pot of grains, a tray of roasted vegetables. Assemble bowls in 5 minutes all week. Frozen vegetables and canned beans are legitimate shortcuts -- nutritionally sound, dramatically faster.\n\nExpect imperfect weeks. The microbiome responds to your **average**, not your worst day.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">OBSTACLES AND FIXES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The three things that stop most people</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">GAS AND BLOATING</text>
                    <text x="300" y="268" text-anchor="middle" fill="#888" font-size="16">Community in transition</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIX: GO SLOWER</text>
                    <text x="800" y="268" text-anchor="middle" fill="#888" font-size="16">Halve the jump, wait 2-4 weeks</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">PICKY EATERS</text>
                    <text x="300" y="488" text-anchor="middle" fill="#888" font-size="16">Nobody has to love lentils</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIX: BLEND AND ADD</text>
                    <text x="800" y="488" text-anchor="middle" fill="#888" font-size="16">Hide beans in sauces, add not swap</text>
                    <rect x="80" y="610" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="665" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NO TIME</text>
                    <text x="300" y="708" text-anchor="middle" fill="#888" font-size="16">Every meal feels like a project</text>
                    <rect x="580" y="610" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="665" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FIX: BATCH COOKING</text>
                    <text x="800" y="708" text-anchor="middle" fill="#888" font-size="16">One Sunday hour, 5-minute bowls</text>
                    <rect x="200" y="850" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Your microbiome responds to your average --</text>
                    <text x="550" y="922" text-anchor="middle" fill="#ffd700" font-size="19">not your worst day</text>
                </svg>`,
                caption: "Every predictable failure mode has a known fix"
            }
        },
        {
            type: "quiz",
            question: "You start the protocol enthusiastically, doubling your fiber overnight -- and by day three you are bloated and miserable. What does the evidence suggest?",
            options: [
                { text: "You have a fiber intolerance and should return to your previous diet", correct: false },
                { text: "Fiber only helps people with certain microbiome types, and yours is the wrong type", correct: false },
                { text: "Gas reflects your microbial community adapting; slow the increase and give it 2-4 weeks", correct: true },
                { text: "You need a probiotic supplement first to prepare your gut for fiber", correct: false }
            ],
            explanation: "Gas is fermentation -- the sign that microbes are processing new substrate before the community has rebalanced toward efficient fiber-fermenters, which takes roughly 2-4 weeks. The evidence-based fix is a slower ramp of about 5 grams every few days, not abandoning fiber. Quitting at day three is the most common protocol failure, and the intolerance conclusion is usually premature. Severe or persistent symptoms, though, warrant a doctor rather than pushing through.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DAY-THREE WALL</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">Doubled fiber, now bloated. What now?</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">The most common protocol failure point</text>
                    <rect x="150" y="390" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">GAS = COMMUNITY IN TRANSITION</text>
                    <text x="550" y="482" text-anchor="middle" fill="#888" font-size="16">Fermenters ramp up before the ecosystem rebalances</text>
                    <rect x="200" y="580" width="700" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">SLOWER RAMP, 2-4 WEEKS</text>
                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="16">about 5 g added every few days</text>
                </svg>`,
                caption: "Final check: the difference between a symptom and a signal to quit"
            }
        },
        {
            type: "application",
            title: "Start the Protocol: This Week's Moves",
            content: "Don't attempt all six moves at once -- that's the day-three-wall recipe. This week, just these five actions:\n\n1. **Count your plants today** -- run yesterday's meals through the counting rules (spices, nuts, and coffee count). Write the number down. That's your baseline.\n\n2. **Buy the starter kit** -- one bag of lentils, oats, one tub of plain yogurt or bottle of kefir, one jar of sauerkraut or kimchi (or a cabbage, if you're feeling ambitious). Under $15.\n\n3. **Add one fermented serving daily** -- attach it to an existing meal: kefir at breakfast or kraut with dinner. Anchoring to a current habit beats relying on memory.\n\n4. **Add 5 grams of fiber** -- one new serving of beans, berries, or oats per day this week. Next week, add 5 more.\n\n5. **Pick your non-food lever** -- choose the weakest of your sleep, stress, or movement and make one concrete change: a bedtime alarm, a 10-minute daily walk, whatever is actually sustainable.\n\nReassess in two weeks: plant count, fiber estimate, and how you feel. Adjust from data, not vibes.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THIS WEEK'S MOVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five starter actions -- not all six moves at once</text>
                    <rect x="150" y="170" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Count yesterday's plants -- get your baseline</text>
                    <rect x="150" y="290" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="340" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="340" text-anchor="start" fill="#fff" font-size="18">Buy the under-15-dollar starter kit</text>
                    <rect x="150" y="410" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="460" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="460" text-anchor="start" fill="#fff" font-size="18">One fermented serving daily, anchored to a meal</text>
                    <rect x="150" y="530" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="580" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="580" text-anchor="start" fill="#fff" font-size="18">Add 5 g fiber this week, 5 more next week</text>
                    <rect x="150" y="650" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="700" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="700" text-anchor="start" fill="#fff" font-size="18">Fix your weakest lever: sleep, stress, or movement</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">Reassess in two weeks --</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="19">adjust from data, not vibes</text>
                </svg>`,
                caption: "Your starter week: baseline, kit, one ferment, one fiber bump, one lifestyle fix"
            }
        },
        {
            type: "quiz",
            question: "Which version of the protocol best reflects the evidence from this book?",
            options: [
                { text: "A premium probiotic, a greens powder, and a microbiome test to personalize your plan", correct: false },
                { text: "Eliminating all processed food and alcohol completely before adding any new foods", correct: false },
                { text: "Six daily fermented servings from day one, since that was the studied Stanford dose", correct: false },
                { text: "Gradually building plant variety toward 30 a week, fiber toward 25-38 g, and fermented servings upward, framed by a Mediterranean pattern", correct: true }
            ],
            explanation: "The evidence-ranked protocol is gradual and food-first: plant variety (American Gut), fiber raised slowly toward 25-38 g, fermented servings built up toward the Stanford trial's 6 -- which is a ceiling to grow into, not a starting requirement. The supplement stack has the weakest evidence, total elimination is unsustainable and unnecessary since the word is minimize, and jumping straight to 6 servings ignores the ramp-up principle that makes the protocol stick.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE WHOLE PROTOCOL</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">Which version matches the evidence?</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Watch for the gradual-vs-extreme distinction</text>
                    <rect x="150" y="390" width="380" height="150" rx="15" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">EXTREME AND FAST</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">eliminate everything,</text>
                    <text x="340" y="512" text-anchor="middle" fill="#888" font-size="15">max dose day one</text>
                    <rect x="570" y="390" width="380" height="150" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">GRADUAL AND FED</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">variety, fiber, ferments,</text>
                    <text x="760" y="512" text-anchor="middle" fill="#888" font-size="15">built up over weeks</text>
                    <rect x="200" y="600" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="19">Sustainable and boring beats</text>
                    <text x="550" y="672" text-anchor="middle" fill="#ffd700" font-size="19">dramatic and abandoned</text>
                </svg>`,
                caption: "Final check on the complete evidence-ranked playbook"
            }
        }
    ]
},
{
    id: 12,
    title: "Your Gut, Your Life",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You Started With a Food Tube. You End With an Ecosystem.",
            content: "Twelve lessons ago, your gut was probably just the place food went. Now look at what you know: it's a **second brain** with 500 million neurons, a **rainforest** of 38 trillion organisms assembled in your first years of life, an **immune academy**, a **hormone factory**, and a **barrier** one cell thick standing between you and chaos.\n\nMore importantly, you know something rarer than facts: you know **how to weigh them**. You can tell a mouse study from a human trial, a strain-specific result from a marketing claim, a correlation from a causal lever.\n\nThis final lesson does three things. It replays the whole arc so the pieces lock together. It hands you the critical-thinking toolkit as a permanent skill -- because the gut headlines will keep coming long after this book. And it leaves you with a 4-week reset plan and a new identity: not a patient, not a customer -- a **gardener**, tending a living system that will tend you back for the rest of your life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FULL PICTURE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What your gut turned out to be</text>
                    <circle cx="550" cy="480" r="150" fill="rgba(255,215,0,0.12)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="465" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">YOUR GUT</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">38 trillion residents</text>
                    <circle cx="230" cy="270" r="85" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="262" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">SECOND</text>
                    <text x="230" y="288" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">BRAIN</text>
                    <circle cx="870" cy="270" r="85" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="262" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">IMMUNE</text>
                    <text x="870" y="288" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">ACADEMY</text>
                    <circle cx="180" cy="690" r="85" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="180" y="682" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">HORMONE</text>
                    <text x="180" y="708" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">FACTORY</text>
                    <circle cx="920" cy="690" r="85" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="920" y="682" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">LIVING</text>
                    <text x="920" y="708" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">BARRIER</text>
                    <circle cx="550" cy="870" r="85" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="862" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">TENDED</text>
                    <text x="550" y="888" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">GARDEN</text>
                    <line x1="300" y1="330" x2="440" y2="410" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="800" y1="330" x2="660" y2="410" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="255" y1="650" x2="420" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="845" y1="650" x2="680" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="785" x2="550" y2="630" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                </svg>`,
                caption: "Twelve lessons, one organ, five identities"
            }
        },
        {
            type: "concept",
            title: "The Arc, Part 1: Meeting the Ecosystem",
            content: "Replay the first half of the journey and notice how each lesson set up the next.\n\n**Lesson 1 -- The second brain.** Your gut's enteric nervous system runs 500 million neurons and mostly talks TO your brain, not the other way around. First shock: the gut is not passive plumbing.\n\n**Lesson 2 -- The rainforest and its founding.** 38 trillion microbes, hundreds of species, assembled through birth mode, feeding, and early exposures -- a personal ecosystem largely settled by age three, but adjustable forever at the edges.\n\n**Lesson 3 -- Fiber, the master lever.** Your microbes ferment what you can't digest, producing **short-chain fatty acids** like butyrate -- the fuel of your colon lining and the molecule that kept reappearing in Lessons 8, 10, and 11.\n\n**Lesson 4 -- Fermented foods.** The Stanford trial: about 6 daily servings raised microbiome diversity and lowered 19 inflammatory markers in 10 weeks -- one of the cleanest dietary intervention results in the field.\n\n**Lesson 5 -- The gut-brain axis.** Vagus nerve, microbial neurotransmitter precursors, and the honest verdict on psychobiotics: promising, early, strain-specific.\n\nSee the pattern? Anatomy first, ecology second, then the two big food levers, then the long-distance wiring. The foundation was laid in exactly the order the later claims would need it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ARC: PART 1</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lessons 1-5: meeting the ecosystem</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="207" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">L1</text>
                    <text x="270" y="207" text-anchor="start" fill="#fff" font-size="18">The second brain: 500 million neurons</text>
                    <text x="270" y="242" text-anchor="start" fill="#888" font-size="15">Most signals travel gut to brain</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="347" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">L2</text>
                    <text x="270" y="347" text-anchor="start" fill="#fff" font-size="18">The rainforest: 38 trillion microbes, founded early</text>
                    <text x="270" y="382" text-anchor="start" fill="#888" font-size="15">Birth, feeding, and exposures shape the founding</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="487" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">L3</text>
                    <text x="270" y="487" text-anchor="start" fill="#fff" font-size="18">Fiber: the master lever, via SCFAs</text>
                    <text x="270" y="522" text-anchor="start" fill="#888" font-size="15">Butyrate fuels the colon lining</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="210" y="627" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">L4</text>
                    <text x="270" y="627" text-anchor="start" fill="#fff" font-size="18">Fermented foods: the Stanford trial</text>
                    <text x="270" y="662" text-anchor="start" fill="#888" font-size="15">Diversity up, 19 inflammatory markers down</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="210" y="767" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">L5</text>
                    <text x="270" y="767" text-anchor="start" fill="#fff" font-size="18">The gut-brain axis: vagus nerve and beyond</text>
                    <text x="270" y="802" text-anchor="start" fill="#888" font-size="15">Psychobiotics: promising, early, strain-specific</text>
                </svg>`,
                caption: "The first half: anatomy, ecology, the food levers, and the wiring"
            }
        },
        {
            type: "concept",
            title: "The Arc, Part 2: Trouble, Tools, and Reach",
            content: "The second half took the ecosystem into the real world.\n\n**Lesson 6 -- IBS.** The most common gut disorder reframed as a disorder of **gut-brain interaction**, with the low-FODMAP process as a structured tool -- not a forever diet.\n\n**Lesson 7 -- Probiotics, graded honestly.** Strain-specific evidence, mostly transient visitors, useful in specific situations -- and no substitute for feeding the residents you already have.\n\n**Lesson 8 -- The barrier.** One cell thick, mucus-armored, butyrate-fueled. **Leaky gut** the internet diagnosis is oversold; intestinal permeability the measurable phenomenon is real science.\n\n**Lesson 9 -- What damages the garden.** Antibiotics (sometimes necessary, never casual), ultra-processed diets, emulsifiers, heavy alcohol, chronic stress -- the demolition list.\n\n**Lesson 10 -- The hub organ.** Immunity (70 percent of immune cells), weight (contributor, not destiny), skin and liver -- correlations everywhere, causal levers few.\n\n**Lesson 11 -- The protocol.** Everything distilled: 30 plants, gradual fiber, fermented servings, Mediterranean frame, minimize list, sleep-stress-movement.\n\nOne sentence catches the whole book: **feed the ecosystem well, protect it from known harms, be skeptical of shortcuts, and let time do the compounding.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ARC: PART 2</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lessons 6-11: trouble, tools, and reach</text>
                    <rect x="150" y="160" width="800" height="100" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="203" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">L6</text>
                    <text x="270" y="203" text-anchor="start" fill="#fff" font-size="18">IBS: a gut-brain interaction disorder</text>
                    <text x="270" y="236" text-anchor="start" fill="#888" font-size="15">Low-FODMAP as a process, not a life sentence</text>
                    <rect x="150" y="285" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="328" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">L7</text>
                    <text x="270" y="328" text-anchor="start" fill="#fff" font-size="18">Probiotics: strain-specific, mostly transient</text>
                    <text x="270" y="361" text-anchor="start" fill="#888" font-size="15">Graded by evidence, situation by situation</text>
                    <rect x="150" y="410" width="800" height="100" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="210" y="453" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">L8</text>
                    <text x="270" y="453" text-anchor="start" fill="#fff" font-size="18">The barrier: one cell thick, butyrate-fueled</text>
                    <text x="270" y="486" text-anchor="start" fill="#888" font-size="15">Permeability is science; leaky gut hype is not</text>
                    <rect x="150" y="535" width="800" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="578" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">L9</text>
                    <text x="270" y="578" text-anchor="start" fill="#fff" font-size="18">The damage list: antibiotics, UPF, alcohol, stress</text>
                    <text x="270" y="611" text-anchor="start" fill="#888" font-size="15">Know the demolition crew to avoid it</text>
                    <rect x="150" y="660" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="703" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">L10</text>
                    <text x="280" y="703" text-anchor="start" fill="#fff" font-size="18">The hub organ: immunity, weight, skin, liver</text>
                    <text x="280" y="736" text-anchor="start" fill="#888" font-size="15">Correlations everywhere, causal levers few</text>
                    <rect x="150" y="785" width="800" height="100" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="210" y="828" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">L11</text>
                    <text x="280" y="828" text-anchor="start" fill="#fff" font-size="18">The protocol: six moves, evidence-ranked</text>
                    <text x="280" y="861" text-anchor="start" fill="#888" font-size="15">Feed well, protect, stay skeptical, let time compound</text>
                </svg>`,
                caption: "The second half: from disorders to a complete working protocol"
            }
        },
        {
            type: "concept",
            title: "The Real Gift: A Working Nonsense Detector",
            content: "Facts fade. Skills stay. The most durable thing this book taught you is a three-question filter for every gut health claim you'll ever meet:\n\n**Question 1: Which strain, exactly?** Lesson 7's rule. Probiotic effects are **strain-specific** -- Lactobacillus rhamnosus GG has evidence for specific uses that another Lactobacillus does not inherit. A label that says only probiotic blend is telling you it hasn't done the homework.\n\n**Question 2: Trial or anecdote? Mice or humans?** The Stanford fermented-food study earns your confidence because it was a **randomized controlled trial in humans** with measured outcomes. A germ-free mouse result (Lesson 10) proves possibility, not human fact. An influencer's transformation story proves nothing at all -- you never see the thousand people the same routine did nothing for.\n\n**Question 3: Mechanism or outcome?** Boosts butyrate production is a mechanism claim -- plausible, cheap to make, and not the same as showing people actually got better. Reduced symptoms in a controlled trial is an **outcome**. Mechanisms are how researchers generate hypotheses; outcomes are how they confirm them. Marketing loves mechanisms because they sound scientific without requiring proof.\n\nRun every future headline through those three questions and you'll be more rigorous than most of the internet -- permanently.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE THREE QUESTIONS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your permanent nonsense detector</text>
                    <rect x="100" y="170" width="900" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">1. WHICH STRAIN, EXACTLY?</text>
                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-size="18">Effects are strain-specific --</text>
                    <text x="550" y="300" text-anchor="middle" fill="#888" font-size="16">a vague blend means homework not done</text>
                    <rect x="100" y="370" width="900" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2. TRIAL OR ANECDOTE? MICE OR HUMANS?</text>
                    <text x="550" y="468" text-anchor="middle" fill="#fff" font-size="18">RCTs in humans earn confidence --</text>
                    <text x="550" y="500" text-anchor="middle" fill="#888" font-size="16">mouse results prove possibility, stories prove nothing</text>
                    <rect x="100" y="570" width="900" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">3. MECHANISM OR OUTCOME?</text>
                    <text x="550" y="668" text-anchor="middle" fill="#fff" font-size="18">Sounds scientific is not the same as</text>
                    <text x="550" y="700" text-anchor="middle" fill="#888" font-size="16">people in a trial actually got better</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">Facts fade. This filter is the skill</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="19">that stays with you for life</text>
                </svg>`,
                caption: "Three questions that outlast every fact in this book"
            }
        },
        {
            type: "quiz",
            question: "A supplement ad says: 'Our proprietary probiotic blend boosts butyrate production -- the gut fuel scientists are raving about!' Using the three-question filter, what is the sharpest critique?",
            options: [
                { text: "Butyrate is not actually important, so the claim is scientifically wrong", correct: false },
                { text: "It names no specific strains and offers a mechanism claim instead of any human outcome evidence", correct: true },
                { text: "Probiotics are always useless, so any probiotic ad is automatically false", correct: false },
                { text: "The claim is fine as long as the company cites a mouse study showing butyrate increases", correct: false }
            ],
            explanation: "The ad fails two filter questions at once: a proprietary blend hides which strains are involved even though effects are strain-specific, and boosts butyrate is a mechanism claim -- plausible-sounding but not evidence that humans taking it actually got healthier in a trial. Butyrate genuinely matters, so option one overcorrects, and blanket dismissal of all probiotics ignores Lesson 7's strain-specific evidence. A mouse study would still leave the human outcome question unanswered.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">FILTER IN ACTION</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">Proprietary blend boosts butyrate production</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">What would a trained reader ask?</text>
                    <rect x="150" y="390" width="380" height="150" rx="15" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">RED FLAG 1</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">no strains named --</text>
                    <text x="340" y="512" text-anchor="middle" fill="#888" font-size="15">effects are strain-specific</text>
                    <rect x="570" y="390" width="380" height="150" rx="15" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">RED FLAG 2</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">mechanism talk, zero</text>
                    <text x="760" y="512" text-anchor="middle" fill="#888" font-size="15">human outcome data</text>
                    <rect x="200" y="600" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="19">Sounding scientific is cheap --</text>
                    <text x="550" y="672" text-anchor="middle" fill="#ffd700" font-size="19">trial outcomes are expensive</text>
                </svg>`,
                caption: "Applying the three-question filter to a real-world style claim"
            }
        },
        {
            type: "example",
            title: "Reading Next Year's Headline",
            content: "Sometime soon you'll see a headline like this one -- a composite of dozens of real articles: **Scientists discover gut bacteria linked to depression -- is your microbiome making you sad?**\n\nWalk it through the filter, the way you now can:\n\n\u2022 **Find the study.** It's usually a cross-sectional comparison: people with depression had less of genus X than controls. That's a **correlation**. Depression changes appetite, diet, sleep, and medication use -- any of which could shift microbes. The arrow could point either way, or a third factor could drive both.\n\n\u2022 **Check the species.** Half these studies are in mice -- often the germ-free kind, whose brains develop abnormally to begin with. Possibility, not human fact.\n\n\u2022 **Look for the trial.** Has anyone randomized humans to an intervention and measured depression outcomes? For a few specific strains, small trials exist with modest effects -- which is exactly how Lesson 5 graded psychobiotics: promising, early, not prescription-ready.\n\n\u2022 **Notice what the article sells.** If it funnels to a test kit or supplement by paragraph nine, you know the genre.\n\nYour conclusion won't be cynicism -- the gut-brain link is real and the research is genuinely exciting. It will be **calibration**: interesting, early, watch this space, feed the garden meanwhile. That is precisely the skill this book existed to build.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HEADLINE AUTOPSY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Gut bacteria linked to depression -- now what?</text>
                    <rect x="100" y="170" width="900" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">STEP 1: FIND THE STUDY</text>
                    <text x="550" y="252" text-anchor="middle" fill="#888" font-size="16">Usually correlational -- the arrow could point either way</text>
                    <rect x="100" y="310" width="900" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="355" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">STEP 2: CHECK THE SPECIES</text>
                    <text x="550" y="392" text-anchor="middle" fill="#888" font-size="16">Mouse studies prove possibility, not human fact</text>
                    <rect x="100" y="450" width="900" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="495" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">STEP 3: LOOK FOR THE HUMAN TRIAL</text>
                    <text x="550" y="532" text-anchor="middle" fill="#888" font-size="16">Randomized? Measured outcomes? Modest effects so far</text>
                    <rect x="100" y="590" width="900" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">STEP 4: NOTICE WHAT IT SELLS</text>
                    <text x="550" y="672" text-anchor="middle" fill="#888" font-size="16">A funnel to kits or supplements reveals the genre</text>
                    <rect x="150" y="740" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">VERDICT: CALIBRATION, NOT CYNICISM</text>
                    <text x="550" y="822" text-anchor="middle" fill="#888" font-size="16">Interesting, early, watch this space -- feed the garden meanwhile</text>
                </svg>`,
                caption: "The four-step autopsy you can run on any future gut headline"
            }
        },
        {
            type: "concept",
            title: "The 4-Week Gut Reset",
            content: "Here is the whole book compressed into one month of gentle escalation. Each week adds one layer; nothing is extreme; everything comes from the evidence you've already seen.\n\n**Week 1 -- Baseline and first ferment.** Add **one daily fermented serving** (kefir, yogurt, kraut, kimchi) anchored to an existing meal. Count your plant types for the week -- just count, no pressure. Most people find their baseline is 10-15.\n\n**Week 2 -- Fiber up, five new plants.** Add roughly **5-10 grams of daily fiber** via beans, oats, or berries, and introduce **5 plant types you didn't eat last week**. Herbs and spices are the easy wins.\n\n**Week 3 -- Second ferment, two swaps.** Add a **second daily fermented serving** and swap **two ultra-processed regulars** for whole-food versions -- the sweetened breakfast cereal for overnight oats, the nightly soda for kombucha or sparkling water.\n\n**Week 4 -- Full pattern and reassessment.** Run the complete Lesson 11 protocol for one week: 25-30 plants, fiber near target, 2-3 fermented servings, Mediterranean frame, your chosen lifestyle lever. Then sit down and honestly assess: digestion, energy, mood, sleep.\n\nNo lab test required -- your own four-week comparison is more relevant to you than any consumer microbiome kit currently for sale. And if week four feels good? That's not the finish line. That's the new normal.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 4-WEEK RESET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One layer per week, nothing extreme</text>
                    <rect x="100" y="170" width="900" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WEEK 1: BASELINE + FIRST FERMENT</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="18">One fermented serving daily, count your plants</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">Most baselines land at 10-15 plant types</text>
                    <rect x="100" y="350" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="400" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">WEEK 2: FIBER UP + 5 NEW PLANTS</text>
                    <text x="550" y="440" text-anchor="middle" fill="#fff" font-size="18">Add 5-10 g fiber, five plants you skipped last week</text>
                    <text x="550" y="475" text-anchor="middle" fill="#888" font-size="16">Herbs and spices are the easy wins</text>
                    <rect x="100" y="530" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">WEEK 3: SECOND FERMENT + 2 SWAPS</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="18">Second serving, swap two ultra-processed regulars</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">Cereal to oats, soda to kombucha</text>
                    <rect x="100" y="710" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">WEEK 4: FULL PATTERN + REASSESS</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">Run the whole protocol, then honestly assess</text>
                    <text x="550" y="835" text-anchor="middle" fill="#888" font-size="16">Digestion, energy, mood, sleep -- your data</text>
                    <rect x="250" y="920" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="19">Week four is not the finish line -- it is the new normal</text>
                </svg>`,
                caption: "Four weeks from baseline to full protocol, one gentle layer at a time"
            }
        },
        {
            type: "application",
            title: "Launch Your Reset Today",
            content: "The reset starts with 15 minutes of setup, today:\n\n1. **Write your baseline** -- list every plant type you ate yesterday and this past week, using the generous counting rules. This number is your before photo.\n\n2. **Schedule the four weeks** -- put four Sunday check-ins in your calendar, one per week, five minutes each: plant count, fiber estimate, one line on how you feel.\n\n3. **Buy week one's supplies** -- one fermented food you genuinely like (this matters -- kefir, yogurt, kraut, or kimchi) and nothing else yet. Week one is deliberately easy.\n\n4. **Tell one person** -- accountability roughly doubles follow-through on habit changes. A housemate, a group chat, anyone who'll ask how week three went.\n\n5. **Set the doctor rule now** -- write down the red flags (next card) so that if any appear during the reset, you stop protocol-thinking and book an appointment instead.\n\nThat's the launch. Not a transformation montage -- a calendar, a shopping list, and one honest number.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LAUNCH CHECKLIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fifteen minutes of setup, today</text>
                    <rect x="150" y="170" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Write your baseline plant count</text>
                    <rect x="150" y="290" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="340" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="340" text-anchor="start" fill="#fff" font-size="18">Calendar four Sunday check-ins</text>
                    <rect x="150" y="410" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="460" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="460" text-anchor="start" fill="#fff" font-size="18">Buy one fermented food you actually like</text>
                    <rect x="150" y="530" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="580" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="580" text-anchor="start" fill="#fff" font-size="18">Tell one person -- accountability doubles follow-through</text>
                    <rect x="150" y="650" width="800" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="700" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="700" text-anchor="start" fill="#fff" font-size="18">Write down the red flags and the doctor rule</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">A calendar, a shopping list,</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="19">and one honest number</text>
                </svg>`,
                caption: "Five setup steps that turn the reset from intention into schedule"
            }
        },
        {
            type: "concept",
            title: "When to Close This App and Call a Doctor",
            content: "One final repetition, because it's the most important safety rule in the book. Everything here is **education, not diagnosis** -- and some symptoms should never be self-managed with a food protocol.\n\n**The red flags, one last time:**\n\n\u2022 **Blood in your stool** -- red or black and tarry. Investigate, always\n\u2022 **Unintentional weight loss** -- losing weight without trying is a workup, not a win\n\u2022 **Symptoms that wake you from sleep** -- pain or diarrhea that interrupts sleep points away from functional causes\n\u2022 **Fever alongside gut symptoms** -- suggests infection or inflammation\n\u2022 **New, persistent symptoms starting after age 50** -- new-onset changes in this age group warrant screening, full stop\n\u2022 Add to these: difficulty swallowing, persistent vomiting, or a family history of colorectal cancer or IBD with new symptoms\n\nNone of these mean something is definitely wrong. All of them mean a **professional should decide** -- with tools this book doesn't have: blood work, stool tests, imaging, and scopes.\n\nThe fiber-and-ferments protocol is for the healthy middle: everyday digestion, general wellbeing, long-term maintenance. Red flags are the exit ramp from protocol-land into medicine. Knowing the difference is not a footnote to gut literacy. It IS gut literacy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RED FLAGS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">When protocols end and doctors begin</text>
                    <rect x="80" y="170" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">BLOOD IN STOOL</text>
                    <text x="300" y="262" text-anchor="middle" fill="#888" font-size="15">red, or black and tarry</text>
                    <rect x="580" y="170" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">UNINTENDED WEIGHT LOSS</text>
                    <text x="800" y="262" text-anchor="middle" fill="#888" font-size="15">a workup, not a win</text>
                    <rect x="80" y="330" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">NIGHT WAKING</text>
                    <text x="300" y="422" text-anchor="middle" fill="#888" font-size="15">symptoms that interrupt sleep</text>
                    <rect x="580" y="330" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">FEVER WITH GUT SYMPTOMS</text>
                    <text x="800" y="422" text-anchor="middle" fill="#888" font-size="15">infection or inflammation</text>
                    <rect x="80" y="490" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="545" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">NEW ONSET AFTER 50</text>
                    <text x="300" y="582" text-anchor="middle" fill="#888" font-size="15">screening territory, full stop</text>
                    <rect x="580" y="490" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="545" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SWALLOWING TROUBLE, VOMITING</text>
                    <text x="800" y="582" text-anchor="middle" fill="#888" font-size="15">or family history + new symptoms</text>
                    <rect x="150" y="680" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="725" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">ANY OF THESE = SEE A PROFESSIONAL</text>
                    <text x="550" y="762" text-anchor="middle" fill="#888" font-size="16">They have blood work, imaging, and scopes -- this app has neither</text>
                </svg>`,
                caption: "Memorize this card: the boundary between education and medicine"
            }
        },
        {
            type: "example",
            title: "A Tuesday in the Life of a Gardener",
            content: "Fast-forward six months. Here's what all this knowledge looks like when it's just... your life.\n\n**7:15 am** -- Kefir into the smoothie without thinking about it. You haven't consciously counted plants in months, but the smoothie has five because that's just how you make it now.\n\n**12:30 pm** -- Lunch is Sunday's batch-cooked farro, whatever beans were in the pot, greens, olive oil. Assembly time: four minutes. The kraut goes on the side because you like it now -- something February-you would not have believed.\n\n**3:00 pm** -- A coworker forwards a post: This one bacteria is why you're tired all the time -- and there's a quiz to find YOUR strain! You feel the three questions fire automatically: which strain, what trial, mechanism or outcome? You reply kindly, without the lecture.\n\n**6:30 pm** -- Walk after dinner, mostly because it clears your head. The butyrate producers appreciate it anyway.\n\n**9:40 pm** -- Doomscrolling, you hit a headline about the microbiome and a disease that runs in your family. Old you: panic or a $200 test kit. Current you: calibration -- interesting, early, keep feeding the garden, mention it at the next checkup.\n\nNo willpower on display anywhere. Just defaults, quietly rebuilt -- a garden that mostly tends itself, because you spent a month learning how it works.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SIX MONTHS LATER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A Tuesday, running on defaults</text>
                    <rect x="100" y="170" width="900" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="180" y="220" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">7:15 AM</text>
                    <text x="340" y="220" text-anchor="start" fill="#fff" font-size="18">Kefir smoothie, five plants, zero thought</text>
                    <text x="340" y="255" text-anchor="start" fill="#888" font-size="15">The habit does the counting now</text>
                    <rect x="100" y="320" width="900" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="180" y="370" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">12:30 PM</text>
                    <text x="340" y="370" text-anchor="start" fill="#fff" font-size="18">Batch-cooked bowl in four minutes, kraut on the side</text>
                    <text x="340" y="405" text-anchor="start" fill="#888" font-size="15">You like it now -- February-you is baffled</text>
                    <rect x="100" y="470" width="900" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="520" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">3:00 PM</text>
                    <text x="340" y="520" text-anchor="start" fill="#fff" font-size="18">Viral gut post arrives; the three questions fire</text>
                    <text x="340" y="555" text-anchor="start" fill="#888" font-size="15">Kind reply, no lecture</text>
                    <rect x="100" y="620" width="900" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="180" y="670" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">9:40 PM</text>
                    <text x="340" y="670" text-anchor="start" fill="#fff" font-size="18">Scary headline: calibration, not panic</text>
                    <text x="340" y="705" text-anchor="start" fill="#888" font-size="15">Mention at checkup, keep feeding the garden</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">No willpower anywhere --</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="19">just defaults, quietly rebuilt</text>
                </svg>`,
                caption: "The end state: knowledge dissolved into ordinary, sustainable habits"
            }
        },
        {
            type: "quote",
            content: "The gut microbiome is not a fad. It is a newly discovered organ, and we are learning to take care of it the way we learned to take care of our hearts.",
            author: "Justin Sonnenburg, Stanford microbiologist (paraphrased from interviews)",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"The gut microbiome is not a fad.</text>
                    <text x="160" y="262" text-anchor="start" fill="#fff" font-style="italic" font-size="22">It is a newly discovered organ, and we are</text>
                    <text x="160" y="304" text-anchor="start" fill="#fff" font-style="italic" font-size="22">learning to take care of it the way we</text>
                    <text x="160" y="346" text-anchor="start" fill="#fff" font-style="italic" font-size="22">learned to take care of our hearts."</text>
                    <text x="940" y="400" text-anchor="end" fill="#8b5cf6" font-size="18">-- Justin Sonnenburg, Stanford</text>
                    <rect x="200" y="500" width="700" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE HEART PARALLEL</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="17">Cardiology needed decades to turn discoveries</text>
                    <text x="550" y="638" text-anchor="middle" fill="#fff" font-size="17">into everyday habits -- exercise, diet, no smoking</text>
                    <text x="550" y="675" text-anchor="middle" fill="#888" font-size="16">Microbiome science is on that same road, earlier</text>
                </svg>`,
                caption: "A field maturing from discovery toward everyday care"
            }
        },
        {
            type: "concept",
            title: "You Are the Gardener Now",
            content: "One last reframe, and it's the one that makes everything else stick.\n\nYou are not a **patient** waiting for a diagnosis -- if red flags appear, you'll get proper care, but that's the exception path. You are not a **customer** the wellness industry can frighten into a subscription -- you have a nonsense detector for that now. You are a **gardener**: someone responsible for a living system, working with biology rather than against it.\n\nGardeners think differently:\n\n\u2022 They play the **long game** -- a garden isn't fixed in a weekend, and neither is an ecosystem of 38 trillion organisms\n\u2022 They feed the **soil**, not just the plants -- fiber and variety over quick fixes\n\u2022 They expect **seasons** -- antibiotics you genuinely need, stressful months, imperfect weeks. Gardens recover when the underlying care is sound\n\u2022 They **observe** -- your four-week reset notes are worth more to you than a generic test result\n\nAnd to say it plainly one final time: this book is **education, not medical advice**. It exists to make you a sharper reader of evidence and a better tender of your own daily habits -- not to replace the clinicians who know your history. Use it that way, and it will keep paying off for decades.\n\nThe garden is planted. It's been growing since the day you were born. Now you know how to tend it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GARDENER'S CREED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How you think about your gut from now on</text>
                    <rect x="80" y="170" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PLAY THE LONG GAME</text>
                    <text x="300" y="268" text-anchor="middle" fill="#888" font-size="16">Ecosystems change in months</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="16">and years, not weekends</text>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FEED THE SOIL</text>
                    <text x="800" y="268" text-anchor="middle" fill="#888" font-size="16">Fiber and variety over</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="16">quick fixes and pills</text>
                    <rect x="80" y="380" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">EXPECT SEASONS</text>
                    <text x="300" y="478" text-anchor="middle" fill="#888" font-size="16">Imperfect weeks happen --</text>
                    <text x="300" y="510" text-anchor="middle" fill="#888" font-size="16">gardens recover with sound care</text>
                    <rect x="580" y="380" width="440" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="435" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">OBSERVE YOUR PLOT</text>
                    <text x="800" y="478" text-anchor="middle" fill="#888" font-size="16">Your own notes beat</text>
                    <text x="800" y="510" text-anchor="middle" fill="#888" font-size="16">generic test kits</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="658" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">EDUCATION, NOT MEDICAL ADVICE</text>
                    <text x="550" y="698" text-anchor="middle" fill="#888" font-size="16">Sharper reading, better habits -- clinicians for the rest</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">The garden has grown since the day you were born --</text>
                    <text x="550" y="862" text-anchor="middle" fill="#ffd700" font-size="19">now you know how to tend it</text>
                </svg>`,
                caption: "Patient no, customer no -- gardener, for life"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures this book's complete message about gut health?",
            options: [
                { text: "With the right probiotic strains, most chronic health problems can be traced to the gut and fixed there", correct: false },
                { text: "Feed the ecosystem with plant variety, fiber, and fermented foods; protect it from known harms; judge new claims by evidence quality; and see a doctor when red flags appear", correct: true },
                { text: "Since most microbiome findings are just correlations, gut health efforts are premature until the science matures", correct: false },
                { text: "The microbiome is set by age three, so adult diet changes mainly affect digestion rather than the microbial community", correct: false }
            ],
            explanation: "The book's synthesis holds four ideas at once: proven feeding levers (variety, fiber, ferments -- American Gut and Stanford), protection from known harms, the three-question evidence filter for everything else, and hard boundaries where medicine takes over. The probiotic answer inflates Lesson 7's careful strain-specific grading into hype, the dismissal answer mistakes calibration for cynicism, and while the early years are formative, Lessons 3, 4, and 11 showed adult diets shifting composition and inflammation within weeks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="160" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWELVE LESSONS, ONE MESSAGE</text>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="18">What does the whole book add up to?</text>
                    <rect x="80" y="370" width="300" height="130" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">FEED</text>
                    <text x="230" y="462" text-anchor="middle" fill="#888" font-size="15">variety, fiber, ferments</text>
                    <rect x="400" y="370" width="300" height="130" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">PROTECT</text>
                    <text x="550" y="462" text-anchor="middle" fill="#888" font-size="15">avoid the damage list</text>
                    <rect x="720" y="370" width="300" height="130" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="425" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">JUDGE</text>
                    <text x="870" y="462" text-anchor="middle" fill="#888" font-size="15">the three questions</text>
                    <rect x="250" y="560" width="600" height="130" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">KNOW THE BOUNDARY</text>
                    <text x="550" y="652" text-anchor="middle" fill="#888" font-size="15">red flags mean a doctor, not a diet</text>
                    <rect x="200" y="760" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="19">Feed. Protect. Judge. Know the boundary.</text>
                    <text x="550" y="832" text-anchor="middle" fill="#ffd700" font-size="19">The whole book in four words</text>
                </svg>`,
                caption: "The last check: the book's entire message in one question"
            }
        }
    ]
}
]
};
