// ============================================
// SYNTHESIS — STANDALONE IDEAS ("Did you know?")
// Curated, book-independent bite-sized knowledge that mixes into the
// Deepstash-style ideas feed alongside book-derived ideas. Topics span
// general knowledge, trivia, history, science, math, life skills, money,
// and more. Facts are chosen to be well-established and verifiable.
//
// To add more: append objects to `ideas` with a stable unique `id`, a
// `topic` matching a key in `topics`, a short `title`, and `text`.
// `source` is optional. Stable ids keep "saved" ideas working across
// updates, so never renumber existing ids — only append.
// ============================================

window.SYNTHESIS_IDEAS = {
    topics: {
        science:    { name: "Science",          icon: "🔬", color: "#06b6d4" },
        history:    { name: "History",          icon: "🏛️", color: "#f59e0b" },
        math:       { name: "Math",             icon: "🔢", color: "#8b5cf6" },
        space:      { name: "Space",            icon: "🌌", color: "#6366f1" },
        body:       { name: "Human Body",       icon: "🫀", color: "#ef4444" },
        nature:     { name: "Nature & Animals", icon: "🌿", color: "#10b981" },
        geography:  { name: "Geography",        icon: "🗺️", color: "#14b8a6" },
        words:      { name: "Words & Language", icon: "🔤", color: "#ec4899" },
        psychology: { name: "Psychology",       icon: "🧠", color: "#a855f7" },
        lifeskills: { name: "Life Skills",      icon: "🛠️", color: "#3b82f6" },
        money:      { name: "Money Basics",     icon: "💰", color: "#22c55e" },
        tech:       { name: "Tech",             icon: "💻", color: "#0ea5e9" },
        trivia:     { name: "Trivia",           icon: "🎲", color: "#f97316" },
    },

    ideas: [
        // ---------- SCIENCE ----------
        { id: "sci-1", topic: "science", title: "Ice floats because water is weird", text: "Water expands about 9% when it freezes, so ice is less dense than the liquid it came from. That's why ice floats — and why forgotten water bottles burst in the freezer." },
        { id: "sci-2", topic: "science", title: "Lightning is hotter than the Sun's surface", text: "A lightning bolt can reach about 30,000°C — roughly five times hotter than the surface of the Sun. That sudden heat is what makes the air explode outward as thunder." },
        { id: "sci-3", topic: "science", title: "Most of your oxygen comes from the ocean", text: "Forests get the credit, but scientists estimate at least half of Earth's oxygen is produced by ocean phytoplankton — microscopic drifting plants." },
        { id: "sci-4", topic: "science", title: "Glass is not a slow-flowing liquid", text: "The myth that old windows are thicker at the bottom because glass 'flows' is false. Glass is an amorphous solid; older panes were just made unevenly." },
        { id: "sci-5", topic: "science", title: "Sound races through water", text: "Sound travels roughly four times faster in water than in air, and faster still in solids like steel — because the molecules are packed closer to pass the vibration along." },
        { id: "sci-6", topic: "science", title: "Metal isn't colder than wood", text: "A metal railing feels colder than a wooden one at the same temperature because metal pulls heat from your hand faster. You're feeling heat loss, not actual temperature." },
        { id: "sci-7", topic: "science", title: "Helium was found in the Sun first", text: "Helium is the only element discovered in space before it was found on Earth — spotted in the Sun's spectrum in 1868, decades before it was isolated in a lab." },
        { id: "sci-8", topic: "science", title: "Hot water can freeze faster than cold", text: "Under the right conditions, hot water sometimes freezes faster than cold — the Mpemba effect. It's been observed for centuries, though scientists still debate exactly why." },

        // ---------- HISTORY ----------
        { id: "his-1", topic: "history", title: "Oxford is older than the Aztec Empire", text: "Teaching began at Oxford University around 1096. The Aztec capital Tenochtitlan wasn't founded until 1325 — making the university older than the empire." },
        { id: "his-2", topic: "history", title: "Cleopatra lived closer to us than to the pyramids", text: "The Great Pyramid was built around 2560 BCE; Cleopatra lived around 30 BCE. That means she lived closer in time to the Moon landing than to the pyramid's construction." },
        { id: "his-3", topic: "history", title: "The shortest war lasted about 38 minutes", text: "The Anglo-Zanzibar War of 1896 is the shortest recorded war in history — it was over in roughly 38 minutes." },
        { id: "his-4", topic: "history", title: "Napoleon wasn't actually short", text: "At about 5'7\", Napoleon was average height for a Frenchman of his time. The 'short' image came partly from British propaganda and confusion over old French measurements." },
        { id: "his-5", topic: "history", title: "Vikings didn't wear horned helmets", text: "No evidence shows Vikings wore horned helmets in battle. The iconic look was popularized by 19th-century opera costume designers." },
        { id: "his-6", topic: "history", title: "Romans cleaned with urine", text: "Ancient Romans collected urine and used the ammonia in it to launder clothes and even whiten teeth — it was taxed as a valuable commodity." },
        { id: "his-7", topic: "history", title: "The Great Fire of London killed very few", text: "The 1666 fire destroyed much of London, including some 13,000 houses, yet the official death toll was remarkably low — only a handful of recorded deaths." },
        { id: "his-8", topic: "history", title: "The Eiffel Tower grows in summer", text: "Iron expands with heat, so on a hot day the Eiffel Tower can stand more than 15 cm taller than in winter." },

        // ---------- MATH ----------
        { id: "mat-1", topic: "math", title: "The birthday paradox", text: "In a room of just 23 people, there's about a 50% chance that two of them share a birthday. With 70 people it jumps to 99.9%." },
        { id: "mat-2", topic: "math", title: "A googol is bigger than the universe's atoms", text: "A googol is 1 followed by 100 zeros. That's larger than the estimated number of atoms in the observable universe (around 10^80)." },
        { id: "mat-3", topic: "math", title: "0.999… is exactly 1", text: "The repeating decimal 0.999… isn't just close to 1 — it's a different way of writing the same number. The two are mathematically equal." },
        { id: "mat-4", topic: "math", title: "A quick divisibility trick for 3", text: "Add up a number's digits. If that sum is divisible by 3, so is the original number. (Example: 4,821 → 4+8+2+1 = 15 → divisible by 3.)" },
        { id: "mat-5", topic: "math", title: "Multiply by 9 on your fingers", text: "Hold up ten fingers. To find 9 × n, fold down the nth finger: the fingers to its left are the tens, and those to its right are the ones. 9 × 3 = 27." },
        { id: "mat-6", topic: "math", title: "Pi barely needs its trillions of digits", text: "Pi has been computed to trillions of digits, but about 15 are enough for nearly any real engineering calculation — even NASA uses only a handful for spacecraft." },
        { id: "mat-7", topic: "math", title: "2 is the only even prime", text: "A prime number is divisible only by 1 and itself. Every other even number is divisible by 2, which makes 2 the one and only even prime." },
        { id: "mat-8", topic: "math", title: "Zero was a late arrival", text: "Using zero as a real number — not just a blank placeholder — was developed in India and only reached Europe centuries later, reshaping mathematics." },

        // ---------- SPACE ----------
        { id: "spa-1", topic: "space", title: "A day on Venus is longer than its year", text: "Venus rotates so slowly that a single day (one rotation) lasts longer than the time it takes to orbit the Sun. Its year is shorter than its day." },
        { id: "spa-2", topic: "space", title: "More stars than grains of sand", text: "Astronomers estimate there are more stars in the observable universe than there are grains of sand on all the beaches on Earth." },
        { id: "spa-3", topic: "space", title: "The Sun is almost the entire solar system", text: "The Sun accounts for about 99.8% of all the mass in the solar system. Everything else — planets, moons, asteroids — shares the tiny remainder." },
        { id: "spa-4", topic: "space", title: "Moon footprints could last millions of years", text: "With no wind or liquid water to erase them, the footprints left by Apollo astronauts on the Moon may remain for millions of years." },
        { id: "spa-5", topic: "space", title: "Space is silent", text: "Sound needs a medium like air to travel. Space is a near-vacuum, so no matter how violent an explosion is out there, there's nothing to carry the sound." },
        { id: "spa-6", topic: "space", title: "A spoonful of neutron star weighs a mountain", text: "Neutron stars are so dense that a sugar-cube-sized piece would weigh about as much as a mountain — the collapsed core of a once-giant star." },
        { id: "spa-7", topic: "space", title: "Jupiter's storm is bigger than Earth", text: "The Great Red Spot on Jupiter is a storm wide enough to swallow the Earth, and it has been raging for at least a couple of centuries." },
        { id: "spa-8", topic: "space", title: "Driving to the Sun would take lifetimes", text: "At a steady highway speed of about 60 mph, it would take over 170 years of non-stop driving to reach the Sun, 93 million miles away." },

        // ---------- HUMAN BODY ----------
        { id: "bod-1", topic: "body", title: "Babies have more bones than adults", text: "We're born with around 300 bones. Many fuse together as we grow, leaving the roughly 206 bones of an adult skeleton." },
        { id: "bod-2", topic: "body", title: "Your stomach acid could dissolve metal", text: "Stomach acid is strong enough to damage many metals. Your stomach avoids digesting itself by renewing its protective mucus lining every few days." },
        { id: "bod-3", topic: "body", title: "Bone is stronger than steel by weight", text: "Pound for pound, bone resists compression better than steel — while being far lighter. It's one of nature's best engineering materials." },
        { id: "bod-4", topic: "body", title: "You can't hum with your nose pinched", text: "Humming relies on air escaping through your nose. Pinch it shut and the hum stops almost instantly — try it." },
        { id: "bod-5", topic: "body", title: "Smell is wired to memory", text: "Scents can trigger vivid memories because smell signals pass through brain regions tied closely to emotion and memory before reaching the thinking parts of the brain." },
        { id: "bod-6", topic: "body", title: "You make billions of new cells daily", text: "Your body contains tens of trillions of cells and replaces billions of them every day — you are constantly, quietly rebuilding yourself." },
        { id: "bod-7", topic: "body", title: "Sitting stresses your spine", text: "Discs in your lower back bear more pressure when you sit than when you stand — and even more when you slouch. Standing breaks help." },
        { id: "bod-8", topic: "body", title: "Your eyes see millions of colors", text: "The human eye can distinguish millions of shades, but color-sensing cone cells barely work in dim light — which is why colors fade at dusk." },

        // ---------- NATURE & ANIMALS ----------
        { id: "nat-1", topic: "nature", title: "Octopuses have three hearts", text: "An octopus has three hearts and blue, copper-based blood. Two hearts pump blood to the gills; the third stops beating whenever it swims." },
        { id: "nat-2", topic: "nature", title: "Honey never spoils", text: "Its low moisture and acidity make honey inhospitable to microbes. Sealed pots found in ancient Egyptian tombs were reportedly still edible thousands of years later." },
        { id: "nat-3", topic: "nature", title: "Bananas are berries — strawberries aren't", text: "Botanically, a banana qualifies as a berry, while a strawberry does not. Fruit names and botanical categories often disagree." },
        { id: "nat-4", topic: "nature", title: "Wombats make cube-shaped poop", text: "Wombats are the only known animals that produce cube-shaped droppings, which resist rolling away and help them mark territory." },
        { id: "nat-5", topic: "nature", title: "Trees talk through fungal networks", text: "Forests are linked underground by fungal threads — sometimes called the 'wood wide web' — that let trees share nutrients and even warning signals." },
        { id: "nat-6", topic: "nature", title: "A teaspoon of soil teems with life", text: "A single teaspoon of healthy soil can contain billions of microorganisms — more living things than there are people on Earth." },
        { id: "nat-7", topic: "nature", title: "Flamingos are pink because of their diet", text: "Flamingos are born grey. They turn pink from pigments in the algae and shrimp they eat. A group of them is called a 'flamboyance.'" },
        { id: "nat-8", topic: "nature", title: "Sea otters hold hands while they sleep", text: "Sea otters sometimes hold hands as they rest on the water, so the current doesn't drift them apart from the group." },

        // ---------- GEOGRAPHY ----------
        { id: "geo-1", topic: "geography", title: "Russia spans 11 time zones", text: "Russia stretches across 11 time zones — more than any other country. When it's morning in one part, it's already evening in another." },
        { id: "geo-2", topic: "geography", title: "Africa touches all four hemispheres", text: "Africa is the only continent that sits in the northern, southern, eastern, and western hemispheres all at once." },
        { id: "geo-3", topic: "geography", title: "Everest isn't the tallest mountain", text: "Everest is the highest point above sea level, but Mauna Kea in Hawaii is taller base to peak — most of it is just hidden underwater." },
        { id: "geo-4", topic: "geography", title: "Canada is the land of lakes", text: "Canada contains more lake area than the rest of the world combined — hundreds of thousands of lakes dot its vast territory." },
        { id: "geo-5", topic: "geography", title: "Istanbul straddles two continents", text: "Istanbul sits on both sides of the Bosphorus strait, making it a major city that spans two continents — Europe and Asia." },
        { id: "geo-6", topic: "geography", title: "The Sahara rivals the USA in size", text: "The Sahara Desert covers an area roughly the size of the entire United States — and it's still not the largest desert if you count the polar ones." },
        { id: "geo-7", topic: "geography", title: "You can't sink in the Dead Sea", text: "The Dead Sea is so salty that swimmers bob effortlessly on the surface. It's also one of the lowest points on Earth's land." },
        { id: "geo-8", topic: "geography", title: "The Pacific holds most of Earth's water", text: "The Pacific is so vast it contains more than half of all the free water on Earth and could fit every continent inside it." },

        // ---------- WORDS & LANGUAGE ----------
        { id: "wor-1", topic: "words", title: "The dot on an 'i' has a name", text: "That little dot above a lowercase 'i' or 'j' is called a 'tittle' — from the same root as 'title.'" },
        { id: "wor-2", topic: "words", title: "A pangram uses every letter", text: "'The quick brown fox jumps over the lazy dog' is a pangram — a sentence containing every letter of the alphabet. Typists use it to test keyboards." },
        { id: "wor-3", topic: "words", title: "'Set' has the most meanings", text: "The short word 'set' historically holds the record for the most distinct definitions of any word in English — hundreds of them." },
        { id: "wor-4", topic: "words", title: "'Emoji' isn't related to 'emotion'", text: "The word 'emoji' comes from Japanese: 'e' (picture) + 'moji' (character). Its resemblance to 'emotion' is a happy coincidence." },
        { id: "wor-5", topic: "words", title: "English is a magpie language", text: "English has borrowed words from hundreds of other languages. Much of its vocabulary traces back to French, Latin, and Old Norse." },
        { id: "wor-6", topic: "words", title: "Why 'mama' sounds universal", text: "Words for 'mother' sound alike across many unrelated languages, partly because 'ma' is one of the very first sounds babies can make." },
        { id: "wor-7", topic: "words", title: "A novel with no letter 'E'", text: "'E' is the most common letter in English, yet writers have produced entire novels avoiding it — a constrained form called a lipogram." },
        { id: "wor-8", topic: "words", title: "The longest dictionary word", text: "'Pneumonoultramicroscopicsilicovolcanoconiosis' — a lung disease from inhaling fine dust — is often cited as the longest word in major English dictionaries." },

        // ---------- PSYCHOLOGY ----------
        { id: "psy-1", topic: "psychology", title: "Testing yourself beats rereading", text: "Quizzing yourself on material strengthens memory far more than reading it again. The effort of recall is what makes it stick — it's called the testing effect." },
        { id: "psy-2", topic: "psychology", title: "Spacing beats cramming", text: "Spreading study across days works better than one long session. Forgetting a little and then relearning strengthens long-term memory." },
        { id: "psy-3", topic: "psychology", title: "Losses hurt more than gains feel good", text: "People are typically more motivated to avoid losing something than to gain the same thing — a bias called loss aversion." },
        { id: "psy-4", topic: "psychology", title: "Familiarity breeds liking", text: "The 'mere exposure effect' means we tend to prefer things simply because we've encountered them before — a big reason repeated ads work." },
        { id: "psy-5", topic: "psychology", title: "Multitasking is a myth", text: "The brain doesn't do two demanding tasks at once — it rapidly switches, and each switch costs time and accuracy. 'Multitasking' is really fast task-switching." },
        { id: "psy-6", topic: "psychology", title: "Unfinished tasks nag at you", text: "The Zeigarnik effect: people remember interrupted or incomplete tasks better than finished ones. Starting a task can make it harder to forget." },
        { id: "psy-7", topic: "psychology", title: "Sleep locks in learning", text: "During sleep the brain consolidates the day's memories. A good night's rest after studying measurably improves what you retain." },
        { id: "psy-8", topic: "psychology", title: "Gratitude measurably lifts mood", text: "Regularly writing down a few things you're grateful for is linked in studies to better mood and well-being over time." },

        // ---------- LIFE SKILLS ----------
        { id: "lif-1", topic: "lifeskills", title: "The two-minute rule", text: "If a task will take less than two minutes, do it right now instead of adding it to a list. It clears small clutter before it piles up." },
        { id: "lif-2", topic: "lifeskills", title: "Reheat pizza in a skillet", text: "Skip the microwave, which turns crust soggy. Warm leftover pizza in a covered skillet on low heat — crisp base, melted cheese." },
        { id: "lif-3", topic: "lifeskills", title: "A cool room helps you sleep", text: "Your core temperature naturally drops as you fall asleep. A slightly cool bedroom works with that process to help you nod off faster." },
        { id: "lif-4", topic: "lifeskills", title: "Dull knives are the dangerous ones", text: "A dull blade slips and needs more force, making cuts more likely. Keeping knives sharp is actually safer, not riskier." },
        { id: "lif-5", topic: "lifeskills", title: "Slide off a stuck ring with thread", text: "Wrap thread snugly around the finger from the ring toward the knuckle, then unwind from the ring end — the ring rides the thread off." },
        { id: "lif-6", topic: "lifeskills", title: "Follow water when you're lost", text: "Streams flow downhill and often lead toward roads and settlements. If you're lost in the wild, following water downstream is a common survival guideline." },
        { id: "lif-7", topic: "lifeskills", title: "The first number sets the anchor", text: "In a negotiation, the first figure mentioned quietly shapes the whole discussion. Walk in with a reasonable number ready rather than reacting to theirs." },
        { id: "lif-8", topic: "lifeskills", title: "Photograph your receipts", text: "Snap a photo of important receipts and warranties into one album on your phone. You'll always have proof of purchase when you need it." },

        // ---------- MONEY BASICS ----------
        { id: "mon-1", topic: "money", title: "Compound interest is a snowball", text: "Interest earns interest over time. Money invested early can quietly outgrow much larger amounts invested later — time does the heavy lifting." },
        { id: "mon-2", topic: "money", title: "The rule of 72", text: "Divide 72 by an annual return rate to estimate how many years it takes money to double. At 8% a year, money doubles in roughly nine years." },
        { id: "mon-3", topic: "money", title: "Pay yourself first", text: "Automatically move a set amount to savings before you spend anything. Treating saving as a bill makes it far more consistent than saving 'what's left.'" },
        { id: "mon-4", topic: "money", title: "Minimum payments are a trap", text: "Paying only the minimum on a credit card can stretch a balance out for years and cost far more in interest than the original purchase." },
        { id: "mon-5", topic: "money", title: "Keep an emergency fund", text: "A common guideline is to keep 3–6 months of essential expenses in easy-to-reach savings, so a surprise doesn't force you into debt." },
        { id: "mon-6", topic: "money", title: "Inflation eats idle cash", text: "As prices rise, each dollar buys less. Money sitting in cash slowly loses purchasing power, which is why long-term savings are usually invested." },
        { id: "mon-7", topic: "money", title: "Index funds spread the risk", text: "An index fund buys a slice of many companies at once, so one company's failure barely dents your total — built-in diversification, low fees." },
        { id: "mon-8", topic: "money", title: "What really moves a credit score", text: "The biggest factors are paying bills on time and keeping card balances low relative to your limit. Consistency matters more than clever tricks." },

        // ---------- TECH ----------
        { id: "tec-1", topic: "tech", title: "The first computer bug was a real bug", text: "In 1947, engineers found an actual moth stuck in a Harvard computer's relay. They taped it into the logbook — an early literal 'bug.'" },
        { id: "tec-2", topic: "tech", title: "Wi-Fi doesn't stand for anything", text: "Despite the myth, 'Wi-Fi' isn't short for 'Wireless Fidelity.' It was simply a catchy brand name chosen by a marketing firm." },
        { id: "tec-3", topic: "tech", title: "QR codes survive damage", text: "QR codes include error correction, so they can still be scanned even if a chunk is smudged, torn, or covered — sometimes up to 30%." },
        { id: "tec-4", topic: "tech", title: "The internet runs under the sea", text: "The vast majority of international internet traffic travels through fiber-optic cables lying on the ocean floor — not through satellites." },
        { id: "tec-5", topic: "tech", title: "Bluetooth is named after a king", text: "Bluetooth is named for a 10th-century Scandinavian king, Harald 'Bluetooth' Gormsson. Its logo merges his initials written in old runes." },
        { id: "tec-6", topic: "tech", title: "Deleting doesn't really erase", text: "Deleting a file usually just removes its label and marks the space as free. The data often lingers until something new overwrites it." },
        { id: "tec-7", topic: "tech", title: "The first internet message crashed", text: "In 1969 the first message over ARPANET was meant to be 'LOGIN.' The system crashed after two letters — so the internet's debut word was 'LO.'" },
        { id: "tec-8", topic: "tech", title: "Why email uses @", text: "In 1971 Ray Tomlinson picked the '@' symbol for email because it was rarely used elsewhere and conveniently meant 'at' — a user at a host." },

        // ---------- TRIVIA ----------
        { id: "tri-1", topic: "trivia", title: "Scotland's national animal is the unicorn", text: "The mythical unicorn has been a Scottish heraldic symbol for centuries — a proud, untamable creature to match the nation's self-image." },
        { id: "tri-2", topic: "trivia", title: "A group of crows is a 'murder'", text: "English has wonderfully odd collective nouns: a murder of crows, a parliament of owls, and a flamboyance of flamingos." },
        { id: "tri-3", topic: "trivia", title: "Bubble wrap started as wallpaper", text: "Bubble wrap was invented in 1957 as a textured wallpaper. It flopped in that role — then found its calling protecting packages." },
        { id: "tri-4", topic: "trivia", title: "Play-Doh was a cleaning product", text: "Play-Doh began life as a putty for cleaning coal soot off wallpaper. When home heating changed, it was rebranded as a children's toy." },
        { id: "tri-5", topic: "trivia", title: "Ketchup was sold as medicine", text: "In the 1830s, tomato ketchup was marketed in the US as a medicine — sold as pills claimed to cure ailments like indigestion." },
        { id: "tri-6", topic: "trivia", title: "The Statue of Liberty was a gift", text: "France gave the Statue of Liberty to the United States in 1886. Its copper skin was once shiny brown — it turned green as the metal oxidized." },
        { id: "tri-7", topic: "trivia", title: "'Go.' is a complete sentence", text: "'Go.' is one of the shortest grammatically complete sentences in English — a command with an understood subject ('you')." },
        { id: "tri-8", topic: "trivia", title: "Honey badgers fear almost nothing", text: "Honey badgers are famously fearless, known to stand up to lions and shrug off bee stings and snake bites while raiding for food." },
    ],
};
