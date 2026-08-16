// External book module — The Brain Span: Preventing Cognitive Decline
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.BRAIN_SPAN_BOOK = {
    id: "brain-span",
    title: "The Brain Span: Preventing Cognitive Decline",
    author: "Synthesis Curriculum",
    description: "The evidence-based playbook for protecting your mind — the Lancet Commission's 14 modifiable dementia risk factors, hearing, exercise, sleep, social ties, and the MIND diet graded honestly.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "Dementia Isn't Destiny",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Disease You Fear Most Is the One You Can Fight",
            content: "Ask people over 55 which diagnosis scares them most, and surveys keep returning the same answer. Not cancer. Not heart disease. Dementia. A 2014 UK survey found adults over 55 feared dementia more than any other condition - because it feels like losing yourself, and because it feels like pure bad luck.\n\nHere is the twist this whole book is built on: of all the diseases people dread, dementia is arguably the one where you hold the most cards. In 2024, one of the world's most respected medical commissions concluded that nearly **half of all dementia risk worldwide** is tied to things you can actually change - your hearing, your blood pressure, your cholesterol, your social life.\n\nThis is not wishful thinking. It is the mainstream scientific consensus, published in The Lancet. Over the next 12 lessons, you'll learn exactly which levers matter, how big each one is, and what to do about them - starting today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FEAR AND THE HOPE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The most feared disease is also movable</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE FEAR</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Adults over 55 fear dementia</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">more than cancer</text>
                    <text x="290" y="370" text-anchor="middle" fill="#888" font-size="16">It feels like fate -</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="16">something that just happens to you</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE HOPE</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">About 45% of dementia risk</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">is linked to modifiable factors</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="16">Lancet Commission, 2024 -</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="16">14 levers you can actually pull</text>
                    <rect x="200" y="560" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="20">Nearly half the risk is on the table</text>
                </svg>`,
                caption: "Dementia is the most feared diagnosis after 55 - and the most modifiable of the feared ones"
            }
        },
        {
            type: "concept",
            title: "The 45% Finding",
            content: "In July 2024, the **Lancet Commission on dementia prevention, intervention, and care** - a standing panel of 27 leading dementia researchers, led by Professor **Gill Livingston** of University College London - published its third major report.\n\nIts headline conclusion: roughly **45% of dementia cases worldwide** are theoretically attributable to **14 modifiable risk factors**.\n\nWhat that means in plain language:\n• Researchers identified 14 factors with strong evidence linking them to dementia risk\n• They calculated how much dementia would, in theory, be prevented or delayed if each factor were fully eliminated\n• Added together (with overlap accounted for), those factors cover about **45% of cases**\n\nThe other ~55% is currently down to age, genes (like the **APOE4** variant), and factors science hasn't pinned down yet.\n\nTwo honest caveats: 'theoretically attributable' assumes the links are fully causal, and no one eliminates a risk factor 100%. But even a fraction of 45% is enormous - dementia affects over **55 million people** worldwide, a number projected to nearly triple by 2050. This is not medical advice for your specific situation; it is the population-level map. Your doctor helps you apply it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 2024 LANCET COMMISSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">27 experts, three reports, one big number</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">14 modifiable risk factors</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">identified across the whole life course</text>
                    <rect x="100" y="340" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="395" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">~45% of cases theoretically attributable</text>
                    <text x="550" y="435" text-anchor="middle" fill="#fff" font-size="18">if every factor were fully eliminated</text>
                    <rect x="100" y="510" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">~55% remains: age, genes, unknowns</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="18">including the APOE4 gene variant</text>
                    <rect x="200" y="690" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#ffd700" font-size="20">Nearly half the risk is modifiable</text>
                </svg>`,
                caption: "The Lancet Commission 2024: 14 factors, ~45% of worldwide dementia cases"
            }
        },
        {
            type: "visual",
            title: "Seeing the Split",
            content: "Picture all future dementia cases as a single bar. The 2024 Lancet Commission's math splits it in two: about **45%** linked to the 14 modifiable factors, about **55%** to age, genetics, and unknowns.\n\nNo other major feared disease of later life offers a prevention share this large with levers this concrete. That is why this book exists.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHERE DEMENTIA RISK LIVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">All cases worldwide, split by attributability</text>
                    <rect x="100" y="200" width="405" height="140" rx="14" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="3"/>
                    <rect x="505" y="200" width="495" height="140" rx="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="302" y="260" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="30">~45%</text>
                    <text x="302" y="300" text-anchor="middle" fill="#fff" font-size="17">14 modifiable factors</text>
                    <text x="752" y="260" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="30">~55%</text>
                    <text x="752" y="300" text-anchor="middle" fill="#fff" font-size="17">Age, genes, unknowns</text>
                    <rect x="100" y="400" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="320" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">YOU CAN MOVE THIS</text>
                    <text x="320" y="500" text-anchor="middle" fill="#fff" font-size="16">Hearing, blood pressure, LDL,</text>
                    <text x="320" y="530" text-anchor="middle" fill="#fff" font-size="16">exercise, social life, and more</text>
                    <text x="320" y="570" text-anchor="middle" fill="#888" font-size="15">The subject of lessons 3-11</text>
                    <rect x="580" y="400" width="440" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">YOU CANNOT (YET)</text>
                    <text x="800" y="500" text-anchor="middle" fill="#fff" font-size="16">Chronological age, APOE4,</text>
                    <text x="800" y="530" text-anchor="middle" fill="#fff" font-size="16">family history, unknown causes</text>
                    <text x="800" y="570" text-anchor="middle" fill="#888" font-size="15">Worth knowing, not worth fearing</text>
                </svg>`,
                caption: "About 45% of dementia risk maps to levers you can pull; the rest is age, genes, and open questions"
            }
        },
        {
            type: "concept",
            title: "Dementia Is Not Normal Aging",
            content: "Here is a fact that quietly demolishes the 'dementia is just fate' story: in wealthier countries, **your odds of developing dementia at any given age have been falling for decades**.\n\nThe **Framingham Heart Study** - which has tracked thousands of Massachusetts residents since 1948 - reported in the New England Journal of Medicine (2016) that dementia incidence dropped about **13% per decade** from the late 1970s onward. Over three decades, that compounds to a decline of roughly **44%** in the age-adjusted risk.\n\nSimilar declines have shown up in the UK, the Netherlands, and across Europe. Total case numbers are still rising - but only because far more people are living into their 80s and 90s. Per person, per age, the risk is going down.\n\nWhy? Researchers point to two big population-wide changes:\n• **More education** - each generation has spent more years in school\n• **Better cardiovascular care** - blood pressure treatment, statins, less smoking\n\nNobody planned this as a dementia-prevention program. It happened as a side effect of public health progress. Which means prevention is not a theory - **it has already worked, at the scale of entire nations**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RISK IS ALREADY FALLING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Framingham: age-adjusted dementia incidence</text>
                    <rect x="150" y="220" width="130" height="380" rx="10" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="215" y="650" text-anchor="middle" fill="#888" font-size="16">Late 1970s</text>
                    <rect x="370" y="290" width="130" height="310" rx="10" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="435" y="650" text-anchor="middle" fill="#888" font-size="16">Late 1980s</text>
                    <rect x="590" y="350" width="130" height="250" rx="10" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="655" y="650" text-anchor="middle" fill="#888" font-size="16">Late 1990s</text>
                    <rect x="810" y="400" width="130" height="200" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="875" y="650" text-anchor="middle" fill="#888" font-size="16">2000s-2010s</text>
                    <line x1="215" y1="200" x2="875" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <text x="550" y="175" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">About 13% lower each decade</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Prevention has already worked at national scale</text>
                </svg>`,
                caption: "Framingham Heart Study (NEJM 2016): dementia incidence fell ~13% per decade since the late 1970s"
            }
        },
        {
            type: "quiz",
            question: "What was the headline conclusion of the 2024 Lancet Commission on dementia?",
            options: [
                { text: "Dementia is almost entirely determined by genetics, so prevention has little effect", correct: false },
                { text: "About 45% of dementia cases worldwide are theoretically attributable to 14 modifiable risk factors", correct: true },
                { text: "About 90% of dementia cases can be prevented with diet and supplements alone", correct: false },
                { text: "New drugs can now reverse dementia in most patients who start treatment early", correct: false }
            ],
            explanation: "The 2024 Lancet Commission concluded that roughly 45% of dementia cases worldwide are theoretically attributable to 14 modifiable risk factors spanning the whole life course. The genetics-only answer is the exact myth the report dismantles - falling per-age rates in wealthier countries prove environment and behavior matter. The 90% figure is inflated, and current drugs modestly slow decline; they do not reverse it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE LANCET COMMISSION 2024</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">27 experts reviewed the global evidence</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What share of dementia did they call modifiable?</text>
                    <rect x="350" y="350" width="400" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="30">? %</text>
                </svg>`,
                caption: "Test your understanding of the book's headline finding"
            }
        },
        {
            type: "concept",
            title: "Cognitive Reserve: Your Brain's Savings Account",
            content: "How can two people have the same amount of Alzheimer's pathology in their brains - the same plaques, the same tangles - yet one is lost in conversation while the other is doing crosswords and running a book club?\n\nThe answer is **cognitive reserve**: the brain's accumulated ability to **work around damage**.\n\nThink of it as a savings account:\n• Every year of education, every mentally demanding job, every language learned, every rich friendship makes a **deposit**\n• Disease and injury make **withdrawals**\n• Symptoms appear only when withdrawals exceed the balance\n\nA brain with high reserve has more **redundant networks** - alternative routes for the same mental task. When plaques block one road, traffic reroutes. The pathology is still there; the disability is delayed.\n\nThis is why the same amount of brain disease produces wildly different lives. And it is why prevention has two fronts: **slow the withdrawals** (protect blood vessels, hearing, sleep) and **grow the deposits** (learning, engagement, purpose).\n\nCognitive reserve cannot make you immune. But the evidence suggests it can buy you **years of good function** - and for a disease of late life, delaying symptoms by even five years cuts lifetime cases dramatically.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">COGNITIVE RESERVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A savings account for your brain</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">DEPOSITS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Education and lifelong learning</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Mentally demanding work</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Languages, music, hobbies</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="18">Rich social connections</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">Builds redundant brain networks</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WITHDRAWALS</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Plaques and tangles</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">Small vessel damage</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Head injuries</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="18">Untreated risk factors</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">Drains the balance over decades</text>
                    <rect x="200" y="590" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ffd700" font-size="20">Symptoms appear only when</text>
                    <text x="550" y="662" text-anchor="middle" fill="#ffd700" font-size="20">withdrawals exceed the balance</text>
                </svg>`,
                caption: "Cognitive reserve: deposits from learning and engagement offset withdrawals from disease"
            }
        },
        {
            type: "example",
            title: "The Nun Study: Plaques Without Symptoms",
            content: "In 1986, epidemiologist **David Snowdon** began studying **678 Catholic nuns** of the School Sisters of Notre Dame - a researcher's dream population: similar diets, routines, healthcare, no smoking or drinking, and detailed records going back to their convent entrance essays in their early 20s.\n\nEvery sister agreed to annual cognitive testing and to donate her brain at death.\n\nThe autopsies delivered the study's most famous finding: some sisters' brains were **riddled with Alzheimer's plaques and tangles** - enough pathology for a confident Alzheimer's diagnosis - yet in life they had shown **no symptoms at all**. They passed cognitive tests into their 80s and 90s with diseased brains.\n\nThe most celebrated case, known as **Sister Mary**, scored high on cognitive tests until shortly before her death at **101** - and her autopsy revealed abundant plaques and tangles.\n\nOne more striking result: sisters whose youthful essays showed high **'idea density'** - rich, complex sentences at age 22 - were far less likely to develop dementia six decades later.\n\nThe Nun Study is the founding evidence for cognitive reserve: pathology is not destiny. Brains can carry disease and still carry a life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NUN STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">678 sisters, one revolutionary finding</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT AUTOPSY FOUND</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Brains full of plaques</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">and tau tangles</text>
                    <text x="290" y="370" text-anchor="middle" fill="#888" font-size="16">Enough pathology for a clear</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="16">Alzheimer's diagnosis</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT LIFE SHOWED</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">No symptoms at all</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">Sharp into their 90s</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="16">Sister Mary: high test scores</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="16">until her death at 101</text>
                    <rect x="200" y="560" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="20">Reserve kept diseased brains</text>
                    <text x="550" y="632" text-anchor="middle" fill="#ffd700" font-size="20">functioning for decades</text>
                </svg>`,
                caption: "Snowdon's Nun Study: heavy Alzheimer's pathology at autopsy, zero symptoms in life"
            }
        },
        {
            type: "example",
            title: "Prevention at the Scale of Nations",
            content: "The falling-risk story is not one study. It keeps showing up wherever researchers look in high-income countries.\n\n**United States**: A University of Michigan team led by **Kenneth Langa** compared national health surveys and found dementia prevalence among Americans 65+ fell from **11.6% in 2000 to 8.8% in 2012** - roughly a quarter drop in twelve years. The biggest statistical explanation? Rising education levels.\n\n**England and Wales**: The Cognitive Function and Ageing Studies compared identical methods two decades apart and found age-specific dementia prevalence about **20% lower** than the 1990s numbers predicted.\n\nNotice what did NOT happen: no dementia vaccine, no miracle drug, no national brain-training program. The declines came from ordinary, unglamorous changes - more schooling, treated blood pressure, statins, less smoking.\n\nNow flip it around: if accidental, unplanned improvements in education and heart health cut risk this much, what could deliberate, targeted effort do? That is the bet this book is asking you to make - and it is a bet the epidemiology already backs.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FALLING, EVERYWHERE MEASURED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Age-adjusted dementia rates in rich countries</text>
                    <rect x="100" y="170" width="900" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">UNITED STATES (Langa, 2017)</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">Prevalence 65+: 11.6% in 2000 down to 8.8% in 2012</text>
                    <text x="550" y="305" text-anchor="middle" fill="#888" font-size="16">Largest correlate: more years of education</text>
                    <rect x="100" y="380" width="900" height="170" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">ENGLAND AND WALES (CFAS)</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="18">Prevalence about 20% lower than 1990s predictions</text>
                    <text x="550" y="515" text-anchor="middle" fill="#888" font-size="16">Same methods, two decades apart</text>
                    <rect x="200" y="610" width="700" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#10b981" font-size="20">No miracle drug involved - just education</text>
                    <text x="550" y="682" text-anchor="middle" fill="#10b981" font-size="20">and cardiovascular care</text>
                </svg>`,
                caption: "US and UK data both show per-age dementia rates falling - unplanned proof that prevention works"
            }
        },
        {
            type: "concept",
            title: "The Life-Course Frame: It Starts Decades Early",
            content: "Alzheimer's pathology begins accumulating **15 to 25 years before the first symptom**. By the time memory problems surface at 75, the biological process often started at 50.\n\nThis reframes everything. Dementia prevention is not something you do in old age - it is a **life-course project**:\n\n• **Early life (before ~18)**: Education builds the initial reserve. More schooling, more balance in the account\n• **Midlife (roughly 45-65)**: The critical window. Blood pressure, LDL cholesterol, hearing, weight, alcohol, and activity in these decades shape the brain you'll have at 80\n• **Later life (65+)**: Still very much in play - social connection, vision, air quality, and staying active all move the needle\n\nThe 2024 Lancet Commission's phrase for this is worth memorizing: it is **never too early and never too late** to reduce dementia risk.\n\nIf you are in your 40s, 50s, or 60s, you are standing in the highest-leverage decades of your life. If you are older, the later-life levers still pay. And if you are younger, you get the compounding advantage of starting the deposits early.\n\nNo panic, no fatalism - just a long runway and a clear map.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LONG RUNWAY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pathology starts 15-25 years before symptoms</text>
                    <rect x="60" y="200" width="220" height="120" rx="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="170" y="250" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">EARLY LIFE</text>
                    <text x="170" y="285" text-anchor="middle" fill="#fff" font-size="15">Build reserve</text>
                    <path d="M280 260 L340 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="340,260 328,252 328,268" fill="#14b8a6"/>
                    <rect x="340" y="200" width="220" height="120" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="450" y="250" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">MIDLIFE 45-65</text>
                    <text x="450" y="285" text-anchor="middle" fill="#fff" font-size="15">Critical window</text>
                    <path d="M560 260 L620 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="620,260 608,252 608,268" fill="#14b8a6"/>
                    <rect x="620" y="200" width="220" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">LATER LIFE</text>
                    <text x="730" y="285" text-anchor="middle" fill="#fff" font-size="15">Still in play</text>
                    <path d="M840 260 L900 260" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="900,260 888,252 888,268" fill="#14b8a6"/>
                    <rect x="900" y="200" width="140" height="120" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="970" y="250" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">AGE 80</text>
                    <text x="970" y="285" text-anchor="middle" fill="#fff" font-size="14">Outcome</text>
                    <rect x="150" y="400" width="800" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Symptoms at 75 often mean</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="18">the biology started around age 50</text>
                    <rect x="200" y="560" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="20">Never too early, never too late</text>
                </svg>`,
                caption: "The life-course view: early life builds reserve, midlife is the critical window, later life still counts"
            }
        },
        {
            type: "application",
            title: "Start the Clock Today",
            content: "You do not need the full map yet - that comes in Lesson 3. But you can put the life-course principle to work this week:\n\n1. **Know your numbers** - Book a basic check of your **blood pressure** and **LDL cholesterol**, or dig out your last results. These two midlife numbers are among the biggest levers in the entire book.\n\n2. **Do a 60-second hearing honesty test** - Do you turn the TV up higher than others like? Ask people to repeat themselves in restaurants? Note your answer; hearing is the single largest midlife factor and Lesson 4 tackles it.\n\n3. **Name your deposits** - Write down the last time you learned something genuinely new, and the last real conversation you had with a friend. Those are cognitive-reserve deposits. Notice how recent (or not) they are.\n\n4. **Pick your decade** - Locate yourself on the life-course map: early, midlife, or later life. Your position tells you which lessons ahead deserve your closest attention.\n\nNone of this replaces a conversation with your doctor - it arms you for one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">START THE CLOCK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four moves you can make this week</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="225" text-anchor="start" fill="#fff" font-size="18">Know your blood pressure and LDL numbers</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="345" text-anchor="start" fill="#fff" font-size="18">Take the 60-second hearing honesty test</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="465" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="465" text-anchor="start" fill="#fff" font-size="18">Name your recent cognitive-reserve deposits</text>
                    <rect x="150" y="530" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="585" text-anchor="start" fill="#fff" font-size="18">Find your spot on the life-course map</text>
                </svg>`,
                caption: "Your first-week action plan: numbers, hearing, deposits, and your place on the map"
            }
        },
        {
            type: "visual",
            title: "A Preview of the 14 Levers",
            content: "The 2024 Lancet Commission organizes its 14 risk factors by life stage. Lesson 3 walks through every one with its size; the rest of the book takes the biggest levers one at a time. Here is the shape of the map you are about to learn.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 14 LEVERS: PREVIEW</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Organized by when they matter most</text>
                    <rect x="80" y="170" width="300" height="260" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">EARLY LIFE</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">1 factor</text>
                    <text x="230" y="310" text-anchor="middle" fill="#888" font-size="15">Education</text>
                    <rect x="400" y="170" width="300" height="260" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MIDLIFE</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">10 factors</text>
                    <text x="550" y="310" text-anchor="middle" fill="#888" font-size="15">Hearing, LDL, BP,</text>
                    <text x="550" y="340" text-anchor="middle" fill="#888" font-size="15">activity, and more</text>
                    <rect x="720" y="170" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LATER LIFE</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">3 factors</text>
                    <text x="870" y="310" text-anchor="middle" fill="#888" font-size="15">Isolation, pollution,</text>
                    <text x="870" y="340" text-anchor="middle" fill="#888" font-size="15">vision</text>
                    <rect x="200" y="490" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#ffd700" font-size="20">Full map with sizes: Lesson 3</text>
                </svg>`,
                caption: "The 14 modifiable factors cluster into early life, midlife, and later life - the map for the whole book"
            }
        },
        {
            type: "quote",
            content: "It's never too early or too late in the life course for dementia prevention.",
            author: "Prof. Gill Livingston, lead author, Lancet Commission on Dementia",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="220" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="225" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"It's never too early or too late in the</text>
                    <text x="150" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="22">life course for dementia prevention."</text>
                    <text x="950" y="330" text-anchor="end" fill="#8b5cf6" font-size="18">- Prof. Gill Livingston, Lancet Commission</text>
                    <rect x="200" y="430" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#ffd700" font-size="20">The motto for the rest of this book</text>
                </svg>`,
                caption: "The Lancet Commission's core message about timing"
            }
        },
        {
            type: "quiz",
            question: "In the Nun Study, some sisters' brains were full of Alzheimer's plaques at autopsy, yet they had shown no symptoms in life. What does this finding demonstrate?",
            options: [
                { text: "Alzheimer's pathology only causes symptoms in people with the APOE4 gene", correct: false },
                { text: "The autopsies were likely misread, since plaques always produce symptoms", correct: false },
                { text: "Cognitive reserve can let a brain function well despite significant disease, delaying symptoms for years", correct: true },
                { text: "A convent lifestyle prevents plaques and tangles from forming in the first place", correct: false }
            ],
            explanation: "The symptom-free sisters had genuine, heavy pathology - the plaques were real, not misread. What protected them was cognitive reserve: redundant brain networks built through education and engagement that rerouted around the damage. The convent lifestyle answer gets it backwards - pathology still formed; function survived anyway. Reserve does not prevent disease, it delays disability, which for a late-life disease can mean never experiencing symptoms at all.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE NUN STUDY PUZZLE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Diseased brains, symptom-free lives</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What explains the gap?</text>
                    <circle cx="380" cy="420" r="65" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="380" y="415" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">Pathology</text>
                    <text x="380" y="440" text-anchor="middle" fill="#fff" font-size="14">present</text>
                    <line x1="445" y1="420" x2="655" y2="420" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <circle cx="720" cy="420" r="65" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="720" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">Function</text>
                    <text x="720" y="440" text-anchor="middle" fill="#fff" font-size="14">intact</text>
                </svg>`,
                caption: "Test what the Nun Study proved about pathology and function"
            }
        }
    ]
},
{
    id: 2,
    title: "Inside the Aging Brain",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You Forgot a Name Yesterday. Should You Worry?",
            content: "It happens to everyone past 40: a familiar actor's name evaporates mid-sentence. You walk into a room and forget why. You need an extra beat to find the word 'colander.'\n\nEvery one of those moments can trigger the same quiet dread: is this the beginning?\n\nAlmost always, no. Slower recall is to normal brain aging what gray hair is to normal skin aging - expected, near-universal, and not a disease. But there ARE changes that genuinely warrant attention, and most people have never been told the difference. That ignorance cuts both ways: it makes healthy people anxious about nothing, and it lets real early signs get waved off as 'just getting older.'\n\nIn this lesson you'll learn what actually happens inside an aging brain - what's normal, what's disease, how Alzheimer's and vascular dementia do their damage, and why your brain keeps its remarkable ability to rewire at every age. By the end, you'll know exactly which changes to shrug at and which to bring to a doctor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A MOMENT OF DREAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Is a forgotten name a warning sign?</text>
                    <rect x="150" y="180" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE UNIVERSAL EXPERIENCE</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="18">Names on the tip of your tongue, slower recall</text>
                    <rect x="150" y="370" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE UNSPOKEN QUESTION</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="18">Normal aging, or the start of something?</text>
                    <rect x="150" y="560" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THIS LESSON'S PROMISE</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="18">Know the difference - and stop fearing the normal</text>
                </svg>`,
                caption: "Most memory blips are normal aging - this lesson teaches you which changes are not"
            }
        },
        {
            type: "concept",
            title: "Normal Aging vs. Warning Signs",
            content: "The healthy aging brain changes in predictable ways. **Processing speed** slows - you think just as well, a bit less quickly. **Recall** gets lazier: names and words arrive late, but arrive (and recognition stays strong - you know the name when you hear it). Multitasking gets harder. None of this stops you living your life.\n\n**Normal aging looks like:**\n• Forgetting a name, then remembering it an hour later\n• Occasionally misplacing keys, then retracing your steps successfully\n• Needing more time to learn a new phone or app\n• Occasionally struggling for a word\n\n**Warning signs look like:**\n• Getting lost in **familiar** places - the drive you have made a thousand times\n• Repeating the same question within minutes, with no memory of asking\n• **Personality or judgment changes** - new paranoia, apathy, or wildly out-of-character decisions\n• Losing the thread of familiar tasks: a lifelong cook defeated by a known recipe\n• Misplacing things in bizarre spots (keys in the freezer) with no ability to retrace\n\nThe core distinction: normal aging is **slower**; disease is **different**. Speed changes are expected. Direction changes - in personality, navigation, judgment - deserve a medical conversation, not silent worry.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SLOWER VS. DIFFERENT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The distinction that ends needless worry</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">NORMAL AGING</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Name arrives an hour late</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Keys misplaced, then found</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">New tech takes longer to learn</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="17">Word-finding pauses</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">Same mind, slower speed</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">SEE A DOCTOR</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Lost on familiar routes</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">Same question repeated in minutes</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">Personality or judgment changes</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="17">Familiar tasks falling apart</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">A different mind, not a slower one</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Slower is aging. Different is a signal.</text>
                </svg>`,
                caption: "Normal aging slows the mind; disease changes it - navigation, judgment, personality"
            }
        },
        {
            type: "concept",
            title: "Alzheimer's in Plain Language: Plaques and Tangles",
            content: "**Alzheimer's disease** - the cause of roughly two-thirds of dementia cases - runs on two rogue proteins.\n\n**Amyloid-beta plaques**: Amyloid-beta is a normal protein fragment your brain produces and clears daily. In Alzheimer's, clearance falls behind. Fragments clump into sticky **plaques** between neurons - like garbage collecting in the streets between houses. Plaques disrupt communication and trigger inflammation.\n\n**Tau tangles**: Inside each neuron, a protein called **tau** stabilizes the internal transport skeleton that moves nutrients around the cell. In Alzheimer's, tau misfolds and twists into **tangles**. The transport system collapses, and the neuron starves from the inside.\n\nThe suspected sequence: amyloid accumulates first and silently for years, then tau spreads - and tau tracks much more closely with actual symptoms and cell death.\n\nThe part most people never hear: this process runs **15-25 years before the first symptom**. Amyloid can begin accumulating at 50 in a person whose memory loss surfaces at 72. That long silent phase is bad news for late treatment - the damage is far along when symptoms appear - but great news for prevention, because it hands you a decades-wide window to act.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO ROGUE PROTEINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The machinery of Alzheimer's disease</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">AMYLOID PLAQUES</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Sticky clumps BETWEEN neurons</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Garbage piling up in the streets</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">Blocks signals, sparks inflammation</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Accumulates first, silently</text>
                    <circle cx="200" cy="460" r="14" fill="rgba(239,68,68,0.5)"/>
                    <circle cx="250" cy="470" r="10" fill="rgba(239,68,68,0.5)"/>
                    <circle cx="300" cy="455" r="12" fill="rgba(239,68,68,0.5)"/>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">TAU TANGLES</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Twisted fibers INSIDE neurons</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">Internal transport collapses</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">The neuron starves from within</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Tracks closely with symptoms</text>
                    <path d="M740 450 Q770 470 800 450 Q830 430 860 455" stroke="#8b5cf6" stroke-width="4" fill="none"/>
                    <rect x="150" y="570" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="20">The silent phase runs 15-25 years</text>
                    <text x="550" y="642" text-anchor="middle" fill="#ffd700" font-size="20">before the first symptom</text>
                </svg>`,
                caption: "Amyloid plaques clog the space between neurons; tau tangles wreck them from inside"
            }
        },
        {
            type: "concept",
            title: "The Other Player: Vascular Dementia and Mixed Pathology",
            content: "Alzheimer's gets the headlines, but your brain has a second great vulnerability: its **plumbing**.\n\nYour brain is 2% of your body weight yet claims about **20% of your blood supply**, delivered through a network of vessels fine enough that many are single-cell-wide capillaries. **Vascular dementia** is what happens when that supply chain fails:\n\n• **Mini-strokes (lacunar infarcts)**: Tiny blockages, often symptomless individually, each killing a small patch of tissue. Damage accumulates like potholes\n• **White-matter damage**: Chronic high blood pressure stiffens and narrows small vessels, starving the brain's wiring - the white matter that connects regions. On MRI scans this shows up as white-matter hyperintensities, and it is extremely common\n\nNow the finding that reshaped the field: **mixed pathology is the most common autopsy finding** in dementia. Large autopsy series (like Chicago's Rush Memory and Aging Project) find most brains of people who died with dementia show BOTH Alzheimer's changes AND vascular damage. The pure, single-disease case is the exception.\n\nThis is quietly hopeful. Vascular damage is the most preventable part of the mix - blood pressure control, exercise, not smoking. Protecting your heart genuinely protects your brain, even against 'Alzheimer's dementia' as it actually occurs.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PLUMBING PROBLEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Vascular damage and the mixed-pathology reality</text>
                    <rect x="80" y="170" width="300" height="240" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">MINI-STROKES</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">Tiny silent blockages</text>
                    <text x="230" y="300" text-anchor="middle" fill="#888" font-size="15">Potholes that add up</text>
                    <rect x="400" y="170" width="300" height="240" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WHITE MATTER</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">Starved brain wiring</text>
                    <text x="550" y="300" text-anchor="middle" fill="#888" font-size="15">Driven by blood pressure</text>
                    <rect x="720" y="170" width="300" height="240" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">PLUS PLAQUES</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">Alzheimer's changes too</text>
                    <text x="870" y="300" text-anchor="middle" fill="#888" font-size="15">Usually both at once</text>
                    <rect x="150" y="470" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="520" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">MIXED PATHOLOGY IS THE RULE</text>
                    <text x="550" y="558" text-anchor="middle" fill="#fff" font-size="17">Most dementia brains show several kinds of damage</text>
                    <rect x="200" y="640" width="700" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#10b981" font-size="20">The vascular part is the most preventable part</text>
                </svg>`,
                caption: "Mini-strokes and white-matter damage usually mix with Alzheimer's pathology - and are highly preventable"
            }
        },
        {
            type: "quiz",
            question: "Your 68-year-old aunt occasionally forgets names but remembers them later. Last month, she got lost driving to the church she has attended for 30 years and has started repeating questions within minutes. Which change is a genuine warning sign?",
            options: [
                { text: "Forgetting names - memory loss of any kind is the earliest sign of dementia", correct: false },
                { text: "Getting lost on a deeply familiar route and rapid question repetition - those are different, not just slower", correct: true },
                { text: "None of them - all memory changes after 65 are part of normal aging", correct: false },
                { text: "All three equally - any cognitive change after 65 warrants urgent evaluation", correct: false }
            ],
            explanation: "Delayed name recall that resolves is classic normal aging - slower, not different. Getting lost on a route driven for 30 years and repeating questions with no memory of asking are qualitative changes in navigation and memory formation, the pattern that warrants medical evaluation. The all-changes-are-normal answer is the dangerous myth in the other direction: it delays diagnosis. The distinction to remember is slower versus different.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SLOWER VS. DIFFERENT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Three changes in one aunt</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which one signals disease?</text>
                    <rect x="150" y="360" width="380" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">SLOWER</text>
                    <text x="340" y="445" text-anchor="middle" fill="#fff" font-size="15">Names arrive late</text>
                    <rect x="570" y="360" width="380" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="410" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">DIFFERENT</text>
                    <text x="760" y="445" text-anchor="middle" fill="#fff" font-size="15">Lost on familiar roads</text>
                </svg>`,
                caption: "Apply the slower-versus-different rule to a real scenario"
            }
        },
        {
            type: "concept",
            title: "Neuroplasticity Never Retires",
            content: "For most of the 20th century, textbooks taught that the adult brain was fixed hardware - you got your neurons by adulthood and spent the rest of life losing them. That doctrine is dead.\n\n**Neuroplasticity** - the brain's ability to reorganize, form new connections, and strengthen circuits with use - **persists across the entire lifespan**. It is strongest in childhood, but it never stops.\n\nWhat lifelong plasticity means in practice:\n• **Synapses** (connections between neurons) strengthen with use and prune with neglect at every age - 'neurons that fire together, wire together' applies at 75 as at 7\n• Learning physically remodels the brain: gray-matter changes are measurable within **weeks** of starting a new skill\n• After strokes, older adults' brains demonstrably reroute functions to undamaged regions during rehabilitation\n\nOne honest asterisk: whether adults grow **new neurons** (adult neurogenesis, especially in the hippocampus) is still genuinely contested - landmark human studies since 2018 have landed on both sides. Science does not have this settled.\n\nBut here is what matters: the case for lifelong learning does not depend on new neurons. **Rewiring** - new connections among the roughly 86 billion neurons you already own - is beyond dispute, and it is the engine that builds cognitive reserve at any age.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BRAIN THAT REWIRES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Plasticity persists at every age</text>
                    <circle cx="240" cy="300" r="65" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="240" y="307" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">Neuron</text>
                    <circle cx="550" cy="230" r="65" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="237" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">Neuron</text>
                    <circle cx="860" cy="300" r="65" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="860" y="307" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Neuron</text>
                    <line x1="300" y1="275" x2="495" y2="245" stroke="#ffd700" stroke-width="3"/>
                    <line x1="605" y1="245" x2="800" y2="275" stroke="#ffd700" stroke-width="3"/>
                    <line x1="305" y1="320" x2="795" y2="320" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <text x="550" y="360" text-anchor="middle" fill="#888" font-size="15">New connections form with use, prune with neglect</text>
                    <rect x="100" y="440" width="440" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="320" y="495" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">SETTLED SCIENCE</text>
                    <text x="320" y="535" text-anchor="middle" fill="#fff" font-size="16">Lifelong rewiring of connections</text>
                    <rect x="580" y="440" width="440" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="495" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">STILL DEBATED</text>
                    <text x="800" y="535" text-anchor="middle" fill="#fff" font-size="16">New neurons in adult brains</text>
                    <rect x="200" y="650" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="20">Reserve is built by rewiring - proven at any age</text>
                </svg>`,
                caption: "Connection rewiring is proven lifelong; adult neurogenesis remains an open scientific question"
            }
        },
        {
            type: "example",
            title: "The Taxi Drivers Who Grew Their Hippocampus",
            content: "To drive a black cab in London, you must pass **'The Knowledge'** - memorizing roughly **25,000 streets** and thousands of landmarks within six miles of Charing Cross. Trainees typically spend **3-4 years** buzzing around on mopeds, building a city map inside their heads. Most fail.\n\nIn 2000, neuroscientist **Eleanor Maguire** at University College London scanned the brains of licensed cabbies. The result became one of neuroscience's most famous findings: taxi drivers had a significantly **larger posterior hippocampus** - the brain's spatial-memory hub - than matched controls. Even better: the size scaled with **years on the job**. More navigating, more gray matter.\n\nSkeptics raised the obvious objection: maybe big-hippocampus people just become cabbies. So Maguire's team ran a follow-up (2011), scanning **79 trainees before and after** training. Those who passed The Knowledge showed measurable hippocampal **growth**; those who failed or quit showed none. Same starting brains, different training, different anatomy.\n\nThese were adults, mostly in their 30s, 40s, and 50s, physically remodeling brain structure through sustained mental effort. Your daily demands do the same on a smaller scale - the brain you keep is the brain you use.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE KNOWLEDGE EFFECT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Maguire 2000: London cabbies' brains</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE TRAINING</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">25,000 streets memorized</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">3-4 years of study</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">Adults in their 30s-50s</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Sustained spatial learning</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE RESULT</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Larger posterior hippocampus</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">Growth scaled with years driven</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">Trainees grew it; dropouts did not</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Structure follows use</text>
                    <rect x="200" y="560" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="20">Adult brains physically grow with demand</text>
                </svg>`,
                caption: "Maguire's cab-driver studies: sustained mental effort visibly remodeled adult brain structure"
            }
        },
        {
            type: "concept",
            title: "Two Savings Accounts: Brain Reserve vs. Cognitive Reserve",
            content: "Lesson 1 introduced reserve as a savings account. Scientists actually distinguish **two separate accounts** - and the difference matters for what you do about them.\n\n**Brain reserve - the hardware account:**\n• The physical stock: neuron count, synapse density, brain volume\n• A bigger, healthier brain can simply absorb more damage before crossing the symptom threshold\n• Protected by defending the hardware: blood pressure control, sleep, avoiding head injury, not smoking\n\n**Cognitive reserve - the software account:**\n• Not how much brain you have, but **how flexibly you use it**\n• Efficient, redundant networks that can reroute around damage - built by education, complex work, languages, and rich social lives\n• This is what let the Nun Study sisters run full lives on damaged hardware\n\nThe two accounts are partly independent. You can have a large brain used rigidly, or a modest one wired with brilliant redundancy. Best case, obviously: both.\n\nAnd the two-account model maps directly onto prevention strategy:\n• **Hardware protection** = the body levers: blood pressure, LDL, exercise, sleep, no smoking\n• **Software building** = the mind levers: learning, engagement, connection\n\nEvery lever in Lesson 3 deposits into at least one account. Most of the best deposit into both.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO SAVINGS ACCOUNTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hardware and software, saved separately</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">BRAIN RESERVE</text>
                    <text x="290" y="265" text-anchor="middle" fill="#888" font-size="16">The hardware</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Neurons, synapses, volume</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">More stock absorbs more damage</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Grown and protected by:</text>
                    <text x="290" y="455" text-anchor="middle" fill="#fff" font-size="16">BP control, sleep, exercise,</text>
                    <text x="290" y="485" text-anchor="middle" fill="#fff" font-size="16">avoiding injury and smoking</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">COGNITIVE RESERVE</text>
                    <text x="810" y="265" text-anchor="middle" fill="#888" font-size="16">The software</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">Flexible, redundant networks</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">Reroutes around damage</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">Grown by:</text>
                    <text x="810" y="455" text-anchor="middle" fill="#fff" font-size="16">Education, complex work,</text>
                    <text x="810" y="485" text-anchor="middle" fill="#fff" font-size="16">languages, social richness</text>
                    <rect x="200" y="610" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">The best levers deposit into both accounts</text>
                </svg>`,
                caption: "Brain reserve is physical stock; cognitive reserve is network flexibility - fund both"
            }
        },
        {
            type: "example",
            title: "The New Drugs: Real Progress, Honest Limits",
            content: "In 2023, after decades of failed trials, two **anti-amyloid antibody drugs** won full FDA approval - and their numbers teach the most important lesson in this book.\n\n**Lecanemab (Leqembi)**: In the 1,795-person CLARITY AD trial, 18 months of IV infusions slowed cognitive decline by about **27%** versus placebo. Not stopped - slowed. Both groups declined; the treated group declined somewhat less.\n\n**Donanemab (Kisunla)**: In the TRAILBLAZER-ALZ 2 trial (1,736 participants), decline slowed by roughly **35%** in the earliest-stage patients, around 22% overall.\n\nThe costs of that modest slowing: regular infusions at list prices around **$26,000-32,000 per year**, frequent MRI monitoring, and a real side effect called **ARIA** - brain swelling or micro-bleeding - in roughly 20-35% of patients (usually silent, occasionally serious, rarely fatal).\n\nThese drugs are genuine milestones: the first to clearly alter the disease's biology. If a loved one is diagnosed early, they are worth discussing with a specialist - that is a doctor's conversation, not this book's.\n\nBut set the comparison side by side. Treatment: ~27-35% slower decline, after diagnosis, at high cost and risk. Prevention: ~45% of cases theoretically on the table, cheaply and safely, decades earlier. Prevention is not the consolation prize. **It is the better game.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TREATMENT VS. PREVENTION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the 2023 drug approvals really showed</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">NEW DRUGS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Lecanemab: ~27% slower decline</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Donanemab: ~35% (early stage)</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">over 18-month trials</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">IV infusions, ~30k dollars/year,</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">ARIA brain swelling in 20-35%</text>
                    <text x="290" y="500" text-anchor="middle" fill="#ef4444" font-size="16">Slows decline; does not stop it</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PREVENTION</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">~45% of cases theoretically</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">attributable to 14 factors</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">acting decades earlier</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Cheap, safe, side benefits</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">for heart and body</text>
                    <text x="810" y="500" text-anchor="middle" fill="#10b981" font-size="16">Acts before damage is done</text>
                    <rect x="200" y="610" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">Prevention beats treatment by a mile</text>
                </svg>`,
                caption: "Anti-amyloid drugs slow decline ~27-35% at high cost; prevention plays a far bigger hand"
            }
        },
        {
            type: "concept",
            title: "Why This Book Bets on the Modifiable 45%",
            content: "Put this lesson's pieces together and the strategy writes itself.\n\n**What you cannot control**: your age, your genes (including APOE4), and the ~55% of risk science has not mapped. Worrying about these is spending attention where you have no leverage.\n\n**What medicine can do after diagnosis**: slow decline by roughly a quarter to a third, in early-stage patients, at real cost and risk. Meaningful - and improving - but late.\n\n**What the biology hands you**: a 15-25 year silent phase before symptoms, a brain that rewires at every age, two reserve accounts that accept deposits for life, and a mixed-pathology reality where the vascular half is highly preventable.\n\nThat combination - a long warning window, a plastic brain, and levers that work - exists for almost no other feared disease. The 45% is not a guarantee; population statistics never promise individual outcomes, and some people do everything right and still get unlucky. Honesty requires saying so.\n\nBut playing the odds is not naive - it is exactly what you already do by wearing a seatbelt or not smoking. The next lesson lays out all 14 levers with their sizes, so you can see precisely where your own leverage lies.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STRATEGIC PICTURE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why prevention is the rational bet</text>
                    <rect x="80" y="170" width="300" height="260" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">CANNOT CONTROL</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">Age, genes, unknowns</text>
                    <text x="230" y="310" text-anchor="middle" fill="#888" font-size="15">Release the worry</text>
                    <rect x="400" y="170" width="300" height="260" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">DRUGS (LATE)</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">27-35% slower decline</text>
                    <text x="550" y="310" text-anchor="middle" fill="#888" font-size="15">After damage is done</text>
                    <rect x="720" y="170" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">YOU (EARLY)</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">14 levers, ~45% of risk</text>
                    <text x="870" y="310" text-anchor="middle" fill="#888" font-size="15">Decades of runway</text>
                    <rect x="150" y="490" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="535" text-anchor="middle" fill="#ffd700" font-size="20">A long window + a plastic brain + working levers</text>
                    <text x="550" y="570" text-anchor="middle" fill="#ffd700" font-size="20">= the best prevention case in medicine</text>
                </svg>`,
                caption: "Age and genes are fixed, drugs arrive late - the modifiable 45% is where your leverage lives"
            }
        },
        {
            type: "application",
            title: "Protect Both Accounts This Week",
            content: "Turn the two-account model into action right now:\n\n1. **Hardware: take your blood pressure** - Pharmacy machine, home cuff, or clinic. High BP silently damages white matter for decades. If it is above about 130/80, that is a doctor conversation worth having (guidelines vary - let your clinician interpret your number).\n\n2. **Hardware: protect your head** - Helmet on bikes, handrail on stairs, clear the tripping hazards on your most-walked route at home. Traumatic brain injury is one of the 14 levers.\n\n3. **Software: start one genuinely new thing** - Not a harder crossword (that is a well-worn network). Something your brain has never wired: a language app, an instrument, a dance class. Novelty is what forces new connections.\n\n4. **Software: schedule one real conversation** - Reserve grows through social complexity. Book the coffee, make the call.\n\n5. **File the warning-sign list** - Save this lesson's slower-versus-different list where you can find it. You are now the person in your family who knows the difference.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FUND BOTH ACCOUNTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five deposits you can make this week</text>
                    <rect x="150" y="170" width="800" height="80" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Hardware: take your blood pressure</text>
                    <rect x="150" y="280" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="330" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="330" text-anchor="start" fill="#fff" font-size="18">Hardware: helmet, handrails, clear floors</text>
                    <rect x="150" y="390" width="800" height="80" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="440" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="440" text-anchor="start" fill="#fff" font-size="18">Software: start one genuinely NEW skill</text>
                    <rect x="150" y="500" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="550" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="550" text-anchor="start" fill="#fff" font-size="18">Software: schedule one real conversation</text>
                    <rect x="150" y="610" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="660" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="660" text-anchor="start" fill="#fff" font-size="18">File the slower-vs-different warning list</text>
                </svg>`,
                caption: "Two hardware moves, two software moves, one piece of family knowledge"
            }
        },
        {
            type: "quiz",
            question: "What is the key difference between brain reserve and cognitive reserve?",
            options: [
                { text: "Brain reserve is the physical hardware (neurons, volume); cognitive reserve is the flexible software (redundant networks built by education and engagement)", correct: true },
                { text: "They are two names for the same protective mechanism against dementia", correct: false },
                { text: "Brain reserve is built in childhood, while cognitive reserve can only be built after age 65", correct: false },
                { text: "Cognitive reserve refers to new neurons grown in adulthood; brain reserve refers to the original set", correct: false }
            ],
            explanation: "Brain reserve is the hardware account - neuron count, synapse density, volume - a bigger stock that absorbs more damage before symptoms. Cognitive reserve is the software account - efficient, redundant networks that reroute around damage, built by education, complex work, and social engagement. They are related but partly independent, which is why they are not the same mechanism. And neither depends on adult neurogenesis, which remains scientifically unsettled - reserve is built by rewiring connections, not growing new cells.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWO RESERVE ACCOUNTS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Hardware and software protect differently</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Can you tell them apart?</text>
                    <rect x="150" y="360" width="380" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="340" y="410" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">HARDWARE?</text>
                    <text x="340" y="445" text-anchor="middle" fill="#888" font-size="15">Which reserve is this?</text>
                    <rect x="570" y="360" width="380" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="760" y="410" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">SOFTWARE?</text>
                    <text x="760" y="445" text-anchor="middle" fill="#888" font-size="15">And which is this?</text>
                </svg>`,
                caption: "Final check: hardware versus software reserve"
            }
        }
    ]
},
{
    id: 3,
    title: "The 14 Levers",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Map You'll Use for the Rest of This Book",
            content: "Imagine someone handed you a map of a minefield - not vague warnings, but the actual coordinates, with each hazard sized by how dangerous it is. You would study that map carefully.\n\nThis lesson is that map. The 2024 Lancet Commission did something rare in medicine: it didn't just list dementia risk factors, it **sized** them. For each of the 14 modifiable factors, the Commission calculated a **population attributable fraction** - the share of worldwide dementia cases theoretically linked to that factor. Hearing loss: about 7%. High LDL cholesterol: about 7%. Physical inactivity: about 2%. All fourteen, added with overlaps removed: about 45%.\n\nThat sizing changes how you act. Instead of a guilt-inducing list of everything you should do, you get a **ranked** list - and you'll discover the biggest levers are probably not the ones you'd guess. (Spoiler: your ears may matter more than your crossword habit.)\n\nBy the end of this lesson you'll know all 14, when in life each matters most, and which ones are yours.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A MAP WITH SIZES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Not just what matters - how much</text>
                    <rect x="150" y="180" width="800" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">MOST HEALTH ADVICE</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">A guilt list: do everything, equally, forever</text>
                    <rect x="150" y="360" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE LANCET APPROACH</text>
                    <text x="550" y="460" text-anchor="middle" fill="#fff" font-size="18">14 factors, each sized - so you can prioritize</text>
                    <rect x="150" y="540" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="595" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THIS LESSON</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Learn the full map, then find YOUR levers</text>
                </svg>`,
                caption: "The Lancet Commission sized every risk factor - turning a guilt list into a priority map"
            }
        },
        {
            type: "concept",
            title: "How the Sizing Works: Attributable Fractions",
            content: "Before the list, thirty seconds on what the percentages mean - because reading them right is half the value.\n\nA **population attributable fraction (PAF)** answers: *if this risk factor vanished from the entire population, what share of dementia cases would, in theory, not occur?*\n\nIt is built from two ingredients:\n• **How much the factor raises risk** (the relative risk, from long-term studies)\n• **How common the factor is** in the population (its prevalence)\n\nThis is why the rankings can surprise you. A factor that only modestly raises risk but affects **huge numbers of people** - like midlife hearing loss - can carry a bigger PAF than a factor that sharply raises risk but is rare.\n\nThree honest rules for reading PAFs:\n• They are **population-level** numbers, not personal probabilities. A 7% PAF does not mean your risk drops exactly 7% if you act\n• They **assume causality** - that the link is cause-and-effect, which is well-supported for some factors and still firming up for others\n• They **overlap** - people with one factor often have others, which is why the Commission's 14 individual numbers are adjusted before summing to ~45%\n\nWith those caveats loaded, you are ready to read the map like a scientist.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT A PAF MEANS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Population attributable fraction, decoded</text>
                    <rect x="60" y="180" width="460" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">RISK STRENGTH</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="16">How much the factor</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="16">raises dementia risk</text>
                    <rect x="580" y="180" width="460" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">HOW COMMON</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="16">What share of people</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="16">carry the factor</text>
                    <path d="M550 400 L550 450" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="550,450 542,438 558,438" fill="#14b8a6"/>
                    <rect x="250" y="470" width="600" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PAF: share of all cases</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="17">theoretically removable with the factor</text>
                    <rect x="150" y="660" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#f59e0b" font-size="18">Common + modest risk can outrank</text>
                    <text x="550" y="732" text-anchor="middle" fill="#f59e0b" font-size="18">rare + strong risk</text>
                </svg>`,
                caption: "PAF combines risk strength with prevalence - which is why common factors like hearing loss rank high"
            }
        },
        {
            type: "visual",
            title: "The Full Map: All 14 Levers, Sized",
            content: "Here it is - the complete 2024 Lancet Commission list. Percentages are each factor's population attributable fraction. Together, adjusted for overlap, they cover about **45%** of dementia cases worldwide. Notice the two giants: **hearing loss** and **high LDL cholesterol**, at about 7% each.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 14 LEVERS, SIZED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lancet 2024 population attributable fractions</text>
                    <text x="130" y="165" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">EARLY LIFE</text>
                    <rect x="130" y="185" width="350" height="44" rx="8" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="214" text-anchor="start" fill="#fff" font-size="17">Less education</text>
                    <text x="460" y="214" text-anchor="end" fill="#3b82f6" font-weight="bold" font-size="17">5%</text>
                    <text x="130" y="280" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">MIDLIFE</text>
                    <rect x="130" y="300" width="470" height="44" rx="8" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="329" text-anchor="start" fill="#fff" font-size="17">Hearing loss</text>
                    <text x="580" y="329" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">7%</text>
                    <rect x="130" y="354" width="470" height="44" rx="8" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="383" text-anchor="start" fill="#fff" font-size="17">High LDL cholesterol</text>
                    <text x="580" y="383" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">7%</text>
                    <rect x="130" y="408" width="290" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="437" text-anchor="start" fill="#fff" font-size="17">Depression</text>
                    <text x="400" y="437" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">3%</text>
                    <rect x="130" y="462" width="290" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="491" text-anchor="start" fill="#fff" font-size="17">Traumatic brain injury</text>
                    <text x="400" y="491" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">3%</text>
                    <rect x="130" y="516" width="230" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="545" text-anchor="start" fill="#fff" font-size="17">Physical inactivity</text>
                    <text x="340" y="545" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">2%</text>
                    <rect x="130" y="570" width="230" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="599" text-anchor="start" fill="#fff" font-size="17">Diabetes</text>
                    <text x="340" y="599" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">2%</text>
                    <rect x="130" y="624" width="230" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="653" text-anchor="start" fill="#fff" font-size="17">Smoking</text>
                    <text x="340" y="653" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">2%</text>
                    <rect x="130" y="678" width="230" height="44" rx="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="707" text-anchor="start" fill="#fff" font-size="17">Hypertension</text>
                    <text x="340" y="707" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">2%</text>
                    <rect x="130" y="732" width="170" height="44" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="761" text-anchor="start" fill="#fff" font-size="17">Obesity</text>
                    <text x="280" y="761" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">1%</text>
                    <rect x="130" y="786" width="170" height="44" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="815" text-anchor="start" fill="#fff" font-size="17">Excess alcohol</text>
                    <text x="280" y="815" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="17">1%</text>
                    <text x="620" y="437" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">LATER LIFE</text>
                    <rect x="620" y="457" width="350" height="44" rx="8" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="640" y="486" text-anchor="start" fill="#fff" font-size="17">Social isolation</text>
                    <text x="950" y="486" text-anchor="end" fill="#10b981" font-weight="bold" font-size="17">5%</text>
                    <rect x="620" y="511" width="290" height="44" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="640" y="540" text-anchor="start" fill="#fff" font-size="17">Air pollution</text>
                    <text x="890" y="540" text-anchor="end" fill="#10b981" font-weight="bold" font-size="17">3%</text>
                    <rect x="620" y="565" width="230" height="44" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="640" y="594" text-anchor="start" fill="#fff" font-size="17">Vision loss</text>
                    <text x="830" y="594" text-anchor="end" fill="#10b981" font-weight="bold" font-size="17">2%</text>
                    <rect x="620" y="680" width="350" height="120" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="795" y="730" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">Total: ~45%</text>
                    <text x="795" y="768" text-anchor="middle" fill="#888" font-size="15">adjusted for overlap</text>
                    <rect x="130" y="880" width="840 " height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#6366f1" font-size="19">Bar length = size of the lever</text>
                </svg>`,
                caption: "All 14 factors with their attributable fractions - hearing loss and LDL cholesterol lead at ~7% each"
            }
        },
        {
            type: "concept",
            title: "Early Life and Midlife: Where the Big Levers Cluster",
            content: "**Early life - one factor, a big one:**\n• **Less education (~5%)**: Fewer years of schooling means less cognitive reserve banked before adulthood. If your formal schooling ended early, this is NOT a life sentence - reserve accepts deposits for life. But it explains why education policy is dementia policy\n\n**Midlife (roughly 45-65) - ten factors, the heart of the map:**\n• **Hearing loss (~7%)**: The single largest factor. Untreated hearing loss starves the brain of input, strains it with decoding effort, and isolates you socially. Hearing aids appear to erase most of the added risk\n• **High LDL cholesterol (~7%)**: Tied with hearing at the top - and brand new to the 2024 list\n• **Depression (~3%)**: Both a risk factor and an early symptom - the arrow runs both ways, and treating it matters either way\n• **Traumatic brain injury (~3%)**: Helmets and fall-proofing are dementia prevention\n• **Physical inactivity (~2%)**, **diabetes (~2%)**, **smoking (~2%)**, **hypertension (~2%)**, **obesity (~1%)**, **excess alcohol (~1%)**: The cardiometabolic cluster - each modest alone, but they travel in packs and compound each other\n\nAdd midlife's ten together and you get most of the modifiable total. These two decades are where the map says: focus here.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIDLIFE TEN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Plus education, the early-life foundation</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE TWO GIANTS: ~7% EACH</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="18">Hearing loss and high LDL cholesterol</text>
                    <rect x="100" y="340" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="320" y="395" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE MIDDLEWEIGHTS</text>
                    <text x="320" y="440" text-anchor="middle" fill="#fff" font-size="16">Depression ~3%</text>
                    <text x="320" y="472" text-anchor="middle" fill="#fff" font-size="16">Brain injury ~3%</text>
                    <rect x="580" y="340" width="420" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="790" y="395" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE CARDIO CLUSTER</text>
                    <text x="790" y="440" text-anchor="middle" fill="#fff" font-size="16">Inactivity, diabetes, smoking,</text>
                    <text x="790" y="472" text-anchor="middle" fill="#fff" font-size="16">BP, obesity, alcohol: 1-2% each</text>
                    <rect x="100" y="560" width="900 " height="110" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">EARLY LIFE: EDUCATION ~5%</text>
                    <text x="550" y="648" text-anchor="middle" fill="#fff" font-size="17">Reserve banked young - but deposits never close</text>
                </svg>`,
                caption: "Midlife holds ten of the fourteen levers, led by hearing loss and LDL cholesterol at ~7% each"
            }
        },
        {
            type: "quiz",
            question: "According to the 2024 Lancet Commission, which TWO factors carry the largest population attributable fractions (~7% each)?",
            options: [
                { text: "Smoking and obesity", correct: false },
                { text: "Physical inactivity and social isolation", correct: false },
                { text: "Hearing loss and high LDL cholesterol", correct: true },
                { text: "Depression and diabetes", correct: false }
            ],
            explanation: "Hearing loss and high LDL cholesterol top the 2024 list at roughly 7% each - and most people would never guess either one. The famous villains rank lower: smoking ~2%, obesity ~1%, inactivity ~2%. Remember why: a PAF blends risk strength with how common the factor is, and both hearing loss and high LDL are extremely widespread in midlife. This is exactly why the sized map beats intuition when deciding where to spend your effort.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE TOP OF THE MAP</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Fourteen levers, but two stand tallest</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which pair leads at ~7% each?</text>
                    <rect x="200" y="360" width="320" height="150" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="360" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">? ~7%</text>
                    <rect x="580" y="360" width="320" height="150" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="740" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">? ~7%</text>
                </svg>`,
                caption: "Name the two biggest levers on the 2024 map"
            }
        },
        {
            type: "concept",
            title: "Later Life: Three Levers That Stay Live",
            content: "The map does not end at 65. Three factors matter most in later life - and all three stay fully actionable:\n\n• **Social isolation (~5%)**: The third-biggest factor on the entire list. Infrequent contact, loneliness, and shrinking social circles starve the brain of its most demanding workout - other people. Conversation is improvisational, emotional, memory-loaded cognition, and losing it shows up in the risk numbers. Note the tangle with hearing: untreated hearing loss often CAUSES the isolation\n\n• **Air pollution (~3%)**: The factor you did not expect. Long-term exposure to fine particulate matter (**PM2.5** - particles small enough to reach the brain via blood and possibly the olfactory nerve) is linked to higher dementia risk across large cohort studies. You cannot filter a city, but you can check air-quality indexes, ventilate wisely, and weigh air in decisions about where you live and exercise\n\n• **Vision loss (~2%)**: New to the 2024 list. Untreated vision problems - often as fixable as **cataract surgery** - degrade input, curtail activity, and isolate, much like hearing loss does\n\nThe pattern across all three: later-life risk is substantially about **staying connected to the world** - socially, and through your senses. Keep the channels open.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LATER-LIFE THREE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stay connected to the world</text>
                    <rect x="80" y="170" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ISOLATION ~5%</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="16">Conversation is the</text>
                    <text x="230" y="300" text-anchor="middle" fill="#fff" font-size="16">brain's best workout</text>
                    <text x="230" y="355" text-anchor="middle" fill="#888" font-size="15">3rd biggest lever overall</text>
                    <rect x="400" y="170" width="300" height="260" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">POLLUTION ~3%</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">PM2.5 particles reach</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="16">the brain itself</text>
                    <text x="550" y="355" text-anchor="middle" fill="#888" font-size="15">The unexpected factor</text>
                    <rect x="720" y="170" width="300" height="260" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">VISION ~2%</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="16">Often fixable with</text>
                    <text x="870" y="300" text-anchor="middle" fill="#fff" font-size="16">cataract surgery</text>
                    <text x="870" y="355" text-anchor="middle" fill="#888" font-size="15">New in 2024</text>
                    <rect x="200" y="490" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#ffd700" font-size="20">Keep the senses and the social channels open</text>
                </svg>`,
                caption: "Later life: social isolation, air pollution, and vision loss - all still actionable"
            }
        },
        {
            type: "concept",
            title: "New for 2024: Cholesterol and Cataracts",
            content: "The Lancet Commission list is not frozen - it grows as evidence matures. The 2020 report had 12 factors; the 2024 report added two, and both additions tell you something about how science firms up.\n\n**High LDL cholesterol (~7%)**: Long suspected, now backed by enough long-term cohort data to enter the list - straight into a tie for first place. Elevated midlife LDL damages the brain both through vessel disease and, likely, through amyloid-related pathways. The practical kicker: LDL is among the most treatable numbers in all of medicine - diet, exercise, and some of the world's most-studied drugs (statins) all move it. A giant lever with well-worn handles.\n\n**Untreated vision loss (~2%)**: The evidence here includes a striking natural experiment - in large US cohort studies, older adults who had **cataract surgery** went on to develop dementia at meaningfully lower rates than comparable adults with cataracts who did not have surgery (about 30% lower in one major 2022 study, though observational data can't fully prove cause).\n\nWhy this matters beyond the two factors: it shows the 45% figure is, if anything, a **moving floor**. As evidence sharpens, the modifiable share has grown - from 35% (2017) to 40% (2020) to 45% (2024). The map keeps expanding in your favor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LIST KEEPS GROWING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two factors added in 2024</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HIGH LDL ~7%</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="16">Entered the list in a tie</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="16">for first place</text>
                    <text x="290" y="370" text-anchor="middle" fill="#888" font-size="15">Among the most treatable</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="15">numbers in medicine</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">VISION LOSS ~2%</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="16">Cataract surgery linked to</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="16">~30% lower dementia rates</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="15">Observational evidence -</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="15">promising, not proof</text>
                    <rect x="150" y="530" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE MODIFIABLE SHARE KEEPS RISING</text>
                    <text x="550" y="628" text-anchor="middle" fill="#fff" font-size="18">35% (2017) to 40% (2020) to 45% (2024)</text>
                </svg>`,
                caption: "LDL cholesterol and vision loss joined in 2024 - and the modifiable share keeps climbing"
            }
        },
        {
            type: "example",
            title: "The ACHIEVE Trial: Testing the Biggest Lever",
            content: "PAFs come from observational data - so scientists put the biggest lever to a real test.\n\nThe **ACHIEVE trial** (published in The Lancet, 2023) was the first large randomized controlled trial of hearing intervention for cognition. Researchers led by **Frank Lin** at Johns Hopkins enrolled **977 older adults** (ages 70-84) with untreated hearing loss and randomly assigned them to either hearing aids plus audiology support, or a health-education control.\n\nThe headline result was a study in honest science:\n• Across ALL participants over 3 years: **no significant difference** in cognitive decline\n• But in the pre-specified subgroup at **higher risk** of decline (older, more cardiovascular risk factors): hearing aids cut the rate of cognitive decline by about **48%** - nearly in half\n\nHow to read that fairly: hearing aids are not a universal brain shield, and three years is short for a slow disease. But in the people with the most decline to slow, treating hearing appeared to slow it dramatically. Follow-up research is ongoing.\n\nMeanwhile, the intervention itself costs little, has essentially no downside, and immediately improves daily life. Few bets in medicine offer that risk-reward. Lesson 4 is devoted entirely to this lever.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ACHIEVE TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">977 adults, hearing aids vs. control, 3 years</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">ALL PARTICIPANTS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">No significant overall</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">difference at 3 years</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="15">Honest result, honestly reported</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">HIGH-RISK GROUP</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Cognitive decline slowed</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">by about 48%</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="15">Pre-specified subgroup analysis</text>
                    <rect x="200" y="530" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="570" text-anchor="middle" fill="#ffd700" font-size="20">Low cost, no downside, big upside</text>
                    <text x="550" y="602" text-anchor="middle" fill="#ffd700" font-size="20">where it matters most</text>
                </svg>`,
                caption: "ACHIEVE 2023: hearing aids halved cognitive decline in the high-risk subgroup"
            }
        },
        {
            type: "example",
            title: "One Person, Several Levers: Meet Robert",
            content: "Abstract percentages become real when you walk through a life. Meet Robert, 58 - a composite of the most common midlife pattern.\n\nRobert is an accountant. His last physical showed **LDL of 165** (high) and **blood pressure of 142/88** (elevated). His wife teases him about the TV volume creeping up, and he has started dreading noisy restaurants - following conversation is exhausting, so he begs off more dinners than he used to. Desk job, no regular exercise. He quit smoking at 40, which was a genuine win.\n\nCount Robert's active levers: **high LDL (~7%)**, **hearing loss (~7%)** - the two giants - plus **hypertension (~2%)**, **physical inactivity (~2%)**, and the early social withdrawal that hearing loss drags in behind it (**isolation, ~5%**, arriving ahead of schedule).\n\nNotice three things. First, Robert is completely ordinary - this is not a worst case, it is a Tuesday. Second, his levers **interact**: the hearing loss is quietly creating the isolation; the inactivity feeds the LDL and blood pressure. Third, every single one is actionable, mostly with routine care: a statin conversation, a hearing test, a BP plan, a walking habit.\n\nRobert cannot change his age or his genes. But the map hands him five live levers. So will yours - that is the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ROBERT, 58</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One ordinary midlife, five live levers</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">LDL 165 (~7%)</text>
                    <text x="300" y="275" text-anchor="middle" fill="#888" font-size="16">Statin conversation due</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HEARING (~7%)</text>
                    <text x="800" y="275" text-anchor="middle" fill="#888" font-size="16">TV up, restaurants exhausting</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">BP 142/88 (~2%)</text>
                    <text x="300" y="495" text-anchor="middle" fill="#888" font-size="16">Elevated, untreated</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">INACTIVITY (~2%)</text>
                    <text x="800" y="495" text-anchor="middle" fill="#888" font-size="16">Desk job, no routine</text>
                    <rect x="200" y="610" width="700" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PLUS: early isolation (~5%)</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="17">dragged in by the untreated hearing loss</text>
                </svg>`,
                caption: "An ordinary midlife profile activates five of the fourteen levers - all of them actionable"
            }
        },
        {
            type: "concept",
            title: "Reading the Numbers Like a Scientist",
            content: "Before your personal audit, lock in the honest interpretation. Three cautions and one encouragement:\n\n**Caution 1 - Population, not personal.** A 7% PAF means: if untreated hearing loss vanished from Earth, ~7% of dementia cases would theoretically not occur. It does NOT mean hearing aids cut YOUR risk by exactly 7%. Individual benefit depends on whether you have the factor, how severely, for how long, and on luck.\n\n**Caution 2 - Causality is assumed.** PAF math treats every link as fully cause-and-effect. For hypertension and smoking, causality is well-established. For others, some of the association may run backwards (early disease causing depression or withdrawal) or reflect shared causes. The Commission weighs this - reverse-causation concerns are one reason sleep, for instance, is discussed but not on the list of 14.\n\n**Caution 3 - No guarantees.** Some people pull every lever and still develop dementia. Prevention shifts odds; it does not issue contracts. Anyone promising certainty is selling something.\n\n**The encouragement**: these same caveats apply to every prevention triumph of the last century - seatbelts, statins, quitting smoking. Odds-shifting at scale is how modern medicine saves millions of lives. You are not being promised immunity. You are being handed the same kind of bet - with a ~45% pot.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HONEST FINE PRINT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How to read attributable fractions</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">POPULATION-LEVEL ESTIMATES</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="17">Not your personal risk calculator</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="355" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CAUSALITY IS ASSUMED</text>
                    <text x="550" y="395" text-anchor="middle" fill="#fff" font-size="17">Strong for some factors, still firming for others</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="495" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">NO GUARANTEES</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="17">Prevention shifts odds; it does not issue contracts</text>
                    <rect x="150" y="620" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">STILL THE BEST BET IN TOWN</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">Same logic as seatbelts, statins, quitting smoking</text>
                </svg>`,
                caption: "Three cautions, one encouragement: read PAFs as odds-shifters, not promises"
            }
        },
        {
            type: "visual",
            title: "The Life-Course Map: Which Levers, When",
            content: "The final view of the map: the 14 levers laid along a lifetime. Early life banks reserve. Midlife defends the hardware. Later life keeps the channels open. Wherever you are standing, some levers are at maximum leverage right now.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LEVERS ALONG A LIFETIME</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where each factor bites hardest</text>
                    <line x1="100" y1="200" x2="1000" y2="200" stroke="#888" stroke-width="3"/>
                    <polygon points="1000,200 986,192 986,208" fill="#888"/>
                    <text x="160" y="240" text-anchor="middle" fill="#888" font-size="16">Birth</text>
                    <text x="450" y="240" text-anchor="middle" fill="#888" font-size="16">45</text>
                    <text x="740" y="240" text-anchor="middle" fill="#888" font-size="16">65</text>
                    <text x="950" y="240" text-anchor="middle" fill="#888" font-size="16">90+</text>
                    <rect x="100" y="290" width="320" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="260" y="345" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">EARLY LIFE</text>
                    <text x="260" y="385" text-anchor="middle" fill="#fff" font-size="16">Education (5%)</text>
                    <rect x="390" y="490" width="380" height="270 " rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="580" y="540" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MIDLIFE 45-65</text>
                    <text x="580" y="580" text-anchor="middle" fill="#fff" font-size="15">Hearing (7%) LDL (7%)</text>
                    <text x="580" y="610" text-anchor="middle" fill="#fff" font-size="15">Depression (3%) TBI (3%)</text>
                    <text x="580" y="640" text-anchor="middle" fill="#fff" font-size="15">Inactivity, diabetes, smoking,</text>
                    <text x="580" y="670" text-anchor="middle" fill="#fff" font-size="15">BP (2% each)</text>
                    <text x="580" y="700" text-anchor="middle" fill="#fff" font-size="15">Obesity, alcohol (1% each)</text>
                    <rect x="700" y="290" width="320" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="860" y="340" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LATER LIFE 65+</text>
                    <text x="860" y="380" text-anchor="middle" fill="#fff" font-size="15">Isolation (5%) Pollution (3%)</text>
                    <text x="860" y="410" text-anchor="middle" fill="#fff" font-size="15">Vision (2%)</text>
                    <rect x="200" y="820" width="700 " height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">Wherever you stand, levers are live</text>
                </svg>`,
                caption: "The full life-course map: one early-life lever, ten in midlife, three in later life"
            }
        },
        {
            type: "application",
            title: "Your Personal Lever Audit",
            content: "Time to turn the map into YOUR map. Take five minutes with a pen (writing it down matters):\n\n1. **List your live levers** - Go through all 14 honestly: education cut short? Hearing suspicions? Know your LDL and BP, or not? Depression untreated? Head-injury exposure? Under 150 minutes/week of movement? Diabetes or prediabetes? Smoking? Weight? More than ~2 drinks/day? Thin social calendar? Polluted area? Overdue eye exam?\n\n2. **Star your two giants** - Which of your live levers carries the biggest number? Those two stars are your priority. (Unknown LDL or an unexamined hearing suspicion counts as live until proven otherwise.)\n\n3. **Book one appointment** - The audit usually surfaces missing data: a hearing test, a lipid panel, an eye exam, a BP check. Schedule exactly one this week. Data before heroics.\n\n4. **Keep the list** - The next nine lessons take the levers one at a time. Your starred audit tells you which lessons are, for you, the whole ballgame.\n\nShare the exercise with someone you love - their map will differ from yours, and doing it together covers both.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR LEVER AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five minutes, pen and paper</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="225" text-anchor="start" fill="#fff" font-size="18">Walk all 14 - list your live levers</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="345" text-anchor="start" fill="#fff" font-size="18">Star your two biggest</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="465" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="465" text-anchor="start" fill="#fff" font-size="18">Book ONE appointment this week</text>
                    <rect x="150" y="530" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="585" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="585" text-anchor="start" fill="#fff" font-size="18">Keep the list - it picks your key lessons</text>
                </svg>`,
                caption: "Audit all 14, star your giants, book one appointment, keep the list"
            }
        },
        {
            type: "quiz",
            question: "A headline claims: hearing loss has a 7% attributable fraction, so wearing hearing aids will reduce your personal dementia risk by 7%. What is wrong with this reading?",
            options: [
                { text: "Nothing - attributable fractions translate directly into personal risk reduction", correct: false },
                { text: "PAFs are population-level estimates that assume causality; they describe the share of all cases linked to a factor, not a guaranteed personal benefit", correct: true },
                { text: "The 7% figure is wrong - hearing loss was removed from the 2024 Lancet list", correct: false },
                { text: "Hearing aids have been proven to have no effect on cognition, so the true benefit is zero", correct: false }
            ],
            explanation: "A PAF describes populations: if untreated hearing loss disappeared everywhere, about 7% of dementia cases would theoretically not occur - assuming the link is fully causal. Your personal benefit depends on whether and how severely you carry the factor, for how long, and on chance. The zero-benefit answer overcorrects: ACHIEVE showed hearing aids cut decline about 48% in the high-risk subgroup. Read PAFs as odds-shifters for prioritizing effort - not as personal promises in either direction.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">READING PAFS HONESTLY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Population estimate or personal promise?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Spot the flaw in the headline</text>
                    <rect x="150" y="360" width="380" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">POPULATION</text>
                    <text x="340" y="445" text-anchor="middle" fill="#888" font-size="15">What PAFs describe</text>
                    <rect x="570" y="360" width="380" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="410" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">PERSONAL</text>
                    <text x="760" y="445" text-anchor="middle" fill="#888" font-size="15">What they do not promise</text>
                </svg>`,
                caption: "Final check: what attributable fractions do and do not tell you"
            }
        }
    ]
},
{
    id: 4,
    title: "Hearing: The Surprise Heavyweight",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Biggest Lever Almost Nobody Knows About",
            content: "Quick quiz: what is the single largest modifiable midlife risk factor for dementia? Most people guess smoking, or blood pressure, or maybe diabetes. Almost nobody guesses the real answer: **hearing loss**.\n\nIn the 2024 Lancet Commission model, untreated hearing loss carries a larger attributable fraction than any other midlife factor -- bigger than smoking, bigger than hypertension, bigger than obesity. And unlike your genes, it is something you can actually measure this month and treat this year.\n\nHere is the strange part: hearing loss creeps in so slowly that most people do not notice for years. You turn the TV up a little. You start avoiding loud restaurants. You blame mumbling. Meanwhile, your brain is quietly paying a price.\n\nThis lesson shows you why your ears are one of the most underrated doors to your brain -- and exactly what to do about it, starting in your 40s.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HIDDEN HEAVYWEIGHT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What most people guess vs. what the data says</text>
                    <rect x="90" y="170" width="440" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="310" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">MOST PEOPLE GUESS</text>
                    <text x="310" y="290" text-anchor="middle" fill="#fff" font-size="20">Smoking</text>
                    <text x="310" y="330" text-anchor="middle" fill="#fff" font-size="20">High blood pressure</text>
                    <text x="310" y="370" text-anchor="middle" fill="#fff" font-size="20">Diabetes</text>
                    <text x="310" y="425" text-anchor="middle" fill="#888" font-size="16">All real factors, all smaller</text>
                    <rect x="570" y="170" width="440" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE ACTUAL ANSWER</text>
                    <text x="790" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">Hearing loss</text>
                    <text x="790" y="355" text-anchor="middle" fill="#fff" font-size="19">Largest midlife factor in the</text>
                    <text x="790" y="390" text-anchor="middle" fill="#fff" font-size="19">2024 Lancet Commission model</text>
                    <text x="790" y="435" text-anchor="middle" fill="#888" font-size="16">And it is measurable and treatable</text>
                    <rect x="150" y="540" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHY IT HIDES</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="19">Hearing fades over years, not overnight</text>
                    <text x="550" y="680" text-anchor="middle" fill="#888" font-size="17">Louder TV, avoided restaurants, blamed mumbling</text>
                    <rect x="200" y="770" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="20">Your ears are a door to your brain</text>
                </svg>`,
                caption: "The midlife risk factor almost nobody names first"
            }
        },
        {
            type: "concept",
            title: "Seven Percent: Bigger Than Smoking",
            content: "The 2024 Lancet Commission on dementia estimated that if untreated **hearing loss** were eliminated at the population level, roughly **7% of dementia cases** could be prevented or delayed. That is the largest single midlife slice in their 14-factor model.\n\nFor comparison, the same model assigns roughly:\n• **Hearing loss (midlife): ~7%**\n• **High LDL cholesterol: ~7%**\n• **Smoking: ~2%**\n• **Hypertension: ~2%**\n• **Diabetes: ~2%**\n• **Physical inactivity: ~2%**\n\nA quick honesty note: attributable fractions are **population-level estimates**, not personal guarantees. They assume the association is causal and lean on observational data, so treat the exact numbers as best estimates, not physics. But the ranking itself is striking -- and it has held up as the Commission updated its model in 2017, 2020, and 2024.\n\nWhy would hearing matter so much? Partly because hearing loss is **extremely common** -- most adults over 60 have some measurable loss -- and partly because it hits the brain through several channels at once. That is where we go next.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 7% FINDING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lancet Commission 2024 attributable fractions</text>
                    <text x="200" y="205" text-anchor="end" fill="#fff" font-size="20">Hearing loss</text>
                    <rect x="230" y="180" width="700" height="44" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="960" y="210" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">~7%</text>
                    <text x="200" y="290" text-anchor="end" fill="#fff" font-size="20">High LDL</text>
                    <rect x="230" y="265" width="700" height="44" rx="10" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="960" y="295" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">~7%</text>
                    <text x="200" y="375" text-anchor="end" fill="#fff" font-size="20">Smoking</text>
                    <rect x="230" y="350" width="200" height="44" rx="10" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="460" y="380" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="22">~2%</text>
                    <text x="200" y="460" text-anchor="end" fill="#fff" font-size="20">Hypertension</text>
                    <rect x="230" y="435" width="200" height="44" rx="10" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="460" y="465" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">~2%</text>
                    <text x="200" y="545" text-anchor="end" fill="#fff" font-size="20">Diabetes</text>
                    <rect x="230" y="520" width="200" height="44" rx="10" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="460" y="550" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">~2%</text>
                    <text x="200" y="630" text-anchor="end" fill="#fff" font-size="20">Inactivity</text>
                    <rect x="230" y="605" width="200" height="44" rx="10" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="460" y="635" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">~2%</text>
                    <rect x="150" y="720" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Population estimates, not personal guarantees</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="17">But the ranking has held across 2017, 2020, and 2024</text>
                </svg>`,
                caption: "Midlife attributable fractions in the 2024 Lancet model"
            }
        },
        {
            type: "concept",
            title: "Three Ways Hearing Loss Hurts the Brain",
            content: "Hearing loss is not just an ear problem. Researchers point to **three mechanisms** that connect it to cognitive decline:\n\n• **1. Cognitive load.** When speech arrives garbled, your brain spends enormous effort just decoding the words. That effort is stolen from the systems that would normally **encode memories** and follow meaning. You can win the sentence and still lose the conversation.\n\n• **2. Understimulation and atrophy.** The auditory cortex is a use-it-or-lose-it system. Brain imaging studies link hearing loss to **faster atrophy** in auditory regions and in nearby temporal-lobe structures involved in memory. An under-fed brain region shrinks.\n\n• **3. Social withdrawal.** This may be the biggest one. When conversation becomes exhausting, people quietly stop going -- fewer dinners, fewer calls, fewer clubs. Hearing loss slides into **isolation**, and isolation is itself a dementia risk factor. One lever pulls another.\n\nNo single mechanism is proven to carry the whole effect, and researchers debate their relative weight. But all three push in the same direction, which is part of why the association shows up so consistently across studies.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE MECHANISMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How muffled ears become a strained brain</text>
                    <rect x="150" y="160" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">1. COGNITIVE LOAD</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="19">Decoding garbled speech steals processing power</text>
                    <text x="550" y="298" text-anchor="middle" fill="#888" font-size="17">Effort spent hearing is effort not spent remembering</text>
                    <rect x="150" y="380" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">2. UNDERSTIMULATION</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="19">Auditory cortex atrophies without input</text>
                    <text x="550" y="518" text-anchor="middle" fill="#888" font-size="17">Imaging links hearing loss to faster temporal-lobe shrinkage</text>
                    <rect x="150" y="600" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">3. SOCIAL WITHDRAWAL</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="19">Exhausting conversations lead to quiet isolation</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="17">And isolation is its own dementia risk factor</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Three channels, all pushing the same direction</text>
                </svg>`,
                caption: "Cognitive load, atrophy, and isolation stack on each other"
            }
        },
        {
            type: "example",
            title: "The Restaurant Test",
            content: "Picture a 58-year-old named Marta at a birthday dinner in a busy restaurant. Clattering plates, music, six conversations at once.\n\nFive years ago she followed every joke. Tonight she catches maybe 70% of the words, and her brain works overtime filling the gaps from context. By dessert she has a headache and has said little beyond nodding. On the drive home she realizes she cannot remember much of what was said -- not because her memory failed, but because her brain **never got to encode it**. All its fuel went to decoding.\n\nNext month, when the group plans another dinner, Marta says she is busy. That is mechanism three kicking in: the slow slide from **hard to hear** to **easier to stay home**.\n\nHere is the twist worth remembering: to the rest of the table, Marta seemed **checked out** -- slow to respond, off-topic once or twice. Untreated hearing loss often reads to others as cognitive decline. The tragedy is that people avoid hearing aids because they fear looking old, while the untreated loss itself is what makes them seem foggy.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RESTAURANT TEST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One dinner, three mechanisms in action</text>
                    <rect x="60" y="180" width="300" height="220" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">DURING DINNER</text>
                    <text x="210" y="285" text-anchor="middle" fill="#fff" font-size="17">Catches ~70% of words</text>
                    <text x="210" y="320" text-anchor="middle" fill="#888" font-size="15">Brain strains to fill gaps</text>
                    <path d="M360 290 L400 290" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="400,290 388,282 388,298" fill="#14b8a6"/>
                    <rect x="400" y="180" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">DRIVE HOME</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="17">Remembers little</text>
                    <text x="550" y="320" text-anchor="middle" fill="#888" font-size="15">Decoding beat encoding</text>
                    <path d="M700 290 L740 290" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="740,290 728,282 728,298" fill="#14b8a6"/>
                    <rect x="740" y="180" width="300" height="220" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="890" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NEXT INVITE</text>
                    <text x="890" y="285" text-anchor="middle" fill="#fff" font-size="17">Says she is busy</text>
                    <text x="890" y="320" text-anchor="middle" fill="#888" font-size="15">Withdrawal begins</text>
                    <rect x="150" y="480" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE CRUEL IRONY</text>
                    <text x="550" y="585" text-anchor="middle" fill="#fff" font-size="19">People skip hearing aids to avoid looking old</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="19">but untreated loss is what reads as decline</text>
                    <rect x="200" y="740" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="20">Foggy is not the ears failing quietly</text>
                </svg>`,
                caption: "How one noisy dinner shows all three mechanisms"
            }
        },
        {
            type: "quiz",
            question: "According to the 2024 Lancet Commission model, roughly what share of dementia cases is attributable to untreated midlife hearing loss?",
            options: [
                { text: "About 1%, far behind smoking and hypertension", correct: false },
                { text: "About 7%, the largest single midlife factor in the model", correct: true },
                { text: "About 25%, because hearing loss directly causes dementia", correct: false },
                { text: "About 40%, the combined total of all 14 risk factors", correct: false }
            ],
            explanation: "The 2024 Lancet Commission attributes roughly 7% of dementia cases to untreated midlife hearing loss -- larger than smoking, hypertension, or diabetes, which each sit around 2%. The 25% option overstates it and wrongly claims direct causation; these are population-level estimates that assume the association is causal. The ~40% (now ~45%) figure is the combined total for all 14 modifiable factors together, not hearing alone.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE MIDLIFE RANKING</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">One factor tops the 2024 Lancet midlife list</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">Hint: it arrives quietly, one skipped dinner at a time</text>
                    <rect x="250" y="390" width="600" height="180" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REMEMBER THE SCALE</text>
                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="18">Smoking, hypertension, diabetes:</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="18">each around 2% in the same model</text>
                </svg>`,
                caption: "Test your understanding of the Lancet 2024 ranking"
            }
        },
        {
            type: "concept",
            title: "ACHIEVE: The First Big Hearing-Aid Trial",
            content: "Associations are one thing. The real question is: does **treating** hearing loss actually slow cognitive decline? In 2023 we finally got the first large randomized answer.\n\nThe **ACHIEVE trial** (Lin et al., published in The Lancet, 2023) enrolled **977 adults aged 70-84** with untreated mild-to-moderate hearing loss and randomized them to either:\n\n• **Hearing intervention** -- professionally fitted hearing aids plus audiologist support, or\n• **Control** -- a health-education program on healthy aging\n\nThen researchers tracked cognition for **3 years**.\n\nOne design detail matters enormously. Participants came from two pools:\n\n• **ARIC cohort members** -- older adults from a long-running heart-health study, with more risk factors for cognitive decline\n• **Healthy volunteers** -- people who answered ads, who tend to be healthier and sharper than average\n\nThat split turned out to be the key to reading the results honestly -- because the two groups responded very differently. Keep it in mind for the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ACHIEVE TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lin et al., The Lancet 2023 -- a true RCT</text>
                    <rect x="250" y="160" width="600" height="120" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">977 adults, ages 70-84</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Untreated mild-to-moderate hearing loss</text>
                    <path d="M550 280 L550 330" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="550,330 542,318 558,318" fill="#14b8a6"/>
                    <rect x="90" y="350" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="310" y="405" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HEARING ARM</text>
                    <text x="310" y="450" text-anchor="middle" fill="#fff" font-size="17">Fitted hearing aids plus</text>
                    <text x="310" y="483" text-anchor="middle" fill="#fff" font-size="17">audiologist support</text>
                    <rect x="570" y="350" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="790" y="405" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CONTROL ARM</text>
                    <text x="790" y="450" text-anchor="middle" fill="#fff" font-size="17">Healthy-aging education</text>
                    <text x="790" y="483" text-anchor="middle" fill="#fff" font-size="17">program</text>
                    <rect x="150" y="590" width="800" height="230" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="648" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">TWO VERY DIFFERENT POOLS</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="18">ARIC cohort: higher-risk older adults</text>
                    <text x="550" y="733" text-anchor="middle" fill="#fff" font-size="18">Volunteers: healthier than average</text>
                    <text x="550" y="778" text-anchor="middle" fill="#888" font-size="16">This split is the key to reading the results</text>
                    <rect x="250" y="870" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Followed for 3 years of cognition</text>
                </svg>`,
                caption: "Design of the first large hearing-aid RCT"
            }
        },
        {
            type: "example",
            title: "What ACHIEVE Actually Found",
            content: "The results tell a two-part story, and honesty requires telling both parts.\n\n**Part one -- the at-risk group.** Among the **ARIC cohort participants** (older, more cardiovascular risk factors, faster expected decline), the hearing-aid group showed roughly **48% less cognitive decline over 3 years** compared to controls. That is a startlingly large effect for such a simple, safe intervention.\n\n**Part two -- the healthy volunteers.** In the healthier volunteer group, there was **no significant effect**. Their cognition was barely declining over 3 years anyway, so there was little decline for hearing aids to slow -- a floor effect, at least in part.\n\nWhat should you take from this?\n\n• Hearing aids are **not a magic cognition pill** for everyone\n• But in people **already at elevated risk**, treating hearing loss cut decline nearly in half in the first real RCT\n• Longer follow-up of the full cohort is ongoing, and healthier people may simply need more years before differences show\n\nEven skeptics note the intervention is low-risk with obvious quality-of-life benefits. When the downside is this small and the potential upside this large, waiting for perfect certainty is the expensive choice.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ACHIEVE RESULTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two groups, two honest answers</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">AT-RISK (ARIC)</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="42">~48%</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="18">less cognitive decline</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="18">over 3 years with aids</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="16">Older, more risk factors,</text>
                    <text x="290" y="458" text-anchor="middle" fill="#888" font-size="16">faster expected decline</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="228" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">HEALTHY VOLUNTEERS</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">No effect</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="18">no significant difference</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="18">at 3 years</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="16">Barely declining anyway --</text>
                    <text x="810" y="458" text-anchor="middle" fill="#888" font-size="16">little decline to slow</text>
                    <rect x="150" y="570" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HONEST READ</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Not a magic pill for everyone -- but in at-risk</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="18">adults, decline was cut nearly in half</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">Low risk, clear benefits -- waiting is the costly move</text>
                </svg>`,
                caption: "ACHIEVE at 3 years: strong effect in the at-risk arm only"
            }
        },
        {
            type: "concept",
            title: "The Seven-Year Wait",
            content: "Here is the gap between science and behavior: among adults who could benefit from hearing aids, **most never use them** -- estimates in the US hover around only **1 in 5** getting treatment. And those who do wait an average of roughly **7 to 10 years** from first noticing trouble to actually getting fitted.\n\nSeven to ten years. In the timeline of brain aging, that is an enormous unforced error -- a decade of extra cognitive load, understimulation, and slow social retreat.\n\nWhy do people wait?\n\n• **Stigma** -- the fear that hearing aids scream OLD\n• **Denial** -- loss creeps in so gradually it is easy to blame everyone else for mumbling\n• **Cost** -- traditionally thousands of dollars, often not covered by insurance\n• **Hassle** -- multiple appointments, fittings, adjustments\n\nThe stigma logic deserves a hard look, because it is exactly backwards. A discreet device in your ear is nearly invisible. What is **highly visible** is asking people to repeat themselves, answering the wrong question, drifting out of group conversations, and turning the TV to wall-shaking volume. Untreated hearing loss ages you in other people's eyes far more than any modern hearing aid does.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TREATMENT GAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why the biggest lever goes unpulled</text>
                    <rect x="90" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="310" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">ONLY ~1 IN 5</text>
                    <text x="310" y="278" text-anchor="middle" fill="#fff" font-size="18">of US adults who could</text>
                    <text x="310" y="313" text-anchor="middle" fill="#fff" font-size="18">benefit use hearing aids</text>
                    <rect x="570" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="790" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">7-10 YEAR DELAY</text>
                    <text x="790" y="278" text-anchor="middle" fill="#fff" font-size="18">from noticing trouble</text>
                    <text x="790" y="313" text-anchor="middle" fill="#fff" font-size="18">to getting fitted</text>
                    <rect x="150" y="430" width="800" height="240" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="488" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WHY PEOPLE WAIT</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">Stigma: aids seem to say OLD</text>
                    <text x="550" y="572" text-anchor="middle" fill="#fff" font-size="18">Denial: everyone else is mumbling</text>
                    <text x="550" y="609" text-anchor="middle" fill="#fff" font-size="18">Cost and hassle of traditional fitting</text>
                    <rect x="150" y="730" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE STIGMA IS BACKWARDS</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="18">A tiny device is invisible -- untreated loss</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="18">is what looks like decline to others</text>
                </svg>`,
                caption: "Most who need treatment wait the better part of a decade"
            }
        },
        {
            type: "example",
            title: "The 2022 Game-Changer: Aids Without the Gatekeepers",
            content: "In October 2022, the US FDA created a new category: **over-the-counter (OTC) hearing aids** for adults with perceived mild-to-moderate hearing loss. For the first time, you could walk into a pharmacy or big-box store -- or open a website -- and buy real, regulated hearing aids with **no prescription, no audiologist visit, no gatekeeper**.\n\nThe price shift was dramatic:\n\n• **Before**: prescription aids commonly ran **$2,000-$7,000 per pair**, bundled with clinic services, and were rarely covered by insurance\n• **After**: quality OTC devices from consumer-electronics and audio companies arrived at roughly **$200-$1,700 per pair**, with mainstream brands competing on features\n\nModern devices bear no resemblance to the beige bananas people remember on their grandparents. Many are **nearly invisible** in-ear buds; some double as earbuds that stream calls and music. Several look identical to the wireless earbuds half the population already wears all day -- stigma is quietly dying because everyone has something in their ears now.\n\nTwo caveats: OTC devices suit **mild-to-moderate** loss, and a professional audiogram is still the gold standard for knowing what you are dealing with. Severe loss still warrants an audiologist. But the cost-and-hassle excuse has never been weaker.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE OTC REVOLUTION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">FDA over-the-counter category, October 2022</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="228" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BEFORE 2022</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">$2,000-$7,000</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="18">per pair, prescription only</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">Multiple clinic visits,</text>
                    <text x="290" y="413" text-anchor="middle" fill="#888" font-size="16">rarely covered by insurance</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">AFTER 2022</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">$200-$1,700</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">per pair, off the shelf</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">Pharmacy, big-box store,</text>
                    <text x="810" y="413" text-anchor="middle" fill="#888" font-size="16">or online -- no gatekeeper</text>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">STIGMA IS DYING</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">Modern aids look like the earbuds</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="18">half the population wears all day</text>
                    <rect x="150" y="770" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">CAVEAT</text>
                    <text x="550" y="865" text-anchor="middle" fill="#888" font-size="17">OTC fits mild-to-moderate loss; severe loss needs an audiologist</text>
                </svg>`,
                caption: "OTC hearing aids collapsed the price and hassle barriers"
            }
        },
        {
            type: "concept",
            title: "Protect the Hearing You Still Have",
            content: "Treatment matters, but so does not losing more. Noise-induced hearing loss is **cumulative and permanent** -- the tiny hair cells in your cochlea do not grow back. Two numbers to know:\n\n• Sustained exposure around **85 decibels** (heavy city traffic, a loud lawnmower) can damage hearing over a full workday\n• Every **3 dB increase cuts safe exposure time roughly in half** -- a 100 dB concert can start doing damage in about 15 minutes\n\nYour main defenses:\n\n• **The 60/60 rule for headphones** -- keep volume under **60% of maximum** for no more than **60 minutes** at a stretch, then give your ears a break. Noise-canceling headphones help here: when they block outside noise, you naturally listen at lower volume\n• **Earplugs at loud events** -- modern high-fidelity musician plugs lower volume without muffling the music; keep a pair on your keychain\n• **Distance and breaks** -- at any loud venue, stepping away from the speakers and taking 10-minute breaks measurably reduces the dose\n\nOne more habit: if your phone offers headphone-level monitoring, turn it on. Watching a weekly decibel report does for your ears what a step counter does for your legs.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROTECT WHAT REMAINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hair cells do not grow back</text>
                    <rect x="90" y="170" width="440" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="310" y="228" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">85 dB</text>
                    <text x="310" y="273" text-anchor="middle" fill="#fff" font-size="17">Damage territory over</text>
                    <text x="310" y="306" text-anchor="middle" fill="#fff" font-size="17">a full workday</text>
                    <text x="310" y="350" text-anchor="middle" fill="#888" font-size="15">Traffic, lawnmower, blender</text>
                    <rect x="570" y="170" width="440" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="790" y="228" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">100 dB</text>
                    <text x="790" y="273" text-anchor="middle" fill="#fff" font-size="17">Damage can start in</text>
                    <text x="790" y="306" text-anchor="middle" fill="#fff" font-size="17">about 15 minutes</text>
                    <text x="790" y="350" text-anchor="middle" fill="#888" font-size="15">Concerts, clubs, power tools</text>
                    <rect x="150" y="450" width="800" height="190" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="510" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE 60/60 RULE</text>
                    <text x="550" y="555" text-anchor="middle" fill="#fff" font-size="19">Under 60% volume, under 60 minutes,</text>
                    <text x="550" y="592" text-anchor="middle" fill="#fff" font-size="19">then give your ears a break</text>
                    <rect x="150" y="700" width="800" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="758" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">EASY DEFENSES</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">Musician earplugs at loud events</text>
                    <text x="550" y="838" text-anchor="middle" fill="#fff" font-size="18">Distance from speakers, 10-minute breaks</text>
                </svg>`,
                caption: "Decibels, doses, and the 60/60 headphone rule"
            }
        },
        {
            type: "application",
            title: "Your Hearing Action Plan",
            content: "Here is your concrete plan -- most of it costs little or nothing:\n\n1. **Book a baseline audiogram this month** -- especially if you are in your 40s or 50s. A hearing test is quick, painless, and often covered by insurance. You cannot manage what you have never measured.\n\n2. **Take the restaurant test honestly** -- if noisy rooms exhaust you, if you ask people to repeat themselves daily, or if the family complains about TV volume, stop explaining it away.\n\n3. **Apply the 60/60 rule today** -- set your phone volume limit to about 60% and enable headphone-level notifications. This takes 2 minutes in settings.\n\n4. **Put earplugs on your keychain** -- high-fidelity plugs cost $15-$30 and preserve music quality. Use them at every concert and loud venue.\n\n5. **If loss is found, treat it now, not in 7 years** -- for mild-to-moderate loss, compare OTC options; for anything more, see an audiologist. Frame it the way ACHIEVE suggests: this is brain care, not an admission of age.\n\nNot medical advice -- an audiologist or your doctor is the right partner for decisions. But scheduling one test is entirely in your hands.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR HEARING PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves, starting this month</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="215" text-anchor="start" fill="#fff" font-size="19">Book a baseline audiogram this month</text>
                    <text x="245" y="248" text-anchor="start" fill="#888" font-size="15">Quick, painless, often covered</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="355" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="355" text-anchor="start" fill="#fff" font-size="19">Take the restaurant test honestly</text>
                    <text x="245" y="388" text-anchor="start" fill="#888" font-size="15">Noisy rooms exhausting? Stop explaining it away</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="495" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="495" text-anchor="start" fill="#fff" font-size="19">Set the 60/60 rule on your phone today</text>
                    <text x="245" y="528" text-anchor="start" fill="#888" font-size="15">Volume limit plus headphone notifications</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="635" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="635" text-anchor="start" fill="#fff" font-size="19">Keychain earplugs for loud venues</text>
                    <text x="245" y="668" text-anchor="start" fill="#888" font-size="15">High-fidelity plugs, $15-$30</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="775" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="775" text-anchor="start" fill="#fff" font-size="19">If loss is found, treat it now -- not in 7 years</text>
                    <text x="245" y="808" text-anchor="start" fill="#888" font-size="15">OTC for mild-moderate; audiologist for more</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">This is brain care, not an admission of age</text>
                </svg>`,
                caption: "Five concrete steps to pull the biggest midlife lever"
            }
        },
        {
            type: "quote",
            content: "Nearly half of dementia cases worldwide could theoretically be prevented or delayed by addressing 14 modifiable risk factors -- and untreated hearing loss sits at the top of the midlife list.",
            author: "The Lancet Commission on dementia, 2024 (paraphrased)",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">Nearly half of dementia cases could be</text>
                    <text x="150" y="262" text-anchor="start" fill="#fff" font-style="italic" font-size="22">prevented or delayed by addressing 14</text>
                    <text x="150" y="304" text-anchor="start" fill="#fff" font-style="italic" font-size="22">modifiable risk factors -- and hearing loss</text>
                    <text x="150" y="346" text-anchor="start" fill="#fff" font-style="italic" font-size="22">sits at the top of the midlife list.</text>
                    <text x="950" y="410" text-anchor="end" fill="#8b5cf6" font-size="18">-- The Lancet Commission, 2024</text>
                    <rect x="250" y="520" width="600" height="120" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="572" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE TAKEAWAY</text>
                    <text x="550" y="612" text-anchor="middle" fill="#fff" font-size="18">Prevention is not one grand gesture -- it is levers</text>
                </svg>`,
                caption: "The 2024 Commission's headline estimate"
            }
        },
        {
            type: "quiz",
            question: "In the ACHIEVE trial (Lin et al., 2023), what was the effect of hearing aids on 3-year cognitive decline?",
            options: [
                { text: "Decline was cut by about 48% across all participants equally", correct: false },
                { text: "About 48% less decline in the higher-risk ARIC subgroup, but no significant effect in healthier volunteers", correct: true },
                { text: "No effect in any group, proving hearing aids do not help cognition", correct: false },
                { text: "Hearing aids improved hearing but slightly worsened cognition", correct: false }
            ],
            explanation: "ACHIEVE's honest headline is a split result: in the at-risk ARIC cohort -- older adults with more risk factors and faster expected decline -- hearing aids reduced 3-year cognitive decline by roughly 48%. In the healthier volunteer group there was no significant effect, likely partly because their cognition was barely declining over 3 years anyway. The first option wrongly averages this across everyone, and the trial certainly did not show harm or prove uselessness.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE ACHIEVE TRIAL</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">First large RCT of hearing aids and cognition</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">977 adults, ages 70-84, followed 3 years</text>
                    <rect x="250" y="380" width="600" height="170" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REMEMBER THE SPLIT</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">Two participant pools responded</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">very differently to the same aids</text>
                </svg>`,
                caption: "Test your reading of the ACHIEVE results"
            }
        }
    ]
},
{
    id: 5,
    title: "Move Your Body, Grow Your Brain",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "What If a Drug Could Regrow Brain Tissue?",
            content: "Imagine a pharmaceutical company announced a pill that could **physically grow the memory center of your brain**, improve blood flow to every neuron, dial down brain inflammation, and cut your dementia risk by a third -- with side effects like better mood, stronger bones, and a longer life.\n\nIt would be the biggest drug launch in history. People would pay anything.\n\nThat drug exists. It is called **exercise**, and the prescription costs nothing.\n\nThis is not motivational-poster talk. In one of the most cited aging studies ever run, a year of brisk walking literally **reversed hippocampal shrinkage** in older adults -- measured on MRI scans, not questionnaires. And a famous New England Journal of Medicine study found that one particular activity -- you will never guess which -- was associated with a **76% lower** dementia rate.\n\nBy the end of this lesson you will know exactly what kind of movement the evidence supports, how much you need, and the one trick that makes any exercise plan twice as powerful for your brain.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE IMPOSSIBLE DRUG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Imagine a pill that could do all this</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">GROWS THE</text>
                    <text x="300" y="272" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MEMORY CENTER</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">BOOSTS BLOOD FLOW</text>
                    <text x="800" y="272" text-anchor="middle" fill="#888" font-size="16">to every neuron</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CALMS BRAIN</text>
                    <text x="300" y="492" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">INFLAMMATION</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">LOWERS DEMENTIA</text>
                    <text x="800" y="492" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">RISK BY A THIRD</text>
                    <rect x="150" y="620" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="683" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">The drug exists. It is exercise.</text>
                    <text x="550" y="728" text-anchor="middle" fill="#888" font-size="18">The prescription costs nothing</text>
                </svg>`,
                caption: "Every claim on this card has a study behind it"
            }
        },
        {
            type: "concept",
            title: "BDNF: Miracle-Gro for the Brain",
            content: "Why would moving your legs change your brain? Three well-mapped pathways:\n\n• **BDNF -- the growth signal.** Exercise triggers release of **brain-derived neurotrophic factor**, a protein that psychiatrist John Ratey famously called **Miracle-Gro for the brain**. BDNF supports the birth of new neurons in the hippocampus, strengthens synapses, and protects existing cells from stress. Aerobic exercise is the most reliable known way to raise it.\n\n• **Blood flow -- the supply line.** Your brain is 2% of your body weight but uses roughly **20% of your blood supply**. Exercise grows new capillaries, keeps vessels flexible, and lowers blood pressure -- directly attacking the vascular damage behind a large share of cognitive decline.\n\n• **Inflammation -- the slow fire.** Chronic low-grade inflammation accelerates brain aging. Regular moderate exercise reliably lowers inflammatory markers like **IL-6 and CRP** over time.\n\nNotice what these pathways have in common: none of them care whether you enjoy gyms. They respond to **repeated moderate effort** -- a brisk walk counts. The molecule does not check your gym membership.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE PATHWAYS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How movement becomes brain change</text>
                    <rect x="150" y="170" width="800" height="190" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">BDNF: THE GROWTH SIGNAL</text>
                    <text x="550" y="273" text-anchor="middle" fill="#fff" font-size="19">Miracle-Gro for the brain -- new neurons,</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="19">stronger synapses, protected cells</text>
                    <rect x="150" y="400" width="800" height="190" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="458" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">BLOOD FLOW: THE SUPPLY LINE</text>
                    <text x="550" y="503" text-anchor="middle" fill="#fff" font-size="19">2% of body weight, ~20% of blood supply --</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="19">exercise grows capillaries, lowers pressure</text>
                    <rect x="150" y="630" width="800" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="688" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INFLAMMATION: THE SLOW FIRE</text>
                    <text x="550" y="733" text-anchor="middle" fill="#fff" font-size="19">Regular moderate movement lowers</text>
                    <text x="550" y="770" text-anchor="middle" fill="#fff" font-size="19">inflammatory markers like IL-6 and CRP</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">All three respond to a brisk walk</text>
                </svg>`,
                caption: "BDNF, blood flow, and inflammation -- the mechanism trio"
            }
        },
        {
            type: "visual",
            title: "The Study That Grew a Hippocampus",
            content: "In 2011, Kirk Erickson and colleagues published a landmark trial in **PNAS**. They took **120 sedentary older adults** (average age about 67) and randomized them: half walked briskly 40 minutes, 3 days a week; half did stretching and toning. After one year, MRI scans told the story below.\n\nThe hippocampus -- your brain's memory-formation hub -- normally **shrinks about 1-2% per year** in late adulthood. The walking group's hippocampus **grew about 2%**, effectively winding the clock back one to two years, and their spatial memory improved. The stretching group shrank on schedule.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ERICKSON 2011, PNAS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">120 older adults, one year, MRI-measured</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WALKING GROUP</text>
                    <text x="290" y="278" text-anchor="middle" fill="#888" font-size="16">40 min brisk, 3x per week</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">+2%</text>
                    <text x="290" y="415" text-anchor="middle" fill="#fff" font-size="19">hippocampal volume</text>
                    <text x="290" y="470" text-anchor="middle" fill="#888" font-size="16">Roughly 1-2 years of aging</text>
                    <text x="290" y="503" text-anchor="middle" fill="#888" font-size="16">reversed; memory improved</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">STRETCHING GROUP</text>
                    <text x="810" y="278" text-anchor="middle" fill="#888" font-size="16">Toning and stretching</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-weight="bold" font-size="48">-1.4%</text>
                    <text x="810" y="415" text-anchor="middle" fill="#fff" font-size="19">hippocampal volume</text>
                    <text x="810" y="470" text-anchor="middle" fill="#888" font-size="16">Normal age-related</text>
                    <text x="810" y="503" text-anchor="middle" fill="#888" font-size="16">shrinkage continued</text>
                    <rect x="150" y="630" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WHY THIS STUDY MATTERS</text>
                    <text x="550" y="735" text-anchor="middle" fill="#fff" font-size="18">Randomized, MRI-measured, physical growth --</text>
                    <text x="550" y="772" text-anchor="middle" fill="#fff" font-size="18">not a survey, not a correlation</text>
                    <rect x="250" y="860" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Brisk walking. That is all it took.</text>
                </svg>`,
                caption: "One year of walking grew the memory center ~2%"
            }
        },
        {
            type: "example",
            title: "What 150 Minutes Actually Looks Like",
            content: "The standard prescription -- from the WHO and virtually every health body -- is **150 minutes of moderate aerobic activity per week**, plus **strength training twice a week**. That sounds clinical until you translate it into a real week.\n\nMeet Ray, 61, retired teacher, no gym membership:\n\n• **Monday, Wednesday, Friday**: 30-minute brisk walk with his neighbor after breakfast -- brisk means he can talk but not sing (90 minutes)\n• **Tuesday**: 30 minutes of yard work at a pace that raises his heart rate (30 minutes)\n• **Saturday**: 30-minute walk to the farmers market and back with a loaded backpack (30 minutes)\n• **Tuesday and Thursday evenings**: 20 minutes of bodyweight strength -- sit-to-stands from a chair, wall push-ups, step-ups on the bottom stair, carrying groceries in from the car in fewer trips\n\nTotal: 150 aerobic minutes, two strength sessions, **zero dollars**.\n\nThe strength piece is not optional garnish. After 60, adults lose muscle at 1-2% per year (**sarcopenia**), and muscle mass and grip strength track with cognitive outcomes in multiple cohorts. Legs that can climb stairs at 80 are also legs that keep you walking, socializing, and independent -- every other lever in this book depends on staying mobile.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A REAL WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ray, 61 -- 150 minutes, zero dollars</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="218" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">MON / WED / FRI</text>
                    <text x="200" y="255" text-anchor="start" fill="#fff" font-size="18">30-min brisk walk with a neighbor (90 min)</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="358" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">TUESDAY</text>
                    <text x="200" y="395" text-anchor="start" fill="#fff" font-size="18">Vigorous yard work (30 min)</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="498" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">SATURDAY</text>
                    <text x="200" y="535" text-anchor="start" fill="#fff" font-size="18">Walk to market, loaded backpack (30 min)</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="638" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">TUE + THU EVENINGS</text>
                    <text x="200" y="675" text-anchor="start" fill="#fff" font-size="18">20 min bodyweight strength, 2x per week</text>
                    <rect x="150" y="730" width="800" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHY STRENGTH MATTERS</text>
                    <text x="550" y="825" text-anchor="middle" fill="#fff" font-size="18">Muscle loss runs 1-2% per year after 60 --</text>
                    <text x="550" y="860" text-anchor="middle" fill="#fff" font-size="18">mobility keeps every other lever alive</text>
                </svg>`,
                caption: "150 aerobic minutes plus two strength sessions, no gym"
            }
        },
        {
            type: "quiz",
            question: "In Erickson's 2011 PNAS trial, what happened to the hippocampus of older adults after one year of moderate aerobic walking?",
            options: [
                { text: "It stopped shrinking but stayed the same size", correct: false },
                { text: "It grew about 2%, roughly reversing 1-2 years of age-related shrinkage", correct: true },
                { text: "It grew about 15%, restoring it to young-adult size", correct: false },
                { text: "It shrank normally, but memory still improved from better mood", correct: false }
            ],
            explanation: "The walking group's hippocampus grew about 2% over one year -- measured by MRI -- while the stretching control group showed typical age-related shrinkage of around 1.4%. Since the hippocampus normally shrinks 1-2% per year in late adulthood, that 2% gain effectively wound the clock back one to two years, and spatial memory improved alongside it. The 15% option wildly overstates the effect; merely halting shrinkage understates it -- the tissue actually grew.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ERICKSON 2011</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">One year of brisk walking, 3x per week</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">The hippocampus normally shrinks 1-2% yearly</text>
                    <rect x="250" y="380" width="600" height="160" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THINK IN PERCENTAGES</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">Small number, big meaning:</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">it reversed the aging trend</text>
                </svg>`,
                caption: "Test your memory of the walking trial"
            }
        },
        {
            type: "concept",
            title: "What the Population Data Says -- Honestly",
            content: "Zoom out from single trials to whole populations and the picture stays encouraging -- with caveats worth owning.\n\n**The encouraging part:** meta-analyses of long-term cohort studies consistently find that physically active people develop dementia at **30-45% lower rates** than inactive people. The association shows up across countries, decades, and study designs. The Lancet 2024 model assigns physical inactivity an attributable fraction of about **2%** of dementia cases.\n\n**The honest caveats:**\n\n• **Reverse causation is real.** Dementia has a silent phase lasting 10-20 years, and one of its earliest effects is reduced activity. Some of the association is early disease causing inactivity, not inactivity causing disease. Studies with longer lags between measuring activity and diagnosis show **smaller** effects.\n\n• **Healthy-user bias.** People who exercise also tend to sleep better, smoke less, and see doctors more.\n\n• Large RCTs on hard dementia outcomes are scarce, because you cannot randomize people to decades of exercise.\n\nSo the fair summary: the causal effect is probably **smaller than 45% but very unlikely to be zero** -- mechanisms are proven, the hippocampus trial is randomized, and the cardiovascular benefits alone protect the brain's blood supply. You are betting on a stacked deck, not a sure thing.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST LEDGER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What cohort studies can and cannot prove</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">ENCOURAGING</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="34">30-45%</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="18">lower dementia rates in</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="18">active vs inactive people</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Consistent across countries,</text>
                    <text x="290" y="453" text-anchor="middle" fill="#888" font-size="16">decades, and designs</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="228" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">CAVEATS</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Reverse causation: early</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">disease reduces activity</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="18">Healthy-user bias</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">Longer-lag studies show</text>
                    <text x="810" y="453" text-anchor="middle" fill="#888" font-size="16">smaller effects</text>
                    <rect x="150" y="590" width="800" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">FAIR SUMMARY</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="18">True effect: smaller than 45%,</text>
                    <text x="550" y="732" text-anchor="middle" fill="#fff" font-size="18">very unlikely to be zero</text>
                    <rect x="250" y="840" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">A stacked deck, not a sure thing</text>
                </svg>`,
                caption: "Reading observational evidence without fooling yourself"
            }
        },
        {
            type: "example",
            title: "Why Dancing Beat Everything Else",
            content: "In 2003, Joe Verghese and colleagues published a 21-year study in the **New England Journal of Medicine** tracking 469 older adults in the Bronx and which leisure activities predicted staying dementia-free.\n\nAmong physical activities, most -- swimming, cycling, group exercise -- showed **little measurable protection** on their own. One stood out dramatically: **frequent ballroom dancing was associated with a 76% lower risk of dementia** -- the largest reduction of any activity studied, mental or physical, beating even crossword puzzles (47%) and reading (35%).\n\nWhy would dancing outclass swimming? Researchers point to what dancing uniquely combines:\n\n• **Complex movement** -- split-second decisions, patterns, improvisation; a partner dance is a nonstop working-memory task\n• **Music** -- rhythm engages timing, auditory, and motor circuits together\n• **A partner** -- every dance is a social interaction\n• **Learning** -- there is always a next step to master\n\nHonest caveat, loudly: this is **observational**. People healthy enough to dance frequently at 75 were probably already on better trajectories, and the study could not fully untangle that. But the design principle it suggests is well supported: **movement that demands thinking and connection likely beats movement that does not**. Dance, tennis, tai chi, hiking with friends on uneven trails -- complexity is a feature.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">VERGHESE 2003, NEJM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dementia risk reduction by leisure activity</text>
                    <text x="230" y="205" text-anchor="end" fill="#fff" font-size="20">Dancing</text>
                    <rect x="260" y="178" width="640" height="46" rx="10" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <text x="930" y="210" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">-76%</text>
                    <text x="230" y="295" text-anchor="end" fill="#fff" font-size="20">Crosswords</text>
                    <rect x="260" y="268" width="396" height="46" rx="10" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="686" y="300" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">-47%</text>
                    <text x="230" y="385" text-anchor="end" fill="#fff" font-size="20">Reading</text>
                    <rect x="260" y="358" width="295" height="46" rx="10" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="585" y="390" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">-35%</text>
                    <text x="230" y="475" text-anchor="end" fill="#fff" font-size="20">Swimming</text>
                    <rect x="260" y="448" width="60" height="46" rx="10" fill="rgba(136,136,136,0.25)" stroke="#888" stroke-width="2"/>
                    <text x="350" y="480" text-anchor="start" fill="#888" font-weight="bold" font-size="20">~0%</text>
                    <rect x="150" y="560" width="800" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="618" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">WHAT DANCING COMBINES</text>
                    <text x="550" y="663" text-anchor="middle" fill="#fff" font-size="18">Complex movement + music + a partner</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">+ constant learning -- four levers at once</text>
                    <text x="550" y="745" text-anchor="middle" fill="#888" font-size="16">Caveat: observational -- healthy dancers self-select</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Movement that makes you think wins</text>
                </svg>`,
                caption: "Dancing's 76% stood out -- with an honest asterisk"
            }
        },
        {
            type: "concept",
            title: "Every Step Counts: The Dose-Response Curve",
            content: "Maybe 150 minutes still sounds like a wall. Here is the most liberating finding in this field: the dose-response curve for activity and brain health is **steepest at the bottom**.\n\n• Step-count studies (including large UK Biobank analyses) find dementia risk falling measurably from roughly **4,000 steps a day**, with benefits continuing to accrue toward about **9,000-10,000 steps** before flattening\n• The biggest jump in benefit is going from **nothing to something** -- sedentary to a daily 20-minute walk buys proportionally more than an athlete adding a sixth workout\n• Even **light activity** -- gardening, housework, strolling -- associates with better cognitive outcomes than sitting in cohort after cohort\n\nThis reframes the whole game. The question is not whether you can become a gym person. It is whether today can contain more movement than yesterday:\n\n• Take calls while walking\n• Park at the far end of the lot on purpose\n• One flight of stairs instead of the elevator\n• A 10-minute walk after each meal -- which also blunts blood-sugar spikes, feeding the diabetes lever\n\nPerfection is not on the menu. Motion is.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DOSE-RESPONSE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The curve is steepest at the bottom</text>
                    <line x1="140" y1="620" x2="990" y2="620" stroke="#888" stroke-width="2"/>
                    <line x1="140" y1="620" x2="140" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="565" y="670" text-anchor="middle" fill="#888" font-size="18">Daily steps</text>
                    <text x="120" y="400" text-anchor="end" fill="#888" font-size="18">Benefit</text>
                    <path d="M140 610 C 300 380, 450 280, 640 240 C 780 215, 900 210, 980 208" stroke="#10b981" stroke-width="5" fill="none"/>
                    <circle cx="330" cy="360" r="14" fill="#f59e0b"/>
                    <text x="330" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">~4,000</text>
                    <text x="330" y="452" text-anchor="middle" fill="#888" font-size="15">benefits clearly begin</text>
                    <circle cx="800" cy="212" r="14" fill="#6366f1"/>
                    <text x="800" y="270" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">~9,000-10,000</text>
                    <text x="800" y="302" text-anchor="middle" fill="#888" font-size="15">curve flattens</text>
                    <rect x="150" y="720" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="778" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE LIBERATING PART</text>
                    <text x="550" y="822" text-anchor="middle" fill="#fff" font-size="18">Nothing to something buys the most --</text>
                    <text x="550" y="857" text-anchor="middle" fill="#fff" font-size="18">light activity still beats sitting</text>
                </svg>`,
                caption: "From ~4,000 steps up, every step buys brain benefit"
            }
        },
        {
            type: "application",
            title: "Build Your Movement Stack This Week",
            content: "Do not design a perfect program. Install a minimum viable one:\n\n1. **Anchor one daily walk** -- pick an existing habit (after breakfast, after dinner) and attach 15-20 minutes of brisk walking to it. Habit-stacking beats willpower.\n\n2. **Recruit one person** -- text a neighbor, friend, or family member today and propose a standing walk, 2-3 days a week. This is the multiplier: exercise plus social connection pulls two levers in the same half hour, and someone waiting for you is the best adherence technology ever invented.\n\n3. **Add strength twice a week** -- start with 15 minutes: sit-to-stands, wall push-ups, step-ups, a loaded carry. Track one number, like sit-to-stands in 30 seconds, and watch it climb.\n\n4. **Schedule one complex-movement session** -- a dance class, tennis, pickleball, tai chi, or a hiking group. Movement + thinking + people is the Verghese trifecta.\n\n5. **Count something** -- steps, minutes, sessions. Aim for more than last week, not for perfect.\n\nIf you have heart disease or have been sedentary for years, clear a new program with your doctor first -- that is standard advice, not fine print.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MOVEMENT STACK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Minimum viable program, this week</text>
                    <rect x="150" y="165" width="800" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="220" text-anchor="start" fill="#fff" font-size="19">Anchor one daily walk to an existing habit</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="15">15-20 brisk minutes after a meal</text>
                    <rect x="150" y="310" width="800" height="115" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="365" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="365" text-anchor="start" fill="#fff" font-size="19">Recruit one person for a standing walk</text>
                    <text x="245" y="400" text-anchor="start" fill="#888" font-size="15">Two levers in one half hour</text>
                    <rect x="150" y="455" width="800" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="510" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="510" text-anchor="start" fill="#fff" font-size="19">Strength 2x per week, 15 minutes</text>
                    <text x="245" y="545" text-anchor="start" fill="#888" font-size="15">Sit-to-stands, wall push-ups, carries</text>
                    <rect x="150" y="600" width="800" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="655" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="655" text-anchor="start" fill="#fff" font-size="19">One complex-movement session weekly</text>
                    <text x="245" y="690" text-anchor="start" fill="#888" font-size="15">Dance, tennis, tai chi, trail hike</text>
                    <rect x="150" y="745" width="800" height="115" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="800" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="800" text-anchor="start" fill="#fff" font-size="19">Count something -- beat last week</text>
                    <text x="245" y="835" text-anchor="start" fill="#888" font-size="15">Steps, minutes, or sessions</text>
                    <rect x="200" y="905" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="955" text-anchor="middle" fill="#ffd700" font-size="19">More than last week beats perfect</text>
                </svg>`,
                caption: "Five installs for a brain-first movement habit"
            }
        },
        {
            type: "quote",
            content: "Exercise is the single best thing you can do for your brain in terms of mood, memory, and learning.",
            author: "Dr. John Ratey, Harvard psychiatrist and author of Spark",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="260" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="225" text-anchor="start" fill="#fff" font-style="italic" font-size="23">Exercise is the single best thing you can</text>
                    <text x="150" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="23">do for your brain in terms of mood,</text>
                    <text x="150" y="315" text-anchor="start" fill="#fff" font-style="italic" font-size="23">memory, and learning.</text>
                    <text x="950" y="370" text-anchor="end" fill="#8b5cf6" font-size="18">-- Dr. John Ratey, author of Spark</text>
                    <rect x="250" y="480" width="600" height="130" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="535" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AND THE MECHANISM HAS A NAME</text>
                    <text x="550" y="578" text-anchor="middle" fill="#fff" font-size="18">BDNF -- Miracle-Gro for the brain</text>
                </svg>`,
                caption: "Ratey's summary of two decades of exercise neuroscience"
            }
        },
        {
            type: "concept",
            title: "The Friend Multiplier",
            content: "One design choice quietly doubles the value of everything in this lesson: **attach a person to your exercise**.\n\nHere is the logic. Social isolation is itself a Lancet-listed dementia risk factor, and loneliness research (which you will meet in depth later in this book) links thin social ties to worse cognitive trajectories. Meanwhile, the number-one predictor of whether people stick with an exercise program is not motivation or equipment -- it is **accountability**, and nothing holds you accountable like a human standing on your corner at 7 a.m.\n\nSo a walking partner is not a nice-to-have. It is a **two-for-one on the risk-factor list**:\n\n• The walk feeds BDNF, blood flow, and blood pressure\n• The conversation feeds social connection -- and conversation while walking is real cognitive work: memory, attention, and turn-taking on the move\n• The commitment feeds adherence, which is where every exercise plan actually lives or dies\n\nThis is why dancing looked so good in the Bronx data, and why walking clubs, pickleball leagues, and hiking groups may punch above their metabolic weight. When you choose between two forms of exercise, all else equal, **choose the one with a friend attached**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FRIEND MULTIPLIER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One walk, three levers</text>
                    <circle cx="240" cy="330" r="110" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="320" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">EXERCISE</text>
                    <text x="240" y="355" text-anchor="middle" fill="#fff" font-size="15">BDNF, blood flow</text>
                    <circle cx="550" cy="330" r="110" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="320" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">CONNECTION</text>
                    <text x="550" y="355" text-anchor="middle" fill="#fff" font-size="15">Conversation, ties</text>
                    <circle cx="860" cy="330" r="110" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="860" y="320" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">ADHERENCE</text>
                    <text x="860" y="355" text-anchor="middle" fill="#fff" font-size="15">Someone waiting</text>
                    <line x1="350" y1="330" x2="440" y2="330" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="660" y1="330" x2="750" y2="330" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">WHY IT WORKS</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">Isolation is its own risk factor -- a partner</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="18">turns one habit into a two-for-one</text>
                    <rect x="200" y="770" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="20">Pick the exercise with a friend attached</text>
                </svg>`,
                caption: "Exercise plus connection plus adherence in one habit"
            }
        },
        {
            type: "quiz",
            question: "Your friend says: cohort studies show active people get 40% less dementia, so exercise definitely prevents 40% of dementia. What is the most accurate correction?",
            options: [
                { text: "The association is partly inflated by reverse causation and healthy-user bias, but mechanisms and RCT evidence like Erickson 2011 support a real, smaller causal benefit", correct: true },
                { text: "The studies are observational, so the entire association is meaningless and exercise likely does nothing for the brain", correct: false },
                { text: "The 40% figure is actually an underestimate, since randomized trials show even larger effects on dementia", correct: false },
                { text: "The association only applies to intense gym workouts, so walking and light activity provide no benefit", correct: false }
            ],
            explanation: "The honest read sits between the extremes. Observational associations of 30-45% are partly inflated: early, silent dementia reduces activity (reverse causation), and exercisers differ in many healthy ways. But dismissing it entirely ignores proven mechanisms -- BDNF, blood flow, inflammation -- and randomized evidence like Erickson 2011, where walking physically grew the hippocampus. The dose-response data also directly contradicts the gym-only claim: benefits begin around 4,000 daily steps and with light activity.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">READING THE EVIDENCE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">Cohorts say 30-45% -- what is the fair read?</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">Neither worship the number nor dismiss it</text>
                    <rect x="250" y="380" width="600" height="160" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE THREE-PART TEST</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">Mechanism + RCT + dose-response:</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">exercise passes all three</text>
                </svg>`,
                caption: "Final check: evidence literacy on exercise and dementia"
            }
        }
    ]
},
{
    id: 6,
    title: "Sleep: The Nightly Brain Wash",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Your Brain Has a Janitor, and It Only Works Nights",
            content: "Every day, your brain's 86 billion neurons produce metabolic garbage -- worn-out proteins, cellular debris, and a sticky molecule called **amyloid-beta** that you will recognize as the main suspect in Alzheimer's plaques.\n\nHere is the problem: your brain has no conventional lymphatic drains like the rest of your body. So how does the trash get out?\n\nIn 2013, a lab at the University of Rochester found the answer, and it is one of the most beautiful discoveries in modern neuroscience: your brain **washes itself** -- but almost exclusively **while you are in deep sleep**. Brain cells physically shrink, channels open, and cerebrospinal fluid flushes through like a nightly power-wash.\n\nSkip the wash, and the garbage stays. One single night of sleep deprivation measurably raises amyloid levels on brain scans.\n\nSuddenly, decades of correlations between bad sleep and dementia make mechanical sense. This lesson covers the janitor, the two sleep disorders most dangerous to your brain, the sleeping-pill trap -- and how to train better sleep without any of it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NIGHT JANITOR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your brain cleans itself -- only in deep sleep</text>
                    <rect x="90" y="170" width="440" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="310" y="228" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">ALL DAY</text>
                    <text x="310" y="285" text-anchor="middle" fill="#fff" font-size="18">86 billion neurons produce</text>
                    <text x="310" y="320" text-anchor="middle" fill="#fff" font-size="18">metabolic waste, including</text>
                    <text x="310" y="355" text-anchor="middle" fill="#fff" font-size="18">amyloid-beta</text>
                    <text x="310" y="405" text-anchor="middle" fill="#888" font-size="15">The Alzheimer's plaque protein</text>
                    <rect x="570" y="170" width="440" height="280" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="790" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ALL NIGHT</text>
                    <text x="790" y="285" text-anchor="middle" fill="#fff" font-size="18">Deep sleep opens the drains:</text>
                    <text x="790" y="320" text-anchor="middle" fill="#fff" font-size="18">fluid flushes the waste out</text>
                    <text x="790" y="355" text-anchor="middle" fill="#fff" font-size="18">like a nightly power-wash</text>
                    <text x="790" y="405" text-anchor="middle" fill="#888" font-size="15">Discovered in 2013</text>
                    <rect x="150" y="520" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SKIP THE WASH</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="19">One bad night measurably raises</text>
                    <text x="550" y="662" text-anchor="middle" fill="#fff" font-size="19">amyloid on brain scans</text>
                    <rect x="200" y="760" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="20">Sleep is not downtime -- it is maintenance</text>
                </svg>`,
                caption: "Waste builds by day, and only deep sleep flushes it"
            }
        },
        {
            type: "concept",
            title: "The Glymphatic System: A 60% Shrink",
            content: "The discovery came from Maiken Nedergaard's lab at the University of Rochester, published in **Science in 2013**. They named it the **glymphatic system** -- glial cells plus lymphatic function.\n\nHere is what happens when you enter **deep (slow-wave) sleep**:\n\n• The space between brain cells expands by roughly **60%** -- in mouse studies, the cells themselves effectively shrink back to widen the channels\n• **Cerebrospinal fluid (CSF)** pulses into those widened channels, driven partly by the slow, synchronized waves of deep sleep\n• The fluid flows along blood vessels, picks up metabolic waste -- including **amyloid-beta and tau** -- and carries it out to be cleared\n• In the original mouse experiments, amyloid clearance during sleep ran about **twice as fast** as during waking\n\nThe crucial detail: this wash cycle runs overwhelmingly during **deep sleep**, the slow-wave stage concentrated in the first half of the night. Light, fragmented sleep produces a weak rinse.\n\nCaveat for honesty: the fine details were mapped in mice, and human glymphatic research is younger -- imaging studies support a similar system in people, but the field is still active. What is well established in humans is the next card's finding: deprive people of one night of sleep, and amyloid visibly rises.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GLYMPHATIC WASH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Nedergaard lab, Science 2013</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="238" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">AWAKE</text>
                    <circle cx="200" cy="330" r="48" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <circle cx="300" cy="330" r="48" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <circle cx="250" cy="415" r="48" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="410" y="340" text-anchor="middle" fill="#fff" font-size="16">Cells packed</text>
                    <text x="410" y="372" text-anchor="middle" fill="#fff" font-size="16">tight, narrow</text>
                    <text x="410" y="404" text-anchor="middle" fill="#fff" font-size="16">channels</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="238" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DEEP SLEEP</text>
                    <circle cx="700" cy="330" r="36" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="830" cy="330" r="36" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="765" cy="425" r="36" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <path d="M690 385 C 730 370, 800 370, 845 385" stroke="#3b82f6" stroke-width="4" fill="none" stroke-dasharray="8"/>
                    <text x="945" y="340" text-anchor="middle" fill="#fff" font-size="16">Space grows</text>
                    <text x="945" y="372" text-anchor="middle" fill="#fff" font-size="16">~60%, CSF</text>
                    <text x="945" y="404" text-anchor="middle" fill="#fff" font-size="16">flows through</text>
                    <rect x="150" y="570" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE RESULT</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Amyloid cleared about twice as fast asleep</text>
                    <text x="550" y="712" text-anchor="middle" fill="#888" font-size="16">Mapped in mice; human imaging supports a similar system</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="19">The wash runs on deep, slow-wave sleep</text>
                </svg>`,
                caption: "Cells make room and CSF flushes the waste -- at night"
            }
        },
        {
            type: "example",
            title: "One Bad Night, Visible on a Scan",
            content: "How fast does missing the wash cycle show up? Faster than almost anyone expected.\n\nIn 2018, Ehsan Shokri-Kojori, Nora Volkow, and colleagues at the NIH published a study in **PNAS**. They took **20 healthy adults** and scanned their brains with PET imaging twice: once after a normal night of rested sleep, and once after **one night of total sleep deprivation** -- about 31 hours awake.\n\nThe result: after the single sleepless night, **amyloid-beta burden was measurably higher** -- around **5% higher** in key regions, including the **hippocampus and thalamus**. One night. Visible on a scan.\n\nA few honest framing notes:\n\n• This shows **acute accumulation**, not Alzheimer's -- nobody develops dementia from one all-nighter, and levels are believed to recover with normal sleep\n• But it closes the loop on mechanism: less sleep, less clearance, more amyloid -- in living humans, not just mice\n• It reframes chronic short sleep as thousands of skipped wash cycles, compounding across decades\n\nRelated work points the same direction: in other studies, even selectively disrupting deep slow-wave sleep -- without shortening total sleep -- raised next-morning amyloid markers in spinal fluid. It is not just hours in bed. It is the **depth** of what happens there.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE NIGHT, ONE SCAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Shokri-Kojori et al., PNAS 2018</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="238" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RESTED NIGHT</text>
                    <text x="290" y="300" text-anchor="middle" fill="#fff" font-size="18">PET scan after normal sleep</text>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="18">Baseline amyloid levels</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">20 healthy adults</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="238" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">AFTER ~31H AWAKE</text>
                    <text x="810" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="34">~5% more</text>
                    <text x="810" y="348" text-anchor="middle" fill="#fff" font-size="18">amyloid in hippocampus</text>
                    <text x="810" y="383" text-anchor="middle" fill="#fff" font-size="18">and thalamus</text>
                    <text x="810" y="433" text-anchor="middle" fill="#888" font-size="16">Visible after a single night</text>
                    <rect x="150" y="540" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HONEST FRAME</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="18">Acute buildup, not Alzheimer's -- it recovers.</text>
                    <text x="550" y="682" text-anchor="middle" fill="#fff" font-size="18">The worry is thousands of skipped washes</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="19">Depth matters, not just hours in bed</text>
                </svg>`,
                caption: "A single sleepless night raised amyloid on PET scans"
            }
        },
        {
            type: "concept",
            title: "The U-Curve: How Much Sleep Protects?",
            content: "So more sleep is always better? Not quite. The duration data forms a **U-curve**: both ends associate with trouble.\n\n• **Short sleep (under ~6 hours)**: The strongest long-term evidence comes from **Sabia et al., 2021 (Nature Communications)**, following nearly **8,000 British civil servants** in the Whitehall II cohort for about 25 years. People persistently sleeping **6 hours or less** through their 50s and 60s had roughly a **30% higher** dementia rate than 7-hour sleepers -- an association that held after adjusting for lifestyle and health factors, and one starting decades before diagnosis, which weakens the reverse-causation objection.\n\n• **Long sleep (over ~9 hours)** also associates with higher dementia risk in multiple cohorts. But here reverse causation is the leading explanation: early brain changes and other illnesses **cause** long, unrefreshing sleep. Nobody thinks capping healthy sleep protects you.\n\nThe practical target supported by the evidence: roughly **7 to 8 hours of actual sleep** for most adults, protected consistently.\n\nOne more honesty note: you cannot randomize humans to decades of short sleep, so this remains observational. But with the glymphatic mechanism underneath it, the short-sleep arm of the U looks less like coincidence and more like biology.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SLEEP U-CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dementia risk by habitual sleep duration</text>
                    <line x1="140" y1="600" x2="990" y2="600" stroke="#888" stroke-width="2"/>
                    <line x1="140" y1="600" x2="140" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="565" y="650" text-anchor="middle" fill="#888" font-size="18">Hours of sleep</text>
                    <text x="118" y="390" text-anchor="end" fill="#888" font-size="18">Risk</text>
                    <path d="M180 240 C 320 500, 450 540, 565 540 C 680 540, 810 500, 950 260" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <circle cx="240" cy="330" r="13" fill="#ef4444"/>
                    <text x="240" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">under 6h</text>
                    <circle cx="565" cy="540" r="13" fill="#10b981"/>
                    <text x="565" y="505" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">7-8h</text>
                    <circle cx="890" cy="330" r="13" fill="#f59e0b"/>
                    <text x="890" y="290" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">over 9h</text>
                    <rect x="90" y="700" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="310" y="755" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SHORT SLEEP</text>
                    <text x="310" y="798" text-anchor="middle" fill="#fff" font-size="16">Sabia 2021: persistent 6h or less</text>
                    <text x="310" y="830" text-anchor="middle" fill="#fff" font-size="16">in midlife, ~30% higher risk</text>
                    <text x="310" y="865" text-anchor="middle" fill="#888" font-size="14">Whitehall II, ~8,000 people, 25 yrs</text>
                    <rect x="570" y="700" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="790" y="755" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">LONG SLEEP</text>
                    <text x="790" y="798" text-anchor="middle" fill="#fff" font-size="16">Also linked to risk -- but likely</text>
                    <text x="790" y="830" text-anchor="middle" fill="#fff" font-size="16">early disease causing long sleep</text>
                    <text x="790" y="865" text-anchor="middle" fill="#888" font-size="14">Reverse causation suspected</text>
                </svg>`,
                caption: "Both ends of the curve carry risk; 7-8 hours is the valley"
            }
        },
        {
            type: "quiz",
            question: "What did the Nedergaard lab discover in 2013 about how the brain clears metabolic waste like amyloid-beta?",
            options: [
                { text: "The brain's waste is cleared continuously at the same rate, awake or asleep", correct: false },
                { text: "During deep sleep, the space between brain cells expands ~60% and cerebrospinal fluid flushes waste out -- the glymphatic system", correct: true },
                { text: "The liver filters brain waste directly through the bloodstream during REM sleep", correct: false },
                { text: "Neurons digest their own waste internally, so no clearance system is needed", correct: false }
            ],
            explanation: "The glymphatic discovery showed clearance is dramatically state-dependent: during deep slow-wave sleep, intercellular space expands roughly 60% and cerebrospinal fluid flows through, flushing waste including amyloid-beta about twice as fast as during waking. That directly contradicts the constant-rate option. The liver plays no direct filtering role in the brain, and while cells do some internal cleanup, the 2013 finding is precisely that the brain relies on this sleep-gated external wash.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GLYMPHATIC SYSTEM</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">How does the brain take out the trash?</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">Hint: it happens on the night shift</text>
                    <rect x="250" y="380" width="600" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">REMEMBER THE NUMBER</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">The space between cells expands</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">by about 60% in deep sleep</text>
                </svg>`,
                caption: "Test your grasp of the brain's cleaning system"
            }
        },
        {
            type: "concept",
            title: "Sleep Apnea: The Saboteur With a Soundtrack",
            content: "One condition sabotages sleep depth and oxygen at the same time -- and most people who have it are undiagnosed.\n\n**Obstructive sleep apnea (OSA)** is the repeated collapse of the airway during sleep. Breathing stops for 10 seconds or more, oxygen dips, the brain jolts itself half-awake to reopen the airway -- sometimes **dozens of times per hour**, all night, usually without your knowledge.\n\nWhy the brain hates it:\n\n• **Fragmented sleep** -- those micro-arousals shred deep slow-wave sleep, gutting the glymphatic wash\n• **Intermittent low oxygen** -- repeated hypoxia stresses neurons and blood vessels\n• The combination: untreated OSA associates with **earlier cognitive decline** in multiple studies -- one meta-analysis found sleep-disordered breathing linked to roughly a 26% higher risk of cognitive impairment\n\n**The classic warning pair: loud habitual snoring plus daytime sleepiness.** Add gasping or witnessed pauses in breathing, morning headaches, or being told you stop breathing at night -- any of these means **get tested**. Home sleep tests now make diagnosis far easier than the old wired-up lab night.\n\nHonesty about treatment: **CPAP** clearly restores oxygen and sleep quality, and trials show better daytime function and mood; evidence that it slows long-term cognitive decline is promising but still mixed. Even so, treating OSA is one of the clearest wins in sleep medicine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SLEEP APNEA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Airway collapse, oxygen dips, shredded deep sleep</text>
                    <rect x="150" y="160" width="800" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE CYCLE, DOZENS OF TIMES HOURLY</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="18">Airway closes - oxygen drops - brain jolts awake</text>
                    <rect x="90" y="350" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="310" y="405" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">DAMAGE PATH 1</text>
                    <text x="310" y="450" text-anchor="middle" fill="#fff" font-size="17">Micro-arousals destroy</text>
                    <text x="310" y="483" text-anchor="middle" fill="#fff" font-size="17">deep sleep and the wash</text>
                    <rect x="570" y="350" width="440" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="790" y="405" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">DAMAGE PATH 2</text>
                    <text x="790" y="450" text-anchor="middle" fill="#fff" font-size="17">Repeated low oxygen</text>
                    <text x="790" y="483" text-anchor="middle" fill="#fff" font-size="17">stresses neurons, vessels</text>
                    <rect x="150" y="610" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="668" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE WARNING PAIR</text>
                    <text x="550" y="713" text-anchor="middle" fill="#fff" font-size="19">Loud habitual snoring + daytime sleepiness</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="16">Gasping, witnessed pauses, morning headaches: get tested</text>
                    <rect x="150" y="840" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="893" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">CPAP: clear wins on oxygen and quality of life</text>
                    <text x="550" y="933" text-anchor="middle" fill="#888" font-size="16">Long-term cognition trials still mixed -- honest status</text>
                </svg>`,
                caption: "OSA attacks the brain through fragmentation and hypoxia"
            }
        },
        {
            type: "example",
            title: "Dave's Mystery Fog",
            content: "Dave, 54, a project manager, came to his doctor worried about early dementia. His focus was shot by 2 p.m., he re-read emails three times, and he had started missing details in meetings. His father had Alzheimer's, and Dave was quietly terrified.\n\nHis doctor asked two questions that changed everything: **Do you snore?** (His wife had moved to the guest room years ago.) **Are you sleepy during the day?** (He kept an energy drink on permanent standby.)\n\nA home sleep test found **severe OSA -- 41 breathing interruptions per hour**. Dave's brain had not slept a full, deep night in years; it had endured roughly 300 micro-awakenings before every workday.\n\nThree months on CPAP, his afternoon fog had lifted, the energy drinks were gone, and his wife was back -- reporting the silence was almost eerie.\n\nTwo lessons from Dave:\n\n• **What looks like cognitive decline is sometimes a treatable sleep disorder.** Any real memory workup should ask about sleep\n• The snoring had been treated as a **joke** for a decade. Loud snoring plus daytime sleepiness is a screening result, not a punchline\n\nDave's story is a composite of a very common clinical pattern -- ask any sleep physician. An estimated **80% or more** of moderate-to-severe OSA cases remain undiagnosed.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DAVE'S MYSTERY FOG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A common pattern in sleep clinics</text>
                    <rect x="60" y="170" width="300" height="240" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">THE FEAR</text>
                    <text x="210" y="270" text-anchor="middle" fill="#fff" font-size="16">Fog at 54, family</text>
                    <text x="210" y="302" text-anchor="middle" fill="#fff" font-size="16">history, worried</text>
                    <text x="210" y="334" text-anchor="middle" fill="#fff" font-size="16">about dementia</text>
                    <path d="M360 290 L400 290" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="400,290 388,282 388,298" fill="#14b8a6"/>
                    <rect x="400" y="170" width="300" height="240" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE TEST</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="16">Home sleep study:</text>
                    <text x="550" y="302" text-anchor="middle" fill="#fff" font-size="16">41 interruptions</text>
                    <text x="550" y="334" text-anchor="middle" fill="#fff" font-size="16">per hour -- severe</text>
                    <path d="M700 290 L740 290" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="740,290 728,282 728,298" fill="#14b8a6"/>
                    <rect x="740" y="170" width="300" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THE FIX</text>
                    <text x="890" y="270" text-anchor="middle" fill="#fff" font-size="16">3 months of CPAP:</text>
                    <text x="890" y="302" text-anchor="middle" fill="#fff" font-size="16">fog lifted, energy</text>
                    <text x="890" y="334" text-anchor="middle" fill="#fff" font-size="16">drinks retired</text>
                    <rect x="150" y="480" width="800" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE TAKEAWAY</text>
                    <text x="550" y="585" text-anchor="middle" fill="#fff" font-size="18">What looks like decline can be a treatable</text>
                    <text x="550" y="622" text-anchor="middle" fill="#fff" font-size="18">sleep disorder -- snoring is a screening result</text>
                    <rect x="200" y="730" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="19">An estimated 80%+ of OSA goes undiagnosed</text>
                </svg>`,
                caption: "Fog, family fear, and a fix found in a sleep test"
            }
        },
        {
            type: "concept",
            title: "Insomnia: Skip the Pills, Train the Brain",
            content: "Chronic insomnia -- trouble falling or staying asleep at least 3 nights a week for 3+ months -- affects about 10% of adults. Here the treatment choice matters enormously for your brain.\n\n**First-line treatment is not a pill.** Every major guideline (including the American College of Physicians since 2016) names **CBT-I** -- cognitive behavioral therapy for insomnia -- as the first treatment. CBT-I retrains the systems that regulate sleep: fixed wake times, restricting time in bed to rebuild sleep pressure, breaking the bed-equals-worry association, and dismantling anxious sleep beliefs. In head-to-head studies its benefits **match or beat sleeping pills and last for years** after the roughly 4-8 session course ends. Digital CBT-I apps make it widely accessible.\n\n**The medication warning.** Two drug families deserve special caution for brain-span purposes:\n\n• **Benzodiazepines** and related sedatives: long-term use in older adults associates with higher dementia risk in several studies, plus proven falls and next-day impairment\n• **Anticholinergics** -- including **diphenhydramine**, the sedating antihistamine in Benadryl and most over-the-counter PM sleep aids: cumulative long-term use was linked to significantly higher dementia risk\n\nCritical medical framing: association is not proof of causation -- insomnia itself may drive part of the risk -- and **stopping some of these drugs abruptly can be genuinely dangerous**. If you use them regularly, the move is a conversation with your doctor about tapering and alternatives. Never quit cold turkey on your own.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">INSOMNIA: THE CHOICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Train the brain vs. sedate the brain</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">CBT-I (FIRST-LINE)</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Fixed wake time, sleep</text>
                    <text x="290" y="318" text-anchor="middle" fill="#fff" font-size="17">restriction, stimulus control</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="17">Matches or beats pills;</text>
                    <text x="290" y="403" text-anchor="middle" fill="#fff" font-size="17">benefits last for years</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">4-8 sessions; apps available</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="228" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">CHRONIC SEDATIVES</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Benzodiazepines: dementia</text>
                    <text x="810" y="318" text-anchor="middle" fill="#fff" font-size="17">association, falls, hangover</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="17">Diphenhydramine (PM aids):</text>
                    <text x="810" y="403" text-anchor="middle" fill="#fff" font-size="17">anticholinergic risk signal</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">Association, not proven causation</text>
                    <rect x="150" y="570" width="800" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">MEDICAL FRAMING -- IMPORTANT</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Never stop these drugs abruptly on your own --</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="18">talk to your doctor about tapering safely</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="19">First-line since 2016: therapy, not sedation</text>
                </svg>`,
                caption: "CBT-I first; sedatives carry a brain-span warning label"
            }
        },
        {
            type: "example",
            title: "The Benadryl Problem",
            content: "Here is the study behind the anticholinergic warning -- worth knowing because the drug involved sits in most medicine cabinets.\n\nIn 2015, Shelly Gray and colleagues published a study in **JAMA Internal Medicine** tracking **3,434 adults aged 65+** in the Adult Changes in Thought cohort for about 7 years, with a clever advantage: pharmacy records, not self-report, measured actual **anticholinergic drug use** -- a class that blocks acetylcholine, a neurotransmitter central to memory, and that includes sedating antihistamines like **diphenhydramine** (Benadryl, and the PM in many nighttime pain and sleep aids), some older antidepressants, and bladder drugs.\n\nThe finding: the **highest cumulative users** -- equivalent to taking a standard dose daily for **about 3 years or more** -- had roughly a **54% higher dementia risk** than non-users, with a dose-response pattern: more cumulative exposure, more risk.\n\nThe honest read:\n\n• Observational -- people who need these drugs may differ in relevant ways, though the dose-response and pharmacy-record design strengthen the signal\n• Occasional use is not the concern; **nightly-for-years** is the pattern that carried risk\n• Acetylcholine is exactly the system Alzheimer's drugs try to **boost** -- nightly blocking of it for years is at minimum a bad bet\n\nIf a PM sleep aid has quietly become your nightly ritual, that is a flag worth raising with your doctor -- not a reason to panic, and (again) not medical advice.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE BENADRYL PROBLEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Gray et al., JAMA Internal Medicine 2015</text>
                    <rect x="150" y="160" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="218" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE STUDY</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="18">3,434 adults 65+, ~7 years, pharmacy records</text>
                    <text x="550" y="298" text-anchor="middle" fill="#888" font-size="16">Tracking anticholinergics like diphenhydramine</text>
                    <rect x="150" y="390" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE FINDING</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">~54% higher dementia risk</text>
                    <text x="550" y="550" text-anchor="middle" fill="#fff" font-size="18">in the heaviest users -- roughly daily</text>
                    <text x="550" y="585" text-anchor="middle" fill="#fff" font-size="18">use for 3+ years, with dose-response</text>
                    <rect x="150" y="670" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="728" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HONEST READ</text>
                    <text x="550" y="770" text-anchor="middle" fill="#fff" font-size="18">Observational; occasional use not the issue --</text>
                    <text x="550" y="806" text-anchor="middle" fill="#fff" font-size="18">nightly-for-years is the risky pattern</text>
                    <rect x="200" y="910" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="19">A nightly PM habit is worth a doctor conversation</text>
                </svg>`,
                caption: "Cumulative anticholinergic use tracked with dementia risk"
            }
        },
        {
            type: "quiz",
            question: "What is the guideline-recommended first-line treatment for chronic insomnia?",
            options: [
                { text: "A low nightly dose of an over-the-counter PM sleep aid like diphenhydramine", correct: false },
                { text: "Short-term benzodiazepines, then switching to melatonin for maintenance", correct: false },
                { text: "CBT-I -- cognitive behavioral therapy for insomnia, which matches or beats pills and keeps working after treatment ends", correct: true },
                { text: "Sleeping in on weekends to repay the accumulated sleep debt", correct: false }
            ],
            explanation: "Major guidelines, including the American College of Physicians since 2016, name CBT-I as first-line for chronic insomnia. Its results match or beat medication in trials, and the benefits persist for years because it retrains sleep regulation rather than sedating around it. The PM-aid option is exactly the pattern the anticholinergic research flags, benzodiazepines carry their own dementia association plus fall risk, and weekend catch-up sleep does not resolve chronic insomnia or restore lost deep-sleep cycles.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TREATING INSOMNIA</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">What do the guidelines say to try first?</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">Hint: it is a training program, not a substance</text>
                    <rect x="250" y="380" width="600" height="160" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE KEY DISTINCTION</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">Retraining sleep lasts;</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">sedation only masks</text>
                </svg>`,
                caption: "Check yourself on insomnia treatment"
            }
        },
        {
            type: "concept",
            title: "Deep Sleep Is Trainable",
            content: "Deep slow-wave sleep -- the wash-cycle stage -- **declines naturally with age**: many 70-year-olds get a fraction of the deep sleep they got at 20. You cannot stop that entirely, but the levers that remain are surprisingly strong:\n\n• **Exercise, timed right** -- regular aerobic exercise reliably increases slow-wave sleep. Morning or afternoon works best; a hard workout within 1-2 hours of bed can push sleep later\n\n• **Cool, dark, quiet** -- your core temperature must drop to enter deep sleep. A bedroom around **65-68F (18-20C)**, blackout-level darkness, and quiet (or steady white noise) all deepen the early-night wash window\n\n• **A consistent schedule** -- same sleep and wake time daily, weekends included. Your circadian system concentrates deep sleep in the first half of the night; erratic timing scatters it\n\n• **Morning light** -- 10-20 minutes of bright outdoor light soon after waking anchors the clock that makes you sleepy on schedule 16 hours later\n\n• **The alcohol honesty clause** -- a nightcap feels like it helps because sedation resembles sleep. It is not sleep. Alcohol suppresses REM, and as it wears off around 2-3 a.m. it **fragments the second half of the night**. If you drink, earlier and less is measurably better for sleep architecture\n\n• **Caffeine has a half-life of 5-6 hours** -- a 4 p.m. coffee is still half-caffeinating you at 9-10 p.m., shaving depth off early-night sleep even if you fall asleep fine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TRAIN DEEP SLEEP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The wash cycle declines with age -- fight back</text>
                    <rect x="80" y="170" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">EXERCISE EARLY</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="16">Aerobic work boosts</text>
                    <text x="300" y="302" text-anchor="middle" fill="#fff" font-size="16">slow-wave sleep</text>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="228" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">COOL, DARK, QUIET</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="16">65-68F, blackout dark --</text>
                    <text x="800" y="302" text-anchor="middle" fill="#fff" font-size="16">core temp must drop</text>
                    <rect x="80" y="380" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="438" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">SAME TIME DAILY</text>
                    <text x="300" y="480" text-anchor="middle" fill="#fff" font-size="16">Weekends included --</text>
                    <text x="300" y="512" text-anchor="middle" fill="#fff" font-size="16">rhythm concentrates depth</text>
                    <rect x="580" y="380" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="438" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">MORNING LIGHT</text>
                    <text x="800" y="480" text-anchor="middle" fill="#fff" font-size="16">10-20 outdoor minutes</text>
                    <text x="800" y="512" text-anchor="middle" fill="#fff" font-size="16">anchors the clock</text>
                    <rect x="150" y="610" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="668" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE ALCOHOL HONESTY CLAUSE</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="18">A nightcap is sedation, not sleep -- it fragments</text>
                    <text x="550" y="748" text-anchor="middle" fill="#fff" font-size="18">the second half of the night as it wears off</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Caffeine half-life: 5-6 hours -- mind the 4 p.m. cup</text>
                </svg>`,
                caption: "Six levers that deepen the nightly wash cycle"
            }
        },
        {
            type: "application",
            title: "Your Wind-Down Protocol",
            content: "Build tonight's protocol -- a repeatable off-ramp from day to sleep:\n\n1. **Set a caffeine curfew at 2 p.m.** -- with a 5-6 hour half-life, this alone deepens early-night sleep for many people.\n\n2. **90 minutes before bed: dim the house** -- lower the lights, screens to night mode or (better) away. Bright evening light delays the melatonin signal your deep sleep depends on.\n\n3. **60 minutes before: warm shower or bath** -- the after-drop in core temperature as you cool off is a physiological on-ramp to deep sleep.\n\n4. **30 minutes before: a boring buffer** -- paper book, light stretching, or a worry list: write tomorrow's concerns on paper so your brain can stop rehearsing them at 3 a.m.\n\n5. **Keep the room at 65-68F, dark, and consistent** -- and get outside for morning light within an hour of waking to lock tonight's protocol into a rhythm.\n\nTwo screening reminders, because they outweigh everything above: if you snore loudly **and** fight daytime sleepiness, ask about a sleep test. If insomnia is chronic, ask about CBT-I before any pill. And if you currently take nightly sleep medication, changes go through your doctor -- not this app.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WIND-DOWN PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A repeatable off-ramp to deep sleep</text>
                    <rect x="150" y="165" width="800" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="220" text-anchor="start" fill="#fff" font-size="19">Caffeine curfew: 2 p.m.</text>
                    <text x="245" y="255" text-anchor="start" fill="#888" font-size="15">Half-life 5-6 hours</text>
                    <rect x="150" y="310" width="800" height="115" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="365" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="365" text-anchor="start" fill="#fff" font-size="19">Minus 90 min: dim the whole house</text>
                    <text x="245" y="400" text-anchor="start" fill="#888" font-size="15">Protect the melatonin signal</text>
                    <rect x="150" y="455" width="800" height="115" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="510" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="510" text-anchor="start" fill="#fff" font-size="19">Minus 60 min: warm shower or bath</text>
                    <text x="245" y="545" text-anchor="start" fill="#888" font-size="15">The cooling after-drop invites deep sleep</text>
                    <rect x="150" y="600" width="800" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="655" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="655" text-anchor="start" fill="#fff" font-size="19">Minus 30 min: boring buffer + worry list</text>
                    <text x="245" y="690" text-anchor="start" fill="#888" font-size="15">Park tomorrow's concerns on paper</text>
                    <rect x="150" y="745" width="800" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="800" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="800" text-anchor="start" fill="#fff" font-size="19">65-68F, dark room; morning light after waking</text>
                    <text x="245" y="835" text-anchor="start" fill="#888" font-size="15">Consistency locks in the rhythm</text>
                    <rect x="150" y="900" width="800" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="938" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">Snoring + sleepiness? Sleep test. Chronic insomnia? CBT-I.</text>
                    <text x="550" y="970" text-anchor="middle" fill="#888" font-size="15">Nightly sleep meds change only via your doctor</text>
                </svg>`,
                caption: "Tonight's five-step off-ramp, plus two screening flags"
            }
        },
        {
            type: "quiz",
            question: "In the Whitehall II analysis (Sabia et al., 2021), what was found about persistent short sleep in midlife?",
            options: [
                { text: "Sleeping 6 hours or less through the 50s and 60s was linked to roughly 30% higher dementia risk versus 7-hour sleepers", correct: true },
                { text: "Short sleep only mattered after age 70, so midlife habits were irrelevant", correct: false },
                { text: "Short sleepers had lower dementia risk, since extra waking hours kept their brains stimulated", correct: false },
                { text: "The study proved short sleep causes dementia by randomizing people to 6 hours a night for 25 years", correct: false }
            ],
            explanation: "Sabia and colleagues followed nearly 8,000 Whitehall II participants for about 25 years and found persistent sleep of 6 hours or less in the 50s and 60s associated with roughly 30% higher dementia risk compared to 7 hours. The midlife timing matters -- associations starting decades before diagnosis weaken the reverse-causation objection -- but this was still an observational cohort: no one can ethically randomize people to decades of short sleep, so the word is linked, not proved.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SABIA 2021, WHITEHALL II</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">~8,000 people followed for ~25 years</text>
                    <text x="550" y="273" text-anchor="middle" fill="#888" font-size="16">What did persistent midlife short sleep predict?</text>
                    <rect x="250" y="380" width="600" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">REMEMBER THE SHAPE</text>
                    <text x="550" y="482" text-anchor="middle" fill="#fff" font-size="18">The U-curve: under 6 hours and</text>
                    <text x="550" y="517" text-anchor="middle" fill="#fff" font-size="18">over 9 hours both flag risk</text>
                </svg>`,
                caption: "Final check on the sleep-duration evidence"
            }
        }
    ]
},
{
    id: 7,
    title: "The Social Brain",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Risk Factor Nobody Screens For",
            content: "Your doctor checks your blood pressure, your cholesterol, maybe your blood sugar. Nobody checks how many real conversations you had last week.\n\nThat is a strange oversight, because the 2024 Lancet Commission on dementia puts **social isolation** at about a **5% attributable fraction** for dementia worldwide - as large as almost any single medical risk factor on the list, behind only things like hearing loss and high LDL cholesterol.\n\nHere is the reframe this lesson offers: your friendships are not a nice-to-have that competes with your health habits. They ARE a health habit. Every phone call, every shared meal, every argument about a movie is your brain doing the most demanding workout it knows.\n\nBy the end of this lesson, you will know why connection protects cognition, what the strongest studies actually found, and how to audit and rebuild your own social life like it matters - because it does.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UNSEEN VITAL SIGN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What gets measured vs what matters</text>
                    <rect x="80" y="170" width="440" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CHECKED YEARLY</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="19">Blood pressure</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="19">Cholesterol</text>
                    <text x="300" y="365" text-anchor="middle" fill="#fff" font-size="19">Blood sugar</text>
                    <text x="300" y="415" text-anchor="middle" fill="#888" font-size="16">All tracked, all treated</text>
                    <rect x="580" y="170" width="440" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">NEVER CHECKED</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="19">Real conversations</text>
                    <text x="800" y="325" text-anchor="middle" fill="#fff" font-size="19">Close relationships</text>
                    <text x="800" y="365" text-anchor="middle" fill="#fff" font-size="19">Feeling connected</text>
                    <text x="800" y="415" text-anchor="middle" fill="#888" font-size="16">Yet carries real dementia risk</text>
                    <rect x="150" y="560" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">LANCET 2024</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="20">Social isolation: ~5% of dementia risk</text>
                    <text x="550" y="705" text-anchor="middle" fill="#888" font-size="17">As big as almost any single medical factor</text>
                </svg>`,
                caption: "Social connection is a vital sign no one measures"
            }
        },
        {
            type: "concept",
            title: "Isolation Is a Top-Tier Risk Factor",
            content: "The **Lancet Commission** is the most cited scientific effort to rank modifiable dementia risks. Its 2024 update assigns each factor a **population attributable fraction** - the share of dementia cases that could theoretically be prevented if that factor were eliminated.\n\nWhere social isolation lands:\n\n• **Social isolation: ~5%** - in the same league as depression and traumatic brain injury\n• Bigger than physical inactivity (~2%), hypertension (~2%), diabetes (~2%), and obesity (~1%)\n• Behind only hearing loss (~7%) and high LDL cholesterol (~7%) among single factors\n\nWhy would being alone damage a brain? The leading explanations:\n\n• **Use it or lose it** - social interaction is intense cognitive exercise, and isolation removes it\n• **Stress biology** - chronic loneliness elevates cortisol and inflammation, both hard on neurons\n• **Downstream habits** - isolated people move less, sleep worse, drink more, and see doctors later\n\nOne honest caveat: attributable fractions come from observational data, so some of the arrow may run the other way - early, undiagnosed dementia can cause withdrawal. Researchers try to correct for this by excluding cases diagnosed soon after study entry, and the association survives. It is not proof, but it is strong enough that the Lancet authors treat connection as a genuine lever.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RANKING THE RISKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lancet 2024 attributable fractions</text>
                    <text x="230" y="205" text-anchor="end" fill="#fff" font-size="19">Hearing loss</text>
                    <rect x="260" y="180" width="700" height="40" rx="8" fill="rgba(99,102,241,0.5)" stroke="#6366f1" stroke-width="2"/>
                    <text x="930" y="207" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~7%</text>
                    <text x="230" y="285" text-anchor="end" fill="#fff" font-size="19">High LDL</text>
                    <rect x="260" y="260" width="700" height="40" rx="8" fill="rgba(99,102,241,0.5)" stroke="#6366f1" stroke-width="2"/>
                    <text x="930" y="287" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~7%</text>
                    <text x="230" y="365" text-anchor="end" fill="#f59e0b" font-weight="bold" font-size="19">Isolation</text>
                    <rect x="260" y="340" width="500" height="40" rx="8" fill="rgba(245,158,11,0.5)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="730" y="367" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~5%</text>
                    <text x="230" y="445" text-anchor="end" fill="#fff" font-size="19">Inactivity</text>
                    <rect x="260" y="420" width="200" height="40" rx="8" fill="rgba(139,92,246,0.5)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="430" y="447" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~2%</text>
                    <text x="230" y="525" text-anchor="end" fill="#fff" font-size="19">Hypertension</text>
                    <rect x="260" y="500" width="200" height="40" rx="8" fill="rgba(139,92,246,0.5)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="430" y="527" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~2%</text>
                    <text x="230" y="605" text-anchor="end" fill="#fff" font-size="19">Obesity</text>
                    <rect x="260" y="580" width="100" height="40" rx="8" fill="rgba(139,92,246,0.5)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="380" y="607" text-anchor="start" fill="#fff" font-weight="bold" font-size="18">~1%</text>
                    <rect x="150" y="690" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="745" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">Isolation outranks most medical factors</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="17">Only hearing and LDL edge it out</text>
                </svg>`,
                caption: "Social isolation sits near the top of the modifiable risk list"
            }
        },
        {
            type: "concept",
            title: "Loneliness Is Not the Same as Being Alone",
            content: "Researchers split social risk into two measurable things - and the distinction matters for what you fix.\n\n• **Social isolation** is a **fact**: how many people you actually see, talk to, and live near. It is counted objectively - household size, contact frequency, group memberships.\n• **Loneliness** is a **feeling**: the painful gap between the connection you want and the connection you have. It is measured with validated scales like the UCLA Loneliness Scale.\n\nThey come apart in both directions:\n\n• A widowed man who lives alone but calls his brother daily and plays cards twice a week is isolated on paper, but not lonely\n• A woman in a crowded office and a busy marriage can feel profoundly lonely with people around her all day\n\nBoth carry risk, and studies suggest they harm through partly different channels - isolation removes cognitive stimulation, while loneliness acts more like chronic stress, keeping threat systems switched on.\n\nThe practical upshot: check yourself on both axes. If your contact count is low, the fix is structural - more scheduled human time. If contact is high but connection feels thin, the fix is depth - fewer, realer conversations. Many people need a little of each.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FEELING VS FACT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two different problems, two different fixes</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">ISOLATION</text>
                    <text x="290" y="270" text-anchor="middle" fill="#888" font-size="17">A fact you can count</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">How many people you see</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">How often you talk</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="18">Groups you belong to</text>
                    <text x="290" y="450" text-anchor="middle" fill="#3b82f6" font-size="17">Fix: more scheduled contact</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="24">LONELINESS</text>
                    <text x="810" y="270" text-anchor="middle" fill="#888" font-size="17">A feeling you report</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">The gap between wanted</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">and actual connection</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="18">Possible even in a crowd</text>
                    <text x="810" y="450" text-anchor="middle" fill="#ec4899" font-size="17">Fix: deeper conversations</text>
                    <rect x="150" y="580" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="638" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">Both matter for the brain</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="18">Audit yourself on both axes, not just one</text>
                </svg>`,
                caption: "Isolation is countable; loneliness is felt - both carry risk"
            }
        },
        {
            type: "example",
            title: "The 15-Cigarettes Finding",
            content: "In 2010, psychologist **Julianne Holt-Lunstad** at Brigham Young University published a meta-analysis that changed how medicine talks about relationships. Her team pooled **148 studies covering over 308,000 people** and asked a blunt question: do people with stronger social connections live longer?\n\nThe answer: people with strong social relationships had roughly a **50% higher likelihood of survival** over the study periods than those with weak ones.\n\nTo make that number land, Holt-Lunstad translated it into familiar risks. Weak social connection carried a mortality risk comparable to **smoking up to 15 cigarettes a day** - and larger than the risks associated with **obesity** or **physical inactivity**.\n\nHer 2015 follow-up, pooling data on **3.4 million people**, sharpened the picture: social isolation, loneliness, and living alone were each associated with roughly **26-32% increased odds of early death**.\n\nThese are mortality studies, not dementia studies - but the brain rides on the same body. A factor that rivals smoking for overall health is not a soft, sentimental variable. It is the kind of number that, attached to any pill or diet, would be front-page news.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOLT-LUNSTAD 2010</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">148 studies, 308,000+ people</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE HEADLINE</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="19">Strong relationships: ~50% higher</text>
                    <text x="550" y="308" text-anchor="middle" fill="#fff" font-size="19">likelihood of survival</text>
                    <rect x="150" y="380" width="800" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WEAK CONNECTION COMPARES TO</text>
                    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="19">Smoking up to 15 cigarettes a day</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="19">Exceeds obesity and inactivity</text>
                    <text x="550" y="570" text-anchor="middle" fill="#888" font-size="16">As a mortality risk factor</text>
                    <rect x="150" y="660" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">2015 UPDATE: 3.4 MILLION PEOPLE</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="18">Isolation and loneliness: ~26-32% higher odds of death</text>
                </svg>`,
                caption: "Weak social ties rival smoking as a mortality risk"
            }
        },
        {
            type: "quiz",
            question: "According to the Holt-Lunstad meta-analyses, weak social connection carries a mortality risk most comparable to which of the following?",
            options: [
                { text: "Smoking up to 15 cigarettes a day", correct: true },
                { text: "Eating red meat more than twice a week", correct: false },
                { text: "Having mildly elevated cholesterol", correct: false },
                { text: "Skipping annual physical exams", correct: false }
            ],
            explanation: "Holt-Lunstad's 2010 meta-analysis of 148 studies found weak social connection carried a mortality risk comparable to smoking up to 15 cigarettes a day - and exceeding the risks tied to obesity and physical inactivity. The other options sound plausible because they are all health-adjacent, but none of them was the comparison the study made, and none rivals the size of the social connection effect. That is why researchers now treat relationships as a genuine health behavior, not a lifestyle bonus.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE CONNECTION EFFECT</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">148 studies, 308,000+ people</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">How big is the risk of weak social ties?</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Think in comparisons</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">Which familiar risk does it match?</text>
                </svg>`,
                caption: "Test your understanding of the social connection data"
            }
        },
        {
            type: "concept",
            title: "Conversation: The Original Brain Training",
            content: "Forget the puzzle apps for a moment. A single good conversation is one of the most demanding cognitive tasks your brain performs, and it fires nearly everything at once:\n\n• **Working memory** - holding what was just said while composing your reply\n• **Attention** - tracking words, tone, facial expressions, and interruptions in real time\n• **Language** - retrieving words, parsing grammar, catching jokes and double meanings\n• **Theory of mind** - modeling what the other person knows, feels, and intends, and updating that model sentence by sentence\n• **Executive control** - suppressing what you should not say, switching topics, reading the room\n\nNo commercial brain-training game demands that combination. And unlike an app, conversation is unpredictable - your brain cannot fall into a routine, because the other person keeps changing the puzzle.\n\nThere is even experimental support for the short-term effect: a University of Michigan study led by **Oscar Ybarra** found that just **10 minutes of social conversation** measurably boosted executive function on lab tasks - performing about as well as doing traditional cognitive exercises for the same period.\n\nSo when you choose the phone call over another hour of scrolling, you are not skipping brain training. You are choosing the better version of it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A FULL-BRAIN WORKOUT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What one conversation activates</text>
                    <circle cx="550" cy="430" r="110" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="420" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">ONE GOOD</text>
                    <text x="550" y="455" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">TALK</text>
                    <circle cx="230" cy="260" r="90" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="253" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Working</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">memory</text>
                    <circle cx="870" cy="260" r="90" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="267" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Attention</text>
                    <circle cx="230" cy="620" r="90" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="627" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Language</text>
                    <circle cx="870" cy="620" r="90" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="613" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Theory of</text>
                    <text x="870" y="640" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">mind</text>
                    <line x1="310" y1="305" x2="465" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="790" y1="305" x2="635" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="310" y1="575" x2="465" y2="480" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="790" y1="575" x2="635" y2="480" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">Ybarra study: 10 minutes of conversation</text>
                    <text x="550" y="885" text-anchor="middle" fill="#fff" font-size="18">boosted executive function like brain exercises</text>
                </svg>`,
                caption: "Conversation fires memory, attention, language, and theory of mind at once"
            }
        },
        {
            type: "example",
            title: "85 Years of Evidence: The Harvard Study",
            content: "In 1938, Harvard researchers began tracking two groups - 268 Harvard sophomores and 456 boys from Boston's poorest neighborhoods. The **Harvard Study of Adult Development** has now followed its participants and their descendants for **more than 85 years**, making it one of the longest studies of adult life ever run.\n\nIts current director, psychiatrist **Robert Waldinger**, summarizes the central finding bluntly: the quality of your relationships is the strongest predictor of long-term health and happiness the study has found.\n\nThe detail worth memorizing: when researchers looked at what predicted who would be healthy at age 80, **relationship satisfaction at age 50 was a better predictor than cholesterol levels** measured at the same age.\n\nAnd for the brain specifically: participants who felt they could **count on their partner** in times of need kept sharper memories for longer, while those in high-conflict, low-affection relationships showed earlier memory decline.\n\nCaveats worth stating plainly: this is observational, the original cohort was all male and mostly white, and 1938 Harvard is not a random sample of humanity. But the study's length is unmatched, and its core signal - relationship quality tracking late-life health - keeps replicating in more diverse cohorts.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 85-YEAR STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Harvard Study of Adult Development</text>
                    <line x1="120" y1="230" x2="980" y2="230" stroke="#6366f1" stroke-width="3"/>
                    <circle cx="160" cy="230" r="14" fill="#6366f1"/>
                    <text x="160" y="285" text-anchor="middle" fill="#fff" font-size="17">1938</text>
                    <text x="160" y="315" text-anchor="middle" fill="#888" font-size="14">724 men enrolled</text>
                    <circle cx="550" cy="230" r="14" fill="#8b5cf6"/>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="17">Age 50</text>
                    <text x="550" y="315" text-anchor="middle" fill="#888" font-size="14">Relationships measured</text>
                    <circle cx="940" cy="230" r="14" fill="#10b981"/>
                    <text x="940" y="285" text-anchor="middle" fill="#fff" font-size="17">Age 80</text>
                    <text x="940" y="315" text-anchor="middle" fill="#888" font-size="14">Health measured</text>
                    <rect x="80" y="400" width="440" height="250" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">CHOLESTEROL AT 50</text>
                    <text x="300" y="515" text-anchor="middle" fill="#fff" font-size="18">Weaker predictor of</text>
                    <text x="300" y="550" text-anchor="middle" fill="#fff" font-size="18">health at 80</text>
                    <rect x="580" y="400" width="440" height="250" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">RELATIONSHIPS AT 50</text>
                    <text x="800" y="515" text-anchor="middle" fill="#fff" font-size="18">Stronger predictor of</text>
                    <text x="800" y="550" text-anchor="middle" fill="#fff" font-size="18">health at 80</text>
                    <rect x="150" y="720" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Secure partners kept sharper memories longer</text>
                    <text x="550" y="815" text-anchor="middle" fill="#888" font-size="16">Observational, but the longest view science has</text>
                </svg>`,
                caption: "Relationship quality at 50 out-predicted cholesterol for health at 80"
            }
        },
        {
            type: "concept",
            title: "An Epidemic, Officially",
            content: "In May 2023, **US Surgeon General Vivek Murthy** did something unusual: he issued a formal advisory - the tool reserved for urgent public health threats like smoking and opioids - about **loneliness and isolation**.\n\nThe advisory's key claims:\n\n• About **half of American adults** reported measurable loneliness even before the pandemic\n• Social connection affects mortality risk on the scale of smoking and exceeds obesity\n• The average American's time with friends dropped by **nearly 20 hours per month** between 2003 and 2020\n\nCalling it an epidemic is rhetorical framing - loneliness is not literally contagious like a virus - but the advisory put institutional weight behind what the data had shown for a decade.\n\nOne life event deserves special mention: **retirement**. It quietly deletes the largest source of daily social contact most adults have - coworkers, meetings, hallway chat - often overnight. Research on retirees consistently flags the transition as a risk window for isolation, depression, and accelerated cognitive decline, especially for people whose entire social world ran through work.\n\nThe lesson is not to avoid retiring. It is to treat retirement the way you would treat stopping a medication: plan the replacement before you stop, not after.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A PUBLIC HEALTH ADVISORY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">US Surgeon General, May 2023</text>
                    <rect x="150" y="170" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE NUMBERS</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="19">~Half of US adults report loneliness</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="19">Friend time down ~20 hours/month</text>
                    <text x="550" y="358" text-anchor="middle" fill="#888" font-size="16">Comparing 2003 to 2020</text>
                    <rect x="150" y="450" width="800" height="290" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="510" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">RETIREMENT: A SOCIAL CLIFF</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="19">Work provides most adults their daily</text>
                    <text x="550" y="595" text-anchor="middle" fill="#fff" font-size="19">social contact - and it ends overnight</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="19">Plan the replacement BEFORE you stop</text>
                    <text x="550" y="700" text-anchor="middle" fill="#888" font-size="16">Like tapering a medication, not quitting cold</text>
                    <rect x="200" y="810" width="700" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">Connection is now official public health policy</text>
                    <text x="550" y="895" text-anchor="middle" fill="#888" font-size="16">The same advisory tool used for smoking</text>
                </svg>`,
                caption: "Loneliness earned the advisory treatment once reserved for smoking"
            }
        },
        {
            type: "quote",
            content: "The people who were the most satisfied in their relationships at age 50 were the healthiest at age 80. Good relationships keep us happier and healthier. Period.",
            author: "Robert Waldinger, Harvard Study of Adult Development",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="330" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="230" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"The people who were the most satisfied</text>
                    <text x="160" y="272" text-anchor="start" fill="#fff" font-style="italic" font-size="22">in their relationships at age 50 were</text>
                    <text x="160" y="314" text-anchor="start" fill="#fff" font-style="italic" font-size="22">the healthiest at age 80. Good relationships</text>
                    <text x="160" y="356" text-anchor="start" fill="#fff" font-style="italic" font-size="22">keep us happier and healthier. Period."</text>
                    <text x="940" y="430" text-anchor="end" fill="#8b5cf6" font-size="18">- Robert Waldinger</text>
                    <rect x="250" y="560" width="600" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="608" text-anchor="middle" fill="#ffd700" font-size="18">85+ years of data behind one sentence</text>
                    <text x="550" y="643" text-anchor="middle" fill="#888" font-size="16">Harvard Study of Adult Development</text>
                </svg>`,
                caption: "The longest study of adult life, in one sentence"
            }
        },
        {
            type: "application",
            title: "Your Social Fitness Plan",
            content: "Treat this like an exercise program - specific, scheduled, repeatable.\n\n1. **Run a relationship audit tonight** - list the 5 people who matter most to you and write down when you last had a real conversation with each. Anything over a month is a flag.\n\n2. **Schedule one standing call** - pick one person and make it a recurring weekly slot, same day, same time. Recurring beats spontaneous because it survives busy weeks.\n\n3. **Join one structured group this month** - a choir, a class, a volunteer shift, a walking group. Structure does the heavy lifting: it puts you in the same room with the same people repeatedly, which is how friendship actually forms.\n\n4. **Add intergenerational contact** - grandchildren, mentoring, tutoring, or a neighbor decades from your age. Cross-generation conversation is extra cognitive work in the best way - different references, different assumptions, more theory of mind.\n\n5. **If retirement is within 5 years, plan the replacement now** - decide which groups, projects, and people will supply the daily contact your job currently provides.\n\nNone of this requires being an extrovert. It requires a calendar.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SOCIAL FITNESS PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves, all schedulable</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="215" text-anchor="start" fill="#fff" font-size="18">Audit your top 5 relationships tonight</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="345" text-anchor="start" fill="#fff" font-size="18">Set one standing weekly call</text>
                    <rect x="150" y="420" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="475" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="475" text-anchor="start" fill="#fff" font-size="18">Join one structured group this month</text>
                    <rect x="150" y="550" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="605" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="605" text-anchor="start" fill="#fff" font-size="18">Add intergenerational contact</text>
                    <rect x="150" y="680" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="735" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="735" text-anchor="start" fill="#fff" font-size="18">Pre-plan your retirement social life</text>
                    <rect x="250" y="820" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="18">Not personality - just a calendar</text>
                </svg>`,
                caption: "Your five-step social fitness program"
            }
        },
        {
            type: "example",
            title: "What Structured Connection Looks Like",
            content: "Abstract advice to \"be more social\" fails. Structure succeeds. Two concrete patterns:\n\n**The choir effect.** Community singing groups are a favorite of researchers because they bundle everything at once: weekly schedule, shared goal, synchronized activity, and light physical demand (breath control is real work). UK studies of community choirs for older adults report gains in mood and social bonding, and choirs have among the best attendance rates of any senior activity studied - because missing a week lets the group down. The accountability is the feature.\n\n**The volunteering double-dip.** The **Baltimore Experience Corps** program placed adults 60+ in elementary schools as reading tutors, about 15 hours a week. Johns Hopkins researchers found the tutors themselves gained: brain imaging in a randomized pilot showed **stabilized or increased hippocampal volume** over two years in volunteers versus shrinkage in controls, alongside gains in executive function. Helping children read turned out to be an intervention for the helper's brain.\n\nNotice what both share: fixed schedule, other people counting on you, and a purpose beyond socializing. That triad - schedule, obligation, purpose - is what turns good intentions into an actual social life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STRUCTURE WINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two proven patterns of connection</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE CHOIR</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Weekly schedule</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">Shared goal + synchrony</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Group counts on you</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Best-in-class attendance</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="16">in senior activity studies</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">EXPERIENCE CORPS</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Adults 60+ tutoring kids</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="18">~15 hours per week</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Hippocampus stabilized</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">vs shrinkage in controls</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="16">Johns Hopkins pilot RCT</text>
                    <rect x="150" y="570" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">The winning triad</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="19">Schedule + obligation + purpose</text>
                </svg>`,
                caption: "Choirs and tutoring: connection with built-in accountability"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures the distinction between loneliness and social isolation?",
            options: [
                { text: "They are two words for the same condition, measured the same way", correct: false },
                { text: "Isolation is an objective fact about contact; loneliness is a subjective feeling - and both independently carry health risk", correct: true },
                { text: "Loneliness is the dangerous one; objective isolation is harmless if you do not feel lonely", correct: false },
                { text: "Isolation only matters after retirement, while loneliness only affects young people", correct: false }
            ],
            explanation: "Isolation is the countable fact - how many people you see and how often - while loneliness is the felt gap between the connection you want and what you have. They can come apart: you can be alone but content, or lonely in a crowd. The tempting wrong answer is that only the feeling matters, but studies link objective isolation to risk even in people who deny feeling lonely, likely because it removes cognitive stimulation regardless of mood. Both axes deserve an audit.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">TWO KINDS OF ALONE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">One is a fact. One is a feeling.</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">Which is which - and which one matters?</text>
                    <rect x="200" y="380" width="320" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="360" y="435" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">ISOLATION</text>
                    <text x="360" y="470" text-anchor="middle" fill="#fff" font-size="16">Countable</text>
                    <rect x="580" y="380" width="320" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="740" y="435" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">LONELINESS</text>
                    <text x="740" y="470" text-anchor="middle" fill="#fff" font-size="16">Felt</text>
                </svg>`,
                caption: "Final check: fact vs feeling"
            }
        }
    ]
},
{
    id: 8,
    title: "Food for Thought: The MIND Diet",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Can a Grocery List Protect Your Memory?",
            content: "Walk down any supplement aisle and you will find bottles promising to \"support brain health\" for 40 dollars a month. Meanwhile, the diet with the best actual evidence for the aging brain costs less than most people already spend on groceries - and half of it is beans and frozen berries.\n\nIt is called the **MIND diet**, designed by epidemiologist **Martha Clare Morris** at Rush University in Chicago, and its early results were stunning: in her 2015 study, people who followed it closely had about **53% lower Alzheimer's risk**.\n\nBut here is what makes this lesson different from a magazine article: we are also going to walk through the **2023 randomized trial** that tested the MIND diet head-to-head - and came up empty. Both stories are true, and understanding why they differ will make you smarter about every health headline you ever read.\n\nNot medical advice - just the evidence, served honestly. Bring your appetite for nuance.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIND DIET</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two true stories about one diet</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE HEADLINE</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="19">Morris 2015 study:</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="19">~53% lower Alzheimer's</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="19">risk with high adherence</text>
                    <text x="290" y="430" text-anchor="middle" fill="#888" font-size="16">Observational study</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE PLOT TWIST</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="19">2023 randomized trial:</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="19">no significant difference</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="19">versus the control diet</text>
                    <text x="810" y="430" text-anchor="middle" fill="#888" font-size="16">3-year experiment</text>
                    <rect x="150" y="560" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="618" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">Both are true</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="18">Understanding why is the real lesson</text>
                </svg>`,
                caption: "One diet, two very different findings - both worth knowing"
            }
        },
        {
            type: "concept",
            title: "Mediterranean Meets DASH, Aimed at the Brain",
            content: "**MIND** stands for **Mediterranean-DASH Intervention for Neurodegenerative Delay**. Martha Clare Morris and her Rush University team built it in the early 2010s by starting with two diets that already had strong cardiovascular evidence:\n\n• The **Mediterranean diet** - olive oil, fish, vegetables, legumes, modest wine\n• The **DASH diet** - designed to lower blood pressure; heavy on vegetables, fruit, low-fat dairy, low sodium\n\nThen they made one crucial move: they went through the nutritional neuroscience literature and kept only the components with specific evidence for the **brain**. That is why MIND has quirks the parent diets lack:\n\n• **Berries** are singled out - not fruit in general - because blueberry and strawberry studies (including the Nurses' Health Study) linked them to slower cognitive decline\n• **Leafy greens** get their own daily-ish target, separate from other vegetables, based on data tying greens to slower brain aging\n• It is deliberately **easier** than strict Mediterranean - fish once a week, not daily\n\nThe design philosophy matters: MIND was never a lab invention. It is a scoring system laid over normal food, built so ordinary people could actually follow it. You get points for what you eat and lose points for what you limit - which makes it testable, and tested it was.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HYBRID BY DESIGN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two proven diets, filtered for the brain</text>
                    <rect x="80" y="180" width="400" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="280" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">MEDITERRANEAN</text>
                    <text x="280" y="285" text-anchor="middle" fill="#fff" font-size="17">Olive oil, fish,</text>
                    <text x="280" y="318" text-anchor="middle" fill="#fff" font-size="17">vegetables, legumes</text>
                    <rect x="620" y="180" width="400" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="820" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">DASH</text>
                    <text x="820" y="285" text-anchor="middle" fill="#fff" font-size="17">Blood pressure diet:</text>
                    <text x="820" y="318" text-anchor="middle" fill="#fff" font-size="17">produce, low sodium</text>
                    <path d="M280 360 L500 480" stroke="#14b8a6" stroke-width="3"/>
                    <path d="M820 360 L600 480" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="510,486 488,478 502,464" fill="#14b8a6"/>
                    <polygon points="590,486 612,478 598,464" fill="#14b8a6"/>
                    <rect x="250" y="490" width="600" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="550" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">MIND DIET</text>
                    <text x="550" y="595" text-anchor="middle" fill="#fff" font-size="18">Keep only what has brain evidence</text>
                    <text x="550" y="635" text-anchor="middle" fill="#888" font-size="16">Berries and greens promoted, rules relaxed</text>
                    <rect x="200" y="760" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="19">Built by Martha Clare Morris, Rush University</text>
                    <text x="550" y="848" text-anchor="middle" fill="#888" font-size="16">Designed to be scored - and to be followable</text>
                </svg>`,
                caption: "MIND blends Mediterranean and DASH, filtered for brain evidence"
            }
        },
        {
            type: "visual",
            title: "Ten to Eat, Five to Limit",
            content: "The whole diet fits on one card. **Ten brain-healthy groups** with weekly targets: leafy greens (6+ servings/week), other vegetables (daily), berries (2+/week), nuts (5+/week), olive oil (primary cooking fat), whole grains (3+/day), fish (1+/week), beans (4+/week), poultry (2+/week), and wine - which the original score capped at one glass daily, though modern guidance is clear: **if you do not drink, do not start for your brain**. Five to limit: red meat, butter and margarine, cheese, pastries and sweets, and fried or fast food.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIND SCORECARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">10 groups to eat, 5 to limit</text>
                    <rect x="60" y="150" width="540" height="620" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="330" y="205" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">EAT THESE</text>
                    <text x="110" y="260" text-anchor="start" fill="#fff" font-size="18">Leafy greens</text>
                    <text x="550" y="260" text-anchor="end" fill="#888" font-size="16">6+/week</text>
                    <text x="110" y="310" text-anchor="start" fill="#fff" font-size="18">Other vegetables</text>
                    <text x="550" y="310" text-anchor="end" fill="#888" font-size="16">daily</text>
                    <text x="110" y="360" text-anchor="start" fill="#fff" font-size="18">Berries</text>
                    <text x="550" y="360" text-anchor="end" fill="#888" font-size="16">2+/week</text>
                    <text x="110" y="410" text-anchor="start" fill="#fff" font-size="18">Nuts</text>
                    <text x="550" y="410" text-anchor="end" fill="#888" font-size="16">5+/week</text>
                    <text x="110" y="460" text-anchor="start" fill="#fff" font-size="18">Olive oil</text>
                    <text x="550" y="460" text-anchor="end" fill="#888" font-size="16">main fat</text>
                    <text x="110" y="510" text-anchor="start" fill="#fff" font-size="18">Whole grains</text>
                    <text x="550" y="510" text-anchor="end" fill="#888" font-size="16">3+/day</text>
                    <text x="110" y="560" text-anchor="start" fill="#fff" font-size="18">Fish</text>
                    <text x="550" y="560" text-anchor="end" fill="#888" font-size="16">1+/week</text>
                    <text x="110" y="610" text-anchor="start" fill="#fff" font-size="18">Beans</text>
                    <text x="550" y="610" text-anchor="end" fill="#888" font-size="16">4+/week</text>
                    <text x="110" y="660" text-anchor="start" fill="#fff" font-size="18">Poultry</text>
                    <text x="550" y="660" text-anchor="end" fill="#888" font-size="16">2+/week</text>
                    <text x="110" y="710" text-anchor="start" fill="#fff" font-size="18">Wine (see note)</text>
                    <text x="550" y="710" text-anchor="end" fill="#888" font-size="16">limited</text>
                    <rect x="640" y="150" width="400" height="440" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="840" y="205" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LIMIT THESE</text>
                    <text x="690" y="265" text-anchor="start" fill="#fff" font-size="18">Red meat</text>
                    <text x="690" y="330" text-anchor="start" fill="#fff" font-size="18">Butter / margarine</text>
                    <text x="690" y="395" text-anchor="start" fill="#fff" font-size="18">Cheese</text>
                    <text x="690" y="460" text-anchor="start" fill="#fff" font-size="18">Pastries and sweets</text>
                    <text x="690" y="525" text-anchor="start" fill="#fff" font-size="18">Fried / fast food</text>
                    <rect x="640" y="620" width="400" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="840" y="672" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">WINE NOTE</text>
                    <text x="840" y="710" text-anchor="middle" fill="#fff" font-size="15">Do not START drinking</text>
                    <text x="840" y="740" text-anchor="middle" fill="#fff" font-size="15">for your brain</text>
                </svg>`,
                caption: "The full MIND diet on one card - eat ten, limit five"
            }
        },
        {
            type: "example",
            title: "The 53% Headline: Morris 2015",
            content: "Here is the study that made MIND famous. Morris and colleagues followed **923 Chicago-area adults aged 58 to 98** in the Rush Memory and Aging Project, scoring each person's diet from food questionnaires and tracking who developed Alzheimer's over an average of **4.5 years**.\n\nThe results, published in 2015:\n\n• **Top-third MIND scorers: ~53% lower** risk of Alzheimer's than the bottom third\n• **Middle-third scorers: ~35% lower** risk - meaning even moderate adherence appeared to help\n• In a companion paper, high scorers' cognition looked about **7.5 years younger** than low scorers'\n\nThat middle-third finding was the crowd-pleaser: you did not have to be perfect, just directionally decent.\n\nNow the honest part. This was **observational** - nobody was assigned a diet. People who eat salmon and leafy greens also tend to exercise, sleep well, have more education, and see doctors regularly. Morris adjusted statistically for many of these, but no adjustment fully removes the tangle. Observational nutrition studies have a long history of associations that shrank or vanished in trials.\n\nSo the right reading in 2015 was: promising signal, plausible mechanisms, needs a randomized test. And to their credit, that test is exactly what the field ran next.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MORRIS 2015</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">923 adults, ~4.5 years of follow-up</text>
                    <text x="280" y="205" text-anchor="end" fill="#fff" font-size="19">High adherence</text>
                    <rect x="310" y="175" width="560" height="50" rx="10" fill="rgba(16,185,129,0.5)" stroke="#10b981" stroke-width="2"/>
                    <text x="840" y="208" text-anchor="end" fill="#fff" font-weight="bold" font-size="19">~53% lower risk</text>
                    <text x="280" y="305" text-anchor="end" fill="#fff" font-size="19">Moderate</text>
                    <rect x="310" y="275" width="380" height="50" rx="10" fill="rgba(20,184,166,0.5)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="660" y="308" text-anchor="end" fill="#fff" font-weight="bold" font-size="19">~35% lower</text>
                    <text x="280" y="405" text-anchor="end" fill="#fff" font-size="19">Low adherence</text>
                    <rect x="310" y="375" width="120" height="50" rx="10" fill="rgba(136,136,136,0.4)" stroke="#888" stroke-width="2"/>
                    <text x="450" y="408" text-anchor="start" fill="#888" font-size="17">baseline</text>
                    <rect x="150" y="500" width="800" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="558" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">Even moderate adherence looked protective</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">Cognition ~7.5 years younger in top scorers</text>
                    <rect x="150" y="700" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="758" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">But: observational</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">Healthy eaters differ in many other ways too</text>
                </svg>`,
                caption: "The observational findings that made MIND famous - with the caveat attached"
            }
        },
        {
            type: "quiz",
            question: "In Morris's 2015 observational study, what did MODERATE adherence to the MIND diet show?",
            options: [
                { text: "No benefit - only perfect adherence was associated with lower risk", correct: false },
                { text: "About 35% lower Alzheimer's risk - meaningful benefit without perfection", correct: true },
                { text: "A 53% risk reduction, identical to high adherence", correct: false },
                { text: "Higher risk, because partial diets backfire metabolically", correct: false }
            ],
            explanation: "The middle-third scorers showed roughly 35% lower Alzheimer's risk versus about 53% in the top third - one of the study's most encouraging findings, because it suggested you do not need dietary perfection to see an association. The tempting wrong answer is that only strict adherence counted, but the data showed a dose-response gradient instead. Remember the frame, though: these are observational associations, not proof of causation - which is exactly why the next card in this lesson matters.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DOSE MATTERS?</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">High adherence: ~53% lower risk</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">What about the middle of the pack?</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Perfection vs progress</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">Did partial credit count?</text>
                </svg>`,
                caption: "Test yourself on the 2015 findings"
            }
        },
        {
            type: "concept",
            title: "The Honesty Centerpiece: The 2023 Trial",
            content: "In July 2023, the **New England Journal of Medicine** published the randomized trial the field had been waiting for: **Barnes and colleagues** tested the MIND diet the hard way.\n\nThe setup: **604 older adults** - overweight, with suboptimal diets and a family history of dementia - were randomized to either the **MIND diet** or their **usual diet**, both arms with **mild calorie restriction** (about 250 fewer calories a day), both with dietitian coaching, for **3 years**.\n\nThe result: **both groups improved slightly on cognitive testing - and there was no significant difference between them**. Brain MRI changes did not differ either.\n\nRead that carefully, because it is not the same as \"the diet failed\":\n\n• The **control group was not a couch-potato group** - they got coaching, ate somewhat better, and lost nearly as much weight (~5 kg on average in both arms)\n• Weight loss and any attention to diet may themselves help cognition, lifting both arms\n• **Three years is short** for a disease that brews over decades; the observational data covered much longer exposure windows\n• Participants were cognitively healthy at baseline - little room to show differences\n\nWhat you cannot honestly say anymore: that MIND is **proven** to prevent dementia. What you still can say: it is a sensible, cheap, heart-healthy way to eat with plausible mechanisms and strong observational backing. That is a real recommendation - just a humbler one than the headlines sold.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 2023 NEJM TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">604 adults, randomized, 3 years</text>
                    <rect x="60" y="180" width="460" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MIND DIET ARM</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="18">+ mild calorie cut</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">+ dietitian coaching</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="17">Cognition improved slightly</text>
                    <rect x="580" y="180" width="460" height="260" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">USUAL DIET ARM</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">+ mild calorie cut</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">+ dietitian coaching</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="17">Cognition improved slightly</text>
                    <rect x="200" y="500" width="700" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">NO SIGNIFICANT DIFFERENCE</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="18">Both arms improved; MIND did not beat control</text>
                    <rect x="150" y="710" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="768" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Why it may have come up empty</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="17">Short trial - both arms improved diets and lost weight</text>
                    <text x="550" y="845" text-anchor="middle" fill="#888" font-size="16">Decades of exposure vs 3 trial years</text>
                </svg>`,
                caption: "The randomized test: both arms improved, neither won"
            }
        },
        {
            type: "concept",
            title: "How to Hold Both Results in Your Head",
            content: "The MIND story is the best available case study in reading nutrition science like an adult. Here is the framework:\n\n• **Observational studies** watch what people already do. They can cover decades and huge populations, but healthy eaters differ from unhealthy eaters in dozens of ways no statistician can fully untangle. They generate hypotheses and show associations.\n• **Randomized trials** assign the behavior, which isolates cause - but for diet and dementia they are brutally hard: you cannot blind people to what they eat, you cannot run them for 30 years, and your \"control\" group often improves too.\n\nSo when the two disagree, the answer is rarely \"the observational study lied\" or \"the trial proves nothing works.\" For MIND, the honest synthesis is:\n\n• The **direction** of evidence still favors the diet - heart health, blood pressure, weight, and inflammation all improve on it, and those pathways feed the brain\n• The **magnitude** of the 2015 numbers (53%!) was almost certainly inflated by confounding\n• The **claim** you can defend: eating this way is a low-cost, no-downside bet with plausible but unproven brain benefits\n\nAnyone selling you certainty in either direction - miracle diet or total debunking - is selling, not summarizing. The evidence lives in the middle, and that is fine: you do not need certainty to choose salmon over cheeseburgers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">READING THE EVIDENCE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why the two studies disagree</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">OBSERVATIONAL</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Decades of exposure</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Huge populations</text>
                    <text x="290" y="355" text-anchor="middle" fill="#ef4444" font-size="17">Confounded by lifestyle</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Shows association</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">RANDOMIZED TRIAL</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Isolates causation</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">But short - 3 years</text>
                    <text x="810" y="355" text-anchor="middle" fill="#ef4444" font-size="17">Control group improved too</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Tests cause, briefly</text>
                    <rect x="150" y="540" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE DEFENSIBLE CLAIM</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="18">Cheap, heart-healthy, plausible for the brain</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">Not proven dementia prevention</text>
                    <rect x="250" y="800" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="858" text-anchor="middle" fill="#ffd700" font-size="18">Certainty-sellers are selling, not summarizing</text>
                </svg>`,
                caption: "Both study types have blind spots - the truth sits between them"
            }
        },
        {
            type: "example",
            title: "The Wider Table: What Else the Food Evidence Says",
            content: "MIND is not the only line of evidence connecting food and cognition. The supporting cast:\n\n• **Mediterranean diet cohorts**: multiple large observational studies - including Spain's PREDIMED trial, which found better cognitive scores in the olive-oil and nut arms - point the same general direction: plants, fish, olive oil, less processed food. PREDIMED had methodological problems that forced a partial retraction and reanalysis, but its signal survived.\n\n• **Cocoa flavanols**: the **COSMOS-Mind** trial (over 2,200 older adults, 3 years) found cocoa extract did NOT improve global cognition overall - though related COSMOS analyses hinted at modest benefits, possibly concentrated in people with poor baseline diets. Verdict: interesting, mixed, not a reason to buy chocolate pills.\n\n• **B vitamins**: this one is unambiguous when deficiency exists. Low **B12** or folate can directly cause reversible memory problems, and B12 absorption falls with age and with common drugs like metformin. Checking and correcting a deficiency is standard medicine - one of the few slam-dunks in this field.\n\n• **Fish**: eating fish **1-2 times a week** is repeatedly associated with slower cognitive decline; going beyond that adds little in most studies.\n\nThe pattern across all of it: whole foods in sensible combinations show promise; isolated compounds in capsules keep disappointing. Hold that thought for the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WIDER TABLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four more lines of food evidence</text>
                    <rect x="80" y="170" width="440" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">MEDITERRANEAN</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="16">PREDIMED: better cognition</text>
                    <text x="300" y="308" text-anchor="middle" fill="#fff" font-size="16">in olive oil and nut arms</text>
                    <text x="300" y="350" text-anchor="middle" fill="#888" font-size="15">Messy but directionally solid</text>
                    <rect x="580" y="170" width="440" height="220" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">COCOA FLAVANOLS</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="16">COSMOS-Mind: no overall</text>
                    <text x="800" y="308" text-anchor="middle" fill="#fff" font-size="16">cognitive benefit at 3 years</text>
                    <text x="800" y="350" text-anchor="middle" fill="#888" font-size="15">Modest hints, mixed results</text>
                    <rect x="80" y="430" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="485" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">B12 / FOLATE</text>
                    <text x="300" y="535" text-anchor="middle" fill="#fff" font-size="16">Deficiency causes reversible</text>
                    <text x="300" y="568" text-anchor="middle" fill="#fff" font-size="16">memory problems - fix it</text>
                    <text x="300" y="610" text-anchor="middle" fill="#888" font-size="15">The clearest win here</text>
                    <rect x="580" y="430" width="440" height="220" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="800" y="485" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">FISH</text>
                    <text x="800" y="535" text-anchor="middle" fill="#fff" font-size="16">1-2 servings a week linked</text>
                    <text x="800" y="568" text-anchor="middle" fill="#fff" font-size="16">to slower decline</text>
                    <text x="800" y="610" text-anchor="middle" fill="#888" font-size="15">More adds little</text>
                    <rect x="150" y="710" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Pattern: whole foods promise, pills disappoint</text>
                    <text x="550" y="805" text-anchor="middle" fill="#888" font-size="16">Sensible combinations beat isolated compounds</text>
                </svg>`,
                caption: "Beyond MIND: the broader food-and-brain evidence"
            }
        },
        {
            type: "concept",
            title: "The Supplement Aisle: A Consumer Warning",
            content: "The memory supplement industry is worth billions. Here is what the trials actually show:\n\n• **Ginkgo biloba** got the definitive test: the **GEM trial** (Ginkgo Evaluation of Memory) followed over **3,000 older adults for about 6 years** in a randomized, placebo-controlled design. Result: **no reduction in dementia** or Alzheimer's incidence, and no slower cognitive decline. Ginkgo had its fair shot and missed.\n\n• **Prevagen**, the jellyfish-protein pill advertised relentlessly on television, was sued by the **FTC and New York Attorney General** for deceptive advertising. The company's own study found no significant benefit over placebo in the overall population - the marketing leaned on after-the-fact subgroup slicing.\n\n• **Vitamin E, omega-3 capsules, multivitamins**: mostly null for dementia prevention in trials, with one partial exception - COSMOS trial analyses found a **modest memory benefit from a daily multivitamin** in older adults, a genuinely interesting result that researchers are still stress-testing.\n\nThe rule that falls out of all this: **if a compound worked in food, putting it in a capsule has repeatedly failed to reproduce the benefit**. Nutrients seem to work as ensembles, in food matrices, over years.\n\nPractical translation: unless your doctor finds a specific deficiency (B12 being the classic), the 40 dollars a month does more for your brain as groceries - berries, greens, olive oil, fish - than as pills.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PILLS ON TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the evidence says about supplements</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">GINKGO BILOBA - GEM TRIAL</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">3,000+ adults, ~6 years, randomized</text>
                    <text x="550" y="308" text-anchor="middle" fill="#888" font-size="16">No effect on dementia or decline</text>
                    <rect x="150" y="380" width="800" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PREVAGEN - FTC LAWSUIT</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="18">Sued for deceptive memory claims</text>
                    <text x="550" y="518" text-anchor="middle" fill="#888" font-size="16">Own study: no benefit over placebo overall</text>
                    <rect x="150" y="590" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">ONE PARTIAL EXCEPTION</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">COSMOS: modest memory gain from a multivitamin</text>
                    <text x="550" y="728" text-anchor="middle" fill="#888" font-size="16">Interesting, still being stress-tested</text>
                    <rect x="200" y="820" width="700" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">The money does more as groceries</text>
                    <text x="550" y="905" text-anchor="middle" fill="#888" font-size="16">Unless a real deficiency is found - ask your doctor</text>
                </svg>`,
                caption: "Memory supplements keep failing their trials - food keeps winning"
            }
        },
        {
            type: "application",
            title: "Your MIND Week, Sketched Out",
            content: "You do not need recipes - you need defaults. Steal these:\n\n1. **Breakfast default**: oatmeal (whole grain: check) with a handful of frozen blueberries (berries: check) and walnuts (nuts: check). Three scorecard points before 9 AM.\n\n2. **Lunch default**: a big salad built on spinach or mixed greens (leafy greens: check) with beans or chickpeas (beans: check), olive oil dressing (olive oil: check).\n\n3. **Two dinner anchors per week**: one salmon or sardine night (fish: check), one bean-based chili or lentil soup night. Poultry fills most other nights; red meat becomes an occasional guest, not a resident.\n\n4. **Swap the spreads**: olive oil replaces butter as the default fat. This single swap moves two scorecard lines at once.\n\n5. **Contain the demolition crew**: pastries, fried food, and cheese do not need to vanish - the score only asks you to LIMIT them. A pastry a week is compatible with a high MIND score. Perfection is not the assignment.\n\nStart by counting your current week honestly - most people score 5-6 of 15 on the MIND scale. Moving to 9 or 10 is usually three swaps, not a life overhaul. Not medical advice, but it is hard to find a downside in more greens and beans.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MIND WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Defaults beat recipes</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="215" text-anchor="start" fill="#fff" font-size="18">Oatmeal + berries + walnuts breakfast</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="345" text-anchor="start" fill="#fff" font-size="18">Greens + beans + olive oil salad lunch</text>
                    <rect x="150" y="420" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="475" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="475" text-anchor="start" fill="#fff" font-size="18">One fish night + one bean night weekly</text>
                    <rect x="150" y="550" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="605" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="605" text-anchor="start" fill="#fff" font-size="18">Olive oil replaces butter by default</text>
                    <rect x="150" y="680" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="735" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="735" text-anchor="start" fill="#fff" font-size="18">Limit - not eliminate - sweets and fried food</text>
                    <rect x="250" y="820" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="18">Three swaps usually lift your score</text>
                    <text x="550" y="898" text-anchor="middle" fill="#888" font-size="16">from average to strong</text>
                </svg>`,
                caption: "Five defaults that quietly raise your MIND score"
            }
        },
        {
            type: "example",
            title: "Scoring a Real Day",
            content: "Meet a realistic Tuesday, before and after.\n\n**Before**: buttered toast and coffee for breakfast; a ham-and-cheese sandwich with chips for lunch; spaghetti with beef sauce and garlic bread for dinner; ice cream while watching TV. MIND scorecard damage: butter (limit group), cheese (limit group), red meat (limit group), refined grains everywhere, zero greens, zero berries, zero beans. This day scores near the bottom - and it is a completely normal American day.\n\n**After, with three swaps and two additions**: same toast but whole grain with olive oil and an egg; the sandwich becomes a chicken-and-spinach wrap; dinner keeps the spaghetti but the sauce goes half beef, half lentils, and a bagged salad with olive oil dressing lands next to it; frozen blueberries top a small bowl of the same ice cream.\n\nNothing was banned. The eater is maybe 10 minutes of effort away from the original day. But the scorecard flips: whole grains, poultry, leafy greens, beans, olive oil, berries all collect points, and three limit-group items shrink.\n\nThis is how the diet works in practice - not as a renovation but as a series of nudges to meals you already eat. The people scoring high in Morris's study were not chefs. They were people with good defaults.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE TUESDAY, TWICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same meals, nudged - not renovated</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BEFORE</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Buttered toast</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Ham + cheese sandwich</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="17">Beef spaghetti</text>
                    <text x="290" y="390" text-anchor="middle" fill="#fff" font-size="17">Ice cream</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">No greens, berries, or beans</text>
                    <text x="290" y="485" text-anchor="middle" fill="#888" font-size="16">Three limit-group hits</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">AFTER</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Whole grain toast + olive oil</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">Chicken-spinach wrap</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="17">Half-lentil sauce + salad</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="17">Berries on the ice cream</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">Six point-scoring groups</text>
                    <text x="810" y="485" text-anchor="middle" fill="#888" font-size="16">Nothing banned</text>
                    <rect x="150" y="620" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">High scorers are not chefs</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="18">They are people with good defaults</text>
                </svg>`,
                caption: "Three swaps and two additions flip the scorecard"
            }
        },
        {
            type: "quiz",
            question: "What did the 2023 NEJM randomized trial (Barnes et al.) of the MIND diet actually find?",
            options: [
                { text: "It confirmed the 53% Alzheimer's risk reduction from the 2015 study", correct: false },
                { text: "Both groups improved slightly, with no significant difference between MIND and the control diet over 3 years", correct: true },
                { text: "The MIND diet group declined faster, showing the diet is harmful", correct: false },
                { text: "The trial was stopped early because the benefit was too large to withhold", correct: false }
            ],
            explanation: "The 3-year trial randomized 604 older adults to MIND or their usual diet, both with mild calorie restriction and coaching. Both arms improved slightly on cognitive tests, and MIND showed no significant advantage. The tempting wrong answer is confirmation of the 2015 result - but that earlier figure was observational and likely inflated by confounding. The null result does not prove the diet useless: the trial was short, and both arms improved their diets and lost weight. It does mean nobody should sell MIND as proven dementia prevention.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE RANDOMIZED TEST</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">604 adults, 3 years, NEJM 2023</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">What happened when MIND faced a real control?</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">Honesty test</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">Headlines vs what the data showed</text>
                </svg>`,
                caption: "Final check: the trial that tested the headline"
            }
        }
    ]
},
{
    id: 9,
    title: "The Heart-Brain Connection",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Your Brain Runs on Plumbing",
            content: "Your brain is 2% of your body weight and takes **20% of your blood supply**. Every thought you have ever had was powered by roughly 400 miles of blood vessels threading through your skull - many thinner than a human hair.\n\nWhich means the oldest advice in medicine turns out to be the newest advice in dementia prevention: **what is good for your heart is good for your brain**.\n\nAdd up the vascular entries on the Lancet 2024 risk list - high LDL cholesterol (~7%), hypertension (~2%), diabetes (~2%), smoking (~2%), obesity (~1%) - and blood-vessel health accounts for a huge share of preventable dementia risk. Better still, this is the one area where we have actual randomized trial evidence that treatment protects cognition.\n\nNo exotic biohacks in this lesson. Just blood pressure cuffs, cholesterol numbers, and blood sugar - the boring trio that quietly decides how well your brain ages. Boring, it turns out, is where the proof lives.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BRAIN PLUMBING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The hungriest organ you own</text>
                    <circle cx="330" cy="320" r="130" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                    <text x="330" y="300" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="40">2%</text>
                    <text x="330" y="345" text-anchor="middle" fill="#fff" font-size="18">of body weight</text>
                    <circle cx="770" cy="320" r="130" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="770" y="300" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="40">20%</text>
                    <text x="770" y="345" text-anchor="middle" fill="#fff" font-size="18">of blood supply</text>
                    <rect x="150" y="520" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">~400 MILES OF VESSELS</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="18">Many thinner than a human hair</text>
                    <text x="550" y="658" text-anchor="middle" fill="#888" font-size="16">Every thought depends on this network</text>
                    <rect x="200" y="740" width="700" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">Good for the heart =</text>
                    <text x="550" y="838" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">good for the brain</text>
                </svg>`,
                caption: "A hungry organ fed by fragile plumbing"
            }
        },
        {
            type: "concept",
            title: "The Vascular Half of Dementia Risk",
            content: "Line up the vascular risk factors from the **Lancet 2024 Commission** and a pattern jumps out:\n\n• **High LDL cholesterol: ~7%** attributable fraction - the newest addition, and immediately one of the biggest single factors on the entire list\n• **Hypertension: ~2%**\n• **Diabetes: ~2%**\n• **Smoking: ~2%**\n• **Obesity: ~1%**\n\nTogether that is roughly **14%** of dementia risk flowing through blood vessels - and it undercounts, because vascular damage also worsens Alzheimer's disease itself, not just \"vascular dementia.\"\n\nWhy vessels matter so much:\n\n• **Delivery**: neurons have almost no fuel reserves; even brief drops in blood flow starve them\n• **Micro-damage**: stiff, narrowed, or leaky small vessels cause silent mini-strokes and slow injury to white matter - the brain's wiring\n• **Clearance**: healthy blood flow helps wash out metabolic waste, including amyloid\n\nTwo more facts frame the whole lesson. First, **timing**: midlife (roughly ages 40-65) is when these factors do their quiet damage - the decades before symptoms. Second, **treatability**: unlike almost everything else in this book, every one of these five has cheap, well-tested medical treatments. This is the most fixable slice of the pie.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE VASCULAR FIVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lancet 2024 attributable fractions</text>
                    <text x="250" y="200" text-anchor="end" fill="#fff" font-size="19">High LDL</text>
                    <rect x="280" y="175" width="630" height="42" rx="8" fill="rgba(239,68,68,0.5)" stroke="#ef4444" stroke-width="2"/>
                    <text x="880" y="204" text-anchor="end" fill="#fff" font-weight="bold" font-size="18">~7%</text>
                    <text x="250" y="285" text-anchor="end" fill="#fff" font-size="19">Hypertension</text>
                    <rect x="280" y="260" width="180" height="42" rx="8" fill="rgba(245,158,11,0.5)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="480" y="289" text-anchor="start" fill="#fff" font-weight="bold" font-size="18">~2%</text>
                    <text x="250" y="370" text-anchor="end" fill="#fff" font-size="19">Diabetes</text>
                    <rect x="280" y="345" width="180" height="42" rx="8" fill="rgba(139,92,246,0.5)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="480" y="374" text-anchor="start" fill="#fff" font-weight="bold" font-size="18">~2%</text>
                    <text x="250" y="455" text-anchor="end" fill="#fff" font-size="19">Smoking</text>
                    <rect x="280" y="430" width="180" height="42" rx="8" fill="rgba(59,130,246,0.5)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="480" y="459" text-anchor="start" fill="#fff" font-weight="bold" font-size="18">~2%</text>
                    <text x="250" y="540" text-anchor="end" fill="#fff" font-size="19">Obesity</text>
                    <rect x="280" y="515" width="90" height="42" rx="8" fill="rgba(236,72,153,0.5)" stroke="#ec4899" stroke-width="2"/>
                    <text x="390" y="544" text-anchor="start" fill="#fff" font-weight="bold" font-size="18">~1%</text>
                    <rect x="150" y="630" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="688" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">~14% of dementia risk - all treatable</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">Cheap, tested treatments exist for all five</text>
                    <rect x="250" y="820" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="18">The key window: midlife, ages 40-65</text>
                    <text x="550" y="898" text-anchor="middle" fill="#888" font-size="16">Damage accrues decades before symptoms</text>
                </svg>`,
                caption: "Five vascular factors, one treatable slice of dementia risk"
            }
        },
        {
            type: "concept",
            title: "Blood Pressure: The Silent Sculptor",
            content: "**Hypertension** earns its nickname - the silent killer - because it damages the brain for decades without a single symptom.\n\nWhat sustained high pressure does to your brain's plumbing:\n\n• **Stiffens arteries**, so pressure waves hammer delicate small vessels downstream\n• **Thickens and narrows** the tiny penetrating arteries feeding deep brain structures\n• Causes **microbleeds and lacunar infarcts** - pinpoint strokes you never feel\n• Slowly injures **white matter**, the insulated wiring connecting brain regions\n\nThe timing wrinkle is crucial: **midlife blood pressure is what predicts late-life dementia**. Studies following people from their 40s and 50s find that elevated BP in those decades raises dementia risk 20-30 years later - while blood pressure measured at 80 tells you much less (very late in life, falling pressure can even signal declining health rather than safety).\n\nThat is why waiting for symptoms is a losing strategy. The damage compounds silently, like rust. Roughly **half of adults over 40** have blood pressure above the range now considered optimal, and a large share do not know it - which is astonishing for a condition that a 30-dollar arm cuff detects in 60 seconds at your kitchen table.\n\nThe next card shows why treating it is worth the trouble - with the strongest evidence in this entire book.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SILENT SCULPTOR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How high pressure reshapes the brain</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">STIFF ARTERIES</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="16">Pressure waves hammer</text>
                    <text x="300" y="308" text-anchor="middle" fill="#fff" font-size="16">fragile small vessels</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SILENT DAMAGE</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="16">Microbleeds and pinpoint</text>
                    <text x="800" y="308" text-anchor="middle" fill="#fff" font-size="16">strokes you never feel</text>
                    <rect x="150" y="430" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">MIDLIFE IS THE WINDOW</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">BP in your 40s-50s predicts dementia</text>
                    <text x="550" y="570" text-anchor="middle" fill="#fff" font-size="18">20-30 years later</text>
                    <rect x="150" y="670" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="728" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">Half of adults over 40 run high</text>
                    <text x="550" y="770" text-anchor="middle" fill="#fff" font-size="18">A 30-dollar cuff detects it in 60 seconds</text>
                    <text x="550" y="805" text-anchor="middle" fill="#888" font-size="16">Many never check</text>
                </svg>`,
                caption: "Hypertension damages silently - and midlife is when it counts"
            }
        },
        {
            type: "example",
            title: "SPRINT MIND: The Proof of Concept",
            content: "For decades, \"control your blood pressure for your brain\" was plausible advice without trial proof. Then came **SPRINT MIND**, published in **JAMA in 2019**.\n\nThe setup: SPRINT was a massive NIH trial of **9,361 adults 50 and older** with hypertension, randomized to two targets - standard control (systolic **under 140**) or intensive control (systolic **under 120**), using ordinary cheap medications. SPRINT MIND was the cognitive arm, tracking who developed cognitive impairment.\n\nThe results:\n\n• **Mild cognitive impairment (MCI): ~19% lower** in the intensive group - a statistically significant protection\n• **MCI plus probable dementia combined: ~15% lower**, also significant\n• Probable dementia alone narrowly missed significance - partly because the trial was stopped early (the heart benefits were so large it was unethical to continue) leaving fewer dementia cases than planned\n\nWhy this matters so much: it is the **first randomized trial evidence** that treating a vascular risk factor protects cognition. Not association - causation. Ordinary blood pressure pills, doing what no expensive brain supplement has ever done in a trial.\n\nThe honest caveats: intensive control means more medication and monitoring, with some added risk of dizziness and kidney effects - which is why your own target is a conversation with your doctor, not a number you chase alone. But the principle is proven: **lower pressure, better-protected brain**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SPRINT MIND, 2019</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">9,361 adults, randomized, JAMA</text>
                    <rect x="60" y="180" width="460" height="240" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">STANDARD</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="19">Systolic under 140</text>
                    <text x="290" y="340" text-anchor="middle" fill="#888" font-size="16">Usual care target</text>
                    <rect x="580" y="180" width="460" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">INTENSIVE</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="19">Systolic under 120</text>
                    <text x="810" y="340" text-anchor="middle" fill="#888" font-size="16">Same cheap medications</text>
                    <rect x="150" y="480" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="540" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">~19% LESS MILD COGNITIVE</text>
                    <text x="550" y="580" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">IMPAIRMENT</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="17">In the intensive-control group</text>
                    <rect x="150" y="710" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">First RCT proof that treating BP</text>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">protects cognition</text>
                </svg>`,
                caption: "Ordinary BP pills achieved what no brain supplement ever has"
            }
        },
        {
            type: "quiz",
            question: "What made SPRINT MIND (JAMA 2019) a landmark in dementia prevention research?",
            options: [
                { text: "It proved that a new class of expensive brain-specific drugs prevents dementia", correct: false },
                { text: "It was the first randomized trial showing that intensive blood pressure control reduces cognitive impairment", correct: true },
                { text: "It showed blood pressure has no effect on the brain, ending a long debate", correct: false },
                { text: "It found benefits only in people who already had dementia at enrollment", correct: false }
            ],
            explanation: "SPRINT MIND randomized 9,361 adults to intensive (under 120 systolic) versus standard (under 140) control using ordinary medications, and found about 19% less mild cognitive impairment in the intensive group. Its landmark status comes from being randomized: it demonstrated causation, not just association, for the first time. No exotic drugs were involved - that is the tempting wrong answer - and participants were cognitively healthy at enrollment. The trial turned heart-brain advice from plausible theory into evidence-backed medicine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SPRINT MIND</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">Under 120 vs under 140 systolic</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">Why did this trial make history?</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Association vs causation</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">Which one does randomization buy you?</text>
                </svg>`,
                caption: "Test your grasp of the landmark trial"
            }
        },
        {
            type: "concept",
            title: "LDL and the Statin Question, Answered Honestly",
            content: "The Lancet 2024 update added **high LDL cholesterol in midlife** to its risk list at **~7%** - instantly one of the largest single factors. The mechanism is unglamorous: LDL drives **atherosclerosis**, atherosclerosis causes strokes large and silent, and stroke damage plus chronic under-perfusion erodes cognition.\n\nWhich raises the question patients actually ask: **do statins cause memory loss?**\n\nThe honest timeline:\n\n• In 2012, the **FDA added a label note** about rare reports of reversible memory fuzziness - based largely on anecdotes, not trials\n• Since then, **large randomized trials and meta-analyses** have looked hard and found **no evidence that statins impair memory or cognition**. Studies specifically designed to detect it - including in adults over 70 - came up empty\n• If anything, observational data lean the other way: statin users show equal or slightly **lower** dementia rates, consistent with fewer strokes and less vascular damage\n\nWhy the myth persists: memory complaints are extremely common in the age group that takes statins, so coincidences are guaranteed - and a label note gives every coincidence a suspect.\n\nThe defensible summary: treating high LDL in midlife likely **protects** the brain by protecting its blood supply, and fear of statin brain fog is not supported by trial evidence. Whether YOU should take one depends on your overall risk - a decision for you and your doctor, not a learning app. But do not let a myth make the decision for you.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STATIN QUESTION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Myth vs trial evidence</text>
                    <rect x="150" y="170" width="800" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">HIGH LDL IN MIDLIFE: ~7%</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">New to Lancet 2024 - among the biggest factors</text>
                    <rect x="60" y="380" width="460" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE MYTH</text>
                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="17">2012 FDA note based</text>
                    <text x="290" y="523" text-anchor="middle" fill="#fff" font-size="17">largely on anecdotes</text>
                    <text x="290" y="575" text-anchor="middle" fill="#888" font-size="16">Statins = brain fog?</text>
                    <rect x="580" y="380" width="460" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE TRIALS</text>
                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="17">No memory harm found in</text>
                    <text x="810" y="523" text-anchor="middle" fill="#fff" font-size="17">RCTs and meta-analyses</text>
                    <text x="810" y="575" text-anchor="middle" fill="#888" font-size="16">Even in adults over 70</text>
                    <rect x="150" y="730" width="800" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="788" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">Treating LDL likely protects the brain</text>
                    <text x="550" y="828" text-anchor="middle" fill="#fff" font-size="17">Fewer strokes, less atherosclerosis - talk to your doctor</text>
                </svg>`,
                caption: "Trial evidence clears statins of the brain-fog charge"
            }
        },
        {
            type: "concept",
            title: "Diabetes: The Double Threat",
            content: "**Type 2 diabetes roughly doubles dementia risk.** The damage arrives through two channels at once:\n\n• **Vascular**: chronically high blood sugar glycates and damages vessel walls, accelerating exactly the small-vessel disease and silent strokes you just learned about\n• **Metabolic**: the brain is an energy hog, and **insulin resistance** disrupts how neurons take up and use fuel; insulin signaling also plays roles in memory formation and amyloid clearance\n\nThat second channel led some researchers to nickname Alzheimer's **\"type 3 diabetes.\"** Honest verdict on the label: it is an **overstatement**. Alzheimer's is not literally a form of diabetes, plenty of people with excellent blood sugar develop it, and the nickname claims more than the data supports. But the kernel is real: insulin resistance in the brain genuinely matters, and metabolic health and brain health are entangled.\n\nWhat actually moves the needle is almost embarrassingly familiar. The **Diabetes Prevention Program** trial found that modest lifestyle change - about **150 minutes of weekly activity plus ~5-7% weight loss** - cut progression from prediabetes to diabetes by **58%**, beating the drug metformin (31%). Roughly one in three American adults has prediabetes; most do not know.\n\nSo the brain-protective move is not a special neuro-diet. It is knowing your **A1c** number and taking prediabetes seriously while it is still reversible. The boring basics, again - because the boring basics keep winning trials.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DOUBLE THREAT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Type 2 diabetes ~doubles dementia risk</text>
                    <rect x="60" y="170" width="460" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">CHANNEL 1: VESSELS</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">High sugar damages walls,</text>
                    <text x="290" y="318" text-anchor="middle" fill="#fff" font-size="17">speeds small-vessel disease</text>
                    <rect x="580" y="170" width="460" height="230" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">CHANNEL 2: FUEL</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Insulin resistance disrupts</text>
                    <text x="810" y="318" text-anchor="middle" fill="#fff" font-size="17">how neurons use energy</text>
                    <rect x="150" y="460" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="515" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">"Type 3 diabetes" label: overstated</text>
                    <text x="550" y="558" text-anchor="middle" fill="#fff" font-size="17">But brain insulin resistance is a real mechanism</text>
                    <rect x="150" y="670" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="730" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">DIABETES PREVENTION PROGRAM</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="18">Lifestyle change cut progression 58%</text>
                    <text x="550" y="812" text-anchor="middle" fill="#fff" font-size="18">Metformin: 31%</text>
                    <text x="550" y="847" text-anchor="middle" fill="#888" font-size="15">150 min/week activity + 5-7% weight loss</text>
                </svg>`,
                caption: "Two damage channels - and a lifestyle trial that beat the drug"
            }
        },
        {
            type: "concept",
            title: "Smoking: The Reversible Risk",
            content: "If any result in this lesson qualifies as good news wrapped in bad news, it is this one.\n\nThe bad news: **current smokers carry roughly 30-40% higher dementia risk** than never-smokers - meta-analyses of dozens of cohort studies converge on this range. The mechanisms stack: accelerated atherosclerosis, reduced blood oxygen, chronic inflammation, oxidative stress on neurons, and more silent strokes. (A historical footnote: some early studies funded by tobacco companies claimed smoking protected against Alzheimer's. Independent research demolished that claim.)\n\nThe good news - and it is genuinely remarkable: **the risk falls after quitting, at any age**. Long-term former smokers show dementia risk approaching that of never-smokers in multiple large cohorts. A study of nearly **50,000 Korean men over 60** found that even quitting late in life measurably reduced dementia risk within years.\n\nLet that reframe something: the vascular system's capacity for repair does not expire. Quitting at 60 is not \"too late\" - it is one of the highest-value moves a 60-year-old smoker can make for their brain, on top of everything it does for the heart and lungs.\n\nModern cessation support - medications like varenicline, nicotine replacement, quitlines - roughly doubles or triples success rates versus willpower alone. This is a solved-enough problem that a doctor can genuinely help with. The brain you save will thank you within the decade.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REVERSIBLE RISK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Smoking, quitting, and the brain</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">CURRENT SMOKERS</text>
                    <text x="550" y="278" text-anchor="middle" fill="#fff" font-size="19">~30-40% higher dementia risk</text>
                    <path d="M550 380 L550 440" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="550,455 535,430 565,430" fill="#14b8a6"/>
                    <text x="640" y="420" text-anchor="start" fill="#14b8a6" font-size="18">quit - at ANY age</text>
                    <rect x="150" y="490" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">LONG-TERM QUITTERS</text>
                    <text x="550" y="598" text-anchor="middle" fill="#fff" font-size="19">Risk approaches never-smoker levels</text>
                    <rect x="150" y="720" width="800" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="778" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">~50,000 Korean men over 60:</text>
                    <text x="550" y="818" text-anchor="middle" fill="#fff" font-size="18">quitting late still cut dementia risk</text>
                    <text x="550" y="855" text-anchor="middle" fill="#888" font-size="16">Cessation aids double or triple quit success</text>
                </svg>`,
                caption: "The risk climbs while you smoke - and falls when you stop"
            }
        },
        {
            type: "example",
            title: "The Stroke You Never Felt",
            content: "A 68-year-old retired teacher gets an MRI after a fall. She has never had a stroke - or so she believes. The radiologist's report says otherwise: two small **lacunar infarcts** and moderate **white-matter hyperintensities**.\n\nTranslation into plain language:\n\n• **Silent strokes** are tiny blockages in the brain's small vessels. Each one kills a speck of tissue too small to cause obvious symptoms - no drooping face, no slurred speech. By age 70, brain imaging studies find them in roughly **one in four to one in three people**. \"Silent\" is misleading: they are linked to measurably higher risk of future stroke, cognitive decline, and dementia.\n\n• **White-matter hyperintensities** are the bright patches on MRI where the brain's wiring - the insulated cables between regions - shows wear from decades of poor small-vessel blood flow. Think of fraying insulation on old electrical cords: signals still pass, but slower and less reliably. Larger burdens track with slower processing speed and higher dementia risk.\n\n**Vascular dementia** - the second most common dementia after Alzheimer's - is often exactly this process accumulated: not one dramatic stroke, but hundreds of tiny insults, each invisible, summing over 20 years. And most mixed dementia cases combine this vascular damage with Alzheimer's pathology, each making the other worse.\n\nHere is the empowering part: every risk factor in this lesson - blood pressure, LDL, blood sugar, smoking - feeds this exact process. Which means every one you control slows it down. The teacher's MRI was not a verdict. It was a to-do list.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SILENT DAMAGE, VISIBLE ON MRI</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the scan shows before symptoms do</text>
                    <rect x="60" y="170" width="460" height="290" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SILENT STROKES</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Tiny blockages, no symptoms</text>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="17">Found in ~1 in 4 by age 70</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="16">Each one raises future</text>
                    <text x="290" y="405" text-anchor="middle" fill="#888" font-size="16">stroke and dementia risk</text>
                    <rect x="580" y="170" width="460" height="290" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">WHITE-MATTER WEAR</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Fraying insulation on the</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="17">brain's wiring</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="16">Signals pass slower,</text>
                    <text x="810" y="405" text-anchor="middle" fill="#888" font-size="16">less reliably</text>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">VASCULAR DEMENTIA</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">Not one big stroke - hundreds of tiny insults</text>
                    <text x="550" y="672" text-anchor="middle" fill="#888" font-size="16">Summed silently over 20 years</text>
                    <rect x="250" y="770" width="600" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Every factor you control slows it</text>
                    <text x="550" y="855" text-anchor="middle" fill="#888" font-size="16">The MRI is a to-do list, not a verdict</text>
                </svg>`,
                caption: "Silent strokes and worn wiring: vascular damage in plain language"
            }
        },
        {
            type: "application",
            title: "Know Your Numbers - Starting This Week",
            content: "This lesson's action plan is the most medical in the book, so the framing matters: these steps are about gathering YOUR data and working WITH your doctor - not self-treating.\n\n1. **Learn your three numbers**: blood pressure, LDL cholesterol, and A1c (blood sugar). If you have not had them checked in over a year, book the appointment today. They are all standard, cheap tests.\n\n2. **Buy a home BP cuff** (validated upper-arm model, ~30 dollars). Measure the right way: sit quietly 5 minutes first, feet flat, back supported, arm at heart level, no caffeine or exercise in the prior 30 minutes. Take two readings a minute apart, morning and evening, for one week.\n\n3. **Log and share** - write every reading down (or let the cuff's app do it) and bring the log to your doctor. A week of home readings beats one nervous office reading; \"white coat\" spikes fool everyone.\n\n4. **Ask two questions at your next visit**: \"What should MY blood pressure and LDL targets be?\" and \"Is my A1c in the prediabetes range?\" Targets are individual - age, kidneys, other conditions all matter, which is why SPRINT-style intensive control is a discussion, not a default.\n\n5. **If you smoke, ask a third question**: \"What cessation support can you prescribe?\" It doubles your odds versus going alone.\n\nOne week, three numbers, one conversation. That is the whole assignment - and it addresses ~14% of dementia risk.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">KNOW YOUR NUMBERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three values, one conversation</text>
                    <rect x="80" y="160" width="300" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BP</text>
                    <text x="230" y="265" text-anchor="middle" fill="#fff" font-size="16">Home cuff, 1 week</text>
                    <rect x="400" y="160" width="300" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">LDL</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="16">Blood test</text>
                    <rect x="720" y="160" width="300" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">A1C</text>
                    <text x="870" y="265" text-anchor="middle" fill="#fff" font-size="16">Blood test</text>
                    <rect x="150" y="370" width="800" height="230" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">HOME BP: DO IT RIGHT</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">Sit 5 min - feet flat - arm at heart level</text>
                    <text x="550" y="513" text-anchor="middle" fill="#fff" font-size="17">Two readings, morning + evening, 7 days</text>
                    <text x="550" y="555" text-anchor="middle" fill="#888" font-size="16">A week of readings beats one office visit</text>
                    <rect x="150" y="660" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="718" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Then: bring the log, ask for YOUR targets</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="17">Work WITH your doctor - targets are individual</text>
                    <rect x="250" y="880" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="18">This addresses ~14% of dementia risk</text>
                </svg>`,
                caption: "Your week-one plan: three numbers and one doctor conversation"
            }
        },
        {
            type: "quote",
            content: "Dementia is not an inevitable consequence of aging. What is good for the heart is good for the head.",
            author: "Gill Livingston, lead author, Lancet Commission on Dementia",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="290" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="230" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"Dementia is not an inevitable</text>
                    <text x="160" y="272" text-anchor="start" fill="#fff" font-style="italic" font-size="22">consequence of aging. What is good</text>
                    <text x="160" y="314" text-anchor="start" fill="#fff" font-style="italic" font-size="22">for the heart is good for the head."</text>
                    <text x="940" y="390" text-anchor="end" fill="#8b5cf6" font-size="18">- Gill Livingston, Lancet Commission</text>
                    <rect x="250" y="520" width="600" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="568" text-anchor="middle" fill="#ffd700" font-size="18">The field's leading voice, in one line</text>
                    <text x="550" y="603" text-anchor="middle" fill="#888" font-size="16">Vascular health is brain health</text>
                </svg>`,
                caption: "The Lancet Commission's message in one sentence"
            }
        },
        {
            type: "quiz",
            question: "Which statement about vascular risk factors and the brain is best supported by the evidence in this lesson?",
            options: [
                { text: "Statins are proven to cause memory loss, so high LDL is best left untreated", correct: false },
                { text: "Blood pressure only matters after age 70, when dementia symptoms typically begin", correct: false },
                { text: "Midlife control of BP, LDL, blood sugar, and smoking targets a large, treatable share of dementia risk - and quitting smoking helps at any age", correct: true },
                { text: "Alzheimer's is literally type 3 diabetes, so blood sugar control is the only factor that matters", correct: false }
            ],
            explanation: "The vascular factors - LDL (~7%), hypertension, diabetes, smoking, obesity - together account for roughly 14% of dementia risk, midlife is the key damage window, and all five are treatable with cheap, tested interventions. Smoking risk falls after quitting at any age. The statin option inverts the evidence: trials found no memory harm, and treating LDL likely protects the brain. The \"type 3 diabetes\" label overstates a real but partial insulin-resistance mechanism. Waiting until 70 misses the decades when prevention works best.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="185" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE VASCULAR VERDICT</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="19">BP, LDL, A1c, smoking - what does the</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">evidence actually support?</text>
                    <rect x="250" y="380" width="600" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Timing + treatability</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="17">When does prevention work best?</text>
                </svg>`,
                caption: "Final check on the heart-brain connection"
            }
        }
    ]
},
{
    id: 10,
    title: "Challenge & Reserve: Use It or Lose It",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Brain That Refused to Show Its Damage",
            content: "Remember Sister Mary from Lesson 1? She scored high on cognitive tests until she died at 101 - and then her autopsy revealed a brain full of Alzheimer's plaques and tangles. Pathologically, she had the disease. Functionally, she didn't.\n\nHow is that possible? The answer is **cognitive reserve** - and it's the closest thing neuroscience has to a superpower you can actually build.\n\nHere's the catch: the brain-training industry has spent two decades selling you a shortcut that mostly doesn't work, complete with a $2 million federal settlement to prove it. In this lesson you'll learn what reserve really is, why crossword puzzles mostly make you better at crosswords, and what the research says actually builds a brain that can route around damage. Spoiler: it involves being genuinely, uncomfortably bad at something new.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RESERVE PARADOX</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same pathology, different outcomes</text>
                    <rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT THE AUTOPSY SAW</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Widespread plaques</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="18">and tangles at 101</text>
                    <text x="290" y="365" text-anchor="middle" fill="#888" font-size="16">Advanced Alzheimer's</text>
                    <text x="290" y="395" text-anchor="middle" fill="#888" font-size="16">pathology on the slides</text>
                    <rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT LIFE SAW</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">High cognitive scores</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="18">into her final year</text>
                    <text x="810" y="365" text-anchor="middle" fill="#888" font-size="16">Teaching, reading,</text>
                    <text x="810" y="395" text-anchor="middle" fill="#888" font-size="16">fully engaged</text>
                    <rect x="150" y="560" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DIFFERENCE: COGNITIVE RESERVE</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="18">A lifetime of mental challenge built networks</text>
                    <text x="550" y="700" text-anchor="middle" fill="#888" font-size="16">redundant enough to work around the damage</text>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">This lesson: how to build that buffer</text>
                </svg>`,
                caption: "Sister Mary's brain had Alzheimer's pathology - her life didn't show it"
            }
        },
        {
            type: "concept",
            title: "Reserve Is Redundancy, Not Armor",
            content: "**Cognitive reserve** doesn't stop plaques from forming. It changes what plaques can do to you.\n\nThink of your brain as a road network. A brain with low reserve is a town with one bridge - when that bridge fails, traffic stops. A brain with high reserve is a city with dozens of routes to every destination. Damage still happens, but traffic reroutes.\n\nDecades of mental challenge build:\n• **Denser synaptic connections** - more links between neurons, so each idea has multiple access paths\n• **Redundant networks** - several circuits that can perform the same job\n• **Flexible strategies** - high-reserve brains recruit alternate regions when the usual ones falter, visible on fMRI\n\nThis is why the same amount of pathology produces dementia in one person and nothing measurable in another. Researchers estimate that **low education in early life accounts for roughly 5% of dementia risk** worldwide - education is one of the first big reserve deposits most people make.\n\nBut here's the crucial part: the account never closes. Education acts early, yet reserve-building responds to challenge at every age. The deposits just have to be real - and that's where the brain-training industry went wrong.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RESERVE = REDUNDANCY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">More routes, same destination</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LOW RESERVE</text>
                    <circle cx="180" cy="330" r="35" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="400" cy="330" r="35" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <line x1="215" y1="330" x2="365" y2="330" stroke="#ef4444" stroke-width="3"/>
                    <text x="290" y="310" text-anchor="middle" fill="#fff" font-size="30">X</text>
                    <text x="290" y="430" text-anchor="middle" fill="#fff" font-size="18">One route between ideas</text>
                    <text x="290" y="465" text-anchor="middle" fill="#888" font-size="16">Damage the route,</text>
                    <text x="290" y="495" text-anchor="middle" fill="#888" font-size="16">lose the function</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HIGH RESERVE</text>
                    <circle cx="700" cy="330" r="35" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="920" cy="330" r="35" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <line x1="735" y1="330" x2="885" y2="330" stroke="#ef4444" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M710 295 Q810 230 910 295" stroke="#10b981" stroke-width="3" fill="none"/>
                    <path d="M710 365 Q810 430 910 365" stroke="#10b981" stroke-width="3" fill="none"/>
                    <text x="810" y="480" text-anchor="middle" fill="#fff" font-size="18">Many routes between ideas</text>
                    <text x="810" y="515" text-anchor="middle" fill="#888" font-size="16">Damage reroutes, not stops</text>
                    <rect x="150" y="620" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="678" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">EDUCATION: ~5% OF DEMENTIA RISK</text>
                    <text x="550" y="720" text-anchor="middle" fill="#fff" font-size="18">Early-life education is the first big deposit</text>
                    <text x="550" y="755" text-anchor="middle" fill="#888" font-size="16">But the reserve account stays open for life</text>
                </svg>`,
                caption: "Reserve doesn't prevent damage - it gives the brain detours around it"
            }
        },
        {
            type: "visual",
            title: "The Reserve Account: Deposits Across a Lifetime",
            content: "Reserve isn't one decision. It's the accumulated total of every era when you made your brain work hard: school in your teens, a demanding job in your 30s, a new language in your 50s, learning to paint at 70.\n\nThe research suggests the deposits **compound** - but also that late deposits still count. A brain that starts building at 60 doesn't catch a brain that started at 6, but it measurably beats a brain that never starts. In reserve, late is genuinely better than never.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LIFETIME DEPOSITS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The reserve account never closes</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">AGES 5-25</text>
                    <text x="220" y="255" text-anchor="start" fill="#fff" font-size="18">Education - the foundational deposit (~5% lever)</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="220" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">AGES 25-55</text>
                    <text x="220" y="395" text-anchor="start" fill="#fff" font-size="18">Complex work, problem-solving, mentoring others</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="500" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">AGES 55-75</text>
                    <text x="220" y="535" text-anchor="start" fill="#fff" font-size="18">New skills: languages, instruments, crafts, tech</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="640" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">AGES 75+</text>
                    <text x="220" y="675" text-anchor="start" fill="#fff" font-size="18">Purpose, teaching, staying hard at something</text>
                    <rect x="200" y="760" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="20">Late deposits still count.</text>
                    <text x="550" y="848" text-anchor="middle" fill="#fff" font-size="18">Starting at 60 beats never starting.</text>
                </svg>`,
                caption: "Every era of genuine mental challenge adds to the same account"
            }
        },
        {
            type: "example",
            title: "The Nun Study: 678 Brains That Proved the Point",
            content: "The **Nun Study**, launched by epidemiologist David Snowdon in 1986, followed **678 Catholic sisters** aged 75 to 106 - all of whom agreed to annual cognitive testing and brain donation after death.\n\nNuns are a researcher's dream: similar diets, similar routines, no smoking, same healthcare, same environment for decades. That strips away noise and lets the real variables show.\n\nTwo findings changed the field:\n\n• **Pathology is not destiny.** Roughly a third of sisters whose brains met the criteria for Alzheimer's at autopsy had shown **no significant symptoms** in life. Their reserve was absorbing the damage.\n\n• **Early language predicted late dementia.** Snowdon's team analyzed autobiographical essays the sisters wrote in their early 20s when entering the convent. Sisters whose youthful essays showed low **idea density** - simple sentences, few concepts per line - were far more likely to develop Alzheimer's some 60 years later. In one analysis, low idea density predicted the disease with striking accuracy.\n\nThe lesson isn't fatalism about your 20s. It's that a richly-worked brain leaves fingerprints decades ahead - and keeps protecting you decades later.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NUN STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">678 sisters, one landmark finding</text>
                    <rect x="150" y="170" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STARTED 1986 - DAVID SNOWDON</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">678 sisters, ages 75-106, tested yearly</text>
                    <text x="550" y="305" text-anchor="middle" fill="#888" font-size="16">All donated their brains for autopsy</text>
                    <rect x="60" y="400" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FINDING 1</text>
                    <text x="290" y="505" text-anchor="middle" fill="#fff" font-size="18">About 1 in 3 with full</text>
                    <text x="290" y="540" text-anchor="middle" fill="#fff" font-size="18">Alzheimer's pathology</text>
                    <text x="290" y="575" text-anchor="middle" fill="#fff" font-size="18">had shown no symptoms</text>
                    <text x="290" y="625" text-anchor="middle" fill="#888" font-size="16">Reserve absorbed the damage</text>
                    <rect x="580" y="400" width="460" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">FINDING 2</text>
                    <text x="810" y="505" text-anchor="middle" fill="#fff" font-size="18">Essays written at age 22</text>
                    <text x="810" y="540" text-anchor="middle" fill="#fff" font-size="18">predicted dementia risk</text>
                    <text x="810" y="575" text-anchor="middle" fill="#fff" font-size="18">60 years later</text>
                    <text x="810" y="625" text-anchor="middle" fill="#888" font-size="16">Idea density = reserve fingerprint</text>
                    <rect x="200" y="770" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20">A worked brain protects itself</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="17">for decades after the work is done</text>
                </svg>`,
                caption: "The Nun Study: identical lifestyles revealed reserve's real power"
            }
        },
        {
            type: "quiz",
            question: "Sister Mary's autopsy showed advanced Alzheimer's pathology, yet she tested well cognitively until age 101. What best explains this?",
            options: [
                { text: "Her cognitive reserve - dense, redundant networks - let her brain route around the damage", correct: true },
                { text: "Her healthy convent diet prevented the plaques from ever forming", correct: false },
                { text: "The autopsy findings were a false positive; her brain was actually healthy", correct: false },
                { text: "Alzheimer's pathology only causes symptoms in people under 90", correct: false }
            ],
            explanation: "Cognitive reserve doesn't prevent pathology - her plaques and tangles were real and extensive. What reserve changes is the functional consequence: a lifetime of mental challenge built enough redundant circuitry that her brain could reroute around damaged pathways. The diet answer is tempting but wrong on the facts - the plaques did form. Reserve is about absorbing damage, not blocking it. Roughly a third of the Nun Study sisters showed this same pathology-without-symptoms pattern.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COGNITIVE RESERVE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Pathology on the slides, function in life</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What bridges that gap?</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THINK ABOUT</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Does reserve stop damage from forming,</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">or change what damage can do?</text>
                </svg>`,
                caption: "Test your understanding of how reserve works"
            }
        },
        {
            type: "concept",
            title: "Brain Training: The $2 Million Reality Check",
            content: "Time for the honest part. The brain-game industry built itself on a seductive promise: play our puzzles, protect your brain. The evidence says something narrower.\n\nThe **ACTIVE trial** - the largest cognitive training study ever run, with **2,832 older adults** - trained people in memory, reasoning, or processing speed. The trained skills improved, and some gains persisted for **10 years**. That's real. But the improvements were mostly **narrow**: transfer to everyday cognition and untrained abilities was limited. Training memory strategies made people better at memory strategies - it didn't broadly rebuild cognition.\n\nThen came the receipts. In **2016**, Lumosity's parent company paid a **$2 million FTC settlement** for advertising that its games could stave off cognitive decline and dementia - claims the FTC said the science didn't support.\n\nThe general principle researchers keep finding:\n• You get better at **exactly what you practice**\n• Crosswords make you better at crosswords\n• Sudoku makes you better at sudoku\n• Neither has been shown to prevent dementia\n\nDoes that mean puzzles are worthless? No - they're enjoyable, and enjoyment matters. But if you're doing them *as brain protection*, the evidence points somewhere else entirely: toward things that are genuinely new and genuinely hard.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BRAIN TRAINING, HONESTLY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the biggest trial actually found</text>
                    <rect x="150" y="170" width="800" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">ACTIVE TRIAL - 2,832 ADULTS</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">Trained skills improved, some for 10 years</text>
                    <text x="550" y="312" text-anchor="middle" fill="#fff" font-size="18">But transfer to daily cognition was narrow</text>
                    <text x="550" y="350" text-anchor="middle" fill="#888" font-size="16">You get better at what you practice</text>
                    <rect x="150" y="440" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="498" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LUMOSITY, 2016</text>
                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="18">Paid a 2 million dollar FTC settlement for</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="18">unsupported brain-protection claims</text>
                    <rect x="150" y="690" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="748" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE PATTERN</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="18">Crosswords make you better at crosswords</text>
                    <text x="550" y="825" text-anchor="middle" fill="#888" font-size="16">Not shown to prevent dementia</text>
                </svg>`,
                caption: "Training gains are real but narrow - and marketing outran the science"
            }
        },
        {
            type: "concept",
            title: "What Actually Builds Reserve: Novelty Plus Challenge",
            content: "If practiced puzzles aren't the answer, what is? The research points to a specific recipe: **novelty combined with sustained challenge**. Not comfortable repetition of something you're already good at - the awkward, effortful climb of learning something you're bad at.\n\nWhy would that matter more?\n\n• **New skills force new networks.** A puzzle you've done a thousand times runs on well-worn circuits. A skill you can't do yet forces the brain to build connections that don't exist.\n• **Sustained challenge keeps the pressure on.** Real skills have a long ladder - there's always a harder level, so the brain never coasts.\n• **Complex skills are broad.** Learning photography engages vision, planning, motor control, memory, and judgment simultaneously. That breadth is exactly what narrow training lacks.\n\nThe key test from **Denise Park's Synapse Project** (coming up next): it's not *doing activities* that moves the needle. It's doing activities that are **productively uncomfortable** - where you're a genuine beginner making genuine mistakes.\n\nHere's the reframe that changes everything: that feeling of frustration when you're bad at something new? That's not a sign you should quit. **The discomfort IS the workout.** A brain that's struggling is a brain that's building.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RESERVE RECIPE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Novelty x challenge, not comfy repetition</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">LOW-BUILD ACTIVITY</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Familiar + easy</text>
                    <text x="290" y="325" text-anchor="middle" fill="#888" font-size="16">Your 1,000th crossword</text>
                    <text x="290" y="355" text-anchor="middle" fill="#888" font-size="16">Reruns of a known skill</text>
                    <text x="290" y="385" text-anchor="middle" fill="#888" font-size="16">Passive watching</text>
                    <text x="290" y="450" text-anchor="middle" fill="#fff" font-size="17">Runs on existing circuits</text>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">HIGH-BUILD ACTIVITY</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">New + hard</text>
                    <text x="810" y="325" text-anchor="middle" fill="#888" font-size="16">First year of a language</text>
                    <text x="810" y="355" text-anchor="middle" fill="#888" font-size="16">Learning an instrument</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="16">A craft you fail at, then don't</text>
                    <text x="810" y="450" text-anchor="middle" fill="#fff" font-size="17">Forces new circuits to form</text>
                    <rect x="150" y="580" width="800" height="170" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">THE DISCOMFORT IS THE WORKOUT</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="18">Frustration while learning = networks under</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="18">construction. Coasting builds nothing.</text>
                </svg>`,
                caption: "The brain builds when you're a beginner, not when you're comfortable"
            }
        },
        {
            type: "example",
            title: "The Synapse Project: Quilting Beat Socializing",
            content: "In 2014, psychologist **Denise Park** at UT Dallas ran the experiment the brain-game industry never wanted: the **Synapse Project**.\n\nShe randomized older adults (ages 60-90) into groups for **15 hours a week over 3 months**:\n\n• **Productive engagement**: learn a demanding new skill - **digital photography**, **quilting**, or both. Real beginners, real learning curves, real mistakes.\n• **Receptive engagement**: pleasant but low-challenge activities - socializing, cooking familiar recipes, watching documentaries, playing simple games.\n• **Controls**: kept their usual routines.\n\nEveryone spent similar time being 'active.' Only one variable differed: whether the activity demanded **new learning**.\n\nThe result: the photography and quilting groups showed **significant memory improvement**. The social group - equally busy, equally engaged, presumably having a nicer time - did not show the same gains. Follow-up brain imaging suggested the learners' neural activity patterns had become more efficient, with some changes still detectable a year later.\n\nThe punchline: staying 'busy and social' is good for you (Lesson 7 made that case). But for building reserve specifically, busy isn't enough. The activity has to make your brain reach. A quilting class full of crooked first seams did what a comfortable book club couldn't.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SYNAPSE PROJECT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Park 2014 - 15 hrs/week, 3 months</text>
                    <rect x="80" y="170" width="300" height="300" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">NEW SKILL</text>
                    <text x="230" y="265" text-anchor="middle" fill="#fff" font-size="16">Photography,</text>
                    <text x="230" y="295" text-anchor="middle" fill="#fff" font-size="16">quilting</text>
                    <text x="230" y="345" text-anchor="middle" fill="#888" font-size="15">Hard, novel,</text>
                    <text x="230" y="373" text-anchor="middle" fill="#888" font-size="15">real learning</text>
                    <text x="230" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">MEMORY IMPROVED</text>
                    <rect x="400" y="170" width="300" height="300" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="222" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SOCIAL ONLY</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="16">Outings, cooking,</text>
                    <text x="550" y="295" text-anchor="middle" fill="#fff" font-size="16">documentaries</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="15">Pleasant, familiar,</text>
                    <text x="550" y="373" text-anchor="middle" fill="#888" font-size="15">low challenge</text>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">NO SUCH GAIN</text>
                    <rect x="720" y="170" width="300" height="300" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="222" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CONTROL</text>
                    <text x="870" y="265" text-anchor="middle" fill="#fff" font-size="16">Usual routine</text>
                    <text x="870" y="345" text-anchor="middle" fill="#888" font-size="15">No new demands</text>
                    <text x="870" y="430" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">BASELINE</text>
                    <rect x="150" y="540" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="598" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE VARIABLE THAT MATTERED</text>
                    <text x="550" y="643" text-anchor="middle" fill="#fff" font-size="18">Everyone was busy. Only new learning</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="18">moved memory. Busy is not enough.</text>
                </svg>`,
                caption: "Same hours, same engagement - only demanding new skills improved memory"
            }
        },
        {
            type: "concept",
            title: "Languages and Instruments: The Heavy Lifters",
            content: "Two skills keep showing up in the reserve literature because they check every box: broad, hard, novel, and endless.\n\n**Bilingualism.** Several observational studies - notably Ellen Bialystok's work in Toronto - found that lifelong bilinguals developed dementia symptoms **roughly 4 to 5 years later** than monolinguals with similar pathology. The proposed mechanism is elegant: managing two languages means constantly suppressing one while using the other, a lifelong executive-function workout.\n\n**Honesty required**: this finding is **debated**. Some studies replicate it; others don't. Bilinguals often differ from monolinguals in immigration history, education, and culture, and untangling those is hard. So treat it as promising-but-contested, not settled. Even skeptics agree that learning a language in later life is exactly the kind of sustained novel challenge the Synapse Project validated - the delayed-onset number is the uncertain part, not the workout.\n\n**Musical training.** Playing an instrument recruits motor control, auditory processing, reading, memory, timing, and emotion at once - one of the broadest network engagements known. Older adults who take up an instrument show gains in processing speed and memory in small trials, and music has a bonus: it pairs naturally with the social lever (Lesson 7) through ensembles and choirs.\n\nYou don't need fluency or Carnegie Hall. You need the climb.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO HEAVY LIFTERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Broad, hard, novel - and never finished</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">A SECOND LANGUAGE</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Bilinguals: dementia onset</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="18">~4-5 years later in</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="18">several studies</text>
                    <text x="290" y="405" text-anchor="middle" fill="#f59e0b" font-size="16">Observational + debated:</text>
                    <text x="290" y="435" text-anchor="middle" fill="#888" font-size="16">not every study replicates it</text>
                    <text x="290" y="500" text-anchor="middle" fill="#888" font-size="16">Constant switching =</text>
                    <text x="290" y="530" text-anchor="middle" fill="#888" font-size="16">executive function workout</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">AN INSTRUMENT</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Engages motor, auditory,</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="18">memory, timing, reading,</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="18">and emotion at once</text>
                    <text x="810" y="405" text-anchor="middle" fill="#10b981" font-size="16">Bonus: ensembles + choirs</text>
                    <text x="810" y="435" text-anchor="middle" fill="#888" font-size="16">stack the social lever too</text>
                    <text x="810" y="500" text-anchor="middle" fill="#888" font-size="16">One of the broadest network</text>
                    <text x="810" y="530" text-anchor="middle" fill="#888" font-size="16">engagements known</text>
                    <rect x="200" y="640" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#ffd700" font-size="20">You don't need fluency or a stage.</text>
                    <text x="550" y="720" text-anchor="middle" fill="#fff" font-size="18">You need the climb.</text>
                </svg>`,
                caption: "Language and music: the broadest brain workouts on record"
            }
        },
        {
            type: "concept",
            title: "Work Complexity and a Reason to Get Up",
            content: "Two quieter reserve-builders deserve a seat at the table.\n\n**Complex work.** Occupational studies find that jobs high in **complexity with people and data** - negotiating, mentoring, analyzing, synthesizing - associate with lower dementia risk, even after adjusting for education. Your job may be building reserve on the clock. If your work has gone on autopilot, volunteering for the hard, unfamiliar project is a brain decision, not just a career one.\n\n**Purpose in life.** In the **Rush Memory and Aging Project**, Patricia Boyle's team followed over 900 older adults, measuring 'purpose in life' - having goals and a sense of directedness. Participants with **high purpose were about 2.4 times less likely** to develop Alzheimer's disease than those with low purpose. Purpose even weakened the link between pathology and symptoms: among people with plaques, the purposeful ones functioned better.\n\n**The honest caveat**: this is observational. Purpose can't be randomized, and healthier brains may find purpose easier to feel. But the effect held after adjusting for depression, social ties, and activity - and purpose is free, has no side effects, and makes life better even if the dementia effect turns out smaller than measured.\n\nA brain with somewhere to go tomorrow seems to fight harder to get there.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE QUIET BUILDERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Complex work and purpose in life</text>
                    <rect x="150" y="170" width="800" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COMPLEX WORK</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">Jobs rich in people-and-data complexity</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="18">associate with lower dementia risk</text>
                    <text x="550" y="358" text-anchor="middle" fill="#888" font-size="16">Holds even after adjusting for education</text>
                    <rect x="150" y="450" width="800" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="508" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">PURPOSE IN LIFE - RUSH COHORT</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="20">High purpose: ~2.4x lower</text>
                    <text x="550" y="598" text-anchor="middle" fill="#fff" font-size="20">Alzheimer's risk (Boyle et al.)</text>
                    <text x="550" y="650" text-anchor="middle" fill="#f59e0b" font-size="16">Observational - purpose can't be randomized</text>
                    <text x="550" y="685" text-anchor="middle" fill="#888" font-size="16">But it's free, safe, and worth having anyway</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#ffd700" font-size="19">A brain with somewhere to go tomorrow</text>
                    <text x="550" y="866" text-anchor="middle" fill="#fff" font-size="17">fights harder to get there</text>
                </svg>`,
                caption: "Demanding work and a sense of purpose both track with protection"
            }
        },
        {
            type: "application",
            title: "Pick Your One Hard Thing",
            content: "The research is clear that scattered dabbling doesn't build reserve - sustained challenge does. So this month, commit to ONE genuinely hard new thing.\n\n1. **Choose something you're bad at** - a language app is fine to start, but a class with homework is better; instrument, drawing, coding, a craft, chess from scratch. The test: does it frustrate you a little? Good.\n\n2. **Schedule 3 sessions a week, 30+ minutes** - the Synapse Project used 15 hours a week; you don't need that, but you need rhythm. Put it in the calendar like a workout.\n\n3. **Stay past the frustration point** - when you feel clumsy and slow, name it: 'this is the workout.' Quitting at discomfort is quitting at the exact moment of building.\n\n4. **Add a human if you can** - a class, a teacher, a duet partner. You'll stack the social lever (Lesson 7) on top of the challenge lever.\n\n5. **Audit your autopilot** - one thing you do on cruise control (same route, same recipes, same puzzles) and make it novel this week.\n\nNot medical advice - just the strongest pattern in the reserve research, turned into a calendar entry.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR ONE HARD THING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">This month's reserve-building plan</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="215" text-anchor="start" fill="#fff" font-size="18">Choose something you're genuinely bad at</text>
                    <rect x="150" y="280" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="335" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="335" text-anchor="start" fill="#fff" font-size="18">Schedule 3 sessions a week, 30+ minutes</text>
                    <rect x="150" y="400" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="455" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="455" text-anchor="start" fill="#fff" font-size="18">Stay past the frustration point - that's the rep</text>
                    <rect x="150" y="520" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="575" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="575" text-anchor="start" fill="#fff" font-size="18">Add a human - class, teacher, or partner</text>
                    <rect x="150" y="640" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="695" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="695" text-anchor="start" fill="#fff" font-size="18">Break one autopilot habit this week</text>
                    <rect x="200" y="790" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#ffd700" font-size="19">One thing. Sustained. Uncomfortable.</text>
                    <text x="550" y="866" text-anchor="middle" fill="#fff" font-size="17">That's what the evidence rewards.</text>
                </svg>`,
                caption: "Five steps to a month of genuine reserve-building"
            }
        },
        {
            type: "quote",
            content: "It is not enough to be busy. The question is: what are we busy about?",
            author: "Henry David Thoreau",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="230" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="225" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"It is not enough to be busy.</text>
                    <text x="160" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="22">The question is: what are we busy about?"</text>
                    <text x="940" y="335" text-anchor="end" fill="#8b5cf6" font-size="18">- Henry David Thoreau</text>
                    <rect x="150" y="450" width="800" height="150" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="510" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE SYNAPSE PROJECT'S ECHO</text>
                    <text x="550" y="555" text-anchor="middle" fill="#fff" font-size="18">Busy wasn't the variable. Challenge was.</text>
                </svg>`,
                caption: "For the brain, what you're busy about is everything"
            }
        },
        {
            type: "quiz",
            question: "Based on the ACTIVE trial and the Synapse Project, which activity would the evidence rank as the BEST reserve-builder for a 65-year-old who has done crosswords daily for 30 years?",
            options: [
                { text: "Doubling down on crosswords, since existing skill accelerates the benefit", correct: false },
                { text: "Switching to a premium brain-training app with harder puzzle levels", correct: false },
                { text: "Enrolling in a beginner photography class that requires sustained new learning", correct: true },
                { text: "Joining a weekly social group, since engagement of any kind builds reserve equally", correct: false }
            ],
            explanation: "The Synapse Project showed that demanding NEW skills - photography, quilting - improved memory, while equally time-consuming social-only activities did not. Thirty years of crosswords means those circuits are well-worn; more crosswords mainly make you better at crosswords. The brain-training app is the tempting distractor, but the ACTIVE trial found training gains stay narrow, and Lumosity's $2M FTC settlement showed the marketing outran the science. Novelty plus sustained challenge is the evidence-backed recipe.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHAT BUILDS RESERVE?</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Familiar practice vs. novel challenge</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which one did the trials reward?</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">RECALL</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Synapse Project: only the groups learning</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">a demanding new skill improved memory</text>
                </svg>`,
                caption: "Apply the lesson's core finding"
            }
        }
    ]
},
{
    id: 11,
    title: "Protect the Hardware",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Maintenance Nobody Talks About",
            content: "Most brain-health advice is about what you add: exercise, sleep, good food, friends. This lesson is about the opposite - what you protect the brain FROM.\n\nYour brain is three pounds of irreplaceable hardware in a bone case. And a surprising share of dementia risk comes down to plain physical protection and basic maintenance: don't hit it, don't pickle it, don't smoke it, don't starve it of clean air or clear vision, and don't leave the mood system broken.\n\nAdded up, the levers in this lesson - head injury, alcohol, smoking, air pollution, vision loss, and depression - account for roughly **14% of modifiable dementia risk** in the Lancet Commission's model. That's on par with hearing and blood pressure combined.\n\nNone of it is glamorous. All of it is doable. Think of this as the owner's manual chapter your brain never came with - including a maintenance schedule at the end for your eyes, ears, teeth, and immune system.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROTECT THE HARDWARE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six levers, ~14% of modifiable risk</text>
                    <rect x="80" y="170" width="300" height="160" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HEAD INJURY</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-size="18">~3%</text>
                    <rect x="400" y="170" width="300" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ALCOHOL</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">~1%</text>
                    <rect x="720" y="170" width="300" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">SMOKING</text>
                    <text x="870" y="280" text-anchor="middle" fill="#fff" font-size="18">~2%</text>
                    <rect x="80" y="370" width="300" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="435" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">AIR POLLUTION</text>
                    <text x="230" y="480" text-anchor="middle" fill="#fff" font-size="18">~3%</text>
                    <rect x="400" y="370" width="300" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VISION LOSS</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="18">~2%</text>
                    <rect x="720" y="370" width="300" height="160" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="435" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">DEPRESSION</text>
                    <text x="870" y="480" text-anchor="middle" fill="#fff" font-size="18">~3%</text>
                    <rect x="150" y="600" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">NOT GLAMOROUS. ALL DOABLE.</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">The owner's manual your brain never got</text>
                </svg>`,
                caption: "Six protection levers from the Lancet Commission's 14-factor model"
            }
        },
        {
            type: "concept",
            title: "Head Injury: Falls Are the Real Enemy",
            content: "When you hear 'traumatic brain injury and dementia,' you probably picture NFL linebackers. The bigger story is quieter: **falls are the number one cause of TBI in older adults** - and TBI accounts for roughly **3% of dementia risk**.\n\nEven a single moderate head injury raises long-term dementia risk; repeated injuries raise it more. The brain doesn't fully forget a hard hit.\n\nThe defense has three layers:\n\n• **Fall-proof the home.** Most serious falls happen where you live: loose rugs, dark stairways, wet bathrooms, cords across walkways. A one-hour walkthrough fixes most of it.\n• **Train balance and strength.** This is where the exercise lesson (Lesson 5) pays double. Leg strength and balance work - tai chi, single-leg stands, sit-to-stand reps - measurably cut fall risk in trials. Strong legs are brain protection.\n• **Wear the obvious gear.** Helmet for cycling and skiing, every time - one crash is one too many. Seatbelt always; car crashes remain a major TBI source at every age.\n\nAnd if you or someone you love does take a serious hit - especially with confusion, repeated vomiting, or worsening headache - that's an emergency evaluation, not a wait-and-see. Protecting the hardware sometimes means using the warranty service.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TBI: THE FALL PROBLEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~3% of dementia risk - falls lead in older adults</text>
                    <rect x="150" y="170" width="800" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">#1 CAUSE OF TBI AFTER 65: FALLS</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">Not sports. Not crashes. Rugs, stairs, bathrooms.</text>
                    <rect x="80" y="380" width="300" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="435" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">LAYER 1</text>
                    <text x="230" y="480" text-anchor="middle" fill="#fff" font-size="17">Fall-proof</text>
                    <text x="230" y="510" text-anchor="middle" fill="#fff" font-size="17">the home</text>
                    <text x="230" y="560" text-anchor="middle" fill="#888" font-size="15">Rugs, lights, rails</text>
                    <rect x="400" y="380" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LAYER 2</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="17">Balance +</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="17">leg strength</text>
                    <text x="550" y="560" text-anchor="middle" fill="#888" font-size="15">Tai chi, sit-to-stands</text>
                    <rect x="720" y="380" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">LAYER 3</text>
                    <text x="870" y="480" text-anchor="middle" fill="#fff" font-size="17">Helmets +</text>
                    <text x="870" y="510" text-anchor="middle" fill="#fff" font-size="17">seatbelts</text>
                    <text x="870" y="560" text-anchor="middle" fill="#888" font-size="15">Every ride, every time</text>
                    <rect x="200" y="670" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="718" text-anchor="middle" fill="#ffd700" font-size="19">Strong legs are brain protection.</text>
                    <text x="550" y="753" text-anchor="middle" fill="#fff" font-size="17">The exercise lesson pays double here.</text>
                </svg>`,
                caption: "Three layers of defense against the leading cause of late-life TBI"
            }
        },
        {
            type: "example",
            title: "The One-Hour Home Walkthrough",
            content: "Meet the most cost-effective brain intervention in this book: an hour with a notepad in your own home (or your parents').\n\nWalk each room like an inspector:\n\n• **Floors**: Remove or tape down loose rugs. Clear cords from walking paths. Wipe-test the bathroom floor - if it's slick wet, add a mat.\n• **Stairs**: Handrail on at least one side, ideally both. A light switch at BOTH top and bottom. Mark the first and last step edge with bright tape if they blend together.\n• **Bathroom**: Grab bar in the shower and beside the toilet. Non-slip mat inside the tub. Night light for the 2 a.m. trip.\n• **Lighting**: Replace dim bulbs. Motion-sensor night lights in hallways cost about ten dollars each.\n• **Reach zones**: Move daily-use items to waist-to-shoulder height. Climbing on chairs for the good plates is how a shocking number of TBIs start.\n\nWhy it matters: about **one in four adults over 65 falls each year**, and falls are the leading cause of injury death in that group. CDC-style home-modification checklists exist precisely because trials of home hazard reduction show meaningful drops in fall rates - one of the few interventions where an afternoon of work keeps paying for years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HOME WALKTHROUGH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One hour, years of protection</text>
                    <rect x="150" y="160" width="800" height="95" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="218" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">FLOORS</text>
                    <text x="360" y="218" text-anchor="start" fill="#fff" font-size="17">Secure rugs, clear cords, dry bathrooms</text>
                    <rect x="150" y="285" width="800" height="95" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="343" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">STAIRS</text>
                    <text x="360" y="343" text-anchor="start" fill="#fff" font-size="17">Rails both sides, lights top and bottom</text>
                    <rect x="150" y="410" width="800" height="95" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="468" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">BATHROOM</text>
                    <text x="360" y="468" text-anchor="start" fill="#fff" font-size="17">Grab bars, non-slip mat, night light</text>
                    <rect x="150" y="535" width="800" height="95" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="593" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">LIGHTING</text>
                    <text x="360" y="593" text-anchor="start" fill="#fff" font-size="17">Bright bulbs, motion-sensor night lights</text>
                    <rect x="150" y="660" width="800" height="95" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="718" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">REACH</text>
                    <text x="360" y="718" text-anchor="start" fill="#fff" font-size="17">Daily items waist-to-shoulder, no chair-climbing</text>
                    <rect x="200" y="800" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="19">1 in 4 adults over 65 falls each year.</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="17">Most of those falls are preventable.</text>
                </svg>`,
                caption: "A room-by-room checklist that measurably cuts fall risk"
            }
        },
        {
            type: "concept",
            title: "Alcohol: The Red Wine Era Is Over",
            content: "For years the story was cozy: a glass of red wine is good for your heart, maybe your brain. The honest update: **that era is over.**\n\nThe **Topiwala 2017 study in the BMJ** followed 550 civil servants for 30 years with periodic brain MRIs. Drinkers averaging **more than 21 units a week** (roughly two bottles of wine) had significantly higher rates of **hippocampal atrophy** - shrinkage in the brain's memory hub. Sobering detail: even 'moderate' drinkers (14-21 units weekly) showed measurably elevated risk versus light drinkers, and the study found **no protective effect of light drinking** on brain structure.\n\nWhere the science stands now:\n• **Heavy drinking** (>21 units/week) is an unambiguous, major, *reversible* risk - it accounts for about **1%** of dementia risk at the population level, and much more for heavy drinkers as individuals\n• The apparent benefits of light drinking in older studies were likely **confounding** - light drinkers tend to be healthier in other ways, and 'non-drinkers' often included sick people who had quit\n• Global guidance keeps trending one direction: **less is better**\n\nNone of this means you must be a teetotaler - this is education, not prescription. It means the brain no longer offers alcohol a health halo. If you drink, do it for pleasure with open eyes, and keep the weekly count honest.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ALCOHOL AND THE BRAIN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Topiwala 2017, BMJ - 30 years of MRIs</text>
                    <rect x="150" y="170" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">OVER 21 UNITS PER WEEK</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">Significantly higher hippocampal atrophy</text>
                    <text x="550" y="312" text-anchor="middle" fill="#fff" font-size="18">Shrinkage in the memory hub itself</text>
                    <text x="550" y="355" text-anchor="middle" fill="#888" font-size="16">Even 14-21 units showed elevated risk</text>
                    <rect x="150" y="440" width="800" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="498" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">NO LIGHT-DRINKING BENEFIT FOUND</text>
                    <text x="550" y="543" text-anchor="middle" fill="#fff" font-size="18">Old 'red wine' findings were likely confounded</text>
                    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="16">Healthier people drank lightly, not the reverse</text>
                    <rect x="200" y="690" width="700" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="742" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE GOOD NEWS</text>
                    <text x="550" y="785" text-anchor="middle" fill="#fff" font-size="18">Heavy drinking is a major REVERSIBLE risk</text>
                </svg>`,
                caption: "Thirty years of brain scans ended the red-wine health halo"
            }
        },
        {
            type: "quiz",
            question: "What did the Topiwala 2017 BMJ study find about alcohol and the brain over 30 years of follow-up?",
            options: [
                { text: "Only binge drinking damaged the brain; steady daily drinking was safe", correct: false },
                { text: "Drinking over 21 units weekly was linked to hippocampal atrophy, with no protective effect from light drinking", correct: true },
                { text: "Red wine specifically protected the hippocampus while spirits harmed it", correct: false },
                { text: "Alcohol's brain effects fully reversed within one year of quitting", correct: false }
            ],
            explanation: "The study followed 550 people for 30 years with MRIs and found drinkers above 21 units weekly had significantly more hippocampal atrophy - and even moderate drinkers (14-21 units) showed elevated risk. Crucially, it found no protective effect of light drinking on brain structure. The red wine option is the classic misconception: apparent wine benefits in older studies likely reflected confounding - healthier people happened to drink lightly. The trend in guidance is simple: less is better.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">ALCOHOL AND THE HIPPOCAMPUS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">550 people, 30 years, repeated MRIs</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did the scans show?</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THINK ABOUT</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Did any level of drinking protect the brain?</text>
                    <text x="550" y="500" text-anchor="middle" fill="#888" font-size="16">Careful - the wine industry hopes you say yes</text>
                </svg>`,
                caption: "Test your read of the alcohol evidence"
            }
        },
        {
            type: "concept",
            title: "Smoking and Vaping: The Clock You Can Restart",
            content: "**Smoking accounts for roughly 2% of population dementia risk**, and the mechanism is no mystery: smoking accelerates every vascular problem from Lesson 9 - stiffened arteries, micro-strokes, reduced blood flow - while delivering oxidative stress directly to brain tissue. Smokers have substantially higher dementia rates than never-smokers.\n\nNow the genuinely hopeful part: **the clock restarts when you quit.** Cohort studies show former smokers' dementia risk falls meaningfully **within years** of quitting - long-term quitters approach the risk profile of never-smokers. In a large Korean cohort of over 46,000 men, those who quit for 4+ years showed significantly reduced dementia risk versus continuing smokers. Your brain does not hold a permanent grudge. Quitting at 50, 60, even 70 still pays.\n\n**What about vaping?** Honesty requires a shrug: **we don't know the long-term brain effects**, because vaping hasn't existed long enough for 30-year cohort data. It almost certainly delivers less vascular damage than combustion. It still delivers nicotine, which affects blood vessels. As a quitting bridge away from cigarettes, most clinicians see it as harm reduction; as a lifelong habit, it's an uncontrolled experiment you're running on yourself.\n\nIf you smoke, quitting is plausibly the single highest-value brain decision available to you. Support (medication plus counseling) roughly doubles success rates - this is a solved problem waiting for a start date.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SMOKING: ~2% LEVER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The risk clock restarts when you quit</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WHILE SMOKING</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="17">Stiffened arteries</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="17">Reduced brain blood flow</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="17">Oxidative stress to neurons</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">Substantially higher</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">dementia rates</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">AFTER QUITTING</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="17">Risk falls within years</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="17">4+ years: significant drop</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="17">(46,000-man Korean cohort)</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="16">Long-term quitters near</text>
                    <text x="810" y="440" text-anchor="middle" fill="#888" font-size="16">never-smoker risk</text>
                    <rect x="150" y="570" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">VAPING: HONEST ANSWER</text>
                    <text x="550" y="668" text-anchor="middle" fill="#fff" font-size="18">Long-term brain effects unknown - no 30-year data</text>
                    <text x="550" y="700" text-anchor="middle" fill="#888" font-size="16">Reasonable quit-bridge, unproven lifelong habit</text>
                </svg>`,
                caption: "Quitting at any age moves the needle - the brain forgives"
            }
        },
        {
            type: "concept",
            title: "Air Pollution: The Risk You Breathe",
            content: "Here's the newest entrant most people have never considered: **air pollution accounts for roughly 3% of dementia risk** in the Lancet model - as much as head injury.\n\nThe villain is **PM2.5** - particles under 2.5 micrometers, small enough to pass from your lungs into your bloodstream and, evidence suggests, along the olfactory nerve directly into the brain. Long-term PM2.5 exposure associates with higher dementia rates across dozens of cohort studies on multiple continents, plus faster brain atrophy on imaging. Mechanisms are plausible: neuroinflammation, vascular damage, and accelerated amyloid pathology in animal models.\n\nMost of us can't move to a mountain village. What actually helps:\n\n• **HEPA filtration at home** - a true HEPA air purifier in the bedroom and main living space meaningfully cuts indoor PM2.5, and indoor air is where you spend most hours\n• **Route your exercise** - jogging along a six-lane road maximizes intake of the worst air at the worst time (deep breathing). Two blocks away from traffic can cut exposure substantially\n• **Ventilate when cooking** - frying and gas stoves are major indoor PM sources; run the hood fan\n• **Check air quality on bad days** - wildfire smoke days are real exposure events; exercise indoors\n\nAnd the honest note: **houseplants don't do much.** The NASA plant study was a sealed-chamber experiment; in real homes you'd need hundreds of plants to match one HEPA unit. Keep the plants for joy, buy the filter for particles.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">AIR POLLUTION: ~3%</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">PM2.5 - particles that reach the brain</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">PM2.5: UNDER 2.5 MICROMETERS</text>
                    <text x="550" y="272" text-anchor="middle" fill="#fff" font-size="18">Small enough to enter blood - and the brain</text>
                    <text x="550" y="307" text-anchor="middle" fill="#888" font-size="16">Linked to dementia in cohorts worldwide</text>
                    <rect x="80" y="400" width="440" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WORKS: HEPA FILTER</text>
                    <text x="300" y="495" text-anchor="middle" fill="#fff" font-size="16">Bedroom + living room</text>
                    <rect x="580" y="400" width="440" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WORKS: ROUTE CHOICE</text>
                    <text x="800" y="495" text-anchor="middle" fill="#fff" font-size="16">Exercise away from traffic</text>
                    <rect x="80" y="570" width="440" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WORKS: VENTILATION</text>
                    <text x="300" y="665" text-anchor="middle" fill="#fff" font-size="16">Hood fan when cooking</text>
                    <rect x="580" y="570" width="440" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="625" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">MOSTLY MYTH: PLANTS</text>
                    <text x="800" y="665" text-anchor="middle" fill="#fff" font-size="16">Nice, but not filtration</text>
                    <rect x="200" y="770" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="19">You can't control the sky.</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="17">You can control your bedroom's air.</text>
                </svg>`,
                caption: "What actually reduces PM2.5 exposure - and what's decoration"
            }
        },
        {
            type: "concept",
            title: "Vision: The Newest Lever on the List",
            content: "In **2024, the Lancet Commission added untreated vision loss** to its dementia risk model at roughly **2%** - the newest officially recognized lever, and it rhymes perfectly with the hearing story from Lesson 4.\n\nThe logic is the same **input-starvation** argument: your visual system feeds an enormous share of the brain's sensory input. When vision degrades and goes uncorrected, visual cortex and its downstream networks receive less stimulation, the brain spends more effort decoding blur, and people quietly withdraw from reading, driving, faces, and activities - a triple hit of understimulation, cognitive load, and isolation.\n\nAnd like hearing, this lever comes with an unusually striking treatment finding: in a cohort of **over 3,000 adults** followed for years, **cataract surgery was associated with roughly 30% lower dementia risk** compared to similar patients who didn't have the surgery (**Lee 2022, JAMA Internal Medicine**). The comparison was elegant - patients who had glaucoma surgery (which doesn't restore sight) showed no such benefit, suggesting it really was the restored *vision* doing the work.\n\n**Honest framing**: this is observational - people who choose surgery may differ in health and resources. But a 30% association from a routine, safe, 20-minute outpatient procedure is one of the most striking numbers in this entire book.\n\nThe rule: sensory input is brain food. Don't let a fixable lens starve the most expensive organ you own.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">VISION: NEW FOR 2024</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~2% - the input-starvation story again</text>
                    <rect x="150" y="170" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">UNTREATED VISION LOSS</text>
                    <text x="550" y="272" text-anchor="middle" fill="#fff" font-size="18">Less input + harder decoding + withdrawal</text>
                    <text x="550" y="308" text-anchor="middle" fill="#888" font-size="16">Same triple hit as untreated hearing loss</text>
                    <rect x="150" y="420" width="800" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="478" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">LEE 2022 - JAMA INTERNAL MEDICINE</text>
                    <text x="550" y="528" text-anchor="middle" fill="#fff" font-size="20">Cataract surgery: ~30% lower</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="20">dementia risk in 3,000+ adults</text>
                    <text x="550" y="612" text-anchor="middle" fill="#888" font-size="16">Glaucoma surgery (no sight restored): no benefit</text>
                    <text x="550" y="645" text-anchor="middle" fill="#f59e0b" font-size="16">Observational - but strikingly consistent</text>
                    <rect x="200" y="740" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#ffd700" font-size="19">Sensory input is brain food.</text>
                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="17">Don't let a fixable lens cause the famine.</text>
                </svg>`,
                caption: "The 2024 addition: clear vision keeps the brain fed"
            }
        },
        {
            type: "example",
            title: "A 20-Minute Surgery With a Decade of Upside",
            content: "Consider what the Lee 2022 finding looks like at human scale.\n\nA 74-year-old retired teacher - call her Ruth - has been 'managing' her cataracts for three years. Managing means: no more night driving, so she skipped her granddaughter's evening recitals. Reading gives her headaches, so the library books stopped. Faces across a room are smudges, so parties became stressful, then rare.\n\nNotice what her cataracts actually took: **driving (independence), reading (cognitive engagement), faces (social connection)** - three levers from this book, dimming through one cloudy lens. Her world was shrinking in exactly the pattern that predicts decline.\n\nCataract surgery is one of medicine's most practiced procedures - about **20 minutes per eye**, done millions of times a year in the US, with high success rates. Within weeks, Ruth's version of the story reverses: night driving returns, print sharpens, the room comes back into focus.\n\nIn the Washington-state cohort **(Adults aged 65+, followed up to a decade)**, patients like Ruth who had the surgery went on to develop dementia at roughly **30% lower rates** than comparable patients who didn't. Observational, yes - but the glaucoma-surgery control group makes coincidence harder to argue.\n\nIf you or a parent has been 'managing' cataracts, this is the nudge: get the evaluation. Few interventions in this book have this much upside for this little effort.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RUTH'S CLOUDY LENS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What one fixable problem quietly takes</text>
                    <rect x="80" y="170" width="300" height="200" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">NO NIGHT DRIVING</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-size="16">Independence and</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="16">family events lost</text>
                    <rect x="400" y="170" width="300" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">NO MORE READING</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="16">Daily cognitive</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="16">engagement lost</text>
                    <rect x="720" y="170" width="300" height="200" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="870" y="230" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">BLURRED FACES</text>
                    <text x="870" y="280" text-anchor="middle" fill="#fff" font-size="16">Social world</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="16">shrinking</text>
                    <rect x="150" y="440" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="498" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">20 MINUTES PER EYE</text>
                    <text x="550" y="543" text-anchor="middle" fill="#fff" font-size="18">Surgery reversed all three losses - and</text>
                    <text x="550" y="578" text-anchor="middle" fill="#fff" font-size="18">associated with ~30% lower dementia risk</text>
                    <rect x="200" y="680" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="19">Rarely does this much upside</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="17">cost this little effort</text>
                </svg>`,
                caption: "One cloudy lens was dimming three brain-protection levers at once"
            }
        },
        {
            type: "concept",
            title: "Depression: Treat the Mood, Protect the Brain",
            content: "**Depression accounts for roughly 3% of dementia risk** - and it's the lever with the most complicated arrow.\n\nThe relationship is **bidirectional**:\n• Depression in midlife and late life associates with higher subsequent dementia risk - through chronic stress hormones (cortisol is hard on the hippocampus), inflammation, withdrawal from activity and connection, and disrupted sleep\n• AND early dementia can *cause* depressive symptoms, sometimes years before memory problems surface\n\nUntangling cause from early symptom is genuinely difficult, and researchers debate how much of the association each direction explains. But here's why the ambiguity doesn't change your move: **either way, depression deserves treatment.** If it's a cause, treating it is prevention. If it's an early signal, seeking help gets you evaluated sooner - which Lesson 12 will show matters enormously.\n\nWhat counts as treatment? The medical evidence supports both major routes:\n• **Psychotherapy** - CBT and behavioral activation have solid trial support\n• **Medication** - antidepressants are effective for moderate-to-severe depression\n• **Both together** often beat either alone - and exercise (Lesson 5) has meaningful antidepressant effects as an add-on, not a replacement, in significant depression\n\nThe framing matters: depression is not a character flaw or a normal part of aging to be endured. It's a treatable medical condition that also happens to sit on the dementia risk list. Treating it is brain protection - talk to a clinician, not just a friend. (This is education, not medical advice - a professional evaluation is the actual first step.)",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DEPRESSION: ~3%</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A two-way street - and both ways say: treat it</text>
                    <rect x="80" y="180" width="420" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">DEPRESSION</text>
                    <text x="290" y="285" text-anchor="middle" fill="#888" font-size="15">Cortisol, inflammation,</text>
                    <text x="290" y="312" text-anchor="middle" fill="#888" font-size="15">withdrawal, poor sleep</text>
                    <rect x="600" y="180" width="420" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">DEMENTIA</text>
                    <text x="810" y="285" text-anchor="middle" fill="#888" font-size="15">Can cause depressive</text>
                    <text x="810" y="312" text-anchor="middle" fill="#888" font-size="15">symptoms years early</text>
                    <path d="M500 225 L600 225" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="600,225 588,217 588,233" fill="#14b8a6"/>
                    <path d="M600 290 L500 290" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="500,290 512,282 512,298" fill="#14b8a6"/>
                    <rect x="150" y="400" width="800" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="458" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">TREATMENT = BRAIN PROTECTION</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="18">Therapy (CBT) and medication both count</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Often strongest together; exercise helps as add-on</text>
                    <text x="550" y="588" text-anchor="middle" fill="#888" font-size="16">If cause: prevention. If early sign: earlier evaluation.</text>
                    <rect x="200" y="690" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#ffd700" font-size="19">Not a character flaw. Not normal aging.</text>
                    <text x="550" y="770" text-anchor="middle" fill="#fff" font-size="17">A treatable condition on the risk list.</text>
                </svg>`,
                caption: "Whichever way the arrow points, the action is the same: treat it"
            }
        },
        {
            type: "application",
            title: "Your Hardware Maintenance Schedule",
            content: "Machines get maintenance schedules. Your brain's support systems deserve one too. Put these on the calendar:\n\n1. **Eyes - every 1-2 years**: comprehensive eye exam after 60 (or now, if you're 'managing' blur). Cataracts, glaucoma, and outdated prescriptions are all input thieves.\n\n2. **Ears - baseline now, then periodic**: audiogram if you haven't had one (Lesson 4's whole argument). Treat what you find.\n\n3. **Teeth - cleanings twice a year**: gum disease shows early-evidence links to dementia - oral bacteria and chronic inflammation are the suspected routes. The evidence is preliminary, but flossing is cheap and the downside is zero.\n\n4. **Vaccinations - stay current**: intriguingly, a 2025 natural experiment in Wales (Eyting et al.) found adults who got the shingles vaccine developed dementia at meaningfully lower rates - a rare study design that approaches causal evidence. Not yet fully understood, but shots you should get anyway keep looking brain-friendly.\n\n5. **Mood - check honestly, twice a year**: two weeks of low mood, lost interest, or hopelessness is a clinician conversation, not a toughing-it-out situation.\n\n6. **Home - annual fall walkthrough**: re-run the checklist from earlier every year; homes and bodies both change.\n\nEducation, not prescription - but every item here is standard care your doctor will recognize.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MAINTENANCE SCHEDULE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Calendar items for the support systems</text>
                    <rect x="150" y="160" width="800" height="95" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="218" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">EYES</text>
                    <text x="360" y="218" text-anchor="start" fill="#fff" font-size="17">Full exam every 1-2 years after 60</text>
                    <rect x="150" y="280" width="800" height="95" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="338" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">EARS</text>
                    <text x="360" y="338" text-anchor="start" fill="#fff" font-size="17">Baseline audiogram, then periodic</text>
                    <rect x="150" y="400" width="800" height="95" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="458" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">TEETH</text>
                    <text x="360" y="458" text-anchor="start" fill="#fff" font-size="17">Cleanings 2x/year - gum-brain links (early)</text>
                    <rect x="150" y="520" width="800" height="95" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="578" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">SHOTS</text>
                    <text x="360" y="578" text-anchor="start" fill="#fff" font-size="17">Stay current - shingles vax looks brain-friendly</text>
                    <rect x="150" y="640" width="800" height="95" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="698" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">MOOD</text>
                    <text x="360" y="698" text-anchor="start" fill="#fff" font-size="17">Honest self-check twice a year</text>
                    <rect x="150" y="760" width="800" height="95" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="818" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">HOME</text>
                    <text x="360" y="818" text-anchor="start" fill="#fff" font-size="17">Annual fall-hazard walkthrough</text>
                </svg>`,
                caption: "Six recurring calendar items that protect the brain's inputs"
            }
        },
        {
            type: "quiz",
            question: "The Lancet Commission added untreated vision loss to its risk model in 2024. What made the Lee 2022 cataract study particularly persuasive despite being observational?",
            options: [
                { text: "It was a randomized controlled trial, so confounding was eliminated", correct: false },
                { text: "Glaucoma surgery patients - whose sight wasn't restored - showed no benefit, pointing to restored vision itself", correct: true },
                { text: "It showed cataract surgery reverses existing dementia in most patients", correct: false },
                { text: "It proved vision loss causes more dementia than hearing loss does", correct: false }
            ],
            explanation: "The study followed 3,000+ older adults and found cataract surgery associated with roughly 30% lower dementia risk. Its clever feature: patients who had glaucoma surgery - an eye operation that does NOT restore sight - showed no comparable benefit. That comparison weakens the 'healthier people choose surgery' objection, since both groups chose eye surgery. It remains observational, not a randomized trial, and it doesn't reverse dementia - it's associated with lower future risk. Restored sensory input is the leading explanation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE CATARACT FINDING</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">~30% lower dementia risk after surgery</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What made it hard to dismiss?</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HINT</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Compare it to an eye surgery</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">that doesn't restore sight</text>
                </svg>`,
                caption: "Test your grasp of the vision-dementia evidence"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures this lesson's overall message about 'hardware protection' risks like TBI, alcohol, smoking, pollution, vision, and depression?",
            options: [
                { text: "Each is individually small, so none is worth acting on until proven in randomized trials", correct: false },
                { text: "Together they equal ~14% of modifiable risk, and most respond to unglamorous, concrete actions available now", correct: true },
                { text: "They mainly matter for people with a family history of dementia", correct: false },
                { text: "They are only relevant after age 65, when dementia risk begins", correct: false }
            ],
            explanation: "Individually these levers look small - 1% to 3% each - but they sum to roughly 14% of modifiable risk, comparable to the biggest single levers in the book. And unlike some risk factors, most have concrete, low-cost responses: a home walkthrough, a helmet, an honest drink count, a quit date, a HEPA filter, an eye exam, a therapy appointment. The 'wait for randomized proof' option sounds rigorous but fails the asymmetry test from earlier lessons: these actions are cheap, safe, and beneficial for many reasons beyond dementia.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SIX SMALL LEVERS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">3 + 1 + 2 + 3 + 2 + 3 = ?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What do they add up to - and what's the move?</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE LESSON'S FRAME</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Unglamorous protection, concrete actions,</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">available today</text>
                </svg>`,
                caption: "Final check: the sum of small protections"
            }
        }
    ]
},
{
    id: 12,
    title: "Your Brain Span Plan",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Eleven Lessons, One Plan",
            content: "You started this book with a myth: that dementia is a genetic lottery ticket you either drew or didn't. Eleven lessons later, you know the real picture - researchers estimate that around **45% of dementia risk tracks to 14 modifiable factors**, and you've now toured every single one.\n\nYou've met the nuns whose brains hid Alzheimer's, the 12-point hearing finding, the glymphatic night crew washing your brain in deep sleep, the Mediterranean tables of the MIND diet, the FINGER trial's multi-lever success, and yesterday's unglamorous hardware checklist.\n\nBut a tour is not a plan. Knowledge that never becomes a calendar entry protects nothing.\n\nThis final lesson turns eleven lessons into one operating system: what to do in each decade, how to tell normal aging from a real warning sign, why the levers multiply instead of add - and an honest closing about what 45% does and doesn't promise. Then a 30-day starter plan, because the best day to begin was twenty years ago, and the second best is this one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR BRAIN SPAN PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From eleven lessons to one operating system</text>
                    <rect x="150" y="170" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="228" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHAT YOU NOW KNOW</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">~45% of dementia risk tracks to</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="18">14 factors you can influence</text>
                    <rect x="150" y="420" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="478" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">WHAT'S STILL MISSING</text>
                    <text x="550" y="525" text-anchor="middle" fill="#fff" font-size="18">A plan. Knowledge without a calendar</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="18">entry protects nothing.</text>
                    <rect x="150" y="670" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="728" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THIS LESSON</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="18">Decade checklists + warning signs +</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="18">the compounding trick + a 30-day start</text>
                </svg>`,
                caption: "The synthesis: turning a book's worth of evidence into action"
            }
        },
        {
            type: "concept",
            title: "The Arc You Just Traveled",
            content: "Before building the plan, see the whole map at once - because the structure of this book WAS the argument:\n\n• **L1 - The destiny myth broke**: the Nun Study and twin data showed pathology isn't fate\n• **L2 - How the brain actually ages**: normal slowing vs. disease, and why decades of silence precede symptoms\n• **L3 - The 14 levers**: the Lancet Commission's ~45% modifiable risk map\n• **L4 - Hearing**: the biggest single lever (~7%); aids and the ACHIEVE trial\n• **L5 - Movement**: exercise as growth signal - BDNF, blood flow, ~1-2% lever with outsized trial results\n• **L6 - Sleep**: the glymphatic wash cycle; deep sleep as nightly maintenance\n• **L7 - Connection**: isolation (~5% with loneliness pathways) and why other people are cognitive exercise\n• **L8 - Food**: MIND diet's ~53% observational finding, and honest limits of nutrition science\n• **L9 - Heart-brain**: blood pressure (~2%), diabetes, cholesterol, obesity - the vascular highway\n• **L10 - Challenge**: reserve, the brain-training reality check, novelty + difficulty\n• **L11 - Hardware**: TBI, alcohol, smoking, air, vision, depression - the protection package\n\nNotice the design: myth-breaking first, mechanisms second, then levers ordered roughly by size and evidence strength. Every lesson was one piece of a single claim: **aging is inevitable; the rate and resilience are partly yours.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WHOLE ARC</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eleven lessons, one argument</text>
                    <rect x="80" y="160" width="940" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="130" y="205" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">L1-L3: THE FOUNDATION</text>
                    <text x="130" y="240" text-anchor="start" fill="#fff" font-size="16">Myth broken, aging explained, 14 levers mapped (~45%)</text>
                    <rect x="80" y="300" width="940" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="345" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">L4-L6: THE BODY'S RHYTHMS</text>
                    <text x="130" y="380" text-anchor="start" fill="#fff" font-size="16">Hearing (~7%), movement, and the nightly sleep wash</text>
                    <rect x="80" y="440" width="940" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="130" y="485" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">L7-L9: FUEL AND FLOW</text>
                    <text x="130" y="520" text-anchor="start" fill="#fff" font-size="16">Connection, food (MIND), and the heart-brain highway</text>
                    <rect x="80" y="580" width="940" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="130" y="625" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="18">L10-L11: BUILD AND PROTECT</text>
                    <text x="130" y="660" text-anchor="start" fill="#fff" font-size="16">Reserve through challenge; hardware protection package</text>
                    <rect x="200" y="740" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="20">Aging is inevitable.</text>
                    <text x="550" y="828" text-anchor="middle" fill="#fff" font-size="18">The rate and resilience are partly yours.</text>
                </svg>`,
                caption: "The book's structure was the argument: foundation, rhythms, fuel, defense"
            }
        },
        {
            type: "concept",
            title: "The Decade-by-Decade Checklist",
            content: "The levers don't all fire at the same age. Blood pressure damage compounds from your 30s; hearing aids matter most in your 60s and 70s. So the smart plan is staged:\n\n**In your 30s-40s (build the foundation):**\n• Know and control your **blood pressure** - the SPRINT MIND lesson said midlife is when it counts most\n• Build the **learning habit** and the **exercise habit** while they're easy to cement\n• Get a **hearing baseline** audiogram; protect ears at concerts and with power tools\n• **Helmet and seatbelt** discipline - your 70-year-old self inherits this brain\n\n**In your 50s (know your numbers):**\n• Annual numbers: **BP, A1C, lipids, weight** - the vascular dashboard from Lesson 9\n• **Audiogram** now and periodically - hearing loss starts sooner than vanity admits\n• Shift the plate **MIND-ward**: berries, greens, fish, olive oil\n• Start **strength training** if you haven't - muscle and balance are fall insurance you bank now\n\n**In your 60s and beyond (deploy the protections):**\n• **Hearing aids if indicated** - remember ACHIEVE's 48% slowing in at-risk adults; don't wait years like the average person does\n• Engineer **social structure** - standing commitments, not good intentions\n• **Balance work** and the home walkthrough; **vision exam** every 1-2 years, cataracts fixed\n• Protect **purpose** - retirement ends a job, not your reason to get up\n\nNo decade is too early. None is too late - the levers just change weight.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DECADE CHECKLIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Right lever, right decade</text>
                    <rect x="80" y="170" width="940" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">30s-40s: BUILD</text>
                    <text x="130" y="262" text-anchor="start" fill="#fff" font-size="17">Blood pressure control - learning + exercise habits</text>
                    <text x="130" y="297" text-anchor="start" fill="#fff" font-size="17">Hearing baseline - helmet and seatbelt discipline</text>
                    <rect x="80" y="390" width="940" height="190" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="130" y="442" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">50s: KNOW YOUR NUMBERS</text>
                    <text x="130" y="482" text-anchor="start" fill="#fff" font-size="17">BP, A1C, lipids yearly - audiogram - MIND-ish plate</text>
                    <text x="130" y="517" text-anchor="start" fill="#fff" font-size="17">Start strength training - bank muscle and balance</text>
                    <rect x="80" y="610" width="940" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="130" y="662" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">60s+: DEPLOY</text>
                    <text x="130" y="702" text-anchor="start" fill="#fff" font-size="17">Hearing aids if needed - social structure - balance</text>
                    <text x="130" y="737" text-anchor="start" fill="#fff" font-size="17">Vision fixed - purpose protected</text>
                    <rect x="200" y="850" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#ffd700" font-size="19">No decade too early. None too late.</text>
                    <text x="550" y="927" text-anchor="middle" fill="#fff" font-size="16">The levers just change weight.</text>
                </svg>`,
                caption: "Build in your 30s-40s, measure in your 50s, deploy from 60 on"
            }
        },
        {
            type: "concept",
            title: "Normal Aging or See a Doctor?",
            content: "A plan needs a warning system. Here's the line clinicians actually draw.\n\n**Normal aging looks like:**\n• Forgetting a name, then recalling it an hour later\n• Walking into a room and blanking on why (then remembering)\n• Slower recall - the file arrives, just not instantly\n• Occasionally misplacing keys, then retracing steps successfully\n\n**Worth an evaluation:**\n• Getting confused by **familiar routes** - not forgetting where you parked, but how the drive home works\n• Asking the **same question repeatedly** without recalling the answer\n• Struggling with familiar tasks - a recipe cooked 100 times, the checkbook, the TV remote\n• Misplacing things in **odd locations** (keys in the freezer) and suspecting others took them\n• Personality or judgment shifts others notice - new paranoia, uncharacteristic decisions\n\nThe pattern: normal aging is **slower access**; concern is **lost function**. Names are the first thing everyone forgets and the least worrying; navigation, repetition, and familiar-task failure are the flags.\n\nBetween the two sits **Mild Cognitive Impairment (MCI)** - measurable decline beyond age norms, but daily life still intact. Roughly 10-15% of people with MCI progress to dementia per year - but importantly, some **stabilize or even revert**. MCI is a signal to act on every lever in this book, not a sentence.\n\nIf you're seeing the second list in yourself or someone you love: that's a medical appointment, not a Google search. And there's a powerful reason to go early - next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHERE'S THE LINE?</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Slower access vs. lost function</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">NORMAL AGING</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="16">Name comes back later</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="16">Slower but successful recall</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="16">Keys found by retracing</text>
                    <text x="290" y="385" text-anchor="middle" fill="#fff" font-size="16">Room-blank, then recall</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">The file still arrives -</text>
                    <text x="290" y="480" text-anchor="middle" fill="#888" font-size="16">just not instantly</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">GET EVALUATED</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="16">Familiar routes confusing</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="16">Same question, repeated</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="16">Familiar tasks failing</text>
                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="16">Keys in the freezer</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">Function is being lost,</text>
                    <text x="810" y="480" text-anchor="middle" fill="#888" font-size="16">not just slowed</text>
                    <rect x="150" y="640" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="698" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">IN BETWEEN: MCI</text>
                    <text x="550" y="742" text-anchor="middle" fill="#fff" font-size="17">Measurable decline, daily life intact</text>
                    <text x="550" y="777" text-anchor="middle" fill="#888" font-size="16">Some progress, some stabilize, some revert</text>
                </svg>`,
                caption: "Forgetting a name is normal; forgetting how the route works is a flag"
            }
        },
        {
            type: "quiz",
            question: "Which scenario most warrants a medical evaluation rather than reassurance about normal aging?",
            options: [
                { text: "A 68-year-old who blanks on an acquaintance's name but remembers it that evening", correct: false },
                { text: "A 72-year-old who walks into rooms and briefly forgets why she came in", correct: false },
                { text: "A 70-year-old who has started getting confused driving the familiar route to his own grocery store", correct: true },
                { text: "A 66-year-old who takes longer than she used to when learning a new phone", correct: false }
            ],
            explanation: "Delayed name recall, momentary room-blanks, and slower learning are classic normal aging - access is slower, but function is intact. Confusion on a deeply familiar route is different: it's lost function in spatial navigation, one of the earlier and more specific warning signs, and merits a proper evaluation. Early assessment matters because look-alike causes - B12 deficiency, thyroid problems, medication effects, depression, sleep apnea - are treatable, and even true MCI is a signal to pull every lever, not a verdict.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">NORMAL VS. WARNING SIGN</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Slower access or lost function?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Apply the line from the last card</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">REMEMBER</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Names are the least worrying thing to forget.</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">Navigation and repetition are the flags.</text>
                </svg>`,
                caption: "Can you place the clinical line?"
            }
        },
        {
            type: "concept",
            title: "Why Going Early Changes Everything",
            content: "People delay memory evaluations out of fear: *what if it's the bad thing?* Here's the case for going early anyway - it's stronger than most people know.\n\n**Reason 1: It might not be dementia at all.** A real fraction of cognitive complaints have **reversible causes** that mimic dementia:\n• **B12 deficiency** - common in older adults and with certain medications; treatable\n• **Thyroid dysfunction** - hypothyroidism slows cognition; treatable\n• **Medication effects** - anticholinergics, sedatives, and drug interactions are notorious foggers; adjustable\n• **Depression** - 'pseudodementia' can look strikingly like the real thing; treatable\n• **Sleep apnea** - untreated apnea degrades memory and attention nightly; treatable\n\nA standard workup screens for all of these. Skipping the appointment means potentially living with a *fixable* problem while fearing an unfixable one.\n\n**Reason 2: If it IS early-stage disease, early matters now more than ever.** Newer anti-amyloid treatments work only in early stages; trials need early enrollees; and planning - financial, legal, family - done early is done by *you*, on your terms.\n\n**Reason 3: MCI is a leverage point.** Every lever in this book - exercise, sleep, hearing, blood pressure, engagement - remains pullable at the MCI stage, and multidomain trials like FINGER deliberately recruited at-risk people.\n\nFear delays; delay costs. The scary appointment is usually the useful one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">GO EARLY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three reasons the scary appointment pays</text>
                    <rect x="150" y="170" width="800" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">1. IT MIGHT BE REVERSIBLE</text>
                    <text x="550" y="272" text-anchor="middle" fill="#fff" font-size="17">B12 - thyroid - medications</text>
                    <text x="550" y="307" text-anchor="middle" fill="#fff" font-size="17">depression - sleep apnea</text>
                    <text x="550" y="355" text-anchor="middle" fill="#888" font-size="16">All mimic dementia. All treatable.</text>
                    <text x="550" y="390" text-anchor="middle" fill="#888" font-size="16">A standard workup checks every one.</text>
                    <rect x="60" y="480" width="460" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="535" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">2. EARLY = OPTIONS</text>
                    <text x="290" y="580" text-anchor="middle" fill="#fff" font-size="16">New treatments work in</text>
                    <text x="290" y="610" text-anchor="middle" fill="#fff" font-size="16">early stages only;</text>
                    <text x="290" y="640" text-anchor="middle" fill="#fff" font-size="16">planning stays yours</text>
                    <rect x="580" y="480" width="460" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="535" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">3. MCI = LEVERAGE</text>
                    <text x="810" y="580" text-anchor="middle" fill="#fff" font-size="16">Every lever in this book</text>
                    <text x="810" y="610" text-anchor="middle" fill="#fff" font-size="16">stays pullable at the</text>
                    <text x="810" y="640" text-anchor="middle" fill="#fff" font-size="16">MCI stage</text>
                    <rect x="200" y="770" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="19">Fear delays. Delay costs.</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="17">The scary appointment is the useful one.</text>
                </svg>`,
                caption: "Reversible mimics, early treatment windows, and MCI leverage"
            }
        },
        {
            type: "concept",
            title: "The Compounding Trick: Levers Multiply",
            content: "Here's the most practical insight of the whole book, and it's about arithmetic.\n\nIf you treat the 14 levers as a to-do list - 14 separate obligations - the plan collapses under its own weight. Nobody sustains 14 parallel habits.\n\nBut the levers aren't parallel. They **stack**. Watch:\n\n**One activity: a brisk 40-minute walk, outdoors, with a friend, twice a week - wearing your hearing aids.**\n\nCount the levers:\n• **Exercise** (Lesson 5) - cardiovascular flow, BDNF\n• **Social connection** (Lesson 7) - real conversation, standing commitment\n• **Hearing** (Lesson 4) - aided conversation keeps auditory networks fed\n• **Heart-brain** (Lesson 9) - BP and glucose respond to regular walking\n• Arguably **mood** (Lesson 11) - outdoor exercise has documented antidepressant effects\n\nOne calendar entry. Five levers. This is why the **FINGER trial** (Lesson 3) used a *multidomain* design - diet, exercise, cognitive training, and vascular monitoring together - and why it worked: combined levers reinforce.\n\nOther high-density stacks:\n• **A cooking class** (Mediterranean menu): learning + social + diet\n• **A choir**: music challenge + social + purpose + breath work\n• **Dance lessons**: exercise + balance (fall protection) + music + social + novelty - possibly the densest single activity known\n\nDesign your life for stacked activities and the 14 levers collapse into three or four keystone habits. That's a plan a human can actually live.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LEVERS STACK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One walk with a friend = five levers</text>
                    <circle cx="550" cy="330" r="110" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="315" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">ONE WALK</text>
                    <text x="550" y="350" text-anchor="middle" fill="#fff" font-size="16">outdoors, with a</text>
                    <text x="550" y="378" text-anchor="middle" fill="#fff" font-size="16">friend, aids in</text>
                    <circle cx="200" cy="200" r="75" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="207" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">EXERCISE</text>
                    <circle cx="900" cy="200" r="75" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <text x="900" y="207" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="17">SOCIAL</text>
                    <circle cx="200" cy="480" r="75" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="487" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="17">HEARING</text>
                    <circle cx="900" cy="480" r="75" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="900" y="487" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">HEART</text>
                    <circle cx="550" cy="590" r="75" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="597" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">MOOD</text>
                    <line x1="275" y1="230" x2="450" y2="300" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="825" y1="230" x2="650" y2="300" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="270" y1="450" x2="450" y2="370" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="830" y1="450" x2="650" y2="370" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="515" x2="550" y2="440" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="150" y="720" width="800" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">OTHER DENSE STACKS</text>
                    <text x="550" y="818" text-anchor="middle" fill="#fff" font-size="17">Choir - cooking class - dance lessons</text>
                    <text x="550" y="850" text-anchor="middle" fill="#888" font-size="16">14 levers collapse into 3-4 keystone habits</text>
                </svg>`,
                caption: "Stacked activities turn 14 obligations into a livable plan"
            }
        },
        {
            type: "example",
            title: "Marisol Rebuilds Her Week Around Three Stacks",
            content: "Marisol is 63, recently retired from teaching, mildly hypertensive, with an audiogram showing mild loss she's been ignoring. Fourteen levers feels impossible. So she builds **three stacks** instead:\n\n**Stack 1 - Tuesday/Saturday morning: the walking group.** Four neighbors, a hilly 45-minute loop, rain or shine. Exercise + social + outdoor light (which also anchors her sleep rhythm). After Lesson 4, she finally gets the hearing aids - now the conversation on the walk isn't exhausting guesswork. Four levers, two mornings.\n\n**Stack 2 - Thursday evening: community choir.** She hasn't sung since college - genuinely hard, which is the point (Lesson 10's novelty test). Music challenge + social + purpose: they perform at a nursing home quarterly, which gives the practice a reason.\n\n**Stack 3 - daily: the Mediterranean kitchen project.** She's cooking through a Greek cookbook, one new recipe a week - new learning + MIND-style eating, and Sunday's attempt feeds her daughter's family (social again).\n\nUnderneath, the maintenance layer runs on autopilot: BP medication actually taken daily, annual numbers, eye exam booked, the home walkthrough done with her son.\n\nCount it up: exercise, social, hearing, sleep support, challenge, purpose, diet, vascular care, vision, fall-proofing - **ten-plus levers inside three enjoyable commitments and a little admin**. Nothing about her week feels like medicine. That's what a livable brain span plan looks like.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MARISOL'S WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ten levers, three stacks, zero medicine-feel</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">STACK 1: WALKING GROUP (TUE/SAT)</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="17">Exercise + social + daylight + aided hearing</text>
                    <text x="550" y="300" text-anchor="middle" fill="#888" font-size="16">Four levers, two mornings</text>
                    <rect x="150" y="370" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="422" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">STACK 2: COMMUNITY CHOIR (THU)</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="17">Hard new skill + social + performance purpose</text>
                    <text x="550" y="500" text-anchor="middle" fill="#888" font-size="16">Passes the novelty test - she's a beginner</text>
                    <rect x="150" y="570" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="622" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">STACK 3: MEDITERRANEAN KITCHEN</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="17">New recipes weekly + MIND eating + family Sundays</text>
                    <text x="550" y="700" text-anchor="middle" fill="#888" font-size="16">Learning, diet, and connection in one project</text>
                    <rect x="200" y="790" width="700" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="838" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">+ THE ADMIN LAYER</text>
                    <text x="550" y="872" text-anchor="middle" fill="#fff" font-size="16">BP meds, annual numbers, eyes, home walkthrough</text>
                </svg>`,
                caption: "Three enjoyable commitments quietly cover ten-plus levers"
            }
        },
        {
            type: "concept",
            title: "The Honest Bottom Line: What 45% Buys",
            content: "Time for the conversation this book owes you.\n\n**45% modifiable does not mean 45% of cases are preventable by you personally**, and it certainly doesn't mean doing everything right buys immunity. People who did everything right still get dementia. If that happens to you or someone you love, it will not be because you failed. Roughly **55% of risk sits outside these levers** - age itself, genes like APOE4, and biology we don't yet understand. Anyone who promises you certainty is selling something (Lesson 10's $2 million settlement says hello).\n\nWhat the evidence DOES support:\n• **Risk reduction is real.** Dementia incidence rates in North America and Europe have already **fallen roughly 13% per decade** in recent generations - likely from better education, blood pressure control, and less smoking. Populations already moved these levers, before anyone made it a plan.\n• **Delay is nearly as good as prevention.** Push onset from 78 to 85 and you may simply run out the clock on it - that's a functional win worth everything.\n• **Every lever pays twice.** The walk, the sleep, the friends, the food - each buys healthier years even in the futures where dementia comes anyway. There is no version of this plan you regret.\n\nSo hold both truths: **no guarantees - and 45% is enormous.** It's the difference between playing a hand and folding. You now know more about this than most people ever will. The remaining question was never knowledge.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST LEDGER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What ~45% does and doesn't promise</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">NOT PROMISED</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="17">Immunity</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="17">Personal guarantees</text>
                    <text x="290" y="350" text-anchor="middle" fill="#fff" font-size="17">Blame when disease comes</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="16">~55% sits outside the levers:</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">age, genes, unknown biology</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PROMISED</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="17">Real risk reduction</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="17">Delay that can win outright</text>
                    <text x="810" y="350" text-anchor="middle" fill="#fff" font-size="17">Healthier years either way</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="16">Incidence already fell ~13%</text>
                    <text x="810" y="440" text-anchor="middle" fill="#888" font-size="16">per decade in the West</text>
                    <rect x="150" y="570" width="800" height="170" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="23">NO GUARANTEES - AND 45% IS ENORMOUS</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">The difference between playing your hand</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="18">and folding it</text>
                </svg>`,
                caption: "Both truths at once: no immunity, and a hand very much worth playing"
            }
        },
        {
            type: "application",
            title: "The 30-Day Starter Plan",
            content: "Don't overhaul your life. Run this 30-day sequence - one move per week, each chosen for maximum lever-density:\n\n1. **Week 1 - Measure**: Book what you can't see. Blood pressure reading (pharmacy machines count), and if you're 50+, schedule an audiogram and an eye exam. Knowledge first; the numbers decide your priorities.\n\n2. **Week 2 - Build the keystone stack**: Recruit one person for a twice-weekly walk, outdoors, at a pace where conversation is possible but easy singing isn't. Put both slots in the calendar as recurring. This single habit touches four-plus levers.\n\n3. **Week 3 - Start the hard thing**: Pick your one genuinely difficult new skill (Lesson 10's rules: novel, challenging, three sessions a week). Sign up for the class version if it exists - accountability plus the social lever.\n\n4. **Week 4 - Fix the environment**: The one-hour home fall walkthrough. Sleep audit - consistent wake time, dark cool room, caffeine cutoff (Lesson 6). One MIND-ward swap that will actually stick: berries in, one ultra-processed regular out.\n\n5. **Day 30 - Review and book the year**: Which stack felt best? Double down on it. Then book the annual layer: physical with BP/A1C/lipids, dental cleaning, and next year's eye exam - the maintenance schedule from Lesson 11.\n\nEducation, not prescription: loop in your clinician on the medical pieces. But the calendar is yours - and it starts this week, not someday.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">30-DAY STARTER PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One move per week, maximum density</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="208" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">WEEK 1</text>
                    <text x="360" y="208" text-anchor="start" fill="#fff" font-size="17">Measure: BP, audiogram, eye exam</text>
                    <text x="360" y="242" text-anchor="start" fill="#888" font-size="15">The numbers decide your priorities</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="348" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">WEEK 2</text>
                    <text x="360" y="348" text-anchor="start" fill="#fff" font-size="17">Keystone stack: walks with a friend, 2x/week</text>
                    <text x="360" y="382" text-anchor="start" fill="#888" font-size="15">Recurring calendar slots, not intentions</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="488" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">WEEK 3</text>
                    <text x="360" y="488" text-anchor="start" fill="#fff" font-size="17">Start the one hard new thing, 3x/week</text>
                    <text x="360" y="522" text-anchor="start" fill="#888" font-size="15">Novel + challenging + scheduled</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="628" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">WEEK 4</text>
                    <text x="360" y="628" text-anchor="start" fill="#fff" font-size="17">Fix environment: falls, sleep, one food swap</text>
                    <text x="360" y="662" text-anchor="start" fill="#888" font-size="15">One hour, one audit, one swap</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="768" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">DAY 30</text>
                    <text x="360" y="768" text-anchor="start" fill="#fff" font-size="17">Review, double down, book the annual layer</text>
                    <text x="360" y="802" text-anchor="start" fill="#888" font-size="15">Physical, dental, next year's eyes</text>
                    <rect x="250" y="880" width="600" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="928" text-anchor="middle" fill="#ffd700" font-size="19">This week. Not someday.</text>
                </svg>`,
                caption: "Four weeks from knowledge to an operating system"
            }
        },
        {
            type: "quiz",
            question: "A friend finishes this book and says: 'So if I do all 14 things, I won't get dementia.' What's the most accurate correction?",
            options: [
                { text: "Correct - full adherence to the levers effectively eliminates dementia risk", correct: false },
                { text: "The levers cut and delay risk - a huge win - but ~55% of risk lies outside them, so there are no guarantees", correct: true },
                { text: "The levers only work for people without the APOE4 gene, so check your genetics first", correct: false },
                { text: "Actually, none of it matters much - dementia is essentially random at the individual level", correct: false }
            ],
            explanation: "The honest frame holds both truths. The 14 levers address roughly 45% of population risk - reducing your odds and, just as valuably, delaying onset, which can functionally win outright. But age, genes like APOE4, and unknown biology make up the rest, so immunity is never on offer, and disease is never proof of personal failure. The APOE4 option is wrong: the levers help carriers too - FINGER-style benefits appeared regardless of genotype. Risk reduction, not certainty, is the promise - and it's a promise worth working for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE FINAL FRAME</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">What does ~45% modifiable actually promise?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Hold both truths at once</text>
                    <rect x="150" y="360" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REMEMBER</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Risk reduction and delay are real.</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">Immunity was never on the menu.</text>
                </svg>`,
                caption: "The book's last and most important test"
            }
        },
        {
            type: "quote",
            content: "You could not step twice into the same river.",
            author: "Heraclitus",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">A CLOSING THOUGHT</text>
                    <rect x="100" y="150" width="900" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="230" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"You could not step twice</text>
                    <text x="160" y="275" text-anchor="start" fill="#fff" font-style="italic" font-size="22">into the same river."</text>
                    <text x="940" y="315" text-anchor="end" fill="#8b5cf6" font-size="18">- Heraclitus</text>
                    <rect x="150" y="420" width="800" height="230" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">YOUR BRAIN IS THE RIVER</text>
                    <text x="550" y="528" text-anchor="middle" fill="#fff" font-size="18">Rewiring tonight in sleep, rebuilding with</text>
                    <text x="550" y="563" text-anchor="middle" fill="#fff" font-size="18">every walk, conversation, and hard new skill.</text>
                    <text x="550" y="610" text-anchor="middle" fill="#888" font-size="16">It is never finished - which means neither are you.</text>
                    <rect x="200" y="720" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ffd700" font-size="19">This book was education, not prescription.</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="17">The next move belongs to you and your calendar.</text>
                </svg>`,
                caption: "The brain, like the river, is never the same twice - use that"
            }
        }
    ]
}
]
};
