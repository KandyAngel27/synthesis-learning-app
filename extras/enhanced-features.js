// ============================================
// ENHANCED FEATURES INTEGRATION
// Links Vision Board, Journal, Workouts, Shadow Work
// ============================================

// Add these features to the main navigation
const ENHANCED_FEATURES = {
    manifestation: {
        title: "✨ Manifestation Suite",
        features: [
            {
                name: "Vision Board",
                icon: "🎨",
                url: "vision-board.html",
                description: "Create your dream life visually"
            },
            {
                name: "Manifestation Journal",
                icon: "📔",
                url: "manifestation-journal.html",
                description: "Daily manifestation practice"
            },
            {
                name: "Moon Phase Tracker",
                icon: "🌙",
                url: "moon-tracker.html",
                description: "Align with lunar energy"
            }
        ]
    },
    wellness: {
        title: "💪 Health & Fitness",
        features: [
            {
                name: "Workout Tracker",
                icon: "🏋️",
                url: "workout-tracker.html",
                description: "Track strength & progress"
            },
            {
                name: "HRT Protocol",
                icon: "💉",
                url: "workout-tracker.html#hrt",
                description: "Monitor TRT & NAD+"
            }
        ]
    },
    psychology: {
        title: "🧠 Deep Psychology",
        features: [
            {
                name: "Shadow Work",
                icon: "🌑",
                url: "shadow-work.html",
                description: "Jungian integration exercises"
            },
            {
                name: "Archetype Discovery",
                icon: "🎭",
                url: "shadow-work.html#archetypes",
                description: "Discover your archetypes"
            }
        ]
    },
    business: {
        title: "📈 SEO Mastery",
        features: [
            {
                name: "SEO Course",
                icon: "🎓",
                url: "seo-course.html",
                description: "Your custom SEO training"
            },
            {
                name: "Client Templates",
                icon: "📋",
                url: "seo-course.html#templates",
                description: "Ready-to-use deliverables"
            }
        ]
    }
};

// Function to add features menu to main app
function renderFeaturesMenu() {
    const featuresHTML = `
        <div class="features-menu" style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;">
                🌟 Your Personal Growth Suite
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                ${Object.entries(ENHANCED_FEATURES).map(([key, section]) => `
                    <div style="background: var(--color-bg-secondary); border-radius: 1.5rem; padding: 2rem; border: 1px solid rgba(255,255,255,0.05);">
                        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">${section.title}</h3>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            ${section.features.map(feature => `
                                <a href="${feature.url}" style="
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                    padding: 1rem;
                                    background: var(--color-bg-tertiary);
                                    border-radius: 1rem;
                                    text-decoration: none;
                                    color: inherit;
                                    transition: all 0.2s;
                                    border: 2px solid transparent;
                                " onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='transparent'">
                                    <span style="font-size: 2rem;">${feature.icon}</span>
                                    <div style="flex: 1;">
                                        <div style="font-weight: 600; margin-bottom: 0.25rem;">${feature.name}</div>
                                        <div style="font-size: 0.875rem; color: var(--color-text-secondary);">${feature.description}</div>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return featuresHTML;
}

// Moon Phase Calculator
function getCurrentMoonPhase() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    
    // Simplified moon phase calculation
    const c = Math.floor((year - 1900) / 100);
    const e = 2 * (month + 1);
    const jd = (365.25 * (year + 4716)) + (30.6001 * (month + 1 + 1)) + day - 1524.5;
    const daysSinceNew = (jd - 2451549.5) / 29.53;
    const phase = daysSinceNew - Math.floor(daysSinceNew);
    
    // Determine phase name and icon
    if (phase < 0.033) return { name: "New Moon", icon: "🌑", energy: "High", description: "Perfect time for new beginnings and setting intentions" };
    if (phase < 0.216) return { name: "Waxing Crescent", icon: "🌒", energy: "Building", description: "Take action on your intentions" };
    if (phase < 0.283) return { name: "First Quarter", icon: "🌓", energy: "Active", description: "Push through challenges with determination" };
    if (phase < 0.466) return { name: "Waxing Gibbous", icon: "🌔", energy: "Expanding", description: "Refine and adjust your plans" };
    if (phase < 0.533) return { name: "Full Moon", icon: "🌕", energy: "Peak", description: "Celebrate manifestations and release what no longer serves" };
    if (phase < 0.716) return { name: "Waning Gibbous", icon: "🌖", energy: "Reflecting", description: "Share wisdom and express gratitude" };
    if (phase < 0.783) return { name: "Last Quarter", icon: "🌗", energy: "Releasing", description: "Let go of limiting beliefs" };
    return { name: "Waning Crescent", icon: "🌘", energy: "Resting", description: "Rest, restore, and prepare for renewal" };
}

// Save this to use in Vision Board and Journal
if (typeof window !== 'undefined') {
    window.getMoonPhase = getCurrentMoonPhase;
    window.enhancedFeatures = ENHANCED_FEATURES;
}
