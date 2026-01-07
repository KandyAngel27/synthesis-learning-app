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
                                svg: `<svg viewBox="0 0 400 200" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="200" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">INTERNATIONAL GOTHIC: 1375-1425</text>

                                    <!-- Map showing spread -->
                                    <ellipse cx="200" cy="110" rx="150" ry="70" fill="none" stroke="#444" stroke-width="1"/>

                                    <!-- Court locations -->
                                    <circle cx="120" cy="90" r="12" fill="rgba(59,130,246,0.4)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="120" y="94" text-anchor="middle" fill="#fff" font-size="8">Paris</text>

                                    <circle cx="200" cy="70" r="12" fill="rgba(236,72,153,0.4)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="200" y="74" text-anchor="middle" fill="#fff" font-size="8">Prague</text>

                                    <circle cx="280" cy="90" r="12" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                                    <text x="280" y="94" text-anchor="middle" fill="#fff" font-size="8">Milan</text>

                                    <circle cx="100" cy="130" r="12" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="100" y="134" text-anchor="middle" fill="#fff" font-size="7">London</text>

                                    <circle cx="240" cy="140" r="12" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="240" y="144" text-anchor="middle" fill="#fff" font-size="7">Florence</text>

                                    <!-- Connecting lines showing spread -->
                                    <line x1="120" y1="90" x2="200" y2="70" stroke="#ffd700" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
                                    <line x1="200" y1="70" x2="280" y2="90" stroke="#ffd700" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
                                    <line x1="120" y1="90" x2="100" y2="130" stroke="#ffd700" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
                                    <line x1="280" y1="90" x2="240" y2="140" stroke="#ffd700" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>

                                    <text x="200" y="185" text-anchor="middle" fill="#888" font-size="10">One unified style across all European courts</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "What Makes It 'International Gothic'?",
                            content: "The International Gothic style has several defining characteristics that you can spot immediately:\n\nELEGANT S-CURVES: Figures stand in graceful, swaying poses - imagine a fashion model's contrapposto taken to an extreme. Bodies curve like flames or letters S.\n\nLAVISH GOLD: Real gold leaf covers backgrounds and details, making paintings shimmer like jewelry. This wasn't just decoration - gold symbolized divine light and heavenly realms.\n\nMINUTE DETAIL: Artists painted individual leaves on trees, patterns on fabrics, and fur on animals with obsessive precision. Viewers were meant to get lost in these tiny worlds.\n\nFLATTENED SPACE: Unlike later Renaissance art, there's no realistic depth. Figures stack vertically, and landscapes look like beautiful stage sets rather than real places.\n\nCOURTLY SUBJECTS: Scenes show aristocratic life - hunting, feasting, romance - or religious subjects treated with courtly elegance. Even the Virgin Mary looks like a fashionable noblewoman.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="12">5 KEY CHARACTERISTICS</text>

                                    <!-- S-Curves -->
                                    <rect x="20" y="35" width="110" height="100" rx="8" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="75" y="55" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">S-CURVES</text>
                                    <path d="M55 65 Q75 80 55 95 Q35 110 55 125" stroke="#ffd700" stroke-width="3" fill="none"/>
                                    <circle cx="55" cy="65" r="8" fill="#ffe4c4" stroke="#ec4899"/>
                                    <circle cx="55" cy="125" r="4" fill="#ec4899"/>

                                    <!-- Gold Leaf -->
                                    <rect x="145" y="35" width="110" height="100" rx="8" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="200" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">GOLD LEAF</text>
                                    <rect x="165" y="70" width="70" height="50" fill="#ffd700" rx="4"/>
                                    <circle cx="180" cy="95" r="8" fill="#b8860b"/>
                                    <circle cx="200" cy="85" r="6" fill="#daa520"/>
                                    <circle cx="220" cy="100" r="7" fill="#b8860b"/>
                                    <text x="200" y="130" text-anchor="middle" fill="#888" font-size="7">Divine light</text>

                                    <!-- Minute Detail -->
                                    <rect x="270" y="35" width="110" height="100" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="325" y="55" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">TINY DETAILS</text>
                                    <circle cx="295" cy="85" r="3" fill="#10b981"/>
                                    <circle cx="305" cy="80" r="2" fill="#10b981"/>
                                    <circle cx="315" cy="88" r="3" fill="#10b981"/>
                                    <circle cx="325" cy="82" r="2" fill="#10b981"/>
                                    <circle cx="335" cy="90" r="3" fill="#10b981"/>
                                    <circle cx="345" cy="85" r="2" fill="#10b981"/>
                                    <path d="M300 100 L310 110 L305 100 L315 108 L312 98" stroke="#10b981" stroke-width="1" fill="none"/>
                                    <text x="325" y="130" text-anchor="middle" fill="#888" font-size="7">Obsessive precision</text>

                                    <!-- Flattened Space -->
                                    <rect x="80" y="145" width="110" height="100" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="135" y="165" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">FLAT SPACE</text>
                                    <rect x="100" y="180" width="70" height="50" fill="#3b82f6" opacity="0.3"/>
                                    <ellipse cx="120" cy="195" rx="12" ry="18" fill="#dc143c" opacity="0.8"/>
                                    <ellipse cx="145" cy="200" rx="10" ry="15" fill="#4169e1" opacity="0.8"/>
                                    <text x="135" y="240" text-anchor="middle" fill="#888" font-size="7">No real depth</text>

                                    <!-- Courtly Subjects -->
                                    <rect x="210" y="145" width="110" height="100" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="265" y="165" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">COURTLY LIFE</text>
                                    <circle cx="245" cy="195" r="12" fill="#ffd700" opacity="0.5"/>
                                    <polygon points="245,183 248,190 256,190 250,195 252,203 245,198 238,203 240,195 234,190 242,190" fill="#ffd700"/>
                                    <circle cx="285" cy="200" r="10" fill="#ffe4c4"/>
                                    <ellipse cx="285" cy="220" rx="12" ry="8" fill="#8b5cf6"/>
                                    <text x="265" y="240" text-anchor="middle" fill="#888" font-size="7">Aristocratic elegance</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Why Did This Style Spread?",
                            content: "Three factors made art 'international' for the first time:\n\n1. ROYAL MARRIAGES: When a French princess married an English king, she brought artists, manuscripts, and tastes with her. Royal families were all related, and they shared aesthetic preferences.\n\n2. TRAVELING ARTISTS: Unlike later periods when artists stayed in one city, Gothic artists moved between courts seeking patronage. A painter might work in Paris, then Prague, then Milan.\n\n3. PORTABLE ART: The most prized artworks were small - illuminated manuscripts, ivory carvings, goldsmith work. These luxury objects traveled as diplomatic gifts, spreading styles across borders.\n\nThe result: a duke in France and a duke in Italy owned art that looked remarkably similar, both reflecting the same aristocratic ideals of refinement and wealth.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 220" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="220" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">3 REASONS ART WENT INTERNATIONAL</text>

                                    <!-- Royal Marriages -->
                                    <rect x="20" y="40" width="110" height="140" rx="8" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="75" y="60" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">1. MARRIAGES</text>
                                    <!-- Crown and rings -->
                                    <polygon points="55,80 60,95 75,85 90,95 95,80 75,90" fill="#ffd700" stroke="#b8860b"/>
                                    <circle cx="55" cy="115" r="8" fill="none" stroke="#ec4899" stroke-width="2"/>
                                    <circle cx="75" cy="115" r="8" fill="none" stroke="#3b82f6" stroke-width="2"/>
                                    <line x1="63" y1="115" x2="67" y2="115" stroke="#ffd700" stroke-width="2"/>
                                    <text x="75" y="145" text-anchor="middle" fill="#fff" font-size="7">Royal families</text>
                                    <text x="75" y="157" text-anchor="middle" fill="#fff" font-size="7">shared tastes</text>
                                    <text x="75" y="172" text-anchor="middle" fill="#888" font-size="6">Artists traveled</text>
                                    <text x="75" y="182" text-anchor="middle" fill="#888" font-size="6">with brides</text>

                                    <!-- Traveling Artists -->
                                    <rect x="145" y="40" width="110" height="140" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="60" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">2. ARTISTS MOVED</text>
                                    <!-- Walking figure with path -->
                                    <circle cx="170" cy="90" r="6" fill="#ffe4c4"/>
                                    <line x1="170" y1="96" x2="170" y2="115" stroke="#3b82f6" stroke-width="2"/>
                                    <line x1="170" y1="115" x2="165" y2="130" stroke="#3b82f6" stroke-width="2"/>
                                    <line x1="170" y1="115" x2="175" y2="130" stroke="#3b82f6" stroke-width="2"/>
                                    <path d="M180 100 Q200 85 220 100 Q235 115 220 130" stroke="#ffd700" stroke-width="2" fill="none" stroke-dasharray="4"/>
                                    <text x="200" y="150" text-anchor="middle" fill="#fff" font-size="7">Paris → Prague</text>
                                    <text x="200" y="162" text-anchor="middle" fill="#fff" font-size="7">→ Milan</text>
                                    <text x="200" y="177" text-anchor="middle" fill="#888" font-size="6">Seeking patrons</text>

                                    <!-- Portable Art -->
                                    <rect x="270" y="40" width="110" height="140" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="325" y="60" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">3. PORTABLE ART</text>
                                    <!-- Small book/manuscript -->
                                    <rect x="295" y="80" width="25" height="35" fill="#f5e6d3" stroke="#8b4513" stroke-width="2" rx="2"/>
                                    <rect x="298" y="85" width="19" height="25" fill="#fff8e7"/>
                                    <line x1="300" y1="90" x2="315" y2="90" stroke="#333" stroke-width="0.5"/>
                                    <line x1="300" y1="95" x2="315" y2="95" stroke="#333" stroke-width="0.5"/>
                                    <line x1="300" y1="100" x2="315" y2="100" stroke="#333" stroke-width="0.5"/>
                                    <!-- Ivory carving -->
                                    <ellipse cx="340" cy="100" rx="12" ry="18" fill="#fffff0" stroke="#ddd"/>
                                    <text x="325" y="135" text-anchor="middle" fill="#fff" font-size="7">Manuscripts</text>
                                    <text x="325" y="147" text-anchor="middle" fill="#fff" font-size="7">Ivory carvings</text>
                                    <text x="325" y="162" text-anchor="middle" fill="#888" font-size="6">Diplomatic gifts</text>
                                    <text x="325" y="174" text-anchor="middle" fill="#888" font-size="6">spread styles</text>

                                    <text x="200" y="205" text-anchor="middle" fill="#ffd700" font-size="9">Result: Similar art across all of Europe</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Masterpiece: The Très Riches Heures (1412-1416)",
                            content: "The Très Riches Heures du Duc de Berry is often called the most beautiful illuminated manuscript ever created. Here's what you need to know:\n\nWHAT IT IS: A 'Book of Hours' - a personal prayer book that wealthy people used for daily devotions. It contains prayers organized by the hours of the day and the months of the year.\n\nWHO MADE IT: The Limbourg Brothers (Paul, Jean, and Herman) - three Dutch artists working for the Duke of Berry, one of the richest art collectors in history. Tragically, all three brothers and the Duke died in 1416, probably from plague, leaving the book unfinished.\n\nWHY IT MATTERS: The calendar pages are revolutionary. For each month, the brothers painted scenes of life - peasants farming, nobles hunting, castles in the background. These aren't generic scenes; they show REAL castles the Duke owned. It's like a medieval photo album of aristocratic life.\n\nTHE TECHNICAL ACHIEVEMENT: The brothers used ultramarine blue (made from crushed lapis lazuli, more expensive than gold), created shadows using scientific observation of light, and painted details so fine you need magnification to see them all.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="11">THE TRÈS RICHES HEURES - BOOK OF HOURS</text>

                                    <!-- Open book representation -->
                                    <rect x="80" y="40" width="240" height="180" fill="#8b4513" rx="4"/>
                                    <rect x="85" y="45" width="115" height="170" fill="#f5e6d3"/>
                                    <rect x="200" y="45" width="115" height="170" fill="#fff8e7"/>

                                    <!-- Left page - Calendar/Zodiac lunette -->
                                    <path d="M90 55 Q142 35 195 55 L195 80 Q142 65 90 80 Z" fill="#1e3a5f"/>
                                    <circle cx="142" cy="62" r="12" fill="#ffd700"/>
                                    <text x="142" y="75" text-anchor="middle" fill="#fff" font-size="5">ZODIAC</text>

                                    <!-- Left page - Main scene -->
                                    <rect x="90" y="85" width="105" height="90" fill="#87ceeb"/>
                                    <rect x="90" y="145" width="105" height="30" fill="#228b22"/>
                                    <!-- Castle -->
                                    <rect x="140" y="100" width="40" height="45" fill="#6b7280"/>
                                    <polygon points="140,100 150,85 150,100" fill="#6b7280"/>
                                    <polygon points="160,100 170,80 170,100" fill="#6b7280"/>
                                    <polygon points="180,100 180,90 175,90 175,100" fill="#6b7280"/>
                                    <!-- Figures -->
                                    <ellipse cx="110" cy="155" rx="8" ry="12" fill="#dc143c"/>
                                    <circle cx="110" cy="140" r="5" fill="#ffe4c4"/>
                                    <ellipse cx="125" cy="158" rx="6" ry="10" fill="#4169e1"/>
                                    <circle cx="125" cy="145" r="4" fill="#ffe4c4"/>

                                    <text x="142" y="185" text-anchor="middle" fill="#333" font-size="6">Monthly Scene</text>
                                    <text x="142" y="195" text-anchor="middle" fill="#333" font-size="5">Real Duke's castles!</text>

                                    <!-- Right page - Info boxes -->
                                    <rect x="205" y="50" width="105" height="40" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="257" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="7">THE ARTISTS</text>
                                    <text x="257" y="77" text-anchor="middle" fill="#333" font-size="6">Limbourg Brothers</text>
                                    <text x="257" y="86" text-anchor="middle" fill="#666" font-size="5">Paul, Jean, Herman</text>

                                    <rect x="205" y="95" width="105" height="40" rx="4" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="257" y="110" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="7">THE PATRON</text>
                                    <text x="257" y="122" text-anchor="middle" fill="#333" font-size="6">Duke of Berry</text>
                                    <text x="257" y="131" text-anchor="middle" fill="#666" font-size="5">Richest collector ever</text>

                                    <rect x="205" y="140" width="105" height="40" rx="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="257" y="155" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="7">THE TRAGEDY</text>
                                    <text x="257" y="167" text-anchor="middle" fill="#333" font-size="6">All died 1416</text>
                                    <text x="257" y="176" text-anchor="middle" fill="#666" font-size="5">Probably plague</text>

                                    <rect x="205" y="185" width="105" height="28" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="257" y="198" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="7">MATERIALS</text>
                                    <text x="257" y="209" text-anchor="middle" fill="#333" font-size="5">Ultramarine (costlier than gold!)</text>

                                    <!-- Bottom label -->
                                    <rect x="100" y="235" width="200" height="50" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="252" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">BOOK OF HOURS</text>
                                    <text x="200" y="265" text-anchor="middle" fill="#fff" font-size="7">Personal prayer book with prayers for each hour</text>
                                    <text x="200" y="277" text-anchor="middle" fill="#888" font-size="6">The ultimate medieval status symbol</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Understanding a Book of Hours",
                            content: "To truly appreciate the Très Riches Heures, you need to understand what a Book of Hours was:\n\nPURPOSE: Medieval Christians structured their day around eight prayer times (called 'canonical hours'). A Book of Hours contained the prayers, psalms, and readings for each.\n\nSTRUCTURE: It typically included a calendar (showing feast days and saints), Gospel readings, prayers to the Virgin Mary, penitential psalms, and prayers for the dead.\n\nSTATUS SYMBOL: Only the wealthy could afford these handmade books. The more elaborate the decoration, the higher your status. The Duke of Berry owned several, each more luxurious than the last.\n\nPERSONAL DEVOTION: Unlike church services, these books were for private prayer. They were intimate objects - you held them, touched them, spent hours with them. The beautiful images were meant to inspire devotion and help you meditate on religious themes.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 240" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="240" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">THE 8 CANONICAL HOURS</text>
                                    <text x="200" y="35" text-anchor="middle" fill="#888" font-size="8">Medieval daily prayer schedule</text>

                                    <!-- Clock/sun representation -->
                                    <circle cx="200" cy="130" r="80" fill="none" stroke="#444" stroke-width="2"/>
                                    <circle cx="200" cy="130" r="5" fill="#ffd700"/>

                                    <!-- 8 prayer times around the clock -->
                                    <circle cx="200" cy="55" r="18" fill="rgba(245,158,11,0.3)" stroke="#f59e0b"/>
                                    <text x="200" y="52" text-anchor="middle" fill="#f59e0b" font-size="6">MATINS</text>
                                    <text x="200" y="62" text-anchor="middle" fill="#fff" font-size="5">~3am</text>

                                    <circle cx="257" cy="73" r="18" fill="rgba(239,68,68,0.3)" stroke="#ef4444"/>
                                    <text x="257" y="70" text-anchor="middle" fill="#ef4444" font-size="6">LAUDS</text>
                                    <text x="257" y="80" text-anchor="middle" fill="#fff" font-size="5">~6am</text>

                                    <circle cx="280" cy="130" r="18" fill="rgba(16,185,129,0.3)" stroke="#10b981"/>
                                    <text x="280" y="127" text-anchor="middle" fill="#10b981" font-size="6">PRIME</text>
                                    <text x="280" y="137" text-anchor="middle" fill="#fff" font-size="5">~7am</text>

                                    <circle cx="257" cy="187" r="18" fill="rgba(59,130,246,0.3)" stroke="#3b82f6"/>
                                    <text x="257" y="184" text-anchor="middle" fill="#3b82f6" font-size="6">TERCE</text>
                                    <text x="257" y="194" text-anchor="middle" fill="#fff" font-size="5">~9am</text>

                                    <circle cx="200" cy="205" r="18" fill="rgba(236,72,153,0.3)" stroke="#ec4899"/>
                                    <text x="200" y="202" text-anchor="middle" fill="#ec4899" font-size="6">SEXT</text>
                                    <text x="200" y="212" text-anchor="middle" fill="#fff" font-size="5">~noon</text>

                                    <circle cx="143" cy="187" r="18" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6"/>
                                    <text x="143" y="184" text-anchor="middle" fill="#8b5cf6" font-size="6">NONE</text>
                                    <text x="143" y="194" text-anchor="middle" fill="#fff" font-size="5">~3pm</text>

                                    <circle cx="120" cy="130" r="18" fill="rgba(34,197,94,0.3)" stroke="#22c55e"/>
                                    <text x="120" y="127" text-anchor="middle" fill="#22c55e" font-size="6">VESPERS</text>
                                    <text x="120" y="137" text-anchor="middle" fill="#fff" font-size="5">~6pm</text>

                                    <circle cx="143" cy="73" r="18" fill="rgba(168,85,247,0.3)" stroke="#a855f7"/>
                                    <text x="143" y="70" text-anchor="middle" fill="#a855f7" font-size="6">COMPLINE</text>
                                    <text x="143" y="80" text-anchor="middle" fill="#fff" font-size="5">~9pm</text>

                                    <text x="200" y="235" text-anchor="middle" fill="#ffd700" font-size="8">Each hour had specific prayers in the Book of Hours</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Looking Closely: The January Page",
                            content: "Let's examine one page in detail - January from the Très Riches Heures:\n\nTHE SCENE: The Duke of Berry hosts a New Year's feast. He sits at right in a blue robe, wearing a fur hat. Guests crowd around a table laden with food. A fire screen protects him from the massive fireplace.\n\nHIDDEN DETAILS: Above the Duke's head, a canopy displays his coat of arms. The tapestry behind him shows knights in battle - probably the Trojan War. On the table, you can identify specific dishes and a golden salt cellar shaped like a ship.\n\nTHE LUNETTE: The semicircle at top shows the zodiac signs for January (Capricorn and Aquarius) and a sun chariot crossing the sky - combining astronomy with mythology.\n\nWHAT IT TELLS US: This wasn't just pretty decoration. It documents real medieval life - what people wore, what they ate, how they celebrated. Historians use these images to understand daily life in ways written records can't show.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="18" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">JANUARY PAGE - CLOSE ANALYSIS</text>

                                    <!-- Page frame -->
                                    <rect x="100" y="30" width="200" height="200" fill="#f5e6d3" stroke="#8b4513" stroke-width="3"/>

                                    <!-- Lunette at top -->
                                    <path d="M105 40 Q200 15 295 40 L295 70 Q200 50 105 70 Z" fill="#1e3a5f"/>
                                    <circle cx="200" cy="50" r="15" fill="#ffd700"/>
                                    <text x="155" y="55" fill="#fff" font-size="6">♑</text>
                                    <text x="245" y="55" fill="#fff" font-size="6">♒</text>

                                    <!-- Tapestry/background -->
                                    <rect x="105" y="75" width="190" height="70" fill="#8b0000"/>
                                    <line x1="120" y1="90" x2="140" y2="110" stroke="#ffd700" stroke-width="1"/>
                                    <line x1="160" y1="85" x2="180" y2="105" stroke="#ffd700" stroke-width="1"/>
                                    <text x="200" y="135" text-anchor="middle" fill="#ffd700" font-size="5">Trojan War Tapestry</text>

                                    <!-- Table -->
                                    <rect x="120" y="150" width="160" height="15" fill="#8b4513"/>

                                    <!-- Duke in blue -->
                                    <ellipse cx="260" cy="170" rx="20" ry="30" fill="#1e40af"/>
                                    <circle cx="260" cy="145" r="12" fill="#ffe4c4"/>
                                    <ellipse cx="260" cy="140" rx="15" ry="8" fill="#4a3728"/>

                                    <!-- Guests at table -->
                                    <ellipse cx="150" cy="175" rx="15" ry="25" fill="#dc143c"/>
                                    <circle cx="150" cy="152" r="8" fill="#ffe4c4"/>
                                    <ellipse cx="180" cy="178" rx="12" ry="22" fill="#228b22"/>
                                    <circle cx="180" cy="158" r="7" fill="#ffe4c4"/>
                                    <ellipse cx="210" cy="175" rx="12" ry="22" fill="#4b0082"/>
                                    <circle cx="210" cy="155" r="7" fill="#ffe4c4"/>

                                    <!-- Food on table -->
                                    <circle cx="165" cy="155" r="5" fill="#ffd700"/>
                                    <rect x="185" y="152" width="15" height="8" fill="#cd853f" rx="2"/>
                                    <ellipse cx="230" cy="155" rx="8" ry="4" fill="#c0c0c0"/>

                                    <!-- Fireplace/screen -->
                                    <rect x="275" y="155" width="15" height="60" fill="#ffd700" opacity="0.5"/>

                                    <!-- Labels pointing to elements -->
                                    <line x1="30" y1="55" x2="100" y2="55" stroke="#3b82f6" stroke-width="1"/>
                                    <text x="25" y="50" fill="#3b82f6" font-size="6" text-anchor="end">Zodiac</text>
                                    <text x="25" y="60" fill="#3b82f6" font-size="6" text-anchor="end">Lunette</text>

                                    <line x1="30" y1="105" x2="100" y2="105" stroke="#ef4444" stroke-width="1"/>
                                    <text x="25" y="100" fill="#ef4444" font-size="6" text-anchor="end">Tapestry</text>
                                    <text x="25" y="110" fill="#ef4444" font-size="6" text-anchor="end">Battle scene</text>

                                    <line x1="310" y1="160" x2="370" y2="160" stroke="#f59e0b" stroke-width="1"/>
                                    <text x="375" y="155" fill="#f59e0b" font-size="6">Duke of</text>
                                    <text x="375" y="165" fill="#f59e0b" font-size="6">Berry</text>

                                    <line x1="310" y1="190" x2="370" y2="190" stroke="#10b981" stroke-width="1"/>
                                    <text x="375" y="185" fill="#10b981" font-size="6">Fire</text>
                                    <text x="375" y="195" fill="#10b981" font-size="6">screen</text>

                                    <text x="200" y="250" text-anchor="middle" fill="#fff" font-size="8">Every detail documents real medieval life</text>
                                    <text x="200" y="265" text-anchor="middle" fill="#888" font-size="7">Clothes, food, customs - a visual time capsule</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="18" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">ADORATION OF THE MAGI (1423) - GENTILE DA FABRIANO</text>

                                    <!-- Gothic frame with three arches -->
                                    <rect x="50" y="30" width="300" height="180" fill="#8b4513" rx="4"/>
                                    <polygon points="80,35 110,10 140,35" fill="#8b4513" stroke="#ffd700"/>
                                    <polygon points="170,35 200,5 230,35" fill="#8b4513" stroke="#ffd700"/>
                                    <polygon points="260,35 290,10 320,35" fill="#8b4513" stroke="#ffd700"/>
                                    <rect x="55" y="40" width="290" height="165" fill="#2d4a3e"/>

                                    <!-- Star -->
                                    <polygon points="200,50 203,58 212,58 205,63 208,72 200,67 192,72 195,63 188,58 197,58" fill="#ffd700"/>

                                    <!-- Holy Family (left) -->
                                    <ellipse cx="100" cy="140" rx="20" ry="35" fill="#1e40af"/>
                                    <circle cx="100" cy="110" r="12" fill="#ffe4c4"/>
                                    <circle cx="100" cy="105" r="18" fill="#ffd700" opacity="0.3"/>
                                    <circle cx="120" cy="150" r="8" fill="#ffe4c4"/>

                                    <!-- Three Magi -->
                                    <!-- Old King (kneeling) -->
                                    <ellipse cx="160" cy="170" rx="18" ry="25" fill="#dc143c"/>
                                    <circle cx="160" cy="145" r="10" fill="#ffe4c4"/>
                                    <circle cx="175" cy="130" r="8" fill="#ffd700"/>
                                    <text x="175" y="133" text-anchor="middle" fill="#8b4513" font-size="6">♛</text>

                                    <!-- Middle-aged King -->
                                    <ellipse cx="220" cy="150" rx="20" ry="35" fill="#228b22"/>
                                    <circle cx="220" cy="115" r="12" fill="#ffe4c4"/>
                                    <polygon points="210,105 220,95 230,105" fill="#ffd700"/>

                                    <!-- Young King -->
                                    <ellipse cx="280" cy="145" rx="18" ry="35" fill="#4b0082"/>
                                    <circle cx="280" cy="110" r="11" fill="#ffe4c4"/>
                                    <polygon points="270,100 280,90 290,100" fill="#ffd700"/>

                                    <!-- Exotic animals -->
                                    <ellipse cx="310" cy="180" rx="12" ry="8" fill="#d2691e"/>
                                    <circle cx="320" cy="175" r="4" fill="#d2691e"/>
                                    <text x="330" y="170" fill="#888" font-size="5">camel</text>

                                    <!-- Predella (bottom strip) -->
                                    <rect x="50" y="215" width="300" height="40" fill="#8b4513"/>
                                    <rect x="55" y="220" width="95" height="30" fill="#4a5568" rx="2"/>
                                    <rect x="152" y="220" width="95" height="30" fill="#4a5568" rx="2"/>
                                    <rect x="250" y="220" width="95" height="30" fill="#4a5568" rx="2"/>
                                    <text x="102" y="240" text-anchor="middle" fill="#fff" font-size="6">See Star</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#fff" font-size="6">Journey</text>
                                    <text x="297" y="240" text-anchor="middle" fill="#fff" font-size="6">Return</text>

                                    <!-- Labels -->
                                    <text x="200" y="270" text-anchor="middle" fill="#ec4899" font-size="8">THE THREE KINGS = Three Ages + Three Continents</text>
                                    <text x="200" y="285" text-anchor="middle" fill="#888" font-size="7">Old (kneeling) • Middle-aged • Young | Europe • Asia • Africa</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Gold in Medieval Art: More Than Decoration",
                            content: "Understanding gold's role helps you appreciate Gothic art:\n\nSPIRITUAL MEANING: Gold represented divine light - the uncreated light of heaven. A gold background didn't mean 'blank space'; it meant the scene took place in sacred, eternal space outside normal time.\n\nTECHNIQUE: Artists applied gold leaf (real gold hammered incredibly thin) over a red clay base called 'bole.' They then burnished it with agate stones to make it shine. Different tools created different textures.\n\nCOST: Gold leaf was expensive, but labor was even more so. A richly gilded painting took months of painstaking work. Patrons often specified exact amounts of gold in contracts.\n\nTHE TRANSITION: Renaissance artists eventually abandoned gold backgrounds for realistic blue skies. This wasn't 'progress' - it was a philosophical shift. Gold represented heavenly truth; blue skies represented earthly observation. Different goals, different techniques.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">GOLD LEAF APPLICATION PROCESS</text>

                                    <!-- Step 1: Wood Panel -->
                                    <rect x="20" y="40" width="80" height="70" rx="4" fill="#8b4513" stroke="#d4a574" stroke-width="2"/>
                                    <text x="60" y="120" text-anchor="middle" fill="#fff" font-size="9">1. WOOD PANEL</text>
                                    <text x="60" y="132" text-anchor="middle" fill="#888" font-size="7">Prepared surface</text>

                                    <!-- Arrow -->
                                    <path d="M105 75 L125 75" stroke="#ffd700" stroke-width="2" fill="none"/>
                                    <polygon points="125,75 120,70 120,80" fill="#ffd700"/>

                                    <!-- Step 2: Bole (red clay) -->
                                    <rect x="135" y="40" width="80" height="70" rx="4" fill="#8b4513" stroke="#d4a574" stroke-width="2"/>
                                    <rect x="140" y="45" width="70" height="60" fill="#8b0000"/>
                                    <text x="175" y="120" text-anchor="middle" fill="#fff" font-size="9">2. RED BOLE</text>
                                    <text x="175" y="132" text-anchor="middle" fill="#888" font-size="7">Clay adhesive base</text>

                                    <!-- Arrow -->
                                    <path d="M220 75 L240 75" stroke="#ffd700" stroke-width="2" fill="none"/>
                                    <polygon points="240,75 235,70 235,80" fill="#ffd700"/>

                                    <!-- Step 3: Gold Leaf -->
                                    <rect x="250" y="40" width="80" height="70" rx="4" fill="#8b4513" stroke="#d4a574" stroke-width="2"/>
                                    <rect x="255" y="45" width="70" height="60" fill="#ffd700"/>
                                    <rect x="260" y="50" width="60" height="50" fill="#ffec8b"/>
                                    <text x="290" y="120" text-anchor="middle" fill="#fff" font-size="9">3. GOLD LEAF</text>
                                    <text x="290" y="132" text-anchor="middle" fill="#888" font-size="7">Applied & burnished</text>

                                    <!-- Meaning comparison -->
                                    <rect x="20" y="150" width="170" height="100" rx="6" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="105" y="170" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">MEDIEVAL: GOLD</text>
                                    <rect x="35" y="180" width="140" height="50" fill="#ffd700"/>
                                    <circle cx="105" cy="205" r="15" fill="#fff" stroke="#ffd700" stroke-width="2"/>
                                    <text x="105" y="245" text-anchor="middle" fill="#ffd700" font-size="8">= DIVINE LIGHT</text>
                                    <text x="105" y="255" text-anchor="middle" fill="#888" font-size="7">Heavenly, eternal space</text>

                                    <rect x="210" y="150" width="170" height="100" rx="6" fill="rgba(135,206,235,0.15)" stroke="#87ceeb"/>
                                    <text x="295" y="170" text-anchor="middle" fill="#87ceeb" font-weight="bold" font-size="10">RENAISSANCE: SKY</text>
                                    <rect x="225" y="180" width="140" height="50" fill="#87ceeb"/>
                                    <circle cx="295" cy="195" r="12" fill="#ffff00"/>
                                    <ellipse cx="280" cy="210" rx="20" ry="8" fill="#fff"/>
                                    <text x="295" y="245" text-anchor="middle" fill="#87ceeb" font-size="8">= EARTHLY OBSERVATION</text>
                                    <text x="295" y="255" text-anchor="middle" fill="#888" font-size="7">Natural, realistic space</text>

                                    <text x="200" y="290" text-anchor="middle" fill="#ec4899" font-size="9">Different philosophies, not "progress"</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="16">E L E G A N C E</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="10">Mnemonic for International Gothic Features</text>

                                    <!-- E - Elegant S-curves -->
                                    <rect x="15" y="55" width="85" height="55" rx="4" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="57" y="72" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="14">E</text>
                                    <text x="57" y="86" text-anchor="middle" fill="#fff" font-size="7">Elegant</text>
                                    <text x="57" y="96" text-anchor="middle" fill="#fff" font-size="7">S-curves</text>
                                    <path d="M57 102 Q50 108 57 114" stroke="#ec4899" stroke-width="2" fill="none"/>

                                    <!-- L - Lavish gold -->
                                    <rect x="107" y="55" width="85" height="55" rx="4" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="150" y="72" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="14">L</text>
                                    <text x="150" y="86" text-anchor="middle" fill="#fff" font-size="7">Lavish</text>
                                    <text x="150" y="96" text-anchor="middle" fill="#fff" font-size="7">gold leaf</text>
                                    <rect x="138" y="100" width="24" height="8" fill="#ffd700"/>

                                    <!-- E - Exquisite patterns -->
                                    <rect x="199" y="55" width="85" height="55" rx="4" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="242" y="72" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">E</text>
                                    <text x="242" y="86" text-anchor="middle" fill="#fff" font-size="7">Exquisite</text>
                                    <text x="242" y="96" text-anchor="middle" fill="#fff" font-size="7">patterns</text>
                                    <circle cx="235" cy="105" r="3" fill="#8b5cf6"/><circle cx="242" cy="105" r="3" fill="#8b5cf6"/><circle cx="249" cy="105" r="3" fill="#8b5cf6"/>

                                    <!-- G - Graceful courtly -->
                                    <rect x="291" y="55" width="92" height="55" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="337" y="72" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">G</text>
                                    <text x="337" y="86" text-anchor="middle" fill="#fff" font-size="7">Graceful</text>
                                    <text x="337" y="96" text-anchor="middle" fill="#fff" font-size="7">courtly scenes</text>
                                    <text x="337" y="107" text-anchor="middle" fill="#10b981" font-size="10">👑</text>

                                    <!-- A - Animals -->
                                    <rect x="15" y="120" width="85" height="55" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="57" y="137" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">A</text>
                                    <text x="57" y="151" text-anchor="middle" fill="#fff" font-size="7">Animals &</text>
                                    <text x="57" y="161" text-anchor="middle" fill="#fff" font-size="7">nature</text>
                                    <text x="57" y="172" text-anchor="middle" fill="#f59e0b" font-size="10">🦌</text>

                                    <!-- N - No perspective -->
                                    <rect x="107" y="120" width="85" height="55" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="150" y="137" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">N</text>
                                    <text x="150" y="151" text-anchor="middle" fill="#fff" font-size="7">No deep</text>
                                    <text x="150" y="161" text-anchor="middle" fill="#fff" font-size="7">perspective</text>
                                    <rect x="135" y="165" width="30" height="3" fill="#3b82f6"/>
                                    <rect x="138" y="168" width="24" height="2" fill="#3b82f6"/>

                                    <!-- C - Courtly subject -->
                                    <rect x="199" y="120" width="85" height="55" rx="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="242" y="137" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">C</text>
                                    <text x="242" y="151" text-anchor="middle" fill="#fff" font-size="7">Courtly</text>
                                    <text x="242" y="161" text-anchor="middle" fill="#fff" font-size="7">subject matter</text>
                                    <text x="242" y="172" text-anchor="middle" fill="#ef4444" font-size="10">🏰</text>

                                    <!-- E - European courts -->
                                    <rect x="291" y="120" width="92" height="55" rx="4" fill="rgba(168,85,247,0.2)" stroke="#a855f7"/>
                                    <text x="337" y="137" text-anchor="middle" fill="#a855f7" font-weight="bold" font-size="14">E</text>
                                    <text x="337" y="151" text-anchor="middle" fill="#fff" font-size="7">European</text>
                                    <text x="337" y="161" text-anchor="middle" fill="#fff" font-size="7">courts united</text>
                                    <text x="337" y="172" text-anchor="middle" fill="#a855f7" font-size="10">🌍</text>

                                    <!-- Visual example at bottom -->
                                    <rect x="20" y="190" width="360" height="115" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="210" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">HOW TO USE: When viewing medieval art, check for each element!</text>

                                    <!-- Example figure showing S-curve -->
                                    <path d="M80 230 Q70 250 80 270 Q90 285 80 295" stroke="#ec4899" stroke-width="3" fill="none"/>
                                    <circle cx="80" cy="225" r="8" fill="none" stroke="#ec4899" stroke-width="2"/>
                                    <text x="80" y="310" text-anchor="middle" fill="#ec4899" font-size="7">S-curve pose</text>

                                    <!-- Gold background example -->
                                    <rect x="130" y="220" width="50" height="70" fill="#ffd700"/>
                                    <circle cx="155" cy="245" r="10" fill="#fff"/>
                                    <rect x="145" y="260" width="20" height="25" fill="#3b82f6"/>
                                    <text x="155" y="310" text-anchor="middle" fill="#ffd700" font-size="7">Gold ground</text>

                                    <!-- Pattern detail -->
                                    <rect x="210" y="220" width="50" height="70" fill="#8b5cf6"/>
                                    <circle cx="220" cy="235" r="4" fill="#fff"/><circle cx="235" cy="235" r="4" fill="#fff"/><circle cx="250" cy="235" r="4" fill="#fff"/>
                                    <circle cx="220" cy="255" r="4" fill="#ffd700"/><circle cx="235" cy="255" r="4" fill="#ffd700"/><circle cx="250" cy="255" r="4" fill="#ffd700"/>
                                    <circle cx="220" cy="275" r="4" fill="#fff"/><circle cx="235" cy="275" r="4" fill="#fff"/><circle cx="250" cy="275" r="4" fill="#fff"/>
                                    <text x="235" y="310" text-anchor="middle" fill="#8b5cf6" font-size="7">Rich textile</text>

                                    <!-- Flat space -->
                                    <rect x="290" y="220" width="70" height="70" fill="#1a1a2e" stroke="#3b82f6"/>
                                    <rect x="300" y="240" width="15" height="35" fill="#10b981"/>
                                    <rect x="320" y="235" width="15" height="40" fill="#f59e0b"/>
                                    <rect x="340" y="230" width="15" height="45" fill="#ef4444"/>
                                    <text x="325" y="310" text-anchor="middle" fill="#3b82f6" font-size="7">Flat space</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "International Gothic vs. What Came Before and After",
                            content: "Understanding context helps you identify the style:\n\nBEFORE (Earlier Gothic, 1200s-1300s):\n- Figures were stiffer and more hieratic\n- Less interest in naturalistic detail\n- Stronger Byzantine influence\n- More symbolic, less decorative\n\nINTERNATIONAL GOTHIC (c. 1375-1425):\n- Maximum elegance and decoration\n- Careful observation of nature\n- Courtly, aristocratic subjects\n- Gold and luxury materials\n\nAFTER (Early Renaissance, 1400s+):\n- Scientific perspective creates depth\n- Figures have weight and volume\n- Less gold, more realistic settings\n- Focus on human anatomy and proportion\n\nThe International Gothic was the medieval world's last artistic gasp before Renaissance humanism changed art forever.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">ART STYLE EVOLUTION: BEFORE → GOTHIC → AFTER</text>

                                    <!-- Timeline arrow -->
                                    <path d="M30 55 L370 55" stroke="#888" stroke-width="2"/>
                                    <polygon points="370,55 360,50 360,60" fill="#888"/>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="8">TIME →</text>

                                    <!-- Era markers -->
                                    <circle cx="80" cy="55" r="8" fill="#ef4444"/>
                                    <text x="80" y="75" text-anchor="middle" fill="#ef4444" font-size="8">1200s-1300s</text>

                                    <circle cx="200" cy="55" r="10" fill="#ffd700"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#ffd700" font-size="8">1375-1425</text>

                                    <circle cx="320" cy="55" r="8" fill="#3b82f6"/>
                                    <text x="320" y="75" text-anchor="middle" fill="#3b82f6" font-size="8">1400s+</text>

                                    <!-- BEFORE: Earlier Gothic -->
                                    <rect x="15" y="85" width="115" height="175" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="72" y="105" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">EARLIER GOTHIC</text>

                                    <!-- Stiff figure representation -->
                                    <rect x="52" y="115" width="40" height="60" fill="#ffd700"/>
                                    <circle cx="72" cy="125" r="10" fill="#ffe4c4" stroke="#000" stroke-width="1"/>
                                    <line x1="72" y1="135" x2="72" y2="165" stroke="#000" stroke-width="2"/>
                                    <line x1="72" y1="145" x2="60" y2="155" stroke="#000" stroke-width="2"/>
                                    <line x1="72" y1="145" x2="84" y2="155" stroke="#000" stroke-width="2"/>

                                    <text x="72" y="190" text-anchor="middle" fill="#fff" font-size="7">• Stiff figures</text>
                                    <text x="72" y="202" text-anchor="middle" fill="#fff" font-size="7">• Byzantine style</text>
                                    <text x="72" y="214" text-anchor="middle" fill="#fff" font-size="7">• Symbolic</text>
                                    <text x="72" y="226" text-anchor="middle" fill="#fff" font-size="7">• Hieratic poses</text>
                                    <text x="72" y="250" text-anchor="middle" fill="#ef4444" font-size="8">FORMAL</text>

                                    <!-- INTERNATIONAL GOTHIC (center, highlighted) -->
                                    <rect x="140" y="85" width="120" height="175" rx="6" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="2"/>
                                    <text x="200" y="100" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">INTERNATIONAL</text>
                                    <text x="200" y="112" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">GOTHIC</text>

                                    <!-- Elegant S-curve figure -->
                                    <rect x="175" y="120" width="50" height="55" fill="#ffd700"/>
                                    <path d="M200 130 Q190 145 200 160 Q210 170 200 175" stroke="#ec4899" stroke-width="3" fill="none"/>
                                    <circle cx="200" cy="128" r="8" fill="#ffe4c4" stroke="#000" stroke-width="1"/>

                                    <text x="200" y="190" text-anchor="middle" fill="#fff" font-size="7">• Elegant S-curves</text>
                                    <text x="200" y="202" text-anchor="middle" fill="#fff" font-size="7">• Lavish gold</text>
                                    <text x="200" y="214" text-anchor="middle" fill="#fff" font-size="7">• Nature details</text>
                                    <text x="200" y="226" text-anchor="middle" fill="#fff" font-size="7">• Courtly scenes</text>
                                    <text x="200" y="250" text-anchor="middle" fill="#ffd700" font-size="8">ELEGANT</text>

                                    <!-- AFTER: Early Renaissance -->
                                    <rect x="270" y="85" width="115" height="175" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="327" y="105" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">RENAISSANCE</text>

                                    <!-- Realistic figure with perspective -->
                                    <rect x="302" y="115" width="50" height="60" fill="#87ceeb"/>
                                    <!-- Perspective grid -->
                                    <line x1="310" y1="170" x2="327" y2="130" stroke="#3b82f6" stroke-width="0.5"/>
                                    <line x1="344" y1="170" x2="327" y2="130" stroke="#3b82f6" stroke-width="0.5"/>
                                    <!-- Solid figure -->
                                    <ellipse cx="327" cy="145" rx="8" ry="6" fill="#ffe4c4" stroke="#000"/>
                                    <rect x="318" y="150" width="18" height="20" fill="#10b981" rx="2"/>

                                    <text x="327" y="190" text-anchor="middle" fill="#fff" font-size="7">• Perspective</text>
                                    <text x="327" y="202" text-anchor="middle" fill="#fff" font-size="7">• Volume & weight</text>
                                    <text x="327" y="214" text-anchor="middle" fill="#fff" font-size="7">• Blue sky (not gold)</text>
                                    <text x="327" y="226" text-anchor="middle" fill="#fff" font-size="7">• Anatomy focus</text>
                                    <text x="327" y="250" text-anchor="middle" fill="#3b82f6" font-size="8">REALISTIC</text>

                                    <!-- Bottom note -->
                                    <rect x="50" y="275" width="300" height="35" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="200" y="292" text-anchor="middle" fill="#ec4899" font-size="9">International Gothic = Medieval art's final flourish</text>
                                    <text x="200" y="304" text-anchor="middle" fill="#888" font-size="8">before Renaissance humanism changed everything</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">5 TALKING POINTS ABOUT INTERNATIONAL GOTHIC</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">Insights that show real understanding</text>

                                    <!-- Point 1: Response to Crisis -->
                                    <rect x="15" y="50" width="115" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="72" cy="70" r="12" fill="#ef4444"/>
                                    <text x="72" y="75" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1</text>
                                    <text x="72" y="92" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="8">CRISIS RESPONSE</text>
                                    <text x="72" y="105" text-anchor="middle" fill="#fff" font-size="7">Beauty as escape</text>
                                    <text x="72" y="117" text-anchor="middle" fill="#888" font-size="6">Plague • War • Schism</text>

                                    <!-- Point 2: Medieval Sophistication -->
                                    <rect x="142" y="50" width="115" height="80" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="200" cy="70" r="12" fill="#8b5cf6"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">2</text>
                                    <text x="200" y="92" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="8">SOPHISTICATION</text>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="7">Not "primitive"</text>
                                    <text x="200" y="117" text-anchor="middle" fill="#888" font-size="6">Different goals, same skill</text>

                                    <!-- Point 3: Truly International -->
                                    <rect x="269" y="50" width="115" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="327" cy="70" r="12" fill="#10b981"/>
                                    <text x="327" y="75" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>
                                    <text x="327" y="92" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="8">FIRST GLOBAL ART</text>
                                    <text x="327" y="105" text-anchor="middle" fill="#fff" font-size="7">Unified by style</text>
                                    <text x="327" y="117" text-anchor="middle" fill="#888" font-size="6">Not by region</text>

                                    <!-- Point 4: Documentary Value -->
                                    <rect x="80" y="140" width="115" height="80" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="137" cy="160" r="12" fill="#f59e0b"/>
                                    <text x="137" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">4</text>
                                    <text x="137" y="182" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="8">REAL DOCUMENTS</text>
                                    <text x="137" y="195" text-anchor="middle" fill="#fff" font-size="7">Fantasy shows reality</text>
                                    <text x="137" y="207" text-anchor="middle" fill="#888" font-size="6">Clothes • Food • Castles</text>

                                    <!-- Point 5: Abrupt End -->
                                    <rect x="205" y="140" width="115" height="80" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="262" cy="160" r="12" fill="#3b82f6"/>
                                    <text x="262" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">5</text>
                                    <text x="262" y="182" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="8">SUDDEN END</text>
                                    <text x="262" y="195" text-anchor="middle" fill="#fff" font-size="7">Renaissance swept in</text>
                                    <text x="262" y="207" text-anchor="middle" fill="#888" font-size="6">Why? = key insight</text>

                                    <!-- Conversation bubble -->
                                    <rect x="30" y="235" width="340" height="70" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="255" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">IMPRESS YOUR FRIENDS:</text>
                                    <text x="200" y="272" text-anchor="middle" fill="#fff" font-size="8">"International Gothic wasn't 'primitive medieval art' — it was</text>
                                    <text x="200" y="286" text-anchor="middle" fill="#fff" font-size="8">deliberately elegant escapism created during Europe's darkest hour,</text>
                                    <text x="200" y="300" text-anchor="middle" fill="#fff" font-size="8">using technical skills Renaissance artists would later envy."</text>
                                </svg>`
                            }
                        },
                        {
                            type: "example",
                            title: "Spotting International Gothic in Museums",
                            content: "Next time you're in a museum, here's how to identify International Gothic works:\n\nLOOK FOR: Swaying figures, gold backgrounds, intricate textile patterns, charming animals, courtly scenes, Gothic pointed arches in frames.\n\nCHECK THE DATE: Most works are from 1375-1425. Earlier is 'just' Gothic; later starts showing Renaissance influence.\n\nNOTICE THE SPACE: Is there realistic depth? If not, and figures seem to float on gold or stack vertically, it's probably International Gothic.\n\nEXAMINE FACES: International Gothic faces are idealized, sweet, somewhat generic. Renaissance faces show individual character.\n\nFAMOUS EXAMPLES TO SEEK OUT:\n- The Wilton Diptych (National Gallery, London)\n- Works by Lorenzo Monaco (Uffizi, Florence)\n- The Tres Riches Heures (facsimiles in many museums)\n- Gentile da Fabriano's works (Uffizi, Florence)",
                            visual: {
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">MUSEUM GUIDE: SPOTTING INTERNATIONAL GOTHIC</text>

                                    <!-- 4 Visual Checklist Items -->
                                    <rect x="15" y="40" width="180" height="85" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="105" y="58" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">✓ LOOK FOR S-CURVES</text>
                                    <!-- S-curve figure demo -->
                                    <path d="M60 70 Q50 85 60 100 Q70 110 60 118" stroke="#ec4899" stroke-width="3" fill="none"/>
                                    <circle cx="60" cy="68" r="7" fill="none" stroke="#ec4899" stroke-width="2"/>
                                    <text x="120" y="85" text-anchor="middle" fill="#fff" font-size="7">Figures sway</text>
                                    <text x="120" y="97" text-anchor="middle" fill="#fff" font-size="7">elegantly in</text>
                                    <text x="120" y="109" text-anchor="middle" fill="#fff" font-size="7">Gothic "S" pose</text>

                                    <rect x="205" y="40" width="180" height="85" rx="6" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="295" y="58" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">✓ CHECK FOR GOLD</text>
                                    <!-- Gold background demo -->
                                    <rect x="230" y="68" width="40" height="50" fill="#ffd700"/>
                                    <circle cx="250" cy="82" r="8" fill="#ffe4c4"/>
                                    <rect x="242" y="92" width="16" height="20" fill="#3b82f6"/>
                                    <text x="320" y="85" text-anchor="middle" fill="#fff" font-size="7">Gold = divine</text>
                                    <text x="320" y="97" text-anchor="middle" fill="#fff" font-size="7">light, not just</text>
                                    <text x="320" y="109" text-anchor="middle" fill="#fff" font-size="7">decoration</text>

                                    <rect x="15" y="135" width="180" height="85" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="105" y="153" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">✓ NOTICE FLAT SPACE</text>
                                    <!-- Flat space demo -->
                                    <rect x="35" y="163" width="50" height="45" fill="#1a1a2e" stroke="#8b5cf6"/>
                                    <rect x="45" y="178" width="10" height="25" fill="#10b981"/>
                                    <rect x="58" y="173" width="10" height="30" fill="#f59e0b"/>
                                    <rect x="71" y="168" width="10" height="35" fill="#ef4444"/>
                                    <text x="130" y="180" text-anchor="middle" fill="#fff" font-size="7">No perspective</text>
                                    <text x="130" y="192" text-anchor="middle" fill="#fff" font-size="7">Figures stack or</text>
                                    <text x="130" y="204" text-anchor="middle" fill="#fff" font-size="7">float on gold</text>

                                    <rect x="205" y="135" width="180" height="85" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="295" y="153" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">✓ EXAMINE FACES</text>
                                    <!-- Face comparison -->
                                    <circle cx="245" cy="185" r="18" fill="#ffe4c4" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="240" cy="180" r="2" fill="#000"/>
                                    <circle cx="250" cy="180" r="2" fill="#000"/>
                                    <path d="M240 192 Q245 196 250 192" stroke="#000" stroke-width="1" fill="none"/>
                                    <text x="245" y="210" text-anchor="middle" fill="#10b981" font-size="6">Idealized</text>
                                    <text x="330" y="175" text-anchor="middle" fill="#fff" font-size="7">Sweet, generic</text>
                                    <text x="330" y="187" text-anchor="middle" fill="#fff" font-size="7">vs. Renaissance</text>
                                    <text x="330" y="199" text-anchor="middle" fill="#fff" font-size="7">individual faces</text>

                                    <!-- Famous Examples Section -->
                                    <rect x="15" y="230" width="370" height="100" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="250" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">FAMOUS EXAMPLES TO FIND</text>

                                    <rect x="30" y="260" width="80" height="55" rx="4" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="70" y="280" text-anchor="middle" fill="#ffd700" font-size="7">Wilton Diptych</text>
                                    <text x="70" y="292" text-anchor="middle" fill="#fff" font-size="6">National Gallery</text>
                                    <text x="70" y="303" text-anchor="middle" fill="#888" font-size="6">London</text>

                                    <rect x="120" y="260" width="80" height="55" rx="4" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="160" y="280" text-anchor="middle" fill="#8b5cf6" font-size="7">Lorenzo Monaco</text>
                                    <text x="160" y="292" text-anchor="middle" fill="#fff" font-size="6">Uffizi</text>
                                    <text x="160" y="303" text-anchor="middle" fill="#888" font-size="6">Florence</text>

                                    <rect x="210" y="260" width="80" height="55" rx="4" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="250" y="275" text-anchor="middle" fill="#ec4899" font-size="7">Très Riches</text>
                                    <text x="250" y="286" text-anchor="middle" fill="#ec4899" font-size="7">Heures</text>
                                    <text x="250" y="298" text-anchor="middle" fill="#fff" font-size="6">Facsimiles</text>
                                    <text x="250" y="309" text-anchor="middle" fill="#888" font-size="6">Many museums</text>

                                    <rect x="300" y="260" width="80" height="55" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="340" y="275" text-anchor="middle" fill="#10b981" font-size="7">Gentile da</text>
                                    <text x="340" y="286" text-anchor="middle" fill="#10b981" font-size="7">Fabriano</text>
                                    <text x="340" y="298" text-anchor="middle" fill="#fff" font-size="6">Uffizi</text>
                                    <text x="340" y="309" text-anchor="middle" fill="#888" font-size="6">Florence</text>
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
                            content: "You should now be able to explain:\n\n1. WHAT International Gothic is: An elegant, decorative art style (c. 1375-1425) characterized by S-curved figures, gold leaf, minute detail, and courtly subjects.\n\n2. WHY it was 'International': Royal marriages, traveling artists, and portable luxury objects spread similar tastes across European courts.\n\n3. The Très Riches Heures: A Book of Hours (personal prayer book) created by the Limbourg Brothers for the Duke of Berry, famous for its calendar pages showing aristocratic life.\n\n4. Gold's meaning: Not just decoration, but a symbol of divine light and heavenly space.\n\n5. Historical context: This style emerged during crisis (plague, war, schism) as an escape into beauty, and was soon replaced by Renaissance realism.\n\nYou can now discuss International Gothic art with confidence and recognize it in museums!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>
                                    <text x="200" y="40" text-anchor="middle" fill="#888" font-size="9">You can now explain International Gothic</text>

                                    <!-- 5 Key Points Summary -->
                                    <rect x="15" y="55" width="175" height="65" rx="6" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <circle cx="35" cy="75" r="12" fill="#ffd700"/>
                                    <text x="35" y="80" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="12">1</text>
                                    <text x="110" y="72" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">WHAT IS IT?</text>
                                    <text x="110" y="86" text-anchor="middle" fill="#fff" font-size="7">Elegant style c.1375-1425</text>
                                    <text x="110" y="98" text-anchor="middle" fill="#888" font-size="6">S-curves • Gold • Courtly</text>
                                    <text x="110" y="110" text-anchor="middle" fill="#888" font-size="6">Detail • Aristocratic</text>

                                    <rect x="210" y="55" width="175" height="65" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="230" cy="75" r="12" fill="#3b82f6"/>
                                    <text x="230" y="80" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">2</text>
                                    <text x="305" y="72" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">WHY "INTERNATIONAL"?</text>
                                    <text x="305" y="86" text-anchor="middle" fill="#fff" font-size="7">Courts connected across</text>
                                    <text x="305" y="98" text-anchor="middle" fill="#888" font-size="6">Royal marriages • Artists</text>
                                    <text x="305" y="110" text-anchor="middle" fill="#888" font-size="6">traveled • Luxury gifts</text>

                                    <rect x="15" y="130" width="175" height="65" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <circle cx="35" cy="150" r="12" fill="#ec4899"/>
                                    <text x="35" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>
                                    <text x="110" y="147" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">MASTERPIECE</text>
                                    <text x="110" y="161" text-anchor="middle" fill="#fff" font-size="7">Très Riches Heures</text>
                                    <text x="110" y="173" text-anchor="middle" fill="#888" font-size="6">Limbourg Brothers</text>
                                    <text x="110" y="185" text-anchor="middle" fill="#888" font-size="6">Duke of Berry's prayer book</text>

                                    <rect x="210" y="130" width="175" height="65" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="230" cy="150" r="12" fill="#8b5cf6"/>
                                    <text x="230" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">4</text>
                                    <text x="305" y="147" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">GOLD'S MEANING</text>
                                    <text x="305" y="161" text-anchor="middle" fill="#fff" font-size="7">Divine light, not just</text>
                                    <text x="305" y="173" text-anchor="middle" fill="#888" font-size="6">decoration. Sacred space</text>
                                    <text x="305" y="185" text-anchor="middle" fill="#888" font-size="6">outside normal time</text>

                                    <rect x="112" y="205" width="175" height="65" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="132" cy="225" r="12" fill="#f59e0b"/>
                                    <text x="132" y="230" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="12">5</text>
                                    <text x="207" y="222" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">HISTORICAL CONTEXT</text>
                                    <text x="207" y="236" text-anchor="middle" fill="#fff" font-size="7">Emerged during crisis</text>
                                    <text x="207" y="248" text-anchor="middle" fill="#888" font-size="6">Plague • War • Schism</text>
                                    <text x="207" y="260" text-anchor="middle" fill="#888" font-size="6">Art as beautiful escape</text>

                                    <!-- Achievement badge -->
                                    <rect x="50" y="280" width="300" height="50" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="305" r="18" fill="#10b981"/>
                                    <text x="90" y="310" text-anchor="middle" fill="#fff" font-size="16">✓</text>
                                    <text x="220" y="300" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">FEYNMAN TEST READY</text>
                                    <text x="220" y="316" text-anchor="middle" fill="#fff" font-size="8">You can explain this topic in simple terms!</text>
                                </svg>`
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    title: "The Italian Renaissance Begins: Florence",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Setting the Scene: Why Florence?",
                            content: "Around 1400, something extraordinary happened in Florence, Italy. In a city of only 60,000 people, a revolution began that would change art forever. But why Florence?\n\nTHE PERFECT STORM:\n• WEALTH: Florence was a banking powerhouse. The Medici family alone controlled the largest bank in Europe.\n• COMPETITION: Wealthy families competed through art patronage - funding buildings, sculptures, and paintings became a status symbol.\n• CIVIC PRIDE: Florentines saw themselves as heirs to ancient Rome. They wanted art that matched Roman greatness.\n• FREEDOM: Unlike feudal kingdoms, Florence was a republic where merchants and craftsmen had power.\n\nWHAT CHANGED:\n• Artists became celebrated individuals, not anonymous craftsmen\n• Science merged with art - mathematics, anatomy, and optics became artistic tools\n• Ancient Greek and Roman works became models to study and surpass\n• Art shifted from serving God alone to celebrating human achievement\n\nThis was the 'rebirth' (rinascita in Italian) - what we now call the Renaissance.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">FLORENTINE RENAISSANCE INNOVATIONS</text>

                                    <!-- Three main innovations -->
                                    <!-- Linear Perspective -->
                                    <rect x="15" y="45" width="115" height="100" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="72" y="65" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">LINEAR</text>
                                    <text x="72" y="78" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">PERSPECTIVE</text>
                                    <!-- Perspective grid -->
                                    <line x1="35" y1="135" x2="72" y2="95" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="110" y1="135" x2="72" y2="95" stroke="#f59e0b" stroke-width="1"/>
                                    <line x1="45" y1="135" x2="72" y2="100" stroke="#f59e0b" stroke-width="0.5"/>
                                    <line x1="100" y1="135" x2="72" y2="100" stroke="#f59e0b" stroke-width="0.5"/>
                                    <circle cx="72" cy="95" r="4" fill="#f59e0b"/>
                                    <text x="72" y="88" text-anchor="middle" fill="#fff" font-size="7">VP</text>

                                    <!-- Classical Revival -->
                                    <rect x="142" y="45" width="115" height="100" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">CLASSICAL</text>
                                    <text x="200" y="78" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">REVIVAL</text>
                                    <!-- Column representation -->
                                    <rect x="180" y="90" width="40" height="45" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <rect x="175" y="87" width="50" height="5" fill="#8b5cf6"/>
                                    <rect x="175" y="135" width="50" height="5" fill="#8b5cf6"/>
                                    <line x1="190" y1="90" x2="190" y2="135" stroke="#8b5cf6"/>
                                    <line x1="210" y1="90" x2="210" y2="135" stroke="#8b5cf6"/>

                                    <!-- Human Anatomy -->
                                    <rect x="270" y="45" width="115" height="100" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="327" y="65" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">HUMAN</text>
                                    <text x="327" y="78" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">ANATOMY</text>
                                    <!-- Vitruvian figure simplified -->
                                    <circle cx="327" cy="110" r="25" fill="none" stroke="#10b981" stroke-width="1"/>
                                    <circle cx="327" cy="100" r="8" fill="none" stroke="#10b981" stroke-width="1.5"/>
                                    <line x1="327" y1="108" x2="327" y2="130" stroke="#10b981" stroke-width="1.5"/>
                                    <line x1="327" y1="115" x2="312" y2="105" stroke="#10b981" stroke-width="1.5"/>
                                    <line x1="327" y1="115" x2="342" y2="105" stroke="#10b981" stroke-width="1.5"/>
                                    <line x1="327" y1="130" x2="317" y2="140" stroke="#10b981" stroke-width="1.5"/>
                                    <line x1="327" y1="130" x2="337" y2="140" stroke="#10b981" stroke-width="1.5"/>

                                    <!-- Key Figures -->
                                    <rect x="15" y="160" width="370" height="105" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="180" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">PIONEERING ARTISTS</text>

                                    <circle cx="80" cy="215" r="25" fill="rgba(245,158,11,0.3)" stroke="#f59e0b"/>
                                    <text x="80" y="212" text-anchor="middle" fill="#fff" font-size="9">Brunelleschi</text>
                                    <text x="80" y="224" text-anchor="middle" fill="#f59e0b" font-size="8">Architecture</text>
                                    <text x="80" y="250" text-anchor="middle" fill="#888" font-size="8">1377-1446</text>

                                    <circle cx="160" cy="215" r="25" fill="rgba(239,68,68,0.3)" stroke="#ef4444"/>
                                    <text x="160" y="212" text-anchor="middle" fill="#fff" font-size="9">Masaccio</text>
                                    <text x="160" y="224" text-anchor="middle" fill="#ef4444" font-size="8">Painting</text>
                                    <text x="160" y="250" text-anchor="middle" fill="#888" font-size="8">1401-1428</text>

                                    <circle cx="240" cy="215" r="25" fill="rgba(16,185,129,0.3)" stroke="#10b981"/>
                                    <text x="240" y="212" text-anchor="middle" fill="#fff" font-size="9">Donatello</text>
                                    <text x="240" y="224" text-anchor="middle" fill="#10b981" font-size="8">Sculpture</text>
                                    <text x="240" y="250" text-anchor="middle" fill="#888" font-size="8">1386-1466</text>

                                    <circle cx="320" cy="215" r="25" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6"/>
                                    <text x="320" y="212" text-anchor="middle" fill="#fff" font-size="9">Alberti</text>
                                    <text x="320" y="224" text-anchor="middle" fill="#8b5cf6" font-size="8">Theory</text>
                                    <text x="320" y="250" text-anchor="middle" fill="#888" font-size="8">1404-1472</text>
                                </svg>`,
                                caption: "Florence's artistic revolution combined classical learning with scientific innovation"
                            }
                        },
                        {
                            type: "concept",
                            title: "The Big Four: Pioneers of Florentine Art",
                            content: "Four artists working in the early 1400s transformed art forever. Know these names:\n\nBRUNELLESCHI (1377-1446) - The Architect-Scientist\n• Invented linear perspective - the mathematical system for creating depth\n• Built the dome of Florence Cathedral (still the largest masonry dome ever built)\n• Originally trained as a goldsmith; lost a sculpture competition to Ghiberti in 1401\n\nMASACCIO (1401-1428) - The Painter Who Changed Everything\n• First to fully apply perspective to painting\n• Gave figures real weight, shadow, and emotion\n• Died at 27 - imagine what he might have achieved!\n\nDONATELLO (c. 1386-1466) - The Sculpture Revolutionary\n• Created the first free-standing nude sculpture since ancient Rome\n• Invented 'schiacciato' (ultra-shallow relief carving)\n• Worked 60+ years, constantly innovating\n\nALBERTI (1404-1472) - The Theorist\n• Wrote the first treatises on painting and architecture\n• Codified the rules that other artists followed\n• The 'Renaissance man' - architect, author, mathematician",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">THE FLORENTINE FOUR</text>

                                    <rect x="15" y="45" width="180" height="100" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="55" cy="85" r="25" fill="rgba(245,158,11,0.3)" stroke="#f59e0b"/>
                                    <text x="55" y="82" text-anchor="middle" fill="#fff" font-size="8">Brunel-</text>
                                    <text x="55" y="93" text-anchor="middle" fill="#fff" font-size="8">leschi</text>
                                    <text x="125" y="70" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">ARCHITECT</text>
                                    <text x="125" y="85" text-anchor="middle" fill="#fff" font-size="8">Linear Perspective</text>
                                    <text x="125" y="100" text-anchor="middle" fill="#fff" font-size="8">Florence Dome</text>
                                    <text x="125" y="130" text-anchor="middle" fill="#888" font-size="8">1377-1446</text>

                                    <rect x="205" y="45" width="180" height="100" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="245" cy="85" r="25" fill="rgba(239,68,68,0.3)" stroke="#ef4444"/>
                                    <text x="245" y="90" text-anchor="middle" fill="#fff" font-size="9">Masaccio</text>
                                    <text x="315" y="70" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">PAINTER</text>
                                    <text x="315" y="85" text-anchor="middle" fill="#fff" font-size="8">Holy Trinity</text>
                                    <text x="315" y="100" text-anchor="middle" fill="#fff" font-size="8">First perspective painting</text>
                                    <text x="315" y="130" text-anchor="middle" fill="#888" font-size="8">1401-1428 (died at 27!)</text>

                                    <rect x="15" y="155" width="180" height="100" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="55" cy="195" r="25" fill="rgba(16,185,129,0.3)" stroke="#10b981"/>
                                    <text x="55" y="200" text-anchor="middle" fill="#fff" font-size="9">Donatello</text>
                                    <text x="125" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">SCULPTOR</text>
                                    <text x="125" y="195" text-anchor="middle" fill="#fff" font-size="8">Bronze David</text>
                                    <text x="125" y="210" text-anchor="middle" fill="#fff" font-size="8">Schiacciato technique</text>
                                    <text x="125" y="240" text-anchor="middle" fill="#888" font-size="8">c. 1386-1466</text>

                                    <rect x="205" y="155" width="180" height="100" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="245" cy="195" r="25" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6"/>
                                    <text x="245" y="200" text-anchor="middle" fill="#fff" font-size="9">Alberti</text>
                                    <text x="315" y="180" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">THEORIST</text>
                                    <text x="315" y="195" text-anchor="middle" fill="#fff" font-size="8">On Painting (1435)</text>
                                    <text x="315" y="210" text-anchor="middle" fill="#fff" font-size="8">Wrote the rulebook</text>
                                    <text x="315" y="240" text-anchor="middle" fill="#888" font-size="8">1404-1472</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="13">HOW BRUNELLESCHI PROVED PERSPECTIVE WORKS</text>

                                    <!-- Step 1 -->
                                    <rect x="20" y="40" width="110" height="120" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="75" y="58" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">STEP 1</text>
                                    <text x="75" y="73" text-anchor="middle" fill="#fff" font-size="9">Paint the Baptistery</text>
                                    <!-- Mini painting -->
                                    <rect x="45" y="85" width="60" height="45" fill="#87ceeb" stroke="#fff"/>
                                    <rect x="60" y="100" width="30" height="25" fill="#8b4513"/>
                                    <polygon points="60,100 75,85 90,100" fill="#8b4513"/>
                                    <text x="75" y="148" text-anchor="middle" fill="#888" font-size="8">On a small panel</text>

                                    <!-- Step 2 -->
                                    <rect x="145" y="40" width="110" height="120" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="58" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">STEP 2</text>
                                    <text x="200" y="73" text-anchor="middle" fill="#fff" font-size="9">Drill a peephole</text>
                                    <!-- Panel with hole -->
                                    <rect x="170" y="85" width="60" height="50" fill="#d4a574" stroke="#8b4513" stroke-width="2"/>
                                    <circle cx="200" cy="110" r="8" fill="#1a1a2e"/>
                                    <text x="200" y="148" text-anchor="middle" fill="#888" font-size="8">In the center</text>

                                    <!-- Step 3 -->
                                    <rect x="270" y="40" width="110" height="120" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="325" y="58" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">STEP 3</text>
                                    <text x="325" y="73" text-anchor="middle" fill="#fff" font-size="9">View through mirror</text>
                                    <!-- Mirror reflection -->
                                    <rect x="295" y="85" width="60" height="50" fill="#c0c0c0" stroke="#fff" stroke-width="2"/>
                                    <rect x="310" y="100" width="30" height="25" fill="#8b4513" opacity="0.7"/>
                                    <text x="325" y="148" text-anchor="middle" fill="#888" font-size="8">Painting matches reality!</text>

                                    <!-- Key Principles box -->
                                    <rect x="20" y="175" width="360" height="130" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">3 KEY PRINCIPLES OF LINEAR PERSPECTIVE</text>

                                    <circle cx="50" cy="225" r="15" fill="#f59e0b"/>
                                    <text x="50" y="230" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="14">1</text>
                                    <text x="150" y="220" text-anchor="middle" fill="#fff" font-size="10">All parallel lines converge</text>
                                    <text x="150" y="235" text-anchor="middle" fill="#888" font-size="9">at a single VANISHING POINT</text>

                                    <circle cx="50" cy="265" r="15" fill="#8b5cf6"/>
                                    <text x="50" y="270" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">2</text>
                                    <text x="150" y="260" text-anchor="middle" fill="#fff" font-size="10">Objects shrink proportionally</text>
                                    <text x="150" y="275" text-anchor="middle" fill="#888" font-size="9">as they get farther away</text>

                                    <circle cx="280" cy="245" r="15" fill="#10b981"/>
                                    <text x="280" y="250" text-anchor="middle" fill="#1a1a2e" font-weight="bold" font-size="14">3</text>
                                    <text x="350" y="240" text-anchor="middle" fill="#fff" font-size="10">Math rules</text>
                                    <text x="350" y="255" text-anchor="middle" fill="#888" font-size="9">govern space</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="12">MASACCIO'S HOLY TRINITY - PERSPECTIVE ANALYSIS</text>

                                    <!-- Fresco outline -->
                                    <rect x="120" y="35" width="160" height="250" fill="#d4c4b0" rx="4"/>

                                    <!-- Architectural elements -->
                                    <!-- Barrel vault -->
                                    <ellipse cx="200" cy="55" rx="65" ry="15" fill="#8b7355"/>
                                    <rect x="135" y="55" width="130" height="140" fill="#a08060"/>

                                    <!-- Coffered ceiling lines -->
                                    <line x1="140" y1="60" x2="200" y2="100" stroke="#6b5344" stroke-width="1"/>
                                    <line x1="260" y1="60" x2="200" y2="100" stroke="#6b5344" stroke-width="1"/>
                                    <line x1="145" y1="75" x2="200" y2="105" stroke="#6b5344" stroke-width="1"/>
                                    <line x1="255" y1="75" x2="200" y2="105" stroke="#6b5344" stroke-width="1"/>

                                    <!-- Cross -->
                                    <line x1="200" y1="80" x2="200" y2="170" stroke="#5c4033" stroke-width="6"/>
                                    <line x1="170" y1="100" x2="230" y2="100" stroke="#5c4033" stroke-width="6"/>

                                    <!-- Vanishing point marker -->
                                    <circle cx="200" cy="195" r="5" fill="#ef4444"/>
                                    <text x="200" y="215" text-anchor="middle" fill="#ef4444" font-size="8">Vanishing Point</text>
                                    <text x="200" y="225" text-anchor="middle" fill="#888" font-size="7">(Viewer's Eye Level)</text>

                                    <!-- Perspective lines -->
                                    <line x1="120" y1="285" x2="200" y2="195" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>
                                    <line x1="280" y1="285" x2="200" y2="195" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>
                                    <line x1="135" y1="195" x2="200" y2="195" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>
                                    <line x1="265" y1="195" x2="200" y2="195" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>

                                    <!-- Skeleton (memento mori) -->
                                    <rect x="150" y="240" width="100" height="40" fill="#d4c4b0" stroke="#8b7355"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#5c4033" font-size="8">SKELETON</text>

                                    <!-- Annotations -->
                                    <rect x="10" y="50" width="100" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="60" y="68" text-anchor="middle" fill="#3b82f6" font-size="9">Barrel Vault</text>
                                    <text x="60" y="82" text-anchor="middle" fill="#fff" font-size="8">Creates depth</text>

                                    <rect x="290" y="100" width="100" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="340" y="118" text-anchor="middle" fill="#10b981" font-size="9">Hierarchy</text>
                                    <text x="340" y="132" text-anchor="middle" fill="#fff" font-size="8">God→Christ→Mary</text>

                                    <rect x="290" y="230" width="100" height="55" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="340" y="248" text-anchor="middle" fill="#f59e0b" font-size="9">Memento Mori</text>
                                    <text x="340" y="262" text-anchor="middle" fill="#fff" font-size="8">"What you are,</text>
                                    <text x="340" y="274" text-anchor="middle" fill="#fff" font-size="8">I once was"</text>
                                </svg>`,
                                caption: "The vanishing point at viewer's eye level creates an illusion of a real chapel"
                            }
                        },
                        {
                            type: "example",
                            title: "Donatello's 4 Revolutionary Innovations",
                            content: "Donato di Niccolò di Betto Bardi, called Donatello, worked for over 60 years and revolutionized sculpture in ways that are still influential today.\n\nINNOVATION 1: THE BRONZE DAVID (c. 1440s)\n• First free-standing nude male sculpture since ancient Rome\n• Shocking at the time - nudity in art had been taboo for 1000 years\n• Shows David as a young boy, not a warrior - contemplative, almost feminine\n• Cast in bronze using lost-wax technique\n\nINNOVATION 2: SCHIACCIATO (ski-ah-CHA-to)\n• Italian for 'squashed' or 'flattened'\n• Ultra-shallow relief carving that creates depth illusion\n• Donatello carved figures that appear to recede into space using paper-thin variations in depth\n• Applied perspective principles to sculpture\n\nINNOVATION 3: PSYCHOLOGICAL DEPTH\n• His figures show real emotions: pride, weariness, sternness, anguish\n• Before Donatello, sculptures showed types, not individuals\n• His prophets look like real men you might meet on the street\n\nINNOVATION 4: CONTRAPPOSTO (contra-POST-oh)\n• Italian for 'counterpose'\n• Weight shifted to one leg, creating natural S-curve\n• Revived ancient Greek technique that had been lost\n• Made figures look alive, not stiff",
                            visual: {
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">DONATELLO (c. 1386-1466) - SCULPTURE MASTER</text>

                                    <!-- Innovation 1: David -->
                                    <rect x="20" y="40" width="175" height="115" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="60" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">DAVID (c. 1440s)</text>
                                    <!-- Simplified figure -->
                                    <circle cx="70" cy="95" r="12" fill="#cd853f"/>
                                    <ellipse cx="70" cy="125" rx="15" ry="25" fill="#cd853f"/>
                                    <text x="140" y="90" text-anchor="middle" fill="#fff" font-size="9">First free-standing</text>
                                    <text x="140" y="103" text-anchor="middle" fill="#fff" font-size="9">nude male sculpture</text>
                                    <text x="140" y="116" text-anchor="middle" fill="#888" font-size="8">since ancient Rome!</text>
                                    <rect x="25" y="135" width="165" height="15" rx="3" fill="rgba(245,158,11,0.3)"/>
                                    <text x="107" y="146" text-anchor="middle" fill="#f59e0b" font-size="8">BRONZE • CONTEMPLATIVE • YOUTHFUL</text>

                                    <!-- Innovation 2: Schiacciato -->
                                    <rect x="205" y="40" width="175" height="115" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="60" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">SCHIACCIATO</text>
                                    <text x="292" y="75" text-anchor="middle" fill="#888" font-size="9">(ski-ah-CHA-to)</text>
                                    <!-- Depth demonstration -->
                                    <rect x="230" y="85" width="50" height="40" fill="#2a2a4e" stroke="#8b5cf6"/>
                                    <text x="255" y="108" text-anchor="middle" fill="#fff" font-size="7">DEEP</text>
                                    <rect x="290" y="90" width="50" height="30" fill="#3a3a5e" stroke="#8b5cf6"/>
                                    <text x="315" y="108" text-anchor="middle" fill="#fff" font-size="7">SHALLOW</text>
                                    <text x="292" y="140" text-anchor="middle" fill="#fff" font-size="9">Very shallow carving</text>
                                    <text x="292" y="152" text-anchor="middle" fill="#888" font-size="8">creates depth illusion</text>

                                    <!-- Innovation 3: Psychological Depth -->
                                    <rect x="20" y="165" width="175" height="115" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="185" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">PSYCHOLOGICAL DEPTH</text>
                                    <!-- Face expressions -->
                                    <circle cx="55" cy="225" r="18" fill="#ffe4c4" stroke="#10b981"/>
                                    <path d="M48 220 Q55 225 62 220" stroke="#333" stroke-width="1.5" fill="none"/>
                                    <text x="55" y="255" text-anchor="middle" fill="#888" font-size="7">PROUD</text>
                                    <circle cx="107" cy="225" r="18" fill="#ffe4c4" stroke="#10b981"/>
                                    <path d="M100 223 Q107 218 114 223" stroke="#333" stroke-width="1.5" fill="none"/>
                                    <text x="107" y="255" text-anchor="middle" fill="#888" font-size="7">WEARY</text>
                                    <circle cx="159" cy="225" r="18" fill="#ffe4c4" stroke="#10b981"/>
                                    <line x1="152" y1="222" x2="166" y2="222" stroke="#333" stroke-width="1.5"/>
                                    <text x="159" y="255" text-anchor="middle" fill="#888" font-size="7">STERN</text>
                                    <text x="107" y="272" text-anchor="middle" fill="#fff" font-size="9">Real emotions in stone</text>

                                    <!-- Innovation 4: Contrapposto -->
                                    <rect x="205" y="165" width="175" height="115" rx="8" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="292" y="185" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="11">CONTRAPPOSTO</text>
                                    <text x="292" y="200" text-anchor="middle" fill="#888" font-size="9">(contra-POST-oh)</text>
                                    <!-- Figure with shifted weight -->
                                    <circle cx="292" cy="220" r="10" fill="#ffe4c4"/>
                                    <line x1="292" y1="230" x2="290" y2="255" stroke="#ffe4c4" stroke-width="4"/>
                                    <line x1="290" y1="240" x2="275" y2="235" stroke="#ffe4c4" stroke-width="3"/>
                                    <line x1="290" y1="240" x2="305" y2="250" stroke="#ffe4c4" stroke-width="3"/>
                                    <line x1="290" y1="255" x2="285" y2="275" stroke="#ffe4c4" stroke-width="3"/>
                                    <line x1="290" y1="255" x2="300" y2="275" stroke="#ffe4c4" stroke-width="3"/>
                                    <text x="250" y="260" text-anchor="middle" fill="#fff" font-size="8">Weight</text>
                                    <text x="250" y="272" text-anchor="middle" fill="#fff" font-size="8">shifted</text>
                                    <path d="M258 265 L275 270" stroke="#ec4899" stroke-width="1" marker-end="url(#arrow)"/>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="13">ALBERTI: THE RENAISSANCE RULEBOOK</text>

                                    <rect x="20" y="40" width="175" height="100" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="60" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">ON PAINTING (1435)</text>
                                    <text x="107" y="80" text-anchor="middle" fill="#fff" font-size="8">• Mathematical perspective</text>
                                    <text x="107" y="95" text-anchor="middle" fill="#fff" font-size="8">• 'Window' metaphor</text>
                                    <text x="107" y="110" text-anchor="middle" fill="#fff" font-size="8">• Art as science</text>
                                    <text x="107" y="130" text-anchor="middle" fill="#888" font-size="7">First art theory book</text>

                                    <rect x="205" y="40" width="175" height="100" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="60" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">ON ARCHITECTURE</text>
                                    <text x="292" y="75" text-anchor="middle" fill="#f59e0b" font-size="9">(1452)</text>
                                    <text x="292" y="95" text-anchor="middle" fill="#fff" font-size="8">• Classical principles</text>
                                    <text x="292" y="110" text-anchor="middle" fill="#fff" font-size="8">• Proportion systems</text>
                                    <text x="292" y="125" text-anchor="middle" fill="#888" font-size="7">Influenced 400 years</text>

                                    <rect x="40" y="155" width="320" height="60" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="175" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="9">"The painter who draws merely by practice and by eye,</text>
                                    <text x="200" y="190" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="9">without any reason, is like a mirror which copies</text>
                                    <text x="200" y="205" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="9">everything without being conscious of their existence."</text>

                                    <rect x="80" y="225" width="240" height="40" rx="20" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">THE ORIGINAL 'RENAISSANCE MAN'</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#888" font-size="8">Architect • Author • Athlete • Mathematician</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="16">B M D A</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">"Big Men Did Art"</text>

                                    <rect x="20" y="60" width="85" height="90" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="62" y="80" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">B</text>
                                    <text x="62" y="100" text-anchor="middle" fill="#fff" font-size="8">Brunelleschi</text>
                                    <text x="62" y="115" text-anchor="middle" fill="#888" font-size="7">Perspective</text>
                                    <text x="62" y="128" text-anchor="middle" fill="#888" font-size="7">B = Baptistery</text>
                                    <text x="62" y="145" text-anchor="middle" fill="#f59e0b" font-size="7">1377</text>

                                    <rect x="115" y="60" width="85" height="90" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="157" y="80" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">M</text>
                                    <text x="157" y="100" text-anchor="middle" fill="#fff" font-size="8">Masaccio</text>
                                    <text x="157" y="115" text-anchor="middle" fill="#888" font-size="7">Painting</text>
                                    <text x="157" y="128" text-anchor="middle" fill="#888" font-size="7">M = Magic</text>
                                    <text x="157" y="145" text-anchor="middle" fill="#ef4444" font-size="7">1401</text>

                                    <rect x="210" y="60" width="85" height="90" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="252" y="80" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">D</text>
                                    <text x="252" y="100" text-anchor="middle" fill="#fff" font-size="8">Donatello</text>
                                    <text x="252" y="115" text-anchor="middle" fill="#888" font-size="7">Sculpture</text>
                                    <text x="252" y="128" text-anchor="middle" fill="#888" font-size="7">D = David</text>
                                    <text x="252" y="145" text-anchor="middle" fill="#10b981" font-size="7">1386</text>

                                    <rect x="305" y="60" width="85" height="90" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="347" y="80" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">A</text>
                                    <text x="347" y="100" text-anchor="middle" fill="#fff" font-size="8">Alberti</text>
                                    <text x="347" y="115" text-anchor="middle" fill="#888" font-size="7">Theory</text>
                                    <text x="347" y="128" text-anchor="middle" fill="#888" font-size="7">A = Author</text>
                                    <text x="347" y="145" text-anchor="middle" fill="#8b5cf6" font-size="7">1404</text>

                                    <rect x="30" y="165" width="340" height="45" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="185" text-anchor="middle" fill="#ec4899" font-size="10">FUN FACT: The Teenage Mutant Ninja Turtles</text>
                                    <text x="200" y="200" text-anchor="middle" fill="#888" font-size="9">are named after these Renaissance artists!</text>

                                    <rect x="60" y="220" width="280" height="45" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="240" text-anchor="middle" fill="#3b82f6" font-size="9">CHRONOLOGICAL: B (1377) → D (1386) → M (1401) → A (1404)</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#888" font-size="8">Older generation (BD) taught younger generation (MA)</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Why the Early Renaissance Matters",
                            content: "Here's what you can say to show you really understand the Early Florentine Renaissance:\n\n1. 'IT WAS MORE SCIENTIFIC THAN ARTISTIC'\n'Renaissance artists didn't just have better taste - they applied mathematics, geometry, and optics to create systematic methods. Brunelleschi's perspective wasn't an artistic flourish; it was geometry.'\n\n2. 'FLORENCE WAS TINY BUT MIGHTY'\n'This revolution happened in a city of only 60,000 people - smaller than many suburbs today. But wealth, competition, and civic pride created perfect conditions for innovation.'\n\n3. 'THEY WEREN'T REJECTING RELIGION'\n'Despite the focus on human achievement, these artists were deeply religious. They used new techniques to make sacred subjects more moving, not less. Masaccio's Holy Trinity combines mathematical precision with profound spiritual meaning.'\n\n4. 'IT SPREAD THROUGH BOOKS'\n'Alberti's treatises were revolutionary because they made artistic knowledge portable. Before him, you had to apprentice in Florence to learn these techniques.'\n\n5. 'THE NINJA TURTLES CONNECTION'\n'The Teenage Mutant Ninja Turtles are named Donatello, Raphael, Michelangelo, and Leonardo - all Renaissance artists. That's actually a great memory device!'",
                            visual: {
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">5 CONVERSATION STARTERS</text>

                                    <rect x="20" y="40" width="175" height="70" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="40" cy="60" r="12" fill="#f59e0b"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">1</text>
                                    <text x="115" y="58" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">SCIENCE + ART</text>
                                    <text x="115" y="73" text-anchor="middle" fill="#fff" font-size="7">"Renaissance art was</text>
                                    <text x="115" y="85" text-anchor="middle" fill="#fff" font-size="7">geometry, not just taste"</text>
                                    <text x="115" y="100" text-anchor="middle" fill="#888" font-size="6">Brunelleschi = math genius</text>

                                    <rect x="205" y="40" width="175" height="70" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="225" cy="60" r="12" fill="#10b981"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">2</text>
                                    <text x="300" y="58" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">TINY CITY</text>
                                    <text x="300" y="73" text-anchor="middle" fill="#fff" font-size="7">"Florence had only</text>
                                    <text x="300" y="85" text-anchor="middle" fill="#fff" font-size="7">60,000 people"</text>
                                    <text x="300" y="100" text-anchor="middle" fill="#888" font-size="6">Smaller than many suburbs</text>

                                    <rect x="20" y="120" width="175" height="70" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="40" cy="140" r="12" fill="#8b5cf6"/>
                                    <text x="40" y="145" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
                                    <text x="115" y="138" text-anchor="middle" fill="#8b5cf6" font-size="8" font-weight="bold">STILL RELIGIOUS</text>
                                    <text x="115" y="153" text-anchor="middle" fill="#fff" font-size="7">"New techniques made</text>
                                    <text x="115" y="165" text-anchor="middle" fill="#fff" font-size="7">sacred art MORE moving"</text>
                                    <text x="115" y="180" text-anchor="middle" fill="#888" font-size="6">Not anti-Christian</text>

                                    <rect x="205" y="120" width="175" height="70" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="225" cy="140" r="12" fill="#ef4444"/>
                                    <text x="225" y="145" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
                                    <text x="300" y="138" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="bold">BOOKS SPREAD IT</text>
                                    <text x="300" y="153" text-anchor="middle" fill="#fff" font-size="7">"Alberti's treatises made</text>
                                    <text x="300" y="165" text-anchor="middle" fill="#fff" font-size="7">knowledge portable"</text>
                                    <text x="300" y="180" text-anchor="middle" fill="#888" font-size="6">Before: only apprentices learned</text>

                                    <rect x="112" y="200" width="175" height="70" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <circle cx="132" cy="220" r="12" fill="#ec4899"/>
                                    <text x="132" y="225" text-anchor="middle" fill="#1a1a2e" font-weight="bold">5</text>
                                    <text x="207" y="218" text-anchor="middle" fill="#ec4899" font-size="8" font-weight="bold">NINJA TURTLES!</text>
                                    <text x="207" y="233" text-anchor="middle" fill="#fff" font-size="7">"They're named after</text>
                                    <text x="207" y="245" text-anchor="middle" fill="#fff" font-size="7">Renaissance artists"</text>
                                    <text x="207" y="260" text-anchor="middle" fill="#888" font-size="6">Great memory device</text>

                                    <text x="200" y="290" text-anchor="middle" fill="#ffd700" font-size="9">Use these to sound knowledgeable at museums!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. WHY FLORENCE? Wealthy banking families (especially Medici) competed through art patronage in a republican city-state that valued civic pride and saw itself as heir to Rome.\n\n2. THE FLORENTINE FOUR (BMDA):\n• Brunelleschi - invented linear perspective (c. 1413)\n• Masaccio - first to fully apply perspective to painting (Holy Trinity, 1427)\n• Donatello - revolutionized sculpture (Bronze David, schiacciato)\n• Alberti - wrote the rulebook (On Painting, 1435)\n\n3. LINEAR PERSPECTIVE: Brunelleschi proved mathematically that:\n• All parallel lines converge at a vanishing point\n• Objects shrink proportionally with distance\n• The vanishing point is at viewer's eye level\n\n4. KEY INNOVATIONS:\n• Scientific approach to art (math, anatomy, optics)\n• Revival of classical (Greek/Roman) ideals\n• Psychological depth in figures\n• Artists celebrated as individuals, not anonymous craftsmen\n\n5. HOW IT SPREAD: Alberti's treatises made Florentine techniques learnable by anyone, not just local apprentices.\n\nYou can now discuss the Early Italian Renaissance with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="40" cy="60" r="12" fill="#f59e0b"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">1</text>
                                    <text x="115" y="58" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">WHY FLORENCE?</text>
                                    <text x="115" y="75" text-anchor="middle" fill="#fff" font-size="7">Wealth + Competition + Pride</text>
                                    <text x="115" y="87" text-anchor="middle" fill="#888" font-size="6">Medici banking family</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="225" cy="60" r="12" fill="#8b5cf6"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
                                    <text x="300" y="58" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">THE FOUR</text>
                                    <text x="300" y="75" text-anchor="middle" fill="#fff" font-size="7">BMDA mnemonic</text>
                                    <text x="300" y="87" text-anchor="middle" fill="#888" font-size="6">"Big Men Did Art"</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="40" cy="125" r="12" fill="#10b981"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">3</text>
                                    <text x="115" y="123" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">PERSPECTIVE</text>
                                    <text x="115" y="140" text-anchor="middle" fill="#fff" font-size="7">Vanishing point + Math</text>
                                    <text x="115" y="152" text-anchor="middle" fill="#888" font-size="6">Brunelleschi's experiment</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="225" cy="125" r="12" fill="#ef4444"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
                                    <text x="300" y="123" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">INNOVATIONS</text>
                                    <text x="300" y="140" text-anchor="middle" fill="#fff" font-size="7">Science + Classical revival</text>
                                    <text x="300" y="152" text-anchor="middle" fill="#888" font-size="6">Psychological depth</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="132" cy="190" r="12" fill="#3b82f6"/>
                                    <text x="132" y="195" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
                                    <text x="207" y="188" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="bold">HOW IT SPREAD</text>
                                    <text x="207" y="205" text-anchor="middle" fill="#fff" font-size="7">Alberti's treatises</text>
                                    <text x="207" y="217" text-anchor="middle" fill="#888" font-size="6">Knowledge became portable</text>

                                    <rect x="50" y="240" width="300" height="65" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="272" r="18" fill="#10b981"/>
                                    <text x="90" y="278" text-anchor="middle" fill="#fff" font-size="16">✓</text>
                                    <text x="220" y="265" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">FEYNMAN TEST READY</text>
                                    <text x="220" y="282" text-anchor="middle" fill="#fff" font-size="8">You can explain the Early Renaissance!</text>
                                    <text x="220" y="295" text-anchor="middle" fill="#888" font-size="7">Try explaining to someone who knows nothing about art</text>
                                </svg>`
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Northern Renaissance: Van Eyck & Symbolism",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "A Different Renaissance: The North",
                            content: "While Florence invented mathematical perspective, something equally revolutionary was happening 700 miles north in the wealthy cities of Flanders (modern Belgium/Netherlands).\n\nTHE NORTHERN APPROACH:\n• OIL PAINTING MASTERY: Northern artists perfected oil paint techniques that created luminous, glowing surfaces impossible with Italian fresco\n• MICROSCOPIC DETAIL: They painted every thread, every jewel, every hair with obsessive precision\n• DISGUISED SYMBOLISM: Religious meanings were hidden in everyday objects - a candle means God's presence, a dog means fidelity\n• REALISTIC OBSERVATION: Instead of idealizing, they painted exactly what they saw - wrinkles, blemishes, and all\n\nWHY THE DIFFERENCE?\n• NO ROMAN RUINS: The North had no classical heritage to revive\n• WEALTH FROM TRADE: Flanders was Europe's richest trading region\n• DIFFERENT PATRONS: Wealthy merchants wanted domestic scenes, not grand frescoes\n• PORTABLE ART: Oil paintings could be moved; frescoes couldn't\n\nKEY FIGURE: Jan van Eyck (c. 1390-1441)\nHe didn't invent oil painting, but he perfected it to a level that astonished contemporaries and remains unsurpassed today.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 250" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="250" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">NORTHERN vs ITALIAN RENAISSANCE</text>

                                    <!-- Italian Side -->
                                    <rect x="20" y="45" width="170" height="180" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="105" y="65" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">ITALIAN</text>

                                    <text x="105" y="90" text-anchor="middle" fill="#fff" font-size="10">• Linear Perspective</text>
                                    <text x="105" y="110" text-anchor="middle" fill="#fff" font-size="10">• Classical Forms</text>
                                    <text x="105" y="130" text-anchor="middle" fill="#fff" font-size="10">• Idealized Beauty</text>
                                    <text x="105" y="150" text-anchor="middle" fill="#fff" font-size="10">• Fresco Painting</text>
                                    <text x="105" y="170" text-anchor="middle" fill="#fff" font-size="10">• Monumental Scale</text>

                                    <!-- Perspective cube -->
                                    <polygon points="60,190 90,185 90,210 60,215" fill="none" stroke="#f59e0b" stroke-width="2"/>
                                    <polygon points="90,185 110,190 110,215 90,210" fill="none" stroke="#f59e0b" stroke-width="2"/>
                                    <polygon points="60,190 90,185 110,190 80,195" fill="none" stroke="#f59e0b" stroke-width="2"/>

                                    <!-- Northern Side -->
                                    <rect x="210" y="45" width="170" height="180" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="295" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">NORTHERN</text>

                                    <text x="295" y="90" text-anchor="middle" fill="#fff" font-size="10">• Empirical Observation</text>
                                    <text x="295" y="110" text-anchor="middle" fill="#fff" font-size="10">• Disguised Symbolism</text>
                                    <text x="295" y="130" text-anchor="middle" fill="#fff" font-size="10">• Realistic Detail</text>
                                    <text x="295" y="150" text-anchor="middle" fill="#fff" font-size="10">• Oil Painting</text>
                                    <text x="295" y="170" text-anchor="middle" fill="#fff" font-size="10">• Intimate Scale</text>

                                    <!-- Detail symbol -->
                                    <circle cx="270" cy="200" r="15" fill="none" stroke="#3b82f6" stroke-width="2"/>
                                    <line x1="281" y1="211" x2="295" y2="225" stroke="#3b82f6" stroke-width="2"/>
                                    <circle cx="270" cy="200" r="5" fill="#3b82f6"/>
                                </svg>`,
                                caption: "Two distinct approaches to representing the world emerged simultaneously"
                            }
                        },
                        {
                            type: "quiz",
                            question: "What was the key difference between Northern and Italian Renaissance approaches?",
                            options: [
                                { text: "Northern artists only painted religious subjects", correct: false },
                                { text: "Northern artists focused on microscopic detail and oil painting, while Italians focused on perspective and classical forms", correct: true },
                                { text: "Italian artists used brighter colors", correct: false },
                                { text: "Northern artists only painted landscapes", correct: false }
                            ],
                            explanation: "The Northern Renaissance developed differently because the region had no Roman ruins to inspire classical revival. Instead, Northern artists like Van Eyck perfected oil painting techniques, painted with obsessive detail, and hid religious meanings in everyday objects (disguised symbolism)."
                        },
                        {
                            type: "example",
                            title: "Jan van Eyck: The 4 Secrets of His Mastery",
                            content: "Jan van Eyck (c. 1390-1441) was court painter to Philip the Good, Duke of Burgundy. His techniques were so advanced that for centuries people believed he had invented oil painting. Here are his four secrets:\n\nSECRET 1: LAYERED GLAZES\n• He applied many thin, transparent layers of oil paint\n• Each layer added depth and luminosity\n• Light passes through the layers and bounces back, creating an inner glow\n• This is why his paintings seem to shine from within\n\nSECRET 2: MICROSCOPIC DETAIL\n• You need a magnifying glass to see all his details\n• Individual threads in fabric, reflections in jewels, single hairs in fur\n• He may have used a magnifying lens while painting\n\nSECRET 3: REALISTIC LIGHT\n• Light in his paintings behaves as it does in reality\n• Reflections appear in curved surfaces (like the famous convex mirror)\n• Shadows have proper gradation\n• Light comes from specific sources and creates consistent effects\n\nSECRET 4: CONFIDENCE (His Motto)\n• He signed works with 'Als ich kan' ('As I can')\n• A humble-brag: 'as well as I can' but also 'as only I can'\n• He knew he was the best - and he was right",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="13">VAN EYCK'S TECHNICAL MASTERY (c. 1390-1441)</text>

                                    <!-- Secret 1: Layered Glazes -->
                                    <rect x="20" y="45" width="175" height="120" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="107" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">SECRET 1: LAYERED GLAZES</text>
                                    <!-- Layer demonstration -->
                                    <rect x="50" y="80" width="80" height="15" rx="2" fill="rgba(255,255,255,0.1)" stroke="#fff" stroke-width="0.5"/>
                                    <rect x="50" y="95" width="80" height="15" rx="2" fill="rgba(255,255,255,0.2)" stroke="#fff" stroke-width="0.5"/>
                                    <rect x="50" y="110" width="80" height="15" rx="2" fill="rgba(255,255,255,0.3)" stroke="#fff" stroke-width="0.5"/>
                                    <rect x="50" y="125" width="80" height="15" rx="2" fill="rgba(255,255,255,0.5)" stroke="#fff" stroke-width="0.5"/>
                                    <text x="145" y="95" fill="#fff" font-size="8">Thin layers</text>
                                    <text x="145" y="108" fill="#fff" font-size="8">build up to</text>
                                    <text x="145" y="121" fill="#fff" font-size="8">create GLOW</text>
                                    <text x="107" y="155" text-anchor="middle" fill="#888" font-size="8">Each layer adds depth and luminosity</text>

                                    <!-- Secret 2: Microscopic Detail -->
                                    <rect x="205" y="45" width="175" height="120" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">SECRET 2: MICROSCOPIC DETAIL</text>
                                    <!-- Magnifying glass -->
                                    <circle cx="270" cy="110" r="30" fill="none" stroke="#8b5cf6" stroke-width="3"/>
                                    <line x1="291" y1="131" x2="310" y2="150" stroke="#8b5cf6" stroke-width="4"/>
                                    <!-- Details inside -->
                                    <circle cx="260" cy="105" r="3" fill="#ffd700"/>
                                    <circle cx="275" cy="100" r="2" fill="#ef4444"/>
                                    <rect x="265" y="115" width="15" height="8" fill="#8b4513" rx="1"/>
                                    <text x="330" y="105" fill="#fff" font-size="8">You need</text>
                                    <text x="330" y="118" fill="#fff" font-size="8">magnification</text>
                                    <text x="330" y="131" fill="#fff" font-size="8">to see it all!</text>
                                    <text x="292" y="155" text-anchor="middle" fill="#888" font-size="8">Jewels, fur, wood grain - all perfect</text>

                                    <!-- Secret 3: Light Effects -->
                                    <rect x="20" y="175" width="175" height="120" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="195" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">SECRET 3: LIGHT EFFECTS</text>
                                    <!-- Window with light rays -->
                                    <rect x="45" y="210" width="40" height="50" fill="#87ceeb" stroke="#fff" stroke-width="2"/>
                                    <line x1="65" y1="230" x2="120" y2="250" stroke="#ffd700" stroke-width="2" opacity="0.6"/>
                                    <line x1="65" y1="235" x2="115" y2="260" stroke="#ffd700" stroke-width="2" opacity="0.4"/>
                                    <line x1="65" y1="240" x2="110" y2="270" stroke="#ffd700" stroke-width="2" opacity="0.3"/>
                                    <!-- Reflection circle -->
                                    <circle cx="140" cy="240" r="15" fill="none" stroke="#f59e0b"/>
                                    <circle cx="137" cy="237" r="3" fill="#fff"/>
                                    <text x="160" y="245" fill="#fff" font-size="8">Reflections</text>
                                    <text x="107" y="285" text-anchor="middle" fill="#888" font-size="8">Light behaves realistically</text>

                                    <!-- Secret 4: His Motto -->
                                    <rect x="205" y="175" width="175" height="120" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="195" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">SECRET 4: CONFIDENCE</text>
                                    <rect x="230" y="210" width="125" height="50" rx="6" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="292" y="235" text-anchor="middle" fill="#ffd700" font-style="italic" font-size="14">"Als ich kan"</text>
                                    <text x="292" y="252" text-anchor="middle" fill="#fff" font-size="9">"As I can"</text>
                                    <text x="292" y="280" text-anchor="middle" fill="#888" font-size="8">His signature motto - pure confidence</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">ARNOLFINI PORTRAIT - SYMBOLIC ANALYSIS</text>

                                    <!-- Painting frame -->
                                    <rect x="100" y="35" width="200" height="250" fill="#2d4a3e" rx="4"/>
                                    <rect x="105" y="40" width="190" height="240" fill="#4a6b5c"/>

                                    <!-- Chandelier -->
                                    <circle cx="200" cy="60" r="15" fill="none" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="185" y1="55" x2="180" y2="50" stroke="#ffd700" stroke-width="1"/>
                                    <line x1="215" y1="55" x2="220" y2="50" stroke="#ffd700" stroke-width="1"/>
                                    <circle cx="200" cy="55" r="3" fill="#ffd700"/>

                                    <!-- Mirror -->
                                    <circle cx="200" cy="140" r="20" fill="#87ceeb" stroke="#8b4513" stroke-width="3"/>

                                    <!-- Figures simplified -->
                                    <ellipse cx="160" cy="180" rx="25" ry="45" fill="#1a1a1a"/>
                                    <circle cx="160" cy="120" r="12" fill="#ffe4c4"/>

                                    <ellipse cx="240" cy="190" rx="30" ry="50" fill="#228b22"/>
                                    <circle cx="240" cy="125" r="12" fill="#ffe4c4"/>

                                    <!-- Dog -->
                                    <ellipse cx="200" cy="260" rx="15" ry="8" fill="#8b4513"/>

                                    <!-- Annotations -->
                                    <line x1="200" y1="75" x2="20" y2="60" stroke="#ffd700" stroke-width="1"/>
                                    <rect x="5" y="45" width="70" height="35" rx="3" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="40" y="60" text-anchor="middle" fill="#ffd700" font-size="8">CHANDELIER</text>
                                    <text x="40" y="72" text-anchor="middle" fill="#fff" font-size="7">Divine presence</text>

                                    <line x1="200" y1="140" x2="320" y2="100" stroke="#3b82f6" stroke-width="1"/>
                                    <rect x="305" y="85" width="85" height="45" rx="3" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="347" y="100" text-anchor="middle" fill="#3b82f6" font-size="8">CONVEX MIRROR</text>
                                    <text x="347" y="112" text-anchor="middle" fill="#fff" font-size="7">Shows witnesses</text>
                                    <text x="347" y="122" text-anchor="middle" fill="#fff" font-size="7">& artist</text>

                                    <line x1="160" y1="220" x2="20" y2="180" stroke="#ef4444" stroke-width="1"/>
                                    <rect x="5" y="165" width="70" height="35" rx="3" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="40" y="180" text-anchor="middle" fill="#ef4444" font-size="8">REMOVED SHOES</text>
                                    <text x="40" y="192" text-anchor="middle" fill="#fff" font-size="7">Holy ground</text>

                                    <line x1="200" y1="260" x2="320" y2="240" stroke="#10b981" stroke-width="1"/>
                                    <rect x="305" y="225" width="85" height="35" rx="3" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="347" y="240" text-anchor="middle" fill="#10b981" font-size="8">DOG</text>
                                    <text x="347" y="252" text-anchor="middle" fill="#fff" font-size="7">Fidelity/loyalty</text>

                                    <line x1="240" y1="200" x2="320" y2="175" stroke="#8b5cf6" stroke-width="1"/>
                                    <rect x="305" y="155" width="85" height="35" rx="3" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="347" y="170" text-anchor="middle" fill="#8b5cf6" font-size="8">GREEN DRESS</text>
                                    <text x="347" y="182" text-anchor="middle" fill="#fff" font-size="7">Fertility hope</text>

                                    <!-- Signature note -->
                                    <rect x="130" y="290" width="140" height="22" rx="3" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="200" y="305" text-anchor="middle" fill="#ec4899" font-size="9">"Jan van Eyck was here 1434"</text>
                                </svg>`,
                                caption: "Every object carries symbolic meaning in this meticulously detailed painting"
                            }
                        },
                        {
                            type: "visual",
                            title: "Disguised Symbolism: A Visual Guide",
                            visual: {
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">HIDDEN MEANINGS IN THE ARNOLFINI PORTRAIT</text>
                                    <text x="200" y="40" text-anchor="middle" fill="#888" font-size="9">Northern artists hid sacred messages in everyday objects</text>

                                    <!-- Row 1 -->
                                    <rect x="20" y="55" width="115" height="80" rx="6" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="77" y="75" text-anchor="middle" fill="#ffd700" font-size="18">1</text>
                                    <text x="77" y="95" text-anchor="middle" fill="#fff" font-size="10">Single Candle</text>
                                    <text x="77" y="110" text-anchor="middle" fill="#888" font-size="8">God's presence</text>
                                    <text x="77" y="122" text-anchor="middle" fill="#888" font-size="8">witnessing the scene</text>

                                    <rect x="142" y="55" width="115" height="80" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#8b5cf6" font-size="18">2</text>
                                    <text x="200" y="95" text-anchor="middle" fill="#fff" font-size="10">Convex Mirror</text>
                                    <text x="200" y="110" text-anchor="middle" fill="#888" font-size="8">All-seeing eye of God</text>
                                    <text x="200" y="122" text-anchor="middle" fill="#888" font-size="8">shows hidden witnesses</text>

                                    <rect x="264" y="55" width="115" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="322" y="75" text-anchor="middle" fill="#10b981" font-size="18">3</text>
                                    <text x="322" y="95" text-anchor="middle" fill="#fff" font-size="10">Small Dog</text>
                                    <text x="322" y="110" text-anchor="middle" fill="#888" font-size="8">Fidelity and loyalty</text>
                                    <text x="322" y="122" text-anchor="middle" fill="#888" font-size="8">in marriage</text>

                                    <!-- Row 2 -->
                                    <rect x="20" y="145" width="115" height="80" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="77" y="165" text-anchor="middle" fill="#3b82f6" font-size="18">4</text>
                                    <text x="77" y="185" text-anchor="middle" fill="#fff" font-size="10">Removed Shoes</text>
                                    <text x="77" y="200" text-anchor="middle" fill="#888" font-size="8">Standing on holy</text>
                                    <text x="77" y="212" text-anchor="middle" fill="#888" font-size="8">ground (sacrament)</text>

                                    <rect x="142" y="145" width="115" height="80" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="165" text-anchor="middle" fill="#f59e0b" font-size="18">5</text>
                                    <text x="200" y="185" text-anchor="middle" fill="#fff" font-size="10">Oranges</text>
                                    <text x="200" y="200" text-anchor="middle" fill="#888" font-size="8">Wealth OR innocence</text>
                                    <text x="200" y="212" text-anchor="middle" fill="#888" font-size="8">before the Fall</text>

                                    <rect x="264" y="145" width="115" height="80" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="322" y="165" text-anchor="middle" fill="#ec4899" font-size="18">6</text>
                                    <text x="322" y="185" text-anchor="middle" fill="#fff" font-size="10">Prayer Beads</text>
                                    <text x="322" y="200" text-anchor="middle" fill="#888" font-size="8">Piety and devotion</text>
                                    <text x="322" y="212" text-anchor="middle" fill="#888" font-size="8">in daily life</text>

                                    <!-- Key insight box -->
                                    <rect x="50" y="245" width="300" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="#fff" stroke-width="1"/>
                                    <text x="200" y="270" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">THE KEY INSIGHT</text>
                                    <text x="200" y="290" text-anchor="middle" fill="#888" font-size="10">Every object you see has a hidden meaning.</text>
                                    <text x="200" y="305" text-anchor="middle" fill="#888" font-size="10">Nothing is accidental in Northern Renaissance art.</text>
                                </svg>`,
                                caption: "This technique allowed sacred meaning to permeate secular scenes"
                            }
                        },
                        {
                            type: "visual",
                            title: "The Ghent Altarpiece (1432) - Masterpiece Breakdown",
                            visual: {
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="13">THE GHENT ALTARPIECE: 12 PANELS OF GENIUS</text>

                                    <!-- Altarpiece structure diagram -->
                                    <rect x="80" y="45" width="240" height="140" rx="4" fill="#2a2a4e" stroke="#8b4513" stroke-width="3"/>

                                    <!-- Upper panels -->
                                    <rect x="90" y="55" width="70" height="55" fill="#4a3728" stroke="#ffd700" stroke-width="1"/>
                                    <text x="125" y="85" text-anchor="middle" fill="#fff" font-size="7">Virgin Mary</text>
                                    <rect x="165" y="55" width="70" height="55" fill="#4a3728" stroke="#ffd700" stroke-width="1"/>
                                    <text x="200" y="85" text-anchor="middle" fill="#fff" font-size="7">God the Father</text>
                                    <rect x="240" y="55" width="70" height="55" fill="#4a3728" stroke="#ffd700" stroke-width="1"/>
                                    <text x="275" y="85" text-anchor="middle" fill="#fff" font-size="7">John Baptist</text>

                                    <!-- Lower panels -->
                                    <rect x="90" y="115" width="220" height="60" fill="#228b22" stroke="#ffd700" stroke-width="1"/>
                                    <text x="200" y="140" text-anchor="middle" fill="#fff" font-size="9">ADORATION OF THE MYSTIC LAMB</text>
                                    <text x="200" y="155" text-anchor="middle" fill="#ffd700" font-size="7">Central Panel - Christ's Sacrifice</text>
                                    <!-- Lamb symbol -->
                                    <circle cx="200" y="165" r="5" fill="#fff"/>

                                    <!-- Structure info -->
                                    <rect x="20" y="200" width="175" height="60" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="107" y="220" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">STRUCTURE</text>
                                    <text x="107" y="235" text-anchor="middle" fill="#fff" font-size="8">12 panels that OPEN and CLOSE</text>
                                    <text x="107" y="248" text-anchor="middle" fill="#888" font-size="8">revealing different scenes</text>

                                    <!-- Innovations info -->
                                    <rect x="205" y="200" width="175" height="60" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">WHY IT MATTERS</text>
                                    <text x="292" y="235" text-anchor="middle" fill="#fff" font-size="8">Most influential painting</text>
                                    <text x="292" y="248" text-anchor="middle" fill="#888" font-size="8">in art history</text>

                                    <!-- Four innovations -->
                                    <rect x="20" y="270" width="360" height="60" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="288" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">4 INNOVATIONS</text>
                                    <text x="65" y="305" text-anchor="middle" fill="#fff" font-size="8">Extreme</text>
                                    <text x="65" y="317" text-anchor="middle" fill="#888" font-size="7">Realism</text>
                                    <text x="155" y="305" text-anchor="middle" fill="#fff" font-size="8">Psychological</text>
                                    <text x="155" y="317" text-anchor="middle" fill="#888" font-size="7">Depth</text>
                                    <text x="245" y="305" text-anchor="middle" fill="#fff" font-size="8">Light</text>
                                    <text x="245" y="317" text-anchor="middle" fill="#888" font-size="7">Effects</text>
                                    <text x="335" y="305" text-anchor="middle" fill="#fff" font-size="8">Unified</text>
                                    <text x="335" y="317" text-anchor="middle" fill="#888" font-size="7">Design</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">G O L D</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Remember Northern Renaissance with wealth!</text>

                                    <rect x="20" y="60" width="85" height="95" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="62" y="82" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">G</text>
                                    <text x="62" y="100" text-anchor="middle" fill="#fff" font-size="9">GLAZES</text>
                                    <text x="62" y="115" text-anchor="middle" fill="#888" font-size="7">Layered oil</text>
                                    <text x="62" y="127" text-anchor="middle" fill="#888" font-size="7">painting</text>
                                    <rect x="40" y="135" width="44" height="12" rx="2" fill="rgba(59,130,246,0.3)"/>
                                    <rect x="40" y="138" width="44" height="6" rx="1" fill="rgba(59,130,246,0.5)"/>

                                    <rect x="115" y="60" width="85" height="95" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="157" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">O</text>
                                    <text x="157" y="100" text-anchor="middle" fill="#fff" font-size="9">OBSERVATION</text>
                                    <text x="157" y="115" text-anchor="middle" fill="#888" font-size="7">Microscopic</text>
                                    <text x="157" y="127" text-anchor="middle" fill="#888" font-size="7">detail</text>
                                    <circle cx="157" cy="142" r="10" fill="none" stroke="#10b981"/>
                                    <circle cx="157" cy="142" r="3" fill="#10b981"/>

                                    <rect x="210" y="60" width="85" height="95" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="252" y="82" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">L</text>
                                    <text x="252" y="100" text-anchor="middle" fill="#fff" font-size="9">LIGHT</text>
                                    <text x="252" y="115" text-anchor="middle" fill="#888" font-size="7">Realistic</text>
                                    <text x="252" y="127" text-anchor="middle" fill="#888" font-size="7">effects</text>
                                    <line x1="235" y1="138" x2="270" y2="148" stroke="#f59e0b" stroke-width="2"/>
                                    <line x1="235" y1="143" x2="265" y2="150" stroke="#f59e0b" stroke-width="1"/>

                                    <rect x="305" y="60" width="85" height="95" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="347" y="82" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">D</text>
                                    <text x="347" y="100" text-anchor="middle" fill="#fff" font-size="9">DISGUISED</text>
                                    <text x="347" y="115" text-anchor="middle" fill="#888" font-size="7">Symbolism</text>
                                    <text x="347" y="127" text-anchor="middle" fill="#888" font-size="7">hidden</text>
                                    <circle cx="347" cy="142" r="8" fill="#ffd700" opacity="0.5"/>

                                    <rect x="30" y="170" width="340" height="95" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="190" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="11">COMMON SYMBOLS TO REMEMBER</text>

                                    <text x="80" y="215" text-anchor="middle" fill="#fff" font-size="9">Candle</text>
                                    <text x="80" y="230" text-anchor="middle" fill="#888" font-size="7">= God's presence</text>

                                    <text x="160" y="215" text-anchor="middle" fill="#fff" font-size="9">Dog</text>
                                    <text x="160" y="230" text-anchor="middle" fill="#888" font-size="7">= Fidelity</text>

                                    <text x="240" y="215" text-anchor="middle" fill="#fff" font-size="9">Mirror</text>
                                    <text x="240" y="230" text-anchor="middle" fill="#888" font-size="7">= God's eye</text>

                                    <text x="320" y="215" text-anchor="middle" fill="#fff" font-size="9">Fruit</text>
                                    <text x="320" y="230" text-anchor="middle" fill="#888" font-size="7">= Wealth</text>

                                    <text x="200" y="255" text-anchor="middle" fill="#ffd700" font-size="9">Northern art = everyday objects with sacred meaning</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Northern vs Italian Art",
                            content: "Here's how to sound knowledgeable when discussing the Northern Renaissance:\n\n1. 'IT'S NOT BETTER OR WORSE - IT'S DIFFERENT'\n'Italian artists wanted ideal beauty through math; Northern artists wanted truth through observation. Both are valid approaches to representing reality.'\n\n2. 'VAN EYCK DIDN'T INVENT OIL PAINTING'\n'Despite the old myth, he perfected it. His layered glaze technique created effects impossible before - and barely matched since.'\n\n3. 'EVERYTHING HAS MEANING'\n'In Northern art, nothing is just decoration. That dog isn't just cute - it means fidelity. That candle isn't just lighting - it's God watching.'\n\n4. 'IT'S ABOUT WEALTH'\n'Flanders was the banking and trading capital of Northern Europe. Wealthy merchants wanted art that showed off their possessions - and justified their wealth with religious meaning.'\n\n5. 'THE MIRROR TRICK'\n'The convex mirror in the Arnolfini Portrait is the most famous detail in Northern art. It shows the whole room including (probably) Van Eyck himself. It's like an early selfie!'",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">5 WAYS TO SOUND LIKE AN EXPERT</text>

                                    <rect x="20" y="40" width="175" height="60" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="40" cy="60" r="12" fill="#3b82f6"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
                                    <text x="115" y="58" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="bold">NOT BETTER - DIFFERENT</text>
                                    <text x="115" y="73" text-anchor="middle" fill="#fff" font-size="7">Italians: ideal beauty</text>
                                    <text x="115" y="85" text-anchor="middle" fill="#888" font-size="6">Northerners: truth</text>

                                    <rect x="205" y="40" width="175" height="60" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="225" cy="60" r="12" fill="#10b981"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">2</text>
                                    <text x="300" y="58" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">VAN EYCK'S SECRET</text>
                                    <text x="300" y="73" text-anchor="middle" fill="#fff" font-size="7">Didn't invent oil paint</text>
                                    <text x="300" y="85" text-anchor="middle" fill="#888" font-size="6">Perfected the layering</text>

                                    <rect x="20" y="110" width="175" height="60" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="40" cy="130" r="12" fill="#8b5cf6"/>
                                    <text x="40" y="135" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
                                    <text x="115" y="128" text-anchor="middle" fill="#8b5cf6" font-size="8" font-weight="bold">EVERYTHING HAS MEANING</text>
                                    <text x="115" y="143" text-anchor="middle" fill="#fff" font-size="7">Dog = fidelity</text>
                                    <text x="115" y="155" text-anchor="middle" fill="#888" font-size="6">Candle = God watching</text>

                                    <rect x="205" y="110" width="175" height="60" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="225" cy="130" r="12" fill="#f59e0b"/>
                                    <text x="225" y="135" text-anchor="middle" fill="#1a1a2e" font-weight="bold">4</text>
                                    <text x="300" y="128" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">IT'S ABOUT WEALTH</text>
                                    <text x="300" y="143" text-anchor="middle" fill="#fff" font-size="7">Flanders = trading capital</text>
                                    <text x="300" y="155" text-anchor="middle" fill="#888" font-size="6">Merchants wanted art</text>

                                    <rect x="112" y="180" width="175" height="60" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <circle cx="132" cy="200" r="12" fill="#ec4899"/>
                                    <text x="132" y="205" text-anchor="middle" fill="#1a1a2e" font-weight="bold">5</text>
                                    <text x="207" y="198" text-anchor="middle" fill="#ec4899" font-size="8" font-weight="bold">THE MIRROR TRICK</text>
                                    <text x="207" y="213" text-anchor="middle" fill="#fff" font-size="7">"Early selfie" in the</text>
                                    <text x="207" y="225" text-anchor="middle" fill="#888" font-size="6">Arnolfini Portrait</text>

                                    <rect x="50" y="250" width="300" height="22" rx="11" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#ffd700" font-size="9">Use these at museums to impress your friends!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. THE NORTHERN DIFFERENCE:\n• Focused on oil painting and microscopic detail, not perspective and classical forms\n• No Roman ruins to revive, so observed nature instead\n• Wealthy merchant patrons wanted domestic scenes\n\n2. VAN EYCK'S FOUR SECRETS (GOLD):\n• Glazes - layered, transparent oil paint\n• Observation - microscopic, precise detail\n• Light - realistic, consistent lighting effects\n• Disguised symbolism - hidden religious meanings\n\n3. THE ARNOLFINI PORTRAIT:\n• Most analyzed painting in Western art\n• Every object carries symbolic meaning\n• Convex mirror shows the artist as witness\n• 'Jan van Eyck was here 1434' - not 'made this'\n\n4. DISGUISED SYMBOLISM:\n• Candle = God's presence\n• Dog = Fidelity\n• Mirror = God's all-seeing eye\n• Green = Fertility\n• Removed shoes = Holy ground\n\n5. NORTH VS SOUTH:\n• Different, not better or worse\n• Both valid approaches to truth in art\n• They eventually influenced each other\n\nYou can now discuss Van Eyck and Northern Renaissance art with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="40" cy="60" r="12" fill="#3b82f6"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
                                    <text x="115" y="58" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="bold">DIFFERENT PATH</text>
                                    <text x="115" y="75" text-anchor="middle" fill="#fff" font-size="7">Oil paint + Detail + Symbolism</text>
                                    <text x="115" y="87" text-anchor="middle" fill="#888" font-size="6">Not perspective + Classical</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <circle cx="225" cy="60" r="12" fill="#ffd700"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">2</text>
                                    <text x="300" y="58" text-anchor="middle" fill="#ffd700" font-size="9" font-weight="bold">GOLD MNEMONIC</text>
                                    <text x="300" y="75" text-anchor="middle" fill="#fff" font-size="7">Glazes • Observation</text>
                                    <text x="300" y="87" text-anchor="middle" fill="#888" font-size="6">Light • Disguised symbolism</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="40" cy="125" r="12" fill="#8b5cf6"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
                                    <text x="115" y="123" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">ARNOLFINI</text>
                                    <text x="115" y="140" text-anchor="middle" fill="#fff" font-size="7">Most analyzed painting ever</text>
                                    <text x="115" y="152" text-anchor="middle" fill="#888" font-size="6">Mirror • Symbols • Signature</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="225" cy="125" r="12" fill="#10b981"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">4</text>
                                    <text x="300" y="123" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">SYMBOLS</text>
                                    <text x="300" y="140" text-anchor="middle" fill="#fff" font-size="7">Candle • Dog • Mirror</text>
                                    <text x="300" y="152" text-anchor="middle" fill="#888" font-size="6">Hidden sacred meanings</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <circle cx="132" cy="190" r="12" fill="#ec4899"/>
                                    <text x="132" y="195" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
                                    <text x="207" y="188" text-anchor="middle" fill="#ec4899" font-size="9" font-weight="bold">NORTH vs SOUTH</text>
                                    <text x="207" y="205" text-anchor="middle" fill="#fff" font-size="7">Different, not better</text>
                                    <text x="207" y="217" text-anchor="middle" fill="#888" font-size="6">Both valid approaches</text>

                                    <rect x="50" y="240" width="300" height="65" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="272" r="18" fill="#10b981"/>
                                    <text x="90" y="278" text-anchor="middle" fill="#fff" font-size="16">✓</text>
                                    <text x="220" y="265" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">FEYNMAN TEST READY</text>
                                    <text x="220" y="282" text-anchor="middle" fill="#fff" font-size="8">You can explain Northern Renaissance!</text>
                                    <text x="220" y="295" text-anchor="middle" fill="#888" font-size="7">Try explaining disguised symbolism to a friend</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="14">GLOBAL ART CENTERS 1300-1500</text>

                                    <!-- World map simplified -->
                                    <ellipse cx="200" cy="150" rx="180" ry="100" fill="none" stroke="#333" stroke-width="1"/>

                                    <!-- Ming China -->
                                    <circle cx="320" cy="120" r="25" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="320" y="118" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">MING</text>
                                    <text x="320" y="128" text-anchor="middle" fill="#fff" font-size="8">CHINA</text>

                                    <!-- Islamic World -->
                                    <circle cx="230" cy="130" r="25" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="230" y="128" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">ISLAMIC</text>
                                    <text x="230" y="138" text-anchor="middle" fill="#fff" font-size="8">WORLD</text>

                                    <!-- Africa -->
                                    <circle cx="180" cy="180" r="22" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="180" y="178" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">IFE</text>
                                    <text x="180" y="188" text-anchor="middle" fill="#fff" font-size="8">BENIN</text>

                                    <!-- Mesoamerica -->
                                    <circle cx="70" cy="150" r="22" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="70" y="148" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">AZTEC</text>
                                    <text x="70" y="158" text-anchor="middle" fill="#fff" font-size="8">MAYA</text>

                                    <!-- Japan -->
                                    <circle cx="350" cy="100" r="18" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="350" y="103" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="8">JAPAN</text>

                                    <!-- Europe for reference -->
                                    <circle cx="140" cy="100" r="20" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="140" y="103" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="8">EUROPE</text>

                                    <!-- Legend -->
                                    <rect x="20" y="230" width="360" height="40" rx="4" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="255" text-anchor="middle" fill="#888" font-size="9">Each region developed unique artistic traditions responding to local beliefs, materials, and cultures</text>
                                </svg>`,
                                caption: "Artistic excellence flourished across multiple civilizations simultaneously"
                            }
                        },
                        {
                            type: "example",
                            title: "Ming Dynasty China: 3 Masterpieces",
                            content: "The Ming Dynasty (1368-1644) produced art that influenced the entire world - and Europe specifically tried to copy it for centuries.\n\n1. BLUE-AND-WHITE PORCELAIN\n• Made from kaolin clay and fired at extreme temperatures\n• The white body was painted with cobalt blue designs\n• Europe couldn't figure out the recipe until 1709!\n• 'China' became the English word for porcelain\n• Dutch Delftware was Europe's attempt to imitate it\n\n2. SCHOLAR-PAINTING\n• Literati (educated officials) painted as personal expression, not for money\n• Landscapes represented inner spiritual states\n• 'The Four Treasures': brush, ink, inkstone, paper\n• Painting, poetry, and calligraphy were combined\n• Artists sought to capture 'qi' (life force) not just appearance\n\n3. THE FORBIDDEN CITY (1406-1420)\n• World's largest palace complex: 980 buildings, 8,886 rooms\n• Built by Emperor Yongle, who moved the capital to Beijing\n• Took 1 million workers and 100,000 craftsmen\n• Named 'Forbidden' because commoners couldn't enter\n• Central axis represents imperial cosmic order\n\nWHY MING ART MATTERS:\nMing porcelain influenced European ceramics. Ming landscape painting influenced Japanese aesthetics. Ming architecture influenced all of East Asia.",
                            visual: {
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">MING DYNASTY (1368-1644)</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">Traditions that influenced all of East Asia</text>

                                    <!-- Blue and White Porcelain -->
                                    <rect x="20" y="55" width="115" height="175" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="77" y="75" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">PORCELAIN</text>
                                    <!-- Vase shape -->
                                    <ellipse cx="77" cy="110" rx="25" ry="10" fill="#fff" stroke="#3b82f6" stroke-width="2"/>
                                    <path d="M52 110 L52 165 Q77 180 102 165 L102 110" fill="#fff" stroke="#3b82f6" stroke-width="2"/>
                                    <!-- Blue pattern inside -->
                                    <path d="M60 125 Q77 135 94 125" stroke="#3b82f6" stroke-width="2" fill="none"/>
                                    <circle cx="77" cy="145" r="10" fill="none" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="77" y="198" text-anchor="middle" fill="#fff" font-size="8">Blue &amp; White</text>
                                    <text x="77" y="210" text-anchor="middle" fill="#888" font-size="7">Yongle Emperor</text>
                                    <text x="77" y="222" text-anchor="middle" fill="#888" font-size="7">1402-1424</text>

                                    <!-- Painting -->
                                    <rect x="142" y="55" width="115" height="175" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">PAINTING</text>
                                    <!-- Landscape scroll -->
                                    <rect x="165" y="90" width="70" height="95" fill="#f5f5dc" stroke="#10b981" stroke-width="2"/>
                                    <!-- Mountain -->
                                    <polygon points="175,175 200,110 225,175" fill="none" stroke="#333" stroke-width="1"/>
                                    <polygon points="185,175 195,145 205,175" fill="none" stroke="#333" stroke-width="1"/>
                                    <!-- Tree -->
                                    <line x1="218" y1="145" x2="218" y2="175" stroke="#333" stroke-width="1"/>
                                    <circle cx="218" cy="140" r="8" fill="none" stroke="#333" stroke-width="1"/>
                                    <text x="200" y="198" text-anchor="middle" fill="#fff" font-size="8">Scholar-painters</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#888" font-size="7">Personal expression</text>
                                    <text x="200" y="222" text-anchor="middle" fill="#888" font-size="7">Landscapes</text>

                                    <!-- Forbidden City -->
                                    <rect x="264" y="55" width="115" height="175" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="322" y="75" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">ARCHITECTURE</text>
                                    <!-- Palace structure -->
                                    <rect x="290" y="130" width="64" height="50" fill="#8b0000" stroke="#ffd700" stroke-width="2"/>
                                    <polygon points="287,130 322,105 357,130" fill="#8b0000" stroke="#ffd700" stroke-width="2"/>
                                    <!-- Pillars -->
                                    <line x1="300" y1="130" x2="300" y2="175" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="322" y1="130" x2="322" y2="175" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="344" y1="130" x2="344" y2="175" stroke="#ffd700" stroke-width="2"/>
                                    <text x="322" y="198" text-anchor="middle" fill="#fff" font-size="8">Forbidden City</text>
                                    <text x="322" y="210" text-anchor="middle" fill="#888" font-size="7">Built 1406-1420</text>
                                    <text x="322" y="222" text-anchor="middle" fill="#888" font-size="7">World's largest palace</text>

                                    <!-- Bottom fact -->
                                    <rect x="50" y="245" width="300" height="45" rx="6" fill="rgba(255,255,255,0.05)" stroke="#fff"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#fff" font-size="10">Ming porcelain influenced pottery worldwide</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="9">Including Dutch Delftware via Silk Road trade</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">IFE & BENIN BRONZE TRADITIONS</text>

                                    <!-- Ife Head representation -->
                                    <rect x="30" y="50" width="150" height="200" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="105" y="75" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">IFE (12th-14th c.)</text>

                                    <!-- Simplified Ife head -->
                                    <ellipse cx="105" cy="150" rx="35" ry="45" fill="#cd7f32" stroke="#8b4513" stroke-width="2"/>
                                    <ellipse cx="90" cy="140" rx="8" ry="5" fill="#1a1a2e"/>
                                    <ellipse cx="120" cy="140" rx="8" ry="5" fill="#1a1a2e"/>
                                    <path d="M95 165 Q105 175 115 165" stroke="#1a1a2e" stroke-width="2" fill="none"/>
                                    <!-- Striations -->
                                    <line x1="75" y1="130" x2="75" y2="170" stroke="#8b4513" stroke-width="1"/>
                                    <line x1="80" y1="125" x2="80" y2="175" stroke="#8b4513" stroke-width="1"/>
                                    <line x1="130" y1="125" x2="130" y2="175" stroke="#8b4513" stroke-width="1"/>
                                    <line x1="135" y1="130" x2="135" y2="170" stroke="#8b4513" stroke-width="1"/>

                                    <text x="105" y="215" text-anchor="middle" fill="#fff" font-size="9">Naturalistic</text>
                                    <text x="105" y="228" text-anchor="middle" fill="#fff" font-size="9">Royal Portraits</text>
                                    <text x="105" y="241" text-anchor="middle" fill="#888" font-size="8">Lost-wax casting</text>

                                    <!-- Benin Plaque representation -->
                                    <rect x="220" y="50" width="150" height="200" rx="8" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="295" y="75" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="12">BENIN (15th-17th c.)</text>

                                    <!-- Simplified Benin plaque -->
                                    <rect x="255" y="95" width="80" height="100" fill="#cd7f32" stroke="#8b4513" stroke-width="2" rx="2"/>
                                    <!-- Figure on plaque -->
                                    <circle cx="295" cy="120" r="15" fill="#8b4513"/>
                                    <rect x="285" y="135" width="20" height="40" fill="#8b4513"/>
                                    <line x1="285" y1="145" x2="270" y2="155" stroke="#8b4513" stroke-width="4"/>
                                    <line x1="305" y1="145" x2="320" y2="155" stroke="#8b4513" stroke-width="4"/>
                                    <!-- Decorative elements -->
                                    <circle cx="265" cy="105" r="4" fill="#ffd700"/>
                                    <circle cx="325" cy="105" r="4" fill="#ffd700"/>
                                    <circle cx="265" cy="185" r="4" fill="#ffd700"/>
                                    <circle cx="325" cy="185" r="4" fill="#ffd700"/>

                                    <text x="295" y="215" text-anchor="middle" fill="#fff" font-size="9">Palace Plaques</text>
                                    <text x="295" y="228" text-anchor="middle" fill="#fff" font-size="9">Historical Records</text>
                                    <text x="295" y="241" text-anchor="middle" fill="#888" font-size="8">High-relief bronze</text>

                                    <!-- Connection line -->
                                    <line x1="180" y1="150" x2="220" y2="150" stroke="#888" stroke-width="1" stroke-dasharray="4"/>
                                    <text x="200" y="145" text-anchor="middle" fill="#888" font-size="8">Influenced</text>
                                </svg>`,
                                caption: "African bronzes demonstrate sophisticated metallurgical and artistic traditions"
                            }
                        },
                        {
                            type: "visual",
                            title: "Islamic Art: The 4 Core Principles",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">4 PRINCIPLES OF ISLAMIC ART</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">Timurid (1370-1507) &amp; Ottoman traditions</text>

                                    <!-- Principle 1: Calligraphy -->
                                    <rect x="20" y="55" width="175" height="115" rx="8" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="107" y="75" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="11">CALLIGRAPHY</text>
                                    <!-- Arabic-style swirl -->
                                    <path d="M60 105 Q90 85 120 105 Q150 125 120 140" stroke="#ffd700" stroke-width="3" fill="none"/>
                                    <circle cx="120" cy="140" r="5" fill="#ffd700"/>
                                    <text x="107" y="155" text-anchor="middle" fill="#fff" font-size="9">The Word of God</text>
                                    <text x="107" y="168" text-anchor="middle" fill="#888" font-size="8">as visual art</text>

                                    <!-- Principle 2: Arabesque -->
                                    <rect x="205" y="55" width="175" height="115" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="75" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">ARABESQUE</text>
                                    <!-- Vine pattern -->
                                    <path d="M255 100 Q270 90 285 100 Q300 110 315 100 Q330 90 340 100" stroke="#10b981" stroke-width="2" fill="none"/>
                                    <circle cx="270" cy="95" r="4" fill="#10b981"/>
                                    <circle cx="300" cy="105" r="4" fill="#10b981"/>
                                    <circle cx="330" cy="95" r="4" fill="#10b981"/>
                                    <text x="292" y="145" text-anchor="middle" fill="#fff" font-size="9">Infinite vegetal patterns</text>
                                    <text x="292" y="158" text-anchor="middle" fill="#888" font-size="8">suggesting divine infinity</text>

                                    <!-- Principle 3: Geometric -->
                                    <rect x="20" y="180" width="175" height="115" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="107" y="200" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">GEOMETRIC PATTERNS</text>
                                    <!-- Star pattern -->
                                    <polygon points="107,220 112,235 128,235 115,245 120,260 107,250 94,260 99,245 86,235 102,235" fill="none" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="107" y="278" text-anchor="middle" fill="#fff" font-size="9">Mathematical precision</text>
                                    <text x="107" y="291" text-anchor="middle" fill="#888" font-size="8">reflecting cosmic order</text>

                                    <!-- Principle 4: Aniconism -->
                                    <rect x="205" y="180" width="175" height="115" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="200" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">NO FIGURAL IMAGERY</text>
                                    <text x="292" y="215" text-anchor="middle" fill="#888" font-size="9">(in religious contexts)</text>
                                    <!-- Crossed out figure -->
                                    <circle cx="292" cy="245" r="20" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="278" y1="259" x2="306" y2="231" stroke="#ef4444" stroke-width="3"/>
                                    <text x="292" y="283" text-anchor="middle" fill="#fff" font-size="9">Focus on abstract beauty</text>
                                </svg>`,
                                caption: "Samarkand and Herat became cultural capitals under Timurid patronage"
                            }
                        },
                        {
                            type: "visual",
                            title: "Aztec Sun Stone: A Visual Breakdown",
                            visual: {
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="13">THE AZTEC SUN STONE (c. 1502-1521)</text>

                                    <!-- Sun Stone representation -->
                                    <circle cx="200" cy="140" r="90" fill="#8b7355" stroke="#ffd700" stroke-width="3"/>
                                    <circle cx="200" cy="140" r="70" fill="#6b5344" stroke="#cd853f" stroke-width="2"/>
                                    <circle cx="200" cy="140" r="50" fill="#4a3728" stroke="#cd853f" stroke-width="2"/>
                                    <circle cx="200" cy="140" r="25" fill="#2a2018" stroke="#ffd700" stroke-width="2"/>
                                    <!-- Central face -->
                                    <circle cx="190" cy="135" r="5" fill="#ffd700"/>
                                    <circle cx="210" cy="135" r="5" fill="#ffd700"/>
                                    <rect x="195" y="145" width="10" height="8" fill="#ffd700"/>
                                    <!-- Rays around -->
                                    <line x1="200" y1="50" x2="200" y2="30" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="270" y1="70" x2="285" y2="55" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="290" y1="140" x2="310" y2="140" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="270" y1="210" x2="285" y2="225" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="130" y1="70" x2="115" y2="55" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="110" y1="140" x2="90" y2="140" stroke="#ffd700" stroke-width="2"/>
                                    <line x1="130" y1="210" x2="115" y2="225" stroke="#ffd700" stroke-width="2"/>

                                    <!-- Stats -->
                                    <rect x="20" y="245" width="110" height="45" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="75" y="265" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">12 ft</text>
                                    <text x="75" y="280" text-anchor="middle" fill="#888" font-size="8">diameter</text>

                                    <rect x="145" y="245" width="110" height="45" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">24 tons</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="8">weight</text>

                                    <rect x="270" y="245" width="110" height="45" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="325" y="265" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">TONATIUH</text>
                                    <text x="325" y="280" text-anchor="middle" fill="#888" font-size="8">Sun God center</text>

                                    <!-- Key insight -->
                                    <rect x="50" y="298" width="300" height="35" rx="6" fill="rgba(255,255,255,0.05)" stroke="#fff"/>
                                    <text x="200" y="318" text-anchor="middle" fill="#fff" font-size="10">Not just a calendar - a cosmic statement about world eras</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">M I B A</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">"Making Incredible Beautiful Art"</text>

                                    <rect x="20" y="60" width="85" height="95" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="62" y="82" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">M</text>
                                    <text x="62" y="100" text-anchor="middle" fill="#fff" font-size="9">MING</text>
                                    <text x="62" y="115" text-anchor="middle" fill="#888" font-size="7">Porcelain</text>
                                    <text x="62" y="127" text-anchor="middle" fill="#888" font-size="7">Painting</text>
                                    <text x="62" y="145" text-anchor="middle" fill="#ef4444" font-size="7">1368-1644</text>

                                    <rect x="115" y="60" width="85" height="95" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="157" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">I</text>
                                    <text x="157" y="100" text-anchor="middle" fill="#fff" font-size="9">ISLAMIC</text>
                                    <text x="157" y="115" text-anchor="middle" fill="#888" font-size="7">Geometry</text>
                                    <text x="157" y="127" text-anchor="middle" fill="#888" font-size="7">Calligraphy</text>
                                    <text x="157" y="145" text-anchor="middle" fill="#10b981" font-size="7">Infinite patterns</text>

                                    <rect x="210" y="60" width="85" height="95" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="252" y="82" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">B</text>
                                    <text x="252" y="100" text-anchor="middle" fill="#fff" font-size="9">BENIN/IFE</text>
                                    <text x="252" y="115" text-anchor="middle" fill="#888" font-size="7">Bronze heads</text>
                                    <text x="252" y="127" text-anchor="middle" fill="#888" font-size="7">Lost-wax</text>
                                    <text x="252" y="145" text-anchor="middle" fill="#f59e0b" font-size="7">12th-17th c.</text>

                                    <rect x="305" y="60" width="85" height="95" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="347" y="82" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">A</text>
                                    <text x="347" y="100" text-anchor="middle" fill="#fff" font-size="9">AZTEC/MAYA</text>
                                    <text x="347" y="115" text-anchor="middle" fill="#888" font-size="7">Sun Stone</text>
                                    <text x="347" y="127" text-anchor="middle" fill="#888" font-size="7">Codices</text>
                                    <text x="347" y="145" text-anchor="middle" fill="#8b5cf6" font-size="7">Pre-1521</text>

                                    <rect x="30" y="170" width="340" height="95" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="190" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="11">KEY INSIGHT</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="9">All four regions had art as sophisticated as</text>
                                    <text x="200" y="225" text-anchor="middle" fill="#fff" font-size="9">Renaissance Europe - different, not lesser</text>
                                    <text x="200" y="250" text-anchor="middle" fill="#888" font-size="8">Euro-centric art history is being rewritten</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Why Global Art Matters",
                            content: "Here's how to sound knowledgeable when discussing global art:\n\n1. 'EUROPE COPIED CHINA'\n'Ming blue-and-white porcelain was so valued that Europe spent 300 years trying to copy it. Dutch Delftware and English 'chinoiserie' were imitation attempts.'\n\n2. 'THE BENIN BRONZES DEBATE'\n'The British Museum has more Benin Bronzes than any Nigerian museum. They were taken in 1897 and Nigeria wants them back. It's one of the biggest art repatriation debates today.'\n\n3. 'LOST AFRICAN TECHNIQUES'\n'Ife and Benin artists used lost-wax bronze casting as sophisticated as any in Europe. When Europeans first saw them, they couldn't believe Africans made them.'\n\n4. 'ISLAMIC INFLUENCE ON EUROPE'\n'Gothic architecture was influenced by Islamic design. The pointed arch came from Islamic buildings. Even 'arabesque' patterns influenced European decoration.'\n\n5. 'WHAT THE SPANISH DESTROYED'\n'The Spanish conquistadors melted down almost all Aztec gold art for bullion. We'll never know how much was lost. The few surviving codices are invaluable.'",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="12">5 WAYS TO SOUND LIKE A GLOBAL ART EXPERT</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="40" cy="60" r="12" fill="#ef4444"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
                                    <text x="115" y="55" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="bold">EUROPE COPIED CHINA</text>
                                    <text x="115" y="70" text-anchor="middle" fill="#fff" font-size="7">Ming porcelain → Delftware</text>
                                    <text x="115" y="85" text-anchor="middle" fill="#888" font-size="6">300 years to copy</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="225" cy="60" r="12" fill="#f59e0b"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">2</text>
                                    <text x="300" y="55" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">BENIN DEBATE</text>
                                    <text x="300" y="70" text-anchor="middle" fill="#fff" font-size="7">Nigeria wants bronzes back</text>
                                    <text x="300" y="85" text-anchor="middle" fill="#888" font-size="6">Major repatriation issue</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="40" cy="125" r="12" fill="#10b981"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">3</text>
                                    <text x="115" y="120" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">AFRICAN MASTERY</text>
                                    <text x="115" y="135" text-anchor="middle" fill="#fff" font-size="7">Lost-wax = European level</text>
                                    <text x="115" y="150" text-anchor="middle" fill="#888" font-size="6">Europeans denied it</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="225" cy="125" r="12" fill="#8b5cf6"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
                                    <text x="300" y="120" text-anchor="middle" fill="#8b5cf6" font-size="8" font-weight="bold">ISLAMIC → GOTHIC</text>
                                    <text x="300" y="135" text-anchor="middle" fill="#fff" font-size="7">Pointed arches came from</text>
                                    <text x="300" y="150" text-anchor="middle" fill="#888" font-size="6">Islamic architecture</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="132" cy="190" r="12" fill="#3b82f6"/>
                                    <text x="132" y="195" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
                                    <text x="207" y="185" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="bold">SPANISH DESTRUCTION</text>
                                    <text x="207" y="200" text-anchor="middle" fill="#fff" font-size="7">Melted Aztec gold for bullion</text>
                                    <text x="207" y="215" text-anchor="middle" fill="#888" font-size="6">Incalculable loss</text>

                                    <rect x="50" y="235" width="300" height="35" rx="17" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="200" y="257" text-anchor="middle" fill="#ec4899" font-size="9">Challenge Euro-centric assumptions about art!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. THE BIG PICTURE:\n• Art history is often Euro-centric but shouldn't be\n• Sophisticated art was made worldwide simultaneously\n• Trade routes connected cultures more than we realize\n\n2. MING CHINA (MIBA - M):\n• Blue-and-white porcelain (Europe couldn't copy until 1709)\n• Scholar-painting emphasized personal expression\n• Forbidden City: world's largest palace complex\n\n3. ISLAMIC WORLD (MIBA - I):\n• Infinite geometric patterns based on mathematics\n• Calligraphy as highest art form\n• Architecture influenced European Gothic\n\n4. BENIN & IFE (MIBA - B):\n• Bronze sculptures using sophisticated lost-wax casting\n• Europeans initially couldn't believe Africans made them\n• Center of major repatriation debates today\n\n5. AZTEC & MAYA (MIBA - A):\n• Monumental architecture without metal tools\n• Codices combined writing and art\n• Much destroyed by Spanish conquest\n\nYou can now discuss global art traditions with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="40" cy="60" r="12" fill="#ef4444"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">M</text>
                                    <text x="115" y="58" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">MING CHINA</text>
                                    <text x="115" y="75" text-anchor="middle" fill="#fff" font-size="7">Porcelain • Painting • Palace</text>
                                    <text x="115" y="87" text-anchor="middle" fill="#888" font-size="6">Europe copied for 300 years</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="225" cy="60" r="12" fill="#10b981"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">I</text>
                                    <text x="300" y="58" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">ISLAMIC WORLD</text>
                                    <text x="300" y="75" text-anchor="middle" fill="#fff" font-size="7">Geometry • Calligraphy • Arches</text>
                                    <text x="300" y="87" text-anchor="middle" fill="#888" font-size="6">Influenced Gothic Europe</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="40" cy="125" r="12" fill="#f59e0b"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">B</text>
                                    <text x="115" y="123" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">BENIN & IFE</text>
                                    <text x="115" y="140" text-anchor="middle" fill="#fff" font-size="7">Bronze • Lost-wax • Repatriation</text>
                                    <text x="115" y="152" text-anchor="middle" fill="#888" font-size="6">As sophisticated as Europe</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="225" cy="125" r="12" fill="#8b5cf6"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#fff" font-weight="bold">A</text>
                                    <text x="300" y="123" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">AZTEC & MAYA</text>
                                    <text x="300" y="140" text-anchor="middle" fill="#fff" font-size="7">Sun Stone • Codices • Temples</text>
                                    <text x="300" y="152" text-anchor="middle" fill="#888" font-size="6">Much destroyed by conquest</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="200" y="190" text-anchor="middle" fill="#ec4899" font-size="9" font-weight="bold">KEY INSIGHT</text>
                                    <text x="200" y="207" text-anchor="middle" fill="#fff" font-size="8">Art history must be GLOBAL</text>
                                    <text x="200" y="219" text-anchor="middle" fill="#888" font-size="7">Not just European</text>

                                    <rect x="50" y="240" width="300" height="65" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="272" r="18" fill="#10b981"/>
                                    <text x="90" y="278" text-anchor="middle" fill="#fff" font-size="16">✓</text>
                                    <text x="220" y="265" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">FEYNMAN TEST READY</text>
                                    <text x="220" y="282" text-anchor="middle" fill="#fff" font-size="8">You can discuss global art traditions!</text>
                                    <text x="220" y="295" text-anchor="middle" fill="#888" font-size="7">Use MIBA to remember all four regions</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="14">THE HIGH RENAISSANCE TRIUMVIRATE</text>

                                    <!-- Leonardo -->
                                    <circle cx="80" cy="120" r="50" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="3"/>
                                    <text x="80" y="110" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">LEONARDO</text>
                                    <text x="80" y="125" text-anchor="middle" fill="#fff" font-size="10">da Vinci</text>
                                    <text x="80" y="140" text-anchor="middle" fill="#888" font-size="9">1452-1519</text>

                                    <!-- Michelangelo -->
                                    <circle cx="200" cy="100" r="55" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="3"/>
                                    <text x="200" y="90" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="12">MICHELANGELO</text>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="10">Buonarroti</text>
                                    <text x="200" y="120" text-anchor="middle" fill="#888" font-size="9">1475-1564</text>

                                    <!-- Raphael -->
                                    <circle cx="320" cy="120" r="50" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                                    <text x="320" y="110" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">RAPHAEL</text>
                                    <text x="320" y="125" text-anchor="middle" fill="#fff" font-size="10">Sanzio</text>
                                    <text x="320" y="140" text-anchor="middle" fill="#888" font-size="9">1483-1520</text>

                                    <!-- Key works -->
                                    <rect x="20" y="180" width="110" height="85" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="75" y="200" text-anchor="middle" fill="#3b82f6" font-size="9">Key Works:</text>
                                    <text x="75" y="215" text-anchor="middle" fill="#fff" font-size="8">Mona Lisa</text>
                                    <text x="75" y="228" text-anchor="middle" fill="#fff" font-size="8">Last Supper</text>
                                    <text x="75" y="241" text-anchor="middle" fill="#fff" font-size="8">Vitruvian Man</text>
                                    <text x="75" y="257" text-anchor="middle" fill="#888" font-size="7">Sfumato master</text>

                                    <rect x="145" y="180" width="110" height="85" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="200" text-anchor="middle" fill="#ef4444" font-size="9">Key Works:</text>
                                    <text x="200" y="215" text-anchor="middle" fill="#fff" font-size="8">Sistine Ceiling</text>
                                    <text x="200" y="228" text-anchor="middle" fill="#fff" font-size="8">David</text>
                                    <text x="200" y="241" text-anchor="middle" fill="#fff" font-size="8">Pietà</text>
                                    <text x="200" y="257" text-anchor="middle" fill="#888" font-size="7">Terribilità</text>

                                    <rect x="270" y="180" width="110" height="85" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="325" y="200" text-anchor="middle" fill="#10b981" font-size="9">Key Works:</text>
                                    <text x="325" y="215" text-anchor="middle" fill="#fff" font-size="8">School of Athens</text>
                                    <text x="325" y="228" text-anchor="middle" fill="#fff" font-size="8">Sistine Madonna</text>
                                    <text x="325" y="241" text-anchor="middle" fill="#fff" font-size="8">Transfiguration</text>
                                    <text x="325" y="257" text-anchor="middle" fill="#888" font-size="7">Perfect harmony</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="13">LEONARDO DA VINCI (1452-1519)</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">The "Universal Man" - artist, scientist, engineer, philosopher</text>

                                    <!-- Sfumato -->
                                    <rect x="20" y="55" width="175" height="100" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="107" y="75" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">SFUMATO</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#888" font-size="9">(sfoo-MAH-toh)</text>
                                    <!-- Gradient demonstration -->
                                    <rect x="45" y="100" width="25" height="35" fill="#222" rx="2"/>
                                    <rect x="70" y="100" width="25" height="35" fill="#444" rx="2"/>
                                    <rect x="95" y="100" width="25" height="35" fill="#666" rx="2"/>
                                    <rect x="120" y="100" width="25" height="35" fill="#888" rx="2"/>
                                    <text x="107" y="147" text-anchor="middle" fill="#fff" font-size="8">Smoky, soft blending</text>

                                    <!-- Chiaroscuro -->
                                    <rect x="205" y="55" width="175" height="100" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="75" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">CHIAROSCURO</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#888" font-size="9">(key-ARE-oh-SKOO-roh)</text>
                                    <!-- Light/dark contrast -->
                                    <circle cx="270" cy="117" r="20" fill="#ffd700"/>
                                    <circle cx="315" cy="117" r="20" fill="#111"/>
                                    <text x="292" y="147" text-anchor="middle" fill="#fff" font-size="8">Light vs. dark contrast</text>

                                    <!-- Scientific Observation -->
                                    <rect x="20" y="165" width="175" height="100" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="185" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">SCIENTIFIC STUDY</text>
                                    <!-- Anatomical sketch -->
                                    <circle cx="107" cy="215" r="12" fill="none" stroke="#10b981" stroke-width="1"/>
                                    <line x1="107" y1="227" x2="107" y2="250" stroke="#10b981" stroke-width="1"/>
                                    <line x1="107" y1="235" x2="95" y2="225" stroke="#10b981" stroke-width="1"/>
                                    <line x1="107" y1="235" x2="119" y2="225" stroke="#10b981" stroke-width="1"/>
                                    <text x="107" y="262" text-anchor="middle" fill="#fff" font-size="8">Anatomical accuracy</text>

                                    <!-- Psychological Depth -->
                                    <rect x="205" y="165" width="175" height="100" rx="8" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="292" y="185" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="11">PSYCHOLOGICAL DEPTH</text>
                                    <!-- Mona Lisa hint -->
                                    <ellipse cx="292" cy="225" rx="25" ry="30" fill="#d4a574" stroke="#8b4513"/>
                                    <path d="M282 230 Q292 235 302 230" stroke="#333" stroke-width="1" fill="none"/>
                                    <circle cx="285" cy="220" r="3" fill="#333"/>
                                    <circle cx="299" cy="220" r="3" fill="#333"/>
                                    <text x="292" y="262" text-anchor="middle" fill="#fff" font-size="8">Figures think and feel</text>
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
                                svg: `<svg viewBox="0 0 400 250" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="250" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">THE LAST SUPPER - COMPOSITIONAL ANALYSIS</text>

                                    <!-- Room perspective -->
                                    <polygon points="50,200 200,80 350,200" fill="#4a3c2a" stroke="#8b7355"/>
                                    <rect x="50" y="200" width="300" height="30" fill="#3d3225"/>

                                    <!-- Ceiling lines converging -->
                                    <line x1="50" y1="50" x2="200" y2="95" stroke="#666" stroke-width="1"/>
                                    <line x1="350" y1="50" x2="200" y2="95" stroke="#666" stroke-width="1"/>
                                    <line x1="80" y1="60" x2="200" y2="100" stroke="#666" stroke-width="1"/>
                                    <line x1="320" y1="60" x2="200" y2="100" stroke="#666" stroke-width="1"/>

                                    <!-- Table -->
                                    <rect x="60" y="160" width="280" height="15" fill="#8b7355"/>

                                    <!-- Christ (center) -->
                                    <circle cx="200" cy="130" r="20" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="200" y="135" text-anchor="middle" fill="#fff" font-size="9">CHRIST</text>

                                    <!-- Apostle groups (simplified) -->
                                    <!-- Group 1 (far left) -->
                                    <ellipse cx="85" cy="140" rx="25" ry="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="85" y="145" text-anchor="middle" fill="#fff" font-size="7">Group 1</text>

                                    <!-- Group 2 -->
                                    <ellipse cx="140" cy="140" rx="25" ry="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="140" y="145" text-anchor="middle" fill="#fff" font-size="7">Group 2</text>

                                    <!-- Group 3 -->
                                    <ellipse cx="260" cy="140" rx="25" ry="15" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="260" y="145" text-anchor="middle" fill="#fff" font-size="7">Group 3</text>

                                    <!-- Group 4 (far right) -->
                                    <ellipse cx="315" cy="140" rx="25" ry="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="315" y="145" text-anchor="middle" fill="#fff" font-size="7">Group 4</text>

                                    <!-- Vanishing point -->
                                    <circle cx="200" cy="100" r="5" fill="#ffd700"/>
                                    <text x="200" y="90" text-anchor="middle" fill="#ffd700" font-size="8">VP at Christ's head</text>

                                    <!-- Annotations -->
                                    <rect x="10" y="40" width="80" height="40" rx="3" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="50" y="55" text-anchor="middle" fill="#3b82f6" font-size="8">Innovation:</text>
                                    <text x="50" y="70" text-anchor="middle" fill="#fff" font-size="7">Psychological drama</text>

                                    <rect x="310" y="40" width="80" height="40" rx="3" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="350" y="55" text-anchor="middle" fill="#f59e0b" font-size="8">Moment:</text>
                                    <text x="350" y="70" text-anchor="middle" fill="#fff" font-size="7">"One will betray"</text>
                                </svg>`,
                                caption: "Apostles react in groups of three to Christ's announcement of betrayal"
                            }
                        },
                        {
                            type: "visual",
                            title: "Michelangelo's 2 Greatest Masterpieces",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">MICHELANGELO (1475-1564)</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">"I saw the angel in the marble and carved until I set him free"</text>

                                    <!-- The David -->
                                    <rect x="20" y="55" width="175" height="200" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="75" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="12">THE DAVID</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#888" font-size="9">1501-1504</text>
                                    <!-- Simplified David silhouette -->
                                    <circle cx="107" cy="120" r="15" fill="none" stroke="#ef4444" stroke-width="2"/>
                                    <line x1="107" y1="135" x2="107" y2="200" stroke="#ef4444" stroke-width="3"/>
                                    <line x1="107" y1="150" x2="80" y2="170" stroke="#ef4444" stroke-width="2"/>
                                    <line x1="107" y1="150" x2="130" y2="145" stroke="#ef4444" stroke-width="2"/>
                                    <line x1="107" y1="200" x2="92" y2="240" stroke="#ef4444" stroke-width="2"/>
                                    <line x1="107" y1="200" x2="122" y2="240" stroke="#ef4444" stroke-width="2"/>
                                    <text x="60" y="135" fill="#fff" font-size="8">17 ft</text>
                                    <text x="60" y="147" fill="#fff" font-size="8">tall!</text>
                                    <text x="140" y="165" fill="#888" font-size="7">Moment</text>
                                    <text x="140" y="177" fill="#888" font-size="7">BEFORE</text>
                                    <text x="140" y="189" fill="#888" font-size="7">battle</text>

                                    <!-- Sistine Chapel -->
                                    <rect x="205" y="55" width="175" height="200" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="75" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="12">SISTINE CEILING</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#888" font-size="9">1508-1512</text>
                                    <!-- Creation of Adam hands -->
                                    <path d="M250 150 L270 145 L285 150" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                                    <path d="M300 150 L320 145 L335 150" stroke="#ffd700" stroke-width="3" fill="none"/>
                                    <circle cx="285" cy="150" r="3" fill="#8b5cf6"/>
                                    <circle cx="300" cy="150" r="3" fill="#ffd700"/>
                                    <text x="292" y="175" text-anchor="middle" fill="#fff" font-size="9">Creation of Adam</text>
                                    <!-- Stats -->
                                    <text x="292" y="200" text-anchor="middle" fill="#fff" font-size="9">5,000+ sq ft</text>
                                    <text x="292" y="215" text-anchor="middle" fill="#fff" font-size="9">300+ figures</text>
                                    <text x="292" y="230" text-anchor="middle" fill="#888" font-size="8">4 years to paint</text>

                                    <!-- Terribilità -->
                                    <rect x="50" y="265" width="300" height="45" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="285" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="11">TERRIBILITÀ</text>
                                    <text x="200" y="300" text-anchor="middle" fill="#888" font-size="9">The awe-inspiring power in Michelangelo's figures</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">RAPHAEL (1483-1520)</text>
                                    <text x="200" y="38" text-anchor="middle" fill="#888" font-size="9">Synthesized Leonardo + Michelangelo into perfect harmony</text>

                                    <!-- School of Athens simplified -->
                                    <rect x="50" y="55" width="300" height="140" rx="6" fill="#d4c4b0" stroke="#8b7355" stroke-width="3"/>
                                    <!-- Arches -->
                                    <path d="M100 55 Q125 35 150 55" fill="none" stroke="#8b7355" stroke-width="2"/>
                                    <path d="M175 55 Q200 30 225 55" fill="none" stroke="#8b7355" stroke-width="2"/>
                                    <path d="M250 55 Q275 35 300 55" fill="none" stroke="#8b7355" stroke-width="2"/>

                                    <!-- Central figures - Plato & Aristotle -->
                                    <circle cx="175" cy="110" r="20" fill="rgba(59,130,246,0.4)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="175" y="107" text-anchor="middle" fill="#fff" font-size="8">PLATO</text>
                                    <text x="175" y="117" text-anchor="middle" fill="#3b82f6" font-size="6">(Leonardo)</text>

                                    <circle cx="225" cy="110" r="20" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="225" y="107" text-anchor="middle" fill="#fff" font-size="8">ARISTOTLE</text>

                                    <!-- Heraclitus (Michelangelo) -->
                                    <circle cx="200" cy="160" r="15" fill="rgba(239,68,68,0.4)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="200" y="157" text-anchor="middle" fill="#fff" font-size="7">Heraclitus</text>
                                    <text x="200" y="167" text-anchor="middle" fill="#ef4444" font-size="6">(Michelangelo)</text>

                                    <!-- Perspective lines -->
                                    <line x1="50" y1="195" x2="200" y2="100" stroke="#10b981" stroke-width="1" stroke-dasharray="3"/>
                                    <line x1="350" y1="195" x2="200" y2="100" stroke="#10b981" stroke-width="1" stroke-dasharray="3"/>

                                    <!-- Key features -->
                                    <rect x="20" y="210" width="115" height="75" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="77" y="228" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">PERFECT</text>
                                    <text x="77" y="242" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">PERSPECTIVE</text>
                                    <text x="77" y="258" text-anchor="middle" fill="#fff" font-size="8">All lines converge</text>
                                    <text x="77" y="271" text-anchor="middle" fill="#888" font-size="7">at center</text>

                                    <rect x="142" y="210" width="115" height="75" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="228" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">HIDDEN</text>
                                    <text x="200" y="242" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">PORTRAITS</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#fff" font-size="8">Renaissance masters</text>
                                    <text x="200" y="271" text-anchor="middle" fill="#888" font-size="7">as philosophers</text>

                                    <rect x="264" y="210" width="115" height="75" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="322" y="228" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">IDEAL</text>
                                    <text x="322" y="242" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">HARMONY</text>
                                    <text x="322" y="258" text-anchor="middle" fill="#fff" font-size="8">Every pose expresses</text>
                                    <text x="322" y="271" text-anchor="middle" fill="#888" font-size="7">philosophy</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">L M R</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">The High Renaissance Titans (+ Ninja Turtles!)</text>

                                    <rect x="20" y="60" width="115" height="150" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="77" y="82" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">L</text>
                                    <text x="77" y="100" text-anchor="middle" fill="#fff" font-size="10">LEONARDO</text>
                                    <text x="77" y="118" text-anchor="middle" fill="#3b82f6" font-size="8">SFUMATO</text>
                                    <text x="77" y="135" text-anchor="middle" fill="#888" font-size="7">Smoky blending</text>
                                    <text x="77" y="155" text-anchor="middle" fill="#fff" font-size="8">Mona Lisa</text>
                                    <text x="77" y="170" text-anchor="middle" fill="#fff" font-size="8">Last Supper</text>
                                    <text x="77" y="195" text-anchor="middle" fill="#888" font-size="7">1452-1519</text>

                                    <rect x="145" y="60" width="115" height="150" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="202" y="82" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">M</text>
                                    <text x="202" y="100" text-anchor="middle" fill="#fff" font-size="10">MICHELANGELO</text>
                                    <text x="202" y="118" text-anchor="middle" fill="#ef4444" font-size="8">TERRIBILITÀ</text>
                                    <text x="202" y="135" text-anchor="middle" fill="#888" font-size="7">Awesome power</text>
                                    <text x="202" y="155" text-anchor="middle" fill="#fff" font-size="8">Sistine Ceiling</text>
                                    <text x="202" y="170" text-anchor="middle" fill="#fff" font-size="8">David</text>
                                    <text x="202" y="195" text-anchor="middle" fill="#888" font-size="7">1475-1564</text>

                                    <rect x="270" y="60" width="115" height="150" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="327" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">R</text>
                                    <text x="327" y="100" text-anchor="middle" fill="#fff" font-size="10">RAPHAEL</text>
                                    <text x="327" y="118" text-anchor="middle" fill="#10b981" font-size="8">HARMONY</text>
                                    <text x="327" y="135" text-anchor="middle" fill="#888" font-size="7">Perfect balance</text>
                                    <text x="327" y="155" text-anchor="middle" fill="#fff" font-size="8">School of Athens</text>
                                    <text x="327" y="170" text-anchor="middle" fill="#fff" font-size="8">Sistine Madonna</text>
                                    <text x="327" y="195" text-anchor="middle" fill="#888" font-size="7">1483-1520</text>

                                    <rect x="50" y="225" width="300" height="40" rx="20" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#ec4899" font-size="9">NINJA TURTLES: Leonardo, Michelangelo, Raphael, Donatello</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#888" font-size="8">All named after Renaissance artists!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: High Renaissance Insights",
                            content: "Here's how to sound knowledgeable about the High Renaissance:\n\n1. 'IT WAS INCREDIBLY SHORT'\n'The High Renaissance lasted only 37 years - from about 1490 to 1527. It ended when Rome was sacked by imperial troops, scattering artists and ending the era's optimism.'\n\n2. 'THEY WERE RIVALS'\n'Leonardo and Michelangelo despised each other. When both were working in Florence around 1504, their rivalry was the talk of the city. They had completely opposite personalities and artistic philosophies.'\n\n3. 'MICHELANGELO DIDN'T WANT TO PAINT THE SISTINE'\n'He considered himself a sculptor, not a painter. Pope Julius II forced him to do it. Yet he created one of history's greatest paintings - while complaining about it in letters and poems.'\n\n4. 'THE MONA LISA ISN'T SPECIAL BECAUSE IT'S BEAUTIFUL'\n'It's special because of sfumato - the smoky blending technique Leonardo invented. Look at her face: there are no hard lines anywhere. That was revolutionary.'\n\n5. 'RAPHAEL SYNTHESIZED EVERYTHING'\n'Raphael wasn't the most original of the three, but he combined Leonardo's sfumato with Michelangelo's powerful figures into perfect harmony. The School of Athens is basically a greatest hits of Renaissance techniques.'",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="12">5 HIGH RENAISSANCE CONVERSATION STARTERS</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="40" cy="60" r="12" fill="#3b82f6"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
                                    <text x="115" y="55" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="bold">INCREDIBLY SHORT</text>
                                    <text x="115" y="70" text-anchor="middle" fill="#fff" font-size="7">Only 37 years (1490-1527)</text>
                                    <text x="115" y="85" text-anchor="middle" fill="#888" font-size="6">Ended by Sack of Rome</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <circle cx="225" cy="60" r="12" fill="#ef4444"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
                                    <text x="300" y="55" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="bold">BITTER RIVALS</text>
                                    <text x="300" y="70" text-anchor="middle" fill="#fff" font-size="7">Leonardo vs Michelangelo</text>
                                    <text x="300" y="85" text-anchor="middle" fill="#888" font-size="6">Hated each other!</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="40" cy="125" r="12" fill="#10b981"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">3</text>
                                    <text x="115" y="120" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">SISTINE RELUCTANCE</text>
                                    <text x="115" y="135" text-anchor="middle" fill="#fff" font-size="7">Michelangelo was forced</text>
                                    <text x="115" y="150" text-anchor="middle" fill="#888" font-size="6">He wanted to sculpt</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="225" cy="125" r="12" fill="#8b5cf6"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
                                    <text x="300" y="120" text-anchor="middle" fill="#8b5cf6" font-size="8" font-weight="bold">MONA LISA SECRET</text>
                                    <text x="300" y="135" text-anchor="middle" fill="#fff" font-size="7">It's about sfumato</text>
                                    <text x="300" y="150" text-anchor="middle" fill="#888" font-size="6">Not beauty - technique</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="132" cy="190" r="12" fill="#f59e0b"/>
                                    <text x="132" y="195" text-anchor="middle" fill="#1a1a2e" font-weight="bold">5</text>
                                    <text x="207" y="185" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">RAPHAEL SYNTHESIZED</text>
                                    <text x="207" y="200" text-anchor="middle" fill="#fff" font-size="7">Combined Leonardo + Mike</text>
                                    <text x="207" y="215" text-anchor="middle" fill="#888" font-size="6">School of Athens = greatest hits</text>

                                    <rect x="50" y="235" width="300" height="35" rx="17" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="200" y="257" text-anchor="middle" fill="#ffd700" font-size="9">Impress at any museum with these facts!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. WHAT IS THE HIGH RENAISSANCE?\n• Brief period c. 1490-1527 (only 37 years)\n• Peak of Renaissance artistic achievement\n• Ended with Sack of Rome in 1527\n\n2. LEONARDO DA VINCI (L in LMR)\n• Sfumato technique (smoky blending)\n• Scientific observation in art\n• Only ~15 paintings survive (perfectionist)\n• Mona Lisa, Last Supper, Vitruvian Man\n\n3. MICHELANGELO (M in LMR)\n• Terribilità (awesome power in figures)\n• Considered himself a sculptor first\n• Sistine Ceiling, David, Pietà, St. Peter's dome\n• Lived to 88, working until weeks before death\n\n4. RAPHAEL (R in LMR)\n• Perfect harmony and grace\n• Synthesized Leonardo + Michelangelo techniques\n• School of Athens, Sistine Madonna\n• Died young at 37\n\n5. KEY TECHNIQUES:\n• Sfumato = smoky blending (Leonardo)\n• Chiaroscuro = light/dark contrast\n• Terribilità = awesome power (Michelangelo)\n• Contrapposto = natural S-curve pose\n\nYou can now discuss the High Renaissance masters with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>

                                    <rect x="20" y="40" width="115" height="80" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="77" y="60" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">L</text>
                                    <text x="77" y="78" text-anchor="middle" fill="#fff" font-size="9">LEONARDO</text>
                                    <text x="77" y="93" text-anchor="middle" fill="#888" font-size="7">Sfumato</text>
                                    <text x="77" y="108" text-anchor="middle" fill="#888" font-size="7">Mona Lisa</text>

                                    <rect x="145" y="40" width="115" height="80" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="202" y="60" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">M</text>
                                    <text x="202" y="78" text-anchor="middle" fill="#fff" font-size="9">MICHELANGELO</text>
                                    <text x="202" y="93" text-anchor="middle" fill="#888" font-size="7">Terribilità</text>
                                    <text x="202" y="108" text-anchor="middle" fill="#888" font-size="7">Sistine Ceiling</text>

                                    <rect x="270" y="40" width="115" height="80" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="327" y="60" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">R</text>
                                    <text x="327" y="78" text-anchor="middle" fill="#fff" font-size="9">RAPHAEL</text>
                                    <text x="327" y="93" text-anchor="middle" fill="#888" font-size="7">Harmony</text>
                                    <text x="327" y="108" text-anchor="middle" fill="#888" font-size="7">School of Athens</text>

                                    <rect x="50" y="135" width="300" height="55" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="155" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">KEY TECHNIQUES TO REMEMBER</text>
                                    <text x="200" y="175" text-anchor="middle" fill="#fff" font-size="8">Sfumato (smoky) • Chiaroscuro (light-dark) • Terribilità (power)</text>

                                    <rect x="50" y="205" width="300" height="45" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="225" text-anchor="middle" fill="#ec4899" font-size="9">FUN FACT: Ninja Turtles = Renaissance Artists!</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#888" font-size="8">Leonardo, Michelangelo, Raphael, Donatello</text>

                                    <rect x="50" y="260" width="300" height="50" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="285" r="15" fill="#10b981"/>
                                    <text x="90" y="290" text-anchor="middle" fill="#fff" font-size="14">✓</text>
                                    <text x="220" y="280" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">FEYNMAN TEST READY</text>
                                    <text x="220" y="295" text-anchor="middle" fill="#fff" font-size="8">You can explain the High Renaissance!</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">MANNERIST CHARACTERISTICS</text>

                                    <!-- Comparison: Classical vs Mannerist -->
                                    <!-- Classical Figure -->
                                    <rect x="30" y="50" width="150" height="180" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="105" y="70" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">HIGH RENAISSANCE</text>

                                    <!-- Normal proportions figure -->
                                    <circle cx="105" cy="100" r="15" fill="none" stroke="#10b981" stroke-width="2"/>
                                    <line x1="105" y1="115" x2="105" y2="170" stroke="#10b981" stroke-width="2"/>
                                    <line x1="105" y1="130" x2="85" y2="150" stroke="#10b981" stroke-width="2"/>
                                    <line x1="105" y1="130" x2="125" y2="150" stroke="#10b981" stroke-width="2"/>
                                    <line x1="105" y1="170" x2="90" y2="210" stroke="#10b981" stroke-width="2"/>
                                    <line x1="105" y1="170" x2="120" y2="210" stroke="#10b981" stroke-width="2"/>

                                    <text x="105" y="225" text-anchor="middle" fill="#888" font-size="9">Balanced</text>

                                    <!-- Mannerist Figure -->
                                    <rect x="220" y="50" width="150" height="180" rx="8" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="295" y="70" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">MANNERISM</text>

                                    <!-- Elongated figure -->
                                    <circle cx="295" cy="90" r="12" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="295" y1="102" x2="295" y2="180" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="295" y1="115" x2="270" y2="145" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="295" y1="115" x2="330" y2="125" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="295" y1="180" x2="280" y2="215" stroke="#8b5cf6" stroke-width="2"/>
                                    <line x1="295" y1="180" x2="310" y2="215" stroke="#8b5cf6" stroke-width="2"/>

                                    <text x="295" y="225" text-anchor="middle" fill="#888" font-size="9">Elongated & Twisted</text>

                                    <!-- Key traits -->
                                    <rect x="50" y="235" width="300" height="20" rx="4" fill="rgba(139,92,246,0.1)"/>
                                    <text x="200" y="250" text-anchor="middle" fill="#8b5cf6" font-size="9">Figura serpentinata • Acid colors • Ambiguous space • Elegance over naturalism</text>
                                </svg>`,
                                caption: "Mannerism deliberately distorted High Renaissance ideals"
                            }
                        },
                        {
                            type: "visual",
                            title: "5 Rules Mannerists Broke",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="13">MANNERISM: BREAKING RENAISSANCE RULES</text>

                                    <!-- Rule 1 -->
                                    <rect x="20" y="45" width="175" height="80" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">1. FIGURA SERPENTINATA</text>
                                    <!-- Spiral figure -->
                                    <path d="M80 80 Q100 90 90 100 Q80 110 100 115" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                                    <text x="130" y="95" fill="#fff" font-size="8">Twisted,</text>
                                    <text x="130" y="107" fill="#fff" font-size="8">spiraling poses</text>

                                    <!-- Rule 2 -->
                                    <rect x="205" y="45" width="175" height="80" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="292" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">2. ELONGATION</text>
                                    <!-- Elongated figure -->
                                    <circle cx="265" cy="85" r="6" fill="none" stroke="#ec4899" stroke-width="2"/>
                                    <line x1="265" y1="91" x2="265" y2="120" stroke="#ec4899" stroke-width="2"/>
                                    <text x="320" y="95" fill="#fff" font-size="8">Impossibly</text>
                                    <text x="320" y="107" fill="#fff" font-size="8">long necks</text>

                                    <!-- Rule 3 -->
                                    <rect x="20" y="135" width="175" height="80" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="155" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">3. SPATIAL AMBIGUITY</text>
                                    <!-- Confusing depth -->
                                    <rect x="45" y="165" width="30" height="30" fill="none" stroke="#f59e0b" stroke-width="1"/>
                                    <rect x="60" y="175" width="30" height="30" fill="none" stroke="#f59e0b" stroke-width="1"/>
                                    <text x="130" y="180" fill="#fff" font-size="8">Unclear depth</text>
                                    <text x="130" y="192" fill="#fff" font-size="8">and crowding</text>

                                    <!-- Rule 4 -->
                                    <rect x="205" y="135" width="175" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="155" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">4. ACID COLORS</text>
                                    <!-- Color swatches -->
                                    <rect x="240" y="168" width="15" height="15" fill="#00ffff"/>
                                    <rect x="258" y="168" width="15" height="15" fill="#ff69b4"/>
                                    <rect x="276" y="168" width="15" height="15" fill="#98fb98"/>
                                    <text x="320" y="180" fill="#fff" font-size="8">Cool, unusual</text>
                                    <text x="320" y="192" fill="#fff" font-size="8">hues</text>

                                    <!-- Rule 5 -->
                                    <rect x="112" y="225" width="175" height="45" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">5. SELF-CONSCIOUS ARTIFICE</text>
                                    <text x="200" y="260" text-anchor="middle" fill="#fff" font-size="8">Art that shows off its own artificiality</text>

                                    <!-- Context -->
                                    <rect x="50" y="280" width="300" height="30" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="300" text-anchor="middle" fill="#888" font-size="9">Context: Sack of Rome (1527) + Reformation = Crisis</text>
                                </svg>`,
                                caption: "Mannerists deliberately broke High Renaissance rules"
                            }
                        },
                        {
                            type: "visual",
                            title: "Artwork Spotlight: Madonna with the Long Neck (c. 1535)",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="12">PARMIGIANINO'S MANNERIST MASTERPIECE</text>

                                    <!-- Simplified painting representation -->
                                    <rect x="130" y="40" width="140" height="170" rx="4" fill="#3d3d5c" stroke="#8b5cf6" stroke-width="2"/>
                                    <!-- Madonna figure - elongated -->
                                    <ellipse cx="180" cy="80" rx="15" ry="12" fill="#d4a574"/>
                                    <ellipse cx="180" cy="75" rx="10" ry="8" fill="#d4a574"/>
                                    <!-- LONG neck -->
                                    <rect x="175" y="87" width="10" height="35" fill="#d4a574"/>
                                    <!-- Body -->
                                    <ellipse cx="180" cy="150" rx="25" ry="40" fill="#4169e1"/>
                                    <!-- Christ child -->
                                    <ellipse cx="195" cy="140" rx="15" ry="20" fill="#ffe4c4"/>
                                    <!-- Column -->
                                    <rect x="240" y="80" width="8" height="110" fill="#888"/>
                                    <!-- Tiny figure -->
                                    <circle cx="248" cy="195" r="4" fill="#666"/>

                                    <!-- Three analysis boxes -->
                                    <rect x="20" y="225" width="115" height="85" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="77" y="245" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">THE MADONNA</text>
                                    <text x="77" y="260" text-anchor="middle" fill="#fff" font-size="8">Elongated neck</text>
                                    <text x="77" y="273" text-anchor="middle" fill="#fff" font-size="8">Long fingers</text>
                                    <text x="77" y="286" text-anchor="middle" fill="#888" font-size="7">Serpentine pose</text>
                                    <text x="77" y="299" text-anchor="middle" fill="#888" font-size="7">Alien beauty</text>

                                    <rect x="142" y="225" width="115" height="85" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">CHRIST CHILD</text>
                                    <text x="200" y="260" text-anchor="middle" fill="#fff" font-size="8">Strangely large</text>
                                    <text x="200" y="273" text-anchor="middle" fill="#fff" font-size="8">Limp posture</text>
                                    <text x="200" y="286" text-anchor="middle" fill="#888" font-size="7">Ambiguous</text>
                                    <text x="200" y="299" text-anchor="middle" fill="#888" font-size="7">position</text>

                                    <rect x="264" y="225" width="115" height="85" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="322" y="245" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">THE SETTING</text>
                                    <text x="322" y="260" text-anchor="middle" fill="#fff" font-size="8">Unfinished column</text>
                                    <text x="322" y="273" text-anchor="middle" fill="#fff" font-size="8">Tiny prophet</text>
                                    <text x="322" y="286" text-anchor="middle" fill="#888" font-size="7">Spatial</text>
                                    <text x="322" y="299" text-anchor="middle" fill="#888" font-size="7">confusion</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">S E A L S</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">5 Ways Mannerists Broke the Rules</text>

                                    <rect x="20" y="60" width="70" height="85" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="55" y="82" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">S</text>
                                    <text x="55" y="98" text-anchor="middle" fill="#fff" font-size="7">Serpentinata</text>
                                    <text x="55" y="112" text-anchor="middle" fill="#888" font-size="6">Twisted</text>
                                    <text x="55" y="124" text-anchor="middle" fill="#888" font-size="6">poses</text>
                                    <path d="M45 130 Q55 138 45 146" stroke="#8b5cf6" stroke-width="2" fill="none"/>

                                    <rect x="100" y="60" width="70" height="85" rx="6" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="135" y="82" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">E</text>
                                    <text x="135" y="98" text-anchor="middle" fill="#fff" font-size="7">Elongation</text>
                                    <text x="135" y="112" text-anchor="middle" fill="#888" font-size="6">Long necks</text>
                                    <text x="135" y="124" text-anchor="middle" fill="#888" font-size="6">& fingers</text>
                                    <line x1="135" y1="130" x2="135" y2="143" stroke="#ec4899" stroke-width="2"/>

                                    <rect x="180" y="60" width="70" height="85" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="215" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">A</text>
                                    <text x="215" y="98" text-anchor="middle" fill="#fff" font-size="7">Acid Colors</text>
                                    <text x="215" y="112" text-anchor="middle" fill="#888" font-size="6">Cool pinks</text>
                                    <text x="215" y="124" text-anchor="middle" fill="#888" font-size="6">icy blues</text>
                                    <rect x="205" y="130" width="8" height="8" fill="#ff69b4"/>
                                    <rect x="217" y="130" width="8" height="8" fill="#00ffff"/>

                                    <rect x="260" y="60" width="70" height="85" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="295" y="82" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">L</text>
                                    <text x="295" y="98" text-anchor="middle" fill="#fff" font-size="7">Limbo Space</text>
                                    <text x="295" y="112" text-anchor="middle" fill="#888" font-size="6">Ambiguous</text>
                                    <text x="295" y="124" text-anchor="middle" fill="#888" font-size="6">depth</text>
                                    <rect x="285" y="130" width="10" height="10" fill="none" stroke="#f59e0b"/>
                                    <rect x="290" y="133" width="10" height="10" fill="none" stroke="#f59e0b"/>

                                    <rect x="340" y="60" width="50" height="85" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="365" y="82" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">S</text>
                                    <text x="365" y="98" text-anchor="middle" fill="#fff" font-size="6">Self-</text>
                                    <text x="365" y="108" text-anchor="middle" fill="#fff" font-size="6">conscious</text>
                                    <text x="365" y="120" text-anchor="middle" fill="#888" font-size="6">Style</text>

                                    <rect x="50" y="160" width="300" height="55" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="180" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CRISIS CONTEXT</text>
                                    <text x="200" y="198" text-anchor="middle" fill="#fff" font-size="9">1517: Reformation • 1527: Sack of Rome</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#888" font-size="8">Confident optimism shattered → Mannerism</text>

                                    <rect x="50" y="225" width="300" height="40" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#8b5cf6" font-size="9">KEY WORK: Madonna with the Long Neck (Parmigianino)</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#888" font-size="8">Shows all 5 SEALS characteristics!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Conversation Starter: Understanding Mannerism",
                            content: "Here's how to sound knowledgeable about Mannerism:\n\n1. 'IT WAS A REACTION TO PERFECTION'\n'After Raphael died in 1520, artists couldn't out-perfect perfection. So they deliberately broke the rules - like a jazz musician who knows the rules well enough to break them interestingly.'\n\n2. 'IT'S NOT 'BAD' RENAISSANCE ART'\n'For centuries, critics dismissed Mannerism as decadent. Now we recognize it as a sophisticated response to crisis - art that reflects the anxiety of its time.'\n\n3. 'LOOK AT THE NECKS'\n'The easiest way to spot Mannerism is impossibly long necks. The Madonna with Long Neck is the most famous example - her neck is literally swan-like.'\n\n4. 'THE COLORS ARE A GIVEAWAY'\n'Mannerist colors are acid and cool - pinks, lime greens, icy blues. Renaissance colors are warm - deep reds, rich browns. The palette alone tells you the era.'\n\n5. 'EL GRECO WAS A MANNERIST'\n'Most people know El Greco's elongated figures but don't realize he was a Mannerist. His lightning-flashed skies and stretched saints are textbook Mannerism.'",
                            visual: {
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="12">5 MANNERISM CONVERSATION STARTERS</text>

                                    <rect x="20" y="40" width="175" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <circle cx="40" cy="60" r="12" fill="#8b5cf6"/>
                                    <text x="40" y="65" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
                                    <text x="115" y="55" text-anchor="middle" fill="#8b5cf6" font-size="8" font-weight="bold">REACTION TO PERFECTION</text>
                                    <text x="115" y="70" text-anchor="middle" fill="#fff" font-size="7">Like jazz breaking rules</text>
                                    <text x="115" y="85" text-anchor="middle" fill="#888" font-size="6">Deliberately rebellious</text>

                                    <rect x="205" y="40" width="175" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <circle cx="225" cy="60" r="12" fill="#10b981"/>
                                    <text x="225" y="65" text-anchor="middle" fill="#1a1a2e" font-weight="bold">2</text>
                                    <text x="300" y="55" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">NOT 'BAD' ART</text>
                                    <text x="300" y="70" text-anchor="middle" fill="#fff" font-size="7">Sophisticated crisis response</text>
                                    <text x="300" y="85" text-anchor="middle" fill="#888" font-size="6">Now highly valued</text>

                                    <rect x="20" y="105" width="175" height="55" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <circle cx="40" cy="125" r="12" fill="#ec4899"/>
                                    <text x="40" y="130" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
                                    <text x="115" y="120" text-anchor="middle" fill="#ec4899" font-size="8" font-weight="bold">LOOK AT THE NECKS</text>
                                    <text x="115" y="135" text-anchor="middle" fill="#fff" font-size="7">Impossibly long = Mannerist</text>
                                    <text x="115" y="150" text-anchor="middle" fill="#888" font-size="6">Easy spotting trick</text>

                                    <rect x="205" y="105" width="175" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <circle cx="225" cy="125" r="12" fill="#f59e0b"/>
                                    <text x="225" y="130" text-anchor="middle" fill="#1a1a2e" font-weight="bold">4</text>
                                    <text x="300" y="120" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">ACID COLORS</text>
                                    <text x="300" y="135" text-anchor="middle" fill="#fff" font-size="7">Cool pinks vs warm reds</text>
                                    <text x="300" y="150" text-anchor="middle" fill="#888" font-size="6">Palette = era giveaway</text>

                                    <rect x="112" y="170" width="175" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <circle cx="132" cy="190" r="12" fill="#3b82f6"/>
                                    <text x="132" y="195" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
                                    <text x="207" y="185" text-anchor="middle" fill="#3b82f6" font-size="8" font-weight="bold">EL GRECO = MANNERIST</text>
                                    <text x="207" y="200" text-anchor="middle" fill="#fff" font-size="7">His stretched figures</text>
                                    <text x="207" y="215" text-anchor="middle" fill="#888" font-size="6">are textbook Mannerism</text>

                                    <rect x="50" y="235" width="300" height="35" rx="17" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="200" y="257" text-anchor="middle" fill="#8b5cf6" font-size="9">Now you can spot Mannerism anywhere!</text>
                                </svg>`
                            }
                        },
                        {
                            type: "concept",
                            title: "Lesson Summary: Key Takeaways",
                            content: "You should now be able to explain:\n\n1. WHAT IS MANNERISM?\n• Art style c. 1520-1600\n• Deliberate rule-breaking after High Renaissance 'perfection'\n• Name from 'maniera' (stylishness)\n\n2. WHY DID IT EMERGE?\n• 1517: Protestant Reformation\n• 1527: Sack of Rome\n• Crisis shattered Renaissance confidence\n• Artists responded with unsettling elegance\n\n3. THE 5 SEALS:\n• S - Serpentinata (twisted poses)\n• E - Elongation (long necks, fingers)\n• A - Acid colors (cool pinks, icy blues)\n• L - Limbo space (ambiguous depth)\n• S - Self-conscious style (artificial elegance)\n\n4. KEY WORKS:\n• Madonna with Long Neck (Parmigianino)\n• Descent from the Cross (Pontormo)\n• El Greco's stretched saints\n• Giambologna's spiraling sculptures\n\n5. HOW TO SPOT IT:\n• Long necks and fingers\n• Cool, unusual colors\n• Crowded, unclear spaces\n• Twisted, spiraling poses\n\nYou can now identify Mannerism with confidence!",
                            visual: {
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">LESSON COMPLETE!</text>

                                    <rect x="20" y="45" width="175" height="60" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">WHAT IS IT?</text>
                                    <text x="107" y="82" text-anchor="middle" fill="#fff" font-size="8">Rule-breaking after perfection</text>
                                    <text x="107" y="95" text-anchor="middle" fill="#888" font-size="7">c. 1520-1600</text>

                                    <rect x="205" y="45" width="175" height="60" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="292" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">WHY?</text>
                                    <text x="292" y="82" text-anchor="middle" fill="#fff" font-size="8">Sack of Rome + Reformation</text>
                                    <text x="292" y="95" text-anchor="middle" fill="#888" font-size="7">Crisis response</text>

                                    <rect x="50" y="115" width="300" height="70" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="135" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="11">SEALS MNEMONIC</text>
                                    <text x="200" y="155" text-anchor="middle" fill="#fff" font-size="9">S-Serpentinata • E-Elongation • A-Acid colors</text>
                                    <text x="200" y="172" text-anchor="middle" fill="#fff" font-size="9">L-Limbo space • S-Self-conscious style</text>

                                    <rect x="50" y="195" width="300" height="55" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="215" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">SPOTTING TRICKS</text>
                                    <text x="200" y="232" text-anchor="middle" fill="#fff" font-size="8">Long necks • Cool colors • Twisted poses • Crowded space</text>
                                    <text x="200" y="245" text-anchor="middle" fill="#888" font-size="7">Madonna with Long Neck = perfect example</text>

                                    <rect x="50" y="260" width="300" height="50" rx="25" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <circle cx="90" cy="285" r="15" fill="#10b981"/>
                                    <text x="90" y="290" text-anchor="middle" fill="#fff" font-size="14">✓</text>
                                    <text x="220" y="280" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">FEYNMAN TEST READY</text>
                                    <text x="220" y="295" text-anchor="middle" fill="#fff" font-size="8">You can explain Mannerism!</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">WHY VENICE WAS DIFFERENT</text>

                                    <!-- Venice unique factors -->
                                    <rect x="20" y="45" width="360" height="60" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">GEOGRAPHIC FACTORS</text>
                                    <text x="110" y="85" text-anchor="middle" fill="#fff" font-size="9">Built on water</text>
                                    <text x="200" y="85" text-anchor="middle" fill="#fff" font-size="9">Humid climate</text>
                                    <text x="295" y="85" text-anchor="middle" fill="#fff" font-size="9">Reflected light</text>
                                    <text x="110" y="98" text-anchor="middle" fill="#888" font-size="7">(No frescoes!)</text>
                                    <text x="200" y="98" text-anchor="middle" fill="#888" font-size="7">(Mold on walls)</text>
                                    <text x="295" y="98" text-anchor="middle" fill="#888" font-size="7">(Shimmering effects)</text>

                                    <!-- Result arrows -->
                                    <path d="M110 108 L110 125" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead7)"/>
                                    <path d="M200 108 L200 125" stroke="#3b82f6" stroke-width="2"/>
                                    <path d="M295 108 L295 125" stroke="#3b82f6" stroke-width="2"/>

                                    <defs>
                                        <marker id="arrowhead7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
                                        </marker>
                                    </defs>

                                    <!-- Innovations -->
                                    <rect x="20" y="130" width="360" height="60" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="200" y="150" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">VENETIAN INNOVATIONS</text>
                                    <text x="110" y="172" text-anchor="middle" fill="#fff" font-size="9">Oil on CANVAS</text>
                                    <text x="200" y="172" text-anchor="middle" fill="#fff" font-size="9">COLORITO</text>
                                    <text x="295" y="172" text-anchor="middle" fill="#fff" font-size="9">Atmospheric effects</text>
                                    <text x="110" y="185" text-anchor="middle" fill="#888" font-size="7">(Not wood panels)</text>
                                    <text x="200" y="185" text-anchor="middle" fill="#888" font-size="7">(Color first!)</text>
                                    <text x="295" y="185" text-anchor="middle" fill="#888" font-size="7">(Light & mood)</text>

                                    <!-- Timeline -->
                                    <rect x="20" y="205" width="360" height="65" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">THE VENETIAN MASTERS</text>
                                    <line x1="50" y1="245" x2="350" y2="245" stroke="#f59e0b" stroke-width="2"/>
                                    <circle cx="80" cy="245" r="4" fill="#10b981"/>
                                    <text x="80" y="260" text-anchor="middle" fill="#10b981" font-size="7">Bellini</text>
                                    <circle cx="140" cy="245" r="4" fill="#3b82f6"/>
                                    <text x="140" y="260" text-anchor="middle" fill="#3b82f6" font-size="7">Giorgione</text>
                                    <circle cx="220" cy="245" r="4" fill="#ef4444"/>
                                    <text x="220" y="260" text-anchor="middle" fill="#ef4444" font-size="7">TITIAN</text>
                                    <circle cx="290" cy="245" r="4" fill="#8b5cf6"/>
                                    <text x="290" y="260" text-anchor="middle" fill="#8b5cf6" font-size="7">Tintoretto</text>
                                    <circle cx="340" cy="245" r="4" fill="#ec4899"/>
                                    <text x="340" y="260" text-anchor="middle" fill="#ec4899" font-size="7">Veronese</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">DISEGNO vs COLORITO</text>

                                    <!-- Florence side -->
                                    <rect x="20" y="45" width="170" height="190" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="105" y="68" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">FLORENCE</text>
                                    <text x="105" y="85" text-anchor="middle" fill="#f59e0b" font-size="11">DISEGNO</text>

                                    <!-- Drawing demonstration - clear lines -->
                                    <circle cx="105" cy="125" r="30" fill="none" stroke="#f59e0b" stroke-width="2"/>
                                    <ellipse cx="95" cy="118" rx="5" ry="3" fill="#f59e0b"/>
                                    <ellipse cx="115" cy="118" rx="5" ry="3" fill="#f59e0b"/>
                                    <path d="M95 135 Q105 145 115 135" stroke="#f59e0b" stroke-width="2" fill="none"/>

                                    <text x="105" y="170" text-anchor="middle" fill="#fff" font-size="9">Clear outlines</text>
                                    <text x="105" y="185" text-anchor="middle" fill="#fff" font-size="9">Precise forms</text>
                                    <text x="105" y="200" text-anchor="middle" fill="#fff" font-size="9">Mathematical</text>
                                    <text x="105" y="220" text-anchor="middle" fill="#888" font-size="8">"Shows the MIND"</text>

                                    <!-- Venice side -->
                                    <rect x="210" y="45" width="170" height="190" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="295" y="68" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="12">VENICE</text>
                                    <text x="295" y="85" text-anchor="middle" fill="#ef4444" font-size="11">COLORITO</text>

                                    <!-- Color demonstration - soft blended -->
                                    <circle cx="295" cy="125" r="30" fill="url(#venetianGrad)"/>
                                    <defs>
                                        <radialGradient id="venetianGrad">
                                            <stop offset="0%" stop-color="#fca5a5"/>
                                            <stop offset="100%" stop-color="#7f1d1d"/>
                                        </radialGradient>
                                    </defs>
                                    <ellipse cx="285" cy="118" rx="5" ry="3" fill="rgba(0,0,0,0.3)"/>
                                    <ellipse cx="305" cy="118" rx="5" ry="3" fill="rgba(0,0,0,0.3)"/>
                                    <path d="M285 135 Q295 143 305 135" stroke="rgba(0,0,0,0.3)" stroke-width="2" fill="none"/>

                                    <text x="295" y="170" text-anchor="middle" fill="#fff" font-size="9">Soft edges</text>
                                    <text x="295" y="185" text-anchor="middle" fill="#fff" font-size="9">Blended forms</text>
                                    <text x="295" y="200" text-anchor="middle" fill="#fff" font-size="9">Atmospheric</text>
                                    <text x="295" y="220" text-anchor="middle" fill="#888" font-size="8">"Speaks to SOUL"</text>

                                    <!-- VS -->
                                    <circle cx="200" cy="140" r="20" fill="#1a1a2e" stroke="#fff" stroke-width="2"/>
                                    <text x="200" y="145" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VS</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">GIORGIONE (c. 1477-1510)</text>
                                    <text x="200" y="40" text-anchor="middle" fill="#888" font-size="9">"The most mysterious genius in art history"</text>

                                    <!-- The Tempest representation -->
                                    <rect x="25" y="55" width="160" height="120" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="105" y="72" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">THE TEMPEST (c. 1508)</text>

                                    <!-- Storm clouds -->
                                    <ellipse cx="70" cy="95" rx="25" ry="12" fill="#374151"/>
                                    <ellipse cx="100" cy="92" rx="30" ry="15" fill="#4b5563"/>
                                    <ellipse cx="135" cy="95" rx="25" ry="12" fill="#374151"/>

                                    <!-- Lightning -->
                                    <path d="M105 85 L100 100 L108 100 L95 120" stroke="#fcd34d" stroke-width="2" fill="none"/>

                                    <!-- Soldier figure -->
                                    <circle cx="55" cy="140" r="6" fill="#6b7280"/>
                                    <rect x="52" y="146" width="6" height="15" fill="#6b7280"/>
                                    <line x1="50" y1="148" x2="58" y2="152" stroke="#8b7355" stroke-width="2"/>

                                    <!-- Woman figure -->
                                    <circle cx="140" cy="140" r="6" fill="#d4a574"/>
                                    <ellipse cx="140" cy="155" rx="8" ry="10" fill="#60a5fa"/>

                                    <!-- Ground/landscape -->
                                    <rect x="25" y="160" width="160" height="15" fill="#166534"/>

                                    <!-- Key innovations -->
                                    <rect x="200" y="55" width="180" height="120" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="290" y="72" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">GIORGIONE'S INNOVATIONS</text>

                                    <text x="210" y="92" fill="#fff" font-size="8">1. MOOD over narrative</text>
                                    <text x="210" y="108" fill="#fff" font-size="8">2. Figures WITHIN landscape</text>
                                    <text x="210" y="124" fill="#fff" font-size="8">3. Unified by COLOR/light</text>
                                    <text x="210" y="140" fill="#fff" font-size="8">4. Mystery as meaning</text>
                                    <text x="210" y="156" fill="#fff" font-size="8">5. Poetic atmosphere</text>

                                    <!-- Legacy -->
                                    <rect x="25" y="185" width="355" height="85" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="202" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">WHY THE TEMPEST MATTERS</text>

                                    <text x="200" y="222" text-anchor="middle" fill="#fff" font-size="9">BEFORE Giorgione: Paintings always tell a STORY</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#fff" font-size="9">AFTER Giorgione: Paintings can BE a MOOD</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#888" font-size="8">First "atmosphere painting" in Western art</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">TITIAN (c. 1488-1576)</text>
                                    <text x="200" y="40" text-anchor="middle" fill="#888" font-size="9">88 years old • 60+ year career • "The Sun of Venice"</text>

                                    <!-- Career timeline -->
                                    <line x1="40" y1="65" x2="360" y2="65" stroke="#666" stroke-width="2"/>

                                    <circle cx="60" cy="65" r="4" fill="#10b981"/>
                                    <text x="60" y="55" text-anchor="middle" fill="#888" font-size="7">1508</text>
                                    <text x="60" y="80" text-anchor="middle" fill="#10b981" font-size="7">Works with</text>
                                    <text x="60" y="90" text-anchor="middle" fill="#10b981" font-size="7">Giorgione</text>

                                    <circle cx="130" cy="65" r="4" fill="#3b82f6"/>
                                    <text x="130" y="55" text-anchor="middle" fill="#888" font-size="7">1516</text>
                                    <text x="130" y="80" text-anchor="middle" fill="#3b82f6" font-size="7">Official</text>
                                    <text x="130" y="90" text-anchor="middle" fill="#3b82f6" font-size="7">Painter</text>

                                    <circle cx="200" cy="65" r="4" fill="#f59e0b"/>
                                    <text x="200" y="55" text-anchor="middle" fill="#888" font-size="7">1533</text>
                                    <text x="200" y="80" text-anchor="middle" fill="#f59e0b" font-size="7">Made</text>
                                    <text x="200" y="90" text-anchor="middle" fill="#f59e0b" font-size="7">Count</text>

                                    <circle cx="270" cy="65" r="4" fill="#8b5cf6"/>
                                    <text x="270" y="55" text-anchor="middle" fill="#888" font-size="7">1550s</text>
                                    <text x="270" y="80" text-anchor="middle" fill="#8b5cf6" font-size="7">Late</text>
                                    <text x="270" y="90" text-anchor="middle" fill="#8b5cf6" font-size="7">Style</text>

                                    <circle cx="340" cy="65" r="4" fill="#ef4444"/>
                                    <text x="340" y="55" text-anchor="middle" fill="#888" font-size="7">1576</text>
                                    <text x="340" y="80" text-anchor="middle" fill="#ef4444" font-size="7">Dies</text>
                                    <text x="340" y="90" text-anchor="middle" fill="#ef4444" font-size="7">age 88</text>

                                    <!-- His Patrons -->
                                    <rect x="20" y="105" width="360" height="65" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="122" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">PAINTED FOR THE MOST POWERFUL PEOPLE IN EUROPE</text>

                                    <text x="75" y="145" text-anchor="middle" fill="#fff" font-size="9">Pope Paul III</text>
                                    <text x="75" y="158" text-anchor="middle" fill="#888" font-size="7">Rome</text>

                                    <text x="165" y="145" text-anchor="middle" fill="#fff" font-size="9">Charles V</text>
                                    <text x="165" y="158" text-anchor="middle" fill="#888" font-size="7">Holy Roman Emperor</text>

                                    <text x="255" y="145" text-anchor="middle" fill="#fff" font-size="9">Philip II</text>
                                    <text x="255" y="158" text-anchor="middle" fill="#888" font-size="7">King of Spain</text>

                                    <text x="340" y="145" text-anchor="middle" fill="#fff" font-size="9">Venice</text>
                                    <text x="340" y="158" text-anchor="middle" fill="#888" font-size="7">Doge &amp; State</text>

                                    <!-- His method -->
                                    <rect x="20" y="180" width="360" height="110" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="197" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">TITIAN'S REVOLUTIONARY METHOD</text>

                                    <!-- Process visualization -->
                                    <rect x="40" y="210" width="70" height="60" rx="4" fill="rgba(239,68,68,0.2)"/>
                                    <text x="75" y="230" text-anchor="middle" fill="#fff" font-size="8">Rough</text>
                                    <text x="75" y="242" text-anchor="middle" fill="#fff" font-size="8">sketch</text>
                                    <text x="75" y="260" text-anchor="middle" fill="#888" font-size="7">in color</text>

                                    <text x="125" y="240" fill="#ef4444" font-size="14">→</text>

                                    <rect x="145" y="210" width="70" height="60" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="180" y="230" text-anchor="middle" fill="#fff" font-size="8">Face wall</text>
                                    <text x="180" y="242" text-anchor="middle" fill="#fff" font-size="8">for months</text>
                                    <text x="180" y="260" text-anchor="middle" fill="#888" font-size="7">"Fresh eyes"</text>

                                    <text x="230" y="240" fill="#ef4444" font-size="14">→</text>

                                    <rect x="250" y="210" width="70" height="60" rx="4" fill="rgba(239,68,68,0.4)"/>
                                    <text x="285" y="230" text-anchor="middle" fill="#fff" font-size="8">Layer</text>
                                    <text x="285" y="242" text-anchor="middle" fill="#fff" font-size="8">upon layer</text>
                                    <text x="285" y="260" text-anchor="middle" fill="#888" font-size="7">Glazes</text>

                                    <text x="335" y="240" fill="#ef4444" font-size="14">→</text>

                                    <rect x="350" y="225" width="30" height="30" rx="4" fill="#ef4444"/>
                                    <text x="365" y="245" text-anchor="middle" fill="#fff" font-size="8">✓</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">TITIAN'S 3 REVOLUTIONARY TECHNIQUES</text>

                                    <!-- Technique 1: Broken Color -->
                                    <rect x="20" y="45" width="115" height="160" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="77" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">1. BROKEN COLOR</text>

                                    <!-- Color strokes demonstration -->
                                    <rect x="40" y="85" width="8" height="35" fill="#ef4444" transform="rotate(-10 44 102)"/>
                                    <rect x="52" y="85" width="8" height="35" fill="#f59e0b" transform="rotate(5 56 102)"/>
                                    <rect x="64" y="85" width="8" height="35" fill="#ef4444" transform="rotate(-5 68 102)"/>
                                    <rect x="76" y="85" width="8" height="35" fill="#fcd34d" transform="rotate(8 80 102)"/>
                                    <rect x="88" y="85" width="8" height="35" fill="#ef4444" transform="rotate(-3 92 102)"/>

                                    <text x="77" y="140" text-anchor="middle" fill="#fff" font-size="8">Separate strokes</text>
                                    <text x="77" y="152" text-anchor="middle" fill="#fff" font-size="8">blend in the</text>
                                    <text x="77" y="164" text-anchor="middle" fill="#fff" font-size="8">viewer's EYE</text>

                                    <rect x="35" y="175" width="85" height="22" rx="4" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="77" y="190" text-anchor="middle" fill="#ec4899" font-size="7">→ Impressionism!</text>

                                    <!-- Technique 2: Impasto -->
                                    <rect x="142" y="45" width="115" height="160" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">2. IMPASTO</text>

                                    <!-- Thick paint demonstration -->
                                    <ellipse cx="200" cy="105" rx="35" ry="25" fill="#f59e0b" stroke="#dc8a0a" stroke-width="4"/>
                                    <ellipse cx="195" cy="100" rx="15" ry="10" fill="#fcd34d"/>
                                    <ellipse cx="188" cy="95" rx="6" ry="4" fill="#fef3c7"/>

                                    <text x="200" y="145" text-anchor="middle" fill="#fff" font-size="8">THICK paint</text>
                                    <text x="200" y="157" text-anchor="middle" fill="#fff" font-size="8">builds up</text>
                                    <text x="200" y="169" text-anchor="middle" fill="#fff" font-size="8">real TEXTURE</text>

                                    <text x="200" y="192" text-anchor="middle" fill="#888" font-size="7">Used for highlights:</text>
                                    <text x="200" y="202" text-anchor="middle" fill="#888" font-size="7">jewels, armor, skin</text>

                                    <!-- Technique 3: Late Style -->
                                    <rect x="264" y="45" width="115" height="160" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="322" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">3. LATE STYLE</text>

                                    <!-- Abstract-ish strokes -->
                                    <path d="M290 90 Q310 80 330 90 Q350 100 340 120" stroke="#8b5cf6" stroke-width="5" fill="none"/>
                                    <path d="M295 100 Q315 115 305 135" stroke="#a78bfa" stroke-width="4" fill="none"/>
                                    <path d="M320 85 Q345 100 335 125" stroke="#c4b5fd" stroke-width="3" fill="none"/>
                                    <path d="M300 120 Q330 130 320 145" stroke="#ddd6fe" stroke-width="2" fill="none"/>

                                    <text x="322" y="155" text-anchor="middle" fill="#fff" font-size="8">In his 80s:</text>
                                    <text x="322" y="167" text-anchor="middle" fill="#fff" font-size="8">FREE, loose,</text>
                                    <text x="322" y="179" text-anchor="middle" fill="#fff" font-size="8">almost ABSTRACT</text>

                                    <text x="322" y="198" text-anchor="middle" fill="#888" font-size="7">"Painted with</text>
                                    <text x="322" y="208" text-anchor="middle" fill="#888" font-size="7">his fingers"</text>

                                    <!-- Quote -->
                                    <rect x="30" y="215" width="340" height="75" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="235" text-anchor="middle" fill="#fff" font-style="italic" font-size="9">"The final touches he softened, occasionally</text>
                                    <text x="200" y="250" text-anchor="middle" fill="#fff" font-style="italic" font-size="9">modulating the highest lights into the half-tones</text>
                                    <text x="200" y="265" text-anchor="middle" fill="#fff" font-style="italic" font-size="9">and uniting one tone with another with his fingers."</text>
                                    <text x="200" y="282" text-anchor="middle" fill="#888" font-size="8">— Palma Giovane, Titian's assistant</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">THE VENETIAN TRINITY</text>

                                    <!-- Three masters -->
                                    <!-- Titian -->
                                    <rect x="20" y="45" width="110" height="130" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="75" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">TITIAN</text>
                                    <text x="75" y="80" text-anchor="middle" fill="#888" font-size="8">c. 1488-1576</text>
                                    <text x="75" y="100" text-anchor="middle" fill="#fff" font-size="8">The Master</text>
                                    <text x="75" y="115" text-anchor="middle" fill="#fff" font-size="8">COLOR itself</text>
                                    <text x="75" y="130" text-anchor="middle" fill="#fff" font-size="8">as foundation</text>
                                    <rect x="30" y="145" width="90" height="22" rx="4" fill="rgba(239,68,68,0.2)"/>
                                    <text x="75" y="160" text-anchor="middle" fill="#ef4444" font-size="7">Sensuous beauty</text>

                                    <!-- Tintoretto -->
                                    <rect x="145" y="45" width="110" height="130" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">TINTORETTO</text>
                                    <text x="200" y="80" text-anchor="middle" fill="#888" font-size="8">1518-1594</text>
                                    <text x="200" y="100" text-anchor="middle" fill="#fff" font-size="8">"Il Furioso"</text>
                                    <text x="200" y="115" text-anchor="middle" fill="#fff" font-size="8">DRAMA +</text>
                                    <text x="200" y="130" text-anchor="middle" fill="#fff" font-size="8">Movement</text>
                                    <rect x="155" y="145" width="90" height="22" rx="4" fill="rgba(139,92,246,0.2)"/>
                                    <text x="200" y="160" text-anchor="middle" fill="#8b5cf6" font-size="7">Violent energy</text>

                                    <!-- Veronese -->
                                    <rect x="270" y="45" width="110" height="130" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="325" y="65" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">VERONESE</text>
                                    <text x="325" y="80" text-anchor="middle" fill="#888" font-size="8">1528-1588</text>
                                    <text x="325" y="100" text-anchor="middle" fill="#fff" font-size="8">The Decorator</text>
                                    <text x="325" y="115" text-anchor="middle" fill="#fff" font-size="8">SPECTACLE +</text>
                                    <text x="325" y="130" text-anchor="middle" fill="#fff" font-size="8">Luxury</text>
                                    <rect x="280" y="145" width="90" height="22" rx="4" fill="rgba(16,185,129,0.2)"/>
                                    <text x="325" y="160" text-anchor="middle" fill="#10b981" font-size="7">Gorgeous color</text>

                                    <!-- Comparison -->
                                    <rect x="20" y="185" width="360" height="105" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="202" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">HOW THEY DIFFERED</text>

                                    <text x="40" y="222" fill="#ef4444" font-size="8">TITIAN:</text>
                                    <text x="85" y="222" fill="#fff" font-size="8">Built forms through pure color</text>

                                    <text x="40" y="242" fill="#8b5cf6" font-size="8">TINTORETTO:</text>
                                    <text x="105" y="242" fill="#fff" font-size="8">Combined color with dynamic drawing</text>

                                    <text x="40" y="262" fill="#10b981" font-size="8">VERONESE:</text>
                                    <text x="100" y="262" fill="#fff" font-size="8">Created theatrical spectacles of luxury</text>

                                    <text x="200" y="282" text-anchor="middle" fill="#888" font-size="8">All three pioneered oil on canvas → Still standard today!</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="16">G L O W</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Remember Venetian Renaissance in 4 letters</text>

                                    <!-- G -->
                                    <rect x="20" y="60" width="85" height="115" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="62" y="85" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">G</text>
                                    <text x="62" y="105" text-anchor="middle" fill="#3b82f6" font-size="9">GIORGIONE</text>
                                    <text x="62" y="125" text-anchor="middle" fill="#fff" font-size="8">Mystery &amp;</text>
                                    <text x="62" y="138" text-anchor="middle" fill="#fff" font-size="8">Mood</text>
                                    <text x="62" y="155" text-anchor="middle" fill="#888" font-size="7">The Tempest</text>
                                    <text x="62" y="168" text-anchor="middle" fill="#888" font-size="7">No story needed</text>

                                    <!-- L -->
                                    <rect x="115" y="60" width="85" height="115" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="157" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">L</text>
                                    <text x="157" y="105" text-anchor="middle" fill="#f59e0b" font-size="9">LIGHT</text>
                                    <text x="157" y="125" text-anchor="middle" fill="#fff" font-size="8">Atmosphere</text>
                                    <text x="157" y="138" text-anchor="middle" fill="#fff" font-size="8">&amp; Glow</text>
                                    <text x="157" y="155" text-anchor="middle" fill="#888" font-size="7">Water reflects</text>
                                    <text x="157" y="168" text-anchor="middle" fill="#888" font-size="7">Misty air</text>

                                    <!-- O -->
                                    <rect x="210" y="60" width="85" height="115" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="252" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">O</text>
                                    <text x="252" y="105" text-anchor="middle" fill="#10b981" font-size="9">OIL/CANVAS</text>
                                    <text x="252" y="125" text-anchor="middle" fill="#fff" font-size="8">Innovation</text>
                                    <text x="252" y="138" text-anchor="middle" fill="#fff" font-size="8">for humidity</text>
                                    <text x="252" y="155" text-anchor="middle" fill="#888" font-size="7">Not fresco</text>
                                    <text x="252" y="168" text-anchor="middle" fill="#888" font-size="7">Still used today!</text>

                                    <!-- W -->
                                    <rect x="305" y="60" width="75" height="115" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="342" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">W</text>
                                    <text x="342" y="105" text-anchor="middle" fill="#ef4444" font-size="9">WARM</text>
                                    <text x="342" y="125" text-anchor="middle" fill="#fff" font-size="8">Color</text>
                                    <text x="342" y="138" text-anchor="middle" fill="#fff" font-size="8">First</text>
                                    <text x="342" y="155" text-anchor="middle" fill="#888" font-size="7">Colorito &gt;</text>
                                    <text x="342" y="168" text-anchor="middle" fill="#888" font-size="7">Disegno</text>

                                    <!-- Phrase -->
                                    <rect x="20" y="185" width="360" height="50" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="200" y="205" text-anchor="middle" fill="#fff" font-size="9">"Venetian paintings GLOW because of</text>
                                    <text x="200" y="222" text-anchor="middle" fill="#fff" font-size="9">Giorgione, Light, Oil on canvas, &amp; Warm color primacy"</text>

                                    <!-- Legacy -->
                                    <rect x="20" y="245" width="360" height="45" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="262" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">VENETIAN LEGACY</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="8">Rubens → Rembrandt → Delacroix → Impressionists → Today</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">💬 CONVERSATION STARTERS</text>

                                    <!-- Topic 1 -->
                                    <rect x="20" y="45" width="175" height="65" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="107" y="62" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">AT A MUSEUM</text>
                                    <text x="107" y="78" text-anchor="middle" fill="#fff" font-size="8">"Notice how there are</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#fff" font-size="8">no hard outlines—</text>
                                    <text x="107" y="102" text-anchor="middle" fill="#888" font-size="7">Titian builds with color"</text>

                                    <!-- Topic 2 -->
                                    <rect x="205" y="45" width="175" height="65" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="292" y="62" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">ABOUT TECHNIQUE</text>
                                    <text x="292" y="78" text-anchor="middle" fill="#fff" font-size="8">"Venice's humidity created</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#fff" font-size="8">oil on canvas—the standard</text>
                                    <text x="292" y="102" text-anchor="middle" fill="#888" font-size="7">we still use today"</text>

                                    <!-- Topic 3 -->
                                    <rect x="20" y="120" width="175" height="65" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="107" y="137" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">ABOUT PHILOSOPHY</text>
                                    <text x="107" y="153" text-anchor="middle" fill="#fff" font-size="8">"Florence vs Venice was</text>
                                    <text x="107" y="165" text-anchor="middle" fill="#fff" font-size="8">intellect vs emotion—</text>
                                    <text x="107" y="177" text-anchor="middle" fill="#888" font-size="7">Venice chose feeling"</text>

                                    <!-- Topic 4 -->
                                    <rect x="205" y="120" width="175" height="65" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="292" y="137" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">FUN FACT</text>
                                    <text x="292" y="153" text-anchor="middle" fill="#fff" font-size="8">"Emperor Charles V</text>
                                    <text x="292" y="165" text-anchor="middle" fill="#fff" font-size="8">made Titian a Count—</text>
                                    <text x="292" y="177" text-anchor="middle" fill="#888" font-size="7">unheard of for artists!"</text>

                                    <!-- Key insight -->
                                    <rect x="20" y="195" width="360" height="55" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="200" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">KEY INSIGHT TO SHARE</text>
                                    <text x="200" y="232" text-anchor="middle" fill="#fff" font-size="9">"Paintings that GLOW use Venetian techniques—</text>
                                    <text x="200" y="245" text-anchor="middle" fill="#fff" font-size="9">transparent glazes creating depth no direct mixing can achieve"</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>

                                    <!-- Header -->
                                    <rect x="100" y="10" width="200" height="35" rx="8" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="200" y="33" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">✓ LESSON 7 COMPLETE</text>

                                    <!-- Core concept -->
                                    <rect x="20" y="55" width="360" height="40" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="72" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">CORE CONCEPT</text>
                                    <text x="200" y="88" text-anchor="middle" fill="#fff" font-size="9">COLORITO: Color as the foundation of painting (vs Florence's DISEGNO)</text>

                                    <!-- Artists grid -->
                                    <rect x="20" y="105" width="360" height="55" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="120" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">THE MASTERS</text>
                                    <text x="65" y="140" text-anchor="middle" fill="#3b82f6" font-size="8">Giorgione</text>
                                    <text x="65" y="152" text-anchor="middle" fill="#888" font-size="7">Mystery</text>
                                    <text x="150" y="140" text-anchor="middle" fill="#ef4444" font-size="8">Titian</text>
                                    <text x="150" y="152" text-anchor="middle" fill="#888" font-size="7">Color</text>
                                    <text x="245" y="140" text-anchor="middle" fill="#8b5cf6" font-size="8">Tintoretto</text>
                                    <text x="245" y="152" text-anchor="middle" fill="#888" font-size="7">Drama</text>
                                    <text x="335" y="140" text-anchor="middle" fill="#10b981" font-size="8">Veronese</text>
                                    <text x="335" y="152" text-anchor="middle" fill="#888" font-size="7">Spectacle</text>

                                    <!-- Innovations -->
                                    <rect x="20" y="170" width="175" height="55" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="107" y="185" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">INNOVATIONS</text>
                                    <text x="107" y="200" text-anchor="middle" fill="#fff" font-size="8">Oil on canvas • Broken color</text>
                                    <text x="107" y="215" text-anchor="middle" fill="#fff" font-size="8">Impasto • Atmospheric effects</text>

                                    <!-- Memory tool -->
                                    <rect x="205" y="170" width="175" height="55" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="292" y="185" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">REMEMBER: GLOW</text>
                                    <text x="292" y="200" text-anchor="middle" fill="#fff" font-size="8">Giorgione • Light</text>
                                    <text x="292" y="215" text-anchor="middle" fill="#fff" font-size="8">Oil on canvas • Warm color</text>

                                    <!-- Feynman badge -->
                                    <rect x="80" y="235" width="240" height="35" rx="8" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="200" y="252" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">🎓 FEYNMAN TEST READY</text>
                                    <text x="200" y="265" text-anchor="middle" fill="#888" font-size="8">You can now explain Venetian painting to anyone!</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="14">🎓 FINAL REVIEW</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">300 Years of Art History Mastered</text>

                                    <!-- Progress circles -->
                                    <circle cx="55" cy="85" r="20" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="55" y="90" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">1</text>
                                    <text x="55" y="115" text-anchor="middle" fill="#888" font-size="7">Gothic</text>

                                    <circle cx="112" cy="85" r="20" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                                    <text x="112" y="90" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">2</text>
                                    <text x="112" y="115" text-anchor="middle" fill="#888" font-size="7">Florence</text>

                                    <circle cx="169" cy="85" r="20" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="169" y="90" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="12">3</text>
                                    <text x="169" y="115" text-anchor="middle" fill="#888" font-size="7">Northern</text>

                                    <circle cx="226" cy="85" r="20" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                                    <text x="226" y="90" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="12">4</text>
                                    <text x="226" y="115" text-anchor="middle" fill="#888" font-size="7">Global</text>

                                    <circle cx="283" cy="85" r="20" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                                    <text x="283" y="90" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="12">5</text>
                                    <text x="283" y="115" text-anchor="middle" fill="#888" font-size="7">High Ren</text>

                                    <circle cx="340" cy="85" r="20" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="340" y="90" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="12">6</text>
                                    <text x="340" y="115" text-anchor="middle" fill="#888" font-size="7">Manner</text>

                                    <circle cx="200" cy="155" r="25" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="200" y="160" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">7</text>
                                    <text x="200" y="190" text-anchor="middle" fill="#888" font-size="8">Venice</text>

                                    <!-- All complete badge -->
                                    <rect x="100" y="210" width="200" height="55" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="232" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">✓ ALL 7 LESSONS COMPLETE</text>
                                    <text x="200" y="250" text-anchor="middle" fill="#fff" font-size="9">Now prove your mastery!</text>
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
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="20" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">THE COMPLETE TIMELINE: 1375-1600</text>

                                    <!-- Timeline spine -->
                                    <line x1="60" y1="45" x2="60" y2="305" stroke="#666" stroke-width="3"/>

                                    <!-- International Gothic -->
                                    <circle cx="60" cy="55" r="6" fill="#f59e0b"/>
                                    <text x="75" y="52" fill="#f59e0b" font-weight="bold" font-size="9">1375</text>
                                    <rect x="75" y="42" width="140" height="22" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="145" y="57" text-anchor="middle" fill="#fff" font-size="8">International Gothic</text>
                                    <text x="225" y="57" fill="#888" font-size="7">ELEGANCE</text>

                                    <!-- Florence -->
                                    <circle cx="60" cy="90" r="6" fill="#10b981"/>
                                    <text x="75" y="87" fill="#10b981" font-weight="bold" font-size="9">1400</text>
                                    <rect x="75" y="77" width="140" height="22" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="145" y="92" text-anchor="middle" fill="#fff" font-size="8">Florence Renaissance</text>
                                    <text x="225" y="92" fill="#888" font-size="7">BMDA</text>

                                    <!-- Northern -->
                                    <circle cx="60" cy="125" r="6" fill="#3b82f6"/>
                                    <text x="75" y="122" fill="#3b82f6" font-weight="bold" font-size="9">1430</text>
                                    <rect x="75" y="112" width="140" height="22" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="145" y="127" text-anchor="middle" fill="#fff" font-size="8">Northern Renaissance</text>
                                    <text x="225" y="127" fill="#888" font-size="7">GOLD</text>

                                    <!-- Global -->
                                    <circle cx="60" cy="160" r="6" fill="#ec4899"/>
                                    <text x="75" y="157" fill="#ec4899" font-weight="bold" font-size="9">1450</text>
                                    <rect x="75" y="147" width="140" height="22" rx="4" fill="rgba(236,72,153,0.2)" stroke="#ec4899"/>
                                    <text x="145" y="162" text-anchor="middle" fill="#fff" font-size="8">Global Exchange</text>
                                    <text x="225" y="162" fill="#888" font-size="7">MIBA</text>

                                    <!-- High Renaissance -->
                                    <circle cx="60" cy="195" r="6" fill="#6366f1"/>
                                    <text x="75" y="192" fill="#6366f1" font-weight="bold" font-size="9">1490</text>
                                    <rect x="75" y="182" width="140" height="22" rx="4" fill="rgba(99,102,241,0.2)" stroke="#6366f1"/>
                                    <text x="145" y="197" text-anchor="middle" fill="#fff" font-size="8">High Renaissance</text>
                                    <text x="225" y="197" fill="#888" font-size="7">LMR</text>

                                    <!-- Mannerism -->
                                    <circle cx="60" cy="230" r="6" fill="#8b5cf6"/>
                                    <text x="75" y="227" fill="#8b5cf6" font-weight="bold" font-size="9">1520</text>
                                    <rect x="75" y="217" width="140" height="22" rx="4" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="145" y="232" text-anchor="middle" fill="#fff" font-size="8">Mannerism</text>
                                    <text x="225" y="232" fill="#888" font-size="7">SEALS</text>

                                    <!-- Venetian -->
                                    <circle cx="60" cy="265" r="6" fill="#ef4444"/>
                                    <text x="75" y="262" fill="#ef4444" font-weight="bold" font-size="9">1500</text>
                                    <rect x="75" y="252" width="140" height="22" rx="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="145" y="267" text-anchor="middle" fill="#fff" font-size="8">Venetian Renaissance</text>
                                    <text x="225" y="267" fill="#888" font-size="7">GLOW</text>

                                    <!-- End -->
                                    <circle cx="60" cy="300" r="6" fill="#fff"/>
                                    <text x="75" y="302" fill="#fff" font-weight="bold" font-size="9">1600</text>
                                    <text x="145" y="302" fill="#888" font-size="8">→ Baroque begins</text>

                                    <!-- Key -->
                                    <rect x="270" y="45" width="120" height="120" rx="6" fill="rgba(255,255,255,0.05)"/>
                                    <text x="330" y="62" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">MNEMONICS:</text>
                                    <text x="280" y="80" fill="#f59e0b" font-size="7">ELEGANCE</text>
                                    <text x="280" y="94" fill="#10b981" font-size="7">BMDA</text>
                                    <text x="280" y="108" fill="#3b82f6" font-size="7">GOLD</text>
                                    <text x="280" y="122" fill="#ec4899" font-size="7">MIBA</text>
                                    <text x="280" y="136" fill="#6366f1" font-size="7">LMR</text>
                                    <text x="280" y="150" fill="#8b5cf6" font-size="7">SEALS</text>
                                    <text x="280" y="164" fill="#ef4444" font-size="7">GLOW</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="13">🧠 YOUR MEMORY TOOLKIT</text>

                                    <!-- Row 1 -->
                                    <rect x="15" y="40" width="90" height="70" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="60" y="60" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="11">ELEGANCE</text>
                                    <text x="60" y="78" text-anchor="middle" fill="#fff" font-size="7">Int'l Gothic</text>
                                    <text x="60" y="92" text-anchor="middle" fill="#888" font-size="6">Courtly refinement</text>
                                    <text x="60" y="104" text-anchor="middle" fill="#888" font-size="6">Gold &amp; decoration</text>

                                    <rect x="112" y="40" width="90" height="70" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="157" y="60" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">BMDA</text>
                                    <text x="157" y="78" text-anchor="middle" fill="#fff" font-size="7">Florence</text>
                                    <text x="157" y="92" text-anchor="middle" fill="#888" font-size="6">4 pioneers</text>
                                    <text x="157" y="104" text-anchor="middle" fill="#888" font-size="6">Science of art</text>

                                    <rect x="209" y="40" width="90" height="70" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="254" y="60" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">GOLD</text>
                                    <text x="254" y="78" text-anchor="middle" fill="#fff" font-size="7">Northern</text>
                                    <text x="254" y="92" text-anchor="middle" fill="#888" font-size="6">Oil &amp; detail</text>
                                    <text x="254" y="104" text-anchor="middle" fill="#888" font-size="6">Hidden symbols</text>

                                    <rect x="306" y="40" width="80" height="70" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="346" y="60" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="11">MIBA</text>
                                    <text x="346" y="78" text-anchor="middle" fill="#fff" font-size="7">Global</text>
                                    <text x="346" y="92" text-anchor="middle" fill="#888" font-size="6">World trade</text>
                                    <text x="346" y="104" text-anchor="middle" fill="#888" font-size="6">Art exchanges</text>

                                    <!-- Row 2 -->
                                    <rect x="55" y="120" width="90" height="70" rx="6" fill="rgba(99,102,241,0.15)" stroke="#6366f1"/>
                                    <text x="100" y="140" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="11">LMR</text>
                                    <text x="100" y="158" text-anchor="middle" fill="#fff" font-size="7">High Renaissance</text>
                                    <text x="100" y="172" text-anchor="middle" fill="#888" font-size="6">3 giants</text>
                                    <text x="100" y="184" text-anchor="middle" fill="#888" font-size="6">Peak of ideals</text>

                                    <rect x="155" y="120" width="90" height="70" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="200" y="140" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">SEALS</text>
                                    <text x="200" y="158" text-anchor="middle" fill="#fff" font-size="7">Mannerism</text>
                                    <text x="200" y="172" text-anchor="middle" fill="#888" font-size="6">Rule-breaking</text>
                                    <text x="200" y="184" text-anchor="middle" fill="#888" font-size="6">Strange beauty</text>

                                    <rect x="255" y="120" width="90" height="70" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="300" y="140" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">GLOW</text>
                                    <text x="300" y="158" text-anchor="middle" fill="#fff" font-size="7">Venetian</text>
                                    <text x="300" y="172" text-anchor="middle" fill="#888" font-size="6">Color primacy</text>
                                    <text x="300" y="184" text-anchor="middle" fill="#888" font-size="6">Atmospheric</text>

                                    <!-- Test yourself -->
                                    <rect x="30" y="205" width="340" height="85" rx="8" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="225" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">🧪 TEST YOURSELF</text>
                                    <text x="200" y="245" text-anchor="middle" fill="#888" font-size="8">Can you recall what each letter stands for?</text>
                                    <text x="200" y="262" text-anchor="middle" fill="#888" font-size="8">ELEGANCE • BMDA • GOLD • MIBA • LMR • SEALS • GLOW</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#10b981" font-size="8">If yes, you've mastered 300 years of art history!</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">THE ESSENTIAL ARTISTS</text>

                                    <!-- Column 1 -->
                                    <rect x="15" y="38" width="120" height="125" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="75" y="55" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">EARLY PERIOD</text>
                                    <text x="25" y="72" fill="#fff" font-size="7">Gothic:</text>
                                    <text x="25" y="84" fill="#888" font-size="7">• Limbourg Bros</text>
                                    <text x="25" y="100" fill="#fff" font-size="7">Florence:</text>
                                    <text x="25" y="112" fill="#888" font-size="7">• Brunelleschi</text>
                                    <text x="25" y="124" fill="#888" font-size="7">• Masaccio</text>
                                    <text x="25" y="136" fill="#888" font-size="7">• Donatello</text>
                                    <text x="25" y="148" fill="#888" font-size="7">• Botticelli</text>

                                    <!-- Column 2 -->
                                    <rect x="140" y="38" width="120" height="125" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="55" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">NORTHERN</text>
                                    <text x="150" y="72" fill="#fff" font-size="7">Oil Masters:</text>
                                    <text x="150" y="84" fill="#888" font-size="7">• Jan van Eyck</text>
                                    <text x="150" y="100" fill="#fff" font-size="7">German:</text>
                                    <text x="150" y="112" fill="#888" font-size="7">• Albrecht Dürer</text>
                                    <text x="150" y="128" fill="#fff" font-size="7">Flemish:</text>
                                    <text x="150" y="140" fill="#888" font-size="7">• Bosch</text>
                                    <text x="150" y="152" fill="#888" font-size="7">• Bruegel</text>

                                    <!-- Column 3 -->
                                    <rect x="265" y="38" width="120" height="125" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1"/>
                                    <text x="325" y="55" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="9">HIGH REN</text>
                                    <text x="275" y="72" fill="#fff" font-size="7">The 3 Giants:</text>
                                    <text x="275" y="88" fill="#888" font-size="7">• Leonardo</text>
                                    <text x="275" y="100" fill="#888" font-size="6">(sfumato)</text>
                                    <text x="275" y="116" fill="#888" font-size="7">• Michelangelo</text>
                                    <text x="275" y="128" fill="#888" font-size="6">(terribilità)</text>
                                    <text x="275" y="144" fill="#888" font-size="7">• Raphael</text>
                                    <text x="275" y="156" fill="#888" font-size="6">(grazia)</text>

                                    <!-- Bottom row -->
                                    <rect x="15" y="170" width="180" height="120" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="105" y="187" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">MANNERISM</text>
                                    <text x="25" y="205" fill="#fff" font-size="7">Italian:</text>
                                    <text x="25" y="217" fill="#888" font-size="7">• Pontormo (emotion)</text>
                                    <text x="25" y="229" fill="#888" font-size="7">• Parmigianino (elegance)</text>
                                    <text x="25" y="245" fill="#fff" font-size="7">Spanish:</text>
                                    <text x="25" y="257" fill="#888" font-size="7">• El Greco (spiritual fire)</text>
                                    <text x="25" y="275" fill="#fff" font-size="7">Flemish:</text>
                                    <text x="25" y="287" fill="#888" font-size="7">• Arcimboldo (composite)</text>

                                    <rect x="200" y="170" width="185" height="120" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="292" y="187" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">VENETIAN</text>
                                    <text x="210" y="205" fill="#fff" font-size="7">Pioneers:</text>
                                    <text x="210" y="217" fill="#888" font-size="7">• Bellini (light)</text>
                                    <text x="210" y="229" fill="#888" font-size="7">• Giorgione (mood)</text>
                                    <text x="210" y="245" fill="#fff" font-size="7">Masters:</text>
                                    <text x="210" y="257" fill="#888" font-size="7">• Titian (color king)</text>
                                    <text x="210" y="269" fill="#888" font-size="7">• Tintoretto (drama)</text>
                                    <text x="210" y="281" fill="#888" font-size="7">• Veronese (spectacle)</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#fcd34d" font-weight="bold" font-size="12">5 INNOVATIONS THAT CHANGED EVERYTHING</text>

                                    <!-- Innovation 1 -->
                                    <rect x="20" y="40" width="175" height="55" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="57" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">1. LINEAR PERSPECTIVE</text>
                                    <text x="107" y="72" text-anchor="middle" fill="#fff" font-size="8">Math rules for 3D illusion</text>
                                    <text x="107" y="87" text-anchor="middle" fill="#888" font-size="7">Brunelleschi • Florence • 1420s</text>

                                    <!-- Innovation 2 -->
                                    <rect x="205" y="40" width="175" height="55" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="57" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">2. OIL PAINTING</text>
                                    <text x="292" y="72" text-anchor="middle" fill="#fff" font-size="8">Layering, glazing, detail</text>
                                    <text x="292" y="87" text-anchor="middle" fill="#888" font-size="7">Van Eyck → Venice • 1430s</text>

                                    <!-- Innovation 3 -->
                                    <rect x="20" y="105" width="175" height="55" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="122" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">3. ANATOMY STUDY</text>
                                    <text x="107" y="137" text-anchor="middle" fill="#fff" font-size="8">Dissection for realism</text>
                                    <text x="107" y="152" text-anchor="middle" fill="#888" font-size="7">Leonardo/Michelangelo • 1490s</text>

                                    <!-- Innovation 4 -->
                                    <rect x="205" y="105" width="175" height="55" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="122" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">4. SFUMATO</text>
                                    <text x="292" y="137" text-anchor="middle" fill="#fff" font-size="8">Smoky, soft transitions</text>
                                    <text x="292" y="152" text-anchor="middle" fill="#888" font-size="7">Leonardo • Mona Lisa • 1503</text>

                                    <!-- Innovation 5 -->
                                    <rect x="112" y="170" width="175" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="187" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">5. COLORITO</text>
                                    <text x="200" y="202" text-anchor="middle" fill="#fff" font-size="8">Color over drawing</text>
                                    <text x="200" y="217" text-anchor="middle" fill="#888" font-size="7">Titian • Venice • 1500s</text>

                                    <!-- Why it matters -->
                                    <rect x="30" y="235" width="340" height="55" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="252" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">WHY THESE MATTER TODAY</text>
                                    <text x="200" y="268" text-anchor="middle" fill="#888" font-size="8">Every realistic painting, photograph, and film</text>
                                    <text x="200" y="282" text-anchor="middle" fill="#888" font-size="8">uses techniques invented in the Renaissance</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">💬 YOU CAN NOW DISCUSS...</text>

                                    <!-- Topics grid -->
                                    <rect x="20" y="40" width="175" height="50" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="58" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">TECHNIQUES</text>
                                    <text x="107" y="75" text-anchor="middle" fill="#fff" font-size="7">Perspective • Sfumato • Oil • Colorito</text>

                                    <rect x="205" y="40" width="175" height="50" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="58" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">MOVEMENTS</text>
                                    <text x="292" y="75" text-anchor="middle" fill="#fff" font-size="7">Gothic • Florence • Northern • Venice</text>

                                    <rect x="20" y="100" width="175" height="50" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="118" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">ARTISTS</text>
                                    <text x="107" y="135" text-anchor="middle" fill="#fff" font-size="7">Leonardo • Michelangelo • Titian • Dürer</text>

                                    <rect x="205" y="100" width="175" height="50" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="292" y="118" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">CONTEXT</text>
                                    <text x="292" y="135" text-anchor="middle" fill="#fff" font-size="7">Sack of Rome • Trade • Humanism</text>

                                    <!-- 3 questions framework -->
                                    <rect x="30" y="160" width="340" height="85" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">THE 3-QUESTION FRAMEWORK</text>
                                    <text x="200" y="198" text-anchor="middle" fill="#fff" font-size="9">When looking at ANY Renaissance artwork, ask:</text>

                                    <text x="100" y="218" text-anchor="middle" fill="#fff" font-size="9">1. WHERE?</text>
                                    <text x="200" y="218" text-anchor="middle" fill="#fff" font-size="9">2. WHEN?</text>
                                    <text x="300" y="218" text-anchor="middle" fill="#fff" font-size="9">3. WHY?</text>

                                    <text x="100" y="232" text-anchor="middle" fill="#888" font-size="7">Florence vs Venice</text>
                                    <text x="200" y="232" text-anchor="middle" fill="#888" font-size="7">Early vs High vs Late</text>
                                    <text x="300" y="232" text-anchor="middle" fill="#888" font-size="7">Church vs Private</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>

                                    <!-- Celebration header -->
                                    <rect x="75" y="15" width="250" height="45" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="38" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎓 BOOK 1 COMPLETE!</text>
                                    <text x="200" y="52" text-anchor="middle" fill="#fff" font-size="9">Renaissance: Medieval to Modern (1375-1600)</text>

                                    <!-- Stats -->
                                    <rect x="20" y="70" width="110" height="55" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="75" y="92" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">8</text>
                                    <text x="75" y="110" text-anchor="middle" fill="#fff" font-size="9">Lessons</text>
                                    <text x="75" y="122" text-anchor="middle" fill="#888" font-size="7">Completed</text>

                                    <rect x="145" y="70" width="110" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="92" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">300</text>
                                    <text x="200" y="110" text-anchor="middle" fill="#fff" font-size="9">Years</text>
                                    <text x="200" y="122" text-anchor="middle" fill="#888" font-size="7">Covered</text>

                                    <rect x="270" y="70" width="110" height="55" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="325" y="92" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">20+</text>
                                    <text x="325" y="110" text-anchor="middle" fill="#fff" font-size="9">Artists</text>
                                    <text x="325" y="122" text-anchor="middle" fill="#888" font-size="7">Learned</text>

                                    <!-- Memory tools summary -->
                                    <rect x="20" y="135" width="360" height="55" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="152" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">YOUR MEMORY TOOLKIT</text>
                                    <text x="200" y="172" text-anchor="middle" fill="#fff" font-size="10">ELEGANCE → BMDA → GOLD → MIBA → LMR → SEALS → GLOW</text>
                                    <text x="200" y="185" text-anchor="middle" fill="#888" font-size="7">7 mnemonics = 7 movements mastered</text>

                                    <!-- Skills unlocked -->
                                    <rect x="20" y="200" width="175" height="85" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="107" y="217" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">✓ SKILLS UNLOCKED</text>
                                    <text x="30" y="235" fill="#fff" font-size="7">• Identify movements</text>
                                    <text x="30" y="250" fill="#fff" font-size="7">• Recognize techniques</text>
                                    <text x="30" y="265" fill="#fff" font-size="7">• Discuss art confidently</text>
                                    <text x="30" y="280" fill="#fff" font-size="7">• Understand context</text>

                                    <!-- Next steps -->
                                    <rect x="205" y="200" width="175" height="85" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="292" y="217" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">→ NEXT: BOOK 2</text>
                                    <text x="215" y="235" fill="#fff" font-size="7">Baroque to Rococo</text>
                                    <text x="215" y="250" fill="#fff" font-size="7">(1600-1800)</text>
                                    <text x="215" y="270" fill="#888" font-size="7">Caravaggio • Bernini</text>
                                    <text x="215" y="282" fill="#888" font-size="7">Rembrandt • Vermeer</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="14">WHY BAROQUE HAPPENED</text>

                                    <!-- Two crises -->
                                    <rect x="20" y="45" width="175" height="85" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">COUNTER-REFORMATION</text>
                                    <text x="107" y="82" text-anchor="middle" fill="#fff" font-size="8">Catholic Church fights back</text>
                                    <text x="107" y="97" text-anchor="middle" fill="#fff" font-size="8">against Protestant criticism</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#888" font-size="7">Art as EMOTIONAL weapon</text>
                                    <text x="107" y="127" text-anchor="middle" fill="#888" font-size="7">Feel faith, don't just think it</text>

                                    <rect x="205" y="45" width="175" height="85" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">SCIENTIFIC REVOLUTION</text>
                                    <text x="292" y="82" text-anchor="middle" fill="#fff" font-size="8">Galileo, Newton reveal</text>
                                    <text x="292" y="97" text-anchor="middle" fill="#fff" font-size="8">a strange new universe</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#888" font-size="7">Awe and wonder</text>
                                    <text x="292" y="127" text-anchor="middle" fill="#888" font-size="7">The sublime and infinite</text>

                                    <!-- Characteristics -->
                                    <rect x="20" y="140" width="360" height="55" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="158" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">BAROQUE CHARACTERISTICS</text>
                                    <text x="80" y="178" text-anchor="middle" fill="#fff" font-size="8">DRAMA</text>
                                    <text x="160" y="178" text-anchor="middle" fill="#fff" font-size="8">MOVEMENT</text>
                                    <text x="240" y="178" text-anchor="middle" fill="#fff" font-size="8">EMOTION</text>
                                    <text x="320" y="178" text-anchor="middle" fill="#fff" font-size="8">GRANDEUR</text>
                                    <text x="80" y="190" text-anchor="middle" fill="#888" font-size="6">Intense light/dark</text>
                                    <text x="160" y="190" text-anchor="middle" fill="#888" font-size="6">Swirling forms</text>
                                    <text x="240" y="190" text-anchor="middle" fill="#888" font-size="6">Psychological depth</text>
                                    <text x="320" y="190" text-anchor="middle" fill="#888" font-size="6">Overwhelming scale</text>

                                    <!-- Timeline -->
                                    <rect x="20" y="205" width="360" height="65" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="222" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">BAROQUE SPREAD ACROSS EUROPE</text>
                                    <line x1="50" y1="245" x2="350" y2="245" stroke="#8b5cf6" stroke-width="2"/>
                                    <circle cx="80" cy="245" r="4" fill="#ef4444"/>
                                    <text x="80" y="260" text-anchor="middle" fill="#888" font-size="6">Italy 1600</text>
                                    <circle cx="150" cy="245" r="4" fill="#f59e0b"/>
                                    <text x="150" y="260" text-anchor="middle" fill="#888" font-size="6">Flanders 1610</text>
                                    <circle cx="220" cy="245" r="4" fill="#10b981"/>
                                    <text x="220" y="260" text-anchor="middle" fill="#888" font-size="6">Dutch 1620</text>
                                    <circle cx="290" cy="245" r="4" fill="#3b82f6"/>
                                    <text x="290" y="260" text-anchor="middle" fill="#888" font-size="6">France 1640</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="13">THE 4 BAROQUE FEATURES</text>

                                    <!-- Feature 1: Light -->
                                    <rect x="20" y="40" width="175" height="85" rx="8" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="107" y="58" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">1. DRAMATIC LIGHTING</text>
                                    <rect x="40" y="68" width="60" height="45" fill="#0a0a0a"/>
                                    <circle cx="110" cy="75" r="10" fill="#ffd700" opacity="0.8"/>
                                    <line x1="110" y1="75" x2="70" y2="90" stroke="#ffd700" stroke-width="2" opacity="0.6"/>
                                    <circle cx="70" cy="90" r="12" fill="#d4a574"/>
                                    <text x="107" y="120" text-anchor="middle" fill="#888" font-size="7">Tenebrism: from darkness</text>

                                    <!-- Feature 2: Movement -->
                                    <rect x="205" y="40" width="175" height="85" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="292" y="58" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">2. DYNAMIC MOVEMENT</text>
                                    <path d="M250 80 Q280 65 310 85 Q340 105 320 115 Q290 125 270 110" stroke="#ef4444" stroke-width="3" fill="none"/>
                                    <path d="M260 90 Q285 75 305 95" stroke="#ef4444" stroke-width="2" fill="none"/>
                                    <text x="292" y="120" text-anchor="middle" fill="#888" font-size="7">Diagonals, swirls, tension</text>

                                    <!-- Feature 3: Emotion -->
                                    <rect x="20" y="135" width="175" height="85" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="153" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">3. EMOTIONAL INTENSITY</text>
                                    <circle cx="80" cy="185" r="18" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <path d="M72 178 Q75 182 78 178" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                                    <path d="M82 178 Q85 182 88 178" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                                    <ellipse cx="80" cy="193" rx="8" ry="5" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="130" y="182" fill="#fff" font-size="7">Ecstasy</text>
                                    <text x="130" y="195" fill="#fff" font-size="7">Agony</text>
                                    <text x="107" y="215" text-anchor="middle" fill="#888" font-size="7">Feel, don't just think</text>

                                    <!-- Feature 4: Grandeur -->
                                    <rect x="205" y="135" width="175" height="85" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="153" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">4. THEATRICAL GRANDEUR</text>
                                    <rect x="250" y="165" width="85" height="45" rx="4" fill="none" stroke="#10b981" stroke-width="2"/>
                                    <rect x="255" y="170" width="20" height="35" fill="rgba(16,185,129,0.3)"/>
                                    <rect x="280" y="170" width="20" height="35" fill="rgba(16,185,129,0.3)"/>
                                    <rect x="305" y="170" width="20" height="35" fill="rgba(16,185,129,0.3)"/>
                                    <text x="292" y="215" text-anchor="middle" fill="#888" font-size="7">Overwhelming scale</text>

                                    <!-- Comparison -->
                                    <rect x="40" y="230" width="320" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">RENAISSANCE vs BAROQUE</text>
                                    <text x="120" y="268" text-anchor="middle" fill="#10b981" font-size="8">Calm, balanced, intellectual</text>
                                    <text x="200" y="268" text-anchor="middle" fill="#666" font-size="10">→</text>
                                    <text x="280" y="268" text-anchor="middle" fill="#ffd700" font-size="8">Dramatic, dynamic, emotional</text>
                                    <text x="120" y="282" text-anchor="middle" fill="#888" font-size="7">1400-1520</text>
                                    <text x="280" y="282" text-anchor="middle" fill="#888" font-size="7">1600-1750</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="13">THE 4 BAROQUE TITANS</text>

                                    <!-- Caravaggio -->
                                    <rect x="20" y="40" width="175" height="80" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="58" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CARAVAGGIO</text>
                                    <text x="107" y="72" text-anchor="middle" fill="#888" font-size="8">Italy • 1571-1610</text>
                                    <text x="107" y="88" text-anchor="middle" fill="#fff" font-size="8">Invented tenebrism</text>
                                    <text x="107" y="102" text-anchor="middle" fill="#fff" font-size="8">Common people as saints</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#888" font-size="7">Violent life, revolutionary art</text>

                                    <!-- Bernini -->
                                    <rect x="205" y="40" width="175" height="80" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="58" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">BERNINI</text>
                                    <text x="292" y="72" text-anchor="middle" fill="#888" font-size="8">Italy • 1598-1680</text>
                                    <text x="292" y="88" text-anchor="middle" fill="#fff" font-size="8">Made marble breathe</text>
                                    <text x="292" y="102" text-anchor="middle" fill="#fff" font-size="8">Ecstasy in stone</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#888" font-size="7">St. Peter's Square</text>

                                    <!-- Rubens -->
                                    <rect x="20" y="130" width="175" height="80" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="148" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">RUBENS</text>
                                    <text x="107" y="162" text-anchor="middle" fill="#888" font-size="8">Flanders • 1577-1640</text>
                                    <text x="107" y="178" text-anchor="middle" fill="#fff" font-size="8">Master of grandeur</text>
                                    <text x="107" y="192" text-anchor="middle" fill="#fff" font-size="8">Massive, dynamic canvases</text>
                                    <text x="107" y="205" text-anchor="middle" fill="#888" font-size="7">Diplomat-painter</text>

                                    <!-- Rembrandt -->
                                    <rect x="205" y="130" width="175" height="80" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="148" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">REMBRANDT</text>
                                    <text x="292" y="162" text-anchor="middle" fill="#888" font-size="8">Dutch • 1606-1669</text>
                                    <text x="292" y="178" text-anchor="middle" fill="#fff" font-size="8">Psychologist of paint</text>
                                    <text x="292" y="192" text-anchor="middle" fill="#fff" font-size="8">Penetrating portraits</text>
                                    <text x="292" y="205" text-anchor="middle" fill="#888" font-size="7">Died poor, now priceless</text>

                                    <!-- Common traits -->
                                    <rect x="40" y="220" width="320" height="70" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">WHAT THEY SHARED</text>
                                    <text x="95" y="258" text-anchor="middle" fill="#fff" font-size="8">Drama</text>
                                    <text x="170" y="258" text-anchor="middle" fill="#fff" font-size="8">Movement</text>
                                    <text x="245" y="258" text-anchor="middle" fill="#fff" font-size="8">Emotion</text>
                                    <text x="320" y="258" text-anchor="middle" fill="#fff" font-size="8">Psychology</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="8">All transformed how we see human experience in art</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="16">T E M P O</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Remember Baroque Art in 5 letters</text>

                                    <!-- T -->
                                    <rect x="20" y="60" width="70" height="100" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="55" y="82" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">T</text>
                                    <text x="55" y="100" text-anchor="middle" fill="#ef4444" font-size="7">TENEBRISM</text>
                                    <text x="55" y="118" text-anchor="middle" fill="#fff" font-size="6">Dramatic</text>
                                    <text x="55" y="130" text-anchor="middle" fill="#fff" font-size="6">lighting</text>
                                    <text x="55" y="150" text-anchor="middle" fill="#888" font-size="6">From</text>
                                    <text x="55" y="160" text-anchor="middle" fill="#888" font-size="6">darkness</text>

                                    <!-- E -->
                                    <rect x="95" y="60" width="70" height="100" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="130" y="82" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">E</text>
                                    <text x="130" y="100" text-anchor="middle" fill="#f59e0b" font-size="7">EMOTION</text>
                                    <text x="130" y="118" text-anchor="middle" fill="#fff" font-size="6">Feel, don't</text>
                                    <text x="130" y="130" text-anchor="middle" fill="#fff" font-size="6">just think</text>
                                    <text x="130" y="150" text-anchor="middle" fill="#888" font-size="6">Ecstasy,</text>
                                    <text x="130" y="160" text-anchor="middle" fill="#888" font-size="6">agony</text>

                                    <!-- M -->
                                    <rect x="170" y="60" width="70" height="100" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="205" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">M</text>
                                    <text x="205" y="100" text-anchor="middle" fill="#10b981" font-size="7">MOVEMENT</text>
                                    <text x="205" y="118" text-anchor="middle" fill="#fff" font-size="6">Diagonals</text>
                                    <text x="205" y="130" text-anchor="middle" fill="#fff" font-size="6">& spirals</text>
                                    <text x="205" y="150" text-anchor="middle" fill="#888" font-size="6">Nothing</text>
                                    <text x="205" y="160" text-anchor="middle" fill="#888" font-size="6">static</text>

                                    <!-- P -->
                                    <rect x="245" y="60" width="70" height="100" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="280" y="82" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">P</text>
                                    <text x="280" y="100" text-anchor="middle" fill="#8b5cf6" font-size="7">POWER</text>
                                    <text x="280" y="118" text-anchor="middle" fill="#fff" font-size="6">Church &amp;</text>
                                    <text x="280" y="130" text-anchor="middle" fill="#fff" font-size="6">monarchy</text>
                                    <text x="280" y="150" text-anchor="middle" fill="#888" font-size="6">Feel small</text>
                                    <text x="280" y="160" text-anchor="middle" fill="#888" font-size="6">before God</text>

                                    <!-- O -->
                                    <rect x="320" y="60" width="65" height="100" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="352" y="82" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">O</text>
                                    <text x="352" y="100" text-anchor="middle" fill="#3b82f6" font-size="7">OVERWHELM</text>
                                    <text x="352" y="118" text-anchor="middle" fill="#fff" font-size="6">Sensory</text>
                                    <text x="352" y="130" text-anchor="middle" fill="#fff" font-size="6">overload</text>
                                    <text x="352" y="150" text-anchor="middle" fill="#888" font-size="6">Every</text>
                                    <text x="352" y="160" text-anchor="middle" fill="#888" font-size="6">surface</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="175" width="340" height="45" rx="6" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#fff" font-size="9">"Baroque art sets the TEMPO—</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="9">Tenebrism, Emotion, Movement, Power, Overwhelm"</text>

                                    <!-- Timeline -->
                                    <rect x="30" y="230" width="340" height="40" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">BAROQUE ERA: 1600-1750</text>
                                    <text x="200" y="262" text-anchor="middle" fill="#888" font-size="8">Italy → Flanders → Dutch Republic → France → All of Europe</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>

                                    <!-- Header -->
                                    <rect x="100" y="10" width="200" height="35" rx="8" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
                                    <text x="200" y="33" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="14">✓ LESSON 1 COMPLETE</text>

                                    <!-- Core concept -->
                                    <rect x="20" y="55" width="360" height="35" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="72" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">CORE CONCEPT</text>
                                    <text x="200" y="85" text-anchor="middle" fill="#fff" font-size="8">Drama, emotion, and grandeur serving Church and Crown</text>

                                    <!-- Features -->
                                    <rect x="20" y="100" width="175" height="70" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="107" y="115" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="8">4 FEATURES</text>
                                    <text x="107" y="132" text-anchor="middle" fill="#fff" font-size="7">Dramatic lighting • Movement</text>
                                    <text x="107" y="147" text-anchor="middle" fill="#fff" font-size="7">Emotional intensity • Grandeur</text>
                                    <text x="107" y="162" text-anchor="middle" fill="#888" font-size="6">Overwhelm the senses</text>

                                    <!-- Titans -->
                                    <rect x="205" y="100" width="175" height="70" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="292" y="115" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="8">4 TITANS</text>
                                    <text x="292" y="132" text-anchor="middle" fill="#fff" font-size="7">Caravaggio • Bernini</text>
                                    <text x="292" y="147" text-anchor="middle" fill="#fff" font-size="7">Rubens • Rembrandt</text>
                                    <text x="292" y="162" text-anchor="middle" fill="#888" font-size="6">Each a master of drama</text>

                                    <!-- Memory tool -->
                                    <rect x="20" y="180" width="360" height="35" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">REMEMBER: TEMPO</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="8">Tenebrism • Emotion • Movement • Power • Overwhelm</text>

                                    <!-- Feynman badge -->
                                    <rect x="80" y="225" width="240" height="28" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="244" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">🎓 Ready to explain Baroque to anyone!</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">CARAVAGGIO (1571-1610)</text>
                                    <text x="200" y="40" text-anchor="middle" fill="#888" font-size="9">"The most dangerous artist in history"</text>

                                    <!-- Life events timeline -->
                                    <rect x="20" y="55" width="360" height="85" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="72" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">A LIFE OF VIOLENCE AND GENIUS</text>

                                    <line x1="50" y1="95" x2="350" y2="95" stroke="#ef4444" stroke-width="2"/>
                                    <circle cx="70" cy="95" r="4" fill="#f59e0b"/>
                                    <text x="70" y="115" text-anchor="middle" fill="#888" font-size="6">1592</text>
                                    <text x="70" y="125" text-anchor="middle" fill="#fff" font-size="5">Rome</text>

                                    <circle cx="140" cy="95" r="4" fill="#10b981"/>
                                    <text x="140" y="115" text-anchor="middle" fill="#888" font-size="6">1599</text>
                                    <text x="140" y="125" text-anchor="middle" fill="#fff" font-size="5">First hit</text>

                                    <circle cx="210" cy="95" r="6" fill="#ef4444"/>
                                    <text x="210" y="115" text-anchor="middle" fill="#888" font-size="6">1606</text>
                                    <text x="210" y="125" text-anchor="middle" fill="#ef4444" font-size="5">KILLS A MAN</text>

                                    <circle cx="280" cy="95" r="4" fill="#8b5cf6"/>
                                    <text x="280" y="115" text-anchor="middle" fill="#888" font-size="6">1608</text>
                                    <text x="280" y="125" text-anchor="middle" fill="#fff" font-size="5">Knight/expelled</text>

                                    <circle cx="330" cy="95" r="4" fill="#666"/>
                                    <text x="330" y="115" text-anchor="middle" fill="#888" font-size="6">1610</text>
                                    <text x="330" y="125" text-anchor="middle" fill="#fff" font-size="5">Dies at 38</text>

                                    <!-- Before/After -->
                                    <rect x="20" y="150" width="175" height="65" rx="6" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="107" y="167" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="9">BEFORE CARAVAGGIO</text>
                                    <text x="107" y="185" text-anchor="middle" fill="#888" font-size="7">Saints like Greek gods</text>
                                    <text x="107" y="198" text-anchor="middle" fill="#888" font-size="7">Heavenly settings</text>
                                    <text x="107" y="211" text-anchor="middle" fill="#888" font-size="7">Idealized beauty</text>

                                    <rect x="205" y="150" width="175" height="65" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="292" y="167" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">AFTER CARAVAGGIO</text>
                                    <text x="292" y="185" text-anchor="middle" fill="#fff" font-size="7">Saints like street people</text>
                                    <text x="292" y="198" text-anchor="middle" fill="#fff" font-size="7">Dark Roman taverns</text>
                                    <text x="292" y="211" text-anchor="middle" fill="#fff" font-size="7">Raw, real humanity</text>

                                    <!-- Legacy -->
                                    <rect x="40" y="225" width="320" height="45" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="242" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">HIS LEGACY</text>
                                    <text x="200" y="260" text-anchor="middle" fill="#fff" font-size="8">The "Caravaggisti" spread his style across all of Europe within 20 years</text>
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
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">CARAVAGGIO'S 4 REVOLUTIONS</text>

                                    <!-- 1. Tenebrism -->
                                    <rect x="20" y="40" width="175" height="85" rx="8" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="107" y="58" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="10">1. TENEBRISM</text>
                                    <rect x="40" y="68" width="70" height="45" fill="#050505"/>
                                    <circle cx="130" cy="75" r="12" fill="#ffd700" opacity="0.7"/>
                                    <line x1="130" y1="75" x2="75" y2="90" stroke="#ffd700" stroke-width="3" opacity="0.5"/>
                                    <circle cx="75" cy="90" r="15" fill="#d4a574"/>
                                    <text x="107" y="120" text-anchor="middle" fill="#888" font-size="7">Spotlight from darkness</text>

                                    <!-- 2. No Idealization -->
                                    <rect x="205" y="40" width="175" height="85" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="292" y="58" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">2. NO IDEALIZATION</text>
                                    <circle cx="260" cy="90" r="18" fill="#d4a574" stroke="#8b4513"/>
                                    <ellipse cx="255" cy="85" rx="3" ry="2" fill="#333"/>
                                    <ellipse cx="268" cy="85" rx="3" ry="2" fill="#333"/>
                                    <path d="M250 97 L270 100" stroke="#8b4513" stroke-width="1"/>
                                    <text x="310" y="85" fill="#fff" font-size="7">Wrinkles</text>
                                    <text x="310" y="97" fill="#fff" font-size="7">Dirty nails</text>
                                    <text x="292" y="120" text-anchor="middle" fill="#888" font-size="7">Real street people</text>

                                    <!-- 3. Physicality -->
                                    <rect x="20" y="135" width="175" height="85" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="153" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">3. RADICAL PHYSICALITY</text>
                                    <ellipse cx="70" cy="190" rx="20" ry="12" fill="#d4a574" stroke="#8b4513"/>
                                    <ellipse cx="100" cy="188" rx="18" ry="10" fill="#d4a574" stroke="#8b4513"/>
                                    <text x="130" y="180" fill="#fff" font-size="7">Calloused</text>
                                    <text x="130" y="192" fill="#fff" font-size="7">dirty feet</text>
                                    <text x="107" y="215" text-anchor="middle" fill="#888" font-size="7">Bodies have WEIGHT</text>

                                    <!-- 4. Decisive Moment -->
                                    <rect x="205" y="135" width="175" height="85" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="153" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">4. DECISIVE MOMENT</text>
                                    <text x="292" y="185" text-anchor="middle" fill="#8b5cf6" font-size="30">⚡</text>
                                    <text x="292" y="215" text-anchor="middle" fill="#888" font-size="7">The split-second of drama</text>

                                    <!-- Famous Works -->
                                    <rect x="30" y="230" width="340" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">MASTERPIECES</text>
                                    <text x="100" y="268" text-anchor="middle" fill="#ffd700" font-size="7">Calling of Matthew</text>
                                    <text x="100" y="280" text-anchor="middle" fill="#888" font-size="6">1599-1600</text>
                                    <text x="200" y="268" text-anchor="middle" fill="#ef4444" font-size="7">Judith Beheading</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="6">1599</text>
                                    <text x="300" y="268" text-anchor="middle" fill="#10b981" font-size="7">Supper at Emmaus</text>
                                    <text x="300" y="280" text-anchor="middle" fill="#888" font-size="6">1601</text>
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
                                svg: `<svg viewBox="0 0 400 250" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="250" fill="#1a1a2e"/>

                                    <rect x="100" y="10" width="200" height="35" rx="8" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="200" y="33" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">✓ LESSON 2 COMPLETE</text>

                                    <rect x="20" y="55" width="175" height="80" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="107" y="72" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">4 REVOLUTIONS</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#fff" font-size="7">1. Tenebrism (spotlight)</text>
                                    <text x="107" y="105" text-anchor="middle" fill="#fff" font-size="7">2. No idealization (real)</text>
                                    <text x="107" y="120" text-anchor="middle" fill="#fff" font-size="7">3. Physicality (weight)</text>
                                    <text x="107" y="135" text-anchor="middle" fill="#888" font-size="7">4. Decisive moment</text>

                                    <rect x="205" y="55" width="175" height="80" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="292" y="72" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">THE CARAVAGGISTI</text>
                                    <text x="292" y="92" text-anchor="middle" fill="#fff" font-size="7">His followers spread the</text>
                                    <text x="292" y="107" text-anchor="middle" fill="#fff" font-size="7">style across Europe:</text>
                                    <text x="292" y="125" text-anchor="middle" fill="#888" font-size="7">Artemisia Gentileschi</text>
                                    <text x="292" y="137" text-anchor="middle" fill="#888" font-size="7">Georges de La Tour</text>

                                    <rect x="40" y="145" width="320" height="55" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="162" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">KEY INSIGHT</text>
                                    <text x="200" y="180" text-anchor="middle" fill="#fff" font-size="8">"Holiness can be found in ordinary humanity"</text>
                                    <text x="200" y="195" text-anchor="middle" fill="#888" font-size="7">You don't need perfect beauty to depict the divine</text>

                                    <rect x="80" y="210" width="240" height="30" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">🎓 You can now explain Caravaggio's revolution!</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">BERNINI (1598-1680)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"The Michelangelo of the Baroque"</text>

                                    <rect x="20" y="60" width="175" height="90" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="80" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">MARBLE INTO FLESH</text>
                                    <text x="107" y="100" text-anchor="middle" fill="#fff" font-size="8">Stone looks like skin</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#fff" font-size="8">Fabric seems to flow</text>
                                    <text x="107" y="130" text-anchor="middle" fill="#fff" font-size="8">Figures about to move</text>
                                    <text x="107" y="145" text-anchor="middle" fill="#888" font-size="7">Impossible virtuosity</text>

                                    <rect x="205" y="60" width="175" height="90" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="80" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">ECSTASY IN STONE</text>
                                    <text x="292" y="100" text-anchor="middle" fill="#fff" font-size="8">Spiritual rapture</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#fff" font-size="8">captured mid-moment</text>
                                    <text x="292" y="130" text-anchor="middle" fill="#fff" font-size="8">St. Teresa masterpiece</text>
                                    <text x="292" y="145" text-anchor="middle" fill="#888" font-size="7">Where art meets reality</text>

                                    <rect x="40" y="160" width="320" height="85" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">MAJOR ACHIEVEMENTS</text>
                                    <text x="110" y="200" text-anchor="middle" fill="#fff" font-size="8">St. Peter's Square</text>
                                    <text x="110" y="215" text-anchor="middle" fill="#888" font-size="7">Colonnade embraces</text>
                                    <text x="200" y="200" text-anchor="middle" fill="#fff" font-size="8">Ecstasy of St. Teresa</text>
                                    <text x="200" y="215" text-anchor="middle" fill="#888" font-size="7">Spiritual rapture</text>
                                    <text x="290" y="200" text-anchor="middle" fill="#fff" font-size="8">Apollo & Daphne</text>
                                    <text x="290" y="215" text-anchor="middle" fill="#888" font-size="7">Transformation</text>
                                    <text x="200" y="235" text-anchor="middle" fill="#888" font-size="8">Worked for 8 popes • Most famous artist in Europe for 50 years</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">REMBRANDT (1606-1669)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"He painted souls, not just faces"</text>

                                    <!-- Life arc -->
                                    <rect x="20" y="60" width="360" height="80" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="78" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">THE LIFE ARC</text>

                                    <path d="M50 120 Q150 80 200 100 Q250 120 350 130" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                                    <circle cx="80" cy="110" r="5" fill="#10b981"/>
                                    <text x="80" y="100" text-anchor="middle" fill="#888" font-size="6">RISE</text>
                                    <circle cx="180" cy="92" r="5" fill="#ffd700"/>
                                    <text x="180" y="82" text-anchor="middle" fill="#888" font-size="6">PEAK</text>
                                    <circle cx="280" cy="118" r="5" fill="#ef4444"/>
                                    <text x="280" y="108" text-anchor="middle" fill="#888" font-size="6">LOSS</text>
                                    <circle cx="340" cy="130" r="5" fill="#8b5cf6"/>
                                    <text x="340" y="120" text-anchor="middle" fill="#888" font-size="6">LEGEND</text>

                                    <!-- His approach -->
                                    <rect x="20" y="150" width="175" height="60" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="107" y="168" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">OTHER BAROQUE ARTISTS</text>
                                    <text x="107" y="185" text-anchor="middle" fill="#888" font-size="7">Drama through action</text>
                                    <text x="107" y="198" text-anchor="middle" fill="#888" font-size="7">Violence, movement</text>

                                    <rect x="205" y="150" width="175" height="60" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="292" y="168" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">REMBRANDT</text>
                                    <text x="292" y="185" text-anchor="middle" fill="#fff" font-size="7">Drama in quiet moments</text>
                                    <text x="292" y="198" text-anchor="middle" fill="#fff" font-size="7">Thought, reflection</text>

                                    <!-- Legacy -->
                                    <rect x="40" y="220" width="320" height="50" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">THE IRONY</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#fff" font-size="8">Died poor and forgotten • Now among the greatest artists ever</text>
                                    <text x="200" y="268" text-anchor="middle" fill="#888" font-size="7">90+ self-portraits documenting his own aging</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="13">REMBRANDT'S UNIQUE APPROACH</text>

                                    <rect x="20" y="40" width="175" height="75" rx="6" fill="rgba(255,215,0,0.15)" stroke="#ffd700"/>
                                    <text x="107" y="58" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">LIGHT AS PSYCHOLOGY</text>
                                    <text x="107" y="78" text-anchor="middle" fill="#fff" font-size="7">Not theatrical spotlight</text>
                                    <text x="107" y="93" text-anchor="middle" fill="#fff" font-size="7">but inner glow</text>
                                    <text x="107" y="108" text-anchor="middle" fill="#888" font-size="6">Light of thought, wisdom</text>

                                    <rect x="205" y="40" width="175" height="75" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="292" y="58" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">90+ SELF-PORTRAITS</text>
                                    <text x="292" y="78" text-anchor="middle" fill="#fff" font-size="7">40 years documented</text>
                                    <text x="292" y="93" text-anchor="middle" fill="#fff" font-size="7">Aging, loss, wisdom</text>
                                    <text x="292" y="108" text-anchor="middle" fill="#888" font-size="6">Most honest autobiography</text>

                                    <rect x="20" y="125" width="175" height="75" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="143" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">IMPASTO TECHNIQUE</text>
                                    <text x="107" y="163" text-anchor="middle" fill="#fff" font-size="7">Thick, rough paint</text>
                                    <text x="107" y="178" text-anchor="middle" fill="#fff" font-size="7">Even fingerprints visible</text>
                                    <text x="107" y="193" text-anchor="middle" fill="#888" font-size="6">Up close = rough; far = glows</text>

                                    <rect x="205" y="125" width="175" height="75" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="143" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">PSYCHOLOGICAL DEPTH</text>
                                    <text x="292" y="163" text-anchor="middle" fill="#fff" font-size="7">Subjects are THINKING</text>
                                    <text x="292" y="178" text-anchor="middle" fill="#fff" font-size="7">Not posing, but living</text>
                                    <text x="292" y="193" text-anchor="middle" fill="#888" font-size="6">Intimate, private moments</text>

                                    <!-- Masterpieces -->
                                    <rect x="30" y="210" width="340" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="228" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">MASTERPIECES</text>
                                    <text x="90" y="248" text-anchor="middle" fill="#ffd700" font-size="7">Night Watch</text>
                                    <text x="90" y="260" text-anchor="middle" fill="#888" font-size="6">1642</text>
                                    <text x="200" y="248" text-anchor="middle" fill="#ef4444" font-size="7">Self-Portraits</text>
                                    <text x="200" y="260" text-anchor="middle" fill="#888" font-size="6">1629-1669</text>
                                    <text x="310" y="248" text-anchor="middle" fill="#8b5cf6" font-size="7">Jewish Bride</text>
                                    <text x="310" y="260" text-anchor="middle" fill="#888" font-size="6">1667</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">VERMEER (1632-1675)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"Only 34 paintings, yet among the greatest ever"</text>

                                    <rect x="20" y="60" width="175" height="85" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="107" y="80" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">THE MYSTERY</text>
                                    <text x="107" y="100" text-anchor="middle" fill="#fff" font-size="7">Unknown for 200 years</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#fff" font-size="7">Almost no life records</text>
                                    <text x="107" y="130" text-anchor="middle" fill="#fff" font-size="7">Camera obscura?</text>
                                    <text x="107" y="143" text-anchor="middle" fill="#888" font-size="6">Rediscovered 1866</text>

                                    <rect x="205" y="60" width="175" height="85" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="80" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">THE NUMBERS</text>
                                    <text x="292" y="100" text-anchor="middle" fill="#fff" font-size="7">34 confirmed paintings</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#fff" font-size="7">11 children</text>
                                    <text x="292" y="130" text-anchor="middle" fill="#fff" font-size="7">Died in debt</text>
                                    <text x="292" y="143" text-anchor="middle" fill="#888" font-size="6">Now priceless</text>

                                    <rect x="40" y="155" width="320" height="50" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="173" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">WHAT MAKES HIM SPECIAL</text>
                                    <text x="200" y="193" text-anchor="middle" fill="#fff" font-size="8">Perfect, suspended moments • Time seems to stop</text>
                                    <text x="200" y="205" text-anchor="middle" fill="#888" font-size="7">Light becomes poetry</text>

                                    <rect x="40" y="215" width="320" height="35" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#fff" font-size="8">Girl with a Pearl Earring • The Milkmaid • The Art of Painting</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="14">ROCOCO (c. 1700-1780)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"From thunder to champagne"</text>

                                    <!-- Baroque vs Rococo -->
                                    <rect x="20" y="60" width="175" height="90" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="107" y="78" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">BAROQUE</text>
                                    <text x="107" y="95" text-anchor="middle" fill="#888" font-size="7">Dark churches</text>
                                    <text x="107" y="110" text-anchor="middle" fill="#888" font-size="7">Religious ecstasy</text>
                                    <text x="107" y="125" text-anchor="middle" fill="#888" font-size="7">Overwhelming scale</text>
                                    <text x="107" y="140" text-anchor="middle" fill="#888" font-size="7">Serious, dramatic</text>

                                    <text x="200" y="105" text-anchor="middle" fill="#666" font-size="16">→</text>

                                    <rect x="205" y="60" width="175" height="90" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="292" y="78" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">ROCOCO</text>
                                    <text x="292" y="95" text-anchor="middle" fill="#fff" font-size="7">Bright salons</text>
                                    <text x="292" y="110" text-anchor="middle" fill="#fff" font-size="7">Romantic love</text>
                                    <text x="292" y="125" text-anchor="middle" fill="#fff" font-size="7">Intimate charm</text>
                                    <text x="292" y="140" text-anchor="middle" fill="#fff" font-size="7">Playful, elegant</text>

                                    <!-- Key features -->
                                    <rect x="20" y="160" width="360" height="55" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="178" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">ROCOCO FEATURES</text>
                                    <text x="80" y="198" text-anchor="middle" fill="#fff" font-size="7">Curves &amp; shells</text>
                                    <text x="160" y="198" text-anchor="middle" fill="#fff" font-size="7">Pastel colors</text>
                                    <text x="240" y="198" text-anchor="middle" fill="#fff" font-size="7">Garden parties</text>
                                    <text x="320" y="198" text-anchor="middle" fill="#fff" font-size="7">Aristocratic play</text>

                                    <!-- Artists -->
                                    <rect x="40" y="225" width="320" height="45" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="242" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">KEY ARTISTS</text>
                                    <text x="100" y="260" text-anchor="middle" fill="#fff" font-size="7">Watteau - Fête galante</text>
                                    <text x="200" y="260" text-anchor="middle" fill="#fff" font-size="7">Boucher - Mythology</text>
                                    <text x="300" y="260" text-anchor="middle" fill="#fff" font-size="7">Fragonard - Romance</text>
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
                                svg: `<svg viewBox="0 0 400 250" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="250" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">RUBENS (1577-1640)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"The most successful artist of his age"</text>

                                    <rect x="20" y="60" width="175" height="85" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="78" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">THE PAINTER</text>
                                    <text x="107" y="98" text-anchor="middle" fill="#fff" font-size="7">1,400+ paintings</text>
                                    <text x="107" y="113" text-anchor="middle" fill="#fff" font-size="7">Overwhelming energy</text>
                                    <text x="107" y="128" text-anchor="middle" fill="#fff" font-size="7">Blazing colors</text>
                                    <text x="107" y="143" text-anchor="middle" fill="#888" font-size="6">Italian + Flemish fusion</text>

                                    <rect x="205" y="60" width="175" height="85" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="78" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">THE DIPLOMAT</text>
                                    <text x="292" y="98" text-anchor="middle" fill="#fff" font-size="7">6 languages fluent</text>
                                    <text x="292" y="113" text-anchor="middle" fill="#fff" font-size="7">Negotiated peace treaties</text>
                                    <text x="292" y="128" text-anchor="middle" fill="#fff" font-size="7">Served multiple courts</text>
                                    <text x="292" y="143" text-anchor="middle" fill="#888" font-size="6">Intellectual network</text>

                                    <rect x="40" y="155" width="320" height="80" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="175" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">RUBENS' STYLE</text>
                                    <text x="200" y="195" text-anchor="middle" fill="#fff" font-size="8">Figures BURST with life • Compositions SWIRL with movement</text>
                                    <text x="200" y="212" text-anchor="middle" fill="#fff" font-size="8">Colors BLAZE with warmth • Everything in constant motion</text>
                                    <text x="200" y="230" text-anchor="middle" fill="#888" font-size="7">Mythologies • Hunting scenes • Royal portraits • Altarpieces</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <rect x="80" y="10" width="240" height="40" rx="8" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="35" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎓 BOOK 2 COMPLETE!</text>

                                    <text x="200" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">YOUR BAROQUE-ROCOCO JOURNEY</text>

                                    <!-- Artists grid -->
                                    <rect x="20" y="80" width="85" height="50" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="62" y="100" text-anchor="middle" fill="#ef4444" font-size="8">Caravaggio</text>
                                    <text x="62" y="115" text-anchor="middle" fill="#888" font-size="6">Tenebrism</text>

                                    <rect x="112" y="80" width="85" height="50" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="154" y="100" text-anchor="middle" fill="#f59e0b" font-size="8">Bernini</text>
                                    <text x="154" y="115" text-anchor="middle" fill="#888" font-size="6">Sculpture</text>

                                    <rect x="204" y="80" width="85" height="50" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="246" y="100" text-anchor="middle" fill="#8b5cf6" font-size="8">Rembrandt</text>
                                    <text x="246" y="115" text-anchor="middle" fill="#888" font-size="6">Psychology</text>

                                    <rect x="296" y="80" width="85" height="50" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="338" y="100" text-anchor="middle" fill="#3b82f6" font-size="8">Vermeer</text>
                                    <text x="338" y="115" text-anchor="middle" fill="#888" font-size="6">34 paintings</text>

                                    <rect x="112" y="140" width="85" height="50" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="154" y="160" text-anchor="middle" fill="#10b981" font-size="8">Rubens</text>
                                    <text x="154" y="175" text-anchor="middle" fill="#888" font-size="6">Grandeur</text>

                                    <rect x="204" y="140" width="85" height="50" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="246" y="160" text-anchor="middle" fill="#ec4899" font-size="8">Rococo</text>
                                    <text x="246" y="175" text-anchor="middle" fill="#888" font-size="6">Elegance</text>

                                    <!-- Memory tool -->
                                    <rect x="30" y="200" width="340" height="35" rx="6" fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>
                                    <text x="200" y="215" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="9">REMEMBER: TEMPO</text>
                                    <text x="200" y="230" text-anchor="middle" fill="#fff" font-size="8">Tenebrism • Emotion • Movement • Power • Overwhelm</text>

                                    <!-- Next -->
                                    <rect x="80" y="245" width="240" height="28" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="264" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">→ NEXT: Book 3 - Modern &amp; Contemporary</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">IMPRESSIONISM (1860s-1880s)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"Not a failure at old art—an invention of new art"</text>

                                    <!-- What made it possible -->
                                    <rect x="20" y="60" width="360" height="70" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="78" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">WHAT MADE IT POSSIBLE</text>
                                    <text x="70" y="100" text-anchor="middle" fill="#fff" font-size="7">Paint tubes</text>
                                    <text x="70" y="115" text-anchor="middle" fill="#888" font-size="6">Portable art!</text>
                                    <text x="160" y="100" text-anchor="middle" fill="#fff" font-size="7">Trains</text>
                                    <text x="160" y="115" text-anchor="middle" fill="#888" font-size="6">Countryside access</text>
                                    <text x="250" y="100" text-anchor="middle" fill="#fff" font-size="7">Photography</text>
                                    <text x="250" y="115" text-anchor="middle" fill="#888" font-size="6">Freed from realism</text>
                                    <text x="340" y="100" text-anchor="middle" fill="#fff" font-size="7">Japanese art</text>
                                    <text x="340" y="115" text-anchor="middle" fill="#888" font-size="6">New compositions</text>

                                    <!-- Before vs After -->
                                    <rect x="20" y="140" width="170" height="65" rx="6" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="105" y="158" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="9">ACADEMIC ART</text>
                                    <text x="105" y="175" text-anchor="middle" fill="#888" font-size="7">Studio painting</text>
                                    <text x="105" y="190" text-anchor="middle" fill="#888" font-size="7">Smooth invisible brushwork</text>
                                    <text x="105" y="205" text-anchor="middle" fill="#888" font-size="7">Historical subjects</text>

                                    <rect x="210" y="140" width="170" height="65" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="295" y="158" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">IMPRESSIONISM</text>
                                    <text x="295" y="175" text-anchor="middle" fill="#fff" font-size="7">Plein air (outdoors)</text>
                                    <text x="295" y="190" text-anchor="middle" fill="#fff" font-size="7">Visible bold brushstrokes</text>
                                    <text x="295" y="205" text-anchor="middle" fill="#fff" font-size="7">Modern life moments</text>

                                    <!-- Key artists -->
                                    <rect x="20" y="215" width="360" height="55" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="232" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">THE IMPRESSIONISTS</text>
                                    <text x="70" y="252" text-anchor="middle" fill="#fff" font-size="7">Monet</text>
                                    <text x="130" y="252" text-anchor="middle" fill="#fff" font-size="7">Renoir</text>
                                    <text x="190" y="252" text-anchor="middle" fill="#fff" font-size="7">Degas</text>
                                    <text x="250" y="252" text-anchor="middle" fill="#fff" font-size="7">Cassatt</text>
                                    <text x="320" y="252" text-anchor="middle" fill="#fff" font-size="7">Morisot</text>
                                    <text x="70" y="265" text-anchor="middle" fill="#888" font-size="5">Light master</text>
                                    <text x="130" y="265" text-anchor="middle" fill="#888" font-size="5">Joy/leisure</text>
                                    <text x="190" y="265" text-anchor="middle" fill="#888" font-size="5">Movement</text>
                                    <text x="250" y="265" text-anchor="middle" fill="#888" font-size="5">Intimacy</text>
                                    <text x="320" y="265" text-anchor="middle" fill="#888" font-size="5">Domestic</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="16">L I G H T</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Remember Impressionism in 5 letters</text>

                                    <!-- L -->
                                    <rect x="20" y="60" width="70" height="100" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="55" y="82" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">L</text>
                                    <text x="55" y="100" text-anchor="middle" fill="#3b82f6" font-size="7">LOOSE</text>
                                    <text x="55" y="118" text-anchor="middle" fill="#fff" font-size="6">Visible</text>
                                    <text x="55" y="130" text-anchor="middle" fill="#fff" font-size="6">brushwork</text>
                                    <text x="55" y="150" text-anchor="middle" fill="#888" font-size="6">Energy in</text>
                                    <text x="55" y="160" text-anchor="middle" fill="#888" font-size="6">strokes</text>

                                    <!-- I -->
                                    <rect x="95" y="60" width="70" height="100" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="130" y="82" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">I</text>
                                    <text x="130" y="100" text-anchor="middle" fill="#f59e0b" font-size="7">INSTANT</text>
                                    <text x="130" y="118" text-anchor="middle" fill="#fff" font-size="6">Fleeting</text>
                                    <text x="130" y="130" text-anchor="middle" fill="#fff" font-size="6">moments</text>
                                    <text x="130" y="150" text-anchor="middle" fill="#888" font-size="6">Modern</text>
                                    <text x="130" y="160" text-anchor="middle" fill="#888" font-size="6">life</text>

                                    <!-- G -->
                                    <rect x="170" y="60" width="70" height="100" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="205" y="82" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">G</text>
                                    <text x="205" y="100" text-anchor="middle" fill="#10b981" font-size="7">GLOWING</text>
                                    <text x="205" y="118" text-anchor="middle" fill="#fff" font-size="6">Bright</text>
                                    <text x="205" y="130" text-anchor="middle" fill="#fff" font-size="6">pure colors</text>
                                    <text x="205" y="150" text-anchor="middle" fill="#888" font-size="6">Mix in</text>
                                    <text x="205" y="160" text-anchor="middle" fill="#888" font-size="6">your eye</text>

                                    <!-- H -->
                                    <rect x="245" y="60" width="70" height="100" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="280" y="82" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">H</text>
                                    <text x="280" y="100" text-anchor="middle" fill="#ec4899" font-size="6">HAUTE AIR</text>
                                    <text x="280" y="118" text-anchor="middle" fill="#fff" font-size="6">Outdoor</text>
                                    <text x="280" y="130" text-anchor="middle" fill="#fff" font-size="6">painting</text>
                                    <text x="280" y="150" text-anchor="middle" fill="#888" font-size="6">Direct from</text>
                                    <text x="280" y="160" text-anchor="middle" fill="#888" font-size="6">nature</text>

                                    <!-- T -->
                                    <rect x="320" y="60" width="65" height="100" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="352" y="82" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">T</text>
                                    <text x="352" y="100" text-anchor="middle" fill="#8b5cf6" font-size="6">TRANSIENT</text>
                                    <text x="352" y="118" text-anchor="middle" fill="#fff" font-size="6">Changing</text>
                                    <text x="352" y="130" text-anchor="middle" fill="#fff" font-size="6">light</text>
                                    <text x="352" y="150" text-anchor="middle" fill="#888" font-size="6">Real</text>
                                    <text x="352" y="160" text-anchor="middle" fill="#888" font-size="6">subject</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="175" width="340" height="45" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#fff" font-size="9">"Impressionism captures LIGHT—</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="9">Loose brushwork, Instant moments, Glowing color, Haute air, Transient"</text>

                                    <!-- Timeline -->
                                    <rect x="30" y="230" width="340" height="40" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">IMPRESSIONIST ERA: 1860s-1880s</text>
                                    <text x="200" y="262" text-anchor="middle" fill="#888" font-size="8">Paris → The world • Still the most popular art movement today</text>
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
                                svg: `<svg viewBox="0 0 400 250" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="250" fill="#1a1a2e"/>

                                    <rect x="100" y="10" width="200" height="35" rx="8" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="33" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">✓ LESSON 1 COMPLETE</text>

                                    <rect x="20" y="55" width="175" height="75" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="107" y="72" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">KEY ARTISTS</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#fff" font-size="7">Monet (light master)</text>
                                    <text x="107" y="105" text-anchor="middle" fill="#fff" font-size="7">Renoir (joy &amp; leisure)</text>
                                    <text x="107" y="120" text-anchor="middle" fill="#fff" font-size="7">Degas (movement)</text>

                                    <rect x="205" y="55" width="175" height="75" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="292" y="72" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">TECHNIQUES</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#fff" font-size="7">Visible brushstrokes</text>
                                    <text x="292" y="105" text-anchor="middle" fill="#fff" font-size="7">Pure color (no mixing)</text>
                                    <text x="292" y="120" text-anchor="middle" fill="#fff" font-size="7">Colored shadows</text>

                                    <rect x="20" y="140" width="360" height="35" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="155" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">REMEMBER: LIGHT</text>
                                    <text x="200" y="170" text-anchor="middle" fill="#fff" font-size="8">Loose • Instant • Glowing • Haute air • Transient</text>

                                    <rect x="40" y="185" width="320" height="55" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="202" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">THE LEGACY</text>
                                    <text x="200" y="220" text-anchor="middle" fill="#fff" font-size="8">Opened the door for ALL modern art</text>
                                    <text x="200" y="235" text-anchor="middle" fill="#888" font-size="7">If art doesn't have to be "finished," what else can it become?</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">POST-IMPRESSIONISM (1880s-1900s)</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="9">"Beyond the fleeting moment"</text>

                                    <!-- Cézanne -->
                                    <rect x="20" y="55" width="175" height="70" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="73" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">CÉZANNE</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#fff" font-size="8">"Father of Modern Art"</text>
                                    <text x="107" y="107" text-anchor="middle" fill="#fff" font-size="7">Make it SOLID</text>
                                    <text x="107" y="120" text-anchor="middle" fill="#888" font-size="6">→ Led to Cubism</text>

                                    <!-- Van Gogh -->
                                    <rect x="205" y="55" width="175" height="70" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="73" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">VAN GOGH</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#fff" font-size="8">"Emotion through color"</text>
                                    <text x="292" y="107" text-anchor="middle" fill="#fff" font-size="7">Make it FEEL</text>
                                    <text x="292" y="120" text-anchor="middle" fill="#888" font-size="6">→ Led to Expressionism</text>

                                    <!-- Gauguin -->
                                    <rect x="20" y="135" width="175" height="70" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="107" y="153" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">GAUGUIN</text>
                                    <text x="107" y="170" text-anchor="middle" fill="#fff" font-size="8">"Escape to primitive"</text>
                                    <text x="107" y="187" text-anchor="middle" fill="#fff" font-size="7">Make it SYMBOLIC</text>
                                    <text x="107" y="200" text-anchor="middle" fill="#888" font-size="6">→ Led to Symbolism</text>

                                    <!-- Seurat -->
                                    <rect x="205" y="135" width="175" height="70" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="153" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">SEURAT</text>
                                    <text x="292" y="170" text-anchor="middle" fill="#fff" font-size="8">"Scientific Impressionism"</text>
                                    <text x="292" y="187" text-anchor="middle" fill="#fff" font-size="7">Make it PRECISE</text>
                                    <text x="292" y="200" text-anchor="middle" fill="#888" font-size="6">→ Led to Pointillism</text>

                                    <!-- Legacy -->
                                    <rect x="40" y="215" width="320" height="55" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">TOGETHER THEY CREATED THE FOUNDATIONS FOR:</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#fff" font-size="8">Cubism • Expressionism • Abstraction • Fauvism • Symbolism</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">EXPRESSIONISM (1905-1920s)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"Not what it looks like, but what it FEELS like"</text>

                                    <rect x="20" y="60" width="175" height="85" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="80" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">DIE BRÜCKE</text>
                                    <text x="107" y="98" text-anchor="middle" fill="#fff" font-size="8">"The Bridge"</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#fff" font-size="7">Raw, primitive, intense</text>
                                    <text x="107" y="130" text-anchor="middle" fill="#888" font-size="7">Kirchner, Nolde</text>
                                    <text x="107" y="143" text-anchor="middle" fill="#888" font-size="6">Dresden 1905</text>

                                    <rect x="205" y="60" width="175" height="85" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="80" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">DER BLAUE REITER</text>
                                    <text x="292" y="98" text-anchor="middle" fill="#fff" font-size="8">"The Blue Rider"</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#fff" font-size="7">Spiritual, abstract, musical</text>
                                    <text x="292" y="130" text-anchor="middle" fill="#888" font-size="7">Kandinsky, Marc, Klee</text>
                                    <text x="292" y="143" text-anchor="middle" fill="#888" font-size="6">Munich 1911</text>

                                    <rect x="40" y="155" width="320" height="95" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="175" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">EXPRESSIONIST TECHNIQUES</text>
                                    <text x="100" y="198" text-anchor="middle" fill="#fff" font-size="8">Distorted forms</text>
                                    <text x="200" y="198" text-anchor="middle" fill="#fff" font-size="8">Symbolic colors</text>
                                    <text x="300" y="198" text-anchor="middle" fill="#fff" font-size="8">Harsh brushwork</text>
                                    <text x="100" y="215" text-anchor="middle" fill="#888" font-size="6">Bodies stretched,</text>
                                    <text x="100" y="225" text-anchor="middle" fill="#888" font-size="6">faces distorted</text>
                                    <text x="200" y="215" text-anchor="middle" fill="#888" font-size="6">Green = anxiety</text>
                                    <text x="200" y="225" text-anchor="middle" fill="#888" font-size="6">Red = passion</text>
                                    <text x="300" y="215" text-anchor="middle" fill="#888" font-size="6">Aggressive,</text>
                                    <text x="300" y="225" text-anchor="middle" fill="#888" font-size="6">emotional marks</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">CUBISM (1907-1920s)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"Multiple viewpoints at once"</text>

                                    <!-- Traditional vs Cubist -->
                                    <rect x="20" y="60" width="170" height="75" rx="6" fill="rgba(107,114,128,0.2)" stroke="#6b7280"/>
                                    <text x="105" y="78" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="9">TRADITIONAL (500 years)</text>
                                    <rect x="65" y="90" width="80" height="35" rx="3" fill="rgba(107,114,128,0.3)" stroke="#6b7280"/>
                                    <text x="105" y="112" text-anchor="middle" fill="#888" font-size="7">ONE viewpoint</text>
                                    <text x="105" y="132" text-anchor="middle" fill="#888" font-size="6">Like a window</text>

                                    <rect x="210" y="60" width="170" height="75" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="295" y="78" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">CUBISM</text>
                                    <polygon points="260,95 280,105 270,130 245,125 255,100" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6"/>
                                    <polygon points="290,90 320,100 315,125 285,120" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6"/>
                                    <text x="295" y="112" text-anchor="middle" fill="#fff" font-size="7">MULTIPLE viewpoints</text>
                                    <text x="295" y="132" text-anchor="middle" fill="#888" font-size="6">All at once</text>

                                    <!-- Two phases -->
                                    <rect x="20" y="145" width="175" height="65" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="163" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">ANALYTIC (1908-12)</text>
                                    <text x="107" y="180" text-anchor="middle" fill="#fff" font-size="7">Break objects apart</text>
                                    <text x="107" y="195" text-anchor="middle" fill="#fff" font-size="7">Geometric fragments</text>
                                    <text x="107" y="207" text-anchor="middle" fill="#888" font-size="6">Muted browns/grays</text>

                                    <rect x="205" y="145" width="175" height="65" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="163" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">SYNTHETIC (1912+)</text>
                                    <text x="292" y="180" text-anchor="middle" fill="#fff" font-size="7">Rebuild with collage</text>
                                    <text x="292" y="195" text-anchor="middle" fill="#fff" font-size="7">Flat, bold shapes</text>
                                    <text x="292" y="207" text-anchor="middle" fill="#888" font-size="6">Brighter colors</text>

                                    <!-- Founders -->
                                    <rect x="40" y="220" width="320" height="50" rx="6" fill="rgba(255,255,255,0.05)" stroke="#666"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">THE FOUNDERS</text>
                                    <text x="130" y="258" text-anchor="middle" fill="#8b5cf6" font-size="8">Picasso</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#666" font-size="10">+</text>
                                    <text x="270" y="258" text-anchor="middle" fill="#8b5cf6" font-size="8">Braque</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="14">SURREALISM (1920s-1940s)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"More real than reality—super-real"</text>

                                    <rect x="20" y="60" width="360" height="70" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="78" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">SURREALIST TECHNIQUES</text>
                                    <text x="75" y="100" text-anchor="middle" fill="#fff" font-size="7">Automatism</text>
                                    <text x="75" y="115" text-anchor="middle" fill="#888" font-size="6">No conscious control</text>
                                    <text x="170" y="100" text-anchor="middle" fill="#fff" font-size="7">Dream imagery</text>
                                    <text x="170" y="115" text-anchor="middle" fill="#888" font-size="6">Actual dreams</text>
                                    <text x="265" y="100" text-anchor="middle" fill="#fff" font-size="7">Juxtaposition</text>
                                    <text x="265" y="115" text-anchor="middle" fill="#888" font-size="6">Unrelated objects</text>
                                    <text x="340" y="100" text-anchor="middle" fill="#fff" font-size="7">Transform</text>
                                    <text x="340" y="115" text-anchor="middle" fill="#888" font-size="6">Morphing forms</text>

                                    <rect x="20" y="140" width="175" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="158" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">DALÍ</text>
                                    <text x="107" y="175" text-anchor="middle" fill="#fff" font-size="7">Melting watches</text>
                                    <text x="107" y="190" text-anchor="middle" fill="#888" font-size="6">Hyper-realistic dreams</text>

                                    <rect x="205" y="140" width="175" height="55" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="158" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">MAGRITTE</text>
                                    <text x="292" y="175" text-anchor="middle" fill="#fff" font-size="7">"This is not a pipe"</text>
                                    <text x="292" y="190" text-anchor="middle" fill="#888" font-size="6">Philosophical puzzles</text>

                                    <rect x="40" y="205" width="320" height="45" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="222" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">INSPIRED BY FREUD</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#fff" font-size="8">The unconscious mind holds deeper truths than reason</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">ABSTRACT EXPRESSIONISM</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="9">(1940s-1950s) • New York School</text>

                                    <rect x="20" y="55" width="175" height="100" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="73" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">ACTION PAINTING</text>
                                    <path d="M50 100 Q70 85 90 110 Q110 90 130 105 Q150 85 165 100" stroke="#ef4444" stroke-width="3" fill="none"/>
                                    <text x="107" y="125" text-anchor="middle" fill="#fff" font-size="7">The ACT of painting</text>
                                    <text x="107" y="140" text-anchor="middle" fill="#fff" font-size="7">Dripping, splashing</text>
                                    <text x="107" y="153" text-anchor="middle" fill="#888" font-size="6">Pollock, de Kooning</text>

                                    <rect x="205" y="55" width="175" height="100" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="73" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">COLOR FIELD</text>
                                    <rect x="240" y="85" width="105" height="50" rx="4" fill="url(#rothkoGrad)"/>
                                    <defs>
                                        <linearGradient id="rothkoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#ef4444"/>
                                            <stop offset="50%" stop-color="#f59e0b"/>
                                            <stop offset="100%" stop-color="#8b5cf6"/>
                                        </linearGradient>
                                    </defs>
                                    <text x="292" y="148" text-anchor="middle" fill="#fff" font-size="7">Vast areas of color</text>
                                    <text x="292" y="161" text-anchor="middle" fill="#888" font-size="6">Rothko, Newman</text>

                                    <rect x="20" y="165" width="360" height="55" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="183" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">WHAT THEY SHARED</text>
                                    <text x="70" y="203" text-anchor="middle" fill="#fff" font-size="7">SCALE</text>
                                    <text x="70" y="215" text-anchor="middle" fill="#888" font-size="6">Huge canvases</text>
                                    <text x="150" y="203" text-anchor="middle" fill="#fff" font-size="7">ABSTRACTION</text>
                                    <text x="150" y="215" text-anchor="middle" fill="#888" font-size="6">No subjects</text>
                                    <text x="250" y="203" text-anchor="middle" fill="#fff" font-size="7">EXPRESSION</text>
                                    <text x="250" y="215" text-anchor="middle" fill="#888" font-size="6">Direct emotion</text>
                                    <text x="330" y="203" text-anchor="middle" fill="#fff" font-size="7">AUTHENTICITY</text>
                                    <text x="330" y="215" text-anchor="middle" fill="#888" font-size="6">Inner truth</text>

                                    <rect x="40" y="230" width="320" height="40" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">THE SHIFT</text>
                                    <text x="200" y="262" text-anchor="middle" fill="#fff" font-size="8">Art world center moved: Paris → New York</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">POP ART (1950s-1960s)</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">"Art should be for everyone, about everything"</text>

                                    <rect x="20" y="60" width="175" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="78" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">WARHOL</text>
                                    <rect x="50" y="88" width="45" height="40" rx="2" fill="#ef4444" stroke="#ffd700" stroke-width="2"/>
                                    <text x="72" y="112" text-anchor="middle" fill="#fff" font-size="8">SOUP</text>
                                    <text x="115" y="105" fill="#fff" font-size="7">Soup cans</text>
                                    <text x="115" y="118" fill="#fff" font-size="7">Marilyn</text>
                                    <text x="115" y="131" fill="#888" font-size="6">Repetition</text>

                                    <rect x="205" y="60" width="175" height="80" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="292" y="78" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">LICHTENSTEIN</text>
                                    <rect x="235" y="88" width="50" height="40" rx="2" fill="#3b82f6"/>
                                    <circle cx="250" cy="100" r="3" fill="#fff"/>
                                    <circle cx="260" cy="100" r="3" fill="#fff"/>
                                    <circle cx="270" cy="100" r="3" fill="#fff"/>
                                    <circle cx="250" cy="115" r="3" fill="#fff"/>
                                    <circle cx="260" cy="115" r="3" fill="#fff"/>
                                    <circle cx="270" cy="115" r="3" fill="#fff"/>
                                    <text x="310" y="105" fill="#fff" font-size="7">Comics</text>
                                    <text x="310" y="118" fill="#fff" font-size="7">Ben-Day dots</text>
                                    <text x="310" y="131" fill="#888" font-size="6">BLAM! POW!</text>

                                    <rect x="20" y="150" width="360" height="55" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="168" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">POP ART IDEAS</text>
                                    <text x="75" y="188" text-anchor="middle" fill="#fff" font-size="7">No high/low</text>
                                    <text x="150" y="188" text-anchor="middle" fill="#fff" font-size="7">Mass media</text>
                                    <text x="225" y="188" text-anchor="middle" fill="#fff" font-size="7">Repetition</text>
                                    <text x="310" y="188" text-anchor="middle" fill="#fff" font-size="7">Irony &amp; fun</text>
                                    <text x="75" y="200" text-anchor="middle" fill="#888" font-size="5">distinction</text>
                                    <text x="150" y="200" text-anchor="middle" fill="#888" font-size="5">is our landscape</text>
                                    <text x="225" y="200" text-anchor="middle" fill="#888" font-size="5">exposes consumption</text>
                                    <text x="310" y="200" text-anchor="middle" fill="#888" font-size="5">not just serious</text>

                                    <rect x="40" y="215" width="320" height="35" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#fff" font-size="8">Made art accessible, democratic, and questioned what art could be</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#666" font-weight="bold" font-size="14">MINIMALISM &amp; CONCEPTUAL ART</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="9">(1960s-1970s) • Stripping art to essentials</text>

                                    <rect x="20" y="55" width="175" height="95" rx="6" fill="rgba(107,114,128,0.15)" stroke="#6b7280"/>
                                    <text x="107" y="73" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="10">MINIMALISM</text>
                                    <text x="107" y="90" text-anchor="middle" fill="#fff" font-size="8">"What you see is what you see"</text>
                                    <rect x="70" y="100" width="35" height="35" fill="none" stroke="#6b7280" stroke-width="2"/>
                                    <rect x="110" y="100" width="35" height="35" fill="none" stroke="#6b7280" stroke-width="2"/>
                                    <text x="107" y="148" text-anchor="middle" fill="#888" font-size="6">Judd, Flavin, Andre</text>

                                    <rect x="205" y="55" width="175" height="95" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="73" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">CONCEPTUAL</text>
                                    <text x="292" y="90" text-anchor="middle" fill="#fff" font-size="8">"The idea IS the art"</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#8b5cf6" font-size="12">?</text>
                                    <text x="292" y="135" text-anchor="middle" fill="#888" font-size="7">Object optional</text>
                                    <text x="292" y="148" text-anchor="middle" fill="#888" font-size="6">Kosuth, LeWitt, Weiner</text>

                                    <rect x="20" y="160" width="175" height="45" rx="6" fill="rgba(107,114,128,0.1)" stroke="#6b7280"/>
                                    <text x="107" y="178" text-anchor="middle" fill="#6b7280" font-weight="bold" font-size="8">MINIMALIST MOTTO</text>
                                    <text x="107" y="195" text-anchor="middle" fill="#fff" font-size="7">"Less is more"</text>

                                    <rect x="205" y="160" width="175" height="45" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="292" y="178" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="8">CONCEPTUAL MOTTO</text>
                                    <text x="292" y="195" text-anchor="middle" fill="#fff" font-size="7">"Ideas over objects"</text>

                                    <rect x="40" y="215" width="320" height="35" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="238" text-anchor="middle" fill="#fff" font-size="8">Both asked: what is the MINIMUM required for something to be art?</text>
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
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">CONTEMPORARY ART</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="9">(1970s-Present) • Radical pluralism</text>

                                    <rect x="20" y="55" width="115" height="55" rx="4" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="77" y="73" text-anchor="middle" fill="#3b82f6" font-size="8">Video &amp; Digital</text>
                                    <text x="77" y="90" text-anchor="middle" fill="#888" font-size="6">Nam June Paik</text>
                                    <text x="77" y="102" text-anchor="middle" fill="#888" font-size="6">Bill Viola</text>

                                    <rect x="143" y="55" width="115" height="55" rx="4" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="200" y="73" text-anchor="middle" fill="#ec4899" font-size="8">Performance</text>
                                    <text x="200" y="90" text-anchor="middle" fill="#888" font-size="6">Marina Abramović</text>
                                    <text x="200" y="102" text-anchor="middle" fill="#888" font-size="6">Body as medium</text>

                                    <rect x="266" y="55" width="115" height="55" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="323" y="73" text-anchor="middle" fill="#8b5cf6" font-size="8">Installation</text>
                                    <text x="323" y="90" text-anchor="middle" fill="#888" font-size="6">Immersive spaces</text>
                                    <text x="323" y="102" text-anchor="middle" fill="#888" font-size="6">Site-specific</text>

                                    <rect x="80" y="118" width="115" height="55" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="137" y="136" text-anchor="middle" fill="#f59e0b" font-size="8">Street Art</text>
                                    <text x="137" y="153" text-anchor="middle" fill="#888" font-size="6">Banksy, Kaws</text>
                                    <text x="137" y="165" text-anchor="middle" fill="#888" font-size="6">Public space</text>

                                    <rect x="203" y="118" width="115" height="55" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="260" y="136" text-anchor="middle" fill="#10b981" font-size="8">Global Voices</text>
                                    <text x="260" y="153" text-anchor="middle" fill="#888" font-size="6">Identity politics</text>
                                    <text x="260" y="165" text-anchor="middle" fill="#888" font-size="6">Diverse perspectives</text>

                                    <rect x="30" y="183" width="340" height="65" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="203" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">THE KEY QUESTION</text>
                                    <text x="200" y="222" text-anchor="middle" fill="#fff" font-size="8">If anything can be art... what makes something ART?</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#888" font-size="7">This question IS contemporary art—constant boundary negotiation</text>
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
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <rect x="80" y="10" width="240" height="40" rx="8" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="35" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎓 BOOK 3 COMPLETE!</text>

                                    <text x="200" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">200+ YEARS OF REVOLUTION</text>

                                    <!-- Timeline -->
                                    <line x1="40" y1="90" x2="360" y2="90" stroke="#666" stroke-width="2"/>

                                    <circle cx="60" cy="90" r="5" fill="#3b82f6"/>
                                    <text x="60" y="108" text-anchor="middle" fill="#888" font-size="5">Impressionism</text>

                                    <circle cx="100" cy="90" r="5" fill="#f59e0b"/>
                                    <text x="100" y="108" text-anchor="middle" fill="#888" font-size="5">Post-Imp</text>

                                    <circle cx="140" cy="90" r="5" fill="#ef4444"/>
                                    <text x="140" y="108" text-anchor="middle" fill="#888" font-size="5">Express</text>

                                    <circle cx="180" cy="90" r="5" fill="#8b5cf6"/>
                                    <text x="180" y="108" text-anchor="middle" fill="#888" font-size="5">Cubism</text>

                                    <circle cx="220" cy="90" r="5" fill="#ec4899"/>
                                    <text x="220" y="108" text-anchor="middle" fill="#888" font-size="5">Surreal</text>

                                    <circle cx="260" cy="90" r="5" fill="#10b981"/>
                                    <text x="260" y="108" text-anchor="middle" fill="#888" font-size="5">AbEx</text>

                                    <circle cx="300" cy="90" r="5" fill="#ef4444"/>
                                    <text x="300" y="108" text-anchor="middle" fill="#888" font-size="5">Pop</text>

                                    <circle cx="340" cy="90" r="5" fill="#6b7280"/>
                                    <text x="340" y="108" text-anchor="middle" fill="#888" font-size="5">Today</text>

                                    <!-- Key concepts -->
                                    <rect x="20" y="125" width="175" height="65" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="107" y="143" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="8">KEY MNEMONIC</text>
                                    <text x="107" y="160" text-anchor="middle" fill="#fff" font-size="7">Impressionism = LIGHT</text>
                                    <text x="107" y="175" text-anchor="middle" fill="#888" font-size="6">Loose, Instant, Glowing</text>
                                    <text x="107" y="187" text-anchor="middle" fill="#888" font-size="6">Haute air, Transient</text>

                                    <rect x="205" y="125" width="175" height="65" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="292" y="143" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="8">THE BIG STORY</text>
                                    <text x="292" y="160" text-anchor="middle" fill="#fff" font-size="7">Expanding boundaries</text>
                                    <text x="292" y="175" text-anchor="middle" fill="#fff" font-size="7">"What else can art be?"</text>
                                    <text x="292" y="187" text-anchor="middle" fill="#888" font-size="6">→ Finally: "Anything"</text>

                                    <!-- All books complete -->
                                    <rect x="30" y="200" width="340" height="70" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">🏆 ALL 3 BOOKS COMPLETE!</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#fff" font-size="8">Renaissance → Baroque → Modern</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#888" font-size="7">600+ years of art history mastered!</text>
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
