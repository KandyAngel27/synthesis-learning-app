// External book module — Heart of the Matter: Cardiovascular Health Decoded
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.HEART_OF_THE_MATTER_BOOK = {
    id: "heart-of-the-matter",
    title: "Heart of the Matter: Cardiovascular Health Decoded",
    author: "Synthesis Curriculum",
    description: "Your heart's owner's manual — blood pressure, cholesterol and ApoB decoded, statins graded honestly, AFib, warning signs by sex, and the movement and food patterns with real trial evidence.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "The Engine You Never Think About",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Right Now, While You Read This",
            content: "In the time it takes you to read this card, your heart will beat about 70 times. It did that while you slept last night. It will do it during every meeting, every argument, every vacation of your life -- roughly 100,000 times today alone -- and it never once asks for your attention.\n\nThat silence is the problem. Heart disease is the number one killer of humans on Earth, and in the US it takes roughly 1 in every 5 lives. Yet the World Health Organization estimates that around **80% of premature heart disease is preventable**.\n\nRead that again: the deadliest thing on the planet is mostly optional. The catch is that prevention requires knowing things your body will never volunteer to tell you. This book teaches you what to ask, what the answers mean, and what actually moves the needle -- with real trials and real numbers, not wellness folklore.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SILENT ENGINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The deadliest disease is mostly preventable</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">THE THREAT</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="44" font-weight="bold">#1 killer</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="20">worldwide and in the US</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="18">~1 in 5 US deaths</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="18">~695,000 Americans per year</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE OPPORTUNITY</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="44" font-weight="bold">~80%</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="20">of premature heart disease</text>
                    <text x="810" y="395" text-anchor="middle" fill="#fff" font-size="20">is preventable</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="18">World Health Organization</text>
                    <circle cx="550" cy="650" r="90" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                    <path d="M550 700 L505 650 Q485 620 505 598 Q528 578 550 605 Q572 578 595 598 Q615 620 595 650 Z" fill="#ec4899"/>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="22">100,000 beats today, zero complaints</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Prevention only works if you know your numbers</text>
                </svg>`,
                caption: "The number one killer is also the most preventable major disease"
            }
        },
        {
            type: "concept",
            title: "The Number One Killer, By the Numbers",
            content: "Before we talk about the heart itself, look at the scale of the problem -- because the scale is exactly why this book is worth your time.\n\n• **Worldwide**: cardiovascular disease kills roughly **18 million people a year** -- more than all cancers combined\n• **In the US**: about **695,000 deaths a year** from heart disease -- roughly **1 in every 5 deaths**\n• **It is not just a men's disease**: heart disease is also the leading killer of women, who are more likely to have atypical symptoms and delayed diagnosis\n• **It is not just an old-age disease**: plaque begins forming in the artery walls in your 20s and 30s; autopsy studies of young trauma victims have found early streaks of it in teenagers\n\nHere is the reframe that matters: heart disease is not a lightning strike. It is a slow construction project that runs for decades before the grand opening. That is terrible news if you ignore it -- and genuinely great news if you don't, because a decades-long process gives you decades of chances to interrupt it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SCALE OF IT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cardiovascular disease in numbers</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">~18 million</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="19">deaths per year worldwide</text>
                    <text x="300" y="310" text-anchor="middle" fill="#888" font-size="16">more than all cancers combined</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">~695,000</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="19">US deaths per year</text>
                    <text x="800" y="310" text-anchor="middle" fill="#888" font-size="16">about 1 in 5 of all US deaths</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">WOMEN TOO</text>
                    <text x="300" y="495" text-anchor="middle" fill="#fff" font-size="18">Leading killer of women,</text>
                    <text x="300" y="530" text-anchor="middle" fill="#888" font-size="16">often with atypical symptoms</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">STARTS YOUNG</text>
                    <text x="800" y="495" text-anchor="middle" fill="#fff" font-size="18">Plaque begins in your 20s,</text>
                    <text x="800" y="530" text-anchor="middle" fill="#888" font-size="16">decades before symptoms</text>
                    <rect x="150" y="640" width="800" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE REFRAME</text>
                    <text x="550" y="750" text-anchor="middle" fill="#fff" font-size="20">Heart disease is not a lightning strike.</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="20">It is a slow construction project --</text>
                    <text x="550" y="830" text-anchor="middle" fill="#888" font-size="18">which gives you decades of chances to interrupt it</text>
                </svg>`,
                caption: "The scale of cardiovascular disease -- and why the timeline is your ally"
            }
        },
        {
            type: "concept",
            title: "The Most Reliable Machine Ever Built",
            content: "Now meet the machine itself, because respecting the engineering makes you want to maintain it.\n\nYour heart is a fist-sized muscle weighing under a pound. Its performance specs would embarrass any human-built pump:\n\n• **~100,000 beats per day**, every day, no scheduled downtime\n• **~2.5 billion beats** over an average lifetime\n• **~7,500 liters of blood pumped daily** -- about 2,000 gallons, enough to fill a small tanker truck\n• It supplies a vascular network of roughly **60,000 miles of vessels** -- long enough to circle the Earth more than twice\n• A red blood cell completes a full lap of your body in about **60 seconds** at rest\n\nNo engineered pump on Earth runs 80 years with zero maintenance stops. But that reliability has a dark side: a machine that never complains gets ignored. Nobody skips oil changes on a car that flashes warning lights. Your heart mostly doesn't flash them -- so the maintenance schedule has to come from you, not from symptoms.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ENGINE SPEC SHEET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One fist-sized pump, lifetime warranty pending</text>
                    <rect x="80" y="170" width="300" height="200" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="32">100,000</text>
                    <text x="230" y="285" text-anchor="middle" fill="#fff" font-size="18">beats per day</text>
                    <text x="230" y="320" text-anchor="middle" fill="#888" font-size="15">no downtime, ever</text>
                    <rect x="400" y="170" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">2.5 billion</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="18">beats per lifetime</text>
                    <text x="550" y="320" text-anchor="middle" fill="#888" font-size="15">roughly 80 years of work</text>
                    <rect x="720" y="170" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">7,500 L</text>
                    <text x="870" y="285" text-anchor="middle" fill="#fff" font-size="18">pumped daily</text>
                    <text x="870" y="320" text-anchor="middle" fill="#888" font-size="15">about 2,000 gallons</text>
                    <rect x="150" y="420" width="800" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="30">60,000 miles of vessels</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="20">enough to circle the Earth more than twice</text>
                    <text x="550" y="575" text-anchor="middle" fill="#888" font-size="17">one full blood lap of your body: about 60 seconds</text>
                    <circle cx="550" cy="740" r="70" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                    <path d="M550 780 L515 742 Q500 718 515 702 Q532 687 550 708 Q568 687 585 702 Q600 718 585 742 Z" fill="#ec4899"/>
                    <rect x="180" y="870" width="740" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="912" text-anchor="middle" fill="#ffd700" font-size="20">A machine that never complains gets ignored --</text>
                    <text x="550" y="945" text-anchor="middle" fill="#fff" font-size="18">so its maintenance schedule has to come from you</text>
                </svg>`,
                caption: "Your heart's performance specs, next to no machine humans have ever built"
            }
        },
        {
            type: "visual",
            title: "Your Heart in 60 Seconds",
            content: "Here is all the anatomy you need for this entire book, in one picture.\n\n**Four chambers**: the right atrium and right ventricle receive used blood and send it to the lungs for oxygen; the left atrium and left ventricle receive that fresh blood and launch it to the body. The left ventricle is the powerhouse -- its wall is about three times thicker because it pushes against your whole circulation.\n\n**Four valves** act as one-way doors between chambers, keeping ~7,500 daily liters flowing forward, never backward.\n\n**Coronary arteries** wrap the outside of the heart like a crown (corona) and feed the heart muscle itself. These small vessels -- not the chambers -- are where heart attacks happen.\n\n**The electrical system** is the built-in pacemaker and wiring that times every beat. We will meet it properly in the rhythm lesson.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR CHAMBERS, ONE JOB</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Used blood to the lungs, fresh blood to the body</text>
                    <rect x="150" y="180" width="380" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="340" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">RIGHT ATRIUM</text>
                    <text x="340" y="285" text-anchor="middle" fill="#fff" font-size="17">Collects used blood</text>
                    <text x="340" y="320" text-anchor="middle" fill="#888" font-size="15">returning from the body</text>
                    <rect x="570" y="180" width="380" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LEFT ATRIUM</text>
                    <text x="760" y="285" text-anchor="middle" fill="#fff" font-size="17">Receives fresh blood</text>
                    <text x="760" y="320" text-anchor="middle" fill="#888" font-size="15">back from the lungs</text>
                    <path d="M340 380 L340 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="340,440 332,426 348,426" fill="#14b8a6"/>
                    <path d="M760 380 L760 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="760,440 752,426 768,426" fill="#14b8a6"/>
                    <text x="550" y="415" text-anchor="middle" fill="#14b8a6" font-size="16">valves: one-way doors</text>
                    <rect x="150" y="450" width="380" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="340" y="510" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">RIGHT VENTRICLE</text>
                    <text x="340" y="555" text-anchor="middle" fill="#fff" font-size="17">Pumps blood to the lungs</text>
                    <text x="340" y="590" text-anchor="middle" fill="#888" font-size="15">short trip, thinner wall</text>
                    <rect x="570" y="450" width="380" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="4"/>
                    <text x="760" y="510" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LEFT VENTRICLE</text>
                    <text x="760" y="555" text-anchor="middle" fill="#fff" font-size="17">Pumps blood to the body</text>
                    <text x="760" y="590" text-anchor="middle" fill="#888" font-size="15">the powerhouse, 3x thicker wall</text>
                    <rect x="80" y="720" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="780" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">CORONARY ARTERIES</text>
                    <text x="300" y="825" text-anchor="middle" fill="#fff" font-size="17">The heart's own fuel lines --</text>
                    <text x="300" y="860" text-anchor="middle" fill="#888" font-size="15">the vessels that clog in heart attacks</text>
                    <rect x="580" y="720" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="780" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">ELECTRICAL SYSTEM</text>
                    <text x="800" y="825" text-anchor="middle" fill="#fff" font-size="17">Built-in pacemaker and wiring</text>
                    <text x="800" y="860" text-anchor="middle" fill="#888" font-size="15">times every beat (rhythm lesson ahead)</text>
                </svg>`,
                caption: "The complete 60-second anatomy: chambers, valves, fuel lines, and wiring"
            }
        },
        {
            type: "quiz",
            question: "According to the World Health Organization, roughly what share of premature heart disease is preventable?",
            options: [
                { text: "About 25% -- genetics decides most of the rest", correct: false },
                { text: "About 50% -- half luck, half lifestyle", correct: false },
                { text: "About 80% -- most premature cases are preventable", correct: true },
                { text: "Nearly 100% -- heart disease is entirely a lifestyle disease", correct: false }
            ],
            explanation: "The WHO estimates around 80% of premature heart disease and stroke is preventable through blood pressure control, healthy diet, activity, and not smoking. The tempting answer is 50% -- many people assume genetics and lifestyle split the risk evenly -- but genes usually load the gun while daily habits pull the trigger. The 100% option overshoots: some risk is inherited or unlucky, which is why 'preventable' applies to most, not all, premature cases.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE PREVENTION QUESTION</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">The number one killer worldwide...</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">...but how much of it has to happen?</text>
                    <rect x="150" y="400" width="800" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <rect x="150" y="400" width="640" height="80" rx="20" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="470" y="448" text-anchor="middle" fill="#fff" font-size="20" font-weight="bold">Preventable portion</text>
                    <text x="870" y="448" text-anchor="middle" fill="#888" font-size="16">Other</text>
                    <text x="550" y="560" text-anchor="middle" fill="#888" font-size="18">What does the green bar represent?</text>
                </svg>`,
                caption: "Test your understanding of the prevention opportunity"
            }
        },
        {
            type: "concept",
            title: "The Fuel Lines That Clog",
            content: "Here is the single most useful anatomical fact in cardiology: **the heart does not feed itself from the blood inside its chambers**. Even though liters of blood rush through it every minute, the heart muscle gets its own oxygen through two small vessels on its outer surface -- the **coronary arteries** -- each only 3 to 4 millimeters wide, about the diameter of a cooked spaghetti noodle.\n\nWhy this matters:\n\n• A **heart attack** is a plumbing failure in these small pipes, not in the big chambers -- a clot blocks a coronary artery and downstream muscle starts dying within minutes\n• **Atherosclerosis** (plaque buildup) narrows these arteries silently for decades before any blockage\n• The margin is tiny: a vessel that starts at 4 mm doesn't need much plaque to become critical\n\nWhen cardiologists talk about 'blockages,' 'stents,' or 'bypass,' they are always talking about these fuel lines. Nearly everything in this book -- pressure, cholesterol, food, movement -- is ultimately about keeping two spaghetti-sized pipes open for 80 years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FUEL LINES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The heart cannot drink from its own chambers</text>
                    <circle cx="550" cy="330" r="150" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">HEART MUSCLE</text>
                    <text x="550" y="360" text-anchor="middle" fill="#888" font-size="16">fed from the outside</text>
                    <path d="M430 240 Q380 330 440 430" stroke="#f59e0b" stroke-width="8" fill="none"/>
                    <path d="M670 240 Q720 330 660 430" stroke="#f59e0b" stroke-width="8" fill="none"/>
                    <text x="290" y="340" text-anchor="middle" fill="#f59e0b" font-size="17">coronary</text>
                    <text x="290" y="368" text-anchor="middle" fill="#f59e0b" font-size="17">arteries</text>
                    <text x="810" y="340" text-anchor="middle" fill="#f59e0b" font-size="17">3-4 mm</text>
                    <text x="810" y="368" text-anchor="middle" fill="#888" font-size="15">spaghetti-width</text>
                    <rect x="80" y="560" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="620" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">OPEN ARTERY</text>
                    <rect x="140" y="655" width="320" height="40" rx="20" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="740" text-anchor="middle" fill="#888" font-size="16">full flow, muscle well fed</text>
                    <rect x="580" y="560" width="440" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="620" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">NARROWED ARTERY</text>
                    <rect x="640" y="655" width="320" height="40" rx="20" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <ellipse cx="760" cy="675" rx="80" ry="14" fill="#f59e0b" opacity="0.8"/>
                    <text x="800" y="740" text-anchor="middle" fill="#888" font-size="16">plaque builds silently for decades</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="892" text-anchor="middle" fill="#ffd700" font-size="20">A heart attack is a plumbing failure</text>
                    <text x="550" y="925" text-anchor="middle" fill="#fff" font-size="18">in these small pipes -- not in the chambers</text>
                </svg>`,
                caption: "Two spaghetti-sized arteries feed the entire heart -- and they are what clogs"
            }
        },
        {
            type: "concept",
            title: "The Spark: Your Heart's Electrical System",
            content: "Every beat starts as electricity. In the wall of your right atrium sits the **sinoatrial (SA) node** -- a cluster of specialized cells that fires an electrical impulse roughly once a second, entirely on its own. No brain signal required. A heart removed from the body will keep beating for a while, because the pacemaker is built in.\n\nThe circuit works like this:\n\n• The **SA node** fires, and the impulse sweeps across both atria, squeezing blood down into the ventricles\n• The **AV node** -- the sole electrical gateway between upper and lower chambers -- delays the signal a fraction of a second so the ventricles can finish filling\n• The impulse then races down specialized fibers, firing both ventricles in one coordinated contraction\n\nWhen this wiring misfires, you get **arrhythmias** -- rhythm problems. The most common serious one, **atrial fibrillation (AFib)**, affects millions of adults and quietly raises stroke risk about fivefold. We give it a full lesson later; for now, just know your heart has wiring as well as plumbing, and both can fail independently.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WIRING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every beat begins as an electrical impulse</text>
                    <rect x="60" y="200" width="220" height="120" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="170" y="250" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">SA NODE</text>
                    <text x="170" y="285" text-anchor="middle" fill="#fff" font-size="15">fires ~1x/second</text>
                    <path d="M280 260 L340 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,260 328,252 328,268" fill="#14b8a6"/>
                    <rect x="340" y="200" width="220" height="120" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="450" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">ATRIA SQUEEZE</text>
                    <text x="450" y="285" text-anchor="middle" fill="#fff" font-size="15">top chambers fill below</text>
                    <path d="M560 260 L620 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="620,260 608,252 608,268" fill="#14b8a6"/>
                    <rect x="620" y="200" width="220" height="120" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="730" y="250" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">AV NODE</text>
                    <text x="730" y="285" text-anchor="middle" fill="#fff" font-size="15">brief delay to fill</text>
                    <path d="M840 260 L900 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="900,260 888,252 888,268" fill="#14b8a6"/>
                    <rect x="900" y="200" width="150" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="975" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">VENTRICLES</text>
                    <text x="975" y="285" text-anchor="middle" fill="#fff" font-size="14">fire together</text>
                    <path d="M100 480 L220 480 L260 400 L310 560 L350 480 L1000 480" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="550" y="620" text-anchor="middle" fill="#888" font-size="18">A normal beat traced on an EKG</text>
                    <rect x="150" y="700" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHEN WIRING MISFIRES</text>
                    <text x="550" y="808" text-anchor="middle" fill="#fff" font-size="19">Atrial fibrillation: chaotic upper-chamber rhythm</text>
                    <text x="550" y="845" text-anchor="middle" fill="#888" font-size="17">raises stroke risk ~5x -- full lesson coming later</text>
                </svg>`,
                caption: "The electrical relay behind every heartbeat -- plumbing and wiring can fail separately"
            }
        },
        {
            type: "example",
            title: "The Machine With No Warning Lights",
            content: "Here is the cruelest design flaw in human biology: **slowly narrowing arteries do not hurt**. Your heart has no pain sensors for gradual plaque buildup. Pain arrives only when muscle is actively starving -- which is often the final act, not the opening scene.\n\nThe numbers make this concrete:\n\n• The American Heart Association estimates that about **1 in 5 heart attacks is 'silent'** -- real muscle damage, discovered later on an EKG, with symptoms so mild they were dismissed as indigestion or fatigue\n• For a substantial share of people with coronary disease, the **first recognized 'symptom' is a major heart attack or cardiac arrest** itself\n• Meanwhile, a person can feel completely fine with an artery that is 70% narrowed\n\nCompare that to your car: low oil, worn brakes, a failing battery -- each gets a dashboard light long before catastrophe. Your coronary arteries offer no dashboard. That is exactly why this book keeps repeating its mantra: **know your numbers**. Blood pressure, cholesterol, blood sugar -- these ARE the warning lights. They just live on a lab report instead of a dashboard.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NO WARNING LIGHTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Slow arterial damage is painless by design</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">YOUR CAR</text>
                    <circle cx="200" cy="310" r="18" fill="#f59e0b"/>
                    <text x="240" y="317" text-anchor="start" fill="#fff" font-size="17">Low oil light</text>
                    <circle cx="200" cy="370" r="18" fill="#ef4444"/>
                    <text x="240" y="377" text-anchor="start" fill="#fff" font-size="17">Brake warning</text>
                    <circle cx="200" cy="430" r="18" fill="#3b82f6"/>
                    <text x="240" y="437" text-anchor="start" fill="#fff" font-size="17">Battery alert</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">YOUR ARTERIES</text>
                    <circle cx="720" cy="310" r="18" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4"/>
                    <text x="760" y="317" text-anchor="start" fill="#888" font-size="17">No light at 40% narrowed</text>
                    <circle cx="720" cy="370" r="18" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4"/>
                    <text x="760" y="377" text-anchor="start" fill="#888" font-size="17">No light at 70% narrowed</text>
                    <circle cx="720" cy="430" r="18" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4"/>
                    <text x="760" y="437" text-anchor="start" fill="#888" font-size="17">First alert: the event itself</text>
                    <rect x="150" y="560" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">~1 in 5 heart attacks is silent</text>
                    <text x="550" y="668" text-anchor="middle" fill="#fff" font-size="18">real damage, found later on an EKG (AHA)</text>
                    <rect x="150" y="780" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="838" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">YOUR REAL DASHBOARD</text>
                    <text x="550" y="882" text-anchor="middle" fill="#fff" font-size="19">BP + cholesterol + blood sugar = the warning lights</text>
                </svg>`,
                caption: "Your arteries skip the dashboard -- lab numbers are the only warning lights you get"
            }
        },
        {
            type: "example",
            title: "The Playbook Already Works",
            content: "Now the genuinely hopeful part -- and it comes with receipts.\n\nIn the early 1960s, cardiovascular disease was mowing down Americans at a staggering rate. Then medicine and public health went to work. Since the 1960s peak, the **age-adjusted death rate from cardiovascular disease in the US has fallen by more than half** -- one of the greatest public-health wins in history.\n\nWhat did it? Researchers attribute the decline roughly half to treatment and half to prevention:\n\n• The **Framingham Heart Study** (launched 1948) identified the very concept of 'risk factors' -- blood pressure, cholesterol, smoking\n• **Smoking rates** fell from about 42% of adults in 1965 to around 11% today\n• **Blood pressure treatment** became routine and cheap\n• **Statins** (from the 1990s) slashed cholesterol-driven risk\n• Emergency care -- clot-busting drugs, stents, defibrillators -- turned many fatal heart attacks into survivable ones\n\nThe takeaway: this is not a disease we are helpless against. The playbook exists, it is proven at population scale, and the rest of this book hands it to you one chapter at a time.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GREAT DECLINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">US age-adjusted CVD death rate since the 1960s</text>
                    <line x1="140" y1="560" x2="1000" y2="560" stroke="#888" stroke-width="2"/>
                    <line x1="140" y1="180" x2="140" y2="560" stroke="#888" stroke-width="2"/>
                    <path d="M180 220 Q400 260 550 360 Q750 470 960 510" stroke="#10b981" stroke-width="5" fill="none"/>
                    <circle cx="180" cy="220" r="10" fill="#ef4444"/>
                    <text x="230" y="205" text-anchor="start" fill="#ef4444" font-size="17">1960s peak</text>
                    <circle cx="960" cy="510" r="10" fill="#10b981"/>
                    <text x="940" y="480" text-anchor="end" fill="#10b981" font-size="17">today: down more than half</text>
                    <text x="180" y="600" text-anchor="middle" fill="#888" font-size="16">1960</text>
                    <text x="960" y="600" text-anchor="middle" fill="#888" font-size="16">2020s</text>
                    <rect x="80" y="660" width="300" height="150" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="715" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">SMOKING</text>
                    <text x="230" y="755" text-anchor="middle" fill="#fff" font-size="16">42% (1965) to ~11%</text>
                    <rect x="400" y="660" width="300" height="150" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">BP + STATINS</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="16">cheap, routine, effective</text>
                    <rect x="720" y="660" width="300" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="715" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">ER CARE</text>
                    <text x="870" y="755" text-anchor="middle" fill="#fff" font-size="16">stents, clot-busters</text>
                    <rect x="150" y="870" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="912" text-anchor="middle" fill="#ffd700" font-size="20">Roughly half from prevention, half from treatment --</text>
                    <text x="550" y="945" text-anchor="middle" fill="#fff" font-size="18">the playbook exists, and this book teaches it</text>
                </svg>`,
                caption: "Death rates fell by more than half -- proof that the prevention playbook works"
            }
        },
        {
            type: "application",
            title: "Know Your Numbers -- Starting This Week",
            content: "Your first assignment is not a diet or a workout. It is intelligence-gathering. (This is education, not medical advice -- bring the results to your doctor and decide together.)\n\n1. **Get a blood pressure reading** -- pharmacy machine, home cuff, or clinic visit. Write down both numbers and the date\n\n2. **Request a lipid panel** -- total cholesterol, LDL, HDL, triglycerides. If you have not had one in 2+ years, book it this week\n\n3. **Ask for a fasting glucose or A1c** -- blood sugar is a cardiac number, as we will see later\n\n4. **Map your family history** -- did a parent or sibling have a heart attack, stroke, or stent before 55 (men) or 65 (women)? That single fact changes your risk math\n\n5. **Start a numbers page** -- one note on your phone with every reading and date. Trends beat snapshots\n\nBy the end of this book, every number on that page will mean something to you.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR FIRST MISSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Intelligence-gathering, not lifestyle overhaul</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="222" text-anchor="start" fill="#fff" font-size="19">Get a blood pressure reading -- record both numbers</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="19">Request a lipid panel (LDL, HDL, triglycerides)</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="502" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="502" text-anchor="start" fill="#fff" font-size="19">Ask for a fasting glucose or A1c test</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="642" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="642" text-anchor="start" fill="#fff" font-size="19">Map early heart events in your family history</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="782" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="782" text-anchor="start" fill="#fff" font-size="19">Start a numbers page -- trends beat snapshots</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">Bring the results to your doctor -- decide together</text>
                </svg>`,
                caption: "Five intelligence-gathering steps before any lifestyle change"
            }
        },
        {
            type: "concept",
            title: "The Road Ahead",
            content: "Here is the journey this book takes you on, and why the order matters:\n\n• **Pressure** (next two lessons): the force that sculpts your arteries -- the most measurable, most fixable risk factor\n• **Cholesterol**: the raw material of plaque, and what the numbers on that lipid panel actually mean\n• **Plaque**: how atherosclerosis builds, ruptures, and causes heart attacks\n• **Rhythm**: AFib and the electrical side of heart trouble\n• **Warning signs**: what a heart attack and stroke actually feel like -- in men AND women -- and the minutes that decide everything\n• **Movement**: what exercise really does for your heart, with doses and effect sizes\n• **Food**: the diets with actual trial evidence, not influencer evidence\n• **The plan**: pulling it all into a personal risk-reduction strategy you build with your doctor\n\nEach lesson stands on named studies with real numbers, and each one is honest about how strong the evidence is. You now know why the stakes are high and why the odds are good. Let's start with the force that shapes everything else: pressure.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROAD AHEAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eight stops between you and a protected heart</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">PRESSURE</text>
                    <text x="300" y="275" text-anchor="middle" fill="#888" font-size="16">the force that sculpts arteries</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">CHOLESTEROL</text>
                    <text x="800" y="275" text-anchor="middle" fill="#888" font-size="16">the raw material of plaque</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="435" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PLAQUE + WARNING SIGNS</text>
                    <text x="300" y="475" text-anchor="middle" fill="#888" font-size="16">how attacks happen and feel</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">RHYTHM</text>
                    <text x="800" y="475" text-anchor="middle" fill="#888" font-size="16">AFib and the wiring</text>
                    <rect x="80" y="570" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="635" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">MOVEMENT + FOOD</text>
                    <text x="300" y="675" text-anchor="middle" fill="#888" font-size="16">trial-tested, with doses</text>
                    <rect x="580" y="570" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="635" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">YOUR PLAN</text>
                    <text x="800" y="675" text-anchor="middle" fill="#888" font-size="16">built with your doctor</text>
                    <path d="M550 780 L550 830" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,840 542,826 558,826" fill="#14b8a6"/>
                    <rect x="200" y="860" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="902" text-anchor="middle" fill="#ffd700" font-size="20">Named studies, real numbers,</text>
                    <text x="550" y="935" text-anchor="middle" fill="#fff" font-size="18">honest about the strength of the evidence</text>
                </svg>`,
                caption: "The book's route: pressure first, because it shapes everything downstream"
            }
        },
        {
            type: "quiz",
            question: "Why does serious coronary artery disease so often go unnoticed until a major event?",
            options: [
                { text: "The heart's pain nerves are damaged early in the disease", correct: false },
                { text: "Gradual artery narrowing produces no pain -- symptoms often start only when muscle is starving", correct: true },
                { text: "Symptoms occur but only during sleep, so people miss them", correct: false },
                { text: "Modern screening tests cannot detect narrowed arteries", correct: false }
            ],
            explanation: "Slow plaque buildup is painless because the heart has no pain sensors for gradual narrowing -- pain typically arrives only when heart muscle is actively deprived of oxygen, and about 1 in 5 heart attacks is silent even then. The first option sounds plausible but reverses reality: the nerves work fine, the process simply is not painful. And screening CAN detect trouble -- blood pressure, cholesterol, and blood sugar are the warning lights, which is why 'know your numbers' is this book's mantra.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SILENT ENGINE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Arteries can narrow for decades</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">while you feel completely fine</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE QUESTION</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="18">Why is there so often no warning</text>
                    <text x="550" y="545" text-anchor="middle" fill="#888" font-size="16">before the first major event?</text>
                </svg>`,
                caption: "Final check: why the number one killer stays hidden"
            }
        }
    ]
}
,
{
    id: 2,
    title: "Blood Pressure: The Silent Sculptor",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Force That Reshapes You From the Inside",
            content: "Imagine a garden hose that runs at slightly too much pressure -- not enough to burst, just enough to strain. For one summer, nothing happens. After twenty summers, the rubber is stiff, cracked, and bulging at the weak spots.\n\nNow make the hose your arteries and the summers your 30s, 40s, and 50s.\n\nHigh blood pressure is called the 'silent killer,' but that undersells it. It is a silent **sculptor** -- physically remodeling your artery walls, thickening your heart muscle, and scarring the tiny vessels of your kidneys and brain, all without a single symptom. Nearly **half of American adults** have it. Most either don't know or aren't controlling it.\n\nHere is the good news you're not usually told: blood pressure is the most measurable, most modifiable major risk factor in all of cardiology. A $30 device on your kitchen table can track it, and a landmark trial showed that controlling it cuts deaths by about a quarter. This lesson teaches you what the numbers mean; the next one teaches you how to move them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SILENT SCULPTOR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pressure remodels arteries year by year</text>
                    <rect x="100" y="200" width="900" height="90" rx="45" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="255" text-anchor="middle" fill="#10b981" font-size="19">Year 1: smooth, elastic artery -- full flow</text>
                    <rect x="100" y="340" width="900" height="90" rx="45" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                    <ellipse cx="350" cy="385" rx="90" ry="18" fill="#f59e0b" opacity="0.6"/>
                    <text x="640" y="395" text-anchor="middle" fill="#f59e0b" font-size="19">Year 10: wall injury, early stiffening</text>
                    <rect x="100" y="480" width="900" height="90" rx="45" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <ellipse cx="350" cy="525" rx="120" ry="26" fill="#ef4444" opacity="0.5"/>
                    <ellipse cx="750" cy="525" rx="100" ry="22" fill="#ef4444" opacity="0.5"/>
                    <text x="550" y="615" text-anchor="middle" fill="#ef4444" font-size="19">Year 20: stiff, narrowed, damage spreading -- still zero symptoms</text>
                    <rect x="80" y="680" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="740" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="30">~1 in 2</text>
                    <text x="300" y="785" text-anchor="middle" fill="#fff" font-size="17">US adults has high</text>
                    <text x="300" y="815" text-anchor="middle" fill="#888" font-size="15">blood pressure</text>
                    <rect x="580" y="680" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">MOST FIXABLE</text>
                    <text x="800" y="785" text-anchor="middle" fill="#fff" font-size="17">measurable at home,</text>
                    <text x="800" y="815" text-anchor="middle" fill="#888" font-size="15">provably treatable</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">This lesson: what the numbers mean</text>
                </svg>`,
                caption: "Twenty years of quiet pressure damage -- and why it is the most fixable risk"
            }
        },
        {
            type: "concept",
            title: "What 130/85 Actually Means",
            content: "A blood pressure reading is two measurements of the same pipe at two moments, in **millimeters of mercury (mmHg)** -- literally how high the pressure could push a column of mercury.\n\n• **The top number (systolic)** is the pressure in your arteries at the instant your heart contracts and fires blood outward. In a '130/85' reading, each heartbeat spikes your arterial pressure to 130 mmHg\n\n• **The bottom number (diastolic)** is the pressure between beats, while the heart refills. At 85, your arteries never relax below 85 mmHg -- that is the *floor*, the pressure your vessel walls endure even at rest\n\nWhy both matter: your arteries are elastic tubes designed to stretch with each pulse and recoil between them. Systolic pressure tests the **stretch**; diastolic reveals the **squeeze that never lets up**. Under age 50, diastolic matters plenty; after 50, systolic becomes the stronger predictor as arteries stiffen.\n\nOne more mental shift: 130/85 is not a grade on a test. It is a physical force, applied to living tissue, about 100,000 times a day. Small differences, multiplied by that number, become geology.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO NUMBERS, ONE PIPE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The same artery at two moments in time</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">SYSTOLIC (top)</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="52">130</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="18">pressure at the instant</text>
                    <text x="290" y="425" text-anchor="middle" fill="#fff" font-size="18">the heart contracts</text>
                    <text x="290" y="480" text-anchor="middle" fill="#888" font-size="16">the stretch test</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">DIASTOLIC (bottom)</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-weight="bold" font-size="52">85</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="18">pressure between beats,</text>
                    <text x="810" y="425" text-anchor="middle" fill="#fff" font-size="18">while the heart refills</text>
                    <text x="810" y="480" text-anchor="middle" fill="#888" font-size="16">the floor that never lets up</text>
                    <path d="M120 700 L260 700 L300 620 L340 760 L380 700 L520 700 L560 620 L600 760 L640 700 L980 700" stroke="#10b981" stroke-width="4" fill="none"/>
                    <line x1="120" y1="620" x2="980" y2="620" stroke="#ef4444" stroke-width="2" stroke-dasharray="8"/>
                    <text x="1000" y="627" text-anchor="end" fill="#ef4444" font-size="16">130 peak</text>
                    <line x1="120" y1="760" x2="980" y2="760" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8"/>
                    <text x="1000" y="790" text-anchor="end" fill="#3b82f6" font-size="16">85 floor</text>
                    <rect x="150" y="850" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#ffd700" font-size="20">Not a test score -- a physical force applied</text>
                    <text x="550" y="930" text-anchor="middle" fill="#fff" font-size="18">to living tissue 100,000 times a day</text>
                </svg>`,
                caption: "Systolic is the spike with each beat; diastolic is the pressure that never lets up"
            }
        },
        {
            type: "visual",
            title: "The Official Categories",
            content: "In 2017, the American College of Cardiology and American Heart Association redrew the map -- and moved millions of people into the hypertension zone overnight, because the evidence showed damage starting lower than previously believed.\n\nThe categories:\n\n• **Normal**: below 120 AND below 80\n• **Elevated**: 120-129 AND below 80\n• **Stage 1 hypertension**: 130-139 OR 80-89\n• **Stage 2 hypertension**: 140 or higher OR 90 or higher\n\nNote the word **OR** -- either number alone can put you in a category. A reading of 118/86 is stage 1 hypertension despite the excellent top number.\n\nBy these definitions, roughly **47% of US adults** -- about 120 million people -- have hypertension. Only about **1 in 4** of them has it under control.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 2017 ACC/AHA MAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Either number alone can place you in a category</text>
                    <rect x="100" y="160" width="900" height="130" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">NORMAL</text>
                    <text x="300" y="255" text-anchor="middle" fill="#888" font-size="16">keep doing what works</text>
                    <text x="750" y="235" text-anchor="middle" fill="#fff" font-size="24">below 120 AND below 80</text>
                    <rect x="100" y="320" width="900" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="300" y="375" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">ELEVATED</text>
                    <text x="300" y="415" text-anchor="middle" fill="#888" font-size="16">the on-ramp</text>
                    <text x="750" y="395" text-anchor="middle" fill="#fff" font-size="24">120-129 AND below 80</text>
                    <rect x="100" y="480" width="900" height="130" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="535" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">STAGE 1</text>
                    <text x="300" y="575" text-anchor="middle" fill="#888" font-size="16">hypertension begins here</text>
                    <text x="750" y="555" text-anchor="middle" fill="#fff" font-size="24">130-139 OR 80-89</text>
                    <rect x="100" y="640" width="900" height="130" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="695" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">STAGE 2</text>
                    <text x="300" y="735" text-anchor="middle" fill="#888" font-size="16">treatment conversation</text>
                    <text x="750" y="715" text-anchor="middle" fill="#fff" font-size="24">140+ OR 90+</text>
                    <rect x="80" y="820" width="440" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="880" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">~47%</text>
                    <text x="300" y="925" text-anchor="middle" fill="#fff" font-size="17">of US adults qualify</text>
                    <rect x="580" y="820" width="440" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="880" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">~1 in 4</text>
                    <text x="800" y="925" text-anchor="middle" fill="#fff" font-size="17">of those have it controlled</text>
                </svg>`,
                caption: "The four categories -- note that a single high number is enough to qualify"
            }
        },
        {
            type: "concept",
            title: "Why the Line Moved to 130",
            content: "When the 2017 guidelines dropped the hypertension threshold from 140/90 to 130/80, critics accused medicine of 'inventing patients.' The data says otherwise, and understanding why builds your intuition for everything ahead.\n\n• Risk does not switch on at a magic number -- it climbs **continuously**. Large pooled studies show that starting around 115/75, every 20-point rise in systolic pressure roughly **doubles** the risk of death from heart disease or stroke\n\n• That means someone cruising at 135 for twenty years is accumulating real damage, even though the old map called them 'normal-ish'\n\n• The 2017 committee reviewed the accumulated trial evidence -- including SPRINT, which you will meet in two cards -- and concluded the old line left too much preventable damage on the table\n\nImportant nuance: a stage 1 label usually does NOT mean instant medication. For most stage 1 patients without existing heart disease or high calculated risk, guidelines recommend **3 to 6 months of lifestyle change first** -- exactly the toolkit in the next lesson. The label is a call to action, not a prescription.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RISK IS A RAMP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Not a cliff at 140 -- a climb starting near 115</text>
                    <line x1="140" y1="600" x2="1000" y2="600" stroke="#888" stroke-width="2"/>
                    <line x1="140" y1="180" x2="140" y2="600" stroke="#888" stroke-width="2"/>
                    <path d="M180 560 Q450 540 650 420 Q850 290 960 200" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <circle cx="300" cy="551" r="9" fill="#10b981"/>
                    <text x="300" y="650" text-anchor="middle" fill="#10b981" font-size="17">115/75</text>
                    <circle cx="650" cy="420" r="9" fill="#f59e0b"/>
                    <text x="650" y="650" text-anchor="middle" fill="#f59e0b" font-size="17">135</text>
                    <circle cx="880" cy="272" r="9" fill="#ef4444"/>
                    <text x="880" y="650" text-anchor="middle" fill="#ef4444" font-size="17">155</text>
                    <text x="100" y="390" text-anchor="middle" fill="#888" font-size="15" transform="rotate(-90 100 390)">cardiovascular risk</text>
                    <text x="570" y="700" text-anchor="middle" fill="#888" font-size="17">systolic blood pressure (mmHg)</text>
                    <rect x="150" y="750" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="797" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Every +20 systolic roughly DOUBLES</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="18">the risk of death from heart disease or stroke</text>
                    <rect x="150" y="890" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#10b981" font-size="19">Stage 1 usually means 3-6 months of lifestyle first --</text>
                    <text x="550" y="962" text-anchor="middle" fill="#fff" font-size="17">a call to action, not an automatic prescription</text>
                </svg>`,
                caption: "Risk climbs continuously from ~115/75 -- the 130 line marks where action pays off"
            }
        },
        {
            type: "quiz",
            question: "Your home readings average 132/78. Under the 2017 ACC/AHA categories, where do you land?",
            options: [
                { text: "Normal -- the bottom number is well under 80", correct: false },
                { text: "Elevated -- close to normal, nothing to act on yet", correct: false },
                { text: "Stage 1 hypertension -- the systolic number alone puts you there", correct: true },
                { text: "Stage 2 hypertension -- any reading over 130 is stage 2", correct: false }
            ],
            explanation: "The categories use OR logic: 130-139 systolic OR 80-89 diastolic means stage 1, so a systolic of 132 qualifies by itself even with a great diastolic of 78. The tempting answer is 'elevated,' but elevated tops out at 129 systolic. The good news from this lesson: for most people at stage 1 without other high-risk conditions, the guideline-recommended first move is 3 to 6 months of lifestyle change -- not immediate medication.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">READING THE MAP</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-weight="bold" font-size="44">132 / 78</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Which category -- and which number decides?</text>
                    <rect x="150" y="420" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="470" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HINT: the categories use OR logic</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="17">either number alone can place you</text>
                </svg>`,
                caption: "Apply the 2017 categories to a real-world reading"
            }
        },
        {
            type: "concept",
            title: "How Pressure Destroys Quietly",
            content: "Why does a number on a cuff predict heart attacks, kidney failure, and dementia? Because sustained pressure attacks four targets at once:\n\n• **Artery walls**: excess force injures the delicate inner lining (the **endothelium**). Injured lining becomes sticky -- a landing strip for cholesterol and inflammatory cells. High pressure literally prepares the wall for plaque\n\n• **The arteries themselves stiffen**: elastic fibers fray and get replaced with rigid collagen. Stiff pipes cannot buffer each pulse, so pressure spikes travel further -- a vicious cycle where high pressure causes stiffness and stiffness raises pressure\n\n• **The heart muscle**: pushing against high pressure every beat, the left ventricle thickens like any overworked muscle (**left ventricular hypertrophy**). Unlike your biceps, a thick ventricle is bad -- stiffer, hungrier for oxygen, and prone to failure and arrhythmia\n\n• **Kidneys and brain**: both organs run on beds of tiny, fragile vessels. Pressure scars the kidney's filters and silently damages the brain's small vessels -- one reason midlife hypertension is a major risk factor for dementia decades later\n\nFour targets, zero symptoms, decades of lead time. That is the case for measuring.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR SILENT TARGETS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where sustained pressure does its damage</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">ARTERY LINING</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="17">Injured endothelium becomes</text>
                    <text x="300" y="310" text-anchor="middle" fill="#888" font-size="16">a landing strip for plaque</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">ARTERY WALLS</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="17">Elastic fibers replaced by</text>
                    <text x="800" y="310" text-anchor="middle" fill="#888" font-size="16">rigid collagen -- stiff pipes</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="470" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">HEART MUSCLE</text>
                    <text x="300" y="515" text-anchor="middle" fill="#fff" font-size="17">Left ventricle thickens --</text>
                    <text x="300" y="550" text-anchor="middle" fill="#888" font-size="16">stiff, oxygen-hungry, failure-prone</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="470" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">KIDNEYS + BRAIN</text>
                    <text x="800" y="515" text-anchor="middle" fill="#fff" font-size="17">Tiny vessels scar silently --</text>
                    <text x="800" y="550" text-anchor="middle" fill="#888" font-size="16">midlife BP predicts dementia</text>
                    <path d="M550 650 L550 700" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,710 542,696 558,696" fill="#14b8a6"/>
                    <rect x="150" y="730" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="21">Four targets, zero symptoms,</text>
                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="19">decades of lead time -- so measure</text>
                </svg>`,
                caption: "Arteries, heart, kidneys, brain: the four-front war fought in silence"
            }
        },
        {
            type: "example",
            title: "SPRINT: The Trial That Moved the Targets",
            content: "In 2015, the New England Journal of Medicine published a trial so decisive it was stopped early because continuing it seemed unethical.\n\n**SPRINT** (Systolic Blood Pressure Intervention Trial) enrolled **9,361 adults** aged 50+ with systolic pressure of 130-180 and elevated cardiovascular risk (but no diabetes or prior stroke). Half were treated to the standard target of **below 140 systolic**; half were treated intensively to **below 120**.\n\nAfter a median of 3.3 years:\n\n• **~25% fewer major cardiovascular events** (heart attack, stroke, heart failure, cardiovascular death) in the intensive group\n• **~27% lower all-cause mortality** -- fewer deaths from anything\n\nThe honest fine print: the intensive group had more fainting episodes, more acute kidney injury, and more electrolyte problems -- real tradeoffs, mostly reversible, requiring monitoring. And SPRINT's carefully-measured readings were taken under quiet, standardized conditions, often lower than a typical rushed office reading.\n\nThe takeaway is not 'everyone must hit 120.' It is that lower targets *can* save lives in higher-risk people, and your personal target is a conversation with your doctor -- age, kidney function, fall risk, and preferences all matter. That is individualized medicine, not hedging.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SPRINT (NEJM 2015)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">9,361 higher-risk adults, stopped early for benefit</text>
                    <rect x="60" y="170" width="460" height="240" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STANDARD ARM</text>
                    <text x="290" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">below 140</text>
                    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="17">systolic target</text>
                    <rect x="580" y="170" width="460" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">INTENSIVE ARM</text>
                    <text x="810" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">below 120</text>
                    <text x="810" y="360" text-anchor="middle" fill="#888" font-size="17">systolic target</text>
                    <rect x="60" y="450" width="460" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="515" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">-25%</text>
                    <text x="290" y="565" text-anchor="middle" fill="#fff" font-size="17">major cardiovascular events</text>
                    <rect x="580" y="450" width="460" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="515" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">-27%</text>
                    <text x="810" y="565" text-anchor="middle" fill="#fff" font-size="17">deaths from any cause</text>
                    <rect x="150" y="680" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HONEST FINE PRINT</text>
                    <text x="550" y="778" text-anchor="middle" fill="#fff" font-size="17">more fainting, kidney strain, electrolyte issues --</text>
                    <text x="550" y="808" text-anchor="middle" fill="#888" font-size="15">real tradeoffs that require monitoring</text>
                    <rect x="150" y="860" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="19">Targets are individualized --</text>
                    <text x="550" y="938" text-anchor="middle" fill="#fff" font-size="17">your number is a conversation with your doctor</text>
                </svg>`,
                caption: "SPRINT's headline results -- and the fine print that keeps targets personal"
            }
        },
        {
            type: "concept",
            title: "Your Brain Is Watching Your Pressure",
            content: "The scariest organ on hypertension's target list may be the one you think with.\n\nYour brain is 2% of your body weight but takes about **20% of your blood supply**, delivered through some of the smallest, most delicate vessels you own. Decades of high pressure scar and narrow them, starving white matter -- the brain's wiring -- one micro-injury at a time. On MRI scans this shows up as 'white matter hyperintensities'; in life it shows up as slowed thinking and, eventually, vascular dementia.\n\nThe evidence got much stronger with **SPRINT MIND** (JAMA 2019), the cognitive arm of the SPRINT trial:\n\n• Intensive control (target below 120) cut the rate of **mild cognitive impairment by about 19%** versus the standard target\n• The combined outcome of MCI or dementia dropped about 15%\n• Dementia alone showed a similar trend that missed statistical significance -- likely because the trial ended early and dementia takes years to develop\n\nBeing honest: this is strong-but-not-final evidence for dementia itself. But it is the first large randomized trial suggesting a treatment that protects aging cognition -- and the treatment is blood pressure control. Your 50-year-old arteries are voting on your 80-year-old memory.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PRESSURE AND MEMORY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your brain runs on tiny, fragile vessels</text>
                    <circle cx="550" cy="310" r="150" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="290" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE BRAIN</text>
                    <text x="550" y="330" text-anchor="middle" fill="#fff" font-size="17">2% of body weight</text>
                    <text x="550" y="365" text-anchor="middle" fill="#fff" font-size="17">~20% of blood supply</text>
                    <rect x="150" y="520" width="800" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="575" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">DECADES OF HIGH PRESSURE</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="18">scarred small vessels, starved white matter,</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">micro-injuries accumulating toward vascular dementia</text>
                    <rect x="150" y="730" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">SPRINT MIND (JAMA 2019)</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="18">intensive BP control cut mild cognitive</text>
                    <text x="550" y="865" text-anchor="middle" fill="#fff" font-size="18">impairment by ~19% -- strong, not yet final, evidence</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="19">Your arteries at 50 vote on your memory at 80</text>
                </svg>`,
                caption: "SPRINT MIND: the first big randomized hint that BP control protects cognition"
            }
        },
        {
            type: "concept",
            title: "White Coats and Masks",
            content: "Here is an uncomfortable truth: **a single office blood pressure reading is nearly meaningless**. Pressure is not a fixed trait like height -- it swings all day with stress, caffeine, conversation, a full bladder, even which arm is used. Two patterns make office readings actively misleading:\n\n• **White-coat hypertension**: high at the clinic, normal everywhere else. The medical setting itself spikes your pressure. Roughly **15-30% of people with high office readings** are actually normal at home. Treat them based on office numbers alone and you medicate a phantom\n\n• **Masked hypertension**: the dangerous mirror image -- normal at the clinic, high in daily life (work stress, night shifts, home life). Estimated at **around 10-15% of adults with normal office readings**. These people pass every checkup while accumulating full hypertensive damage. Arguably the worst position on the board: all of the risk, none of the label\n\nThis is why guidelines now recommend confirming any diagnosis with **out-of-office readings** -- home monitoring or a 24-hour wearable monitor -- before starting treatment. Your arteries live at home and at work. Your measurements should too.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TWO IMPOSTORS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why one office reading can mislead you</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">WHITE-COAT</text>
                    <text x="290" y="300" text-anchor="middle" fill="#ef4444" font-size="19">Clinic: 148/92</text>
                    <text x="290" y="345" text-anchor="middle" fill="#10b981" font-size="19">Home: 122/76</text>
                    <text x="290" y="410" text-anchor="middle" fill="#fff" font-size="17">The clinic itself spikes you</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">15-30% of high office readings</text>
                    <text x="290" y="505" text-anchor="middle" fill="#888" font-size="16">Risk: treating a phantom</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">MASKED</text>
                    <text x="810" y="300" text-anchor="middle" fill="#10b981" font-size="19">Clinic: 118/74</text>
                    <text x="810" y="345" text-anchor="middle" fill="#ef4444" font-size="19">Daily life: 138/88</text>
                    <text x="810" y="410" text-anchor="middle" fill="#fff" font-size="17">Passes every checkup</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">~10-15% of normal office readings</text>
                    <text x="810" y="505" text-anchor="middle" fill="#888" font-size="16">Risk: damage with no label</text>
                    <rect x="150" y="640" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">THE FIX</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="18">Confirm with out-of-office readings --</text>
                    <text x="550" y="780" text-anchor="middle" fill="#888" font-size="16">home monitoring or a 24-hour wearable monitor</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Your arteries live at home -- measure there</text>
                </svg>`,
                caption: "White-coat and masked hypertension: opposite errors from trusting one reading"
            }
        },
        {
            type: "example",
            title: "Two Patients, One Lesson",
            content: "Picture two coworkers, both 52, both at the same annual physical.\n\n**Patient one** dreads doctors. In the exam room her reading is 150/94 -- stage 2 territory. Ten years ago she might have left with a prescription. Instead, her doctor asks for a week of home readings first. At her kitchen table, morning and evening: they average **123/79**. Diagnosis: white-coat effect. Plan: keep monitoring a few times a year. No pills for a phantom.\n\n**Patient two** breezes through checkups -- 119/78 in the office, praised and sent home for a decade. But his job is high-pressure and his sleep is short. When a work wellness program hands him a home cuff, his real-life average comes back **139/88**. Masked hypertension -- a decade of silent, unlabeled damage while his chart said 'normal.'\n\nBoth were mismeasured in opposite directions, and both course-corrected the same way: **a $30-50 validated cuff and one week of honest data**. Studies suggest each pattern affects something like 1 in 6 adults, so if that sample size of two feels uncomfortably personal, the next card shows you exactly how to run the test on yourself.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO PATIENTS, AGE 52</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Opposite errors, same fix</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">PATIENT ONE</text>
                    <text x="290" y="300" text-anchor="middle" fill="#ef4444" font-size="20">Office: 150/94</text>
                    <text x="290" y="350" text-anchor="middle" fill="#10b981" font-size="20">Home week: 123/79</text>
                    <text x="290" y="420" text-anchor="middle" fill="#fff" font-size="17">White-coat effect --</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="16">no pills for a phantom,</text>
                    <text x="290" y="490" text-anchor="middle" fill="#888" font-size="16">keep monitoring</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PATIENT TWO</text>
                    <text x="810" y="300" text-anchor="middle" fill="#10b981" font-size="20">Office: 119/78</text>
                    <text x="810" y="350" text-anchor="middle" fill="#ef4444" font-size="20">Home week: 139/88</text>
                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="17">Masked hypertension --</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="16">a decade of silent damage</text>
                    <text x="810" y="490" text-anchor="middle" fill="#888" font-size="16">behind a clean chart</text>
                    <path d="M290 580 L290 630 L550 630" stroke="#14b8a6" stroke-width="3" fill="none"/>
                    <path d="M810 580 L810 630 L550 630" stroke="#14b8a6" stroke-width="3" fill="none"/>
                    <path d="M550 630 L550 680" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,690 542,676 558,676" fill="#14b8a6"/>
                    <rect x="200" y="710" width="700" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE SAME FIX</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="18">A validated home cuff + one honest week of data</text>
                </svg>`,
                caption: "One overdiagnosed, one underdiagnosed -- both corrected by a week of home data"
            }
        },
        {
            type: "application",
            title: "Measure It Right: Your Home Protocol",
            content: "Done wrong, home readings add noise. Done right, they beat the clinic. Here is the standard protocol used in research:\n\n1. **Get a validated upper-arm cuff** ($30-60). Check validateBP.org for tested models. Skip wrist and finger devices -- they are far less accurate\n\n2. **Prep for 5 minutes**: sit quietly, back supported, feet flat on the floor, legs uncrossed. No caffeine, exercise, or smoking in the prior 30 minutes. Empty bladder (a full one can add 10+ points)\n\n3. **Position the arm at heart level**, resting on a table, cuff on bare skin. An unsupported or dangling arm falsely raises readings\n\n4. **Take 2 readings, 1 minute apart**, morning (before meds or coffee) and evening -- for 7 days. Don't talk or scroll during readings\n\n5. **Average everything except day 1** (first-day readings run high). That average is your real number -- bring it to your doctor\n\nOne honest week per season tells you more than years of annual office snapshots.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HOME PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Measure like the research trials do</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="222" text-anchor="start" fill="#fff" font-size="19">Validated upper-arm cuff -- never wrist or finger</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="19">Sit 5 min: back supported, feet flat, no caffeine</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="502" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="502" text-anchor="start" fill="#fff" font-size="19">Arm at heart level on a table, cuff on bare skin</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="642" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="642" text-anchor="start" fill="#fff" font-size="19">2 readings AM + 2 PM, one week, no talking</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="782" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="782" text-anchor="start" fill="#fff" font-size="19">Average all but day 1 -- that is your real number</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">One honest week beats years of office snapshots</text>
                </svg>`,
                caption: "The research-grade home measurement protocol, in five steps"
            }
        },
        {
            type: "quote",
            content: "The greatest triumphs of prevention are invisible: the heart attack that never happened, the stroke that never came. Blood pressure control is the quietest lifesaver in all of medicine.",
            author: "Adapted from the public-health case for hypertension control",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"The greatest triumphs of prevention are</text>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="22">invisible: the heart attack that never happened,</text>
                    <text x="160" y="300" text-anchor="start" fill="#fff" font-style="italic" font-size="22">the stroke that never came. Blood pressure control</text>
                    <text x="160" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="22">is the quietest lifesaver in all of medicine."</text>
                    <text x="940" y="400" text-anchor="end" fill="#8b5cf6" font-size="18">-- the case for prevention</text>
                    <circle cx="550" cy="620" r="110" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <path d="M500 620 L540 660 L620 570" stroke="#10b981" stroke-width="8" fill="none"/>
                    <text x="550" y="800" text-anchor="middle" fill="#888" font-size="18">You never meet the disasters you prevent</text>
                </svg>`,
                caption: "A moment of reflection on invisible victories"
            }
        },
        {
            type: "quiz",
            question: "What did the SPRINT trial (NEJM 2015) demonstrate in higher-risk adults?",
            options: [
                { text: "Lowering systolic BP below 140 provides no benefit over below 150", correct: false },
                { text: "Intensive control below 120 cut cardiovascular events ~25% and deaths ~27% vs below 140, with some added side effects", correct: true },
                { text: "Intensive control helped only patients with diabetes", correct: false },
                { text: "Blood pressure medication reduced events but increased overall mortality", correct: false }
            ],
            explanation: "SPRINT randomized 9,361 higher-risk adults to a systolic target below 120 versus below 140, and was stopped early: the intensive group had about 25% fewer major cardiovascular events and 27% lower all-cause mortality. The diabetes option is a trap -- SPRINT specifically excluded diabetics. And honesty matters: intensive treatment brought more fainting and kidney side effects, which is exactly why targets are individualized with your doctor rather than applied to everyone.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SPRINT TRIAL</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">9,361 adults, two systolic targets,</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">stopped early -- why?</text>
                    <rect x="60" y="400" width="460" height="150" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="26">Target: below 140</text>
                    <rect x="580" y="400" width="460" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="26">Target: below 120</text>
                    <text x="550" y="630" text-anchor="middle" fill="#888" font-size="18">What happened in the intensive arm?</text>
                </svg>`,
                caption: "Final check: the trial that moved the blood pressure targets"
            }
        }
    ]
}
,
{
    id: 3,
    title: "Lowering the Pressure",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Levers Are Bigger Than You Think",
            content: "Last lesson ended with a number -- maybe yours -- sitting in stage 1 or stage 2. Now the obvious question: what actually moves it?\n\nHere is what most people don't know: lifestyle changes for blood pressure have been measured in randomized trials with the same rigor as drugs, and the best ones post **drug-sized numbers**. A diet pattern tested in 1997 lowered systolic pressure by about 11 points in people with hypertension -- comparable to a starting medication. A salt-substitute study covering nearly 21,000 people cut strokes by 14%. And the current champion for exercise? Not running. **Wall sits.**\n\nThis lesson ranks every major lever by its measured effect size, so you can spend effort where the payoff is real instead of scattering it across wellness folklore. It also talks honestly about medication -- because when pills are needed, taking them is a smart play, not a personal failure.\n\nOne ground rule as always: this is education, not medical advice. Build your plan with your doctor -- especially if you already take blood pressure medication, since these levers can stack with it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DRUG-SIZED LEVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lifestyle effects measured in randomized trials</text>
                    <rect x="80" y="180" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">-11</text>
                    <text x="230" y="295" text-anchor="middle" fill="#fff" font-size="17">mmHg systolic from</text>
                    <text x="230" y="325" text-anchor="middle" fill="#fff" font-size="17">one diet pattern</text>
                    <text x="230" y="365" text-anchor="middle" fill="#888" font-size="15">DASH, 1997 trial</text>
                    <rect x="400" y="180" width="300" height="220" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="34">-14%</text>
                    <text x="550" y="295" text-anchor="middle" fill="#fff" font-size="17">strokes from a simple</text>
                    <text x="550" y="325" text-anchor="middle" fill="#fff" font-size="17">salt substitute</text>
                    <text x="550" y="365" text-anchor="middle" fill="#888" font-size="15">SSaSS, 2021 trial</text>
                    <rect x="720" y="180" width="300" height="220" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="250" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">-8/-4</text>
                    <text x="870" y="295" text-anchor="middle" fill="#fff" font-size="17">mmHg from isometric</text>
                    <text x="870" y="325" text-anchor="middle" fill="#fff" font-size="17">exercise (wall sits!)</text>
                    <text x="870" y="365" text-anchor="middle" fill="#888" font-size="15">2023 meta-analysis</text>
                    <rect x="150" y="470" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THIS LESSON RANKS EVERY LEVER</text>
                    <text x="550" y="570" text-anchor="middle" fill="#fff" font-size="18">so you spend effort where the payoff is measured</text>
                    <rect x="200" y="670" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="712" text-anchor="middle" fill="#ffd700" font-size="19">Education, not medical advice --</text>
                    <text x="550" y="744" text-anchor="middle" fill="#fff" font-size="17">build the plan with your doctor</text>
                </svg>`,
                caption: "Lifestyle levers with trial-measured, drug-sized effects on blood pressure"
            }
        },
        {
            type: "concept",
            title: "The Leaderboard: Every Lever, Ranked",
            content: "Here are the major levers with their approximate measured effects on systolic pressure. (Effects are averages; hypertensive people usually see bigger drops than normotensive people. Effects partially stack.)\n\n• **Weight loss**: roughly **1 mmHg per kg lost**. Ten kilograms can rival a medication\n• **DASH eating pattern**: about **11 mmHg** in people with hypertension (Appel 1997, NEJM)\n• **Isometric exercise** (wall sits, planks): around **8 mmHg** in a 2023 meta-analysis -- the surprise leader among exercise types\n• **Aerobic exercise**: **5-8 mmHg** for regular moderate cardio\n• **Sodium reduction** toward ~2.3 g/day: **5-6 mmHg** in hypertensives, less in others\n• **Potassium increase** (food first): roughly **4-5 mmHg** in hypertensives, especially in high-sodium eaters\n• **Alcohol reduction**: about **4 mmHg** for heavy drinkers who cut to moderate\n\nTwo observations before we zoom in. First, the top levers are additive enough that a committed person can move 15-20 points -- more than many single drugs. Second, notice what's NOT on the list: supplements, detoxes, and superfoods, because rigorous trials haven't earned them a slot.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LEADERBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Approximate systolic drop, in mmHg</text>
                    <text x="330" y="205" text-anchor="end" fill="#fff" font-size="19">DASH diet</text>
                    <rect x="350" y="180" width="550" height="42" rx="10" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="930" y="210" text-anchor="start" fill="#10b981" font-size="19">~11</text>
                    <text x="330" y="285" text-anchor="end" fill="#fff" font-size="19">Weight loss (10 kg)</text>
                    <rect x="350" y="260" width="500" height="42" rx="10" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <text x="880" y="290" text-anchor="start" fill="#6366f1" font-size="19">~10</text>
                    <text x="330" y="365" text-anchor="end" fill="#fff" font-size="19">Isometric exercise</text>
                    <rect x="350" y="340" width="400" height="42" rx="10" fill="rgba(236,72,153,0.4)" stroke="#ec4899" stroke-width="2"/>
                    <text x="780" y="370" text-anchor="start" fill="#ec4899" font-size="19">~8</text>
                    <text x="330" y="445" text-anchor="end" fill="#fff" font-size="19">Aerobic exercise</text>
                    <rect x="350" y="420" width="350" height="42" rx="10" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="730" y="450" text-anchor="start" fill="#8b5cf6" font-size="19">5-8</text>
                    <text x="330" y="525" text-anchor="end" fill="#fff" font-size="19">Sodium down</text>
                    <rect x="350" y="500" width="290" height="42" rx="10" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="670" y="530" text-anchor="start" fill="#f59e0b" font-size="19">5-6</text>
                    <text x="330" y="605" text-anchor="end" fill="#fff" font-size="19">Potassium up</text>
                    <rect x="350" y="580" width="240" height="42" rx="10" fill="rgba(59,130,246,0.4)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="620" y="610" text-anchor="start" fill="#3b82f6" font-size="19">4-5</text>
                    <text x="330" y="685" text-anchor="end" fill="#fff" font-size="19">Alcohol down</text>
                    <rect x="350" y="660" width="200" height="42" rx="10" fill="rgba(239,68,68,0.4)" stroke="#ef4444" stroke-width="2"/>
                    <text x="580" y="690" text-anchor="start" fill="#ef4444" font-size="19">~4</text>
                    <rect x="150" y="780" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="822" text-anchor="middle" fill="#ffd700" font-size="20">Stacked, the top levers can move 15-20 points --</text>
                    <text x="550" y="856" text-anchor="middle" fill="#fff" font-size="18">more than many single medications</text>
                    <text x="550" y="950" text-anchor="middle" fill="#888" font-size="16">Effects are averages in hypertensives; individual results vary</text>
                </svg>`,
                caption: "Every major lever ranked by measured effect on systolic pressure"
            }
        },
        {
            type: "concept",
            title: "DASH: The Diet That Beat Expectations",
            content: "In 1997, the NEJM published the **DASH trial** (Dietary Approaches to Stop Hypertension): 459 adults, all meals provided by the researchers so nobody could cheat, three diets compared head-to-head. The DASH pattern dropped systolic pressure by about **11 mmHg in participants with hypertension** -- within 2 weeks, without weight loss, and *before* any sodium restriction was added.\n\nWhat you actually eat on DASH (per day, roughly 2,000 calories):\n\n• **Vegetables**: 4-5 servings\n• **Fruits**: 4-5 servings\n• **Whole grains**: 6-8 servings\n• **Low-fat dairy**: 2-3 servings\n• **Nuts, seeds, beans**: 4-5 servings *per week*\n• **Lean meats, poultry, fish**: 6 oz or less daily\n• **Sweets and sugary drinks**: 5 or fewer per week\n• **Limit**: red meat, butter, full-fat dairy, tropical oils\n\nNo forbidden-food drama, no fasting windows, no products to buy. The magic is the pattern: high potassium, magnesium, calcium, and fiber; low saturated fat. It reads almost boring -- which is the point. Boring, repeatable, and backed by one of the cleanest feeding trials ever run.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DASH PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Appel 1997, NEJM: ~11 mmHg in hypertensives</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VEGETABLES + FRUITS</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="17">4-5 servings of each, daily</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WHOLE GRAINS</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="17">6-8 servings daily</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="430" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">LOW-FAT DAIRY</text>
                    <text x="300" y="475" text-anchor="middle" fill="#fff" font-size="17">2-3 servings daily</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="430" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NUTS, SEEDS, BEANS</text>
                    <text x="800" y="475" text-anchor="middle" fill="#fff" font-size="17">4-5 servings per week</text>
                    <rect x="80" y="570" width="440" height="160" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="630" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">LEAN PROTEIN</text>
                    <text x="300" y="675" text-anchor="middle" fill="#fff" font-size="17">6 oz or less daily</text>
                    <rect x="580" y="570" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="630" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">LIMIT</text>
                    <text x="800" y="675" text-anchor="middle" fill="#fff" font-size="17">sweets, red meat, butter</text>
                    <rect x="150" y="800" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="852" text-anchor="middle" fill="#ffd700" font-size="20">All meals were provided -- nobody could cheat --</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="18">and pressure fell within 2 weeks, before sodium cuts</text>
                </svg>`,
                caption: "The DASH pattern: boring, repeatable, and proven in a controlled feeding trial"
            }
        },
        {
            type: "example",
            title: "SSaSS: 21,000 Villagers and a Bag of Salt",
            content: "If you want proof that sodium math translates into saved lives -- not just nicer numbers -- here it is.\n\nThe **Salt Substitute and Stroke Study (SSaSS)**, published in NEJM in 2021, ran in 600 rural Chinese villages: nearly **21,000 adults** with a history of stroke or poorly controlled blood pressure. The intervention was almost comically simple. Half the villages swapped regular salt (100% sodium chloride) for a **salt substitute: 75% sodium chloride, 25% potassium chloride**. Same shaker, similar taste, two levers pulled at once -- sodium down, potassium up.\n\nAfter about five years:\n\n• **Strokes fell 14%**\n• **Major cardiovascular events fell 13%**\n• **Deaths from any cause fell 12%**\n• No significant increase in serious hyperkalemia events\n\nRead that again: a few cents' worth of modified salt reduced *death itself* by double digits. Almost no drug trial posts a cleaner result at that price.\n\nOne honest caveat: participants were high-risk and their diets were heavy in home-cooked, salt-added food, so effects in a typical Western processed-food diet may be smaller. And people with kidney disease or on certain medications should not use potassium salt substitutes without asking their doctor first.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SSaSS (NEJM 2021)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~21,000 high-risk adults, 600 villages, 5 years</text>
                    <rect x="60" y="180" width="460" height="220" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#fff" font-weight="bold" font-size="21">REGULAR SALT</text>
                    <text x="290" y="300" text-anchor="middle" fill="#888" font-size="18">100% sodium chloride</text>
                    <rect x="580" y="180" width="460" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">SALT SUBSTITUTE</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">75% sodium chloride</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">25% potassium chloride</text>
                    <rect x="80" y="460" width="300" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="530" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">-14%</text>
                    <text x="230" y="580" text-anchor="middle" fill="#fff" font-size="17">strokes</text>
                    <rect x="400" y="460" width="300" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="530" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="32">-13%</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="17">major CV events</text>
                    <rect x="720" y="460" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="530" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">-12%</text>
                    <text x="870" y="580" text-anchor="middle" fill="#fff" font-size="17">deaths, any cause</text>
                    <rect x="150" y="700" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">CAVEATS</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="16">high-risk group, home-cooked diets; kidney disease? ask first</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="19">Pennies of modified salt, double-digit fewer deaths</text>
                </svg>`,
                caption: "The salt-substitute trial: sodium down, potassium up, mortality down 12%"
            }
        },
        {
            type: "quiz",
            question: "In the 1997 DASH trial, roughly how much did the DASH diet lower systolic blood pressure in participants with hypertension?",
            options: [
                { text: "About 2 mmHg -- diet effects are tiny compared to drugs", correct: false },
                { text: "About 5 mmHg -- meaningful but far below medication", correct: false },
                { text: "About 11 mmHg -- comparable to a starting medication", correct: true },
                { text: "About 25 mmHg -- diet outperforms all drug therapy", correct: false }
            ],
            explanation: "The DASH feeding trial (Appel 1997, NEJM) lowered systolic pressure by about 11 mmHg in hypertensive participants -- in the range of a typical starting medication -- within two weeks and without weight loss. The tempting answer is 5 mmHg, because most people assume diet effects must be small; DASH is the great exception, which is why it tops the lifestyle leaderboard. The 25 mmHg option overreaches -- no lifestyle change reliably posts numbers like that alone.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DASH TRIAL, 1997</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">459 adults, all meals provided,</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">results in 2 weeks -- how big was the drop?</text>
                    <rect x="250" y="400" width="600" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">systolic drop = ?</text>
                    <text x="550" y="515" text-anchor="middle" fill="#888" font-size="17">in participants with hypertension</text>
                </svg>`,
                caption: "Test yourself on the most famous diet trial in hypertension"
            }
        },
        {
            type: "visual",
            title: "Where Sodium Actually Hides",
            content: "Most people hear 'cut salt' and hide the shaker. That misses the target almost entirely.\n\nIn the US, roughly **70% of dietary sodium comes from processed and restaurant food**. Only about **11% comes from the shaker** (salt added at the table or in home cooking); the rest occurs naturally in food.\n\nThe biggest offenders are foods that don't even taste salty:\n\n• **Bread and rolls** -- the #1 sodium source in the American diet, by volume eaten\n• **Deli and cured meats** -- a few sandwich slices can carry 600+ mg\n• **Canned soup** -- a single can often tops 800-1,000 mg\n• **Sauces, dressings, and condiments** -- soy sauce runs ~900 mg per tablespoon\n• **Pizza, burritos, and restaurant meals** -- single dishes exceeding an entire day's 2,300 mg target are common\n\nThe practical move is not seasoning food less -- it is swapping the packaged sources, reading labels (aim for foods under ~140 mg per serving, the official 'low sodium' cutoff), and cooking more of what you eat.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHERE SODIUM HIDES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The shaker is not the problem</text>
                    <rect x="100" y="180" width="900" height="90" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <rect x="100" y="180" width="630" height="90" rx="20" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="415" y="235" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">~70% processed + restaurant</text>
                    <text x="870" y="222" text-anchor="middle" fill="#888" font-size="15">~11% shaker,</text>
                    <text x="870" y="250" text-anchor="middle" fill="#888" font-size="15">rest natural</text>
                    <rect x="80" y="330" width="440" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="385" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">BREAD + ROLLS</text>
                    <text x="300" y="428" text-anchor="middle" fill="#fff" font-size="16">the #1 US sodium source</text>
                    <rect x="580" y="330" width="440" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="385" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">DELI MEATS</text>
                    <text x="800" y="428" text-anchor="middle" fill="#fff" font-size="16">600+ mg in a few slices</text>
                    <rect x="80" y="500" width="440" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="555" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">CANNED SOUP</text>
                    <text x="300" y="598" text-anchor="middle" fill="#fff" font-size="16">800-1,000 mg per can</text>
                    <rect x="580" y="500" width="440" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="555" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">SAUCES + DRESSINGS</text>
                    <text x="800" y="598" text-anchor="middle" fill="#fff" font-size="16">soy sauce: ~900 mg/tbsp</text>
                    <rect x="150" y="700" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="752" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LABEL RULE OF THUMB</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="18">under 140 mg/serving = officially low sodium</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">Swap the packages, keep the shaker in perspective</text>
                </svg>`,
                caption: "70% of sodium arrives in packages and restaurant meals -- often in foods that don't taste salty"
            }
        },
        {
            type: "concept",
            title: "Potassium: The Forgotten Half of the Salt Story",
            content: "Sodium gets all the press, but blood pressure responds to the **sodium-to-potassium ratio**, not sodium alone. Potassium relaxes blood vessel walls and helps your kidneys flush excess sodium -- it is, functionally, an anti-salt.\n\nThe evidence:\n\n• Populations eating traditional high-potassium diets (10,000+ mg/day from plants) barely see blood pressure rise with age -- the pattern wealthy nations consider 'normal aging'\n• Trials of increased potassium intake show drops of roughly **4-5 mmHg** in hypertensives, with the biggest effects in people eating the most sodium\n• A quarter of SSaSS's benefit story was simply potassium going *up*\n\nMost Americans get barely half the recommended **~3,400 mg/day (men) / 2,600 (women)**. Where to find it (food first -- supplements can be risky without medical supervision):\n\n• **Beans and lentils**: ~600-700 mg per cooked cup\n• **Baked potato with skin**: ~900 mg\n• **Spinach, cooked**: ~840 mg per cup\n• **Bananas**: ~420 mg (famous, but mid-tier!)\n• **Yogurt, salmon, avocados, winter squash**: all strong sources\n\nCaution worth repeating: if you have kidney disease or take ACE inhibitors, ARBs, or potassium-sparing diuretics, talk to your doctor before deliberately loading potassium.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ANTI-SALT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Blood pressure tracks the sodium:potassium ratio</text>
                    <rect x="60" y="180" width="460" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">SODIUM</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="18">tightens vessels,</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">holds water</text>
                    <rect x="580" y="180" width="460" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">POTASSIUM</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="18">relaxes vessel walls,</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">flushes sodium out</text>
                    <text x="550" y="450" text-anchor="middle" fill="#888" font-size="19">Top food sources (mg potassium)</text>
                    <text x="330" y="515" text-anchor="end" fill="#fff" font-size="18">Baked potato + skin</text>
                    <rect x="350" y="490" width="450" height="36" rx="8" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="820" y="516" text-anchor="start" fill="#10b981" font-size="17">~900</text>
                    <text x="330" y="580" text-anchor="end" fill="#fff" font-size="18">Spinach, 1 cup cooked</text>
                    <rect x="350" y="555" width="420" height="36" rx="8" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="581" text-anchor="start" fill="#10b981" font-size="17">~840</text>
                    <text x="330" y="645" text-anchor="end" fill="#fff" font-size="18">Lentils, 1 cup cooked</text>
                    <rect x="350" y="620" width="360" height="36" rx="8" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="646" text-anchor="start" fill="#10b981" font-size="17">~700</text>
                    <text x="330" y="710" text-anchor="end" fill="#fff" font-size="18">Banana</text>
                    <rect x="350" y="685" width="210" height="36" rx="8" fill="rgba(245,158,11,0.35)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="580" y="711" text-anchor="start" fill="#f59e0b" font-size="17">~420 (mid-tier!)</text>
                    <rect x="150" y="790" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">CAUTION</text>
                    <text x="550" y="872" text-anchor="middle" fill="#fff" font-size="16">kidney disease or ACE/ARB meds? Ask your doctor first</text>
                </svg>`,
                caption: "Potassium is the forgotten half of the salt story -- and bananas are not its king"
            }
        },
        {
            type: "example",
            title: "The Wall Sit Surprise",
            content: "For decades, the exercise prescription for blood pressure was simple: do cardio. Then a 2023 meta-analysis in the **British Journal of Sports Medicine** pooled 270 randomized trials covering **15,827 participants** and ranked every exercise type -- and the winner was the humble **isometric hold**.\n\nThe rankings for systolic reduction:\n\n• **Isometric exercise** (wall sits, planks, handgrip holds): about **8 mmHg systolic / 4 mmHg diastolic**\n• Combined training: ~6 mmHg\n• Dynamic resistance training: ~4.5 mmHg\n• Aerobic training: ~4.5 mmHg\n• HIIT: ~4 mmHg\n\nWhy would holding still beat running? The leading explanation: sustained muscle contraction compresses blood vessels; on release, blood rushes through, triggering the vessel lining to release nitric oxide and improving vessel dilation over time. It is resistance training for your arteries.\n\nA typical protocol from the studies: **4 rounds of a 2-minute wall sit, 2 minutes rest between, 3 times a week** -- about 20 minutes total. Honest caveats: isometric trials were smaller and shorter than the aerobic ones, so the ranking may shift as evidence grows, and aerobic exercise carries broader benefits beyond pressure. The smart read: do both. But if you 'have no time to exercise,' you no longer have an excuse -- you have a wall.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WALL SIT SURPRISE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">BJSM 2023: 270 trials, 15,827 participants</text>
                    <text x="340" y="205" text-anchor="end" fill="#fff" font-size="18">Isometric holds</text>
                    <rect x="360" y="180" width="520" height="40" rx="10" fill="rgba(236,72,153,0.4)" stroke="#ec4899" stroke-width="2"/>
                    <text x="900" y="208" text-anchor="start" fill="#ec4899" font-size="18">~8</text>
                    <text x="340" y="280" text-anchor="end" fill="#fff" font-size="18">Combined training</text>
                    <rect x="360" y="255" width="390" height="40" rx="10" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <text x="770" y="283" text-anchor="start" fill="#6366f1" font-size="18">~6</text>
                    <text x="340" y="355" text-anchor="end" fill="#fff" font-size="18">Weights</text>
                    <rect x="360" y="330" width="290" height="40" rx="10" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="670" y="358" text-anchor="start" fill="#8b5cf6" font-size="18">~4.5</text>
                    <text x="340" y="430" text-anchor="end" fill="#fff" font-size="18">Aerobic</text>
                    <rect x="360" y="405" width="290" height="40" rx="10" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="670" y="433" text-anchor="start" fill="#10b981" font-size="18">~4.5</text>
                    <text x="340" y="505" text-anchor="end" fill="#fff" font-size="18">HIIT</text>
                    <rect x="360" y="480" width="260" height="40" rx="10" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="640" y="508" text-anchor="start" fill="#f59e0b" font-size="18">~4</text>
                    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="16">approximate systolic reduction, mmHg</text>
                    <rect x="150" y="630" width="800" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">THE PROTOCOL</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">4 x 2-minute wall sit, 2 min rest, 3x per week</text>
                    <rect x="150" y="820" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="868" text-anchor="middle" fill="#f59e0b" font-size="18">Honest note: isometric trials were smaller and shorter --</text>
                    <text x="550" y="905" text-anchor="middle" fill="#fff" font-size="17">aerobic still wins for overall health. Do both.</text>
                </svg>`,
                caption: "The 2023 exercise leaderboard for blood pressure -- isometrics on top"
            }
        },
        {
            type: "concept",
            title: "Stress, Sleep, and the 3 AM Spike",
            content: "Two levers hide outside the diet-and-exercise frame, and one of them snores.\n\n**Sleep.** Blood pressure normally 'dips' 10-20% overnight -- your vascular rest period. Short or fragmented sleep blunts that dip, and 'non-dippers' carry higher cardiovascular risk at the same daytime readings. The heavyweight problem is **obstructive sleep apnea (OSA)**: the airway collapses repeatedly, each gasp firing a stress-hormone surge that spikes pressure all night. OSA shows up in an estimated **30-50% of people with hypertension**, and it is THE most common finding behind 'resistant' hypertension (high despite 3+ medications). If you snore loudly, wake unrefreshed, or your partner notices breathing pauses -- ask about a sleep study. Treating OSA (usually with CPAP) lowers pressure modestly, around 2-3 mmHg on average, but in sleepier, sicker patients the gains run larger -- and the energy payoff makes every other lever easier to pull.\n\n**Stress.** Chronic stress keeps stress hormones elevated and, just as importantly, drives the behaviors that raise pressure: poor sleep, alcohol, salty comfort food. Direct trial evidence is thinner here -- honest grade: promising, not proven -- but slow-breathing practice, regular exercise, and simply fixing sleep have the best support.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NIGHT SHIFT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Blood pressure should dip 10-20% while you sleep</text>
                    <line x1="120" y1="440" x2="1000" y2="440" stroke="#888" stroke-width="1" stroke-dasharray="6"/>
                    <text x="115" y="447" text-anchor="end" fill="#888" font-size="14">day</text>
                    <path d="M120 440 Q300 440 400 520 Q550 620 700 520 Q800 440 1000 440" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="550" y="680" text-anchor="middle" fill="#10b981" font-size="17">healthy: a deep overnight dip</text>
                    <path d="M120 420 L240 440 L300 380 L360 450 L420 370 L480 455 L540 365 L600 450 L660 375 L720 445 L1000 420" stroke="#ef4444" stroke-width="3" fill="none" opacity="0.8"/>
                    <text x="550" y="330" text-anchor="middle" fill="#ef4444" font-size="17">sleep apnea: all-night pressure spikes</text>
                    <rect x="80" y="730" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="785" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SLEEP APNEA</text>
                    <text x="300" y="828" text-anchor="middle" fill="#fff" font-size="16">in 30-50% of hypertensives;</text>
                    <text x="300" y="860" text-anchor="middle" fill="#888" font-size="15">top cause of resistant HTN</text>
                    <rect x="580" y="730" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="785" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">STRESS</text>
                    <text x="800" y="828" text-anchor="middle" fill="#fff" font-size="16">indirect but real -- honest grade:</text>
                    <text x="800" y="860" text-anchor="middle" fill="#888" font-size="15">promising, not proven</text>
                    <rect x="200" y="955" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="18">Loud snoring + daytime fatigue? Ask about a sleep study</text>
                </svg>`,
                caption: "Healthy sleep dips pressure; apnea spikes it all night long"
            }
        },
        {
            type: "concept",
            title: "When Lifestyle Isn't Enough: The Medication Truth",
            content: "Sometimes you pull every lever and the number still sits high. Genetics, age, and kidney physiology set floors that willpower cannot break. Here is the honest briefing on what comes next:\n\n• **ACE inhibitors / ARBs** (lisinopril, losartan): relax vessels by blocking a pressure hormone system. Usually first-line; ACE inhibitors cause a dry cough in some people -- ARBs are the cough-free sibling\n• **Calcium-channel blockers** (amlodipine): relax the muscle in artery walls. Common side effect: ankle swelling\n• **Thiazide diuretics** (chlorthalidone, HCTZ): help kidneys shed sodium and water. Among the oldest, cheapest, best-proven drugs in medicine\n\nWhat they share: **decades of outcome data showing fewer strokes, heart attacks, and deaths**, generic prices of a few dollars a month, and generally good tolerability. Often two drugs at low doses beat one at high dose, with fewer side effects.\n\nNow the part that matters more than pharmacology: **starting medication is not a failure**, and it is not a life sentence -- meaningful lifestyle change lets some people step down doses later, *with their doctor*. The genuinely dangerous move is quietly stopping your pills because you feel fine. You feel fine *because* they are working -- remember, high pressure has no symptoms to feel. Never stop or adjust without your doctor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MEDICATION TRUTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three proven classes, one honest conversation</text>
                    <rect x="80" y="170" width="300" height="230" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">ACE-I / ARB</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="15">block a pressure</text>
                    <text x="230" y="298" text-anchor="middle" fill="#fff" font-size="15">hormone system</text>
                    <text x="230" y="345" text-anchor="middle" fill="#888" font-size="14">watch for: dry cough (ACE)</text>
                    <rect x="400" y="170" width="300" height="230" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">CCB</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="15">relax artery-wall</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="15">muscle directly</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="14">watch for: ankle swelling</text>
                    <rect x="720" y="170" width="300" height="230" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THIAZIDE</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="15">kidneys shed extra</text>
                    <text x="870" y="298" text-anchor="middle" fill="#fff" font-size="15">sodium and water</text>
                    <text x="870" y="345" text-anchor="middle" fill="#888" font-size="14">oldest, cheapest, proven</text>
                    <rect x="150" y="460" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="515" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHAT THEY SHARE</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="17">decades of outcome data, generic prices, good tolerability</text>
                    <rect x="150" y="640" width="800" height="140" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">TAKING MEDS IS NOT FAILURE</text>
                    <text x="550" y="740" text-anchor="middle" fill="#fff" font-size="17">genetics and age set floors willpower cannot break</text>
                    <rect x="150" y="820" width="800" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NEVER STOP QUIETLY</text>
                    <text x="550" y="920" text-anchor="middle" fill="#fff" font-size="17">you feel fine BECAUSE they work -- adjust only with your doctor</text>
                </svg>`,
                caption: "The three first-line classes -- and why stopping quietly is the real danger"
            }
        },
        {
            type: "application",
            title: "Your 30-Day Pressure Plan",
            content: "Time to run the experiment on yourself -- with your doctor in the loop if you take any medications or have kidney issues.\n\n1. **Days 1-7: Baseline.** Run the home protocol from Lesson 2 (validated cuff, 2 readings AM + PM). Change nothing yet. Average all but day 1 -- this is your starting number\n\n2. **Week 2: Attack sodium, raise potassium.** Swap the 3 saltiest packaged items you eat regularly; add beans, potatoes, or greens daily. Consider a potassium salt substitute *if your doctor clears it*\n\n3. **Week 3: Add the wall sits.** 4 x 2 minutes, 2 minutes rest, 3 days this week -- plus a 25-minute brisk walk on 3 other days\n\n4. **Week 4: DASH-ify.** Aim for 4+ vegetable and fruit servings daily and swap refined grains for whole. Cap alcohol at moderate or below all week\n\n5. **Days 26-30: Re-measure.** Same protocol, same cuff, same times. Compare averages\n\nMost committed people see **5-15 points** of improvement in a month. Bring both averages to your doctor -- data like this changes treatment conversations completely.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 30-DAY PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Run the experiment on yourself</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="205" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">DAYS 1-7</text>
                    <text x="200" y="243" text-anchor="start" fill="#fff" font-size="17">Baseline week: measure, change nothing</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">WEEK 2</text>
                    <text x="200" y="383" text-anchor="start" fill="#fff" font-size="17">Sodium down, potassium up -- swap the top 3 offenders</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="485" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">WEEK 3</text>
                    <text x="200" y="523" text-anchor="start" fill="#fff" font-size="17">Wall sits 3x + brisk walks 3x</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">WEEK 4</text>
                    <text x="200" y="663" text-anchor="start" fill="#fff" font-size="17">DASH-ify meals, cap alcohol</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="765" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">DAYS 26-30</text>
                    <text x="200" y="803" text-anchor="start" fill="#fff" font-size="17">Re-measure with the same protocol, compare averages</text>
                    <rect x="200" y="870" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="912" text-anchor="middle" fill="#ffd700" font-size="19">Typical committed result: 5-15 points in a month --</text>
                    <text x="550" y="944" text-anchor="middle" fill="#fff" font-size="17">bring both averages to your doctor</text>
                </svg>`,
                caption: "Four weeks, one lever at a time, measured at both ends"
            }
        },
        {
            type: "quiz",
            question: "Where does most of the sodium in the typical American diet come from?",
            options: [
                { text: "The salt shaker -- table salt and home cooking", correct: false },
                { text: "Processed and restaurant foods -- roughly 70% of intake", correct: true },
                { text: "Naturally salty whole foods like seafood and celery", correct: false },
                { text: "Salty snacks specifically -- chips, pretzels, and popcorn", correct: false }
            ],
            explanation: "About 70% of US dietary sodium arrives in processed and restaurant foods -- bread, deli meat, canned soup, sauces, pizza -- while the shaker contributes only around 11%. The shaker answer is the classic misconception, and it leads people to under-season home cooking while the real load hides in packages that often don't even taste salty. Chips and pretzels are real contributors but a modest slice; bread and rolls actually top the list because of how much we eat.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SODIUM HUNT</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">You want to cut sodium toward 2.3 g/day.</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Where should you look first?</text>
                    <rect x="200" y="400" width="330" height="160" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="365" y="470" text-anchor="middle" fill="#fff" font-size="20">The shaker?</text>
                    <rect x="570" y="400" width="330" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="735" y="470" text-anchor="middle" fill="#fff" font-size="20">The packages?</text>
                    <text x="550" y="640" text-anchor="middle" fill="#888" font-size="18">One of these holds ~70% of the answer</text>
                </svg>`,
                caption: "Final check: hunting sodium where it actually lives"
            }
        }
    ]
},
{
    id: 4,
    title: "Cholesterol Decoded: LDL, HDL & the Truth",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Most Misunderstood Number in Your Chart",
            content: "You have probably had this moment: a lab report arrives, there is a number labeled cholesterol, and someone -- a relative, a podcast, a guy at the gym -- has a confident opinion about it. Cholesterol is simultaneously the most-measured and most-argued-about number in medicine.\n\nHere is what makes this lesson worth your next seven minutes: the science on cholesterol is actually far more settled than the internet suggests, and far more interesting. You will learn what each line on a lipid panel physically IS (hint: cholesterol does not float in your blood by itself), why LDL turned out to be a cause of heart disease and not just a bystander, and why the 'good cholesterol' story is only half true.\n\nBy the end, you will be able to read your own lipid panel like someone who understands the machinery -- and know which levers actually move it. As always: this is education, not medical advice. Your numbers deserve a conversation with your doctor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LIPID PANEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four numbers, four different stories</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="220" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="24">LDL-C</text>
                    <text x="220" y="255" text-anchor="start" fill="#fff" font-size="18">The number that predicts and causes trouble</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="360" text-anchor="start" fill="#10b981" font-weight="bold" font-size="24">HDL-C</text>
                    <text x="220" y="395" text-anchor="start" fill="#fff" font-size="18">A marker of risk -- but not a lever you can pull</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="500" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="24">Triglycerides</text>
                    <text x="220" y="535" text-anchor="start" fill="#fff" font-size="18">A window into your metabolism</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="640" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="24">Total cholesterol</text>
                    <text x="220" y="675" text-anchor="start" fill="#fff" font-size="18">The blurriest number of the four</text>
                    <rect x="200" y="760" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-size="20">By the end, you can read all four</text>
                    <text x="550" y="835" text-anchor="middle" fill="#888" font-size="16">like someone who knows the machinery</text>
                </svg>`,
                caption: "The four numbers on a standard lipid panel -- and what each one really tells you"
            }
        },
        {
            type: "concept",
            title: "Delivery Trucks and Cargo",
            content: "Cholesterol is a waxy fat. Fat does not dissolve in blood, which is mostly water -- so your body ships it inside protein-wrapped particles called **lipoproteins**. Think of them as **delivery trucks**, with cholesterol and triglycerides as the **cargo**.\n\nYour lipid panel measures the cargo, not the trucks:\n\n• **Total cholesterol** -- all the cholesterol cargo in all trucks combined\n• **LDL-C** -- cholesterol riding in **low-density lipoprotein** trucks, the ones that can get stuck in artery walls and start plaque\n• **HDL-C** -- cholesterol in **high-density lipoprotein** trucks, which mostly haul cholesterol back to the liver\n• **Triglycerides** -- a different cargo entirely: fat your body is moving around for energy storage\n\nOne crucial reframe: cholesterol itself is not a villain. Your body makes it on purpose -- it is a building block for cell membranes, hormones like testosterone and estrogen, and vitamin D. Your liver manufactures most of the cholesterol in your blood, which is why what you eat matters less than people assume (more on that soon).\n\nThe problem is not cholesterol existing. The problem is too many LDL trucks spending too many years in traffic against your artery walls.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TRUCKS AND CARGO</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lipoproteins carry fat through watery blood</text>
                    <circle cx="300" cy="330" r="130" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="300" y="310" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">LDL</text>
                    <text x="300" y="350" text-anchor="middle" fill="#fff" font-size="18">Delivers cholesterol</text>
                    <text x="300" y="382" text-anchor="middle" fill="#888" font-size="16">out to the body</text>
                    <circle cx="800" cy="330" r="130" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="800" y="310" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">HDL</text>
                    <text x="800" y="350" text-anchor="middle" fill="#fff" font-size="18">Hauls cholesterol</text>
                    <text x="800" y="382" text-anchor="middle" fill="#888" font-size="16">back to the liver</text>
                    <path d="M430 330 L670 330" stroke="#14b8a6" stroke-width="2" stroke-dasharray="8" opacity="0.6"/>
                    <rect x="150" y="540" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE PANEL MEASURES CARGO</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">LDL-C = cholesterol inside LDL trucks</text>
                    <text x="550" y="668" text-anchor="middle" fill="#888" font-size="16">Not the number of trucks (that matters too -- Lesson 5)</text>
                    <rect x="200" y="760" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-size="20">Cholesterol is a building block,</text>
                    <text x="550" y="835" text-anchor="middle" fill="#ffd700" font-size="20">not a villain -- the dose and years matter</text>
                </svg>`,
                caption: "Lipoproteins are the trucks; cholesterol is the cargo your panel measures"
            }
        },
        {
            type: "visual",
            title: "Reading Your Actual Lab Report",
            content: "Here is a typical panel with commonly cited reference ranges (in mg/dL, the US units). Your lab report will flag values, but ranges are guides, not verdicts -- context and overall risk matter more than any single number.\n\n• **LDL-C**: under 100 is commonly labeled optimal; under 70 is often targeted after a heart event\n• **HDL-C**: above 40 (men) or 50 (women) is typical; very high values are not extra protective\n• **Triglycerides**: under 150 is standard; fasting matters, since a recent meal can spike them\n• **Total cholesterol**: under 200 is the classic cutoff, but it blends good and bad -- two people with identical totals can have very different risk\n\nOne practical note: many labs still calculate LDL-C rather than measure it directly, so very high triglycerides can distort the LDL number.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAMPLE LIPID PANEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Values in mg/dL -- ranges are guides, not verdicts</text>
                    <rect x="100" y="160" width="900" height="100" rx="16" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="160" y="205" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">LDL-C</text>
                    <text x="160" y="238" text-anchor="start" fill="#888" font-size="16">Optimal under 100; under 70 after a heart event</text>
                    <text x="920" y="215" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">128</text>
                    <rect x="100" y="290" width="900" height="100" rx="16" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="335" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">HDL-C</text>
                    <text x="160" y="368" text-anchor="start" fill="#888" font-size="16">Above 40 (men) / 50 (women) is typical</text>
                    <text x="920" y="345" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">52</text>
                    <rect x="100" y="420" width="900" height="100" rx="16" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="465" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">Triglycerides</text>
                    <text x="160" y="498" text-anchor="start" fill="#888" font-size="16">Under 150 fasting is standard</text>
                    <text x="920" y="475" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">140</text>
                    <rect x="100" y="550" width="900" height="100" rx="16" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="595" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">Total cholesterol</text>
                    <text x="160" y="628" text-anchor="start" fill="#888" font-size="16">Classic cutoff 200 -- but it blends good and bad</text>
                    <text x="920" y="605" text-anchor="end" fill="#fff" font-weight="bold" font-size="26">208</text>
                    <rect x="150" y="700" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="20">Two people with the same total of 208</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="16">can have very different real risk -- read the parts</text>
                </svg>`,
                caption: "A sample panel with commonly cited reference ranges -- the parts matter more than the total"
            }
        },
        {
            type: "example",
            title: "The Families Who Settled the Argument",
            content: "For decades, skeptics could argue LDL was just a bystander -- correlated with heart disease, not causing it. Two groups of real people ended that argument.\n\n**The unlucky families.** People with **familial hypercholesterolemia (FH)** inherit broken LDL-receptor genes. Their livers cannot clear LDL, so it runs at 2-4x normal from birth. Untreated, many have heart attacks in their 30s and 40s -- some homozygous children in their first decade. Same diets and habits as their neighbors; only the LDL differs. Outcome: early disease.\n\n**The lucky ones.** In 2006, Jonathan Cohen and Helen Hobbs studied people carrying **loss-of-function PCSK9 mutations** -- a gene tweak that makes the liver vacuum LDL out of the blood. Black participants in the ARIC study with these variants had roughly 28% lower LDL for life -- and about **88% lower risk of coronary heart disease**. A modest LDL difference, held from birth, nearly erased the disease.\n\nHigh LDL for life: early heart disease. Low LDL for life: barely any. When a single variable moves the outcome in both directions, that is what causation looks like. This discovery also inspired an entire drug class -- PCSK9 inhibitors -- which you will meet in Lesson 6.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A NATURAL EXPERIMENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Genetics moved LDL both ways -- disease followed</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">FH FAMILIES</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Broken LDL receptors</text>
                    <text x="290" y="305" text-anchor="middle" fill="#fff" font-size="18">LDL 2-4x normal from birth</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="16">Untreated: heart attacks</text>
                    <text x="290" y="382" text-anchor="middle" fill="#888" font-size="16">in their 30s and 40s</text>
                    <text x="290" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">Lifelong high LDL</text>
                    <text x="290" y="498" text-anchor="middle" fill="#ef4444" font-size="18">= early disease</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PCSK9 CARRIERS</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Cohen and Hobbs, 2006</text>
                    <text x="810" y="305" text-anchor="middle" fill="#fff" font-size="18">~28% lower LDL for life</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="16">Result: about 88% lower</text>
                    <text x="810" y="382" text-anchor="middle" fill="#888" font-size="16">coronary heart disease risk</text>
                    <text x="810" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">Lifelong low LDL</text>
                    <text x="810" y="498" text-anchor="middle" fill="#10b981" font-size="18">= barely any disease</text>
                    <rect x="150" y="600" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#ffd700" font-size="20">One variable, moved both directions,</text>
                    <text x="550" y="685" text-anchor="middle" fill="#ffd700" font-size="20">changes the outcome -- that is causation</text>
                </svg>`,
                caption: "FH families and PCSK9 carriers: nature ran the experiment no trial ever could"
            }
        },
        {
            type: "quiz",
            question: "In the 2006 Cohen study, people born with loss-of-function PCSK9 mutations had modestly lower LDL their whole lives. What happened to their coronary heart disease risk?",
            options: [
                { text: "It dropped slightly, about 10%, matching the modest LDL reduction", correct: false },
                { text: "It dropped roughly 88% -- far more than short-term LDL lowering achieves", correct: true },
                { text: "It was unchanged, showing LDL is only a marker of risk", correct: false },
                { text: "It rose, because very low LDL starves cells of cholesterol", correct: false }
            ],
            explanation: "Carriers had about 88% lower coronary heart disease risk despite only ~28% lower LDL. The lesson is cumulative exposure: LDL damage compounds over decades, like pack-years of smoking, so a modest reduction held from birth beats a large reduction started at 55. The 10% option is the tempting one -- it assumes risk scales with today's number rather than lifetime exposure. And cells make their own cholesterol, so modestly low blood LDL does not starve them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">LIFETIME LDL EXPOSURE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">A small difference, held from birth,</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">compounds into a very large difference in risk</text>
                    <rect x="150" y="400" width="800" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THINK: PACK-YEARS</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">Smoking risk = amount x years</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">LDL risk works the same way</text>
                    <text x="550" y="578" text-anchor="middle" fill="#888" font-size="16">Which is why starting earlier matters</text>
                </svg>`,
                caption: "Test your understanding of the genetic evidence"
            }
        },
        {
            type: "concept",
            title: "Three Roads, One Destination: LDL Is Causal",
            content: "Science rarely gets to say 'causal' out loud. For LDL, three independent lines of evidence converge so tightly that in 2017 the European Atherosclerosis Society consensus panel concluded LDL does not just predict atherosclerosis -- it **causes** it.\n\n• **Genetics**: FH families (lifelong high LDL, early disease) and PCSK9 carriers (lifelong low LDL, ~88% less disease) -- nature's own randomized experiment\n• **Mendelian randomization**: studies across hundreds of thousands of people show that ANY gene variant that lowers LDL -- through completely different mechanisms -- lowers heart disease risk in proportion to the LDL change. Different mechanisms, same result. Only the LDL is common to all of them.\n• **Randomized trials**: 30+ trials with over 200,000 participants show that lowering LDL with statins, ezetimibe, or PCSK9 inhibitors -- again, different mechanisms -- cuts heart attacks and strokes in proportion to the LDL drop\n\nThe unifying idea is **cumulative exposure** -- think of it as **LDL pack-years**, like smoking. Risk tracks how high your LDL is multiplied by how long it stays there. That is why the same LDL number is more urgent at 30 than at 70, and why 'my cholesterol is only a little high' can still matter over 40 years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE ROADS CONVERGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Independent evidence, one conclusion</text>
                    <rect x="80" y="180" width="300" height="200" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">GENETICS</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-size="16">FH families and</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="16">PCSK9 carriers</text>
                    <rect x="400" y="180" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">MENDELIAN</text>
                    <text x="550" y="262" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">RANDOMIZATION</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="16">Any LDL-lowering gene</text>
                    <text x="550" y="335" text-anchor="middle" fill="#fff" font-size="16">lowers risk in proportion</text>
                    <rect x="720" y="180" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">30+ TRIALS</text>
                    <text x="870" y="280" text-anchor="middle" fill="#fff" font-size="16">200,000+ people,</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="16">multiple drug classes</text>
                    <path d="M230 400 L520 540" stroke="#14b8a6" stroke-width="2"/>
                    <path d="M550 400 L550 540" stroke="#14b8a6" stroke-width="2"/>
                    <path d="M870 400 L580 540" stroke="#14b8a6" stroke-width="2"/>
                    <rect x="250" y="560" width="600" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">LDL CAUSES</text>
                    <text x="550" y="655" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">ATHEROSCLEROSIS</text>
                    <rect x="200" y="760" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="20">Risk = LDL level x years of exposure</text>
                    <text x="550" y="845" text-anchor="middle" fill="#888" font-size="16">Think LDL pack-years -- time in traffic matters</text>
                </svg>`,
                caption: "Genetics, Mendelian randomization, and randomized trials all point the same way"
            }
        },
        {
            type: "concept",
            title: "The HDL Heartbreak: Good Cholesterol Is a Half-Truth",
            content: "You have heard HDL called **good cholesterol**. Here is the honest version: low HDL genuinely predicts higher heart risk in population studies. But when researchers built drugs to RAISE HDL, something humbling happened.\n\n• **CETP inhibitors** (torcetrapib, dalcetrapib, evacetrapib) raised HDL dramatically -- torcetrapib by over 70% -- yet trials were stopped for futility or, in torcetrapib's case, MORE deaths in the treatment arm\n• **Niacin** raised HDL nicely, but in **AIM-HIGH** (2011, ~3,400 patients) and **HPS2-THRIVE** (2014, ~25,000 patients), adding it to statins prevented nothing and added side effects\n\nThe lesson is one of the most important in all of medicine: **a marker is not a lever**. Low HDL is like a check-engine light -- it often signals underlying problems (insulin resistance, inactivity, smoking) that raise risk. But pushing the light off with a drug does not fix the engine.\n\nMendelian randomization agrees: gene variants that raise HDL do NOT reduce heart disease, while LDL-lowering variants reliably do.\n\nPractical translation: if your HDL is low, treat it as a prompt to look at metabolic health -- exercise, weight, smoking -- not as a number to chase with supplements.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MARKER VS LEVER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why raising HDL with drugs kept failing</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HDL AS MARKER</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Low HDL predicts risk</text>
                    <text x="290" y="305" text-anchor="middle" fill="#fff" font-size="18">in population studies</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="16">Often signals insulin</text>
                    <text x="290" y="382" text-anchor="middle" fill="#888" font-size="16">resistance or inactivity</text>
                    <text x="290" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">This part is true</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">HDL AS LEVER</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">CETP drugs: HDL up 70%,</text>
                    <text x="810" y="305" text-anchor="middle" fill="#fff" font-size="18">no benefit -- or worse</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="16">Niacin: AIM-HIGH and</text>
                    <text x="810" y="382" text-anchor="middle" fill="#888" font-size="16">HPS2-THRIVE both failed</text>
                    <text x="810" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">This part failed</text>
                    <rect x="150" y="570" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">CHECK-ENGINE LIGHT</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="18">Turning off the light does not fix the engine</text>
                    <rect x="200" y="770" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20">Low HDL? Look at metabolic health,</text>
                    <text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="20">not at supplements that chase the number</text>
                </svg>`,
                caption: "HDL predicts risk but raising it with drugs failed -- a marker is not a lever"
            }
        },
        {
            type: "concept",
            title: "Triglycerides: Your Metabolism Talking",
            content: "The third cargo on your panel, **triglycerides**, is fat in transit -- energy your body is shipping to storage. It behaves very differently from LDL, and it responds to different levers.\n\nWhat pushes triglycerides UP:\n\n• **Refined carbohydrates and sugar** -- especially liquid sugar; your liver converts the excess into fat and ships it out as triglycerides\n• **Alcohol** -- the liver prioritizes metabolizing alcohol and packages more fat meanwhile\n• **Insulin resistance** -- when cells stop responding well to insulin, fat trafficking goes haywire; high triglycerides plus low HDL is a classic early signature of it\n• **Excess calories generally**, inactivity, and some genetics\n\nNotice what is NOT on that list: dietary fat is not the main driver for most people. Counterintuitively, low-carb diets often LOWER triglycerides.\n\nDo triglycerides matter independently? The signal is real but messier than LDL. Very high levels (over 500 mg/dL) risk pancreatitis outright. Moderately high levels mark elevated cardiovascular risk, partly because they travel with **remnant particles** that invade artery walls -- which is one reason Lesson 5's particle-count test matters.\n\nGood news: triglycerides are the most lifestyle-responsive number on your panel. Cut sugar and alcohol, add exercise, and they can fall 20-50% within weeks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT RAISES THEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Triglycerides respond to different levers than LDL</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Refined carbs and sugar -- especially drinks</text>
                    <text x="245" y="242" text-anchor="start" fill="#888" font-size="15">Liver converts the excess into shipped fat</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="332" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="332" text-anchor="start" fill="#fff" font-size="19">Alcohol -- the liver processes it first</text>
                    <text x="245" y="362" text-anchor="start" fill="#888" font-size="15">and packages more fat in the meantime</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="452" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="452" text-anchor="start" fill="#fff" font-size="19">Insulin resistance -- fat trafficking goes haywire</text>
                    <text x="245" y="482" text-anchor="start" fill="#888" font-size="15">High TG + low HDL is its classic signature</text>
                    <rect x="150" y="530" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="572" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="572" text-anchor="start" fill="#fff" font-size="19">Excess calories and inactivity</text>
                    <text x="245" y="602" text-anchor="start" fill="#888" font-size="15">Plus genetics in some families</text>
                    <rect x="150" y="690" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MOST LIFESTYLE-RESPONSIVE NUMBER</text>
                    <text x="550" y="780" text-anchor="middle" fill="#fff" font-size="18">Cut sugar and alcohol, move more: down 20-50% in weeks</text>
                </svg>`,
                caption: "The four main drivers of high triglycerides -- note that dietary fat is not the headline"
            }
        },
        {
            type: "concept",
            title: "Eggs Were Framed: Dietary Cholesterol vs Saturated Fat",
            content: "In the 1970s and 80s, eggs were public enemy number one -- because they contain cholesterol, and the logic seemed obvious: eat cholesterol, raise blood cholesterol. The logic was wrong for most people.\n\nHere is why: your liver makes most of your blood cholesterol, and it adjusts. Eat more cholesterol, and the liver makes less and absorbs less. For roughly 70-75% of people, **dietary cholesterol** (eggs, shrimp) barely nudges blood LDL. The 2015 US Dietary Guidelines quietly dropped the long-standing 300 mg daily cholesterol limit for this reason. (A minority of 'hyper-responders' do see bigger shifts -- your own labs are the referee.)\n\nThe dietary lever that actually moves LDL is **saturated fat** -- abundant in butter, fatty red and processed meat, cheese, and coconut oil. It reduces the liver's LDL-receptor activity, leaving more LDL circulating.\n\nThe crucial nuance from the **2017 AHA Presidential Advisory led by Frank Sacks**: what you REPLACE it with decides everything.\n\n• Swap saturated fat for **polyunsaturated fat** (fish, walnuts, seed oils): heart risk falls roughly 25-30% in cohort analyses\n• Swap it for **refined carbs**: little to no benefit -- you traded one problem for another\n\nThat replacement principle explains decades of confusing headlines about butter and low-fat diets.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REAL DIETARY LEVER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">It was never mainly about eating cholesterol</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">DIETARY CHOLESTEROL</text>
                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="17">Eggs, shrimp, shellfish</text>
                    <text x="290" y="310" text-anchor="middle" fill="#888" font-size="16">Liver compensates --</text>
                    <text x="290" y="340" text-anchor="middle" fill="#888" font-size="16">small LDL effect for ~3 in 4 people</text>
                    <text x="290" y="405" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">Minor player</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SATURATED FAT</text>
                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="17">Butter, fatty meat, cheese</text>
                    <text x="810" y="310" text-anchor="middle" fill="#888" font-size="16">Dials down LDL receptors --</text>
                    <text x="810" y="340" text-anchor="middle" fill="#888" font-size="16">more LDL stays in the blood</text>
                    <text x="810" y="405" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">Main dietary lever</text>
                    <rect x="150" y="540" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE REPLACEMENT RULE (Sacks 2017)</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Saturated fat to polyunsaturated fat: risk down ~25-30%</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Saturated fat to refined carbs: little to no benefit</text>
                    <rect x="200" y="780" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#ffd700" font-size="20">What you swap IN matters as much</text>
                    <text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="20">as what you take out</text>
                </svg>`,
                caption: "Dietary cholesterol vs saturated fat -- and the replacement rule that resolves the butter wars"
            }
        },
        {
            type: "example",
            title: "Two Breakfasts, Two Different Outcomes",
            content: "Meet the same person making two different swaps, guided by the evidence.\n\n**Swap 1 -- the one that misses.** Worried about cholesterol, they drop their two-egg breakfast for a bagel with jam and orange juice. Dietary cholesterol falls. But eggs were never the main problem -- and the refined-carb breakfast nudges triglycerides up and leaves them hungry by 10 a.m. Their LDL barely moves. This is essentially the swap much of America made in the low-fat 1980s and 90s.\n\n**Swap 2 -- the one that works.** They keep the eggs but overhaul the saturated-fat pattern around them: butter to olive oil, fatty processed meats to fish twice a week, cheese-heavy snacks to a handful of walnuts, and they add a daily bowl of oats. Now they have pulled the actual levers: less saturated fat, replaced with unsaturated fat, plus **soluble fiber**.\n\nRealistic result for a typical person: LDL down somewhere in the 10-20% range over a couple of months -- meaningful, measurable on their next panel, and sustainable because nothing about it feels like punishment.\n\nThe moral: precision beats fear. Knowing WHICH lever moves LDL saves you from decades-old food anxieties that never had good evidence behind them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO SWAPS COMPARED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same worry, very different results</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE 1980s SWAP</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Eggs out,</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="18">bagel and juice in</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="16">Wrong lever: dietary</text>
                    <text x="290" y="382" text-anchor="middle" fill="#888" font-size="16">cholesterol barely moves LDL</text>
                    <text x="290" y="414" text-anchor="middle" fill="#888" font-size="16">Triglycerides drift up</text>
                    <text x="290" y="490" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">LDL: ~no change</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE EVIDENCE SWAP</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Butter to olive oil, fish</text>
                    <text x="810" y="303" text-anchor="middle" fill="#fff" font-size="18">for processed meat, add oats</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="16">Right levers: saturated fat</text>
                    <text x="810" y="382" text-anchor="middle" fill="#888" font-size="16">down, unsaturated fat and</text>
                    <text x="810" y="414" text-anchor="middle" fill="#888" font-size="16">soluble fiber up</text>
                    <text x="810" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">LDL: down 10-20%</text>
                    <rect x="150" y="620" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="20">Precision beats fear:</text>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-size="20">pull the lever that is actually connected</text>
                </svg>`,
                caption: "The bagel swap vs the evidence-based swap -- only one moves LDL"
            }
        },
        {
            type: "application",
            title: "Your LDL Food Plan, Starting This Week",
            content: "Here is the evidence-backed playbook. None of it requires giving up eggs.\n\n1. **Make one saturated-fat swap per meal pattern** -- butter to olive oil for cooking, fatty processed meats to fish or poultry, cheese snacks to nuts. This is the biggest lever.\n\n2. **Add soluble fiber daily** -- a bowl of oats, or a teaspoon of psyllium husk. Soluble fiber binds cholesterol-rich bile in your gut; expect roughly 5-10% LDL reduction on its own.\n\n3. **Consider plant sterols** -- sterol-fortified spreads or 2 g/day supplements block cholesterol absorption and can trim LDL another 5-10%. Discuss with your doctor if you take other lipid treatments.\n\n4. **Retest in 8-12 weeks** -- diet changes show up on a lipid panel within about two months. Measure, do not guess.\n\n5. **Set honest expectations** -- diet typically moves LDL 10-20%. Genetics set your floor; some people eat impeccably and still run high LDL. That is information for a doctor conversation (Lessons 5 and 6), not a personal failure.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LDL FOOD PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves, starting this week</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="203" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="203" text-anchor="start" fill="#fff" font-size="18">One saturated-fat swap per meal pattern</text>
                    <text x="245" y="233" text-anchor="start" fill="#888" font-size="15">Butter to olive oil, processed meat to fish</text>
                    <rect x="150" y="280" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="323" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="323" text-anchor="start" fill="#fff" font-size="18">Soluble fiber daily: oats or psyllium</text>
                    <text x="245" y="353" text-anchor="start" fill="#888" font-size="15">Worth roughly 5-10% LDL on its own</text>
                    <rect x="150" y="400" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="443" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="443" text-anchor="start" fill="#fff" font-size="18">Consider plant sterols (about 2 g/day)</text>
                    <text x="245" y="473" text-anchor="start" fill="#888" font-size="15">Another 5-10%; loop in your doctor</text>
                    <rect x="150" y="520" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="563" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="563" text-anchor="start" fill="#fff" font-size="18">Retest your panel in 8-12 weeks</text>
                    <text x="245" y="593" text-anchor="start" fill="#888" font-size="15">Measure, do not guess</text>
                    <rect x="150" y="640" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="683" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="683" text-anchor="start" fill="#fff" font-size="18">Expect 10-20% from diet -- genetics set the floor</text>
                    <text x="245" y="713" text-anchor="start" fill="#888" font-size="15">Still high? That is a doctor conversation</text>
                </svg>`,
                caption: "The five-step food plan that targets the levers actually connected to LDL"
            }
        },
        {
            type: "quiz",
            question: "Your friend wants to lower LDL through diet. Based on the strongest evidence, which single change is most likely to move the number?",
            options: [
                { text: "Cutting out eggs and shrimp to reduce dietary cholesterol", correct: false },
                { text: "Replacing saturated fats like butter with unsaturated fats like olive oil and fish", correct: true },
                { text: "Taking niacin to raise HDL and rebalance the cholesterol ratio", correct: false },
                { text: "Switching from butter to low-fat bagels and other refined carbohydrates", correct: false }
            ],
            explanation: "Saturated fat is the main dietary lever on LDL, and the Sacks 2017 AHA advisory shows the benefit comes from replacing it with unsaturated fat -- roughly 25-30% lower risk in cohort analyses. Cutting eggs is the tempting answer, but the liver compensates for dietary cholesterol in most people, so LDL barely moves. Swapping to refined carbs repeats the failed 1980s experiment, and niacin's HDL-raising failed in AIM-HIGH and HPS2-THRIVE.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DIETARY LEVERS</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Which food change actually moves LDL?</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Think: what does the liver respond to?</text>
                    <rect x="150" y="400" width="800" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">REMEMBER THE HIERARCHY</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">Saturated fat: the real lever</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">Dietary cholesterol: minor for most people</text>
                    <text x="550" y="578" text-anchor="middle" fill="#888" font-size="16">And the replacement decides the benefit</text>
                </svg>`,
                caption: "Final check: which dietary lever is connected to LDL?"
            }
        }
    ]
},
{
    id: 5,
    title: "ApoB & Lp(a): The Better Blood Tests",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Two Tests Your Panel Is Missing",
            content: "Imagine judging highway traffic by weighing all the cargo instead of counting the trucks. A hundred half-empty trucks clog a road worse than twenty full ones -- but a cargo scale cannot tell the difference. That is roughly the blind spot in a standard cholesterol panel.\n\nIn this lesson you will meet two blood tests that see what LDL-C misses. **ApoB** counts the actual number of artery-invading particles -- and for a meaningful slice of people, especially those with high triglycerides or insulin resistance, it reveals risk that a 'normal' LDL number is hiding. **Lp(a)** -- said 'L-p-little-a' -- is a mostly genetic particle that quietly raises heart attack and stroke risk in roughly one in five people, most of whom have never heard of it.\n\nBoth tests are cheap, standardized, and increasingly endorsed by guidelines. One of them you only ever need once in your life. By the end of this lesson you will know exactly what to ask your doctor -- and this is very much a lesson about asking, not self-prescribing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BEYOND THE PANEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two tests that see what LDL-C misses</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">ApoB</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Counts the trucks,</text>
                    <text x="290" y="318" text-anchor="middle" fill="#fff" font-size="18">not just the cargo</text>
                    <text x="290" y="365" text-anchor="middle" fill="#888" font-size="16">Catches hidden risk in</text>
                    <text x="290" y="397" text-anchor="middle" fill="#888" font-size="16">insulin resistance</text>
                    <text x="290" y="460" text-anchor="middle" fill="#6366f1" font-size="17">Cheap, standardized</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">Lp(a)</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">A mostly genetic particle,</text>
                    <text x="810" y="318" text-anchor="middle" fill="#fff" font-size="18">elevated in ~1 in 5 people</text>
                    <text x="810" y="365" text-anchor="middle" fill="#888" font-size="16">Independent risk most</text>
                    <text x="810" y="397" text-anchor="middle" fill="#888" font-size="16">people never test</text>
                    <text x="810" y="460" text-anchor="middle" fill="#8b5cf6" font-size="17">Test once in a lifetime</text>
                    <rect x="200" y="580" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="628" text-anchor="middle" fill="#ffd700" font-size="20">This lesson ends with the exact</text>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">questions to bring to your doctor</text>
                </svg>`,
                caption: "ApoB counts particles; Lp(a) reveals inherited risk -- two tests worth knowing about"
            }
        },
        {
            type: "concept",
            title: "One Truck, One License Plate: The ApoB Insight",
            content: "Here is a fact of biology that makes risk measurement suddenly simple: every atherogenic particle -- every LDL, VLDL, IDL, and remnant particle capable of invading an artery wall -- carries **exactly one molecule of apolipoprotein B** on its surface. One truck, one license plate. No exceptions.\n\nSo when a lab measures **ApoB**, it is literally counting the trucks. Not weighing cargo. Counting.\n\nWhy does the count matter more than the cargo? Because atherosclerosis begins when a particle -- a whole truck -- crashes through the artery lining and gets stuck. Each particle is one lottery ticket for that event. Two people can carry identical LDL-C (cargo weight) while one has far more, smaller, cholesterol-poor particles -- far more tickets in the bad lottery.\n\nThe evidence backs the intuition: in analyses where LDL-C and ApoB disagree, risk consistently follows **particle number**, not cholesterol mass. A 2021 JAMA Cardiology analysis of UK Biobank data (over 380,000 people) found ApoB was the strongest single lipid predictor of heart disease -- and once you know ApoB, LDL-C adds essentially nothing.\n\nThe practical beauty: ApoB is a cheap, standardized blood test, not an exotic scan. It just is not on the default panel -- yet.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE TRUCK, ONE PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every atherogenic particle carries exactly one ApoB</text>
                    <circle cx="230" cy="300" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">LDL</text>
                    <text x="230" y="325" text-anchor="middle" fill="#ef4444" font-size="16">1 ApoB</text>
                    <circle cx="550" cy="300" r="110" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">VLDL</text>
                    <text x="550" y="325" text-anchor="middle" fill="#f59e0b" font-size="16">1 ApoB</text>
                    <circle cx="860" cy="300" r="75" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="860" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Remnant</text>
                    <text x="860" y="322" text-anchor="middle" fill="#8b5cf6" font-size="16">1 ApoB</text>
                    <rect x="150" y="470" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ApoB = TOTAL PARTICLE COUNT</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="18">Different sizes, different cargo -- one plate each</text>
                    <rect x="150" y="670" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">UK Biobank, 380,000+ people (2021):</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="18">risk follows particle number, not cargo weight</text>
                </svg>`,
                caption: "Every artery-invading particle carries one ApoB -- measuring it counts the trucks"
            }
        },
        {
            type: "visual",
            title: "Same Cargo, Different Traffic",
            content: "This is the picture that makes ApoB click. Two patients, identical LDL-C of 100 mg/dL. Patient A carries that cholesterol in a modest number of large, full particles. Patient B -- typical of insulin resistance -- carries the same total cargo in many small, cholesterol-poor particles.\n\nSame lipid panel. Very different number of chances for a particle to lodge in an artery wall. Patient B's risk is meaningfully higher, and only the particle count reveals it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME LDL-C, MORE TRUCKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two patients, identical cargo -- different risk</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PATIENT A</text>
                    <text x="290" y="260" text-anchor="middle" fill="#888" font-size="16">LDL-C 100 -- few large particles</text>
                    <circle cx="200" cy="350" r="48" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="330" cy="350" r="48" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="265" cy="460" r="48" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="565" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ApoB: normal</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">PATIENT B</text>
                    <text x="810" y="260" text-anchor="middle" fill="#888" font-size="16">LDL-C 100 -- many small particles</text>
                    <circle cx="670" cy="330" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="740" cy="310" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="810" cy="330" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="880" cy="310" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="950" cy="330" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="705" cy="400" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="775" cy="420" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="845" cy="400" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="915" cy="420" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="670" cy="480" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="740" cy="500" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="810" cy="480" r="22" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="565" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ApoB: high</text>
                    <rect x="150" y="660" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="20">Each particle is a lottery ticket for plaque --</text>
                    <text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="20">Patient B holds four times as many tickets</text>
                </svg>`,
                caption: "Identical LDL-C hiding very different particle counts -- this is discordance"
            }
        },
        {
            type: "example",
            title: "The Discordant Patient: When Normal Is Not Normal",
            content: "Consider a composite of a very common real-world patient. Maria, 52, carries some extra weight around the middle, has borderline-high blood sugar, triglycerides of 210, HDL of 38 -- and an LDL-C of 105, which her report labels near optimal. She is told her cholesterol looks fine.\n\nBut Maria's pattern -- **high triglycerides, low HDL, insulin resistance** -- is exactly the metabolic signature that shifts LDL particles small and dense. Her doctor orders ApoB: 118 mg/dL, well into the elevated range. Her particle count tells a different story than her cholesterol weight.\n\nThis is called **discordance**, and it is not rare. Studies suggest that in people with metabolic syndrome or diabetes, LDL-C meaningfully underestimates particle burden in a substantial fraction -- these are precisely the patients whose risk gets missed. Follow-up data from cohorts like the Framingham Offspring Study and the Women's Health Study show that when LDL-C and particle measures disagree, future events track the particle measure.\n\nFor Maria, the ApoB result changes the conversation: her lifestyle plan gets more serious, her follow-up gets closer, and treatment thresholds get reconsidered -- decisions she makes WITH her doctor. Without that one inexpensive test, she walks out reassured and unprotected.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MARIA, 52</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Told her cholesterol looks fine</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">STANDARD PANEL</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">LDL-C: 105 (near optimal)</text>
                    <text x="290" y="315" text-anchor="middle" fill="#888" font-size="17">Triglycerides: 210 (high)</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="17">HDL: 38 (low)</text>
                    <text x="290" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Verdict: fine?</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ADD ONE TEST</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">ApoB: 118 mg/dL</text>
                    <text x="810" y="315" text-anchor="middle" fill="#888" font-size="17">Well into elevated range</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="17">Many small, dense particles</text>
                    <text x="810" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Verdict: real risk</text>
                    <rect x="150" y="570" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="622" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE DISCORDANCE PATTERN</text>
                    <text x="550" y="662" text-anchor="middle" fill="#fff" font-size="18">High triglycerides + low HDL = check the particle count</text>
                    <rect x="200" y="770" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20">When the tests disagree,</text>
                    <text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="20">outcomes follow the particle number</text>
                </svg>`,
                caption: "Discordance in action: a reassuring LDL-C hiding an elevated particle count"
            }
        },
        {
            type: "quiz",
            question: "Why can ApoB reveal cardiovascular risk that a normal LDL-C misses?",
            options: [
                { text: "ApoB measures inflammation in the artery wall, which LDL-C ignores", correct: false },
                { text: "Each atherogenic particle carries one ApoB, so it counts particles -- and risk tracks particle number, not cholesterol weight", correct: true },
                { text: "ApoB detects the genetic mutations that cause familial hypercholesterolemia", correct: false },
                { text: "ApoB measures the same thing as LDL-C but with modern laboratory equipment", correct: false }
            ],
            explanation: "One ApoB molecule sits on every LDL, VLDL, IDL, and remnant particle, so the test is a direct particle count. Someone with many small, cholesterol-poor particles -- common with high triglycerides and insulin resistance -- can show a normal LDL-C while carrying a high particle burden, and studies show risk follows the count. The last option is the tempting trap: ApoB is not a better LDL-C, it measures a genuinely different thing -- trucks, not cargo.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ApoB VS LDL-C</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">One counts trucks, one weighs cargo</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Which one does risk actually follow?</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE KEY FACT</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">One particle, one ApoB molecule</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">No exceptions -- that is why the count works</text>
                </svg>`,
                caption: "Check your grasp of the particle-count insight"
            }
        },
        {
            type: "concept",
            title: "The Free Version: Non-HDL Cholesterol",
            content: "Cannot get ApoB ordered? There is a surprisingly good approximation already hiding on every lipid panel you have ever had -- no new blood draw required.\n\n**Non-HDL cholesterol = total cholesterol minus HDL-C.**\n\nThink about what that subtraction leaves behind: the cholesterol in EVERY potentially artery-invading particle -- LDL, VLDL, IDL, remnants -- everything except the HDL trucks. It is the cargo-based cousin of ApoB, and because it captures remnant particles that LDL-C ignores, it predicts risk better than LDL-C, especially when triglycerides are high.\n\nRough interpretation: non-HDL targets run about **30 mg/dL above** LDL-C targets. If under 100 is the LDL-C goal in a given context, under 130 is the matching non-HDL goal.\n\nWhere do guidelines stand on all this?\n\n• The **2021 Canadian Cardiovascular Society guidelines** recommend ApoB (or non-HDL) as the PREFERRED measure in patients with elevated triglycerides\n• The **2019 European (ESC/EAS) guidelines** endorse ApoB where available, calling it at least as accurate as LDL-C -- and better in high-triglyceride, diabetic, or obese patients\n• US guidelines move slower but increasingly reference both\n\nHonest caveat: for people with typical triglycerides and no metabolic issues, LDL-C, non-HDL, and ApoB usually agree -- the extra tests matter most when the discordance pattern is present.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FREE APPROXIMATION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Already on every panel you have ever had</text>
                    <rect x="100" y="180" width="280" height="130" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="240" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">TOTAL</text>
                    <text x="240" y="270" text-anchor="middle" fill="#fff" font-size="17">cholesterol</text>
                    <text x="440" y="255" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">-</text>
                    <rect x="500" y="180" width="280" height="130" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="640" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HDL-C</text>
                    <text x="640" y="270" text-anchor="middle" fill="#fff" font-size="17">the good trucks</text>
                    <text x="840" y="255" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">=</text>
                    <rect x="250" y="380" width="600" height="140" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">NON-HDL CHOLESTEROL</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="18">Cargo in every artery-invading particle</text>
                    <rect x="150" y="590" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RULE OF THUMB</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="18">Non-HDL goals sit about 30 mg/dL above LDL-C goals</text>
                    <rect x="200" y="770" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="818" text-anchor="middle" fill="#ffd700" font-size="20">Canadian and European guidelines favor</text>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">ApoB or non-HDL when triglycerides run high</text>
                </svg>`,
                caption: "Non-HDL cholesterol: subtract HDL from total and you approximate the particle story for free"
            }
        },
        {
            type: "concept",
            title: "Lp(a): The Inherited Wildcard",
            content: "Now for the test almost nobody has had. **Lipoprotein(a)** -- pronounced 'L-p-little-a' -- is an LDL-like particle with an extra protein called apolipoprotein(a) stitched to it. That add-on makes it nastier than regular LDL: it promotes plaque, inflammation, and possibly clotting, and it is independently linked to **heart attack, stroke, and aortic valve stenosis**.\n\nWhat makes Lp(a) unique among everything in this book:\n\n• **It is 80-90% genetic.** Your level is set largely by your LP(A) gene and stays roughly stable for life\n• **It barely responds to lifestyle.** Diet and exercise -- the heroes of every other lesson -- move it little. Statins do not lower it either (they may nudge it up slightly)\n• **It is common.** Roughly **1 in 5 people** worldwide carry elevated levels, most of them unaware\n• A very high Lp(a) can roughly **double to triple** cardiovascular risk, and it helps explain families where heart attacks strike despite 'normal cholesterol'\n\nBecause levels are stable, guidelines -- including the 2019 European guidelines and a 2022 European consensus statement -- now support measuring Lp(a) **once in a lifetime** for adults. One inexpensive blood test, one data point that permanently sharpens your risk picture.\n\nIf this sounds fatalistic, hold on -- the next cards cover what you can actually DO with the result.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MEET Lp(a)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">An LDL particle with a dangerous add-on</text>
                    <circle cx="420" cy="300" r="110" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="420" y="295" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">LDL-like</text>
                    <text x="420" y="328" text-anchor="middle" fill="#888" font-size="16">core particle</text>
                    <circle cx="640" cy="380" r="70" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="640" y="375" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">apo(a)</text>
                    <text x="640" y="405" text-anchor="middle" fill="#888" font-size="14">the add-on</text>
                    <rect x="80" y="520" width="300" height="170" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="575" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">80-90%</text>
                    <text x="230" y="610" text-anchor="middle" fill="#fff" font-size="16">genetic --</text>
                    <text x="230" y="640" text-anchor="middle" fill="#fff" font-size="16">stable for life</text>
                    <rect x="400" y="520" width="300" height="170" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="575" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">1 in 5</text>
                    <text x="550" y="610" text-anchor="middle" fill="#fff" font-size="16">people elevated,</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="16">most unaware</text>
                    <rect x="720" y="520" width="300" height="170" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="575" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">2-3x risk</text>
                    <text x="870" y="610" text-anchor="middle" fill="#fff" font-size="16">heart attack, stroke,</text>
                    <text x="870" y="640" text-anchor="middle" fill="#fff" font-size="16">aortic stenosis</text>
                    <rect x="200" y="760" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="808" text-anchor="middle" fill="#ffd700" font-size="20">Guidelines now endorse testing it</text>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">ONCE in a lifetime -- levels barely change</text>
                </svg>`,
                caption: "Lp(a): mostly genetic, common, independent -- and measured once in a lifetime"
            }
        },
        {
            type: "example",
            title: "The Trainer Who Did Everything Right",
            content: "In February 2017, **Bob Harper** -- celebrity fitness trainer from The Biggest Loser, then 51 years old -- collapsed from a massive heart attack in a New York gym. He was in a coma for two days. This was a man whose literal job was exemplary diet and exercise, with a routine physical exam behind him.\n\nAfterward, testing revealed a key contributor his standard checkups had never flagged: **elevated Lp(a)**. His mother had died of a heart attack -- the family-history breadcrumb was there all along. Harper has since become a public advocate for Lp(a) awareness, because his story captures exactly what makes this particle dangerous: it hides behind a healthy lifestyle and a normal-looking cholesterol panel.\n\nHis case is a single anecdote, so hold it loosely -- but the population data behind it is solid. Large genetic studies, including work by Kamstrup and colleagues in the Copenhagen General Population Study (tens of thousands of participants), show Lp(a) levels are causally linked to heart attack risk, with the top few percent of levels carrying multiples of average risk.\n\nThe takeaway is not fear -- it is information-seeking. If heart disease has struck your family early and unexplained, Lp(a) is a prime suspect that a one-time test can confirm or clear.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BOB HARPER, 2017</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Elite fitness, massive heart attack at 51</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT HE CONTROLLED</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Professional-grade diet</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Daily intense exercise</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Routine checkups</text>
                    <text x="290" y="435" text-anchor="middle" fill="#10b981" font-size="17">Everything visible: excellent</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT HE COULD NOT SEE</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Elevated Lp(a) -- genetic</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">Mother died of heart attack</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Never tested before the event</text>
                    <text x="810" y="435" text-anchor="middle" fill="#ef4444" font-size="17">The hidden variable: elevated</text>
                    <rect x="150" y="570" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="622" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">COPENHAGEN POPULATION DATA</text>
                    <text x="550" y="662" text-anchor="middle" fill="#fff" font-size="18">Highest Lp(a) levels carry multiples of average risk</text>
                    <rect x="200" y="770" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20">Early, unexplained family heart disease?</text>
                    <text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="20">Lp(a) is a prime suspect worth one test</text>
                </svg>`,
                caption: "A lifestyle-proof risk factor: Bob Harper's heart attack and the particle behind it"
            }
        },
        {
            type: "concept",
            title: "So Your Lp(a) Is High. Now What?",
            content: "Here is where honesty matters most. If you test high, the frustrating truth is that **no approved drug today meaningfully lowers Lp(a)** for the purpose of preventing events. Diet barely touches it. So why test at all?\n\nBecause risk is a TEAM sport, and Lp(a) tells you how hard to play defense everywhere else:\n\n• **Treat every modifiable risk factor harder.** With high Lp(a), guidelines support more aggressive LDL/ApoB targets, sharper blood pressure control, and zero tolerance for smoking. You cannot change the wildcard, so you strip the deck of every other bad card\n• **Earlier and better screening** for you -- and cascade testing for your relatives, since it runs in families\n• **Context for your whole risk picture.** A borderline statin decision (Lesson 6) often tips when Lp(a) is high\n\nAnd the pipeline is genuinely promising: **targeted therapies -- pelacarsen, olpasiran, and others -- cut Lp(a) by 80-95% in phase 2 trials** and are now in large phase 3 outcome trials (pelacarsen's HORIZON trial). To be clear: as of this writing, whether lowering Lp(a) with drugs prevents heart attacks is still being tested -- that is the honest state of play.\n\nKnowing your number today means you and your doctor are ready the moment those answers arrive.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HIGH Lp(a) PLAYBOOK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cannot change the wildcard? Strip the deck</text>
                    <rect x="150" y="170" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="215" text-anchor="start" fill="#fff" font-size="18">Push every OTHER risk factor lower</text>
                    <text x="245" y="248" text-anchor="start" fill="#888" font-size="15">Tighter LDL/ApoB goals, blood pressure, no smoking</text>
                    <rect x="150" y="300" width="800" height="100" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="345" text-anchor="start" fill="#fff" font-size="18">Tell your relatives -- it runs in families</text>
                    <text x="245" y="378" text-anchor="start" fill="#888" font-size="15">Cascade testing finds carriers early</text>
                    <rect x="150" y="430" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="475" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="475" text-anchor="start" fill="#fff" font-size="18">Let it inform borderline decisions</text>
                    <text x="245" y="508" text-anchor="start" fill="#888" font-size="15">A close statin call often tips with high Lp(a)</text>
                    <rect x="150" y="600" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE PIPELINE (HONEST VERSION)</text>
                    <text x="550" y="698" text-anchor="middle" fill="#fff" font-size="18">Pelacarsen, olpasiran: Lp(a) down 80-95% in trials</text>
                    <text x="550" y="735" text-anchor="middle" fill="#888" font-size="16">Phase 3 outcome results pending -- not yet available care</text>
                </svg>`,
                caption: "What a high Lp(a) changes today -- and what may change when phase 3 trials report"
            }
        },
        {
            type: "example",
            title: "The Poor Man's Genetic Test: Your Family Tree",
            content: "Before any blood test existed, cardiologists used a genetic screen that costs nothing: **asking about your family**. It remains one of the most powerful tools in preventive cardiology -- and most people never volunteer the information.\n\nWhat counts as a meaningful family history? The pattern to look for is **early** events in **close** relatives:\n\n• A father or brother with a heart attack, stent, bypass, or stroke **before age 55**\n• A mother or sister with the same **before age 65**\n• Multiple affected relatives across generations, or relatives on statins from a young age\n\nWhy the age cutoffs? A heart attack at 85 mostly reflects time. A heart attack at 48 usually reflects biology -- possibly FH from Lesson 4, possibly Lp(a), possibly a cluster of inherited tendencies. Studies consistently show premature family history roughly **doubles** your own risk, independent of your measured cholesterol.\n\nConsider a real-world pattern doctors see weekly: a 45-year-old feels fine, lipid panel is average, but his father had a bypass at 50 and an uncle died suddenly at 47. That history alone justifies a deeper look -- Lp(a), ApoB, possibly a coronary calcium scan -- and it converts a shrug into a plan.\n\nYour homework from this card: before your next appointment, actually ask your parents and siblings what happened, to whom, and at what age. Write it down.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FREE GENETIC TEST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Early events in close relatives change your math</text>
                    <circle cx="350" cy="250" r="65" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="350" y="243" text-anchor="middle" fill="#fff" font-weight="bold" font-size="17">Father</text>
                    <text x="350" y="272" text-anchor="middle" fill="#ef4444" font-size="15">bypass at 50</text>
                    <circle cx="750" cy="250" r="65" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="750" y="243" text-anchor="middle" fill="#fff" font-weight="bold" font-size="17">Uncle</text>
                    <text x="750" y="272" text-anchor="middle" fill="#8b5cf6" font-size="15">died at 47</text>
                    <line x1="350" y1="320" x2="550" y2="430" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="750" y1="320" x2="550" y2="430" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <circle cx="550" cy="500" r="75" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="550" y="492" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">You, 45</text>
                    <text x="550" y="522" text-anchor="middle" fill="#f59e0b" font-size="15">panel looks fine</text>
                    <rect x="150" y="640" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="692" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE CUTOFFS THAT MATTER</text>
                    <text x="550" y="732" text-anchor="middle" fill="#fff" font-size="18">Men before 55, women before 65, close relatives</text>
                    <rect x="200" y="810" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="20">Premature family history alone roughly</text>
                    <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="20">doubles risk -- and justifies deeper testing</text>
                </svg>`,
                caption: "A family tree with early events is a genetic signal -- and a reason to test Lp(a) and ApoB"
            }
        },
        {
            type: "application",
            title: "The Ask-Your-Doctor Checklist",
            content: "You cannot order your own treatment plan, but you can absolutely walk in prepared. Here is your script for the next appointment.\n\n1. **Collect your family history first** -- who had heart attacks, strokes, stents, or bypasses, and at what ages. Write it down; bring it.\n\n2. **Ask: 'Should I get an Lp(a) test? I understand it is a once-in-a-lifetime check.'** -- especially if you have early heart disease in the family or personal history of events with normal cholesterol.\n\n3. **Ask: 'Would ApoB add anything for me?'** -- most useful if your triglycerides run above ~150, your HDL is low, or you have prediabetes, diabetes, or metabolic syndrome.\n\n4. **Meanwhile, compute your free number** -- non-HDL = total cholesterol minus HDL, from any old lab report. Goals run roughly 30 points above LDL-C goals.\n\n5. **Bring the results INTO a shared decision, not a self-diagnosis** -- these tests refine the conversation about lifestyle intensity and medication thresholds. They do not replace the clinician who knows your whole picture.\n\nCost reality check: both tests typically run modest lab fees, and Lp(a) needs doing exactly once. As screening questions go, this is about the cheapest high-value ask in medicine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR APPOINTMENT SCRIPT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves before and during the visit</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="203" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="203" text-anchor="start" fill="#fff" font-size="18">Write down your family history -- events and ages</text>
                    <text x="245" y="233" text-anchor="start" fill="#888" font-size="15">Ask your parents and siblings directly</text>
                    <rect x="150" y="280" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="323" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="323" text-anchor="start" fill="#fff" font-size="18">Ask about a once-in-a-lifetime Lp(a) test</text>
                    <text x="245" y="353" text-anchor="start" fill="#888" font-size="15">Especially with early family heart disease</text>
                    <rect x="150" y="400" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="443" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="443" text-anchor="start" fill="#fff" font-size="18">Ask whether ApoB would sharpen your picture</text>
                    <text x="245" y="473" text-anchor="start" fill="#888" font-size="15">Key if triglycerides high, HDL low, or prediabetes</text>
                    <rect x="150" y="520" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="563" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="563" text-anchor="start" fill="#fff" font-size="18">Compute non-HDL from any old panel today</text>
                    <text x="245" y="593" text-anchor="start" fill="#888" font-size="15">Total minus HDL -- your free particle proxy</text>
                    <rect x="150" y="640" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="683" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="683" text-anchor="start" fill="#fff" font-size="18">Use results for shared decisions, not self-diagnosis</text>
                    <text x="245" y="713" text-anchor="start" fill="#888" font-size="15">The tests refine the conversation with your doctor</text>
                </svg>`,
                caption: "Your five-step checklist for turning this lesson into one productive appointment"
            }
        },
        {
            type: "quiz",
            question: "Which statement about Lp(a) is accurate, based on current evidence?",
            options: [
                { text: "It is mostly genetic, so guidelines support measuring it once in a lifetime", correct: true },
                { text: "It responds well to diet and exercise, so retest it after every lifestyle change", correct: false },
                { text: "Statins are the standard treatment for lowering elevated Lp(a)", correct: false },
                { text: "It is rare, affecting fewer than 1 in 100 people, so testing is rarely useful", correct: false }
            ],
            explanation: "Lp(a) is 80-90% genetically determined and stays roughly stable for life, which is exactly why European guidelines endorse a single lifetime measurement. It barely responds to lifestyle -- the retest option describes triglycerides, not Lp(a). Statins do not lower it (targeted drugs like pelacarsen are still in phase 3 trials), and elevation is common, affecting roughly 1 in 5 people. If yours is high, the play is treating every other risk factor harder while the new therapies finish testing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">Lp(a) ESSENTIALS</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Genetic? Common? Treatable? Testable?</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Sort the facts from the plausible-sounding traps</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">ONE TEST, ONCE</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Stable for life means one measurement</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">permanently sharpens your risk picture</text>
                </svg>`,
                caption: "Final check on the inherited wildcard"
            }
        }
    ]
},
{
    id: 6,
    title: "Statins, Honestly",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Most Argued-About Pill on the Internet",
            content: "Type 'statins' into any search bar and you will find two parallel universes. In one, statins are among the best-proven, most life-saving drugs ever made. In the other, they are a pharmaceutical scam that wrecks your muscles and your memory. Roughly 200 million people worldwide take these pills. They deserve better than a shouting match.\n\nThis lesson does something rare: it steelmans both sides. You will get the real trial numbers -- including the honest distinction between relative and absolute risk that both cheerleaders and critics routinely blur. You will see what a brilliant 2020 experiment revealed about statin side effects, a result that surprised nearly everyone. And you will learn why the same pill can be a clear win for one person and a genuine judgment call for another.\n\nOne rule before we start, and it is not fine print: nothing here is a reason to start OR stop any medication. That decision belongs to you and your doctor, armed with your numbers and your values. This lesson's job is to make you the best-prepared patient in the waiting room.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO PARALLEL UNIVERSES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">This lesson steelmans both -- then follows the data</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE CASE FOR</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">200,000+ trial participants</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Decades of outcome data</text>
                    <text x="290" y="355" text-anchor="middle" fill="#888" font-size="16">Among the best-proven</text>
                    <text x="290" y="387" text-anchor="middle" fill="#888" font-size="16">drugs in medicine</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE CASE AGAINST</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Reported muscle symptoms</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">Overprescribing worries</text>
                    <text x="810" y="355" text-anchor="middle" fill="#888" font-size="16">Small benefits for</text>
                    <text x="810" y="387" text-anchor="middle" fill="#888" font-size="16">low-risk people</text>
                    <rect x="150" y="550" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="605" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GROUND RULE</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="18">Never start or stop a medication from a book or a feed</text>
                    <rect x="200" y="750" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#ffd700" font-size="20">Goal: make you the best-prepared</text>
                    <text x="550" y="825" text-anchor="middle" fill="#ffd700" font-size="20">patient in the waiting room</text>
                </svg>`,
                caption: "Statin cheerleaders vs statin skeptics -- this lesson weighs both against the trials"
            }
        },
        {
            type: "concept",
            title: "What a Statin Actually Does",
            content: "Statins are elegantly simple. Your liver makes cholesterol using an enzyme called **HMG-CoA reductase**. A statin blocks that enzyme. The liver, suddenly cholesterol-poor, responds by sprouting more **LDL receptors** on its surface -- molecular hands that grab LDL particles out of your blood and pull them in. Blood LDL falls, typically 30-50% depending on the statin and dose.\n\nRemember Lesson 4: the FH families with BROKEN LDL receptors got early heart disease. Statins push the same machinery the opposite direction.\n\nDoes lowering LDL this way prevent heart attacks? This is one of the most-tested questions in medical history. The **Cholesterol Treatment Trialists (CTT) Collaboration** pools individual data from about 27 randomized trials and roughly 170,000-200,000 participants. The headline result:\n\n• Each **1 mmol/L (about 39 mg/dL)** of LDL reduction cuts major vascular events -- heart attack, stroke, cardiac death, revascularization -- by about **22% per year of treatment**\n• Bigger LDL drops give proportionally bigger cuts\n• The benefit **compounds**: modest in year one, larger by year five, consistent with the pack-years logic you already know\n\nStatins also calm arterial inflammation and stabilize existing plaque -- part of why benefits show up even within a couple of years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STATIN MECHANISM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Block the factory, boost the cleanup</text>
                    <rect x="60" y="180" width="290" height="140" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="205" y="235" text-anchor="middle" fill="#fff" font-size="17">Statin blocks</text>
                    <text x="205" y="268" text-anchor="middle" fill="#fff" font-size="17">HMG-CoA reductase</text>
                    <path d="M350 250 L420 250" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="420,250 408,242 408,258" fill="#14b8a6"/>
                    <rect x="420" y="180" width="290" height="140" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="565" y="235" text-anchor="middle" fill="#fff" font-size="17">Liver sprouts more</text>
                    <text x="565" y="268" text-anchor="middle" fill="#fff" font-size="17">LDL receptors</text>
                    <path d="M710 250 L780 250" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="780,250 768,242 768,258" fill="#14b8a6"/>
                    <rect x="780" y="180" width="260" height="140" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="910" y="235" text-anchor="middle" fill="#fff" font-size="17">Blood LDL falls</text>
                    <text x="910" y="268" text-anchor="middle" fill="#fff" font-size="17">30-50%</text>
                    <rect x="150" y="420" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="475" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CTT META-ANALYSES (~27 TRIALS)</text>
                    <text x="550" y="520" text-anchor="middle" fill="#fff" font-size="18">Each 39 mg/dL of LDL lowering cuts major</text>
                    <text x="550" y="555" text-anchor="middle" fill="#fff" font-size="18">vascular events by about 22% per year</text>
                    <rect x="200" y="670" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="718" text-anchor="middle" fill="#ffd700" font-size="20">Benefits compound with years of treatment --</text>
                    <text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="20">the mirror image of LDL pack-years</text>
                </svg>`,
                caption: "How statins lower LDL, and what ~200,000 trial participants say it achieves"
            }
        },
        {
            type: "concept",
            title: "The Honesty Chapter: Relative vs Absolute Risk",
            content: "Here is the single concept that resolves most statin arguments -- and both sides misuse it.\n\nThat CTT figure -- events cut by ~22% -- is **relative risk reduction**. It is a percentage OF YOUR STARTING RISK. The same 22% means wildly different things depending on where you start:\n\n• **High-risk person** (say, 30% ten-year risk after a heart attack): 22% relative cut removes about 6-7 percentage points of absolute risk. Roughly 1 in 15 such people avoids a major event. Clear, substantial win.\n• **Low-risk person** (say, 4% ten-year risk): the same 22% removes about 1 percentage point. About 1 in 100 avoids an event -- meaningful across a population, modest for one individual.\n\nNow you can decode the propaganda in both directions. 'Statins cut heart attacks by a quarter!' -- true, but it is a relative number that sounds equally impressive for everyone. 'Statins only help 1 in 100!' -- can also be true, but only for low-risk groups, and it conveniently ignores high-risk patients and the compounding of benefit over decades.\n\nThis is exactly why guidelines use **risk calculators** -- the pooled cohort equations, and newer AHA PREVENT equations -- rather than cholesterol alone to guide prescribing. The pill's benefit scales with YOUR baseline risk, so the smart question is never 'are statins good?' It is 'what is MY absolute risk, and how much does treatment change it?'",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME PILL, DIFFERENT MATH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A 22% relative cut lands very differently</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">HIGH BASELINE RISK</text>
                    <text x="290" y="278" text-anchor="middle" fill="#888" font-size="16">e.g. after a heart attack</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">30% ten-year risk</text>
                    <text x="290" y="368" text-anchor="middle" fill="#fff" font-size="18">- 22% relative</text>
                    <text x="290" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">~6-7 points absolute</text>
                    <text x="290" y="475" text-anchor="middle" fill="#888" font-size="16">~1 in 15 spared an event</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">LOW BASELINE RISK</text>
                    <text x="810" y="278" text-anchor="middle" fill="#888" font-size="16">e.g. healthy 45-year-old</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">4% ten-year risk</text>
                    <text x="810" y="368" text-anchor="middle" fill="#fff" font-size="18">- 22% relative</text>
                    <text x="810" y="430" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">~1 point absolute</text>
                    <text x="810" y="475" text-anchor="middle" fill="#888" font-size="16">~1 in 100 spared an event</text>
                    <rect x="150" y="610" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="662" text-anchor="middle" fill="#ffd700" font-size="20">This is why risk calculators, not cholesterol</text>
                    <text x="550" y="697" text-anchor="middle" fill="#ffd700" font-size="20">alone, drive prescribing decisions</text>
                </svg>`,
                caption: "Relative vs absolute risk: the decoder ring for every statin argument you will ever hear"
            }
        },
        {
            type: "example",
            title: "Two Patients, One Pill, Two Verdicts",
            content: "Let the math become people.\n\n**Ray, 61**, had a heart attack last spring. His arteries have proven they build dangerous plaque. This is **secondary prevention** -- preventing the SECOND event -- and it is where statin evidence is strongest. In the landmark **4S trial** (4,444 patients with heart disease, published 1994), simvastatin cut total mortality by 30% over about five and a half years. For Ray, high-intensity statin therapy is about as close to a no-brainer as cardiology gets, which is why every major guideline recommends it. Ray declining a statin because a podcast scared him would be betting against some of the strongest data in medicine.\n\n**Dana, 47**, has never had an event. LDL 135, blood pressure decent, does not smoke, mother had a heart attack at 78. Her calculated ten-year risk comes out around 5% -- **primary prevention** territory. A statin would trim maybe a percentage point off that ten-year number, more over 30 years. Reasonable people -- and reasonable doctors -- can land differently here. Her family history, her Lp(a), a coronary calcium score, her feelings about daily medication: all legitimately belong in the decision.\n\nSame pill. Ray's case is settled science; Dana's is a values-plus-numbers conversation. Anyone selling you a universal answer -- statins for everyone, statins for no one -- is skipping the arithmetic.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RAY AND DANA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Secondary vs primary prevention</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">RAY, 61</text>
                    <text x="290" y="272" text-anchor="middle" fill="#888" font-size="16">Heart attack last spring</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Secondary prevention</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">4S trial: mortality down 30%</text>
                    <text x="290" y="390" text-anchor="middle" fill="#888" font-size="16">in patients like him</text>
                    <text x="290" y="470" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">Near no-brainer</text>
                    <text x="290" y="510" text-anchor="middle" fill="#888" font-size="16">Every guideline agrees</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">DANA, 47</text>
                    <text x="810" y="272" text-anchor="middle" fill="#888" font-size="16">No events, LDL 135</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">Primary prevention</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Ten-year risk ~5%</text>
                    <text x="810" y="390" text-anchor="middle" fill="#888" font-size="16">Benefit ~1 point over 10 yrs</text>
                    <text x="810" y="470" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">Judgment call</text>
                    <text x="810" y="510" text-anchor="middle" fill="#888" font-size="16">Numbers + values + doctor</text>
                    <rect x="150" y="630" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Anyone selling a universal answer</text>
                    <text x="550" y="715" text-anchor="middle" fill="#ffd700" font-size="20">is skipping the arithmetic</text>
                </svg>`,
                caption: "The same pill is settled science for Ray and a legitimate judgment call for Dana"
            }
        },
        {
            type: "quiz",
            question: "A headline says statins cut heart attacks by 22%. For whom does that translate into the LARGEST absolute benefit?",
            options: [
                { text: "Everyone equally -- 22% is 22% regardless of who takes the pill", correct: false },
                { text: "A person at high baseline risk, such as someone who already had a heart attack", correct: true },
                { text: "A young, low-risk person, because they have more years left to protect", correct: false },
                { text: "No one -- relative risk reductions are a statistical illusion", correct: false }
            ],
            explanation: "A relative reduction is a percentage of your starting risk, so a 22% cut removes about 6-7 absolute points from a 30% baseline but only about 1 point from a 4% baseline. That is why secondary prevention is the strongest case for statins and why calculators drive prescribing. The youth option is tempting -- long horizons DO increase lifetime benefit -- but at any given moment, absolute benefit still scales with baseline risk, and a low-risk 30-year-old gains little in the near term.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">RELATIVE VS ABSOLUTE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">22% of a big risk is big;</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">22% of a small risk is small</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BASELINE RISK IS THE MULTIPLIER</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Absolute benefit = baseline risk x relative cut</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">One formula decodes every statin headline</text>
                </svg>`,
                caption: "Mid-lesson check: can you do the risk arithmetic?"
            }
        },
        {
            type: "concept",
            title: "Side Effects: The Real Numbers",
            content: "Now the part the internet cares about most. Honest accounting, all of it:\n\n• **Muscle aches**: in everyday practice, 10-20% of statin users report them. But in BLINDED trials -- where nobody knows pill from placebo -- the muscle-symptom rates in the two groups are nearly identical. More on this bombshell in the next card\n• **Severe muscle damage** (myopathy/rhabdomyolysis): real but rare -- on the order of **1 in 10,000 per year**, usually reversible when caught\n• **New diabetes diagnoses**: genuinely increased, by roughly **1 extra case per 1,000 people per year**, mostly in people already on the doorstep of diabetes. For perspective: for a patient at meaningful cardiac risk, prevented heart attacks and strokes outnumber statin-attributable diabetes cases several-fold -- and the diabetes shows up a hair earlier rather than appearing from nowhere\n• **Memory and cognition**: despite viral anecdotes, randomized trials and large observational studies have found **no good evidence of cognitive harm**. The FDA's 2012 label note was based on case reports; subsequent systematic reviews (and trials like HPS with cognitive endpoints) came up empty. If anything, preventing strokes protects cognition -- your brain gets 20% of your blood supply, as the Brain Span book keeps reminding us\n• **Liver injury**: serious cases are vanishingly rare; routine enzyme monitoring caught so little that guidelines dropped it\n\nAll real, all countable -- and all dwarfed, at meaningful baseline risk, by prevented events.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SIDE EFFECTS, COUNTED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Real numbers beat scary anecdotes</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MUSCLE ACHES</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="16">10-20% report them --</text>
                    <text x="300" y="297" text-anchor="middle" fill="#888" font-size="15">but blinded trials tell another story</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SEVERE MYOPATHY</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="16">~1 in 10,000 per year</text>
                    <text x="800" y="297" text-anchor="middle" fill="#888" font-size="15">Rare, usually reversible</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NEW DIABETES</text>
                    <text x="300" y="485" text-anchor="middle" fill="#fff" font-size="16">~1 extra case per 1,000/yr</text>
                    <text x="300" y="517" text-anchor="middle" fill="#888" font-size="15">Mostly in those already close</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MEMORY</text>
                    <text x="800" y="485" text-anchor="middle" fill="#fff" font-size="16">No good trial evidence of harm</text>
                    <text x="800" y="517" text-anchor="middle" fill="#888" font-size="15">Preventing strokes helps brains</text>
                    <rect x="150" y="640" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="20">At meaningful cardiac risk, prevented events</text>
                    <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="20">outnumber these harms several-fold</text>
                </svg>`,
                caption: "The honest side-effect ledger -- every entry real, every entry counted"
            }
        },
        {
            type: "example",
            title: "SAMSON: The Trial That Fooled Everyone (Including the Patients)",
            content: "In 2020, researchers at Imperial College London ran one of the cleverest trials in modern medicine, called **SAMSON**. They recruited 60 people who had all QUIT statins because of intolerable side effects -- real sufferers, not skeptics.\n\nEach person received 12 numbered bottles for 12 months: four containing atorvastatin, four containing identical-looking **placebo**, and four containing **nothing at all**. Every day they scored their symptoms on a smartphone.\n\nThe results were stunning:\n\n• Symptom scores on statin months: **16.3** (0-100 scale)\n• Symptom scores on PLACEBO months: **15.4** -- statistically indistinguishable\n• No-tablet months: **8.0**\n\nRead that again. The symptoms were absolutely real -- people even stopped pills during placebo months because the side effects felt unbearable. But **90% of the symptom burden appeared whenever they took ANY pill**, active or not. This is the **nocebo effect**: expectation of harm producing genuine, physical symptoms. Blinded mega-trials like ASCOT-LLA had shown the same pattern at scale.\n\nThe hopeful ending: after seeing their own data, half the SAMSON participants successfully restarted statins.\n\nThe respectful takeaway: if you get muscle aches on a statin, you are not imagining things and you deserve to be taken seriously -- there are protocols (dose changes, alternate statins, alternate-day dosing) that usually find a tolerable regimen. What the data rejects is the claim that statins routinely poison muscles.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SAMSON TRIAL, 2020</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Symptom intensity, 0-100 scale, same patients</text>
                    <rect x="150" y="200" width="180" height="360" rx="12" fill="rgba(239,68,68,0.35)" stroke="#ef4444" stroke-width="2"/>
                    <text x="240" y="180" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">16.3</text>
                    <text x="240" y="600" text-anchor="middle" fill="#fff" font-size="18">Statin</text>
                    <text x="240" y="632" text-anchor="middle" fill="#888" font-size="15">months</text>
                    <rect x="460" y="215" width="180" height="345" rx="12" fill="rgba(245,158,11,0.35)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="195" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">15.4</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">Placebo</text>
                    <text x="550" y="632" text-anchor="middle" fill="#888" font-size="15">months</text>
                    <rect x="770" y="380" width="180" height="180" rx="12" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="2"/>
                    <text x="860" y="360" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">8.0</text>
                    <text x="860" y="600" text-anchor="middle" fill="#fff" font-size="18">No tablet</text>
                    <text x="860" y="632" text-anchor="middle" fill="#888" font-size="15">months</text>
                    <rect x="150" y="700" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="752" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">~90% OF SYMPTOMS = THE PILL ITSELF</text>
                    <text x="550" y="792" text-anchor="middle" fill="#fff" font-size="18">Real symptoms, driven by expectation -- the nocebo effect</text>
                    <rect x="200" y="880" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="925" text-anchor="middle" fill="#ffd700" font-size="20">Half the participants restarted statins</text>
                    <text x="550" y="955" text-anchor="middle" fill="#ffd700" font-size="20">after seeing their own data</text>
                </svg>`,
                caption: "SAMSON: placebo months produced nearly identical symptoms to statin months"
            }
        },
        {
            type: "concept",
            title: "The Toolbox Beyond Statins",
            content: "Statins are no longer the only serious LDL-lowering tool -- important both for people who cannot tolerate them and for high-risk patients who need more. Each of these has randomized OUTCOME data or is anchored to the LDL-causality evidence:\n\n• **Ezetimibe** -- blocks cholesterol absorption in the gut; adds ~20% LDL lowering. The **IMPROVE-IT trial** (18,144 patients, 2015) showed adding it to a statin further reduced cardiovascular events -- modestly, but exactly in proportion to the extra LDL drop. Cheap, generic, well-tolerated\n• **PCSK9 inhibitors** (evolocumab, alirocumab) -- injectable antibodies born directly from those 2006 PCSK9 gene discoveries; drop LDL another 50-60% even on top of statins. The **FOURIER trial** (27,564 patients, 2017) confirmed fewer heart attacks and strokes. Main obstacle: cost\n• **Bempedoic acid** -- works upstream of statins but activates only in the liver, not muscle, making it useful for the statin-intolerant. The **CLEAR Outcomes trial** (2023, ~14,000 statin-intolerant patients) showed a 13% reduction in major events\n• **Inclisiran** -- small interfering RNA that silences PCSK9 production; twice-yearly injections after loading doses. LDL falls ~50%; large outcome trials (ORION-4) are still running -- honest caveat noted\n\nThe pattern across every tool: **lower the LDL/ApoB by whatever mechanism, and events fall in proportion**. The drug class is a detail; the causal pathway is the point.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LDL TOOLBOX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Different mechanisms, one causal pathway</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">EZETIMIBE</text>
                    <text x="300" y="258" text-anchor="middle" fill="#fff" font-size="16">Blocks gut absorption</text>
                    <text x="300" y="290" text-anchor="middle" fill="#888" font-size="15">IMPROVE-IT: 18,144 patients</text>
                    <text x="300" y="320" text-anchor="middle" fill="#888" font-size="15">Cheap and well-tolerated</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">PCSK9 INHIBITORS</text>
                    <text x="800" y="258" text-anchor="middle" fill="#fff" font-size="16">LDL down another 50-60%</text>
                    <text x="800" y="290" text-anchor="middle" fill="#888" font-size="15">FOURIER: 27,564 patients</text>
                    <text x="800" y="320" text-anchor="middle" fill="#888" font-size="15">Barrier: cost</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BEMPEDOIC ACID</text>
                    <text x="300" y="478" text-anchor="middle" fill="#fff" font-size="16">Liver-only activation</text>
                    <text x="300" y="510" text-anchor="middle" fill="#888" font-size="15">CLEAR Outcomes: 13% cut</text>
                    <text x="300" y="540" text-anchor="middle" fill="#888" font-size="15">For the statin-intolerant</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">INCLISIRAN</text>
                    <text x="800" y="478" text-anchor="middle" fill="#fff" font-size="16">RNA silencing, 2 shots/year</text>
                    <text x="800" y="510" text-anchor="middle" fill="#888" font-size="15">LDL down ~50%; outcome</text>
                    <text x="800" y="540" text-anchor="middle" fill="#888" font-size="15">trials still running</text>
                    <rect x="150" y="640" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="20">Lower LDL by any mechanism and events fall</text>
                    <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="20">in proportion -- the pathway is the point</text>
                </svg>`,
                caption: "Four tools beyond statins -- each one another test of the LDL hypothesis, each one passing"
            }
        },
        {
            type: "concept",
            title: "The Statin-Denial Industry vs 200,000 Participants",
            content: "Time to name the elephant. There is a thriving online ecosystem -- books, documentaries, supplement storefronts -- claiming statins are a scam. Let us steelman it honestly, then weigh it.\n\nThe legitimate kernels: pharmaceutical companies DID fund most trials and have real conflicts of interest. Relative-risk marketing DOES oversell benefits to low-risk people. Some doctors DO prescribe without discussing absolute numbers. All fair criticism -- and notice this lesson has already armed you with those same critiques.\n\nBut the denialist leap goes further: cholesterol does not matter, trials are fabricated, side effects are suppressed. Against that stand some inconvenient facts:\n\n• The CTT dataset spans ~200,000 randomized participants, with results **consistent across dozens of trials run by different groups in different countries over 30 years** -- including government- and charity-funded trials like the UK's Heart Protection Study (funded by the Medical Research Council and British Heart Foundation)\n• Statins are now cheap generics -- pennies a day. The blockbuster-profit motive largely expired with the patents, yet the evidence keeps replicating\n• The genetic evidence (FH, PCSK9, Mendelian randomization) requires no drug company at all\n\nA 2016 Lancet review estimated media-driven statin discontinuation waves lead to measurable excess heart attacks -- fear has a body count too.\n\nAnd the balancing truth: none of this makes statins mandatory or lifestyle optional. Diet, exercise, sleep, and not smoking remain the foundation the pills sit on -- every trial ran ON TOP of usual care, not instead of it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WEIGHING THE CLAIMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fair critiques vs the denialist leap</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">FAIR CRITIQUES</text>
                    <text x="290" y="272" text-anchor="middle" fill="#fff" font-size="17">Industry funding conflicts</text>
                    <text x="290" y="307" text-anchor="middle" fill="#fff" font-size="17">Relative-risk overselling</text>
                    <text x="290" y="342" text-anchor="middle" fill="#fff" font-size="17">Rushed prescribing talks</text>
                    <text x="290" y="420" text-anchor="middle" fill="#f59e0b" font-size="16">Keep these -- they make</text>
                    <text x="290" y="452" text-anchor="middle" fill="#f59e0b" font-size="16">you a sharper patient</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE DENIALIST LEAP</text>
                    <text x="810" y="272" text-anchor="middle" fill="#fff" font-size="17">Cholesterol does not matter</text>
                    <text x="810" y="307" text-anchor="middle" fill="#fff" font-size="17">All trials are fabricated</text>
                    <text x="810" y="342" text-anchor="middle" fill="#fff" font-size="17">Harms are hidden</text>
                    <text x="810" y="420" text-anchor="middle" fill="#ef4444" font-size="16">Contradicted by genetics,</text>
                    <text x="810" y="452" text-anchor="middle" fill="#ef4444" font-size="16">generics, and replication</text>
                    <rect x="150" y="580" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="632" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">~200,000 RANDOMIZED PARTICIPANTS</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="18">30 years, many countries, non-industry funders too</text>
                    <rect x="200" y="780" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#ffd700" font-size="20">Lifestyle stays the foundation --</text>
                    <text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="20">every trial ran on top of it, not instead</text>
                </svg>`,
                caption: "Steelmanning the skeptics: keep the fair critiques, reject the leap the evidence forbids"
            }
        },
        {
            type: "quote",
            content: "The most dangerous side effect of statins is the heart attack you have when you stop taking them because of something you read on the internet.",
            author: "Adapted from cardiologist Steven Nissen's commentary on statin denialism",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">The most dangerous side effect of statins</text>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="22">is the heart attack you have when you stop</text>
                    <text x="160" y="300" text-anchor="start" fill="#fff" font-style="italic" font-size="22">taking them because of something</text>
                    <text x="160" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="22">you read on the internet.</text>
                    <text x="940" y="395" text-anchor="end" fill="#8b5cf6" font-size="17">-- adapted from Steven Nissen</text>
                    <rect x="200" y="500" width="700" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#ef4444" font-size="19">A 2016 Lancet review linked media scare waves</text>
                    <text x="550" y="585" text-anchor="middle" fill="#ef4444" font-size="19">to measurable excess heart attacks</text>
                </svg>`,
                caption: "Fear has a body count too -- a moment of reflection before the action plan"
            }
        },
        {
            type: "application",
            title: "Your Doctor Conversation, Scripted",
            content: "Whether you are statin-curious, statin-hesitant, or already prescribed, here is how to turn this lesson into one high-quality appointment.\n\n1. **Know your absolute risk before you go** -- ask your doctor to run the PREVENT or pooled cohort equations with you (or bring a printout from an online calculator using your real numbers). This single number frames everything.\n\n2. **Ask the two-sided question**: 'Given my absolute risk, what is my expected benefit from treatment in percentage points -- and what are my realistic risks?' A good clinician will love this question.\n\n3. **If you are hesitant, say so out loud** -- there are real options: lower doses, different statins, alternate-day dosing, ezetimibe, or a coronary calcium scan to refine a borderline decision. Hesitation hidden from your doctor helps no one.\n\n4. **If you get side effects, report -- do not quit silently.** Remember SAMSON: symptoms are real, but a structured re-challenge finds a tolerable regimen for most people. Stopping cold based on a headline is the one clearly evidence-contradicted move.\n\n5. **Keep the foundation** -- whatever you and your doctor decide about pills, the Lesson 4 food plan, exercise, sleep, and not smoking remain non-negotiable. No pill outruns a foundation-free life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CONVERSATION PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves for a shared decision</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="203" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="203" text-anchor="start" fill="#fff" font-size="18">Get your absolute ten-year risk calculated</text>
                    <text x="245" y="233" text-anchor="start" fill="#888" font-size="15">PREVENT or pooled cohort equations</text>
                    <rect x="150" y="280" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="323" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="323" text-anchor="start" fill="#fff" font-size="18">Ask for benefit AND risk in absolute points</text>
                    <text x="245" y="353" text-anchor="start" fill="#888" font-size="15">The question that frames everything</text>
                    <rect x="150" y="400" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="443" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="443" text-anchor="start" fill="#fff" font-size="18">Voice hesitation -- ask about alternatives</text>
                    <text x="245" y="473" text-anchor="start" fill="#888" font-size="15">Doses, ezetimibe, calcium score for close calls</text>
                    <rect x="150" y="520" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="563" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="563" text-anchor="start" fill="#fff" font-size="18">Report side effects; never quit silently</text>
                    <text x="245" y="593" text-anchor="start" fill="#888" font-size="15">Structured re-challenge works for most</text>
                    <rect x="150" y="640" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="683" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="683" text-anchor="start" fill="#fff" font-size="18">Keep the lifestyle foundation either way</text>
                    <text x="245" y="713" text-anchor="start" fill="#888" font-size="15">Every trial ran on top of it, not instead of it</text>
                </svg>`,
                caption: "Five moves that turn statin confusion into a genuine shared decision"
            }
        },
        {
            type: "quiz",
            question: "In the SAMSON trial, patients who had quit statins over side effects took statin, placebo, and no-tablet months in random order. What did their daily symptom scores show?",
            options: [
                { text: "Statin months scored far worse than placebo, confirming widespread muscle toxicity", correct: false },
                { text: "Statin and placebo months scored nearly identically -- about 90% of symptoms came from taking any pill at all", correct: true },
                { text: "Patients felt nothing in any month, proving they had invented their symptoms", correct: false },
                { text: "Placebo months scored worst, showing statins actively relieve muscle pain", correct: false }
            ],
            explanation: "Symptom scores averaged 16.3 on statin months and 15.4 on placebo months -- statistically indistinguishable -- versus 8.0 with no tablet. The symptoms were completely real, but roughly 90% were triggered by pill-taking itself: the nocebo effect. The trap is the third option -- SAMSON did NOT show patients were faking; it showed expectation produces genuine physical symptoms. That distinction is why half the participants, once shown their own data, successfully restarted statins with their doctors.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SAMSON, 2020</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Statin vs placebo vs nothing --</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">what did the blinded months reveal?</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">NOCEBO IS NOT FAKING</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Real symptoms, produced by expectation</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">The kindest and most accurate reading of the data</text>
                </svg>`,
                caption: "Final check: what SAMSON actually demonstrated"
            }
        },
        {
            type: "quiz",
            question: "Which person has the strongest evidence-based case for statin therapy?",
            options: [
                { text: "Anyone whose total cholesterol is above 200, regardless of other factors", correct: false },
                { text: "A 58-year-old who had a heart attack two years ago (secondary prevention)", correct: true },
                { text: "A healthy 35-year-old with an LDL of 110 and no risk factors", correct: false },
                { text: "Nobody -- lifestyle change fully replaces medication in all cases", correct: false }
            ],
            explanation: "Secondary prevention -- treating people whose arteries have already caused an event -- is where statin evidence is strongest: the 4S trial cut total mortality by 30% in exactly this population, and every major guideline agrees. A cholesterol number alone is the tempting distractor, but prescribing is driven by absolute risk from calculators, not one lab value. The healthy 35-year-old has tiny near-term absolute benefit, and while lifestyle is the foundation, trials show medication adds benefit on top for high-risk patients, not instead.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHO BENEFITS MOST?</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Match the strength of evidence</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">to the person in front of you</text>
                    <rect x="150" y="400" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE HIERARCHY</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Secondary prevention, then high calculated risk,</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">then shared decisions in the gray zone</text>
                </svg>`,
                caption: "Final check: where the statin evidence is strongest"
            }
        }
    ]
},
{
    id: 7,
    title: "Atherosclerosis: The 50-Year Story",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Autopsy That Changed Everything",
            content: "In 1953, an Army pathologist named Major William Enos did something grim and important: he examined the hearts of 300 American soldiers killed in the Korean War. Their average age was 22. These were fit young men who could march all day with a pack.\n\nWhat he found stunned medicine: about **77 percent already had visible atherosclerosis** in their coronary arteries. Some had vessels narrowed by half or more. At 22.\n\nHere is why this matters to you: the disease that causes most heart attacks is not an old-age event that strikes out of nowhere. It is a **50-year story** that starts in your teens and unfolds silently, one chapter at a time. And unlike most stories, you get to edit this one -- at any age. This lesson shows you how the plot works, so you can change the ending.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 50-YEAR STORY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Atherosclerosis starts decades before symptoms</text>
                    <rect x="150" y="180" width="800" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">KOREA, 1953</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="64">77%</text>
                    <text x="550" y="365" text-anchor="middle" fill="#fff" font-size="20">of 300 fallen soldiers had coronary plaque</text>
                    <text x="550" y="405" text-anchor="middle" fill="#888" font-size="18">Average age: 22 years old</text>
                    <rect x="150" y="490" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE ENOS STUDY, JAMA 1953</text>
                    <text x="550" y="595" text-anchor="middle" fill="#fff" font-size="18">Heart disease is a lifelong process,</text>
                    <text x="550" y="625" text-anchor="middle" fill="#888" font-size="16">not a sudden event of old age</text>
                    <rect x="200" y="700" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ffd700" font-size="20">The story is long -- and you hold the pen</text>
                </svg>`,
                caption: "The 1953 Enos autopsy study: atherosclerosis begins decades early"
            }
        },
        {
            type: "concept",
            title: "How a Plaque Is Born",
            content: "The biology sounds complicated, but the plot is simple. It starts with **LDL particles** -- the cholesterol carriers you met earlier in this book.\n\n• **Step 1 -- Entry**: When LDL particles are abundant in your blood, some slip through the artery's inner lining and lodge in the wall itself\n• **Step 2 -- Oxidation**: Trapped LDL gets chemically damaged (oxidized), which makes it look like an invader\n• **Step 3 -- The immune response**: Your body sends white blood cells called **macrophages** to engulf the oxidized LDL. They gorge until they become bloated **foam cells**\n• **Step 4 -- The fatty streak**: Foam cells pile up into a yellowish streak inside the artery wall -- the first visible chapter of atherosclerosis\n\nNotice what this means: plaque is not grease clogging a pipe from the inside. It grows **within the wall itself**, like an infection your immune system keeps fighting for decades. That distinction explains almost everything strange about heart disease -- including why the biggest blockage is not always the most dangerous one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW A PLAQUE IS BORN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four steps, repeated for decades</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. ENTRY</text>
                    <text x="200" y="265" text-anchor="start" fill="#fff" font-size="18">LDL particles slip into the artery wall</text>
                    <path d="M550 300 L550 330" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,340 542,326 558,326" fill="#14b8a6"/>
                    <rect x="150" y="350" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="405" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">2. OXIDATION</text>
                    <text x="200" y="445" text-anchor="start" fill="#fff" font-size="18">Trapped LDL is damaged -- now flagged as an invader</text>
                    <path d="M550 480 L550 510" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,520 542,506 558,506" fill="#14b8a6"/>
                    <rect x="150" y="530" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">3. IMMUNE ATTACK</text>
                    <text x="200" y="625" text-anchor="start" fill="#fff" font-size="18">Macrophages engulf the LDL, become foam cells</text>
                    <path d="M550 660 L550 690" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,700 542,686 558,686" fill="#14b8a6"/>
                    <rect x="150" y="710" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="765" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">4. FATTY STREAK</text>
                    <text x="200" y="805" text-anchor="start" fill="#fff" font-size="18">Foam cells pile up inside the wall itself</text>
                    <rect x="200" y="890" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="20">Plaque grows IN the wall --</text>
                    <text x="550" y="965" text-anchor="middle" fill="#ffd700" font-size="20">not like grease in a pipe</text>
                </svg>`,
                caption: "From circulating LDL to a fatty streak inside the artery wall"
            }
        },
        {
            type: "visual",
            title: "From Streak to Stone: The Timeline",
            content: "Over decades, the fatty streak matures. Your body walls it off with a **fibrous cap** of scar-like tissue, forming a true plaque. Later, many plaques **calcify** -- literally turning partly to bone-like mineral. Calcium is how a CT scanner can see your arterial history, as you will learn shortly.\n\nThe timeline below is typical, not destiny. Some people race through it; others barely advance a chapter. What moves the plot along fastest: high LDL over many years, high blood pressure, smoking, and diabetes.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A LIFE IN PLAQUE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The typical timeline -- yours can run slower</text>
                    <line x1="140" y1="200" x2="140" y2="880" stroke="#6366f1" stroke-width="3"/>
                    <circle cx="140" cy="230" r="10" fill="#10b981"/>
                    <rect x="190" y="185" width="760" height="110" rx="18" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="230" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">TEENS</text>
                    <text x="240" y="268" text-anchor="start" fill="#fff" font-size="18">Fatty streaks appear -- found in most teenagers</text>
                    <circle cx="140" cy="410" r="10" fill="#6366f1"/>
                    <rect x="190" y="365" width="760" height="110" rx="18" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="240" y="410" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">20s - 30s</text>
                    <text x="240" y="448" text-anchor="start" fill="#fff" font-size="18">Streaks grow into fibrous plaques with caps</text>
                    <circle cx="140" cy="590" r="10" fill="#f59e0b"/>
                    <rect x="190" y="545" width="760" height="110" rx="18" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="240" y="590" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">40s - 50s</text>
                    <text x="240" y="628" text-anchor="start" fill="#fff" font-size="18">Plaques enlarge and begin to calcify</text>
                    <circle cx="140" cy="770" r="10" fill="#ef4444"/>
                    <rect x="190" y="725" width="760" height="110" rx="18" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="240" y="770" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">50s AND BEYOND</text>
                    <text x="240" y="808" text-anchor="start" fill="#fff" font-size="18">Rupture risk rises -- most events happen here</text>
                    <rect x="190" y="920" width="760" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="570" y="975" text-anchor="middle" fill="#ffd700" font-size="20">Every chapter can be slowed -- at any age</text>
                </svg>`,
                caption: "The decades-long progression from fatty streak to calcified plaque"
            }
        },
        {
            type: "example",
            title: "The Evidence: Soldiers and Teen Donors",
            content: "Two landmark bodies of evidence prove the 50-year timeline is real.\n\n**Korea, 1953**: Major William Enos and colleagues, publishing in JAMA, reported that **77.3 percent** of 300 autopsied soldiers -- average age 22 -- had gross coronary atherosclerosis, ranging from thin streaks to vessels narrowed by more than half. A follow-up in Vietnam-era soldiers found similar disease.\n\n**The PDAY study (1980s-90s)**: Researchers in the Pathobiological Determinants of Atherosclerosis in Youth program examined arteries from roughly **3,000 people aged 15 to 34** who died of accidents, homicides, or suicides -- deaths unrelated to health. Fatty streaks were present in virtually **all teenagers' aortas**, and raised fibrous plaques in coronary arteries climbed steadily with age, higher LDL, smoking, and blood pressure.\n\nThe uncomfortable, empowering conclusion: if you are an adult reading this, chapter one of your story was written years ago. The question is not whether the process has started. It is how fast the next chapters get written -- and that part is substantially up to you and your doctor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO LANDMARK STUDIES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Proof that the story starts young</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ENOS, JAMA 1953</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">300 soldiers autopsied</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Average age 22</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-weight="bold" font-size="44">77.3%</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">had coronary</text>
                    <text x="290" y="470" text-anchor="middle" fill="#888" font-size="16">atherosclerosis</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">PDAY, 1980s-90s</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">~3,000 accident victims</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">Ages 15 to 34</text>
                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="18">Fatty streaks in nearly</text>
                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="18">ALL teenage aortas</text>
                    <text x="810" y="470" text-anchor="middle" fill="#888" font-size="16">Lesions grew with LDL,</text>
                    <text x="810" y="500" text-anchor="middle" fill="#888" font-size="16">smoking, blood pressure</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE CONCLUSION</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">The process starts young -- the pace is negotiable</text>
                </svg>`,
                caption: "Enos (1953) and PDAY: atherosclerosis begins in youth"
            }
        },
        {
            type: "quiz",
            question: "The 1953 Enos autopsy study examined 300 soldiers killed in Korea, average age 22. What did it find?",
            options: [
                { text: "Their arteries were clean -- atherosclerosis only begins after age 40", correct: false },
                { text: "About 77 percent already had visible coronary atherosclerosis", correct: true },
                { text: "Only the soldiers with a family history of heart disease had plaque", correct: false },
                { text: "About 10 percent had early plaque, mostly heavy smokers", correct: false }
            ],
            explanation: "Enos found gross coronary atherosclerosis in 77.3 percent of these young, fit soldiers -- some with vessels already narrowed by half. The PDAY study later confirmed fatty streaks in virtually all teenagers. The tempting answer is that plaque is an old-age problem, but the evidence says the opposite: atherosclerosis is a lifelong process that starts decades before symptoms, which is exactly why prevention started early pays off so much.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE 50-YEAR TIMELINE</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">When does atherosclerosis actually begin?</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Think back to the soldiers of 1953</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">and the PDAY teen donors</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">HINT</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">Average age in the study: 22</text>
                </svg>`,
                caption: "Test your understanding of when plaque begins"
            }
        },
        {
            type: "concept",
            title: "Inflammation: The Accomplice",
            content: "For decades, doctors argued about whether atherosclerosis was a **cholesterol problem** or an **inflammation problem**. The honest answer: both, working together. LDL supplies the raw material; inflammation is the accomplice that keeps the injury smoldering and makes plaques fragile.\n\nThe proof arrived in 2017 with the **CANTOS trial** (published in the New England Journal of Medicine). Researchers gave **10,061 heart attack survivors** a drug called canakinumab -- an antibody that blocks an inflammatory signal (interleukin-1 beta) and does **nothing** to cholesterol.\n\nResult: about a **15 percent reduction** in major cardiovascular events. For the first time, lowering inflammation alone -- with cholesterol untouched -- prevented heart attacks. The drug is not used this way in practice (it is expensive and slightly raised fatal infections), but the principle it proved changed cardiology.\n\nWhat it means for you: things that quietly stoke inflammation -- smoking, visceral fat, poor sleep, untreated gum disease, chronic stress -- are not separate from heart disease. They are co-authors of the same story. Your doctor can even measure your inflammatory tone with a cheap blood test called **hs-CRP**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ACCOMPLICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">CANTOS proved inflammation matters on its own</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">LDL: THE MATERIAL</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Supplies the cholesterol</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">that builds the plaque</text>
                    <text x="290" y="370" text-anchor="middle" fill="#888" font-size="16">Lowering it shrinks risk</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="16">(statin trials)</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INFLAMMATION: THE FIRE</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Keeps the artery wall</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">injured and fragile</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="16">Lowering it ALSO shrinks</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="16">risk (CANTOS trial)</text>
                    <rect x="150" y="550" width="800" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CANTOS, NEJM 2017</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="18">10,061 heart attack survivors</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="18">Anti-inflammatory drug, zero cholesterol change</text>
                    <text x="550" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">~15% fewer major cardiac events</text>
                </svg>`,
                caption: "Cholesterol and inflammation: partners in plaque"
            }
        },
        {
            type: "concept",
            title: "Why a 30% Blockage Can Kill You",
            content: "Here is the most counterintuitive fact in cardiology: **most heart attacks come from plaques that were NOT the biggest blockages**. A modest 30-40 percent narrowing can kill you tonight, while a 70 percent blockage announces itself for years.\n\nThe difference is **stability**, not size:\n\n• A **stable plaque** has a thick fibrous cap and lots of calcium -- hard, walled-off, unlikely to break. If it narrows the artery enough, it causes **angina**: predictable chest pressure with exertion that warns you to see a doctor\n• A **vulnerable plaque** has a thin cap over a soft, lipid-rich, inflamed core. It may barely narrow the artery at all -- until the cap **ruptures**\n\nWhen a cap ruptures, the plaque's gooey interior touches flowing blood, and your clotting system does exactly what it is designed to do: it forms a clot, fast. That clot -- not the plaque itself -- slams the artery shut. Blood flow stops. Heart muscle starts dying. That is a **heart attack**.\n\nThis is why someone can pass a stress test in March and have a heart attack in May. The test finds big blockages; it cannot see the quiet, thin-capped plaque waiting to rupture.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SIZE ISN'T DANGER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stability decides which plaque strikes</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">STABLE PLAQUE</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Thick cap, calcified, hard</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">May block 70%+</text>
                    <text x="290" y="370" text-anchor="middle" fill="#888" font-size="16">Causes angina with exertion</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="16">Gives you a warning</text>
                    <text x="290" y="470" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ANNOUNCES ITSELF</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">VULNERABLE PLAQUE</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Thin cap, soft lipid core</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">May block only 30-40%</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="16">Silent -- until the cap</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="16">ruptures and a clot forms</text>
                    <text x="810" y="470" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">STRIKES WITHOUT WARNING</text>
                    <rect x="150" y="630" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">RUPTURE + CLOT = HEART ATTACK</text>
                    <text x="550" y="735" text-anchor="middle" fill="#fff" font-size="18">The clot, not the plaque, shuts the artery</text>
                </svg>`,
                caption: "Stable vs vulnerable plaque: why small can be deadly"
            }
        },
        {
            type: "visual",
            title: "The Rupture, Frame by Frame",
            content: "Watch the sequence that causes most heart attacks. Note that the artery was mostly open right up until the final frame -- which is why so many heart attacks arrive with no prior symptoms at all. Prevention is not about shaving down big blockages; it is about keeping caps thick, cores small, and inflammation low. Statins, it turns out, do all three -- one reason they prevent events out of proportion to how much they shrink plaque.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ANATOMY OF A HEART ATTACK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four frames, often minutes apart</text>
                    <rect x="150" y="170" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">FRAME 1</text>
                    <text x="200" y="265" text-anchor="start" fill="#fff" font-size="18">A thin-capped plaque sits quietly -- artery 60-70% open</text>
                    <path d="M550 310 L550 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,350 542,336 558,336" fill="#14b8a6"/>
                    <rect x="150" y="360" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="415" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">FRAME 2</text>
                    <text x="200" y="455" text-anchor="start" fill="#fff" font-size="18">The cap cracks -- inflammation has eaten it thin</text>
                    <path d="M550 500 L550 530" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,540 542,526 558,526" fill="#14b8a6"/>
                    <rect x="150" y="550" width="800" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="605" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">FRAME 3</text>
                    <text x="200" y="645" text-anchor="start" fill="#fff" font-size="18">Blood meets the core -- a clot forms in minutes</text>
                    <path d="M550 690 L550 720" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,730 542,716 558,716" fill="#14b8a6"/>
                    <rect x="150" y="740" width="800" height="140" rx="20" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="3"/>
                    <text x="200" y="795" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">FRAME 4</text>
                    <text x="200" y="835" text-anchor="start" fill="#fff" font-size="18">Artery blocked -- downstream heart muscle begins to die</text>
                    <rect x="200" y="930" width="700" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="975" text-anchor="middle" fill="#10b981" font-size="19">Prevention = thick caps, small cores,</text>
                    <text x="550" y="1003" text-anchor="middle" fill="#10b981" font-size="19">low inflammation -- not just smaller blockages</text>
                </svg>`,
                caption: "How plaque rupture becomes a heart attack, step by step"
            }
        },
        {
            type: "example",
            title: "The Stent Surprise: COURAGE and ISCHEMIA",
            content: "If plaque narrows arteries, propping them open with a **stent** should prevent heart attacks, right? Two of the most important trials in cardiology tested exactly that -- and the answer surprised nearly everyone.\n\n**COURAGE (2007)**: 2,287 patients with **stable** coronary disease were randomized to stenting plus good medications, or medications alone. Over about 4.6 years, stents did **not** reduce heart attacks or deaths. They did relieve angina symptoms faster.\n\n**ISCHEMIA (2020)**: 5,179 patients with moderate-to-severe blockages on stress testing. Same design, same result -- an invasive strategy did not cut heart attacks or deaths versus medications alone in stable patients.\n\nWhy? Because you now understand the biology: the stent fixes **one spot**, but atherosclerosis is **diffuse** -- and the next rupture usually comes from a modest plaque somewhere else. Medications treat the whole artery tree.\n\nThe crucial caveat: **during an actual heart attack, emergency stenting is lifesaving** -- it reopens the clotted artery and saves dying muscle. Stents are superb plumbing repair for emergencies. They just cannot rewrite a 50-year story that is unfolding along your entire arterial system.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STENT SURPRISE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two landmark trials, one clear lesson</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COURAGE, 2007</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">2,287 stable patients</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">Stent + meds vs meds</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">No fewer heart attacks</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">or deaths over ~4.6 years</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">ISCHEMIA, 2020</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">5,179 stable patients</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">Invasive vs conservative</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">Same result -- no cut in</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="16">heart attacks or deaths</text>
                    <rect x="150" y="570" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">WHY: THE DISEASE IS DIFFUSE</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="18">A stent fixes one spot -- the next rupture</text>
                    <text x="550" y="702" text-anchor="middle" fill="#fff" font-size="18">usually comes from somewhere else</text>
                    <rect x="150" y="790" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BIG EXCEPTION</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="18">In an ACTIVE heart attack, emergency stenting saves lives</text>
                </svg>`,
                caption: "COURAGE and ISCHEMIA: stents relieve symptoms, meds treat the disease"
            }
        },
        {
            type: "concept",
            title: "The $100 Look Inside Your Arteries",
            content: "Remember how old plaques calcify? A **coronary artery calcium (CAC) scan** exploits that. It is a quick, low-radiation CT -- often around **$100 or so out of pocket** -- that counts the calcium in your coronary arteries and gives you a score.\n\n• **Score 0**: No detectable calcified plaque. This is the famous **power of zero** -- in studies like MESA, a zero score predicts a very low 10-year event risk, even in people with some risk factors\n• **Score 1-99**: The story has visibly started. Time to take prevention seriously\n• **Score 100-399**: Moderate plaque burden -- most guidelines say statin territory\n• **Score 400+**: A genuine wake-up call, with risk comparable to someone who already had an event\n\nWhere CAC shines, per US and European guidelines, is as a **tie-breaker**: when you and your doctor are genuinely unsure whether you need a statin, the scan can settle it with data about YOUR arteries instead of averages.\n\nHonest limits: it cannot see soft, uncalcified plaque (a young smoker can score zero and still have risk), it is not useful for people already known to be high-risk, and a high score should lead to better prevention -- not panic or automatic procedures. This is a conversation to have with your doctor, not a decision to make from a lesson.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CAC SCORE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A CT scan that reads your arterial history</text>
                    <rect x="150" y="170" width="800" height="110" rx="18" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="215" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">SCORE 0</text>
                    <text x="210" y="252" text-anchor="start" fill="#fff" font-size="18">The power of zero -- very low 10-year risk</text>
                    <rect x="150" y="310" width="800" height="110" rx="18" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="210" y="355" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">SCORE 1-99</text>
                    <text x="210" y="392" text-anchor="start" fill="#fff" font-size="18">The story has started -- get serious now</text>
                    <rect x="150" y="450" width="800" height="110" rx="18" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="495" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">SCORE 100-399</text>
                    <text x="210" y="532" text-anchor="start" fill="#fff" font-size="18">Moderate burden -- usually statin territory</text>
                    <rect x="150" y="590" width="800" height="110" rx="18" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="635" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">SCORE 400+</text>
                    <text x="210" y="672" text-anchor="start" fill="#fff" font-size="18">Wake-up call -- aggressive prevention</text>
                    <rect x="150" y="750" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">HONEST LIMITS</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="17">Cannot see soft plaque • Not for everyone</text>
                    <text x="550" y="877" text-anchor="middle" fill="#888" font-size="16">Best used as a tie-breaker, with your doctor</text>
                </svg>`,
                caption: "CAC scoring: what the numbers mean and what they cannot tell you"
            }
        },
        {
            type: "application",
            title: "Slow the Story at Any Mile",
            content: "The 50-year timeline is the most hopeful fact in this lesson: a long race means it is never too late to change your pace. Concrete moves to make this month:\n\n1. **Know your numbers** -- Get your LDL cholesterol (ask about **ApoB** too), blood pressure, and A1C. You cannot edit a story you have not read\n\n2. **Ask the tie-breaker question** -- If you and your doctor are on the fence about a statin, ask whether a **CAC scan** would settle it for you\n\n3. **Attack the inflammation levers you control** -- If you smoke, quitting is the single biggest edit available. Treat sleep apnea, see a dentist about bleeding gums\n\n4. **Think in decades, not months** -- Every year your LDL and blood pressure stay low is a chapter written slowly. Prevention compounds like interest\n\n5. **Do not self-prescribe** -- This lesson is education, not medical advice. Statin decisions, scans, and targets belong in a conversation with your clinician",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MOVES THIS MONTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Slow the story at any mile</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="220" text-anchor="start" fill="#fff" font-size="18">Know your numbers: LDL, ApoB, BP, A1C</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="16">You cannot edit a story you have not read</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="370" text-anchor="start" fill="#fff" font-size="18">Ask if a CAC scan would settle the statin question</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="16">Data about YOUR arteries beats averages</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="520" text-anchor="start" fill="#fff" font-size="18">Attack inflammation: smoking, apnea, gums</text>
                    <text x="245" y="555" text-anchor="start" fill="#888" font-size="16">Quitting smoking is the biggest single edit</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="670" text-anchor="start" fill="#fff" font-size="18">Think in decades -- prevention compounds</text>
                    <text x="245" y="705" text-anchor="start" fill="#888" font-size="16">Every low-LDL year is a slow chapter</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="820" text-anchor="start" fill="#fff" font-size="18">Decide WITH your clinician, not from a lesson</text>
                    <text x="245" y="855" text-anchor="start" fill="#888" font-size="16">Education first, prescriptions second</text>
                </svg>`,
                caption: "Five concrete steps to slow your plaque timeline"
            }
        },
        {
            type: "concept",
            title: "The Race Is Long -- That Is the Good News",
            content: "It would be easy to leave this lesson feeling doomed: plaque since your teens, silent ruptures, stress tests that miss the killer. Flip it around.\n\nAtherosclerosis is arguably the **slowest major disease humans get** -- a marathon measured in decades. Researchers describe risk as your **lifetime exposure** to LDL: not just how high it is today, but how high, for how long. Like a dose accumulating over years.\n\nThat framing changes everything:\n\n• **Genetic proof**: People born with mutations that keep LDL low their whole lives have up to **80-90 percent lower** coronary risk -- far more benefit than starting a statin at 55, because their exposure was low for every mile of the race\n• **It is never too late**: Trials show risk starts falling within months of lowering LDL or blood pressure, at any age\n• **It is never too early**: The same math says a 25-year-old's habits are quietly writing chapters most people do not think about until 50\n\nYou cannot un-write chapter one. But the next 20 chapters are blank pages, and everything in this book -- food, movement, sleep, blood pressure, lipids -- is a pen.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A MARATHON, NOT A TRAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Risk = LDL level x years of exposure</text>
                    <rect x="150" y="180" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">LIFELONG LOW LDL (GENETIC)</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="18">Up to 80-90% lower coronary risk</text>
                    <text x="550" y="322" text-anchor="middle" fill="#888" font-size="16">Low exposure at every mile of the race</text>
                    <rect x="150" y="400" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="460" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">START ANYTIME</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Risk begins falling within months</text>
                    <text x="550" y="542" text-anchor="middle" fill="#888" font-size="16">of lowering LDL or blood pressure -- at any age</text>
                    <rect x="150" y="620" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">START EARLY, WIN BIG</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="18">A 25-year-old's habits are already</text>
                    <text x="550" y="762" text-anchor="middle" fill="#888" font-size="16">writing the chapters read at 55</text>
                    <rect x="200" y="860" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="915" text-anchor="middle" fill="#ffd700" font-size="20">The next 20 chapters are blank pages</text>
                </svg>`,
                caption: "Lifetime LDL exposure: why the long race favors you"
            }
        },
        {
            type: "quiz",
            question: "In the COURAGE and ISCHEMIA trials, stenting stable blockages did not prevent future heart attacks better than medications alone. Why not?",
            options: [
                { text: "The stents failed mechanically and re-narrowed within months", correct: false },
                { text: "Most future heart attacks come from rupture of smaller plaques elsewhere -- the disease is diffuse", correct: true },
                { text: "The trials only enrolled patients too healthy to benefit from any treatment", correct: false },
                { text: "Stents never help anyone, including patients having an active heart attack", correct: false }
            ],
            explanation: "A stent repairs one spot, but atherosclerosis lines the whole artery tree, and most heart attacks come from modest, non-obstructive plaques that rupture -- often nowhere near the biggest blockage. Medications treat every plaque at once. The last option is the dangerous misreading: during an active heart attack, emergency stenting reopens the clotted artery and absolutely saves lives. The trials only tested stable disease, where the story is diffuse and slow.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STENTS VS THE 50-YEAR STORY</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">One repair site vs a disease of the</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">entire artery tree</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Think: where does the NEXT rupture come from?</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">REMEMBER</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">Most attacks start at non-obstructive plaques</text>
                </svg>`,
                caption: "Final check: why fixing one blockage cannot stop a diffuse disease"
            }
        }
    ]
},
{
    id: 8,
    title: "AFib: The Electrical Storm",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Night Your Watch Won't Shut Up",
            content: "It is 11 p.m. and your smartwatch buzzes: 'Irregular heart rhythm detected.' You feel... fine? Maybe a little fluttery, like a fish flopping behind your breastbone. You almost dismiss it.\n\nDo not dismiss it. That notification describes **atrial fibrillation** -- AFib -- the most common serious heart rhythm disorder on Earth. If you live past 40, your lifetime odds of developing it are roughly **one in three or four**. Millions of people have it right now and do not know.\n\nHere is what makes AFib worth seven minutes of your full attention: the rhythm itself usually will not kill you. But left unrecognized, it quietly raises your risk of **stroke about five-fold** -- and that risk is largely preventable with treatment. This lesson teaches you what AFib is, how to spot it, what actually protects you, and which levers -- alcohol, weight, sleep -- can turn the storm down. Not medical advice; just the map you want before the conversation with your doctor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ELECTRICAL STORM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Atrial fibrillation: common, sneaky, treatable</text>
                    <rect x="60" y="180" width="460" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">HOW COMMON?</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">1 in 3-4</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="16">lifetime risk after age 40</text>
                    <rect x="580" y="180" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE REAL DANGER</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">~5x</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="16">higher stroke risk, untreated</text>
                    <rect x="150" y="530" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE GOOD NEWS</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="18">Most of that stroke risk is preventable</text>
                </svg>`,
                caption: "AFib by the numbers: very common, and the danger is treatable"
            }
        },
        {
            type: "concept",
            title: "A Quivering Bag of Worms",
            content: "Your heartbeat normally starts in one place: the **sinus node**, a natural pacemaker in the right atrium. It fires once, a single clean wave sweeps across both atria, they contract together, and the ventricles follow. Boom... boom... boom. That orderly pattern is called **normal sinus rhythm**.\n\nIn **atrial fibrillation**, that discipline collapses. Instead of one wave, hundreds of chaotic electrical wavelets swirl through the atria at **300-600 impulses per minute**. The atria stop beating and start **quivering** -- surgeons who have seen it describe a bag of worms.\n\nTwo consequences follow:\n\n• **An irregular pulse**: The AV node -- the gatekeeper between atria and ventricles -- gets bombarded and lets impulses through erratically. Your pulse becomes **irregularly irregular**: no pattern at all, often fast\n• **Lost atrial kick**: Quivering atria no longer top off the ventricles before each beat, trimming the heart's output -- one reason AFib causes fatigue and breathlessness\n\nAFib is the most common serious arrhythmia, and episodes may come and go (**paroxysmal**) or settle in permanently (**persistent**). Either form carries the stroke risk you are about to learn about.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ORDER VS CHAOS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One clean wave -- or hundreds of wavelets</text>
                    <rect x="60" y="180" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">SINUS RHYTHM</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">One pacemaker fires</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="18">One wave, one contraction</text>
                    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="16">Steady, even pulse</text>
                    <circle cx="290" cy="440" r="45" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="448" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">1 wave</text>
                    <rect x="580" y="180" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ATRIAL FIBRILLATION</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Chaotic wavelets swirl at</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="18">300-600 impulses/min</text>
                    <text x="810" y="360" text-anchor="middle" fill="#888" font-size="16">Atria quiver -- no real beat</text>
                    <circle cx="740" cy="440" r="30" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="815" cy="455" r="24" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="885" cy="435" r="27" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <rect x="150" y="590" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWO RESULTS</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">Irregularly irregular pulse -- no pattern at all</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="18">Lost atrial kick -- fatigue and breathlessness</text>
                </svg>`,
                caption: "Normal sinus rhythm vs the electrical chaos of AFib"
            }
        },
        {
            type: "visual",
            title: "What the ECG Sees",
            content: "On an ECG strip, sinus rhythm shows evenly spaced beats, each preceded by a small bump (the P wave) as the atria contract. In AFib, the P waves vanish into a wavering baseline, and the big spikes land at random intervals. This is why a 30-second ECG -- from a clinic or a watch -- can diagnose what a lifetime of feeling your pulse might miss.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO STRIPS, TWO STORIES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Even spacing vs electrical static</text>
                    <rect x="80" y="170" width="940" height="280" rx="20" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">NORMAL SINUS RHYTHM</text>
                    <path d="M130 350 L230 350 L245 340 L260 350 L280 350 L290 270 L300 350 L330 350 L345 340 L360 350 L380 350 L390 270 L400 350 L430 350 L445 340 L460 350 L480 350 L490 270 L500 350 L530 350 L545 340 L560 350 L580 350 L590 270 L600 350 L630 350 L645 340 L660 350 L680 350 L690 270 L700 350 L730 350 L745 340 L760 350 L780 350 L790 270 L800 350 L830 350 L845 340 L860 350 L880 350 L890 270 L900 350 L970 350" stroke="#10b981" stroke-width="3" fill="none"/>
                    <text x="550" y="415" text-anchor="middle" fill="#888" font-size="16">P wave before every spike -- even spacing</text>
                    <rect x="80" y="490" width="940" height="280" rx="20" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ATRIAL FIBRILLATION</text>
                    <path d="M130 670 L145 664 L160 674 L175 662 L190 672 L200 590 L210 670 L225 662 L240 674 L255 664 L270 672 L278 590 L286 670 L300 662 L315 674 L330 664 L350 672 L358 590 L366 670 L385 662 L405 674 L425 664 L450 672 L458 590 L466 670 L480 662 L495 674 L510 664 L525 672 L533 590 L541 670 L560 662 L585 674 L610 664 L640 672 L648 590 L656 670 L675 662 L695 674 L715 664 L730 672 L738 590 L746 670 L765 662 L790 674 L815 664 L845 672 L853 590 L861 670 L880 662 L900 674 L920 664 L970 670" stroke="#ef4444" stroke-width="3" fill="none"/>
                    <text x="550" y="735" text-anchor="middle" fill="#888" font-size="16">No P waves -- wavering baseline, random spikes</text>
                    <rect x="200" y="830" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="19">A 30-second ECG can catch what years</text>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="19">of routine checkups might miss</text>
                </svg>`,
                caption: "Sinus rhythm vs AFib as they appear on an ECG strip"
            }
        },
        {
            type: "concept",
            title: "Symptoms -- and the Silent Third",
            content: "What does AFib feel like? For many people:\n\n• **Palpitations** -- fluttering, pounding, or a fish-flopping sensation in the chest\n• **Fatigue** -- the lost atrial kick trims cardiac output, so stairs feel steeper\n• **Breathlessness** -- especially with exertion\n• **Dizziness or lightheadedness** -- from a fast or inefficient rhythm\n\nBut here is the fact that should change your behavior: **up to a third of people with AFib feel nothing at all**. Silent AFib is routinely discovered by accident -- a pre-surgery ECG, a blood pressure cuff that flags an irregular pulse, or increasingly, a smartwatch notification.\n\nSilent does not mean safe. The stroke risk you will meet on the next card does not care whether you can feel the rhythm. In fact, silent AFib may be more dangerous in practice, because nothing pushes you to get treated.\n\nRisk rises steeply with **age** -- AFib affects fewer than 1 in 50 people under 60 but roughly 1 in 10 over 80. It also tracks with high blood pressure, obesity, sleep apnea, diabetes, heavy alcohol use, and hyperthyroidism. Notice how many of those are the same characters from earlier lessons -- the heart's villains travel in a pack.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW AFIB FEELS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">And for many -- how it doesn't</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">PALPITATIONS</text>
                    <text x="300" y="275" text-anchor="middle" fill="#888" font-size="16">Fluttering, pounding chest</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">FATIGUE</text>
                    <text x="800" y="275" text-anchor="middle" fill="#888" font-size="16">Stairs suddenly feel steeper</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">BREATHLESSNESS</text>
                    <text x="300" y="495" text-anchor="middle" fill="#888" font-size="16">Especially with exertion</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">DIZZINESS</text>
                    <text x="800" y="495" text-anchor="middle" fill="#888" font-size="16">Lightheaded, unsteady</text>
                    <rect x="150" y="620" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">THE SILENT THIRD</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="19">Up to 1 in 3 people with AFib feel NOTHING</text>
                    <text x="550" y="770" text-anchor="middle" fill="#888" font-size="16">Found by accident: checkups, cuffs, smartwatches</text>
                    <text x="550" y="805" text-anchor="middle" fill="#888" font-size="16">Silent does not mean safe -- stroke risk is the same</text>
                </svg>`,
                caption: "Common AFib symptoms -- and the silent cases that feel like nothing"
            }
        },
        {
            type: "quiz",
            question: "Which statement about AFib symptoms is TRUE?",
            options: [
                { text: "AFib always causes obvious palpitations, so you would know if you had it", correct: false },
                { text: "Up to a third of people with AFib have no symptoms at all", correct: true },
                { text: "AFib only causes symptoms during exercise, never at rest", correct: false },
                { text: "If AFib is silent, it carries no stroke risk and needs no treatment", correct: false }
            ],
            explanation: "Up to one in three people with AFib feel nothing -- their arrhythmia is discovered by accident on an ECG, a blood pressure cuff, or a smartwatch. The most dangerous misconception is the last option: stroke risk comes from blood pooling and clotting in the quivering atria, which happens whether or not you can feel the rhythm. Silent AFib deserves the same protection as symptomatic AFib -- that is exactly why screening conversations matter.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SILENT AFIB</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">Can a serious arrhythmia hide</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">without any symptoms?</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Think about how silent cases get found</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">KEY IDEA</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">Stroke risk does not require symptoms</text>
                </svg>`,
                caption: "Test yourself on the silent side of AFib"
            }
        },
        {
            type: "concept",
            title: "The Real Danger Is Stroke",
            content: "AFib's quivering rarely kills directly. The mortal danger is what happens to **still blood**.\n\nWhen the atria stop truly contracting, blood pools -- especially in a small pouch off the left atrium called the **left atrial appendage**. Pooled blood clots. If a clot breaks loose, it rides the bloodstream straight up to the brain and blocks an artery there. That is an **embolic stroke**, and AFib-related strokes tend to be larger and more disabling than average, because the clots are big.\n\nOverall, AFib raises stroke risk about **five-fold** -- but that average hides huge variation. Doctors estimate YOUR risk with a score called **CHA2DS2-VASc**. In plain language, it adds a point (or two) for each of:\n\n• **C**ongestive heart failure\n• **H**ypertension\n• **A**ge 65-74 (one point) or 75+ (two points)\n• **D**iabetes\n• Prior **S**troke or mini-stroke (two points)\n• **V**ascular disease\n• Female **s**ex\n\nThe higher the score, the higher the yearly stroke risk -- and the stronger the case for protection. A younger person with zero points may need no blood thinner at all; a 76-year-old with high blood pressure and diabetes almost certainly does. The score turns a scary average into a personal, actionable number.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STILL BLOOD CLOTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The path from quiver to stroke</text>
                    <rect x="60" y="180" width="300" height="140" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="235" text-anchor="middle" fill="#fff" font-size="18">Atria quiver --</text>
                    <text x="210" y="270" text-anchor="middle" fill="#fff" font-size="18">blood pools</text>
                    <path d="M360 250 L410 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="420,250 406,242 406,258" fill="#14b8a6"/>
                    <rect x="420" y="180" width="300" height="140" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="570" y="235" text-anchor="middle" fill="#fff" font-size="18">Clot forms in the</text>
                    <text x="570" y="270" text-anchor="middle" fill="#fff" font-size="18">atrial appendage</text>
                    <path d="M720 250 L770 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="780,250 766,242 766,258" fill="#14b8a6"/>
                    <rect x="780" y="180" width="260" height="140" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="910" y="235" text-anchor="middle" fill="#fff" font-size="18">Clot travels</text>
                    <text x="910" y="270" text-anchor="middle" fill="#fff" font-size="18">to the brain</text>
                    <rect x="150" y="400" width="800" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="450" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">EMBOLIC STROKE -- RISK UP ~5x</text>
                    <text x="550" y="492" text-anchor="middle" fill="#888" font-size="16">AFib strokes tend to be larger and more disabling</text>
                    <rect x="150" y="580" width="800" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CHA2DS2-VASc: YOUR PERSONAL SCORE</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">Heart failure • Hypertension • Age • Diabetes</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="18">Prior stroke (2 pts) • Vascular disease • Sex</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="16">Higher score = higher yearly stroke risk</text>
                    <text x="550" y="820" text-anchor="middle" fill="#888" font-size="16">= stronger case for anticoagulation</text>
                </svg>`,
                caption: "How AFib causes stroke, and how CHA2DS2-VASc personalizes the risk"
            }
        },
        {
            type: "concept",
            title: "Blood Thinners: The Honest Trade",
            content: "If clots are the danger, the defense is **anticoagulation** -- blood thinners. The modern versions, called **DOACs** (apixaban, rivaroxaban, and cousins), cut AFib stroke risk by roughly **two-thirds** compared to no treatment, and in trials they matched or beat old-school warfarin with less brain bleeding and no dietary restrictions or routine blood tests.\n\nNow the honest part: anticoagulants make you bleed more easily. Nosebleeds, easy bruising, and -- rarely but seriously -- major bleeding. That is a real cost, and it is why the CHA2DS2-VASc score exists: guidelines recommend anticoagulation when yearly stroke risk clearly outweighs bleeding risk, which for most people with a score of 2 or more, it does. Strokes tend to be more devastating and less reversible than most bleeds -- that asymmetry drives the math.\n\nAnd one myth needs a firm burial: **aspirin is NOT adequate stroke protection in AFib**. Trials like AVERROES showed apixaban prevented far more strokes than aspirin with similar major bleeding. Aspirin targets platelets; AFib clots are built differently -- from stagnant blood -- and need a true anticoagulant. If someone you love takes a daily baby aspirin 'for their AFib,' that is a conversation with a doctor waiting to happen.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST TRADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What anticoagulants give -- and cost</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE BENEFIT</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="44">~2/3</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="18">reduction in stroke risk</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">DOACs: no diet rules,</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">no routine blood tests</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE COST</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">Easier bruising and bleeding</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">Rare major bleeds</text>
                    <text x="810" y="395" text-anchor="middle" fill="#888" font-size="16">Guidelines treat when stroke</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="16">risk clearly outweighs this</text>
                    <rect x="150" y="570" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">MYTH: ASPIRIN PROTECTS IN AFIB</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="18">It does not -- AFib clots need true anticoagulants</text>
                    <text x="550" y="715" text-anchor="middle" fill="#888" font-size="16">AVERROES: apixaban far better, similar major bleeding</text>
                </svg>`,
                caption: "DOACs cut stroke risk about two-thirds; aspirin is not enough"
            }
        },
        {
            type: "example",
            title: "419,297 Apple Watches",
            content: "Can a consumer gadget really catch AFib? In 2019, the **Apple Heart Study** -- published in the New England Journal of Medicine -- answered with data from **419,297 participants**, one of the largest screening studies ever run.\n\nHow it worked: Apple Watches passively checked pulse rhythm. If repeated irregularity was detected, the participant got a notification and was mailed a medical-grade **ECG patch** to wear for a week.\n\nThe results:\n\n• Only **0.52 percent** of participants got an irregular-rhythm notification over about 8 months -- the watch was not crying wolf constantly\n• Among notified people who wore the patch, **34 percent** were confirmed to have AFib (paroxysmal AFib comes and goes, so a one-week patch misses some)\n• Most importantly: when a watch notification and the patch overlapped in time, the notification had a **positive predictive value of about 84 percent** -- when the watch said 'irregular,' it was usually right\n\nThe takeaway is a division of labor: **watches screen, ECGs diagnose**. A notification is not a diagnosis -- it is a strong nudge to get a real ECG. And no notification is not an all-clear. If your watch flags you, do not silence it and move on; book the appointment.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE APPLE HEART STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">NEJM 2019 -- 419,297 participants</text>
                    <rect x="80" y="180" width="300" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">NOTIFIED</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">0.52%</text>
                    <text x="230" y="365" text-anchor="middle" fill="#888" font-size="15">of participants flagged</text>
                    <rect x="400" y="180" width="300" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CONFIRMED</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">34%</text>
                    <text x="550" y="365" text-anchor="middle" fill="#888" font-size="15">had AFib on ECG patch</text>
                    <rect x="720" y="180" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ACCURACY</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">~84%</text>
                    <text x="870" y="365" text-anchor="middle" fill="#888" font-size="15">predictive value vs patch</text>
                    <rect x="150" y="470" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="530" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">WATCHES SCREEN. ECGS DIAGNOSE.</text>
                    <text x="550" y="578" text-anchor="middle" fill="#fff" font-size="18">A notification is a nudge to book a real ECG --</text>
                    <text x="550" y="610" text-anchor="middle" fill="#888" font-size="16">not a diagnosis, and silence is not an all-clear</text>
                </svg>`,
                caption: "What 419,297 smartwatches taught medicine about AFib screening"
            }
        },
        {
            type: "example",
            title: "Holiday Heart and the LEGACY Effect",
            content: "AFib is unusually responsive to lifestyle -- two studies prove it with numbers.\n\n**Alcohol**: Emergency doctors coined 'holiday heart syndrome' decades ago for AFib appearing after binges. In 2020, a randomized trial in the New England Journal of Medicine tested the reverse: **140 regular drinkers with AFib** were randomized to abstain (or nearly so) versus continue drinking. Over six months, AFib recurred in **53 percent of abstainers versus 73 percent of continuing drinkers** -- and abstainers who did recur spent far less time in AFib. Alcohol is one of the clearest, most modifiable AFib triggers known.\n\n**Weight**: The Australian **LEGACY study** followed 355 overweight patients with AFib. Those who lost **10 percent or more of body weight** were about **six times more likely** to stay free of AFib without drugs or ablation than those who lost little. Some patients' hearts remodeled enough that their arrhythmia essentially faded away.\n\n**Sleep apnea** belongs in the same category: untreated apnea repeatedly stretches and stresses the atria all night, and treating it improves the success of every other AFib therapy.\n\nThe message: AFib is not purely electrical bad luck. The storm has dials -- alcohol, weight, sleep -- and they are in reach.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STORM HAS DIALS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two trials that changed AFib care</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">ALCOHOL RCT, NEJM 2020</text>
                    <text x="290" y="280" text-anchor="middle" fill="#888" font-size="16">140 drinkers with AFib, 6 months</text>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="19">Abstainers: 53% recurred</text>
                    <text x="290" y="385" text-anchor="middle" fill="#fff" font-size="19">Drinkers: 73% recurred</text>
                    <text x="290" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Abstinence cut recurrence</text>
                    <text x="290" y="478" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">and AFib burden sharply</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">LEGACY STUDY</text>
                    <text x="810" y="280" text-anchor="middle" fill="#888" font-size="16">355 overweight AFib patients</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">~6x</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="18">more likely AFib-free with</text>
                    <text x="810" y="440" text-anchor="middle" fill="#fff" font-size="18">10%+ weight loss</text>
                    <text x="810" y="490" text-anchor="middle" fill="#888" font-size="16">Some hearts remodeled back</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">DON'T FORGET SLEEP APNEA</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">Treating it boosts every other AFib therapy</text>
                </svg>`,
                caption: "Alcohol abstinence and weight loss measurably reduce AFib"
            }
        },
        {
            type: "concept",
            title: "The Athlete's Paradox",
            content: "Time for an honest wrinkle. Everything in this book says exercise protects your heart -- and it does. Moderate, regular exercise clearly **lowers** AFib risk, along with blood pressure, weight, and sleep apnea.\n\nBut at the extreme end, the curve bends. Multiple studies and meta-analyses find that **lifelong, high-volume endurance athletes** -- think decades of marathons, long-course triathlons, serious cycling -- have a **modestly increased AFib risk**, with estimates commonly in the range of two- to five-fold versus non-athletes. Middle-aged male endurance veterans show it most clearly.\n\nWhy would extreme exercise backfire in this one narrow way? Leading explanations: years of high-output training can **stretch and enlarge the atria**, raise vagal nerve tone (which shortens atrial recovery time), and leave micro-scarring -- together creating tissue where chaotic wavelets can circulate.\n\nKeep this in perspective:\n\n• The absolute risk remains small, and endurance athletes still live **longer** and have less heart disease overall\n• This applies to extreme, multi-decade volumes -- not your 5K habit or gym routine\n• For 95+ percent of people, the AFib problem is too little movement, not too much\n\nHonesty cuts both ways: exercise is medicine, and like any medicine, the dose-response curve is not a straight line forever.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ATHLETE'S PARADOX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">AFib risk across the exercise spectrum</text>
                    <rect x="80" y="180" width="300" height="260" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SEDENTARY</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="17">Higher AFib risk via</text>
                    <text x="230" y="322" text-anchor="middle" fill="#fff" font-size="17">weight, BP, apnea</text>
                    <text x="230" y="380" text-anchor="middle" fill="#888" font-size="15">The common problem</text>
                    <rect x="400" y="180" width="300" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MODERATE</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="17">LOWEST AFib risk</text>
                    <text x="550" y="322" text-anchor="middle" fill="#fff" font-size="17">Best overall health</text>
                    <text x="550" y="380" text-anchor="middle" fill="#888" font-size="15">The sweet spot</text>
                    <rect x="720" y="180" width="300" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">EXTREME</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="17">Decades of endurance:</text>
                    <text x="870" y="322" text-anchor="middle" fill="#fff" font-size="17">~2-5x AFib risk</text>
                    <text x="870" y="380" text-anchor="middle" fill="#888" font-size="15">Stretched, scarred atria</text>
                    <rect x="150" y="510" width="800" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">PERSPECTIVE</text>
                    <text x="550" y="608" text-anchor="middle" fill="#fff" font-size="18">Endurance athletes still live longer overall --</text>
                    <text x="550" y="642" text-anchor="middle" fill="#888" font-size="16">and for most people the problem is too little movement</text>
                </svg>`,
                caption: "The J-shaped relationship between exercise volume and AFib risk"
            }
        },
        {
            type: "concept",
            title: "Rate, Rhythm, or Burn -- and the Red Flags",
            content: "If AFib is diagnosed, treatment has three broad tracks (beyond the anticoagulation decision, which is separate and comes first):\n\n• **Rate control**: Accept the AFib but slow it down with beta blockers or similar drugs, so the ventricles are not racing. Simple, safe, often enough for people with few symptoms\n• **Rhythm control**: Restore normal sinus rhythm -- with antiarrhythmic drugs or a brief electrical **cardioversion**. The EAST-AFNET 4 trial (2020) found that starting rhythm control early after diagnosis reduced cardiovascular events versus waiting\n• **Catheter ablation**: An electrophysiologist threads a catheter into the heart and creates tiny scar lines -- usually isolating the pulmonary veins, where most AFib triggers live. For many patients, especially with paroxysmal AFib, it beats drugs at keeping rhythm\n\nNone of this is homework you need to master -- your cardiologist will. What IS your homework: knowing when palpitations mean **now**, not next month. See a doctor promptly for any recurrent fluttering. But treat it as **urgent -- call emergency services** -- if palpitations come with:\n\n• **Chest pain or pressure**\n• **Fainting** or near-fainting\n• **Severe breathlessness**\n\nThose combinations can signal a heart attack, dangerous rhythm, or heart failure -- not a wait-and-see situation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE TREATMENT TRACKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Plus the red flags you must know</text>
                    <rect x="80" y="170" width="300" height="240" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">RATE CONTROL</text>
                    <text x="230" y="275" text-anchor="middle" fill="#fff" font-size="16">Slow the ventricles,</text>
                    <text x="230" y="305" text-anchor="middle" fill="#fff" font-size="16">accept the AFib</text>
                    <text x="230" y="355" text-anchor="middle" fill="#888" font-size="15">Beta blockers, simple</text>
                    <rect x="400" y="170" width="300" height="240" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RHYTHM CONTROL</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="16">Restore sinus rhythm --</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="16">drugs or cardioversion</text>
                    <text x="550" y="355" text-anchor="middle" fill="#888" font-size="15">Early is better (EAST)</text>
                    <rect x="720" y="170" width="300" height="240" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">ABLATION</text>
                    <text x="870" y="275" text-anchor="middle" fill="#fff" font-size="16">Scar lines isolate the</text>
                    <text x="870" y="305" text-anchor="middle" fill="#fff" font-size="16">trigger zones</text>
                    <text x="870" y="355" text-anchor="middle" fill="#888" font-size="15">Often beats drugs</text>
                    <rect x="150" y="480" width="800" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="540" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">PALPITATIONS + ANY OF THESE = 911</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="19">• Chest pain or pressure</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="19">• Fainting or near-fainting</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="19">• Severe breathlessness</text>
                    <text x="550" y="745" text-anchor="middle" fill="#888" font-size="16">These combinations are urgent -- not wait-and-see</text>
                </svg>`,
                caption: "Rate control, rhythm control, ablation -- and when to call 911"
            }
        },
        {
            type: "application",
            title: "Your AFib Radar: Five Moves",
            content: "You now know more about AFib than most people ever will. Put it to work:\n\n1. **Learn the 30-second pulse check** -- Fingers on your wrist, feel the rhythm, not just the rate. Steady like a metronome, or chaotic with no pattern? Do it monthly after 50\n\n2. **Set up your wearable properly** -- If you own a smartwatch, turn on irregular-rhythm notifications. If it ever flags you, book a real ECG -- do not just dismiss the alert\n\n3. **Audit your alcohol** -- The NEJM trial showed near-abstinence cut AFib recurrence sharply. If you have palpitations after drinking nights, that pattern is data\n\n4. **Take snoring seriously** -- Loud snoring plus daytime exhaustion warrants a sleep apnea screen. Treating apnea protects your atria all night, every night\n\n5. **Memorize the red flags** -- Palpitations WITH chest pain, fainting, or severe breathlessness means emergency services now. Everything else palpitation-related means a prompt, non-panicked doctor visit",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR AFIB RADAR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves that cost almost nothing</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="220" text-anchor="start" fill="#fff" font-size="18">Learn the 30-second pulse check</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="16">Feel for rhythm, not just rate -- monthly after 50</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="370" text-anchor="start" fill="#fff" font-size="18">Turn on wearable rhythm notifications</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="16">A flag means: book a real ECG</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="520" text-anchor="start" fill="#fff" font-size="18">Audit your alcohol honestly</text>
                    <text x="245" y="555" text-anchor="start" fill="#888" font-size="16">Post-drinking palpitations are data</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="670" text-anchor="start" fill="#fff" font-size="18">Take snoring seriously -- screen for apnea</text>
                    <text x="245" y="705" text-anchor="start" fill="#888" font-size="16">Treated apnea protects your atria nightly</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="820" text-anchor="start" fill="#fff" font-size="18">Memorize the red flags</text>
                    <text x="245" y="855" text-anchor="start" fill="#888" font-size="16">Palpitations + chest pain, fainting, or</text>
                    <text x="245" y="880" text-anchor="start" fill="#888" font-size="16">severe breathlessness = 911</text>
                </svg>`,
                caption: "Five practical steps to catch and calm the electrical storm"
            }
        },
        {
            type: "quiz",
            question: "Your uncle has AFib and a CHA2DS2-VASc score of 4. He skips his prescribed anticoagulant and takes a daily baby aspirin instead, saying it 'thins the blood just fine.' What does the evidence say?",
            options: [
                { text: "He is right -- aspirin provides similar stroke protection with less bleeding", correct: false },
                { text: "Aspirin is not adequate for AFib; anticoagulants cut stroke risk about two-thirds and are what guidelines recommend at his risk level", correct: true },
                { text: "Neither drug helps -- only ablation prevents AFib strokes", correct: false },
                { text: "He needs no protection because his AFib episodes cause no symptoms", correct: false }
            ],
            explanation: "AFib clots form in stagnant atrial blood and need a true anticoagulant; aspirin mainly targets platelets and barely dents AFib stroke risk. In the AVERROES trial, apixaban prevented far more strokes than aspirin with similar rates of major bleeding. With a score of 4, his yearly stroke risk clearly outweighs bleeding risk. And symptoms are irrelevant -- silent AFib strokes just as effectively as the kind you can feel. This is a conversation for his doctor, soon.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE ASPIRIN MYTH</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">AFib clots form in stagnant blood --</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">what kind of drug do they need?</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Think back to the honest trade</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">REMEMBER</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">Anticoagulants cut AFib stroke risk ~2/3</text>
                </svg>`,
                caption: "Final check: why aspirin is not enough in AFib"
            }
        }
    ]
},
{
    id: 9,
    title: "Warning Signs: Minutes Matter",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Seven Minutes That Could Save a Life",
            content: "Every lesson in this book makes you healthier over years. This one is different: it could matter **tonight** -- for you, your partner, your parent, or a stranger in a restaurant.\n\nHere is the uncomfortable math. Roughly **half of heart attack deaths happen before the person reaches a hospital**, and the single biggest reason is delay: people wait, on average, **more than two hours** before calling for help. Not because the pain is bearable -- because they are not sure, and they do not want to make a fuss.\n\nThis lesson teaches you exactly what heart attacks, strokes, and cardiac arrest look like -- including the patterns more common in women that get missed -- and exactly what to do, in order, in the first five minutes. Read it carefully. Then share it with the people you eat dinner with. Nothing here replaces a doctor, but recognizing an emergency is not a medical skill. It is a life skill.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MINUTES MATTER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The lesson to share with your family</text>
                    <rect x="60" y="180" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE PROBLEM</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">2+ hrs</text>
                    <text x="290" y="365" text-anchor="middle" fill="#888" font-size="16">average delay before</text>
                    <text x="290" y="395" text-anchor="middle" fill="#888" font-size="16">calling for help</text>
                    <rect x="580" y="180" width="460" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE STAKES</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">~50%</text>
                    <text x="810" y="365" text-anchor="middle" fill="#888" font-size="16">of heart attack deaths occur</text>
                    <text x="810" y="395" text-anchor="middle" fill="#888" font-size="16">before reaching a hospital</text>
                    <rect x="150" y="530" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE FIX</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="18">Recognize fast. Call fast. Act fast.</text>
                </svg>`,
                caption: "Delay is the deadliest symptom of all"
            }
        },
        {
            type: "concept",
            title: "What a Heart Attack Actually Feels Like",
            content: "Forget the movie version -- the man clutching his chest and collapsing. Real heart attacks are usually quieter, and that is what makes them deadly.\n\nThe classic presentation:\n\n• **Chest pressure, squeezing, fullness, or tightness** -- often described as an elephant sitting on the chest, a tight band, or crushing heaviness. Many patients insist it is not 'pain' at all\n• **Radiation** -- discomfort spreading to the **left arm, both arms, jaw, neck, back, or upper stomach**\n• **Cold sweat** -- sudden, drenching, out of proportion to the room\n• **Nausea** or vomiting\n• **Shortness of breath** -- with or without chest discomfort\n• **Lightheadedness** or a sense of doom patients later describe as 'something is very wrong'\n\nThe symptoms often build over minutes, may wax and wane, and frequently start during exertion or stress -- but can begin at rest or even wake you from sleep.\n\nThe rule that saves lives: **chest discomfort or these companion symptoms lasting more than about five minutes -- or going away and coming back -- means call emergency services**. Not 'wait and see.' Not 'sleep it off.' Not a web search. Five minutes, then the phone.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CLASSIC SIGNS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pressure, not always pain</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">CHEST PRESSURE</text>
                    <text x="300" y="270" text-anchor="middle" fill="#888" font-size="16">Squeezing, tightness, heaviness</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">RADIATION</text>
                    <text x="800" y="270" text-anchor="middle" fill="#888" font-size="16">Arm, jaw, neck, back, stomach</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">COLD SWEAT</text>
                    <text x="300" y="490" text-anchor="middle" fill="#888" font-size="16">Sudden, drenching</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NAUSEA + BREATHLESSNESS</text>
                    <text x="800" y="490" text-anchor="middle" fill="#888" font-size="16">With or without chest symptoms</text>
                    <rect x="150" y="630" width="800" height="180" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="695" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">THE 5-MINUTE RULE</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="19">Symptoms lasting over ~5 minutes,</text>
                    <text x="550" y="780" text-anchor="middle" fill="#fff" font-size="19">or returning after fading: CALL 911</text>
                </svg>`,
                caption: "Classic heart attack signs and the five-minute rule"
            }
        },
        {
            type: "concept",
            title: "What Women Need to Know",
            content: "Let's mythbust carefully, because both versions of this story get women killed.\n\n**Myth 1: Women have completely different heart attacks.** False -- and dangerous, because it makes women dismiss chest symptoms. **Chest pain or discomfort is still the most common heart attack symptom in women**, just as in men.\n\n**Myth 2: Women's heart attacks look identical to men's.** Also false. Women are more likely to have **additional** symptoms alongside chest discomfort -- or occasionally instead of it:\n\n• **Nausea or vomiting**\n• **Jaw, neck, or back pain**\n• **Unusual, crushing fatigue** -- sometimes for days beforehand\n• **Shortness of breath** without much chest discomfort\n• **Lightheadedness**\n\nBecause these can read as flu, stress, or indigestion, women wait longer to seek help and are misdiagnosed more often -- by themselves AND by professionals. The full picture matters: several vague symptoms **clustered together and new** deserve the same 911 response as crushing chest pressure.\n\nOne more pattern worth knowing: women more often have heart attacks without a large blocked artery -- from spasm, small-vessel disease, or spontaneous artery tears (**SCAD**, a leading cause of heart attack in younger women, including around pregnancy). Normal-looking arteries do not always mean a normal heart. Advocate for yourself.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WOMEN'S HEART ATTACKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two myths, both dangerous</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">STILL TRUE FOR WOMEN</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">Chest pain or discomfort remains the</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="18">MOST COMMON symptom -- never dismiss it</text>
                    <rect x="150" y="380" width="800" height="300" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">MORE COMMON IN WOMEN -- OFTEN TOGETHER</text>
                    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="18">• Nausea or vomiting</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="18">• Jaw, neck, or back pain</text>
                    <text x="550" y="570" text-anchor="middle" fill="#fff" font-size="18">• Crushing, unusual fatigue</text>
                    <text x="550" y="610" text-anchor="middle" fill="#fff" font-size="18">• Breathlessness, lightheadedness</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">Several NEW vague symptoms clustered = act</text>
                    <rect x="150" y="750" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ALSO KNOW: SCAD</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="17">Artery tears -- a leading cause of heart attack</text>
                    <text x="550" y="877" text-anchor="middle" fill="#888" font-size="16">in younger women, including around pregnancy</text>
                </svg>`,
                caption: "Chest discomfort still leads in women -- but the cluster matters"
            }
        },
        {
            type: "example",
            title: "The Yentl Syndrome: A Deadly Gap",
            content: "In 1991, cardiologist Dr. Bernadine Healy -- the first woman to head the US National Institutes of Health -- named a pattern she kept seeing: women had to present **like men** to be taken seriously by cardiology. She called it the **Yentl syndrome**, and thirty years of data have proven her right.\n\n• A landmark 2000 New England Journal of Medicine study of over 10,000 ER patients found that **women under 55 were about seven times more likely** than average to be mistakenly sent home in the middle of a heart attack -- often labeled anxiety, reflux, or muscle strain\n• The VIRGO study of young heart attack survivors found women were **more likely to have sought care beforehand and been told it was not their heart**\n• Younger women who do get treated still die at higher rates after heart attacks than men the same age -- a mortality gap that has narrowed but persists\n• Women also wait longer than men, on average, before calling for help -- frequently finishing tasks or waiting for symptoms to pass\n\nThe lesson is not paranoia; it is persistence. If you are a woman with a symptom cluster from the previous card, say the words **'I think this could be my heart'** -- to the dispatcher, to the triage nurse, to the doctor. Those words change what tests get ordered. And if the answer does not fit how sick you feel, ask directly: **'How do we know it is not my heart?'**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE YENTL SYNDROME</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Named by Dr. Bernadine Healy, 1991</text>
                    <rect x="150" y="170" width="800" height="210" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">NEJM 2000: 10,000+ ER PATIENTS</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="38">~7x</text>
                    <text x="550" y="340" text-anchor="middle" fill="#888" font-size="16">more likely for women under 55 to be mistakenly</text>
                    <text x="550" y="368" text-anchor="middle" fill="#888" font-size="16">discharged mid-heart-attack</text>
                    <rect x="60" y="440" width="460" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="495" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MISREAD BEFORE</text>
                    <text x="290" y="540" text-anchor="middle" fill="#fff" font-size="16">VIRGO: young women often</text>
                    <text x="290" y="570" text-anchor="middle" fill="#fff" font-size="16">sought care and were told</text>
                    <text x="290" y="600" text-anchor="middle" fill="#fff" font-size="16">it was not their heart</text>
                    <rect x="580" y="440" width="460" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="495" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">DELAY + OUTCOMES</text>
                    <text x="810" y="540" text-anchor="middle" fill="#fff" font-size="16">Women call later on average;</text>
                    <text x="810" y="570" text-anchor="middle" fill="#fff" font-size="16">younger women still face a</text>
                    <text x="810" y="600" text-anchor="middle" fill="#fff" font-size="16">post-heart-attack mortality gap</text>
                    <rect x="150" y="730" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE MAGIC WORDS</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="18">'I think this could be my heart' -- say it out loud</text>
                </svg>`,
                caption: "The evidence behind the diagnosis gap -- and how to close it yourself"
            }
        },
        {
            type: "quiz",
            question: "Which statement about heart attack symptoms in women is accurate?",
            options: [
                { text: "Women rarely have chest pain, so chest symptoms in women are usually harmless", correct: false },
                { text: "Chest discomfort is still the most common symptom in women, but nausea, jaw or back pain, unusual fatigue, and breathlessness are more often part of the picture", correct: true },
                { text: "Women's heart attacks are identical to men's in every way", correct: false },
                { text: "Fatigue alone in a woman is always a heart attack and requires an ambulance", correct: false }
            ],
            explanation: "Both extreme versions of the story are wrong. Chest pain or discomfort remains the number one heart attack symptom in women -- so it must never be dismissed. But women more often have companion symptoms like nausea, jaw, neck or back pain, unusual crushing fatigue, and breathlessness, sometimes with minimal chest discomfort. The actionable rule: a cluster of new, unexplained symptoms deserves emergency evaluation, and everyday fatigue by itself does not -- context and combination are everything.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">SYMPTOMS BY SEX</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">What stays the same for women --</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">and what is more common?</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Beware both myths</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">HINT</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">Chest discomfort still ranks first -- plus more</text>
                </svg>`,
                caption: "Test yourself on women's heart attack presentations"
            }
        },
        {
            type: "concept",
            title: "The First Five Minutes: Exactly What to Do",
            content: "You suspect a heart attack -- in yourself or someone else. Here is the sequence, in order:\n\n1. **Call 911 immediately.** Say 'possible heart attack' and your address first, in case the call drops\n\n2. **Do NOT drive yourself, and do not let a loved one drive you.** This is not about traffic. Paramedics start treatment the moment they arrive -- oxygen if needed, ECG transmitted ahead to the hospital, defibrillator on hand if your heart stops en route. An ambulance patient often bypasses the waiting room entirely; a car patient does not. About 1 in 10 heart attack patients deteriorates dangerously in the first hour -- you do not want that to happen behind a steering wheel\n\n3. **Aspirin -- if advised.** If the 911 dispatcher or your doctor says yes and you have no allergy or bleeding disorder: **chew** (do not swallow whole) one regular 325 mg aspirin. Chewing gets it working in minutes, slowing the clot's growth\n\n4. **Unlock the front door**, then **sit or lie down**. Exertion feeds the damage; an unlocked door means paramedics reach you even if you pass out\n\n5. **Do not eat, drink, or take anything else** unless told to\n\nWrite this on something. Better: finish this lesson's application card and make it a family document.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIRST FIVE MINUTES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">In this order -- memorize it</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="200" y="220" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">1.</text>
                    <text x="250" y="220" text-anchor="start" fill="#fff" font-weight="bold" font-size="20">CALL 911 -- say 'possible heart attack'</text>
                    <text x="250" y="258" text-anchor="start" fill="#888" font-size="16">Address first, in case the call drops</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">2.</text>
                    <text x="250" y="370" text-anchor="start" fill="#fff" font-size="18">Do NOT drive -- wait for EMS</text>
                    <text x="250" y="405" text-anchor="start" fill="#888" font-size="16">Treatment starts on arrival; they carry a defibrillator</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">3.</text>
                    <text x="250" y="520" text-anchor="start" fill="#fff" font-size="18">CHEW a 325 mg aspirin -- if advised, no allergy</text>
                    <text x="250" y="555" text-anchor="start" fill="#888" font-size="16">Chewing works in minutes, slows the clot</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">4.</text>
                    <text x="250" y="670" text-anchor="start" fill="#fff" font-size="18">Unlock the door, then sit or lie down</text>
                    <text x="250" y="705" text-anchor="start" fill="#888" font-size="16">Paramedics can reach you even if you pass out</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">5.</text>
                    <text x="250" y="820" text-anchor="start" fill="#fff" font-size="18">Nothing else by mouth unless told</text>
                    <text x="250" y="855" text-anchor="start" fill="#888" font-size="16">No food, no drink, no other pills</text>
                </svg>`,
                caption: "The five-step emergency sequence for a suspected heart attack"
            }
        },
        {
            type: "concept",
            title: "Time Is Muscle",
            content: "Cardiologists have a three-word mantra: **time is muscle**. From the moment a coronary artery clots shut, downstream heart muscle begins dying -- and dead heart muscle never grows back. It becomes scar, permanently weakening the pump.\n\nThe treatment is emergency **angioplasty**: threading a balloon and stent to reopen the artery. Hospitals obsess over **door-to-balloon time** -- the goal is under **90 minutes** from hospital arrival, and studies show mortality climbs meaningfully with every additional half hour of total delay. The artery can often be reopened brilliantly at hour one; by hour six, much of what it fed is gone.\n\nNow the human problem. The dangerous delay usually is not the hospital's -- it is the **hours people spend deciding**. The classic inner monologue: 'It is probably nothing. I do not want to bother anyone. Imagine the embarrassment if it is just gas.'\n\nAnswer that voice now, while you are calm:\n\n• ER staff **want** your false alarms. Ruling out a heart attack is their bread and butter, and no good clinician resents it\n• The embarrassing outcome is not a negative workup. It is the one where you waited\n• You cannot diagnose yourself. Even cardiologists cannot -- without an ECG and blood tests\n\nDecide today, in advance: **when in doubt, you call**. People who pre-decide act faster.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TIME IS MUSCLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dead heart muscle never grows back</text>
                    <rect x="80" y="180" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HOUR 1</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="16">Artery reopened:</text>
                    <text x="230" y="320" text-anchor="middle" fill="#fff" font-size="16">most muscle saved</text>
                    <rect x="400" y="180" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HOUR 3</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="16">Damage spreading --</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="16">every 30 min costs lives</text>
                    <rect x="720" y="180" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HOUR 6+</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="16">Much of the territory</text>
                    <text x="870" y="320" text-anchor="middle" fill="#fff" font-size="16">is permanent scar</text>
                    <rect x="150" y="470" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DOOR-TO-BALLOON GOAL: UNDER 90 MIN</text>
                    <text x="550" y="570" text-anchor="middle" fill="#888" font-size="16">Hospitals drill for it -- the slow step is usually the patient</text>
                    <rect x="150" y="680" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">ER STAFF WANT YOUR FALSE ALARMS</text>
                    <text x="550" y="785" text-anchor="middle" fill="#fff" font-size="18">The embarrassing outcome is not a negative test --</text>
                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="18">it is the hours you spent deciding</text>
                </svg>`,
                caption: "Why every 30 minutes of delay permanently costs heart muscle"
            }
        },
        {
            type: "concept",
            title: "Stroke: BE-FAST",
            content: "A stroke is the brain's version of the same emergency: an artery blocked (or bleeding), downstream tissue dying. The brain is even less forgiving -- an untreated large stroke destroys roughly **1.9 million neurons every minute**.\n\nStroke symptoms are different: usually **painless**, sudden, and one-sided. Memorize **BE-FAST**:\n\n• **B -- Balance**: Sudden loss of balance or coordination\n• **E -- Eyes**: Sudden vision loss or double vision in one or both eyes\n• **F -- Face**: Ask them to smile. Does one side droop?\n• **A -- Arms**: Ask them to raise both arms. Does one drift down?\n• **S -- Speech**: Ask them to repeat a simple sentence. Slurred, garbled, or wrong words?\n• **T -- Time**: Any ONE of these, even if it fades -- call 911 and note the time symptoms started\n\nWhy the clock matters so much: **clot-busting drugs** work within about **3 to 4.5 hours** of symptom onset, and mechanical **thrombectomy** -- physically pulling the clot out -- can help selected patients up to 24 hours. Every treatment decision hinges on when symptoms began, which is why 'last seen normal' is the first question paramedics ask.\n\nOne trap to avoid: symptoms that vanish after minutes (a **TIA**, or mini-stroke) still mean 911. A TIA is a dress rehearsal -- the risk of a full stroke in the following days is at its highest.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BE-FAST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~1.9 million neurons lost per minute</text>
                    <rect x="80" y="170" width="440" height="130" rx="18" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="24">B</text>
                    <text x="175" y="222" text-anchor="start" fill="#fff" font-size="18">Balance suddenly lost</text>
                    <rect x="580" y="170" width="440" height="130" rx="18" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="630" y="222" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="24">E</text>
                    <text x="675" y="222" text-anchor="start" fill="#fff" font-size="18">Eyes -- sudden vision loss</text>
                    <rect x="80" y="330" width="440" height="130" rx="18" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="130" y="382" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="24">F</text>
                    <text x="175" y="382" text-anchor="start" fill="#fff" font-size="18">Face droops on one side</text>
                    <rect x="580" y="330" width="440" height="130" rx="18" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="630" y="382" text-anchor="start" fill="#14b8a6" font-weight="bold" font-size="24">A</text>
                    <text x="675" y="382" text-anchor="start" fill="#fff" font-size="18">Arm drifts down</text>
                    <rect x="80" y="490" width="440" height="130" rx="18" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="130" y="542" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="24">S</text>
                    <text x="175" y="542" text-anchor="start" fill="#fff" font-size="18">Speech slurred or garbled</text>
                    <rect x="580" y="490" width="440" height="130" rx="18" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="630" y="542" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="24">T</text>
                    <text x="675" y="530" text-anchor="start" fill="#fff" font-size="17">Time: call 911, note</text>
                    <text x="675" y="560" text-anchor="start" fill="#fff" font-size="17">when symptoms began</text>
                    <rect x="150" y="690" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="745" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE WINDOWS</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="17">Clot-busters: ~3-4.5 hours • Thrombectomy: up to 24</text>
                    <text x="550" y="828" text-anchor="middle" fill="#888" font-size="16">Symptoms that vanish (TIA) still mean 911 -- highest risk days follow</text>
                </svg>`,
                caption: "The BE-FAST stroke check -- one sign is enough to call"
            }
        },
        {
            type: "concept",
            title: "Plumbing vs Electricity: Cardiac Arrest",
            content: "People use 'heart attack' for everything, but two different emergencies need two different responses.\n\n**Heart attack = plumbing.** A clot blocks blood flow to heart muscle. The person is usually **awake and talking** -- in pain, but conscious. Response: the five-step sequence you learned.\n\n**Cardiac arrest = electricity.** The heart's rhythm degenerates into chaos (often ventricular fibrillation) and it stops pumping entirely. The person **collapses, is unresponsive, and is not breathing normally** -- maybe just occasional gasps (agonal breathing -- it is not real breathing). Brain damage begins within about four minutes. A heart attack can trigger an arrest, which is one more reason not to drive yourself.\n\nIf someone collapses and is not breathing normally:\n\n1. **Call 911** (or point at a specific person: 'YOU -- call 911')\n2. **Push hard and fast** on the center of the chest -- at least 2 inches deep, **100-120 compressions per minute**. The song 'Stayin' Alive' is that exact tempo. Do not stop until help arrives\n3. **Send someone for an AED** -- the defibrillators mounted in gyms, airports, offices. They are designed for untrained users: open it, and it literally talks you through everything. It will not shock anyone who does not need it\n\nNo mouth-to-mouth required -- **hands-only CPR** is the standard for untrained bystanders, and it **doubles or triples survival**. You cannot hurt someone who is already in arrest. The only mistake is doing nothing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PLUMBING VS ELECTRICITY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two emergencies, two responses</text>
                    <rect x="60" y="170" width="460" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">HEART ATTACK</text>
                    <text x="290" y="270" text-anchor="middle" fill="#888" font-size="16">A plumbing problem: clot</text>
                    <text x="290" y="300" text-anchor="middle" fill="#888" font-size="16">blocks flow to heart muscle</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="18">Usually awake and talking</text>
                    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="18">Response: 911 + 5 steps</text>
                    <rect x="580" y="170" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">CARDIAC ARREST</text>
                    <text x="810" y="270" text-anchor="middle" fill="#888" font-size="16">An electrical problem: rhythm</text>
                    <text x="810" y="300" text-anchor="middle" fill="#888" font-size="16">collapses, pumping stops</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="18">Collapsed, unresponsive,</text>
                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="18">not breathing normally</text>
                    <text x="810" y="425" text-anchor="middle" fill="#fff" font-size="18">Response: CPR + AED NOW</text>
                    <rect x="150" y="520" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HANDS-ONLY CPR</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="18">Center of chest • 2+ inches deep • 100-120/min</text>
                    <text x="550" y="663" text-anchor="middle" fill="#fff" font-size="18">The 'Stayin' Alive' tempo -- no mouth-to-mouth needed</text>
                    <rect x="150" y="790" width="800" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">AEDs ARE IDIOT-PROOF BY DESIGN</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="17">Open it -- it talks you through every step</text>
                </svg>`,
                caption: "Heart attack vs cardiac arrest -- and the bystander response that saves lives"
            }
        },
        {
            type: "example",
            title: "Proof That Bystanders Save Lives",
            content: "Does pushing on a stranger's chest really matter? Two natural experiments say yes, emphatically.\n\n**Seattle and King County, Washington** has spent decades building the world's best-drilled bystander response: CPR taught in schools, dispatchers coaching callers through compressions by phone, AEDs mapped and everywhere. The result: survival from witnessed cardiac arrest with a shockable rhythm has reached roughly **50 percent or better** there -- several times the US national average, which sits near 10 percent for out-of-hospital arrests overall. Same human hearts, same medicine. The difference is bystanders who act in the first four minutes.\n\n**Denmark ran the experiment at national scale.** Starting in the mid-2000s, CPR training became mandatory in schools and for driver's licenses. Between 2001 and 2010, bystander CPR rates roughly **doubled, from about 21 percent to 45 percent** of arrests -- and 30-day survival after out-of-hospital cardiac arrest roughly **tripled** (Wissenberg and colleagues, JAMA 2013).\n\nRead those numbers again: the biggest survival gains in modern resuscitation did not come from a new drug or device. They came from **ordinary people deciding, in advance, that they would act**. That can be you by the end of this lesson -- the application card makes it official.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BYSTANDERS SAVE LIVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two natural experiments, one conclusion</text>
                    <rect x="60" y="180" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">KING COUNTY, WA</text>
                    <text x="290" y="280" text-anchor="middle" fill="#888" font-size="16">Decades of CPR culture + AEDs</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">~50%</text>
                    <text x="290" y="405" text-anchor="middle" fill="#fff" font-size="16">survival, witnessed shockable</text>
                    <text x="290" y="435" text-anchor="middle" fill="#fff" font-size="16">arrests -- vs ~10% US average</text>
                    <rect x="580" y="180" width="460" height="340" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DENMARK, 2001-2010</text>
                    <text x="810" y="280" text-anchor="middle" fill="#888" font-size="16">CPR taught in schools + licenses</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="18">Bystander CPR: 21% to 45%</text>
                    <text x="810" y="400" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">3x</text>
                    <text x="810" y="450" text-anchor="middle" fill="#fff" font-size="16">30-day survival</text>
                    <text x="810" y="480" text-anchor="middle" fill="#888" font-size="15">Wissenberg, JAMA 2013</text>
                    <rect x="150" y="590" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#ffd700" font-size="19">The biggest survival gains came from ordinary</text>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="19">people who decided in advance to act</text>
                </svg>`,
                caption: "King County and Denmark: what happens when bystanders act"
            }
        },
        {
            type: "concept",
            title: "Angina vs the Alarm Bell",
            content: "Not every chest symptom is a 911 call -- so learn the pattern that separates 'see a doctor soon' from 'call now.'\n\n**Stable angina** is the predictable kind: chest pressure that shows up with a familiar trigger -- climbing the hill, shoveling snow, a heated argument -- and fades within minutes of rest. It means a plaque is narrowing an artery enough to limit flow under load. It absolutely needs a doctor's evaluation, medications, maybe testing -- but it is an appointment, not an ambulance, as long as the pattern stays stable.\n\n**Unstable patterns are the alarm bell.** Call emergency services when angina:\n\n• Shows up **at rest** or wakes you from sleep\n• Is **new and severe**\n• Becomes **more frequent, longer, or easier to trigger** than your usual pattern (crescendo)\n• Stops responding to rest or prescribed nitroglycerin\n\nUnstable angina often means a plaque has ruptured and a clot is forming -- a heart attack trying to happen.\n\nAnd the 'indigestion' caveat: heart attacks are misattributed to indigestion constantly, especially when discomfort sits in the upper abdomen with nausea. Real clue: antacids fixing it within minutes points toward the stomach; 'indigestion' that comes with sweating, breathlessness, or exertion -- or a first-ever episode in someone with risk factors -- deserves emergency evaluation. When the two stories are hard to tell apart, medicine's answer is simple: let the ER tell them apart.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">APPOINTMENT OR AMBULANCE?</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stable pattern vs alarm bell</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">STABLE ANGINA</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Predictable trigger --</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="17">the same hill, same effort</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="17">Fades within minutes of rest</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Needs a doctor SOON --</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">but it is an appointment</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="810" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">UNSTABLE = 911</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">• At rest or during sleep</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="17">• New and severe</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="17">• Crescendo: more often, longer</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="17">• Not relieved by rest or nitro</text>
                    <text x="810" y="460" text-anchor="middle" fill="#888" font-size="16">A heart attack trying to happen</text>
                    <rect x="150" y="610" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE 'INDIGESTION' TRAP</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">Indigestion with sweating, breathlessness, or exertion</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="17">is not indigestion until an ER says so</text>
                </svg>`,
                caption: "Stable angina warrants an appointment; unstable changes warrant 911"
            }
        },
        {
            type: "application",
            title: "The Family Emergency Drill",
            content: "Fire drills exist because nobody thinks clearly during a fire. Heart emergencies deserve the same 15-minute preparation. Do this with your household this week:\n\n1. **Assign the caller** -- Agree now: whoever witnesses symptoms calls 911 immediately. No family vote, no 'let's wait 20 minutes.' Pre-decision beats debate\n\n2. **Stage the aspirin** -- Put regular 325 mg aspirin in a labeled spot everyone knows (kitchen shelf, medicine cabinet). Check it is not enteric-coated and not expired\n\n3. **Know your hospital** -- Look up the nearest ER now -- and ideally which nearby hospital has a 24/7 cardiac cath lab. Write both inside a cabinet door\n\n4. **Book a CPR class this month** -- Hands-only CPR takes under an hour to learn. Search for classes at your local hospital, fire department, or community center. Note where the AEDs live at your work and gym\n\n5. **Post the two lists** -- BE-FAST and the heart attack signs (including the women's cluster) on the fridge, plus each family member's medications and allergies for paramedics\n\nFifteen minutes of preparation converts panic into a checklist. That conversion is worth more than almost anything else in this book.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FAMILY DRILL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fifteen minutes now beats panic later</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="220" text-anchor="start" fill="#fff" font-size="18">Assign the caller -- witness dials 911, no debate</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="16">Pre-decision beats deliberation</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="370" text-anchor="start" fill="#fff" font-size="18">Stage 325 mg aspirin in a known spot</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="16">Not enteric-coated, not expired</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="520" text-anchor="start" fill="#fff" font-size="18">Know your nearest ER and cath-lab hospital</text>
                    <text x="245" y="555" text-anchor="start" fill="#888" font-size="16">Write it inside a cabinet door</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="670" text-anchor="start" fill="#fff" font-size="18">Book a hands-only CPR class this month</text>
                    <text x="245" y="705" text-anchor="start" fill="#888" font-size="16">Under an hour -- note AED locations too</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="820" text-anchor="start" fill="#fff" font-size="18">Post BE-FAST + heart attack signs on the fridge</text>
                    <text x="245" y="855" text-anchor="start" fill="#888" font-size="16">Plus meds and allergies for paramedics</text>
                </svg>`,
                caption: "Your household's 15-minute emergency preparation checklist"
            }
        },
        {
            type: "quiz",
            question: "At a restaurant, a man collapses. He is unresponsive and only gasping occasionally. What is the correct response?",
            options: [
                { text: "Drive him to the ER yourself -- it is faster than waiting for an ambulance", correct: false },
                { text: "Have him chew an aspirin and sit quietly until he feels better", correct: false },
                { text: "Call 911, start hands-only chest compressions at 100-120 per minute, and send someone for an AED", correct: true },
                { text: "Wait a minute or two -- if the gasping continues, he is breathing and just needs space", correct: false }
            ],
            explanation: "Collapsed, unresponsive, and not breathing normally means cardiac arrest -- occasional gasps are agonal breathing, not real breathing. The pump has stopped; aspirin and car rides treat nothing, and waiting costs brain tissue within about four minutes. Call 911, push hard and fast on the center of the chest at the 'Stayin' Alive' tempo, and get an AED, which talks untrained users through every step. Bystander CPR doubles or triples survival. The only wrong move is doing nothing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">COLLAPSED + NOT BREATHING NORMALLY</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">Is this plumbing -- or electricity?</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Gasps are agonal breathing, not breathing</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="16">Brain damage starts in ~4 minutes</text>
                    <rect x="250" y="420" width="600" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">REMEMBER</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">911 -- push hard and fast -- send for the AED</text>
                </svg>`,
                caption: "Final check: the cardiac arrest response"
            }
        }
    ]
},
{
    id: 10,
    title: "Moving for Your Heart",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Vital Sign Nobody Measures",
            content: "Imagine a lab value that predicted your risk of dying better than smoking status, better than diabetes, better than blood pressure -- and imagine your doctor never once checked it. That value exists. It is called **aerobic fitness**, and in 2018 the Cleveland Clinic published data on 122,007 people who took a treadmill test to find out exactly how much it matters.\n\nThe answer: more than almost anything else you can change.\n\nThis lesson is about movement -- not as punishment, not as a weight-loss tool, but as the single most powerful drug your heart has access to. You will learn the real dose (it is smaller than you think to start), why a conversational-pace walk builds the engine, why one weekly dash of intensity matters, and why even one-minute bursts of stair climbing show up in the mortality data. By the end, you will know exactly what to do this week.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HIDDEN VITAL SIGN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What predicts survival best?</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">Blood pressure</text>
                    <text x="900" y="215" text-anchor="end" fill="#888" font-size="18">measured every visit</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="335" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">Cholesterol</text>
                    <text x="900" y="335" text-anchor="end" fill="#888" font-size="18">checked every few years</text>
                    <rect x="150" y="410" width="800" height="140" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="465" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">Aerobic fitness (VO2max)</text>
                    <text x="200" y="510" text-anchor="start" fill="#fff" font-size="18">One of the strongest mortality predictors known</text>
                    <text x="900" y="465" text-anchor="end" fill="#888" font-size="16">almost never measured</text>
                    <rect x="200" y="620" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="20">The good news: you can change it at any age</text>
                </svg>`,
                caption: "Fitness is a vital sign your doctor rarely checks -- but the data says it matters enormously"
            }
        },
        {
            type: "concept",
            title: "Fitness vs. Smoking: The 122,000-Person Answer",
            content: "In 2018, Mandsager and colleagues published a study in **JAMA Network Open** analyzing **122,007 patients** who completed treadmill exercise tests at the Cleveland Clinic, followed for a median of about 8 years.\n\nThe findings were startling:\n\n• **Low fitness carried a mortality risk comparable to -- or worse than -- smoking, diabetes, or coronary artery disease**\n• People in the lowest fitness group had roughly **five times** the adjusted risk of death of the most fit group\n• Going from low fitness to even below-average fitness was associated with a large survival difference\n• **No upper limit to the benefit was found** -- the elite-fitness group did best of all, even among people over 70\n\nTwo honest caveats: this is observational data (fit people differ in many ways), and treadmill performance partly reflects underlying health. But the pattern holds across dozens of studies: **cardiorespiratory fitness is one of the strongest predictors of how long you live** that medicine has ever measured.\n\nThe practical translation: being unfit is a modifiable risk factor on the same shelf as smoking. And unlike your genes, you can change it starting today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MANDSAGER 2018</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">122,007 treadmill tests, Cleveland Clinic</text>
                    <text x="550" y="165" text-anchor="middle" fill="#fff" font-size="20">Relative risk of death by fitness level</text>
                    <rect x="150" y="220" width="700" height="70" rx="14" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="263" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">Low fitness</text>
                    <text x="820" y="263" text-anchor="end" fill="#fff" font-size="18">~5x risk</text>
                    <rect x="150" y="320" width="560" height="70" rx="14" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="363" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">Below average</text>
                    <rect x="150" y="420" width="420" height="70" rx="14" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="463" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">Above average</text>
                    <rect x="150" y="520" width="300" height="70" rx="14" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="563" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">High</text>
                    <rect x="150" y="620" width="220" height="70" rx="14" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="663" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">Elite</text>
                    <text x="420" y="663" text-anchor="start" fill="#888" font-size="16">lowest risk of all</text>
                    <rect x="150" y="740" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="20">Low fitness rivaled smoking and diabetes as a risk</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="16">No upper limit to benefit was found</text>
                </svg>`,
                caption: "The lower your fitness, the higher your mortality risk -- with no ceiling on the benefit of being fitter"
            }
        },
        {
            type: "concept",
            title: "The Dose: Where the Curve Is Steepest",
            content: "The official guidelines say **150-300 minutes per week of moderate activity** (brisk walking counts) or **75-150 minutes of vigorous activity**, plus strength training. That is the target. But here is the part most people miss:\n\n**The dose-response curve is steepest at the bottom.**\n\n• Going from **nothing to 15 minutes a day** buys the single biggest chunk of benefit\n• Each additional block of activity helps, but by smaller amounts\n• The difference between couch and a daily walk is far larger than the difference between a daily walk and marathon training\n\nThe landmark evidence comes from **Wen and colleagues, published in The Lancet in 2011**: a cohort of over **416,000 people in Taiwan** followed for an average of 8 years. Compared with inactive people, those doing just **15 minutes a day** of moderate exercise had roughly **14% lower all-cause mortality** and about **3 years longer life expectancy**. Every extra 15 minutes a day cut mortality by a further ~4%.\n\nIf you currently do nothing, you are standing at the steepest, most rewarding part of the entire curve. A 15-minute daily walk is not a consolation prize -- it is the best deal in preventive medicine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DOSE-RESPONSE CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Benefit rises fastest at the bottom</text>
                    <line x1="150" y1="700" x2="1000" y2="700" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="700" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="575" y="750" text-anchor="middle" fill="#888" font-size="18">Minutes of activity per day</text>
                    <text x="120" y="440" text-anchor="middle" fill="#888" font-size="18" transform="rotate(-90 120 440)">Mortality benefit</text>
                    <path d="M150 700 Q 280 340 480 280 T 980 220" stroke="#10b981" stroke-width="5" fill="none"/>
                    <circle cx="300" cy="360" r="14" fill="#ffd700"/>
                    <text x="300" y="670" text-anchor="middle" fill="#fff" font-size="18">15 min</text>
                    <rect x="330" y="300" width="380" height="90" rx="14" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="520" y="338" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">Biggest single gain</text>
                    <text x="520" y="370" text-anchor="middle" fill="#fff" font-size="16">~14% lower mortality (Wen 2011)</text>
                    <text x="650" y="670" text-anchor="middle" fill="#fff" font-size="18">30 min</text>
                    <text x="900" y="670" text-anchor="middle" fill="#fff" font-size="18">60+ min</text>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Target: 150-300 min/week moderate</text>
                    <text x="550" y="895" text-anchor="middle" fill="#888" font-size="16">or 75-150 min vigorous, plus strength 2x/week</text>
                </svg>`,
                caption: "The steep start of the curve: from nothing to 15 minutes a day is the best trade in medicine"
            }
        },
        {
            type: "example",
            title: "Three Years for Fifteen Minutes",
            content: "Picture two neighbors in Taipei, both 45 years old, both enrolled in the massive Taiwanese cohort that Wen's team followed for The Lancet study.\n\n**Neighbor one** does no structured exercise. Work, commute, couch.\n\n**Neighbor two** walks briskly for **15 minutes every evening** -- around the block, nothing heroic. That is 105 minutes a week, well under the official guideline.\n\nOver the 8-year follow-up, people in neighbor two's category had:\n\n• **~14% lower all-cause mortality**\n• **~10% lower cancer mortality**\n• Roughly **3 additional years** of life expectancy\n\nThe researchers called this the **minimum amount of exercise for reduced mortality** -- and it required no gym, no equipment, no lycra.\n\nWhy does this matter to you? Because the most common reason people do nothing is that they believe anything less than an hour is pointless. The data says the opposite: **the first 15 minutes are the most valuable minutes you will ever move.** Start there. The guideline dose can come later.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WEN 2011, THE LANCET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">416,000 people in Taiwan, 8 years</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INACTIVE</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">No regular activity</text>
                    <text x="290" y="325" text-anchor="middle" fill="#888" font-size="16">Reference group</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">Baseline mortality risk</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">15 MIN / DAY</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">A brisk evening walk</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">~14% lower mortality</text>
                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="18">~3 extra years of life</text>
                    <text x="810" y="435" text-anchor="middle" fill="#888" font-size="16">Each extra 15 min: ~4% more</text>
                    <rect x="150" y="600" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="20">The first 15 minutes are the most valuable</text>
                    <text x="550" y="675" text-anchor="middle" fill="#888" font-size="16">No gym required -- a walk around the block counts</text>
                </svg>`,
                caption: "Fifteen minutes a day of brisk walking bought roughly three years of life in the Taiwan cohort"
            }
        },
        {
            type: "quiz",
            question: "Based on the dose-response data from Wen 2011 and others, which change in activity level buys the LARGEST single chunk of mortality benefit?",
            options: [
                { text: "Going from 30 minutes a day to 60 minutes a day", correct: false },
                { text: "Going from nothing to about 15 minutes a day", correct: true },
                { text: "Going from walking to running the same duration", correct: false },
                { text: "Going from 150 to 300 minutes per week", correct: false }
            ],
            explanation: "The dose-response curve is steepest at the very bottom. In the 416,000-person Taiwan cohort (Wen 2011, The Lancet), just 15 minutes a day of moderate activity was associated with roughly 14% lower all-cause mortality and about 3 extra years of life versus doing nothing. Additional exercise keeps helping -- there is no clear upper limit -- but each added block yields smaller returns than that first step off the couch. The most tempting wrong answers describe real but smaller incremental gains.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DOSE-RESPONSE CURVE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Where on the curve is the benefit steepest?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think about who gains the most from a small change</text>
                    <path d="M250 700 Q 400 420 550 380 T 900 330" stroke="#10b981" stroke-width="5" fill="none"/>
                    <line x1="250" y1="700" x2="950" y2="700" stroke="#888" stroke-width="2"/>
                    <circle cx="380" cy="440" r="14" fill="#ffd700"/>
                    <text x="380" y="500" text-anchor="middle" fill="#ffd700" font-size="18">?</text>
                </svg>`,
                caption: "Test your understanding of the exercise dose-response curve"
            }
        },
        {
            type: "concept",
            title: "Zone 2 Plus a Dash of Intervals",
            content: "You do not need a lab to train smart. Two ingredients cover most of the benefit:\n\n**1. Zone 2 -- the conversational base.** This is effort where you can still **speak in full sentences but could not sing**. It feels almost too easy. Zone 2 work builds your aerobic base: more mitochondria, better fat metabolism, a stronger and more efficient heart. Most of your weekly minutes -- your walks, easy cycling, easy jogging -- should live here.\n\n**2. One weekly dash of intensity for VO2max.** The classic protocol is the **Norwegian 4x4**: 4 minutes hard (breathing heavily, about 85-95% of max heart rate), 3 minutes easy recovery, repeated 4 times. Studies from the Norwegian University of Science and Technology have used it to raise VO2max in everyone from students to heart-failure patients. Once a week is plenty to start.\n\n**3. Strength training 2x per week.** This is not just for muscles: resistance training carries its own **independent association with lower cardiovascular risk** and improves blood pressure, glucose handling, and the ability to stay active into old age. (If you have taken the Strength Blueprint book in this app, this is where the two paths join.)\n\nEasy most days, hard once a week, lift twice. That is the whole recipe.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WEEKLY RECIPE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three ingredients, one strong heart</text>
                    <rect x="80" y="170" width="940" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="130" y="225" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">ZONE 2 -- most of your minutes</text>
                    <text x="130" y="270" text-anchor="start" fill="#fff" font-size="18">Conversational pace: can talk, cannot sing</text>
                    <text x="130" y="310" text-anchor="start" fill="#888" font-size="16">Builds mitochondria, aerobic base, heart efficiency</text>
                    <rect x="80" y="390" width="940" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="130" y="445" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">4x4 INTERVALS -- once a week</text>
                    <text x="130" y="490" text-anchor="start" fill="#fff" font-size="18">4 min hard / 3 min easy, repeated 4 times</text>
                    <text x="130" y="530" text-anchor="start" fill="#888" font-size="16">Raises VO2max -- the Norwegian protocol</text>
                    <rect x="80" y="610" width="940" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="665" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">STRENGTH -- twice a week</text>
                    <text x="130" y="710" text-anchor="start" fill="#fff" font-size="18">Independent cardiovascular benefit</text>
                    <text x="130" y="750" text-anchor="start" fill="#888" font-size="16">Better BP, glucose handling, lifelong capability</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Easy most days. Hard once. Lift twice.</text>
                </svg>`,
                caption: "The three-ingredient training week: Zone 2 base, one 4x4 session, two strength sessions"
            }
        },
        {
            type: "concept",
            title: "What Exercise Actually Does to Your Heart",
            content: "Training does not just burn calories -- it **remodels your cardiovascular system**. Here is the machinery:\n\n• **Stroke volume goes up.** Your heart's chambers enlarge slightly and fill better, so each beat pumps more blood. This is why trained hearts can do more with fewer beats.\n\n• **Resting heart rate goes down.** Endurance athletes often rest in the 40s-50s. A lower resting rate generally means an efficient heart with high vagal (calming) tone.\n\n• **Blood pressure drops roughly 5-8 mmHg** with regular aerobic exercise in people with hypertension -- comparable to a starting dose of medication (recall Lessons 2-3).\n\n• **Insulin sensitivity improves.** Muscle becomes a hungry sponge for glucose, lowering the diabetes pathway to heart disease.\n\n• **Plaque behavior changes.** Exercise does not necessarily shrink plaque, but it appears to promote **more stable, calcified plaque** and better endothelial function -- the fragile, rupture-prone lesions from Lesson 7 are the dangerous ones.\n\nOne curiosity worth naming: long-term athletes can show an enlarged **athlete's heart** and sometimes higher calcium scores of the stable type. These adaptations are overwhelmingly benign -- the mortality curves keep favoring the fit.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TRAINED HEART</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five upgrades from regular movement</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">STROKE VOLUME UP</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="16">More blood per beat</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">RESTING HR DOWN</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="16">Efficiency plus vagal tone</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="425" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">BP DOWN 5-8 mmHg</text>
                    <text x="300" y="470" text-anchor="middle" fill="#fff" font-size="16">Like a starter medication</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">INSULIN SENSITIVITY</text>
                    <text x="800" y="470" text-anchor="middle" fill="#fff" font-size="16">Muscle soaks up glucose</text>
                    <rect x="80" y="570" width="940" height="160" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">PLAQUE STABILIZATION</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="16">Calmer endothelium, more stable lesions (see Lesson 7)</text>
                    <rect x="200" y="780" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="20">Exercise is a systemic drug with 5 mechanisms</text>
                </svg>`,
                caption: "Exercise remodels the whole system: pump, pressure, metabolism, and plaque behavior"
            }
        },
        {
            type: "example",
            title: "One-Minute Bursts: The VILPA Surprise",
            content: "What about people who flatly refuse to exercise? In 2022, Emmanuel Stamatakis and colleagues published a study in **Nature Medicine** using wrist-worn accelerometer data from about **25,000 UK Biobank participants who reported doing no leisure-time exercise at all**.\n\nThe wearables revealed something the questionnaires never could: tiny, incidental bursts of vigorous effort woven into daily life -- **sprinting for a bus, carrying groceries up stairs, playing hard with kids**. The researchers named it **VILPA**: Vigorous Intermittent Lifestyle Physical Activity.\n\nThe finding: non-exercisers who accumulated just **3-4 one-minute bursts per day** had roughly **40% lower cardiovascular mortality** (and ~40% lower all-cause mortality) over about 7 years of follow-up compared with those who had none.\n\nHonest framing, as always: this is **observational** -- people capable of vigorous bursts may simply be healthier -- though the wearable data removes self-report bias, and the dose-response pattern was steep and consistent.\n\nThe takeaway for you: if structured workouts feel impossible, **intensity snacks still count**. Take the stairs two at a time. Walk the hill fast. Three minutes of vigor per day is not nothing -- it may be the highest-leverage three minutes in your schedule.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">VILPA: STAMATAKIS 2022</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">25,000 non-exercisers, wrist wearables</text>
                    <rect x="80" y="170" width="300" height="200" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">STAIRS</text>
                    <text x="230" y="275" text-anchor="middle" fill="#fff" font-size="16">Two at a time,</text>
                    <text x="230" y="305" text-anchor="middle" fill="#fff" font-size="16">1 minute hard</text>
                    <rect x="400" y="170" width="300" height="200" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE BUS DASH</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="16">A brisk uphill</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="16">hustle counts</text>
                    <rect x="720" y="170" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HEAVY BAGS</text>
                    <text x="870" y="275" text-anchor="middle" fill="#fff" font-size="16">Groceries up</text>
                    <text x="870" y="305" text-anchor="middle" fill="#fff" font-size="16">the stairs</text>
                    <rect x="150" y="430" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">3-4 bursts/day = ~40% lower CVD mortality</text>
                    <text x="550" y="540" text-anchor="middle" fill="#888" font-size="16">vs. non-exercisers with zero bursts, ~7-year follow-up</text>
                    <rect x="200" y="640" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="18">Observational data -- but intensity snacks clearly count</text>
                </svg>`,
                caption: "Three or four one-minute vigorous bursts a day tracked with ~40% lower cardiovascular mortality"
            }
        },
        {
            type: "concept",
            title: "The Active Couch Potato Problem",
            content: "Here is an uncomfortable finding: **a morning workout does not fully cancel a day of sitting.**\n\nResearchers call it the **active couch potato** pattern -- someone who exercises 45 minutes, then sits for 10 hours. Long uninterrupted sitting is associated with worse glucose handling, higher triglycerides, and higher cardiovascular risk **even after accounting for exercise**. High volumes of activity (60-75 minutes daily) appear to offset most of the harm, but few people hit that.\n\nWhy would sitting itself matter?\n\n• Leg muscles go electrically silent, and **lipoprotein lipase** activity (which clears fats from blood) plummets\n• Blood pools; glucose after meals stays higher\n• Hours of stillness accumulate like a slow dose\n\nThe fix is not standing all day -- it is **breaking up the sitting**:\n\n• **Movement snacks**: 2-3 minutes of walking or stair climbing every 30-60 minutes\n• Walk during phone calls; pace while thinking\n• A 10-minute walk after meals blunts the glucose spike\n\nThink of it as two separate dials: one for **exercise** (turn it up weekly) and one for **sedentary time** (break it up daily). Your heart wants both dials turned.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO SEPARATE DIALS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Exercise does not fully cancel sitting</text>
                    <rect x="60" y="180" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ACTIVE COUCH POTATO</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">45-min workout at 6am</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">then 10 hours seated</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="16">Fat-clearing enzymes idle</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">Glucose stays elevated</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">Residual risk remains</text>
                    <rect x="580" y="180" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MOVEMENT SNACKER</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Same workout, plus</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">2-3 min walk every hour</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="16">10-min walks after meals</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="16">Muscles clear fat and glucose</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">Both dials turned</text>
                    <rect x="150" y="580" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-size="20">Dial 1: exercise weekly. Dial 2: break up sitting daily.</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">Your heart wants both</text>
                </svg>`,
                caption: "Exercise and sedentary time are separate risk dials -- turn up one, break up the other"
            }
        },
        {
            type: "application",
            title: "Your Movement Plan, Starting This Week",
            content: "Not medical advice -- if you have chest pain, unusual breathlessness, fainting, or known heart disease, see your doctor before ramping up (more on that next card). For everyone else:\n\n1. **Take the talk test today.** On your next walk, push until you can still talk in sentences but not sing. That effort is your Zone 2. Memorize the feel.\n\n2. **Schedule 15 minutes daily.** Anchor it to something you already do -- after dinner works for most people. This is the steep part of the curve; protect it like an appointment.\n\n3. **Add movement snacks.** Set a timer: every hour of sitting, take 2-3 minutes to walk or climb stairs. Take stairs briskly when they appear -- those are VILPA bursts.\n\n4. **After two weeks, add one 4x4 session.** Four rounds of 4 minutes hard / 3 minutes easy -- brisk hill walking counts. Once a week.\n\n5. **Add strength twice a week.** Even 20 minutes of squats, pushups, and rows moves the needle.\n\nTrack one number: **minutes moved per week**. Nothing else matters until that number is stable.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MOVEMENT PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps, starting this week</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="225" text-anchor="start" fill="#fff" font-size="18">Take the talk test -- find your Zone 2 feel</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="345" text-anchor="start" fill="#fff" font-size="18">15 minutes daily, anchored to dinner</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="465" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="465" text-anchor="start" fill="#fff" font-size="18">Movement snacks every hour of sitting</text>
                    <rect x="150" y="530" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="585" text-anchor="start" fill="#fff" font-size="18">Week 3: add one 4x4 interval session</text>
                    <rect x="150" y="650" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="705" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="705" text-anchor="start" fill="#fff" font-size="18">Strength training twice a week</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">Track one number: minutes moved per week</text>
                </svg>`,
                caption: "Your five-step ramp from zero to a full training week"
            }
        },
        {
            type: "concept",
            title: "Starting Safely -- and the Best Program Nobody Uses",
            content: "Two closing pieces of practical wisdom.\n\n**Starting from zero, safely.** For most people, walking more requires no clearance. But check with a doctor first if you have:\n\n• Chest pain or pressure with exertion\n• Unusual breathlessness, dizziness, or fainting\n• Known heart disease, or you are resuming vigorous exercise after decades off\n\nTwo quick self-checks: the **talk test** (Zone 2 pacing) and the **stairs test** -- if you can climb four flights of stairs in about a minute or less without stopping, research from Spain (presented to the European Society of Cardiology) suggests your functional capacity is likely good.\n\n**Cardiac rehab: the scandal of underuse.** If you or someone you love has a heart attack, stent, or bypass, **cardiac rehabilitation** -- a supervised program of monitored exercise, education, and risk-factor management -- reduces cardiovascular mortality on the order of **20-25%** in meta-analyses and cuts rehospitalization. It is among the most evidence-backed interventions in all of cardiology.\n\nYet **fewer than a third of eligible patients attend**, and referral rates are worse for women and older adults. If it is ever offered to you or a family member: **say yes**. If it is not offered after a cardiac event, ask for it by name.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">START SAFE, FINISH STRONG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Self-checks and the underused program</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">SELF-CHECKS</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">Talk test: sentences yes,</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="18">singing no = Zone 2</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="18">Stairs test: 4 flights</text>
                    <text x="290" y="395" text-anchor="middle" fill="#fff" font-size="18">in ~1 min = good sign</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">Symptoms? See a doctor first</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">CARDIAC REHAB</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">After MI, stent, or bypass</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">~20-25% lower mortality</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="18">Fewer rehospitalizations</text>
                    <text x="810" y="415" text-anchor="middle" fill="#ef4444" font-size="17">Under 1/3 of eligible attend</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">Ask for it by name</text>
                    <rect x="150" y="550" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#ffd700" font-size="20">The best exercise program is the one you attend</text>
                    <text x="550" y="625" text-anchor="middle" fill="#888" font-size="16">Especially the supervised one after a cardiac event</text>
                </svg>`,
                caption: "Two quick self-tests -- and cardiac rehab, the proven program most eligible patients never use"
            }
        },
        {
            type: "quiz",
            question: "A friend who never formally exercises asks whether tiny bursts of effort -- like charging up the stairs -- could really matter. What does the VILPA research (Stamatakis 2022, Nature Medicine) actually show?",
            options: [
                { text: "Bursts under 10 minutes have no measurable cardiovascular effect", correct: false },
                { text: "The wearable data proved that daily bursts cause the same VO2max gains as structured 4x4 interval training", correct: false },
                { text: "One-minute bursts work, but only if paired with 150 weekly minutes of structured exercise", correct: false },
                { text: "Vigorous daily life bursts were associated with ~40% lower CVD mortality -- promising but observational, not proof of cause", correct: true }
            ],
            explanation: "The UK Biobank wearable study found that non-exercisers logging 3-4 one-minute vigorous bursts per day had roughly 40% lower cardiovascular mortality than those with none. But the correct answer includes the crucial caveat: this is observational data -- people capable of vigorous bursts may already be healthier -- so it suggests rather than proves causation. The old idea that only 10-minute-plus bouts count has been dropped from modern guidelines; every vigorous minute appears in the data.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">VILPA</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">One-minute vigorous bursts in daily life</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did the wearable data show -- and what is the caveat?</text>
                    <rect x="200" y="360" width="220" height="120" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="310" y="430" text-anchor="middle" fill="#fff" font-size="18">Burst 1</text>
                    <rect x="440" y="360" width="220" height="120" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#fff" font-size="18">Burst 2</text>
                    <rect x="680" y="360" width="220" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="430" text-anchor="middle" fill="#fff" font-size="18">Burst 3</text>
                    <text x="550" y="560" text-anchor="middle" fill="#888" font-size="18">Association or causation?</text>
                </svg>`,
                caption: "Final check: what the VILPA findings do -- and do not -- prove"
            }
        }
    ]
},
{
    id: 11,
    title: "Eating for Your Heart",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Diet That Actually Has Receipts",
            content: "Nutrition science has a credibility problem, and you have felt it: eggs are villains, then heroes. Fat is deadly, then fine. Coffee kills you on Tuesday and saves you by Friday.\n\nSo let us hold every claim in this lesson to one standard: **show me the trial**.\n\nBy that standard, one eating pattern stands almost alone. In a randomized controlled trial of about 7,400 high-risk adults in Spain, a **Mediterranean diet** supplemented with olive oil or nuts cut major cardiovascular events -- heart attack, stroke, cardiovascular death -- by roughly **30%** compared with standard low-fat advice. Not a mouse study. Not a food-frequency questionnaire. A randomized trial, published in the New England Journal of Medicine.\n\nThis lesson gives you that pattern on an actual plate, tells you the honest truth about fish oil pills, alcohol, coffee, and eggs -- including where the evidence collapsed -- and ends with one plate you could build tonight. As always: education, not a prescription. Your doctor knows your particulars.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SHOW ME THE TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One eating pattern has RCT receipts</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">HEADLINE WHIPLASH</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Eggs bad... eggs fine</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">Fat deadly... fat fine</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="18">Coffee kills... coffee saves</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Weak studies, loud headlines</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE RCT STANDARD</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Randomized trial</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">7,400 people, years long</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="18">Hard outcomes counted</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">This is the bar to clear</text>
                    <rect x="150" y="540" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#ffd700" font-size="20">Mediterranean pattern: ~30% fewer major events</text>
                    <text x="550" y="615" text-anchor="middle" fill="#888" font-size="16">PREDIMED, New England Journal of Medicine</text>
                </svg>`,
                caption: "Holding nutrition claims to the trial standard -- and one pattern clears the bar"
            }
        },
        {
            type: "concept",
            title: "PREDIMED: The Trial That Set the Bar",
            content: "**PREDIMED** (Prevencion con Dieta Mediterranea) randomized about **7,400 Spanish adults** at high cardiovascular risk -- but with no prior events -- into three groups:\n\n• Mediterranean diet + **1 liter of extra-virgin olive oil per week** (free)\n• Mediterranean diet + **30 grams of mixed nuts daily** (free)\n• Control: advice to follow a **low-fat diet**\n\nAfter a median of 4.8 years, both Mediterranean arms showed roughly a **30% relative reduction in major cardiovascular events** (heart attack, stroke, cardiovascular death), driven especially by fewer strokes. The trial was stopped early for benefit.\n\n**Full honesty**: in 2018 the original 2013 NEJM paper was retracted and republished after auditors found randomization irregularities at a few sites (some households were enrolled together). The **re-analysis excluding the problem participants reached the same conclusion** -- the ~30% reduction held.\n\nWhat PREDIMED did NOT show: weight loss (there was none to speak of), or that olive oil is magic on its own. It tested a **whole pattern** -- vegetables, legumes, fish, wine with meals in existing drinkers, little processed meat -- anchored by olive oil or nuts.\n\nOne trial is never everything. But in nutrition, one large randomized trial with hard outcomes is rare treasure.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PREDIMED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">7,400 high-risk adults, ~4.8 years</text>
                    <rect x="80" y="170" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MED + OLIVE OIL</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">1 L extra-virgin</text>
                    <text x="230" y="300" text-anchor="middle" fill="#fff" font-size="16">per week</text>
                    <text x="230" y="350" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">~30% fewer events</text>
                    <rect x="400" y="170" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">MED + NUTS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">30 g mixed nuts</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="16">daily</text>
                    <text x="550" y="350" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">~30% fewer events</text>
                    <rect x="720" y="170" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">LOW-FAT ADVICE</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">Control group</text>
                    <text x="870" y="350" text-anchor="middle" fill="#888" font-size="16">Reference risk</text>
                    <rect x="150" y="450" width="800" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="500" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">2018 RE-ANALYSIS AFTER RETRACTION</text>
                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="17">Randomization issues fixed -- same ~30% result held</text>
                    <rect x="200" y="640" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="20">A whole pattern won -- not a single superfood</text>
                </svg>`,
                caption: "Both Mediterranean arms beat low-fat advice by ~30% on major cardiovascular events"
            }
        },
        {
            type: "concept",
            title: "What Mediterranean Means on a Plate",
            content: "Forget the postcard imagery. The tested pattern is concrete:\n\n• **Olive oil as your primary fat** -- extra-virgin, used generously for cooking and dressing (PREDIMED's dose was about 4 tablespoons a day)\n• **Nuts daily** -- a small handful (~30 g) of walnuts, almonds, hazelnuts\n• **Fish 1-2 times per week**, especially oily fish like salmon, sardines, mackerel\n• **Legumes 3+ times per week** -- beans, lentils, chickpeas\n• **Vegetables at 2+ meals daily; fruit as the default dessert**\n• **Whole grains** over refined -- intact oats, barley, brown rice, real whole-grain bread\n• **Limited red meat, minimal processed meat** -- sausage, bacon, and deli meat are the pattern's clearest villains\n• **Sofrito habit**: tomatoes, onion, garlic simmered in olive oil as a base -- a stand-in for cooking real food at home\n\nWhat it is NOT: pasta mountains, pizza, or a supplement stack. It is also not fragile -- Iranian, Mexican, Japanese, and Southern American kitchens can all hit the same targets: **plants and legumes at the center, olive oil or similar unsaturated fats, fish over processed meat, food cooked at home**.\n\nNotice what this pattern quietly delivers: soluble fiber for LDL, potassium for blood pressure, unsaturated fats replacing saturated -- every lever from Lessons 3-5, on one plate.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PATTERN ON A PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What PREDIMED participants actually ate</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">OLIVE OIL DAILY</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="16">Primary fat, ~4 tbsp/day</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NUTS DAILY</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="16">A 30 g handful</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="425" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">FISH 1-2x / WEEK</text>
                    <text x="300" y="470" text-anchor="middle" fill="#fff" font-size="16">Salmon, sardines, mackerel</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">BEANS 3x / WEEK</text>
                    <text x="800" y="470" text-anchor="middle" fill="#fff" font-size="16">Lentils, chickpeas, beans</text>
                    <rect x="80" y="570" width="440" height="160" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="300" y="625" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">PLANTS + WHOLE GRAINS</text>
                    <text x="300" y="670" text-anchor="middle" fill="#fff" font-size="16">Veg twice daily, fruit dessert</text>
                    <rect x="580" y="570" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="625" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">LIMIT: PROCESSED MEAT</text>
                    <text x="800" y="670" text-anchor="middle" fill="#fff" font-size="16">Bacon, sausage, deli meat</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="19">Any cuisine can hit these targets -- it is a pattern</text>
                </svg>`,
                caption: "The six concrete habits of the tested Mediterranean pattern"
            }
        },
        {
            type: "example",
            title: "Lyon: Feeding People Who Already Had Heart Attacks",
            content: "PREDIMED was prevention. What about people whose hearts have already declared themselves?\n\nThe **Lyon Diet Heart Study** (de Lorgeril and colleagues, France, 1990s) enrolled about **600 patients who had survived a first heart attack** -- the highest-risk population there is -- and randomized them to either a Mediterranean-style diet (rich in vegetables, fruit, fish, and a canola-based spread supplying **alpha-linolenic acid**, a plant omega-3) or the standard prudent diet advice of the era.\n\nThe trial was stopped early. The Mediterranean group showed a **50-70% reduction in recurrent cardiac events** across the study's endpoints over about 4 years -- one of the largest effects ever seen in a dietary trial.\n\nFair caveats: it was a smaller, older trial from one region, the effect size looks almost too good, and the exact mechanism (the plant omega-3? the whole pattern?) is still debated. Modern statin-era patients start from lower risk.\n\nBut the direction of Lyon and PREDIMED agree, in two different countries, two different decades, and two different risk groups: **shifting the whole eating pattern toward plants, fish, and unsaturated fats reduces cardiac events** -- even after the first heart attack has already happened. Food remains medicine at every stage.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LYON DIET HEART STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~600 heart-attack survivors, France</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">STANDARD ADVICE</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Prudent post-MI diet</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">of the early 1990s</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">Higher recurrence rate</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MEDITERRANEAN ARM</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Plants, fish, fruit, plus</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">plant omega-3 (ALA) spread</text>
                    <text x="810" y="380" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">50-70% fewer recurrent events</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="16">Trial stopped early for benefit</text>
                    <rect x="150" y="560" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="20">Food is medicine even after the first heart attack</text>
                    <text x="550" y="635" text-anchor="middle" fill="#888" font-size="16">Older, smaller trial -- but the direction matches PREDIMED</text>
                </svg>`,
                caption: "Secondary prevention: a Mediterranean pattern slashed recurrent events in heart-attack survivors"
            }
        },
        {
            type: "quiz",
            question: "What did the PREDIMED trial demonstrate about the Mediterranean diet?",
            options: [
                { text: "It caused significant weight loss, which explained the cardiovascular benefit", correct: false },
                { text: "Olive oil alone, added to any diet, cuts heart attacks by 30%", correct: false },
                { text: "A Mediterranean pattern with olive oil or nuts cut major cardiovascular events by ~30% vs. low-fat advice", correct: true },
                { text: "It lowered LDL so dramatically that statins became unnecessary for participants", correct: false }
            ],
            explanation: "PREDIMED randomized ~7,400 high-risk adults and found roughly a 30% relative reduction in heart attack, stroke, and cardiovascular death in both Mediterranean arms versus low-fat advice -- a result that survived the 2018 re-analysis after randomization problems were corrected. The tempting wrong answers miss key facts: there was no meaningful weight loss, the trial tested a whole eating pattern rather than olive oil as an isolated supplement, and LDL changes were modest -- nobody should drop prescribed statins because of a diet trial.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">PREDIMED</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">7,400 adults, randomized, hard outcomes</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What exactly did it show?</text>
                    <circle cx="350" cy="450" r="70" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Olive oil</text>
                    <text x="350" y="475" text-anchor="middle" fill="#fff" font-size="15">arm</text>
                    <circle cx="550" cy="450" r="70" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">Nuts</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="15">arm</text>
                    <circle cx="750" cy="450" r="70" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="750" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">Low-fat</text>
                    <text x="750" y="475" text-anchor="middle" fill="#fff" font-size="15">control</text>
                </svg>`,
                caption: "Test your understanding of the trial that set the bar"
            }
        },
        {
            type: "concept",
            title: "Omega-3 Honesty: Eat the Fish, Skip Most Pills",
            content: "Here is where evidence-based eating gets uncomfortable for the supplement aisle.\n\n**Eating fish is well supported.** Populations eating oily fish 1-2 times weekly consistently show lower cardiac risk, and fish anchored both PREDIMED and Lyon. Fish also displaces worse proteins from the plate.\n\n**Fish-oil capsules are another story.** The big modern randomized trials came back null:\n\n• **VITAL (2018)**: 25,871 adults, 1 g/day fish oil -- **no significant reduction** in major cardiovascular events overall\n• **ASCEND (2018)**: 15,480 people with diabetes -- **null** for serious vascular events\n\n**The one big outlier**: **REDUCE-IT (2018)** tested 4 g/day of purified **EPA** (icosapent ethyl) in patients with **high triglycerides already on statins** and found a striking **25% relative reduction** in events. It is genuinely debated -- the mineral-oil placebo may have worsened the control group's numbers, and a similar trial (STRENGTH, using EPA+DHA) was null. Prescription EPA remains a legitimate option for that specific patient group -- a decision for your doctor.\n\nThe practical rule is simple and cheap: **food first**. Two servings of oily fish a week gets you the version of omega-3 the evidence actually supports, and no capsule required.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">OMEGA-3: FOOD VS. PILLS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The trials sorted this out</text>
                    <rect x="60" y="170" width="460" height="280" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">FISH ON THE PLATE</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">Oily fish 1-2x/week</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="18">Consistent lower risk</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Core of PREDIMED + Lyon</text>
                    <text x="290" y="405" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Well supported</text>
                    <rect x="580" y="170" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">FISH-OIL CAPSULES</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">VITAL (25,871): null</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="18">ASCEND (15,480): null</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Routine use unsupported</text>
                    <text x="810" y="405" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">Mostly failed</text>
                    <rect x="150" y="510" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE OUTLIER: REDUCE-IT</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="17">4 g purified EPA, high-triglyceride statin patients: -25% events</text>
                    <text x="550" y="640" text-anchor="middle" fill="#888" font-size="15">Debated (mineral-oil placebo); a doctor-level decision</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Rule of thumb: food first</text>
                </svg>`,
                caption: "Fish on the plate is supported; generic fish-oil pills mostly failed their trials"
            }
        },
        {
            type: "concept",
            title: "Fiber, Salt, Sugar, and the Ultra-Processed Problem",
            content: "Four rapid-fire levers, connecting threads from earlier lessons:\n\n**Soluble fiber lowers LDL** (recall Lesson 5). Oats, barley, beans, and **psyllium husk** form a gel that traps bile acids, forcing your liver to pull cholesterol from the blood to make more. Expect a **5-10% LDL drop** from consistent intake -- small alone, meaningful stacked. Target: 25-38 g total fiber daily, most people get half that.\n\n**Sodium and potassium** (Lesson 3's territory): less packaged food and more produce moves both dials at once. Roughly 70% of dietary sodium comes from processed and restaurant food, not your salt shaker.\n\n**Sugar-sweetened beverages** are the sharpest single swap: regular consumption is associated with higher CVD risk, and liquid sugar spikes triglycerides and insulin with zero satiety. Swap to sparkling water, coffee, or tea and you delete the worst calories in the modern diet.\n\n**Ultra-processed food (UPF)** -- industrial formulations of refined starch, oils, sugar, and additives -- now supplies over half of calories in the US and UK. Large cohorts (like NutriNet-Sante in France) link higher UPF intake to more cardiovascular disease. The evidence is observational and the category is blunt, but the pattern is consistent: **the more of your food that comes with an ingredient list you could not stock in a kitchen, the worse the numbers look**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR RAPID LEVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Small dials that stack</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SOLUBLE FIBER</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="16">Oats, beans, psyllium</text>
                    <text x="300" y="305" text-anchor="middle" fill="#888" font-size="15">LDL down 5-10%</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">SODIUM / POTASSIUM</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="16">70% of sodium is in packaged food</text>
                    <text x="800" y="305" text-anchor="middle" fill="#888" font-size="15">Produce raises potassium (Lesson 3)</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">SUGARY DRINKS</text>
                    <text x="300" y="490" text-anchor="middle" fill="#fff" font-size="16">Liquid sugar, zero satiety</text>
                    <text x="300" y="525" text-anchor="middle" fill="#888" font-size="15">The sharpest single swap</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ULTRA-PROCESSED FOOD</text>
                    <text x="800" y="490" text-anchor="middle" fill="#fff" font-size="16">Over half of US/UK calories</text>
                    <text x="800" y="525" text-anchor="middle" fill="#888" font-size="15">Linked to CVD in cohorts</text>
                    <rect x="150" y="630" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="19">If the ingredient list reads like a lab, eat less of it</text>
                    <text x="550" y="705" text-anchor="middle" fill="#888" font-size="16">Cook-at-home defaults move all four dials at once</text>
                </svg>`,
                caption: "Fiber up, packaged sodium down, sugary drinks out, ultra-processed food minimized"
            }
        },
        {
            type: "example",
            title: "Your Morning Cup Gets a Pass",
            content: "Good news for most of us: **coffee is fine for your heart -- and possibly better than fine.**\n\nLarge cohorts, including hundreds of thousands in the UK Biobank, consistently find that people drinking **2-4 cups a day** have equal or modestly *lower* rates of cardiovascular disease and death than non-drinkers. A 2022 analysis even found the association held for ground, instant, and decaf.\n\nHonesty check: this is **observational** -- coffee drinkers differ from abstainers, and reverse causation lurks (people quit coffee when they feel unwell, making abstainers look sicker). So we say *associated*, not *proven*. But decades of data have failed to show harm at moderate doses, and the old fear that coffee triggers dangerous heart rhythms has not held up -- a 2023 randomized crossover trial (CRAVE) found no increase in premature atrial contractions on coffee days.\n\nPractical notes:\n\n• **2-4 cups a day**: no cardiac reason to quit. Enjoy.\n• **Unfiltered brews** (French press, Turkish) carry cafestol, which can nudge LDL up -- paper filters remove it\n• **Late caffeine** wrecks sleep, and sleep is a cardiac risk factor (Lesson 12 will come back to this)\n• **Tea**, green or black, shows similarly reassuring or favorable associations\n\nThe drink to worry about was never the coffee -- it is what the next card covers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">COFFEE GETS A PASS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What big cohorts show at 2-4 cups/day</text>
                    <rect x="80" y="170" width="940" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="130" y="225" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">UK Biobank + pooled cohorts</text>
                    <text x="130" y="270" text-anchor="start" fill="#fff" font-size="17">2-4 cups/day: equal or modestly lower CVD and mortality</text>
                    <text x="130" y="305" text-anchor="start" fill="#888" font-size="15">Held for ground, instant, and decaf -- observational, not proof</text>
                    <rect x="80" y="380" width="940" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="130" y="435" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">CRAVE trial (2023, randomized crossover)</text>
                    <text x="130" y="480" text-anchor="start" fill="#fff" font-size="17">Coffee days: no rise in premature atrial contractions</text>
                    <text x="130" y="515" text-anchor="start" fill="#888" font-size="15">The palpitation panic mostly did not replicate</text>
                    <rect x="80" y="590" width="940" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="130" y="645" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">Fine print</text>
                    <text x="130" y="685" text-anchor="start" fill="#fff" font-size="16">Paper filters remove LDL-raising cafestol; keep caffeine early for sleep</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">Tea earns a similar pass -- enjoy your cup</text>
                </svg>`,
                caption: "Moderate coffee shows neutral-to-favorable associations -- the panic never had good data"
            }
        },
        {
            type: "concept",
            title: "Alcohol: The J-Curve That Collapsed",
            content: "For decades you heard that a daily glass of red wine protects the heart -- the famous **J-shaped curve** where moderate drinkers outlived teetotalers. Newer, better methods have largely dismantled it.\n\n**Why the old studies misled:**\n\n• **Sick-quitter bias**: the *non-drinker* group in old cohorts was full of people who quit *because* they were ill -- former heavy drinkers, people on medications. Compared to them, moderate drinkers looked healthy. The comparison was rigged by design, not intent.\n• Moderate drinkers also tend to be wealthier, more social, and more insured -- confounding everywhere.\n\n**What better methods show:**\n\n• **Mendelian randomization** (using gene variants that alter alcohol metabolism as a natural experiment -- e.g., Millwood 2019 in China, ~500,000 people) finds **no protective effect** on heart disease and clearly rising stroke risk with intake\n• The **Global Burden of Disease 2018 analysis** in The Lancet concluded the level of drinking that minimized overall health harm was **zero**\n• For **atrial fibrillation** (Lesson 8), risk rises with *any* regular drinking -- roughly 8% higher per daily drink -- and abstinence reduced AFib recurrence in a randomized trial\n\nThe balanced bottom line: light drinking is not a catastrophe, and life has pleasures. But **less is better for the heart, the J-curve was largely an artifact, and no one should start drinking for health**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE COLLAPSING J-CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Better methods, different answer</text>
                    <line x1="150" y1="620" x2="1000" y2="620" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="620" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="575" y="670" text-anchor="middle" fill="#888" font-size="17">Drinks per day</text>
                    <text x="115" y="400" text-anchor="middle" fill="#888" font-size="17" transform="rotate(-90 115 400)">Risk</text>
                    <path d="M180 380 Q 350 480 520 420 T 960 220" stroke="#ef4444" stroke-width="4" fill="none" stroke-dasharray="10"/>
                    <text x="330" y="530" text-anchor="middle" fill="#ef4444" font-size="16">Old J-curve (biased cohorts)</text>
                    <path d="M180 500 L 960 250" stroke="#10b981" stroke-width="5" fill="none"/>
                    <text x="700" y="330" text-anchor="middle" fill="#10b981" font-size="16">Mendelian randomization: risk rises with dose</text>
                    <rect x="80" y="720" width="450" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="305" y="770" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SICK-QUITTER BIAS</text>
                    <text x="305" y="810" text-anchor="middle" fill="#fff" font-size="15">Ill ex-drinkers made abstainers</text>
                    <text x="305" y="840" text-anchor="middle" fill="#fff" font-size="15">look artificially unhealthy</text>
                    <rect x="570" y="720" width="450" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="795" y="770" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">GBD 2018, THE LANCET</text>
                    <text x="795" y="810" text-anchor="middle" fill="#fff" font-size="15">Harm-minimizing dose: zero</text>
                    <text x="795" y="840" text-anchor="middle" fill="#888" font-size="15">AFib risk: ~8% per daily drink</text>
                </svg>`,
                caption: "Genetic studies flattened the J: less alcohol is better for the heart, and none is fine"
            }
        },
        {
            type: "concept",
            title: "The Egg Verdict (and the Myth That Refuses to Die)",
            content: "Time to close out the most persistent myth in heart nutrition.\n\n**The myth**: dietary cholesterol (eggs, shrimp) directly clogs your arteries, so eggs are heart poison.\n\n**The reality** (recall Lessons 4-5): for most people, **cholesterol you eat has surprisingly little effect on cholesterol in your blood**. Your liver manufactures most of your circulating cholesterol and dials its own production up or down in response to intake. That is why the US Dietary Guidelines dropped their long-standing 300 mg dietary cholesterol cap in 2015, noting cholesterol was no longer 'a nutrient of concern for overconsumption' in the old sense.\n\nThe nuance worth keeping:\n\n• **Saturated fat raises LDL far more than dietary cholesterol does** -- the bacon beside the egg matters more than the egg\n• Roughly a quarter of people are **hyper-responders** whose blood lipids do shift with dietary cholesterol -- your lipid panel, not a headline, settles the question for you\n• People with **diabetes** showed less favorable egg associations in some cohorts -- worth a doctor conversation\n• An egg is also 6 g of quality protein, choline, and lutein\n\n**Verdict**: an egg or two a day fits comfortably inside a Mediterranean-style pattern for most people. The question that matters is never one food -- it is what the whole plate looks like. Which brings us to the final card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EGG VERDICT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dietary cholesterol vs. blood cholesterol</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE MYTH</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Eaten cholesterol goes</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">straight into artery plaque</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">1968 advice: max 3 eggs/week</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE REALITY</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Your liver makes most of it</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">and self-adjusts to intake</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">Saturated fat moves LDL more</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">~25% are hyper-responders</text>
                    <rect x="150" y="540" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#ffd700" font-size="20">An egg or two fits the pattern for most people</text>
                    <text x="550" y="615" text-anchor="middle" fill="#888" font-size="16">Your own lipid panel settles it -- not a headline</text>
                </svg>`,
                caption: "The liver, not the omelet, controls most of your blood cholesterol"
            }
        },
        {
            type: "application",
            title: "Build the One Plate Tonight",
            content: "Theory is over. Here is one dinner plate that applies the entire lesson -- build it tonight or this week:\n\n1. **Half the plate: vegetables** -- roasted, sauteed in olive oil, or a big dressed salad. Two kinds if you can.\n\n2. **A quarter: beans or lentils** (or swap in oily fish twice this week -- sardines on toast counts and costs little).\n\n3. **A quarter: intact whole grains** -- barley, farro, brown rice, or good whole-grain bread.\n\n4. **Dress with extra-virgin olive oil**, garlic, lemon; finish with a small handful of nuts somewhere in your day.\n\n5. **Drink water, coffee, or tea** -- zero sugar-sweetened beverages tonight; if you drink alcohol, keep it out or minimal, and never for health.\n\nThen make it repeatable: put oats or psyllium in the morning routine for the LDL lever, keep processed meat off the weekly default, and let fruit be dessert most nights.\n\nOne plate does nothing. The same plate pattern, most nights for a decade, is PREDIMED-grade medicine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ONE PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Tonight's applied nutrition</text>
                    <circle cx="550" cy="450" r="280" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="3"/>
                    <path d="M550 450 L550 170 A280 280 0 0 0 270 450 Z" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <path d="M550 450 L270 450 A280 280 0 0 0 550 730 Z" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <path d="M550 450 L550 730 A280 280 0 0 0 830 450 Z" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <path d="M550 450 L830 450 A280 280 0 0 0 550 170 Z" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="400" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VEGETABLES</text>
                    <text x="400" y="455" text-anchor="middle" fill="#fff" font-size="16">half the plate</text>
                    <text x="680" y="590" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">BEANS / FISH</text>
                    <text x="680" y="625" text-anchor="middle" fill="#fff" font-size="15">a quarter</text>
                    <text x="690" y="330" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">WHOLE GRAINS</text>
                    <text x="690" y="365" text-anchor="middle" fill="#fff" font-size="15">a quarter</text>
                    <text x="550" y="790" text-anchor="middle" fill="#888" font-size="16">Dressed with extra-virgin olive oil + lemon</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Nuts daily, water/coffee/tea to drink</text>
                    <text x="550" y="925" text-anchor="middle" fill="#888" font-size="16">Repeated most nights, this is trial-grade medicine</text>
                </svg>`,
                caption: "Half vegetables, quarter legumes or fish, quarter whole grains, olive oil over everything"
            }
        },
        {
            type: "quiz",
            question: "Your uncle says his nightly two whiskeys are 'protecting his heart -- studies prove it.' Based on current evidence, what is the most accurate response?",
            options: [
                { text: "He is right -- the J-curve shows moderate drinkers outlive abstainers, so daily alcohol is cardioprotective", correct: false },
                { text: "The apparent protection largely came from biased comparisons; genetic studies show no benefit, and AFib risk rises with regular drinking", correct: true },
                { text: "Only red wine protects the heart because of resveratrol -- whiskey does not count", correct: false },
                { text: "Alcohol is so dangerous that even one drink causes measurable heart damage in everyone", correct: false }
            ],
            explanation: "The old J-curve was distorted by sick-quitter bias -- abstainer groups contained people who had quit because of illness -- plus heavy confounding. Mendelian randomization studies like Millwood 2019 (~500,000 people) found no cardiac protection, the GBD 2018 Lancet analysis put the harm-minimizing intake at zero, and atrial fibrillation risk climbs about 8% per daily drink. The final option overcorrects: light drinking is not catastrophic. The honest position is simply that less is better and nobody should drink for their heart.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ALCOHOL AND THE HEART</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">What happened to the protective J-curve?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think: who was in the abstainer group?</text>
                    <path d="M300 550 Q 450 620 600 560 T 850 420" stroke="#ef4444" stroke-width="4" fill="none" stroke-dasharray="10"/>
                    <path d="M300 600 L 850 460" stroke="#10b981" stroke-width="5"/>
                    <text x="360" y="680" text-anchor="middle" fill="#ef4444" font-size="16">Old cohorts</text>
                    <text x="750" y="680" text-anchor="middle" fill="#10b981" font-size="16">Genetic studies</text>
                </svg>`,
                caption: "Final check: the J-curve, the bias that built it, and what replaced it"
            }
        }
    ]
},
{
    id: 12,
    title: "Your Heart Plan",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Eleven Lessons, One Plan",
            content: "You started this book with a fist-sized pump beating 100,000 times a day. Since then you have followed pressure through your arteries, tracked LDL particles into plaque, watched a 50-year disease unfold silently, learned when a rhythm flutter matters, and memorized the warning signs that buy minutes when minutes are everything. Then movement. Then food.\n\nEleven lessons of understanding. This final lesson turns them into **one plan** -- yours.\n\nHere is the truth that makes this worth doing: heart disease is still the world's number one killer, yet the INTERHEART study of 29,000 people across 52 countries found that **about 90% of first heart attacks are attributable to modifiable factors**. Not luck. Not fate. Factors with names, numbers, and levers -- most of which you now understand better than most patients ever will.\n\nWhat follows: the numbers to know, the calculators that translate them into risk, the family and personal history that changes the math, and a 30-day starter plan. Education, not prescription -- your doctor personalizes everything here. But the plan begins with you.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eleven lessons converge here</text>
                    <circle cx="550" cy="470" r="130" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="455" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">YOUR</text>
                    <text x="550" y="495" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">HEART PLAN</text>
                    <circle cx="230" cy="260" r="75" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="255" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">Pressure</text>
                    <text x="230" y="285" text-anchor="middle" fill="#888" font-size="14">L2-3</text>
                    <circle cx="550" cy="200" r="75" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="195" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="17">Cholesterol</text>
                    <text x="550" y="225" text-anchor="middle" fill="#888" font-size="14">L4-6</text>
                    <circle cx="870" cy="260" r="75" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="255" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">Plaque</text>
                    <text x="870" y="285" text-anchor="middle" fill="#888" font-size="14">L7</text>
                    <circle cx="200" cy="600" r="75" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="595" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="17">Rhythm</text>
                    <text x="200" y="625" text-anchor="middle" fill="#888" font-size="14">L8-9</text>
                    <circle cx="900" cy="600" r="75" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="900" y="595" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">Movement</text>
                    <text x="900" y="625" text-anchor="middle" fill="#888" font-size="14">L10</text>
                    <circle cx="550" cy="750" r="75" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="745" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">Food</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="14">L11</text>
                    <line x1="290" y1="310" x2="460" y2="410" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="275" x2="550" y2="340" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="810" y1="310" x2="640" y2="410" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="265" y1="570" x2="430" y2="510" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="835" y1="570" x2="670" y2="510" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="675" x2="550" y2="600" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#10b981" font-size="19">INTERHEART: ~90% of first heart attacks are modifiable</text>
                </svg>`,
                caption: "Every thread of this book converges into a single personal plan"
            }
        },
        {
            type: "concept",
            title: "The Story So Far, In One Card",
            content: "Before building the plan, replay the arc -- because the plan only makes sense if you see how the pieces connect:\n\n• **The engine (L1)**: your heart is a two-sided pump feeding itself through the narrow coronary arteries -- the whole story happens in those few millimeters\n• **Pressure (L2-3)**: high blood pressure silently scars those arteries; home measurement, sodium down, potassium up, and medication when needed\n• **The cholesterol truth (L4-5)**: LDL particles (best tracked by **ApoB**) drive plaque; lifetime exposure is what matters, not one bad reading\n• **Statins (L6)**: cheap, well-studied tools that cut event risk; fear of them hurts more people than side effects do\n• **The 50-year story (L7)**: atherosclerosis starts in your teens and grows silently for decades -- which is why prevention beats rescue\n• **Rhythm (L8)**: AFib matters mainly through stroke risk; alcohol and untreated apnea feed it\n• **Warning signs (L9)**: pressure-like chest discomfort, women's subtler patterns, calling emergency services instead of driving\n• **Movement (L10)** and **Food (L11)**: the two biggest daily levers, each with trial-grade evidence\n\nOne sentence to keep: **heart disease is a decades-long, mostly modifiable process -- so the plan is played in decades, not weeks.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ARC OF THE BOOK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From engine to action</text>
                    <rect x="60" y="180" width="220" height="100" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="170" y="225" text-anchor="middle" fill="#fff" font-size="17">The Engine</text>
                    <text x="170" y="255" text-anchor="middle" fill="#888" font-size="14">L1</text>
                    <path d="M280 230 L340 230" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,230 328,222 328,238" fill="#14b8a6"/>
                    <rect x="340" y="180" width="220" height="100" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="450" y="225" text-anchor="middle" fill="#fff" font-size="17">Pressure</text>
                    <text x="450" y="255" text-anchor="middle" fill="#888" font-size="14">L2-3</text>
                    <path d="M560 230 L620 230" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="620,230 608,222 608,238" fill="#14b8a6"/>
                    <rect x="620" y="180" width="220" height="100" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="730" y="225" text-anchor="middle" fill="#fff" font-size="17">Cholesterol</text>
                    <text x="730" y="255" text-anchor="middle" fill="#888" font-size="14">L4-6</text>
                    <path d="M840 230 L900 230" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="900,230 888,222 888,238" fill="#14b8a6"/>
                    <rect x="900" y="180" width="140" height="100" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="970" y="225" text-anchor="middle" fill="#fff" font-size="17">Plaque</text>
                    <text x="970" y="255" text-anchor="middle" fill="#888" font-size="14">L7</text>
                    <rect x="60" y="360" width="220" height="100" rx="15" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="170" y="405" text-anchor="middle" fill="#fff" font-size="17">Rhythm</text>
                    <text x="170" y="435" text-anchor="middle" fill="#888" font-size="14">L8</text>
                    <rect x="340" y="360" width="220" height="100" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="450" y="405" text-anchor="middle" fill="#fff" font-size="17">Warning Signs</text>
                    <text x="450" y="435" text-anchor="middle" fill="#888" font-size="14">L9</text>
                    <rect x="620" y="360" width="220" height="100" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="405" text-anchor="middle" fill="#fff" font-size="17">Movement</text>
                    <text x="730" y="435" text-anchor="middle" fill="#888" font-size="14">L10</text>
                    <rect x="900" y="360" width="140" height="100" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="970" y="405" text-anchor="middle" fill="#fff" font-size="17">Food</text>
                    <text x="970" y="435" text-anchor="middle" fill="#888" font-size="14">L11</text>
                    <path d="M550 500 L550 570" stroke="#ffd700" stroke-width="3"/>
                    <polygon points="550,570 542,558 558,558" fill="#ffd700"/>
                    <rect x="250" y="580" width="600" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">YOUR HEART PLAN (L12)</text>
                    <text x="550" y="668" text-anchor="middle" fill="#888" font-size="16">A decades-long, mostly modifiable game</text>
                </svg>`,
                caption: "Eleven lessons in one map -- all feeding the final plan"
            }
        },
        {
            type: "concept",
            title: "Know Your Numbers: The Dashboard",
            content: "You cannot manage what you never measure. Here is your personal dashboard -- the handful of numbers this book has taught you to interpret:\n\n• **Blood pressure** -- a validated **home cuff** beats occasional office readings (Lesson 2). Check a few mornings a month once stable; target most adults under 130/80 with your doctor.\n• **Lipid panel, plus ApoB where available** -- ApoB counts the artery-entering particles directly (Lesson 5). Every 4-6 years when normal; more often if treating.\n• **Lp(a) -- once in a lifetime** -- this genetic particle (Lesson 5) does not change much, but a high value reshapes how aggressive to be on everything else. Most people have never been tested.\n• **A1c or fasting glucose** -- the diabetes pathway; every 3 years from 35-45, earlier with risk factors.\n• **Waist circumference and weight** -- waist tracks the metabolically active visceral fat.\n• **Resting heart rate** -- free from any watch or your own fingers; a falling trend is your fitness dividend from Lesson 10.\n\nBy decade: in your **20s-30s**, get baselines (yes, including lipids -- remember the 50-year plaque story). **40s-50s**: check yearly-ish, run a risk calculator (next card), and act early. **60s+**: same numbers, plus honest attention to rhythm (Lesson 8) and symptoms (Lesson 9).\n\nPut real values next to each. Blanks are your first to-do list.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six numbers to know cold</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="222" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">BLOOD PRESSURE</text>
                    <text x="300" y="262" text-anchor="middle" fill="#fff" font-size="16">Home cuff, monthly checks</text>
                    <text x="300" y="295" text-anchor="middle" fill="#888" font-size="15">Most adults: under 130/80</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="222" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">LIPIDS + ApoB</text>
                    <text x="800" y="262" text-anchor="middle" fill="#fff" font-size="16">Every 4-6 years if normal</text>
                    <text x="800" y="295" text-anchor="middle" fill="#888" font-size="15">ApoB counts the particles</text>
                    <rect x="80" y="370" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="422" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">Lp(a) -- ONCE EVER</text>
                    <text x="300" y="462" text-anchor="middle" fill="#fff" font-size="16">Genetic; one test suffices</text>
                    <text x="300" y="495" text-anchor="middle" fill="#888" font-size="15">High value reshapes the plan</text>
                    <rect x="580" y="370" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="422" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">A1c / GLUCOSE</text>
                    <text x="800" y="462" text-anchor="middle" fill="#fff" font-size="16">Every 3 years from 35-45</text>
                    <text x="800" y="495" text-anchor="middle" fill="#888" font-size="15">Sooner with risk factors</text>
                    <rect x="80" y="570" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="622" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WAIST / WEIGHT</text>
                    <text x="300" y="662" text-anchor="middle" fill="#fff" font-size="16">Waist tracks visceral fat</text>
                    <text x="300" y="695" text-anchor="middle" fill="#888" font-size="15">Trend beats single readings</text>
                    <rect x="580" y="570" width="440" height="160" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="800" y="622" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">RESTING HEART RATE</text>
                    <text x="800" y="662" text-anchor="middle" fill="#fff" font-size="16">Free fitness gauge</text>
                    <text x="800" y="695" text-anchor="middle" fill="#888" font-size="15">Falling trend = training works</text>
                    <rect x="150" y="790" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">Blanks on this dashboard are your first to-do list</text>
                </svg>`,
                caption: "Six numbers, how often to check them, and why each earns its place"
            }
        },
        {
            type: "concept",
            title: "From Numbers to Risk: PREVENT and the Tie-Breaker",
            content: "Numbers in isolation mislead. Risk lives in combinations -- a mediocre LDL plus high blood pressure plus prediabetes is worse than one terrible number alone. That is what risk calculators are for.\n\nIn 2023 the American Heart Association released the **PREVENT equations**, the current state of the art. Fed your age, sex, blood pressure, lipids, diabetes status, smoking, kidney function (a newcomer -- kidneys and heart are deeply linked), and BMI, PREVENT estimates your **10-year and 30-year risk** of cardiovascular disease. Notable upgrades over the older Pooled Cohort Equations: it starts at **age 30**, adds the 30-year horizon (crucial for young people whose 10-year risk always looks deceptively fine), removed race as an input, and was calibrated on modern data from over 6 million people.\n\nTwo rules for using it well:\n\n• **Run it WITH your doctor**, not as a home verdict. Calculators estimate averages for people like you; your doctor layers on the things equations miss.\n• **When the answer is ambiguous, remember the tie-breaker**: the **coronary artery calcium (CAC) scan** from Lesson 7. A CAC of zero can reasonably defer medication; a high score ends the debate in the other direction.\n\nRisk numbers are not verdicts. They are the conversation starter that turns eleven lessons of understanding into an actual, personalized plan.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PREVENT (AHA 2023)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your numbers become your risk estimate</text>
                    <rect x="80" y="170" width="400" height="360" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="280" y="222" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">INPUTS</text>
                    <text x="280" y="266" text-anchor="middle" fill="#fff" font-size="16">Age (30+), sex, BP</text>
                    <text x="280" y="300" text-anchor="middle" fill="#fff" font-size="16">Lipids, diabetes, smoking</text>
                    <text x="280" y="334" text-anchor="middle" fill="#fff" font-size="16">Kidney function, BMI</text>
                    <text x="280" y="380" text-anchor="middle" fill="#888" font-size="15">No race term</text>
                    <text x="280" y="412" text-anchor="middle" fill="#888" font-size="15">Calibrated on 6M+ people</text>
                    <path d="M480 350 L580 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="580,350 566,341 566,359" fill="#14b8a6"/>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">10-YEAR RISK</text>
                    <text x="800" y="266" text-anchor="middle" fill="#fff" font-size="16">Guides treatment now</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="15">Discuss thresholds with your doctor</text>
                    <rect x="580" y="360" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="412" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">30-YEAR RISK</text>
                    <text x="800" y="456" text-anchor="middle" fill="#fff" font-size="16">The young person's wake-up</text>
                    <text x="800" y="490" text-anchor="middle" fill="#888" font-size="15">10-year risk hides lifetime exposure</text>
                    <rect x="150" y="590" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">AMBIGUOUS? THE CAC TIE-BREAKER</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="17">Calcium score of zero can defer; high score ends the debate</text>
                    <text x="550" y="717" text-anchor="middle" fill="#888" font-size="15">Lesson 7's scan, back for its encore</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">Run it WITH your doctor -- it starts the conversation</text>
                </svg>`,
                caption: "PREVENT turns your dashboard into 10- and 30-year risk; CAC settles the close calls"
            }
        },
        {
            type: "quiz",
            question: "Which test in your heart dashboard generally needs to be done only ONCE in your lifetime, because the result barely changes -- yet most people have never had it?",
            options: [
                { text: "ApoB, because particle counts are fixed at birth", correct: false },
                { text: "A coronary artery calcium (CAC) scan, because plaque never changes", correct: false },
                { text: "Lp(a), because its level is largely set by your genes", correct: true },
                { text: "A1c, because glucose metabolism is stable through adulthood", correct: false }
            ],
            explanation: "Lp(a) is a lipoprotein whose blood level is roughly 80-90% genetically determined and stays fairly constant across your life, so one measurement usually suffices -- and a high result reshapes how aggressively you and your doctor manage every other risk factor. ApoB and A1c both shift with lifestyle and treatment and need repeating. A CAC scan can be repeated as plaque evolves; it is the tie-breaker for treatment decisions, not a once-ever genetic test.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE ONE-TIME TEST</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Which number is essentially set by your genes?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Hint: most people have never been tested for it</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">Check once. Know forever.</text>
                    <text x="550" y="478" text-anchor="middle" fill="#888" font-size="16">A high value changes the whole plan</text>
                </svg>`,
                caption: "Mid-lesson check on the dashboard's once-in-a-lifetime test"
            }
        },
        {
            type: "concept",
            title: "Family History: What Actually Counts",
            content: "'Heart disease runs in my family' can mean almost nothing -- or almost everything. The difference is **who** and **when**.\n\n**What counts as premature family history:**\n\n• A **father or brother** with a heart attack, stent, bypass, or sudden cardiac death **before age 55**\n• A **mother or sister** with the same **before age 65**\n\nA grandfather's heart attack at 88 is, bluntly, a normal human death -- it should not haunt you. A father's stent at 48 is a signal flare, roughly **doubling** your own risk in most analyses, and it earns a place in every conversation with your doctor.\n\n**If you have true premature family history:**\n\n• Start the dashboard **earlier** -- lipids in your 20s, not your 40s\n• **Test Lp(a)** -- premature family events are exactly the fingerprint of this inherited particle\n• Ask about **familial hypercholesterolemia** if LDL runs very high (think 190+ mg/dL) in multiple relatives -- it affects about 1 in 250 people and is criminally underdiagnosed\n• Expect the risk calculators to underestimate you slightly -- family history is not an input in PREVENT, so your doctor treats it as a **risk enhancer** nudging decisions toward earlier action\n\nAnd do the reverse favor: your own diagnosis dates become your children's family history. Tell them the ages. It is one of the cheapest gifts of information you can leave.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FAMILY HISTORY DECODED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Who and when -- not just whether</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">COUNTS AS PREMATURE</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="18">Father / brother: event</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">before age 55</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="18">Mother / sister: event</text>
                    <text x="290" y="410" text-anchor="middle" fill="#fff" font-size="18">before age 65</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">First-degree relatives only</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT IT CHANGES</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">Dashboard starts in your 20s</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="17">Lp(a) test moves to the top</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="17">Screen for familial</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="17">hypercholesterolemia (1 in 250)</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="15">Doctor treats it as a risk enhancer</text>
                    <rect x="150" y="540" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#ffd700" font-size="19">Grandpa at 88 is not a signal. Dad at 48 is.</text>
                    <text x="550" y="615" text-anchor="middle" fill="#888" font-size="16">Record your own dates for your children</text>
                </svg>`,
                caption: "Premature means male first-degree relative before 55, female before 65"
            }
        },
        {
            type: "concept",
            title: "The Risk Enhancers Doctors Under-Ask About",
            content: "Standard calculators miss whole chapters of personal history -- especially for women. Bring these up yourself if your doctor does not.\n\n**For women, pregnancy is a cardiovascular stress test**, and its complications are lifelong risk enhancers:\n\n• **Preeclampsia** -- roughly **doubles** lifetime risk of heart disease and stroke\n• **Gestational diabetes** -- signals a high risk of later type 2 diabetes and its cardiac consequences\n• **Early menopause (before 40)** -- earlier loss of estrogen's protection tracks with higher risk\n• **PCOS** (polycystic ovary syndrome) -- bundled with insulin resistance and adverse lipids\n\nThese belong **in your chart and in your risk conversation** decades after they happen. Guidelines now formally list them as risk enhancers, but surveys show doctors ask about them inconsistently. If any apply to you, say so explicitly at your next visit.\n\n**For men, one under-discussed early warning**: **erectile dysfunction**. The penile arteries are narrower than the coronaries, so endothelial disease shows up there first -- ED precedes cardiac events by roughly **3-5 years** on average in prospective studies. A new ED diagnosis in a man over 40 is a reason to check blood pressure, lipids, and glucose -- not just to fill a prescription and move on.\n\nNone of this is destiny. All of it is information -- exactly the kind that makes the plan personal instead of generic.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UNASKED QUESTIONS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Risk enhancers calculators miss</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">WOMEN</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="17">Preeclampsia: ~2x lifetime risk</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="17">Gestational diabetes</text>
                    <text x="290" y="380" text-anchor="middle" fill="#fff" font-size="17">Menopause before 40</text>
                    <text x="290" y="430" text-anchor="middle" fill="#fff" font-size="17">PCOS</text>
                    <text x="290" y="490" text-anchor="middle" fill="#888" font-size="15">Pregnancy is a cardiac stress test</text>
                    <text x="290" y="525" text-anchor="middle" fill="#888" font-size="15">whose results last for life</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">MEN</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="17">Erectile dysfunction:</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">an early vascular warning</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="17">Precedes cardiac events</text>
                    <text x="810" y="415" text-anchor="middle" fill="#fff" font-size="17">by ~3-5 years on average</text>
                    <text x="810" y="490" text-anchor="middle" fill="#888" font-size="15">Narrow arteries show</text>
                    <text x="810" y="525" text-anchor="middle" fill="#888" font-size="15">disease first</text>
                    <rect x="150" y="650" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="19">If your doctor does not ask, bring it up yourself</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="16">These belong in your risk conversation</text>
                </svg>`,
                caption: "Pregnancy complications, early menopause, PCOS -- and ED as an early warning in men"
            }
        },
        {
            type: "example",
            title: "Maria, 52: A Plan Built From This Book",
            content: "Meet a composite patient built from everything you have learned.\n\n**Maria is 52.** Her numbers: BP 138/86 on a home cuff (Lesson 2 taught her office readings ran higher), LDL 145 mg/dL, A1c 5.8, resting HR 76. She walks occasionally. Two glasses of wine most nights. Her mother had a stroke at 62 -- **premature by the female-relative rule**. And buried in her history: **preeclampsia at 29**, which no doctor since has ever asked about.\n\nRun through this book's machinery:\n\n• PREVENT puts her 10-year risk in the intermediate zone -- but her premature family history and preeclampsia are **risk enhancers** the calculator never saw\n• Her doctor orders **Lp(a)** (never tested): it comes back high. The picture sharpens: this is a treat-early situation, and a statin conversation (Lesson 6) starts now, not at 60\n• Home BP earns a medication discussion plus the sodium/potassium moves from Lesson 3\n• The wine: with AFib and BP in mind (Lessons 8 and 11), she cuts to weekends\n• Walking becomes the Lesson 10 plan: 15 minutes nightly, building toward 4x4s\n\nNone of this required heroics -- just her numbers, her history, honestly assembled. **The scary version of Maria's future was never inevitable; it was just unexamined.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CASE STUDY: MARIA, 52</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The whole book applied to one person</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHAT SHE BRINGS</text>
                    <text x="290" y="272" text-anchor="middle" fill="#fff" font-size="16">BP 138/86 - LDL 145 - A1c 5.8</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="16">Mother's stroke at 62</text>
                    <text x="290" y="348" text-anchor="middle" fill="#fff" font-size="16">Preeclampsia at 29 -- never asked</text>
                    <text x="290" y="386" text-anchor="middle" fill="#fff" font-size="16">Nightly wine, little exercise</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="15">Calculator alone would miss half of this</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE ASSEMBLED PLAN</text>
                    <text x="810" y="272" text-anchor="middle" fill="#fff" font-size="16">Lp(a) tested: high -- act early</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="16">Statin conversation now (L6)</text>
                    <text x="810" y="348" text-anchor="middle" fill="#fff" font-size="16">BP plan + sodium/potassium (L3)</text>
                    <text x="810" y="386" text-anchor="middle" fill="#fff" font-size="16">Wine to weekends (L8, L11)</text>
                    <text x="810" y="424" text-anchor="middle" fill="#fff" font-size="16">15 min nightly walk (L10)</text>
                    <rect x="150" y="560" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="19">Her future was never inevitable -- just unexamined</text>
                    <text x="550" y="635" text-anchor="middle" fill="#888" font-size="16">Numbers + history + honest assembly = a real plan</text>
                </svg>`,
                caption: "One composite patient, every lesson of this book put to work"
            }
        },
        {
            type: "concept",
            title: "The Levers Nobody Lists: Sleep and Stress",
            content: "Two more levers belong in the plan -- ones that never appear on lab reports.\n\n**Sleep.** Recall the Lesson 8 connection: **obstructive sleep apnea** -- loud snoring, witnessed pauses, gasping awakenings, unrefreshing sleep -- drives hypertension and atrial fibrillation, and most cases are undiagnosed. Beyond apnea, chronically sleeping under 6 hours associates with higher coronary risk in cohort after cohort; the AHA added sleep (7-9 hours) to its official 'Life's Essential 8' cardiovascular health metrics in 2022. If your bed partner reports snoring plus pauses, a sleep study is a cardiac test.\n\n**Stress and depression.** The **INTERHEART study** (Lancet 2004, ~29,000 people, 52 countries) found psychosocial factors -- chronic stress, depression, life events, low sense of control -- accounted for roughly **30% of the population-attributable risk of heart attack**, in the same league as smoking and hypertension. Depression after a heart attack independently predicts worse outcomes, which is why cardiac rehab includes the psychological side.\n\nHonesty about mechanisms and evidence: stress works through cortisol, blood pressure, inflammation, and -- realistically -- through smoking, eating, and drinking more. Trials of stress reduction show improved blood pressure and quality of life; hard-event evidence is thinner. But the observational signal is enormous and consistent.\n\nThe plan version: **guard sleep like a medication schedule, screen for apnea if the signs are there, and treat depression as a cardiac risk factor -- because it is one.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE INVISIBLE LEVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">No lab report will show these</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">SLEEP</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="17">7-9 hours: an official AHA</text>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="17">Essential 8 health metric</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="17">Snoring + pauses + gasping</text>
                    <text x="290" y="395" text-anchor="middle" fill="#fff" font-size="17">= get an apnea evaluation</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="15">Apnea feeds BP and AFib (L8)</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">STRESS + DEPRESSION</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="17">INTERHEART, 52 countries:</text>
                    <text x="810" y="310" text-anchor="middle" fill="#fff" font-size="17">psychosocial factors ~30%</text>
                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="17">of heart-attack risk</text>
                    <text x="810" y="395" text-anchor="middle" fill="#fff" font-size="17">Same league as smoking</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="15">Depression is a cardiac risk factor</text>
                    <rect x="150" y="560" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="19">Guard sleep like a prescription; treat the mind</text>
                    <text x="550" y="635" text-anchor="middle" fill="#888" font-size="16">as part of the cardiovascular system -- it is</text>
                </svg>`,
                caption: "Sleep quality and psychological health carry real cardiovascular weight"
            }
        },
        {
            type: "example",
            title: "Two Futures: The Compounding Effect",
            content: "Here is why the whole plan beats any single lever: **risk factors multiply, so improvements compound**.\n\nImagine two 45-year-olds, both with slightly elevated everything -- BP 138, LDL 140, borderline glucose, sedentary, average diet.\n\n**Future A** fixes nothing. Each factor grinds along, and they multiply: pressure injures the artery wall, LDL particles pour into the injury (Lesson 7's plaque story), glucose glycates and inflames, inactivity keeps insulin resistance rising. By 65, risk has not added up -- it has **multiplied up**.\n\n**Future B** pulls every lever *partway*, exactly as this book taught:\n\n• BP down 10 mmHg (home monitoring, sodium, walking) -- large trials show roughly **20% fewer major cardiac events** per 10 mmHg reduction\n• LDL down 40 mg/dL (diet plus a statin if indicated) -- about **20-25% fewer events per year** of sustained reduction, compounding over decades\n• 150 minutes of weekly movement, Mediterranean-pattern eating, alcohol trimmed, sleep fixed\n\nNo single change is dramatic. Together, epidemiologic models (like the Framingham-based analyses and the Nurses' Health Study lifestyle work) suggest people combining these habits experience **on the order of 70-80% fewer coronary events** than those with none of them.\n\nThat is the compounding frame: **you do not need to be perfect at anything -- you need to be decent at several things, for a long time.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO FUTURES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same start at 45 -- compounding decides</text>
                    <line x1="150" y1="640" x2="1000" y2="640" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="640" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="575" y="690" text-anchor="middle" fill="#888" font-size="17">Age 45 to 75</text>
                    <text x="115" y="410" text-anchor="middle" fill="#888" font-size="17" transform="rotate(-90 115 410)">Cardiac risk</text>
                    <path d="M170 560 Q 500 520 960 220" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <text x="800" y="270" text-anchor="middle" fill="#ef4444" font-size="17">Future A: levers untouched</text>
                    <path d="M170 560 Q 500 570 960 540" stroke="#10b981" stroke-width="5" fill="none"/>
                    <text x="790" y="510" text-anchor="middle" fill="#10b981" font-size="17">Future B: every lever partway</text>
                    <rect x="80" y="740" width="450" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="790" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">-10 mmHg BP = ~20% fewer events</text>
                    <text x="305" y="830" text-anchor="middle" fill="#fff" font-size="15">-40 mg/dL LDL = ~20-25% fewer,</text>
                    <text x="305" y="860" text-anchor="middle" fill="#fff" font-size="15">compounding each year sustained</text>
                    <rect x="570" y="740" width="450" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="795" y="790" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">Combined habits:</text>
                    <text x="795" y="830" text-anchor="middle" fill="#fff" font-size="15">~70-80% fewer coronary events</text>
                    <text x="795" y="860" text-anchor="middle" fill="#888" font-size="15">Decent at several things, for decades</text>
                </svg>`,
                caption: "Risk multiplies -- which means partial improvements on several levers compound enormously"
            }
        },
        {
            type: "application",
            title: "The 30-Day Starter Plan",
            content: "The whole book, compressed into one month. Not medical advice -- your doctor personalizes; this is your homework before that visit.\n\n**Week 1 -- Measure.**\n1. Buy or borrow a **validated home BP cuff**; log 3 mornings\n2. Book a checkup; request a **lipid panel, A1c, and ask about ApoB and a one-time Lp(a)**\n3. Write down family history with **ages** of any cardiac events\n\n**Week 2 -- Move.**\n4. Start the **15-minute daily walk** (Lesson 10); take stairs for VILPA bursts\n\n**Week 3 -- Eat.**\n5. Build the **One Plate** (Lesson 11) four nights; olive oil in, sugary drinks out; oats or psyllium at breakfast\n\n**Week 4 -- Assemble.**\n6. At your appointment: run **PREVENT together**, mention every risk enhancer (pregnancy history, early menopause, PCOS, ED, snoring, depression), and leave with a written plan and a follow-up date\n\nOngoing: memorize the **warning signs** from Lesson 9 and make sure someone in your house knows them too. If alcohol is regular, step it down. If you snore with pauses, ask for a sleep study.\n\nThirty days from now you will know your numbers, your risk, and your levers. That is more than most people ever learn about the organ keeping them alive.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 30-DAY STARTER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four weeks from unaware to underway</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">WEEK 1: MEASURE</text>
                    <text x="200" y="262" text-anchor="start" fill="#fff" font-size="17">Home BP log, labs booked (+ApoB, Lp(a)), family ages written</text>
                    <rect x="150" y="330" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="382" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">WEEK 2: MOVE</text>
                    <text x="200" y="422" text-anchor="start" fill="#fff" font-size="17">15-minute daily walk anchored to dinner; stairs count</text>
                    <rect x="150" y="490" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="542" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">WEEK 3: EAT</text>
                    <text x="200" y="582" text-anchor="start" fill="#fff" font-size="17">The One Plate x4 nights; sugary drinks out; fiber in</text>
                    <rect x="150" y="650" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="702" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">WEEK 4: ASSEMBLE</text>
                    <text x="200" y="742" text-anchor="start" fill="#fff" font-size="17">Run PREVENT with your doctor; name every risk enhancer</text>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="19">Leave with a written plan and a follow-up date</text>
                    <text x="550" y="895" text-anchor="middle" fill="#888" font-size="16">And make sure your household knows Lesson 9's warning signs</text>
                </svg>`,
                caption: "Measure, move, eat, assemble -- your first 30 days"
            }
        },
        {
            type: "quote",
            content: "A vigorous five-mile walk will do more good for an unhappy but otherwise healthy adult than all the medicine and psychology in the world.",
            author: "Paul Dudley White, founding father of American cardiology",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"A vigorous five-mile walk will do more good</text>
                    <text x="160" y="265" text-anchor="start" fill="#fff" font-style="italic" font-size="22">for an unhappy but otherwise healthy adult</text>
                    <text x="160" y="310" text-anchor="start" fill="#fff" font-style="italic" font-size="22">than all the medicine and psychology</text>
                    <text x="160" y="355" text-anchor="start" fill="#fff" font-style="italic" font-size="22">in the world."</text>
                    <text x="940" y="405" text-anchor="end" fill="#8b5cf6" font-size="18">-- Paul Dudley White</text>
                    <rect x="200" y="500" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="548" text-anchor="middle" fill="#ffd700" font-size="19">White helped found the American Heart Association</text>
                    <text x="550" y="585" text-anchor="middle" fill="#888" font-size="16">and treated President Eisenhower's 1955 heart attack</text>
                </svg>`,
                caption: "A century-old prescription that the modern evidence keeps validating"
            }
        },
        {
            type: "quiz",
            question: "The INTERHEART study (Lancet 2004) surveyed ~29,000 people across 52 countries. What was its central, plan-defining finding about first heart attacks?",
            options: [
                { text: "Genetics determine most heart attacks, so family history is the dominant factor to manage", correct: false },
                { text: "About 90% of first-heart-attack risk traced to modifiable factors -- including psychosocial ones at roughly 30%", correct: true },
                { text: "Risk factors differ so much between countries that no universal prevention advice is possible", correct: false },
                { text: "Only cholesterol and smoking mattered; stress and depression showed no measurable contribution", correct: false }
            ],
            explanation: "INTERHEART found that nine modifiable factors -- abnormal lipids, smoking, hypertension, diabetes, abdominal obesity, psychosocial stress, diet, activity, and alcohol -- explained about 90% of population-attributable heart-attack risk, remarkably consistently across all 52 countries and both sexes. Psychosocial factors alone accounted for roughly 30%, rivaling classic risk factors. That is the foundation of this entire book: genes and luck exist, but the overwhelming majority of the risk sits on levers you and your doctor can actually move.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">INTERHEART</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">29,000 people, 52 countries, one question:</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">how much of a first heart attack is modifiable?</text>
                    <circle cx="550" cy="520" r="160" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <path d="M550 360 A160 160 0 0 1 660 640" stroke="#ffd700" stroke-width="6" fill="none"/>
                    <text x="550" y="505" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="30">~90%</text>
                    <text x="550" y="550" text-anchor="middle" fill="#fff" font-size="17">modifiable</text>
                    <text x="550" y="740" text-anchor="middle" fill="#888" font-size="16">The premise of this book, quantified</text>
                </svg>`,
                caption: "The closing check: how much of your heart's future is actually in play"
            }
        },
        {
            type: "concept",
            title: "Nobody Cares More Than You Do",
            content: "One last honest framing before you close this book.\n\n**This was education, not prescription.** Every threshold, trial, and target you learned here describes *populations*. You are a sample size of one, with a history, a genome, and a life the averages cannot see. That is what your doctor is for: **personalization**. Bring them your numbers, your questions, and your risk enhancers -- and let them adjust the plan to the person actually living it. When something in this book and your doctor's advice conflict, your doctor -- who can examine you -- wins.\n\nBut here is the other half of the truth: **your doctor gets perhaps 15 minutes with you a year. You are with your heart for every one of its 100,000 daily beats.** The walking happens on your evenings. The plate gets built in your kitchen. The BP cuff lives in your bathroom. The warning signs will be recognized -- or missed -- by you and the people you have told.\n\nYou now understand the engine, the pressure, the particles, the plaque, the rhythm, the alarms, and the two great daily levers. That understanding was the point. Most people fear heart disease as a lightning bolt. You know it as a slow, mostly modifiable, 50-year process -- which means you know it can be **changed**.\n\nNobody cares about your heart more than you do. Now nobody in the room knows it better, either.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HANDOFF</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From this book to your life</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">YOUR DOCTOR</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">~15 minutes a year</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">Personalizes the plan</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="18">Examines, prescribes, adjusts</text>
                    <text x="290" y="430" text-anchor="middle" fill="#888" font-size="16">Wins any conflict with a book</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="810" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">YOU</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">100,000 beats a day, every day</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">The walks, the plate, the cuff</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="18">The habits, the follow-through</text>
                    <text x="810" y="430" text-anchor="middle" fill="#888" font-size="16">The one who is always there</text>
                    <rect x="150" y="540" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="588" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">Nobody cares about your heart more than you do</text>
                    <text x="550" y="628" text-anchor="middle" fill="#888" font-size="17">And now, nobody in the room knows it better either</text>
                </svg>`,
                caption: "Education ends, partnership begins: your doctor personalizes, you execute"
            }
        }
    ]
}
]
};
