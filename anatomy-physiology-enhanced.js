// ENHANCED ANATOMY & PHYSIOLOGY LESSONS
// Copy these lessons into data.js to replace the existing anatomy-physiology lessons
// Starting at approximately line 36677 (inside the anatomy-physiology category)

const ANATOMY_PHYSIOLOGY_LESSONS = [
    {
        id: 1,
        title: "Introduction to Human Anatomy & Physiology",
        duration: 6,
        completed: false,
        cards: [
            {
                type: "intro",
                title: "Your Body: 37 Trillion Cells Working in Harmony",
                content: "You are a living masterpiece of biological engineering. Right now, 37 trillion cells are communicating, coordinating, and keeping you alive. Your heart beats 100,000 times per day. Your lungs process 20,000 breaths. Your brain fires millions of neural signals every second. Welcome to the most sophisticated system in the known universe: the human body."
            },
            {
                type: "content",
                title: "Anatomy vs. Physiology: Visual Overview",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="28" fill="#f59e0b" font-size="20" text-anchor="middle" font-weight="bold">ANATOMY vs PHYSIOLOGY</text>
                    <rect x="30" y="50" width="300" height="120" rx="12" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="78" fill="#6366f1" font-size="18" text-anchor="middle" font-weight="bold">ANATOMY</text>
                    <text x="180" y="100" fill="#10b981" font-size="16" text-anchor="middle">= STRUCTURE</text>
                    <text x="50" y="125" fill="#e2e8f0" font-size="14">What things ARE</text>
                    <text x="50" y="148" fill="#a5b4fc" font-size="14">Gross: Organs, bones, muscles</text>
                    <text x="50" y="168" fill="#a5b4fc" font-size="14">Microscopic: Cells, tissues</text>
                    <rect x="370" y="50" width="300" height="120" rx="12" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="520" y="78" fill="#10b981" font-size="18" text-anchor="middle" font-weight="bold">PHYSIOLOGY</text>
                    <text x="520" y="100" fill="#6366f1" font-size="16" text-anchor="middle">= FUNCTION</text>
                    <text x="390" y="125" fill="#e2e8f0" font-size="14">What things DO</text>
                    <text x="390" y="148" fill="#86efac" font-size="14">How organs work</text>
                    <text x="390" y="168" fill="#86efac" font-size="14">Chemical processes</text>
                    <rect x="100" y="185" width="500" height="100" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="215" fill="#f59e0b" font-size="16" text-anchor="middle" font-weight="bold">HEART EXAMPLE</text>
                    <text x="120" y="245" fill="#6366f1" font-size="14">Anatomy: 4 chambers, muscular pump</text>
                    <text x="120" y="270" fill="#10b981" font-size="14">Physiology: Beats 60-100x/min, pumps 5L blood</text>
                </svg>`
            },
            {
                type: "concept",
                title: "Anatomy vs. Physiology Explained",
                content: "**Anatomy** = STRUCTURE (what it is)\n- Gross anatomy: structures visible to naked eye (organs, bones, muscles)\n- Microscopic anatomy: cells, tissues viewed under microscope\n- Developmental anatomy: how structures form from conception\n\n**Physiology** = FUNCTION (what it does)\n- How organs work\n- Chemical processes\n- How systems maintain homeostasis\n\nThink of it this way: Anatomy describes the heart as a four-chambered muscular pump. Physiology explains how it generates electrical impulses to contract 60-100 times per minute, pumping 5 liters of blood through 100,000 km of blood vessels."
            },
            {
                type: "quiz",
                question: "If you're studying HOW the heart pumps blood, you're studying:",
                options: [
                    { text: "Gross anatomy", correct: false },
                    { text: "Physiology", correct: true },
                    { text: "Microscopic anatomy", correct: false },
                    { text: "Developmental anatomy", correct: false }
                ],
                explanation: "Physiology is the study of FUNCTION - how things work. Studying how the heart pumps blood is studying its function. Anatomy would describe the heart's structure (4 chambers, muscular walls, valves)."
            },
            {
                type: "content",
                title: "Levels of Body Organization",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">LEVELS OF ORGANIZATION: Smallest to Largest</text>
                    <rect x="20" y="45" width="100" height="50" rx="8" fill="#ef4444"/>
                    <text x="70" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">CHEMICAL</text>
                    <text x="70" y="82" fill="white" font-size="9" text-anchor="middle">Atoms, Molecules</text>
                    <rect x="130" y="45" width="100" height="50" rx="8" fill="#f59e0b"/>
                    <text x="180" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">CELLULAR</text>
                    <text x="180" y="82" fill="white" font-size="9" text-anchor="middle">Basic unit of life</text>
                    <rect x="240" y="45" width="100" height="50" rx="8" fill="#10b981"/>
                    <text x="290" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">TISSUE</text>
                    <text x="290" y="82" fill="white" font-size="9" text-anchor="middle">Similar cells</text>
                    <rect x="350" y="45" width="100" height="50" rx="8" fill="#6366f1"/>
                    <text x="400" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">ORGAN</text>
                    <text x="400" y="82" fill="white" font-size="9" text-anchor="middle">2+ tissue types</text>
                    <rect x="460" y="45" width="100" height="50" rx="8" fill="#8b5cf6"/>
                    <text x="510" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">SYSTEM</text>
                    <text x="510" y="82" fill="white" font-size="9" text-anchor="middle">Related organs</text>
                    <rect x="570" y="45" width="110" height="50" rx="8" fill="#ec4899"/>
                    <text x="625" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">ORGANISM</text>
                    <text x="625" y="82" fill="white" font-size="9" text-anchor="middle">= YOU!</text>
                    <rect x="50" y="110" width="600" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" stroke-width="2"/>
                    <text x="350" y="135" fill="#14b8a6" font-size="14" text-anchor="middle" font-weight="bold">EXAMPLE: Building a Heart</text>
                    <text x="70" y="160" fill="#e2e8f0" font-size="12">Carbon + Oxygen + Hydrogen + Nitrogen atoms form proteins</text>
                    <text x="70" y="180" fill="#e2e8f0" font-size="12">Cardiac muscle cells + Connective + Nervous tissue = HEART organ</text>
                    <rect x="100" y="200" width="500" height="85" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                    <text x="350" y="225" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">KEY NUMBERS TO REMEMBER</text>
                    <text x="350" y="250" fill="#e2e8f0" font-size="14" text-anchor="middle">37 TRILLION cells | 11 Body Systems | 206 Bones | 600+ Muscles</text>
                    <text x="350" y="275" fill="#a5b4fc" font-size="12" text-anchor="middle">All working together = YOU (the organism)</text>
                </svg>`
            },
            {
                type: "mnemonic",
                title: "Remember the Levels of Organization",
                content: "**MNEMONIC: 'Clever Cells Take Over Systems Openly'**\n\n**C**hemical - Atoms and molecules (C, H, O, N forming proteins, DNA)\n**C**ellular - Cells are the basic unit of life\n**T**issue - Groups of similar cells working together\n**O**rgan - Two or more tissue types combined\n**S**ystem - Related organs working together\n**O**rganism - All systems functioning as one = YOU!\n\n**Think of building a house:**\n- Chemical = building materials (atoms)\n- Cellular = bricks (cells)\n- Tissue = walls made of bricks\n- Organ = a room with walls, floor, ceiling\n- System = electrical system, plumbing system\n- Organism = the complete house!"
            },
            {
                type: "content",
                title: "The 11 Body Systems",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="22" fill="#f59e0b" font-size="16" text-anchor="middle" font-weight="bold">THE 11 BODY SYSTEMS YOU'LL MASTER</text>
                    <rect x="15" y="38" width="125" height="52" rx="6" fill="#ef4444" opacity="0.8"/>
                    <text x="77" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">INTEGUMENTARY</text>
                    <text x="77" y="70" fill="#fecaca" font-size="9" text-anchor="middle">Skin, Hair, Nails</text>
                    <text x="77" y="84" fill="#fecaca" font-size="8" text-anchor="middle">Protection + Temp</text>
                    <rect x="150" y="38" width="125" height="52" rx="6" fill="#f59e0b" opacity="0.8"/>
                    <text x="212" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">SKELETAL</text>
                    <text x="212" y="70" fill="#fef3c7" font-size="9" text-anchor="middle">206 Bones</text>
                    <text x="212" y="84" fill="#fef3c7" font-size="8" text-anchor="middle">Support + Protect</text>
                    <rect x="285" y="38" width="125" height="52" rx="6" fill="#10b981" opacity="0.8"/>
                    <text x="347" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">MUSCULAR</text>
                    <text x="347" y="70" fill="#d1fae5" font-size="9" text-anchor="middle">600+ Muscles</text>
                    <text x="347" y="84" fill="#d1fae5" font-size="8" text-anchor="middle">Movement + Heat</text>
                    <rect x="420" y="38" width="125" height="52" rx="6" fill="#6366f1" opacity="0.8"/>
                    <text x="482" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">NERVOUS</text>
                    <text x="482" y="70" fill="#c7d2fe" font-size="9" text-anchor="middle">Brain + Nerves</text>
                    <text x="482" y="84" fill="#c7d2fe" font-size="8" text-anchor="middle">Control Center</text>
                    <rect x="555" y="38" width="130" height="52" rx="6" fill="#8b5cf6" opacity="0.8"/>
                    <text x="620" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">ENDOCRINE</text>
                    <text x="620" y="70" fill="#ddd6fe" font-size="9" text-anchor="middle">Hormones</text>
                    <text x="620" y="84" fill="#ddd6fe" font-size="8" text-anchor="middle">Long-term Regulation</text>
                    <rect x="15" y="100" width="125" height="52" rx="6" fill="#ec4899" opacity="0.8"/>
                    <text x="77" y="117" fill="white" font-size="10" text-anchor="middle" font-weight="bold">CARDIOVASCULAR</text>
                    <text x="77" y="132" fill="#fbcfe8" font-size="9" text-anchor="middle">Heart + Vessels</text>
                    <text x="77" y="146" fill="#fbcfe8" font-size="8" text-anchor="middle">Transport O2</text>
                    <rect x="150" y="100" width="125" height="52" rx="6" fill="#14b8a6" opacity="0.8"/>
                    <text x="212" y="117" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LYMPHATIC</text>
                    <text x="212" y="132" fill="#99f6e4" font-size="9" text-anchor="middle">Immune Defense</text>
                    <text x="212" y="146" fill="#99f6e4" font-size="8" text-anchor="middle">Fight Disease</text>
                    <rect x="285" y="100" width="125" height="52" rx="6" fill="#06b6d4" opacity="0.8"/>
                    <text x="347" y="117" fill="white" font-size="10" text-anchor="middle" font-weight="bold">RESPIRATORY</text>
                    <text x="347" y="132" fill="#cffafe" font-size="9" text-anchor="middle">Lungs</text>
                    <text x="347" y="146" fill="#cffafe" font-size="8" text-anchor="middle">O2 in, CO2 out</text>
                    <rect x="420" y="100" width="125" height="52" rx="6" fill="#84cc16" opacity="0.8"/>
                    <text x="482" y="117" fill="white" font-size="10" text-anchor="middle" font-weight="bold">DIGESTIVE</text>
                    <text x="482" y="132" fill="#ecfccb" font-size="9" text-anchor="middle">GI Tract</text>
                    <text x="482" y="146" fill="#ecfccb" font-size="8" text-anchor="middle">Break Down Food</text>
                    <rect x="555" y="100" width="130" height="52" rx="6" fill="#eab308" opacity="0.8"/>
                    <text x="620" y="117" fill="white" font-size="10" text-anchor="middle" font-weight="bold">URINARY</text>
                    <text x="620" y="132" fill="#fef9c3" font-size="9" text-anchor="middle">Kidneys</text>
                    <text x="620" y="146" fill="#fef9c3" font-size="8" text-anchor="middle">Filter + Balance</text>
                    <rect x="250" y="162" width="200" height="42" rx="6" fill="#f43f5e" opacity="0.8"/>
                    <text x="350" y="179" fill="white" font-size="11" text-anchor="middle" font-weight="bold">REPRODUCTIVE</text>
                    <text x="350" y="194" fill="#fecdd3" font-size="10" text-anchor="middle">Create New Life + Sex Hormones</text>
                    <rect x="50" y="215" width="600" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="238" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="bold">MEMORY: I Seem Most Nervous, Even Cardiovascular Loves Red Donuts Under Rugs</text>
                    <text x="350" y="258" fill="#a5b4fc" font-size="11" text-anchor="middle">Integumentary, Skeletal, Muscular, Nervous, Endocrine, Cardiovascular,</text>
                    <text x="350" y="275" fill="#a5b4fc" font-size="11" text-anchor="middle">Lymphatic, Respiratory, Digestive, Urinary, Reproductive</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "What is the correct order from smallest to largest level of organization?",
                options: [
                    { text: "Cell - Tissue - Chemical - Organ - System", correct: false },
                    { text: "Chemical - Cell - Tissue - Organ - System - Organism", correct: true },
                    { text: "Organ - Tissue - Cell - System - Organism", correct: false },
                    { text: "Tissue - Cell - Organ - Chemical - Organism", correct: false }
                ],
                explanation: "The correct order from smallest to largest is: Chemical (atoms/molecules) - Cellular (cells) - Tissue (groups of cells) - Organ (multiple tissues) - System (related organs) - Organism (you!). Remember: 'Clever Cells Take Over Systems Openly'!"
            },
            {
                type: "content",
                title: "Homeostasis: Your Body's Balance",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">HOMEOSTASIS: Your Body's Balance</text>
                    <rect x="150" y="38" width="400" height="32" rx="8" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/>
                    <text x="350" y="60" fill="#e2e8f0" font-size="14" text-anchor="middle">Maintaining STABLE internal conditions</text>
                    <text x="100" y="92" fill="#10b981" font-size="14" font-weight="bold">What Your Body Regulates:</text>
                    <rect x="30" y="102" width="150" height="38" rx="6" fill="#ef4444" opacity="0.7"/>
                    <text x="105" y="117" fill="white" font-size="11" text-anchor="middle" font-weight="bold">TEMPERATURE</text>
                    <text x="105" y="133" fill="#fecaca" font-size="10" text-anchor="middle">98.6F (37C)</text>
                    <rect x="190" y="102" width="150" height="38" rx="6" fill="#6366f1" opacity="0.7"/>
                    <text x="265" y="117" fill="white" font-size="11" text-anchor="middle" font-weight="bold">BLOOD pH</text>
                    <text x="265" y="133" fill="#c7d2fe" font-size="10" text-anchor="middle">7.35 - 7.45</text>
                    <rect x="350" y="102" width="150" height="38" rx="6" fill="#10b981" opacity="0.7"/>
                    <text x="425" y="117" fill="white" font-size="11" text-anchor="middle" font-weight="bold">GLUCOSE</text>
                    <text x="425" y="133" fill="#d1fae5" font-size="10" text-anchor="middle">70-100 mg/dL</text>
                    <rect x="510" y="102" width="160" height="38" rx="6" fill="#f59e0b" opacity="0.7"/>
                    <text x="590" y="117" fill="white" font-size="11" text-anchor="middle" font-weight="bold">BLOOD PRESSURE</text>
                    <text x="590" y="133" fill="#fef3c7" font-size="10" text-anchor="middle">120/80 mmHg</text>
                    <text x="350" y="165" fill="#ec4899" font-size="16" text-anchor="middle" font-weight="bold">NEGATIVE FEEDBACK LOOP</text>
                    <rect x="40" y="180" width="90" height="42" rx="8" fill="#ef4444"/>
                    <text x="85" y="197" fill="white" font-size="10" text-anchor="middle" font-weight="bold">STIMULUS</text>
                    <text x="85" y="213" fill="#fecaca" font-size="8" text-anchor="middle">Change detected</text>
                    <rect x="160" y="180" width="90" height="42" rx="8" fill="#f59e0b"/>
                    <text x="205" y="197" fill="white" font-size="10" text-anchor="middle" font-weight="bold">RECEPTOR</text>
                    <text x="205" y="213" fill="#fef3c7" font-size="8" text-anchor="middle">Senses change</text>
                    <rect x="280" y="180" width="90" height="42" rx="8" fill="#10b981"/>
                    <text x="325" y="197" fill="white" font-size="10" text-anchor="middle" font-weight="bold">CONTROL</text>
                    <text x="325" y="213" fill="#d1fae5" font-size="8" text-anchor="middle">Processes info</text>
                    <rect x="400" y="180" width="90" height="42" rx="8" fill="#6366f1"/>
                    <text x="445" y="197" fill="white" font-size="10" text-anchor="middle" font-weight="bold">EFFECTOR</text>
                    <text x="445" y="213" fill="#c7d2fe" font-size="8" text-anchor="middle">Acts to fix</text>
                    <rect x="520" y="180" width="100" height="42" rx="8" fill="#8b5cf6"/>
                    <text x="570" y="197" fill="white" font-size="10" text-anchor="middle" font-weight="bold">RESPONSE</text>
                    <text x="570" y="213" fill="#ddd6fe" font-size="8" text-anchor="middle">Back to normal</text>
                    <path d="M130 201 L160 201" stroke="#f59e0b" stroke-width="2"/>
                    <path d="M250 201 L280 201" stroke="#10b981" stroke-width="2"/>
                    <path d="M370 201 L400 201" stroke="#6366f1" stroke-width="2"/>
                    <path d="M490 201 L520 201" stroke="#8b5cf6" stroke-width="2"/>
                    <path d="M570 230 L570 255 L85 255 L85 230" stroke="#ec4899" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
                    <text x="350" y="280" fill="#ec4899" font-size="11" text-anchor="middle">Negative feedback returns system to set point (like a thermostat)</text>
                </svg>`
            },
            {
                type: "mnemonic",
                title: "Remember: Homeostasis Values",
                content: "**MNEMONIC for key homeostasis values:**\n\n**'97-7-100-120'** - The Body's Magic Numbers:\n\n- **97-99F** = Normal body temperature (98.6F average)\n- **7.35-7.45** = Blood pH (slightly alkaline)\n- **70-100** = Fasting blood glucose (mg/dL)\n- **120/80** = Normal blood pressure (mmHg)\n\n**For Negative Feedback Loop - 'SRCEF':**\n**S**timulus - Something changes\n**R**eceptor - Detects the change\n**C**ontrol center - Processes and decides\n**E**ffector - Takes action\n**F**eedback - Returns to normal\n\n**Think of a thermostat:** Room gets hot (stimulus) - Thermometer detects (receptor) - Thermostat decides (control) - AC turns on (effector) - Room cools (feedback)"
            },
            {
                type: "content",
                title: "Anatomical Position and Directions",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="22" fill="#f59e0b" font-size="16" text-anchor="middle" font-weight="bold">ANATOMICAL POSITION and DIRECTIONAL TERMS</text>
                    <rect x="20" y="38" width="180" height="170" rx="10" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
                    <text x="110" y="58" fill="#6366f1" font-size="12" text-anchor="middle" font-weight="bold">Standard Position</text>
                    <circle cx="110" cy="88" r="15" fill="#10b981" opacity="0.7"/>
                    <text x="110" y="92" fill="white" font-size="8" text-anchor="middle">HEAD</text>
                    <rect x="95" y="103" width="30" height="50" rx="5" fill="#6366f1" opacity="0.7"/>
                    <rect x="70" y="106" width="25" height="8" rx="3" fill="#8b5cf6" opacity="0.7"/>
                    <rect x="125" y="106" width="25" height="8" rx="3" fill="#8b5cf6" opacity="0.7"/>
                    <rect x="95" y="153" width="12" height="40" rx="3" fill="#ec4899" opacity="0.7"/>
                    <rect x="113" y="153" width="12" height="40" rx="3" fill="#ec4899" opacity="0.7"/>
                    <text x="110" y="200" fill="#a5b4fc" font-size="9" text-anchor="middle">Standing upright</text>
                    <text x="110" y="213" fill="#a5b4fc" font-size="9" text-anchor="middle">Palms forward</text>
                    <rect x="220" y="38" width="230" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                    <text x="335" y="58" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">Directional Terms</text>
                    <text x="240" y="80" fill="#ef4444" font-size="11" font-weight="bold">Superior/Inferior</text>
                    <text x="240" y="94" fill="#e2e8f0" font-size="10">Above / Below</text>
                    <text x="240" y="113" fill="#f59e0b" font-size="11" font-weight="bold">Anterior/Posterior</text>
                    <text x="240" y="127" fill="#e2e8f0" font-size="10">Front / Back</text>
                    <text x="240" y="146" fill="#10b981" font-size="11" font-weight="bold">Medial/Lateral</text>
                    <text x="240" y="160" fill="#e2e8f0" font-size="10">Toward / Away midline</text>
                    <text x="240" y="179" fill="#6366f1" font-size="11" font-weight="bold">Proximal/Distal</text>
                    <text x="240" y="193" fill="#e2e8f0" font-size="10">Near / Far from trunk</text>
                    <rect x="470" y="38" width="210" height="170" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
                    <text x="575" y="58" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Body Planes</text>
                    <rect x="490" y="73" width="170" height="35" rx="6" fill="#6366f1" opacity="0.5"/>
                    <text x="575" y="90" fill="white" font-size="11" text-anchor="middle" font-weight="bold">SAGITTAL</text>
                    <text x="575" y="104" fill="#c7d2fe" font-size="9" text-anchor="middle">Divides Left / Right</text>
                    <rect x="490" y="115" width="170" height="35" rx="6" fill="#10b981" opacity="0.5"/>
                    <text x="575" y="132" fill="white" font-size="11" text-anchor="middle" font-weight="bold">FRONTAL (Coronal)</text>
                    <text x="575" y="146" fill="#86efac" font-size="9" text-anchor="middle">Divides Front / Back</text>
                    <rect x="490" y="157" width="170" height="35" rx="6" fill="#f59e0b" opacity="0.5"/>
                    <text x="575" y="174" fill="white" font-size="11" text-anchor="middle" font-weight="bold">TRANSVERSE</text>
                    <text x="575" y="188" fill="#fef3c7" font-size="9" text-anchor="middle">Divides Top / Bottom</text>
                    <rect x="50" y="220" width="600" height="65" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="245" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="bold">MEMORY TIP: SFT - Sword, Front door, Table</text>
                    <text x="350" y="270" fill="#e2e8f0" font-size="11" text-anchor="middle">Sagittal = Sword L/R | Frontal = Door front/back | Transverse = Table top/bottom</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "What is the primary mechanism by which your body maintains homeostasis?",
                options: [
                    { text: "Positive feedback loops that amplify changes", correct: false },
                    { text: "Negative feedback loops that counteract changes", correct: true },
                    { text: "Random cellular responses", correct: false },
                    { text: "Conscious control of all processes", correct: false }
                ],
                explanation: "Negative feedback is the primary homeostatic mechanism. When a variable deviates from its set point, the body responds to bring it back to normal - like a thermostat. Positive feedback is rare and used only in specific situations (childbirth, blood clotting)."
            }
        ]
    },
    {
        id: 2,
        title: "Cells: The Basic Unit of Life",
        duration: 7,
        completed: false,
        cards: [
            {
                type: "intro",
                title: "The Living Building Blocks",
                content: "Every living thing on Earth - from bacteria to blue whales - is made of cells. You have about 37 trillion of them. Each one is a self-contained living system with its own powerplant, waste disposal, manufacturing facilities, and control center. Understanding cells is understanding life itself."
            },
            {
                type: "content",
                title: "Cell Theory: The Foundation",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="28" fill="#f59e0b" font-size="20" text-anchor="middle" font-weight="bold">THE THREE PRINCIPLES OF CELL THEORY</text>
                    <rect x="30" y="50" width="200" height="100" rx="12" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="80" fill="#6366f1" font-size="40" text-anchor="middle" font-weight="bold">1</text>
                    <text x="130" y="105" fill="#e2e8f0" font-size="12" text-anchor="middle">All living things</text>
                    <text x="130" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">are made of cells</text>
                    <text x="130" y="142" fill="#a5b4fc" font-size="10" text-anchor="middle">(one or more)</text>
                    <rect x="250" y="50" width="200" height="100" rx="12" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="80" fill="#10b981" font-size="40" text-anchor="middle" font-weight="bold">2</text>
                    <text x="350" y="105" fill="#e2e8f0" font-size="12" text-anchor="middle">The cell is the</text>
                    <text x="350" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">basic unit of life</text>
                    <text x="350" y="142" fill="#86efac" font-size="10" text-anchor="middle">(smallest living thing)</text>
                    <rect x="470" y="50" width="200" height="100" rx="12" fill="#ec4899" opacity="0.3" stroke="#ec4899" stroke-width="2"/>
                    <text x="570" y="80" fill="#ec4899" font-size="40" text-anchor="middle" font-weight="bold">3</text>
                    <text x="570" y="105" fill="#e2e8f0" font-size="12" text-anchor="middle">All cells come from</text>
                    <text x="570" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">pre-existing cells</text>
                    <text x="570" y="142" fill="#fbcfe8" font-size="10" text-anchor="middle">(through division)</text>
                    <rect x="100" y="170" width="500" height="115" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="198" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">ALL CELLS HAVE THESE BASIC COMPONENTS:</text>
                    <text x="150" y="225" fill="#6366f1" font-size="12" font-weight="bold">Plasma Membrane</text>
                    <text x="150" y="242" fill="#e2e8f0" font-size="10">Controls entry/exit</text>
                    <text x="350" y="225" fill="#10b981" font-size="12" font-weight="bold">Cytoplasm</text>
                    <text x="350" y="242" fill="#e2e8f0" font-size="10">Jelly-like filling</text>
                    <text x="550" y="225" fill="#ec4899" font-size="12" font-weight="bold">DNA</text>
                    <text x="550" y="242" fill="#e2e8f0" font-size="10">Genetic instructions</text>
                    <text x="350" y="270" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">+ Ribosomes (protein factories in ALL cells)</text>
                </svg>`
            },
            {
                type: "content",
                title: "Prokaryotic vs Eukaryotic Cells",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">PROKARYOTIC vs EUKARYOTIC CELLS</text>
                    <rect x="30" y="45" width="300" height="195" rx="12" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
                    <text x="180" y="70" fill="#ef4444" font-size="16" text-anchor="middle" font-weight="bold">PROKARYOTIC</text>
                    <text x="180" y="90" fill="#fca5a5" font-size="12" text-anchor="middle">(Bacteria, Archaea)</text>
                    <circle cx="180" cy="150" r="50" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
                    <ellipse cx="180" cy="150" rx="20" ry="10" fill="#ef4444" opacity="0.5"/>
                    <text x="180" y="154" fill="white" font-size="8" text-anchor="middle">DNA (no nucleus)</text>
                    <circle cx="160" cy="170" r="3" fill="#f59e0b"/>
                    <circle cx="175" cy="175" r="3" fill="#f59e0b"/>
                    <circle cx="190" cy="172" r="3" fill="#f59e0b"/>
                    <text x="50" y="215" fill="#e2e8f0" font-size="11">- No nucleus (DNA floats free)</text>
                    <text x="50" y="232" fill="#e2e8f0" font-size="11">- No membrane-bound organelles</text>
                    <text x="50" y="249" fill="#e2e8f0" font-size="11">- Small: 1-10 micrometers</text>
                    <rect x="370" y="45" width="300" height="195" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
                    <text x="520" y="70" fill="#6366f1" font-size="16" text-anchor="middle" font-weight="bold">EUKARYOTIC</text>
                    <text x="520" y="90" fill="#a5b4fc" font-size="12" text-anchor="middle">(Animals, Plants, Fungi, Protists)</text>
                    <ellipse cx="520" cy="150" rx="70" ry="50" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
                    <circle cx="520" cy="140" r="20" fill="#6366f1" opacity="0.5" stroke="#6366f1"/>
                    <text x="520" y="144" fill="white" font-size="7" text-anchor="middle">NUCLEUS</text>
                    <ellipse cx="480" cy="165" rx="12" ry="6" fill="#10b981" opacity="0.7"/>
                    <ellipse cx="555" cy="160" rx="12" ry="6" fill="#10b981" opacity="0.7"/>
                    <rect x="495" y="170" width="15" height="8" rx="2" fill="#ec4899" opacity="0.7"/>
                    <text x="390" y="215" fill="#e2e8f0" font-size="11">- True nucleus with DNA</text>
                    <text x="390" y="232" fill="#e2e8f0" font-size="11">- Membrane-bound organelles</text>
                    <text x="390" y="249" fill="#e2e8f0" font-size="11">- Large: 10-100 micrometers</text>
                    <rect x="150" y="250" width="400" height="40" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="275" fill="#10b981" font-size="14" text-anchor="middle" font-weight="bold">YOUR CELLS ARE EUKARYOTIC!</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "What makes eukaryotic cells different from prokaryotic cells?",
                options: [
                    { text: "Eukaryotic cells have no DNA", correct: false },
                    { text: "Eukaryotic cells have a true nucleus and membrane-bound organelles", correct: true },
                    { text: "Prokaryotic cells are larger", correct: false },
                    { text: "Prokaryotic cells have more organelles", correct: false }
                ],
                explanation: "Eukaryotic cells (like yours!) have a TRUE NUCLEUS containing DNA, plus membrane-bound organelles like mitochondria, ER, and Golgi. Prokaryotes (bacteria) have DNA floating freely in cytoplasm and no membrane-bound organelles."
            },
            {
                type: "content",
                title: "The Cell's Organelles",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="22" fill="#f59e0b" font-size="16" text-anchor="middle" font-weight="bold">MAJOR ORGANELLES AND THEIR FUNCTIONS</text>
                    <rect x="20" y="38" width="155" height="80" rx="8" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/>
                    <text x="97" y="58" fill="#6366f1" font-size="12" text-anchor="middle" font-weight="bold">NUCLEUS</text>
                    <text x="97" y="75" fill="#e2e8f0" font-size="10" text-anchor="middle">Control center</text>
                    <text x="97" y="90" fill="#a5b4fc" font-size="9" text-anchor="middle">Contains DNA</text>
                    <text x="97" y="105" fill="#a5b4fc" font-size="9" text-anchor="middle">(genetic instructions)</text>
                    <rect x="185" y="38" width="155" height="80" rx="8" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
                    <text x="262" y="58" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">MITOCHONDRIA</text>
                    <text x="262" y="75" fill="#e2e8f0" font-size="10" text-anchor="middle">Powerhouse</text>
                    <text x="262" y="90" fill="#86efac" font-size="9" text-anchor="middle">Makes ATP (energy)</text>
                    <text x="262" y="105" fill="#86efac" font-size="9" text-anchor="middle">40kg ATP/day!</text>
                    <rect x="350" y="38" width="155" height="80" rx="8" fill="#ec4899" opacity="0.3" stroke="#ec4899" stroke-width="2"/>
                    <text x="427" y="58" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">RIBOSOMES</text>
                    <text x="427" y="75" fill="#e2e8f0" font-size="10" text-anchor="middle">Protein factory</text>
                    <text x="427" y="90" fill="#fbcfe8" font-size="9" text-anchor="middle">Reads mRNA</text>
                    <text x="427" y="105" fill="#fbcfe8" font-size="9" text-anchor="middle">Builds proteins</text>
                    <rect x="515" y="38" width="165" height="80" rx="8" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="2"/>
                    <text x="597" y="58" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">ENDOPLASMIC</text>
                    <text x="597" y="72" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">RETICULUM</text>
                    <text x="597" y="90" fill="#fef3c7" font-size="9" text-anchor="middle">Rough ER: proteins</text>
                    <text x="597" y="105" fill="#fef3c7" font-size="9" text-anchor="middle">Smooth ER: lipids</text>
                    <rect x="20" y="128" width="155" height="80" rx="8" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="97" y="148" fill="#8b5cf6" font-size="12" text-anchor="middle" font-weight="bold">GOLGI APPARATUS</text>
                    <text x="97" y="165" fill="#e2e8f0" font-size="10" text-anchor="middle">Shipping dept</text>
                    <text x="97" y="180" fill="#ddd6fe" font-size="9" text-anchor="middle">Packages proteins</text>
                    <text x="97" y="195" fill="#ddd6fe" font-size="9" text-anchor="middle">Ships to destination</text>
                    <rect x="185" y="128" width="155" height="80" rx="8" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2"/>
                    <text x="262" y="148" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">LYSOSOMES</text>
                    <text x="262" y="165" fill="#e2e8f0" font-size="10" text-anchor="middle">Waste disposal</text>
                    <text x="262" y="180" fill="#fecaca" font-size="9" text-anchor="middle">Digestive enzymes</text>
                    <text x="262" y="195" fill="#fecaca" font-size="9" text-anchor="middle">Break down waste</text>
                    <rect x="350" y="128" width="155" height="80" rx="8" fill="#14b8a6" opacity="0.3" stroke="#14b8a6" stroke-width="2"/>
                    <text x="427" y="148" fill="#14b8a6" font-size="11" text-anchor="middle" font-weight="bold">PLASMA MEMBRANE</text>
                    <text x="427" y="165" fill="#e2e8f0" font-size="10" text-anchor="middle">Cell boundary</text>
                    <text x="427" y="180" fill="#99f6e4" font-size="9" text-anchor="middle">Selective barrier</text>
                    <text x="427" y="195" fill="#99f6e4" font-size="9" text-anchor="middle">Controls entry/exit</text>
                    <rect x="515" y="128" width="165" height="80" rx="8" fill="#06b6d4" opacity="0.3" stroke="#06b6d4" stroke-width="2"/>
                    <text x="597" y="148" fill="#06b6d4" font-size="12" text-anchor="middle" font-weight="bold">CYTOSKELETON</text>
                    <text x="597" y="165" fill="#e2e8f0" font-size="10" text-anchor="middle">Cell scaffold</text>
                    <text x="597" y="180" fill="#cffafe" font-size="9" text-anchor="middle">Shape + support</text>
                    <text x="597" y="195" fill="#cffafe" font-size="9" text-anchor="middle">Movement</text>
                    <rect x="100" y="220" width="500" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="245" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="bold">MEMORY: "Never Make Rude Elderly Gentlemen Lose Patience, Charlie"</text>
                    <text x="350" y="268" fill="#e2e8f0" font-size="11" text-anchor="middle">Nucleus, Mitochondria, Ribosomes, ER, Golgi, Lysosomes, Plasma membrane, Cytoskeleton</text>
                </svg>`
            },
            {
                type: "mnemonic",
                title: "Remember Cell Organelles",
                content: "**MNEMONIC: 'Never Make Rude Elderly Gentlemen Lose Patience, Charlie'**\n\n**N**ucleus - Control center with DNA (the brain)\n**M**itochondria - Powerhouse making ATP (the power plant)\n**R**ibosomes - Protein factories (the assembly line)\n**E**ndoplasmic Reticulum - Manufacturing (rough = proteins, smooth = lipids)\n**G**olgi Apparatus - Packaging and shipping (the post office)\n**L**ysosomes - Waste disposal (the recycling center)\n**P**lasma membrane - Cell boundary (the security gate)\n**C**ytoskeleton - Support structure (the scaffolding)\n\n**BONUS - Mitochondria Energy Fact:**\nYour body uses about 40 kg (88 lbs) of ATP per DAY! You don't carry 88 lbs of ATP - you recycle it constantly. Every molecule of ATP is recycled 500-750 times daily!"
            },
            {
                type: "quiz",
                question: "What is the primary function of mitochondria?",
                options: [
                    { text: "Store DNA", correct: false },
                    { text: "Produce ATP (cellular energy)", correct: true },
                    { text: "Make proteins", correct: false },
                    { text: "Control cell division", correct: false }
                ],
                explanation: "Mitochondria are the POWERHOUSES of the cell. They convert nutrients (glucose) and oxygen into ATP through cellular respiration. Your body produces about 40 kg of ATP daily! More mitochondria = more energy (exercise increases mitochondrial density)."
            },
            {
                type: "content",
                title: "The Plasma Membrane",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">THE PLASMA MEMBRANE: Phospholipid Bilayer</text>
                    <rect x="50" y="100" width="600" height="100" fill="#1e293b" stroke="#6366f1" stroke-width="2" rx="5"/>
                    <text x="350" y="90" fill="#6366f1" font-size="12" text-anchor="middle">OUTSIDE THE CELL (extracellular)</text>
                    <text x="350" y="220" fill="#6366f1" font-size="12" text-anchor="middle">INSIDE THE CELL (cytoplasm)</text>
                    <g transform="translate(80, 105)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="8" x2="-5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="8" x2="5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(120, 105)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="8" x2="-5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="8" x2="5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(160, 105)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="8" x2="-5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="8" x2="5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(200, 105)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="8" x2="-5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="8" x2="5" y2="45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(80, 195)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="-8" x2="-5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="-8" x2="5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(120, 195)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="-8" x2="-5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="-8" x2="5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(160, 195)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="-8" x2="-5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="-8" x2="5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <g transform="translate(200, 195)">
                        <circle cx="0" cy="0" r="8" fill="#6366f1"/>
                        <line x1="0" y1="-8" x2="-5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="0" y1="-8" x2="5" y2="-45" stroke="#f59e0b" stroke-width="2"/>
                    </g>
                    <rect x="280" y="115" width="60" height="70" rx="8" fill="#10b981" opacity="0.7"/>
                    <text x="310" y="155" fill="white" font-size="9" text-anchor="middle">Channel</text>
                    <text x="310" y="168" fill="white" font-size="9" text-anchor="middle">Protein</text>
                    <rect x="400" y="105" width="80" height="90" rx="10" fill="#ec4899" opacity="0.7"/>
                    <text x="440" y="155" fill="white" font-size="9" text-anchor="middle">Transport</text>
                    <text x="440" y="168" fill="white" font-size="9" text-anchor="middle">Protein</text>
                    <text x="30" y="55" fill="#6366f1" font-size="11">Hydrophilic heads</text>
                    <text x="30" y="70" fill="#a5b4fc" font-size="10">(water-loving)</text>
                    <text x="560" y="55" fill="#f59e0b" font-size="11">Hydrophobic tails</text>
                    <text x="560" y="70" fill="#fef3c7" font-size="10">(water-fearing)</text>
                    <rect x="120" y="240" width="460" height="50" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="262" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">SELECTIVE PERMEABILITY: Only certain things can pass!</text>
                    <text x="350" y="280" fill="#e2e8f0" font-size="11" text-anchor="middle">Small nonpolar molecules pass easily | Ions and large molecules need channels/transporters</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "Why is the plasma membrane called 'selectively permeable'?",
                options: [
                    { text: "It allows everything to pass through freely", correct: false },
                    { text: "It only allows certain substances to enter or exit the cell", correct: true },
                    { text: "It blocks all substances from entering", correct: false },
                    { text: "It only works during certain times of day", correct: false }
                ],
                explanation: "The plasma membrane is selectively permeable because it controls what enters and exits the cell. Small nonpolar molecules (like O2, CO2) pass easily. Water passes through aquaporins. Ions and large molecules need special channel or transport proteins to cross."
            }
        ]
    },
    {
        id: 3,
        title: "Tissues: Epithelial, Connective, Muscle, Nervous",
        duration: 6,
        completed: false,
        cards: [
            {
                type: "intro",
                title: "From Cells to Tissues",
                content: "Cells don't work alone. Groups of similar cells working together form TISSUES - the next level of organization. Your body has four primary tissue types, each specialized for specific functions. Understanding tissues is key to understanding how organs work."
            },
            {
                type: "content",
                title: "The Four Tissue Types",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">THE FOUR PRIMARY TISSUE TYPES</text>
                    <rect x="20" y="45" width="155" height="120" rx="10" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/>
                    <text x="97" y="70" fill="#6366f1" font-size="14" text-anchor="middle" font-weight="bold">EPITHELIAL</text>
                    <text x="97" y="90" fill="#e2e8f0" font-size="11" text-anchor="middle">Covering + Lining</text>
                    <text x="30" y="110" fill="#a5b4fc" font-size="10">- Skin surface</text>
                    <text x="30" y="125" fill="#a5b4fc" font-size="10">- Lines organs/cavities</text>
                    <text x="30" y="140" fill="#a5b4fc" font-size="10">- Forms glands</text>
                    <text x="30" y="155" fill="#10b981" font-size="9">AVASCULAR (no blood)</text>
                    <rect x="185" y="45" width="155" height="120" rx="10" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
                    <text x="262" y="70" fill="#10b981" font-size="14" text-anchor="middle" font-weight="bold">CONNECTIVE</text>
                    <text x="262" y="90" fill="#e2e8f0" font-size="11" text-anchor="middle">Support + Connection</text>
                    <text x="195" y="110" fill="#86efac" font-size="10">- Bone, cartilage</text>
                    <text x="195" y="125" fill="#86efac" font-size="10">- Tendons, ligaments</text>
                    <text x="195" y="140" fill="#86efac" font-size="10">- Fat, blood</text>
                    <text x="195" y="155" fill="#f59e0b" font-size="9">Has extracellular matrix</text>
                    <rect x="350" y="45" width="155" height="120" rx="10" fill="#ec4899" opacity="0.3" stroke="#ec4899" stroke-width="2"/>
                    <text x="427" y="70" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">MUSCLE</text>
                    <text x="427" y="90" fill="#e2e8f0" font-size="11" text-anchor="middle">Movement</text>
                    <text x="360" y="110" fill="#fbcfe8" font-size="10">- Skeletal (voluntary)</text>
                    <text x="360" y="125" fill="#fbcfe8" font-size="10">- Cardiac (heart)</text>
                    <text x="360" y="140" fill="#fbcfe8" font-size="10">- Smooth (organs)</text>
                    <text x="360" y="155" fill="#f59e0b" font-size="9">Contractile cells</text>
                    <rect x="515" y="45" width="165" height="120" rx="10" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="597" y="70" fill="#8b5cf6" font-size="14" text-anchor="middle" font-weight="bold">NERVOUS</text>
                    <text x="597" y="90" fill="#e2e8f0" font-size="11" text-anchor="middle">Communication</text>
                    <text x="525" y="110" fill="#ddd6fe" font-size="10">- Neurons (signals)</text>
                    <text x="525" y="125" fill="#ddd6fe" font-size="10">- Neuroglia (support)</text>
                    <text x="525" y="140" fill="#ddd6fe" font-size="10">- Brain, nerves</text>
                    <text x="525" y="155" fill="#f59e0b" font-size="9">Electrical impulses</text>
                    <rect x="100" y="180" width="500" height="105" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="205" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">MEMORY: "Even Cowboys Must Navigate"</text>
                    <text x="350" y="228" fill="#e2e8f0" font-size="12" text-anchor="middle">Epithelial - Connective - Muscle - Nervous</text>
                    <text x="350" y="252" fill="#a5b4fc" font-size="11" text-anchor="middle">Every organ contains ALL FOUR tissue types!</text>
                    <text x="350" y="272" fill="#86efac" font-size="10" text-anchor="middle">Heart = cardiac muscle + CT + epithelial lining + nervous tissue</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "Which tissue type is AVASCULAR (has no blood vessels)?",
                options: [
                    { text: "Muscle tissue", correct: false },
                    { text: "Epithelial tissue", correct: true },
                    { text: "Connective tissue", correct: false },
                    { text: "Nervous tissue", correct: false }
                ],
                explanation: "Epithelial tissue is AVASCULAR - it has no blood vessels. Nutrients and oxygen reach epithelial cells by diffusion from the underlying connective tissue. This is why skin heals relatively quickly despite having no direct blood supply in its outer layers!"
            },
            {
                type: "content",
                title: "Epithelial Tissue Types",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">EPITHELIAL TISSUE CLASSIFICATION</text>
                    <text x="350" y="48" fill="#a5b4fc" font-size="12" text-anchor="middle">Named by: LAYERS + CELL SHAPE</text>
                    <rect x="30" y="60" width="200" height="105" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                    <text x="130" y="82" fill="#6366f1" font-size="13" text-anchor="middle" font-weight="bold">BY LAYERS</text>
                    <text x="50" y="105" fill="#e2e8f0" font-size="12">Simple = 1 layer</text>
                    <text x="50" y="125" fill="#a5b4fc" font-size="10">(diffusion, absorption)</text>
                    <text x="50" y="148" fill="#e2e8f0" font-size="12">Stratified = multiple</text>
                    <text x="50" y="168" fill="#a5b4fc" font-size="10">(protection)</text>
                    <rect x="250" y="60" width="200" height="105" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="82" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">BY SHAPE</text>
                    <text x="270" y="105" fill="#e2e8f0" font-size="12">Squamous = flat</text>
                    <text x="270" y="125" fill="#e2e8f0" font-size="12">Cuboidal = cube-like</text>
                    <text x="270" y="148" fill="#e2e8f0" font-size="12">Columnar = tall</text>
                    <rect x="470" y="60" width="210" height="105" rx="8" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
                    <text x="575" y="82" fill="#ec4899" font-size="13" text-anchor="middle" font-weight="bold">EXAMPLES</text>
                    <text x="485" y="105" fill="#fbcfe8" font-size="10">Simple squamous: lungs</text>
                    <text x="485" y="125" fill="#fbcfe8" font-size="10">Simple cuboidal: kidney</text>
                    <text x="485" y="148" fill="#fbcfe8" font-size="10">Stratified squamous: skin</text>
                    <rect x="80" y="175" width="540" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="200" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">EPITHELIAL FUNCTIONS</text>
                    <text x="180" y="225" fill="#6366f1" font-size="12" text-anchor="middle" font-weight="bold">Protection</text>
                    <text x="180" y="242" fill="#e2e8f0" font-size="10" text-anchor="middle">Skin barrier</text>
                    <text x="350" y="225" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">Absorption</text>
                    <text x="350" y="242" fill="#e2e8f0" font-size="10" text-anchor="middle">Intestinal lining</text>
                    <text x="520" y="225" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Secretion</text>
                    <text x="520" y="242" fill="#e2e8f0" font-size="10" text-anchor="middle">Glands</text>
                    <text x="350" y="272" fill="#8b5cf6" font-size="11" text-anchor="middle">Also: Filtration (kidneys) | Sensation (taste buds) | Excretion (sweat)</text>
                </svg>`
            },
            {
                type: "content",
                title: "Connective Tissue Types",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">CONNECTIVE TISSUE: Most Diverse Type!</text>
                    <text x="350" y="48" fill="#a5b4fc" font-size="12" text-anchor="middle">All have: Cells + Extracellular Matrix (ground substance + fibers)</text>
                    <rect x="20" y="60" width="210" height="90" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                    <text x="125" y="82" fill="#6366f1" font-size="12" text-anchor="middle" font-weight="bold">LOOSE CT</text>
                    <text x="35" y="102" fill="#e2e8f0" font-size="10">Areolar: cushions organs</text>
                    <text x="35" y="118" fill="#e2e8f0" font-size="10">Adipose: fat storage</text>
                    <text x="35" y="134" fill="#e2e8f0" font-size="10">Reticular: lymph organs</text>
                    <rect x="245" y="60" width="210" height="90" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="350" y="82" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">DENSE CT</text>
                    <text x="260" y="102" fill="#e2e8f0" font-size="10">Regular: tendons, ligaments</text>
                    <text x="260" y="118" fill="#e2e8f0" font-size="10">Irregular: dermis</text>
                    <text x="260" y="134" fill="#e2e8f0" font-size="10">Elastic: arteries</text>
                    <rect x="470" y="60" width="210" height="90" rx="8" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
                    <text x="575" y="82" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">SPECIALIZED CT</text>
                    <text x="485" y="102" fill="#e2e8f0" font-size="10">Cartilage: joints, nose, ears</text>
                    <text x="485" y="118" fill="#e2e8f0" font-size="10">Bone: skeleton</text>
                    <text x="485" y="134" fill="#e2e8f0" font-size="10">Blood: transport</text>
                    <rect x="80" y="165" width="540" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="190" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">KEY CELLS IN CONNECTIVE TISSUE</text>
                    <text x="180" y="218" fill="#6366f1" font-size="11" text-anchor="middle" font-weight="bold">Fibroblasts</text>
                    <text x="180" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">Make fibers + matrix</text>
                    <text x="350" y="218" fill="#10b981" font-size="11" text-anchor="middle" font-weight="bold">Adipocytes</text>
                    <text x="350" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">Store fat</text>
                    <text x="520" y="218" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Chondrocytes</text>
                    <text x="520" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">In cartilage</text>
                    <text x="250" y="260" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">Osteocytes</text>
                    <text x="250" y="275" fill="#e2e8f0" font-size="10" text-anchor="middle">In bone</text>
                    <text x="450" y="260" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">Macrophages</text>
                    <text x="450" y="275" fill="#e2e8f0" font-size="10" text-anchor="middle">Immune defense</text>
                </svg>`
            },
            {
                type: "mnemonic",
                title: "Remember the Four Tissue Types",
                content: "**MNEMONIC: 'Even Cowboys Must Navigate'**\n\n**E**pithelial - Covers and lines (skin, organ linings, glands)\n**C**onnective - Supports and connects (bone, cartilage, blood, fat)\n**M**uscle - Moves (skeletal, cardiac, smooth)\n**N**ervous - Communicates (neurons, neuroglia)\n\n**Remember Epithelial Classification:**\n- **Layers:** Simple (1) vs Stratified (many)\n- **Shape:** Squamous (flat) vs Cuboidal (cube) vs Columnar (tall)\n- **Name = Layer + Shape:** 'Simple Squamous' = 1 layer of flat cells\n\n**Connective Tissue Memory:**\n- **'Fat Bone Blood'** - All are connective tissue!\n- Blood is the only LIQUID connective tissue\n- Bone is the hardest connective tissue\n- Cartilage is AVASCULAR (like epithelial!)"
            },
            {
                type: "content",
                title: "Muscle Tissue Types",
                content: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="700" height="300" fill="#1a1a2e"/>
                    <text x="350" y="25" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">THREE TYPES OF MUSCLE TISSUE</text>
                    <rect x="20" y="45" width="210" height="195" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                    <text x="125" y="70" fill="#6366f1" font-size="14" text-anchor="middle" font-weight="bold">SKELETAL</text>
                    <text x="125" y="90" fill="#10b981" font-size="11" text-anchor="middle">(Voluntary)</text>
                    <rect x="40" y="100" width="170" height="40" rx="5" fill="#1e293b"/>
                    <line x1="50" y1="110" x2="200" y2="110" stroke="#6366f1" stroke-width="2"/>
                    <line x1="50" y1="120" x2="200" y2="120" stroke="#a5b4fc" stroke-width="2"/>
                    <line x1="50" y1="130" x2="200" y2="130" stroke="#6366f1" stroke-width="2"/>
                    <text x="125" y="158" fill="#e2e8f0" font-size="10" text-anchor="middle">Striated (striped)</text>
                    <text x="125" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">Multinucleated</text>
                    <text x="125" y="192" fill="#e2e8f0" font-size="10" text-anchor="middle">Attached to bones</text>
                    <text x="125" y="210" fill="#10b981" font-size="10" text-anchor="middle" font-weight="bold">YOU CONTROL THIS!</text>
                    <text x="125" y="230" fill="#a5b4fc" font-size="9" text-anchor="middle">Gym muscles!</text>
                    <rect x="245" y="45" width="210" height="195" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
                    <text x="350" y="70" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">CARDIAC</text>
                    <text x="350" y="90" fill="#f59e0b" font-size="11" text-anchor="middle">(Involuntary)</text>
                    <rect x="265" y="100" width="170" height="40" rx="5" fill="#1e293b"/>
                    <line x1="275" y1="110" x2="325" y2="110" stroke="#ec4899" stroke-width="2"/>
                    <rect x="325" y="105" width="5" height="15" fill="#f59e0b"/>
                    <line x1="330" y1="110" x2="380" y2="110" stroke="#ec4899" stroke-width="2"/>
                    <rect x="380" y="105" width="5" height="15" fill="#f59e0b"/>
                    <line x1="385" y1="110" x2="425" y2="110" stroke="#ec4899" stroke-width="2"/>
                    <text x="350" y="158" fill="#e2e8f0" font-size="10" text-anchor="middle">Striated</text>
                    <text x="350" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">Intercalated discs</text>
                    <text x="350" y="192" fill="#e2e8f0" font-size="10" text-anchor="middle">Single nucleus</text>
                    <text x="350" y="210" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">NEVER FATIGUES!</text>
                    <text x="350" y="230" fill="#fbcfe8" font-size="9" text-anchor="middle">Heart only</text>
                    <rect x="470" y="45" width="210" height="195" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                    <text x="575" y="70" fill="#10b981" font-size="14" text-anchor="middle" font-weight="bold">SMOOTH</text>
                    <text x="575" y="90" fill="#f59e0b" font-size="11" text-anchor="middle">(Involuntary)</text>
                    <rect x="490" y="100" width="170" height="40" rx="5" fill="#1e293b"/>
                    <ellipse cx="530" cy="120" rx="20" ry="8" fill="#10b981" opacity="0.5"/>
                    <ellipse cx="575" cy="120" rx="20" ry="8" fill="#10b981" opacity="0.5"/>
                    <ellipse cx="620" cy="120" rx="20" ry="8" fill="#10b981" opacity="0.5"/>
                    <text x="575" y="158" fill="#e2e8f0" font-size="10" text-anchor="middle">NOT striated</text>
                    <text x="575" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">Spindle-shaped</text>
                    <text x="575" y="192" fill="#e2e8f0" font-size="10" text-anchor="middle">Single nucleus</text>
                    <text x="575" y="210" fill="#10b981" font-size="10" text-anchor="middle" font-weight="bold">SLOW + SUSTAINED</text>
                    <text x="575" y="230" fill="#86efac" font-size="9" text-anchor="middle">Blood vessels, GI tract</text>
                    <rect x="150" y="250" width="400" height="40" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
                    <text x="350" y="275" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">ONLY SKELETAL MUSCLE IS VOLUNTARY - the rest works automatically!</text>
                </svg>`
            },
            {
                type: "quiz",
                question: "Which type of muscle tissue has intercalated discs and never fatigues?",
                options: [
                    { text: "Skeletal muscle", correct: false },
                    { text: "Smooth muscle", correct: false },
                    { text: "Cardiac muscle", correct: true },
                    { text: "All muscle types have intercalated discs", correct: false }
                ],
                explanation: "CARDIAC muscle is unique! It has intercalated discs (special junctions between cells that allow synchronized contraction) and never fatigues because your heart must beat 24/7. It's striated like skeletal muscle but involuntary like smooth muscle."
            }
        ]
    }
];

// Instructions: Copy the lessonList array above and paste it into data.js
// replacing the existing anatomy-physiology lessons starting at approximately line 36677
