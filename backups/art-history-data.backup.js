// ============================================
// ART HISTORY DATA - VISUAL LEARNING MODULE
// Based on: "The History of Art: A Global View 1300 to the Present"
// By Jean Robertson & Deborah Hutton
// ============================================

const ART_HISTORY_CATEGORY = {
    id: "art-history",
    name: "Art History",
    icon: "🎨",
    color: "#ec4899",
    description: "Global art movements from 1300 to present",
    books: [
        // ============================================
        // BOOK 1: LATE MEDIEVAL & EARLY RENAISSANCE
        // ============================================
        {
            id: "art-1300-1500",
            title: "Late Medieval to Early Renaissance (1300-1500)",
            author: "Based on Robertson & Hutton",
            description: "Explore the transition from Medieval to Renaissance art, including the International Gothic style, early Italian Renaissance innovations, and Northern European developments.",
            lessons: 8,
            duration: 60,
            progress: 0,
            category: "art-history",
            featured: true,
            lessonList: [
                {
                    id: 1,
                    title: "The International Gothic Style",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Setting the Scene: Europe Around 1400",
                            content: "Imagine Europe in the late 1300s: the Black Death has killed nearly half the population, the Catholic Church is split between rival popes, and warfare is constant. Yet in royal courts from Prague to Paris to London, a remarkably unified artistic style emerges - one focused on beauty, elegance, and escape from harsh reality. This is the International Gothic style (c. 1375-1425), the last great flowering of medieval art before the Renaissance changed everything. It's called 'International' because, for the first time, art looked similar whether made in France, Italy, Bohemia, or England - aristocrats across Europe shared the same taste for graceful figures, glittering gold, and fairy-tale luxury.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">INTERNATIONAL GOTHIC: 1375-1425</text>
                                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="29">A unified artistic style across European royal courts</text>

                                    <!-- Map showing spread - properly sized -->
                                    <ellipse cx="550" cy="420" rx="380" ry="260" fill="none" stroke="#444" stroke-width="3"/>

                                    <!-- Court locations - larger circles -->
                                    <circle cx="340" cy="340" r="72" fill="rgba(59,130,246,0.4)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="340" y="348" text-anchor="middle" fill="#fff" font-weight="bold" font-size="29">Paris</text>

                                    <circle cx="550" cy="260" r="72" fill="rgba(236,72,153,0.4)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-weight="bold" font-size="29">Prague</text>

                                    <circle cx="760" cy="340" r="72" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="3"/>
                                    <text x="760" y="348" text-anchor="middle" fill="#fff" font-weight="bold" font-size="29">Milan</text>

                                    <circle cx="280" cy="480" r="72" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="3"/>
                                    <text x="280" y="488" text-anchor="middle" fill="#fff" font-weight="bold" font-size="29">London</text>

                                    <circle cx="660" cy="520" r="72" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="660" y="528" text-anchor="middle" fill="#fff" font-weight="bold" font-size="29">Florence</text>

                                    <!-- Connecting lines showing spread -->
                                    <line x1="340" y1="340" x2="550" y2="260" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>
                                    <line x1="550" y1="260" x2="760" y2="340" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>
                                    <line x1="340" y1="340" x2="280" y2="480" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>
                                    <line x1="760" y1="340" x2="660" y2="520" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>
                                    <line x1="340" y1="340" x2="660" y2="520" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>
                                    <line x1="280" y1="480" x2="660" y2="520" stroke="#ffd700" stroke-width="3" stroke-dasharray="8" opacity="1"/>

                                    <!-- Legend boxes at bottom - two side by side -->
                                    <rect x="60" y="720" width="480" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="300" y="775" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">UNIFIED STYLE</text>
                                    <text x="300" y="820" text-anchor="middle" fill="#fff" font-size="26">One artistic look across</text>
                                    <text x="300" y="855" text-anchor="middle" fill="#888" font-size="25">all European courts</text>

                                    <rect x="560" y="720" width="480" height="160" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="800" y="775" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="31">HOW IT SPREAD</text>
                                    <text x="800" y="820" text-anchor="middle" fill="#fff" font-size="26">Royal marriages • Artists</text>
                                    <text x="800" y="855" text-anchor="middle" fill="#888" font-size="25">Portable luxury objects</text>

                                    <!-- Bottom date bar -->
                                    <rect x="200" y="920" width="700" height="60" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666" stroke-width="1"/>
                                    <text x="550" y="960" text-anchor="middle" fill="#888" font-size="28">c. 1375-1425 • The last great medieval style</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "What Makes It 'International Gothic'?",
                            content: "The International Gothic style has several defining characteristics that you can spot immediately:\n\nELEGANT S-CURVES: Figures stand in graceful, swaying poses - imagine a fashion model's contrapposto taken to an extreme. Bodies curve like flames or letters S.\n\nLAVISH GOLD: Real gold leaf covers backgrounds and details, making paintings shimmer like jewelry. This wasn't just decoration - gold symbolized divine light and heavenly realms.\n\nMINUTE DETAIL: Artists painted individual leaves on trees, patterns on fabrics, and fur on animals with obsessive precision. Viewers were meant to get lost in these tiny worlds.\n\nFLATTENED SPACE: Unlike later Renaissance art, there's no realistic depth. Figures stack vertically, and landscapes look like beautiful stage sets rather than real places.\n\nCOURTLY SUBJECTS: Scenes show aristocratic life - hunting, feasting, romance - or religious subjects treated with courtly elegance. Even the Virgin Mary looks like a fashionable noblewoman.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="42">5 KEY CHARACTERISTICS</text>
                                    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="29">How to identify International Gothic art</text>

                                    <!-- Row 1: Three boxes - S-Curves, Gold Leaf, Tiny Details -->
                                    <!-- S-Curves -->
                                    <rect x="40" y="120" width="320" height="340" rx="20" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="200" y="160" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="29">S-CURVES</text>
                                    <path d="M 200 190 Q 240 240 200 290 Q 160 340 200 380" stroke="#ffd700" stroke-width="5" fill="none"/>
                                    <circle cx="200" cy="185" r="20" fill="#ffe4c4" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="200" cy="385" r="10" fill="#ec4899"/>
                                    <text x="200" y="430" text-anchor="middle" fill="#888" font-size="25">Elegant figure poses</text>

                                    <!-- Gold Leaf -->
                                    <rect x="390" y="120" width="320" height="340" rx="20" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="550" y="160" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="29">GOLD LEAF</text>
                                    <rect x="470" y="190" width="160" height="160" fill="#ffd700" rx="12"/>
                                    <circle cx="510" cy="260" r="22" fill="#b8860b"/>
                                    <circle cx="550" cy="230" r="18" fill="#daa520"/>
                                    <circle cx="590" cy="280" r="20" fill="#b8860b"/>
                                    <text x="550" y="430" text-anchor="middle" fill="#888" font-size="25">Divine light symbolism</text>

                                    <!-- Tiny Details -->
                                    <rect x="740" y="120" width="320" height="340" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                                    <text x="900" y="160" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="29">TINY DETAILS</text>
                                    <circle cx="830" cy="220" r="10" fill="#10b981"/>
                                    <circle cx="860" cy="200" r="8" fill="#10b981"/>
                                    <circle cx="890" cy="225" r="10" fill="#10b981"/>
                                    <circle cx="920" cy="205" r="8" fill="#10b981"/>
                                    <circle cx="950" cy="230" r="10" fill="#10b981"/>
                                    <circle cx="970" cy="210" r="8" fill="#10b981"/>
                                    <path d="M 860 270 L 890 320 L 875 280 L 920 310 L 900 260" stroke="#10b981" stroke-width="3" fill="none"/>
                                    <text x="900" y="430" text-anchor="middle" fill="#888" font-size="25">Obsessive precision</text>

                                    <!-- Row 2: Two boxes - Flat Space, Courtly Life -->
                                    <!-- Flat Space -->
                                    <rect x="60" y="500" width="460" height="360" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="290" y="545" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="29">FLAT SPACE</text>
                                    <rect x="120" y="575" width="340" height="200" fill="#3b82f6" opacity="0"/>
                                    <ellipse cx="200" cy="660" rx="45" ry="80" fill="#dc143c" opacity="1"/>
                                    <ellipse cx="310" cy="690" rx="40" ry="65" fill="#4169e1" opacity="1"/>
                                    <text x="290" y="825" text-anchor="middle" fill="#888" font-size="25">No realistic depth</text>

                                    <!-- Courtly Subjects -->
                                    <rect x="580" y="500" width="460" height="360" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="810" y="545" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="29">COURTLY LIFE</text>

                                    <!-- Noble figure with crown -->
                                    <circle cx="720" cy="640" r="35" fill="#ffe4c4"/>
                                    <polygon points="695,615 720,580 745,615" fill="#ffd700"/>
                                    <ellipse cx="720" cy="730" rx="50" ry="60" fill="#8b008b"/>
                                    <rect x="700" y="760" width="40" height="30" fill="#ffd700"/>

                                    <!-- Noble lady figure -->
                                    <circle cx="880" cy="650" r="50" fill="#ffe4c4"/>
                                    <ellipse cx="880" cy="730" rx="45" ry="55" fill="#dc143c"/>
                                    <path d="M850 620 Q880 590 910 620" stroke="#ffd700" stroke-width="3" fill="none"/>

                                    <!-- Hunting dog -->
                                    <ellipse cx="800" cy="800" rx="30" ry="15" fill="#8b4513"/>
                                    <circle cx="825" cy="792" r="8" fill="#8b4513"/>

                                    <text x="810" y="825" text-anchor="middle" fill="#888" font-size="25">Aristocratic elegance</text>

                                    <!-- Bottom summary -->
                                    <rect x="80" y="900" width="940" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="29">These 5 features define International Gothic art</text>
                                    <text x="550" y="1005" text-anchor="middle" fill="#888" font-size="25">Look for them in manuscripts, altarpieces, and courtly paintings</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Why Did This Style Spread?",
                            content: "Three factors made art 'international' for the first time:\n\n1. ROYAL MARRIAGES: When a French princess married an English king, she brought artists, manuscripts, and tastes with her. Royal families were all related, and they shared aesthetic preferences.\n\n2. TRAVELING ARTISTS: Unlike later periods when artists stayed in one city, Gothic artists moved between courts seeking patronage. A painter might work in Paris, then Prague, then Milan.\n\n3. PORTABLE ART: The most prized artworks were small - illuminated manuscripts, ivory carvings, goldsmith work. These luxury objects traveled as diplomatic gifts, spreading styles across borders.\n\nThe result: a duke in France and a duke in Italy owned art that looked remarkably similar, both reflecting the same aristocratic ideals of refinement and wealth.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="40">3 REASONS ART WENT INTERNATIONAL</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="28">How artistic styles spread across European courts</text>

                                    <!-- Three wider columns with proper spacing -->
                                    <!-- Column 1: Royal Marriages -->
                                    <rect x="40" y="120" width="330" height="680" rx="18" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="205" y="170" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="31">1. MARRIAGES</text>
                                    <!-- Crown -->
                                    <polygon points="155,230 185,320 205,260 225,320 255,230 205,290" fill="#ffd700" stroke="#b8860b" stroke-width="2"/>
                                    <!-- Wedding rings -->
                                    <circle cx="160" cy="420" r="50" fill="none" stroke="#ec4899" stroke-width="4"/>
                                    <circle cx="250" cy="420" r="50" fill="none" stroke="#3b82f6" stroke-width="4"/>
                                    <line x1="198" y1="420" x2="212" y2="420" stroke="#ffd700" stroke-width="6"/>
                                    <text x="205" y="520" text-anchor="middle" fill="#fff" font-size="28">Royal families</text>
                                    <text x="205" y="560" text-anchor="middle" fill="#fff" font-size="28">shared tastes</text>
                                    <text x="205" y="640" text-anchor="middle" fill="#888" font-size="25">Artists traveled</text>
                                    <text x="205" y="680" text-anchor="middle" fill="#888" font-size="25">with brides</text>
                                    <text x="205" y="760" text-anchor="middle" fill="#ec4899" font-size="25">French → English</text>

                                    <!-- Column 2: Traveling Artists -->
                                    <rect x="385" y="120" width="330" height="680" rx="18" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="550" y="170" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">2. ARTISTS MOVED</text>
                                    <!-- Simplified walking figure -->
                                    <circle cx="490" cy="260" r="35" fill="#ffe4c4"/>
                                    <line x1="490" y1="295" x2="490" y2="400" stroke="#3b82f6" stroke-width="5"/>
                                    <line x1="490" y1="400" x2="460" y2="480" stroke="#3b82f6" stroke-width="5"/>
                                    <line x1="490" y1="400" x2="520" y2="480" stroke="#3b82f6" stroke-width="5"/>
                                    <!-- Travel path -->
                                    <path d="M 540 300 Q 600 240 640 300 Q 670 380 640 460" stroke="#ffd700" stroke-width="4" fill="none" stroke-dasharray="10"/>
                                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="28">Paris → Prague</text>
                                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="28">→ Milan</text>
                                    <text x="550" y="680" text-anchor="middle" fill="#888" font-size="25">Seeking wealthy</text>
                                    <text x="550" y="720" text-anchor="middle" fill="#888" font-size="25">patrons</text>
                                    <text x="550" y="760" text-anchor="middle" fill="#3b82f6" font-size="25">Court to court</text>

                                    <!-- Column 3: Portable Art -->
                                    <rect x="730" y="120" width="330" height="680" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                                    <text x="895" y="170" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">3. PORTABLE ART</text>
                                    <!-- Small book/manuscript -->
                                    <rect x="810" y="220" width="80" height="140" fill="#f5e6d3" stroke="#8b4513" stroke-width="3" rx="8"/>
                                    <rect x="820" y="235" width="60" height="110" fill="#fff8e7"/>
                                    <line x1="828" y1="260" x2="870" y2="260" stroke="#333" stroke-width="2"/>
                                    <line x1="828" y1="290" x2="870" y2="290" stroke="#333" stroke-width="2"/>
                                    <line x1="828" y1="320" x2="870" y2="320" stroke="#333" stroke-width="2"/>
                                    <!-- Ivory carving -->
                                    <ellipse cx="960" cy="300" rx="45" ry="80" fill="#fffff0" stroke="#ddd" stroke-width="2"/>
                                    <text x="895" y="450" text-anchor="middle" fill="#fff" font-size="28">Manuscripts</text>
                                    <text x="895" y="490" text-anchor="middle" fill="#fff" font-size="28">Ivory carvings</text>
                                    <text x="895" y="570" text-anchor="middle" fill="#888" font-size="25">Diplomatic gifts</text>
                                    <text x="895" y="610" text-anchor="middle" fill="#888" font-size="25">spread styles</text>
                                    <text x="895" y="760" text-anchor="middle" fill="#10b981" font-size="25">Small = Portable</text>

                                    <!-- Bottom result box -->
                                    <rect x="100" y="830" width="900" height="120" rx="18" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="33">RESULT</text>
                                    <text x="550" y="925" text-anchor="middle" fill="#fff" font-size="28">Similar art across all of Europe</text>

                                    <!-- Arrow indicators -->
                                    <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="25">Dukes in France and Italy owned remarkably similar art</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Masterpiece: The Très Riches Heures (1412-1416)",
                            content: "The Très Riches Heures du Duc de Berry is often called the most beautiful illuminated manuscript ever created. Here's what you need to know:\n\nWHAT IT IS: A 'Book of Hours' - a personal prayer book that wealthy people used for daily devotions. It contains prayers organized by the hours of the day and the months of the year.\n\nWHO MADE IT: The Limbourg Brothers (Paul, Jean, and Herman) - three Dutch artists working for the Duke of Berry, one of the richest art collectors in history. Tragically, all three brothers and the Duke died in 1416, probably from plague, leaving the book unfinished.\n\nWHY IT MATTERS: The calendar pages are revolutionary. For each month, the brothers painted scenes of life - peasants farming, nobles hunting, castles in the background. These aren't generic scenes; they show REAL castles the Duke owned. It's like a medieval photo album of aristocratic life.\n\nTHE TECHNICAL ACHIEVEMENT: The brothers used ultramarine blue (made from crushed lapis lazuli, more expensive than gold), created shadows using scientific observation of light, and painted details so fine you need magnification to see them all.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">THE TRÈS RICHES HEURES</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="28">The most beautiful illuminated manuscript ever created</text>

                                    <!-- Open book representation - properly sized -->
                                    <rect x="40" y="120" width="1020" height="600" fill="#8b4513" rx="20"/>
                                    <rect x="55" y="135" width="490" height="570" fill="#f5e6d3"/>
                                    <rect x="555" y="135" width="490" height="570" fill="#fff8e7"/>

                                    <!-- Left page - Calendar/Zodiac lunette -->
                                    <path d="M 70 170 Q 300 100 530 170 L 530 240 Q 300 180 70 240 Z" fill="#1e3a5f"/>
                                    <circle cx="300" cy="195" r="55" fill="#ffd700"/>
                                    <text x="300" y="250" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">ZODIAC</text>

                                    <!-- Left page - Main scene -->
                                    <rect x="70" y="270" width="460" height="300" fill="#87ceeb"/>
                                    <rect x="70" y="450" width="460" height="120" fill="#228b22"/>
                                    <!-- Castle -->
                                    <rect x="180" y="300" width="180" height="180" fill="#6b7280"/>
                                    <polygon points="180,300 220,240 220,300" fill="#6b7280"/>
                                    <polygon points="260,300 300,230 300,300" fill="#6b7280"/>
                                    <polygon points="330,300 330,260 315,260 315,300" fill="#6b7280"/>
                                    <!-- Figures -->
                                    <ellipse cx="130" cy="520" rx="40" ry="70" fill="#dc143c"/>
                                    <circle cx="130" cy="460" r="25" fill="#ffe4c4"/>
                                    <ellipse cx="200" cy="530" rx="35" ry="60" fill="#4169e1"/>
                                    <circle cx="200" cy="480" r="22" fill="#ffe4c4"/>

                                    <text x="300" y="620" text-anchor="middle" fill="#333" font-size="28" font-weight="bold">Monthly Scene</text>
                                    <text x="300" y="655" text-anchor="middle" fill="#555" font-size="25">Real Duke's castles!</text>

                                    <!-- Right page - Info boxes - properly spaced within page -->
                                    <rect x="570" y="150" width="460" height="120" rx="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="800" y="190" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="29">THE ARTISTS</text>
                                    <text x="800" y="225" text-anchor="middle" fill="#333" font-size="26">Limbourg Brothers</text>
                                    <text x="800" y="255" text-anchor="middle" fill="#666" font-size="25">Paul, Jean, Herman</text>

                                    <rect x="570" y="285" width="460" height="120" rx="15" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="800" y="325" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="29">THE PATRON</text>
                                    <text x="800" y="360" text-anchor="middle" fill="#333" font-size="26">Duke of Berry</text>
                                    <text x="800" y="390" text-anchor="middle" fill="#666" font-size="25">Richest collector ever</text>

                                    <rect x="570" y="420" width="460" height="120" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="800" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="29">THE TRAGEDY</text>
                                    <text x="800" y="495" text-anchor="middle" fill="#333" font-size="26">All died 1416</text>
                                    <text x="800" y="525" text-anchor="middle" fill="#666" font-size="25">Probably plague</text>

                                    <rect x="570" y="555" width="460" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="800" y="595" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="29">MATERIALS</text>
                                    <text x="800" y="630" text-anchor="middle" fill="#333" font-size="26">Ultramarine blue</text>
                                    <text x="800" y="660" text-anchor="middle" fill="#666" font-size="25">Costlier than gold!</text>

                                    <!-- Bottom label -->
                                    <rect x="60" y="750" width="980" height="150" rx="18" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="38">BOOK OF HOURS</text>
                                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="29">Personal prayer book with prayers for each hour</text>
                                    <text x="550" y="880" text-anchor="middle" fill="#888" font-size="26">The ultimate medieval status symbol</text>

                                    <!-- Status at very bottom -->
                                    <text x="550" y="950" text-anchor="middle" fill="#666" font-size="25">Created 1412-1416 • Left unfinished when all artists died</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Understanding a Book of Hours",
                            content: "To truly appreciate the Très Riches Heures, you need to understand what a Book of Hours was:\n\nPURPOSE: Medieval Christians structured their day around eight prayer times (called 'canonical hours'). A Book of Hours contained the prayers, psalms, and readings for each.\n\nSTRUCTURE: It typically included a calendar (showing feast days and saints), Gospel readings, prayers to the Virgin Mary, penitential psalms, and prayers for the dead.\n\nSTATUS SYMBOL: Only the wealthy could afford these handmade books. The more elaborate the decoration, the higher your status. The Duke of Berry owned several, each more luxurious than the last.\n\nPERSONAL DEVOTION: Unlike church services, these books were for private prayer. They were intimate objects - you held them, touched them, spent hours with them. The beautiful images were meant to inspire devotion and help you meditate on religious themes.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">THE 8 CANONICAL HOURS</text>
                                    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="26">Medieval daily prayer schedule</text>

                                    <!-- Clock/sun representation - centered with space for all elements -->
                                    <circle cx="550" cy="530" r="280" fill="none" stroke="#444" stroke-width="3"/>
                                    <circle cx="550" cy="530" r="55" fill="#ffd700"/>

                                    <!-- 8 prayer times around the clock - bigger circles and text -->
                                    <circle cx="550" cy="160" r="75" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="3"/>
                                    <text x="550" y="152" text-anchor="middle" fill="#f59e0b" font-size="29" font-weight="bold">MATINS</text>
                                    <text x="550" y="182" text-anchor="middle" fill="#fff" font-size="28">~3am</text>

                                    <circle cx="800" cy="280" r="75" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="3"/>
                                    <text x="800" y="272" text-anchor="middle" fill="#ef4444" font-size="29" font-weight="bold">LAUDS</text>
                                    <text x="800" y="302" text-anchor="middle" fill="#fff" font-size="28">~6am</text>

                                    <circle cx="890" cy="530" r="75" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="3"/>
                                    <text x="890" y="522" text-anchor="middle" fill="#10b981" font-size="29" font-weight="bold">PRIME</text>
                                    <text x="890" y="552" text-anchor="middle" fill="#fff" font-size="28">~7am</text>

                                    <circle cx="800" cy="780" r="75" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="800" y="772" text-anchor="middle" fill="#3b82f6" font-size="29" font-weight="bold">TERCE</text>
                                    <text x="800" y="802" text-anchor="middle" fill="#fff" font-size="28">~9am</text>

                                    <circle cx="550" cy="900" r="75" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="550" y="892" text-anchor="middle" fill="#ec4899" font-size="29" font-weight="bold">SEXT</text>
                                    <text x="550" y="922" text-anchor="middle" fill="#fff" font-size="28">~noon</text>

                                    <circle cx="300" cy="780" r="75" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="300" y="772" text-anchor="middle" fill="#8b5cf6" font-size="29" font-weight="bold">NONE</text>
                                    <text x="300" y="802" text-anchor="middle" fill="#fff" font-size="28">~3pm</text>

                                    <circle cx="210" cy="530" r="75" fill="rgba(34,197,94,0.3)" stroke="#22c55e" stroke-width="3"/>
                                    <text x="210" y="522" text-anchor="middle" fill="#22c55e" font-size="28" font-weight="bold">VESPERS</text>
                                    <text x="210" y="552" text-anchor="middle" fill="#fff" font-size="28">~6pm</text>

                                    <circle cx="300" cy="280" r="75" fill="rgba(168,85,247,0.3)" stroke="#a855f7" stroke-width="3"/>
                                    <text x="300" y="272" text-anchor="middle" fill="#a855f7" font-size="28" font-weight="bold">COMPLINE</text>
                                    <text x="300" y="302" text-anchor="middle" fill="#fff" font-size="28">~9pm</text>

                                    <!-- Bottom note - centered text -->
                                    <rect x="150" y="1000" width="800" height="70" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="1045" text-anchor="middle" fill="#ffd700" font-size="29">Each hour had specific prayers in the Book of Hours</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Looking Closely: The January Page",
                            content: "Let's examine one page in detail - January from the Très Riches Heures:\n\nTHE SCENE: The Duke of Berry hosts a New Year's feast. He sits at right in a blue robe, wearing a fur hat. Guests crowd around a table laden with food. A fire screen protects him from the massive fireplace.\n\nHIDDEN DETAILS: Above the Duke's head, a canopy displays his coat of arms. The tapestry behind him shows knights in battle - probably the Trojan War. On the table, you can identify specific dishes and a golden salt cellar shaped like a ship.\n\nTHE LUNETTE: The semicircle at top shows the zodiac signs for January (Capricorn and Aquarius) and a sun chariot crossing the sky - combining astronomy with mythology.\n\nWHAT IT TELLS US: This wasn't just pretty decoration. It documents real medieval life - what people wore, what they ate, how they celebrated. Historians use these images to understand daily life in ways written records can't show.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="40">JANUARY PAGE - CLOSE ANALYSIS</text>
                                    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="28">Detailed examination of one illuminated page</text>

                                    <!-- Left labels (outside page) -->
                                    <rect x="30" y="140" width="200" height="130" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="130" y="180" text-anchor="middle" fill="#3b82f6" font-size="28" font-weight="bold">LUNETTE</text>
                                    <text x="130" y="210" text-anchor="middle" fill="#fff" font-size="25">Zodiac signs</text>
                                    <text x="130" y="240" text-anchor="middle" fill="#888" font-size="25">♑ ♒</text>

                                    <rect x="30" y="280" width="200" height="130" rx="12" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="130" y="320" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">TAPESTRY</text>
                                    <text x="130" y="350" text-anchor="middle" fill="#fff" font-size="25">Battle scene</text>
                                    <text x="130" y="380" text-anchor="middle" fill="#888" font-size="25">Trojan War</text>

                                    <!-- Page frame - narrower to give room for labels -->
                                    <rect x="250" y="120" width="540" height="580" fill="#f5e6d3" stroke="#8b4513" stroke-width="6"/>

                                    <!-- Lunette at top -->
                                    <path d="M 265 155 Q 520 85 775 155 L 775 230 Q 520 175 265 230 Z" fill="#1e3a5f"/>
                                    <circle cx="520" cy="185" r="55" fill="#ffd700"/>
                                    <text x="360" y="195" fill="#fff" font-size="34">♑</text>
                                    <text x="680" y="195" fill="#fff" font-size="34">♒</text>

                                    <!-- Tapestry area -->
                                    <rect x="265" y="245" width="510" height="150" fill="#8b0000"/>
                                    <line x1="290" y1="270" x2="340" y2="360" stroke="#ffd700" stroke-width="3"/>
                                    <line x1="370" y1="265" x2="420" y2="355" stroke="#ffd700" stroke-width="3"/>
                                    <line x1="450" y1="275" x2="500" y2="360" stroke="#ffd700" stroke-width="3"/>
                                    <line x1="530" y1="260" x2="580" y2="350" stroke="#ffd700" stroke-width="3"/>

                                    <!-- Table -->
                                    <rect x="280" y="420" width="440" height="50" fill="#8b4513"/>

                                    <!-- Guests at table - smaller -->
                                    <ellipse cx="320" cy="520" rx="40" ry="80" fill="#dc143c"/>
                                    <circle cx="320" cy="455" r="22" fill="#ffe4c4"/>
                                    <ellipse cx="400" cy="530" rx="35" ry="75" fill="#228b22"/>
                                    <circle cx="400" cy="470" r="20" fill="#ffe4c4"/>
                                    <ellipse cx="470" cy="525" rx="35" ry="70" fill="#4b0082"/>
                                    <circle cx="470" cy="470" r="18" fill="#ffe4c4"/>

                                    <!-- Duke in blue (right side of page) -->
                                    <ellipse cx="570" cy="540" rx="50" ry="100" fill="#1e40af"/>
                                    <circle cx="570" cy="455" r="28" fill="#ffe4c4"/>
                                    <ellipse cx="570" cy="435" rx="35" ry="30" fill="#4a3728"/>

                                    <!-- Food on table -->
                                    <circle cx="350" cy="450" r="18" fill="#ffd700"/>
                                    <rect x="390" y="440" width="45" height="30" fill="#cd853f" rx="8"/>
                                    <ellipse cx="460" cy="450" rx="30" ry="18" fill="#c0c0c0"/>

                                    <!-- Fireplace/screen -->
                                    <rect x="660" y="420" width="35" height="180" fill="#ffd700" opacity="0"/>

                                    <!-- Right labels (outside page) - with more spacing -->
                                    <rect x="830" y="140" width="230" height="100" rx="12" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="945" y="180" text-anchor="middle" fill="#f59e0b" font-size="27" font-weight="bold">DUKE OF BERRY</text>
                                    <text x="945" y="215" text-anchor="middle" fill="#fff" font-size="25">Blue robe, fur hat</text>

                                    <rect x="830" y="255" width="230" height="100" rx="12" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="945" y="295" text-anchor="middle" fill="#10b981" font-size="27" font-weight="bold">FIRE SCREEN</text>
                                    <text x="945" y="330" text-anchor="middle" fill="#fff" font-size="25">Golden barrier</text>

                                    <rect x="830" y="370" width="230" height="100" rx="12" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="945" y="410" text-anchor="middle" fill="#8b5cf6" font-size="27" font-weight="bold">FEAST TABLE</text>
                                    <text x="945" y="445" text-anchor="middle" fill="#fff" font-size="25">Real dishes shown</text>

                                    <!-- Bottom summary boxes - properly spaced -->
                                    <rect x="40" y="750" width="500" height="180" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="290" y="795" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="29">HISTORICAL DOCUMENT</text>
                                    <text x="290" y="835" text-anchor="middle" fill="#fff" font-size="26">Every detail shows real</text>
                                    <text x="290" y="870" text-anchor="middle" fill="#fff" font-size="26">medieval life accurately</text>
                                    <text x="290" y="905" text-anchor="middle" fill="#888" font-size="25">Clothes • Food • Customs</text>

                                    <rect x="560" y="750" width="500" height="180" rx="16" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="810" y="795" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="29">NEW YEAR'S FEAST</text>
                                    <text x="810" y="835" text-anchor="middle" fill="#fff" font-size="26">Duke hosts celebration</text>
                                    <text x="810" y="870" text-anchor="middle" fill="#fff" font-size="26">Guests gather around</text>
                                    <text x="810" y="905" text-anchor="middle" fill="#888" font-size="25">Real castles in background</text>

                                    <!-- Key insight at very bottom -->
                                    <rect x="150" y="960" width="800" height="80" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666" stroke-width="1"/>
                                    <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="25">Created 1412-1416 • Left unfinished when all artists died</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "What is a 'Book of Hours'?",
                            options: [
                                { text: "A book tracking the hours workers spent on a project", correct: false },
                                { text: "A personal prayer book organized around daily devotional times", correct: true },
                                { text: "An astronomical guide showing hours of daylight", correct: false },
                                { text: "A medieval clock-making manual", correct: false }
                            ],
                            explanation: "A Book of Hours was a personal prayer book containing prayers, psalms, and readings organized around the eight canonical hours of daily prayer. These lavishly decorated manuscripts were status symbols for wealthy patrons, with the Très Riches Heures being the most famous example."
                        },
                        {
                            type: "example",
                            title: "Masterpiece: Adoration of the Magi by Gentile da Fabriano (1423)",
                            content: "This altarpiece, now in the Uffizi Gallery in Florence, represents International Gothic at its most dazzling:\n\nTHE COMMISSION: Palla Strozzi, the richest man in Florence, paid for this painting to display his wealth and piety. It was meant to outshine every other artwork in the city.\n\nTHE SUBJECT: The three Magi (wise men) present gifts to the infant Jesus. But the real subject is LUXURY - look at the brocade fabrics, the gold crowns, the exotic animals (monkeys, leopards, camels).\n\nARTISTIC ACHIEVEMENT: Gentile used more gold leaf than any other painter of his era. He created textures by pressing the gold with tools, making it catch light differently. The haloes aren't flat circles - they're stamped with intricate patterns.\n\nTHE THREE KINGS: They represent three ages of man (young, middle-aged, old) and three continents (Europe, Asia, Africa). The oldest king kneels and has removed his crown - earthly power bowing to divine power.\n\nDETAILS TO NOTICE: In the predella (bottom panels), you can follow the Magi's journey from seeing the star to their return home. Each section tells part of the story, like a medieval comic strip.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">ADORATION OF THE MAGI (1423)</text>
                                    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="28">Gentile da Fabriano - International Gothic Masterpiece</text>

                                    <!-- Gothic frame with three arches - CENTERED in viewBox -->
                                    <rect x="200" y="130" width="700" height="520" fill="#8b4513" rx="15"/>
                                    <polygon points="270,130 330,100 390,130" fill="#8b4513" stroke="#ffd700" stroke-width="3"/>
                                    <polygon points="480,130 550,100 620,130" fill="#8b4513" stroke="#ffd700" stroke-width="3"/>
                                    <polygon points="710,130 770,100 830,130" fill="#8b4513" stroke="#ffd700" stroke-width="3"/>
                                    <rect x="215" y="145" width="670" height="460" fill="#2d4a3e"/>

                                    <!-- Star - centered -->
                                    <polygon points="550,170 560,200 590,200 565,220 575,250 550,230 525,250 535,220 510,200 540,200" fill="#ffd700"/>

                                    <!-- Holy Family (centered left) -->
                                    <ellipse cx="330" cy="380" rx="60" ry="120" fill="#1e40af"/>
                                    <circle cx="330" cy="300" r="35" fill="#ffe4c4"/>
                                    <circle cx="330" cy="285" r="50" fill="#ffd700" opacity="0"/>
                                    <circle cx="380" cy="410" r="25" fill="#ffe4c4"/>

                                    <!-- Three Magi - centered -->
                                    <!-- Old King (kneeling) -->
                                    <ellipse cx="470" cy="440" rx="55" ry="90" fill="#dc143c"/>
                                    <circle cx="470" cy="370" r="30" fill="#ffe4c4"/>
                                    <circle cx="505" cy="330" r="25" fill="#ffd700"/>
                                    <text x="505" y="340" text-anchor="middle" fill="#8b4513" font-size="28">♛</text>

                                    <!-- Middle-aged King -->
                                    <ellipse cx="590" cy="420" rx="60" ry="110" fill="#228b22"/>
                                    <circle cx="590" cy="340" r="50" fill="#ffe4c4"/>
                                    <polygon points="565,315 590,280 615,315" fill="#ffd700"/>

                                    <!-- Young King -->
                                    <ellipse cx="710" cy="410" rx="55" ry="115" fill="#4b0082"/>
                                    <circle cx="710" cy="330" r="30" fill="#ffe4c4"/>
                                    <polygon points="685,305 710,265 735,305" fill="#ffd700"/>

                                    <!-- Exotic animals -->
                                    <ellipse cx="800" cy="470" rx="40" ry="35" fill="#d2691e"/>
                                    <circle cx="825" cy="455" r="16" fill="#d2691e"/>

                                    <!-- Predella (bottom strip) - 3 evenly spaced panels CENTERED -->
                                    <rect x="200" y="560" width="700" height="90" fill="#8b4513"/>
                                    <rect x="215" y="570" width="210" height="65" fill="#4a5568" rx="10"/>
                                    <rect x="445" y="570" width="210" height="65" fill="#4a5568" rx="10"/>
                                    <rect x="675" y="570" width="210" height="65" fill="#4a5568" rx="10"/>
                                    <text x="320" y="612" text-anchor="middle" fill="#fff" font-size="28">See Star</text>
                                    <text x="550" y="612" text-anchor="middle" fill="#fff" font-size="28">Journey</text>
                                    <text x="780" y="612" text-anchor="middle" fill="#fff" font-size="28">Return</text>

                                    <!-- Labels for figures - 3 evenly spaced boxes -->
                                    <rect x="35" y="680" width="320" height="130" rx="14" fill="rgba(30,64,175,0.2)" stroke="#1e40af" stroke-width="2"/>
                                    <text x="195" y="720" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="29">HOLY FAMILY</text>
                                    <text x="195" y="752" text-anchor="middle" fill="#fff" font-size="26">Mary, Jesus, Joseph</text>
                                    <text x="195" y="784" text-anchor="middle" fill="#888" font-size="25">Golden halo = divinity</text>

                                    <rect x="390" y="680" width="320" height="130" rx="14" fill="rgba(220,20,60,0.2)" stroke="#dc143c" stroke-width="2"/>
                                    <text x="550" y="720" text-anchor="middle" fill="#dc143c" font-weight="bold" font-size="29">THREE MAGI</text>
                                    <text x="550" y="752" text-anchor="middle" fill="#fff" font-size="26">Old • Middle • Young</text>
                                    <text x="550" y="784" text-anchor="middle" fill="#888" font-size="25">3 ages + 3 continents</text>

                                    <rect x="745" y="680" width="320" height="130" rx="14" fill="rgba(214,105,30,0.2)" stroke="#d2691e" stroke-width="2"/>
                                    <text x="905" y="720" text-anchor="middle" fill="#d2691e" font-weight="bold" font-size="29">EXOTIC ANIMALS</text>
                                    <text x="905" y="752" text-anchor="middle" fill="#fff" font-size="26">Camels, leopards</text>
                                    <text x="905" y="784" text-anchor="middle" fill="#888" font-size="25">Shows luxury & travel</text>

                                    <!-- Bottom summary -->
                                    <rect x="40" y="840" width="1020" height="100" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="33" font-weight="bold">MOST GOLD LEAF EVER USED IN A PAINTING</text>
                                    <text x="550" y="915" text-anchor="middle" fill="#888" font-size="26">Commissioned by Palla Strozzi, richest man in Florence</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Gold in Medieval Art: More Than Decoration",
                            content: "Understanding gold's role helps you appreciate Gothic art:\n\nSPIRITUAL MEANING: Gold represented divine light - the uncreated light of heaven. A gold background didn't mean 'blank space'; it meant the scene took place in sacred, eternal space outside normal time.\n\nTECHNIQUE: Artists applied gold leaf (real gold hammered incredibly thin) over a red clay base called 'bole.' They then burnished it with agate stones to make it shine. Different tools created different textures.\n\nCOST: Gold leaf was expensive, but labor was even more so. A richly gilded painting took months of painstaking work. Patrons often specified exact amounts of gold in contracts.\n\nTHE TRANSITION: Renaissance artists eventually abandoned gold backgrounds for realistic blue skies. This wasn't 'progress' - it was a philosophical shift. Gold represented heavenly truth; blue skies represented earthly observation. Different goals, different techniques.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">GOLD LEAF APPLICATION PROCESS</text>
                                    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="27">How medieval artists created golden backgrounds</text>

                                    <!-- Step 1: Wood Panel - centered vertically -->
                                    <rect x="40" y="140" width="290" height="290" rx="18" fill="#8b4513" stroke="#d4a574" stroke-width="5"/>
                                    <text x="185" y="380" text-anchor="middle" fill="#fff" font-size="31" font-weight="bold">1. WOOD PANEL</text>
                                    <text x="185" y="415" text-anchor="middle" fill="#ccc" font-size="24">Prepared surface</text>

                                    <!-- Arrow 1 -->
                                    <path d="M 340 285 L 390 285" stroke="#ffd700" stroke-width="5" fill="none"/>
                                    <polygon points="390,285 370,270 370,300" fill="#ffd700"/>

                                    <!-- Step 2: Bole (red clay) -->
                                    <rect x="405" y="140" width="290" height="290" rx="18" fill="#8b4513" stroke="#d4a574" stroke-width="5"/>
                                    <rect x="425" y="160" width="250" height="190" fill="#8b0000"/>
                                    <text x="550" y="380" text-anchor="middle" fill="#fff" font-size="31" font-weight="bold">2. RED BOLE</text>
                                    <text x="550" y="415" text-anchor="middle" fill="#ccc" font-size="24">Clay adhesive base</text>

                                    <!-- Arrow 2 -->
                                    <path d="M 705 285 L 755 285" stroke="#ffd700" stroke-width="5" fill="none"/>
                                    <polygon points="755,285 735,270 735,300" fill="#ffd700"/>

                                    <!-- Step 3: Gold Leaf -->
                                    <rect x="770" y="140" width="290" height="290" rx="18" fill="#8b4513" stroke="#d4a574" stroke-width="5"/>
                                    <rect x="790" y="160" width="250" height="160" fill="#ffd700"/>
                                    <rect x="810" y="180" width="210" height="120" fill="#ffec8b"/>
                                    <text x="915" y="380" text-anchor="middle" fill="#fff" font-size="31" font-weight="bold">3. GOLD LEAF</text>
                                    <text x="915" y="415" text-anchor="middle" fill="#ccc" font-size="24">Burnished to shine</text>

                                    <!-- Meaning comparison - centered in middle section -->
                                    <rect x="40" y="490" width="495" height="320" rx="18" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="288" y="540" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="32">MEDIEVAL: GOLD</text>
                                    <rect x="80" y="570" width="415" height="120" fill="#ffd700"/>
                                    <circle cx="288" cy="630" r="55" fill="#fff" stroke="#ffd700" stroke-width="4"/>
                                    <text x="288" y="730" text-anchor="middle" fill="#ffd700" font-size="29" font-weight="bold">= DIVINE LIGHT</text>
                                    <text x="288" y="770" text-anchor="middle" fill="#ccc" font-size="24">Heavenly, eternal space</text>

                                    <rect x="565" y="490" width="495" height="320" rx="18" fill="rgba(135,206,235,0.15)" stroke="#87ceeb" stroke-width="3"/>
                                    <text x="812" y="540" text-anchor="middle" fill="#87ceeb" font-weight="bold" font-size="32">RENAISSANCE: SKY</text>
                                    <rect x="605" y="570" width="415" height="120" fill="#87ceeb"/>
                                    <circle cx="812" cy="615" r="50" fill="#ffff00"/>
                                    <ellipse cx="812" cy="660" rx="50" ry="30" fill="#fff"/>
                                    <text x="812" y="730" text-anchor="middle" fill="#87ceeb" font-size="29" font-weight="bold">= EARTHLY OBSERVATION</text>
                                    <text x="812" y="770" text-anchor="middle" fill="#ccc" font-size="24">Natural, realistic space</text>

                                    <!-- Bottom message - centered -->
                                    <rect x="100" y="860" width="900" height="80" rx="16" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="910" text-anchor="middle" fill="#ec4899" font-size="31" font-weight="bold">Different philosophies, not "progress"</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why is the style called 'International' Gothic?",
                            options: [
                                { text: "It was invented by international committees", correct: false },
                                { text: "Artists from different countries created remarkably similar work due to aristocratic connections and traveling artists", correct: true },
                                { text: "The Catholic Church mandated a universal artistic style", correct: false },
                                { text: "It was only practiced outside of any single nation", correct: false }
                            ],
                            explanation: "The style is 'International' because art from France, Italy, Bohemia, England, and elsewhere looked remarkably similar during this period. This resulted from royal marriages connecting courts, artists traveling between patrons, and the exchange of portable luxury objects as diplomatic gifts."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: ELEGANCE",
                            content: "Remember the key features of International Gothic with ELEGANCE:\n\nE - Elegant S-curves in figures' poses\nL - Lavish gold leaf on surfaces\nE - Exquisite patterns in textiles and details\nG - Graceful courtly scenes and subjects\nA - Animals and nature depicted with care\nN - No deep perspective (flattened space)\nC - Courtly subject matter (aristocratic life)\nE - European courts united by shared taste\n\nWhen you see a painting from this era, look for these elements. The more you find, the more 'International Gothic' the work is.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="46">E L E G A N C E</text>
                                    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="28">Mnemonic for International Gothic Features</text>

                                    <!-- Row 1: E L E G - 4 evenly spaced columns -->
                                    <rect x="40" y="110" width="240" height="160" rx="14" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="160" y="145" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="40">E</text>
                                    <text x="160" y="180" text-anchor="middle" fill="#fff" font-size="26">Elegant</text>
                                    <text x="160" y="210" text-anchor="middle" fill="#fff" font-size="26">S-curves</text>
                                    <path d="M 160 225 Q 140 235 160 245" stroke="#ec4899" stroke-width="4" fill="none"/>

                                    <rect x="300" y="110" width="240" height="160" rx="14" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="420" y="145" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">L</text>
                                    <text x="420" y="180" text-anchor="middle" fill="#fff" font-size="26">Lavish</text>
                                    <text x="420" y="210" text-anchor="middle" fill="#fff" font-size="26">gold leaf</text>
                                    <rect x="395" y="225" width="50" height="20" fill="#ffd700"/>

                                    <rect x="560" y="110" width="240" height="160" rx="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="680" y="145" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="40">E</text>
                                    <text x="680" y="180" text-anchor="middle" fill="#fff" font-size="26">Exquisite</text>
                                    <text x="680" y="210" text-anchor="middle" fill="#fff" font-size="26">patterns</text>
                                    <circle cx="655" cy="230" r="10" fill="#8b5cf6"/><circle cx="680" cy="230" r="10" fill="#8b5cf6"/><circle cx="705" cy="230" r="10" fill="#8b5cf6"/>

                                    <rect x="820" y="110" width="240" height="160" rx="14" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                                    <text x="940" y="145" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="40">G</text>
                                    <text x="940" y="180" text-anchor="middle" fill="#fff" font-size="26">Graceful</text>
                                    <text x="940" y="210" text-anchor="middle" fill="#fff" font-size="26">courtly</text>
                                    <text x="940" y="240" text-anchor="middle" fill="#10b981" font-size="28">👑</text>

                                    <!-- Row 2: A N C E - more spacing from row 1 -->
                                    <rect x="40" y="300" width="240" height="160" rx="14" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="3"/>
                                    <text x="160" y="335" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="40">A</text>
                                    <text x="160" y="370" text-anchor="middle" fill="#fff" font-size="26">Animals &</text>
                                    <text x="160" y="400" text-anchor="middle" fill="#fff" font-size="26">nature</text>
                                    <text x="160" y="435" text-anchor="middle" fill="#f59e0b" font-size="28">🦌</text>

                                    <rect x="300" y="300" width="240" height="160" rx="14" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="420" y="335" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="40">N</text>
                                    <text x="420" y="370" text-anchor="middle" fill="#fff" font-size="26">No deep</text>
                                    <text x="420" y="400" text-anchor="middle" fill="#fff" font-size="26">perspective</text>
                                    <rect x="395" y="420" width="50" height="8" fill="#3b82f6"/>
                                    <rect x="400" y="432" width="40" height="6" fill="#3b82f6"/>

                                    <rect x="560" y="300" width="240" height="160" rx="14" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="3"/>
                                    <text x="680" y="335" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="40">C</text>
                                    <text x="680" y="370" text-anchor="middle" fill="#fff" font-size="26">Courtly</text>
                                    <text x="680" y="400" text-anchor="middle" fill="#fff" font-size="26">subjects</text>
                                    <text x="680" y="435" text-anchor="middle" fill="#ef4444" font-size="28">🏰</text>

                                    <rect x="820" y="300" width="240" height="160" rx="14" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="3"/>
                                    <text x="940" y="335" text-anchor="middle" fill="#a855f7" font-weight="bold" font-size="40">E</text>
                                    <text x="940" y="370" text-anchor="middle" fill="#fff" font-size="26">European</text>
                                    <text x="940" y="400" text-anchor="middle" fill="#fff" font-size="26">courts</text>
                                    <text x="940" y="435" text-anchor="middle" fill="#a855f7" font-size="28">🌍</text>

                                    <!-- Visual example at bottom - more spacing from letters -->
                                    <rect x="40" y="500" width="1020" height="460" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="540" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">HOW TO USE: When viewing medieval art, check for each element!</text>

                                    <!-- 4 evenly spaced example columns with 20px gaps -->
                                    <!-- Box 1: S-curve example - center at 175 -->
                                    <rect x="60" y="565" width="230" height="380" rx="12" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="175" cy="610" r="24" fill="#ffe4c4" stroke="#ec4899" stroke-width="2"/>
                                    <path d="M 175 634 Q 155 690 175 740 Q 195 780 175 810" stroke="#ec4899" stroke-width="4" fill="none"/>
                                    <text x="175" y="875" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">S-CURVE POSE</text>
                                    <text x="175" y="905" text-anchor="middle" fill="#ccc" font-size="22">Figures sway elegantly</text>

                                    <!-- Box 2: Gold background - center at 425 -->
                                    <rect x="310" y="565" width="230" height="380" rx="12" fill="#ffd700"/>
                                    <circle cx="425" cy="630" r="28" fill="#ffe4c4" stroke="#000" stroke-width="2"/>
                                    <rect x="400" y="665" width="50" height="90" fill="#3b82f6"/>
                                    <circle cx="425" cy="615" r="6" fill="#b8860b"/>
                                    <text x="425" y="875" text-anchor="middle" fill="#000" font-weight="bold" font-size="22">GOLD GROUND</text>
                                    <text x="425" y="905" text-anchor="middle" fill="#333" font-size="22">Divine light background</text>

                                    <!-- Box 3: Pattern detail - center at 675 -->
                                    <rect x="560" y="565" width="230" height="380" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <rect x="610" y="600" width="130" height="150" fill="#8b5cf6"/>
                                    <circle cx="640" cy="635" r="12" fill="#fff"/><circle cx="675" cy="635" r="12" fill="#ffd700"/><circle cx="710" cy="635" r="12" fill="#fff"/>
                                    <circle cx="640" cy="680" r="12" fill="#ffd700"/><circle cx="675" cy="680" r="12" fill="#fff"/><circle cx="710" cy="680" r="12" fill="#ffd700"/>
                                    <circle cx="640" cy="725" r="12" fill="#fff"/><circle cx="675" cy="725" r="12" fill="#ffd700"/><circle cx="710" cy="725" r="12" fill="#fff"/>
                                    <text x="675" y="875" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">RICH TEXTILES</text>
                                    <text x="675" y="905" text-anchor="middle" fill="#ccc" font-size="22">Intricate patterns</text>

                                    <!-- Box 4: Flat space - center at 925 -->
                                    <rect x="810" y="565" width="230" height="380" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <rect x="860" y="660" width="45" height="90" fill="#10b981"/>
                                    <rect x="910" y="640" width="45" height="110" fill="#f59e0b"/>
                                    <rect x="960" y="620" width="45" height="130" fill="#ef4444"/>
                                    <text x="925" y="875" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">FLAT SPACE</text>
                                    <text x="925" y="905" text-anchor="middle" fill="#ccc" font-size="22">No perspective depth</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "International Gothic vs. What Came Before and After",
                            content: "Understanding context helps you identify the style:\n\nBEFORE (Earlier Gothic, 1200s-1300s):\n- Figures were stiffer and more hieratic\n- Less interest in naturalistic detail\n- Stronger Byzantine influence\n- More symbolic, less decorative\n\nINTERNATIONAL GOTHIC (c. 1375-1425):\n- Maximum elegance and decoration\n- Careful observation of nature\n- Courtly, aristocratic subjects\n- Gold and luxury materials\n\nAFTER (Early Renaissance, 1400s+):\n- Scientific perspective creates depth\n- Figures have weight and volume\n- Less gold, more realistic settings\n- Focus on human anatomy and proportion\n\nThe International Gothic was the medieval world's last artistic gasp before Renaissance humanism changed art forever.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">ART STYLE EVOLUTION</text>
                                    <text x="550" y="88" text-anchor="middle" fill="#888" font-size="28">How International Gothic fits in art history</text>

                                    <!-- Timeline arrow -->
                                    <path d="M 80 150 L 1020 150" stroke="#888" stroke-width="4"/>
                                    <polygon points="1020,150 995,135 995,165" fill="#888"/>

                                    <!-- Era markers -->
                                    <circle cx="200" cy="150" r="22" fill="#ef4444"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">1200s-1300s</text>

                                    <circle cx="550" cy="150" r="26" fill="#ffd700"/>
                                    <text x="550" y="195" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">1375-1425</text>

                                    <circle cx="900" cy="150" r="22" fill="#3b82f6"/>
                                    <text x="900" y="195" text-anchor="middle" fill="#3b82f6" font-size="28" font-weight="bold">1400s+</text>

                                    <!-- BEFORE: Earlier Gothic -->
                                    <rect x="40" y="230" width="320" height="600" rx="16" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                                    <text x="200" y="275" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">EARLIER GOTHIC</text>

                                    <!-- Stiff figure representation -->
                                    <rect x="125" y="300" width="150" height="180" fill="#ffd700"/>
                                    <circle cx="200" cy="330" r="26" fill="#ffe4c4" stroke="#000" stroke-width="2"/>
                                    <line x1="200" y1="356" x2="200" y2="440" stroke="#000" stroke-width="4"/>
                                    <line x1="200" y1="385" x2="170" y2="415" stroke="#000" stroke-width="4"/>
                                    <line x1="200" y1="385" x2="230" y2="415" stroke="#000" stroke-width="4"/>

                                    <text x="200" y="545" text-anchor="middle" fill="#fff" font-size="25">• Stiff figures</text>
                                    <text x="200" y="585" text-anchor="middle" fill="#fff" font-size="25">• Byzantine style</text>
                                    <text x="200" y="625" text-anchor="middle" fill="#fff" font-size="25">• Symbolic</text>
                                    <text x="200" y="665" text-anchor="middle" fill="#fff" font-size="25">• Hieratic poses</text>
                                    <text x="200" y="780" text-anchor="middle" fill="#ef4444" font-size="32" font-weight="bold">FORMAL</text>

                                    <!-- INTERNATIONAL GOTHIC (center, highlighted) -->
                                    <rect x="390" y="230" width="320" height="600" rx="16" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="4"/>
                                    <text x="550" y="268" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="29">INTERNATIONAL</text>
                                    <text x="550" y="298" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="29">GOTHIC</text>

                                    <!-- Elegant S-curve figure -->
                                    <rect x="475" y="315" width="150" height="160" fill="#ffd700"/>
                                    <path d="M 550 340 Q 525 390 550 440 Q 575 470 550 490" stroke="#ec4899" stroke-width="5" fill="none"/>
                                    <circle cx="550" cy="335" r="22" fill="#ffe4c4" stroke="#000" stroke-width="2"/>

                                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="25">• Elegant S-curves</text>
                                    <text x="550" y="585" text-anchor="middle" fill="#fff" font-size="25">• Lavish gold</text>
                                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="25">• Nature details</text>
                                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="25">• Courtly scenes</text>
                                    <text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">ELEGANT</text>

                                    <!-- AFTER: Early Renaissance -->
                                    <rect x="740" y="230" width="320" height="600" rx="16" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="900" y="275" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">RENAISSANCE</text>

                                    <!-- Realistic figure with perspective -->
                                    <rect x="825" y="300" width="150" height="180" fill="#87ceeb"/>
                                    <!-- Perspective grid -->
                                    <line x1="845" y1="440" x2="900" y2="330" stroke="#3b82f6" stroke-width="2"/>
                                    <line x1="955" y1="440" x2="900" y2="330" stroke="#3b82f6" stroke-width="2"/>
                                    <!-- Solid figure -->
                                    <ellipse cx="900" cy="370" rx="26" ry="28" fill="#ffe4c4" stroke="#000" stroke-width="2"/>
                                    <rect x="882" y="395" width="45" height="60" fill="#10b981" rx="8"/>

                                    <text x="900" y="545" text-anchor="middle" fill="#fff" font-size="25">• Perspective</text>
                                    <text x="900" y="585" text-anchor="middle" fill="#fff" font-size="25">• Volume & weight</text>
                                    <text x="900" y="625" text-anchor="middle" fill="#fff" font-size="25">• Blue sky (not gold)</text>
                                    <text x="900" y="665" text-anchor="middle" fill="#fff" font-size="25">• Anatomy focus</text>
                                    <text x="900" y="780" text-anchor="middle" fill="#3b82f6" font-size="32" font-weight="bold">REALISTIC</text>

                                    <!-- Bottom note -->
                                    <rect x="60" y="860" width="980" height="130" rx="16" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="915" text-anchor="middle" fill="#ec4899" font-size="38" font-weight="bold">International Gothic = Medieval art's final flourish</text>
                                    <text x="550" y="960" text-anchor="middle" fill="#ccc" font-size="30">before Renaissance humanism changed everything</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "What happened to the Limbourg Brothers and the Duke of Berry?",
                            options: [
                                { text: "They had a falling out and the book was abandoned", correct: false },
                                { text: "They all died in 1416, probably from plague, leaving the book unfinished", correct: true },
                                { text: "The Duke ran out of money to pay them", correct: false },
                                { text: "They completed the book and retired wealthy", correct: false }
                            ],
                            explanation: "In 1416, all three Limbourg brothers and the Duke of Berry died within months of each other, most likely from plague. The Très Riches Heures was left unfinished and was later completed by other artists. This tragic coincidence is why we know the brothers' work specifically - the unfinished pages show their distinctive style."
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Why International Gothic Matters",
                            content: "When discussing this period, here are the key points that show real understanding:\n\n1. IT WAS A RESPONSE TO CRISIS: The elegance and fantasy of International Gothic emerged during one of history's worst periods - plague, war, schism. Art offered escape.\n\n2. IT SHOWS MEDIEVAL SOPHISTICATION: Far from being 'primitive,' these artists achieved incredible technical skill. They simply had different goals than Renaissance artists.\n\n3. IT WAS TRULY INTERNATIONAL: This was the first time European art was unified by style rather than region. The global art world we know today has roots here.\n\n4. IT DOCUMENTED REAL LIFE: Despite the fairy-tale quality, these images show us real clothes, real food, real castles. They're historical documents as much as art.\n\n5. IT ENDED ABRUPTLY: Within a generation, Renaissance ideas swept this style away in Italy (though it lingered longer in the North). Understanding WHY helps you understand what the Renaissance was really about.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="38">5 KEY TALKING POINTS</text>
                                    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="26">Insights that show real understanding</text>

                                    <!-- Row 1: Points 1-3 - taller boxes with content centered inside -->
                                    <rect x="40" y="110" width="320" height="230" rx="16" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                                    <circle cx="200" cy="155" r="26" fill="#ef4444"/>
                                    <text x="200" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">1</text>
                                    <text x="200" y="205" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">CRISIS RESPONSE</text>
                                    <text x="200" y="245" text-anchor="middle" fill="#fff" font-size="24">Beauty as escape</text>
                                    <text x="200" y="285" text-anchor="middle" fill="#888" font-size="24">Plague • War • Schism</text>

                                    <rect x="390" y="110" width="320" height="230" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                                    <circle cx="550" cy="155" r="26" fill="#8b5cf6"/>
                                    <text x="550" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">2</text>
                                    <text x="550" y="205" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">SOPHISTICATION</text>
                                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="24">Not "primitive"</text>
                                    <text x="550" y="285" text-anchor="middle" fill="#888" font-size="24">Different goals, same skill</text>

                                    <rect x="740" y="110" width="320" height="230" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                                    <circle cx="900" cy="155" r="26" fill="#10b981"/>
                                    <text x="900" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">3</text>
                                    <text x="900" y="205" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">FIRST GLOBAL ART</text>
                                    <text x="900" y="245" text-anchor="middle" fill="#fff" font-size="24">Unified by style</text>
                                    <text x="900" y="285" text-anchor="middle" fill="#888" font-size="24">Not by region</text>

                                    <!-- Row 2: Points 4-5 - adjusted for taller row 1 -->
                                    <rect x="215" y="370" width="320" height="200" rx="16" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                                    <circle cx="375" cy="410" r="26" fill="#f59e0b"/>
                                    <text x="375" y="420" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">4</text>
                                    <text x="375" y="460" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">REAL DOCUMENTS</text>
                                    <text x="375" y="500" text-anchor="middle" fill="#fff" font-size="24">Fantasy shows reality</text>
                                    <text x="375" y="540" text-anchor="middle" fill="#888" font-size="24">Clothes • Food • Castles</text>

                                    <rect x="565" y="370" width="320" height="200" rx="16" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="3"/>
                                    <circle cx="725" cy="410" r="26" fill="#3b82f6"/>
                                    <text x="725" y="420" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">5</text>
                                    <text x="725" y="460" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">SUDDEN END</text>
                                    <text x="725" y="500" text-anchor="middle" fill="#fff" font-size="24">Renaissance swept in</text>
                                    <text x="725" y="540" text-anchor="middle" fill="#888" font-size="24">Why? = key insight</text>

                                    <!-- Conversation bubble - more spacing from boxes -->
                                    <rect x="40" y="610" width="1020" height="280" rx="18" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="32">IMPRESS YOUR FRIENDS:</text>
                                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="25">"International Gothic wasn't 'primitive medieval art' — it was</text>
                                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="25">deliberately elegant escapism created during Europe's darkest hour,</text>
                                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="25">using technical skills Renaissance artists would later envy."</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Spotting International Gothic in Museums",
                            content: "Next time you're in a museum, here's how to identify International Gothic works:\n\nLOOK FOR: Swaying figures, gold backgrounds, intricate textile patterns, charming animals, courtly scenes, Gothic pointed arches in frames.\n\nCHECK THE DATE: Most works are from 1375-1425. Earlier is 'just' Gothic; later starts showing Renaissance influence.\n\nNOTICE THE SPACE: Is there realistic depth? If not, and figures seem to float on gold or stack vertically, it's probably International Gothic.\n\nEXAMINE FACES: International Gothic faces are idealized, sweet, somewhat generic. Renaissance faces show individual character.\n\nFAMOUS EXAMPLES TO SEEK OUT:\n- The Wilton Diptych (National Gallery, London)\n- Works by Lorenzo Monaco (Uffizi, Florence)\n- The Tres Riches Heures (facsimiles in many museums)\n- Gentile da Fabriano's works (Uffizi, Florence)",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                                    <text x="550" y="40" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MUSEUM GUIDE: SPOTTING THE STYLE</text>
                                    <text x="550" y="75" text-anchor="middle" fill="#888" font-size="25">4 things to look for when identifying International Gothic</text>

                                    <!-- 4 Visual Checklist Items - 2x2 grid with better spacing -->
                                    <rect x="40" y="100" width="495" height="210" rx="16" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                                    <text x="288" y="138" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="27">✓ LOOK FOR S-CURVES</text>
                                    <path d="M 100 165 Q 75 215 100 265 Q 125 295 100 315" stroke="#ec4899" stroke-width="4" fill="none"/>
                                    <circle cx="100" cy="155" r="16" fill="none" stroke="#ec4899" stroke-width="3"/>
                                    <text x="320" y="195" text-anchor="middle" fill="#fff" font-size="24">Figures sway elegantly</text>
                                    <text x="320" y="230" text-anchor="middle" fill="#fff" font-size="24">in Gothic "S" pose</text>
                                    <text x="320" y="270" text-anchor="middle" fill="#888" font-size="23">Like a fashion model</text>

                                    <rect x="565" y="100" width="495" height="210" rx="16" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="812" y="138" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="27">✓ CHECK FOR GOLD</text>
                                    <rect x="615" y="165" width="80" height="110" fill="#ffd700"/>
                                    <circle cx="655" cy="200" r="16" fill="#ffe4c4"/>
                                    <rect x="642" y="220" width="30" height="45" fill="#3b82f6"/>
                                    <text x="850" y="195" text-anchor="middle" fill="#fff" font-size="24">Gold = divine light</text>
                                    <text x="850" y="230" text-anchor="middle" fill="#fff" font-size="24">Not just decoration</text>
                                    <text x="850" y="270" text-anchor="middle" fill="#888" font-size="23">Sacred, eternal space</text>

                                    <rect x="40" y="340" width="495" height="210" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="288" y="378" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="27">✓ NOTICE FLAT SPACE</text>
                                    <rect x="80" y="405" width="110" height="110" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2"/>
                                    <rect x="95" y="450" width="22" height="55" fill="#10b981"/>
                                    <rect x="122" y="435" width="22" height="70" fill="#f59e0b"/>
                                    <rect x="149" y="420" width="22" height="85" fill="#ef4444"/>
                                    <text x="350" y="440" text-anchor="middle" fill="#fff" font-size="24">No perspective</text>
                                    <text x="350" y="475" text-anchor="middle" fill="#fff" font-size="24">Figures stack or float</text>
                                    <text x="350" y="515" text-anchor="middle" fill="#888" font-size="23">Stage set, not reality</text>

                                    <rect x="565" y="340" width="495" height="210" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                                    <text x="812" y="378" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="27">✓ EXAMINE FACES</text>
                                    <circle cx="670" cy="465" r="38" fill="#ffe4c4" stroke="#10b981" stroke-width="3"/>
                                    <circle cx="658" cy="455" r="6" fill="#000"/>
                                    <circle cx="682" cy="455" r="6" fill="#000"/>
                                    <path d="M 658 478 Q 670 488 682 478" stroke="#000" stroke-width="2" fill="none"/>
                                    <text x="670" y="525" text-anchor="middle" fill="#10b981" font-size="23">Idealized</text>
                                    <text x="880" y="440" text-anchor="middle" fill="#fff" font-size="24">Sweet, generic</text>
                                    <text x="880" y="475" text-anchor="middle" fill="#fff" font-size="24">vs. Renaissance</text>
                                    <text x="880" y="515" text-anchor="middle" fill="#888" font-size="23">individual character</text>

                                    <!-- Famous Examples Section - more spacing from checklist -->
                                    <rect x="40" y="590" width="1020" height="340" rx="16" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="550" y="640" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="30">FAMOUS EXAMPLES TO FIND IN MUSEUMS</text>

                                    <rect x="60" y="680" width="220" height="220" rx="12" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="170" y="740" text-anchor="middle" fill="#ffd700" font-size="25" font-weight="bold">Wilton Diptych</text>
                                    <text x="170" y="800" text-anchor="middle" fill="#fff" font-size="24">National Gallery</text>
                                    <text x="170" y="850" text-anchor="middle" fill="#888" font-size="24">London</text>

                                    <rect x="300" y="680" width="220" height="220" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="410" y="740" text-anchor="middle" fill="#8b5cf6" font-size="25" font-weight="bold">Lorenzo Monaco</text>
                                    <text x="410" y="800" text-anchor="middle" fill="#fff" font-size="24">Uffizi Gallery</text>
                                    <text x="410" y="850" text-anchor="middle" fill="#888" font-size="24">Florence</text>

                                    <rect x="540" y="680" width="240" height="220" rx="12" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="660" y="740" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">Très Riches Heures</text>
                                    <text x="660" y="800" text-anchor="middle" fill="#fff" font-size="24">Facsimiles</text>
                                    <text x="660" y="850" text-anchor="middle" fill="#888" font-size="24">Many museums</text>

                                    <rect x="800" y="680" width="240" height="220" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="925" y="735" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Gentile da Fabriano</text>
                                    <text x="925" y="800" text-anchor="middle" fill="#fff" font-size="24">Uffizi Gallery</text>
                                    <text x="925" y="850" text-anchor="middle" fill="#888" font-size="24">Florence</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "In International Gothic art, gold backgrounds represented:",
                            options: [
                                { text: "The artist's wealth and status", correct: false },
                                { text: "Divine light and heavenly, eternal space", correct: true },
                                { text: "Simply decoration with no deeper meaning", correct: false },
                                { text: "The patron's request for expensive materials", correct: false }
                            ],
                            explanation: "Gold in medieval art symbolized divine light - the uncreated light of heaven. A gold background indicated that the scene took place in sacred, eternal space outside normal time and place. This is why Renaissance artists' shift to blue sky backgrounds was philosophically significant, not just stylistically different."
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:

1. THE NORTHERN DIFFERENCE:
• Focused on oil painting and microscopic detail, not perspective and classical forms
• No Roman ruins to revive, so observed nature instead
• Wealthy merchant patrons wanted domestic scenes

2. VAN EYCK'S FOUR SECRETS (GOLD):
• Glazes - layered, transparent oil paint
• Observation - microscopic, precise detail
• Light - realistic, consistent lighting effects
• Disguised symbolism - hidden religious meanings

3. THE ARNOLFINI PORTRAIT:
• Most analyzed painting in Western art
• Every object carries symbolic meaning
• Convex mirror shows the artist as witness
• 'Jan van Eyck was here 1434' - not 'made this'

4. DISGUISED SYMBOLISM:
• Candle = God's presence
• Dog = Fidelity
• Mirror = God's all-seeing eye
• Green = Fertility
• Removed shoes = Holy ground

5. NORTH VS SOUTH:
• Different, not better or worse
• Both valid approaches to truth in art
• They eventually influenced each other

You can now discuss Van Eyck and Northern Renaissance art with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">LESSON COMPLETE!</text>

                                    <!-- Row 1: Two large boxes -->
                                    <rect x="40" y="85" width="500" height="170" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="290" y="145" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">1. DIFFERENT PATH</text>
                                    <text x="290" y="195" text-anchor="middle" fill="#fff" font-size="28">Oil + Detail + Symbolism</text>

                                    <rect x="560" y="85" width="500" height="170" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="145" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">2. GOLD MNEMONIC</text>
                                    <text x="810" y="195" text-anchor="middle" fill="#fff" font-size="28">Van Eyck's 4 Secrets</text>

                                    <!-- Row 2: Two large boxes -->
                                    <rect x="40" y="275" width="500" height="170" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="335" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">3. ARNOLFINI PORTRAIT</text>
                                    <text x="290" y="385" text-anchor="middle" fill="#fff" font-size="28">Most Analyzed Painting</text>

                                    <rect x="560" y="275" width="500" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="810" y="335" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">4. SYMBOLISM</text>
                                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="28">Candle=God, Dog=Fidelity</text>

                                    <!-- Row 3: One centered box -->
                                    <rect x="300" y="465" width="500" height="100" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="510" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">5. NORTH VS SOUTH</text>
                                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="26">Different approaches, both valid</text>

                                    <!-- Feynman badge -->
                                    <rect x="200" y="590" width="700" height="85" rx="40" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">FEYNMAN TEST READY - You can explain it!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why did the Renaissance begin in Florence specifically?",
                            options: [
                                { text: "It had the largest population in Europe", correct: false },
                                { text: "The Pope lived there and demanded great art", correct: false },
                                { text: "Wealthy banking families competed through art patronage in a republican city-state", correct: true },
                                { text: "It was the only place where ancient Roman ruins survived", correct: false }
                            ],
                            explanation: "Florence was uniquely positioned: wealthy merchant-banking families (especially the Medici) competed for prestige through art patronage, the city was a republic that valued civic pride, and Florentines saw themselves as heirs to ancient Rome. This created the perfect conditions for artistic revolution."
                        },
                        {
                            type: "example",
                            title: "Brunelleschi's Perspective Experiment (c. 1413)",
                            content: "Filippo Brunelleschi didn't just invent linear perspective - he PROVED it worked with an ingenious experiment that amazed Florence.\n\nTHE SETUP:\n1. He painted a small panel showing the Florence Baptistery (a famous octagonal building) using his new mathematical perspective system\n2. He drilled a small peephole through the center of the painted panel\n3. He coated a flat mirror to reflect the sky\n\nTHE DEMONSTRATION:\n1. Standing in the exact spot where he'd made the painting, he held the panel with the painted side facing away\n2. He looked through the peephole from behind at a mirror held in his other hand\n3. The painting's reflection in the mirror matched the real building PERFECTLY\n\nWHY THIS MATTERED:\n• It proved perspective could mathematically recreate how we actually see\n• Before this, artists guessed at depth - now they had a SYSTEM\n• It transformed painting from craft to science\n• Every realistic painting since uses his principles\n\nThe three key rules he established:\n1. All parallel lines converge at a single vanishing point\n2. Objects shrink proportionally with distance\n3. The vanishing point sits at the viewer's eye level",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 950" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="950" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="40">HOW BRUNELLESCHI PROVED PERSPECTIVE WORKS</text>

                                    <!-- 3 Steps - 320px wide boxes, 40px gaps -->
                                    <!-- Step 1 -->
                                    <rect x="50" y="90" width="320" height="360" rx="16" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="210" y="135" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">STEP 1</text>
                                    <text x="210" y="175" text-anchor="middle" fill="#fff" font-size="26">Paint the Baptistery</text>
                                    <!-- Mini painting - smaller house -->
                                    <rect x="120" y="210" width="180" height="140" fill="#87ceeb" stroke="#fff" stroke-width="2"/>
                                    <rect x="160" y="270" width="100" height="70" fill="#8b4513"/>
                                    <polygon points="160,270 210,220 260,270" fill="#8b4513"/>
                                    <text x="210" y="400" text-anchor="middle" fill="#ccc" font-size="24">On a small panel</text>

                                    <!-- Step 2 -->
                                    <rect x="390" y="90" width="320" height="360" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="550" y="135" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">STEP 2</text>
                                    <text x="550" y="175" text-anchor="middle" fill="#fff" font-size="26">Drill a peephole</text>
                                    <!-- Panel with hole - smaller -->
                                    <rect x="460" y="210" width="180" height="150" fill="#d4a574" stroke="#8b4513" stroke-width="4"/>
                                    <circle cx="550" cy="285" r="22" fill="#1a1a2e"/>
                                    <text x="550" y="400" text-anchor="middle" fill="#ccc" font-size="24">In the center</text>

                                    <!-- Step 3 -->
                                    <rect x="730" y="90" width="320" height="360" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="890" y="135" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">STEP 3</text>
                                    <text x="890" y="175" text-anchor="middle" fill="#fff" font-size="26">View through mirror</text>
                                    <!-- Mirror reflection - smaller -->
                                    <rect x="800" y="210" width="180" height="150" fill="#c0c0c0" stroke="#fff" stroke-width="4"/>
                                    <rect x="840" y="250" width="100" height="80" fill="#8b4513" opacity="1"/>
                                    <text x="890" y="400" text-anchor="middle" fill="#ccc" font-size="24">Painting matches reality!</text>

                                    <!-- Key Principles box - wider -->
                                    <rect x="50" y="480" width="1000" height="420" rx="16" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="550" y="535" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="36">3 KEY PRINCIPLES OF LINEAR PERSPECTIVE</text>

                                    <!-- Principle 1 - Row 1 Left -->
                                    <circle cx="130" cy="620" r="50" fill="#f59e0b"/>
                                    <text x="130" y="632" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="36">1</text>
                                    <text x="340" y="608" text-anchor="middle" fill="#fff" font-size="24">All parallel lines converge</text>
                                    <text x="340" y="642" text-anchor="middle" fill="#ccc" font-size="22">at a single VANISHING POINT</text>

                                    <!-- Principle 2 - Row 1 Right -->
                                    <circle cx="630" cy="620" r="50" fill="#8b5cf6"/>
                                    <text x="630" y="632" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">2</text>
                                    <text x="840" y="608" text-anchor="middle" fill="#fff" font-size="24">Objects shrink proportionally</text>
                                    <text x="840" y="642" text-anchor="middle" fill="#ccc" font-size="22">as they get farther away</text>

                                    <!-- Principle 3 - Row 2 Centered -->
                                    <circle cx="380" cy="760" r="50" fill="#10b981"/>
                                    <text x="380" y="772" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="36">3</text>
                                    <text x="620" y="748" text-anchor="middle" fill="#fff" font-size="24">Vanishing point sits at</text>
                                    <text x="620" y="782" text-anchor="middle" fill="#ccc" font-size="22">viewer's eye level (horizon line)</text>
                                </svg>`,
                                caption: "This experiment gave artists a scientific tool for creating 3D illusions on flat surfaces"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What made Brunelleschi's perspective demonstration so revolutionary?",
                            options: [
                                { text: "It was the first painting ever made", correct: false },
                                { text: "It used gold leaf for the first time", correct: false },
                                { text: "It mathematically proved that painted perspective could match reality", correct: true },
                                { text: "It was painted on glass instead of wood", correct: false }
                            ],
                            explanation: "Brunelleschi's genius was proving his system worked scientifically. By looking through a peephole at a mirror reflecting his painting, viewers could see the painted image perfectly match the real building - proof that mathematical perspective could recreate actual vision."
                        },
                        {
                            type: "example",
                            title: "Masaccio's Holy Trinity (1427): Perspective in Action",
                            content: "Tommaso di Ser Giovanni di Simone, called Masaccio ('clumsy Tom'), painted this fresco when he was just 25. It revolutionized painting forever.\n\nWHAT MAKES IT SPECIAL:\n\n1. FIRST FULL PERSPECTIVE PAINTING: Using Brunelleschi's system, Masaccio created an illusion so convincing that viewers thought they were looking into a real chapel cut into the church wall.\n\n2. THE VANISHING POINT: Located at viewer's eye level (about 5 feet up the wall), exactly where a standing person would look. The architectural space recedes mathematically correctly.\n\n3. THE BARREL VAULT: A semicircular Roman-style ceiling with coffered (recessed square) panels. Each panel shrinks perfectly toward the vanishing point.\n\n4. THE FIGURES HAVE WEIGHT: Unlike Gothic floating figures, these people stand solidly. Mary gestures toward Christ like a real person would.\n\n5. THE SKELETON (MEMENTO MORI): Below the main scene lies a painted skeleton on a tomb with the inscription: 'I once was what you are, and what I am you also will be.'\n\nWHY THIS PAINTING MATTERS:\n• Proved perspective could create convincing sacred spaces\n• Influenced every painter who saw it (including Leonardo and Michelangelo)\n• Combined religious meaning with scientific precision\n• Still fools the eye today, nearly 600 years later",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 950" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="950" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="40">MASACCIO'S HOLY TRINITY - PERSPECTIVE ANALYSIS</text>

                                    <!-- Fresco outline - centered with room for annotations -->
                                    <rect x="330" y="80" width="440" height="720" fill="#d4c4b0" rx="14"/>

                                    <!-- Architectural elements -->
                                    <!-- Barrel vault -->
                                    <ellipse cx="550" cy="140" rx="180" ry="55" fill="#8b7355"/>
                                    <rect x="375" y="140" width="350" height="400" fill="#a08060"/>

                                    <!-- Coffered ceiling lines -->
                                    <line x1="390" y1="160" x2="550" y2="280" stroke="#6b5344" stroke-width="2"/>
                                    <line x1="710" y1="160" x2="550" y2="280" stroke="#6b5344" stroke-width="2"/>
                                    <line x1="405" y1="210" x2="550" y2="310" stroke="#6b5344" stroke-width="2"/>
                                    <line x1="695" y1="210" x2="550" y2="310" stroke="#6b5344" stroke-width="2"/>

                                    <!-- Cross -->
                                    <line x1="550" y1="230" x2="550" y2="500" stroke="#5c4033" stroke-width="12"/>
                                    <line x1="475" y1="290" x2="625" y2="290" stroke="#5c4033" stroke-width="12"/>

                                    <!-- Vanishing point marker -->
                                    <circle cx="550" cy="560" r="16" fill="#ef4444"/>
                                    <text x="550" y="610" text-anchor="middle" fill="#ef4444" font-size="28">Vanishing Point</text>
                                    <text x="550" y="645" text-anchor="middle" fill="#ccc" font-size="24">(Viewer's Eye Level)</text>

                                    <!-- Perspective lines -->
                                    <line x1="330" y1="800" x2="550" y2="560" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8"/>
                                    <line x1="770" y1="800" x2="550" y2="560" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8"/>
                                    <line x1="375" y1="560" x2="550" y2="560" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8"/>
                                    <line x1="725" y1="560" x2="550" y2="560" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8"/>

                                    <!-- Skeleton (memento mori) -->
                                    <rect x="400" y="690" width="300" height="100" fill="#d4c4b0" stroke="#8b7355" stroke-width="2"/>
                                    <text x="550" y="750" text-anchor="middle" fill="#5c4033" font-size="28">SKELETON</text>

                                    <!-- Annotations - Left Side -->
                                    <rect x="40" y="120" width="260" height="130" rx="14" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="170" y="170" text-anchor="middle" fill="#3b82f6" font-size="28">Barrel Vault</text>
                                    <text x="170" y="205" text-anchor="middle" fill="#fff" font-size="22">Creates illusionistic</text>
                                    <text x="170" y="230" text-anchor="middle" fill="#fff" font-size="22">depth</text>

                                    <!-- Annotations - Right Side -->
                                    <rect x="800" y="280" width="260" height="140" rx="14" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="930" y="335" text-anchor="middle" fill="#10b981" font-size="30">Hierarchy</text>
                                    <text x="930" y="375" text-anchor="middle" fill="#fff" font-size="24">God → Christ → Mary</text>

                                    <rect x="800" y="680" width="260" height="160" rx="14" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="930" y="735" text-anchor="middle" fill="#f59e0b" font-size="30">Memento Mori</text>
                                    <text x="930" y="775" text-anchor="middle" fill="#fff" font-size="24">"What you are,</text>
                                    <text x="930" y="810" text-anchor="middle" fill="#fff" font-size="24">I once was"</text>
                                </svg>`,
                                caption: "The vanishing point at viewer's eye level creates an illusion of a real chapel"
                            }
                        },
                        {
                            type: "example",
                            title: "Donatello's 4 Revolutionary Innovations",
                            content: "Donato di Niccolò di Betto Bardi, called Donatello, worked for over 60 years and revolutionized sculpture in ways that are still influential today.\n\nINNOVATION 1: THE BRONZE DAVID (c. 1440s)\n• First free-standing nude male sculpture since ancient Rome\n• Shocking at the time - nudity in art had been taboo for 1000 years\n• Shows David as a young boy, not a warrior - contemplative, almost feminine\n• Cast in bronze using lost-wax technique\n\nINNOVATION 2: SCHIACCIATO (ski-ah-CHA-to)\n• Italian for 'squashed' or 'flattened'\n• Ultra-shallow relief carving that creates depth illusion\n• Donatello carved figures that appear to recede into space using paper-thin variations in depth\n• Applied perspective principles to sculpture\n\nINNOVATION 3: PSYCHOLOGICAL DEPTH\n• His figures show real emotions: pride, weariness, sternness, anguish\n• Before Donatello, sculptures showed types, not individuals\n• His prophets look like real men you might meet on the street\n\nINNOVATION 4: CONTRAPPOSTO (contra-POST-oh)\n• Italian for 'counterpose'\n• Weight shifted to one leg, creating natural S-curve\n• Revived ancient Greek technique that had been lost\n• Made figures look alive, not stiff",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 800" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="800" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">DONATELLO (c. 1386-1466) - SCULPTURE MASTER</text>

                                    <!-- 2x2 grid: 480px wide boxes -->
                                    <!-- Innovation 1: David - figure moved up for yellow tag space -->
                                    <rect x="50" y="85" width="480" height="310" rx="16" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="290" y="125" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">DAVID (c. 1440s)</text>
                                    <!-- Simplified figure - moved up -->
                                    <circle cx="140" cy="195" r="24" fill="#cd853f"/>
                                    <ellipse cx="140" cy="260" rx="32" ry="55" fill="#cd853f"/>
                                    <text x="340" y="185" text-anchor="middle" fill="#fff" font-size="24">First free-standing</text>
                                    <text x="340" y="215" text-anchor="middle" fill="#fff" font-size="24">nude male sculpture</text>
                                    <text x="340" y="250" text-anchor="middle" fill="#ccc" font-size="22">since ancient Rome!</text>
                                    <rect x="80" y="335" width="420" height="45" rx="10" fill="rgba(245,158,11,0.3)"/>
                                    <text x="290" y="365" text-anchor="middle" fill="#f59e0b" font-size="22">BRONZE - CONTEMPLATIVE - YOUTHFUL</text>

                                    <!-- Innovation 2: Schiacciato - centered boxes -->
                                    <rect x="570" y="85" width="480" height="310" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="125" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">SCHIACCIATO</text>
                                    <text x="810" y="160" text-anchor="middle" fill="#ccc" font-size="24">(ski-ah-CHA-to)</text>
                                    <!-- Depth demonstration - centered in box -->
                                    <rect x="650" y="190" width="130" height="100" fill="#2a2a4e" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="715" y="250" text-anchor="middle" fill="#fff" font-size="24">DEEP</text>
                                    <rect x="800" y="205" width="130" height="70" fill="#3a3a5e" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="865" y="250" text-anchor="middle" fill="#fff" font-size="24">SHALLOW</text>
                                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="24">Very shallow carving</text>
                                    <text x="810" y="365" text-anchor="middle" fill="#ccc" font-size="22">creates depth illusion</text>

                                    <!-- Innovation 3: Psychological Depth -->
                                    <rect x="50" y="420" width="480" height="300" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">PSYCHOLOGICAL DEPTH</text>
                                    <!-- Face expressions -->
                                    <circle cx="140" cy="560" r="55" fill="#ffe4c4" stroke="#10b981" stroke-width="2"/>
                                    <path d="M 122 548 Q 140 560 158 548" stroke="#333" stroke-width="3" fill="none"/>
                                    <text x="140" y="630" text-anchor="middle" fill="#ccc" font-size="22">PROUD</text>
                                    <circle cx="290" cy="560" r="55" fill="#ffe4c4" stroke="#10b981" stroke-width="2"/>
                                    <path d="M 272 555 Q 290 540 308 555" stroke="#333" stroke-width="3" fill="none"/>
                                    <text x="290" y="630" text-anchor="middle" fill="#ccc" font-size="22">WEARY</text>
                                    <circle cx="440" cy="560" r="55" fill="#ffe4c4" stroke="#10b981" stroke-width="2"/>
                                    <line x1="422" y1="553" x2="458" y2="553" stroke="#333" stroke-width="3"/>
                                    <text x="440" y="630" text-anchor="middle" fill="#ccc" font-size="22">STERN</text>
                                    <text x="290" y="690" text-anchor="middle" fill="#fff" font-size="24">Real emotions in stone</text>

                                    <!-- Innovation 4: Contrapposto -->
                                    <rect x="570" y="420" width="480" height="300" rx="16" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="810" y="465" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="32">CONTRAPPOSTO</text>
                                    <text x="810" y="500" text-anchor="middle" fill="#ccc" font-size="24">(contra-POST-oh)</text>
                                    <!-- Figure with shifted weight -->
                                    <circle cx="810" cy="550" r="22" fill="#ffe4c4"/>
                                    <line x1="810" y1="575" x2="805" y2="640" stroke="#ffe4c4" stroke-width="6"/>
                                    <line x1="805" y1="605" x2="765" y2="590" stroke="#ffe4c4" stroke-width="5"/>
                                    <line x1="805" y1="605" x2="840" y2="625" stroke="#ffe4c4" stroke-width="5"/>
                                    <line x1="805" y1="640" x2="790" y2="690" stroke="#ffe4c4" stroke-width="5"/>
                                    <line x1="805" y1="640" x2="825" y2="690" stroke="#ffe4c4" stroke-width="5"/>
                                    <text x="700" y="640" text-anchor="middle" fill="#fff" font-size="24">Weight</text>
                                    <text x="700" y="675" text-anchor="middle" fill="#fff" font-size="24">shifted</text>
                                    <path d="M 725 655 L 765 670" stroke="#ec4899" stroke-width="2"/>
                                </svg>`,
                                caption: "These innovations transformed how sculptors captured the human form and spirit"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was revolutionary about Donatello's Bronze David?",
                            options: [
                                { text: "It was the largest sculpture ever made", correct: false },
                                { text: "It was the first free-standing nude male sculpture since ancient Rome", correct: true },
                                { text: "It was made from a new type of metal", correct: false },
                                { text: "It was the first sculpture to show a Biblical figure", correct: false }
                            ],
                            explanation: "Donatello's Bronze David (c. 1440s) was the first free-standing nude male sculpture created since ancient Rome - over 1000 years. This was a radical revival of classical tradition that shocked contemporaries but helped establish the Renaissance ideal of the human body."
                        },
                        {
                            type: "concept",
                            title: "Alberti: The Man Who Wrote the Rules",
                            content: "Leon Battista Alberti didn't invent perspective or create famous sculptures - he did something equally important: he EXPLAINED how Renaissance art worked.\n\nHIS KEY WRITINGS:\n\n'ON PAINTING' (De Pictura, 1435):\n• First systematic treatise on painting\n• Explained perspective in mathematical terms anyone could learn\n• Introduced the 'window' metaphor - a painting is like looking through a window\n• Argued painters should study geometry, optics, and anatomy\n\n'ON ARCHITECTURE' (De re aedificatoria, 1452):\n• First architectural treatise since ancient Rome\n• Adapted classical principles for modern buildings\n• Influenced architecture for 400 years\n\nHIS FAMOUS QUOTE:\n'The painter who draws merely by practice and by eye, without any reason, is like a mirror which copies everything placed in front of it without being conscious of their existence.'\n\nWHY THIS MATTERS:\n• Before Alberti, artists learned by apprenticeship and imitation\n• After Alberti, art became a learnable intellectual discipline\n• His books spread Florentine ideas across Europe\n• He invented the concept of the 'Renaissance man' - someone who excels at many fields",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 800" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="800" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="44">ALBERTI: THE RENAISSANCE RULEBOOK</text>

                                    <!-- Two main boxes - 480px each, taller to fit content -->
                                    <rect x="50" y="100" width="480" height="290" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="290" y="150" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">ON PAINTING (1435)</text>
                                    <text x="290" y="195" text-anchor="middle" fill="#fff" font-size="24">- Mathematical perspective</text>
                                    <text x="290" y="230" text-anchor="middle" fill="#fff" font-size="24">- 'Window' metaphor</text>
                                    <text x="290" y="265" text-anchor="middle" fill="#fff" font-size="24">- Art as science</text>
                                    <text x="290" y="350" text-anchor="middle" fill="#ccc" font-size="22">First art theory book</text>

                                    <rect x="570" y="100" width="480" height="290" rx="16" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="810" y="150" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">ON ARCHITECTURE</text>
                                    <text x="810" y="190" text-anchor="middle" fill="#f59e0b" font-size="26">(1452)</text>
                                    <text x="810" y="230" text-anchor="middle" fill="#fff" font-size="24">- Classical principles</text>
                                    <text x="810" y="265" text-anchor="middle" fill="#fff" font-size="24">- Proportion systems</text>
                                    <text x="810" y="350" text-anchor="middle" fill="#ccc" font-size="22">Influenced 400 years of design</text>

                                    <!-- Quote box - wider -->
                                    <rect x="80" y="420" width="940" height="160" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="470" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="26">"The painter who draws merely by practice and by eye,</text>
                                    <text x="550" y="505" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="26">without any reason, is like a mirror which copies</text>
                                    <text x="550" y="540" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="26">everything without being conscious of their existence."</text>

                                    <!-- Renaissance Man capsule -->
                                    <rect x="200" y="610" width="700" height="120" rx="60" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="550" y="665" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">THE ORIGINAL 'RENAISSANCE MAN'</text>
                                    <text x="550" y="700" text-anchor="middle" fill="#ccc" font-size="24">Architect - Author - Athlete - Mathematician</text>
                                </svg>`
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was Alberti's key contribution to Renaissance art?",
                            options: [
                                { text: "He painted the most famous frescoes", correct: false },
                                { text: "He invented the printing press", correct: false },
                                { text: "He wrote treatises explaining artistic principles that spread across Europe", correct: true },
                                { text: "He discovered ancient Roman sculptures", correct: false }
                            ],
                            explanation: "Alberti's treatises 'On Painting' and 'On Architecture' were revolutionary because they explained Renaissance artistic principles in learnable, systematic terms. His books transformed art from a craft learned by imitation to an intellectual discipline based on mathematics, geometry, and classical study."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: BMDA",
                            content: "Remember the Florentine Four with BMDA - 'Big Men Did Art':\n\nB - BRUNELLESCHI (perspective inventor)\n• Think: 'B' for 'Baptistery' - where he did his famous experiment\n• Also built the dome (B for Building)\n\nM - MASACCIO (first perspective painter)\n• Think: 'M' for 'Magic' - his Holy Trinity looks magical\n• Died young at 27 (M for Mortality)\n\nD - DONATELLO (sculpture revolutionary)\n• Think: Teenage Mutant Ninja Turtles! (named after these artists)\n• 'D' for 'David' - his famous nude\n\nA - ALBERTI (wrote the rulebook)\n• Think: 'A' for 'Author' - he wrote the theory\n• 'A' for 'All-rounder' - the Renaissance man\n\nCHRONOLOGICAL ORDER:\nBrunelleschi (1377) → Donatello (1386) → Masaccio (1401) → Alberti (1404)\n\nThe memory trick: The 'B' and 'D' came first (older generation), then 'M' and 'A' (younger generation).",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 800" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="800" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="48">B M D A</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="28">"Big Men Did Art"</text>

                                    <!-- 4 boxes: 230px each, 30px gaps -->
                                    <rect x="55" y="130" width="230" height="280" rx="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="170" y="185" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="56">B</text>
                                    <text x="170" y="230" text-anchor="middle" fill="#fff" font-size="26">Brunelleschi</text>
                                    <text x="170" y="270" text-anchor="middle" fill="#ccc" font-size="24">Perspective</text>
                                    <text x="170" y="305" text-anchor="middle" fill="#ccc" font-size="24">B = Baptistery</text>
                                    <text x="170" y="370" text-anchor="middle" fill="#f59e0b" font-size="24">1377</text>

                                    <rect x="315" y="130" width="230" height="280" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="430" y="185" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="56">M</text>
                                    <text x="430" y="230" text-anchor="middle" fill="#fff" font-size="26">Masaccio</text>
                                    <text x="430" y="270" text-anchor="middle" fill="#ccc" font-size="24">Painting</text>
                                    <text x="430" y="305" text-anchor="middle" fill="#ccc" font-size="24">M = Magic</text>
                                    <text x="430" y="370" text-anchor="middle" fill="#ef4444" font-size="24">1401</text>

                                    <rect x="575" y="130" width="230" height="280" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="690" y="185" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="56">D</text>
                                    <text x="690" y="230" text-anchor="middle" fill="#fff" font-size="26">Donatello</text>
                                    <text x="690" y="270" text-anchor="middle" fill="#ccc" font-size="24">Sculpture</text>
                                    <text x="690" y="305" text-anchor="middle" fill="#ccc" font-size="24">D = David</text>
                                    <text x="690" y="370" text-anchor="middle" fill="#10b981" font-size="24">1386</text>

                                    <rect x="835" y="130" width="230" height="280" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="950" y="185" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="56">A</text>
                                    <text x="950" y="230" text-anchor="middle" fill="#fff" font-size="26">Alberti</text>
                                    <text x="950" y="270" text-anchor="middle" fill="#ccc" font-size="24">Theory</text>
                                    <text x="950" y="305" text-anchor="middle" fill="#ccc" font-size="24">A = Author</text>
                                    <text x="950" y="370" text-anchor="middle" fill="#8b5cf6" font-size="24">1404</text>

                                    <rect x="80" y="440" width="940" height="110" rx="14" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="485" text-anchor="middle" fill="#ec4899" font-size="28">FUN FACT: The Teenage Mutant Ninja Turtles</text>
                                    <text x="550" y="525" text-anchor="middle" fill="#ccc" font-size="24">are named after these Renaissance artists!</text>

                                    <rect x="80" y="570" width="940" height="110" rx="14" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="550" y="615" text-anchor="middle" fill="#3b82f6" font-size="26">CHRONOLOGICAL: B (1377) → D (1386) → M (1401) → A (1404)</text>
                                    <text x="550" y="655" text-anchor="middle" fill="#ccc" font-size="22">Older generation (BD) taught younger generation (MA)</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Why the Early Renaissance Matters",
                            content: "Here's what you can say to show you really understand the Early Florentine Renaissance:\n\n1. 'IT WAS MORE SCIENTIFIC THAN ARTISTIC'\n'Renaissance artists didn't just have better taste - they applied mathematics, geometry, and optics to create systematic methods. Brunelleschi's perspective wasn't an artistic flourish; it was geometry.'\n\n2. 'FLORENCE WAS TINY BUT MIGHTY'\n'This revolution happened in a city of only 60,000 people - smaller than many suburbs today. But wealth, competition, and civic pride created perfect conditions for innovation.'\n\n3. 'THEY WEREN'T REJECTING RELIGION'\n'Despite the focus on human achievement, these artists were deeply religious. They used new techniques to make sacred subjects more moving, not less. Masaccio's Holy Trinity combines mathematical precision with profound spiritual meaning.'\n\n4. 'IT SPREAD THROUGH BOOKS'\n'Alberti's treatises were revolutionary because they made artistic knowledge portable. Before him, you had to apprentice in Florence to learn these techniques.'\n\n5. 'THE NINJA TURTLES CONNECTION'\n'The Teenage Mutant Ninja Turtles are named Donatello, Raphael, Michelangelo, and Leonardo - all Renaissance artists. That's actually a great memory device!'",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 850" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="850" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">5 CONVERSATION STARTERS</text>

                                    <!-- 2x2 grid + 1 centered: 480px wide boxes -->
                                    <!-- Row 1 -->
                                    <rect x="50" y="100" width="480" height="200" rx="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <circle cx="100" cy="155" r="26" fill="#f59e0b"/>
                                    <text x="100" y="163" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="26">1</text>
                                    <text x="310" y="145" text-anchor="middle" fill="#f59e0b" font-size="28" font-weight="bold">SCIENCE + ART</text>
                                    <text x="310" y="185" text-anchor="middle" fill="#fff" font-size="24">"Renaissance art was</text>
                                    <text x="310" y="218" text-anchor="middle" fill="#fff" font-size="24">geometry, not just taste"</text>
                                    <text x="310" y="258" text-anchor="middle" fill="#ccc" font-size="22">Brunelleschi = math genius</text>

                                    <rect x="570" y="100" width="480" height="200" rx="14" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="620" cy="155" r="26" fill="#10b981"/>
                                    <text x="620" y="163" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="26">2</text>
                                    <text x="830" y="145" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">TINY CITY</text>
                                    <text x="830" y="185" text-anchor="middle" fill="#fff" font-size="24">"Florence had only</text>
                                    <text x="830" y="218" text-anchor="middle" fill="#fff" font-size="24">60,000 people"</text>
                                    <text x="830" y="258" text-anchor="middle" fill="#ccc" font-size="22">Smaller than many suburbs</text>

                                    <!-- Row 2 -->
                                    <rect x="50" y="330" width="480" height="200" rx="14" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="100" cy="385" r="26" fill="#8b5cf6"/>
                                    <text x="100" y="393" text-anchor="middle" fill="#fff" font-weight="bold" font-size="26">3</text>
                                    <text x="310" y="375" text-anchor="middle" fill="#8b5cf6" font-size="28" font-weight="bold">STILL RELIGIOUS</text>
                                    <text x="310" y="415" text-anchor="middle" fill="#fff" font-size="24">"New techniques made</text>
                                    <text x="310" y="448" text-anchor="middle" fill="#fff" font-size="24">sacred art MORE moving"</text>
                                    <text x="310" y="488" text-anchor="middle" fill="#ccc" font-size="22">Not anti-Christian</text>

                                    <rect x="570" y="330" width="480" height="200" rx="14" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                                    <circle cx="620" cy="385" r="26" fill="#ef4444"/>
                                    <text x="620" y="393" text-anchor="middle" fill="#fff" font-weight="bold" font-size="26">4</text>
                                    <text x="830" y="375" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">BOOKS SPREAD IT</text>
                                    <text x="830" y="415" text-anchor="middle" fill="#fff" font-size="24">"Alberti's treatises made</text>
                                    <text x="830" y="448" text-anchor="middle" fill="#fff" font-size="24">knowledge portable"</text>
                                    <text x="830" y="488" text-anchor="middle" fill="#ccc" font-size="22">Before: only apprentices learned</text>

                                    <!-- Row 3 - centered -->
                                    <rect x="310" y="560" width="480" height="200" rx="14" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="360" cy="615" r="26" fill="#ec4899"/>
                                    <text x="360" y="623" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="26">5</text>
                                    <text x="570" y="605" text-anchor="middle" fill="#ec4899" font-size="28" font-weight="bold">NINJA TURTLES!</text>
                                    <text x="570" y="645" text-anchor="middle" fill="#fff" font-size="24">"They're named after</text>
                                    <text x="570" y="678" text-anchor="middle" fill="#fff" font-size="24">Renaissance artists"</text>
                                    <text x="570" y="718" text-anchor="middle" fill="#ccc" font-size="22">Great memory device</text>

                                    <text x="550" y="810" text-anchor="middle" fill="#ffd700" font-size="28">Use these to sound knowledgeable at museums!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:

1. THE NORTHERN DIFFERENCE:
• Focused on oil painting and microscopic detail, not perspective and classical forms
• No Roman ruins to revive, so observed nature instead
• Wealthy merchant patrons wanted domestic scenes

2. VAN EYCK'S FOUR SECRETS (GOLD):
• Glazes - layered, transparent oil paint
• Observation - microscopic, precise detail
• Light - realistic, consistent lighting effects
• Disguised symbolism - hidden religious meanings

3. THE ARNOLFINI PORTRAIT:
• Most analyzed painting in Western art
• Every object carries symbolic meaning
• Convex mirror shows the artist as witness
• 'Jan van Eyck was here 1434' - not 'made this'

4. DISGUISED SYMBOLISM:
• Candle = God's presence
• Dog = Fidelity
• Mirror = God's all-seeing eye
• Green = Fertility
• Removed shoes = Holy ground

5. NORTH VS SOUTH:
• Different, not better or worse
• Both valid approaches to truth in art
• They eventually influenced each other

You can now discuss Van Eyck and Northern Renaissance art with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">LESSON COMPLETE!</text>

                                    <!-- Row 1: Two large boxes -->
                                    <rect x="40" y="85" width="500" height="170" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="290" y="145" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">1. DIFFERENT PATH</text>
                                    <text x="290" y="195" text-anchor="middle" fill="#fff" font-size="28">Oil + Detail + Symbolism</text>

                                    <rect x="560" y="85" width="500" height="170" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="145" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">2. GOLD MNEMONIC</text>
                                    <text x="810" y="195" text-anchor="middle" fill="#fff" font-size="28">Van Eyck's 4 Secrets</text>

                                    <!-- Row 2: Two large boxes -->
                                    <rect x="40" y="275" width="500" height="170" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="335" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">3. ARNOLFINI PORTRAIT</text>
                                    <text x="290" y="385" text-anchor="middle" fill="#fff" font-size="28">Most Analyzed Painting</text>

                                    <rect x="560" y="275" width="500" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="810" y="335" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">4. SYMBOLISM</text>
                                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="28">Candle=God, Dog=Fidelity</text>

                                    <!-- Row 3: One centered box -->
                                    <rect x="300" y="465" width="500" height="100" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="510" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">5. NORTH VS SOUTH</text>
                                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="26">Different approaches, both valid</text>

                                    <!-- Feynman badge -->
                                    <rect x="200" y="590" width="700" height="85" rx="40" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">FEYNMAN TEST READY - You can explain it!</text>
                                </svg>`,
                                caption: "Van Eyck's oil painting techniques created unprecedented realism"
                            }
                        },
                        {
                            type: "example",
                            title: "The Arnolfini Portrait (1434): A Detective Story",
                            content: "This is perhaps the most analyzed painting in Western art. Every detail has been debated for over a century. Here's what you need to know:\n\nWHAT WE SEE:\n• A man and woman in an expensive bedroom\n• He holds her hand and raises his other hand (oath gesture?)\n• She appears pregnant but may just be holding up her heavy dress\n• A small dog sits at their feet\n• A convex mirror on the back wall reflects the entire room\n\nWHAT SCHOLARS DEBATE:\n• Is this a wedding scene or a memorial (she may have died in childbirth)?\n• Are the two figures in the mirror's reflection witnesses - including the artist himself?\n• Is the raised hand an oath, a greeting, or a blessing?\n\nTHE SYMBOLISM (Disguised Symbolism at its finest):\n• ONE CANDLE LIT: God's presence witnessing the scene\n• REMOVED SHOES: They stand on 'holy ground' (like Moses)\n• DOG: Fidelity (fido = faithful)\n• GREEN DRESS: Hope for fertility\n• ORANGES: Wealth (oranges were extremely expensive)\n• CONVEX MIRROR: God's all-seeing eye\n\nTHE SIGNATURE:\nVan Eyck wrote above the mirror in elaborate script: 'Jan van Eyck was here 1434' - not 'made this' but 'WAS HERE' - suggesting he witnessed the scene.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 800" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="800" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">ARNOLFINI PORTRAIT</text>

                                    <!-- Painting frame centered - smaller to fit larger annotations -->
                                    <rect x="330" y="75" width="440" height="480" fill="#2d4a3e" rx="15"/>
                                    <rect x="345" y="90" width="410" height="450" fill="#4a6b5c"/>

                                    <!-- Chandelier -->
                                    <circle cx="550" cy="130" r="28" fill="none" stroke="#ffd700" stroke-width="3"/>
                                    <circle cx="550" cy="118" r="10" fill="#ffd700"/>

                                    <!-- Mirror -->
                                    <circle cx="550" cy="280" r="40" fill="#87ceeb" stroke="#8b4513" stroke-width="4"/>

                                    <!-- Figures -->
                                    <ellipse cx="460" cy="380" rx="60" ry="100" fill="#1a1a1a"/>
                                    <circle cx="460" cy="260" r="30" fill="#ffe4c4"/>
                                    <ellipse cx="640" cy="395" rx="65" ry="105" fill="#228b22"/>
                                    <circle cx="640" cy="270" r="30" fill="#ffe4c4"/>

                                    <!-- Dog -->
                                    <ellipse cx="550" cy="510" rx="50" ry="24" fill="#8b4513"/>

                                    <!-- Annotations - Left side (larger boxes) -->
                                    <line x1="330" y1="130" x2="230" y2="130" stroke="#ffd700" stroke-width="3"/>
                                    <rect x="20" y="80" width="210" height="100" rx="12" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="125" y="120" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">CHANDELIER</text>
                                    <text x="125" y="155" text-anchor="middle" fill="#fff" font-size="24">Divine presence</text>

                                    <line x1="330" y1="380" x2="230" y2="300" stroke="#ef4444" stroke-width="3"/>
                                    <rect x="20" y="250" width="210" height="100" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="125" y="290" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">SHOES OFF</text>
                                    <text x="125" y="325" text-anchor="middle" fill="#fff" font-size="24">Holy ground</text>

                                    <!-- Annotations - Right side (larger boxes) -->
                                    <line x1="770" y1="280" x2="870" y2="200" stroke="#3b82f6" stroke-width="3"/>
                                    <rect x="870" y="140" width="210" height="120" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="975" y="180" text-anchor="middle" fill="#3b82f6" font-size="26" font-weight="bold">MIRROR</text>
                                    <text x="975" y="215" text-anchor="middle" fill="#fff" font-size="22">Shows witnesses</text>
                                    <text x="975" y="245" text-anchor="middle" fill="#fff" font-size="22">and artist</text>

                                    <line x1="770" y1="395" x2="870" y2="340" stroke="#8b5cf6" stroke-width="3"/>
                                    <rect x="870" y="290" width="210" height="100" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="975" y="330" text-anchor="middle" fill="#8b5cf6" font-size="26" font-weight="bold">GREEN DRESS</text>
                                    <text x="975" y="365" text-anchor="middle" fill="#fff" font-size="24">Fertility hope</text>

                                    <line x1="620" y1="510" x2="870" y2="460" stroke="#10b981" stroke-width="3"/>
                                    <rect x="870" y="420" width="210" height="100" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="975" y="460" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">DOG</text>
                                    <text x="975" y="495" text-anchor="middle" fill="#fff" font-size="24">Fidelity/loyalty</text>

                                    <!-- Signature -->
                                    <rect x="250" y="570" width="600" height="70" rx="15" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="615" text-anchor="middle" fill="#ec4899" font-size="32" font-weight="bold">"Jan van Eyck was here 1434"</text>

                                    <!-- Bottom note -->
                                    <rect x="200" y="660" width="700" height="70" rx="12" fill="rgba(255,255,255,0.08)" stroke="#888" stroke-width="2"/>
                                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="28">Every object carries symbolic meaning</text>
                                </svg>`,
                                caption: "Every object carries symbolic meaning in this meticulously detailed painting"
                            }
                        },
                        {
                            type: "visual",
                            title: "Disguised Symbolism: A Visual Guide",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 750" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="750" fill="#1a1a2e"/>
                                    <text x="550" y="45" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="38">HIDDEN MEANINGS IN NORTHERN ART</text>
                                    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="26">Sacred messages hidden in everyday objects</text>

                                    <!-- Row 1: 3 boxes -->
                                    <rect x="40" y="115" width="330" height="255" rx="15" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="205" y="170" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="50">1</text>
                                    <text x="205" y="220" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Single Candle</text>
                                    <text x="205" y="265" text-anchor="middle" fill="#fff" font-size="26">God's presence</text>
                                    <text x="205" y="300" text-anchor="middle" fill="#fff" font-size="26">witnessing the scene</text>

                                    <rect x="385" y="115" width="330" height="255" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="550" y="170" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="50">2</text>
                                    <text x="550" y="220" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Convex Mirror</text>
                                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="26">All-seeing eye of God</text>
                                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="26">shows hidden witnesses</text>

                                    <rect x="730" y="115" width="330" height="255" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="895" y="170" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="50">3</text>
                                    <text x="895" y="220" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Small Dog</text>
                                    <text x="895" y="265" text-anchor="middle" fill="#fff" font-size="26">Fidelity and loyalty</text>
                                    <text x="895" y="300" text-anchor="middle" fill="#fff" font-size="26">in marriage</text>

                                    <!-- Row 2: 3 boxes -->
                                    <rect x="40" y="390" width="330" height="255" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="205" y="445" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="50">4</text>
                                    <text x="205" y="495" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Removed Shoes</text>
                                    <text x="205" y="540" text-anchor="middle" fill="#fff" font-size="26">Standing on holy</text>
                                    <text x="205" y="575" text-anchor="middle" fill="#fff" font-size="26">ground (sacrament)</text>

                                    <rect x="385" y="390" width="330" height="255" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="550" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="50">5</text>
                                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Oranges</text>
                                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="26">Wealth OR innocence</text>
                                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="26">before the Fall</text>

                                    <rect x="730" y="390" width="330" height="255" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="895" y="445" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="50">6</text>
                                    <text x="895" y="495" text-anchor="middle" fill="#fff" font-size="30" font-weight="bold">Prayer Beads</text>
                                    <text x="895" y="540" text-anchor="middle" fill="#fff" font-size="26">Piety and devotion</text>
                                    <text x="895" y="575" text-anchor="middle" fill="#fff" font-size="26">in daily life</text>

                                    <!-- Bottom insight -->
                                    <rect x="180" y="665" width="740" height="65" rx="15" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="2"/>
                                    <text x="550" y="707" text-anchor="middle" fill="#fff" font-size="28">Nothing is accidental in Northern Renaissance art</text>
                                </svg>`,
                                caption: "This technique allowed sacred meaning to permeate secular scenes"
                            }
                        },
                        {
                            type: "visual",
                            title: "The Ghent Altarpiece (1432) - Masterpiece Breakdown",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">THE GHENT ALTARPIECE</text>

                                    <!-- Three panel boxes - large with text inside -->
                                    <rect x="40" y="90" width="330" height="180" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="205" y="160" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">VIRGIN MARY</text>
                                    <text x="205" y="210" text-anchor="middle" fill="#fff" font-size="28">Left Panel</text>

                                    <rect x="385" y="90" width="330" height="180" rx="15" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                                    <text x="550" y="160" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="32">GOD THE FATHER</text>
                                    <text x="550" y="210" text-anchor="middle" fill="#fff" font-size="28">Central Panel</text>

                                    <rect x="730" y="90" width="330" height="180" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                                    <text x="895" y="160" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">JOHN BAPTIST</text>
                                    <text x="895" y="210" text-anchor="middle" fill="#fff" font-size="28">Right Panel</text>

                                    <!-- Main central panel - Lamb -->
                                    <rect x="200" y="290" width="700" height="130" rx="15" fill="rgba(34,139,34,0.3)" stroke="#22c55e" stroke-width="3"/>
                                    <text x="550" y="345" text-anchor="middle" fill="#22c55e" font-weight="bold" font-size="34">ADORATION OF THE MYSTIC LAMB</text>
                                    <text x="550" y="390" text-anchor="middle" fill="#fff" font-size="28">Central Lower Panel - Christ's Sacrifice</text>

                                    <!-- Bottom info boxes -->
                                    <rect x="40" y="445" width="330" height="130" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="205" y="495" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="32">STRUCTURE</text>
                                    <text x="205" y="545" text-anchor="middle" fill="#fff" font-size="28">12 panels open/close</text>

                                    <rect x="385" y="445" width="330" height="130" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="495" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="32">IMPORTANCE</text>
                                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="28">Most influential ever</text>

                                    <rect x="730" y="445" width="330" height="130" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="895" y="495" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">ARTISTS</text>
                                    <text x="895" y="545" text-anchor="middle" fill="#fff" font-size="28">Jan & Hubert van Eyck</text>

                                    <!-- Bottom bar -->
                                    <rect x="100" y="600" width="900" height="70" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="645" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">Extreme Realism | Light Effects | Unified Design | Psychological Depth</text>
                                </svg>`,
                                caption: "By Jan and Hubert van Eyck - each panel works independently and as part of the whole"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What is 'disguised symbolism' in Northern Renaissance art?",
                            options: [
                                { text: "Hidden messages written in paint layers", correct: false },
                                { text: "Sacred meanings embedded in realistic everyday objects", correct: true },
                                { text: "Secret portraits hidden in backgrounds", correct: false },
                                { text: "Coded political messages for patrons", correct: false }
                            ],
                            explanation: "Northern Renaissance artists developed the technique of 'disguised symbolism,' where religious and moral meanings were embedded in realistic depictions of everyday objects. A candle could represent divine presence, a dog could symbolize fidelity, and so on, allowing sacred significance to permeate seemingly secular scenes."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: GOLD",
                            content: "Remember Northern Renaissance art with GOLD (what Flemish merchants had plenty of!):\n\nG - GLAZES (layered oil painting)\n• Multiple thin, transparent layers\n• Creates luminous, glowing effect\n• Van Eyck's signature technique\n\nO - OBSERVATION (microscopic detail)\n• Paint exactly what you see\n• Every hair, thread, and reflection\n• Nature over idealization\n\nL - LIGHT (realistic light effects)\n• Light behaves as in real life\n• Reflections in curved surfaces\n• Consistent shadows from specific sources\n\nD - DISGUISED SYMBOLISM\n• Religious meanings in everyday objects\n• Candle = God's presence\n• Dog = Fidelity\n• Mirror = God's all-seeing eye\n\nWhen you see a Northern Renaissance painting, look for all four elements!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="54">G  O  L  D</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="28">Remember Northern Renaissance with wealth!</text>

                                    <!-- 4 letter boxes -->
                                    <rect x="40" y="125" width="245" height="275" rx="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="162" y="185" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="58">G</text>
                                    <text x="162" y="235" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">GLAZES</text>
                                    <text x="162" y="275" text-anchor="middle" fill="#fff" font-size="24">Layered oil</text>
                                    <text x="162" y="305" text-anchor="middle" fill="#fff" font-size="24">painting</text>
                                    <rect x="80" y="330" width="165" height="45" rx="8" fill="rgba(59,130,246,0.3)"/>
                                    <rect x="80" y="340" width="165" height="25" rx="6" fill="rgba(59,130,246,0.6)"/>

                                    <rect x="305" y="125" width="245" height="275" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="427" y="185" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="58">O</text>
                                    <text x="427" y="235" text-anchor="middle" fill="#fff" font-size="26" font-weight="bold">OBSERVATION</text>
                                    <text x="427" y="275" text-anchor="middle" fill="#fff" font-size="24">Microscopic</text>
                                    <text x="427" y="305" text-anchor="middle" fill="#fff" font-size="24">detail</text>
                                    <circle cx="427" cy="360" r="28" fill="none" stroke="#10b981" stroke-width="3"/>
                                    <circle cx="427" cy="360" r="12" fill="#10b981"/>

                                    <rect x="570" y="125" width="245" height="275" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="692" y="185" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="58">L</text>
                                    <text x="692" y="235" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">LIGHT</text>
                                    <text x="692" y="275" text-anchor="middle" fill="#fff" font-size="24">Realistic</text>
                                    <text x="692" y="305" text-anchor="middle" fill="#fff" font-size="24">effects</text>
                                    <line x1="645" y1="340" x2="745" y2="375" stroke="#f59e0b" stroke-width="5"/>
                                    <line x1="645" y1="365" x2="725" y2="390" stroke="#f59e0b" stroke-width="4"/>

                                    <rect x="835" y="125" width="245" height="275" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="957" y="185" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="58">D</text>
                                    <text x="957" y="235" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">DISGUISED</text>
                                    <text x="957" y="275" text-anchor="middle" fill="#fff" font-size="24">Symbolism:</text>
                                    <text x="957" y="305" text-anchor="middle" fill="#fff" font-size="24">hidden meanings</text>
                                    <circle cx="957" cy="365" r="24" fill="#ffd700"/>

                                    <!-- Symbols section -->
                                    <rect x="100" y="430" width="900" height="230" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="480" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">COMMON SYMBOLS</text>

                                    <text x="200" y="545" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">Candle</text>
                                    <text x="200" y="585" text-anchor="middle" fill="#fff" font-size="24">= God's presence</text>

                                    <text x="400" y="545" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">Dog</text>
                                    <text x="400" y="585" text-anchor="middle" fill="#fff" font-size="24">= Fidelity</text>

                                    <text x="600" y="545" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">Mirror</text>
                                    <text x="600" y="585" text-anchor="middle" fill="#fff" font-size="24">= God's eye</text>

                                    <text x="800" y="545" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">Fruit</text>
                                    <text x="800" y="585" text-anchor="middle" fill="#fff" font-size="24">= Wealth</text>

                                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="26">Northern art = everyday objects with sacred meaning</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Northern vs Italian Art",
                            content: "Here's how to sound knowledgeable when discussing the Northern Renaissance:\n\n1. 'IT'S NOT BETTER OR WORSE - IT'S DIFFERENT'\n'Italian artists wanted ideal beauty through math; Northern artists wanted truth through observation. Both are valid approaches to representing reality.'\n\n2. 'VAN EYCK DIDN'T INVENT OIL PAINTING'\n'Despite the old myth, he perfected it. His layered glaze technique created effects impossible before - and barely matched since.'\n\n3. 'EVERYTHING HAS MEANING'\n'In Northern art, nothing is just decoration. That dog isn't just cute - it means fidelity. That candle isn't just lighting - it's God watching.'\n\n4. 'IT'S ABOUT WEALTH'\n'Flanders was the banking and trading capital of Northern Europe. Wealthy merchants wanted art that showed off their possessions - and justified their wealth with religious meaning.'\n\n5. 'THE MIRROR TRICK'\n'The convex mirror in the Arnolfini Portrait is the most famous detail in Northern art. It shows the whole room including (probably) Van Eyck himself. It's like an early selfie!'",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="38">5 WAYS TO SOUND LIKE AN EXPERT</text>

                                    <!-- Row 1 -->
                                    <rect x="40" y="85" width="500" height="155" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="105" cy="162" r="35" fill="#3b82f6"/>
                                    <text x="105" y="173" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">1</text>
                                    <text x="315" y="140" text-anchor="middle" fill="#3b82f6" font-size="28" font-weight="bold">NOT BETTER - DIFFERENT</text>
                                    <text x="315" y="180" text-anchor="middle" fill="#fff" font-size="24">Italians: ideal beauty</text>
                                    <text x="315" y="210" text-anchor="middle" fill="#fff" font-size="24">Northerners: truth</text>

                                    <rect x="560" y="85" width="500" height="155" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="625" cy="162" r="35" fill="#10b981"/>
                                    <text x="625" y="173" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">2</text>
                                    <text x="835" y="140" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">VAN EYCK'S SECRET</text>
                                    <text x="835" y="180" text-anchor="middle" fill="#fff" font-size="24">Didn't invent oil paint -</text>
                                    <text x="835" y="210" text-anchor="middle" fill="#fff" font-size="24">perfected it</text>

                                    <!-- Row 2 -->
                                    <rect x="40" y="260" width="500" height="155" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="105" cy="337" r="35" fill="#8b5cf6"/>
                                    <text x="105" y="348" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">3</text>
                                    <text x="315" y="315" text-anchor="middle" fill="#8b5cf6" font-size="28" font-weight="bold">EVERYTHING HAS MEANING</text>
                                    <text x="315" y="355" text-anchor="middle" fill="#fff" font-size="24">Dog = fidelity</text>
                                    <text x="315" y="385" text-anchor="middle" fill="#fff" font-size="24">Candle = God watching</text>

                                    <rect x="560" y="260" width="500" height="155" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <circle cx="625" cy="337" r="35" fill="#f59e0b"/>
                                    <text x="625" y="348" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="28">4</text>
                                    <text x="835" y="315" text-anchor="middle" fill="#f59e0b" font-size="28" font-weight="bold">IT'S ABOUT WEALTH</text>
                                    <text x="835" y="355" text-anchor="middle" fill="#fff" font-size="24">Flanders = trading</text>
                                    <text x="835" y="385" text-anchor="middle" fill="#fff" font-size="24">capital of Europe</text>

                                    <!-- Row 3 centered -->
                                    <rect x="300" y="435" width="500" height="155" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="365" cy="512" r="35" fill="#ec4899"/>
                                    <text x="365" y="523" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">5</text>
                                    <text x="575" y="490" text-anchor="middle" fill="#ec4899" font-size="28" font-weight="bold">THE MIRROR TRICK</text>
                                    <text x="575" y="530" text-anchor="middle" fill="#fff" font-size="24">"Early selfie" in</text>
                                    <text x="575" y="560" text-anchor="middle" fill="#fff" font-size="24">Arnolfini Portrait</text>

                                    <!-- Bottom tip -->
                                    <rect x="180" y="615" width="740" height="65" rx="30" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="657" text-anchor="middle" fill="#ffd700" font-size="26">Use these at museums to impress your friends!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:

1. THE NORTHERN DIFFERENCE:
• Focused on oil painting and microscopic detail, not perspective and classical forms
• No Roman ruins to revive, so observed nature instead
• Wealthy merchant patrons wanted domestic scenes

2. VAN EYCK'S FOUR SECRETS (GOLD):
• Glazes - layered, transparent oil paint
• Observation - microscopic, precise detail
• Light - realistic, consistent lighting effects
• Disguised symbolism - hidden religious meanings

3. THE ARNOLFINI PORTRAIT:
• Most analyzed painting in Western art
• Every object carries symbolic meaning
• Convex mirror shows the artist as witness
• 'Jan van Eyck was here 1434' - not 'made this'

4. DISGUISED SYMBOLISM:
• Candle = God's presence
• Dog = Fidelity
• Mirror = God's all-seeing eye
• Green = Fertility
• Removed shoes = Holy ground

5. NORTH VS SOUTH:
• Different, not better or worse
• Both valid approaches to truth in art
• They eventually influenced each other

You can now discuss Van Eyck and Northern Renaissance art with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">LESSON COMPLETE!</text>

                                    <!-- Row 1: Two large boxes -->
                                    <rect x="40" y="85" width="500" height="170" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="290" y="145" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">1. DIFFERENT PATH</text>
                                    <text x="290" y="195" text-anchor="middle" fill="#fff" font-size="28">Oil + Detail + Symbolism</text>

                                    <rect x="560" y="85" width="500" height="170" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="145" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">2. GOLD MNEMONIC</text>
                                    <text x="810" y="195" text-anchor="middle" fill="#fff" font-size="28">Van Eyck's 4 Secrets</text>

                                    <!-- Row 2: Two large boxes -->
                                    <rect x="40" y="275" width="500" height="170" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="335" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">3. ARNOLFINI PORTRAIT</text>
                                    <text x="290" y="385" text-anchor="middle" fill="#fff" font-size="28">Most Analyzed Painting</text>

                                    <rect x="560" y="275" width="500" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="810" y="335" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">4. SYMBOLISM</text>
                                    <text x="810" y="385" text-anchor="middle" fill="#fff" font-size="28">Candle=God, Dog=Fidelity</text>

                                    <!-- Row 3: One centered box -->
                                    <rect x="300" y="465" width="500" height="100" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="550" y="510" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">5. NORTH VS SOUTH</text>
                                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="26">Different approaches, both valid</text>

                                    <!-- Feynman badge -->
                                    <rect x="200" y="590" width="700" height="85" rx="40" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">FEYNMAN TEST READY - You can explain it!</text>
                                </svg>`
                            }
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Global Art 1300-1500: Beyond Europe",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The World Was Making Art",
                            content: "While Brunelleschi was perfecting perspective in Florence, equally sophisticated art was being created across the globe. This lesson corrects the Euro-centric view of art history.\n\nWHY THIS MATTERS:\n• Art history courses often focus only on Europe\n• Yet Ming China, the Islamic world, Africa, and the Americas all had advanced artistic traditions\n• Many 'European' techniques actually came from elsewhere\n• Trade routes connected these cultures more than we realize\n\nKEY REGIONS WE'LL EXPLORE:\n\n1. MING DYNASTY CHINA (1368-1644)\n• Blue-and-white porcelain that Europe spent centuries trying to copy\n• Scholar-painters creating personal expression art\n• The Forbidden City - world's largest palace complex\n\n2. ISLAMIC WORLD\n• Geometric patterns of infinite complexity\n• Calligraphy as the highest art form\n• Architecture that influenced European design\n\n3. WEST AFRICAN KINGDOMS (Ife & Benin)\n• Bronze sculptures that shocked European colonizers with their sophistication\n• Lost-wax casting techniques as advanced as any in Europe\n• Art so refined Europeans initially couldn't believe Africans made it\n\n4. MESOAMERICA (Aztec & Maya)\n• Monumental architecture without metal tools\n• Codices combining writing and art\n• Destroyed by conquest, but traces remain",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="38">GLOBAL ART CENTERS 1300-1500</text>

                                    <!-- World regions - 2 rows of 3 -->
                                    <rect x="40" y="100" width="330" height="250" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="205" y="150" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">MING CHINA</text>
                                    <text x="205" y="200" text-anchor="middle" fill="#fff" font-size="24">Blue-white porcelain</text>
                                    <text x="205" y="240" text-anchor="middle" fill="#888" font-size="20">Scholar-painting</text>
                                    <text x="205" y="280" text-anchor="middle" fill="#888" font-size="20">Forbidden City</text>

                                    <rect x="385" y="100" width="330" height="250" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="550" y="150" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">ISLAMIC WORLD</text>
                                    <text x="550" y="200" text-anchor="middle" fill="#fff" font-size="24">Geometric patterns</text>
                                    <text x="550" y="240" text-anchor="middle" fill="#888" font-size="20">Calligraphy art</text>
                                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="20">Grand architecture</text>

                                    <rect x="730" y="100" width="330" height="250" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="895" y="150" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">WEST AFRICA</text>
                                    <text x="895" y="200" text-anchor="middle" fill="#fff" font-size="24">Ife & Benin bronzes</text>
                                    <text x="895" y="240" text-anchor="middle" fill="#888" font-size="20">Lost-wax casting</text>
                                    <text x="895" y="280" text-anchor="middle" fill="#888" font-size="20">Royal portraits</text>

                                    <rect x="200" y="370" width="330" height="250" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="365" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">MESOAMERICA</text>
                                    <text x="365" y="470" text-anchor="middle" fill="#fff" font-size="24">Aztec & Maya</text>
                                    <text x="365" y="510" text-anchor="middle" fill="#888" font-size="20">Monumental architecture</text>
                                    <text x="365" y="550" text-anchor="middle" fill="#888" font-size="20">Codices & calendars</text>

                                    <rect x="570" y="370" width="330" height="250" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="735" y="420" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="32">JAPAN</text>
                                    <text x="735" y="470" text-anchor="middle" fill="#fff" font-size="24">Ink wash painting</text>
                                    <text x="735" y="510" text-anchor="middle" fill="#888" font-size="20">Zen aesthetics</text>
                                    <text x="735" y="550" text-anchor="middle" fill="#888" font-size="20">Tea ceremony art</text>

                                    <text x="550" y="670" text-anchor="middle" fill="#888" font-size="22">Artistic excellence flourished across multiple civilizations simultaneously</text>
                                </svg>`,
                                caption: "Artistic excellence flourished across multiple civilizations simultaneously"
                            }
                        },
                        {
                            type: "example",
                            title: "Ming Dynasty China: 3 Masterpieces",
                            content: "The Ming Dynasty (1368-1644) produced art that influenced the entire world - and Europe specifically tried to copy it for centuries.\n\n1. BLUE-AND-WHITE PORCELAIN\n• Made from kaolin clay and fired at extreme temperatures\n• The white body was painted with cobalt blue designs\n• Europe couldn't figure out the recipe until 1709!\n• 'China' became the English word for porcelain\n• Dutch Delftware was Europe's attempt to imitate it\n\n2. SCHOLAR-PAINTING\n• Literati (educated officials) painted as personal expression, not for money\n• Landscapes represented inner spiritual states\n• 'The Four Treasures': brush, ink, inkstone, paper\n• Painting, poetry, and calligraphy were combined\n• Artists sought to capture 'qi' (life force) not just appearance\n\n3. THE FORBIDDEN CITY (1406-1420)\n• World's largest palace complex: 980 buildings, 8,886 rooms\n• Built by Emperor Yongle, who moved the capital to Beijing\n• Took 1 million workers and 100,000 craftsmen\n• Named 'Forbidden' because commoners couldn't enter\n• Central axis represents imperial cosmic order\n\nWHY MING ART MATTERS:\nMing porcelain influenced European ceramics. Ming landscape painting influenced Japanese aesthetics. Ming architecture influenced all of East Asia.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="38">MING DYNASTY MASTERPIECES</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">1368-1644</text>

                                    <!-- 3 columns -->
                                    <rect x="40" y="130" width="330" height="520" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="205" y="180" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">PORCELAIN</text>
                                    <ellipse cx="205" cy="280" rx="80" ry="30" fill="#fff" stroke="#3b82f6" stroke-width="3"/>
                                    <path d="M125 280 L125 400 Q165 440 205 400 L205 280" fill="#fff" stroke="#3b82f6" stroke-width="3"/>
                                    <path d="M285 280 L285 400 Q245 440 205 400" fill="#fff" stroke="#3b82f6" stroke-width="3"/>
                                    <path d="M150 320 Q205 360 260 320" stroke="#3b82f6" stroke-width="2" fill="none"/>
                                    <circle cx="205" cy="370" r="15" fill="none" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="205" y="500" text-anchor="middle" fill="#fff" font-size="22">Blue &amp; White</text>
                                    <text x="205" y="535" text-anchor="middle" fill="#888" font-size="18">Europe copied for centuries</text>
                                    <text x="205" y="565" text-anchor="middle" fill="#888" font-size="18">"China" = porcelain</text>

                                    <rect x="385" y="130" width="330" height="520" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="550" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">SCHOLAR PAINTING</text>
                                    <rect x="460" y="220" width="180" height="240" fill="#f5f5dc" stroke="#10b981" stroke-width="2"/>
                                    <polygon points="500,420 550,280 600,420" fill="none" stroke="#333" stroke-width="2"/>
                                    <polygon points="520,420 540,350 560,420" fill="none" stroke="#333" stroke-width="2"/>
                                    <line x1="590" y1="350" x2="590" y2="420" stroke="#333" stroke-width="2"/>
                                    <circle cx="590" cy="340" r="12" fill="none" stroke="#333" stroke-width="2"/>
                                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="22">Personal Expression</text>
                                    <text x="550" y="535" text-anchor="middle" fill="#888" font-size="18">Landscapes = inner states</text>
                                    <text x="550" y="565" text-anchor="middle" fill="#888" font-size="18">Capturing "qi" life force</text>

                                    <rect x="730" y="130" width="330" height="520" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="895" y="180" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">FORBIDDEN CITY</text>
                                    <rect x="810" y="280" width="170" height="120" fill="#8b0000" stroke="#ffd700" stroke-width="3"/>
                                    <polygon points="810,280 895,220 980,280" fill="#8b0000" stroke="#ffd700" stroke-width="3"/>
                                    <line x1="840" y1="280" x2="840" y2="400" stroke="#ffd700" stroke-width="3"/>
                                    <line x1="950" y1="280" x2="950" y2="400" stroke="#ffd700" stroke-width="3"/>
                                    <text x="895" y="500" text-anchor="middle" fill="#fff" font-size="22">World's Largest Palace</text>
                                    <text x="895" y="535" text-anchor="middle" fill="#888" font-size="18">980 buildings, 8,886 rooms</text>
                                    <text x="895" y="565" text-anchor="middle" fill="#888" font-size="18">1 million workers</text>
                                </svg>`,
                                caption: "The Ming Dynasty's artistic achievements spread across the globe"
                            }
                        },
                        {
                            type: "example",
                            title: "African Art: Ife and Benin Bronzes",
                            content: "When Europeans first saw Ife and Benin bronzes, they couldn't believe Africans made them. They were wrong - and this prejudice distorted art history for centuries.\n\nIFE KINGDOM (12th-15th century, Nigeria)\n• Created naturalistic bronze and terracotta portraits of rulers\n• Used lost-wax casting technique (same as Renaissance Italy)\n• The faces are so lifelike they were once attributed to Greeks!\n• Vertical striations may represent scarification or beaded veils\n• Art was sacred - only the Oni (king) could commission it\n\nBENIN KINGDOM (15th-17th century, Nigeria)\n• Famous for bronze plaques that decorated the royal palace\n• Depicted historical events, ceremonies, and warriors\n• Technically as sophisticated as any European bronze work\n• Over 900 plaques were taken by British in 1897 'Punitive Expedition'\n• Now museums worldwide are debating returning them\n\nWHY THIS MATTERS:\n1. CHALLENGES STEREOTYPES: Proves African art was always sophisticated\n2. LOST-WAX CASTING: This technique developed independently in Africa\n3. COLONIAL THEFT: Much African art is now in European museums\n4. ONGOING DEBATE: Nigeria wants Benin Bronzes returned\n\nFUN FACT: The British Museum has more Benin Bronzes than any Nigerian museum.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="38">AFRICAN ART: IFE &amp; BENIN BRONZES</text>

                                    <!-- 2 columns -->
                                    <rect x="40" y="100" width="500" height="550" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="290" y="150" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">IFE HEADS (12th-14th c.)</text>
                                    <ellipse cx="290" cy="320" rx="80" ry="100" fill="#cd7f32" stroke="#8b4513" stroke-width="3"/>
                                    <ellipse cx="260" cy="290" rx="12" ry="8" fill="#1a1a2e"/>
                                    <ellipse cx="320" cy="290" rx="12" ry="8" fill="#1a1a2e"/>
                                    <line x1="270" y1="330" x2="310" y2="330" stroke="#1a1a2e" stroke-width="2"/>
                                    <line x1="290" y="350" x2="290" y="370" stroke="#1a1a2e" stroke-width="2"/>
                                    <path d="M260 390 Q290 410 320 390" stroke="#1a1a2e" stroke-width="2" fill="none"/>
                                    <text x="290" y="480" text-anchor="middle" fill="#fff" font-size="24">Idealized Naturalism</text>
                                    <text x="290" y="520" text-anchor="middle" fill="#888" font-size="20">Terracotta and bronze</text>
                                    <text x="290" y="555" text-anchor="middle" fill="#888" font-size="20">Royal portraits</text>
                                    <text x="290" y="590" text-anchor="middle" fill="#888" font-size="20">Lost-wax technique</text>

                                    <rect x="560" y="100" width="500" height="550" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="150" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">BENIN BRONZES (15th-19th c.)</text>
                                    <rect x="720" y="220" width="180" height="220" fill="#cd7f32" stroke="#8b4513" stroke-width="3" rx="10"/>
                                    <circle cx="770" cy="280" r="20" fill="#1a1a2e"/>
                                    <circle cx="850" cy="280" r="20" fill="#1a1a2e"/>
                                    <rect x="780" y="320" width="60" height="30" fill="#1a1a2e"/>
                                    <rect x="740" y="380" width="140" height="40" fill="#ffd700"/>
                                    <text x="810" y="480" text-anchor="middle" fill="#fff" font-size="24">Commemorative Plaques</text>
                                    <text x="810" y="520" text-anchor="middle" fill="#888" font-size="20">Court history in metal</text>
                                    <text x="810" y="555" text-anchor="middle" fill="#888" font-size="20">Diplomatic narratives</text>
                                    <text x="810" y="590" text-anchor="middle" fill="#888" font-size="20">Shocked European colonizers</text>
                                </svg>`,
                                caption: "African bronzes demonstrate sophisticated metallurgical and artistic traditions"
                            }
                        },
                        {
                            type: "visual",
                            title: "Islamic Art: The 4 Core Principles",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="38">ISLAMIC ART: 4 CORE PRINCIPLES</text>

                                    <!-- 2x2 grid -->
                                    <rect x="40" y="100" width="500" height="270" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="150" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">1. GEOMETRIC PATTERNS</text>
                                    <polygon points="290,180 330,220 330,280 290,320 250,280 250,220" fill="none" stroke="#10b981" stroke-width="2"/>
                                    <polygon points="290,200 310,220 310,260 290,280 270,260 270,220" fill="none" stroke="#10b981" stroke-width="2"/>
                                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="20">Infinite complexity from simple shapes</text>

                                    <rect x="560" y="100" width="500" height="270" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="810" y="150" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">2. CALLIGRAPHY</text>
                                    <text x="810" y="250" text-anchor="middle" fill="#3b82f6" font-size="60" font-style="italic">الله</text>
                                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="20">Writing as highest art form</text>

                                    <rect x="40" y="390" width="500" height="270" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="290" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">3. ARABESQUE</text>
                                    <path d="M180 520 Q230 480 280 520 Q330 560 380 520" stroke="#f59e0b" stroke-width="3" fill="none"/>
                                    <path d="M200 540 Q250 500 300 540 Q350 580 400 540" stroke="#f59e0b" stroke-width="2" fill="none"/>
                                    <text x="290" y="640" text-anchor="middle" fill="#888" font-size="20">Flowing vegetal patterns</text>

                                    <rect x="560" y="390" width="500" height="270" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">4. ARCHITECTURE</text>
                                    <rect x="740" y="490" width="140" height="100" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <path d="M740 490 Q810 440 880 490" fill="none" stroke="#8b5cf6" stroke-width="3"/>
                                    <line x1="810" y1="490" x2="810" y2="590" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="640" text-anchor="middle" fill="#888" font-size="20">Domes, arches, minarets</text>
                                </svg>`,
                                caption: "Samarkand and Herat became cultural capitals under Timurid patronage"
                            }
                        },
                        {
                            type: "visual",
                            title: "Aztec Sun Stone: A Visual Breakdown",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">AZTEC SUN STONE</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">Calendar Stone (c. 1502-1520)</text>

                                    <!-- Central sun stone representation -->
                                    <circle cx="550" cy="380" r="250" fill="none" stroke="#8b5cf6" stroke-width="4"/>
                                    <circle cx="550" cy="380" r="200" fill="none" stroke="#8b5cf6" stroke-width="3"/>
                                    <circle cx="550" cy="380" r="150" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="550" cy="380" r="80" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="3"/>

                                    <!-- Face in center -->
                                    <circle cx="520" cy="360" r="15" fill="#ffd700"/>
                                    <circle cx="580" cy="360" r="15" fill="#ffd700"/>
                                    <ellipse cx="550" cy="400" rx="30" ry="20" fill="#ffd700"/>

                                    <!-- Labels around -->
                                    <text x="150" y="200" fill="#fff" font-size="22">20 day signs</text>
                                    <line x1="250" y1="200" x2="350" y2="280" stroke="#8b5cf6" stroke-width="2"/>

                                    <text x="850" y="200" fill="#fff" font-size="22">52-year cycle</text>
                                    <line x1="800" y1="200" x2="700" y2="280" stroke="#8b5cf6" stroke-width="2"/>

                                    <text x="150" y="550" fill="#fff" font-size="22">Sun god Tonatiuh</text>
                                    <line x1="280" y1="540" x2="450" y2="420" stroke="#8b5cf6" stroke-width="2"/>

                                    <text x="800" y="550" fill="#fff" font-size="22">Previous 4 worlds</text>
                                    <line x1="780" y1="540" x2="650" y2="420" stroke="#8b5cf6" stroke-width="2"/>

                                    <text x="550" y="680" text-anchor="middle" fill="#888" font-size="22">24 tons of basalt | 12 feet diameter | Cosmological masterpiece</text>
                                </svg>`,
                                caption: "Aztec art traditions: Featherwork, Stone Sculpture, Codices, and Gold/Jade Work"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What characterized Ife bronze sculptures from West Africa?",
                            options: [
                                { text: "Abstract geometric patterns", correct: false },
                                { text: "Naturalistic royal portraits using lost-wax casting", correct: true },
                                { text: "Rough, unfinished surfaces", correct: false },
                                { text: "Small, portable figurines", correct: false }
                            ],
                            explanation: "Ife bronze sculptures (12th-14th century) are remarkable for their naturalistic representation of royal figures, created using the sophisticated lost-wax casting technique. When Europeans first encountered these works, they refused to believe Africans could have made them - a prejudice now thoroughly disproven by archaeological evidence."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: MIBA",
                            content: "Remember global art centers with MIBA - 'Making Incredible Beautiful Art':\n\nM - MING CHINA\n• Blue-and-white porcelain (Europe couldn't copy until 1709)\n• Scholar-painting (personal expression)\n• Forbidden City (world's largest palace)\n• Think: 'M' for 'Ming vase' - the iconic porcelain\n\nI - ISLAMIC WORLD\n• Infinite geometric patterns\n• Calligraphy as highest art\n• Architecture that inspired Europe\n• Think: 'I' for 'Infinite' patterns\n\nB - BENIN & IFE (Africa)\n• Bronze sculptures using lost-wax casting\n• So sophisticated Europeans couldn't believe Africans made them\n• Now at center of repatriation debates\n• Think: 'B' for 'Bronze' heads\n\nA - AZTEC & MAYA (Americas)\n• Monumental architecture without metal tools\n• Featherwork, gold, jade, codices\n• Much destroyed by Spanish conquest\n• Think: 'A' for 'Aztec Sun Stone'\n\nAll four regions had art as sophisticated as Renaissance Europe!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="48">M  I  B  A</text>
                                    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="26">Remember Global Art Exchange</text>

                                    <!-- 4 columns -->
                                    <rect x="40" y="130" width="245" height="300" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="162" y="190" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="52">M</text>
                                    <text x="162" y="240" text-anchor="middle" fill="#fff" font-size="26">MATERIALS</text>
                                    <text x="162" y="280" text-anchor="middle" fill="#888" font-size="20">moved globally</text>
                                    <text x="162" y="320" text-anchor="middle" fill="#888" font-size="18">Silk, porcelain,</text>
                                    <text x="162" y="345" text-anchor="middle" fill="#888" font-size="18">spices, gold</text>

                                    <rect x="305" y="130" width="245" height="300" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="427" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="52">I</text>
                                    <text x="427" y="240" text-anchor="middle" fill="#fff" font-size="26">IDEAS</text>
                                    <text x="427" y="280" text-anchor="middle" fill="#888" font-size="20">exchanged</text>
                                    <text x="427" y="320" text-anchor="middle" fill="#888" font-size="18">Techniques,</text>
                                    <text x="427" y="345" text-anchor="middle" fill="#888" font-size="18">styles, beliefs</text>

                                    <rect x="570" y="130" width="245" height="300" rx="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="692" y="190" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="52">B</text>
                                    <text x="692" y="240" text-anchor="middle" fill="#fff" font-size="26">BOTH</text>
                                    <text x="692" y="280" text-anchor="middle" fill="#888" font-size="20">directions flow</text>
                                    <text x="692" y="320" text-anchor="middle" fill="#888" font-size="18">East ↔ West</text>
                                    <text x="692" y="345" text-anchor="middle" fill="#888" font-size="18">Not one-way</text>

                                    <rect x="835" y="130" width="245" height="300" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="957" y="190" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="52">A</text>
                                    <text x="957" y="240" text-anchor="middle" fill="#fff" font-size="26">ART</text>
                                    <text x="957" y="280" text-anchor="middle" fill="#888" font-size="20">adapts locally</text>
                                    <text x="957" y="320" text-anchor="middle" fill="#888" font-size="18">Each culture</text>
                                    <text x="957" y="345" text-anchor="middle" fill="#888" font-size="18">makes it their own</text>

                                    <!-- Bottom examples -->
                                    <rect x="40" y="460" width="1020" height="200" rx="15" fill="rgba(255,255,255,0.05)" stroke="#fff" stroke-width="2"/>
                                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">EXAMPLES OF GLOBAL EXCHANGE</text>
                                    <text x="210" y="550" text-anchor="middle" fill="#ef4444" font-size="20">Chinese porcelain</text>
                                    <text x="210" y="575" text-anchor="middle" fill="#ef4444" font-size="20">→ European ceramics</text>
                                    <text x="550" y="550" text-anchor="middle" fill="#10b981" font-size="20">Islamic geometry</text>
                                    <text x="550" y="575" text-anchor="middle" fill="#10b981" font-size="20">→ Gothic arch.</text>
                                    <text x="890" y="550" text-anchor="middle" fill="#3b82f6" font-size="20">African bronze</text>
                                    <text x="890" y="575" text-anchor="middle" fill="#3b82f6" font-size="20">→ Modern sculpture</text>
                                    <text x="550" y="630" text-anchor="middle" fill="#888" font-size="20">Art history is global history</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Why Global Art Matters",
                            content: "Here's how to sound knowledgeable when discussing global art:\n\n1. 'EUROPE COPIED CHINA'\n'Ming blue-and-white porcelain was so valued that Europe spent 300 years trying to copy it. Dutch Delftware and English 'chinoiserie' were imitation attempts.'\n\n2. 'THE BENIN BRONZES DEBATE'\n'The British Museum has more Benin Bronzes than any Nigerian museum. They were taken in 1897 and Nigeria wants them back. It's one of the biggest art repatriation debates today.'\n\n3. 'LOST AFRICAN TECHNIQUES'\n'Ife and Benin artists used lost-wax bronze casting as sophisticated as any in Europe. When Europeans first saw them, they couldn't believe Africans made them.'\n\n4. 'ISLAMIC INFLUENCE ON EUROPE'\n'Gothic architecture was influenced by Islamic design. The pointed arch came from Islamic buildings. Even 'arabesque' patterns influenced European decoration.'\n\n5. 'WHAT THE SPANISH DESTROYED'\n'The Spanish conquistadors melted down almost all Aztec gold art for bullion. We'll never know how much was lost. The few surviving codices are invaluable.'",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHY GLOBAL ART MATTERS</text>

                                    <!-- 3 main points -->
                                    <rect x="40" y="100" width="330" height="400" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                                    <circle cx="205" cy="170" r="35" fill="#ef4444"/>
                                    <text x="205" y="182" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">1</text>
                                    <text x="205" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">CORRECTS BIAS</text>
                                    <text x="205" y="290" text-anchor="middle" fill="#fff" font-size="20">"European art isn't</text>
                                    <text x="205" y="320" text-anchor="middle" fill="#fff" font-size="20">the only art history"</text>
                                    <text x="205" y="380" text-anchor="middle" fill="#888" font-size="18">Excellence existed</text>
                                    <text x="205" y="410" text-anchor="middle" fill="#888" font-size="18">everywhere simultaneously</text>

                                    <rect x="385" y="100" width="330" height="400" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="550" cy="170" r="35" fill="#10b981"/>
                                    <text x="550" y="182" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">2</text>
                                    <text x="550" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">SHOWS CONNECTION</text>
                                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="20">"Trade routes connected</text>
                                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="20">art traditions"</text>
                                    <text x="550" y="380" text-anchor="middle" fill="#888" font-size="18">Silk Road, Indian Ocean,</text>
                                    <text x="550" y="410" text-anchor="middle" fill="#888" font-size="18">Trans-Saharan routes</text>

                                    <rect x="730" y="100" width="330" height="400" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="895" cy="170" r="35" fill="#3b82f6"/>
                                    <text x="895" y="182" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">3</text>
                                    <text x="895" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">EXPLAINS INFLUENCE</text>
                                    <text x="895" y="290" text-anchor="middle" fill="#fff" font-size="20">"Many 'European' ideas</text>
                                    <text x="895" y="320" text-anchor="middle" fill="#fff" font-size="20">came from elsewhere"</text>
                                    <text x="895" y="380" text-anchor="middle" fill="#888" font-size="18">Perspective, pigments,</text>
                                    <text x="895" y="410" text-anchor="middle" fill="#888" font-size="18">materials, motifs</text>

                                    <!-- Bottom -->
                                    <rect x="200" y="530" width="700" height="120" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="580" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">CONVERSATION STARTER</text>
                                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="22">"Art history is global history - always has been"</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. THE BIG PICTURE:\n• Art history is often Euro-centric but shouldn't be\n• Sophisticated art was made worldwide simultaneously\n• Trade routes connected cultures more than we realize\n\n2. MING CHINA (MIBA - M):\n• Blue-and-white porcelain (Europe couldn't copy until 1709)\n• Scholar-painting emphasized personal expression\n• Forbidden City: world's largest palace complex\n\n3. ISLAMIC WORLD (MIBA - I):\n• Infinite geometric patterns based on mathematics\n• Calligraphy as highest art form\n• Architecture influenced European Gothic\n\n4. BENIN & IFE (MIBA - B):\n• Bronze sculptures using sophisticated lost-wax casting\n• Europeans initially couldn't believe Africans made them\n• Center of major repatriation debates today\n\n5. AZTEC & MAYA (MIBA - A):\n• Monumental architecture without metal tools\n• Codices combined writing and art\n• Much destroyed by Spanish conquest\n\nYou can now discuss global art traditions with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="38">LESSON COMPLETE!</text>
    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="22">Mannerism: Beyond the High Renaissance</text>

    <!-- 2 columns top -->
    <rect x="40" y="110" width="500" height="140" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="290" y="155" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">WHAT IS IT?</text>
    <text x="290" y="190" text-anchor="middle" fill="#fff" font-size="22">Rule-breaking after perfection</text>
    <text x="290" y="220" text-anchor="middle" fill="#888" font-size="20">c. 1520-1600</text>

    <rect x="560" y="110" width="500" height="140" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="810" y="155" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">WHY?</text>
    <text x="810" y="190" text-anchor="middle" fill="#fff" font-size="22">Sack of Rome + Reformation</text>
    <text x="810" y="220" text-anchor="middle" fill="#888" font-size="20">Crisis response</text>

    <!-- SEALS box -->
    <rect x="100" y="270" width="900" height="130" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
    <text x="550" y="315" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="28">SEALS MNEMONIC</text>
    <text x="550" y="350" text-anchor="middle" fill="#fff" font-size="22">S-Serpentinata | E-Elongation | A-Acid colors</text>
    <text x="550" y="380" text-anchor="middle" fill="#fff" font-size="22">L-Limbo space | S-Self-conscious style</text>

    <!-- Spotting tricks -->
    <rect x="100" y="420" width="900" height="110" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
    <text x="550" y="460" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="26">SPOTTING TRICKS</text>
    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="22">Long necks | Cool colors | Twisted poses | Crowded space</text>
    <text x="550" y="520" text-anchor="middle" fill="#888" font-size="20">Madonna with Long Neck = perfect example</text>

    <!-- Ready bar -->
    <rect x="100" y="560" width="900" height="100" rx="50" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
    <circle cx="200" cy="610" r="25" fill="#10b981"/>
    <text x="200" y="618" text-anchor="middle" fill="#fff" font-size="32">&#10003;</text>
    <text x="570" y="600" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">FEYNMAN TEST READY</text>
    <text x="570" y="635" text-anchor="middle" fill="#fff" font-size="22">You can explain Mannerism!</text>
</svg>`
                            }
                        }
                    ]
                },
                {
                    id: 5,
                    title: "High Renaissance Masters",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Summit of Renaissance Art",
                            content: "The High Renaissance (c. 1490-1527) represents a brief but extraordinary 37-year period when three geniuses worked simultaneously: Leonardo, Michelangelo, and Raphael. This is the era that gave us the Mona Lisa, the Sistine Chapel ceiling, and the School of Athens.\n\nWHY 'HIGH' RENAISSANCE?\n• Represents the peak or 'high point' of Renaissance ideals\n• Perfect balance of scientific precision and artistic beauty\n• Artists achieved what earlier Renaissance pioneers had sought\n• Ended abruptly with the Sack of Rome in 1527\n\nTHE THREE TITANS:\n\nLEONARDO DA VINCI (1452-1519)\n• The 'Universal Man' - artist, scientist, inventor\n• Invented sfumato (smoky blending) technique\n• Famous for: Mona Lisa, Last Supper, Vitruvian Man\n• Left many works unfinished (only ~15 paintings survive)\n\nMICHELANGELO (1475-1564)\n• Called himself a sculptor first, painter second\n• Created terribilità - figures of awesome power\n• Famous for: David, Sistine Ceiling, Pietà, St. Peter's dome\n• Lived to 88, working until weeks before death\n\nRAPHAEL (1483-1520)\n• Youngest of the three, died at just 37\n• Achieved perfect harmony and grace\n• Famous for: School of Athens, Sistine Madonna\n• Influenced art for the next 400 years\n\nThese three artists knew each other, competed with each other, and together defined what 'great art' would mean for centuries.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="38">THE HIGH RENAISSANCE (1490-1527)</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">The Summit of Renaissance Art</text>

                                    <!-- 3 masters -->
                                    <rect x="40" y="130" width="330" height="520" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="205" cy="220" r="60" fill="#ffe4c4" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="205" y="310" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">LEONARDO</text>
                                    <text x="205" y="350" text-anchor="middle" fill="#fff" font-size="22">The Universal Man</text>
                                    <text x="205" y="400" text-anchor="middle" fill="#888" font-size="18">• Sfumato technique</text>
                                    <text x="205" y="430" text-anchor="middle" fill="#888" font-size="18">• Scientific observation</text>
                                    <text x="205" y="460" text-anchor="middle" fill="#888" font-size="18">• Mona Lisa, Last Supper</text>
                                    <text x="205" y="510" text-anchor="middle" fill="#3b82f6" font-size="20">1452-1519</text>

                                    <rect x="385" y="130" width="330" height="520" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="550" cy="220" r="60" fill="#ffe4c4" stroke="#8b5cf6" stroke-width="3"/>
                                    <text x="550" y="310" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">MICHELANGELO</text>
                                    <text x="550" y="350" text-anchor="middle" fill="#fff" font-size="22">The Divine One</text>
                                    <text x="550" y="400" text-anchor="middle" fill="#888" font-size="18">• Terribilità (awesome power)</text>
                                    <text x="550" y="430" text-anchor="middle" fill="#888" font-size="18">• Sculptor who painted</text>
                                    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="18">• David, Sistine Chapel</text>
                                    <text x="550" y="510" text-anchor="middle" fill="#8b5cf6" font-size="20">1475-1564</text>

                                    <rect x="730" y="130" width="330" height="520" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="895" cy="220" r="60" fill="#ffe4c4" stroke="#10b981" stroke-width="3"/>
                                    <text x="895" y="310" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">RAPHAEL</text>
                                    <text x="895" y="350" text-anchor="middle" fill="#fff" font-size="22">The Perfect One</text>
                                    <text x="895" y="400" text-anchor="middle" fill="#888" font-size="18">• Grazia (effortless grace)</text>
                                    <text x="895" y="430" text-anchor="middle" fill="#888" font-size="18">• Perfect synthesis</text>
                                    <text x="895" y="460" text-anchor="middle" fill="#888" font-size="18">• School of Athens</text>
                                    <text x="895" y="510" text-anchor="middle" fill="#10b981" font-size="20">1483-1520</text>
                                </svg>`,
                                caption: "Three geniuses working in the same era, each with distinct artistic vision"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why is the period c. 1490-1527 called the 'High' Renaissance?",
                            options: [
                                { text: "Because the artists were physically tall", correct: false },
                                { text: "Because it represented the peak or high point of Renaissance artistic achievement", correct: true },
                                { text: "Because most art was painted high on ceilings", correct: false },
                                { text: "Because the artists charged high prices", correct: false }
                            ],
                            explanation: "The 'High' Renaissance refers to the peak or summit of Renaissance ideals - a brief 37-year period when artistic achievement reached its greatest heights. It ended abruptly with the Sack of Rome in 1527, which scattered artists and ended the optimism of the era."
                        },
                        {
                            type: "example",
                            title: "Leonardo da Vinci: The Universal Man",
                            content: "Leonardo da Vinci (1452-1519) was history's greatest polymath - equally brilliant as painter, scientist, inventor, anatomist, and engineer. Only about 15 paintings by him survive, but each one changed art forever.\n\nHIS 4 ARTISTIC INNOVATIONS:\n\n1. SFUMATO (sfoo-MAH-toh)\n• Italian for 'smoky' or 'vanished'\n• Edges blur like smoke instead of having hard outlines\n• Creates mysterious, dreamlike quality\n• Best seen in the Mona Lisa's soft facial features\n\n2. CHIAROSCURO (key-ARE-oh-SKOO-roh)\n• Italian for 'light-dark'\n• Dramatic contrast between light and shadow\n• Makes figures seem three-dimensional\n• Creates dramatic, theatrical effects\n\n3. SCIENTIFIC OBSERVATION\n• Dissected 30+ human corpses to understand anatomy\n• Studied how light behaves in nature\n• Applied mathematics to composition\n• His notebooks contain 7,000+ pages of scientific observations\n\n4. PSYCHOLOGICAL DEPTH\n• His figures have inner lives - they think and feel\n• The Mona Lisa's enigmatic smile is the most famous example\n• Captured fleeting emotions no one had painted before\n\nWHY SO FEW PAINTINGS?\nLeonardo was a perfectionist who worked slowly and often abandoned projects. He was also distracted by science, engineering, and invention.",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="38">LEONARDO DA VINCI</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">The Universal Man (1452-1519)</text>

                                    <!-- 2x2 grid of his contributions -->
                                    <rect x="40" y="130" width="500" height="250" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="290" y="180" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">SFUMATO TECHNIQUE</text>
                                    <text x="290" y="220" text-anchor="middle" fill="#fff" font-size="20">"Smoke-like" blending</text>
                                    <text x="290" y="255" text-anchor="middle" fill="#888" font-size="18">No harsh outlines</text>
                                    <text x="290" y="285" text-anchor="middle" fill="#888" font-size="18">Soft transitions between tones</text>
                                    <text x="290" y="315" text-anchor="middle" fill="#888" font-size="18">Creates atmospheric depth</text>

                                    <rect x="560" y="130" width="500" height="250" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <text x="810" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">SCIENTIFIC APPROACH</text>
                                    <text x="810" y="220" text-anchor="middle" fill="#fff" font-size="20">Art + Science unified</text>
                                    <text x="810" y="255" text-anchor="middle" fill="#888" font-size="18">Anatomical dissections</text>
                                    <text x="810" y="285" text-anchor="middle" fill="#888" font-size="18">Engineering notebooks</text>
                                    <text x="810" y="315" text-anchor="middle" fill="#888" font-size="18">7,000+ pages of studies</text>

                                    <rect x="40" y="400" width="500" height="250" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="290" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">MONA LISA (c. 1503-1519)</text>
                                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="20">World's most famous painting</text>
                                    <text x="290" y="525" text-anchor="middle" fill="#888" font-size="18">Enigmatic smile</text>
                                    <text x="290" y="555" text-anchor="middle" fill="#888" font-size="18">Sfumato at its finest</text>
                                    <text x="290" y="585" text-anchor="middle" fill="#888" font-size="18">Worked on it for 16+ years</text>

                                    <rect x="560" y="400" width="500" height="250" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="810" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">LAST SUPPER (1495-1498)</text>
                                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="20">Revolutionary composition</text>
                                    <text x="810" y="525" text-anchor="middle" fill="#888" font-size="18">Psychological drama</text>
                                    <text x="810" y="555" text-anchor="middle" fill="#888" font-size="18">Each apostle reacts differently</text>
                                    <text x="810" y="585" text-anchor="middle" fill="#888" font-size="18">Perspective focuses on Christ</text>
                                </svg>`,
                                caption: "The Mona Lisa (c. 1503-1519) demonstrates all four innovations"
                            }
                        },
                        {
                            type: "visual",
                            title: "The Last Supper (1495-1498)",
                            content: "Leonardo's mural in Milan revolutionized how artists depicted narrative moments.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="38">THE LAST SUPPER DECODED</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">Leonardo da Vinci (1495-1498)</text>

                                    <!-- Table representation -->
                                    <rect x="100" y="200" width="900" height="300" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="3" rx="10"/>

                                    <!-- Christ in center -->
                                    <circle cx="550" cy="300" r="50" fill="rgba(255,215,0,0.3)" stroke="#ffd700" stroke-width="3"/>
                                    <circle cx="550" cy="280" r="20" fill="#ffe4c4"/>
                                    <text x="550" y="380" text-anchor="middle" fill="#ffd700" font-size="20">CHRIST</text>
                                    <text x="550" y="405" text-anchor="middle" fill="#888" font-size="16">Calm center</text>

                                    <!-- Groups of apostles -->
                                    <circle cx="200" cy="300" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="280" cy="300" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="360" cy="300" r="30" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="280" y="380" text-anchor="middle" fill="#3b82f6" font-size="16">Group 1</text>

                                    <circle cx="740" cy="300" r="30" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="820" cy="300" r="30" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="900" cy="300" r="30" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="820" y="380" text-anchor="middle" fill="#10b981" font-size="16">Group 4</text>

                                    <!-- Judas marked -->
                                    <circle cx="440" cy="310" r="25" fill="rgba(239,68,68,0.5)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="440" y="380" text-anchor="middle" fill="#ef4444" font-size="16">JUDAS</text>
                                    <text x="440" y="400" text-anchor="middle" fill="#888" font-size="14">In shadow</text>

                                    <!-- Key insights -->
                                    <rect x="100" y="530" width="280" height="130" rx="10" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="240" y="570" text-anchor="middle" fill="#3b82f6" font-size="20" font-weight="bold">PERSPECTIVE</text>
                                    <text x="240" y="600" text-anchor="middle" fill="#fff" font-size="16">All lines lead to Christ</text>
                                    <text x="240" y="625" text-anchor="middle" fill="#888" font-size="14">He is the vanishing point</text>

                                    <rect x="410" y="530" width="280" height="130" rx="10" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="550" y="570" text-anchor="middle" fill="#f59e0b" font-size="20" font-weight="bold">MOMENT</text>
                                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="16">"One of you will betray me"</text>
                                    <text x="550" y="625" text-anchor="middle" fill="#888" font-size="14">Each apostle reacts</text>

                                    <rect x="720" y="530" width="280" height="130" rx="10" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="860" y="570" text-anchor="middle" fill="#8b5cf6" font-size="20" font-weight="bold">GROUPS OF 3</text>
                                    <text x="860" y="600" text-anchor="middle" fill="#fff" font-size="16">12 apostles in 4 groups</text>
                                    <text x="860" y="625" text-anchor="middle" fill="#888" font-size="14">Trinity symbolism</text>
                                </svg>`,
                                caption: "Apostles react in groups of three to Christ's announcement of betrayal"
                            }
                        },
                        {
                            type: "visual",
                            title: "Michelangelo's 2 Greatest Masterpieces",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">MICHELANGELO'S MASTERPIECES</text>

                                    <!-- 2 columns -->
                                    <rect x="40" y="100" width="500" height="550" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="290" y="150" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">DAVID (1501-1504)</text>

                                    <!-- David silhouette -->
                                    <ellipse cx="290" cy="280" rx="30" ry="40" fill="#ffe4c4"/>
                                    <rect x="260" y="320" width="60" height="120" fill="#ffe4c4" rx="10"/>
                                    <rect x="250" y="440" width="30" height="100" fill="#ffe4c4"/>
                                    <rect x="300" y="440" width="30" height="100" fill="#ffe4c4"/>

                                    <text x="290" y="570" text-anchor="middle" fill="#fff" font-size="22">17 feet of marble</text>
                                    <text x="290" y="600" text-anchor="middle" fill="#888" font-size="18">Moment before battle</text>
                                    <text x="290" y="625" text-anchor="middle" fill="#888" font-size="18">Terribilità - awesome power</text>

                                    <rect x="560" y="100" width="500" height="550" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="810" y="150" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">SISTINE CHAPEL (1508-1512)</text>

                                    <!-- Chapel ceiling representation -->
                                    <rect x="650" y="200" width="320" height="200" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <line x1="650" y1="250" x2="970" y2="250" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="650" y1="300" x2="970" y2="300" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="650" y1="350" x2="970" y2="350" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="730" y1="200" x2="730" y2="400" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="810" y1="200" x2="810" y2="400" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="890" y1="200" x2="890" y2="400" stroke="#f59e0b" stroke-width="1"/>

                                    <!-- Creation of Adam hands -->
                                    <path d="M760 300 Q780 290 800 300" stroke="#fff" stroke-width="3" fill="none"/>
                                    <path d="M820 300 Q840 310 860 300" stroke="#fff" stroke-width="3" fill="none"/>

                                    <text x="810" y="450" text-anchor="middle" fill="#fff" font-size="22">Creation of Adam</text>
                                    <text x="810" y="570" text-anchor="middle" fill="#fff" font-size="22">300+ figures</text>
                                    <text x="810" y="600" text-anchor="middle" fill="#888" font-size="18">4 years on scaffolding</text>
                                    <text x="810" y="625" text-anchor="middle" fill="#888" font-size="18">"I am not a painter"</text>
                                </svg>`,
                                caption: "Both works show idealized anatomy with psychological intensity"
                            }
                        },
                        {
                            type: "quote",
                            content: "I saw the angel in the marble and carved until I set him free.",
                            author: "Michelangelo Buonarroti"
                        },
                        {
                            type: "visual",
                            title: "Raphael: The School of Athens Decoded",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="38">SCHOOL OF ATHENS DECODED</text>
                                    <text x="550" y="90" text-anchor="middle" fill="#888" font-size="24">Raphael (1509-1511)</text>

                                    <!-- Architectural frame -->
                                    <rect x="150" y="130" width="800" height="400" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2" rx="10"/>
                                    <path d="M150 130 Q550 80 950 130" fill="none" stroke="#10b981" stroke-width="3"/>

                                    <!-- Central figures -->
                                    <circle cx="480" cy="300" r="40" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="480" y="360" text-anchor="middle" fill="#ef4444" font-size="18">PLATO</text>
                                    <text x="480" y="380" text-anchor="middle" fill="#888" font-size="14">Points UP</text>
                                    <text x="480" y="400" text-anchor="middle" fill="#888" font-size="14">(Ideals)</text>

                                    <circle cx="620" cy="300" r="40" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="620" y="360" text-anchor="middle" fill="#3b82f6" font-size="18">ARISTOTLE</text>
                                    <text x="620" y="380" text-anchor="middle" fill="#888" font-size="14">Points DOWN</text>
                                    <text x="620" y="400" text-anchor="middle" fill="#888" font-size="14">(Reality)</text>

                                    <!-- Other philosophers -->
                                    <circle cx="250" cy="350" r="25" fill="rgba(245,158,11,0.3)" stroke="#f59e0b"/>
                                    <text x="250" y="400" text-anchor="middle" fill="#f59e0b" font-size="14">Pythagoras</text>

                                    <circle cx="850" cy="350" r="25" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6"/>
                                    <text x="850" y="400" text-anchor="middle" fill="#8b5cf6" font-size="14">Euclid</text>

                                    <circle cx="550" cy="450" r="25" fill="rgba(236,72,153,0.3)" stroke="#ec4899"/>
                                    <text x="550" y="500" text-anchor="middle" fill="#ec4899" font-size="14">Heraclitus</text>
                                    <text x="550" y="520" text-anchor="middle" fill="#888" font-size="12">(Michelangelo's face)</text>

                                    <!-- Key insights -->
                                    <rect x="40" y="560" width="330" height="110" rx="10" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="205" y="600" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">50+ FIGURES</text>
                                    <text x="205" y="630" text-anchor="middle" fill="#fff" font-size="16">All great thinkers united</text>

                                    <rect x="385" y="560" width="330" height="110" rx="10" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="550" y="600" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HIDDEN PORTRAITS</text>
                                    <text x="550" y="630" text-anchor="middle" fill="#fff" font-size="16">Leonardo, Michelangelo, Raphael</text>

                                    <rect x="730" y="560" width="330" height="110" rx="10" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="895" y="600" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">PERFECT SYNTHESIS</text>
                                    <text x="895" y="630" text-anchor="middle" fill="#fff" font-size="16">Ancient + Renaissance wisdom</text>
                                </svg>`,
                                caption: "Raphael's Madonnas became the standard for beauty, serenity, and tenderness"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What is 'sfumato' as developed by Leonardo da Vinci?",
                            options: [
                                { text: "A type of fresco painting technique", correct: false },
                                { text: "Soft, smoky blending of tones creating atmospheric depth", correct: true },
                                { text: "A method of preparing canvas for oil painting", correct: false },
                                { text: "A sculpture technique for carving marble", correct: false }
                            ],
                            explanation: "Sfumato (from Italian 'fumo' meaning smoke) is Leonardo's technique of softly blending tones and colors to create a hazy, atmospheric effect. This is most famously seen in the Mona Lisa, where there are no harsh outlines - edges dissolve into soft transitions, creating remarkable depth and realism."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: LMR",
                            content: "Remember the High Renaissance masters with LMR - 'Leonardo, Michelangelo, Raphael' (also the Ninja Turtles!):\n\nL - LEONARDO (1452-1519)\n• Think: 'L' for 'Layers' - his sfumato uses many translucent layers\n• Key technique: SFUMATO (smoky blending)\n• Masterpiece: MONA LISA\n• Also known for: Scientific notebooks, inventions\n• Personality: Perfectionist, left works unfinished\n\nM - MICHELANGELO (1475-1564)\n• Think: 'M' for 'Muscle' - his figures are incredibly powerful\n• Key quality: TERRIBILITÀ (awesome power)\n• Masterpiece: SISTINE CEILING, DAVID\n• Also known for: Architecture (St. Peter's dome)\n• Personality: Difficult, competitive, worked until death at 88\n\nR - RAPHAEL (1483-1520)\n• Think: 'R' for 'Refined' - perfect harmony and grace\n• Key quality: HARMONY (perfect balance)\n• Masterpiece: SCHOOL OF ATHENS\n• Also known for: Beautiful Madonnas\n• Personality: Charming, diplomatic, died young at 37\n\nFUN FACT: The Teenage Mutant Ninja Turtles are named after these artists (plus Donatello from the Early Renaissance)!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="48">L  M  R</text>
                                    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="26">The Three Giants of High Renaissance</text>

                                    <!-- 3 columns -->
                                    <rect x="40" y="130" width="330" height="400" rx="15" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="205" y="190" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="56">L</text>
                                    <text x="205" y="240" text-anchor="middle" fill="#fff" font-size="28">LEONARDO</text>
                                    <text x="205" y="290" text-anchor="middle" fill="#3b82f6" font-size="24">Sfumato</text>
                                    <text x="205" y="340" text-anchor="middle" fill="#888" font-size="18">"Smoke-like" softness</text>
                                    <text x="205" y="380" text-anchor="middle" fill="#888" font-size="18">Mona Lisa's smile</text>
                                    <text x="205" y="420" text-anchor="middle" fill="#888" font-size="18">Last Supper drama</text>
                                    <text x="205" y="480" text-anchor="middle" fill="#3b82f6" font-size="18">Science + Art unified</text>

                                    <rect x="385" y="130" width="330" height="400" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="550" y="190" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="56">M</text>
                                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="28">MICHELANGELO</text>
                                    <text x="550" y="290" text-anchor="middle" fill="#8b5cf6" font-size="24">Terribilità</text>
                                    <text x="550" y="340" text-anchor="middle" fill="#888" font-size="18">"Awesome power"</text>
                                    <text x="550" y="380" text-anchor="middle" fill="#888" font-size="18">David's tension</text>
                                    <text x="550" y="420" text-anchor="middle" fill="#888" font-size="18">Sistine Chapel ceiling</text>
                                    <text x="550" y="480" text-anchor="middle" fill="#8b5cf6" font-size="18">Sculptor who painted</text>

                                    <rect x="730" y="130" width="330" height="400" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="895" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="56">R</text>
                                    <text x="895" y="240" text-anchor="middle" fill="#fff" font-size="28">RAPHAEL</text>
                                    <text x="895" y="290" text-anchor="middle" fill="#10b981" font-size="24">Grazia</text>
                                    <text x="895" y="340" text-anchor="middle" fill="#888" font-size="18">"Effortless grace"</text>
                                    <text x="895" y="380" text-anchor="middle" fill="#888" font-size="18">School of Athens</text>
                                    <text x="895" y="420" text-anchor="middle" fill="#888" font-size="18">Perfect synthesis</text>
                                    <text x="895" y="480" text-anchor="middle" fill="#10b981" font-size="18">Died young at 37</text>

                                    <!-- Bottom summary -->
                                    <rect x="200" y="560" width="700" height="100" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">REMEMBER: LMR</text>
                                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="20">Leonardo (sfumato) • Michelangelo (terribilità) • Raphael (grazia)</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: High Renaissance Insights",
                            content: "Here's how to sound knowledgeable about the High Renaissance:\n\n1. 'IT WAS INCREDIBLY SHORT'\n'The High Renaissance lasted only 37 years - from about 1490 to 1527. It ended when Rome was sacked by imperial troops, scattering artists and ending the era's optimism.'\n\n2. 'THEY WERE RIVALS'\n'Leonardo and Michelangelo despised each other. When both were working in Florence around 1504, their rivalry was the talk of the city. They had completely opposite personalities and artistic philosophies.'\n\n3. 'MICHELANGELO DIDN'T WANT TO PAINT THE SISTINE'\n'He considered himself a sculptor, not a painter. Pope Julius II forced him to do it. Yet he created one of history's greatest paintings - while complaining about it in letters and poems.'\n\n4. 'THE MONA LISA ISN'T SPECIAL BECAUSE IT'S BEAUTIFUL'\n'It's special because of sfumato - the smoky blending technique Leonardo invented. Look at her face: there are no hard lines anywhere. That was revolutionary.'\n\n5. 'RAPHAEL SYNTHESIZED EVERYTHING'\n'Raphael wasn't the most original of the three, but he combined Leonardo's sfumato with Michelangelo's powerful figures into perfect harmony. The School of Athens is basically a greatest hits of Renaissance techniques.'",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
                                    <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HIGH RENAISSANCE CONVERSATION STARTERS</text>

                                    <!-- 2x2 + 1 -->
                                    <rect x="40" y="100" width="500" height="150" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="100" cy="175" r="30" fill="#3b82f6"/>
                                    <text x="100" y="185" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">1</text>
                                    <text x="310" y="155" text-anchor="middle" fill="#3b82f6" font-size="24" font-weight="bold">THE SMILE SECRET</text>
                                    <text x="310" y="190" text-anchor="middle" fill="#fff" font-size="18">"Mona Lisa's smile uses sfumato - no hard lines"</text>

                                    <rect x="560" y="100" width="500" height="150" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="620" cy="175" r="30" fill="#8b5cf6"/>
                                    <text x="620" y="185" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">2</text>
                                    <text x="830" y="155" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">THE RELUCTANT PAINTER</text>
                                    <text x="830" y="190" text-anchor="middle" fill="#fff" font-size="18">"Michelangelo said 'I am not a painter'"</text>

                                    <rect x="40" y="270" width="500" height="150" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="100" cy="345" r="30" fill="#10b981"/>
                                    <text x="100" y="355" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">3</text>
                                    <text x="310" y="325" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">HIDDEN SELFIE</text>
                                    <text x="310" y="360" text-anchor="middle" fill="#fff" font-size="18">"Raphael painted himself in School of Athens"</text>

                                    <rect x="560" y="270" width="500" height="150" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <circle cx="620" cy="345" r="30" fill="#f59e0b"/>
                                    <text x="620" y="355" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="24">4</text>
                                    <text x="830" y="325" text-anchor="middle" fill="#f59e0b" font-size="24" font-weight="bold">RIVALRY</text>
                                    <text x="830" y="360" text-anchor="middle" fill="#fff" font-size="18">"Leonardo and Michelangelo hated each other"</text>

                                    <rect x="300" y="440" width="500" height="150" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="360" cy="515" r="30" fill="#ec4899"/>
                                    <text x="360" y="525" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">5</text>
                                    <text x="570" y="495" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">THE UNFINISHED GENIUS</text>
                                    <text x="570" y="530" text-anchor="middle" fill="#fff" font-size="18">"Leonardo left many works unfinished - perfectionist"</text>

                                    <rect x="200" y="610" width="700" height="60" rx="30" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="550" y="650" text-anchor="middle" fill="#ffd700" font-size="22">Use these facts to impress at any museum!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. WHAT IS THE HIGH RENAISSANCE?\n• Brief period c. 1490-1527 (only 37 years)\n• Peak of Renaissance artistic achievement\n• Ended with Sack of Rome in 1527\n\n2. LEONARDO DA VINCI (L in LMR)\n• Sfumato technique (smoky blending)\n• Scientific observation in art\n• Only ~15 paintings survive (perfectionist)\n• Mona Lisa, Last Supper, Vitruvian Man\n\n3. MICHELANGELO (M in LMR)\n• Terribilità (awesome power in figures)\n• Considered himself a sculptor first\n• Sistine Ceiling, David, Pietà, St. Peter's dome\n• Lived to 88, working until weeks before death\n\n4. RAPHAEL (R in LMR)\n• Perfect harmony and grace\n• Synthesized Leonardo + Michelangelo techniques\n• School of Athens, Sistine Madonna\n• Died young at 37\n\n5. KEY TECHNIQUES:\n• Sfumato = smoky blending (Leonardo)\n• Chiaroscuro = light/dark contrast\n• Terribilità = awesome power (Michelangelo)\n• Contrapposto = natural S-curve pose\n\nYou can now discuss the High Renaissance masters with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1024" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1024" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">LESSON COMPLETE!</text>

                                    <rect x="40" y="122" width="320" height="194" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="171" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="42">L</text>
                                    <text x="200" y="214" text-anchor="middle" fill="#fff" font-size="31">LEONARDO</text>
                                    <text x="200" y="251" text-anchor="middle" fill="#888" font-size="27">Sfumato</text>
                                    <text x="200" y="287" text-anchor="middle" fill="#888" font-size="27">Mona Lisa</text>

                                    <rect x="384" y="122" width="305" height="194" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="536" y="171" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">M</text>
                                    <text x="536" y="214" text-anchor="middle" fill="#fff" font-size="31">MICHELANGELO</text>
                                    <text x="536" y="251" text-anchor="middle" fill="#888" font-size="27">Terribilità</text>
                                    <text x="536" y="287" text-anchor="middle" fill="#888" font-size="27">Sistine Ceiling</text>

                                    <rect x="716" y="122" width="305" height="194" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="867" y="171" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">R</text>
                                    <text x="867" y="214" text-anchor="middle" fill="#fff" font-size="31">RAPHAEL</text>
                                    <text x="867" y="251" text-anchor="middle" fill="#888" font-size="27">Harmony</text>
                                    <text x="867" y="287" text-anchor="middle" fill="#888" font-size="27">School of Athens</text>

                                    <rect x="100" y="352" width="900" height="133" rx="27" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="550" y="401" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KEY TECHNIQUES TO REMEMBER</text>
                                    <text x="550" y="449" text-anchor="middle" fill="#fff" font-size="29">Sfumato (smoky) • Chiaroscuro (light-dark) • Terribilità (power)</text>

                                    <rect x="100" y="522" width="900" height="109" rx="27" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="550" y="570" text-anchor="middle" fill="#ec4899" font-size="31">FUN FACT: Ninja Turtles = Renaissance Artists!</text>
                                    <text x="550" y="607" text-anchor="middle" fill="#888" font-size="29">Leonardo, Michelangelo, Raphael, Donatello</text>

                                    <rect x="100" y="655" width="900" height="121" rx="93" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="5"/>
                                    <circle cx="312" cy="716" r="26" fill="#10b981"/>
                                    <text x="239" y="728" text-anchor="middle" fill="#fff" font-size="42">✓</text>
                                    <text x="583" y="704" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">FEYNMAN TEST READY</text>
                                    <text x="583" y="740" text-anchor="middle" fill="#fff" font-size="29">You can explain the High Renaissance!</text>
                                </svg>`
                            }
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Mannerism: Beyond the High Renaissance",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Art After Perfection: What Comes Next?",
                            content: "After Leonardo, Michelangelo, and Raphael achieved apparent perfection, what could the next generation do? They couldn't out-perfect perfection, so they deliberately BROKE the rules. This rebellious style is called Mannerism (c. 1520-1600).\n\nWHY 'MANNERISM'?\n• From Italian 'maniera' meaning 'style' or 'stylishness'\n• Art that emphasizes style OVER naturalism\n• Originally a criticism - implying 'too much style, not enough substance'\n• Now recognized as a sophisticated response to crisis\n\nTHE CRISIS CONTEXT:\n• 1517: Protestant Reformation splits Christianity\n• 1527: Sack of Rome - imperial troops devastate the Holy City\n• 1530s-40s: Religious wars, plagues, uncertainty\n• The confident optimism of High Renaissance shattered\n\n5 RULES MANNERISTS BROKE:\n1. FIGURA SERPENTINATA: Twisted, spiraling poses (not balanced contrapposto)\n2. ELONGATION: Impossibly long necks, fingers, bodies\n3. SPATIAL AMBIGUITY: Crowded, unclear depth\n4. ACID COLORS: Cool pinks, greens, oranges (not warm Renaissance palette)\n5. SELF-CONSCIOUS ARTIFICE: Art that shows off being artificial\n\nKEY ARTISTS:\n• Pontormo, Parmigianino, Bronzino (Florence)\n• Tintoretto, El Greco (Venice/Spain)\n• Cellini (sculpture), Giambologna (sculpture)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">MANNERIST CHARACTERISTICS</text>

    <!-- Two columns comparing styles -->
    <rect x="40" y="90" width="500" height="400" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="290" y="130" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">HIGH RENAISSANCE</text>

    <!-- Normal figure -->
    <circle cx="290" cy="200" r="30" fill="none" stroke="#10b981" stroke-width="4"/>
    <line x1="290" y1="230" x2="290" y2="340" stroke="#10b981" stroke-width="4"/>
    <line x1="290" y1="260" x2="240" y2="300" stroke="#10b981" stroke-width="4"/>
    <line x1="290" y1="260" x2="340" y2="300" stroke="#10b981" stroke-width="4"/>
    <line x1="290" y1="340" x2="250" y2="420" stroke="#10b981" stroke-width="4"/>
    <line x1="290" y1="340" x2="330" y2="420" stroke="#10b981" stroke-width="4"/>
    <text x="290" y="460" text-anchor="middle" fill="#888" font-size="26">Balanced proportions</text>

    <rect x="560" y="90" width="500" height="400" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="810" y="130" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">MANNERISM</text>

    <!-- Elongated twisted figure -->
    <circle cx="810" cy="180" r="25" fill="none" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="810" y1="205" x2="810" y2="350" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="810" y1="240" x2="750" y2="300" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="810" y1="250" x2="880" y2="270" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="810" y1="350" x2="770" y2="430" stroke="#8b5cf6" stroke-width="4"/>
    <line x1="810" y1="350" x2="850" y2="430" stroke="#8b5cf6" stroke-width="4"/>
    <text x="810" y="460" text-anchor="middle" fill="#888" font-size="26">Elongated & Twisted</text>

    <!-- Key traits bar -->
    <rect x="40" y="510" width="1020" height="80" rx="15" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
    <text x="550" y="560" text-anchor="middle" fill="#8b5cf6" font-size="24">Figura serpentinata | Acid colors | Ambiguous space | Elegance over naturalism</text>

    <!-- Context bar -->
    <rect x="40" y="610" width="1020" height="70" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="550" y="655" text-anchor="middle" fill="#ef4444" font-size="24">Crisis: Sack of Rome (1527) + Reformation = Shattered Renaissance confidence</text>
</svg>`,
                                caption: "Mannerism deliberately distorted High Renaissance ideals"
                            }
                        },
                        {
                            type: "visual",
                            title: "5 Rules Mannerists Broke",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 750" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="750" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="36">MANNERISM: BREAKING RENAISSANCE RULES</text>

    <!-- 2x2 grid + 1 centered -->
    <!-- Rule 1 -->
    <rect x="40" y="90" width="500" height="170" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="290" y="130" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">1. FIGURA SERPENTINATA</text>
    <path d="M 100 160 Q 140 190 110 220 Q 80 250 120 260" stroke="#8b5cf6" stroke-width="5" fill="none"/>
    <text x="320" y="180" fill="#fff" font-size="24">Twisted, spiraling poses</text>
    <text x="320" y="210" fill="#888" font-size="22">Bodies curve impossibly</text>

    <!-- Rule 2 -->
    <rect x="560" y="90" width="500" height="170" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
    <text x="810" y="130" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="28">2. ELONGATION</text>
    <circle cx="620" cy="180" r="15" fill="none" stroke="#ec4899" stroke-width="4"/>
    <line x1="620" y1="195" x2="620" y2="245" stroke="#ec4899" stroke-width="4"/>
    <text x="810" y="180" fill="#fff" font-size="24">Impossibly long necks</text>
    <text x="810" y="210" fill="#888" font-size="22">Extended fingers & limbs</text>

    <!-- Rule 3 -->
    <rect x="40" y="280" width="500" height="170" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
    <text x="290" y="320" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">3. SPATIAL AMBIGUITY</text>
    <rect x="90" y="350" width="60" height="60" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <rect x="120" y="370" width="60" height="60" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <text x="320" y="370" fill="#fff" font-size="24">Unclear depth & crowding</text>
    <text x="320" y="400" fill="#888" font-size="22">Confusing foreground/background</text>

    <!-- Rule 4 -->
    <rect x="560" y="280" width="500" height="170" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="810" y="320" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">4. ACID COLORS</text>
    <rect x="620" y="350" width="40" height="40" fill="#00ffff"/>
    <rect x="670" y="350" width="40" height="40" fill="#ff69b4"/>
    <rect x="720" y="350" width="40" height="40" fill="#98fb98"/>
    <text x="880" y="370" fill="#fff" font-size="24">Cool, unusual hues</text>
    <text x="880" y="400" fill="#888" font-size="22">Not warm Renaissance palette</text>

    <!-- Rule 5 centered -->
    <rect x="200" y="470" width="700" height="130" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
    <text x="550" y="520" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">5. SELF-CONSCIOUS ARTIFICE</text>
    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="24">Art that shows off its own artificiality</text>

    <!-- Context -->
    <rect x="100" y="620" width="900" height="70" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="550" y="665" text-anchor="middle" fill="#888" font-size="24">Context: Sack of Rome (1527) + Reformation = Crisis</text>
</svg>`,
                                caption: "Mannerists deliberately broke High Renaissance rules"
                            }
                        },
                        {
                            type: "visual",
                            title: "Artwork Spotlight: Madonna with the Long Neck (c. 1535)",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 750" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="750" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">PARMIGIANINO'S MANNERIST MASTERPIECE</text>
    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="24">Madonna with the Long Neck (c. 1535)</text>

    <!-- Simplified painting representation -->
    <rect x="380" y="110" width="340" height="340" rx="15" fill="#3d3d5c" stroke="#8b5cf6" stroke-width="4"/>

    <!-- Madonna figure - elongated -->
    <ellipse cx="550" cy="170" rx="50" ry="30" fill="#d4a574"/>
    <ellipse cx="550" cy="155" rx="35" ry="22" fill="#d4a574"/>
    <!-- LONG neck -->
    <rect x="535" y="185" width="30" height="70" fill="#d4a574"/>
    <!-- Body -->
    <ellipse cx="550" cy="330" rx="80" ry="90" fill="#4169e1"/>
    <!-- Christ child -->
    <ellipse cx="590" cy="300" rx="50" ry="45" fill="#ffe4c4"/>
    <!-- Column -->
    <rect x="665" y="180" width="20" height="220" fill="#888"/>
    <!-- Tiny figure -->
    <circle cx="680" cy="400" r="8" fill="#666"/>

    <!-- Three analysis boxes -->
    <rect x="40" y="480" width="330" height="220" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
    <text x="205" y="520" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="26">THE MADONNA</text>
    <text x="205" y="560" text-anchor="middle" fill="#fff" font-size="22">Elongated neck</text>
    <text x="205" y="590" text-anchor="middle" fill="#fff" font-size="22">Long fingers</text>
    <text x="205" y="620" text-anchor="middle" fill="#888" font-size="20">Serpentine pose</text>
    <text x="205" y="650" text-anchor="middle" fill="#888" font-size="20">Alien beauty</text>

    <rect x="385" y="480" width="330" height="220" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="550" y="520" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">CHRIST CHILD</text>
    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="22">Strangely large</text>
    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="22">Limp posture</text>
    <text x="550" y="620" text-anchor="middle" fill="#888" font-size="20">Ambiguous</text>
    <text x="550" y="650" text-anchor="middle" fill="#888" font-size="20">position</text>

    <rect x="730" y="480" width="330" height="220" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
    <text x="895" y="520" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">THE SETTING</text>
    <text x="895" y="560" text-anchor="middle" fill="#fff" font-size="22">Unfinished column</text>
    <text x="895" y="590" text-anchor="middle" fill="#fff" font-size="22">Tiny prophet</text>
    <text x="895" y="620" text-anchor="middle" fill="#888" font-size="20">Spatial</text>
    <text x="895" y="650" text-anchor="middle" fill="#888" font-size="20">confusion</text>
</svg>`,
                                caption: "Deliberate 'wrongness' creates an ethereal, dream-like quality"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What historical event contributed to the emergence of Mannerism?",
                            options: [
                                { text: "The discovery of America", correct: false },
                                { text: "The Sack of Rome in 1527", correct: true },
                                { text: "The invention of oil painting", correct: false },
                                { text: "The founding of the first art academy", correct: false }
                            ],
                            explanation: "The Sack of Rome in 1527, when troops of Holy Roman Emperor Charles V devastated the city, shattered the confident worldview of the High Renaissance. Combined with the religious upheaval of the Protestant Reformation, this crisis prompted artists to move away from harmonious ideals toward the deliberately unsettling elegance of Mannerism."
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: SEALS",
                            content: "Remember Mannerism's 5 rule-breaking characteristics with SEALS:\n\nS - SERPENTINATA (figura serpentinata)\n• Twisted, spiraling poses like a serpent\n• Bodies curve impossibly\n• Think: 'S' for the S-curve shape\n\nE - ELONGATION\n• Impossibly long necks, fingers, limbs\n• 'Madonna with Long Neck' = perfect example\n• Anti-natural proportions\n\nA - ACID COLORS\n• Cool pinks, lime greens, icy blues\n• Not the warm Renaissance palette\n• Unsettling, otherworldly\n\nL - LIMBO SPACE\n• Ambiguous, crowded compositions\n• Unclear foreground/background\n• Spatial confusion is deliberate\n\nS - SELF-CONSCIOUS STYLE\n• Art that shows off being artificial\n• 'Maniera' = stylishness over naturalism\n• Sophistication over sincerity\n\nREMEMBER THE CONTEXT:\nSack of Rome (1527) + Reformation = Crisis → Mannerism",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="42">S E A L S</text>
    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="24">5 Ways Mannerists Broke the Rules</text>

    <!-- 5 boxes in a row -->
    <rect x="40" y="120" width="190" height="260" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="135" y="170" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="48">S</text>
    <text x="135" y="205" text-anchor="middle" fill="#fff" font-size="20">Serpentinata</text>
    <text x="135" y="235" text-anchor="middle" fill="#ccc" font-size="18">Twisted</text>
    <text x="135" y="260" text-anchor="middle" fill="#ccc" font-size="18">poses</text>
    <path d="M 115 285 Q 135 310 115 335" stroke="#8b5cf6" stroke-width="4" fill="none"/>

    <rect x="250" y="120" width="190" height="260" rx="12" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
    <text x="345" y="170" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="48">E</text>
    <text x="345" y="205" text-anchor="middle" fill="#fff" font-size="20">Elongation</text>
    <text x="345" y="235" text-anchor="middle" fill="#ccc" font-size="18">Long necks</text>
    <text x="345" y="260" text-anchor="middle" fill="#ccc" font-size="18">& fingers</text>
    <line x1="345" y1="285" x2="345" y2="340" stroke="#ec4899" stroke-width="4"/>

    <rect x="460" y="120" width="190" height="260" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
    <text x="555" y="170" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="48">A</text>
    <text x="555" y="205" text-anchor="middle" fill="#fff" font-size="20">Acid Colors</text>
    <text x="555" y="235" text-anchor="middle" fill="#ccc" font-size="18">Cool pinks</text>
    <text x="555" y="260" text-anchor="middle" fill="#ccc" font-size="18">icy blues</text>
    <rect x="530" y="285" width="22" height="22" fill="#ff69b4"/>
    <rect x="558" y="285" width="22" height="22" fill="#00ffff"/>

    <rect x="670" y="120" width="190" height="260" rx="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
    <text x="765" y="170" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="48">L</text>
    <text x="765" y="205" text-anchor="middle" fill="#fff" font-size="20">Limbo Space</text>
    <text x="765" y="235" text-anchor="middle" fill="#ccc" font-size="18">Ambiguous</text>
    <text x="765" y="260" text-anchor="middle" fill="#ccc" font-size="18">depth</text>
    <rect x="740" y="285" width="24" height="28" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <rect x="755" y="297" width="24" height="28" fill="none" stroke="#f59e0b" stroke-width="2"/>

    <rect x="880" y="120" width="180" height="260" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
    <text x="970" y="170" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="48">S</text>
    <text x="970" y="205" text-anchor="middle" fill="#fff" font-size="20">Self-conscious</text>
    <text x="970" y="235" text-anchor="middle" fill="#ccc" font-size="18">Stylish over</text>
    <text x="970" y="260" text-anchor="middle" fill="#ccc" font-size="18">natural</text>

    <!-- Crisis context -->
    <rect x="80" y="410" width="940" height="100" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
    <text x="550" y="455" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">CRISIS CONTEXT</text>
    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="22">1517: Reformation | 1527: Sack of Rome -> Mannerism</text>

    <!-- Key work -->
    <rect x="80" y="530" width="940" height="80" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="550" y="570" text-anchor="middle" fill="#8b5cf6" font-size="24">KEY WORK: Madonna with the Long Neck (Parmigianino)</text>
    <text x="550" y="595" text-anchor="middle" fill="#ccc" font-size="20">Shows all 5 SEALS characteristics!</text>
</svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Understanding Mannerism",
                            content: "Here's how to sound knowledgeable about Mannerism:\n\n1. 'IT WAS A REACTION TO PERFECTION'\n'After Raphael died in 1520, artists couldn't out-perfect perfection. So they deliberately broke the rules - like a jazz musician who knows the rules well enough to break them interestingly.'\n\n2. 'IT'S NOT 'BAD' RENAISSANCE ART'\n'For centuries, critics dismissed Mannerism as decadent. Now we recognize it as a sophisticated response to crisis - art that reflects the anxiety of its time.'\n\n3. 'LOOK AT THE NECKS'\n'The easiest way to spot Mannerism is impossibly long necks. The Madonna with Long Neck is the most famous example - her neck is literally swan-like.'\n\n4. 'THE COLORS ARE A GIVEAWAY'\n'Mannerist colors are acid and cool - pinks, lime greens, icy blues. Renaissance colors are warm - deep reds, rich browns. The palette alone tells you the era.'\n\n5. 'EL GRECO WAS A MANNERIST'\n'Most people know El Greco's elongated figures but don't realize he was a Mannerist. His lightning-flashed skies and stretched saints are textbook Mannerism.'",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">5 MANNERISM CONVERSATION STARTERS</text>

    <!-- 2x2 grid + 1 centered -->
    <rect x="40" y="90" width="500" height="130" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <circle cx="90" cy="155" r="22" fill="#8b5cf6"/>
    <text x="90" y="162" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">1</text>
    <text x="310" y="135" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">REACTION TO PERFECTION</text>
    <text x="310" y="165" text-anchor="middle" fill="#fff" font-size="20">Like jazz musicians breaking rules</text>
    <text x="310" y="195" text-anchor="middle" fill="#888" font-size="18">Deliberately rebellious</text>

    <rect x="560" y="90" width="500" height="130" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
    <circle cx="610" cy="155" r="22" fill="#10b981"/>
    <text x="610" y="162" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">2</text>
    <text x="830" y="135" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">NOT 'BAD' ART</text>
    <text x="830" y="165" text-anchor="middle" fill="#fff" font-size="20">Sophisticated crisis response</text>
    <text x="830" y="195" text-anchor="middle" fill="#888" font-size="18">Now highly valued</text>

    <rect x="40" y="240" width="500" height="130" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
    <circle cx="90" cy="305" r="22" fill="#ec4899"/>
    <text x="90" y="312" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">3</text>
    <text x="310" y="285" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">LOOK AT THE NECKS</text>
    <text x="310" y="315" text-anchor="middle" fill="#fff" font-size="20">Impossibly long = Mannerist</text>
    <text x="310" y="345" text-anchor="middle" fill="#888" font-size="18">Easy spotting trick</text>

    <rect x="560" y="240" width="500" height="130" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <circle cx="610" cy="305" r="22" fill="#f59e0b"/>
    <text x="610" y="312" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="20">4</text>
    <text x="830" y="285" text-anchor="middle" fill="#f59e0b" font-size="24" font-weight="bold">ACID COLORS</text>
    <text x="830" y="315" text-anchor="middle" fill="#fff" font-size="20">Cool pinks vs warm reds</text>
    <text x="830" y="345" text-anchor="middle" fill="#888" font-size="18">Palette = era giveaway</text>

    <rect x="250" y="390" width="600" height="130" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <circle cx="310" cy="455" r="22" fill="#3b82f6"/>
    <text x="310" y="462" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">5</text>
    <text x="570" y="435" text-anchor="middle" fill="#3b82f6" font-size="24" font-weight="bold">EL GRECO = MANNERIST</text>
    <text x="570" y="465" text-anchor="middle" fill="#fff" font-size="20">His stretched figures are textbook Mannerism</text>
    <text x="570" y="495" text-anchor="middle" fill="#888" font-size="18">Lightning skies & elongated saints</text>

    <!-- Bottom bar -->
    <rect x="100" y="550" width="900" height="70" rx="35" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
    <text x="550" y="595" text-anchor="middle" fill="#8b5cf6" font-size="26">Now you can spot Mannerism anywhere!</text>
</svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. WHAT IS MANNERISM?\n• Art style c. 1520-1600\n• Deliberate rule-breaking after High Renaissance 'perfection'\n• Name from 'maniera' (stylishness)\n\n2. WHY DID IT EMERGE?\n• 1517: Protestant Reformation\n• 1527: Sack of Rome\n• Crisis shattered Renaissance confidence\n• Artists responded with unsettling elegance\n\n3. THE 5 SEALS:\n• S - Serpentinata (twisted poses)\n• E - Elongation (long necks, fingers)\n• A - Acid colors (cool pinks, icy blues)\n• L - Limbo space (ambiguous depth)\n• S - Self-conscious style (artificial elegance)\n\n4. KEY WORKS:\n• Madonna with Long Neck (Parmigianino)\n• Descent from the Cross (Pontormo)\n• El Greco's stretched saints\n• Giambologna's spiraling sculptures\n\n5. HOW TO SPOT IT:\n• Long necks and fingers\n• Cool, unusual colors\n• Crowded, unclear spaces\n• Twisted, spiraling poses\n\nYou can now identify Mannerism with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 1100 1024" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="1024" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">LESSON COMPLETE!</text>

                                    <rect x="40" y="134" width="500" height="145" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="290" y="183" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">WHAT IS IT?</text>
                                    <text x="290" y="224" text-anchor="middle" fill="#fff" font-size="29">Rule-breaking after perfection</text>
                                    <text x="290" y="256" text-anchor="middle" fill="#888" font-size="27">c. 1520-1600</text>

                                    <rect x="560" y="134" width="500" height="145" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="810" y="183" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">WHY?</text>
                                    <text x="810" y="224" text-anchor="middle" fill="#fff" font-size="29">Sack of Rome + Reformation</text>
                                    <text x="810" y="256" text-anchor="middle" fill="#888" font-size="27">Crisis response</text>

                                    <rect x="100" y="304" width="900" height="169" rx="27" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="550" y="352" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="35">SEALS MNEMONIC</text>
                                    <text x="550" y="401" text-anchor="middle" fill="#fff" font-size="31">S-Serpentinata • E-Elongation • A-Acid colors</text>
                                    <text x="550" y="442" text-anchor="middle" fill="#fff" font-size="31">L-Limbo space • S-Self-conscious style</text>

                                    <rect x="100" y="498" width="900" height="133" rx="27" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="550" y="546" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">SPOTTING TRICKS</text>
                                    <text x="550" y="587" text-anchor="middle" fill="#fff" font-size="29">Long necks • Cool colors • Twisted poses • Crowded space</text>
                                    <text x="550" y="619" text-anchor="middle" fill="#888" font-size="27">Madonna with Long Neck = perfect example</text>

                                    <rect x="100" y="655" width="900" height="121" rx="93" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="5"/>
                                    <circle cx="312" cy="716" r="26" fill="#10b981"/>
                                    <text x="239" y="728" text-anchor="middle" fill="#fff" font-size="42">✓</text>
                                    <text x="583" y="704" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">FEYNMAN TEST READY</text>
                                    <text x="583" y="740" text-anchor="middle" fill="#fff" font-size="29">You can explain Mannerism!</text>
                                </svg>`
                            }
                        }
                    ]
                },
                {
                    id: 7,
                    title: "Venetian Renaissance: Color & Light",
                    duration: 12,
                    completed: false,
                    cards: [
                        // ========== INTRODUCTION ==========
                        {
                            type: "intro",
                            title: "Venice: Where Color Became King",
                            content: "Forget everything you learned about Florentine art. Venice did things COMPLETELY differently.\n\nWhile Florence was obsessed with perfect drawings and mathematical perspective, Venice developed a revolutionary approach where COLOR itself became the foundation of painting. This wasn't just a stylistic choice—it was shaped by Venice's unique geography, climate, and culture.\n\nThe result? Some of the most sensuous, atmospheric, and emotionally powerful paintings in all of Western art. Venetian techniques influenced artists for 500 years—from Rubens to Rembrandt to the Impressionists.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="36">WHY VENICE WAS DIFFERENT</text>

    <!-- Geographic factors -->
    <rect x="40" y="90" width="1020" height="130" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <text x="550" y="130" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">GEOGRAPHIC FACTORS</text>
    <text x="210" y="170" text-anchor="middle" fill="#fff" font-size="22">Built on water</text>
    <text x="550" y="170" text-anchor="middle" fill="#fff" font-size="22">Humid climate</text>
    <text x="890" y="170" text-anchor="middle" fill="#fff" font-size="22">Reflected light</text>
    <text x="210" y="200" text-anchor="middle" fill="#888" font-size="18">(No frescoes!)</text>
    <text x="550" y="200" text-anchor="middle" fill="#888" font-size="18">(Mold on walls)</text>
    <text x="890" y="200" text-anchor="middle" fill="#888" font-size="18">(Shimmering effects)</text>

    <!-- Arrows -->
    <path d="M 550 220 L 550 250" stroke="#3b82f6" stroke-width="3"/>

    <!-- Innovations -->
    <rect x="40" y="260" width="1020" height="130" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="550" y="300" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">VENETIAN INNOVATIONS</text>
    <text x="210" y="340" text-anchor="middle" fill="#fff" font-size="22">Oil on CANVAS</text>
    <text x="550" y="340" text-anchor="middle" fill="#fff" font-size="22">COLORITO</text>
    <text x="890" y="340" text-anchor="middle" fill="#fff" font-size="22">Atmospheric effects</text>
    <text x="210" y="370" text-anchor="middle" fill="#888" font-size="18">(Not wood panels)</text>
    <text x="550" y="370" text-anchor="middle" fill="#888" font-size="18">(Color first!)</text>
    <text x="890" y="370" text-anchor="middle" fill="#888" font-size="18">(Light &amp; mood)</text>

    <!-- Timeline -->
    <rect x="40" y="410" width="1020" height="150" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="550" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">THE VENETIAN MASTERS</text>
    <line x1="100" y1="500" x2="1000" y2="500" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="200" cy="500" r="8" fill="#10b981"/>
    <text x="200" y="540" text-anchor="middle" fill="#10b981" font-size="20">Bellini</text>
    <circle cx="380" cy="500" r="8" fill="#3b82f6"/>
    <text x="380" y="540" text-anchor="middle" fill="#3b82f6" font-size="20">Giorgione</text>
    <circle cx="560" cy="500" r="10" fill="#ef4444"/>
    <text x="560" y="540" text-anchor="middle" fill="#ef4444" font-size="20">TITIAN</text>
    <circle cx="740" cy="500" r="8" fill="#8b5cf6"/>
    <text x="740" y="540" text-anchor="middle" fill="#8b5cf6" font-size="20">Tintoretto</text>
    <circle cx="920" cy="500" r="8" fill="#ec4899"/>
    <text x="920" y="540" text-anchor="middle" fill="#ec4899" font-size="20">Veronese</text>

    <!-- Bottom caption -->
    <rect x="200" y="590" width="700" height="60" rx="30" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
    <text x="550" y="630" text-anchor="middle" fill="#ef4444" font-size="22">Venice's unique conditions created a revolutionary approach</text>
</svg>`,
                                caption: "Venice's unique conditions created a revolutionary approach to painting"
                            }
                        },

                        // ========== THE GREAT DEBATE ==========
                        {
                            type: "concept",
                            title: "The Great Renaissance Debate: Disegno vs Colorito",
                            content: "One of the fiercest debates in art history raged between Florence and Venice:\n\n**FLORENCE: DISEGNO (Drawing)**\n• Drawing is the foundation of all art\n• Clear outlines define forms precisely\n• Intellectual, mathematical approach\n• 'Design reveals the mind of the artist'\n• Champions: Michelangelo, Vasari\n\n**VENICE: COLORITO (Color)**\n• Color itself creates form and space\n• Soft edges blend naturally\n• Sensory, emotional approach\n• 'Color speaks directly to the soul'\n• Champions: Titian, Tintoretto\n\nThis wasn't just about technique—it was about philosophy. Is art primarily an intellectual exercise (Florence) or an emotional experience (Venice)?\n\n**The Venetian Advantage:** By building forms through layers of color rather than outlines, Venetian painters achieved effects impossible for Florentines—glowing flesh, shimmering fabrics, and atmospheric landscapes that seem to breathe.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">DISEGNO vs COLORITO</text>
    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="22">The Great Renaissance Debate</text>

    <!-- Florence side -->
    <rect x="40" y="110" width="500" height="400" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="290" y="160" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">FLORENCE</text>
    <text x="290" y="195" text-anchor="middle" fill="#f59e0b" font-size="28">DISEGNO</text>

    <!-- Drawing demonstration - clear lines -->
    <circle cx="290" cy="280" r="50" fill="none" stroke="#f59e0b" stroke-width="4"/>
    <ellipse cx="265" cy="265" rx="15" ry="10" fill="#f59e0b"/>
    <ellipse cx="315" cy="265" rx="15" ry="10" fill="#f59e0b"/>
    <path d="M 265 300 Q 290 325 315 300" stroke="#f59e0b" stroke-width="3" fill="none"/>

    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="24">Clear outlines</text>
    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="24">Precise forms</text>
    <text x="290" y="430" text-anchor="middle" fill="#fff" font-size="24">Mathematical</text>
    <text x="290" y="475" text-anchor="middle" fill="#888" font-size="22">"Shows the MIND"</text>

    <!-- Venice side -->
    <rect x="560" y="110" width="500" height="400" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="810" y="160" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">VENICE</text>
    <text x="810" y="195" text-anchor="middle" fill="#ef4444" font-size="28">COLORITO</text>

    <!-- Color demonstration - soft blended -->
    <defs>
        <radialGradient id="venetianGrad">
            <stop offset="0%" stop-color="#fca5a5"/>
            <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
    </defs>
    <circle cx="810" cy="280" r="50" fill="url(#venetianGrad)"/>
    <ellipse cx="785" cy="265" rx="15" ry="10" fill="rgba(0,0,0,0.3)"/>
    <ellipse cx="835" cy="265" rx="15" ry="10" fill="rgba(0,0,0,0.3)"/>
    <path d="M 785 300 Q 810 320 835 300" stroke="rgba(0,0,0,0.3)" stroke-width="3" fill="none"/>

    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="24">Soft edges</text>
    <text x="810" y="400" text-anchor="middle" fill="#fff" font-size="24">Blended forms</text>
    <text x="810" y="430" text-anchor="middle" fill="#fff" font-size="24">Atmospheric</text>
    <text x="810" y="475" text-anchor="middle" fill="#888" font-size="22">"Speaks to SOUL"</text>

    <!-- VS circle -->
    <circle cx="550" cy="310" r="35" fill="#1a1a2e" stroke="#fff" stroke-width="3"/>
    <text x="550" y="320" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">VS</text>

    <!-- Bottom summary -->
    <rect x="150" y="540" width="800" height="80" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="22">Intellectual exercise vs Emotional experience</text>
    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="18">This debate shaped Renaissance art theory for centuries</text>
</svg>`,
                                caption: "The debate shaped Renaissance art theory for centuries"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why did Venetian painters develop oil on canvas instead of fresco?",
                            options: [
                                { text: "It was cheaper than fresco", correct: false },
                                { text: "The humid climate caused frescoes to deteriorate and mold", correct: true },
                                { text: "Canvas was invented in Venice", correct: false },
                                { text: "The Pope preferred canvas paintings", correct: false }
                            ],
                            explanation: "Venice is built on water, creating extremely humid conditions. Fresco (painting on wet plaster) would quickly deteriorate and grow mold on Venice's damp walls. This forced Venetian artists to pioneer oil painting on canvas—a technique that became the standard for Western painting for the next 500 years."
                        },

                        // ========== GIORGIONE: THE MYSTERIOUS PIONEER ==========
                        {
                            type: "concept",
                            title: "Giorgione: The Mysterious Pioneer",
                            content: "Before Titian, there was Giorgione (c. 1477-1510)—one of art history's most mysterious figures.\n\n**What We Know:**\n• Died at only 32-33, probably of plague\n• Left fewer than 20 authenticated works\n• Revolutionized Venetian painting\n• Master of poetic, dreamlike atmosphere\n\n**His Revolutionary Innovation: MOOD PAINTING**\nGiorgione invented 'poetic paintings'—works without clear narratives that existed purely to create a MOOD or emotional state. Before him, paintings always told a story. After him, they could simply BE.\n\n**The Tempest (c. 1508)**\nHis most famous work shows a soldier, a nursing woman, and an approaching storm. What does it mean? Nobody knows—and that's the point. It's the first painting in Western art where atmosphere and emotion matter more than story.\n\n**His Legacy:**\n• Unified figures and landscape through color\n• Created the first 'landscape with figures' genre\n• Taught Titian, who finished some of his works\n• Influenced Romantic painting 300 years later",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="36">GIORGIONE (c. 1477-1510)</text>
    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="22">"The most mysterious genius in art history"</text>

    <!-- Two columns -->
    <!-- Left: The Tempest -->
    <rect x="40" y="110" width="500" height="280" rx="15" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
    <text x="290" y="150" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">THE TEMPEST (c. 1508)</text>

    <!-- Storm representation -->
    <ellipse cx="180" cy="210" rx="70" ry="30" fill="#374151"/>
    <ellipse cx="290" cy="200" rx="90" ry="35" fill="#4b5563"/>
    <ellipse cx="400" cy="210" rx="70" ry="30" fill="#374151"/>
    <!-- Lightning -->
    <path d="M 290 180 L 280 230 L 300 220 L 285 280" stroke="#fcd34d" stroke-width="3" fill="none"/>
    <!-- Figures -->
    <circle cx="150" cy="330" r="15" fill="#666"/>
    <circle cx="410" cy="340" r="12" fill="#d4a574"/>

    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="18">First "mood painting" in Western art</text>

    <!-- Right: What Made Him Special -->
    <rect x="560" y="110" width="500" height="280" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="810" y="150" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">HIS INNOVATIONS</text>

    <text x="810" y="200" fill="#fff" font-size="20" text-anchor="middle">Invented "mood painting"</text>
    <text x="810" y="235" fill="#fff" font-size="20" text-anchor="middle">No clear narrative needed</text>
    <text x="810" y="270" fill="#fff" font-size="20" text-anchor="middle">Atmosphere over story</text>
    <text x="810" y="305" fill="#fff" font-size="20" text-anchor="middle">Unified figures &amp; landscape</text>
    <text x="810" y="345" fill="#888" font-size="18" text-anchor="middle">Died at only 32-33</text>
    <text x="810" y="375" fill="#888" font-size="18" text-anchor="middle">Fewer than 20 works survive</text>

    <!-- Legacy box -->
    <rect x="40" y="410" width="1020" height="140" rx="15" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
    <text x="550" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">HIS LEGACY</text>
    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="22">Created the first "landscape with figures" genre</text>
    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="22">Taught Titian, who finished some of his works</text>

    <!-- Bottom bar -->
    <rect x="200" y="570" width="700" height="70" rx="35" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
    <text x="550" y="615" text-anchor="middle" fill="#3b82f6" font-size="22">Influenced Romantic painting 300 years later</text>
</svg>`,
                                caption: "Giorgione died young but changed art forever"
                            }
                        },

                        // ========== TITIAN: THE TITAN OF VENETIAN ART ==========
                        {
                            type: "concept",
                            title: "Titian: The Greatest Colorist in History",
                            content: "Titian (Tiziano Vecellio, c. 1488-1576) dominated European painting for over 60 years. He was painter to kings, emperors, and popes—and changed how we think about color forever.\n\n**Career Spanning 7 Decades:**\n• Apprenticed to Giovanni Bellini\n• Worked alongside Giorgione\n• Became official painter of Venice (1516)\n• Painted for Emperor Charles V, who made him a Count\n• Painted for Philip II of Spain\n• Worked until his death at 88-90 years old\n\n**What Made Titian Different?**\nHe treated color as MORE IMPORTANT than drawing. While Michelangelo drew perfect figures and then colored them in, Titian built his forms entirely through COLOR—layering, glazing, and adjusting until figures emerged from pure pigment.\n\n**His Secret:** He reportedly kept paintings facing the wall for months, then looked at them 'as if they were his mortal enemies' to spot weaknesses. He'd rework and rework until the color relationships were perfect.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="36">TITIAN (c. 1488-1576)</text>
    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="20">88 years old | 60+ year career | "The Sun of Venice"</text>

    <!-- Career timeline -->
    <line x1="80" y1="130" x2="1020" y2="130" stroke="#666" stroke-width="3"/>

    <circle cx="180" cy="130" r="8" fill="#10b981"/>
    <text x="180" y="115" text-anchor="middle" fill="#888" font-size="16">1508</text>
    <text x="180" y="160" text-anchor="middle" fill="#10b981" font-size="16">Works with</text>
    <text x="180" y="178" text-anchor="middle" fill="#10b981" font-size="16">Giorgione</text>

    <circle cx="400" cy="130" r="8" fill="#3b82f6"/>
    <text x="400" y="115" text-anchor="middle" fill="#888" font-size="16">1516</text>
    <text x="400" y="160" text-anchor="middle" fill="#3b82f6" font-size="16">Official</text>
    <text x="400" y="178" text-anchor="middle" fill="#3b82f6" font-size="16">Painter</text>

    <circle cx="620" cy="130" r="8" fill="#f59e0b"/>
    <text x="620" y="115" text-anchor="middle" fill="#888" font-size="16">1533</text>
    <text x="620" y="160" text-anchor="middle" fill="#f59e0b" font-size="16">Made</text>
    <text x="620" y="178" text-anchor="middle" fill="#f59e0b" font-size="16">Count</text>

    <circle cx="840" cy="130" r="8" fill="#8b5cf6"/>
    <text x="840" y="115" text-anchor="middle" fill="#888" font-size="16">1550s</text>
    <text x="840" y="160" text-anchor="middle" fill="#8b5cf6" font-size="16">Late</text>
    <text x="840" y="178" text-anchor="middle" fill="#8b5cf6" font-size="16">Style</text>

    <circle cx="980" cy="130" r="8" fill="#ef4444"/>
    <text x="980" y="115" text-anchor="middle" fill="#888" font-size="16">1576</text>
    <text x="980" y="160" text-anchor="middle" fill="#ef4444" font-size="16">Dies</text>
    <text x="980" y="178" text-anchor="middle" fill="#ef4444" font-size="16">age 88</text>

    <!-- Patrons -->
    <rect x="40" y="210" width="1020" height="130" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="550" y="250" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">PAINTED FOR THE MOST POWERFUL PEOPLE IN EUROPE</text>
    <text x="175" y="295" text-anchor="middle" fill="#fff" font-size="20">Pope Paul III</text>
    <text x="175" y="320" text-anchor="middle" fill="#888" font-size="16">Rome</text>
    <text x="410" y="295" text-anchor="middle" fill="#fff" font-size="20">Charles V</text>
    <text x="410" y="320" text-anchor="middle" fill="#888" font-size="16">Holy Roman Emperor</text>
    <text x="680" y="295" text-anchor="middle" fill="#fff" font-size="20">Philip II</text>
    <text x="680" y="320" text-anchor="middle" fill="#888" font-size="16">King of Spain</text>
    <text x="920" y="295" text-anchor="middle" fill="#fff" font-size="20">Venice</text>
    <text x="920" y="320" text-anchor="middle" fill="#888" font-size="16">Doge &amp; State</text>

    <!-- Method -->
    <rect x="40" y="360" width="1020" height="220" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="550" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">TITIAN'S REVOLUTIONARY METHOD</text>

    <!-- Process boxes -->
    <rect x="80" y="430" width="200" height="110" rx="12" fill="rgba(239,68,68,0.2)"/>
    <text x="180" y="475" text-anchor="middle" fill="#fff" font-size="20">Rough sketch</text>
    <text x="180" y="500" text-anchor="middle" fill="#fff" font-size="20">in color</text>
    <text x="300" y="485" fill="#ef4444" font-size="30">→</text>

    <rect x="330" y="430" width="200" height="110" rx="12" fill="rgba(239,68,68,0.3)"/>
    <text x="430" y="475" text-anchor="middle" fill="#fff" font-size="20">Face wall</text>
    <text x="430" y="500" text-anchor="middle" fill="#fff" font-size="20">for months</text>
    <text x="550" y="485" fill="#ef4444" font-size="30">→</text>

    <rect x="580" y="430" width="200" height="110" rx="12" fill="rgba(239,68,68,0.4)"/>
    <text x="680" y="475" text-anchor="middle" fill="#fff" font-size="20">Layer upon</text>
    <text x="680" y="500" text-anchor="middle" fill="#fff" font-size="20">layer (glazes)</text>
    <text x="800" y="485" fill="#ef4444" font-size="30">→</text>

    <rect x="830" y="430" width="180" height="110" rx="12" fill="#ef4444"/>
    <text x="920" y="490" text-anchor="middle" fill="#fff" font-size="30">✓</text>

    <!-- Bottom bar -->
    <rect x="200" y="600" width="700" height="60" rx="30" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
    <text x="550" y="640" text-anchor="middle" fill="#ef4444" font-size="20">Built forms entirely through COLOR, not drawing</text>
</svg>`,
                                caption: "Titian's career spanned seven decades of artistic innovation"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What made Titian's working method unusual?",
                            options: [
                                { text: "He painted everything in one session", correct: false },
                                { text: "He turned canvases to the wall for months, then reworked them", correct: true },
                                { text: "He only painted outdoors", correct: false },
                                { text: "He never used brushes", correct: false }
                            ],
                            explanation: "Titian would leave paintings facing the wall for months, then return to view them 'as if they were mortal enemies' to spot weaknesses. This allowed him to see his work with fresh eyes and make corrections. He built up paintings through many layers of glazes over years, achieving depth of color impossible with faster techniques."
                        },

                        // ========== TITIAN'S REVOLUTIONARY TECHNIQUES ==========
                        {
                            type: "concept",
                            title: "Titian's 3 Revolutionary Techniques",
                            content: "Titian developed techniques that influenced painting for the next 400 years:\n\n**1. BROKEN COLOR**\nInstead of mixing colors on the palette, Titian placed separate strokes of different colors side by side. From a distance, they blend OPTICALLY in the viewer's eye. This creates more vibrant, luminous color than physical mixing.\n→ This technique directly influenced the Impressionists 300 years later!\n\n**2. IMPASTO**\nThick, built-up paint application that creates actual physical texture. Titian used impasto for highlights—jewels, armor, skin catching light—making them leap off the canvas.\n\n**3. THE 'LATE STYLE'**\nIn his 80s, Titian developed an incredibly loose, expressive style. Brushstrokes become visible, almost abstract. Forms dissolve into pure energy of color. Contemporaries thought his eyesight was failing—but this was deliberate artistic choice.\n\n**Palma Giovane (who finished some late Titians) said:** 'He painted more with his fingers than with brushes.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">TITIAN'S 3 REVOLUTIONARY TECHNIQUES</text>

    <!-- 3 columns -->
    <!-- Technique 1 -->
    <rect x="40" y="90" width="330" height="360" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="205" y="130" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">1. BROKEN COLOR</text>

    <!-- Color strokes -->
    <rect x="120" y="160" width="20" height="80" fill="#ef4444" transform="rotate(-10 130 200)"/>
    <rect x="150" y="160" width="20" height="80" fill="#f59e0b" transform="rotate(5 160 200)"/>
    <rect x="180" y="160" width="20" height="80" fill="#ef4444" transform="rotate(-5 190 200)"/>
    <rect x="210" y="160" width="20" height="80" fill="#fcd34d" transform="rotate(8 220 200)"/>
    <rect x="240" y="160" width="20" height="80" fill="#ef4444" transform="rotate(-3 250 200)"/>

    <text x="205" y="280" text-anchor="middle" fill="#fff" font-size="20">Separate strokes</text>
    <text x="205" y="305" text-anchor="middle" fill="#fff" font-size="20">blend in viewer's</text>
    <text x="205" y="330" text-anchor="middle" fill="#fff" font-size="20">EYE</text>

    <rect x="80" y="360" width="250" height="50" rx="15" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
    <text x="205" y="395" text-anchor="middle" fill="#ec4899" font-size="18">→ Inspired Impressionism!</text>

    <!-- Technique 2 -->
    <rect x="385" y="90" width="330" height="360" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <text x="550" y="130" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">2. IMPASTO</text>

    <!-- Thick paint blob -->
    <ellipse cx="550" cy="210" rx="100" ry="50" fill="#f59e0b" stroke="#dc8a0a" stroke-width="6"/>
    <ellipse cx="530" cy="195" rx="50" ry="25" fill="#fcd34d"/>
    <ellipse cx="510" cy="180" rx="25" ry="12" fill="#fef3c7"/>

    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="20">THICK paint</text>
    <text x="550" y="325" text-anchor="middle" fill="#fff" font-size="20">creates real</text>
    <text x="550" y="350" text-anchor="middle" fill="#fff" font-size="20">TEXTURE</text>
    <text x="550" y="395" text-anchor="middle" fill="#888" font-size="18">For jewels, armor, skin</text>

    <!-- Technique 3 -->
    <rect x="730" y="90" width="330" height="360" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="895" y="130" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">3. LATE STYLE</text>

    <!-- Abstract strokes -->
    <path d="M 840 170 Q 880 150 920 180 Q 960 210 940 260" stroke="#8b5cf6" stroke-width="8" fill="none"/>
    <path d="M 850 200 Q 890 240 870 290" stroke="#a78bfa" stroke-width="6" fill="none"/>
    <path d="M 900 160 Q 950 200 930 260" stroke="#c4b5fd" stroke-width="5" fill="none"/>

    <text x="895" y="310" text-anchor="middle" fill="#fff" font-size="20">In his 80s:</text>
    <text x="895" y="335" text-anchor="middle" fill="#fff" font-size="20">FREE, loose,</text>
    <text x="895" y="360" text-anchor="middle" fill="#fff" font-size="20">almost ABSTRACT</text>
    <text x="895" y="405" text-anchor="middle" fill="#888" font-size="18">"Painted with fingers"</text>

    <!-- Quote -->
    <rect x="80" y="480" width="940" height="120" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="525" text-anchor="middle" fill="#fff" font-style="italic" font-size="20">"The final touches he softened, occasionally modulating</text>
    <text x="550" y="555" text-anchor="middle" fill="#fff" font-style="italic" font-size="20">the highest lights into the half-tones with his fingers."</text>
    <text x="550" y="585" text-anchor="middle" fill="#888" font-size="18">— Palma Giovane, Titian's assistant</text>

    <!-- Bottom note -->
    <rect x="300" y="620" width="500" height="50" rx="25" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
    <text x="550" y="655" text-anchor="middle" fill="#ef4444" font-size="18">Vasari said "Titian paints with flesh and blood"</text>
</svg>`,
                                caption: "Vasari said 'Titian paints with flesh and blood'"
                            }
                        },

                        // ========== TINTORETTO & VERONESE ==========
                        {
                            type: "concept",
                            title: "The Next Generation: Tintoretto & Veronese",
                            content: "After Titian came two masters who pushed Venetian painting in dramatic new directions:\n\n**TINTORETTO (1518-1594)**\n'Il Furioso' - The Furious One\n• Combined Titian's color with Michelangelo's drawing\n• Famous motto: 'The drawing of Michelangelo and the color of Titian'\n• Worked at incredible speed—completed HUGE paintings in days\n• Dramatic, almost violent compositions\n• Radical use of light (influenced Baroque art)\n• Masterpiece: Last Supper (1592-94)—45 feet of swirling energy\n\n**VERONESE (1528-1588)**\n'The Magnificent Decorator'\n• Master of SPECTACLE and luxury\n• Enormous feast scenes with gorgeous costumes\n• Architectural settings creating vast spaces\n• Brilliant, clear colors (silver, pink, gold)\n• Got in trouble with the Inquisition for putting dogs and dwarfs in religious paintings!\n• Masterpiece: Wedding at Cana (1563)—largest painting in the Louvre\n\nTogether with Titian, they formed the 'Venetian Trinity' of High Renaissance painting.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">THE VENETIAN TRINITY</text>

    <!-- Three masters -->
    <!-- Titian -->
    <rect x="40" y="90" width="330" height="300" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="205" y="130" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">TITIAN</text>
    <text x="205" y="160" text-anchor="middle" fill="#888" font-size="20">c. 1488-1576</text>
    <text x="205" y="200" text-anchor="middle" fill="#fff" font-size="22">The Master</text>
    <text x="205" y="230" text-anchor="middle" fill="#fff" font-size="22">COLOR itself</text>
    <text x="205" y="260" text-anchor="middle" fill="#fff" font-size="22">as foundation</text>
    <rect x="80" y="290" width="250" height="50" rx="15" fill="rgba(239,68,68,0.2)"/>
    <text x="205" y="325" text-anchor="middle" fill="#ef4444" font-size="20">Sensuous beauty</text>

    <!-- Tintoretto -->
    <rect x="385" y="90" width="330" height="300" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="550" y="130" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">TINTORETTO</text>
    <text x="550" y="160" text-anchor="middle" fill="#888" font-size="20">1518-1594</text>
    <text x="550" y="200" text-anchor="middle" fill="#fff" font-size="22">"Il Furioso"</text>
    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="22">DRAMA +</text>
    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="22">movement</text>
    <rect x="425" y="290" width="250" height="50" rx="15" fill="rgba(139,92,246,0.2)"/>
    <text x="550" y="325" text-anchor="middle" fill="#8b5cf6" font-size="20">Speed &amp; energy</text>

    <!-- Veronese -->
    <rect x="730" y="90" width="330" height="300" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
    <text x="895" y="130" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">VERONESE</text>
    <text x="895" y="160" text-anchor="middle" fill="#888" font-size="20">1528-1588</text>
    <text x="895" y="200" text-anchor="middle" fill="#fff" font-size="22">Magnificent</text>
    <text x="895" y="230" text-anchor="middle" fill="#fff" font-size="22">SPECTACLE</text>
    <text x="895" y="260" text-anchor="middle" fill="#fff" font-size="22">&amp; luxury</text>
    <rect x="770" y="290" width="250" height="50" rx="15" fill="rgba(16,185,129,0.2)"/>
    <text x="895" y="325" text-anchor="middle" fill="#10b981" font-size="20">Gorgeous feasts</text>

    <!-- Key works -->
    <rect x="40" y="410" width="1020" height="130" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="550" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">KEY WORKS</text>
    <text x="205" y="495" text-anchor="middle" fill="#fff" font-size="18">Sacred &amp; Profane Love</text>
    <text x="205" y="520" text-anchor="middle" fill="#888" font-size="16">Titian</text>
    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="18">Last Supper (1592-94)</text>
    <text x="550" y="520" text-anchor="middle" fill="#888" font-size="16">Tintoretto - 45ft of energy!</text>
    <text x="895" y="495" text-anchor="middle" fill="#fff" font-size="18">Wedding at Cana</text>
    <text x="895" y="520" text-anchor="middle" fill="#888" font-size="16">Veronese - largest in Louvre</text>

    <!-- Fun fact -->
    <rect x="200" y="560" width="700" height="90" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
    <text x="550" y="600" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">FUN FACT</text>
    <text x="550" y="630" text-anchor="middle" fill="#fff" font-size="18">Veronese got in trouble with the Inquisition for putting dogs &amp; dwarfs in religious paintings!</text>
</svg>`,
                                caption: "Together they defined the High Renaissance in Venice"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why did Veronese get in trouble with the Inquisition?",
                            options: [
                                { text: "He painted heretical religious content", correct: false },
                                { text: "He included dogs, dwarfs, and other 'irreverent' details in religious paintings", correct: true },
                                { text: "He refused to paint for the Church", correct: false },
                                { text: "He painted pagan gods", correct: false }
                            ],
                            explanation: "Veronese's massive 'Last Supper' included German soldiers, a servant with a nosebleed, dogs, dwarfs, and a parrot! The Inquisition called him in for questioning about these 'irreverent' additions to a sacred scene. Veronese's clever solution? He simply renamed the painting 'Feast in the House of Levi'—a less sacred subject where such details were acceptable."
                        },

                        // ========== MEMORY TOOL ==========
                        {
                            type: "concept",
                            title: "Memory Tool: GLOW",
                            content: "Remember the 4 key aspects of Venetian Renaissance painting with GLOW:\n\n**G - GIORGIONE's Mystery**\nThe pioneer who created mood paintings without clear narratives. Died young but changed art forever with 'The Tempest.'\n\n**L - LIGHT & Atmosphere**\nVenice's reflected light from water created unique atmospheric effects. Venetians mastered depicting air, mist, and glowing light.\n\n**O - OIL on Canvas**\nVenice pioneered oil painting on canvas (not fresco or wood panels). This technique spread throughout Europe and is still standard today.\n\n**W - WARM Color Primacy**\nColorito over disegno—Venetians built forms through rich, warm colors rather than outlines. Titian's reds became legendary.\n\n**Say it:** 'Venetian paintings GLOW because of Giorgione's mystery, Light effects, Oil on canvas, and Warm color primacy.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="44">G L O W</text>
    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="22">Remember Venetian Renaissance in 4 letters</text>

    <!-- 4 boxes -->
    <rect x="40" y="120" width="245" height="300" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
    <text x="162" y="175" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="52">G</text>
    <text x="162" y="215" text-anchor="middle" fill="#3b82f6" font-size="22">GIORGIONE</text>
    <text x="162" y="255" text-anchor="middle" fill="#fff" font-size="20">Mystery &amp;</text>
    <text x="162" y="280" text-anchor="middle" fill="#fff" font-size="20">Mood</text>
    <text x="162" y="330" text-anchor="middle" fill="#ccc" font-size="18">The Tempest</text>
    <text x="162" y="355" text-anchor="middle" fill="#ccc" font-size="18">No story needed</text>

    <rect x="305" y="120" width="245" height="300" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
    <text x="427" y="175" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="52">L</text>
    <text x="427" y="215" text-anchor="middle" fill="#f59e0b" font-size="22">LIGHT</text>
    <text x="427" y="255" text-anchor="middle" fill="#fff" font-size="20">Atmosphere</text>
    <text x="427" y="280" text-anchor="middle" fill="#fff" font-size="20">&amp; Glow</text>
    <text x="427" y="330" text-anchor="middle" fill="#ccc" font-size="18">Water reflects</text>
    <text x="427" y="355" text-anchor="middle" fill="#ccc" font-size="18">Misty air</text>

    <rect x="570" y="120" width="245" height="300" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="692" y="175" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="52">O</text>
    <text x="692" y="215" text-anchor="middle" fill="#10b981" font-size="22">OIL/CANVAS</text>
    <text x="692" y="255" text-anchor="middle" fill="#fff" font-size="20">Innovation</text>
    <text x="692" y="280" text-anchor="middle" fill="#fff" font-size="20">for humidity</text>
    <text x="692" y="330" text-anchor="middle" fill="#ccc" font-size="18">Not fresco</text>
    <text x="692" y="355" text-anchor="middle" fill="#ccc" font-size="18">Still used today!</text>

    <rect x="835" y="120" width="225" height="300" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
    <text x="947" y="175" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="52">W</text>
    <text x="947" y="215" text-anchor="middle" fill="#ef4444" font-size="22">WARM</text>
    <text x="947" y="255" text-anchor="middle" fill="#fff" font-size="20">Color</text>
    <text x="947" y="280" text-anchor="middle" fill="#fff" font-size="20">First</text>
    <text x="947" y="330" text-anchor="middle" fill="#ccc" font-size="18">Colorito &gt;</text>
    <text x="947" y="355" text-anchor="middle" fill="#ccc" font-size="18">Disegno</text>

    <!-- Explanation -->
    <rect x="80" y="440" width="940" height="100" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
    <text x="550" y="485" text-anchor="middle" fill="#fff" font-size="22">"Venetian paintings GLOW because of</text>
    <text x="550" y="515" text-anchor="middle" fill="#fff" font-size="22">Giorgione, Light, Oil on canvas, &amp; Warm color primacy"</text>

    <!-- Legacy -->
    <rect x="80" y="560" width="940" height="80" rx="15" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
    <text x="550" y="600" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">VENETIAN LEGACY</text>
    <text x="550" y="625" text-anchor="middle" fill="#ccc" font-size="18">Rubens → Rembrandt → Delacroix → Impressionists → Today</text>
</svg>`,
                                caption: "GLOW: The key to remembering Venetian painting"
                            }
                        },

                        // ========== CONVERSATION STARTERS ==========
                        {
                            type: "concept",
                            title: "Conversation Starters: Sound Like an Expert",
                            content: "Use these insights to discuss Venetian Renaissance art intelligently:\n\n**At a Museum (in front of a Titian):**\n'Notice how there are no hard outlines—Titian builds the form entirely through color. He'd work on paintings for years, layering glazes until the flesh seems to glow from within.'\n\n**Discussing Art History:**\n'The Florence vs Venice debate was really about philosophy: is art an intellectual exercise or a sensory experience? The Venetians chose feeling over thinking—and invented techniques that influenced everyone from Rubens to Monet.'\n\n**About Technique:**\n'Venice's humidity forced them to paint on canvas instead of walls—which accidentally created the standard medium for Western painting. And their water-reflected light made them masters of atmosphere.'\n\n**Casual Art Talk:**\n'You know how some paintings just seem to glow? That's a Venetian innovation. They discovered that layering transparent glazes creates depth and luminosity that direct color application can't achieve.'\n\n**Fun Fact:**\n'Titian was so dominant that he painted every important person in Europe—emperors, kings, popes. Charles V made him a Count, which was unheard of for an artist at the time.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">CONVERSATION STARTERS</text>
    <text x="550" y="75" text-anchor="middle" fill="#888" font-size="20">Sound Like an Expert on Venetian Art</text>

    <!-- 2x2 grid -->
    <rect x="40" y="100" width="500" height="140" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="290" y="140" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">AT A MUSEUM</text>
    <text x="290" y="175" text-anchor="middle" fill="#fff" font-size="20">"Notice how there are no hard outlines—</text>
    <text x="290" y="200" text-anchor="middle" fill="#888" font-size="18">Titian builds with color"</text>

    <rect x="560" y="100" width="500" height="140" rx="15" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
    <text x="810" y="140" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">ABOUT TECHNIQUE</text>
    <text x="810" y="175" text-anchor="middle" fill="#fff" font-size="20">"Venice's humidity created oil on canvas—</text>
    <text x="810" y="200" text-anchor="middle" fill="#888" font-size="18">the standard we still use today"</text>

    <rect x="40" y="260" width="500" height="140" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="290" y="300" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">ABOUT PHILOSOPHY</text>
    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="20">"Florence vs Venice was intellect vs emotion—</text>
    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="18">Venice chose feeling"</text>

    <rect x="560" y="260" width="500" height="140" rx="15" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
    <text x="810" y="300" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">FUN FACT</text>
    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="20">"Emperor Charles V made Titian a Count—</text>
    <text x="810" y="360" text-anchor="middle" fill="#888" font-size="18">unheard of for artists!"</text>

    <!-- Key insight -->
    <rect x="40" y="420" width="1020" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
    <text x="550" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">KEY INSIGHT TO SHARE</text>
    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="22">"Paintings that GLOW use Venetian techniques—</text>
    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="20">transparent glazes creating depth no direct mixing can achieve"</text>

    <!-- Bottom bar -->
    <rect x="200" y="570" width="700" height="70" rx="35" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="615" text-anchor="middle" fill="#10b981" font-size="22">Sound knowledgeable when discussing Venetian art</text>
</svg>`,
                                caption: "Sound knowledgeable when discussing Venetian art"
                            }
                        },

                        // ========== LESSON SUMMARY ==========
                        {
                            type: "concept",
                            title: "Lesson 7 Summary: Venetian Renaissance",
                            content: "**THE BIG PICTURE:**\nWhile Florence emphasized drawing (disegno), Venice developed COLORITO—using color itself as the foundation of painting. This wasn't just preference; Venice's humid climate made fresco impractical, forcing artists to pioneer oil on canvas.\n\n**KEY ARTISTS:**\n• GIORGIONE (c. 1477-1510): The mysterious pioneer who invented 'mood painting'\n• TITIAN (c. 1488-1576): 60-year career, painted for emperors, revolutionized color technique\n• TINTORETTO (1518-1594): 'Il Furioso'—combined color with dramatic movement\n• VERONESE (1528-1588): Master of spectacle and gorgeous luxury\n\n**LASTING INNOVATIONS:**\n1. Oil painting on canvas (still the standard!)\n2. Broken color (influenced Impressionism 300 years later)\n3. Impasto technique for highlights\n4. Atmospheric effects and glowing light\n\n**REMEMBER: GLOW**\nGiorgione's mystery, Light & atmosphere, Oil on canvas, Warm color primacy\n\n**THE LEGACY:**\nVenetian techniques spread through Rubens, Rembrandt, Delacroix, the Impressionists, and continue influencing painters today.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>

    <!-- Header -->
    <rect x="300" y="30" width="500" height="70" rx="35" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
    <text x="550" y="78" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">LESSON 7 COMPLETE!</text>

    <!-- Core concept -->
    <rect x="40" y="120" width="1020" height="80" rx="15" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
    <text x="550" y="155" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">CORE CONCEPT</text>
    <text x="550" y="185" text-anchor="middle" fill="#fff" font-size="20">COLORITO: Color as the foundation of painting (vs Florence's DISEGNO)</text>

    <!-- Artists grid -->
    <rect x="40" y="220" width="1020" height="110" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="550" y="255" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE MASTERS</text>
    <text x="175" y="295" text-anchor="middle" fill="#3b82f6" font-size="20">Giorgione</text>
    <text x="175" y="315" text-anchor="middle" fill="#888" font-size="16">Mystery</text>
    <text x="420" y="295" text-anchor="middle" fill="#ef4444" font-size="20">Titian</text>
    <text x="420" y="315" text-anchor="middle" fill="#888" font-size="16">Color</text>
    <text x="680" y="295" text-anchor="middle" fill="#8b5cf6" font-size="20">Tintoretto</text>
    <text x="680" y="315" text-anchor="middle" fill="#888" font-size="16">Drama</text>
    <text x="920" y="295" text-anchor="middle" fill="#10b981" font-size="20">Veronese</text>
    <text x="920" y="315" text-anchor="middle" fill="#888" font-size="16">Spectacle</text>

    <!-- Two columns -->
    <rect x="40" y="350" width="500" height="120" rx="15" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
    <text x="290" y="385" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">INNOVATIONS</text>
    <text x="290" y="420" text-anchor="middle" fill="#fff" font-size="18">Oil on canvas | Broken color</text>
    <text x="290" y="450" text-anchor="middle" fill="#fff" font-size="18">Impasto | Atmospheric effects</text>

    <rect x="560" y="350" width="500" height="120" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="810" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">REMEMBER: GLOW</text>
    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="18">Giorgione | Light</text>
    <text x="810" y="450" text-anchor="middle" fill="#fff" font-size="18">Oil on canvas | Warm color</text>

    <!-- Feynman badge -->
    <rect x="200" y="500" width="700" height="80" rx="40" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
    <text x="550" y="540" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">FEYNMAN TEST READY</text>
    <text x="550" y="565" text-anchor="middle" fill="#888" font-size="18">You can now explain Venetian painting to anyone!</text>

    <!-- Legacy -->
    <rect x="100" y="600" width="900" height="60" rx="30" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Legacy: Rubens → Rembrandt → Delacroix → Impressionists → Today</text>
</svg>`,
                                caption: "You've mastered Venetian Renaissance painting!"
                            }
                        }
                    ]
                },
                {
                    id: 8,
                    title: "Review: Master the Renaissance",
                    duration: 15,
                    completed: false,
                    cards: [
                        // ========== INTRODUCTION ==========
                        {
                            type: "intro",
                            title: "Congratulations! Final Review Time",
                            content: "You've completed all 7 lessons covering 300 years of revolutionary art history. Now let's consolidate everything you've learned and make sure you can confidently discuss Renaissance art with anyone.\n\nThis review will:\n• Test your knowledge with challenging quizzes\n• Refresh your memory tools\n• Connect the dots between movements\n• Prepare you for real-world art conversations\n\n**Your journey so far:**\n1. International Gothic (courtly elegance)\n2. Florence Renaissance (scientific revolution)\n3. Northern Renaissance (detail obsession)\n4. Global Exchange (art goes worldwide)\n5. High Renaissance (the giants)\n6. Mannerism (breaking the rules)\n7. Venetian Renaissance (color triumph)\n\nReady for your final test?",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="50" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="36">FINAL REVIEW</text>
    <text x="550" y="85" text-anchor="middle" fill="#888" font-size="22">300 Years of Art History Mastered</text>

    <!-- Progress circles - 7 lessons -->
    <circle cx="130" cy="180" r="45" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="4"/>
    <text x="130" y="190" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">1</text>
    <text x="130" y="240" text-anchor="middle" fill="#888" font-size="18">Gothic</text>

    <circle cx="270" cy="180" r="45" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="4"/>
    <text x="270" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">2</text>
    <text x="270" y="240" text-anchor="middle" fill="#888" font-size="18">Florence</text>

    <circle cx="410" cy="180" r="45" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="4"/>
    <text x="410" y="190" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="32">3</text>
    <text x="410" y="240" text-anchor="middle" fill="#888" font-size="18">Northern</text>

    <circle cx="550" cy="180" r="45" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="4"/>
    <text x="550" y="190" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="32">4</text>
    <text x="550" y="240" text-anchor="middle" fill="#888" font-size="18">Global</text>

    <circle cx="690" cy="180" r="45" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="4"/>
    <text x="690" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="32">5</text>
    <text x="690" y="240" text-anchor="middle" fill="#888" font-size="18">High Ren</text>

    <circle cx="830" cy="180" r="45" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="4"/>
    <text x="830" y="190" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">6</text>
    <text x="830" y="240" text-anchor="middle" fill="#888" font-size="18">Mannerism</text>

    <circle cx="970" cy="180" r="45" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="4"/>
    <text x="970" y="190" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">7</text>
    <text x="970" y="240" text-anchor="middle" fill="#888" font-size="18">Venice</text>

    <!-- What you'll review -->
    <rect x="40" y="290" width="1020" height="180" rx="15" fill="rgba(255,215,0,0.1)" stroke="#fcd34d"/>
    <text x="550" y="335" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="28">THIS REVIEW WILL:</text>
    <text x="270" y="380" text-anchor="middle" fill="#fff" font-size="20">Test your knowledge</text>
    <text x="550" y="380" text-anchor="middle" fill="#fff" font-size="20">Refresh memory tools</text>
    <text x="830" y="380" text-anchor="middle" fill="#fff" font-size="20">Connect movements</text>
    <text x="270" y="420" text-anchor="middle" fill="#888" font-size="18">Challenging quizzes</text>
    <text x="550" y="420" text-anchor="middle" fill="#888" font-size="18">All 7 mnemonics</text>
    <text x="830" y="420" text-anchor="middle" fill="#888" font-size="18">Big picture view</text>

    <!-- Timeline summary -->
    <rect x="40" y="490" width="1020" height="100" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="22">YOUR JOURNEY: 1375 → 1600</text>
    <text x="550" y="570" text-anchor="middle" fill="#888" font-size="20">Gothic | Florence | Northern | Global | High Ren | Mannerism | Venice</text>

    <!-- Ready bar -->
    <rect x="250" y="610" width="600" height="60" rx="30" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="650" text-anchor="middle" fill="#10b981" font-size="24">Ready for your final test?</text>
</svg>`,
                                caption: "You've covered 1375-1600: from Gothic elegance to Venetian color"
                            }
                        },

                        // ========== MASTER TIMELINE ==========
                        {
                            type: "concept",
                            title: "The Complete Renaissance Timeline",
                            content: "Here's how all 7 movements connect across 300 years:\n\n**1375-1425: INTERNATIONAL GOTHIC**\n→ Courtly elegance, decorative detail, Très Riches Heures\n→ Bridge from Medieval to Renaissance\n\n**1400-1500: EARLY RENAISSANCE (Florence)**\n→ Scientific approach: perspective, anatomy, proportion\n→ Brunelleschi, Masaccio, Donatello, Botticelli\n\n**1430-1580: NORTHERN RENAISSANCE**\n→ Oil painting mastery, microscopic detail, symbolism\n→ Van Eyck, Dürer, Bosch\n\n**1450-1600: GLOBAL EXCHANGE**\n→ Art travels worldwide via trade and colonization\n→ East-West fusion, new materials and subjects\n\n**1490-1527: HIGH RENAISSANCE**\n→ Peak of classical ideals, 3 giants dominate\n→ Leonardo, Michelangelo, Raphael\n\n**1520-1600: MANNERISM**\n→ Deliberate rule-breaking after Renaissance 'perfection'\n→ Elongation, weird colors, emotional tension\n\n**1500-1600: VENETIAN RENAISSANCE**\n→ Color over drawing, oil on canvas\n→ Giorgione, Titian, Tintoretto, Veronese",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="40" text-anchor="middle" fill="#fff" font-weight="bold" font-size="32">THE COMPLETE TIMELINE: 1375-1600</text>

    <!-- Timeline spine -->
    <line x1="120" y1="80" x2="120" y2="580" stroke="#666" stroke-width="4"/>

    <!-- International Gothic -->
    <circle cx="120" cy="100" r="10" fill="#f59e0b"/>
    <text x="145" y="95" fill="#f59e0b" font-weight="bold" font-size="20">1375</text>
    <rect x="180" y="80" width="320" height="45" rx="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
    <text x="340" y="110" text-anchor="middle" fill="#fff" font-size="18">International Gothic</text>
    <text x="530" y="110" fill="#888" font-size="16">ELEGANCE</text>

    <!-- Florence -->
    <circle cx="120" cy="175" r="10" fill="#10b981"/>
    <text x="145" y="170" fill="#10b981" font-weight="bold" font-size="20">1400</text>
    <rect x="180" y="155" width="320" height="45" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="340" y="185" text-anchor="middle" fill="#fff" font-size="18">Florence Renaissance</text>
    <text x="530" y="185" fill="#888" font-size="16">BMDA</text>

    <!-- Northern -->
    <circle cx="120" cy="250" r="10" fill="#3b82f6"/>
    <text x="145" y="245" fill="#3b82f6" font-weight="bold" font-size="20">1430</text>
    <rect x="180" y="230" width="320" height="45" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
    <text x="340" y="260" text-anchor="middle" fill="#fff" font-size="18">Northern Renaissance</text>
    <text x="530" y="260" fill="#888" font-size="16">GOLD</text>

    <!-- Global -->
    <circle cx="120" cy="325" r="10" fill="#ec4899"/>
    <text x="145" y="320" fill="#ec4899" font-weight="bold" font-size="20">1450</text>
    <rect x="180" y="305" width="320" height="45" rx="12" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
    <text x="340" y="335" text-anchor="middle" fill="#fff" font-size="18">Global Exchange</text>
    <text x="530" y="335" fill="#888" font-size="16">MIBA</text>

    <!-- High Renaissance -->
    <circle cx="120" cy="400" r="10" fill="#6366f1"/>
    <text x="145" y="395" fill="#6366f1" font-weight="bold" font-size="20">1490</text>
    <rect x="180" y="380" width="320" height="45" rx="12" fill="rgba(99,102,241,0.2)" stroke="#6366f1"/>
    <text x="340" y="410" text-anchor="middle" fill="#fff" font-size="18">High Renaissance</text>
    <text x="530" y="410" fill="#888" font-size="16">LMR</text>

    <!-- Mannerism -->
    <circle cx="120" cy="475" r="10" fill="#8b5cf6"/>
    <text x="145" y="470" fill="#8b5cf6" font-weight="bold" font-size="20">1520</text>
    <rect x="180" y="455" width="320" height="45" rx="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
    <text x="340" y="485" text-anchor="middle" fill="#fff" font-size="18">Mannerism</text>
    <text x="530" y="485" fill="#888" font-size="16">SEALS</text>

    <!-- Venetian -->
    <circle cx="120" cy="550" r="10" fill="#ef4444"/>
    <text x="145" y="545" fill="#ef4444" font-weight="bold" font-size="20">1500</text>
    <rect x="180" y="530" width="320" height="45" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
    <text x="340" y="560" text-anchor="middle" fill="#fff" font-size="18">Venetian Renaissance</text>
    <text x="530" y="560" fill="#888" font-size="16">GLOW</text>

    <!-- End -->
    <text x="145" y="610" fill="#fff" font-weight="bold" font-size="18">1600 → Baroque begins</text>

    <!-- Key box -->
    <rect x="620" y="80" width="440" height="280" rx="15" fill="rgba(255,255,255,0.05)"/>
    <text x="840" y="120" text-anchor="middle" fill="#fff" font-weight="bold" font-size="22">MNEMONICS:</text>
    <text x="660" y="160" fill="#f59e0b" font-size="18">ELEGANCE - Courtly refinement</text>
    <text x="660" y="190" fill="#10b981" font-size="18">BMDA - 4 Florence pioneers</text>
    <text x="660" y="220" fill="#3b82f6" font-size="18">GOLD - Oil &amp; symbolism</text>
    <text x="660" y="250" fill="#ec4899" font-size="18">MIBA - Global trade</text>
    <text x="660" y="280" fill="#6366f1" font-size="18">LMR - The 3 giants</text>
    <text x="660" y="310" fill="#8b5cf6" font-size="18">SEALS - Rule-breaking</text>
    <text x="660" y="340" fill="#ef4444" font-size="18">GLOW - Color primacy</text>

    <!-- Bottom note -->
    <rect x="620" y="380" width="440" height="80" rx="15" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
    <text x="840" y="430" text-anchor="middle" fill="#10b981" font-size="20">300 years of artistic revolution</text>
</svg>`,
                                caption: "300 years of artistic revolution at a glance"
                            }
                        },

                        // ========== QUIZ 1: MOVEMENTS ==========
                        {
                            type: "quiz",
                            question: "Which movement was characterized by 'colorito' (color over drawing)?",
                            options: [
                                { text: "Florentine Renaissance", correct: false },
                                { text: "Mannerism", correct: false },
                                { text: "Venetian Renaissance", correct: true },
                                { text: "Northern Renaissance", correct: false }
                            ],
                            explanation: "Venetian Renaissance painters championed COLORITO—using color as the foundation of painting rather than drawing (disegno). While Florence emphasized precise outlines, Venice built forms through layers of color. This was partly practical (humidity made fresco impossible) and partly philosophical (appealing to emotion over intellect)."
                        },

                        // ========== MEMORY TOOLS RECAP ==========
                        {
                            type: "concept",
                            title: "Your Memory Toolkit: All 7 Mnemonics",
                            content: "Let's review all your memory tools in one place:\n\n**Lesson 1 - ELEGANCE** (International Gothic)\nElongated figures, Luxurious materials, Elaborate detail, Gold everywhere, Aristocratic patrons, Natural world emerging, Courtly love themes, European unity\n\n**Lesson 2 - BMDA** (Florence)\nBrunelleschi (perspective), Masaccio (realism), Donatello (sculpture), Alberti (theory)\n\n**Lesson 3 - GOLD** (Northern Renaissance)\nGlazing technique, Oil painting, Layered symbolism, Detail obsession\n\n**Lesson 4 - MIBA** (Global Exchange)\nMaterials moved, Ideas exchanged, Both directions flow, Art adapts\n\n**Lesson 5 - LMR** (High Renaissance)\nLeonardo (sfumato), Michelangelo (terribilità), Raphael (grazia)\n\n**Lesson 6 - SEALS** (Mannerism)\nSerpentinata, Elongation, Acid colors, Limbo space, Self-conscious style\n\n**Lesson 7 - GLOW** (Venetian)\nGiorgione, Light/atmosphere, Oil on canvas, Warm color primacy",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="34">YOUR MEMORY TOOLKIT</text>

    <!-- Row 1: 4 boxes -->
    <rect x="40" y="80" width="245" height="150" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <text x="162" y="120" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">ELEGANCE</text>
    <text x="162" y="155" text-anchor="middle" fill="#fff" font-size="20">Int'l Gothic</text>
    <text x="162" y="185" text-anchor="middle" fill="#888" font-size="16">Courtly refinement</text>
    <text x="162" y="210" text-anchor="middle" fill="#888" font-size="16">Gold &amp; decoration</text>

    <rect x="305" y="80" width="245" height="150" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
    <text x="427" y="120" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">BMDA</text>
    <text x="427" y="155" text-anchor="middle" fill="#fff" font-size="20">Florence</text>
    <text x="427" y="185" text-anchor="middle" fill="#888" font-size="16">4 pioneers</text>
    <text x="427" y="210" text-anchor="middle" fill="#888" font-size="16">Science of art</text>

    <rect x="570" y="80" width="245" height="150" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <text x="692" y="120" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">GOLD</text>
    <text x="692" y="155" text-anchor="middle" fill="#fff" font-size="20">Northern</text>
    <text x="692" y="185" text-anchor="middle" fill="#888" font-size="16">Oil &amp; detail</text>
    <text x="692" y="210" text-anchor="middle" fill="#888" font-size="16">Hidden symbols</text>

    <rect x="835" y="80" width="225" height="150" rx="15" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
    <text x="947" y="120" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="28">MIBA</text>
    <text x="947" y="155" text-anchor="middle" fill="#fff" font-size="20">Global</text>
    <text x="947" y="185" text-anchor="middle" fill="#888" font-size="16">World trade</text>
    <text x="947" y="210" text-anchor="middle" fill="#888" font-size="16">Art exchanges</text>

    <!-- Row 2: 3 boxes -->
    <rect x="150" y="250" width="245" height="150" rx="15" fill="rgba(99,102,241,0.15)" stroke="#6366f1"/>
    <text x="272" y="290" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="28">LMR</text>
    <text x="272" y="325" text-anchor="middle" fill="#fff" font-size="20">High Renaissance</text>
    <text x="272" y="355" text-anchor="middle" fill="#888" font-size="16">3 giants</text>
    <text x="272" y="380" text-anchor="middle" fill="#888" font-size="16">Peak of ideals</text>

    <rect x="420" y="250" width="245" height="150" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="542" y="290" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">SEALS</text>
    <text x="542" y="325" text-anchor="middle" fill="#fff" font-size="20">Mannerism</text>
    <text x="542" y="355" text-anchor="middle" fill="#888" font-size="16">Rule-breaking</text>
    <text x="542" y="380" text-anchor="middle" fill="#888" font-size="16">Strange beauty</text>

    <rect x="690" y="250" width="245" height="150" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="812" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">GLOW</text>
    <text x="812" y="325" text-anchor="middle" fill="#fff" font-size="20">Venetian</text>
    <text x="812" y="355" text-anchor="middle" fill="#888" font-size="16">Color primacy</text>
    <text x="812" y="380" text-anchor="middle" fill="#888" font-size="16">Atmospheric</text>

    <!-- Test yourself -->
    <rect x="100" y="430" width="900" height="160" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="475" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">TEST YOURSELF</text>
    <text x="550" y="515" text-anchor="middle" fill="#888" font-size="22">Can you recall what each letter stands for?</text>
    <text x="550" y="550" text-anchor="middle" fill="#888" font-size="20">ELEGANCE | BMDA | GOLD | MIBA | LMR | SEALS | GLOW</text>

    <!-- Success message -->
    <rect x="200" y="610" width="700" height="60" rx="30" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="650" text-anchor="middle" fill="#10b981" font-size="22">If yes, you've mastered 300 years of art history!</text>
</svg>`,
                                caption: "7 mnemonics = 300 years of art history remembered"
                            }
                        },

                        // ========== QUIZ 2: TECHNIQUES ==========
                        {
                            type: "quiz",
                            question: "Match the technique to the artist: Who perfected 'sfumato' (smoky blending)?",
                            options: [
                                { text: "Michelangelo", correct: false },
                                { text: "Leonardo da Vinci", correct: true },
                                { text: "Titian", correct: false },
                                { text: "Jan van Eyck", correct: false }
                            ],
                            explanation: "Leonardo da Vinci perfected SFUMATO, the technique of creating soft, smoky transitions between tones. Look at the Mona Lisa's famous smile—there are no hard edges, just subtle gradations that seem to shift as you look. This 'haziness' gave Leonardo's work its mysterious, atmospheric quality."
                        },

                        // ========== KEY ARTISTS RECAP ==========
                        {
                            type: "concept",
                            title: "The Artists You Should Know",
                            content: "Here are the essential artists from each movement:\n\n**INTERNATIONAL GOTHIC:**\n• Limbourg Brothers (Très Riches Heures)\n• Gentile da Fabriano\n\n**FLORENCE RENAISSANCE:**\n• Brunelleschi (architect, perspective)\n• Masaccio (realistic painting)\n• Donatello (sculpture)\n• Botticelli (mythological themes)\n\n**NORTHERN RENAISSANCE:**\n• Jan van Eyck (oil painting master)\n• Albrecht Dürer (printmaking, self-portraits)\n• Hieronymus Bosch (surreal visions)\n\n**HIGH RENAISSANCE:**\n• Leonardo da Vinci (sfumato, universality)\n• Michelangelo (terribilità, Sistine Ceiling)\n• Raphael (grazia, School of Athens)\n\n**MANNERISM:**\n• Pontormo (weird colors, emotion)\n• Parmigianino (elongation)\n• El Greco (spiritual intensity)\n\n**VENETIAN:**\n• Giorgione (mood painting)\n• Titian (color master, 60-year career)\n• Tintoretto (drama + speed)\n• Veronese (spectacle + luxury)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="40" text-anchor="middle" fill="#fff" font-weight="bold" font-size="32">THE ESSENTIAL ARTISTS</text>

    <!-- Column 1: Early Period -->
    <rect x="40" y="70" width="330" height="280" rx="15" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
    <text x="205" y="105" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">EARLY PERIOD</text>
    <text x="60" y="140" fill="#fff" font-size="18">Gothic:</text>
    <text x="60" y="165" fill="#888" font-size="16">• Limbourg Bros</text>
    <text x="60" y="200" fill="#fff" font-size="18">Florence:</text>
    <text x="60" y="225" fill="#888" font-size="16">• Brunelleschi</text>
    <text x="60" y="250" fill="#888" font-size="16">• Masaccio</text>
    <text x="60" y="275" fill="#888" font-size="16">• Donatello</text>
    <text x="60" y="300" fill="#888" font-size="16">• Botticelli</text>

    <!-- Column 2: Northern -->
    <rect x="385" y="70" width="330" height="280" rx="15" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
    <text x="550" y="105" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">NORTHERN</text>
    <text x="405" y="140" fill="#fff" font-size="18">Oil Masters:</text>
    <text x="405" y="165" fill="#888" font-size="16">• Jan van Eyck</text>
    <text x="405" y="200" fill="#fff" font-size="18">German:</text>
    <text x="405" y="225" fill="#888" font-size="16">• Albrecht Dürer</text>
    <text x="405" y="260" fill="#fff" font-size="18">Flemish:</text>
    <text x="405" y="285" fill="#888" font-size="16">• Bosch</text>
    <text x="405" y="310" fill="#888" font-size="16">• Bruegel</text>

    <!-- Column 3: High Renaissance -->
    <rect x="730" y="70" width="330" height="280" rx="15" fill="rgba(99,102,241,0.1)" stroke="#6366f1"/>
    <text x="895" y="105" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">HIGH RENAISSANCE</text>
    <text x="750" y="140" fill="#fff" font-size="18">The 3 Giants:</text>
    <text x="750" y="175" fill="#888" font-size="16">• Leonardo (sfumato)</text>
    <text x="750" y="210" fill="#888" font-size="16">• Michelangelo (terribilità)</text>
    <text x="750" y="245" fill="#888" font-size="16">• Raphael (grazia)</text>

    <!-- Bottom row: Mannerism and Venetian -->
    <rect x="40" y="370" width="500" height="250" rx="15" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
    <text x="290" y="405" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">MANNERISM</text>
    <text x="60" y="445" fill="#fff" font-size="18">Italian:</text>
    <text x="60" y="470" fill="#888" font-size="16">• Pontormo (emotion)</text>
    <text x="60" y="495" fill="#888" font-size="16">• Parmigianino (elegance)</text>
    <text x="60" y="530" fill="#fff" font-size="18">Spanish:</text>
    <text x="60" y="555" fill="#888" font-size="16">• El Greco (spiritual fire)</text>
    <text x="60" y="590" fill="#888" font-size="16">• Arcimboldo (composite)</text>

    <rect x="560" y="370" width="500" height="250" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="810" y="405" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">VENETIAN</text>
    <text x="580" y="445" fill="#fff" font-size="18">Pioneers:</text>
    <text x="580" y="470" fill="#888" font-size="16">• Bellini (light)</text>
    <text x="580" y="495" fill="#888" font-size="16">• Giorgione (mood)</text>
    <text x="580" y="530" fill="#fff" font-size="18">Masters:</text>
    <text x="580" y="555" fill="#888" font-size="16">• Titian (color king)</text>
    <text x="580" y="580" fill="#888" font-size="16">• Tintoretto (drama)</text>
    <text x="580" y="605" fill="#888" font-size="16">• Veronese (spectacle)</text>

    <!-- Bottom note -->
    <rect x="300" y="640" width="500" height="40" rx="20" fill="rgba(255,255,255,0.05)"/>
    <text x="550" y="668" text-anchor="middle" fill="#888" font-size="18">20+ artists spanning 300 years of innovation</text>
</svg>`,
                                caption: "20+ artists spanning 300 years of innovation"
                            }
                        },

                        // ========== QUIZ 3: HISTORICAL CONTEXT ==========
                        {
                            type: "quiz",
                            question: "What event in 1527 traumatized Rome and helped trigger Mannerism?",
                            options: [
                                { text: "The Black Death", correct: false },
                                { text: "The Sack of Rome", correct: true },
                                { text: "The Protestant Reformation", correct: false },
                                { text: "The fall of Constantinople", correct: false }
                            ],
                            explanation: "The SACK OF ROME in 1527 was devastating—Imperial troops looted the city for months, killing thousands including many artists. This trauma shattered the Renaissance optimism that humans could perfect themselves. Mannerism emerged from this crisis, expressing anxiety and uncertainty through distorted figures, strange colors, and unsettling compositions."
                        },

                        // ========== QUIZ 4: GEOGRAPHY ==========
                        {
                            type: "quiz",
                            question: "Why did Venice develop oil painting on canvas instead of fresco?",
                            options: [
                                { text: "Canvas was cheaper in Venice", correct: false },
                                { text: "Venetian artists were better at canvas", correct: false },
                                { text: "The humid climate made fresco impractical", correct: true },
                                { text: "The Church preferred canvas paintings", correct: false }
                            ],
                            explanation: "Venice is built on water in a lagoon—extremely humid conditions where fresco (painting on wet plaster) would quickly deteriorate and grow mold. This FORCED Venetian artists to pioneer oil painting on canvas, which accidentally became the standard medium for Western painting that we still use today!"
                        },

                        // ========== KEY CONCEPTS RECAP ==========
                        {
                            type: "concept",
                            title: "The Big Ideas That Changed Art Forever",
                            content: "**5 REVOLUTIONARY INNOVATIONS:**\n\n**1. LINEAR PERSPECTIVE (Florence, 1420s)**\nBrunelleschi discovered the mathematical rules for creating the illusion of 3D space on a flat surface. Before this, paintings looked flat. After, they created windows into realistic worlds.\n\n**2. OIL PAINTING (Northern Europe → Venice)**\nVan Eyck perfected oil paints that allowed layering, glazing, and microscopic detail impossible with tempera. Venice adopted it because humidity made fresco impossible.\n\n**3. ANATOMICAL STUDY (Florence/Rome)**\nLeonardo and Michelangelo dissected corpses to understand how bodies actually work. This allowed them to paint figures that seemed alive, not like posed mannequins.\n\n**4. SFUMATO (Leonardo)**\nThe technique of soft, smoky transitions between tones—no hard edges. Creates mysterious, atmospheric quality. Mona Lisa is the famous example.\n\n**5. COLORITO (Venice)**\nBuilding forms through COLOR rather than outlines. Titian proved you could create masterpieces without the precise drawing Florence demanded.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="32">5 INNOVATIONS THAT CHANGED EVERYTHING</text>

    <!-- Innovation 1 -->
    <rect x="40" y="80" width="500" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
    <text x="290" y="120" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">1. LINEAR PERSPECTIVE</text>
    <text x="290" y="150" text-anchor="middle" fill="#fff" font-size="20">Math rules for 3D illusion</text>
    <text x="290" y="180" text-anchor="middle" fill="#888" font-size="16">Brunelleschi | Florence | 1420s</text>

    <!-- Innovation 2 -->
    <rect x="560" y="80" width="500" height="120" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <text x="810" y="120" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">2. OIL PAINTING</text>
    <text x="810" y="150" text-anchor="middle" fill="#fff" font-size="20">Layering, glazing, detail</text>
    <text x="810" y="180" text-anchor="middle" fill="#888" font-size="16">Van Eyck → Venice | 1430s</text>

    <!-- Innovation 3 -->
    <rect x="40" y="220" width="500" height="120" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="290" y="260" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">3. ANATOMY STUDY</text>
    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="20">Dissection for realism</text>
    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Leonardo/Michelangelo | 1490s</text>

    <!-- Innovation 4 -->
    <rect x="560" y="220" width="500" height="120" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="810" y="260" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">4. SFUMATO</text>
    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="20">Smoky, soft transitions</text>
    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">Leonardo | Mona Lisa | 1503</text>

    <!-- Innovation 5 -->
    <rect x="250" y="360" width="600" height="120" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <text x="550" y="400" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">5. COLORITO</text>
    <text x="550" y="430" text-anchor="middle" fill="#fff" font-size="20">Color over drawing</text>
    <text x="550" y="460" text-anchor="middle" fill="#888" font-size="16">Titian | Venice | 1500s</text>

    <!-- Why it matters -->
    <rect x="100" y="500" width="900" height="120" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666"/>
    <text x="550" y="545" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">WHY THESE MATTER TODAY</text>
    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="20">Every realistic painting, photograph, and film</text>
    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="18">uses techniques invented in the Renaissance</text>

    <!-- Bottom note -->
    <rect x="300" y="640" width="500" height="40" rx="20" fill="rgba(16,185,129,0.1)"/>
    <text x="550" y="668" text-anchor="middle" fill="#10b981" font-size="18">These 5 innovations still shape visual culture today</text>
</svg>`,
                                caption: "These 5 innovations still shape visual culture today"
                            }
                        },

                        // ========== QUIZ 5: COMPARATIVE ==========
                        {
                            type: "quiz",
                            question: "Florence emphasized DISEGNO (drawing). Venice emphasized COLORITO (color). What did this debate represent?",
                            options: [
                                { text: "A technical disagreement about paint types", correct: false },
                                { text: "A philosophical clash: intellect vs emotion in art", correct: true },
                                { text: "A political rivalry between city-states", correct: false },
                                { text: "A religious difference between regions", correct: false }
                            ],
                            explanation: "The disegno vs colorito debate was fundamentally PHILOSOPHICAL. Florence believed drawing revealed the artist's intellect and showed mastery of form. Venice believed color spoke directly to emotion and the senses. It was a clash between art as intellectual exercise (mind) versus art as sensory experience (soul). Both approaches produced masterpieces!"
                        },

                        // ========== CONVERSATION STARTERS ==========
                        {
                            type: "concept",
                            title: "Now You Can Talk About Renaissance Art",
                            content: "You're now equipped to discuss Renaissance art intelligently. Here are conversation starters for different situations:\n\n**At a Museum:**\n'This is a great example of sfumato—see how Leonardo creates those soft transitions? There are no hard edges, which is why the Mona Lisa seems so mysterious.'\n\n**At a Dinner Party:**\n'Did you know the Renaissance had two completely different schools of thought? Florence emphasized precise drawing while Venice built everything through color. It was basically intellect vs emotion.'\n\n**With Art Students:**\n'Mannerism is fascinating because it deliberately broke all the rules the High Renaissance established. After the Sack of Rome in 1527, artists couldn't maintain that optimistic worldview anymore.'\n\n**Casual Conversation:**\n'The reason paintings started looking realistic around 1420 is because Brunelleschi figured out the mathematical rules for perspective. Before that, everything looked flat.'\n\n**Pro Tip:**\nWhen looking at any Renaissance painting, ask: Where was it made? When? What's the purpose? These three questions will tell you a lot about what you're seeing.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">YOU CAN NOW DISCUSS...</text>

    <!-- Topics grid -->
    <rect x="40" y="80" width="500" height="110" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <text x="290" y="120" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">TECHNIQUES</text>
    <text x="290" y="155" text-anchor="middle" fill="#fff" font-size="20">Perspective | Sfumato | Oil | Colorito</text>

    <rect x="560" y="80" width="500" height="110" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <text x="810" y="120" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">MOVEMENTS</text>
    <text x="810" y="155" text-anchor="middle" fill="#fff" font-size="20">Gothic | Florence | Northern | Venice</text>

    <rect x="40" y="210" width="500" height="110" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="290" y="250" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">ARTISTS</text>
    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="20">Leonardo | Michelangelo | Titian | Dürer</text>

    <rect x="560" y="210" width="500" height="110" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
    <text x="810" y="250" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">CONTEXT</text>
    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="20">Sack of Rome | Trade | Humanism</text>

    <!-- 3 questions framework -->
    <rect x="100" y="340" width="900" height="180" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="385" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">THE 3-QUESTION FRAMEWORK</text>
    <text x="550" y="425" text-anchor="middle" fill="#fff" font-size="22">When looking at ANY Renaissance artwork, ask:</text>

    <text x="250" y="475" text-anchor="middle" fill="#fff" font-size="24">1. WHERE?</text>
    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="24">2. WHEN?</text>
    <text x="850" y="475" text-anchor="middle" fill="#fff" font-size="24">3. WHY?</text>

    <text x="250" y="505" text-anchor="middle" fill="#888" font-size="18">Florence vs Venice</text>
    <text x="550" y="505" text-anchor="middle" fill="#888" font-size="18">Early vs High vs Late</text>
    <text x="850" y="505" text-anchor="middle" fill="#888" font-size="18">Church vs Private</text>

    <!-- Bottom bar -->
    <rect x="200" y="550" width="700" height="70" rx="35" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="595" text-anchor="middle" fill="#10b981" font-size="22">You now have the knowledge to discuss art confidently</text>

    <!-- Pro tip -->
    <rect x="100" y="640" width="900" height="40" rx="20" fill="rgba(255,255,255,0.05)"/>
    <text x="550" y="668" text-anchor="middle" fill="#888" font-size="16">PRO TIP: These questions work for ANY art period, not just Renaissance!</text>
</svg>`,
                                caption: "You now have the knowledge to discuss art confidently"
                            }
                        },

                        // ========== FINAL QUIZ ==========
                        {
                            type: "quiz",
                            question: "FINAL QUESTION: Which of these is NOT a characteristic of Mannerism?",
                            options: [
                                { text: "Elongated figures (serpentinata)", correct: false },
                                { text: "Perfect classical proportion", correct: true },
                                { text: "Unusual 'acid' colors", correct: false },
                                { text: "Ambiguous spatial depth", correct: false }
                            ],
                            explanation: "Mannerism deliberately REJECTED the perfect classical proportions of the High Renaissance. After the Sack of Rome (1527), artists couldn't maintain that optimistic worldview. Instead, Mannerists used elongated figures, strange colors, unsettling compositions, and ambiguous space to express anxiety and spiritual searching. Remember SEALS: Serpentinata, Elongation, Acid colors, Limbo space, Self-conscious style."
                        },

                        // ========== COMPLETION SUMMARY ==========
                        {
                            type: "concept",
                            title: "🎓 Book 1 Complete: You've Mastered Renaissance Art!",
                            content: "**CONGRATULATIONS!** You've completed all 8 lessons covering 300 years of revolutionary art history.\n\n**What You Now Know:**\n✓ How the Renaissance transformed flat medieval art into realistic 3D illusion\n✓ Why Florence and Venice developed completely different approaches\n✓ The 3 giants of High Renaissance and their unique signatures\n✓ How trauma led to Mannerism's rule-breaking beauty\n✓ The techniques that still influence art today\n\n**Your Memory Toolkit:**\nELEGANCE → BMDA → GOLD → MIBA → LMR → SEALS → GLOW\n\n**You Can Now:**\n• Identify major Renaissance works at museums\n• Discuss art history intelligently at any gathering\n• Understand how artistic innovation happens\n• Spot the difference between movements\n• Appreciate what makes each master unique\n\n**Next Steps:**\nContinue to Book 2: Baroque to Rococo (1600-1800) to see how art evolved after the Renaissance!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>

    <!-- Celebration header -->
    <rect x="200" y="30" width="700" height="80" rx="40" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="4"/>
    <text x="550" y="80" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="36">BOOK 1 COMPLETE!</text>

    <!-- Stats row -->
    <rect x="40" y="130" width="320" height="120" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
    <text x="200" y="180" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="48">8</text>
    <text x="200" y="215" text-anchor="middle" fill="#fff" font-size="22">Lessons</text>
    <text x="200" y="240" text-anchor="middle" fill="#888" font-size="16">Completed</text>

    <rect x="390" y="130" width="320" height="120" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
    <text x="550" y="180" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="48">300</text>
    <text x="550" y="215" text-anchor="middle" fill="#fff" font-size="22">Years</text>
    <text x="550" y="240" text-anchor="middle" fill="#888" font-size="16">Covered</text>

    <rect x="740" y="130" width="320" height="120" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
    <text x="900" y="180" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="48">20+</text>
    <text x="900" y="215" text-anchor="middle" fill="#fff" font-size="22">Artists</text>
    <text x="900" y="240" text-anchor="middle" fill="#888" font-size="16">Learned</text>

    <!-- Memory toolkit -->
    <rect x="40" y="270" width="1020" height="100" rx="15" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
    <text x="550" y="310" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">YOUR MEMORY TOOLKIT</text>
    <text x="550" y="350" text-anchor="middle" fill="#fff" font-size="20">ELEGANCE → BMDA → GOLD → MIBA → LMR → SEALS → GLOW</text>

    <!-- Two columns: Skills and Next -->
    <rect x="40" y="390" width="500" height="180" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
    <text x="290" y="425" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">SKILLS UNLOCKED</text>
    <text x="70" y="460" fill="#fff" font-size="18">• Identify movements</text>
    <text x="70" y="490" fill="#fff" font-size="18">• Recognize techniques</text>
    <text x="70" y="520" fill="#fff" font-size="18">• Discuss art confidently</text>
    <text x="70" y="550" fill="#fff" font-size="18">• Understand context</text>

    <rect x="560" y="390" width="500" height="180" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
    <text x="810" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">NEXT: BOOK 2</text>
    <text x="590" y="460" fill="#fff" font-size="18">Baroque to Rococo</text>
    <text x="590" y="490" fill="#fff" font-size="18">(1600-1800)</text>
    <text x="590" y="530" fill="#888" font-size="16">Caravaggio | Bernini</text>
    <text x="590" y="555" fill="#888" font-size="16">Rembrandt | Vermeer</text>

    <!-- Completion badge -->
    <rect x="300" y="590" width="500" height="80" rx="40" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
    <text x="550" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">Renaissance: Medieval to Modern (1375-1600)</text>
    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">You've completed the Renaissance journey!</text>
</svg>`,
                                caption: "You've completed the Renaissance journey!"
                            }
                        }
                    ]
                }
            ]
        },
        // ============================================
        // BOOK 2: BAROQUE TO ROCOCO
        // ============================================
        {
            id: "art-1600-1800",
            title: "Baroque to Rococo (1600-1800)",
            author: "Based on Robertson & Hutton",
            description: "From the dramatic intensity of Baroque to the playful elegance of Rococo, explore two centuries of artistic innovation across Europe and beyond.",
            lessons: 8,
            duration: 55,
            progress: 0,
            category: "art-history",
            featured: false,
            lessonList: [
                // ========================================
                // LESSON 1: INTRODUCTION TO BAROQUE
                // ========================================
                {
                    id: 1,
                    title: "Introduction to Baroque Art",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Drama, Emotion, and Power",
                            content: "The Renaissance believed humans could perfect themselves. The Baroque knew they couldn't—and embraced the drama of that struggle.\n\nBaroque art (c. 1600-1750) exploded out of two crises:\n\n**1. THE COUNTER-REFORMATION**\nThe Catholic Church, reeling from Protestant attacks, used art as a weapon. They wanted images so emotionally overwhelming that viewers would FEEL their faith, not just think about it.\n\n**2. THE SCIENTIFIC REVOLUTION**\nGalileo, Newton, and others revealed a universe far stranger than anyone imagined. Artists responded with works that captured awe, wonder, and the sublime.\n\nThe result? Art that grabs you by the collar, pulls you in, and doesn't let go.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">WHY BAROQUE HAPPENED</text>

                                    <!-- Two crises -->
                                    <rect x="40" y="134" width="500" height="206" rx="34" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="290" y="183" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">COUNTER-REFORMATION</text>
                                    <text x="290" y="224" text-anchor="middle" fill="#fff" font-size="29">Catholic Church fights back</text>
                                    <text x="290" y="260" text-anchor="middle" fill="#fff" font-size="29">against Protestant criticism</text>
                                    <text x="290" y="304" text-anchor="middle" fill="#888" font-size="27">Art as EMOTIONAL weapon</text>
                                    <text x="290" y="333" text-anchor="middle" fill="#888" font-size="27">Feel faith, don't just think it</text>

                                    <rect x="560" y="134" width="500" height="206" rx="34" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="183" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">SCIENTIFIC REVOLUTION</text>
                                    <text x="810" y="224" text-anchor="middle" fill="#fff" font-size="29">Galileo, Newton reveal</text>
                                    <text x="810" y="260" text-anchor="middle" fill="#fff" font-size="29">a strange new universe</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#888" font-size="27">Awe and wonder</text>
                                    <text x="810" y="333" text-anchor="middle" fill="#888" font-size="27">The sublime and infinite</text>

                                    <!-- Characteristics -->
                                    <rect x="53" y="364" width="954" height="133" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="408" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">BAROQUE CHARACTERISTICS</text>
                                    <text x="212" y="456" text-anchor="middle" fill="#fff" font-size="29">DRAMA</text>
                                    <text x="424" y="456" text-anchor="middle" fill="#fff" font-size="29">MOVEMENT</text>
                                    <text x="636" y="456" text-anchor="middle" fill="#fff" font-size="29">EMOTION</text>
                                    <text x="848" y="456" text-anchor="middle" fill="#fff" font-size="29">GRANDEUR</text>
                                    <text x="212" y="486" text-anchor="middle" fill="#888" font-size="25">Intense light/dark</text>
                                    <text x="424" y="486" text-anchor="middle" fill="#888" font-size="25">Swirling forms</text>
                                    <text x="636" y="486" text-anchor="middle" fill="#888" font-size="25">Psychological depth</text>
                                    <text x="848" y="486" text-anchor="middle" fill="#888" font-size="25">Overwhelming scale</text>

                                    <!-- Timeline -->
                                    <rect x="53" y="522" width="954" height="158" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="563" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">BAROQUE SPREAD ACROSS EUROPE</text>
                                    <line x1="133" y1="619" x2="928" y2="619" stroke="#8b5cf6" stroke-width="5"/>
                                    <circle cx="278" cy="619" r="10" fill="#ef4444"/>
                                    <text x="212" y="655" text-anchor="middle" fill="#888" font-size="25">Italy 1600</text>
                                    <circle cx="521" cy="619" r="10" fill="#f59e0b"/>
                                    <text x="398" y="655" text-anchor="middle" fill="#888" font-size="25">Flanders 1610</text>
                                    <circle cx="764" cy="619" r="10" fill="#10b981"/>
                                    <text x="583" y="655" text-anchor="middle" fill="#888" font-size="25">Dutch 1620</text>
                                    <circle cx="1007" cy="619" r="10" fill="#3b82f6"/>
                                    <text x="769" y="655" text-anchor="middle" fill="#888" font-size="25">France 1640</text>
                                </svg>`,
                                caption: "Baroque art emerged from religious and scientific revolutions"
                            }
                        },
                        {
                            type: "concept",
                            title: "The 4 Defining Features of Baroque Art",
                            content: "Baroque art isn't subtle. It hits you with everything at once:\n\n**1. DRAMATIC LIGHTING (Chiaroscuro/Tenebrism)**\nFigures emerge from deep darkness, spotlit as if on a stage. The contrast creates psychological intensity—we focus on what's illuminated while the rest remains mysterious.\n\n**2. DYNAMIC MOVEMENT**\nNothing is static. Figures twist, fabrics billow, clouds swirl. Baroque compositions use diagonals instead of Renaissance horizontals, creating constant visual motion.\n\n**3. EMOTIONAL INTENSITY**\nYou feel Baroque art in your gut. Faces show ecstasy, agony, rapture. Bodies strain and reach. The goal is to overwhelm your senses and bypass your intellect.\n\n**4. THEATRICAL GRANDEUR**\nBaroque spaces are designed to impress—gilded churches, vast palace halls, monumental sculptures. The viewer should feel small before the glory of God or King.\n\n**The Key Difference from Renaissance:**\nRenaissance = calm, balanced, intellectual\nBaroque = dramatic, dynamic, emotional",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 967" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="967" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="41">THE 4 BAROQUE FEATURES</text>

                                    <!-- Feature 1: Light -->
                                    <rect x="40" y="122" width="500" height="206" rx="34" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="290" y="166" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">1. DRAMATIC LIGHTING</text>
                                    <rect x="106" y="190" width="159" height="109" fill="#0a0a0a"/>
                                    <circle cx="382" cy="207" r="18" fill="#ffd700" opacity="1"/>
                                    <line x1="292" y1="207" x2="186" y2="243" stroke="#ffd700" stroke-width="5" opacity="1"/>
                                    <circle cx="243" cy="243" r="22" fill="#d4a574"/>
                                    <text x="290" y="316" text-anchor="middle" fill="#888" font-size="27">Tenebrism: from darkness</text>

                                    <!-- Feature 2: Movement -->
                                    <rect x="560" y="122" width="500" height="206" rx="34" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="810" y="166" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">2. DYNAMIC MOVEMENT</text>
                                    <path d="M 506.2 219.2 Q 566.8 183.0 627.6 231.3 Q 688.4 279.6 647.9 303.9 Q 587.1 328.2 546.6 291.8" stroke="#ef4444" stroke-width="7" fill="none"/>
                                    <path d="M 526.4 243.3 Q 577.0 207.1 617.4 255.5" stroke="#ef4444" stroke-width="5" fill="none"/>
                                    <text x="810" y="316" text-anchor="middle" fill="#888" font-size="27">Diagonals, swirls, tension</text>

                                    <!-- Feature 3: Emotion -->
                                    <rect x="40" y="352" width="500" height="206" rx="34" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="290" y="396" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">3. EMOTIONAL INTENSITY</text>
                                    <circle cx="278" cy="474" r="31" fill="none" stroke="#8b5cf6" stroke-width="5"/>
                                    <path d="M 145.8 456.5 Q 151.8 466.2 157.8 456.5" stroke="#8b5cf6" stroke-width="5" fill="none"/>
                                    <path d="M 166 456.5 Q 172.1 466.2 178.2 456.5" stroke="#8b5cf6" stroke-width="5" fill="none"/>
                                    <ellipse cx="278" cy="493" rx="34" ry="18" fill="none" stroke="#8b5cf6" stroke-width="5"/>
                                    <text x="345" y="466" fill="#fff" font-size="27">Ecstasy</text>
                                    <text x="345" y="498" fill="#fff" font-size="27">Agony</text>
                                    <text x="290" y="546" text-anchor="middle" fill="#888" font-size="27">Feel, don't just think</text>

                                    <!-- Feature 4: Grandeur -->
                                    <rect x="560" y="352" width="500" height="206" rx="34" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="810" y="396" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">4. THEATRICAL GRANDEUR</text>
                                    <rect x="663" y="425" width="225" height="109" rx="20" fill="none" stroke="#10b981" stroke-width="5"/>
                                    <rect x="676" y="437" width="53" height="85" fill="rgba(16,185,129,0.3)"/>
                                    <rect x="742" y="437" width="53" height="85" fill="rgba(16,185,129,0.3)"/>
                                    <rect x="808" y="437" width="53" height="85" fill="rgba(16,185,129,0.3)"/>
                                    <text x="810" y="546" text-anchor="middle" fill="#888" font-size="27">Overwhelming scale</text>

                                    <!-- Comparison -->
                                    <rect x="106" y="582" width="848" height="145" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="626" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">RENAISSANCE vs BAROQUE</text>
                                    <text x="318" y="674" text-anchor="middle" fill="#10b981" font-size="29">Calm, balanced, intellectual</text>
                                    <text x="550" y="674" text-anchor="middle" fill="#666" font-size="34">→</text>
                                    <text x="742" y="674" text-anchor="middle" fill="#ffd700" font-size="29">Dramatic, dynamic, emotional</text>
                                    <text x="318" y="708" text-anchor="middle" fill="#888" font-size="27">1400-1520</text>
                                    <text x="742" y="708" text-anchor="middle" fill="#888" font-size="27">1600-1750</text>
                                </svg>`,
                                caption: "Baroque overwhelms the senses by design"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why did the Catholic Church embrace Baroque art?",
                            options: [
                                { text: "It was cheaper to produce than Renaissance art", correct: false },
                                { text: "They wanted emotionally overwhelming images to inspire faith during the Counter-Reformation", correct: true },
                                { text: "Protestant churches had already adopted the style", correct: false },
                                { text: "The Pope personally preferred dramatic lighting", correct: false }
                            ],
                            explanation: "The Counter-Reformation was the Catholic Church's response to Protestant criticism. The Church realized that emotional, overwhelming art could inspire faith more effectively than intellectual arguments. Baroque art was designed to make viewers FEEL the presence of God, not just think about theology."
                        },
                        {
                            type: "concept",
                            title: "The Baroque Masters: 4 Titans",
                            content: "Four artists defined the Baroque era, each in a different medium and country:\n\n**CARAVAGGIO (1571-1610) - Italy**\nThe revolutionary who invented Baroque painting. Used common people as models for saints, dramatic lighting, psychological intensity. Violent life, revolutionary art.\n\n**BERNINI (1598-1680) - Italy**\nThe sculptor who made marble breathe. His figures seem about to move, their ecstasy palpable. Also designed St. Peter's Square.\n\n**RUBENS (1577-1640) - Flanders**\nThe master of grandeur. Massive canvases bursting with movement, flesh, and drama. Also a diplomat who painted for every major European court.\n\n**REMBRANDT (1606-1669) - Dutch Republic**\nThe psychologist of paint. Penetrating portraits, innovative use of light, unmatched depth of human emotion. Died poor, now considered among the greatest ever.\n\nEach took Baroque in a unique direction, but all shared: drama, movement, emotion, psychological depth.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 967" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="967" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="41">THE 4 BAROQUE TITANS</text>

                                    <!-- Caravaggio -->
                                    <rect x="40" y="122" width="500" height="194" rx="34" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="290" y="166" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">CARAVAGGIO</text>
                                    <text x="290" y="200" text-anchor="middle" fill="#888" font-size="29">Italy • 1571-1610</text>
                                    <text x="290" y="239" text-anchor="middle" fill="#fff" font-size="29">Invented tenebrism</text>
                                    <text x="290" y="272" text-anchor="middle" fill="#fff" font-size="29">Common people as saints</text>
                                    <text x="290" y="304" text-anchor="middle" fill="#888" font-size="27">Violent life, revolutionary art</text>

                                    <!-- Bernini -->
                                    <rect x="560" y="122" width="500" height="194" rx="34" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="810" y="166" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">BERNINI</text>
                                    <text x="810" y="200" text-anchor="middle" fill="#888" font-size="29">Italy • 1598-1680</text>
                                    <text x="810" y="239" text-anchor="middle" fill="#fff" font-size="29">Made marble breathe</text>
                                    <text x="810" y="272" text-anchor="middle" fill="#fff" font-size="29">Ecstasy in stone</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#888" font-size="27">St. Peter's Square</text>

                                    <!-- Rubens -->
                                    <rect x="40" y="340" width="500" height="194" rx="34" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="290" y="384" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">RUBENS</text>
                                    <text x="290" y="418" text-anchor="middle" fill="#888" font-size="29">Flanders • 1577-1640</text>
                                    <text x="290" y="456" text-anchor="middle" fill="#fff" font-size="29">Master of grandeur</text>
                                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="29">Massive, dynamic canvases</text>
                                    <text x="290" y="522" text-anchor="middle" fill="#888" font-size="27">Diplomat-painter</text>

                                    <!-- Rembrandt -->
                                    <rect x="560" y="340" width="500" height="194" rx="34" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="384" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">REMBRANDT</text>
                                    <text x="810" y="418" text-anchor="middle" fill="#888" font-size="29">Dutch • 1606-1669</text>
                                    <text x="810" y="456" text-anchor="middle" fill="#fff" font-size="29">Psychologist of paint</text>
                                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="29">Penetrating portraits</text>
                                    <text x="810" y="522" text-anchor="middle" fill="#888" font-size="27">Died poor, now priceless</text>

                                    <!-- Common traits -->
                                    <rect x="106" y="558" width="848" height="169" rx="27" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">WHAT THEY SHARED</text>
                                    <text x="252" y="650" text-anchor="middle" fill="#fff" font-size="29">Drama</text>
                                    <text x="451" y="650" text-anchor="middle" fill="#fff" font-size="29">Movement</text>
                                    <text x="650" y="650" text-anchor="middle" fill="#fff" font-size="29">Emotion</text>
                                    <text x="848" y="650" text-anchor="middle" fill="#fff" font-size="29">Psychology</text>
                                    <text x="550" y="704" text-anchor="middle" fill="#888" font-size="29">All transformed how we see human experience in art</text>
                                </svg>`,
                                caption: "Four artists, four countries, one revolutionary spirit"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: TEMPO",
                            content: "Remember the 5 key aspects of Baroque art with TEMPO:\n\n**T - TENEBRISM**\nDramatic lighting where figures emerge from darkness. Caravaggio's signature technique. Creates psychological intensity.\n\n**E - EMOTION**\nBaroque art hits you in the gut. Faces show ecstasy, agony, rapture. The goal is to make you FEEL, not just think.\n\n**M - MOVEMENT**\nNothing is static. Compositions use diagonals, spirals, and flowing forms. Figures twist, fabrics billow, clouds swirl.\n\n**P - POWER**\nBaroque served the Church and absolute monarchs. The scale and grandeur were designed to overwhelm—to make you feel small before God or King.\n\n**O - OVERWHELM**\nUnlike Renaissance balance and calm, Baroque aims to overwhelm the senses. Every surface decorated, every space filled.\n\n**Say it:** 'Baroque art sets the TEMPO—Tenebrism, Emotion, Movement, Power, Overwhelm.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="47">T E M P O</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="34">Remember Baroque Art in 5 letters</text>

                                    <!-- T -->
                                    <rect x="53" y="171" width="186" height="242" rx="27" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="146" y="224" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="51">T</text>
                                    <text x="146" y="268" text-anchor="middle" fill="#ef4444" font-size="27">TENEBRISM</text>
                                    <text x="146" y="311" text-anchor="middle" fill="#fff" font-size="25">Dramatic</text>
                                    <text x="146" y="340" text-anchor="middle" fill="#fff" font-size="25">lighting</text>
                                    <text x="146" y="388" text-anchor="middle" fill="#888" font-size="25">From</text>
                                    <text x="146" y="413" text-anchor="middle" fill="#888" font-size="25">darkness</text>

                                    <!-- E -->
                                    <rect x="252" y="171" width="186" height="242" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="345" y="224" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="51">E</text>
                                    <text x="345" y="268" text-anchor="middle" fill="#f59e0b" font-size="27">EMOTION</text>
                                    <text x="345" y="311" text-anchor="middle" fill="#fff" font-size="25">Feel, don't</text>
                                    <text x="345" y="340" text-anchor="middle" fill="#fff" font-size="25">just think</text>
                                    <text x="345" y="388" text-anchor="middle" fill="#888" font-size="25">Ecstasy,</text>
                                    <text x="345" y="413" text-anchor="middle" fill="#888" font-size="25">agony</text>

                                    <!-- M -->
                                    <rect x="451" y="171" width="186" height="242" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="544" y="224" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="51">M</text>
                                    <text x="544" y="268" text-anchor="middle" fill="#10b981" font-size="27">MOVEMENT</text>
                                    <text x="544" y="311" text-anchor="middle" fill="#fff" font-size="25">Diagonals</text>
                                    <text x="544" y="340" text-anchor="middle" fill="#fff" font-size="25">& spirals</text>
                                    <text x="544" y="388" text-anchor="middle" fill="#888" font-size="25">Nothing</text>
                                    <text x="544" y="413" text-anchor="middle" fill="#888" font-size="25">static</text>

                                    <!-- P -->
                                    <rect x="650" y="171" width="186" height="242" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="742" y="224" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="51">P</text>
                                    <text x="742" y="268" text-anchor="middle" fill="#8b5cf6" font-size="27">POWER</text>
                                    <text x="742" y="311" text-anchor="middle" fill="#fff" font-size="25">Church &amp;</text>
                                    <text x="742" y="340" text-anchor="middle" fill="#fff" font-size="25">monarchy</text>
                                    <text x="742" y="388" text-anchor="middle" fill="#888" font-size="25">Feel small</text>
                                    <text x="742" y="413" text-anchor="middle" fill="#888" font-size="25">before God</text>

                                    <!-- O -->
                                    <rect x="848" y="171" width="172" height="242" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="933" y="224" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="51">O</text>
                                    <text x="933" y="268" text-anchor="middle" fill="#3b82f6" font-size="27">OVERWHELM</text>
                                    <text x="933" y="311" text-anchor="middle" fill="#fff" font-size="25">Sensory</text>
                                    <text x="933" y="340" text-anchor="middle" fill="#fff" font-size="25">overload</text>
                                    <text x="933" y="388" text-anchor="middle" fill="#888" font-size="25">Every</text>
                                    <text x="933" y="413" text-anchor="middle" fill="#888" font-size="25">surface</text>

                                    <!-- Phrase -->
                                    <rect x="100" y="449" width="900" height="109" rx="27" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="550" y="498" text-anchor="middle" fill="#fff" font-size="31">"Baroque art sets the TEMPO—</text>
                                    <text x="550" y="534" text-anchor="middle" fill="#fff" font-size="31">Tenebrism, Emotion, Movement, Power, Overwhelm"</text>

                                    <!-- Timeline -->
                                    <rect x="100" y="582" width="900" height="97" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="626" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">BAROQUE ERA: 1600-1750</text>
                                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="29">Italy → Flanders → Dutch Republic → France → All of Europe</text>
                                </svg>`,
                                caption: "TEMPO: Your key to remembering Baroque art"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What is tenebrism in Baroque painting?",
                            options: [
                                { text: "Use of bright, cheerful colors", correct: false },
                                { text: "Stark contrast between light and dark with figures emerging from darkness", correct: true },
                                { text: "Painting only at night", correct: false },
                                { text: "A technique for painting shadows only", correct: false }
                            ],
                            explanation: "Tenebrism (from Italian 'tenebroso' meaning dark, murky) is a technique where figures dramatically emerge from deep darkness, illuminated by a single, often unseen light source. Caravaggio perfected this approach—think of a spotlight on a dark stage. This technique spread across Europe and influenced countless artists."
                        },
                        {
                            type: "concept",
                            title: "Lesson 1 Summary: Introduction to Baroque",
                            content: "**THE BIG PICTURE:**\nBaroque art (1600-1750) emerged from two crises: the Counter-Reformation and the Scientific Revolution. The Church wanted emotionally overwhelming art to inspire faith; science revealed a strange new universe that inspired awe.\n\n**THE 4 DEFINING FEATURES:**\n1. Dramatic lighting (tenebrism)\n2. Dynamic movement\n3. Emotional intensity\n4. Theatrical grandeur\n\n**THE 4 TITANS:**\n• Caravaggio - invented tenebrism\n• Bernini - made marble breathe\n• Rubens - master of grandeur\n• Rembrandt - psychologist of paint\n\n**REMEMBER: TEMPO**\nTenebrism, Emotion, Movement, Power, Overwhelm\n\n**KEY DIFFERENCE FROM RENAISSANCE:**\nRenaissance = calm, balanced, intellectual\nBaroque = dramatic, dynamic, emotional",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>

                                    <!-- Header -->
                                    <rect x="265" y="50" width="530" height="85" rx="34" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="550" y="105" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">✓ LESSON 1 COMPLETE</text>

                                    <!-- Core concept -->
                                    <rect x="53" y="159" width="954" height="85" rx="27" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="550" y="200" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">CORE CONCEPT</text>
                                    <text x="550" y="231" text-anchor="middle" fill="#fff" font-size="29">Drama, emotion, and grandeur serving Church and Crown</text>

                                    <!-- Features -->
                                    <rect x="40" y="268" width="500" height="169" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="290" y="304" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="29">4 FEATURES</text>
                                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="27">Dramatic lighting • Movement</text>
                                    <text x="290" y="382" text-anchor="middle" fill="#fff" font-size="27">Emotional intensity • Grandeur</text>
                                    <text x="290" y="418" text-anchor="middle" fill="#888" font-size="25">Overwhelm the senses</text>

                                    <!-- Titans -->
                                    <rect x="560" y="268" width="500" height="169" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="810" y="304" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="29">4 TITANS</text>
                                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="27">Caravaggio • Bernini</text>
                                    <text x="810" y="382" text-anchor="middle" fill="#fff" font-size="27">Rubens • Rembrandt</text>
                                    <text x="810" y="418" text-anchor="middle" fill="#888" font-size="25">Each a master of drama</text>

                                    <!-- Memory tool -->
                                    <rect x="53" y="461" width="954" height="85" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="498" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">REMEMBER: TEMPO</text>
                                    <text x="550" y="534" text-anchor="middle" fill="#fff" font-size="29">Tenebrism • Emotion • Movement • Power • Overwhelm</text>

                                    <!-- Feynman badge -->
                                    <rect x="212" y="570" width="636" height="68" rx="27" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="550" y="616" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">🎓 Ready to explain Baroque to anyone!</text>
                                </svg>`,
                                caption: "You now understand the foundations of Baroque art"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 2: CARAVAGGIO
                // ========================================
                {
                    id: 2,
                    title: "Caravaggio: The Outlaw Genius",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Most Dangerous Artist in History",
                            content: "Michelangelo Merisi da Caravaggio (1571-1610) lived only 38 years, but in that time he killed a man, fled across Italy, was knighted and expelled from knighthood, and completely revolutionized painting.\n\nHis life reads like a crime thriller: brawls, prison, death warrants, mysterious endings. But his art? It changed everything.\n\n**Before Caravaggio:** Painters idealized the human form. Saints looked like Greek gods. Religious scenes took place in heavenly settings.\n\n**After Caravaggio:** Saints looked like the guy next door. Biblical stories happened in dark Roman taverns. Viewers were INSIDE the action, not watching from a safe distance.\n\nHe invented a new way of seeing that spread across Europe within decades.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">CARAVAGGIO (1571-1610)</text>
                                    <text x="550" y="122" text-anchor="middle" fill="#888" font-size="31">"The most dangerous artist in history"</text>

                                    <!-- Life events timeline -->
                                    <rect x="53" y="159" width="954" height="206" rx="27" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="550" y="200" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">A LIFE OF VIOLENCE AND GENIUS</text>

                                    <line x1="133" y1="256" x2="928" y2="256" stroke="#ef4444" stroke-width="5"/>
                                    <circle cx="243" cy="256" r="10" fill="#f59e0b"/>
                                    <text x="186" y="304" text-anchor="middle" fill="#888" font-size="25">1592</text>
                                    <text x="186" y="328" text-anchor="middle" fill="#fff" font-size="25">Rome</text>

                                    <circle cx="486" cy="256" r="10" fill="#10b981"/>
                                    <text x="371" y="304" text-anchor="middle" fill="#888" font-size="25">1599</text>
                                    <text x="371" y="328" text-anchor="middle" fill="#fff" font-size="25">First hit</text>

                                    <circle cx="729" cy="256" r="12" fill="#ef4444"/>
                                    <text x="557" y="304" text-anchor="middle" fill="#888" font-size="25">1606</text>
                                    <text x="557" y="328" text-anchor="middle" fill="#ef4444" font-size="25">KILLS A MAN</text>

                                    <circle cx="972" cy="256" r="10" fill="#8b5cf6"/>
                                    <text x="742" y="304" text-anchor="middle" fill="#888" font-size="25">1608</text>
                                    <text x="742" y="328" text-anchor="middle" fill="#fff" font-size="25">Knight/expelled</text>

                                    <circle cx="1146" cy="256" r="10" fill="#666"/>
                                    <text x="875" y="304" text-anchor="middle" fill="#888" font-size="25">1610</text>
                                    <text x="875" y="328" text-anchor="middle" fill="#fff" font-size="25">Dies at 38</text>

                                    <!-- Before/After -->
                                    <rect x="40" y="388" width="500" height="158" rx="27" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="290" y="430" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="31">BEFORE CARAVAGGIO</text>
                                    <text x="290" y="474" text-anchor="middle" fill="#888" font-size="27">Saints like Greek gods</text>
                                    <text x="290" y="505" text-anchor="middle" fill="#888" font-size="27">Heavenly settings</text>
                                    <text x="290" y="536" text-anchor="middle" fill="#888" font-size="27">Idealized beauty</text>

                                    <rect x="560" y="388" width="500" height="158" rx="27" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="810" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">AFTER CARAVAGGIO</text>
                                    <text x="810" y="474" text-anchor="middle" fill="#fff" font-size="27">Saints like street people</text>
                                    <text x="810" y="505" text-anchor="middle" fill="#fff" font-size="27">Dark Roman taverns</text>
                                    <text x="810" y="536" text-anchor="middle" fill="#fff" font-size="27">Raw, real humanity</text>

                                    <!-- Legacy -->
                                    <rect x="106" y="570" width="848" height="109" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="611" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">HIS LEGACY</text>
                                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="29">The "Caravaggisti" spread his style across all of Europe within 20 years</text>
                                </svg>`,
                                caption: "38 years of violence and genius that changed art forever"
                            }
                        },
                        {
                            type: "concept",
                            title: "Caravaggio's 4 Revolutionary Techniques",
                            content: "Caravaggio didn't just paint differently—he saw the world differently:\n\n**1. TENEBRISM (Dark Manner)**\nFigures emerge from pitch darkness, lit by a single intense light source. Like a spotlight on a dark stage. This wasn't just dramatic—it focused attention and created psychological intensity.\n\n**2. NO IDEALIZATION**\nHis saints have dirty fingernails, wrinkled skin, calloused feet. He used real Roman street people as models—sometimes prostitutes and beggars. The Church was horrified. The public was transfixed.\n\n**3. RADICAL PHYSICALITY**\nBodies have WEIGHT. You can feel gravity, muscle, bone. His figures aren't poses—they're caught mid-action, straining, reaching, falling.\n\n**4. THE DECISIVE MOMENT**\nCaravaggio always painted the split-second of maximum drama. Not before, not after—the exact instant where everything changes. You're not observing history; you're INSIDE it.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 967" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="967" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="41">CARAVAGGIO'S 4 REVOLUTIONS</text>

                                    <!-- 1. Tenebrism -->
                                    <rect x="40" y="122" width="500" height="206" rx="34" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="290" y="166" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">1. TENEBRISM</text>
                                    <rect x="106" y="190" width="186" height="109" fill="#050505"/>
                                    <circle cx="451" cy="207" r="22" fill="#ffd700" opacity="1"/>
                                    <line x1="345" y1="207" x2="199" y2="243" stroke="#ffd700" stroke-width="7" opacity="0"/>
                                    <circle cx="260" cy="243" r="26" fill="#d4a574"/>
                                    <text x="290" y="316" text-anchor="middle" fill="#888" font-size="27">Spotlight from darkness</text>

                                    <!-- 2. No Idealization -->
                                    <rect x="560" y="122" width="500" height="206" rx="34" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="810" y="166" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">2. NO IDEALIZATION</text>
                                    <circle cx="920" cy="243" r="31" fill="#d4a574" stroke="#8b4513"/>
                                    <ellipse cx="885" cy="231" rx="16" ry="10" fill="#333"/>
                                    <ellipse cx="930" cy="231" rx="16" ry="10" fill="#333"/>
                                    <path d="M 506.2 260.3 L 546.6 267.7" stroke="#8b4513" stroke-width="3"/>
                                    <text x="822" y="231" fill="#fff" font-size="27">Wrinkles</text>
                                    <text x="822" y="260" fill="#fff" font-size="27">Dirty nails</text>
                                    <text x="810" y="316" text-anchor="middle" fill="#888" font-size="27">Real street people</text>

                                    <!-- 3. Physicality -->
                                    <rect x="40" y="352" width="500" height="206" rx="34" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="290" y="396" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">3. RADICAL PHYSICALITY</text>
                                    <ellipse cx="243" cy="486" rx="75" ry="35" fill="#d4a574" stroke="#8b4513"/>
                                    <ellipse cx="347" cy="481" rx="68" ry="30" fill="#d4a574" stroke="#8b4513"/>
                                    <text x="345" y="461" fill="#fff" font-size="27">Calloused</text>
                                    <text x="345" y="490" fill="#fff" font-size="27">dirty feet</text>
                                    <text x="290" y="546" text-anchor="middle" fill="#888" font-size="27">Bodies have WEIGHT</text>

                                    <!-- 4. Decisive Moment -->
                                    <rect x="560" y="352" width="500" height="206" rx="34" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="396" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">4. DECISIVE MOMENT</text>
                                    <text x="810" y="474" text-anchor="middle" fill="#8b5cf6" font-size="82">⚡</text>
                                    <text x="810" y="546" text-anchor="middle" fill="#888" font-size="27">The split-second of drama</text>

                                    <!-- Famous Works -->
                                    <rect x="100" y="582" width="900" height="145" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="626" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">MASTERPIECES</text>
                                    <text x="265" y="674" text-anchor="middle" fill="#ffd700" font-size="27">Calling of Matthew</text>
                                    <text x="265" y="704" text-anchor="middle" fill="#888" font-size="25">1599-1600</text>
                                    <text x="550" y="674" text-anchor="middle" fill="#ef4444" font-size="27">Judith Beheading</text>
                                    <text x="550" y="704" text-anchor="middle" fill="#888" font-size="25">1599</text>
                                    <text x="795" y="674" text-anchor="middle" fill="#10b981" font-size="27">Supper at Emmaus</text>
                                    <text x="795" y="704" text-anchor="middle" fill="#888" font-size="25">1601</text>
                                </svg>`,
                                caption: "Four innovations that spread across Europe"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why was the Church often horrified by Caravaggio's religious paintings?",
                            options: [
                                { text: "They were too dark to see properly", correct: false },
                                { text: "He painted saints as ordinary people with dirty feet and wrinkled skin", correct: true },
                                { text: "He refused to paint biblical subjects", correct: false },
                                { text: "His paintings were too small for churches", correct: false }
                            ],
                            explanation: "Caravaggio used real Roman street people as models for saints—beggars, prostitutes, laborers. His saints had dirty fingernails, calloused feet, and weathered faces. The Church found this undignified, but the public was transfixed. Caravaggio believed holiness could be found in ordinary humanity."
                        },
                        {
                            type: "concept",
                            title: "Lesson 2 Summary: Caravaggio",
                            content: "**THE MAN:**\nMichelangelo Merisi da Caravaggio (1571-1610) lived violently and died mysteriously at 38. He killed a man, fled across Italy, was knighted and expelled, but never stopped painting masterpieces.\n\n**THE 4 REVOLUTIONS:**\n1. TENEBRISM - Figures from darkness into spotlight\n2. NO IDEALIZATION - Real people, not Greek gods\n3. RADICAL PHYSICALITY - Bodies with weight and gravity\n4. DECISIVE MOMENT - The split-second of maximum drama\n\n**THE LEGACY:**\nWithin 20 years, artists across Europe imitated his style. The 'Caravaggisti' included Artemisia Gentileschi, Georges de La Tour, and countless others. Every dramatic painting with spotlight lighting owes something to Caravaggio.\n\n**KEY INSIGHT:**\nHe proved that holiness could be found in ordinary humanity—you didn't need perfect beauty to depict the divine.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 824" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="824" fill="#1a1a2e"/>

                                    <rect x="265" y="50" width="530" height="85" rx="34" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="550" y="105" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">✓ LESSON 2 COMPLETE</text>

                                    <rect x="40" y="159" width="500" height="194" rx="27" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="290" y="200" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">4 REVOLUTIONS</text>
                                    <text x="290" y="243" text-anchor="middle" fill="#fff" font-size="27">1. Tenebrism (spotlight)</text>
                                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="27">2. No idealization (real)</text>
                                    <text x="290" y="316" text-anchor="middle" fill="#fff" font-size="27">3. Physicality (weight)</text>
                                    <text x="290" y="352" text-anchor="middle" fill="#888" font-size="27">4. Decisive moment</text>

                                    <rect x="560" y="159" width="500" height="194" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="810" y="200" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">THE CARAVAGGISTI</text>
                                    <text x="810" y="248" text-anchor="middle" fill="#fff" font-size="27">His followers spread the</text>
                                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="27">style across Europe:</text>
                                    <text x="810" y="328" text-anchor="middle" fill="#888" font-size="27">Artemisia Gentileschi</text>
                                    <text x="810" y="357" text-anchor="middle" fill="#888" font-size="27">Georges de La Tour</text>

                                    <rect x="106" y="377" width="848" height="133" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="418" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">KEY INSIGHT</text>
                                    <text x="550" y="461" text-anchor="middle" fill="#fff" font-size="29">"Holiness can be found in ordinary humanity"</text>
                                    <text x="550" y="498" text-anchor="middle" fill="#888" font-size="27">You don't need perfect beauty to depict the divine</text>

                                    <rect x="212" y="534" width="636" height="72" rx="27" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="550" y="582" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">🎓 You can now explain Caravaggio's revolution!</text>
                                </svg>`,
                                caption: "The outlaw genius who changed how we see"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 3: BERNINI (Placeholder - will be expanded)
                // ========================================
                {
                    id: 3,
                    title: "Bernini: Sculptor of Ecstasy",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Man Who Made Marble Breathe",
                            content: "Gian Lorenzo Bernini (1598-1680) was the Michelangelo of the Baroque—sculptor, architect, painter, and theatrical designer. While Caravaggio revolutionized painting, Bernini did the same for sculpture.\n\nHis figures don't stand—they twist, reach, and seem about to move. His marble doesn't look like stone—it looks like flesh, fabric, clouds. He captured moments of spiritual ecstasy so intense viewers questioned where art ended and reality began.\n\nHe designed St. Peter's Square, the iconic colonnade that embraces visitors. He worked for eight popes. He was the most famous artist in Europe for fifty years.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="42">BERNINI (1598-1680)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"The Michelangelo of the Baroque"</text>

                                    <rect x="40" y="171" width="500" height="218" rx="34" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="290" y="219" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">MARBLE INTO FLESH</text>
                                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="29">Stone looks like skin</text>
                                    <text x="290" y="304" text-anchor="middle" fill="#fff" font-size="29">Fabric seems to flow</text>
                                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="29">Figures about to move</text>
                                    <text x="290" y="377" text-anchor="middle" fill="#888" font-size="27">Impossible virtuosity</text>

                                    <rect x="560" y="171" width="500" height="218" rx="34" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="219" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">ECSTASY IN STONE</text>
                                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="29">Spiritual rapture</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#fff" font-size="29">captured mid-moment</text>
                                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="29">St. Teresa masterpiece</text>
                                    <text x="810" y="377" text-anchor="middle" fill="#888" font-size="27">Where art meets reality</text>

                                    <rect x="106" y="413" width="848" height="206" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="461" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">MAJOR ACHIEVEMENTS</text>
                                    <text x="292" y="510" text-anchor="middle" fill="#fff" font-size="29">St. Peter's Square</text>
                                    <text x="292" y="546" text-anchor="middle" fill="#888" font-size="27">Colonnade embraces</text>
                                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="29">Ecstasy of St. Teresa</text>
                                    <text x="550" y="546" text-anchor="middle" fill="#888" font-size="27">Spiritual rapture</text>
                                    <text x="769" y="510" text-anchor="middle" fill="#fff" font-size="29">Apollo & Daphne</text>
                                    <text x="769" y="546" text-anchor="middle" fill="#888" font-size="27">Transformation</text>
                                    <text x="550" y="594" text-anchor="middle" fill="#888" font-size="29">Worked for 8 popes • Most famous artist in Europe for 50 years</text>
                                </svg>`,
                                caption: "Bernini transformed sculpture into living, breathing drama"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What made Bernini's sculpture revolutionary?",
                            options: [
                                { text: "He only worked in bronze, not marble", correct: false },
                                { text: "He made marble look like flesh and fabric, capturing figures mid-movement in ecstatic moments", correct: true },
                                { text: "He created the smallest sculptures ever made", correct: false },
                                { text: "He refused to work for the Church", correct: false }
                            ],
                            explanation: "Bernini's technical virtuosity allowed him to make cold marble look like soft flesh, flowing fabric, and even clouds. His figures are captured mid-movement, often in moments of spiritual or physical ecstasy. The Ecstasy of St. Teresa shows a saint in spiritual rapture so intense that viewers debated whether it was religious or sensual."
                        }
                    ]
                },

                // ========================================
                // LESSON 4: REMBRANDT
                // ========================================
                {
                    id: 4,
                    title: "Rembrandt: Master of Light and Shadow",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Psychologist of Paint",
                            content: "Rembrandt van Rijn (1606-1669) was the greatest artist of the Dutch Golden Age—and possibly the greatest portrait painter who ever lived.\n\nWhile other Baroque artists created drama through violent action, Rembrandt found it in quiet moments. A face in thought. A hand resting on a book. The way light catches an aging eye.\n\n**His Life Arc:**\nRose to fame in Amsterdam as the most sought-after portrait painter. Made a fortune. Lost it through bad investments and personal tragedy. Died poor and nearly forgotten. Now considered among the greatest artists in history.\n\nHis secret? He didn't just paint faces—he painted souls.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="42">REMBRANDT (1606-1669)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"He painted souls, not just faces"</text>

                                    <!-- Life arc -->
                                    <rect x="53" y="171" width="954" height="194" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="214" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">THE LIFE ARC</text>

                                    <path d="M 120 320 Q 280 240 400 270 Q 520 220 640 290 Q 760 340 900 310" stroke="#8b5cf6" stroke-width="7" fill="none"/>
                                    <circle cx="200" cy="295" r="14" fill="#10b981"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#888" font-size="25">RISE</text>
                                    <circle cx="450" cy="245" r="14" fill="#ffd700"/>
                                    <text x="450" y="335" text-anchor="middle" fill="#888" font-size="25">PEAK</text>
                                    <circle cx="700" cy="310" r="14" fill="#ef4444"/>
                                    <text x="700" y="345" text-anchor="middle" fill="#888" font-size="25">LOSS</text>
                                    <circle cx="920" cy="305" r="14" fill="#8b5cf6"/>
                                    <text x="920" y="340" text-anchor="middle" fill="#888" font-size="25">LEGEND</text>

                                    <!-- His approach -->
                                    <rect x="40" y="388" width="500" height="145" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="290" y="432" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">OTHER BAROQUE ARTISTS</text>
                                    <text x="290" y="474" text-anchor="middle" fill="#888" font-size="27">Drama through action</text>
                                    <text x="290" y="505" text-anchor="middle" fill="#888" font-size="27">Violence, movement</text>

                                    <rect x="560" y="388" width="500" height="145" rx="27" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="810" y="432" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">REMBRANDT</text>
                                    <text x="810" y="474" text-anchor="middle" fill="#fff" font-size="27">Drama in quiet moments</text>
                                    <text x="810" y="505" text-anchor="middle" fill="#fff" font-size="27">Thought, reflection</text>

                                    <!-- Legacy -->
                                    <rect x="106" y="558" width="848" height="121" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">THE IRONY</text>
                                    <text x="550" y="643" text-anchor="middle" fill="#fff" font-size="29">Died poor and forgotten • Now among the greatest artists ever</text>
                                    <text x="550" y="674" text-anchor="middle" fill="#888" font-size="27">90+ self-portraits documenting his own aging</text>
                                </svg>`,
                                caption: "From riches to rags to immortality"
                            }
                        },
                        {
                            type: "concept",
                            title: "Rembrandt's Unique Approach",
                            content: "**LIGHT AS PSYCHOLOGY**\nRembrandt used light differently than Caravaggio. Where Caravaggio's light is theatrical spotlighting, Rembrandt's glows from within. His faces are lit as if by inner fire—the light of thought, wisdom, or spiritual depth.\n\n**THE SELF-PORTRAITS**\nRembrandt painted over 90 self-portraits across 40 years—the most sustained autobiography in art. We watch him age, fail, grieve, and grow wise. No other artist has documented their own journey so honestly.\n\n**IMPASTO TECHNIQUE**\nIn his late work, Rembrandt applied paint so thickly you can see individual brushstrokes and even fingerprints. Up close, it looks rough. Step back, and it glows with life.\n\n**PSYCHOLOGICAL DEPTH**\nHis subjects aren't posing—they're thinking. You feel like you're interrupting a private moment. This intimacy is unique to Rembrandt.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="41">REMBRANDT'S UNIQUE APPROACH</text>

                                    <rect x="40" y="122" width="500" height="182" rx="27" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="290" y="166" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">LIGHT AS PSYCHOLOGY</text>
                                    <text x="290" y="214" text-anchor="middle" fill="#fff" font-size="27">Not theatrical spotlight</text>
                                    <text x="290" y="251" text-anchor="middle" fill="#fff" font-size="27">but inner glow</text>
                                    <text x="290" y="287" text-anchor="middle" fill="#888" font-size="25">Light of thought, wisdom</text>

                                    <rect x="560" y="122" width="500" height="182" rx="27" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="810" y="166" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">90+ SELF-PORTRAITS</text>
                                    <text x="810" y="214" text-anchor="middle" fill="#fff" font-size="27">40 years documented</text>
                                    <text x="810" y="251" text-anchor="middle" fill="#fff" font-size="27">Aging, loss, wisdom</text>
                                    <text x="810" y="287" text-anchor="middle" fill="#888" font-size="25">Most honest autobiography</text>

                                    <rect x="40" y="328" width="500" height="182" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="290" y="372" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">IMPASTO TECHNIQUE</text>
                                    <text x="290" y="420" text-anchor="middle" fill="#fff" font-size="27">Thick, rough paint</text>
                                    <text x="290" y="456" text-anchor="middle" fill="#fff" font-size="27">Even fingerprints visible</text>
                                    <text x="290" y="493" text-anchor="middle" fill="#888" font-size="25">Up close = rough; far = glows</text>

                                    <rect x="560" y="328" width="500" height="182" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="372" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">PSYCHOLOGICAL DEPTH</text>
                                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="27">Subjects are THINKING</text>
                                    <text x="810" y="456" text-anchor="middle" fill="#fff" font-size="27">Not posing, but living</text>
                                    <text x="810" y="493" text-anchor="middle" fill="#888" font-size="25">Intimate, private moments</text>

                                    <!-- Masterpieces -->
                                    <rect x="100" y="534" width="900" height="145" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="578" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">MASTERPIECES</text>
                                    <text x="239" y="626" text-anchor="middle" fill="#ffd700" font-size="27">Night Watch</text>
                                    <text x="239" y="655" text-anchor="middle" fill="#888" font-size="25">1642</text>
                                    <text x="550" y="626" text-anchor="middle" fill="#ef4444" font-size="27">Self-Portraits</text>
                                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="25">1629-1669</text>
                                    <text x="822" y="626" text-anchor="middle" fill="#8b5cf6" font-size="27">Jewish Bride</text>
                                    <text x="822" y="655" text-anchor="middle" fill="#888" font-size="25">1667</text>
                                </svg>`,
                                caption: "Rembrandt invented psychological portraiture"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What makes Rembrandt's use of light different from Caravaggio's?",
                            options: [
                                { text: "Rembrandt never used shadows", correct: false },
                                { text: "Caravaggio's light is theatrical spotlighting; Rembrandt's seems to glow from within", correct: true },
                                { text: "Rembrandt only painted in daylight", correct: false },
                                { text: "There is no difference", correct: false }
                            ],
                            explanation: "While both artists used dramatic light and shadow, their approach differed fundamentally. Caravaggio's tenebrism creates theatrical spotlight effects—like a stage light. Rembrandt's light seems to emanate from within his subjects, suggesting inner depth, thought, and spiritual life. It's the difference between illumination and revelation."
                        }
                    ]
                },

                // ========================================
                // LESSON 5: VERMEER
                // ========================================
                {
                    id: 5,
                    title: "Vermeer: Poet of Light",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Mystery of Vermeer",
                            content: "Johannes Vermeer (1632-1675) left only 34 paintings. Yet he's considered one of the greatest artists who ever lived.\n\nWhere Rembrandt showed psychological depth, Vermeer captured perfect, suspended moments. A woman reading a letter. Light falling through a window. Time itself seems to stop.\n\n**The Mystery:**\nVermeer was virtually unknown after his death for 200 years. We know almost nothing about his life. How he achieved his luminous effects remains debated—did he use a camera obscura? We may never know.\n\n**What We Know:**\n• Born in Delft, lived there his whole life\n• Ran an inn and dealt in art\n• Only 34 confirmed paintings\n• Died in debt, leaving 11 children\n• Rediscovered in 1866 and now priceless",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="42">VERMEER (1632-1675)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"Only 34 paintings, yet among the greatest ever"</text>

                                    <rect x="40" y="171" width="500" height="206" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="290" y="219" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">THE MYSTERY</text>
                                    <text x="290" y="268" text-anchor="middle" fill="#fff" font-size="27">Unknown for 200 years</text>
                                    <text x="290" y="304" text-anchor="middle" fill="#fff" font-size="27">Almost no life records</text>
                                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="27">Camera obscura?</text>
                                    <text x="290" y="372" text-anchor="middle" fill="#888" font-size="25">Rediscovered 1866</text>

                                    <rect x="560" y="171" width="500" height="206" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="810" y="219" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">THE NUMBERS</text>
                                    <text x="810" y="268" text-anchor="middle" fill="#fff" font-size="27">34 confirmed paintings</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#fff" font-size="27">11 children</text>
                                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="27">Died in debt</text>
                                    <text x="810" y="372" text-anchor="middle" fill="#888" font-size="25">Now priceless</text>

                                    <rect x="106" y="401" width="848" height="121" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="444" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">WHAT MAKES HIM SPECIAL</text>
                                    <text x="550" y="493" text-anchor="middle" fill="#fff" font-size="29">Perfect, suspended moments • Time seems to stop</text>
                                    <text x="550" y="522" text-anchor="middle" fill="#888" font-size="27">Light becomes poetry</text>

                                    <rect x="106" y="546" width="848" height="85" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#fff" font-size="29">Girl with a Pearl Earring • The Milkmaid • The Art of Painting</text>
                                </svg>`,
                                caption: "The most mysterious of the Dutch Masters"
                            }
                        },
                        {
                            type: "quiz",
                            question: "How many paintings did Vermeer leave behind?",
                            options: [
                                { text: "Over 200, like Rembrandt", correct: false },
                                { text: "About 90, like his self-portraits alone", correct: false },
                                { text: "Only 34 confirmed paintings", correct: true },
                                { text: "Hundreds, but most were destroyed", correct: false }
                            ],
                            explanation: "Vermeer left only 34 confirmed paintings—an extraordinarily small output compared to other masters. This rarity, combined with their quality, makes each work precious. He worked slowly and meticulously, sometimes spending months on a single painting. Despite dying in debt and obscurity, his work is now among the most valuable in the world."
                        }
                    ]
                },

                // ========================================
                // LESSON 6: ROCOCO
                // ========================================
                {
                    id: 6,
                    title: "Rococo: Elegance After Drama",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "From Thunder to Champagne",
                            content: "After 100 years of Baroque drama, European aristocrats wanted something lighter. Rococo (c. 1700-1780) replaced thunder with champagne.\n\n**THE SHIFT:**\n• From dark churches to bright salons\n• From religious ecstasy to romantic love\n• From overwhelming scale to intimate charm\n• From serious to playful\n\nRococo originated in France during the reign of Louis XV, spreading to Austria, Germany, and beyond. It decorated palaces with curves, shells, and pastel colors. Its subjects were aristocratic pleasures: garden parties, flirtation, music.\n\n**KEY ARTISTS:**\n• Watteau - invented the 'fête galante' (elegant party scene)\n• Boucher - sensuous mythological scenes\n• Fragonard - The Swing and romantic playfulness",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="42">ROCOCO (c. 1700-1780)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"From thunder to champagne"</text>

                                    <!-- Baroque vs Rococo -->
                                    <rect x="40" y="171" width="500" height="218" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="290" y="214" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">BAROQUE</text>
                                    <text x="290" y="256" text-anchor="middle" fill="#888" font-size="27">Dark churches</text>
                                    <text x="290" y="292" text-anchor="middle" fill="#888" font-size="27">Religious ecstasy</text>
                                    <text x="290" y="328" text-anchor="middle" fill="#888" font-size="27">Overwhelming scale</text>
                                    <text x="290" y="364" text-anchor="middle" fill="#888" font-size="27">Serious, dramatic</text>

                                    <text x="550" y="280" text-anchor="middle" fill="#666" font-size="47">→</text>

                                    <rect x="560" y="171" width="500" height="218" rx="27" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="810" y="214" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="31">ROCOCO</text>
                                    <text x="810" y="256" text-anchor="middle" fill="#fff" font-size="27">Bright salons</text>
                                    <text x="810" y="292" text-anchor="middle" fill="#fff" font-size="27">Romantic love</text>
                                    <text x="810" y="328" text-anchor="middle" fill="#fff" font-size="27">Intimate charm</text>
                                    <text x="810" y="364" text-anchor="middle" fill="#fff" font-size="27">Playful, elegant</text>

                                    <!-- Key features -->
                                    <rect x="53" y="413" width="954" height="133" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="456" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">ROCOCO FEATURES</text>
                                    <text x="212" y="505" text-anchor="middle" fill="#fff" font-size="27">Curves &amp; shells</text>
                                    <text x="424" y="505" text-anchor="middle" fill="#fff" font-size="27">Pastel colors</text>
                                    <text x="636" y="505" text-anchor="middle" fill="#fff" font-size="27">Garden parties</text>
                                    <text x="848" y="505" text-anchor="middle" fill="#fff" font-size="27">Aristocratic play</text>

                                    <!-- Artists -->
                                    <rect x="106" y="570" width="848" height="109" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="611" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">KEY ARTISTS</text>
                                    <text x="265" y="655" text-anchor="middle" fill="#fff" font-size="27">Watteau - Fête galante</text>
                                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="27">Boucher - Mythology</text>
                                    <text x="795" y="655" text-anchor="middle" fill="#fff" font-size="27">Fragonard - Romance</text>
                                </svg>`,
                                caption: "Aristocratic elegance replaced dramatic intensity"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was the main shift from Baroque to Rococo?",
                            options: [
                                { text: "Art became more religious and serious", correct: false },
                                { text: "Art moved from dramatic intensity to playful elegance and intimacy", correct: true },
                                { text: "Colors became darker and more somber", correct: false },
                                { text: "Sculpture replaced painting as the main art form", correct: false }
                            ],
                            explanation: "Rococo was a reaction against Baroque's overwhelming drama. Where Baroque art served Church and absolute monarchy with serious, intense imagery, Rococo served aristocratic pleasure with light, playful, elegant scenes. Think of it as the difference between a thundering cathedral and a champagne garden party."
                        }
                    ]
                },

                // ========================================
                // LESSON 7: RUBENS
                // ========================================
                {
                    id: 7,
                    title: "Rubens: Master of Grandeur",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Diplomat-Painter",
                            content: "Peter Paul Rubens (1577-1640) was the most successful artist of his age—painter, diplomat, businessman, and intellectual. His workshop produced over 1,400 paintings.\n\nRubens combined Italian grandeur with Flemish detail to create a style of overwhelming energy. His figures burst with life, his compositions swirl with movement, and his colors blaze with warmth.\n\n**Beyond Painting:**\n• Diplomat for multiple European courts\n• Fluent in six languages\n• Negotiated peace treaties\n• Ran a workshop like a factory\n• Corresponded with the greatest minds of his age",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 824" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="824" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">RUBENS (1577-1640)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"The most successful artist of his age"</text>

                                    <rect x="40" y="171" width="500" height="206" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="290" y="214" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">THE PAINTER</text>
                                    <text x="290" y="263" text-anchor="middle" fill="#fff" font-size="27">1,400+ paintings</text>
                                    <text x="290" y="299" text-anchor="middle" fill="#fff" font-size="27">Overwhelming energy</text>
                                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="27">Blazing colors</text>
                                    <text x="290" y="372" text-anchor="middle" fill="#888" font-size="25">Italian + Flemish fusion</text>

                                    <rect x="560" y="171" width="500" height="206" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="214" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">THE DIPLOMAT</text>
                                    <text x="810" y="263" text-anchor="middle" fill="#fff" font-size="27">6 languages fluent</text>
                                    <text x="810" y="299" text-anchor="middle" fill="#fff" font-size="27">Negotiated peace treaties</text>
                                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="27">Served multiple courts</text>
                                    <text x="810" y="372" text-anchor="middle" fill="#888" font-size="25">Intellectual network</text>

                                    <rect x="106" y="401" width="848" height="194" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="449" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">RUBENS' STYLE</text>
                                    <text x="550" y="498" text-anchor="middle" fill="#fff" font-size="29">Figures BURST with life • Compositions SWIRL with movement</text>
                                    <text x="550" y="539" text-anchor="middle" fill="#fff" font-size="29">Colors BLAZE with warmth • Everything in constant motion</text>
                                    <text x="550" y="582" text-anchor="middle" fill="#888" font-size="27">Mythologies • Hunting scenes • Royal portraits • Altarpieces</text>
                                </svg>`,
                                caption: "Painter, diplomat, businessman, intellectual"
                            }
                        },
                        {
                            type: "quiz",
                            question: "How many paintings did Rubens and his workshop produce?",
                            options: [
                                { text: "About 34, like Vermeer", correct: false },
                                { text: "About 90, like Rembrandt's self-portraits", correct: false },
                                { text: "Over 1,400 paintings", correct: true },
                                { text: "Only 10 major works", correct: false }
                            ],
                            explanation: "Rubens ran his workshop like a well-oiled machine, producing over 1,400 paintings. He would design compositions and paint key sections (especially faces and hands) while assistants filled in backgrounds and details. This efficient system allowed him to take on massive commissions from courts across Europe while also serving as a diplomat."
                        }
                    ]
                },

                // ========================================
                // LESSON 8: BOOK 2 REVIEW
                // ========================================
                {
                    id: 8,
                    title: "Review: Baroque to Rococo",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Book 2 Complete: You've Mastered 1600-1800!",
                            content: "Congratulations! You've traveled through 200 years of art history, from the drama of Baroque to the elegance of Rococo.\n\n**YOUR JOURNEY:**\n1. Baroque Introduction - TEMPO mnemonic\n2. Caravaggio - The outlaw who invented tenebrism\n3. Bernini - Made marble breathe\n4. Rembrandt - The psychologist of paint\n5. Vermeer - 34 perfect paintings\n6. Rococo - From thunder to champagne\n7. Rubens - The diplomat-painter\n\n**THE BIG STORY:**\nArt moved from overwhelming religious drama (serving Church and Crown) to intimate aristocratic elegance (serving pleasure and beauty). Along the way, individual geniuses found their own paths within these movements.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <rect x="212" y="50" width="636" height="97" rx="34" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="5"/>
                                    <text x="550" y="110" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">🎓 BOOK 2 COMPLETE!</text>

                                    <text x="550" y="183" text-anchor="middle" fill="#fff" font-weight="bold" font-size="34">YOUR BAROQUE-ROCOCO JOURNEY</text>

                                    <!-- Artists grid -->
                                    <rect x="40" y="219" width="240" height="121" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="160" y="268" text-anchor="middle" fill="#ef4444" font-size="29">Caravaggio</text>
                                    <text x="160" y="304" text-anchor="middle" fill="#888" font-size="25">Tenebrism</text>

                                    <rect x="297" y="219" width="225" height="121" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="408" y="268" text-anchor="middle" fill="#f59e0b" font-size="29">Bernini</text>
                                    <text x="408" y="304" text-anchor="middle" fill="#888" font-size="25">Sculpture</text>

                                    <rect x="541" y="219" width="225" height="121" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="652" y="268" text-anchor="middle" fill="#8b5cf6" font-size="29">Rembrandt</text>
                                    <text x="652" y="304" text-anchor="middle" fill="#888" font-size="25">Psychology</text>

                                    <rect x="785" y="219" width="225" height="121" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="896" y="268" text-anchor="middle" fill="#3b82f6" font-size="29">Vermeer</text>
                                    <text x="896" y="304" text-anchor="middle" fill="#888" font-size="25">34 paintings</text>

                                    <rect x="297" y="364" width="225" height="121" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="408" y="413" text-anchor="middle" fill="#10b981" font-size="29">Rubens</text>
                                    <text x="408" y="449" text-anchor="middle" fill="#888" font-size="25">Grandeur</text>

                                    <rect x="541" y="364" width="225" height="121" rx="20" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="652" y="413" text-anchor="middle" fill="#ec4899" font-size="29">Rococo</text>
                                    <text x="652" y="449" text-anchor="middle" fill="#888" font-size="25">Elegance</text>

                                    <!-- Memory tool -->
                                    <rect x="100" y="510" width="900" height="85" rx="27" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="550" y="546" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">REMEMBER: TEMPO</text>
                                    <text x="550" y="582" text-anchor="middle" fill="#fff" font-size="29">Tenebrism • Emotion • Movement • Power • Overwhelm</text>

                                    <!-- Next -->
                                    <rect x="212" y="619" width="636" height="68" rx="27" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="550" y="665" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">→ NEXT: Book 3 - Modern &amp; Contemporary</text>
                                </svg>`,
                                caption: "From 1600 to 1800: Drama to elegance"
                            }
                        },
                        {
                            type: "quiz",
                            question: "FINAL QUESTION: What does TEMPO stand for in Baroque art?",
                            options: [
                                { text: "Texture, Energy, Mass, Proportion, Order", correct: false },
                                { text: "Tenebrism, Emotion, Movement, Power, Overwhelm", correct: true },
                                { text: "Time, Expression, Mood, Paint, Outline", correct: false },
                                { text: "Technique, Excellence, Mastery, Perfection, Originality", correct: false }
                            ],
                            explanation: "TEMPO captures the essence of Baroque art: Tenebrism (dramatic spotlight lighting), Emotion (gut-level feeling over intellectual thought), Movement (nothing static, always dynamic), Power (serving Church and Crown), and Overwhelm (designed to overcome the senses). This mnemonic helps you remember what makes Baroque different from Renaissance calm and Rococo playfulness."
                        }
                    ]
                }
            ]
        },
        // ============================================
        // BOOK 3: MODERN ART
        // ============================================
        {
            id: "art-1800-present",
            title: "Modern & Contemporary Art (1800-Present)",
            author: "Based on Robertson & Hutton",
            description: "From Impressionism to Contemporary Art, explore how artists challenged traditions and created new ways of seeing the world.",
            lessons: 10,
            duration: 70,
            progress: 0,
            category: "art-history",
            featured: true,
            lessonList: [
                // ========================================
                // LESSON 1: IMPRESSIONISM
                // ========================================
                {
                    id: 1,
                    title: "Impressionism: Capturing Light",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Revolution of 1874",
                            content: "In 1874, a group of artists in Paris held an exhibition that critics called a joke. Their paintings seemed unfinished—mere 'impressions' rather than complete works. But these artists weren't failing at traditional art. They were inventing something completely new.\n\n**What Changed Everything:**\n• Paint in tubes (portable for outdoor painting)\n• Trains (travel to countryside landscapes)\n• Photography (freed artists from realistic representation)\n• Japanese prints (new compositional ideas)\n\nImpressionism wasn't just a style—it was a complete rethinking of what painting could be. Instead of telling stories or depicting history, art could capture a fleeting moment of light and sensation.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="42">IMPRESSIONISM (1860s-1880s)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"Not a failure at old art—an invention of new art"</text>

                                    <!-- What made it possible -->
                                    <rect x="53" y="171" width="954" height="169" rx="27" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="550" y="214" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">WHAT MADE IT POSSIBLE</text>
                                    <text x="186" y="268" text-anchor="middle" fill="#fff" font-size="27">Paint tubes</text>
                                    <text x="186" y="304" text-anchor="middle" fill="#888" font-size="25">Portable art!</text>
                                    <text x="424" y="268" text-anchor="middle" fill="#fff" font-size="27">Trains</text>
                                    <text x="424" y="304" text-anchor="middle" fill="#888" font-size="25">Countryside access</text>
                                    <text x="663" y="268" text-anchor="middle" fill="#fff" font-size="27">Photography</text>
                                    <text x="663" y="304" text-anchor="middle" fill="#888" font-size="25">Freed from realism</text>
                                    <text x="902" y="268" text-anchor="middle" fill="#fff" font-size="27">Japanese art</text>
                                    <text x="902" y="304" text-anchor="middle" fill="#888" font-size="25">New compositions</text>

                                    <!-- Before vs After -->
                                    <rect x="53" y="364" width="451" height="158" rx="27" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="278" y="408" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="31">ACADEMIC ART</text>
                                    <text x="278" y="449" text-anchor="middle" fill="#888" font-size="27">Studio painting</text>
                                    <text x="278" y="486" text-anchor="middle" fill="#888" font-size="27">Smooth invisible brushwork</text>
                                    <text x="278" y="522" text-anchor="middle" fill="#888" font-size="27">Historical subjects</text>

                                    <rect x="557" y="364" width="451" height="158" rx="27" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="782" y="408" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">IMPRESSIONISM</text>
                                    <text x="782" y="449" text-anchor="middle" fill="#fff" font-size="27">Plein air (outdoors)</text>
                                    <text x="782" y="486" text-anchor="middle" fill="#fff" font-size="27">Visible bold brushstrokes</text>
                                    <text x="782" y="522" text-anchor="middle" fill="#fff" font-size="27">Modern life moments</text>

                                    <!-- Key artists -->
                                    <rect x="53" y="546" width="954" height="133" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="587" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">THE IMPRESSIONISTS</text>
                                    <text x="186" y="636" text-anchor="middle" fill="#fff" font-size="27">Monet</text>
                                    <text x="345" y="636" text-anchor="middle" fill="#fff" font-size="27">Renoir</text>
                                    <text x="504" y="636" text-anchor="middle" fill="#fff" font-size="27">Degas</text>
                                    <text x="663" y="636" text-anchor="middle" fill="#fff" font-size="27">Cassatt</text>
                                    <text x="848" y="636" text-anchor="middle" fill="#fff" font-size="27">Morisot</text>
                                    <text x="186" y="667" text-anchor="middle" fill="#888" font-size="25">Light master</text>
                                    <text x="345" y="667" text-anchor="middle" fill="#888" font-size="25">Joy/leisure</text>
                                    <text x="504" y="667" text-anchor="middle" fill="#888" font-size="25">Movement</text>
                                    <text x="663" y="667" text-anchor="middle" fill="#888" font-size="25">Intimacy</text>
                                    <text x="848" y="667" text-anchor="middle" fill="#888" font-size="25">Domestic</text>
                                </svg>`,
                                caption: "Impressionism emerged from technological and cultural changes"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: LIGHT",
                            content: "Remember the 5 key aspects of Impressionism with LIGHT:\n\n**L - LOOSE Brushwork**\nVisible, energetic strokes that capture the energy of a moment. The brush marks ARE part of the painting, not hidden.\n\n**I - INSTANT Moments**\nNot grand historical scenes but fleeting moments—a café, a garden, dancers, a train station. Modern life, right now.\n\n**G - GLOWING Color**\nBright, pure colors placed side by side to mix in your eye. No muddy mixing on the palette. Shadows aren't black—they're purple, blue, green.\n\n**H - HAUTE Plein Air (Outdoors)**\nPainting outside, directly from nature, capturing changing light as it happened. Speed was essential.\n\n**T - TRANSIENT Light**\nThe real subject is light itself—how it changes throughout the day, how it transforms surfaces, how it creates mood.\n\n**Say it:** 'Impressionism captures LIGHT—Loose brushwork, Instant moments, Glowing color, Haute plein air, Transient light.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="47">L I G H T</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="34">Remember Impressionism in 5 letters</text>

                                    <!-- L -->
                                    <rect x="53" y="171" width="186" height="242" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="146" y="224" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="51">L</text>
                                    <text x="146" y="268" text-anchor="middle" fill="#3b82f6" font-size="27">LOOSE</text>
                                    <text x="146" y="311" text-anchor="middle" fill="#fff" font-size="25">Visible</text>
                                    <text x="146" y="340" text-anchor="middle" fill="#fff" font-size="25">brushwork</text>
                                    <text x="146" y="388" text-anchor="middle" fill="#888" font-size="25">Energy in</text>
                                    <text x="146" y="413" text-anchor="middle" fill="#888" font-size="25">strokes</text>

                                    <!-- I -->
                                    <rect x="252" y="171" width="186" height="242" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="345" y="224" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="51">I</text>
                                    <text x="345" y="268" text-anchor="middle" fill="#f59e0b" font-size="27">INSTANT</text>
                                    <text x="345" y="311" text-anchor="middle" fill="#fff" font-size="25">Fleeting</text>
                                    <text x="345" y="340" text-anchor="middle" fill="#fff" font-size="25">moments</text>
                                    <text x="345" y="388" text-anchor="middle" fill="#888" font-size="25">Modern</text>
                                    <text x="345" y="413" text-anchor="middle" fill="#888" font-size="25">life</text>

                                    <!-- G -->
                                    <rect x="451" y="171" width="186" height="242" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="544" y="224" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="51">G</text>
                                    <text x="544" y="268" text-anchor="middle" fill="#10b981" font-size="27">GLOWING</text>
                                    <text x="544" y="311" text-anchor="middle" fill="#fff" font-size="25">Bright</text>
                                    <text x="544" y="340" text-anchor="middle" fill="#fff" font-size="25">pure colors</text>
                                    <text x="544" y="388" text-anchor="middle" fill="#888" font-size="25">Mix in</text>
                                    <text x="544" y="413" text-anchor="middle" fill="#888" font-size="25">your eye</text>

                                    <!-- H -->
                                    <rect x="650" y="171" width="186" height="242" rx="27" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="742" y="224" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="51">H</text>
                                    <text x="742" y="268" text-anchor="middle" fill="#ec4899" font-size="25">HAUTE AIR</text>
                                    <text x="742" y="311" text-anchor="middle" fill="#fff" font-size="25">Outdoor</text>
                                    <text x="742" y="340" text-anchor="middle" fill="#fff" font-size="25">painting</text>
                                    <text x="742" y="388" text-anchor="middle" fill="#888" font-size="25">Direct from</text>
                                    <text x="742" y="413" text-anchor="middle" fill="#888" font-size="25">nature</text>

                                    <!-- T -->
                                    <rect x="848" y="171" width="172" height="242" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="933" y="224" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="51">T</text>
                                    <text x="933" y="268" text-anchor="middle" fill="#8b5cf6" font-size="25">TRANSIENT</text>
                                    <text x="933" y="311" text-anchor="middle" fill="#fff" font-size="25">Changing</text>
                                    <text x="933" y="340" text-anchor="middle" fill="#fff" font-size="25">light</text>
                                    <text x="933" y="388" text-anchor="middle" fill="#888" font-size="25">Real</text>
                                    <text x="933" y="413" text-anchor="middle" fill="#888" font-size="25">subject</text>

                                    <!-- Phrase -->
                                    <rect x="100" y="449" width="900" height="109" rx="27" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="550" y="498" text-anchor="middle" fill="#fff" font-size="31">"Impressionism captures LIGHT—</text>
                                    <text x="550" y="534" text-anchor="middle" fill="#fff" font-size="31">Loose brushwork, Instant moments, Glowing color, Haute air, Transient"</text>

                                    <!-- Timeline -->
                                    <rect x="100" y="582" width="900" height="97" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="626" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">IMPRESSIONIST ERA: 1860s-1880s</text>
                                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="29">Paris → The world • Still the most popular art movement today</text>
                                </svg>`,
                                caption: "LIGHT: Your key to remembering Impressionism"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why did critics originally call these artists 'Impressionists' as an insult?",
                            options: [
                                { text: "They made a strong impression on viewers", correct: false },
                                { text: "Their paintings seemed unfinished—mere 'impressions' rather than complete works", correct: true },
                                { text: "They impressed the art academy", correct: false },
                                { text: "They used impressive techniques", correct: false }
                            ],
                            explanation: "The term 'Impressionism' was originally an insult, coined by critic Louis Leroy after seeing Monet's 'Impression, Sunrise' (1872). He mocked the painting as just a rough 'impression' rather than a finished work. The artists embraced the name, turning an insult into a badge of honor."
                        },
                        {
                            type: "concept",
                            title: "Lesson 1 Summary: Impressionism",
                            content: "**THE BIG PICTURE:**\nImpressionism (1860s-1880s) was the first truly modern art movement. Instead of painting idealized historical scenes in studios, artists went outside to capture fleeting moments of modern life as they actually saw them.\n\n**WHAT MADE IT POSSIBLE:**\n• Paint in tubes (portable)\n• Railways (access to countryside)\n• Photography (freed art from realistic recording)\n• Japanese prints (new compositional ideas)\n\n**KEY TECHNIQUES:**\n• Visible brushstrokes\n• Pure colors that mix in the eye\n• No black—colored shadows\n• Plein air (outdoor) painting\n\n**REMEMBER: LIGHT**\nLoose brushwork, Instant moments, Glowing color, Haute plein air, Transient light\n\n**THE LEGACY:**\nOpened the door for all modern art. If painting didn't have to look 'finished' or depict important subjects, what else could it do?",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 824" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="824" fill="#1a1a2e"/>

                                    <rect x="265" y="50" width="530" height="85" rx="34" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="550" y="105" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="42">✓ LESSON 1 COMPLETE</text>

                                    <rect x="40" y="159" width="500" height="182" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="290" y="200" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">KEY ARTISTS</text>
                                    <text x="290" y="243" text-anchor="middle" fill="#fff" font-size="27">Monet (light master)</text>
                                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="27">Renoir (joy &amp; leisure)</text>
                                    <text x="290" y="316" text-anchor="middle" fill="#fff" font-size="27">Degas (movement)</text>

                                    <rect x="560" y="159" width="500" height="182" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="810" y="200" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">TECHNIQUES</text>
                                    <text x="810" y="243" text-anchor="middle" fill="#fff" font-size="27">Visible brushstrokes</text>
                                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="27">Pure color (no mixing)</text>
                                    <text x="810" y="316" text-anchor="middle" fill="#fff" font-size="27">Colored shadows</text>

                                    <rect x="53" y="364" width="954" height="85" rx="27" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="550" y="401" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">REMEMBER: LIGHT</text>
                                    <text x="550" y="437" text-anchor="middle" fill="#fff" font-size="29">Loose • Instant • Glowing • Haute air • Transient</text>

                                    <rect x="106" y="474" width="848" height="133" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="515" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">THE LEGACY</text>
                                    <text x="550" y="558" text-anchor="middle" fill="#fff" font-size="29">Opened the door for ALL modern art</text>
                                    <text x="550" y="594" text-anchor="middle" fill="#888" font-size="27">If art doesn't have to be "finished," what else can it become?</text>
                                </svg>`,
                                caption: "Impressionism started the modern art revolution"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 2: POST-IMPRESSIONISM
                // ========================================
                {
                    id: 2,
                    title: "Post-Impressionism: Beyond the Moment",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Four Giants Who Shaped Modern Art",
                            content: "By the 1880s, some artists felt Impressionism didn't go far enough. They loved its freedom but wanted MORE—more structure, more emotion, more meaning.\n\n**THE FOUR POST-IMPRESSIONIST GIANTS:**\n\n• **CÉZANNE** - 'I want to make Impressionism solid'\n• **VAN GOGH** - 'I want to express emotion through color'\n• **GAUGUIN** - 'I want to escape to primitive simplicity'\n• **SEURAT** - 'I want to make Impressionism scientific'\n\nEach took Impressionism in a radically different direction. Together, they created the foundations for almost every modern art movement that followed: Cubism, Expressionism, Abstraction, and more.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="79" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="42">POST-IMPRESSIONISM (1880s-1900s)</text>
                                    <text x="550" y="127" text-anchor="middle" fill="#888" font-size="31">"Beyond the fleeting moment"</text>

                                    <!-- Cézanne -->
                                    <rect x="40" y="159" width="500" height="169" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="290" y="202" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">CÉZANNE</text>
                                    <text x="290" y="243" text-anchor="middle" fill="#fff" font-size="29">"Father of Modern Art"</text>
                                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="27">Make it SOLID</text>
                                    <text x="290" y="316" text-anchor="middle" fill="#888" font-size="25">→ Led to Cubism</text>

                                    <!-- Van Gogh -->
                                    <rect x="560" y="159" width="500" height="169" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="810" y="202" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">VAN GOGH</text>
                                    <text x="810" y="243" text-anchor="middle" fill="#fff" font-size="29">"Emotion through color"</text>
                                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="27">Make it FEEL</text>
                                    <text x="810" y="316" text-anchor="middle" fill="#888" font-size="25">→ Led to Expressionism</text>

                                    <!-- Gauguin -->
                                    <rect x="40" y="352" width="500" height="169" rx="27" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="290" y="396" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="34">GAUGUIN</text>
                                    <text x="290" y="437" text-anchor="middle" fill="#fff" font-size="29">"Escape to primitive"</text>
                                    <text x="290" y="478" text-anchor="middle" fill="#fff" font-size="27">Make it SYMBOLIC</text>
                                    <text x="290" y="510" text-anchor="middle" fill="#888" font-size="25">→ Led to Symbolism</text>

                                    <!-- Seurat -->
                                    <rect x="560" y="352" width="500" height="169" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="396" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">SEURAT</text>
                                    <text x="810" y="437" text-anchor="middle" fill="#fff" font-size="29">"Scientific Impressionism"</text>
                                    <text x="810" y="478" text-anchor="middle" fill="#fff" font-size="27">Make it PRECISE</text>
                                    <text x="810" y="510" text-anchor="middle" fill="#888" font-size="25">→ Led to Pointillism</text>

                                    <!-- Legacy -->
                                    <rect x="106" y="546" width="848" height="133" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="594" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">TOGETHER THEY CREATED THE FOUNDATIONS FOR:</text>
                                    <text x="550" y="643" text-anchor="middle" fill="#fff" font-size="29">Cubism • Expressionism • Abstraction • Fauvism • Symbolism</text>
                                </svg>`,
                                caption: "Four artists, four directions, all modern art flows from them"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Why is Cézanne called the 'Father of Modern Art'?",
                            options: [
                                { text: "He invented photography", correct: false },
                                { text: "He broke forms into geometric shapes, directly leading to Cubism", correct: true },
                                { text: "He was the oldest of the Post-Impressionists", correct: false },
                                { text: "He sold the most paintings", correct: false }
                            ],
                            explanation: "Cézanne wanted to 'make Impressionism solid'—to give it structure. He broke natural forms into geometric shapes (cylinders, spheres, cones), analyzing how objects exist in space. This approach directly influenced Picasso and Braque when they invented Cubism. Cézanne showed that painting could be about structure and analysis, not just capturing light."
                        }
                    ]
                },

                // ========================================
                // LESSON 3: EXPRESSIONISM
                // ========================================
                {
                    id: 3,
                    title: "Expressionism: Emotion Over Reality",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "When Art Screamed",
                            content: "What if art didn't show what things LOOK like, but what they FEEL like?\n\nExpressionism (c. 1905-1920s) prioritized emotional truth over visual accuracy. Colors became symbolic—a sky could be green if that expressed anxiety. Faces could be distorted if that showed inner turmoil.\n\n**THE SCREAM as Symbol:**\nEdvard Munch's 'The Scream' (1893) became the movement's icon—not a realistic figure, but a visualization of existential dread. The wavy lines, garish colors, and distorted face express psychological experience that no realistic painting could capture.\n\n**Two Main Groups:**\n• Die Brücke (Germany) - Raw, primitive, intense\n• Der Blaue Reiter (Germany) - Spiritual, abstract, musical",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">EXPRESSIONISM (1905-1920s)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"Not what it looks like, but what it FEELS like"</text>

                                    <rect x="40" y="171" width="500" height="206" rx="27" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="290" y="219" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">DIE BRÜCKE</text>
                                    <text x="290" y="263" text-anchor="middle" fill="#fff" font-size="29">"The Bridge"</text>
                                    <text x="290" y="304" text-anchor="middle" fill="#fff" font-size="27">Raw, primitive, intense</text>
                                    <text x="290" y="340" text-anchor="middle" fill="#888" font-size="27">Kirchner, Nolde</text>
                                    <text x="290" y="372" text-anchor="middle" fill="#888" font-size="25">Dresden 1905</text>

                                    <rect x="560" y="171" width="500" height="206" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="219" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="34">DER BLAUE REITER</text>
                                    <text x="810" y="263" text-anchor="middle" fill="#fff" font-size="29">"The Blue Rider"</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#fff" font-size="27">Spiritual, abstract, musical</text>
                                    <text x="810" y="340" text-anchor="middle" fill="#888" font-size="27">Kandinsky, Marc, Klee</text>
                                    <text x="810" y="372" text-anchor="middle" fill="#888" font-size="25">Munich 1911</text>

                                    <rect x="106" y="401" width="848" height="230" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="449" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="34">EXPRESSIONIST TECHNIQUES</text>
                                    <text x="265" y="505" text-anchor="middle" fill="#fff" font-size="29">Distorted forms</text>
                                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="29">Symbolic colors</text>
                                    <text x="795" y="505" text-anchor="middle" fill="#fff" font-size="29">Harsh brushwork</text>
                                    <text x="265" y="546" text-anchor="middle" fill="#888" font-size="25">Bodies stretched,</text>
                                    <text x="265" y="570" text-anchor="middle" fill="#888" font-size="25">faces distorted</text>
                                    <text x="550" y="546" text-anchor="middle" fill="#888" font-size="25">Green = anxiety</text>
                                    <text x="550" y="570" text-anchor="middle" fill="#888" font-size="25">Red = passion</text>
                                    <text x="795" y="546" text-anchor="middle" fill="#888" font-size="25">Aggressive,</text>
                                    <text x="795" y="570" text-anchor="middle" fill="#888" font-size="25">emotional marks</text>
                                </svg>`,
                                caption: "Expressionism made inner emotional states visible"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was the main goal of Expressionist art?",
                            options: [
                                { text: "To accurately depict the natural world", correct: false },
                                { text: "To express emotional and psychological experience over visual accuracy", correct: true },
                                { text: "To create beautiful decorative art", correct: false },
                                { text: "To compete with photography", correct: false }
                            ],
                            explanation: "Expressionists believed that art should convey emotional truth, not visual truth. They distorted forms, used symbolic colors, and employed aggressive brushwork to make inner psychological states visible. 'The Scream' perfectly exemplifies this—it's not what anxiety looks like, it's what anxiety FEELS like."
                        }
                    ]
                },

                // ========================================
                // LESSON 4: CUBISM
                // ========================================
                {
                    id: 4,
                    title: "Cubism: Shattering Perspective",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Most Revolutionary Art Movement",
                            content: "In 1907, Picasso showed friends a painting so shocking some thought he'd gone mad. 'Les Demoiselles d'Avignon' shattered 500 years of Western art convention by showing multiple viewpoints simultaneously.\n\n**The Cubist Revolution:**\nSince the Renaissance, Western art used ONE viewpoint—as if seen through a window. Cubism asked: why? In real life, we see objects from multiple angles. Our brain assembles a complete picture from fragments. Why can't painting do the same?\n\n**Two Phases:**\n• Analytic Cubism (1908-1912): Break objects into geometric fragments\n• Synthetic Cubism (1912+): Rebuild using collage and flat shapes\n\n**The Founders:**\nPicasso and Braque worked so closely they called themselves 'roped together mountaineers'—sometimes they couldn't tell whose painting was whose.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="42">CUBISM (1907-1920s)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"Multiple viewpoints at once"</text>

                                    <!-- Traditional vs Cubist -->
                                    <rect x="53" y="171" width="451" height="182" rx="27" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="278" y="214" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="31">TRADITIONAL (500 years)</text>
                                    <rect x="172" y="243" width="212" height="85" rx="16" fill="rgba(107,114,128,0.3)" stroke="#6b7280"/>
                                    <text x="278" y="297" text-anchor="middle" fill="#888" font-size="27">ONE viewpoint</text>
                                    <text x="278" y="345" text-anchor="middle" fill="#888" font-size="25">Like a window</text>

                                    <rect x="557" y="171" width="451" height="182" rx="27" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="782" y="214" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">CUBISM</text>
                                    <!-- Fragmented cubist shapes inside the box -->
                                    <polygon points="620,250 660,265 650,310 605,300 615,260" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                                    <polygon points="670,245 720,260 710,305 665,295" fill="rgba(139,92,246,0.5)" stroke="#8b5cf6" stroke-width="2"/>
                                    <polygon points="730,255 770,275 755,315 720,300" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="782" y="297" text-anchor="middle" fill="#fff" font-size="27">MULTIPLE viewpoints</text>
                                    <text x="782" y="345" text-anchor="middle" fill="#888" font-size="25">All at once</text>

                                    <!-- Two phases -->
                                    <rect x="40" y="377" width="500" height="158" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="290" y="420" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">ANALYTIC (1908-12)</text>
                                    <text x="290" y="461" text-anchor="middle" fill="#fff" font-size="27">Break objects apart</text>
                                    <text x="290" y="498" text-anchor="middle" fill="#fff" font-size="27">Geometric fragments</text>
                                    <text x="290" y="527" text-anchor="middle" fill="#888" font-size="25">Muted browns/grays</text>

                                    <rect x="560" y="377" width="500" height="158" rx="27" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="810" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">SYNTHETIC (1912+)</text>
                                    <text x="810" y="461" text-anchor="middle" fill="#fff" font-size="27">Rebuild with collage</text>
                                    <text x="810" y="498" text-anchor="middle" fill="#fff" font-size="27">Flat, bold shapes</text>
                                    <text x="810" y="527" text-anchor="middle" fill="#888" font-size="25">Brighter colors</text>

                                    <!-- Founders -->
                                    <rect x="106" y="558" width="848" height="121" rx="27" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#fff" font-weight="bold" font-size="31">THE FOUNDERS</text>
                                    <text x="345" y="650" text-anchor="middle" fill="#8b5cf6" font-size="29">Picasso</text>
                                    <text x="550" y="650" text-anchor="middle" fill="#666" font-size="34">+</text>
                                    <text x="716" y="650" text-anchor="middle" fill="#8b5cf6" font-size="29">Braque</text>
                                </svg>`,
                                caption: "Cubism broke 500 years of single-viewpoint tradition"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What did Cubism do that was so revolutionary?",
                            options: [
                                { text: "Used brighter colors than before", correct: false },
                                { text: "Showed objects from multiple viewpoints simultaneously, breaking 500 years of single-perspective tradition", correct: true },
                                { text: "Only painted cubes", correct: false },
                                { text: "Rejected all color for black and white", correct: false }
                            ],
                            explanation: "Since the Renaissance, Western art used linear perspective—a single viewpoint, like looking through a window. Cubism shattered this by showing objects from multiple angles at once. A face might show both profile and front view simultaneously. This reflected how we actually experience objects—from multiple angles over time—rather than the artificial frozen moment of traditional perspective."
                        }
                    ]
                },

                // ========================================
                // LESSON 5: SURREALISM
                // ========================================
                {
                    id: 5,
                    title: "Surrealism: Dreams Made Visible",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Unlocking the Unconscious",
                            content: "What if art came directly from your dreams, bypassing rational thought entirely?\n\nSurrealism (1920s-1940s) was inspired by Freud's theories of the unconscious mind. The Surrealists believed that beneath our rational surface lies a deeper truth—and art could access it through dreams, automatism, and strange juxtapositions.\n\n**Key Techniques:**\n• Automatism - drawing/writing without conscious control\n• Dream imagery - depicting actual dreams\n• Unexpected juxtaposition - combining unrelated objects\n• Transformation - objects morphing into other things\n\n**Major Artists:**\n• Dalí - melting watches, hyper-realistic dreams\n• Magritte - philosophical puzzles in paint\n• Ernst - collage and frottage\n• Miró - biomorphic abstract forms",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="42">SURREALISM (1920s-1940s)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"More real than reality—super-real"</text>

                                    <rect x="53" y="171" width="954" height="169" rx="27" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="550" y="214" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="31">SURREALIST TECHNIQUES</text>
                                    <text x="199" y="268" text-anchor="middle" fill="#fff" font-size="27">Automatism</text>
                                    <text x="199" y="304" text-anchor="middle" fill="#888" font-size="25">No conscious control</text>
                                    <text x="451" y="268" text-anchor="middle" fill="#fff" font-size="27">Dream imagery</text>
                                    <text x="451" y="304" text-anchor="middle" fill="#888" font-size="25">Actual dreams</text>
                                    <text x="703" y="268" text-anchor="middle" fill="#fff" font-size="27">Juxtaposition</text>
                                    <text x="703" y="304" text-anchor="middle" fill="#888" font-size="25">Unrelated objects</text>
                                    <text x="902" y="268" text-anchor="middle" fill="#fff" font-size="27">Transform</text>
                                    <text x="902" y="304" text-anchor="middle" fill="#888" font-size="25">Morphing forms</text>

                                    <rect x="40" y="364" width="500" height="133" rx="27" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="290" y="408" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">DALÍ</text>
                                    <text x="290" y="449" text-anchor="middle" fill="#fff" font-size="27">Melting watches</text>
                                    <text x="290" y="486" text-anchor="middle" fill="#888" font-size="25">Hyper-realistic dreams</text>

                                    <rect x="560" y="364" width="500" height="133" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="408" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">MAGRITTE</text>
                                    <text x="810" y="449" text-anchor="middle" fill="#fff" font-size="27">"This is not a pipe"</text>
                                    <text x="810" y="486" text-anchor="middle" fill="#888" font-size="25">Philosophical puzzles</text>

                                    <rect x="106" y="522" width="848" height="109" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="550" y="563" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="31">INSPIRED BY FREUD</text>
                                    <text x="550" y="607" text-anchor="middle" fill="#fff" font-size="29">The unconscious mind holds deeper truths than reason</text>
                                </svg>`,
                                caption: "Surrealism accessed the unconscious through dreams and automatism"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What psychological theory inspired Surrealism?",
                            options: [
                                { text: "Behaviorism", correct: false },
                                { text: "Freud's theories of the unconscious mind", correct: true },
                                { text: "Cognitive psychology", correct: false },
                                { text: "Social psychology", correct: false }
                            ],
                            explanation: "Surrealism was directly inspired by Sigmund Freud's theories about the unconscious mind and dreams. The Surrealists believed that beneath our rational, conscious surface lies a deeper psychological truth that art could access through dreams, automatic writing/drawing, and strange juxtapositions. They wanted to create art that was 'more real than reality'—hence 'sur-real' (super-real)."
                        }
                    ]
                },

                // ========================================
                // LESSON 6: ABSTRACT EXPRESSIONISM
                // ========================================
                {
                    id: 6,
                    title: "Abstract Expressionism: Action and Color",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "America Takes the Lead",
                            content: "After World War II, the center of the art world shifted from Paris to New York. Abstract Expressionism (1940s-1950s) was the first major American art movement—and it conquered the world.\n\n**Two Main Approaches:**\n\n**ACTION PAINTING (Pollock, de Kooning)**\nThe physical act of painting IS the subject. Dripping, splashing, gestural marks that record the artist's movements and energy.\n\n**COLOR FIELD (Rothko, Newman)**\nVast areas of color that create emotional/spiritual experiences. The painting becomes an environment you enter.\n\n**What They Shared:**\n• SCALE - huge canvases that overwhelm\n• ABSTRACTION - no recognizable subjects\n• EXPRESSION - direct emotional communication\n• AUTHENTICITY - the artist's genuine inner experience",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">ABSTRACT EXPRESSIONISM</text>
                                    <text x="550" y="127" text-anchor="middle" fill="#888" font-size="31">(1940s-1950s) • New York School</text>

                                    <rect x="40" y="159" width="500" height="242" rx="27" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="290" y="202" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">ACTION PAINTING</text>
                                    <path d="M 101.3 267.7 Q 141.7 231.3 182.2 291.8 Q 222.7 243.3 263.2 279.6 Q 303.6 231.3 334.1 267.7" stroke="#ef4444" stroke-width="7" fill="none"/>
                                    <text x="290" y="328" text-anchor="middle" fill="#fff" font-size="27">The ACT of painting</text>
                                    <text x="290" y="364" text-anchor="middle" fill="#fff" font-size="27">Dripping, splashing</text>
                                    <text x="290" y="396" text-anchor="middle" fill="#888" font-size="25">Pollock, de Kooning</text>

                                    <rect x="560" y="159" width="500" height="242" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="202" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">COLOR FIELD</text>
                                    <rect x="636" y="231" width="278" height="121" rx="20" fill="url(#rothkoGrad)"/>
                                    <defs>
                                        <linearGradient id="" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#ef4444"/>
                                            <stop offset="50%" stop-color="#f59e0b"/>
                                            <stop offset="100%" stop-color="#8b5cf6"/>
                                        </linearGradient>
                                    </defs>
                                    <text x="810" y="384" text-anchor="middle" fill="#fff" font-size="27">Vast areas of color</text>
                                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="25">Rothko, Newman</text>

                                    <rect x="53" y="425" width="954" height="133" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="469" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">WHAT THEY SHARED</text>
                                    <text x="186" y="517" text-anchor="middle" fill="#fff" font-size="27">SCALE</text>
                                    <text x="186" y="546" text-anchor="middle" fill="#888" font-size="25">Huge canvases</text>
                                    <text x="398" y="517" text-anchor="middle" fill="#fff" font-size="27">ABSTRACTION</text>
                                    <text x="398" y="546" text-anchor="middle" fill="#888" font-size="25">No subjects</text>
                                    <text x="663" y="517" text-anchor="middle" fill="#fff" font-size="27">EXPRESSION</text>
                                    <text x="663" y="546" text-anchor="middle" fill="#888" font-size="25">Direct emotion</text>
                                    <text x="875" y="517" text-anchor="middle" fill="#fff" font-size="27">AUTHENTICITY</text>
                                    <text x="875" y="546" text-anchor="middle" fill="#888" font-size="25">Inner truth</text>

                                    <rect x="106" y="582" width="848" height="97" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="626" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">THE SHIFT</text>
                                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="29">Art world center moved: Paris → New York</text>
                                </svg>`,
                                caption: "Two approaches united by scale, abstraction, and emotional authenticity"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What distinguished 'Action Painting' from 'Color Field' painting?",
                            options: [
                                { text: "Action Painting used only black and white", correct: false },
                                { text: "Action Painting emphasized the physical act of painting; Color Field created vast emotional color environments", correct: true },
                                { text: "Action Painting was done quickly; Color Field took years", correct: false },
                                { text: "They were exactly the same approach", correct: false }
                            ],
                            explanation: "While both were Abstract Expressionist, they had different focuses. Action Painters like Pollock made the physical act of painting visible—drips, gestures, energy. Color Field painters like Rothko created vast areas of color meant to envelop the viewer in emotional/spiritual experience. Pollock said 'I am the painting'; Rothko wanted viewers to 'cry' before his canvases."
                        }
                    ]
                },

                // ========================================
                // LESSON 7: POP ART
                // ========================================
                {
                    id: 7,
                    title: "Pop Art: Art Meets Consumer Culture",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "When Soup Cans Became Art",
                            content: "If Abstract Expressionism was about deep inner truth, Pop Art asked: what about OUTER truth? What about the world we actually live in—full of ads, celebrities, and consumer products?\n\n**The Pop Art Revolution:**\nIn the early 1960s, artists started painting soup cans, comic strips, and movie stars. Critics were outraged. How could this be art? But that was exactly the point.\n\n**Key Ideas:**\n• High art vs low culture distinction is meaningless\n• Mass media images ARE our visual landscape\n• Repetition reveals how we consume images\n• Art can be cool, ironic, and fun—not just serious\n\n**Key Artists:**\n• Andy Warhol - Campbell's Soup, Marilyn, celebrity culture\n• Roy Lichtenstein - comic book paintings\n• Jasper Johns - flags and targets\n• Claes Oldenburg - giant soft sculptures of everyday objects",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">POP ART (1950s-1960s)</text>
                                    <text x="550" y="134" text-anchor="middle" fill="#888" font-size="31">"Art should be for everyone, about everything"</text>

                                    <rect x="40" y="171" width="500" height="194" rx="27" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="290" y="214" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">WARHOL</text>
                                    <rect x="133" y="239" width="119" height="97" rx="13" fill="#ef4444" stroke="#ffd700" stroke-width="5"/>
                                    <text x="191" y="297" text-anchor="middle" fill="#fff" font-size="29">SOUP</text>
                                    <text x="305" y="280" fill="#fff" font-size="27">Soup cans</text>
                                    <text x="305" y="311" fill="#fff" font-size="27">Marilyn</text>
                                    <text x="305" y="343" fill="#888" font-size="25">Repetition</text>

                                    <rect x="560" y="171" width="500" height="194" rx="27" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="810" y="214" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="31">LICHTENSTEIN</text>
                                    <rect x="623" y="239" width="133" height="97" rx="13" fill="#3b82f6"/>
                                    <circle cx="868" cy="268" r="8" fill="#fff"/>
                                    <circle cx="920" cy="268" r="8" fill="#fff"/>
                                    <circle cx="960" cy="268" r="8" fill="#fff"/>
                                    <circle cx="868" cy="304" r="8" fill="#fff"/>
                                    <circle cx="920" cy="304" r="8" fill="#fff"/>
                                    <circle cx="960" cy="304" r="8" fill="#fff"/>
                                    <text x="822" y="280" fill="#fff" font-size="27">Comics</text>
                                    <text x="822" y="311" fill="#fff" font-size="27">Ben-Day dots</text>
                                    <text x="822" y="343" fill="#888" font-size="25">BLAM! POW!</text>

                                    <rect x="53" y="388" width="954" height="133" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="432" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">POP ART IDEAS</text>
                                    <text x="199" y="481" text-anchor="middle" fill="#fff" font-size="27">No high/low</text>
                                    <text x="398" y="481" text-anchor="middle" fill="#fff" font-size="27">Mass media</text>
                                    <text x="596" y="481" text-anchor="middle" fill="#fff" font-size="27">Repetition</text>
                                    <text x="822" y="481" text-anchor="middle" fill="#fff" font-size="27">Irony &amp; fun</text>
                                    <text x="199" y="510" text-anchor="middle" fill="#888" font-size="25">distinction</text>
                                    <text x="398" y="510" text-anchor="middle" fill="#888" font-size="25">is our landscape</text>
                                    <text x="596" y="510" text-anchor="middle" fill="#888" font-size="25">exposes consumption</text>
                                    <text x="822" y="510" text-anchor="middle" fill="#888" font-size="25">not just serious</text>

                                    <rect x="106" y="546" width="848" height="85" rx="27" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#fff" font-size="29">Made art accessible, democratic, and questioned what art could be</text>
                                </svg>`,
                                caption: "Pop Art embraced consumer culture and mass media"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was radical about Warhol's soup can paintings?",
                            options: [
                                { text: "The soup was a new flavor", correct: false },
                                { text: "They elevated everyday commercial products to the status of fine art, questioning the high/low culture distinction", correct: true },
                                { text: "They were the first paintings ever made", correct: false },
                                { text: "They were painted on actual soup cans", correct: false }
                            ],
                            explanation: "By painting soup cans and Brillo boxes as seriously as the Old Masters painted religious scenes, Warhol challenged the entire hierarchy of what could be 'art.' He showed that our consumer products ARE our cultural icons, and that the distinction between 'high' and 'low' culture was artificial. Plus, repetition revealed how we mindlessly consume images in mass media."
                        }
                    ]
                },

                // ========================================
                // LESSON 8: MINIMALISM & CONCEPTUAL ART
                // ========================================
                {
                    id: 8,
                    title: "Minimalism & Conceptual Art",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Less is More / Ideas Over Objects",
                            content: "By the 1960s, two movements stripped art down to its essentials—but in opposite directions.\n\n**MINIMALISM: Pure Form**\nWhat's left when you remove everything unnecessary? Just pure shapes, colors, materials. A cube is just a cube. No symbolism, no emotion, no narrative—just the thing itself.\n• Donald Judd - industrial fabricated boxes\n• Dan Flavin - fluorescent light tubes\n• Carl Andre - floor tiles\n\n**CONCEPTUAL ART: Pure Idea**\nWhat if the IDEA is the artwork, and the object is irrelevant? Art could be a written instruction, a thought, a question.\n• Joseph Kosuth - One and Three Chairs (chair + photo + definition)\n• Sol LeWitt - 'The idea is the machine that makes the art'\n• Lawrence Weiner - Language as art",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#666" font-weight="bold" font-size="42">MINIMALISM &amp; CONCEPTUAL ART</text>
                                    <text x="550" y="127" text-anchor="middle" fill="#888" font-size="31">(1960s-1970s) • Stripping art to essentials</text>

                                    <rect x="40" y="159" width="500" height="230" rx="27" fill="rgba(107,114,128,0.15)" stroke="#6b7280"/>
                                    <text x="290" y="202" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="34">MINIMALISM</text>
                                    <text x="290" y="243" text-anchor="middle" fill="#fff" font-size="29">"What you see is what you see"</text>
                                    <rect x="186" y="268" width="93" height="85" fill="none" stroke="#6b7280" stroke-width="5"/>
                                    <rect x="292" y="268" width="93" height="85" fill="none" stroke="#6b7280" stroke-width="5"/>
                                    <text x="290" y="384" text-anchor="middle" fill="#888" font-size="25">Judd, Flavin, Andre</text>

                                    <rect x="560" y="159" width="500" height="230" rx="27" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="810" y="202" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="34">CONCEPTUAL</text>
                                    <text x="810" y="243" text-anchor="middle" fill="#fff" font-size="29">"The idea IS the art"</text>
                                    <text x="810" y="304" text-anchor="middle" fill="#8b5cf6" font-size="38">?</text>
                                    <text x="810" y="352" text-anchor="middle" fill="#888" font-size="27">Object optional</text>
                                    <text x="810" y="384" text-anchor="middle" fill="#888" font-size="25">Kosuth, LeWitt, Weiner</text>

                                    <rect x="40" y="413" width="500" height="109" rx="27" fill="rgba(107,114,128,0.1)" stroke="#6b7280"/>
                                    <text x="290" y="456" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="29">MINIMALIST MOTTO</text>
                                    <text x="290" y="498" text-anchor="middle" fill="#fff" font-size="27">"Less is more"</text>

                                    <rect x="560" y="413" width="500" height="109" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="810" y="456" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="29">CONCEPTUAL MOTTO</text>
                                    <text x="810" y="498" text-anchor="middle" fill="#fff" font-size="27">"Ideas over objects"</text>

                                    <rect x="106" y="546" width="848" height="85" rx="27" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="550" y="602" text-anchor="middle" fill="#fff" font-size="29">Both asked: what is the MINIMUM required for something to be art?</text>
                                </svg>`,
                                caption: "Two ways of stripping art to its essence"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What's the key difference between Minimalism and Conceptual Art?",
                            options: [
                                { text: "Minimalism is older than Conceptual Art", correct: false },
                                { text: "Minimalism focused on pure physical form; Conceptual Art made the idea primary, object secondary", correct: true },
                                { text: "Minimalism was American; Conceptual Art was European", correct: false },
                                { text: "They are the same thing", correct: false }
                            ],
                            explanation: "Both movements stripped art to essentials but in opposite directions. Minimalism said 'a cube is just a cube'—pure form, no meaning beyond the physical object. Conceptual Art said 'the idea IS the art'—the physical object could be instructions, words, or even absent. Sol LeWitt: 'The idea becomes the machine that makes the art.'"
                        }
                    ]
                },

                // ========================================
                // LESSON 9: CONTEMPORARY ART
                // ========================================
                {
                    id: 9,
                    title: "Contemporary Art: Anything Goes",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Art After Everything",
                            content: "After Duchamp put a urinal in a gallery, after Warhol painted soup cans, after Conceptualists declared ideas as art—what's left to rebel against?\n\n**Contemporary Art (1970s-Present)** is characterized by radical pluralism. There's no single dominant style or movement. Instead, anything can be art:\n\n• Video and digital media\n• Performance and body art\n• Installation and immersive environments\n• Street art and graffiti\n• Appropriation and remix culture\n• Global perspectives and identity politics\n\n**Key Question:** If anything can be art, what makes something ART? This question IS contemporary art—constantly negotiating boundaries, questioning institutions, engaging with real-world issues.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 852" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="852" fill="#1a1a2e"/>
                                    <text x="550" y="86" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">CONTEMPORARY ART</text>
                                    <text x="550" y="127" text-anchor="middle" fill="#888" font-size="31">(1970s-Present) • Radical pluralism</text>

                                    <rect x="40" y="159" width="320" height="133" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="202" text-anchor="middle" fill="#3b82f6" font-size="29">Video &amp; Digital</text>
                                    <text x="200" y="243" text-anchor="middle" fill="#888" font-size="25">Nam June Paik</text>
                                    <text x="200" y="272" text-anchor="middle" fill="#888" font-size="25">Bill Viola</text>

                                    <rect x="379" y="159" width="305" height="133" rx="20" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="550" y="202" text-anchor="middle" fill="#ec4899" font-size="29">Performance</text>
                                    <text x="550" y="243" text-anchor="middle" fill="#888" font-size="25">Marina Abramović</text>
                                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="25">Body as medium</text>

                                    <rect x="705" y="159" width="305" height="133" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="856" y="202" text-anchor="middle" fill="#8b5cf6" font-size="29">Installation</text>
                                    <text x="856" y="243" text-anchor="middle" fill="#888" font-size="25">Immersive spaces</text>
                                    <text x="856" y="272" text-anchor="middle" fill="#888" font-size="25">Site-specific</text>

                                    <rect x="212" y="311" width="305" height="133" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="363" y="355" text-anchor="middle" fill="#f59e0b" font-size="29">Street Art</text>
                                    <text x="363" y="396" text-anchor="middle" fill="#888" font-size="25">Banksy, Kaws</text>
                                    <text x="363" y="425" text-anchor="middle" fill="#888" font-size="25">Public space</text>

                                    <rect x="538" y="311" width="305" height="133" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="689" y="355" text-anchor="middle" fill="#10b981" font-size="29">Global Voices</text>
                                    <text x="689" y="396" text-anchor="middle" fill="#888" font-size="25">Identity politics</text>
                                    <text x="689" y="425" text-anchor="middle" fill="#888" font-size="25">Diverse perspectives</text>

                                    <rect x="100" y="469" width="900" height="158" rx="27" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="550" y="517" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">THE KEY QUESTION</text>
                                    <text x="550" y="563" text-anchor="middle" fill="#fff" font-size="29">If anything can be art... what makes something ART?</text>
                                    <text x="550" y="607" text-anchor="middle" fill="#888" font-size="27">This question IS contemporary art—constant boundary negotiation</text>
                                </svg>`,
                                caption: "No dominant style—pluralism and constant questioning"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What defines 'Contemporary Art' as a period?",
                            options: [
                                { text: "A specific style that all artists follow", correct: false },
                                { text: "Radical pluralism—no single dominant style, anything can be art", correct: true },
                                { text: "Only digital art made with computers", correct: false },
                                { text: "Art made in the last 10 years only", correct: false }
                            ],
                            explanation: "Unlike previous periods defined by a dominant style (Impressionism, Cubism, etc.), Contemporary Art is characterized by radical pluralism—the coexistence of video, performance, installation, street art, appropriation, and traditional media. The defining question becomes: if anything can be art, what makes something ART? This constant boundary negotiation is itself the defining feature."
                        }
                    ]
                },

                // ========================================
                // LESSON 10: REVIEW
                // ========================================
                {
                    id: 10,
                    title: "Review: Modern & Contemporary Art",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Book 3 Complete: You've Mastered Modern Art!",
                            content: "Congratulations! You've traveled through 200+ years of radical artistic revolution, from the first Impressionist exhibition to today's anything-goes contemporary scene.\n\n**YOUR JOURNEY:**\n1. Impressionism - LIGHT (capturing fleeting moments)\n2. Post-Impressionism - Four giants who shaped everything after\n3. Expressionism - Emotion over accuracy\n4. Cubism - Multiple viewpoints, shattering perspective\n5. Surrealism - Dreams and the unconscious\n6. Abstract Expressionism - Action and Color Fields\n7. Pop Art - Consumer culture as subject\n8. Minimalism & Conceptual - Stripping to essentials\n9. Contemporary - Radical pluralism\n\n**THE BIG STORY:**\nModern art is the story of expanding boundaries. Each movement asked 'what else can art be?' until finally the answer became 'anything.'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 1100 908" class="lesson-visual">
                                    <rect x="0" y="0" width="1100" height="908" fill="#1a1a2e"/>
                                    <rect x="212" y="50" width="636" height="97" rx="34" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="5"/>
                                    <text x="550" y="110" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="42">🎓 BOOK 3 COMPLETE!</text>

                                    <text x="550" y="183" text-anchor="middle" fill="#fff" font-weight="bold" font-size="34">200+ YEARS OF REVOLUTION</text>

                                    <!-- Timeline -->
                                    <line x1="106" y1="243" x2="954" y2="243" stroke="#666" stroke-width="5"/>

                                    <circle cx="208" cy="243" r="11" fill="#3b82f6"/>
                                    <text x="159" y="287" text-anchor="middle" fill="#888" font-size="25">Impressionism</text>

                                    <circle cx="347" cy="243" r="11" fill="#f59e0b"/>
                                    <text x="265" y="287" text-anchor="middle" fill="#888" font-size="25">Post-Imp</text>

                                    <circle cx="486" cy="243" r="11" fill="#ef4444"/>
                                    <text x="371" y="287" text-anchor="middle" fill="#888" font-size="25">Express</text>

                                    <circle cx="625" cy="243" r="11" fill="#8b5cf6"/>
                                    <text x="477" y="287" text-anchor="middle" fill="#888" font-size="25">Cubism</text>

                                    <circle cx="764" cy="243" r="11" fill="#ec4899"/>
                                    <text x="583" y="287" text-anchor="middle" fill="#888" font-size="25">Surreal</text>

                                    <circle cx="920" cy="243" r="11" fill="#10b981"/>
                                    <text x="689" y="287" text-anchor="middle" fill="#888" font-size="25">AbEx</text>

                                    <circle cx="1042" cy="243" r="11" fill="#ef4444"/>
                                    <text x="795" y="287" text-anchor="middle" fill="#888" font-size="25">Pop</text>

                                    <circle cx="1180" cy="243" r="11" fill="#6b7280"/>
                                    <text x="902" y="287" text-anchor="middle" fill="#888" font-size="25">Today</text>

                                    <!-- Key concepts -->
                                    <rect x="40" y="328" width="500" height="158" rx="27" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="290" y="372" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="29">KEY MNEMONIC</text>
                                    <text x="290" y="413" text-anchor="middle" fill="#fff" font-size="27">Impressionism = LIGHT</text>
                                    <text x="290" y="449" text-anchor="middle" fill="#888" font-size="25">Loose, Instant, Glowing</text>
                                    <text x="290" y="478" text-anchor="middle" fill="#888" font-size="25">Haute air, Transient</text>

                                    <rect x="560" y="328" width="500" height="158" rx="27" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="810" y="372" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="29">THE BIG STORY</text>
                                    <text x="810" y="413" text-anchor="middle" fill="#fff" font-size="27">Expanding boundaries</text>
                                    <text x="810" y="449" text-anchor="middle" fill="#fff" font-size="27">"What else can art be?"</text>
                                    <text x="810" y="478" text-anchor="middle" fill="#888" font-size="25">→ Finally: "Anything"</text>

                                    <!-- All books complete -->
                                    <rect x="100" y="510" width="900" height="169" rx="34" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="550" y="558" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="34">🏆 ALL 3 BOOKS COMPLETE!</text>
                                    <text x="550" y="607" text-anchor="middle" fill="#fff" font-size="29">Renaissance → Baroque → Modern</text>
                                    <text x="550" y="643" text-anchor="middle" fill="#888" font-size="27">600+ years of art history mastered!</text>
                                </svg>`,
                                caption: "You've mastered the entire story of Western art!"
                            }
                        },
                        {
                            type: "quiz",
                            question: "FINAL QUESTION: What is the 'big story' of modern art?",
                            options: [
                                { text: "Art got worse over time", correct: false },
                                { text: "Each movement expanded the boundaries of what art could be, until the answer became 'anything'", correct: true },
                                { text: "Art returned to classical traditions", correct: false },
                                { text: "Only abstract art is valid", correct: false }
                            ],
                            explanation: "Modern art is the story of expanding boundaries. Impressionists asked 'can art be unfinished-looking?' Cubists asked 'can art show multiple viewpoints?' Duchamp asked 'can a urinal be art?' Warhol asked 'can soup cans be art?' Conceptualists asked 'can an idea be art?' Each movement pushed further until Contemporary Art answered: 'anything can be art'—and now the question IS the art."
                        }
                    ]
                }
            ]
        }
    ]
};

// Function to check for coding updates (for integration with main app)
function checkArtHistoryUpdates() {
    // This could be expanded to check for new content or corrections
    return {
        hasUpdates: false,
        lastChecked: new Date().toISOString()
    };
}

// Export for use in main app
if (typeof window !== 'undefined') {
    window.ART_HISTORY_CATEGORY = ART_HISTORY_CATEGORY;
}
