// ============================================
// FITNESS & HEALTH TRACKING SYSTEM
// Workouts, TRT, Supplements, Metrics, Nutrition
// ============================================

class FitnessTracker {
    constructor(app) {
        this.app = app;
        this.workoutPlans = this.getWorkoutPlans();
        this.calendarDate = new Date(); // Track viewed month
        this.editingCommonSupps = false; // Track edit mode for common supplements
        this.setupEventListeners();
        this.initializeNADData();
    }

    // Calendar navigation
    prevMonth() {
        this.calendarDate.setMonth(this.calendarDate.getMonth() - 1);
        this.updateCalendar();
    }

    nextMonth() {
        this.calendarDate.setMonth(this.calendarDate.getMonth() + 1);
        this.updateCalendar();
    }

    goToToday() {
        this.calendarDate = new Date();
        this.updateCalendar();
    }

    updateCalendar() {
        const calendarContainer = document.querySelector('.workout-calendar-compact');
        if (calendarContainer) {
            const monthLabel = this.calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            calendarContainer.innerHTML = `
                <div class="calendar-header-row">
                    <h3>📅 Health Calendar</h3>
                    <div class="calendar-nav">
                        <button class="cal-nav-btn" onclick="window.fitnessTracker.prevMonth()">‹</button>
                        <span class="calendar-month">${monthLabel}</span>
                        <button class="cal-nav-btn" onclick="window.fitnessTracker.nextMonth()">›</button>
                        <button class="cal-today-btn" onclick="window.fitnessTracker.goToToday()">Today</button>
                    </div>
                </div>
                ${this.renderCompactCalendar()}
            `;
        }
    }

    // Initialize NAD+ data to match testosterone injections starting Dec 26
    initializeNADData() {
        const injections = this.getInjectionHistory();

        // Check if NAD+ data already exists
        const hasNAD = injections.some(inj =>
            inj.type && inj.type.toLowerCase().includes('nad')
        );

        if (hasNAD) return; // Already has NAD+ data

        // Get testosterone entries from Dec 26 onward
        const dec26 = new Date(2025, 11, 26); // Dec 26, 2025
        const tEntries = injections.filter(inj => {
            if (!inj.type || !inj.type.toLowerCase().includes('testosterone')) return false;
            const injDate = new Date(inj.date + 'T12:00:00');
            return injDate >= dec26;
        });

        // Add NAD+ entry for each testosterone entry from Dec 26 onward
        tEntries.forEach(tInj => {
            injections.push({
                id: Date.now() + Math.random() * 1000,
                type: 'NAD+',
                date: tInj.date,
                dosage: '',
                energy: tInj.energy || 7,
                notes: 'Taken with testosterone'
            });
        });

        // Save updated injections
        localStorage.setItem('synthesis_injections', JSON.stringify(injections));
    }

    // Format date as MM/DD/YYYY
    formatDateMMDDYYYY(dateString) {
        // Parse date string manually to avoid timezone issues
        const parts = dateString.split('-');
        if (parts.length === 3) {
            return `${parts[1]}/${parts[2]}/${parts[0]}`;
        }
        const date = new Date(dateString + 'T12:00:00');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    setupEventListeners() {
        const backBtns = ['body-metrics', 'trt', 'supplements', 'nutrition'];
        backBtns.forEach(view => {
            const btn = document.getElementById(`${view}-back-btn`);
            if (btn) {
                btn.addEventListener('click', () => this.app.switchView('workout'));
            }
        });
    }

    // ============================================
    // WORKOUT HUB (MAIN VIEW)
    // ============================================

    renderWorkoutHub() {
        window.scrollTo(0, 0);
        const container = document.getElementById('workout-content');
        if (!container) return;

        const stats = APP_DATA.user.workoutStats || { totalWorkouts: 0, currentStreak: 0 };
        const todayWorkout = this.getTodayWorkout();
        const healthNotes = this.getHealthNotes();
        const prs = this.getPersonalRecords();
        const weekStats = this.getWeekStats();
        const progressData = this.getExerciseProgressData();

        const html = `
            <!-- Row 1: Body Metrics, Supplements, Nutrition -->
            <div class="fitness-hub-row three-col">
                <div class="hub-card" onclick="app.switchView('body-metrics')">
                    <span class="hub-icon">📊</span>
                    <span class="hub-title">Body Metrics</span>
                    <span class="hub-desc">Track your progress</span>
                </div>
                <div class="hub-card" onclick="app.switchView('supplements')">
                    <span class="hub-icon">💊</span>
                    <span class="hub-title">Supplements</span>
                    <span class="hub-desc">Your stack</span>
                </div>
                <div class="hub-card" onclick="app.switchView('nutrition')">
                    <span class="hub-icon">🥗</span>
                    <span class="hub-title">Nutrition</span>
                    <span class="hub-desc">Macro tracking</span>
                </div>
            </div>

            <!-- Row 2: HRT Protocol & Biomarkers/Labs -->
            <div class="fitness-hub-row two-col">
                <div class="fitness-card equal-height hrt-expanded">
                    <div class="card-header-row">
                        <h3>💉 HRT Protocol</h3>
                        <div class="header-actions">
                            <button class="btn-icon btn-add" onclick="window.fitnessTracker.showLogInjection()" title="Log Injection">+</button>
                            <button class="btn-icon" onclick="window.fitnessTracker.showInjectionHistory()" title="View History">📋</button>
                        </div>
                    </div>
                    <div class="hrt-quick-status">
                        <div class="hrt-item">
                            <span>Last Testosterone</span>
                            <strong>${this.getLastDose('testosterone')}</strong>
                        </div>
                        <div class="hrt-item">
                            <span>NAD+ Injection</span>
                            <strong>${this.getLastDose('nad')}</strong>
                        </div>
                    </div>

                    <div class="effectiveness-chart-container">
                        <canvas id="effectiveness-chart" class="effectiveness-chart"></canvas>
                    </div>

                    <div class="chart-row">
                        <div class="chart-row-header">
                            <span>😴 Sleep</span>
                            <div class="chart-row-actions">
                                <button class="btn-icon-sm" onclick="event.stopPropagation(); window.fitnessTracker.showLogSleep()" title="Log Sleep">+</button>
                                <button class="btn-icon-sm" onclick="event.stopPropagation(); window.fitnessTracker.showSleepHistory()" title="History">📋</button>
                            </div>
                        </div>
                        <div class="sleep-chart-container">
                            <canvas id="sleep-chart" class="sleep-chart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="fitness-card equal-height">
                    <div class="card-header-row">
                        <h3>🧪 Biomarkers & Labs</h3>
                        <div class="header-actions">
                            <button class="btn-icon btn-add" onclick="window.fitnessTracker.showLogLabs()" title="Log Labs">+</button>
                            <button class="btn-icon" onclick="window.fitnessTracker.showLabHistory()" title="View History">📋</button>
                        </div>
                    </div>
                    ${this.renderBiomarkersCard(true)}
                </div>
            </div>

            <!-- Row 3: Health Calendar -->
            <div class="workout-calendar-compact">
                <div class="calendar-header-row">
                    <h3>📅 Health Calendar</h3>
                    <div class="calendar-nav">
                        <button class="cal-nav-btn" onclick="window.fitnessTracker.prevMonth()">‹</button>
                        <span class="calendar-month">${this.calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        <button class="cal-nav-btn" onclick="window.fitnessTracker.nextMonth()">›</button>
                        <button class="cal-today-btn" onclick="window.fitnessTracker.goToToday()">Today</button>
                    </div>
                </div>
                ${this.renderCompactCalendar()}
            </div>

            <!-- Stats Row (below calendar) -->
            <div class="fitness-stats-row">
                <div class="fitness-stat">
                    <span class="fs-value">${stats.totalWorkouts}</span>
                    <span class="fs-label">Workouts</span>
                </div>
                <div class="fitness-stat">
                    <span class="fs-value">${stats.currentStreak}</span>
                    <span class="fs-label">Day Streak</span>
                </div>
                <div class="fitness-stat">
                    <span class="fs-value">${Math.round((stats.totalMinutes || 0) / 60)}h</span>
                    <span class="fs-label">Total Time</span>
                </div>
            </div>

            <!-- Row 4: This Week, Workout Plans, Log Workout -->
            <div class="fitness-hub-row three-col">
                <div class="hub-card this-week-card">
                    <span class="hub-icon">📊</span>
                    <span class="hub-title">This Week</span>
                    <div class="this-week-stats">
                        <div class="tw-stat">
                            <span class="tw-value">${weekStats.workouts}</span>
                            <span class="tw-label">Workouts</span>
                        </div>
                        <div class="tw-stat">
                            <span class="tw-value">${weekStats.prs}</span>
                            <span class="tw-label">PRs</span>
                        </div>
                    </div>
                </div>
                <div class="hub-card" onclick="window.fitnessTracker.renderWorkoutPlans()">
                    <span class="hub-icon">📋</span>
                    <span class="hub-title">Workout Plans</span>
                    <span class="hub-desc">Pre-built programs</span>
                </div>
                <div class="hub-card hub-card-with-action" onclick="window.fitnessTracker.showLogWorkout()">
                    <span class="hub-icon">📝</span>
                    <span class="hub-title">Log Workout</span>
                    <span class="hub-desc">Record your session</span>
                    <button class="hub-card-action" onclick="event.stopPropagation(); window.fitnessTracker.showWorkoutHistory()" title="View History">
                        📜
                    </button>
                </div>
            </div>

            <!-- Row 5: Random Workout Generator - Featured -->
            <div class="featured-generator-card" onclick="window.fitnessTracker.showRandomGenerator()">
                <div class="fg-content">
                    <span class="fg-icon">⚡</span>
                    <div class="fg-text">
                        <h3>Workout Generator</h3>
                        <p>Generate fresh, exciting workouts tailored to your equipment</p>
                    </div>
                </div>
                <button class="btn-primary" onclick="event.stopPropagation(); window.fitnessTracker.showRandomGenerator()">
                    Generate Workout
                </button>
            </div>

            <!-- Row 5: Strength Progress (Knee-Friendly Exercises) -->
            <div class="strength-progress-section">
                <div class="section-header-row">
                    <h3>💪 Strength Progress</h3>
                    <button class="btn-icon btn-reset-small" onclick="window.fitnessTracker.resetAllProgress()" title="Reset all progress data">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </div>
                <div class="progress-graphs hub-progress">
                    ${this.renderHubProgressGraphs()}
                </div>
            </div>

            <div class="recent-workouts">
                <h3>Recent Workouts</h3>
                <div id="recent-workout-list">
                    ${this.renderRecentWorkouts()}
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Render charts after DOM is ready
        setTimeout(() => {
            this.renderEffectivenessChart();
            this.renderBiomarkersChart();
            this.renderSleepChart();
        }, 100);
    }

    showLogInjection() {
        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';
        modal.innerHTML = `
            <div class="injection-modal">
                <h3>💉 Log Injection</h3>

                <div class="injection-form">
                    <div class="form-group">
                        <label>Injection Type</label>
                        <select id="injection-type" class="fitness-input">
                            <option value="testosterone">Testosterone</option>
                            <option value="nad">NAD+</option>
                            <option value="b12">B12</option>
                            <option value="custom">Other (Custom)</option>
                        </select>
                    </div>

                    <div class="form-group" id="custom-type-group" style="display: none;">
                        <label>Custom Type Name</label>
                        <input type="text" id="custom-injection-type" class="fitness-input" placeholder="e.g., Glutathione">
                    </div>

                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" id="injection-date" class="fitness-input" value="${new Date().toISOString().split('T')[0]}">
                    </div>

                    <div class="form-group">
                        <label>Dosage (optional)</label>
                        <input type="text" id="injection-dosage" class="fitness-input" placeholder="e.g., 200mg, 0.5ml">
                    </div>

                    <div class="form-group">
                        <label>Energy Level (1-10)</label>
                        <div class="energy-slider-row">
                            <input type="range" id="injection-energy" min="1" max="10" value="7"
                                oninput="document.getElementById('injection-energy-display').textContent = this.value">
                            <span id="injection-energy-display" class="energy-display">7</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Notes (optional)</label>
                        <textarea id="injection-notes" class="fitness-input" placeholder="How are you feeling? Any side effects?"></textarea>
                    </div>

                    <div class="modal-buttons">
                        <button class="btn-secondary" id="injection-cancel-btn">Cancel</button>
                        <button class="btn-primary" id="injection-save-btn">Save</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Get button references
        const saveBtn = modal.querySelector('#injection-save-btn');
        const cancelBtn = modal.querySelector('#injection-cancel-btn');
        const typeSelect = modal.querySelector('#injection-type');
        const customGroup = modal.querySelector('#custom-type-group');

        // Show/hide custom type input
        if (typeSelect) {
            typeSelect.addEventListener('change', function() {
                if (customGroup) {
                    customGroup.style.display = this.value === 'custom' ? 'block' : 'none';
                }
            });
        }

        // Cancel button
        if (cancelBtn) {
            cancelBtn.onclick = () => {
                modal.remove();
            };
        }

        // Save button
        const tracker = this;
        if (saveBtn) {
            saveBtn.onclick = function() {
                // Get values directly from the modal
                const typeSelect = modal.querySelector('#injection-type');
                const customInput = modal.querySelector('#custom-injection-type');
                const dateInput = modal.querySelector('#injection-date');
                const dosageInput = modal.querySelector('#injection-dosage');
                const energyInput = modal.querySelector('#injection-energy');
                const notesInput = modal.querySelector('#injection-notes');

                let type = typeSelect ? typeSelect.value : 'testosterone';
                if (type === 'custom' && customInput) {
                    type = customInput.value || 'Custom';
                }

                const injection = {
                    id: Date.now(),
                    type: type,
                    date: dateInput ? dateInput.value : new Date().toISOString().split('T')[0],
                    dosage: dosageInput ? dosageInput.value : '',
                    energy: energyInput ? parseInt(energyInput.value) : 7,
                    notes: notesInput ? notesInput.value : ''
                };

                // Save to localStorage
                const injections = tracker.getInjectionHistory();
                injections.push(injection);
                localStorage.setItem('synthesis_injections', JSON.stringify(injections));

                // Save energy to history
                tracker.saveEnergyToHistory(injection.date, injection.energy);

                // Close modal and refresh
                modal.remove();
                tracker.renderWorkoutHub();
            };
        }
    }

    saveInjection() {
        try {
            const typeSelect = document.getElementById('injection-type');
            if (!typeSelect) {
                alert('Error: Could not find injection type select');
                return;
            }
            let type = typeSelect.value;

            if (type === 'custom') {
                const customInput = document.getElementById('custom-injection-type');
                type = customInput ? customInput.value || 'Custom' : 'Custom';
            }

            const dateInput = document.getElementById('injection-date');
            const dosageInput = document.getElementById('injection-dosage');
            const energyInput = document.getElementById('injection-energy');
            const notesInput = document.getElementById('injection-notes');

            const injection = {
                id: Date.now(),
                type: type,
                date: dateInput ? dateInput.value : new Date().toISOString().split('T')[0],
                dosage: dosageInput ? dosageInput.value : '',
                energy: energyInput ? parseInt(energyInput.value) : 7,
                notes: notesInput ? notesInput.value : ''
            };

            // Save to localStorage
            const injections = this.getInjectionHistory();
            injections.push(injection);
            localStorage.setItem('synthesis_injections', JSON.stringify(injections));

            // Also save energy level to health notes history for trending
            this.saveEnergyToHistory(injection.date, injection.energy);

            // Close modal and refresh
            const modal = document.querySelector('.injection-modal-overlay');
            if (modal) modal.remove();

            this.renderWorkoutHub();
        } catch (error) {
            alert('Error saving injection: ' + error.message);
            console.error('Save injection error:', error);
        }
    }

    getInjectionHistory() {
        const data = localStorage.getItem('synthesis_injections');
        return data ? JSON.parse(data) : [];
    }

    saveEnergyToHistory(date, energy) {
        const history = JSON.parse(localStorage.getItem('synthesis_energy_history') || '[]');
        history.push({ date, energy, timestamp: Date.now() });
        // Keep last 30 days
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        const filtered = history.filter(h => h.timestamp > thirtyDaysAgo);
        localStorage.setItem('synthesis_energy_history', JSON.stringify(filtered));
    }

    getEnergyHistory() {
        const data = localStorage.getItem('synthesis_energy_history');
        return data ? JSON.parse(data) : [];
    }

    // ============================================
    // BIOMARKERS & LABS
    // ============================================

    renderBiomarkersCard(hideButton = false) {
        const labs = this.getLabResults();
        const latestLabs = this.getLatestLabValues(labs);

        if (Object.keys(latestLabs).length === 0) {
            return `
                <div class="biomarkers-empty">
                    <p>Track your bloodwork results here</p>
                    ${!hideButton ? `<button class="btn-primary" onclick="window.fitnessTracker.showLogLabs()">Log Lab Results</button>` : ''}
                </div>
            `;
        }

        return `
            <div class="biomarkers-grid">
                ${latestLabs.testosterone ? `
                    <div class="biomarker-item">
                        <span class="biomarker-label">Total T</span>
                        <span class="biomarker-value">${latestLabs.testosterone.value}</span>
                        <span class="biomarker-unit">ng/dL</span>
                    </div>
                ` : ''}
                ${latestLabs.freeT ? `
                    <div class="biomarker-item">
                        <span class="biomarker-label">Free T</span>
                        <span class="biomarker-value">${latestLabs.freeT.value}</span>
                        <span class="biomarker-unit">pg/mL</span>
                    </div>
                ` : ''}
                ${latestLabs.estradiol ? `
                    <div class="biomarker-item">
                        <span class="biomarker-label">E2</span>
                        <span class="biomarker-value">${latestLabs.estradiol.value}</span>
                        <span class="biomarker-unit">pg/mL</span>
                    </div>
                ` : ''}
                ${latestLabs.hematocrit ? `
                    <div class="biomarker-item">
                        <span class="biomarker-label">HCT</span>
                        <span class="biomarker-value">${latestLabs.hematocrit.value}</span>
                        <span class="biomarker-unit">%</span>
                    </div>
                ` : ''}
            </div>
            <div class="chart-row">
                <div class="chart-row-header">
                    <span>🧪 Total T</span>
                </div>
                <div class="biomarkers-chart-container">
                    <canvas id="biomarkers-chart" class="biomarkers-chart"></canvas>
                </div>
            </div>
            ${!hideButton ? `<button class="btn-secondary" style="width: 100%; margin-top: 0.5rem;" onclick="window.fitnessTracker.showLogLabs()">Log New Results</button>` : ''}
        `;
    }

    getLabResults() {
        const data = localStorage.getItem('synthesis_lab_results');
        return data ? JSON.parse(data) : [];
    }

    getLatestLabValues(labs) {
        const latest = {};
        const markers = ['testosterone', 'freeT', 'estradiol', 'hematocrit', 'psa', 'shbg', 'hemoglobin', 'rbc'];

        markers.forEach(marker => {
            const markerLabs = labs.filter(l => l.marker === marker).sort((a, b) => new Date(b.date) - new Date(a.date));
            if (markerLabs.length > 0) {
                latest[marker] = markerLabs[0];
            }
        });

        return latest;
    }

    showLogLabs() {
        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';
        modal.innerHTML = `
            <div class="injection-modal" style="max-width: 500px;">
                <h3>🧪 Log Lab Results</h3>

                <div class="injection-form">
                    <div class="form-group">
                        <label>Lab Date</label>
                        <input type="date" id="lab-date" class="fitness-input" value="${new Date().toISOString().split('T')[0]}">
                    </div>

                    <div class="lab-markers-grid">
                        <div class="form-group">
                            <label>Total Testosterone (ng/dL)</label>
                            <input type="number" id="lab-testosterone" class="fitness-input" placeholder="e.g., 800">
                        </div>
                        <div class="form-group">
                            <label>Free Testosterone (pg/mL)</label>
                            <input type="number" id="lab-freeT" class="fitness-input" placeholder="e.g., 15">
                        </div>
                        <div class="form-group">
                            <label>Estradiol/E2 (pg/mL)</label>
                            <input type="number" id="lab-estradiol" class="fitness-input" placeholder="e.g., 30">
                        </div>
                        <div class="form-group">
                            <label>Hematocrit (%)</label>
                            <input type="number" id="lab-hematocrit" class="fitness-input" placeholder="e.g., 48" step="0.1">
                        </div>
                        <div class="form-group">
                            <label>SHBG (nmol/L)</label>
                            <input type="number" id="lab-shbg" class="fitness-input" placeholder="e.g., 35">
                        </div>
                        <div class="form-group">
                            <label>PSA (ng/mL)</label>
                            <input type="number" id="lab-psa" class="fitness-input" placeholder="e.g., 0.8" step="0.1">
                        </div>
                        <div class="form-group">
                            <label>Hemoglobin (g/dL)</label>
                            <input type="number" id="lab-hemoglobin" class="fitness-input" placeholder="e.g., 15.5" step="0.1">
                        </div>
                        <div class="form-group">
                            <label>RBC (M/uL)</label>
                            <input type="number" id="lab-rbc" class="fitness-input" placeholder="e.g., 5.2" step="0.1">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Notes (optional)</label>
                        <textarea id="lab-notes" class="fitness-input" placeholder="Any notes about this blood draw..."></textarea>
                    </div>

                    <div class="modal-buttons">
                        <button class="btn-secondary" id="lab-cancel-btn">Cancel</button>
                        <button class="btn-primary" id="lab-save-btn">Save Results</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Cancel button
        modal.querySelector('#lab-cancel-btn').onclick = () => modal.remove();

        // Save button
        const tracker = this;
        modal.querySelector('#lab-save-btn').onclick = function() {
            const date = modal.querySelector('#lab-date').value;
            const notes = modal.querySelector('#lab-notes').value;
            const labs = tracker.getLabResults();

            const markers = [
                { id: 'testosterone', field: 'lab-testosterone' },
                { id: 'freeT', field: 'lab-freeT' },
                { id: 'estradiol', field: 'lab-estradiol' },
                { id: 'hematocrit', field: 'lab-hematocrit' },
                { id: 'shbg', field: 'lab-shbg' },
                { id: 'psa', field: 'lab-psa' },
                { id: 'hemoglobin', field: 'lab-hemoglobin' },
                { id: 'rbc', field: 'lab-rbc' }
            ];

            markers.forEach(marker => {
                const input = modal.querySelector('#' + marker.field);
                if (input && input.value) {
                    labs.push({
                        id: Date.now() + Math.random(),
                        marker: marker.id,
                        value: parseFloat(input.value),
                        date: date,
                        notes: notes
                    });
                }
            });

            localStorage.setItem('synthesis_lab_results', JSON.stringify(labs));
            modal.remove();
            tracker.renderWorkoutHub();
        };
    }

    renderBiomarkersChart() {
        const canvas = document.getElementById('biomarkers-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const labs = this.getLabResults();

        // Get testosterone data for the chart
        const tData = labs
            .filter(l => l.marker === 'testosterone')
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(-10); // Last 10 entries

        canvas.width = canvas.parentElement.offsetWidth - 10;
        canvas.height = 70;

        const padding = 5;

        if (tData.length === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '10px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText('T levels will chart here', canvas.width / 2, canvas.height / 2);
            return;
        }

        const chartHeight = canvas.height - padding * 2;
        const values = tData.map(d => d.value);
        const minVal = Math.min(...values) * 0.9;
        const maxVal = Math.max(...values) * 1.1;
        const range = maxVal - minVal || 1;

        // Store points for hover
        const points = tData.map((point, i) => ({
            x: padding + (i / (tData.length - 1 || 1)) * (canvas.width - padding * 2),
            y: canvas.height - padding - ((point.value - minVal) / range) * chartHeight,
            value: point.value,
            date: point.date
        }));

        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        points.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Draw points
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#8b5cf6';
            ctx.fill();
        });

        // Add hover listener
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            // Find closest point
            let closest = null;
            let minDist = 20;
            points.forEach(p => {
                const dist = Math.sqrt((mx - p.x) ** 2 + (my - p.y) ** 2);
                if (dist < minDist) {
                    minDist = dist;
                    closest = p;
                }
            });

            // Show tooltip
            let tooltip = document.getElementById('chart-tooltip');
            if (closest) {
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.id = 'chart-tooltip';
                    tooltip.className = 'chart-tooltip';
                    document.body.appendChild(tooltip);
                }
                const dateStr = this.formatDate(closest.date);
                tooltip.innerHTML = `<strong>${closest.value} ng/dL</strong><br>${dateStr}`;
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY - 30) + 'px';
                tooltip.style.display = 'block';
            } else if (tooltip) {
                tooltip.style.display = 'none';
            }
        };

        canvas.onmouseleave = () => {
            const tooltip = document.getElementById('chart-tooltip');
            if (tooltip) tooltip.style.display = 'none';
        };
    }

    renderEffectivenessChart() {
        const canvas = document.getElementById('effectiveness-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const injections = this.getInjectionHistory();

        // Get testosterone and NAD+ data
        const tData = injections.filter(inj =>
            inj.energy && ['Testosterone', 'testosterone'].some(t => inj.type.toLowerCase().includes(t.toLowerCase()))
        ).map(inj => ({ date: inj.date, energy: inj.energy, type: 'T' }));

        // NAD+ started Dec 26, 2025 - only show from that date
        const nadStartDate = new Date(2025, 11, 26); // Dec 26, 2025
        const nadData = injections.filter(inj => {
            if (!inj.energy || !['NAD+', 'nad', 'NAD'].some(t => inj.type.toLowerCase().includes(t.toLowerCase()))) return false;
            const injDate = new Date(inj.date + 'T12:00:00');
            return injDate >= nadStartDate;
        }).map(inj => ({ date: inj.date, energy: inj.energy, type: 'NAD+' }));

        // Sort by date
        tData.sort((a, b) => new Date(a.date) - new Date(b.date));
        nadData.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Set canvas size
        canvas.width = canvas.parentElement.offsetWidth - 10;
        canvas.height = 70;

        const topPadding = 15;
        const padding = 5;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - topPadding - padding;

        // Draw legend at top
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'left';
        if (tData.length > 0 || nadData.length > 0) {
            ctx.fillStyle = '#3b82f6';
            ctx.fillText('T', padding, 12);
            ctx.fillStyle = '#f59e0b';
            ctx.fillText('NAD+', padding + 18, 12);
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillText('(Energy 1-10)', padding + 60, 12);
        }

        if (tData.length === 0 && nadData.length === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '10px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText('Log injections with energy to see trends', canvas.width / 2, canvas.height / 2);
            return;
        }

        // Create shared x-axis scale based on all dates
        const allDates = [...tData, ...nadData].map(d => new Date(d.date + 'T12:00:00').getTime());
        const minDate = Math.min(...allDates);
        const maxDate = Math.max(...allDates);
        const dateRange = maxDate - minDate || 1;

        // Helper to get x position for a date
        const getX = (dateStr) => {
            const dateTime = new Date(dateStr + 'T12:00:00').getTime();
            return padding + ((dateTime - minDate) / dateRange) * chartWidth;
        };

        // Store all points for hover
        const allPoints = [];

        // Draw testosterone line and points (blue)
        if (tData.length > 0) {
            ctx.beginPath();
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            tData.forEach((point, i) => {
                const x = getX(point.date);
                const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
                allPoints.push({ x, y, value: point.energy, date: point.date, type: 'T', color: '#3b82f6' });
            });
            ctx.stroke();

            // Draw points
            tData.forEach((point) => {
                const x = getX(point.date);
                const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#3b82f6';
                ctx.fill();
            });
        }

        // Draw NAD+ line and points (orange)
        if (nadData.length > 0) {
            ctx.beginPath();
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2;
            nadData.forEach((point, i) => {
                const x = getX(point.date);
                const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
                allPoints.push({ x, y, value: point.energy, date: point.date, type: 'NAD+', color: '#f59e0b' });
            });
            ctx.stroke();

            // Draw points
            nadData.forEach((point) => {
                const x = getX(point.date);
                const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#f59e0b';
                ctx.fill();
            });
        }

        // Add hover listener
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            // Find closest point
            let closest = null;
            let minDist = 20;
            allPoints.forEach(p => {
                const dist = Math.sqrt((mx - p.x) ** 2 + (my - p.y) ** 2);
                if (dist < minDist) {
                    minDist = dist;
                    closest = p;
                }
            });

            // Show tooltip
            let tooltip = document.getElementById('chart-tooltip');
            if (closest) {
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.id = 'chart-tooltip';
                    tooltip.className = 'chart-tooltip';
                    document.body.appendChild(tooltip);
                }
                const dateStr = this.formatDate(closest.date);
                tooltip.innerHTML = `<strong style="color:${closest.color}">${closest.type}: ${closest.value}/10</strong><br>${dateStr}`;
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY - 30) + 'px';
                tooltip.style.display = 'block';
            } else if (tooltip) {
                tooltip.style.display = 'none';
            }
        };

        canvas.onmouseleave = () => {
            const tooltip = document.getElementById('chart-tooltip');
            if (tooltip) tooltip.style.display = 'none';
        };
    }

    // ============================================
    // SLEEP TRACKING
    // ============================================

    getSleepData() {
        const data = localStorage.getItem('synthesis_sleep_data');
        return data ? JSON.parse(data) : [];
    }

    saveSleepData(sleepData) {
        localStorage.setItem('synthesis_sleep_data', JSON.stringify(sleepData));
    }

    showLogSleep() {
        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';
        modal.innerHTML = `
            <div class="injection-modal" style="max-width: 400px;">
                <h3>😴 Log Sleep</h3>

                <div class="injection-form">
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" id="sleep-date" class="fitness-input" value="${new Date().toISOString().split('T')[0]}">
                    </div>

                    <div class="form-group">
                        <label>Hours Slept</label>
                        <input type="number" id="sleep-hours" class="fitness-input" placeholder="e.g., 7.5" step="0.5" min="0" max="24">
                    </div>

                    <div class="form-group">
                        <label>Sleep Quality (1-10)</label>
                        <input type="range" id="sleep-quality" min="1" max="10" value="7" class="fitness-slider">
                        <div class="slider-value"><span id="quality-display">7</span>/10</div>
                    </div>

                    <div class="form-group">
                        <label>Notes (optional)</label>
                        <input type="text" id="sleep-notes" class="fitness-input" placeholder="e.g., Woke up once...">
                    </div>
                </div>

                <div class="modal-actions">
                    <button class="btn-secondary" onclick="this.closest('.injection-modal-overlay').remove()">Cancel</button>
                    <button class="btn-primary" onclick="window.fitnessTracker.saveSleepEntry()">Save</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Update quality display on slider change
        const slider = modal.querySelector('#sleep-quality');
        const display = modal.querySelector('#quality-display');
        slider.addEventListener('input', () => {
            display.textContent = slider.value;
        });
    }

    saveSleepEntry() {
        const date = document.getElementById('sleep-date').value;
        const hours = parseFloat(document.getElementById('sleep-hours').value);
        const quality = parseInt(document.getElementById('sleep-quality').value);
        const notes = document.getElementById('sleep-notes').value;

        if (!date || !hours) {
            alert('Please enter date and hours slept');
            return;
        }

        const sleepData = this.getSleepData();
        sleepData.push({ date, hours, quality, notes, timestamp: Date.now() });
        this.saveSleepData(sleepData);

        document.querySelector('.injection-modal-overlay').remove();
        this.render();
    }

    showSleepHistory() {
        const sleepData = this.getSleepData().sort((a, b) => new Date(b.date) - new Date(a.date));

        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';
        modal.innerHTML = `
            <div class="injection-modal" style="max-width: 500px; max-height: 80vh; overflow-y: auto;">
                <h3>😴 Sleep History</h3>

                ${sleepData.length === 0 ? '<p style="text-align: center; color: var(--color-text-secondary);">No sleep data logged yet</p>' : `
                    <div class="history-list">
                        ${sleepData.map((entry, index) => `
                            <div class="history-item">
                                <div class="history-main">
                                    <strong>${this.formatDate(entry.date)}</strong>
                                    <span>${entry.hours}h • Quality: ${entry.quality}/10</span>
                                </div>
                                ${entry.notes ? `<div class="history-notes">${entry.notes}</div>` : ''}
                                <button class="btn-delete-sm" onclick="window.fitnessTracker.deleteSleepEntry(${index})" title="Delete">🗑️</button>
                            </div>
                        `).join('')}
                    </div>
                `}

                <div class="modal-actions">
                    <button class="btn-secondary" onclick="this.closest('.injection-modal-overlay').remove()">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    deleteSleepEntry(index) {
        if (!confirm('Delete this sleep entry?')) return;

        const sleepData = this.getSleepData().sort((a, b) => new Date(b.date) - new Date(a.date));
        sleepData.splice(index, 1);
        this.saveSleepData(sleepData);

        document.querySelector('.injection-modal-overlay').remove();
        this.showSleepHistory();
    }

    renderSleepChart() {
        const canvas = document.getElementById('sleep-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const sleepData = this.getSleepData()
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(-14); // Last 14 entries

        canvas.width = canvas.parentElement.offsetWidth - 10;
        canvas.height = 70;

        const padding = 5;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - padding * 2;

        if (sleepData.length === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '10px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText('Log sleep to see trends', canvas.width / 2, canvas.height / 2);
            return;
        }

        // Calculate scale (4-10 hours range typically)
        const hours = sleepData.map(d => d.hours);
        const minHours = Math.max(0, Math.min(...hours) - 1);
        const maxHours = Math.max(...hours) + 1;
        const range = maxHours - minHours || 1;

        // Store points for hover
        const allPoints = sleepData.map((point, i) => ({
            x: padding + (i / (sleepData.length - 1 || 1)) * chartWidth,
            y: canvas.height - padding - ((point.hours - minHours) / range) * chartHeight,
            hours: point.hours,
            quality: point.quality,
            date: point.date
        }));

        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = '#a78bfa';
        ctx.lineWidth = 2;
        allPoints.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Draw points
        allPoints.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#a78bfa';
            ctx.fill();
        });

        // Add hover listener
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            let closest = null;
            let minDist = 20;
            allPoints.forEach(p => {
                const dist = Math.sqrt((mx - p.x) ** 2 + (my - p.y) ** 2);
                if (dist < minDist) {
                    minDist = dist;
                    closest = p;
                }
            });

            let tooltip = document.getElementById('chart-tooltip');
            if (closest) {
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.id = 'chart-tooltip';
                    tooltip.className = 'chart-tooltip';
                    document.body.appendChild(tooltip);
                }
                const dateStr = this.formatDate(closest.date);
                tooltip.innerHTML = `<strong style="color:#a78bfa">${closest.hours}h</strong> • Quality: ${closest.quality}/10<br>${dateStr}`;
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY - 30) + 'px';
                tooltip.style.display = 'block';
            } else if (tooltip) {
                tooltip.style.display = 'none';
            }
        };

        canvas.onmouseleave = () => {
            const tooltip = document.getElementById('chart-tooltip');
            if (tooltip) tooltip.style.display = 'none';
        };
    }

    renderEnergyTrendChart(injectionType, canvasId, chartColor) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const injections = this.getInjectionHistory();

        // Filter injections by type and only include those with energy recorded
        const typeMatches = {
            'testosterone': ['Testosterone', 'testosterone'],
            'nad': ['NAD+', 'nad', 'NAD']
        };

        const matchTypes = typeMatches[injectionType] || [injectionType];
        const filteredInjections = injections.filter(inj =>
            inj.energy && matchTypes.some(t => inj.type.toLowerCase().includes(t.toLowerCase()))
        );

        // Build energy data from filtered injections
        const energyData = filteredInjections.map(inj => ({
            date: inj.date,
            energy: inj.energy,
            dosage: inj.dosage
        }));

        // Sort by date
        energyData.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Set canvas size
        canvas.width = canvas.parentElement.offsetWidth - 10;
        canvas.height = 70;

        const typeName = injectionType === 'testosterone' ? 'Testosterone' : 'NAD+';

        if (energyData.length === 0) {
            // Draw placeholder
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '11px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText(`Log ${typeName} with energy to see trends`, canvas.width / 2, canvas.height / 2);
            return;
        }

        const padding = 10;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - padding * 2;

        // Parse color for gradient
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 59, g: 130, b: 246 };
        };
        const rgb = hexToRgb(chartColor);

        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        // Draw area
        ctx.beginPath();
        ctx.moveTo(padding, canvas.height - padding);

        energyData.forEach((point, i) => {
            const x = padding + (i / (energyData.length - 1 || 1)) * chartWidth;
            const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
            ctx.lineTo(x, y);
        });

        ctx.lineTo(padding + chartWidth, canvas.height - padding);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = chartColor;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        energyData.forEach((point, i) => {
            const x = padding + (i / (energyData.length - 1 || 1)) * chartWidth;
            const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Draw points
        energyData.forEach((point, i) => {
            const x = padding + (i / (energyData.length - 1 || 1)) * chartWidth;
            const y = canvas.height - padding - ((point.energy - 1) / 9) * chartHeight;

            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = chartColor;
            ctx.fill();

            // White inner dot
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        });

        // Draw current energy level
        if (energyData.length > 0) {
            const lastEnergy = energyData[energyData.length - 1].energy;
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 11px system-ui';
            ctx.textAlign = 'right';
            ctx.fillText(`${lastEnergy}/10`, canvas.width - padding, padding + 10);
        }
    }

    renderPRCards(progressData) {
        // Knee-Friendly Workout main exercises
        const mainExercises = ['Bench Press', 'Overhead Press', 'Barbell Rows', 'Romanian Deadlift', 'Barbell Hip Thrust'];
        const prs = this.getPersonalRecords();

        return mainExercises.map(exercise => {
            const pr = prs.find(p => p.exercise.toLowerCase() === exercise.toLowerCase());
            const hasData = progressData[exercise] && progressData[exercise].length > 0;

            return `
                <div class="pr-card">
                    <div class="pr-card-header">
                        <span class="pr-exercise-name">${exercise}</span>
                        <span class="pr-weight">${pr ? `${pr.weight} lbs` : '-- lbs'}</span>
                    </div>
                    <div class="pr-chart-container">
                        <canvas id="chart-${exercise.replace(/\s+/g, '-').toLowerCase()}" class="pr-chart"></canvas>
                        ${!hasData ? '<div class="no-data-overlay">No data yet - start logging!</div>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderHubProgressGraphs() {
        // Knee-Friendly Workout exercises (same as View Strength Progress)
        const trackedExercises = [
            'Controlled Glute Step Down',
            'Bench Press', 'Barbell Rows', 'Overhead Press',
            'Barbell Hip Thrust', 'Romanian Deadlift', 'Split Squat (Shallow)'
        ];

        return trackedExercises.map(exerciseName => {
            const progress = this.getExerciseProgress(exerciseName);

            if (progress.length === 0) {
                return `
                    <div class="exercise-graph-card">
                        <h4>${exerciseName}</h4>
                        <p class="no-data">No data yet - start logging!</p>
                    </div>
                `;
            }

            const recent = progress.slice(-10);
            const maxWeight = Math.max(...recent.map(p => p.weight));
            const minWeight = Math.min(...recent.map(p => p.weight));
            const range = maxWeight - minWeight || 1;
            const firstWeight = recent[0].weight;
            const lastWeight = recent[recent.length - 1].weight;
            const change = lastWeight - firstWeight;
            const changePercent = ((change / firstWeight) * 100).toFixed(1);

            return `
                <div class="exercise-graph-card">
                    <div class="graph-header">
                        <h4>${exerciseName}</h4>
                        <div class="graph-stats">
                            <span class="current-max">PR: ${maxWeight} lbs</span>
                            <span class="change ${change >= 0 ? 'positive' : 'negative'}">
                                ${change >= 0 ? '↑' : '↓'} ${Math.abs(change)} lbs (${change >= 0 ? '+' : ''}${changePercent}%)
                            </span>
                        </div>
                    </div>
                    <div class="graph-container">
                        <div class="graph-y-axis">
                            <span>${maxWeight}</span>
                            <span>${minWeight}</span>
                        </div>
                        <div class="graph-area">
                            <svg viewBox="0 0 ${recent.length * 30} 60" preserveAspectRatio="none" class="progress-line-chart">
                                <defs>
                                    <linearGradient id="hub-gradient-${exerciseName.replace(/\s/g, '')}" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.3"/>
                                        <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0"/>
                                    </linearGradient>
                                </defs>
                                <path class="area-fill" d="
                                    M 0 60
                                    ${recent.map((p, i) => {
                                        const x = i * 30 + 15;
                                        const y = 60 - ((p.weight - minWeight) / range * 50 + 5);
                                        return `L ${x} ${y}`;
                                    }).join(' ')}
                                    L ${(recent.length - 1) * 30 + 15} 60
                                    Z
                                " fill="url(#hub-gradient-${exerciseName.replace(/\s/g, '')})"/>
                                <polyline class="progress-line" points="
                                    ${recent.map((p, i) => {
                                        const x = i * 30 + 15;
                                        const y = 60 - ((p.weight - minWeight) / range * 50 + 5);
                                        return `${x},${y}`;
                                    }).join(' ')}
                                " fill="none" stroke="#6366f1" stroke-width="2"/>
                                ${recent.map((p, i) => {
                                    const x = i * 30 + 15;
                                    const y = 60 - ((p.weight - minWeight) / range * 50 + 5);
                                    return `<circle cx="${x}" cy="${y}" r="3" fill="#6366f1" class="data-point"/>`;
                                }).join('')}
                            </svg>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getExerciseProgressData() {
        const workouts = APP_DATA.user.workouts || [];
        const progressData = {};
        // Knee-Friendly Workout main exercises
        const mainExercises = ['Bench Press', 'Overhead Press', 'Barbell Rows', 'Romanian Deadlift', 'Barbell Hip Thrust'];

        mainExercises.forEach(exercise => {
            progressData[exercise] = [];
        });

        // Collect data from workout history
        workouts.forEach(workout => {
            if (workout.exercises) {
                workout.exercises.forEach(ex => {
                    const matchedExercise = mainExercises.find(
                        main => ex.name && ex.name.toLowerCase().includes(main.toLowerCase())
                    );
                    if (matchedExercise && ex.weight) {
                        progressData[matchedExercise].push({
                            date: workout.date,
                            weight: parseFloat(ex.weight),
                            reps: ex.reps || 0
                        });
                    }
                });
            }
        });

        // Sort by date
        Object.keys(progressData).forEach(exercise => {
            progressData[exercise].sort((a, b) => new Date(a.date) - new Date(b.date));
        });

        return progressData;
    }

    renderProgressCharts(progressData) {
        // Knee-Friendly Workout main exercises
        const mainExercises = ['Bench Press', 'Overhead Press', 'Barbell Rows', 'Romanian Deadlift', 'Barbell Hip Thrust'];

        mainExercises.forEach(exercise => {
            const canvasId = `chart-${exercise.replace(/\s+/g, '-').toLowerCase()}`;
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            const data = progressData[exercise] || [];

            // Set canvas size
            canvas.width = canvas.parentElement.offsetWidth - 20;
            canvas.height = 120;

            if (data.length === 0) {
                // Draw placeholder line
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(10, canvas.height / 2);
                ctx.lineTo(canvas.width - 10, canvas.height / 2);
                ctx.stroke();
                return;
            }

            // Calculate min/max for scaling
            const weights = data.map(d => d.weight);
            const minWeight = Math.min(...weights) * 0.9;
            const maxWeight = Math.max(...weights) * 1.1;
            const range = maxWeight - minWeight || 1;

            // Draw gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(245, 158, 11, 0.3)');
            gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');

            // Draw area under line
            ctx.beginPath();
            ctx.moveTo(10, canvas.height - 10);

            data.forEach((point, i) => {
                const x = 10 + (i / (data.length - 1 || 1)) * (canvas.width - 20);
                const y = canvas.height - 10 - ((point.weight - minWeight) / range) * (canvas.height - 30);
                if (i === 0) {
                    ctx.lineTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            ctx.lineTo(canvas.width - 10, canvas.height - 10);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw line
            ctx.beginPath();
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.setLineDash([]);

            data.forEach((point, i) => {
                const x = 10 + (i / (data.length - 1 || 1)) * (canvas.width - 20);
                const y = canvas.height - 10 - ((point.weight - minWeight) / range) * (canvas.height - 30);
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.stroke();

            // Draw points
            data.forEach((point, i) => {
                const x = 10 + (i / (data.length - 1 || 1)) * (canvas.width - 20);
                const y = canvas.height - 10 - ((point.weight - minWeight) / range) * (canvas.height - 30);

                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#f59e0b';
                ctx.fill();
                ctx.strokeStyle = '#1a1a2e';
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            // Draw last weight label
            if (data.length > 0) {
                const lastPoint = data[data.length - 1];
                const lastX = canvas.width - 10;
                const lastY = canvas.height - 10 - ((lastPoint.weight - minWeight) / range) * (canvas.height - 30);

                ctx.fillStyle = '#fff';
                ctx.font = 'bold 11px system-ui';
                ctx.textAlign = 'right';
                ctx.fillText(`${lastPoint.weight} lbs`, lastX - 10, lastY - 10);
            }
        });
    }

    getLocalDateString() {
        const today = new Date();
        return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }

    showLogWorkout() {
        const container = document.getElementById('workout-content');
        if (!container) return;

        const localDate = this.getLocalDateString();

        const html = `
            <div class="log-workout-view">
                <button class="btn-back" onclick="window.fitnessTracker.renderWorkoutHub()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Hub
                </button>

                <h2>📝 Log Workout</h2>

                <div class="log-workout-form">
                    <div class="form-group">
                        <label>Workout Name</label>
                        <input type="text" id="workout-name" class="fitness-input" placeholder="e.g., Push Day, Leg Day">
                    </div>

                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" id="workout-date" class="fitness-input" value="${localDate}">
                    </div>

                    <div class="form-group">
                        <label>Duration (minutes)</label>
                        <input type="number" id="workout-duration" class="fitness-input" placeholder="45">
                    </div>

                    <h3>Exercises</h3>
                    <div id="exercise-list"></div>

                    <button class="btn-secondary" onclick="window.fitnessTracker.addExerciseRow()" style="width: 100%; margin: 1rem 0;">
                        + Add Exercise
                    </button>

                    <div class="form-group">
                        <label>Notes</label>
                        <textarea id="workout-notes" class="fitness-input" placeholder="How did the workout feel?"></textarea>
                    </div>

                    <button class="btn-primary" onclick="window.fitnessTracker.saveLoggedWorkout()" style="width: 100%; margin-top: 1rem;">
                        Save Workout
                    </button>

                    <button class="btn-secondary" onclick="window.fitnessTracker.showWorkoutHistory()" style="width: 100%; margin-top: 0.5rem;">
                        📜 View Workout History
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.exerciseRowCount = 0;
        this.addExerciseRow();
    }

    showWorkoutHistory() {
        const container = document.getElementById('workout-content');
        if (!container) return;

        const workouts = APP_DATA.user.workouts || [];

        const html = `
            <div class="workout-history-view">
                <button class="btn-back" onclick="window.fitnessTracker.showLogWorkout()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Log Workout
                </button>

                <h2>📜 Workout History</h2>

                ${workouts.length === 0 ? `
                    <div class="empty-history">
                        <p>No workouts logged yet. Start tracking your sessions!</p>
                    </div>
                ` : `
                    <div class="workout-history-list">
                        ${workouts.slice().reverse().map(workout => `
                            <div class="workout-history-item" id="workout-${workout.id}">
                                <div class="workout-history-header">
                                    <div class="workout-history-info">
                                        <h3>${workout.name || 'Workout'}</h3>
                                        <span class="workout-history-date">${this.formatDate(workout.date)}</span>
                                        <span class="workout-history-duration">${workout.duration || 0} min</span>
                                    </div>
                                    <button class="btn-icon btn-delete" onclick="window.fitnessTracker.deleteWorkout(${workout.id})" title="Delete workout">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                                        </svg>
                                    </button>
                                </div>
                                ${workout.exercises && workout.exercises.length > 0 ? `
                                    <div class="workout-history-exercises">
                                        ${workout.exercises.map(ex => `
                                            <div class="workout-history-exercise">
                                                <span class="exercise-name">${ex.name}</span>
                                                ${ex.weight ? `<span class="exercise-detail">${ex.weight} lbs</span>` : ''}
                                                ${ex.reps ? `<span class="exercise-detail">× ${ex.reps} reps</span>` : ''}
                                                ${ex.sets ? `<span class="exercise-detail">× ${ex.sets} sets</span>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                                ${workout.notes ? `<div class="workout-history-notes">${workout.notes}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `;

        container.innerHTML = html;
    }

    deleteWorkout(workoutId) {
        if (!confirm('Delete this workout? This will also remove exercise progress data for this session.')) return;

        if (!APP_DATA.user.workouts) return;

        const workout = APP_DATA.user.workouts.find(w => w.id === workoutId);
        if (!workout) return;

        const index = APP_DATA.user.workouts.indexOf(workout);
        if (index !== -1) {
            // Remove corresponding exercise progress entries
            if (workout.exercises && APP_DATA.user.exerciseProgress) {
                const workoutDate = workout.date ? new Date(workout.date).toISOString().split('T')[0] : null;

                workout.exercises.forEach(ex => {
                    if (ex.name && APP_DATA.user.exerciseProgress[ex.name]) {
                        // Remove entries that match exercise name, weight, reps, and date
                        APP_DATA.user.exerciseProgress[ex.name] = APP_DATA.user.exerciseProgress[ex.name].filter(p => {
                            const progressDate = new Date(p.date).toISOString().split('T')[0];
                            // Keep if date doesn't match OR weight/reps don't match
                            return progressDate !== workoutDate ||
                                   p.weight !== ex.weight ||
                                   p.reps !== ex.reps;
                        });

                        // Clean up empty arrays
                        if (APP_DATA.user.exerciseProgress[ex.name].length === 0) {
                            delete APP_DATA.user.exerciseProgress[ex.name];
                        }
                    }
                });
            }

            // Remove the workout
            APP_DATA.user.workouts.splice(index, 1);

            // Update stats
            if (APP_DATA.user.workoutStats) {
                APP_DATA.user.workoutStats.totalWorkouts = Math.max(0, (APP_DATA.user.workoutStats.totalWorkouts || 0) - 1);
            }

            saveProgress();

            // Refresh the history view
            this.showWorkoutHistory();
        }
    }

    formatDate(dateStr) {
        if (!dateStr) return 'Unknown date';
        // Parse date string manually to avoid timezone issues
        // Input format: YYYY-MM-DD
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // JS months are 0-indexed
            const day = parseInt(parts[2]);
            const date = new Date(year, month, day); // Creates date in LOCAL timezone
            return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        }
        // Fallback for other formats
        const date = new Date(dateStr + 'T12:00:00');
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    }

    addExerciseRow() {
        const list = document.getElementById('exercise-list');
        if (!list) return;

        // Tracked exercises from strength progress
        const trackedExercises = [
            'Controlled Glute Step Down',
            'Bench Press',
            'Barbell Rows',
            'Overhead Press',
            'Barbell Hip Thrust',
            'Romanian Deadlift',
            'Split Squat (Shallow)'
        ];

        const rowId = this.exerciseRowCount++;
        const row = document.createElement('div');
        row.className = 'exercise-row';
        row.id = `exercise-row-${rowId}`;
        row.innerHTML = `
            <div class="exercise-name-wrapper">
                <select class="fitness-input exercise-select" onchange="window.fitnessTracker.onExerciseSelect(this, ${rowId})">
                    <option value="">Select exercise...</option>
                    <optgroup label="Tracked Exercises">
                        ${trackedExercises.map(ex => `<option value="${ex}">${ex}</option>`).join('')}
                    </optgroup>
                    <optgroup label="Other">
                        <option value="__custom__">+ Custom Exercise</option>
                    </optgroup>
                </select>
                <input type="text" class="fitness-input exercise-name" placeholder="Exercise name" style="display: none;">
            </div>
            <input type="number" class="fitness-input exercise-weight" placeholder="Weight">
            <input type="number" class="fitness-input exercise-reps" placeholder="Reps">
            <input type="number" class="fitness-input exercise-sets" placeholder="Sets">
            <button class="btn-remove" onclick="document.getElementById('exercise-row-${rowId}').remove()">×</button>
        `;
        list.appendChild(row);
    }

    onExerciseSelect(select, rowId) {
        const row = document.getElementById(`exercise-row-${rowId}`);
        if (!row) return;

        const textInput = row.querySelector('.exercise-name');
        if (select.value === '__custom__') {
            // Show text input for custom exercise
            textInput.style.display = 'block';
            textInput.focus();
            textInput.value = '';
        } else {
            // Use selected value
            textInput.style.display = 'none';
            textInput.value = select.value;
        }
    }

    saveLoggedWorkout() {
        try {
            const name = document.getElementById('workout-name')?.value || 'Workout';
            const dateInput = document.getElementById('workout-date')?.value;
            // Use local date format to avoid timezone issues
            const today = new Date();
            const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            const date = dateInput || localDate;
            const duration = parseInt(document.getElementById('workout-duration')?.value) || 45;
            const notes = document.getElementById('workout-notes')?.value || '';

            const exerciseRows = document.querySelectorAll('.exercise-row');
            const exercises = [];

            exerciseRows.forEach(row => {
                // Get exercise name from dropdown or text input
                const select = row.querySelector('.exercise-select');
                const textInput = row.querySelector('.exercise-name');
                let exerciseName = '';

                if (select && select.value && select.value !== '__custom__') {
                    exerciseName = select.value;
                } else if (textInput && textInput.value) {
                    exerciseName = textInput.value;
                }

                const weight = row.querySelector('.exercise-weight')?.value;
                const reps = row.querySelector('.exercise-reps')?.value;
                const sets = row.querySelector('.exercise-sets')?.value;

                if (exerciseName) {
                    exercises.push({ name: exerciseName, weight: parseFloat(weight) || 0, reps: parseInt(reps) || 0, sets: parseInt(sets) || 0 });

                    // Check for PR
                    if (weight) {
                        this.addPersonalRecord(exerciseName, parseFloat(weight), parseInt(reps) || 1, date);
                    }

                    // Add to exerciseProgress for strength graphs
                    if (weight && parseFloat(weight) > 0) {
                        this.addToExerciseProgress(exerciseName, parseFloat(weight), parseInt(reps) || 1, date);
                    }
                }
            });

            const workout = {
                id: Date.now(),
                name,
                date,
                duration,
                exercises,
                notes
            };

            if (!APP_DATA.user.workouts) APP_DATA.user.workouts = [];
            APP_DATA.user.workouts.push(workout);

            // Update stats
            if (!APP_DATA.user.workoutStats) {
                APP_DATA.user.workoutStats = { totalWorkouts: 0, currentStreak: 0, totalMinutes: 0 };
            }
            APP_DATA.user.workoutStats.totalWorkouts++;
            APP_DATA.user.workoutStats.totalMinutes = (APP_DATA.user.workoutStats.totalMinutes || 0) + duration;

            saveProgress();

            // Return to hub
            this.renderWorkoutHub();
        } catch (error) {
            alert('Error saving workout: ' + error.message);
            console.error('Save workout error:', error);
        }
    }

    renderWorkoutCalendar() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const today = now.getDate();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];

        // Get workout dates for this month
        const workouts = APP_DATA.user.workouts || [];
        const workoutDates = workouts
            .filter(w => {
                const d = new Date(w.date);
                return d.getMonth() === month && d.getFullYear() === year;
            })
            .map(w => new Date(w.date).getDate());

        let calendarHTML = `
            <div class="workout-calendar">
                <div class="calendar-header">
                    <span class="calendar-month">${monthNames[month]} ${year}</span>
                </div>
                <div class="calendar-weekdays">
                    <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div class="calendar-days">
        `;

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<span class="calendar-day empty"></span>';
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const hasWorkout = workoutDates.includes(day);
            const isToday = day === today;
            const classes = ['calendar-day'];
            if (hasWorkout) classes.push('has-workout');
            if (isToday) classes.push('today');

            calendarHTML += `<span class="${classes.join(' ')}">${day}${hasWorkout ? '<span class="workout-dot"></span>' : ''}</span>`;
        }

        calendarHTML += `
                </div>
            </div>
        `;

        return calendarHTML;
    }

    renderCompactCalendar() {
        const now = new Date();
        const viewDate = this.calendarDate || now;
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();

        // Today is only highlighted if viewing current month
        const isCurrentMonth = now.getFullYear() === year && now.getMonth() === month;
        const today = isCurrentMonth ? now.getDate() : -1;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Get workout dates for this month
        const workouts = APP_DATA.user.workouts || [];
        const workoutDates = workouts
            .filter(w => {
                const d = new Date(w.date + 'T12:00:00');
                return d.getMonth() === month && d.getFullYear() === year;
            })
            .map(w => new Date(w.date + 'T12:00:00').getDate());

        // Get injection dates for this month
        const injections = this.getInjectionHistory();
        const injectionDates = injections
            .filter(inj => {
                const d = new Date(inj.date + 'T12:00:00');
                return d.getMonth() === month && d.getFullYear() === year;
            })
            .map(inj => new Date(inj.date + 'T12:00:00').getDate());
        // Remove duplicates (multiple injections same day)
        const uniqueInjectionDates = [...new Set(injectionDates)];

        // Count for stats
        const workoutCount = workoutDates.length;
        const injectionCount = uniqueInjectionDates.length;

        let calendarHTML = `
            <div class="compact-calendar">
                <div class="compact-calendar-legend">
                    <span class="legend-item"><span class="legend-dot workout-dot"></span>Workout</span>
                    <span class="legend-item"><span class="legend-dot injection-dot"></span>Injection</span>
                </div>
                <div class="compact-calendar-weekdays">
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div class="compact-calendar-days">
        `;

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<span class="compact-day empty"></span>';
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const hasWorkout = workoutDates.includes(day);
            const hasInjection = uniqueInjectionDates.includes(day);
            const isToday = day === today;
            const isPast = day < today;
            const classes = ['compact-day'];
            if (isToday) classes.push('today');
            if (isPast && !hasWorkout && !hasInjection) classes.push('past');

            // Build dots HTML
            let dotsHTML = '';
            if (hasWorkout || hasInjection) {
                dotsHTML = '<span class="day-dots">';
                if (hasWorkout) dotsHTML += '<span class="dot workout-dot"></span>';
                if (hasInjection) dotsHTML += '<span class="dot injection-dot"></span>';
                dotsHTML += '</span>';
            }

            calendarHTML += `<span class="${classes.join(' ')}">${day}${dotsHTML}</span>`;
        }

        calendarHTML += `
                </div>
                <div class="compact-calendar-stats">
                    <span class="cal-stat"><span class="stat-dot workout-dot"></span><strong>${workoutCount}</strong> workouts</span>
                    <span class="cal-stat"><span class="stat-dot injection-dot"></span><strong>${injectionCount}</strong> injections</span>
                </div>
            </div>
        `;

        return calendarHTML;
    }

    // ============================================
    // WORKOUT PLANS
    // ============================================

    getWorkoutPlans() {
        return [
            {
                id: 'ppl',
                name: 'Push Pull Legs',
                description: '6-day split for muscle building',
                days: [
                    { day: 1, name: 'Push A', focus: 'Chest, Shoulders, Triceps', exercises: [
                        {
                            name: 'Bench Press',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Lie on bench with feet flat on floor. Grip bar slightly wider than shoulder width. Lower bar to mid-chest, press back up.',
                            cues: ['Retract shoulder blades', 'Arch upper back slightly', 'Drive feet into floor', 'Bar path: slight diagonal from chest to over shoulders'],
                            anatomyTip: 'Pectoralis major primary mover, anterior deltoid and triceps assist'
                        },
                        {
                            name: 'Overhead Press',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Start with bar at shoulders. Press straight up, moving head back slightly then forward as bar passes.',
                            cues: ['Brace core tight', 'Squeeze glutes', 'Full lockout at top', 'Elbows slightly in front of bar'],
                            anatomyTip: 'Anterior deltoid primary mover with triceps and upper chest assisting'
                        },
                        {
                            name: 'Incline Dumbbell Press',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Upper Chest',
                            trackProgress: true,
                            instructions: 'Set bench to 30-45 degrees. Press dumbbells up from shoulder level, bringing them together at top.',
                            cues: ['Keep shoulder blades pinched', 'Control the descent', 'Dont let elbows flare past 45°', 'Squeeze chest at top'],
                            anatomyTip: 'Targets clavicular head of pectoralis major'
                        },
                        {
                            name: 'Lateral Raises',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Side Delts',
                            trackProgress: true,
                            instructions: 'Hold dumbbells at sides. Raise arms out to sides until parallel to floor, slight bend in elbows.',
                            cues: ['Lead with elbows, not hands', 'Slight forward lean', 'Control the negative', 'Pinky slightly higher than thumb'],
                            anatomyTip: 'Isolates medial deltoid for shoulder width'
                        },
                        {
                            name: 'Dumbbell Kickbacks',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Hinge forward with one hand on bench. Extend arm straight back, squeezing tricep at top.',
                            cues: ['Upper arm parallel to floor', 'Only forearm moves', 'Squeeze at full extension', 'Slow controlled reps'],
                            anatomyTip: 'Targets all three tricep heads with emphasis on lateral head'
                        },
                        {
                            name: 'Overhead Tricep Extension',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Triceps Long Head',
                            trackProgress: true,
                            instructions: 'Hold dumbbell or rope overhead. Lower behind head by bending elbows, extend back up.',
                            cues: ['Keep elbows pointing forward', 'Full stretch at bottom', 'Dont flare elbows', 'Control throughout'],
                            anatomyTip: 'Stretched position emphasizes long head of triceps'
                        }
                    ]},
                    { day: 2, name: 'Pull A', focus: 'Back, Biceps, Rear Delts', exercises: [
                        {
                            name: 'Deadlift',
                            sets: 4,
                            reps: '5-6',
                            muscle: 'Posterior Chain',
                            trackProgress: true,
                            instructions: 'Stand with feet hip-width, bar over mid-foot. Hinge and grip bar. Drive through floor, keeping bar close to body.',
                            cues: ['Chest up, back flat', 'Push floor away', 'Bar drags up legs', 'Lockout with glutes, not lower back'],
                            anatomyTip: 'Erector spinae, glutes, and hamstrings work together as primary movers'
                        },
                        {
                            name: 'Pull-ups',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'Hang from bar with overhand grip slightly wider than shoulders. Pull up until chin clears bar.',
                            cues: ['Initiate with lats, not arms', 'Drive elbows down and back', 'Chest to bar', 'Control the descent'],
                            anatomyTip: 'Latissimus dorsi primary mover, biceps and rear delts assist'
                        },
                        {
                            name: 'Barbell Rows',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Mid Back',
                            trackProgress: true,
                            instructions: 'Hinge at hips with bar hanging at arms length. Pull bar to lower chest/upper abdomen.',
                            cues: ['Keep back flat, not rounded', 'Lead with elbows', 'Squeeze shoulder blades at top', 'Control the negative'],
                            anatomyTip: 'Rhomboids, mid traps, and lats all activated'
                        },
                        {
                            name: 'Bent Over Reverse Flyes',
                            sets: 3,
                            reps: '15-20',
                            muscle: 'Rear Delts',
                            trackProgress: true,
                            instructions: 'Hinge at hips, arms hanging down. Raise dumbbells out to sides with slight elbow bend.',
                            cues: ['Lead with elbows', 'Squeeze shoulder blades', 'Control the negative', 'Keep back flat'],
                            anatomyTip: 'Targets posterior deltoid and rotator cuff for shoulder health'
                        },
                        {
                            name: 'Barbell Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Stand with bar at thighs. Curl up keeping elbows pinned to sides.',
                            cues: ['No swinging', 'Control the negative', 'Full range of motion', 'Squeeze at top'],
                            anatomyTip: 'Biceps brachii primary mover, brachialis assists'
                        },
                        {
                            name: 'Hammer Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Brachialis',
                            trackProgress: true,
                            instructions: 'Hold dumbbells with neutral grip (palms facing). Curl up keeping wrists neutral throughout.',
                            cues: ['Elbows stay pinned', 'Alternate or together', 'Dont rotate wrists', 'Full extension at bottom'],
                            anatomyTip: 'Targets brachialis and brachioradialis for arm thickness'
                        }
                    ]},
                    { day: 3, name: 'Legs A', focus: 'Quads, Glutes, Calves', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Squats',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Quads/Glutes',
                            trackProgress: true,
                            instructions: 'Bar on upper back, feet shoulder-width. Descend by breaking at hips and knees until thighs parallel.',
                            cues: ['Chest up throughout', 'Knees track over toes', 'Drive through whole foot', 'Brace core hard'],
                            anatomyTip: 'Quadriceps femoris and gluteus maximus primary movers'
                        },
                        {
                            name: 'Romanian Deadlift',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Hold bar at hips. Hinge at hips pushing them back, lowering bar along legs until stretch in hamstrings.',
                            cues: ['Soft knee bend (15-20°)', 'Push hips BACK, not down', 'Bar stays close to legs', 'Feel stretch in hamstrings'],
                            anatomyTip: 'Eccentric loading of hamstrings and glute stretch'
                        },
                        {
                            name: 'Goblet Squats',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Hold dumbbell at chest. Squat deep with elbows between knees at bottom.',
                            cues: ['Elbows push knees out', 'Stay upright', 'Full depth', 'Drive through heels'],
                            anatomyTip: 'Quad-dominant squat variation with natural upright posture'
                        },
                        {
                            name: 'Stability Ball Hamstring Curls',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Lie on back with heels on stability ball. Lift hips and curl ball toward glutes.',
                            cues: ['Keep hips elevated', 'Squeeze hamstrings', 'Control the extension', 'Full curl range'],
                            anatomyTip: 'Knee flexion without weight-bearing stress on joints'
                        },
                        {
                            name: 'Calf Raises',
                            sets: 4,
                            reps: '15-20',
                            muscle: 'Calves',
                            trackProgress: true,
                            instructions: 'Stand on edge of step. Lower heels below platform, then raise up onto toes.',
                            cues: ['Full stretch at bottom', 'Pause at top', 'Straight legs', 'Dont bounce'],
                            anatomyTip: 'Gastrocnemius (upper calf) primary when legs straight'
                        },
                        {
                            name: 'Walking Lunges',
                            sets: 3,
                            reps: '12 each leg',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Step forward into lunge, lower until back knee nearly touches ground, drive through front foot to next step.',
                            cues: ['Torso upright', 'Front knee tracks over toes', 'Push through front heel', 'Control each step'],
                            anatomyTip: 'Dynamic quad work with functional movement pattern'
                        }
                    ]},
                    { day: 4, name: 'Push B', focus: 'Chest, Shoulders, Triceps (Volume)', exercises: [
                        {
                            name: 'Dumbbell Bench Press',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Lie on bench, dumbbells at shoulder level. Press up bringing dumbbells together at top.',
                            cues: ['Greater range of motion than barbell', 'Squeeze chest at top', 'Control the descent', 'Keep shoulders back'],
                            anatomyTip: 'Allows more pec stretch and independent arm movement'
                        },
                        {
                            name: 'Arnold Press',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Start with dumbbells at shoulders, palms facing you. Rotate palms outward as you press overhead.',
                            cues: ['Smooth rotation throughout', 'Full lockout at top', 'Control the negative', 'Dont lean back'],
                            anatomyTip: 'Rotation hits all three delt heads through full range'
                        },
                        {
                            name: 'Dumbbell Flyes',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Lie on bench with dumbbells extended above chest. Lower out to sides with slight elbow bend, then squeeze back together.',
                            cues: ['Arms in wide arc', 'Deep stretch at bottom', 'Squeeze chest at top', 'Control the descent'],
                            anatomyTip: 'Pec stretch and isolation for chest development'
                        },
                        {
                            name: 'Front Raises',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Front Delts',
                            trackProgress: true,
                            instructions: 'Hold dumbbells in front of thighs. Raise arms straight in front to shoulder height.',
                            cues: ['Slight bend in elbows', 'Dont swing', 'Control both directions', 'Alternate or together'],
                            anatomyTip: 'Isolates anterior deltoid'
                        },
                        {
                            name: 'Dips',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Triceps/Chest',
                            trackProgress: true,
                            instructions: 'Support yourself on parallel bars. Lower until upper arms parallel to floor, press back up.',
                            cues: ['Lean forward for chest emphasis', 'Stay upright for tricep emphasis', 'Elbows close for triceps', 'Control the descent'],
                            anatomyTip: 'Compound movement for triceps, chest, and front delts'
                        },
                        {
                            name: 'Skull Crushers',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Lie on bench, bar or dumbbells extended over chest. Lower toward forehead by bending elbows, extend back up.',
                            cues: ['Keep upper arms still', 'Lower to forehead or just behind', 'Full extension at top', 'Dont flare elbows'],
                            anatomyTip: 'Excellent tricep isolation with good stretch'
                        }
                    ]},
                    { day: 5, name: 'Pull B', focus: 'Back, Biceps (Volume)', exercises: [
                        {
                            name: 'Chin-ups',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'Underhand grip shoulder-width apart. Pull up until chin clears bar.',
                            cues: ['Initiate with lats', 'Drive elbows down', 'Chest to bar', 'Full dead hang at bottom'],
                            anatomyTip: 'Underhand grip adds bicep emphasis while working lats'
                        },
                        {
                            name: 'Dumbbell Rows',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Mid Back',
                            trackProgress: true,
                            instructions: 'One hand on bench, row dumbbell to hip. Keep back flat.',
                            cues: ['Pull to hip not shoulder', 'Squeeze shoulder blade', 'Full stretch at bottom', 'Control the negative'],
                            anatomyTip: 'Targets mid back, rhomboids, and lats with unilateral focus'
                        },
                        {
                            name: 'Single Arm Dumbbell Row',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'One hand and knee on bench, row dumbbell to hip with other arm.',
                            cues: ['Pull to hip, not shoulder', 'Rotate torso slightly at top', 'Full stretch at bottom', 'Keep back flat'],
                            anatomyTip: 'Unilateral work addresses imbalances'
                        },
                        {
                            name: 'Reverse Flyes',
                            sets: 3,
                            reps: '15-20',
                            muscle: 'Rear Delts',
                            trackProgress: true,
                            instructions: 'Bent over or on incline bench. Raise dumbbells out to sides with slight elbow bend.',
                            cues: ['Lead with elbows', 'Squeeze rear delts at top', 'Control the negative', 'Dont swing'],
                            anatomyTip: 'Isolates posterior deltoid for balanced shoulders'
                        },
                        {
                            name: 'Concentration Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Sit with elbow braced against inner thigh. Curl dumbbell up squeezing biceps.',
                            cues: ['Elbow stays fixed on thigh', 'Squeeze at top', 'Slow controlled negative', 'Full extension at bottom'],
                            anatomyTip: 'Eliminates momentum for strict bicep isolation and peak contraction'
                        },
                        {
                            name: 'Incline Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Biceps Long Head',
                            trackProgress: true,
                            instructions: 'Sit on incline bench, arms hanging straight down. Curl up while keeping upper arms stationary.',
                            cues: ['Arms stay vertical', 'Deep stretch at bottom', 'Full range of motion', 'Dont swing'],
                            anatomyTip: 'Stretched position emphasizes biceps long head'
                        }
                    ]},
                    { day: 6, name: 'Legs B', focus: 'Hamstrings, Glutes Focus', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Hip Thrusts',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Glutes',
                            trackProgress: true,
                            instructions: 'Upper back on bench, bar across hips with pad. Drive hips up until body forms straight line.',
                            cues: ['Chin tucked (look at wall, not ceiling)', 'Drive through heels', 'Full hip extension at top', 'Squeeze glutes 1 sec at top'],
                            anatomyTip: 'Maximum gluteus maximus activation'
                        },
                        {
                            name: 'Front Squats',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Bar in front rack position on shoulders. Squat keeping torso very upright.',
                            cues: ['Elbows high throughout', 'Knees forward is okay', 'Stay upright', 'Full depth if mobile'],
                            anatomyTip: 'More quad-dominant than back squat, less hip hinge'
                        },
                        {
                            name: 'Good Mornings',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Hamstrings/Lower Back',
                            trackProgress: true,
                            instructions: 'Bar on upper back. Hinge at hips pushing them back, keeping slight knee bend.',
                            cues: ['Back stays flat', 'Push hips back', 'Feel hamstring stretch', 'Dont round lower back'],
                            anatomyTip: 'Strengthens entire posterior chain'
                        },
                        {
                            name: 'Bulgarian Split Squats',
                            sets: 3,
                            reps: '10-12 each',
                            muscle: 'Quads/Glutes',
                            trackProgress: true,
                            instructions: 'Rear foot elevated on bench. Lower until back knee nearly touches floor.',
                            cues: ['Torso stays upright', 'Front knee tracks over toes', 'Push through front heel', 'Balance and control'],
                            anatomyTip: 'Single-leg work with great quad and glute activation'
                        },
                        {
                            name: 'Seated Dumbbell Calf Raises',
                            sets: 4,
                            reps: '15-20',
                            muscle: 'Soleus',
                            trackProgress: true,
                            instructions: 'Sit on bench, dumbbells on knees, balls of feet on raised platform. Raise heels as high as possible.',
                            cues: ['Bent knee targets soleus', 'Full range of motion', 'Pause at top', 'Slow negative'],
                            anatomyTip: 'Bent knee position isolates soleus (lower calf)'
                        },
                        {
                            name: 'Single Leg Calf Raises',
                            sets: 3,
                            reps: '15-20 each',
                            muscle: 'Calves',
                            trackProgress: true,
                            instructions: 'Stand on one leg on step edge. Hold dumbbell in same-side hand. Full range calf raises.',
                            cues: ['Full stretch at bottom', 'Squeeze at top', 'Hold wall for balance', 'Controlled reps'],
                            anatomyTip: 'Unilateral work addresses calf imbalances'
                        }
                    ]}
                ]
            },
            {
                id: 'upper-lower',
                name: 'Upper Lower Split',
                description: '4-day balanced program',
                days: [
                    { day: 1, name: 'Upper A', focus: 'Strength Focus', exercises: [
                        {
                            name: 'Bench Press',
                            sets: 4,
                            reps: '5-6',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Lie on bench with feet flat. Grip bar slightly wider than shoulder width. Lower to mid-chest, press up.',
                            cues: ['Retract shoulder blades', 'Leg drive through floor', 'Touch chest lightly', 'Explosive press'],
                            anatomyTip: 'Heavy compound for pec, delt, and tricep strength'
                        },
                        {
                            name: 'Barbell Rows',
                            sets: 4,
                            reps: '5-6',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'Hinge at hips with bar hanging. Pull bar to lower chest/upper abdomen explosively.',
                            cues: ['Keep back flat', 'Lead with elbows', 'Squeeze at top', 'Control the negative'],
                            anatomyTip: 'Heavy rowing builds thick lats and mid-back'
                        },
                        {
                            name: 'Overhead Press',
                            sets: 3,
                            reps: '6-8',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Start with bar at shoulders. Press straight up with tight core.',
                            cues: ['Brace core hard', 'Full lockout', 'Head through at top', 'No excessive lean back'],
                            anatomyTip: 'Builds strong, functional shoulders'
                        },
                        {
                            name: 'Pull-ups',
                            sets: 3,
                            reps: '6-8',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'Overhand grip slightly wider than shoulders. Pull until chin over bar.',
                            cues: ['Initiate with lats', 'Chest to bar', 'Full dead hang at bottom', 'Add weight when needed'],
                            anatomyTip: 'Fundamental lat and upper back builder'
                        },
                        {
                            name: 'Barbell Curls',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Stand with bar at thighs. Curl up keeping elbows pinned.',
                            cues: ['No swinging', 'Full range of motion', 'Squeeze at top', 'Control down'],
                            anatomyTip: 'Classic bicep mass builder'
                        },
                        {
                            name: 'Tricep Dips',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Support on parallel bars. Lower until upper arms parallel, press up.',
                            cues: ['Stay upright for triceps', 'Elbows close to body', 'Full lockout', 'Control descent'],
                            anatomyTip: 'Heavy compound for tricep mass'
                        }
                    ]},
                    { day: 2, name: 'Lower A', focus: 'Strength Focus', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Squats',
                            sets: 4,
                            reps: '5-6',
                            muscle: 'Quads/Glutes',
                            trackProgress: true,
                            instructions: 'Bar on upper back. Descend until thighs at least parallel.',
                            cues: ['Chest up', 'Knees out', 'Drive through whole foot', 'Brace core hard'],
                            anatomyTip: 'King of leg exercises - builds total lower body'
                        },
                        {
                            name: 'Romanian Deadlift',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Bar at hips. Hinge back keeping bar close to legs until hamstring stretch.',
                            cues: ['Soft knee bend only', 'Push hips BACK', 'Feel the stretch', 'Squeeze glutes at top'],
                            anatomyTip: 'Primary hamstring and glute developer'
                        },
                        {
                            name: 'Goblet Squats',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Hold dumbbell at chest. Squat deep with elbows tracking between knees.',
                            cues: ['Elbows push knees out', 'Stay upright', 'Full depth', 'Drive through heels'],
                            anatomyTip: 'Quad-dominant with natural upright posture'
                        },
                        {
                            name: 'Stability Ball Hamstring Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Lie on back, heels on ball. Lift hips and curl ball toward glutes.',
                            cues: ['Keep hips elevated', 'Squeeze hamstrings', 'Control the extension', 'Full range'],
                            anatomyTip: 'Knee flexion without weight-bearing stress'
                        },
                        {
                            name: 'Calf Raises',
                            sets: 4,
                            reps: '12-15',
                            muscle: 'Calves',
                            trackProgress: true,
                            instructions: 'Stand on step edge. Full range from stretch to peak contraction.',
                            cues: ['Full stretch at bottom', '2 sec pause at top', 'Dont bounce', 'Straight legs'],
                            anatomyTip: 'Higher reps for calf growth'
                        }
                    ]},
                    { day: 3, name: 'Upper B', focus: 'Hypertrophy Focus', exercises: [
                        {
                            name: 'Incline Dumbbell Press',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Upper Chest',
                            trackProgress: true,
                            instructions: 'Bench at 30-45°. Press dumbbells from shoulders, bring together at top.',
                            cues: ['Deep stretch at bottom', 'Squeeze chest at top', 'Control the weight', 'Full range of motion'],
                            anatomyTip: 'Incline targets clavicular pec fibers'
                        },
                        {
                            name: 'Dumbbell Rows',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'One hand on bench, row dumbbell to hip with other arm.',
                            cues: ['Pull to hip, not shoulder', 'Squeeze shoulder blade', 'Full stretch at bottom', 'Keep back flat'],
                            anatomyTip: 'Unilateral rowing for back thickness'
                        },
                        {
                            name: 'Lateral Raises',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Side Delts',
                            trackProgress: true,
                            instructions: 'Raise dumbbells to sides until parallel to floor.',
                            cues: ['Lead with elbows', 'Slight forward lean', 'Control the negative', 'Dont swing'],
                            anatomyTip: 'Isolates medial delt for shoulder width'
                        },
                        {
                            name: 'Pull-ups',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'Overhand grip slightly wider than shoulders. Pull until chin over bar.',
                            cues: ['Initiate with lats', 'Drive elbows down', 'Chest to bar', 'Full dead hang'],
                            anatomyTip: 'Fundamental lat builder for width'
                        },
                        {
                            name: 'Hammer Curls',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Neutral grip curls, palms facing throughout.',
                            cues: ['Elbows pinned', 'Full range of motion', 'Squeeze at top', 'No swinging'],
                            anatomyTip: 'Targets brachialis for arm thickness'
                        },
                        {
                            name: 'Dumbbell Overhead Extensions',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Hold dumbbell overhead with both hands. Lower behind head, extend back up.',
                            cues: ['Elbows stay forward', 'Full stretch at bottom', 'Lock out at top', 'Control throughout'],
                            anatomyTip: 'Stretched position for long head emphasis'
                        }
                    ]},
                    { day: 4, name: 'Lower B', focus: 'Hypertrophy Focus', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Hip Thrusts',
                            sets: 4,
                            reps: '10-12',
                            muscle: 'Glutes',
                            trackProgress: true,
                            instructions: 'Upper back on bench, bar across hips. Drive up to full extension.',
                            cues: ['Chin tucked', 'Drive through heels', 'Squeeze glutes at top', 'Pause 1-2 sec'],
                            anatomyTip: 'Best exercise for glute hypertrophy'
                        },
                        {
                            name: 'Front Squats',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Bar in front rack. Squat deep while staying very upright.',
                            cues: ['Elbows high', 'Knees can go forward', 'Stay upright', 'Full depth'],
                            anatomyTip: 'Quad-dominant squat variation'
                        },
                        {
                            name: 'Good Mornings',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Bar on back, hinge at hips until torso near parallel.',
                            cues: ['Flat back always', 'Soft knees', 'Feel hamstring stretch', 'Hip hinge not squat'],
                            anatomyTip: 'Strengthens entire posterior chain'
                        },
                        {
                            name: 'Reverse Lunges',
                            sets: 3,
                            reps: '12 each leg',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Step backward into lunge, lower until back knee nearly touches floor, drive through front foot.',
                            cues: ['Torso upright', 'Front knee tracks toes', 'Control the step back', 'Push through front heel'],
                            anatomyTip: 'Quad-dominant with balance challenge'
                        },
                        {
                            name: 'Seated Dumbbell Calf Raises',
                            sets: 4,
                            reps: '15-20',
                            muscle: 'Calves',
                            trackProgress: true,
                            instructions: 'Sit on bench, dumbbells on knees, balls of feet elevated. Raise heels as high as possible.',
                            cues: ['Full stretch bottom', 'Squeeze at top', 'Slow negative', 'No bouncing'],
                            anatomyTip: 'Bent knee isolates soleus'
                        }
                    ]}
                ]
            },
            {
                id: 'full-body',
                name: 'Full Body 3x',
                description: 'Efficient 3-day program',
                days: [
                    { day: 1, name: 'Day A', focus: 'Compound Heavy', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Squats',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Legs',
                            trackProgress: true,
                            instructions: 'Bar on upper back, feet shoulder-width. Squat to parallel or below.',
                            cues: ['Chest up', 'Knees track toes', 'Drive through floor', 'Brace core'],
                            anatomyTip: 'Foundational lower body strength'
                        },
                        {
                            name: 'Bench Press',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Grip slightly wider than shoulders. Lower to chest, press up.',
                            cues: ['Shoulder blades back', 'Arch upper back', 'Leg drive', 'Explosive press'],
                            anatomyTip: 'Primary horizontal pushing strength'
                        },
                        {
                            name: 'Barbell Rows',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'Hinge over, pull bar to lower chest/upper abs.',
                            cues: ['Flat back', 'Lead with elbows', 'Squeeze shoulder blades', 'Control down'],
                            anatomyTip: 'Balances pressing with pulling strength'
                        },
                        {
                            name: 'Overhead Press',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Bar at shoulders, press straight overhead.',
                            cues: ['Tight core', 'Full lockout', 'Head through', 'No lean back'],
                            anatomyTip: 'Vertical pressing for shoulder strength'
                        },
                        {
                            name: 'Bicep Curls',
                            sets: 2,
                            reps: '10-12',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Curl bar up with elbows pinned to sides.',
                            cues: ['No swinging', 'Full range', 'Squeeze at top', 'Control down'],
                            anatomyTip: 'Arm finishing work'
                        },
                        {
                            name: 'Dumbbell Skull Crushers',
                            sets: 2,
                            reps: '10-12',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Lie on bench, dumbbells extended. Lower toward forehead, extend back up.',
                            cues: ['Upper arms stay still', 'Full stretch at bottom', 'Lock out at top', 'Control throughout'],
                            anatomyTip: 'Balances bicep work with tricep isolation'
                        }
                    ]},
                    { day: 2, name: 'Day B', focus: 'Compound Medium', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Deadlift',
                            sets: 4,
                            reps: '5-6',
                            muscle: 'Posterior Chain',
                            trackProgress: true,
                            instructions: 'Bar over mid-foot. Hinge to grip, drive through floor keeping bar close.',
                            cues: ['Chest up', 'Push floor away', 'Bar drags up legs', 'Lockout with glutes'],
                            anatomyTip: 'Ultimate posterior chain builder'
                        },
                        {
                            name: 'Incline Press',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Bench at 30-45°, press dumbbells or bar from shoulders.',
                            cues: ['Deep stretch at bottom', 'Squeeze at top', 'Control descent', 'Full range'],
                            anatomyTip: 'Upper chest emphasis'
                        },
                        {
                            name: 'Pull-ups',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'Overhand grip, pull until chin over bar.',
                            cues: ['Initiate with lats', 'Chest to bar', 'Full hang at bottom', 'Control down'],
                            anatomyTip: 'Vertical pulling for lat width'
                        },
                        {
                            name: 'Lunges',
                            sets: 3,
                            reps: '10-12 each',
                            muscle: 'Legs',
                            trackProgress: true,
                            instructions: 'Step forward, lower until back knee nearly touches floor.',
                            cues: ['Torso upright', 'Front knee over ankle', 'Push through front heel', 'Alternate legs'],
                            anatomyTip: 'Unilateral leg strength and balance'
                        },
                        {
                            name: 'Lateral Raises',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Raise dumbbells out to sides until parallel.',
                            cues: ['Lead with elbows', 'Slight forward lean', 'Control both ways', 'No momentum'],
                            anatomyTip: 'Medial delt isolation for width'
                        },
                        {
                            name: 'Bent Over Reverse Flyes',
                            sets: 3,
                            reps: '15-20',
                            muscle: 'Rear Delts',
                            trackProgress: true,
                            instructions: 'Hinge at hips with dumbbells hanging. Raise out to sides with slight elbow bend.',
                            cues: ['Lead with elbows', 'Squeeze shoulder blades', 'Control the negative', 'Keep back flat'],
                            anatomyTip: 'Essential for shoulder balance and health'
                        }
                    ]},
                    { day: 3, name: 'Day C', focus: 'Volume', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'Builds glute strength and control while minimizing knee stress. The slow eccentric phase strengthens glutes eccentrically for knee stability.'
                        },
                        {
                            name: 'Front Squats',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Quads',
                            trackProgress: true,
                            instructions: 'Bar in front rack position. Squat deep staying very upright.',
                            cues: ['Elbows high', 'Stay upright', 'Full depth', 'Drive through heels'],
                            anatomyTip: 'Quad-dominant squat variation'
                        },
                        {
                            name: 'Dumbbell Press',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Flat bench, press dumbbells up bringing together at top.',
                            cues: ['Full range of motion', 'Squeeze chest at top', 'Control descent', 'Deep stretch'],
                            anatomyTip: 'Allows greater range than barbell'
                        },
                        {
                            name: 'Dumbbell Rows',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'One hand on bench, row dumbbell to hip. Keep back flat.',
                            cues: ['Pull to hip', 'Squeeze shoulder blade', 'Full stretch at bottom', 'Control the negative'],
                            anatomyTip: 'Unilateral rowing for back thickness'
                        },
                        {
                            name: 'Romanian Deadlift',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Hamstrings',
                            trackProgress: true,
                            instructions: 'Bar at hips, hinge back feeling hamstring stretch.',
                            cues: ['Soft knees only', 'Push hips BACK', 'Bar close to legs', 'Squeeze glutes at top'],
                            anatomyTip: 'Hamstring and glute builder'
                        },
                        {
                            name: 'Arnold Press',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Start palms facing you, rotate outward as you press overhead.',
                            cues: ['Smooth rotation', 'Full lockout', 'Control negative', 'All delt heads worked'],
                            anatomyTip: 'Rotation hits all three delt heads'
                        },
                        {
                            name: 'Calf Raises',
                            sets: 4,
                            reps: '15-20',
                            muscle: 'Calves',
                            trackProgress: true,
                            instructions: 'Stand on step, full range from stretch to contraction.',
                            cues: ['Deep stretch bottom', 'Pause at top', 'Slow negative', 'Straight legs'],
                            anatomyTip: 'Higher reps for stubborn calves'
                        }
                    ]}
                ]
            },
            {
                id: 'knee-friendly-2x',
                name: 'Knee-Friendly 2x',
                description: '2-day split designed to build strength while protecting knees',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Upper Body', focus: 'Chest, Back, Shoulders, Arms', exercises: [
                        {
                            name: 'Bench Press',
                            sets: 4,
                            reps: '6-8',
                            muscle: 'Chest',
                            trackProgress: true,
                            instructions: 'Lie on bench with feet flat on floor. Grip bar slightly wider than shoulder width. Lower bar to mid-chest, press back up.',
                            cues: ['Retract shoulder blades', 'Arch upper back slightly', 'Drive feet into floor', 'Bar path: slight diagonal from chest to over shoulders']
                        },
                        {
                            name: 'Barbell Rows',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Back',
                            trackProgress: true,
                            instructions: 'Hinge at hips with bar hanging at arms length. Pull bar to lower chest/upper abdomen.',
                            cues: ['Keep back flat, not rounded', 'Lead with elbows', 'Squeeze shoulder blades at top', 'Control the negative']
                        },
                        {
                            name: 'Overhead Press',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Shoulders',
                            trackProgress: true,
                            instructions: 'Start with bar at shoulders. Press straight up, moving head back slightly then forward as bar passes.',
                            cues: ['Brace core tight', 'Squeeze glutes', 'Full lockout at top', 'Elbows slightly in front of bar']
                        },
                        {
                            name: 'Pull-ups',
                            sets: 3,
                            reps: '8-10',
                            muscle: 'Lats',
                            trackProgress: true,
                            instructions: 'Overhand grip slightly wider than shoulders. Pull until chin clears bar.',
                            cues: ['Initiate with lats', 'Drive elbows down', 'Chest to bar', 'Full dead hang at bottom'],
                            anatomyTip: 'Fundamental lat builder without machines'
                        },
                        {
                            name: 'Bent Over Reverse Flyes',
                            sets: 3,
                            reps: '15-20',
                            muscle: 'Rear Delts/Rotator Cuff',
                            trackProgress: true,
                            instructions: 'Hinge at hips with dumbbells hanging. Raise out to sides with slight elbow bend.',
                            cues: ['Lead with elbows', 'Squeeze shoulder blades', 'Control the negative', 'Keep back flat'],
                            anatomyTip: 'Hits rear delts and rotator cuff for shoulder health'
                        },
                        {
                            name: 'Barbell Curls',
                            sets: 3,
                            reps: '10-12',
                            muscle: 'Biceps',
                            trackProgress: true,
                            instructions: 'Stand with bar at thighs. Curl up keeping elbows pinned to sides.',
                            cues: ['No swinging', 'Control the negative', 'Full range of motion', 'Squeeze at top'],
                            anatomyTip: 'Classic compound bicep builder'
                        },
                        {
                            name: 'Dumbbell Kickbacks',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Triceps',
                            trackProgress: true,
                            instructions: 'Hinge forward, upper arm parallel to floor. Extend forearm back, squeezing tricep.',
                            cues: ['Upper arm stays still', 'Full extension at back', 'Squeeze at top', 'Control the negative'],
                            anatomyTip: 'Isolates triceps without cables'
                        }
                    ]},
                    { day: 2, name: 'Lower Body (Knee-Safe)', focus: 'Glutes, Hamstrings, Core', exercises: [
                        {
                            name: 'Controlled Glute Step Down',
                            sets: 3,
                            reps: '8-10 each leg',
                            muscle: 'Glutes/Quads',
                            kneeSafe: true,
                            trackProgress: true,
                            isPrimaryExercise: true,
                            instructions: 'Stand on a step or box (4-8 inches high). With one foot on the edge, slowly lower the opposite foot toward the ground using a controlled 3-5 second descent. Lightly tap the heel to the floor without putting weight on it, then drive back up through the glute of the standing leg.',
                            cues: [
                                'SLOW controlled descent (3-5 seconds)',
                                'Keep standing knee tracking over toes',
                                'Hinge slightly at hips to load glutes',
                                'Drive up through heel, squeeze glute at top',
                                'Minimal knee travel forward - load the GLUTES',
                                'Tap heel lightly, don\'t rest weight on floor',
                                'Keep hips level, don\'t let working hip drop'
                            ],
                            anatomyTip: 'This exercise builds glute strength and control while minimizing knee stress. The slow eccentric (lowering) phase strengthens the glutes eccentrically, which is key for knee stability and reducing quad dominance.'
                        },
                        {
                            name: 'Barbell Hip Thrust',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Upper back on bench, bar across hips with pad. Drive hips up until body forms straight line from shoulders to knees.',
                            cues: ['Chin tucked (look at wall, not ceiling)', 'Drive through heels', 'Full hip extension at top', 'Squeeze glutes hard for 1 second at top'],
                            anatomyTip: 'Maximizes gluteus maximus activation with minimal knee stress'
                        },
                        {
                            name: 'Romanian Deadlift',
                            sets: 4,
                            reps: '8-10',
                            muscle: 'Hamstrings/Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hold bar at hips. Hinge at hips pushing them back, lowering bar along legs until stretch in hamstrings.',
                            cues: ['Soft knee bend (15-20°), NOT a squat', 'Push hips BACK, not down', 'Bar stays close to legs', 'Feel stretch in hamstrings'],
                            anatomyTip: 'Hip-hinge pattern loads hamstrings eccentrically without knee flexion'
                        },
                        {
                            name: 'B-Stance RDL',
                            sets: 3,
                            reps: '10-12 each',
                            muscle: 'Hamstrings/Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'One foot forward (working leg), back foot on toe for balance only. Hinge at hips like regular RDL.',
                            cues: ['80% weight on front leg', 'Back foot is just for balance', 'Same hip hinge as RDL', 'Great unilateral variation'],
                            anatomyTip: 'Adds unilateral challenge without balance demands of single-leg'
                        },
                        {
                            name: 'Split Squat (Shallow)',
                            sets: 3,
                            reps: '10-12 each',
                            muscle: 'Quads/Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Staggered stance, lower until back knee approaches floor. Keep front shin relatively vertical.',
                            cues: ['Vertical torso', 'Front knee tracks over toes', 'Control the descent', 'Push through front heel'],
                            anatomyTip: 'Shallow depth limits knee flexion while building quad and glute strength'
                        },
                        {
                            name: 'Stability Ball Hamstring Curl',
                            sets: 3,
                            reps: '12-15',
                            muscle: 'Hamstrings',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, heels on stability ball. Lift hips, curl ball toward glutes, extend back out.',
                            cues: ['Keep hips elevated throughout', 'Curl heels to glutes', 'Squeeze hamstrings', 'Control the extension'],
                            anatomyTip: 'Knee flexion without weight-bearing stress'
                        },
                        {
                            name: 'Lateral Band Walk',
                            sets: 3,
                            reps: '15 each way',
                            muscle: 'Glute Medius/Hip Abductors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Band above knees. Quarter squat position. Step sideways maintaining tension.',
                            cues: ['Stay low throughout', 'Push knees out against band', 'Control each step', 'Feel it in outer hip'],
                            anatomyTip: 'Strengthens hip abductors for knee stability'
                        },
                        {
                            name: 'Dead Bug',
                            sets: 3,
                            reps: '10 each side',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, arms up, knees at 90°. Extend opposite arm and leg while maintaining flat back.',
                            cues: ['Press low back into floor', 'Move slowly and controlled', 'Breathe out as you extend', 'No arching of low back'],
                            anatomyTip: 'Anti-extension core work with zero knee stress'
                        },
                        {
                            name: 'Bird Dog',
                            sets: 3,
                            reps: '10 each side',
                            muscle: 'Core (Anti-Rotation)',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On hands and knees. Extend opposite arm and leg straight out, hold, return. Alternate sides.',
                            cues: ['Keep back flat like table', 'Brace core tight', 'Move slowly and controlled', 'Hold extended 2 sec'],
                            anatomyTip: 'Anti-rotation core strength with zero knee involvement'
                        }
                    ]}
                ]
            },
            {
                id: 'asian-pilates-3x',
                name: 'Asian Pilates 3x',
                description: '3-day Pilates program blending Eastern flow, breath-led movement, and knee-friendly exercises',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Core Awakening & Spinal Flow', focus: 'Core Activation, Spinal Mobility', exercises: [
                        {
                            name: 'Tai Chi Cloud Hands',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Slow weight shifts side to side, arms float like clouds. Inhale 4s, exhale 6s.',
                            cues: ['Shift weight slowly side to side', 'Arms float like clouds', 'Inhale for 4 seconds', 'Exhale for 6 seconds'],
                            anatomyTip: 'Warms up the whole body through gentle weight transfer and coordinated breathing'
                        },
                        {
                            name: 'Qigong Shaking',
                            sets: 1,
                            reps: '1 min',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Soft bounce through heels, arms loose. Release tension from head to toes.',
                            cues: ['Bounce softly through heels', 'Keep arms completely loose', 'Release tension from head to toes', 'Let jaw and shoulders relax'],
                            anatomyTip: 'Shaking releases fascial tension and increases circulation throughout the body'
                        },
                        {
                            name: 'Cat-Cow (Breath-Led)',
                            sets: 1,
                            reps: '8 cycles',
                            muscle: 'Spine',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Inhale to arch, exhale to round. Move one vertebra at a time. Slow, fluid.',
                            cues: ['Inhale to arch the spine', 'Exhale to round the spine', 'Move one vertebra at a time', 'Keep movement slow and fluid'],
                            anatomyTip: 'Mobilizes the entire spinal column and warms the erectors and deep spinal muscles'
                        },
                        {
                            name: 'Standing Spinal Roll-Down',
                            sets: 1,
                            reps: '4 reps',
                            muscle: 'Spine/Hamstrings',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Chin to chest, peel down one vertebra at a time. Knees soft. Hang and breathe.',
                            cues: ['Start with chin to chest', 'Peel down one vertebra at a time', 'Keep knees soft', 'Hang at the bottom and breathe'],
                            anatomyTip: 'Decompresses the spine and gently lengthens the posterior chain'
                        },
                        {
                            name: 'Modified Hundred (Feet Down)',
                            sets: 3,
                            reps: '50-100 pumps',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Feet flat on floor, knees bent. Arms pump at sides. Exhale for 5 pumps, inhale for 5.',
                            cues: ['Keep lower back pressed into mat', 'Pump arms with control', 'Chin slightly tucked', 'Breathe rhythmically'],
                            anatomyTip: 'Rectus abdominis and transverse abdominis primary movers'
                        },
                        {
                            name: 'Supine Leg Slides',
                            sets: 2,
                            reps: '10/side',
                            muscle: 'Deep Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Slide heel along mat to extend leg. Keep pelvis neutral. Exhale to extend, inhale to return.',
                            cues: ['Maintain neutral pelvis', 'Move slowly with breath', 'Keep ribs down', 'Feel transverse abdominis engage'],
                            anatomyTip: 'Transverse abdominis stabilizes while hip flexors move the leg'
                        },
                        {
                            name: 'Pelvic Curls (Bridge Flow)',
                            sets: 3,
                            reps: '8',
                            muscle: 'Glutes/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Articulate spine up bone by bone. Pause at top, breathe. Roll down slowly. No knee pain.',
                            cues: ['Peel spine off mat one vertebra at a time', 'Squeeze glutes at top', 'Roll down from upper back first', 'Keep knees hip-width apart'],
                            anatomyTip: 'Glutes and hamstrings lift, spinal erectors articulate'
                        },
                        {
                            name: 'Side-Lying Leg Lift (Tai Chi Pace)',
                            sets: 3,
                            reps: '12/side',
                            muscle: 'Hip Abductors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lift on 4-count exhale, lower on 4-count inhale. Imagine moving through water.',
                            cues: ['Stack hips vertically', 'Lead with heel not toe', 'Keep top hip from rolling back', 'Slow controlled movement'],
                            anatomyTip: 'Gluteus medius primary mover for hip stability'
                        },
                        {
                            name: 'Spine Twist Seated',
                            sets: 2,
                            reps: '6/side',
                            muscle: 'Obliques/Spine',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Tall spine, arms wide. Rotate with exhale, grow taller with inhale. No momentum.',
                            cues: ['Initiate rotation from ribcage', 'Keep hips anchored', 'Grow taller as you twist', 'Arms stay in peripheral vision'],
                            anatomyTip: 'Internal and external obliques create rotation while erectors maintain posture'
                        },
                        {
                            name: 'Wall Sit (Qigong Breath)',
                            sets: 3,
                            reps: '20-30s hold',
                            muscle: 'Quads/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Back flat on wall, thighs above 90\u00b0. Breathe into belly 4s in, 6s out. Builds without knee stress.',
                            cues: ['Back flat on wall', 'Thighs ABOVE parallel never below', 'Breathe deeply through the hold', 'Engage core throughout'],
                            anatomyTip: 'Isometric quad engagement with minimal knee shear force'
                        },
                        {
                            name: 'Meridian Side Stretch',
                            sets: 1,
                            reps: '45s/side',
                            muscle: 'Lateral Chain',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Seated, one leg extended. Reach over and breathe into the lengthened side.',
                            cues: ['Breathe into the stretched side', 'Keep both sit bones grounded', 'Reach long not down', 'Relax neck and shoulders'],
                            anatomyTip: 'Lengthens the obliques, intercostals, and lateral fascial line for improved lateral mobility'
                        },
                        {
                            name: 'Reclined Spinal Twist',
                            sets: 1,
                            reps: '1 min/side',
                            muscle: 'Spine/Hip',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Knees stacked, arms out in T. Let gravity do the work. Exhale to release deeper.',
                            cues: ['Let gravity do the work', 'Breathe out to deepen', 'Keep both shoulders on mat', 'Relax completely'],
                            anatomyTip: 'Releases tension in spinal rotators and opens the chest and hip complex'
                        },
                        {
                            name: 'Shavasana with Body Scan',
                            sets: 1,
                            reps: '3 min',
                            muscle: 'Recovery',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Scan from crown to toes. Breathe awareness into each body part, then release.',
                            cues: ['Progressive relaxation head to toe', 'Natural breathing', 'Release all muscular tension', 'Set intention for the day'],
                            anatomyTip: 'Activates the parasympathetic nervous system for recovery and stress reduction'
                        }
                    ]},
                    { day: 2, name: 'Hip Stability & Lateral Strength', focus: 'Hip Mobility, Lateral Chain, Rotational Control', exercises: [
                        {
                            name: 'Qigong Arm Circles',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Shoulders/Chest',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Slow, wide circles coordinated with breath. Open the chest, soften the shoulders.',
                            cues: ['Coordinate circles with breath', 'Open the chest on each circle', 'Soften the shoulders', 'Keep movement slow and wide'],
                            anatomyTip: 'Warms the shoulder girdle and opens the pectoral fascia for improved upper body mobility'
                        },
                        {
                            name: 'Standing Figure-8 Hips',
                            sets: 1,
                            reps: '1 min',
                            muscle: 'Hips/Low Back',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Draw figure-8s with hips. Unlock the sacrum and low back. Gentle, flowing.',
                            cues: ['Draw smooth figure-8 patterns', 'Keep movement gentle and flowing', 'Unlock the sacrum area', 'Let low back relax'],
                            anatomyTip: 'Mobilizes the sacroiliac joint and lumbar spine through multi-planar hip movement'
                        },
                        {
                            name: 'Thread the Needle',
                            sets: 2,
                            reps: '6/side',
                            muscle: 'Thoracic Spine',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, reach one arm under and through. Follow with eyes. Exhale to deepen.',
                            cues: ['Reach arm under and through', 'Follow hand with your eyes', 'Exhale to deepen the rotation', 'Keep hips stacked over knees'],
                            anatomyTip: 'Opens thoracic rotation and stretches the rhomboids and rear deltoids'
                        },
                        {
                            name: 'Kneeling Hip Flexor Stretch',
                            sets: 1,
                            reps: '30s/side',
                            muscle: 'Hip Flexors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Pad the down knee well. Tuck pelvis, lean gently forward. Counter desk posture.',
                            cues: ['Pad the down knee well', 'Tuck pelvis under', 'Lean gently forward', 'Counter desk posture tightness'],
                            anatomyTip: 'Lengthens the iliopsoas and rectus femoris to restore hip extension range'
                        },
                        {
                            name: 'Pilates Roll-Up (Modified)',
                            sets: 3,
                            reps: '6',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Use a towel behind thighs if needed. Articulate C-curve. Exhale up, inhale down.',
                            cues: ['Use towel for assistance if needed', 'Articulate through C-curve', 'Exhale on the way up', 'Control the descent dont just fall'],
                            anatomyTip: 'Rectus abdominis and hip flexors with spinal flexion control'
                        },
                        {
                            name: 'Clam Shells',
                            sets: 3,
                            reps: '15/side',
                            muscle: 'Hip Rotators',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Heels together, open top knee. Keep pelvis stacked. Slow and controlled, no rocking.',
                            cues: ['Keep heels together', 'Dont let pelvis rock back', 'Slow controlled movement', 'Feel it in outer hip'],
                            anatomyTip: 'External hip rotators and gluteus medius for hip stability'
                        },
                        {
                            name: 'Dead Bug (Alternating)',
                            sets: 3,
                            reps: '8/side',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Press low back into mat. Extend opposite arm/leg on exhale. Return on inhale.',
                            cues: ['Press low back into mat', 'Exhale as you extend', 'Move slowly', 'Dont let back arch'],
                            anatomyTip: 'Deep core stabilizers maintain neutral spine under limb movement'
                        },
                        {
                            name: 'Single Leg Circle (Small)',
                            sets: 2,
                            reps: '8/direction/leg',
                            muscle: 'Hip/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Bottom leg bent for support. Small circles, core stays still. Trace a teacup saucer.',
                            cues: ['Keep circles small and controlled', 'Core stays completely still', 'Bottom leg bent for support', 'Circle both directions'],
                            anatomyTip: 'Hip flexors and adductors move while core stabilizes pelvis'
                        },
                        {
                            name: 'Bird Dog (Tai Chi Tempo)',
                            sets: 3,
                            reps: '8/side',
                            muscle: 'Core/Posterior Chain',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: '4-count to extend, 4-count to return. Imagine balancing a cup of tea on your low back.',
                            cues: ['Move on 4-count tempo', 'Keep back flat like a table', 'Reach long through fingers and toes', 'Dont let hips shift'],
                            anatomyTip: 'Anti-rotation core stability with spinal erector and glute activation'
                        },
                        {
                            name: 'Supported Side Plank (Knee Down)',
                            sets: 3,
                            reps: '15-20s/side',
                            muscle: 'Obliques',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Bottom knee on mat. Stack hips, lift through oblique. Breathe. Build to 30s over weeks.',
                            cues: ['Bottom knee on mat for support', 'Stack hips vertically', 'Lift through oblique not shoulder', 'Breathe through the hold'],
                            anatomyTip: 'Obliques and quadratus lumborum for lateral core stability'
                        },
                        {
                            name: 'Seated Forward Fold (Yin Style)',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Posterior Chain',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Soft knees. Drape forward and breathe. No forcing. Target fascial release.',
                            cues: ['Keep knees soft', 'Drape forward without forcing', 'Breathe into the stretch', 'Target fascial release not muscle stretch'],
                            anatomyTip: 'Releases the posterior fascial chain including hamstrings, erectors, and thoracolumbar fascia'
                        },
                        {
                            name: 'Supine Butterfly',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Hip Adductors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Soles of feet together, knees fall open. Hands on belly. Breathe into the hip opening.',
                            cues: ['Soles of feet together', 'Let knees fall open naturally', 'Hands on belly for breath awareness', 'Breathe into the hip opening'],
                            anatomyTip: 'Passively lengthens the adductors and opens the hip joint capsule'
                        },
                        {
                            name: '3-Part Breath (Qigong Close)',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Diaphragm/Recovery',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Inhale into belly, ribs, then chest. Exhale chest, ribs, belly. 5 full cycles.',
                            cues: ['Inhale belly then ribs then chest', 'Exhale chest then ribs then belly', 'Complete 5 full cycles', 'Make each breath slow and complete'],
                            anatomyTip: 'Trains diaphragmatic breathing and activates the parasympathetic nervous system for recovery'
                        }
                    ]},
                    { day: 3, name: 'Full-Body Integration & Balance', focus: 'Full Body Connection, Posterior Chain, Balance', exercises: [
                        {
                            name: 'Tai Chi Waving Hands',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Step and shift weight forward/back. Arms flow with the step. Meditative pace.',
                            cues: ['Step and shift weight with control', 'Arms flow naturally with steps', 'Maintain meditative pace', 'Coordinate breath with movement'],
                            anatomyTip: 'Full-body coordination drill that warms joints and improves proprioception'
                        },
                        {
                            name: 'Standing Knee Circles',
                            sets: 1,
                            reps: '30s/direction',
                            muscle: 'Knees/Joints',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Feet together, hands on knees, gentle circles. Warms synovial fluid in knees.',
                            cues: ['Feet together hands on knees', 'Gentle circles only', 'Warms synovial fluid', 'Circle both directions'],
                            anatomyTip: 'Stimulates synovial fluid production in the knee joint for lubrication and protection'
                        },
                        {
                            name: 'Pelvic Clocks',
                            sets: 1,
                            reps: '8 full circles',
                            muscle: 'Core/Pelvis',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Supine, knees bent. Rock pelvis through 12, 3, 6, 9 o\'clock. Find and release tension.',
                            cues: ['Rock pelvis through all clock positions', 'Find areas of tension', 'Release tension with breath', 'Keep movement smooth and continuous'],
                            anatomyTip: 'Mobilizes the lumbopelvic complex and builds awareness of pelvic positioning'
                        },
                        {
                            name: 'Ankle/Wrist Circles',
                            sets: 1,
                            reps: '10/direction each',
                            muscle: 'Joints',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Mobilize all small joints. Slow, deliberate circles.',
                            cues: ['Slow deliberate circles', 'Mobilize ankles and wrists', 'Circle both directions', 'Full range of motion'],
                            anatomyTip: 'Warms small joint structures and increases synovial fluid for injury prevention'
                        },
                        {
                            name: 'Toe Taps (Supine)',
                            sets: 3,
                            reps: '12/side',
                            muscle: 'Deep Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Tabletop legs, alternate lowering one toe to mat. Exhale to lower, inhale to lift. Core stays braced.',
                            cues: ['Maintain tabletop position', 'Lower one toe at a time', 'Exhale as you lower', 'Keep low back pressed into mat'],
                            anatomyTip: 'Transverse abdominis maintains pelvic stability while hip flexors control leg movement'
                        },
                        {
                            name: 'Glute Bridge March',
                            sets: 3,
                            reps: '8/side',
                            muscle: 'Glutes/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hold bridge, lift one foot 1 inch off mat. Alternate. Pelvis stays level, no rocking.',
                            cues: ['Keep hips level throughout', 'Lift foot only 1 inch', 'Alternate with control', 'Squeeze glutes to maintain bridge'],
                            anatomyTip: 'Glutes maintain bridge while anti-rotation core prevents hip drop'
                        },
                        {
                            name: 'Prone Back Extension (Cobra)',
                            sets: 3,
                            reps: '8',
                            muscle: 'Spinal Erectors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hands by ribs, peel chest up on inhale. Look forward, not up. Lower with control.',
                            cues: ['Peel up from chest not chin', 'Look forward not up', 'Use back muscles not hands', 'Lower with control'],
                            anatomyTip: 'Spinal erectors extend spine while glutes provide pelvic stability'
                        },
                        {
                            name: 'Standing Calf Raises (Wall Support)',
                            sets: 3,
                            reps: '15',
                            muscle: 'Calves',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Slow 3-count up, 3-count down. Full range. Supports knee stability from below.',
                            cues: ['Slow 3-count up and down', 'Full range of motion', 'Use wall for light balance', 'Squeeze at top'],
                            anatomyTip: 'Gastrocnemius and soleus strengthen to support knee stability from below'
                        },
                        {
                            name: 'Quadruped Hip Circles',
                            sets: 2,
                            reps: '8/direction/side',
                            muscle: 'Hip Complex',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Draw circles with knee. Opens hip joint, builds stability. Keep core engaged.',
                            cues: ['Draw smooth circles with knee', 'Keep core braced', 'Explore full range', 'Both directions'],
                            anatomyTip: 'All hip rotators and stabilizers work through full range of motion'
                        },
                        {
                            name: 'Pilates Swimming (Modified)',
                            sets: 3,
                            reps: '30s',
                            muscle: 'Posterior Chain',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Prone, lift opposite arm/leg 2 inches. Alternate slowly. Breathe naturally. Keep neck neutral.',
                            cues: ['Lift only 2 inches', 'Alternate slowly', 'Keep neck neutral', 'Breathe naturally'],
                            anatomyTip: 'Full posterior chain activation - erectors, glutes, rhomboids, rear deltoids'
                        },
                        {
                            name: 'Child\'s Pose (Wide Knee)',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Back/Hips',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Knees wide, big toes touching. Walk hands forward. Breathe into low back and hips.',
                            cues: ['Knees wide big toes touching', 'Walk hands forward', 'Breathe into low back', 'Relax completely into the pose'],
                            anatomyTip: 'Decompresses the lumbar spine and gently opens the hips and adductors'
                        },
                        {
                            name: 'Figure-4 Stretch (Supine)',
                            sets: 1,
                            reps: '1 min/side',
                            muscle: 'Glutes/Hip Rotators',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Cross ankle over opposite knee. Gently pull thigh toward chest. Protect the knee.',
                            cues: ['Cross ankle over opposite knee', 'Gently pull thigh toward chest', 'Protect the knee joint', 'Breathe into the stretch'],
                            anatomyTip: 'Stretches the piriformis and deep external hip rotators to relieve hip tightness'
                        },
                        {
                            name: 'Legs Up the Wall',
                            sets: 1,
                            reps: '3 min',
                            muscle: 'Recovery/Circulation',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Scoot hips to wall, legs vertical. Eyes closed. Calms the nervous system. Breathe deeply.',
                            cues: ['Scoot hips close to wall', 'Legs vertical and relaxed', 'Eyes closed', 'Breathe deeply and slowly'],
                            anatomyTip: 'Inverted position promotes venous return and activates the parasympathetic nervous system'
                        },
                        {
                            name: 'Closing Meditation',
                            sets: 1,
                            reps: '2 min',
                            muscle: 'Recovery',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Seated or supine. Set an intention for the day. Acknowledge your body\'s effort with gratitude.',
                            cues: ['Find a comfortable position', 'Set an intention for the day', 'Acknowledge your effort with gratitude', 'Carry this calm into your day'],
                            anatomyTip: 'Mindful closure activates the parasympathetic system and reinforces the mind-body connection'
                        }
                    ]}
                ]
            },
            {
                id: 'military-pelvic-4x',
                name: 'Military Calisthenics & Pelvic Pilates',
                description: '4-day program combining military bodyweight conditioning with pelvic floor pilates and hip mobility',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Military Upper Body + Pelvic Power', focus: 'Upper Body Strength, Pelvic Floor', exercises: [
                        {
                            name: 'Tempo Push-Ups (3 down, 1 up)',
                            sets: 3,
                            reps: '10',
                            muscle: 'Chest/Triceps',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lower slowly for 3 counts, push up explosively in 1 count. Hands slightly wider than shoulder width.',
                            cues: ['3-second controlled descent', 'Explosive push up in 1 count', 'Core tight throughout', 'Full range of motion'],
                            anatomyTip: 'Tempo creates more time under tension for pectoralis major, anterior deltoid, and triceps'
                        },
                        {
                            name: 'Decline Push-Ups (feet elevated)',
                            sets: 3,
                            reps: '8',
                            muscle: 'Upper Chest/Shoulders',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Place feet on chair or bench. Hands on floor slightly wider than shoulders. Lower chest to floor, push back up.',
                            cues: ['Feet elevated on bench or chair', 'Core stays rigid no sagging', 'Lower chest to floor', 'Emphasizes upper chest and shoulders'],
                            anatomyTip: 'Elevation shifts load to upper pectoralis major and anterior deltoids'
                        },
                        {
                            name: 'Plank Up-Downs',
                            sets: 3,
                            reps: '10 total',
                            muscle: 'Core/Shoulders',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Start in forearm plank. Press up to high plank one arm at a time, then lower back down. Alternate leading arm.',
                            cues: ['Minimize hip rotation', 'Alternate leading arm each rep', 'Keep core braced', 'Controlled tempo'],
                            anatomyTip: 'Anti-rotation core challenge with tricep and shoulder endurance'
                        },
                        {
                            name: 'Reverse Snow Angels',
                            sets: 3,
                            reps: '12',
                            muscle: 'Upper Back/Rear Delts',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie face down, arms at sides. Lift arms and sweep them overhead in an arc while keeping them off the ground. Return to sides.',
                            cues: ['Lift chest slightly off ground', 'Arms stay elevated throughout arc', 'Squeeze shoulder blades at bottom', 'Slow controlled movement'],
                            anatomyTip: 'Rhomboids, lower traps, and rear deltoids work through full range for posture'
                        },
                        {
                            name: 'Tricep Dips with Leg Extension',
                            sets: 3,
                            reps: '12',
                            muscle: 'Triceps',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hands on bench behind you. Extend one leg straight as you lower body by bending elbows to 90 degrees. Push back up. Alternate legs.',
                            cues: ['Elbows point straight back', 'Lower to 90 degree elbow bend', 'Extend opposite leg at bottom', 'Push through palms'],
                            anatomyTip: 'All three tricep heads activated with added core challenge from leg extension'
                        },
                        {
                            name: 'Pike Push-Ups',
                            sets: 3,
                            reps: '10',
                            muscle: 'Shoulders/Triceps',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Start in downward dog position, hands shoulder-width. Bend elbows to lower head toward floor. Press back up.',
                            cues: ['Hips stay high throughout', 'Head moves toward floor between hands', 'Elbows track at 45 degrees', 'Full lockout at top'],
                            anatomyTip: 'Simulates overhead press - anterior deltoids primary with triceps assisting'
                        },
                        {
                            name: 'Commando Plank Hold',
                            sets: 3,
                            reps: '30s',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hold high plank position with perfect form. Maintain tight core, squeezed glutes, and steady breathing throughout.',
                            cues: ['Body straight from head to heels', 'Squeeze glutes hard', 'Breathe steadily dont hold breath', 'Engage every muscle'],
                            anatomyTip: 'Isometric core endurance training for all abdominal muscles'
                        },
                        {
                            name: 'Marching Bridge with Kegel Coordination',
                            sets: 3,
                            reps: '12 each leg',
                            muscle: 'Glutes/Pelvic Floor',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hold bridge position. March by lifting one foot slightly off ground. Engage pelvic floor on each lift. Lower with control.',
                            cues: ['Keep hips level no rocking', 'Engage pelvic floor on each march', 'Lift foot only 1-2 inches', 'Maintain bridge height throughout'],
                            anatomyTip: 'Glute bridge targets glutes while marching adds anti-rotation and pelvic floor coordination'
                        },
                        {
                            name: 'Resistance Band Adductor Squeeze',
                            sets: 3,
                            reps: '20 pulses',
                            muscle: 'Inner Thighs/Pelvic Floor',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on your back with knees bent and feet flat on the floor. Place a pillow, yoga block, or small ball between your knees. Squeeze your knees together against the object using your inner thighs — don\'t use full force, aim for about 70% effort. Hold each squeeze for one second, then release slightly (don\'t fully let go). That\'s one pulse. As you squeeze, exhale and gently engage your pelvic floor (like you\'re stopping the flow of urine). Release both on the inhale.',
                            cues: ['Squeeze knees together against the pillow or block', 'Exhale and engage pelvic floor on each squeeze', 'Release slightly between pulses — don\'t fully let go', 'Keep feet flat and low back pressed into the mat'],
                            anatomyTip: 'Adductors work synergistically with pelvic floor muscles'
                        },
                        {
                            name: 'Fire Hydrant with Kegel Hold',
                            sets: 3,
                            reps: '10 each side',
                            muscle: 'Hip Abductors/Pelvic Floor',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, lift knee out to side. Hold at top for 3 seconds while engaging pelvic floor. Lower with control.',
                            cues: ['Hold kegel for 3 seconds at top', 'Keep hips level', 'Core braced throughout', 'Slow controlled reps'],
                            anatomyTip: 'Gluteus medius for hip stability combined with pelvic floor strengthening'
                        }
                    ]},
                    { day: 2, name: 'Sensual Flow + Deep Hip Work', focus: 'Hip Mobility, Flow Movement, Pelvic Strength', exercises: [
                        {
                            name: 'Hip Circles on All Fours with Band',
                            sets: 3,
                            reps: '12 each direction',
                            muscle: 'Hip Complex',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Place a resistance band just above both knees and get on all fours (hands under shoulders, knees under hips). Keeping your right knee bent at 90 degrees, lift it out to the side and slowly draw a circle with your knee — forward, up and out, back, then down to start. The band will resist the outward part of the circle. Do 12 circles in one direction, then reverse the circle for 12 more. Switch to the left leg and repeat.',
                            cues: ['Keep knee bent at 90 degrees the entire time', 'Circle should be slow and controlled, not swinging', 'Core stays tight — dont let your hips rock or sag', 'Reverse direction after 12 to hit all the rotators'],
                            anatomyTip: 'All hip rotators strengthened through full range with added resistance from the band'
                        },
                        {
                            name: 'Thread the Needle to Hip Circle',
                            sets: 3,
                            reps: '8 each side',
                            muscle: 'Thoracic Spine/Hips',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Start on all fours (hands under shoulders, knees under hips). Take your right arm and slide it under your left arm along the floor, rotating your upper body until your right shoulder and ear rest on the mat. Hold for a breath, then push back up to all fours. Now do a hip circle: keeping your right knee bent at 90 degrees, lift it out to the side like a fire hydrant and draw a big circle — forward, up, back, and down. That is one rep. Do all reps on one side, then switch.',
                            cues: ['Thread arm under opposite arm until shoulder touches mat', 'Let your gaze follow your moving hand the whole time', 'Hip circle: knee stays bent at 90, draw a full circle in the air', 'One thread + one hip circle = one rep, then repeat same side'],
                            anatomyTip: 'Thoracic rotation combined with hip mobility for integrated movement'
                        },
                        {
                            name: 'Supine Hip Circles with Legs Extended',
                            sets: 3,
                            reps: '10 each direction',
                            muscle: 'Hip Flexors/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, one leg extended to ceiling. Draw circles with extended leg while keeping pelvis stable.',
                            cues: ['Keep pelvis stable', 'Smooth controlled circles', 'Press low back into mat', 'Both directions'],
                            anatomyTip: 'Hip flexors and adductors work through range while core stabilizes'
                        },
                        {
                            name: 'Elevated Frog Pumps (feet on block)',
                            sets: 3,
                            reps: '15',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, soles of feet together on yoga block, knees wide. Lift hips by squeezing glutes. Lower with control.',
                            cues: ['Soles of feet together', 'Keep knees wide open', 'Squeeze glutes at top', 'Elevation increases range'],
                            anatomyTip: 'Glute max activation maximized with external rotation and elevated range'
                        },
                        {
                            name: 'Standing Hip Isolations',
                            sets: 3,
                            reps: '15 each direction',
                            muscle: 'Hip Complex',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Stand tall, circle hips in smooth controlled motion. Isolate hip movement from upper body. Large fluid circles.',
                            cues: ['Upper body stays still', 'Large controlled circles', 'Both directions', 'Activate through full range'],
                            anatomyTip: 'All hip rotators and stabilizers work through controlled range for joint health'
                        },
                        {
                            name: 'Side-Lying Adductor Lifts',
                            sets: 3,
                            reps: '15 each leg',
                            muscle: 'Inner Thighs',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on side, top leg crossed over in front. Lift bottom leg up, squeezing inner thigh. Lower with control.',
                            cues: ['Lift from inner thigh not momentum', 'Top leg crosses over for stability', 'Control the descent', 'Keep body stacked'],
                            anatomyTip: 'Adductors isolated through concentric and eccentric phases'
                        },
                        {
                            name: 'Kneeling Hip Hinges with Pelvic Tilt',
                            sets: 3,
                            reps: '12',
                            muscle: 'Glutes/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Kneel upright. Hinge back slightly by tipping pelvis, then thrust forward to upright. Controlled fluid movement.',
                            cues: ['Engage glutes on thrust forward', 'Controlled hinge back', 'Pelvic tilt coordinates with movement', 'Keep core braced'],
                            anatomyTip: 'Glute activation through hip extension with pelvic floor coordination'
                        },
                        {
                            name: 'Snake Flow (prone spinal wave)',
                            sets: 3,
                            reps: '8',
                            muscle: 'Full Spine',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie face down. Initiate a wave-like motion from pelvis through spine to head and back. Fluid undulating movement.',
                            cues: ['Start movement from pelvis', 'Wave flows through each vertebra', 'Fluid continuous motion', 'Breathe naturally'],
                            anatomyTip: 'Sequential spinal erector activation through full range for spinal mobility'
                        },
                        {
                            name: '90-90 Hip Stretch with Active Lift',
                            sets: 3,
                            reps: '8 lifts each position',
                            muscle: 'Hip Rotators',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Sit with both legs at 90 degrees. Actively lift back knee off floor. Hold 2 seconds. Lower with control. Switch sides.',
                            cues: ['Both legs at 90 degree angles', 'Lift back knee actively', 'Hold 2 seconds at top', 'Switch sides for both rotations'],
                            anatomyTip: 'Internal and external hip rotators strengthened through active mobility'
                        },
                        {
                            name: 'Frog Stretch with Pulses',
                            sets: 1,
                            reps: '90s + 15 pulses',
                            muscle: 'Hip Adductors',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, spread knees wide, feet turned out. Rock hips back toward heels. Add small pulses at end range.',
                            cues: ['Spread knees as wide as comfortable', 'Rock back gently', 'Small pulses at end range', 'Breathe through the stretch'],
                            anatomyTip: 'Deep adductor and hip flexor stretch for improved pelvic mobility'
                        }
                    ]},
                    { day: 3, name: 'Military Core + Glute Strength', focus: 'Core Power, Glute Building', exercises: [
                        {
                            name: 'Plank Hold',
                            sets: 3,
                            reps: '45s',
                            muscle: 'Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Hold perfect high plank. Body straight from head to heels. Squeeze everything. Breathe steadily.',
                            cues: ['Body straight head to heels', 'Squeeze glutes and core', 'Breathe steadily', 'Dont let hips sag'],
                            anatomyTip: 'Isometric endurance for transverse abdominis, rectus abdominis, and obliques'
                        },
                        {
                            name: 'Dead Bug Progression (slow tempo)',
                            sets: 3,
                            reps: '12 each side',
                            muscle: 'Deep Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, arms up, legs in tabletop. Slowly extend opposite arm and leg. Slower tempo than standard dead bug.',
                            cues: ['Ultra slow controlled tempo', 'Press low back into mat', 'Exhale on extension', 'Full return before switching'],
                            anatomyTip: 'Slow tempo increases time under tension for deep stabilizers'
                        },
                        {
                            name: 'Side Plank Thread the Needle',
                            sets: 3,
                            reps: '8 each side',
                            muscle: 'Obliques',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'From side plank on forearm, reach top arm under body in rotation. Return to start with arm extended to ceiling.',
                            cues: ['Rotate from thoracic spine', 'Keep hips stacked and elevated', 'Reach under with control', 'Return to full extension'],
                            anatomyTip: 'Obliques maintain side plank while thoracic rotators create movement'
                        },
                        {
                            name: 'Bicycle Crunches',
                            sets: 3,
                            reps: '20 total',
                            muscle: 'Core/Obliques',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, hands behind head. Bring opposite elbow toward opposite knee. Rotate through trunk.',
                            cues: ['Rotate from ribcage not elbows', 'Fully extend the straight leg', 'Control dont rush', 'Exhale on each rotation'],
                            anatomyTip: 'Obliques create rotation while rectus abdominis assists flexion'
                        },
                        {
                            name: 'Bear Hold',
                            sets: 3,
                            reps: '20s',
                            muscle: 'Core/Shoulders',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, lift knees 1 inch off ground. Hold. Maintain flat back and steady breathing throughout.',
                            cues: ['Knees hover just 1 inch', 'Back stays perfectly flat', 'Breathe steadily', 'Push ground away with hands'],
                            anatomyTip: 'Anti-extension core endurance with scapular stabilizer activation'
                        },
                        {
                            name: 'Toe Taps (lying)',
                            sets: 3,
                            reps: '20 total',
                            muscle: 'Lower Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie on back, legs in tabletop. Alternate lowering one toe to touch mat. Return to tabletop. Keep low back pressed down.',
                            cues: ['Maintain tabletop between taps', 'Low back stays pressed down', 'Exhale as you lower', 'Controlled alternating rhythm'],
                            anatomyTip: 'Lower fibers of rectus abdominis and transverse abdominis control pelvic stability'
                        },
                        {
                            name: 'Banded Hip Thrust',
                            sets: 4,
                            reps: '15',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Upper back on bench or couch, band above knees. Drive hips up until body forms straight line. Squeeze glutes hard at top. Lower with control.',
                            cues: ['Push knees out against band', 'Full hip extension at top', 'Chin tucked look at wall', '2-second squeeze at top'],
                            anatomyTip: 'Gluteus maximus primary mover with band forcing medius activation'
                        },
                        {
                            name: 'Banded Clamshell with Lift',
                            sets: 3,
                            reps: '15 each side',
                            muscle: 'Hip Rotators',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Side-lying, band above knees, heels together. Open knee against band resistance. At top, lift both feet off mat slightly. Lower.',
                            cues: ['Open knee against band', 'Lift both feet at top', 'Keep pelvis stacked', 'Slow controlled movement'],
                            anatomyTip: 'Gluteus medius and external hip rotators with added stability challenge'
                        },
                        {
                            name: 'Donkey Kicks with Band',
                            sets: 3,
                            reps: '15 each leg',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, band above knees. Drive one heel toward ceiling, keeping knee at 90 degrees. Squeeze glute at top. Lower with control.',
                            cues: ['Keep knee at 90 degrees', 'Drive heel toward ceiling', 'Squeeze glute at top', 'Dont arch lower back'],
                            anatomyTip: 'Gluteus maximus isolated through hip extension with band resistance'
                        },
                        {
                            name: 'Single Leg RDL (no weight, wall support)',
                            sets: 3,
                            reps: '10 each leg',
                            muscle: 'Hamstrings/Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Stand on one leg near wall for balance. Hinge forward at hip, reaching back leg behind you. Feel hamstring stretch. Return to standing.',
                            cues: ['Use wall for light balance', 'Hinge from hip not low back', 'Back leg reaches straight behind', 'Soft bend in standing knee'],
                            anatomyTip: 'Hamstring and glute eccentric strength with unilateral balance challenge'
                        }
                    ]},
                    { day: 4, name: 'Full Body Integration + Power Flow', focus: 'Full Body Circuit, Pelvic Power, Flow', exercises: [
                        {
                            name: 'Push-Up to Side Plank',
                            sets: 3,
                            reps: '5 each side',
                            muscle: 'Chest/Core/Obliques',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Perform a push-up, then rotate to side plank with top arm extended. Return to push-up position. Alternate sides.',
                            cues: ['Full push-up before rotation', 'Stack feet in side plank', 'Extend top arm to ceiling', 'Alternate sides each rep'],
                            anatomyTip: 'Full push-up chain plus oblique and rotator activation'
                        },
                        {
                            name: 'Hip Thrust with Band',
                            sets: 4,
                            reps: '15',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Upper back on bench, band above knees. Drive hips to full extension. Push knees out against band. Squeeze 2 seconds at top.',
                            cues: ['Push knees out against band', 'Full extension at top', '2-second squeeze', 'Control the descent'],
                            anatomyTip: 'Maximum glute activation with abductor engagement from band'
                        },
                        {
                            name: 'Reverse Lunge to Knee Drive (step-back only)',
                            sets: 3,
                            reps: '8 each leg',
                            muscle: 'Glutes/Quads',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Step back into shallow lunge, then drive knee forward and up as you return. Dont go deep, keep front knee safe.',
                            cues: ['Shallow lunge only', 'Step back not forward', 'Drive knee up with power', 'Control throughout'],
                            anatomyTip: 'Glute and quad activation through hip extension pattern, knee-safe step-back version'
                        },
                        {
                            name: 'Commando Plank',
                            sets: 3,
                            reps: '10 total',
                            muscle: 'Core/Shoulders',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Forearm plank to high plank and back. Alternate leading arm. Minimize hip sway.',
                            cues: ['Alternate leading arm', 'Minimize hip rotation', 'Tight core throughout', 'Controlled tempo'],
                            anatomyTip: 'Dynamic core stability with shoulder and tricep endurance'
                        },
                        {
                            name: 'Swimmers (prone)',
                            sets: 3,
                            reps: '20 total',
                            muscle: 'Posterior Chain',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Lie face down, arms extended. Alternate lifting opposite arm and leg. Flutter-like movement with control.',
                            cues: ['Lift opposite arm and leg', 'Small controlled movements', 'Keep neck neutral', 'Breathe naturally'],
                            anatomyTip: 'Full posterior chain activation from erectors through glutes'
                        },
                        {
                            name: 'Explosive Hip Thrust',
                            sets: 3,
                            reps: '12',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Standard hip thrust setup. Drive hips up explosively. Control the descent for 2 counts. Power up, slow down.',
                            cues: ['Explosive drive up', '2-count controlled descent', 'Full hip extension', 'Power through heels'],
                            anatomyTip: 'Rate of force development in glutes through explosive concentric phase'
                        },
                        {
                            name: 'Standing Pelvic Power Circles',
                            sets: 3,
                            reps: '15 each direction',
                            muscle: 'Core/Hip Complex',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Stand tall, perform large powerful hip circles. Control movement through full range. Both directions.',
                            cues: ['Large powerful circles', 'Control through full range', 'Core braces throughout', 'Both directions'],
                            anatomyTip: 'Full hip complex and core coordination through dynamic range of motion'
                        },
                        {
                            name: 'Tabletop Hip Pulses',
                            sets: 3,
                            reps: '25',
                            muscle: 'Glutes/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'On all fours, extend hips back toward heels then pulse forward. Small controlled movements through pelvis.',
                            cues: ['Small controlled pelvic movements', 'Engage core throughout', 'Squeeze glutes on forward pulse', 'Rhythmic breathing'],
                            anatomyTip: 'Glute and pelvic floor activation through controlled hip articulation'
                        },
                        {
                            name: 'Sphinx to Seal Flow',
                            sets: 3,
                            reps: '10',
                            muscle: 'Spine/Core',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Start in sphinx (forearms down). Flow up to seal (arms extended). Fluid motion between the two positions.',
                            cues: ['Flow smoothly between positions', 'Dont force the extension', 'Breathe with the movement', 'Progressive spinal extension'],
                            anatomyTip: 'Progressive spinal extension through erectors with hip flexor stretch'
                        },
                        {
                            name: 'Child\'s Pose to Cobra Flow',
                            sets: 3,
                            reps: '10 slow',
                            muscle: 'Full Body/Recovery',
                            kneeSafe: true,
                            trackProgress: true,
                            instructions: 'Flow from child\'s pose forward through to cobra position and back. Slow continuous wave-like movement.',
                            cues: ['Slow wave-like movement', 'Flow continuously dont stop', 'Breathe naturally throughout', 'Full body undulation'],
                            anatomyTip: 'Full spinal range of motion with nervous system down-regulation'
                        }
                    ]}
                ]
            },
            {
                id: 'mobility-snacks-4x',
                name: 'MovesMethod Mobility Snacks',
                description: '4 short mobility routines (10-12 min each). No equipment. Knee-modified. Use as desk breaks, morning snacks, pre-workout primers, or standalone sessions 3-5x/week.',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Spine & Thoracic', focus: 'Thoracic rotation, lateral flexion, spinal loading in forbidden planes', exercises: [
                        {
                            name: 'Cat-Cow + Lateral Bow',
                            sets: 1,
                            reps: '5 each direction',
                            muscle: 'Spine/Thoracic',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Two yoga moves combined - first arch and round your back like a stretching cat, then add a sideways bend like trying to look at your own hip. HOW TO DO IT: Start on all fours, hands under shoulders, knees under hips. Inhale into Cow (drop belly, lift chest and tailbone). Exhale into Cat (round spine, tuck pelvis). After each rep, add a lateral C-curve: bend your spine sideways, looking toward your hip on the same side. Alternate left and right curves.',
                            cues: [
                                'Move slowly with your breath',
                                'Reach the curve all the way from tailbone to skull',
                                'Look toward your hip on the lateral bow',
                                'Keep arms straight and weight evenly through hands',
                                'Pad knees if sensitive'
                            ],
                            anatomyTip: 'Combines sagittal-plane flexion/extension with frontal-plane lateral flexion to mobilize the spine through planes that desk work neglects.'
                        },
                        {
                            name: 'Thread the Needle',
                            sets: 1,
                            reps: '8 each side',
                            muscle: 'Thoracic Spine/Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A twist that wrings out your mid-back. From hands and knees, slide one arm under your body like threading a needle through fabric, then unwind and reach the same arm up to the sky. HOW TO DO IT: From all-fours, slide one arm under your body palm-up, threading it as far as it will go. Let your shoulder and temple lower toward the floor. Follow your hand with your eyes through the entire range. Unwind back to start and open the same arm to the sky to complete one rep.',
                            cues: [
                                'Eyes track the moving hand the whole way',
                                'Keep hips stacked over knees, do not collapse to one side',
                                'Breathe out as you thread, in as you open',
                                'Press through the planted hand for stability',
                                'Move slowly - this is mobility, not stretch holding'
                            ],
                            anatomyTip: 'Active thoracic rotation under load, with the eye-tracking driving cervical rotation through the same plane.'
                        },
                        {
                            name: 'Standing Thoracic Rotation',
                            sets: 1,
                            reps: '10 each side',
                            muscle: 'Thoracic Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A standing upper-body twist. Arms folded across chest, hips stay forward, only your upper body turns side to side. HOW TO DO IT: Stand with feet hip-width. Cross arms over chest (hands on opposite shoulders). Rotate fully to one side - upper body only. Pause at end range, then rotate to the other side. Hips and feet stay forward.',
                            cues: [
                                'Hips stay square - rotation comes from mid-back only',
                                'Reach full end range before reversing',
                                'Stack ribs over pelvis - do not lean',
                                'Inhale center, exhale into the twist',
                                'Knees soft but not bent'
                            ],
                            anatomyTip: 'Isolates thoracic rotation by locking out the lumbar spine and hips, training rotation where it should happen.'
                        },
                        {
                            name: 'Side-Lying Book Opens',
                            sets: 1,
                            reps: '8 each side',
                            muscle: 'Thoracic Spine/Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lie on your side with your palms pressed together like a closed book. Slowly open the top arm to the floor behind you like opening the book - while your knees stay glued together. HOW TO DO IT: Lie on your side with knees stacked at 90 degrees and a small pillow under your head if needed. Extend both arms forward at shoulder height, palms together. Keeping knees pressed together and stacked, open the top arm in a slow arc back toward the floor behind you. Follow the hand with your eyes. Return to start.',
                            cues: [
                                'Knees stay stacked and pinned together',
                                'Reach for the floor behind you - do not force it',
                                'Eyes follow the moving hand',
                                'Exhale as you open, inhale as you close',
                                'Move slowly through the full arc'
                            ],
                            anatomyTip: 'Locks the lumbar spine and pelvis with stacked knees, isolating pure thoracic rotation in a supported position.'
                        },
                        {
                            name: 'Spine Flexion/Extension in Squat',
                            sets: 1,
                            reps: '8',
                            muscle: 'Spine/Hips',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hold onto a door for balance, sit into a half-squat, then do the cat-cow spine roll (round, then arch) while you stay down in the squat. The door takes weight off your knees. HOW TO DO IT: Hold a doorframe or sturdy post with both hands. Sit back into a shallow squat (only as deep as your knees allow). From this loaded position, round your spine fully (chin to chest, tuck pelvis) then arch (lift chest, untuck pelvis, look up). Use the doorframe to support your weight.',
                            cues: [
                                'Use the doorframe to take load off your knees',
                                'Round and arch from tailbone to skull',
                                'Stay only as deep as comfortable',
                                'Slow and controlled - feel each vertebra',
                                'Skip the squat hold if knees crunch - hinge at hips instead'
                            ],
                            anatomyTip: 'Loads the spine through flexion and extension in a hip-flexed position - a range most people never train.'
                        },
                        {
                            name: 'Standing Lateral Reach',
                            sets: 1,
                            reps: '6 each side',
                            muscle: 'Lateral Chain',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A standing side-bend. Reach one arm up and lean your whole body to the opposite side like a tree bending in the wind. HOW TO DO IT: Stand with feet hip-width. Reach one arm straight overhead. Lean your entire torso to the opposite side, lengthening through the side of your body. This is a controlled movement, not a stretch hold - flow into the lean and back to vertical.',
                            cues: [
                                'Lean from the waist, not by bending the knee',
                                'Reach long through the fingertips',
                                'Keep both feet flat - do not shift weight',
                                'Inhale center, exhale into the lean',
                                'Controlled tempo - no bouncing'
                            ],
                            anatomyTip: 'Trains lateral flexion through the quadratus lumborum, obliques, and lats - the lateral chain rarely engaged in daily life.'
                        }
                    ]},
                    { day: 2, name: 'Hips & Pelvis', focus: 'Hip rotation in all planes, hip flexor control, glute engagement', exercises: [
                        {
                            name: '90/90 Hip Switches',
                            sets: 1,
                            reps: '5 slow transitions',
                            muscle: 'Hips',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit on the floor with both knees bent at 90 degrees - one leg in front of you, the other out to the side (like a pretzel position). Sweep both legs over to the OTHER side like windshield wipers, ending in the mirror image. HOW TO DO IT: Sit on the floor with both knees bent at 90 degrees - one leg in front (knee out to side, shin parallel to body) and one leg out to the side (knee out, shin behind). Place hands behind you for support. Like windshield wipers, sweep both legs over to the opposite side, ending in the mirror image position.',
                            cues: [
                                'Move slowly - this is a control drill, not a stretch',
                                'Sit tall, do not collapse forward',
                                'Place a folded towel under outside knee if it complains',
                                'Move to the edge of comfort - never force the range',
                                'Use hands behind for support as needed'
                            ],
                            anatomyTip: 'Trains active hip internal and external rotation simultaneously. Knee-sensitive: pad the outside knee and stay within pain-free range.'
                        },
                        {
                            name: 'Hip CARs (Controlled Articular Rotations)',
                            sets: 1,
                            reps: '3 full circles each side',
                            muscle: 'Hips',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: CAR means "Controlled Articular Rotation" - jargon for moving a joint through its biggest possible slow circle. For your hip: stand on one leg, lift the other knee, and draw a huge slow circle with that knee like stirring a pot with your leg. HOW TO DO IT: Stand tall, holding a wall or chair for balance. Lift one knee toward your chest, then draw the biggest, slowest possible circle with that knee - out to the side, behind you, back to start. Move at the very edge of your range. Reverse direction after 3 reps. Switch sides.',
                            cues: [
                                'Move SLOWLY - 5+ seconds per circle',
                                'Maximize the range at every point',
                                'Keep standing leg locked, hips level',
                                'Brace core hard the entire time',
                                'Use a wall for balance - no swinging'
                            ],
                            anatomyTip: 'Trains active range of motion in every direction at the hip joint - flexion, abduction, extension, internal/external rotation - all in one controlled circle.'
                        },
                        {
                            name: 'Half-Kneeling Hip Flexor + Rotation',
                            sets: 1,
                            reps: '8 each side',
                            muscle: 'Hip Flexors/Thoracic',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Get into a proposing-marriage position (one knee on the floor, other foot forward and flat). Tuck your butt under to feel a stretch in the front of the back hip, then twist your upper body toward the front leg. HOW TO DO IT: Drop into a half-kneeling lunge: one knee down (padded), the other foot forward and flat. Tuck your pelvis under (posterior tilt = scoop the tailbone forward) to lengthen the back-leg hip flexor. From there, rotate your torso toward the front leg, opening the chest. Return to center. Maintain pelvic tuck the whole time.',
                            cues: [
                                'PAD the down knee with a folded towel or mat',
                                'Tuck pelvis BEFORE you rotate - feel the front of the back hip stretch',
                                'Rotate from the mid-back, hips stay square',
                                'Reach the rotating arm long and high',
                                'Slow and controlled - 2 seconds in, 2 seconds out'
                            ],
                            anatomyTip: 'Combines hip flexor lengthening with thoracic rotation - addresses the desk-worker pattern of tight hip flexors and stiff mid-back together.'
                        },
                        {
                            name: 'Frog Rocks',
                            sets: 1,
                            reps: '10',
                            muscle: 'Hip Adductors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: On hands and knees, spread your knees as wide as a frog. Rock your hips back toward your heels (deeper inner-thigh stretch), then forward. HOW TO DO IT: On all fours, widen knees as far as comfortable (toes pointed out, inner thighs to mat). Keep hips stacked over knees to start. Rock your hips back toward your heels - feel the inner-thigh stretch deepen - then return forward.',
                            cues: [
                                'Knees only as wide as comfort allows',
                                'Pad the knees with a folded mat or pillow',
                                'Rock SLOWLY back and forth',
                                'Keep spine long - do not round the lower back',
                                'Stop short of any sharp knee or groin pinch'
                            ],
                            anatomyTip: 'Mobilizes the hip joint through abduction and progressive flexion - opens the adductors and posterior hip capsule.'
                        },
                        {
                            name: 'Side-Lying Clamshell + Hip ER',
                            sets: 1,
                            reps: '10 each side',
                            muscle: 'Glutes (Med/Min)',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: ER = External Rotation (turning the leg outward). Lie on your side with knees bent. Open the top knee like a clamshell opening, then at the top add a small extra lift backward. Heels stay glued together the whole time. HOW TO DO IT: Lie on your side, knees stacked and bent at 45 degrees, feet aligned with hips. Keeping heels glued together, open the top knee like a clamshell. At the TOP of the clamshell, hold and extend the top hip backward slightly (lift the knee back and up). Return slowly.',
                            cues: [
                                'Heels stay touching the whole time',
                                'Do NOT roll your top hip backward to cheat',
                                'Pause at the top before adding the extension',
                                'Squeeze the glute hard at full open',
                                'Slow controlled lowering'
                            ],
                            anatomyTip: 'Combines clamshell (glute med activation) with hip extension to wake up the glutes in two distinct functions - critical for hip stability.'
                        },
                        {
                            name: 'Standing Hip Hinge + Hip Internal Rotation',
                            sets: 1,
                            reps: '8 each side',
                            muscle: 'Hips/Posterior Chain',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hinge forward at the hips (like trying to touch your toes with a flat back). While still hinged, let one heel lift up so that knee turns slightly INWARD - then put it down and do the other side. HOW TO DO IT: Stand with feet hip-width. Hinge forward at the hips (RDL position = slight knee bend, flat back, butt back). From the hinged position, allow one heel to rise off the floor while the same hip rotates internally (the knee turns inward slightly). Return both heels down. Alternate sides.',
                            cues: [
                                'Maintain the hinge throughout - do not stand back up',
                                'Allow the hip to rotate INWARD - this is normally trained',
                                'Small subtle range - this is not a big movement',
                                'Keep flat back, neutral neck',
                                'Move with control - no swinging'
                            ],
                            anatomyTip: 'Trains hip internal rotation under hinge load - a critical pattern for gait, running, and rotational sports that most people lose by age 30.'
                        }
                    ]},
                    { day: 3, name: 'Shoulders & Upper Body', focus: 'Shoulder full-circle strength, scapular control, wrist/neck', exercises: [
                        {
                            name: 'Shoulder Dislocates',
                            sets: 1,
                            reps: '10',
                            muscle: 'Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Scary name but harmless. Hold a broomstick wide, then pass it all the way over your head and behind your back, then back to the front. Nothing actually dislocates - your shoulders just move through their full range. HOW TO DO IT: Hold a broomstick, resistance band, or PVC pipe in front of you with a wide grip (wider than shoulders). Keeping arms straight, slowly raise the stick overhead and continue all the way behind your back, then reverse the motion back to the front. Use a wider grip if it feels restrictive, narrower as mobility improves.',
                            cues: [
                                'Keep arms COMPLETELY STRAIGHT throughout',
                                'Move SLOW - 3 seconds up, 3 seconds back',
                                'Wider grip = easier, narrower = harder',
                                'Do not arch the lower back to compensate',
                                'Stop short of any pinch or shoulder pain'
                            ],
                            anatomyTip: 'Mobilizes the glenohumeral joint through full flexion-to-extension while training scapular rhythm and posterior capsule mobility.'
                        },
                        {
                            name: 'Shoulder CARs',
                            sets: 1,
                            reps: '3 full circles each side',
                            muscle: 'Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Same idea as Hip CARs but for your shoulder. Draw the biggest possible slow circle with one arm - through every direction your shoulder can move. Scapula = your shoulder blade; let it glide naturally. HOW TO DO IT: Stand tall. Lift one arm straight in front. Draw the biggest possible circle - up overhead, behind you, down to your side, and back to front. Keep the scapula (shoulder blade) moving freely. Reverse direction after 3 reps. Switch sides.',
                            cues: [
                                'Maximize the circle - reach the very edge of your range',
                                'Move SLOWLY - 5+ seconds per full circle',
                                'Keep the OTHER shoulder still and pressed down',
                                'Let the shoulder blade glide naturally',
                                'Brace core to prevent ribs from flaring'
                            ],
                            anatomyTip: 'Trains active ROM through every angle of the shoulder joint, integrating the scapulothoracic and glenohumeral joints together.'
                        },
                        {
                            name: 'Wall Slide + Protraction',
                            sets: 1,
                            reps: '10',
                            muscle: 'Shoulders/Serratus',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Protraction = pushing your shoulder blades APART (the opposite of pinching them together). Stand at a wall, press forearms flat against it, slide them up overhead, then at the top push the wall away by reaching forward with both hands. HOW TO DO IT: Stand facing a wall. Place forearms flat against the wall, elbows at shoulder height, wrists above elbows. Keeping forearms pressed firmly into the wall, slide them up overhead as far as you can. At the TOP, push your hands INTO the wall, protracting your shoulder blades (push the wall away). Hold 1 second, then slide back down.',
                            cues: [
                                'Forearms STAY pressed flat against the wall the entire time',
                                'Do not lose contact at the top',
                                'PUSH the wall away at the top - feel the serratus engage',
                                'Ribs down, do not let lower back arch',
                                'Slow controlled slide both directions'
                            ],
                            anatomyTip: 'Pairs scapular upward rotation with protraction (serratus anterior activation) - critical for shoulder health and overhead pressing strength.'
                        },
                        {
                            name: 'Bear Plank Hold + Shoulder Tap',
                            sets: 1,
                            reps: '6 each side',
                            muscle: 'Core/Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: "Bear" position means hands and knees on the floor with knees HOVERING 1 inch off the ground (knees never touch down). Hold that position steady, then alternate tapping one hand to the opposite shoulder. HOW TO DO IT: Start on hands and knees (hands under shoulders, knees under hips). Lift knees just 1 inch off the floor - hover. Hold this bear position rock-steady, then slowly tap one hand to the opposite shoulder. Replace. Tap with the other hand. Keep hips dead still.',
                            cues: [
                                'Knees hover just 1 inch - this is not a high plank',
                                'HIPS STAY LEVEL - do not let them sway',
                                'Move the hand SLOWLY - 2 seconds up, 2 seconds back',
                                'Squeeze glutes and brace core hard',
                                'Look at the floor between your hands'
                            ],
                            anatomyTip: 'Anti-rotation core challenge with shoulder stability - the lifted-knee bear position is more demanding and quad-safe than a quadruped.'
                        },
                        {
                            name: 'Doorway Chest Opener + Rotation',
                            sets: 1,
                            reps: '8',
                            muscle: 'Chest/Thoracic',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand in a doorway, plant a forearm vertically on the door frame (like you are about to high-five the frame). Step through the doorway with the same-side foot to open your chest, then twist away from the planted arm to open it even more. HOW TO DO IT: Stand in a doorway. Place one forearm vertically against the door frame (elbow at 90 degrees, hand up). Step the same-side foot forward through the doorway, letting your chest open. From that position, rotate your torso AWAY from the planted arm, deepening the opening. Hold 2 seconds, then come back. Switch sides halfway through reps.',
                            cues: [
                                'Forearm stays glued to the doorway',
                                'Step through gently - do not overstretch',
                                'Rotate from the mid-back, not the shoulder',
                                'Breathe deeply into the open ribcage',
                                'Back off if the shoulder pinches'
                            ],
                            anatomyTip: 'Lengthens the pec minor and anterior shoulder capsule while adding active thoracic rotation - directly counters the rounded desk posture.'
                        },
                        {
                            name: 'Neck CARs',
                            sets: 1,
                            reps: '3 circles each direction',
                            muscle: 'Cervical Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Same idea as Hip/Shoulder CARs but for your neck. A slow, full head-roll: chin to chest, ear to shoulder, head back, ear to other shoulder, chin to chest. Like a slow circle traced with your nose. HOW TO DO IT: Stand or sit tall. Slowly draw the largest possible circle with your head: chin to chest, ear toward shoulder, head tilted back, ear to other shoulder, and back to chin-to-chest. Reverse direction after 3 reps.',
                            cues: [
                                'Move VERY SLOWLY - 10 seconds per circle',
                                'Maximize the range in every direction',
                                'Keep shoulders DOWN and still',
                                'Stop short of any sharp pain or dizziness',
                                'Breathe steadily throughout'
                            ],
                            anatomyTip: 'Trains active range through the entire cervical spine - rare to do consciously and critical for offsetting forward-head posture.'
                        }
                    ]},
                    { day: 4, name: 'Full Body Integration', focus: 'Coordination, multi-joint movement, locomotion patterns', exercises: [
                        {
                            name: 'Bear Crawl',
                            sets: 1,
                            reps: '4 forward + 4 back',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Crawl on hands and FEET (not knees) like a bear, with knees hovering 1 inch off the floor. Move opposite hand and opposite foot at the same time (right hand moves with left foot). This is called contralateral movement - same way you walk. HOW TO DO IT: Start on hands and knees, knees lifted just 1 inch off the floor. Move forward by stepping opposite hand and opposite foot simultaneously (right hand + left foot, then left hand + right foot). Move SLOWLY. After 4 steps forward, reverse the same pattern backward for 4 steps.',
                            cues: [
                                'OPPOSITE limbs move together (contralateral)',
                                'Hips stay LEVEL - no sway side to side',
                                'Knees hover - do not let them touch down',
                                'Go SLOW - this is control, not speed',
                                'Look at the floor a few feet ahead'
                            ],
                            anatomyTip: 'Trains contralateral coordination, the most fundamental locomotor pattern - integrates core, shoulders, and hips into one system.'
                        },
                        {
                            name: 'Tightrope Walk',
                            sets: 1,
                            reps: '20 steps each way',
                            muscle: 'Balance/Feet/Ankles',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Walk in a straight line, heel touching toe with each step, like a balance beam or tightrope walker. Arms out for balance. HOW TO DO IT: Imagine a tightrope on the floor. Walk along it heel-to-toe - the heel of the front foot touches the toes of the back foot at each step. Arms out to the sides for balance. Move slowly and with control. Return the same way (you can walk backward heel-to-toe, or turn around).',
                            cues: [
                                'Heel touches toe at every step',
                                'Arms out wide for balance',
                                'Look ahead 6-8 feet, not down at your feet',
                                'SLOW deliberate steps - feel each foot',
                                'Engage the foot arch as you load'
                            ],
                            anatomyTip: 'Challenges proprioception, ankle stability, and single-leg balance - foundational for fall prevention and athletic performance.'
                        },
                        {
                            name: 'Lizard Lunge + Thoracic Rotation',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Hips/Thoracic',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A deep yoga-style lunge with your hand INSIDE the front foot (close to your front ankle). The back knee rests on the ground. From there, reach the other arm up and twist toward the ceiling like opening a book. HOW TO DO IT: Step into a deep lunge with the right foot forward. Lower the LEFT (back) knee to the floor (padded). Place your RIGHT hand on the floor INSIDE the right foot (between your front foot and your body). Reach the LEFT arm straight up toward the ceiling, rotating your torso open. Follow the hand with your eyes. Return hand to floor. Repeat for reps, then switch sides.',
                            cues: [
                                'PAD the down knee - mandatory',
                                'Plant hand INSIDE the front foot, not outside',
                                'Reach the top hand HIGH - open the chest fully',
                                'Eyes follow the moving hand',
                                'Breathe out as you rotate, in as you return'
                            ],
                            anatomyTip: 'Combines deep hip mobilization (front hip flexion, back hip extension) with thoracic rotation - one of the highest-value mobility patterns.'
                        },
                        {
                            name: 'Froggy Jumps (Modified - No Jump)',
                            sets: 1,
                            reps: '8',
                            muscle: 'Hips/Legs',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Squat down deep with hands resting on the floor (frog position). Stand up while reaching both arms overhead. No actual jumping - just stand up smoothly. The original version has a jump, but your knees say no, so we kept the squat-to-overhead pattern without the impact. HOW TO DO IT: Squat down as deep as comfortable, hands resting on the floor in front of you. From that low position, stand up while reaching both arms straight overhead. Return slowly to the deep squat. NO jumping - this is the knee-safe version. WEEK 1: If knees crunch loudly, swap this for a standing hip hinge (RDL pattern - hinge forward keeping a flat back) instead.',
                            cues: [
                                'NO JUMPING - smooth controlled stand-up only',
                                'Reach arms HIGH overhead at the top',
                                'Squat only as deep as comfortable',
                                'Drive through whole foot when standing',
                                'Swap for hip hinge if knees protest'
                            ],
                            anatomyTip: 'Trains full-range squat-to-overhead pattern without impact. Modification preserves the movement pattern while protecting the knee joint.'
                        },
                        {
                            name: 'Lateral Bear Crawl',
                            sets: 1,
                            reps: '4 steps each way',
                            muscle: 'Full Body/Hips',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Same bear position as before (hands and knees hovering 1 inch off the floor), but you walk SIDEWAYS instead of forward. This time, same-side hand and foot move together (right hand + right foot reach out, then left hand + left foot follow). HOW TO DO IT: Start in the bear position (hands and knees, knees 1 inch off the floor). Move sideways: same-side hand and same-side foot step out together, then the opposite hand and foot follow. Take 4 steps one direction, then 4 steps back the other way.',
                            cues: [
                                'Same-side limbs lead this time (not opposite)',
                                'Knees hover throughout',
                                'Hips stay level - do not pike up',
                                'Move slow - this is harder than it looks',
                                'Brace core to control the lateral demand'
                            ],
                            anatomyTip: 'Same bear position, different demand - frontal-plane hip control loads abductors and adductors in a way forward bear crawls do not.'
                        },
                        {
                            name: 'Slow Controlled Deep Squat + Exit',
                            sets: 1,
                            reps: '5',
                            muscle: 'Hips/Legs',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hold a door (or TRX strap) for assistance. Slowly squat down as deep as your knees allow, pause at the bottom, then stand back up. The door supports some of your weight so your knees don\'t have to work as hard. HOW TO DO IT: Hold a door frame, TRX, or sturdy post for assistance. Slowly lower (3-5 seconds) into the deepest squat your knees allow. Use the post to take load off. Pause at the bottom, then stand back up with control. The assistance lets you train range without forcing the knee.',
                            cues: [
                                'USE THE DOOR/TRX for support - take load off knees',
                                '3-5 second descent every rep',
                                'Only as deep as truly comfortable',
                                'Pause 1-2 seconds at the bottom',
                                'Stand with control - no rush'
                            ],
                            anatomyTip: 'Loaded-assisted deep squat trains range and hip/ankle mobility while letting the joint adapt safely under partial bodyweight.'
                        }
                    ]}
                ]
            },
            {
                id: 'joint-mobility-mastery-7x',
                name: 'Joint Mobility Mastery',
                description: '7 short joint-focused mini-workouts (8-12 min each). One joint per day: ankles, knees, hips, spine, shoulders, wrists, neck. Builds end-range strength and resilience at every joint.',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Ankles', focus: 'Ankle dorsiflexion, plantarflexion, inversion, eversion, balance', exercises: [
                        {
                            name: 'Ankle CARs',
                            sets: 1,
                            reps: '3 circles each direction, each foot',
                            muscle: 'Ankle Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: CAR = Controlled Articular Rotation. Sit in a chair, lift one foot off the floor, and draw the biggest possible slow circle with that foot (just the foot - keep the knee still). Toes point down, then in, then up, then out. HOW TO DO IT: Sit tall in a chair, knee at 90 degrees. Lift one foot off the floor. Without moving your knee, slowly trace the largest circle you can with your foot - point toes down, then sweep inward toward the other foot, then up, then outward. 3 circles, then reverse direction. Repeat with other foot.',
                            cues: ['Knee stays COMPLETELY still', 'Move from the ankle only', 'Maximize the range', 'SLOW - 5+ seconds per circle', 'Both directions equally'],
                            anatomyTip: 'Trains active range in all four ankle movements: dorsiflexion, plantarflexion, inversion, eversion. Stiff ankles are upstream of knee and hip pain.'
                        },
                        {
                            name: 'Wall Knee Drive (Ankle Dorsiflexion)',
                            sets: 1,
                            reps: '10 each side',
                            muscle: 'Ankle/Calf',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand a few inches in front of a wall. Bend one knee forward to TOUCH the wall with your knee - keeping your heel glued to the floor. The further your foot is from the wall, the harder. HOW TO DO IT: Place one foot a few inches from the wall. Drive your knee forward to tap the wall WITHOUT your heel lifting off the floor. Return. Each rep, move your foot back a tiny bit further. Find the furthest distance where your heel still stays down.',
                            cues: ['HEEL stays glued to the floor', 'Knee tracks straight forward toward the wall', 'Move slow - feel the calf stretch', 'Increase distance gradually', 'Equal reps each side'],
                            anatomyTip: 'Dorsiflexion is the most-lost ankle range. Restoring it unlocks deep squats and reduces shin splints, plantar fasciitis, and knee tracking issues.'
                        },
                        {
                            name: 'Tibialis Raises',
                            sets: 2,
                            reps: '15',
                            muscle: 'Tibialis Anterior (Shin)',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand with your heels on the floor, toes pointing up at the ceiling - like a reverse calf raise. Pull your toes toward your shins as hard as you can, then lower. The muscle on the FRONT of your shin works. HOW TO DO IT: Stand 6-12 inches from a wall, leaning your butt against it for support. Keep heels on the floor and lift your toes and the balls of your feet as high as possible toward your shins. Hold 1 second, then lower with control.',
                            cues: ['Pull toes UP as high as possible', 'Heels stay grounded', 'Slow controlled descent', 'Squeeze at the top', 'Burn in the shin = correct'],
                            anatomyTip: 'The tibialis anterior is critical for ankle stability and gait. Most people never train it - rebuilds the lift phase of every step and prevents falls.'
                        },
                        {
                            name: 'Heel-Elevated Squat Pulse',
                            sets: 1,
                            reps: '10',
                            muscle: 'Quads/Ankles',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand with your heels on a small platform (book, plate, folded towel about 1-2 inches). Squat down to a comfortable depth, then pulse up and down a few inches in the bottom of the squat. The heel elevation makes deep squat safer for knees. HOW TO DO IT: Place 1-2 inch elevation under heels. Stand with feet hip-width. Lower into a squat as deep as comfortable, then perform 10 small pulses (rise 3 inches, lower 3 inches) in the deep position. Stand up.',
                            cues: ['Hold a door for balance if needed', 'Small controlled pulses only', 'Stay in the comfort zone for knees', 'Chest stays UP', 'Stop immediately if knees pinch'],
                            anatomyTip: 'Heel elevation reduces ankle dorsiflexion demand, letting you train deeper hip and quad ranges without straining the knee.'
                        },
                        {
                            name: 'Single-Leg Balance (Eyes Closed)',
                            sets: 1,
                            reps: '30 seconds each side',
                            muscle: 'Ankle/Balance',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand on one foot. Once steady, close your eyes. Hold for 30 seconds. The lift of vision forces your ankle and inner ear to do all the balance work. HOW TO DO IT: Stand on one foot near a wall (in case you wobble). Get balanced with eyes open. Close eyes. Hold for 30 seconds. Switch sides. Open eyes if you feel like falling - safety first.',
                            cues: ['Have a wall within arm reach', 'Spread toes wide for grip', 'Soft knee, not locked', 'Brace core gently', 'Build up - 10 sec then 20 then 30'],
                            anatomyTip: 'Eyes-closed balance forces the proprioceptors in the ankle, foot, and inner ear to coordinate. Single best drill for fall prevention.'
                        }
                    ]},
                    { day: 2, name: 'Knees', focus: 'Knee strength, end-range tolerance, quad/hamstring balance (knee-safe)', exercises: [
                        {
                            name: 'Wall Sit Isometric',
                            sets: 3,
                            reps: '30-60 seconds',
                            muscle: 'Quads',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lean your back against a wall and slide down into a sitting position with your thighs parallel to the floor (or as low as your knees allow). Hold. Isometric = no movement, just hold steady. HOW TO DO IT: Stand with back against a wall, feet 1-2 feet out from the wall. Slide down until thighs are parallel to floor (or wherever knees feel safe - higher is fine). Knees over ankles, not past toes. Hold 30-60 seconds. Stand up. 3 rounds.',
                            cues: ['Knees stack OVER ankles, not past toes', 'Higher position is fine - work up to parallel', 'Press lower back into wall', 'Breathe normally during the hold', 'Stop if knees pinch'],
                            anatomyTip: 'Isometric quad work builds tendon resilience and quad strength without movement stress on the knee joint - one of the safest knee-strengthening drills.'
                        },
                        {
                            name: 'Reverse Nordic (Modified)',
                            sets: 2,
                            reps: '5',
                            muscle: 'Quads/Knees',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Kneel on the floor with knees padded. Lean your whole body BACKWARD (still upright, just tilting back from the knees) only as far as you can with control. Return to upright. This is the modified version - the full version goes much further back. HOW TO DO IT: Kneel on a thick pad with knees hip-width. Sit tall, glutes squeezed. Slowly lean your torso backward as a straight line (head, shoulders, hips all tilt back together from the knees). Only go as far as comfortable - even 10 degrees is fine starting out. Return to upright by squeezing the quads.',
                            cues: ['PAD the knees thickly', 'Keep body in a straight line - no folding at the hip', 'Tiny range to start - build up over weeks', 'Squeeze quads to pull yourself back up', 'STOP at any sharp knee pain'],
                            anatomyTip: 'Eccentric quad strength at deep knee flexion - extremely protective for knees but requires gradual progression. Do not push the range early.'
                        },
                        {
                            name: 'Terminal Knee Extension',
                            sets: 2,
                            reps: '15 each side',
                            muscle: 'VMO (inner quad)',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit in a chair with one leg out straight. Squeeze the muscle just above your kneecap (especially the inner part) to fully straighten the knee - like trying to push the back of your knee down into the chair. Tiny but important. HOW TO DO IT: Sit on a chair. Extend one leg straight out in front. Place a fingertip on the muscle just above the inner side of your kneecap (the VMO). Slowly straighten the knee fully - feel that muscle harden under your finger. Hold 2 seconds. Relax. 15 reps each side.',
                            cues: ['SQUEEZE the inner quad hard', 'Hold the lockout 2 seconds', 'Feel the muscle harden under your fingertip', 'This is small but powerful - do not skip', 'Both legs equally'],
                            anatomyTip: 'The VMO (vastus medialis oblique) is critical for kneecap tracking. Weak VMO = lateral kneecap drift = knee pain. This drill is gold for knee rehab.'
                        },
                        {
                            name: 'Slow Step Down',
                            sets: 2,
                            reps: '10 each side',
                            muscle: 'Glutes/Quads',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand on a step (4-8 inches high). Lower the opposite foot SLOWLY toward the floor over 3-5 seconds, lightly tap your heel down, then drive back up through the standing leg. Most of the work is in the GLUTE of the standing leg. HOW TO DO IT: Stand on a step with one foot. Hinge slightly at the hip, then slowly lower the opposite foot toward the floor over 3-5 seconds. Lightly tap the heel - do not put weight on it. Drive back up through the heel and glute of the standing leg. 10 reps each side.',
                            cues: ['Hinge at the HIP to load the glute', '3-5 second descent', 'Light heel tap, do not transfer weight', 'Drive through the standing heel', 'Stop if standing knee pinches'],
                            anatomyTip: 'Eccentric glute and quad loading - one of the highest-value knee-friendly leg drills. Builds the muscles that control the kneecap during stair descent.'
                        }
                    ]},
                    { day: 3, name: 'Hips', focus: 'Hip rotation, end-range strength, flexor and glute balance', exercises: [
                        {
                            name: 'Hip CARs (Standing)',
                            sets: 1,
                            reps: '3 circles each direction, each side',
                            muscle: 'Hip Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand on one leg holding a wall. Lift the other knee and draw a huge slow circle through every direction your hip can move - front, side, back, around. Reverse. HOW TO DO IT: Stand tall, hand on a wall for balance. Lift one knee toward chest. From there, sweep the knee out to the side, then drop it behind you, then back to start. 3 slow circles, then reverse direction. Switch sides.',
                            cues: ['Move SLOWLY - 5+ seconds per circle', 'Maximize range in every direction', 'Standing leg stays locked', 'Hips stay LEVEL', 'Core braced throughout'],
                            anatomyTip: 'Full active range training at the hip joint - flexion, abduction, extension, internal/external rotation - the gold-standard hip joint health drill.'
                        },
                        {
                            name: '90/90 Hip Lift-Off',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Hip External Rotators',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit in the 90/90 position (both knees bent at 90 degrees, one front, one side - pretzel-style). From there, lift the FRONT knee off the floor just 1-2 inches by squeezing the glute of that leg. Tiny but very hard. HOW TO DO IT: Sit on the floor in 90/90 position - one leg in front, knee bent 90 with shin out to the side; other leg out to the side, knee bent 90 with shin behind. Sit tall. Now try to lift the front knee off the floor by squeezing the glute on that side. It will be tiny. Hold 2 seconds. Lower. 5 reps. Switch sides.',
                            cues: ['Pad the outside knee if it complains', 'Lift comes from the glute, not the back', 'Tiny lift is fine - 1-2 inches', 'Hold 2 seconds at the top', 'Stay tall, do not collapse forward'],
                            anatomyTip: 'Active end-range hip external rotation strength - notoriously weak in most people. Translates directly to squat and lunge knee stability.'
                        },
                        {
                            name: 'Cossack Squat (Assisted)',
                            sets: 2,
                            reps: '5 each side',
                            muscle: 'Hips/Inner Thighs',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A side-to-side squat. Stand wide. Hold a door for support. Shift your weight all the way to one side, bending that knee while the other leg stays straight out to the side. Toes of the straight leg can point up. HOW TO DO IT: Stand with feet wider than shoulders, holding a door or post for support. Shift weight to your right side, bending your right knee and lowering into a side-squat while the left leg straightens out to the side (toes can point up). Push back to standing, then shift to the other side. Use the door to take load off.',
                            cues: ['USE THE DOOR for support - this is mandatory if knees are sensitive', 'Toes of the straight leg point up or stay flat', 'Knee tracks toward toes on the bending side', 'Only as deep as comfortable', 'Slow and controlled both directions'],
                            anatomyTip: 'Trains hip mobility in the frontal plane (side-to-side) - a movement direction Western fitness almost never trains. Opens adductors and rebuilds lateral hip strength.'
                        },
                        {
                            name: 'Couch Stretch with Active Extension',
                            sets: 1,
                            reps: '5 contractions each side',
                            muscle: 'Hip Flexors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Kneel with one shin against a wall or couch (top of foot against the wall, knee on floor). Front leg in a lunge. Tuck your butt under, then squeeze the glute of the back leg HARD for 5 seconds. Relax. Repeat 5 times. Active stretching beats passive stretching. HOW TO DO IT: Kneel facing away from a wall or couch. Place the top of your back foot against the wall, back knee on a thick pad. Front foot forward in a lunge. Tuck pelvis under (scoop tailbone forward) to lengthen the back hip flexor. Now squeeze the glute of the back leg as hard as you can for 5 seconds. Relax. 5 reps each side.',
                            cues: ['PAD the back knee thickly', 'Tuck pelvis FIRST to find the stretch', 'Squeeze the back-leg glute HARD', 'Hold each contraction 5 seconds', 'Do not push past sharp pain'],
                            anatomyTip: 'Active contraction at end range (PAILs/RAILs) creates real mobility gains - passive stretching alone rarely changes anything long-term.'
                        }
                    ]},
                    { day: 4, name: 'Spine', focus: 'Segmental spine control, flexion/extension/rotation strength', exercises: [
                        {
                            name: 'Segmental Cat-Cow',
                            sets: 1,
                            reps: '5 very slow',
                            muscle: 'Full Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Regular cat-cow but SUPER slow - move one vertebra at a time, starting from your tailbone and rolling up to your head. Then reverse: head down first, then chest, then lower back. Like a slow wave through your spine. HOW TO DO IT: On all fours. Start the arch (Cow) from your TAILBONE first - tilt it up, then chest lifts, then head looks up LAST. To round (Cat), start by tucking the tail under FIRST, then round the lower back, then mid-back, then chin to chest LAST. Each rep should take 15-20 seconds.',
                            cues: ['Move one vertebra at a time', 'Start the wave from the tail', 'Each rep takes 15-20 seconds', 'Feel each section moving separately', 'Breath flows with the movement'],
                            anatomyTip: 'Segmental spinal control - the ability to move one vertebra at a time - is the foundation of healthy back movement. Lost in most adults by age 30.'
                        },
                        {
                            name: 'Jefferson Curl (Bodyweight)',
                            sets: 2,
                            reps: '5 very slow',
                            muscle: 'Spinal Erectors/Hamstrings',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A controlled rounding of the spine forward, one vertebra at a time. Stand tall, then slowly fold forward, rounding from your head down to your tailbone (chin first, then upper back, mid back, low back, tailbone last). Reverse: tailbone first to come up, head last. Bodyweight only - no added load. HOW TO DO IT: Stand on a small platform or stable surface. Knees soft but mostly straight. Start the curl from the TOP: drop chin to chest first, then round the upper back, then mid, then lower, then tilt the pelvis. Hands hang and reach toward the floor. Come up the same way reversed: untilt the pelvis FIRST, then unroll the lower back, mid, upper, head last.',
                            cues: ['NO LOAD - bodyweight only', 'Move one segment at a time', 'Knees stay soft and slightly bent', 'Reverse the order on the way up', 'Stop if you feel a pinch or zap'],
                            anatomyTip: 'Controlled spinal flexion under no load builds the spine\'s tolerance to bending - the very movement most people are TOLD not to do. Counter-intuitive but research-backed.'
                        },
                        {
                            name: 'Cobra Press-Up (No Load)',
                            sets: 2,
                            reps: '8',
                            muscle: 'Spinal Extensors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lie face-down. Press your upper body up off the floor like a cobra rising. Hips stay on the floor. Lower with control. HOW TO DO IT: Lie face-down, hands flat under shoulders, elbows tucked. Press your chest off the floor, straightening arms only as much as feels comfortable - HIPS STAY ON THE FLOOR. Look up gently. Hold 2 seconds at the top. Lower with control.',
                            cues: ['Hips stay glued to the floor', 'Only press up as much as feels good', 'Look up gently - do not crank the neck', '2 second hold at the top', 'Slow controlled lowering'],
                            anatomyTip: 'Active spinal extension trains the erector spinae through their full shortened range - opposite of the rounded posture most adults default to.'
                        },
                        {
                            name: 'Side-Lying Thoracic Windmill',
                            sets: 1,
                            reps: '8 each side',
                            muscle: 'Thoracic Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lie on your side with the top knee bent and resting on the floor in front of you (or on a pillow). Sweep the top arm in a HUGE circle over your head and behind you - like making a snow angel. Eyes follow your hand. HOW TO DO IT: Lie on your right side. Bend your left (top) knee 90 degrees and rest it on the floor (or pillow) in front of your hips. Extend both arms straight in front, palms together. Sweep the top arm in a giant slow circle: up overhead, behind you to the floor (or as close as you can get), past your hips, and back to start. Eyes follow the hand. 8 circles, then switch sides.',
                            cues: ['Keep the bottom knee pinned to the floor', 'Sweep the arm in the BIGGEST circle possible', 'Eyes track the hand all the way around', 'Reach for the floor behind you', 'Slow, never forced'],
                            anatomyTip: 'Combines thoracic rotation, shoulder ROM, and visual tracking - the eye-tracking adds cervical rotation training in the same plane.'
                        }
                    ]},
                    { day: 5, name: 'Shoulders', focus: 'Full shoulder ROM, scapular control, end-range strength', exercises: [
                        {
                            name: 'Shoulder CARs',
                            sets: 1,
                            reps: '3 circles each direction, each side',
                            muscle: 'Shoulder Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Draw the biggest possible slow circle with one arm - up overhead, behind you, down by your side, back to front. Through every direction your shoulder can move. The shoulder blade glides naturally with the arm. HOW TO DO IT: Stand tall. Lift one arm straight in front of you. Slowly sweep it up overhead, then behind you (rotating the palm/thumb back), then down by your side, then back to front. Big slow circle. 3 reps, then reverse direction. Switch sides.',
                            cues: ['SLOW - 5-8 seconds per full circle', 'Maximize range in every direction', 'OTHER shoulder stays still and pressed down', 'Brace core to prevent ribs from flaring', 'Let the shoulder blade glide'],
                            anatomyTip: 'Comprehensive shoulder joint training: integrates the glenohumeral joint and the scapulothoracic joint through their full active range together.'
                        },
                        {
                            name: 'Wall Angels',
                            sets: 2,
                            reps: '10',
                            muscle: 'Shoulders/Upper Back',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand against a wall - head, shoulders, butt, heels all touching. Press your arms against the wall in a "Y" shape, then slide them down to a "W" shape (elbows tucked to ribs), maintaining wall contact the whole time. Like making a snow angel against a wall. HOW TO DO IT: Stand with back to a wall, feet 6 inches out. Press head, upper back, and butt into the wall. Lift arms overhead in a Y, backs of hands on the wall. Slowly slide arms down to a W (elbows at sides, hands at shoulder level). All contact points stay on the wall - if your forearms lose contact, do not force it.',
                            cues: ['Maintain ALL wall contact: head, shoulders, butt, arms', 'If arms lose contact, REDUCE range', 'Tuck ribs - no lower back arch', 'Slow and controlled', 'Both directions equally'],
                            anatomyTip: 'Trains scapular control through full overhead range. The wall provides feedback so you cannot cheat with thoracic extension or shrugged shoulders.'
                        },
                        {
                            name: 'Prone Y-T-W',
                            sets: 1,
                            reps: '5 each letter',
                            muscle: 'Rear Delts/Mid Back',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lie face down. Make a "Y" with your arms overhead - lift them off the floor. Lower. Make a "T" with arms straight out to the sides - lift. Lower. Make a "W" with elbows bent at 90, hands at head height - lift. Lower. 5 reps of each letter. HOW TO DO IT: Lie face-down on the floor or a bench. With thumbs up: Y position - arms overhead in a wide V. Lift arms off the floor 2-4 inches, squeeze shoulder blades, hold 2 sec, lower. Repeat for T (arms straight out to sides at shoulder height) and W (elbows bent to 90, hands at head height like a W). 5 reps of each.',
                            cues: ['Thumbs UP for all three positions', 'Lift comes from the upper back, not the lower back', 'Forehead can rest on a rolled towel', '2 second hold at the top', 'Do not crank the neck'],
                            anatomyTip: 'Trains the rear delts, rhomboids, and lower traps - the upper-back muscles responsible for shoulder positioning. Direct antidote to rounded desk shoulders.'
                        },
                        {
                            name: 'Active Hang',
                            sets: 2,
                            reps: '20-30 seconds',
                            muscle: 'Shoulders/Lats',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Grab a pull-up bar (or any sturdy overhead bar). Hang from it with arms straight. ACTIVE means: push your shoulders DOWN AWAY from your ears (do not let them shrug up to your ears). Hold for 20-30 seconds. HOW TO DO IT: Grip an overhead bar slightly wider than shoulders, palms forward. Hang with arms fully extended. Engage your lats by pulling your shoulder blades DOWN and slightly together - your body should rise a tiny bit when you do this. Hold the active position 20-30 seconds. 2 sets.',
                            cues: ['DO NOT let shoulders shrug up to ears', 'Pull shoulder blades down and slightly together', 'Lats stay engaged the whole time', 'Brace core gently', 'Build up - start with 10 sec'],
                            anatomyTip: 'Decompresses the spine, opens the shoulder capsule, and builds grip and lat strength. Critical for shoulder health and traction relief from desk sitting.'
                        }
                    ]},
                    { day: 6, name: 'Wrists', focus: 'Wrist mobility and strength in all four directions', exercises: [
                        {
                            name: 'Wrist CARs',
                            sets: 1,
                            reps: '5 circles each direction, each wrist',
                            muscle: 'Wrist Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Extend one arm in front. Make a fist. Slowly draw the biggest possible circle with your fist by moving the WRIST only (keep the arm still). Like stirring a tiny pot with your fist. HOW TO DO IT: Extend one arm straight in front, palm down. Make a relaxed fist. Without moving the elbow or shoulder, slowly trace the largest circle you can with the fist - up, in toward you, down, out away. 5 circles, then reverse. Switch sides.',
                            cues: ['Arm stays still - move ONLY the wrist', 'Maximize the circle range', 'SLOW - 5 sec per circle', 'Both directions equally', 'Both wrists'],
                            anatomyTip: 'Wrists are ignored joints. Daily CARs preserve range and prevent the stiffness that creeps in from typing, phone use, and aging.'
                        },
                        {
                            name: 'Wrist Push-Ups (Palms Down)',
                            sets: 2,
                            reps: '5',
                            muscle: 'Wrist Extensors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Get on hands and knees with palms flat on the floor, fingers pointing FORWARD. Lift the palms off the floor while leaving the fingers down - just the heels of your hands move up. Then press the palms back down. Tiny range. HOW TO DO IT: On hands and knees, palms flat, fingers pointed forward. Keeping fingers planted, lift the heels of your hands off the floor by curling at the wrist. Lower the palms back down. 5 reps. This builds wrist strength in extension.',
                            cues: ['Fingers STAY planted on the floor', 'Only the palm/wrist lifts', 'Slow and controlled', 'Build up to weight on hands gradually', 'Stop if wrists pinch'],
                            anatomyTip: 'Loads the wrist extensors in their working range - directly builds wrist strength for push-ups, planks, and bodyweight movement.'
                        },
                        {
                            name: 'Reverse Wrist Push-Ups (Backs of Hands)',
                            sets: 2,
                            reps: '5',
                            muscle: 'Wrist Flexors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: On hands and knees, but flip your hands over so the BACKS of your hands are on the floor (knuckles up) and fingers point back toward your knees. Press the backs of your hands harder into the floor to lift the knuckles up. Tiny range. HOW TO DO IT: On hands and knees, flip your hands so the backs are on the floor, fingers pointing back toward your knees. Apply gentle pressure. Then press the backs of your hands into the floor to lift the knuckles (curling at the wrist the opposite way). 5 reps. SCALE: keep most of your weight on your knees.',
                            cues: ['Keep weight LIGHT on the hands at first', 'Build up gradually - this is intense', 'If pain - stop and shake out', 'Tiny range only', 'Both hands equally'],
                            anatomyTip: 'Loads the wrist flexors and the often-stiff anterior wrist capsule. Critical for restoring full wrist range and resilience.'
                        },
                        {
                            name: 'Finger Tendon Glides',
                            sets: 2,
                            reps: '5 full cycles each hand',
                            muscle: 'Hand/Finger Tendons',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Five hand positions in sequence: 1) fingers straight, 2) curl into a hook (knuckles bend, fingertips touch palm), 3) curl into a full fist, 4) tabletop (fingers bent 90 at base only), 5) straight fist. Cycle through each position slowly. HOW TO DO IT: Hold your hand out, palm up. Position 1: All fingers fully straight. Position 2: Bend just the middle knuckles, making a hook with straight fingertips. Position 3: Full fist - all knuckles bent, fingertips into palm. Position 4: Tabletop - fingers bent 90 degrees at the base knuckles only. Position 5: Straight fist - fingers fully curled at base and middle, fingertips on palm at the base. Cycle through 1-5 then back. 5 full cycles each hand.',
                            cues: ['Move slowly through each position', 'Feel the difference between positions', 'Both hands equally', 'No pain - this should feel good', 'Great desk break'],
                            anatomyTip: 'Maintains glide of the finger flexor and extensor tendons. Prevents trigger finger, carpal tunnel symptoms, and arthritis stiffness.'
                        }
                    ]},
                    { day: 7, name: 'Neck', focus: 'Cervical spine mobility and isometric strength in all directions', exercises: [
                        {
                            name: 'Neck CARs',
                            sets: 1,
                            reps: '3 circles each direction',
                            muscle: 'Cervical Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A slow head-roll. Chin to chest, ear to shoulder, head tilted back, ear to other shoulder, chin to chest. Like a slow circle traced with your nose. HOW TO DO IT: Sit tall. Slowly trace a circle with your head: chin down to chest, then sweep the ear toward one shoulder, then tilt the head back, then sweep the ear to the other shoulder, then back to chin-on-chest. 3 circles, reverse. SHOULDERS STAY DOWN.',
                            cues: ['Move VERY slowly - 8-10 seconds per circle', 'Shoulders stay DOWN', 'Maximize the range at each point', 'Stop if dizzy or sharp pain', 'Breathe through it'],
                            anatomyTip: 'Active full-range cervical mobility - rare to train consciously and critical for offsetting forward-head posture from screen time.'
                        },
                        {
                            name: 'Chin Tucks (Isometric)',
                            sets: 2,
                            reps: '10 reps × 3-second holds',
                            muscle: 'Deep Neck Flexors',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Make a double chin on purpose. Sit tall, glide your head straight back (like making yourself shorter), pull your chin slightly down. You should look like you have a triple chin. Hold 3 seconds. Release. The "deep neck flexors" are the muscles that pull your head back into proper alignment. HOW TO DO IT: Sit tall, look straight ahead. Without tilting your head down, GLIDE your whole head straight backward - like trying to make a double chin. Hold 3 seconds. Release. 10 reps. Two sets.',
                            cues: ['DO NOT tilt the head down', 'GLIDE the head straight back', 'Embrace the double chin', '3 second hold each rep', 'Great desk drill'],
                            anatomyTip: 'Strengthens the deep neck flexors - the muscles responsible for proper head-neck alignment. Direct fix for forward-head posture and tension headaches.'
                        },
                        {
                            name: 'Lateral Neck Press (Isometric)',
                            sets: 1,
                            reps: '5 holds × 5 seconds each side',
                            muscle: 'Lateral Neck',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Place your hand on the side of your head. Press your head against your hand. Hand and head push against each other equally - neither moves. Hold 5 seconds. This is "isometric" - working without movement. HOW TO DO IT: Sit tall. Place your right palm flat against your right temple. Push your head into your hand AND resist with the hand - neither side moves. Push at about 30-50% effort. Hold 5 seconds. Relax. 5 reps each side.',
                            cues: ['Push at 30-50% effort - not max', 'Head and hand do not move', '5 second holds', 'Both sides equally', 'Breathe through the hold'],
                            anatomyTip: 'Isometric strengthening of lateral neck flexors without joint movement. Safe for almost any neck issue and builds resilience for daily life.'
                        },
                        {
                            name: 'Rotation Isometric',
                            sets: 1,
                            reps: '5 holds × 5 seconds each side',
                            muscle: 'Neck Rotators',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Place your hand on your forehead near the side. Try to TURN your head against your hand. Hand resists - neither moves. Hold 5 seconds. Works the rotation muscles. HOW TO DO IT: Sit tall. Place your right palm on the right side of your forehead. Try to turn your head to the right while the hand resists - neither side moves. 30-50% effort. Hold 5 seconds. Relax. 5 reps. Switch sides.',
                            cues: ['30-50% effort - not maximal', 'No actual movement happens', '5 second holds', 'Both sides equally', 'Excellent neck rehab drill'],
                            anatomyTip: 'Strengthens cervical rotators without straining joints. Particularly useful after whiplash, tension headaches, or chronic neck stiffness.'
                        }
                    ]}
                ]
            },
            {
                id: 'movesmethod-workouts-3x',
                name: 'MovesMethod Workouts',
                description: '3 longer (20-30 min) full-body mobility sessions. Builds flexibility through full-range strength training - no endless stretching. Can be your primary training.',
                kneeSafe: true,
                days: [
                    { day: 1, name: 'Full Body Movement Flow', focus: 'Head-to-toe integrated mobility session (25 min)', exercises: [
                        {
                            name: 'Cat-Cow Flow',
                            sets: 2,
                            reps: '8 reps',
                            muscle: 'Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Start the workout with slow cat-cow on hands and knees. Inhale into the arch (Cow - belly drops, chest lifts), exhale into the round (Cat - back rounds, chin to chest). Move with breath. HOW TO DO IT: On all fours, hands under shoulders, knees under hips. Inhale: drop belly, lift chest and tailbone (Cow). Exhale: round spine, tuck pelvis (Cat). 8 slow reps, 2 rounds. Use this as your spinal warm-up.',
                            cues: ['Move with breath', 'Slow and full range', 'Pad knees', 'Wave through the spine', 'No rushing'],
                            anatomyTip: 'Warms up the spinal flexion/extension pattern and primes the nervous system for spinal movement.'
                        },
                        {
                            name: 'Standing Roll-Down',
                            sets: 1,
                            reps: '5 very slow',
                            muscle: 'Full Spine/Hamstrings',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand tall. Slowly fold forward by rolling down one vertebra at a time, starting from the head, until you reach as far as comfortable. Then roll back up the same way reversed. Like Jefferson curl but standing on the floor. HOW TO DO IT: Stand with feet hip-width, knees soft. Drop chin to chest. Slowly roll down vertebra by vertebra - upper back rounds, then mid, then lower, then pelvis tilts. Arms hang. Pause at the bottom, then reverse: pelvis untilts first, then lower back, mid, upper, head last. Each rep takes 15-20 seconds.',
                            cues: ['Move one segment at a time', 'Knees stay soft', 'No load - bodyweight only', 'Stop if any sharp pain or zap', 'Breathe through it'],
                            anatomyTip: 'Builds spinal flexion tolerance under gravity - the most-feared movement pattern that needs to be trained to be resilient.'
                        },
                        {
                            name: 'World\'s Greatest Stretch Flow',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A 3-step flow per side: 1) deep lunge with hand inside foot (lizard), 2) reach the inside hand up and twist to open the chest, 3) place hand back down and straighten the front leg to stretch the hamstring. Then switch sides. HOW TO DO IT: Step into a deep lunge with the right foot forward. Lower the LEFT (back) knee to a pad. Place RIGHT hand inside right foot (lizard). Now: reach LEFT arm to the ceiling, twist torso open. Plant left hand on floor. Straighten the right leg (push hips back, pull toes up) - feel the hamstring. Re-bend, switch sides. 5 full flows per side.',
                            cues: ['PAD the back knee', 'Move slowly through the 3 positions', 'Twist comes from the mid-back', 'Both sides equally', 'Use a yoga block under the inside hand if floor is too far'],
                            anatomyTip: 'One of the highest-value full-body mobility flows - hits hips, thoracic spine, shoulders, and hamstrings in one move.'
                        },
                        {
                            name: 'Standing Hip CARs',
                            sets: 1,
                            reps: '3 circles each direction, each side',
                            muscle: 'Hip Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand on one leg holding a wall. Lift the other knee and draw a huge slow circle with the knee - front, side, back, around. Stir a pot with your leg. HOW TO DO IT: Stand tall, hand on a wall for balance. Lift one knee toward chest, then sweep it out to the side, then drop it behind you, then return. 3 circles, reverse direction. Switch sides.',
                            cues: ['Move SLOWLY', 'Maximize the range in every direction', 'Standing leg stays locked', 'Hips level', 'Both directions'],
                            anatomyTip: 'Full active range at the hip joint - foundational drill for hip health.'
                        },
                        {
                            name: 'Cossack Squat Flow (Assisted)',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Hips/Inner Thighs',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: A wide side-to-side squat. Hold a door for support. Shift weight to one side, bending that knee while the other leg extends out to the side. Push back to standing, then shift to the other side. Flowing rhythm. HOW TO DO IT: Stand feet wider than shoulders, holding a door or sturdy post. Shift weight right, bending right knee into a side-squat while the left leg straightens. Pause at depth. Push back to wide standing, then shift to the left side. Flow side-to-side. 5 each side.',
                            cues: ['USE THE DOOR for support', 'Only as deep as knees allow', 'Knee tracks toward toes on bending side', 'Toes of straight leg can point up', 'Flow continuously'],
                            anatomyTip: 'Frontal-plane hip mobility under load - trains a movement direction most people never train.'
                        },
                        {
                            name: 'Shoulder CARs',
                            sets: 1,
                            reps: '3 circles each direction, each side',
                            muscle: 'Shoulder Joint',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Same idea as Hip CARs but for shoulders. Draw the biggest possible slow circle with one arm. HOW TO DO IT: Stand tall. Lift one arm in front. Sweep it up overhead, behind you (rotating palm back), down by your side, back to front. 3 circles, reverse. Switch sides.',
                            cues: ['SLOW - 5-8 seconds per circle', 'Maximize the range', 'Other shoulder stays still', 'Brace core', 'Both sides'],
                            anatomyTip: 'Comprehensive shoulder joint mobility training.'
                        },
                        {
                            name: 'Standing Spinal Twists',
                            sets: 1,
                            reps: '10 each side',
                            muscle: 'Thoracic Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand with feet hip-width. Cross arms over chest. Twist your upper body fully to one side, then the other. Hips stay forward. HOW TO DO IT: Feet hip-width, arms crossed at chest (hands on opposite shoulders). Rotate fully to one side, pause at end range, then to the other side. Hips stay square. 10 each direction.',
                            cues: ['Hips stay forward', 'Rotate from mid-back', 'Stack ribs over pelvis', 'Full range, not partial', 'Breath flows'],
                            anatomyTip: 'Thoracic rotation training in a standing functional position.'
                        },
                        {
                            name: 'Active Hang',
                            sets: 2,
                            reps: '20-30 seconds',
                            muscle: 'Shoulders/Lats',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hang from a pull-up bar with arms straight. ACTIVE means: pull your shoulder blades DOWN AWAY from your ears (do not let them shrug up). Hold. HOW TO DO IT: Grip overhead bar slightly wider than shoulders. Hang with arms extended. Pull shoulder blades DOWN and slightly together - your body rises a tiny bit when engaged. Hold 20-30 seconds. 2 sets.',
                            cues: ['NO shoulder shrugging', 'Pull shoulder blades down', 'Lats stay engaged', 'Brace core gently', 'Build up gradually'],
                            anatomyTip: 'Decompresses spine, opens shoulders, builds grip. Critical for shoulder and posture health.'
                        },
                        {
                            name: 'Deep Squat Hold',
                            sets: 1,
                            reps: '30-60 seconds',
                            muscle: 'Hips/Ankles',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hold a door for assistance. Squat down as deep as your knees allow and just HANG OUT in the bottom. Rock side to side gently. Breathe. This was the human resting position for most of history. HOW TO DO IT: Hold a door frame or TRX. Squat down as deep as comfortable. Settle in - rock gently side to side, breathe deeply, look around. 30-60 seconds total. Stand up slowly with control.',
                            cues: ['USE the door - take load off knees', 'Only as deep as comfortable', 'Breathe deeply', 'Rock gently to find comfort', 'Build duration over weeks'],
                            anatomyTip: 'The deep squat is a fundamental human resting position. Spending time here daily reopens the hips, ankles, and lower back.'
                        }
                    ]},
                    { day: 2, name: 'Posterior Chain Mobility', focus: 'Back of body session: spine, glutes, hamstrings (25 min)', exercises: [
                        {
                            name: 'Cat-Cow + Hip Rocks',
                            sets: 2,
                            reps: '8 reps each',
                            muscle: 'Spine/Hips',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Two warm-ups in one. On all fours, do 8 cat-cows. Then in the same position, rock your hips backward toward your heels (sit your butt back) and forward again. HOW TO DO IT: On all fours. 8 cat-cow reps with breath. Stay on all fours. Now rock your hips BACK toward your heels (sit butt back, arms reach forward) and then forward to start position. 8 hip rocks. Repeat the whole sequence twice.',
                            cues: ['Pad the knees', 'Breath with the movement', 'Hip rocks: sit butt back fully', 'Arms can reach forward on the rock-back', 'Both movements slow'],
                            anatomyTip: 'Warms up the entire posterior chain: spine, hip flexors, hamstrings, calves.'
                        },
                        {
                            name: 'Glute Bridge Isometric',
                            sets: 3,
                            reps: '30 second holds',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Lie on your back, knees bent, feet flat. Lift your hips up so your body is a straight line from knees to shoulders. Hold. Squeeze your glutes the entire time. HOW TO DO IT: Lie on your back. Bend knees, feet flat hip-width. Press through your heels and lift your hips until straight line from knee to shoulder. SQUEEZE glutes hard. Hold 30 seconds. Lower with control. 3 sets.',
                            cues: ['SQUEEZE glutes the entire hold', 'Press through HEELS, not toes', 'Ribs tucked - no lower back arch', 'Breathe normally', 'Knees track over toes'],
                            anatomyTip: 'Builds glute strength and endurance without spinal compression. Direct fix for desk-induced sleeping glutes.'
                        },
                        {
                            name: 'Quadruped Hip Extension',
                            sets: 2,
                            reps: '10 each side',
                            muscle: 'Glutes',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: On hands and knees. Lift one leg backward, knee bent at 90 degrees, foot toward the ceiling like pressing the sole of your foot up. Squeeze the glute. Lower. HOW TO DO IT: On all fours, knees padded. Keep one knee bent at 90 degrees and lift that leg backward, pressing the sole of the foot toward the ceiling. Squeeze the glute hard. Lower with control. 10 reps each side.',
                            cues: ['Foot points UP toward ceiling', 'Squeeze the glute at the top', 'Hips stay LEVEL - no twisting', 'Slow controlled both directions', 'Pad knees'],
                            anatomyTip: 'Direct glute activation in an isolated position - cannot cheat with hamstrings or lower back.'
                        },
                        {
                            name: 'Single-Leg RDL (Assisted)',
                            sets: 2,
                            reps: '8 each side',
                            muscle: 'Hamstrings/Glutes',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand on one leg. Hold a wall for balance. Hinge forward at the hips, kicking the other leg back behind you as a counterweight. Flat back, slight knee bend. Return upright. HOW TO DO IT: Stand on right leg, left hand lightly on a wall. Hinge at the right hip, keeping the right knee slightly bent. The left leg kicks back behind you as a counterweight (like a teeter-totter). Reach with the right hand toward the floor. Stop where you feel a stretch in the right hamstring. Stand back up by squeezing the right glute. 8 reps. Switch sides.',
                            cues: ['Use a wall for balance', 'Standing knee soft, not locked', 'Hinge at the HIP, not the back', 'Back leg straight, kicks back as counterweight', 'Squeeze glute to return'],
                            anatomyTip: 'Single-leg posterior chain training with balance demand. Builds hip stability and hamstring mobility together.'
                        },
                        {
                            name: 'Cobra to Child\'s Pose Flow',
                            sets: 2,
                            reps: '8',
                            muscle: 'Spine',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Flow between two yoga poses. Lie face-down, then push up into Cobra (chest up, hips on floor). Then push back into Child\'s Pose (knees under hips, butt to heels, arms reach forward). Flow back and forth. HOW TO DO IT: Lie face down, hands under shoulders. Press up into Cobra: chest off floor, hips stay on floor. Push back through your hips into Child\'s Pose: knees wide or together, butt sits toward heels, arms reach forward, forehead on floor. Return through Cobra. Flow continuously for 8 cycles.',
                            cues: ['Pad knees if Child\'s Pose hurts', 'Cobra: only as high as feels good', 'Child\'s Pose: rest the forehead', 'Slow flowing transitions', 'Breathe with the movement'],
                            anatomyTip: 'Full spinal extension and flexion in alternation. Mobilizes the whole spinal column safely.'
                        },
                        {
                            name: 'Active Pancake Stretch',
                            sets: 1,
                            reps: '5 contractions',
                            muscle: 'Adductors/Hamstrings',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit on the floor with legs spread wide (straddle position). Reach forward between your legs only as far as comfortable. Then PUSH your heels into the floor for 5 seconds (active contraction), relax, and reach further. Repeat 5 times. Active stretching beats passive. HOW TO DO IT: Sit with legs spread wide in a V, knees facing up, toes pulled toward you. Hinge forward at the hips with a flat back as far as comfortable. From that position, press your heels DOWN into the floor for 5 seconds (you will not actually move - it is an isometric). Relax. Try to reach a tiny bit further. Repeat 5 times.',
                            cues: ['Only as wide as comfortable', 'Hinge at the HIP, flat back', 'Press heels into floor for 5 sec each contraction', 'Reach a tiny bit further after each', 'No bouncing'],
                            anatomyTip: 'Active stretching with isometric contractions (PNF-style) creates real ROM gains. Passive stretching alone rarely works long-term.'
                        },
                        {
                            name: 'Deep Squat to Stand (Assisted)',
                            sets: 1,
                            reps: '8',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Hold a door for assistance. Slowly squat down as deep as comfortable, pause, then stand back up. The door helps the knees. HOW TO DO IT: Hold a door frame. Lower over 3-5 seconds into your deepest comfortable squat. Pause 1-2 sec. Stand up with control. 8 reps.',
                            cues: ['USE the door', '3-5 second descent', 'Only as deep as knees allow', 'Pause briefly at the bottom', 'Drive up through heels'],
                            anatomyTip: 'Closing drill - reinforces the deep squat pattern with full-range hip and ankle work.'
                        }
                    ]},
                    { day: 3, name: 'Move Like a Human', focus: 'Locomotion patterns, multi-plane movement (25 min)', exercises: [
                        {
                            name: 'Bear Crawl',
                            sets: 2,
                            reps: '4 forward + 4 back',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Crawl on hands and feet (not knees) with knees hovering 1 inch off the floor. Opposite hand and foot move together. HOW TO DO IT: Hands and knees, knees lifted 1 inch off floor. Move forward by stepping right hand + left foot, then left hand + right foot. 4 steps forward, 4 back. 2 rounds.',
                            cues: ['Opposite limbs move together', 'Hips stay level', 'Knees hover - never touch', 'Slow and controlled', 'Look at the floor ahead'],
                            anatomyTip: 'The fundamental contralateral locomotor pattern - integrates core, shoulders, and hips into one system.'
                        },
                        {
                            name: 'Crab Walk',
                            sets: 1,
                            reps: '4 forward + 4 back',
                            muscle: 'Glutes/Shoulders',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit on the floor, lean back with palms on the floor behind you, feet flat in front. Lift your hips off the floor (tabletop). Walk forward and backward on hands and feet like a crab. HOW TO DO IT: Sit on the floor, palms behind you (fingers facing your feet or out to the sides - whichever is easier on wrists). Feet flat in front. Lift hips off the floor into a reverse tabletop. Walk: step right hand back, left foot back, then left hand back, right foot back. 4 steps each way. Lower hips only if tired.',
                            cues: ['Palms positioned for wrist comfort', 'Hips stay UP off the floor', 'Squeeze glutes throughout', 'Slow and controlled', 'Lower if grip or wrist fatigue'],
                            anatomyTip: 'Reverse-bear locomotion - trains posterior chain, glutes, shoulders, and triceps in a coordinated pattern most adults never do.'
                        },
                        {
                            name: 'Lateral Lunge Flow',
                            sets: 2,
                            reps: '5 each side',
                            muscle: 'Hips/Quads',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Stand wide. Lunge sideways to one side - bend that knee, the other leg stays straight. Push back to standing. Then lunge to the other side. HOW TO DO IT: Stand wider than shoulders. Shift weight to the right, bending the right knee into a side-lunge while the left leg stays straight (toes can turn up). Push back to standing. Shift to the left side. 5 each direction. Use a door for support if needed.',
                            cues: ['Use door for balance if needed', 'Knee tracks toward toes', 'Straight leg can flex toes up', 'Only as deep as comfortable', 'Flow continuously'],
                            anatomyTip: 'Frontal-plane locomotion training - rarely done in modern life but essential for hip and knee resilience.'
                        },
                        {
                            name: 'Lizard Lunge + Rotation',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Hips/Thoracic',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Deep lunge with hand INSIDE the front foot. Back knee on a pad. Then reach the other arm up to the ceiling and twist open. HOW TO DO IT: Step into a deep lunge with right foot forward. Lower the left (back) knee to a pad. Right hand on floor INSIDE the right foot. Reach left arm to the ceiling, rotating torso open. Eyes follow the hand. Return hand to floor. 5 reps. Switch sides.',
                            cues: ['Pad the back knee', 'Hand INSIDE the front foot', 'Reach the top hand HIGH', 'Eyes follow the hand', 'Slow and controlled'],
                            anatomyTip: 'Combines deep hip flexion/extension with thoracic rotation - one of the most valuable mobility movements.'
                        },
                        {
                            name: 'Tightrope Walk',
                            sets: 1,
                            reps: '20 steps each way',
                            muscle: 'Balance/Ankles',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Walk in a straight line, heel touching toe each step, like a tightrope. Arms out for balance. HOW TO DO IT: Walk forward heel-to-toe in a straight line. Arms out wide. 20 steps. Return backward heel-to-toe (or turn around).',
                            cues: ['Heel touches toe each step', 'Arms wide for balance', 'Look ahead, not down', 'Slow controlled steps', 'Engage foot arches'],
                            anatomyTip: 'Single-leg balance and ankle stability in dynamic walking - foundational for fall prevention.'
                        },
                        {
                            name: 'Slow Get-Up to Standing',
                            sets: 1,
                            reps: '5 each side',
                            muscle: 'Full Body',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Sit on the floor. Stand up using only one side of your body (one arm + one leg leading). Then sit back down the same way. This is from Turkish get-up family - tests how well you can transition from floor to standing. HOW TO DO IT: Sit on the floor. Use your right hand and right foot to push yourself up to standing without using the left side much. Reverse: slowly lower yourself back to sitting using just the right side. 5 reps. Switch to the left side.',
                            cues: ['Slow and controlled both directions', 'Use a wall or door for assistance if needed', 'Both sides equally', 'Find what works for your knees', 'Build up gradually'],
                            anatomyTip: 'Floor-to-standing transitions predict longevity and independence. Practicing this skill keeps it available.'
                        },
                        {
                            name: 'Deep Squat Walk-Around',
                            sets: 1,
                            reps: '5 small steps',
                            muscle: 'Hips/Ankles',
                            kneeSafe: true,
                            trackProgress: false,
                            instructions: 'PLAIN ENGLISH: Get into the deepest squat your knees allow (use a door for help). From the bottom of the squat, take 5 tiny steps - rotate yourself in a small circle while staying in the squat. Then stand up. HOW TO DO IT: Hold a door for assistance. Squat down as deep as comfortable. From the bottom, take small foot-steps to rotate in place (or shuffle in a small circle). 5 steps total. Stand up with control.',
                            cues: ['USE THE DOOR for support', 'Stay only as deep as comfortable', 'Tiny shuffling steps', 'Breathe through it', 'Skip if knees hurt'],
                            anatomyTip: 'Loaded movement in a deep squat - builds hip and ankle adaptability at end range. Skip if knees are unhappy.'
                        }
                    ]}
                ]
            }
        ];
    }

    renderWorkoutPlans() {
        const container = document.getElementById('workout-content');

        const html = `
            <div class="plans-header">
                <button class="btn-back" onclick="window.fitnessTracker.renderWorkoutHub()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                </button>
                <h2>Workout Plans</h2>
            </div>

            <div class="workout-plans-list">
                ${this.workoutPlans.map(plan => `
                    <div class="workout-plan-card" onclick="window.fitnessTracker.showPlanDetail('${plan.id}')">
                        <div class="plan-header">
                            <h3>${plan.name}</h3>
                            <span class="plan-days">${plan.days.length} days/week</span>
                        </div>
                        <p class="plan-desc">${plan.description}</p>
                        <button class="btn-primary" onclick="event.stopPropagation(); fitnessTracker.selectPlan('${plan.id}')">
                            ${APP_DATA.user.activePlan === plan.id ? '✓ Active' : 'Select Plan'}
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    showPlanDetail(planId) {
        const plan = this.workoutPlans.find(p => p.id === planId);
        if (!plan) return;

        const container = document.getElementById('workout-content');

        const html = `
            <div class="plans-header">
                <button class="btn-back" onclick="window.fitnessTracker.renderWorkoutPlans()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                </button>
                <h2>${plan.name}</h2>
                ${plan.kneeSafe ? '<span class="knee-safe-badge">🦵 Knee-Friendly</span>' : ''}
            </div>

            ${plan.id === 'knee-friendly-2x' ? `
                <div class="progress-tracking-section">
                    <button class="btn-primary" onclick="window.fitnessTracker.showProgressGraphs()">
                        📈 View Strength Progress
                    </button>
                </div>
            ` : ''}

            <div class="plan-days-list">
                ${plan.days.map(day => `
                    <div class="plan-day-card">
                        <div class="day-header">
                            <h3>Day ${day.day}: ${day.name}</h3>
                            <span class="day-focus">${day.focus}</span>
                        </div>
                        <div class="exercise-list">
                            ${day.exercises.map(ex => `
                                <div class="exercise-item ${ex.trackProgress ? 'tracked-exercise' : ''}" onclick="window.fitnessTracker.showExerciseDetail('${plan.id}', ${day.day}, '${ex.name}')">
                                    <div class="ex-header">
                                        <div class="ex-name">${ex.name} ${ex.trackProgress ? '<span class="track-badge">📊</span>' : ''}</div>
                                        <div class="ex-details">${ex.sets} x ${ex.reps}</div>
                                    </div>
                                    <div class="ex-muscle">${ex.muscle}</div>
                                    ${ex.kneeSafe ? '<span class="knee-safe-tag">Knee Safe</span>' : ''}
                                    ${ex.anatomyTip ? `<div class="ex-tip">💡 ${ex.anatomyTip}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn-secondary" onclick="window.fitnessTracker.startWorkout('${plan.id}-${day.day}')">
                            Start This Workout
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    showExerciseDetail(planId, dayNum, exerciseName) {
        const plan = this.workoutPlans.find(p => p.id === planId);
        if (!plan) return;

        const day = plan.days.find(d => d.day === dayNum);
        if (!day) return;

        const exercise = day.exercises.find(e => e.name === exerciseName);
        if (!exercise) return;

        const container = document.getElementById('workout-content');
        const progressData = this.getExerciseProgress(exerciseName);

        const html = `
            <div class="plans-header">
                <button class="btn-back" onclick="window.fitnessTracker.showPlanDetail('${planId}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                </button>
                <h2>${exercise.name}</h2>
            </div>

            <div class="exercise-detail-card">
                <div class="exercise-meta">
                    <span class="meta-item"><strong>Sets:</strong> ${exercise.sets}</span>
                    <span class="meta-item"><strong>Reps:</strong> ${exercise.reps}</span>
                    <span class="meta-item"><strong>Target:</strong> ${exercise.muscle}</span>
                </div>

                ${exercise.kneeSafe ? '<div class="knee-safe-notice">🦵 This exercise is knee-friendly</div>' : ''}

                ${exercise.instructions ? `
                    <div class="exercise-section">
                        <h4>📋 Instructions</h4>
                        <p>${exercise.instructions}</p>
                    </div>
                ` : ''}

                ${exercise.cues && exercise.cues.length > 0 ? `
                    <div class="exercise-section">
                        <h4>🎯 Coaching Cues</h4>
                        <ul class="cues-list">
                            ${exercise.cues.map(cue => `<li>${cue}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                ${exercise.anatomyTip ? `
                    <div class="exercise-section anatomy-section">
                        <h4>🧬 Anatomy Note</h4>
                        <p>${exercise.anatomyTip}</p>
                    </div>
                ` : ''}
            </div>

            ${exercise.trackProgress ? `
                <div class="progress-log-section">
                    <h3>📊 Log Today's Performance</h3>
                    <div class="progress-log-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Weight (lbs)</label>
                                <input type="number" id="log-weight" placeholder="e.g., 135" step="2.5" oninput="window.fitnessTracker.updatePlateCalculator()">
                            </div>
                            <div class="form-group">
                                <label>Reps Completed</label>
                                <input type="number" id="log-reps" placeholder="e.g., 8">
                            </div>
                        </div>

                        <div class="plate-calculator" id="plate-calculator">
                            <div class="plate-calc-header">
                                <span class="plate-calc-icon">🏋️</span>
                                <span>Plate Calculator (45 lb bar)</span>
                            </div>
                            <div class="plate-calc-result" id="plate-calc-result">
                                <p class="plate-hint">Enter weight above to see plates per side</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Notes (optional)</label>
                            <input type="text" id="log-notes" placeholder="e.g., Felt strong, PR!">
                        </div>
                        <button class="btn-primary" onclick="window.fitnessTracker.logExerciseProgress('${exerciseName}')">
                            Save Progress
                        </button>
                    </div>

                    <div class="progress-history">
                        <h4>Recent Progress</h4>
                        ${progressData.length > 0 ? `
                            <div class="progress-mini-chart">
                                ${this.renderMiniProgressChart(progressData)}
                            </div>
                            <div class="progress-list">
                                ${progressData.slice(-5).reverse().map(p => `
                                    <div class="progress-entry">
                                        <span class="pe-date">${formatDateMMDDYYYY(p.date)}</span>
                                        <span class="pe-weight">${p.weight} lbs</span>
                                        <span class="pe-reps">x ${p.reps}</span>
                                        ${p.notes ? `<span class="pe-notes">${p.notes}</span>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : '<p class="no-progress">No progress logged yet. Start tracking!</p>'}
                    </div>
                </div>
            ` : ''}
        `;

        container.innerHTML = html;
    }

    selectPlan(planId) {
        APP_DATA.user.activePlan = planId;
        saveProgress();
        this.renderWorkoutPlans();
    }

    // ============================================
    // EXERCISE PROGRESS TRACKING
    // ============================================

    getExerciseProgress(exerciseName) {
        if (!APP_DATA.user.exerciseProgress) {
            APP_DATA.user.exerciseProgress = {};
        }
        return APP_DATA.user.exerciseProgress[exerciseName] || [];
    }

    // Helper method to add exercise progress from any workout source
    // (manual log, generated workout, workout plans, etc.)
    addToExerciseProgress(exerciseName, weight, reps, date, notes = '') {
        if (!exerciseName || !weight || weight <= 0) return;

        if (!APP_DATA.user.exerciseProgress) {
            APP_DATA.user.exerciseProgress = {};
        }
        if (!APP_DATA.user.exerciseProgress[exerciseName]) {
            APP_DATA.user.exerciseProgress[exerciseName] = [];
        }

        // Check if we already have an entry for this exact date/weight/reps combo to avoid duplicates
        const dateStr = date ? new Date(date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        const existing = APP_DATA.user.exerciseProgress[exerciseName].find(p => {
            const pDateStr = new Date(p.date).toISOString().split('T')[0];
            return pDateStr === dateStr && p.weight === weight && p.reps === reps;
        });

        if (existing) return; // Already logged this exact exercise

        APP_DATA.user.exerciseProgress[exerciseName].push({
            id: Date.now().toString(),
            date: date ? new Date(date).toISOString() : new Date().toISOString(),
            weight,
            reps,
            notes,
            estimated1RM: Math.round(weight * (1 + reps / 30)) // Epley formula
        });

        saveProgress();
    }

    logExerciseProgress(exerciseName) {
        const weight = parseFloat(document.getElementById('log-weight').value);
        const reps = parseInt(document.getElementById('log-reps').value);
        const notes = document.getElementById('log-notes').value;

        if (!weight || !reps) {
            alert('Please enter both weight and reps');
            return;
        }

        if (!APP_DATA.user.exerciseProgress) {
            APP_DATA.user.exerciseProgress = {};
        }
        if (!APP_DATA.user.exerciseProgress[exerciseName]) {
            APP_DATA.user.exerciseProgress[exerciseName] = [];
        }

        APP_DATA.user.exerciseProgress[exerciseName].push({
            id: Date.now().toString(),
            date: new Date().toISOString(),
            weight,
            reps,
            notes,
            estimated1RM: Math.round(weight * (1 + reps / 30)) // Epley formula
        });

        saveProgress();

        if (window.gamification) {
            window.gamification.awardXP(25, 'Logged Exercise Progress');
        }

        alert(`Progress saved! ${weight} lbs x ${reps} reps`);

        // Refresh the current view - search all plans for the exercise
        for (const plan of this.workoutPlans) {
            for (const day of plan.days) {
                const ex = day.exercises.find(e => e.name === exerciseName);
                if (ex) {
                    this.showExerciseDetail(plan.id, day.day, exerciseName);
                    return;
                }
            }
        }
    }

    updatePlateCalculator() {
        const weightInput = document.getElementById('log-weight');
        const resultDiv = document.getElementById('plate-calc-result');
        if (!weightInput || !resultDiv) return;

        const totalWeight = parseFloat(weightInput.value);
        const barWeight = 45; // Standard Olympic bar

        if (!totalWeight || totalWeight < barWeight) {
            resultDiv.innerHTML = `<p class="plate-hint">${totalWeight ? 'Weight must be at least 45 lbs (bar weight)' : 'Enter weight above to see plates per side'}</p>`;
            return;
        }

        const weightPerSide = (totalWeight - barWeight) / 2;
        const plates = this.calculatePlates(weightPerSide);

        if (plates.length === 0) {
            resultDiv.innerHTML = `
                <div class="plate-breakdown">
                    <div class="plate-per-side">
                        <span class="side-label">Each Side:</span>
                        <span class="side-value">Just the bar (45 lbs)</span>
                    </div>
                </div>
            `;
            return;
        }

        const plateVisual = plates.map(p => {
            const colorClass = this.getPlateColorClass(p.weight);
            return `<div class="plate-visual ${colorClass}" title="${p.weight} lb">${p.weight}</div>`.repeat(p.count);
        }).join('');

        const plateList = plates.map(p => `${p.count}x ${p.weight} lb`).join(' + ');

        resultDiv.innerHTML = `
            <div class="plate-breakdown">
                <div class="plate-per-side">
                    <span class="side-label">Each Side (${weightPerSide} lbs):</span>
                </div>
                <div class="plate-visual-row">
                    <div class="bar-end"></div>
                    ${plateVisual}
                </div>
                <div class="plate-list">${plateList}</div>
            </div>
        `;
    }

    calculatePlates(weightPerSide) {
        const availablePlates = [45, 35, 25, 10, 5, 2.5];
        const plates = [];
        let remaining = weightPerSide;

        for (const plateWeight of availablePlates) {
            const count = Math.floor(remaining / plateWeight);
            if (count > 0) {
                plates.push({ weight: plateWeight, count });
                remaining -= count * plateWeight;
            }
        }

        // Round to avoid floating point issues
        remaining = Math.round(remaining * 10) / 10;
        if (remaining > 0) {
            // Can't make exact weight
            return [];
        }

        return plates;
    }

    getPlateColorClass(weight) {
        switch(weight) {
            case 45: return 'plate-45';
            case 35: return 'plate-35';
            case 25: return 'plate-25';
            case 10: return 'plate-10';
            case 5: return 'plate-5';
            case 2.5: return 'plate-2-5';
            default: return 'plate-default';
        }
    }

    renderMiniProgressChart(progressData) {
        const recent = progressData.slice(-8);
        if (recent.length < 2) return '<p class="chart-hint">Log more sessions to see your progress chart</p>';

        const maxWeight = Math.max(...recent.map(p => p.weight));
        const minWeight = Math.min(...recent.map(p => p.weight));
        const range = maxWeight - minWeight || 1;

        return `
            <div class="mini-chart">
                <div class="chart-bars">
                    ${recent.map((p, i) => {
                        const height = ((p.weight - minWeight) / range * 60) + 30;
                        return `
                            <div class="chart-bar-container">
                                <div class="chart-bar" style="height: ${height}%">
                                    <span class="bar-label">${p.weight}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="chart-x-axis">
                    ${recent.map(p => `<span>${new Date(p.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}</span>`).join('')}
                </div>
            </div>
        `;
    }

    showProgressGraphs() {
        const container = document.getElementById('workout-content');

        // Get all tracked exercises - Controlled Glute Step Down is the PRIMARY exercise
        const trackedExercises = [
            'Controlled Glute Step Down', // PRIMARY - Glute strength & knee health tracking
            'Bench Press', 'Barbell Rows', 'Overhead Press',
            'Barbell Hip Thrust', 'Romanian Deadlift', 'Split Squat (Shallow)'
        ];

        const html = `
            <div class="plans-header">
                <button class="btn-back" onclick="window.fitnessTracker.showPlanDetail('knee-friendly-2x')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                </button>
                <h2>Strength Progress</h2>
                <button class="btn-icon btn-reset" onclick="window.fitnessTracker.resetExerciseProgress()" title="Reset all progress data" style="margin-left: auto;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                </button>
            </div>

            <div class="progress-summary">
                ${this.renderProgressSummary(trackedExercises)}
            </div>

            <div class="progress-graphs">
                ${trackedExercises.map(ex => this.renderExerciseGraph(ex)).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    resetExerciseProgress() {
        if (!confirm('Reset ALL exercise progress data and personal records? This cannot be undone.')) return;

        this.clearAllProgressData();
        this.showProgressGraphs();
    }

    resetAllProgress() {
        if (!confirm('Reset ALL exercise progress data and personal records? This cannot be undone.')) return;

        this.clearAllProgressData();
        this.renderWorkoutHub();
    }

    clearAllProgressData() {
        // Clear exercise progress
        APP_DATA.user.exerciseProgress = {};

        // Clear personal records
        localStorage.removeItem('synthesis_personal_records');

        saveProgress();
    }

    renderProgressSummary(exercises) {
        let totalPRs = 0;
        let totalSessions = 0;

        exercises.forEach(ex => {
            const progress = this.getExerciseProgress(ex);
            totalSessions += progress.length;
            if (progress.length > 1) {
                const weights = progress.map(p => p.weight);
                const maxWeight = Math.max(...weights);
                const lastWeight = weights[weights.length - 1];
                if (lastWeight === maxWeight && weights.filter(w => w === maxWeight).length === 1) {
                    totalPRs++;
                }
            }
        });

        return `
            <div class="summary-cards">
                <div class="summary-card">
                    <span class="summary-value">${totalSessions}</span>
                    <span class="summary-label">Total Logged Sessions</span>
                </div>
                <div class="summary-card">
                    <span class="summary-value">${totalPRs}</span>
                    <span class="summary-label">Recent PRs</span>
                </div>
            </div>
        `;
    }

    renderExerciseGraph(exerciseName) {
        const progress = this.getExerciseProgress(exerciseName);
        const isPrimary = exerciseName === 'Controlled Glute Step Down';

        if (progress.length === 0) {
            return `
                <div class="exercise-graph-card ${isPrimary ? 'primary-exercise-card' : ''}">
                    ${isPrimary ? '<div class="primary-badge">⭐ PRIMARY EXERCISE</div>' : ''}
                    <h4>${exerciseName}</h4>
                    ${isPrimary ? '<p class="primary-desc">Track your glute strength & knee health progress here!</p>' : ''}
                    <p class="no-data">No data logged yet - start tracking today!</p>
                </div>
            `;
        }

        const recent = progress.slice(-12);
        const maxWeight = Math.max(...recent.map(p => p.weight));
        const minWeight = Math.min(...recent.map(p => p.weight));
        const range = maxWeight - minWeight || 1;
        const currentMax = maxWeight;
        const firstWeight = recent[0].weight;
        const lastWeight = recent[recent.length - 1].weight;
        const change = lastWeight - firstWeight;
        const changePercent = ((change / firstWeight) * 100).toFixed(1);

        return `
            <div class="exercise-graph-card ${isPrimary ? 'primary-exercise-card' : ''}">
                ${isPrimary ? '<div class="primary-badge">⭐ PRIMARY EXERCISE - Glute Strength & Knee Health</div>' : ''}
                <div class="graph-header">
                    <h4>${exerciseName}</h4>
                    <div class="graph-stats">
                        <span class="current-max">Max: ${currentMax} lbs</span>
                        <span class="change ${change >= 0 ? 'positive' : 'negative'}">
                            ${change >= 0 ? '↑' : '↓'} ${Math.abs(change)} lbs (${change >= 0 ? '+' : ''}${changePercent}%)
                        </span>
                    </div>
                </div>
                <div class="graph-container">
                    <div class="graph-y-axis">
                        <span>${maxWeight}</span>
                        <span>${Math.round((maxWeight + minWeight) / 2)}</span>
                        <span>${minWeight}</span>
                    </div>
                    <div class="graph-area">
                        <svg viewBox="0 0 ${recent.length * 40} 100" preserveAspectRatio="none" class="progress-line-chart">
                            <defs>
                                <linearGradient id="gradient-${exerciseName.replace(/\s/g, '')}" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.3"/>
                                    <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0"/>
                                </linearGradient>
                            </defs>
                            <path class="area-fill" d="
                                M 0 100
                                ${recent.map((p, i) => {
                                    const x = i * 40 + 20;
                                    const y = 100 - ((p.weight - minWeight) / range * 80 + 10);
                                    return `L ${x} ${y}`;
                                }).join(' ')}
                                L ${(recent.length - 1) * 40 + 20} 100
                                Z
                            " fill="url(#gradient-${exerciseName.replace(/\s/g, '')})"/>
                            <polyline class="progress-line" points="
                                ${recent.map((p, i) => {
                                    const x = i * 40 + 20;
                                    const y = 100 - ((p.weight - minWeight) / range * 80 + 10);
                                    return `${x},${y}`;
                                }).join(' ')}
                            " fill="none" stroke="var(--primary-color)" stroke-width="2"/>
                            ${recent.map((p, i) => {
                                const x = i * 40 + 20;
                                const y = 100 - ((p.weight - minWeight) / range * 80 + 10);
                                return `<circle cx="${x}" cy="${y}" r="4" fill="var(--primary-color)" class="data-point"/>`;
                            }).join('')}
                        </svg>
                    </div>
                </div>
                <div class="graph-x-labels">
                    ${recent.map(p => `<span>${new Date(p.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}</span>`).join('')}
                </div>
            </div>
        `;
    }

    getTodayWorkout() {
        if (!APP_DATA.user.activePlan) return null;

        const plan = this.workoutPlans.find(p => p.id === APP_DATA.user.activePlan);
        if (!plan) return null;

        const dayOfWeek = new Date().getDay();
        const dayIndex = dayOfWeek % plan.days.length;
        const day = plan.days[dayIndex];

        return {
            id: `${plan.id}-${day.day}`,
            name: day.name,
            focus: day.focus,
            exercises: day.exercises
        };
    }

    // ============================================
    // HEALTH NOTES & TRACKING
    // ============================================

    getHealthNotes() {
        const stored = localStorage.getItem('synthesis_health_notes');
        if (stored) {
            return JSON.parse(stored);
        }
        return { knee: 'good', energy: 7, notes: '' };
    }

    saveHealthNote(field, value) {
        const notes = this.getHealthNotes();
        notes[field] = value;
        notes.lastUpdated = new Date().toISOString();
        localStorage.setItem('synthesis_health_notes', JSON.stringify(notes));
    }

    getPersonalRecords() {
        const stored = localStorage.getItem('synthesis_personal_records');
        if (stored) {
            return JSON.parse(stored);
        }
        return [];
    }

    addPersonalRecord(exercise, weight, reps, date = new Date().toISOString()) {
        const prs = this.getPersonalRecords();
        const existing = prs.find(pr => pr.exercise.toLowerCase() === exercise.toLowerCase());

        if (existing) {
            if (weight > existing.weight) {
                existing.weight = weight;
                existing.reps = reps;
                existing.date = date;
                existing.isNew = true;
            }
        } else {
            prs.push({ exercise, weight, reps, date, isNew: true });
        }

        // Sort by weight descending
        prs.sort((a, b) => b.weight - a.weight);
        localStorage.setItem('synthesis_personal_records', JSON.stringify(prs));
        return prs;
    }

    getWeekStats() {
        const workouts = APP_DATA.user.workouts || [];
        const prs = this.getPersonalRecords();
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        const weekWorkouts = workouts.filter(w => new Date(w.date) > oneWeekAgo);
        const weekPRs = prs.filter(pr => pr.isNew && new Date(pr.date) > oneWeekAgo);

        return {
            workouts: weekWorkouts.length,
            prs: weekPRs.length
        };
    }

    getLastDose(type) {
        // Check new injection history first
        const injections = this.getInjectionHistory();
        const typeInjections = injections.filter(inj => inj.type.toLowerCase() === type.toLowerCase());

        if (typeInjections.length > 0) {
            const last = typeInjections[typeInjections.length - 1];
            const date = new Date(last.date);
            const today = new Date();
            const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));

            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Yesterday';
            if (diffDays < 7) {
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                return days[date.getDay()];
            }
            return `${diffDays} days ago`;
        }

        // Fall back to old TRT data
        const trtData = APP_DATA.user.trt || {};
        const doses = trtData.doses || [];

        const typeDoses = doses.filter(d => d.type === type);
        if (typeDoses.length === 0) return 'Not logged';

        const last = typeDoses[typeDoses.length - 1];
        const date = new Date(last.date);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    quickLogExercise() {
        const exercise = document.getElementById('quick-exercise')?.value;
        const weight = parseFloat(document.getElementById('quick-weight')?.value) || 0;
        const reps = parseInt(document.getElementById('quick-reps')?.value) || 0;
        const sets = parseInt(document.getElementById('quick-sets')?.value) || 1;

        if (!exercise) {
            alert('Please enter an exercise name');
            return;
        }

        // Add to workout log
        const today = new Date().toISOString().split('T')[0];
        if (!APP_DATA.user.workouts) APP_DATA.user.workouts = [];

        let todayWorkout = APP_DATA.user.workouts.find(w => w.date === today);
        if (!todayWorkout) {
            todayWorkout = { date: today, exercises: [] };
            APP_DATA.user.workouts.push(todayWorkout);
        }

        todayWorkout.exercises.push({
            name: exercise,
            weight: weight,
            reps: reps,
            sets: sets,
            timestamp: new Date().toISOString()
        });

        // Check for PR
        if (weight > 0) {
            this.addPersonalRecord(exercise, weight, reps);
        }

        // Update stats
        if (!APP_DATA.user.workoutStats) {
            APP_DATA.user.workoutStats = { totalWorkouts: 0, currentStreak: 0, totalMinutes: 0 };
        }

        // Save and refresh
        if (typeof saveData === 'function') saveData();

        // Clear form
        document.getElementById('quick-exercise').value = '';
        document.getElementById('quick-weight').value = '';
        document.getElementById('quick-reps').value = '';
        document.getElementById('quick-sets').value = '';

        // Show feedback
        alert(`Logged: ${exercise} - ${weight}lbs x ${reps} reps x ${sets} sets`);

        // Refresh the hub
        this.renderWorkoutHub();
    }

    startWorkout(workoutId) {
        // For now, just log it
        this.showWorkoutLog(workoutId);
    }

    showRandomGenerator() {
        const container = document.getElementById('workout-content');
        if (!container) return;

        // Initialize the generator if not already done
        if (typeof initRandomWorkoutGenerator === 'function' && !window.randomWorkoutGenerator) {
            initRandomWorkoutGenerator();
        }

        const html = `
            <div class="random-generator-view">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderWorkoutHub()">
                        ← Back to Fitness
                    </button>
                </div>
                <div id="random-workout-container"></div>
            </div>
        `;

        container.innerHTML = html;

        // Render the generator UI
        setTimeout(() => {
            const rwContainer = document.getElementById('random-workout-container');
            if (rwContainer && window.randomWorkoutUI) {
                rwContainer.innerHTML = window.randomWorkoutUI.render();
            }
        }, 50);
    }

    showWorkoutLog(preselectedWorkout = null) {
        const container = document.getElementById('workout-content');

        const html = `
            <div class="workout-log-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderWorkoutHub()">
                        ← Back to Fitness
                    </button>
                </div>
                <h3>Log Workout</h3>

                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="workout-date" value="${new Date().toISOString().split('T')[0]}">
                </div>

                <div class="form-group">
                    <label>Workout Type</label>
                    <select id="workout-type">
                        <option value="push">Push (Chest/Shoulders/Triceps)</option>
                        <option value="pull">Pull (Back/Biceps)</option>
                        <option value="legs">Legs</option>
                        <option value="upper">Upper Body</option>
                        <option value="lower">Lower Body</option>
                        <option value="full">Full Body</option>
                        <option value="cardio">Cardio</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Duration (minutes)</label>
                    <input type="number" id="workout-duration" value="60" min="1">
                </div>

                <div class="form-group">
                    <label>Intensity</label>
                    <select id="workout-intensity">
                        <option value="light">Light</option>
                        <option value="moderate" selected>Moderate</option>
                        <option value="hard">Hard</option>
                        <option value="max">Maximum Effort</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Notes (optional)</label>
                    <textarea id="workout-notes" placeholder="How did it go? Any PRs?"></textarea>
                </div>

                <button class="btn-primary" onclick="window.fitnessTracker.saveWorkout()">Log Workout</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderWorkoutHub()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveWorkout() {
        const workout = {
            id: Date.now().toString(),
            date: document.getElementById('workout-date').value + 'T12:00:00',
            type: document.getElementById('workout-type').value,
            duration: parseInt(document.getElementById('workout-duration').value),
            intensity: document.getElementById('workout-intensity').value,
            notes: document.getElementById('workout-notes').value
        };

        if (!APP_DATA.user.workouts) APP_DATA.user.workouts = [];
        APP_DATA.user.workouts.push(workout);

        // Update stats
        if (!APP_DATA.user.workoutStats) {
            APP_DATA.user.workoutStats = { totalWorkouts: 0, currentStreak: 0, longestStreak: 0, totalMinutes: 0 };
        }
        APP_DATA.user.workoutStats.totalWorkouts++;
        APP_DATA.user.workoutStats.totalMinutes += workout.duration;

        // Update streak
        this.updateWorkoutStreak();

        saveProgress();

        // Award XP
        if (window.gamification) {
            window.gamification.awardXP(50, 'Workout Logged');
            window.gamification.updateChallengeProgress('workout');
        }

        alert('Workout logged! +50 XP');
        this.renderWorkoutHub();
    }

    updateWorkoutStreak() {
        const workouts = APP_DATA.user.workouts || [];
        if (workouts.length === 0) return;

        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        const todayWorkout = workouts.find(w => new Date(w.date).toDateString() === today);
        const yesterdayWorkout = workouts.find(w => new Date(w.date).toDateString() === yesterday);

        if (todayWorkout) {
            if (yesterdayWorkout || APP_DATA.user.workoutStats.currentStreak === 0) {
                APP_DATA.user.workoutStats.currentStreak++;
            }
        }

        if (APP_DATA.user.workoutStats.currentStreak > APP_DATA.user.workoutStats.longestStreak) {
            APP_DATA.user.workoutStats.longestStreak = APP_DATA.user.workoutStats.currentStreak;
        }
    }

    renderRecentWorkouts() {
        const workouts = (APP_DATA.user.workouts || []).slice(-5).reverse();

        if (workouts.length === 0) {
            return '<p class="no-workouts">No workouts logged yet. Start tracking your progress!</p>';
        }

        return workouts.map(w => `
            <div class="recent-workout-item">
                <div class="rw-type">${this.getWorkoutIcon(w.type)} ${w.type || w.name || 'Workout'}</div>
                <div class="rw-details">${w.duration} min${w.intensity ? ' | ' + w.intensity : (w.exercises && w.exercises.length ? ' | ' + w.exercises.length + ' exercises' : '')}</div>
                <div class="rw-date">${formatDateMMDDYYYY(w.date)}</div>
                <button class="btn-delete-sm" onclick="window.fitnessTracker.deleteWorkout('${w.id}')" title="Delete">×</button>
            </div>
        `).join('');
    }

    getWorkoutIcon(type) {
        const icons = {
            push: '💪', pull: '🏋️', legs: '🦵', upper: '👆',
            lower: '👇', full: '🔥', cardio: '🏃', other: '⚡'
        };
        return icons[type] || '⚡';
    }

    // ============================================
    // BODY METRICS
    // ============================================

    renderBodyMetrics() {
        window.scrollTo(0, 0);
        const container = document.getElementById('body-metrics-content');
        if (!container) return;

        // Ensure bodyMetrics structure exists
        if (!APP_DATA.user.bodyMetrics) {
            APP_DATA.user.bodyMetrics = { entries: [], goals: {} };
        }
        if (!APP_DATA.user.bodyMetrics.goals) {
            APP_DATA.user.bodyMetrics.goals = {};
        }
        if (!APP_DATA.user.bodyMetrics.entries) {
            APP_DATA.user.bodyMetrics.entries = [];
        }

        const metrics = APP_DATA.user.bodyMetrics;
        const latest = metrics.entries[metrics.entries.length - 1] || {};

        const html = `
            <div class="metrics-current">
                <h3>Current Stats</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <span class="metric-value">${latest.weight || '--'}</span>
                        <span class="metric-unit">lbs</span>
                        <span class="metric-label">Weight</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">${latest.bodyFat || '--'}</span>
                        <span class="metric-unit">%</span>
                        <span class="metric-label">Body Fat</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">${latest.chest || '--'}</span>
                        <span class="metric-unit">in</span>
                        <span class="metric-label">Chest</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">${latest.waist || '--'}</span>
                        <span class="metric-unit">in</span>
                        <span class="metric-label">Waist</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">${latest.arms || '--'}</span>
                        <span class="metric-unit">in</span>
                        <span class="metric-label">Arms</span>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">${latest.thighs || '--'}</span>
                        <span class="metric-unit">in</span>
                        <span class="metric-label">Thighs</span>
                    </div>
                </div>
            </div>

            <div class="metrics-form">
                <h3>Log New Measurements</h3>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="metric-date" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Weight (lbs)</label>
                        <input type="number" id="metric-weight" step="0.1" placeholder="${latest.weight || ''}">
                    </div>
                    <div class="form-group">
                        <label>Body Fat %</label>
                        <input type="number" id="metric-bodyfat" step="0.1" placeholder="${latest.bodyFat || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Chest (in)</label>
                        <input type="number" id="metric-chest" step="0.25" placeholder="${latest.chest || ''}">
                    </div>
                    <div class="form-group">
                        <label>Waist (in)</label>
                        <input type="number" id="metric-waist" step="0.25" placeholder="${latest.waist || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Arms (in)</label>
                        <input type="number" id="metric-arms" step="0.25" placeholder="${latest.arms || ''}">
                    </div>
                    <div class="form-group">
                        <label>Thighs (in)</label>
                        <input type="number" id="metric-thighs" step="0.25" placeholder="${latest.thighs || ''}">
                    </div>
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.saveMetrics()">Save Measurements</button>
            </div>

            <div class="metrics-history">
                <h3>Progress History</h3>
                <div class="history-chart" id="metrics-chart">
                    ${this.renderMetricsChart()}
                </div>
            </div>

            <div class="metrics-goals">
                <h3>Goals</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>Target Weight</label>
                        <input type="number" id="goal-weight" value="${metrics.goals.targetWeight || ''}"
                               onchange="window.fitnessTracker.saveGoal('targetWeight', this.value)">
                    </div>
                    <div class="form-group">
                        <label>Target Body Fat %</label>
                        <input type="number" id="goal-bodyfat" value="${metrics.goals.targetBodyFat || ''}"
                               onchange="window.fitnessTracker.saveGoal('targetBodyFat', this.value)">
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    saveMetrics() {
        const entry = {
            id: Date.now().toString(),
            date: document.getElementById('metric-date').value + 'T12:00:00',
            weight: parseFloat(document.getElementById('metric-weight').value) || null,
            bodyFat: parseFloat(document.getElementById('metric-bodyfat').value) || null,
            chest: parseFloat(document.getElementById('metric-chest').value) || null,
            waist: parseFloat(document.getElementById('metric-waist').value) || null,
            arms: parseFloat(document.getElementById('metric-arms').value) || null,
            thighs: parseFloat(document.getElementById('metric-thighs').value) || null
        };

        if (!APP_DATA.user.bodyMetrics) {
            APP_DATA.user.bodyMetrics = { entries: [], goals: {} };
        }

        APP_DATA.user.bodyMetrics.entries.push(entry);
        saveProgress();

        alert('Measurements saved!');
        this.renderBodyMetrics();
    }

    deleteMetricEntry(id) {
        if (confirm('Delete this measurement entry?')) {
            APP_DATA.user.bodyMetrics.entries = APP_DATA.user.bodyMetrics.entries.filter(e => e.id !== id);
            saveProgress();
            this.renderBodyMetrics();
        }
    }

    saveGoal(key, value) {
        if (!APP_DATA.user.bodyMetrics) {
            APP_DATA.user.bodyMetrics = { entries: [], goals: {} };
        }
        APP_DATA.user.bodyMetrics.goals[key] = parseFloat(value) || null;
        saveProgress();
    }

    renderMetricsChart() {
        const entries = (APP_DATA.user.bodyMetrics?.entries || []).slice(-10);

        if (entries.length < 2) {
            return '<p class="no-data">Log at least 2 entries to see your progress chart.</p>';
        }

        const maxWeight = Math.max(...entries.map(e => e.weight || 0));
        const minWeight = Math.min(...entries.filter(e => e.weight).map(e => e.weight));

        return `
            <div class="simple-chart">
                ${entries.map((entry, i) => {
                    const height = entry.weight ? ((entry.weight - minWeight) / (maxWeight - minWeight) * 80 + 20) : 20;
                    return `
                        <div class="chart-bar" style="height: ${height}%">
                            <span class="bar-value">${entry.weight || '--'}</span>
                            <span class="bar-date">${formatDateMMDDYYYY(entry.date)}</span>
                            <button class="btn-delete-xs" onclick="window.fitnessTracker.deleteMetricEntry('${entry.id}')" title="Delete">×</button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // ============================================
    // TRT PROTOCOL TRACKER
    // ============================================

    renderTRT() {
        window.scrollTo(0, 0);
        const container = document.getElementById('trt-content');
        if (!container) return;

        const trt = APP_DATA.user.trtProtocol || {
            active: false,
            protocol: { compound: 'Testosterone Cypionate', dose: 100, frequency: 'twice weekly' },
            bloodwork: [],
            log: []
        };

        const html = `
            <div class="trt-status ${trt.active ? 'active' : 'inactive'}">
                <h3>TRT Status: ${trt.active ? 'Active' : 'Not Active'}</h3>
                <button class="btn-secondary" onclick="window.fitnessTracker.toggleTRT()">
                    ${trt.active ? 'Deactivate' : 'Activate'} Protocol
                </button>
            </div>

            ${trt.active ? `
                <div class="trt-protocol">
                    <h3>Current Protocol</h3>
                    <div class="protocol-details">
                        <div class="protocol-item">
                            <label>Compound</label>
                            <select id="trt-compound" onchange="window.fitnessTracker.updateProtocol('compound', this.value)">
                                <option ${trt.protocol.compound === 'Testosterone Cypionate' ? 'selected' : ''}>Testosterone Cypionate</option>
                                <option ${trt.protocol.compound === 'Testosterone Enanthate' ? 'selected' : ''}>Testosterone Enanthate</option>
                                <option ${trt.protocol.compound === 'Testosterone Propionate' ? 'selected' : ''}>Testosterone Propionate</option>
                            </select>
                        </div>
                        <div class="protocol-item">
                            <label>Dose (mg per injection)</label>
                            <input type="number" id="trt-dose" value="${trt.protocol.dose}"
                                   onchange="window.fitnessTracker.updateProtocol('dose', this.value)">
                        </div>
                        <div class="protocol-item">
                            <label>Frequency</label>
                            <select id="trt-frequency" onchange="window.fitnessTracker.updateProtocol('frequency', this.value)">
                                <option ${trt.protocol.frequency === 'daily' ? 'selected' : ''}>daily</option>
                                <option ${trt.protocol.frequency === 'every other day' ? 'selected' : ''}>every other day</option>
                                <option ${trt.protocol.frequency === 'twice weekly' ? 'selected' : ''}>twice weekly</option>
                                <option ${trt.protocol.frequency === 'weekly' ? 'selected' : ''}>weekly</option>
                            </select>
                        </div>
                    </div>
                    <p class="protocol-calc">Weekly dose: ~${this.calculateWeeklyDose(trt.protocol)}mg</p>
                </div>

                <div class="trt-log-section">
                    <h3>Injection Log</h3>
                    <button class="btn-primary" onclick="window.fitnessTracker.showInjectionForm()">+ Log Injection</button>
                    <div class="injection-log">
                        ${this.renderInjectionLog(trt.log)}
                    </div>
                </div>

                <div class="trt-bloodwork">
                    <h3>Bloodwork History</h3>
                    <button class="btn-secondary" onclick="window.fitnessTracker.showBloodworkForm()">Add Bloodwork</button>
                    <div class="bloodwork-list">
                        ${this.renderBloodwork(trt.bloodwork)}
                    </div>
                </div>
            ` : `
                <div class="trt-info">
                    <p>Track your TRT protocol, injection schedule, and bloodwork results.</p>
                    <p><strong>Note:</strong> Always work with a qualified healthcare provider for hormone therapy.</p>
                </div>
            `}
        `;

        container.innerHTML = html;
    }

    toggleTRT() {
        if (!APP_DATA.user.trtProtocol) {
            APP_DATA.user.trtProtocol = {
                active: false,
                protocol: { compound: 'Testosterone Cypionate', dose: 100, frequency: 'twice weekly' },
                bloodwork: [],
                log: []
            };
        }
        APP_DATA.user.trtProtocol.active = !APP_DATA.user.trtProtocol.active;
        saveProgress();
        this.renderTRT();
    }

    updateProtocol(key, value) {
        APP_DATA.user.trtProtocol.protocol[key] = key === 'dose' ? parseFloat(value) : value;
        saveProgress();
        this.renderTRT();
    }

    calculateWeeklyDose(protocol) {
        const freqMap = { 'daily': 7, 'every other day': 3.5, 'twice weekly': 2, 'weekly': 1 };
        return Math.round(protocol.dose * (freqMap[protocol.frequency] || 1));
    }

    showInjectionForm() {
        const container = document.getElementById('trt-content');
        const trt = APP_DATA.user.trtProtocol;

        const html = `
            <div class="injection-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderTRT()">
                        ← Back to TRT
                    </button>
                </div>
                <h3>Log Injection</h3>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="inj-date" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-group">
                    <label>Dose (mg)</label>
                    <input type="number" id="inj-dose" value="${trt.protocol.dose}">
                </div>
                <div class="form-group">
                    <label>Compound</label>
                    <select id="inj-compound">
                        <option ${trt.protocol.compound === 'Testosterone Cypionate' ? 'selected' : ''}>Testosterone Cypionate</option>
                        <option ${trt.protocol.compound === 'Testosterone Enanthate' ? 'selected' : ''}>Testosterone Enanthate</option>
                        <option ${trt.protocol.compound === 'Testosterone Propionate' ? 'selected' : ''}>Testosterone Propionate</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Injection Site (optional)</label>
                    <select id="inj-site">
                        <option value="">-- Select --</option>
                        <option>Glute (Left)</option>
                        <option>Glute (Right)</option>
                        <option>Quad (Left)</option>
                        <option>Quad (Right)</option>
                        <option>Delt (Left)</option>
                        <option>Delt (Right)</option>
                        <option>Ventrogluteal (Left)</option>
                        <option>Ventrogluteal (Right)</option>
                    </select>
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.saveInjection()">Save Injection</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderTRT()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveInjection() {
        const injection = {
            id: Date.now().toString(),
            date: document.getElementById('inj-date').value + 'T12:00:00',
            dose: parseFloat(document.getElementById('inj-dose').value),
            compound: document.getElementById('inj-compound').value,
            site: document.getElementById('inj-site').value
        };
        APP_DATA.user.trtProtocol.log.push(injection);
        saveProgress();
        this.renderTRT();
    }

    deleteInjection(id) {
        if (confirm('Delete this injection entry?')) {
            const log = APP_DATA.user.trtProtocol.log;
            // Find by id or by index if id doesn't match
            const index = log.findIndex(inj => inj.id === id || inj.id === parseInt(id));
            if (index > -1) {
                log.splice(index, 1);
            }
            saveProgress();
            this.renderTRT();
        }
    }

    renderInjectionLog(log) {
        const recent = (log || []).slice(-10).reverse();
        if (recent.length === 0) return '<p class="no-log">No injections logged yet.</p>';

        return recent.map((inj, idx) => {
            // Ensure each entry has an id for deletion
            if (!inj.id) {
                inj.id = `legacy-${idx}-${Date.now()}`;
            }
            return `
                <div class="injection-entry">
                    <span class="inj-date">${this.formatDate(inj.date)}</span>
                    <span class="inj-dose">${inj.dose}mg</span>
                    <span class="inj-compound">${inj.compound}</span>
                    ${inj.site ? `<span class="inj-site">${inj.site}</span>` : ''}
                    <div class="entry-actions">
                        <button class="btn-edit-sm" onclick="event.stopPropagation(); window.fitnessTracker.editInjection('${inj.id}')" title="Edit">✎</button>
                        <button class="btn-delete-sm" onclick="event.stopPropagation(); window.fitnessTracker.deleteInjection('${inj.id}')" title="Delete">×</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    editInjection(id) {
        const inj = APP_DATA.user.trtProtocol.log.find(i => i.id === id);
        if (!inj) return;

        const container = document.getElementById('trt-content');
        const trt = APP_DATA.user.trtProtocol;

        const html = `
            <div class="injection-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderTRT()">← Back to TRT</button>
                </div>
                <h3>Edit Injection</h3>
                <input type="hidden" id="inj-edit-id" value="${id}">
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="inj-date" value="${inj.date ? inj.date.split('T')[0] : ''}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Compound</label>
                        <select id="inj-compound">
                            <option value="Testosterone Cypionate" ${inj.compound === 'Testosterone Cypionate' ? 'selected' : ''}>Testosterone Cypionate</option>
                            <option value="Testosterone Enanthate" ${inj.compound === 'Testosterone Enanthate' ? 'selected' : ''}>Testosterone Enanthate</option>
                            <option value="Testosterone Propionate" ${inj.compound === 'Testosterone Propionate' ? 'selected' : ''}>Testosterone Propionate</option>
                            <option value="HCG" ${inj.compound === 'HCG' ? 'selected' : ''}>HCG</option>
                            <option value="Other" ${!['Testosterone Cypionate', 'Testosterone Enanthate', 'Testosterone Propionate', 'HCG'].includes(inj.compound) ? 'selected' : ''}>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Dose (mg/IU)</label>
                        <input type="number" id="inj-dose" value="${inj.dose || ''}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Injection Site</label>
                    <select id="inj-site">
                        <option value="">Select site...</option>
                        <option value="Glute (Left)" ${inj.site === 'Glute (Left)' ? 'selected' : ''}>Glute (Left)</option>
                        <option value="Glute (Right)" ${inj.site === 'Glute (Right)' ? 'selected' : ''}>Glute (Right)</option>
                        <option value="Delt (Left)" ${inj.site === 'Delt (Left)' ? 'selected' : ''}>Delt (Left)</option>
                        <option value="Delt (Right)" ${inj.site === 'Delt (Right)' ? 'selected' : ''}>Delt (Right)</option>
                        <option value="Quad (Left)" ${inj.site === 'Quad (Left)' ? 'selected' : ''}>Quad (Left)</option>
                        <option value="Quad (Right)" ${inj.site === 'Quad (Right)' ? 'selected' : ''}>Quad (Right)</option>
                        <option value="VG (Left)" ${inj.site === 'VG (Left)' ? 'selected' : ''}>VG (Left)</option>
                        <option value="VG (Right)" ${inj.site === 'VG (Right)' ? 'selected' : ''}>VG (Right)</option>
                        <option value="Subcutaneous" ${inj.site === 'Subcutaneous' ? 'selected' : ''}>Subcutaneous</option>
                    </select>
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.updateInjection()">Save Changes</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderTRT()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    updateInjection() {
        const id = document.getElementById('inj-edit-id').value;
        const index = APP_DATA.user.trtProtocol.log.findIndex(i => i.id === id);
        if (index === -1) return;

        APP_DATA.user.trtProtocol.log[index] = {
            id: id,
            date: document.getElementById('inj-date').value + 'T12:00:00',
            compound: document.getElementById('inj-compound').value,
            dose: parseFloat(document.getElementById('inj-dose').value),
            site: document.getElementById('inj-site').value
        };

        saveProgress();
        alert('Injection updated!');
        this.renderTRT();
    }

    // Reference ranges for women
    getLabReferenceRanges() {
        return {
            // Hormones
            totalT: { min: 15, max: 70, unit: 'ng/dL', name: 'Total Testosterone', optimal: '15-70' },
            freeT: { min: 0.3, max: 1.9, unit: 'ng/dL', name: 'Free Testosterone', optimal: '0.3-1.9' },
            estradiol: { min: 30, max: 300, unit: 'pg/mL', name: 'Estradiol', optimal: '30-300 (varies by cycle)' },
            shbg: { min: 18, max: 144, unit: 'nmol/L', name: 'SHBG', optimal: '18-144' },
            prolactin: { min: 2, max: 29, unit: 'ng/mL', name: 'Prolactin', optimal: '2-29' },
            progesterone: { min: 0.1, max: 25, unit: 'ng/mL', name: 'Progesterone', optimal: '0.1-25 (varies by cycle)' },
            fsh: { min: 1.5, max: 12.4, unit: 'mIU/mL', name: 'FSH', optimal: '1.5-12.4 (varies by cycle)' },
            lh: { min: 1.7, max: 8.6, unit: 'mIU/mL', name: 'LH', optimal: '1.7-8.6 (varies by cycle)' },
            dhea: { min: 35, max: 430, unit: 'mcg/dL', name: 'DHEA-S', optimal: '35-430' },
            // Thyroid
            tsh: { min: 0.4, max: 4.0, unit: 'mIU/L', name: 'TSH', optimal: '1.0-2.0', optMin: 1.0, optMax: 2.0 },
            freeT3: { min: 2.3, max: 4.2, unit: 'pg/mL', name: 'Free T3', optimal: '2.3-4.2' },
            freeT4: { min: 0.8, max: 1.8, unit: 'ng/dL', name: 'Free T4', optimal: '0.8-1.8' },
            // Metabolic
            glucose: { min: 70, max: 99, unit: 'mg/dL', name: 'Glucose (fasting)', optimal: '70-99' },
            a1c: { min: 0, max: 5.7, unit: '%', name: 'HbA1c', optimal: '< 5.7%', highOnly: true },
            // Lipids
            ldl: { min: 0, max: 100, unit: 'mg/dL', name: 'LDL', optimal: '< 100', highOnly: true },
            hdl: { min: 50, max: 999, unit: 'mg/dL', name: 'HDL', optimal: '> 50', lowOnly: true },
            // Blood
            hematocrit: { min: 36, max: 44, unit: '%', name: 'Hematocrit', optimal: '36-44%' },
            ferritin: { min: 12, max: 150, unit: 'ng/mL', name: 'Ferritin', optimal: '12-150' },
            b12: { min: 200, max: 900, unit: 'pg/mL', name: 'Vitamin B12', optimal: '> 500', optMin: 500 },
            vitD: { min: 30, max: 100, unit: 'ng/mL', name: 'Vitamin D', optimal: '40-60', optMin: 40, optMax: 60 },
            calcium: { min: 8.5, max: 10.5, unit: 'mg/dL', name: 'Calcium', optimal: '8.5-10.5' },
            protein: { min: 6.0, max: 8.3, unit: 'g/dL', name: 'Total Protein', optimal: '6.0-8.3' },
            // Kidney Function
            bun: { min: 7, max: 20, unit: 'mg/dL', name: 'BUN', optimal: '7-20' },
            creatinine: { min: 0.5, max: 1.1, unit: 'mg/dL', name: 'Creatinine', optimal: '0.5-1.1' },
            egfr: { min: 90, max: 999, unit: 'mL/min', name: 'eGFR', optimal: '> 90', lowOnly: true },
            sodium: { min: 136, max: 145, unit: 'mEq/L', name: 'Sodium', optimal: '136-145' },
            potassium: { min: 3.5, max: 5.0, unit: 'mEq/L', name: 'Potassium', optimal: '3.5-5.0' },
            chloride: { min: 98, max: 106, unit: 'mEq/L', name: 'Chloride', optimal: '98-106' },
            co2: { min: 23, max: 29, unit: 'mmol/L', name: 'CO2 (Bicarbonate)', optimal: '23-29' }
        };
    }

    getLabStatus(key, value) {
        if (value === null || value === undefined) return null;
        const ranges = this.getLabReferenceRanges();
        const ref = ranges[key];
        if (!ref) return null;

        if (ref.highOnly) {
            return value <= ref.max ? 'normal' : 'high';
        }
        if (ref.lowOnly) {
            return value >= ref.min ? 'normal' : 'low';
        }
        if (value < ref.min) return 'low';
        if (value > ref.max) return 'high';
        return 'normal';
    }

    showBloodworkForm() {
        const container = document.getElementById('trt-content');

        const html = `
            <div class="bloodwork-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderTRT()">
                        ← Back to TRT
                    </button>
                </div>
                <h3>Add Bloodwork Results</h3>
                <p class="form-note">Fill in the values you have - leave others blank</p>

                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="bw-date" value="${new Date().toISOString().split('T')[0]}">
                </div>

                <h4 class="form-section-title">Hormones</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Total Testosterone (ng/dL)</label>
                        <input type="number" id="bw-total-t">
                        <span class="field-hint">Optimal: 15-70</span>
                    </div>
                    <div class="form-group">
                        <label>Free Testosterone (ng/dL)</label>
                        <input type="number" id="bw-free-t" step="0.1">
                        <span class="field-hint">Optimal: 0.3-1.9</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Estradiol/E2 (pg/mL)</label>
                        <input type="number" id="bw-e2" step="0.1">
                        <span class="field-hint">Varies by cycle phase</span>
                    </div>
                    <div class="form-group">
                        <label>SHBG (nmol/L)</label>
                        <input type="number" id="bw-shbg" step="0.1">
                        <span class="field-hint">Optimal: 18-144</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Prolactin (ng/mL)</label>
                        <input type="number" id="bw-prolactin" step="0.1">
                        <span class="field-hint">Optimal: 2-29</span>
                    </div>
                    <div class="form-group">
                        <label>Progesterone (ng/mL)</label>
                        <input type="number" id="bw-progesterone" step="0.1">
                        <span class="field-hint">Varies by cycle phase</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>FSH (mIU/mL)</label>
                        <input type="number" id="bw-fsh" step="0.1">
                        <span class="field-hint">Varies by cycle phase</span>
                    </div>
                    <div class="form-group">
                        <label>LH (mIU/mL)</label>
                        <input type="number" id="bw-lh" step="0.1">
                        <span class="field-hint">Varies by cycle phase</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>DHEA-S (mcg/dL)</label>
                        <input type="number" id="bw-dhea" step="1">
                        <span class="field-hint">Optimal: 35-430</span>
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Thyroid</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>TSH (mIU/L)</label>
                        <input type="number" id="bw-tsh" step="0.01">
                        <span class="field-hint">Optimal: 1.0-2.0</span>
                    </div>
                    <div class="form-group">
                        <label>Free T3 (pg/mL)</label>
                        <input type="number" id="bw-free-t3" step="0.1">
                        <span class="field-hint">Optimal: 2.3-4.2</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Free T4 (ng/dL)</label>
                        <input type="number" id="bw-free-t4" step="0.01">
                        <span class="field-hint">Optimal: 0.8-1.8</span>
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Metabolic</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Glucose - Fasting (mg/dL)</label>
                        <input type="number" id="bw-glucose">
                        <span class="field-hint">Optimal: 70-99</span>
                    </div>
                    <div class="form-group">
                        <label>HbA1c (%)</label>
                        <input type="number" id="bw-a1c" step="0.1">
                        <span class="field-hint">Optimal: < 5.7%</span>
                    </div>
                </div>

                <h4 class="form-section-title">Lipids</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>LDL (mg/dL)</label>
                        <input type="number" id="bw-ldl">
                        <span class="field-hint">Optimal: < 100</span>
                    </div>
                    <div class="form-group">
                        <label>HDL (mg/dL)</label>
                        <input type="number" id="bw-hdl">
                        <span class="field-hint">Optimal: > 50</span>
                    </div>
                </div>

                <h4 class="form-section-title">Kidney Function</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>BUN (mg/dL)</label>
                        <input type="number" id="bw-bun" step="0.1">
                        <span class="field-hint">Optimal: 7-20</span>
                    </div>
                    <div class="form-group">
                        <label>Creatinine (mg/dL)</label>
                        <input type="number" id="bw-creatinine" step="0.01">
                        <span class="field-hint">Optimal: 0.5-1.1</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>eGFR (mL/min)</label>
                        <input type="number" id="bw-egfr">
                        <span class="field-hint">Optimal: > 90</span>
                    </div>
                    <div class="form-group">
                        <label>Sodium (mEq/L)</label>
                        <input type="number" id="bw-sodium">
                        <span class="field-hint">Optimal: 136-145</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Potassium (mEq/L)</label>
                        <input type="number" id="bw-potassium" step="0.1">
                        <span class="field-hint">Optimal: 3.5-5.0</span>
                    </div>
                    <div class="form-group">
                        <label>Chloride (mEq/L)</label>
                        <input type="number" id="bw-chloride">
                        <span class="field-hint">Optimal: 98-106</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>CO2/Bicarbonate (mmol/L)</label>
                        <input type="number" id="bw-co2">
                        <span class="field-hint">Optimal: 23-29</span>
                    </div>
                    <div class="form-group">
                        <label>Calcium (mg/dL)</label>
                        <input type="number" id="bw-calcium" step="0.1">
                        <span class="field-hint">Optimal: 8.5-10.5</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Total Protein (g/dL)</label>
                        <input type="number" id="bw-protein" step="0.1">
                        <span class="field-hint">Optimal: 6.0-8.3</span>
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Other Markers</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Hematocrit (%)</label>
                        <input type="number" id="bw-hct" step="0.1">
                        <span class="field-hint">Optimal: 36-44%</span>
                    </div>
                    <div class="form-group">
                        <label>Ferritin (ng/mL)</label>
                        <input type="number" id="bw-ferritin">
                        <span class="field-hint">Optimal: 12-150</span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Vitamin B12 (pg/mL)</label>
                        <input type="number" id="bw-b12">
                        <span class="field-hint">Optimal: > 500</span>
                    </div>
                    <div class="form-group">
                        <label>Vitamin D (ng/mL)</label>
                        <input type="number" id="bw-vitd" step="0.1">
                        <span class="field-hint">Optimal: 40-60</span>
                    </div>
                </div>

                <button class="btn-primary" onclick="window.fitnessTracker.saveBloodwork()">Save Bloodwork</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderTRT()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveBloodwork() {
        const bloodwork = {
            id: Date.now().toString(),
            date: document.getElementById('bw-date').value,
            // Hormones
            totalT: parseFloat(document.getElementById('bw-total-t').value) || null,
            freeT: parseFloat(document.getElementById('bw-free-t').value) || null,
            estradiol: parseFloat(document.getElementById('bw-e2').value) || null,
            shbg: parseFloat(document.getElementById('bw-shbg').value) || null,
            prolactin: parseFloat(document.getElementById('bw-prolactin').value) || null,
            progesterone: parseFloat(document.getElementById('bw-progesterone').value) || null,
            fsh: parseFloat(document.getElementById('bw-fsh').value) || null,
            lh: parseFloat(document.getElementById('bw-lh').value) || null,
            dhea: parseFloat(document.getElementById('bw-dhea').value) || null,
            // Thyroid
            tsh: parseFloat(document.getElementById('bw-tsh').value) || null,
            freeT3: parseFloat(document.getElementById('bw-free-t3').value) || null,
            freeT4: parseFloat(document.getElementById('bw-free-t4').value) || null,
            // Metabolic
            glucose: parseFloat(document.getElementById('bw-glucose').value) || null,
            a1c: parseFloat(document.getElementById('bw-a1c').value) || null,
            // Lipids
            ldl: parseFloat(document.getElementById('bw-ldl').value) || null,
            hdl: parseFloat(document.getElementById('bw-hdl').value) || null,
            // Kidney Function
            bun: parseFloat(document.getElementById('bw-bun').value) || null,
            creatinine: parseFloat(document.getElementById('bw-creatinine').value) || null,
            egfr: parseFloat(document.getElementById('bw-egfr').value) || null,
            sodium: parseFloat(document.getElementById('bw-sodium').value) || null,
            potassium: parseFloat(document.getElementById('bw-potassium').value) || null,
            chloride: parseFloat(document.getElementById('bw-chloride').value) || null,
            co2: parseFloat(document.getElementById('bw-co2').value) || null,
            calcium: parseFloat(document.getElementById('bw-calcium').value) || null,
            protein: parseFloat(document.getElementById('bw-protein').value) || null,
            // Other
            hematocrit: parseFloat(document.getElementById('bw-hct').value) || null,
            ferritin: parseFloat(document.getElementById('bw-ferritin').value) || null,
            b12: parseFloat(document.getElementById('bw-b12').value) || null,
            vitD: parseFloat(document.getElementById('bw-vitd').value) || null
        };

        APP_DATA.user.trtProtocol.bloodwork.push(bloodwork);
        saveProgress();
        alert('Bloodwork saved!');
        this.renderTRT();
    }

    deleteBloodwork(id) {
        if (confirm('Delete this bloodwork entry?')) {
            APP_DATA.user.trtProtocol.bloodwork = APP_DATA.user.trtProtocol.bloodwork.filter(bw => bw.id !== id);
            saveProgress();
            this.renderTRT();
        }
    }

    renderBloodwork(bloodwork) {
        if (!bloodwork || bloodwork.length === 0) {
            return '<p class="no-bloodwork">No bloodwork logged yet.</p>';
        }

        return bloodwork.slice(-5).reverse().map(bw => {
            const getTagClass = (key, val) => {
                const status = this.getLabStatus(key, val);
                if (status === 'low') return 'bw-tag bw-low';
                if (status === 'high') return 'bw-tag bw-high';
                return 'bw-tag bw-normal';
            };

            return `
                <div class="bloodwork-entry">
                    <div class="bw-header">
                        <div class="bw-date">${this.formatDate(bw.date)}</div>
                        <button class="btn-delete-sm" onclick="event.stopPropagation(); window.fitnessTracker.deleteBloodwork('${bw.id}')" title="Delete">×</button>
                    </div>
                    <div class="bw-values">
                        ${bw.totalT ? `<span class="${getTagClass('totalT', bw.totalT)}">Total T: ${bw.totalT}</span>` : ''}
                        ${bw.freeT ? `<span class="${getTagClass('freeT', bw.freeT)}">Free T: ${bw.freeT}</span>` : ''}
                        ${bw.estradiol ? `<span class="${getTagClass('estradiol', bw.estradiol)}">E2: ${bw.estradiol}</span>` : ''}
                        ${bw.shbg ? `<span class="${getTagClass('shbg', bw.shbg)}">SHBG: ${bw.shbg}</span>` : ''}
                        ${bw.prolactin ? `<span class="${getTagClass('prolactin', bw.prolactin)}">Prolactin: ${bw.prolactin}</span>` : ''}
                        ${bw.tsh ? `<span class="${getTagClass('tsh', bw.tsh)}">TSH: ${bw.tsh}</span>` : ''}
                        ${bw.freeT3 ? `<span class="${getTagClass('freeT3', bw.freeT3)}">Free T3: ${bw.freeT3}</span>` : ''}
                        ${bw.freeT4 ? `<span class="${getTagClass('freeT4', bw.freeT4)}">Free T4: ${bw.freeT4}</span>` : ''}
                        ${bw.glucose ? `<span class="${getTagClass('glucose', bw.glucose)}">Glucose: ${bw.glucose}</span>` : ''}
                        ${bw.a1c ? `<span class="${getTagClass('a1c', bw.a1c)}">A1C: ${bw.a1c}%</span>` : ''}
                        ${bw.ldl ? `<span class="${getTagClass('ldl', bw.ldl)}">LDL: ${bw.ldl}</span>` : ''}
                        ${bw.hdl ? `<span class="${getTagClass('hdl', bw.hdl)}">HDL: ${bw.hdl}</span>` : ''}
                        ${bw.bun ? `<span class="${getTagClass('bun', bw.bun)}">BUN: ${bw.bun}</span>` : ''}
                        ${bw.creatinine ? `<span class="${getTagClass('creatinine', bw.creatinine)}">Creatinine: ${bw.creatinine}</span>` : ''}
                        ${bw.egfr ? `<span class="${getTagClass('egfr', bw.egfr)}">eGFR: ${bw.egfr}</span>` : ''}
                        ${bw.hematocrit ? `<span class="${getTagClass('hematocrit', bw.hematocrit)}">HCT: ${bw.hematocrit}%</span>` : ''}
                        ${bw.ferritin ? `<span class="${getTagClass('ferritin', bw.ferritin)}">Ferritin: ${bw.ferritin}</span>` : ''}
                        ${bw.b12 ? `<span class="${getTagClass('b12', bw.b12)}">B12: ${bw.b12}</span>` : ''}
                        ${bw.vitD ? `<span class="${getTagClass('vitD', bw.vitD)}">Vit D: ${bw.vitD}</span>` : ''}
                    </div>
                    <button class="btn-view-details" onclick="window.fitnessTracker.showBloodworkDetail('${bw.id}')">View Details</button>
                </div>
            `;
        }).join('');
    }

    showBloodworkDetail(id) {
        const bw = APP_DATA.user.trtProtocol.bloodwork.find(b => b.id === id);
        if (!bw) return;

        const container = document.getElementById('trt-content');
        const ranges = this.getLabReferenceRanges();

        const renderLabItem = (key, value, customUnit) => {
            if (!value) return '';
            const ref = ranges[key];
            const status = this.getLabStatus(key, value);
            const statusClass = status === 'low' ? 'status-low' : status === 'high' ? 'status-high' : 'status-normal';
            const statusIcon = status === 'low' ? '↓' : status === 'high' ? '↑' : '✓';
            const unit = customUnit || (ref ? ref.unit : '');
            const optimal = ref ? ref.optimal : '';

            return `
                <div class="bw-detail-item ${statusClass}">
                    <div class="bw-item-header">
                        <span class="bw-label">${ref ? ref.name : key}</span>
                        <span class="bw-status-icon">${statusIcon}</span>
                    </div>
                    <span class="bw-value">${value} ${unit}</span>
                    <span class="bw-optimal">Optimal: ${optimal}</span>
                </div>
            `;
        };

        const html = `
            <div class="bloodwork-detail">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderTRT()">
                        ← Back to TRT
                    </button>
                </div>
                <h3>Bloodwork - ${this.formatDate(bw.date)}</h3>

                <div class="bw-legend">
                    <span class="legend-item"><span class="legend-dot status-normal"></span> Normal</span>
                    <span class="legend-item"><span class="legend-dot status-low"></span> Low</span>
                    <span class="legend-item"><span class="legend-dot status-high"></span> High</span>
                </div>

                <div class="bw-detail-section">
                    <h4>Hormones</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('totalT', bw.totalT)}
                        ${renderLabItem('freeT', bw.freeT)}
                        ${renderLabItem('estradiol', bw.estradiol)}
                        ${renderLabItem('shbg', bw.shbg)}
                        ${renderLabItem('prolactin', bw.prolactin)}
                        ${renderLabItem('progesterone', bw.progesterone)}
                        ${renderLabItem('fsh', bw.fsh)}
                        ${renderLabItem('lh', bw.lh)}
                        ${renderLabItem('dhea', bw.dhea)}
                    </div>
                </div>

                <div class="bw-detail-section">
                    <h4>Thyroid</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('tsh', bw.tsh)}
                        ${renderLabItem('freeT3', bw.freeT3)}
                        ${renderLabItem('freeT4', bw.freeT4)}
                    </div>
                </div>

                <div class="bw-detail-section">
                    <h4>Metabolic</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('glucose', bw.glucose)}
                        ${renderLabItem('a1c', bw.a1c)}
                    </div>
                </div>

                <div class="bw-detail-section">
                    <h4>Lipids</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('ldl', bw.ldl)}
                        ${renderLabItem('hdl', bw.hdl)}
                    </div>
                </div>

                <div class="bw-detail-section">
                    <h4>Kidney Function & Electrolytes</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('bun', bw.bun)}
                        ${renderLabItem('creatinine', bw.creatinine)}
                        ${renderLabItem('egfr', bw.egfr)}
                        ${renderLabItem('sodium', bw.sodium)}
                        ${renderLabItem('potassium', bw.potassium)}
                        ${renderLabItem('chloride', bw.chloride)}
                        ${renderLabItem('co2', bw.co2)}
                        ${renderLabItem('calcium', bw.calcium)}
                        ${renderLabItem('protein', bw.protein)}
                    </div>
                </div>

                <div class="bw-detail-section">
                    <h4>Other Markers</h4>
                    <div class="bw-detail-grid">
                        ${renderLabItem('hematocrit', bw.hematocrit)}
                        ${renderLabItem('ferritin', bw.ferritin)}
                        ${renderLabItem('b12', bw.b12)}
                        ${renderLabItem('vitD', bw.vitD)}
                    </div>
                </div>

                <div class="bw-action-buttons">
                    <button class="btn-primary" onclick="window.fitnessTracker.editBloodwork('${bw.id}')">Edit Entry</button>
                    <button class="btn-secondary btn-danger" onclick="window.fitnessTracker.deleteBloodwork('${bw.id}')">Delete Entry</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    editBloodwork(id) {
        const bw = APP_DATA.user.trtProtocol.bloodwork.find(b => b.id === id);
        if (!bw) return;

        const container = document.getElementById('trt-content');

        const html = `
            <div class="bloodwork-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.showBloodworkDetail('${id}')">
                        ← Back to Details
                    </button>
                </div>
                <h3>Edit Bloodwork</h3>
                <p class="form-note">Update the values - leave blank to clear</p>

                <input type="hidden" id="bw-edit-id" value="${id}">

                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="bw-date" value="${bw.date || ''}">
                </div>

                <h4 class="form-section-title">Hormones</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Total Testosterone (ng/dL)</label>
                        <input type="number" id="bw-total-t" value="${bw.totalT || ''}">
                    </div>
                    <div class="form-group">
                        <label>Free Testosterone (ng/dL)</label>
                        <input type="number" id="bw-free-t" step="0.1" value="${bw.freeT || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Estradiol/E2 (pg/mL)</label>
                        <input type="number" id="bw-e2" step="0.1" value="${bw.estradiol || ''}">
                    </div>
                    <div class="form-group">
                        <label>SHBG (nmol/L)</label>
                        <input type="number" id="bw-shbg" step="0.1" value="${bw.shbg || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Prolactin (ng/mL)</label>
                        <input type="number" id="bw-prolactin" step="0.1" value="${bw.prolactin || ''}">
                    </div>
                    <div class="form-group">
                        <label>Progesterone (ng/mL)</label>
                        <input type="number" id="bw-progesterone" step="0.1" value="${bw.progesterone || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>FSH (mIU/mL)</label>
                        <input type="number" id="bw-fsh" step="0.1" value="${bw.fsh || ''}">
                    </div>
                    <div class="form-group">
                        <label>LH (mIU/mL)</label>
                        <input type="number" id="bw-lh" step="0.1" value="${bw.lh || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>DHEA-S (mcg/dL)</label>
                        <input type="number" id="bw-dhea" step="1" value="${bw.dhea || ''}">
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Thyroid</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>TSH (mIU/L)</label>
                        <input type="number" id="bw-tsh" step="0.01" value="${bw.tsh || ''}">
                    </div>
                    <div class="form-group">
                        <label>Free T3 (pg/mL)</label>
                        <input type="number" id="bw-free-t3" step="0.1" value="${bw.freeT3 || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Free T4 (ng/dL)</label>
                        <input type="number" id="bw-free-t4" step="0.01" value="${bw.freeT4 || ''}">
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Metabolic</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Glucose - Fasting (mg/dL)</label>
                        <input type="number" id="bw-glucose" value="${bw.glucose || ''}">
                    </div>
                    <div class="form-group">
                        <label>HbA1c (%)</label>
                        <input type="number" id="bw-a1c" step="0.1" value="${bw.a1c || ''}">
                    </div>
                </div>

                <h4 class="form-section-title">Lipids</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>LDL (mg/dL)</label>
                        <input type="number" id="bw-ldl" value="${bw.ldl || ''}">
                    </div>
                    <div class="form-group">
                        <label>HDL (mg/dL)</label>
                        <input type="number" id="bw-hdl" value="${bw.hdl || ''}">
                    </div>
                </div>

                <h4 class="form-section-title">Kidney Function</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>BUN (mg/dL)</label>
                        <input type="number" id="bw-bun" step="0.1" value="${bw.bun || ''}">
                    </div>
                    <div class="form-group">
                        <label>Creatinine (mg/dL)</label>
                        <input type="number" id="bw-creatinine" step="0.01" value="${bw.creatinine || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>eGFR (mL/min)</label>
                        <input type="number" id="bw-egfr" value="${bw.egfr || ''}">
                    </div>
                    <div class="form-group">
                        <label>Sodium (mEq/L)</label>
                        <input type="number" id="bw-sodium" value="${bw.sodium || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Potassium (mEq/L)</label>
                        <input type="number" id="bw-potassium" step="0.1" value="${bw.potassium || ''}">
                    </div>
                    <div class="form-group">
                        <label>Chloride (mEq/L)</label>
                        <input type="number" id="bw-chloride" value="${bw.chloride || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>CO2/Bicarbonate (mmol/L)</label>
                        <input type="number" id="bw-co2" value="${bw.co2 || ''}">
                    </div>
                    <div class="form-group">
                        <label>Calcium (mg/dL)</label>
                        <input type="number" id="bw-calcium" step="0.1" value="${bw.calcium || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Total Protein (g/dL)</label>
                        <input type="number" id="bw-protein" step="0.1" value="${bw.protein || ''}">
                    </div>
                    <div class="form-group"></div>
                </div>

                <h4 class="form-section-title">Other Markers</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Hematocrit (%)</label>
                        <input type="number" id="bw-hct" step="0.1" value="${bw.hematocrit || ''}">
                    </div>
                    <div class="form-group">
                        <label>Ferritin (ng/mL)</label>
                        <input type="number" id="bw-ferritin" value="${bw.ferritin || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Vitamin B12 (pg/mL)</label>
                        <input type="number" id="bw-b12" value="${bw.b12 || ''}">
                    </div>
                    <div class="form-group">
                        <label>Vitamin D (ng/mL)</label>
                        <input type="number" id="bw-vitd" step="0.1" value="${bw.vitD || ''}">
                    </div>
                </div>

                <button class="btn-primary" onclick="window.fitnessTracker.updateBloodwork()">Save Changes</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.showBloodworkDetail('${id}')">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    updateBloodwork() {
        const id = document.getElementById('bw-edit-id').value;
        const index = APP_DATA.user.trtProtocol.bloodwork.findIndex(b => b.id === id);
        if (index === -1) return;

        APP_DATA.user.trtProtocol.bloodwork[index] = {
            id: id,
            date: document.getElementById('bw-date').value,
            // Hormones
            totalT: parseFloat(document.getElementById('bw-total-t').value) || null,
            freeT: parseFloat(document.getElementById('bw-free-t').value) || null,
            estradiol: parseFloat(document.getElementById('bw-e2').value) || null,
            shbg: parseFloat(document.getElementById('bw-shbg').value) || null,
            prolactin: parseFloat(document.getElementById('bw-prolactin').value) || null,
            progesterone: parseFloat(document.getElementById('bw-progesterone').value) || null,
            fsh: parseFloat(document.getElementById('bw-fsh').value) || null,
            lh: parseFloat(document.getElementById('bw-lh').value) || null,
            dhea: parseFloat(document.getElementById('bw-dhea').value) || null,
            // Thyroid
            tsh: parseFloat(document.getElementById('bw-tsh').value) || null,
            freeT3: parseFloat(document.getElementById('bw-free-t3').value) || null,
            freeT4: parseFloat(document.getElementById('bw-free-t4').value) || null,
            // Metabolic
            glucose: parseFloat(document.getElementById('bw-glucose').value) || null,
            a1c: parseFloat(document.getElementById('bw-a1c').value) || null,
            // Lipids
            ldl: parseFloat(document.getElementById('bw-ldl').value) || null,
            hdl: parseFloat(document.getElementById('bw-hdl').value) || null,
            // Kidney Function
            bun: parseFloat(document.getElementById('bw-bun').value) || null,
            creatinine: parseFloat(document.getElementById('bw-creatinine').value) || null,
            egfr: parseFloat(document.getElementById('bw-egfr').value) || null,
            sodium: parseFloat(document.getElementById('bw-sodium').value) || null,
            potassium: parseFloat(document.getElementById('bw-potassium').value) || null,
            chloride: parseFloat(document.getElementById('bw-chloride').value) || null,
            co2: parseFloat(document.getElementById('bw-co2').value) || null,
            calcium: parseFloat(document.getElementById('bw-calcium').value) || null,
            protein: parseFloat(document.getElementById('bw-protein').value) || null,
            // Other
            hematocrit: parseFloat(document.getElementById('bw-hct').value) || null,
            ferritin: parseFloat(document.getElementById('bw-ferritin').value) || null,
            b12: parseFloat(document.getElementById('bw-b12').value) || null,
            vitD: parseFloat(document.getElementById('bw-vitd').value) || null
        };

        saveProgress();
        alert('Bloodwork updated!');
        this.showBloodworkDetail(id);
    }

    // ============================================
    // SUPPLEMENT STACK
    // ============================================

    renderSupplements() {
        window.scrollTo(0, 0);
        const container = document.getElementById('supplements-content');
        if (!container) return;

        const supplements = APP_DATA.user.supplements || { stack: [], log: [] };

        const html = `
            <div class="supp-header">
                <h3>Your Stack</h3>
                <button class="btn-primary" onclick="window.fitnessTracker.showAddSupplement()">+ Add Supplement</button>
            </div>

            <div class="supplement-stack">
                ${supplements.stack.length === 0 ?
                    '<p class="no-supps">No supplements in your stack. Add your first one!</p>' :
                    supplements.stack.map(supp => `
                        <div class="supplement-card">
                            <div class="supp-info">
                                <h4>${supp.name}</h4>
                                <p class="supp-dose">${supp.dose} ${supp.unit}</p>
                                <p class="supp-timing">${supp.timing}</p>
                                ${supp.reason ? `<p class="supp-reason">Why: ${supp.reason}</p>` : ''}
                            </div>
                            <div class="supp-actions">
                                <button class="btn-icon" onclick="window.fitnessTracker.logSupplementTaken('${supp.id}')">✓</button>
                                <button class="btn-icon delete" onclick="window.fitnessTracker.removeSupplement('${supp.id}')">×</button>
                            </div>
                        </div>
                    `).join('')
                }
            </div>

            <div class="supp-log">
                <h3>Today's Log</h3>
                <div class="today-log">
                    ${this.renderTodaySupplementLog(supplements.log)}
                </div>
            </div>

            <div class="supp-history">
                <div class="history-header">
                    <h3>Supplement History</h3>
                    ${supplements.log && supplements.log.length > 0 ?
                        `<button class="btn-secondary btn-sm" onclick="window.fitnessTracker.clearAllSupplementHistory()">Clear All</button>` :
                        ''
                    }
                </div>
                <div class="history-log">
                    ${this.renderSupplementHistory(supplements.log)}
                </div>
            </div>

            <div class="common-supps">
                <div class="common-supps-header">
                    <h3>Quick Add Common Supplements</h3>
                    <button class="btn-secondary btn-sm" onclick="window.fitnessTracker.toggleEditCommonSupps()">
                        ${this.editingCommonSupps ? 'Done' : 'Edit Doses'}
                    </button>
                </div>
                <p class="common-supps-hint">Click to log as taken. ${this.editingCommonSupps ? 'Click pencil to edit your dose.' : 'Click "Edit Doses" to customize.'}</p>
                <div class="quick-add-grid">
                    ${this.getCommonSupplementsWithCustomDoses().map((supp, idx) => `
                        <div class="quick-add-item ${this.editingCommonSupps ? 'editing' : ''}">
                            <button class="quick-add-btn" onclick="window.fitnessTracker.quickLogSupplement('${supp.name}', '${supp.dose}', '${supp.unit}')">
                                <span class="qa-name">${supp.name}</span>
                                <span class="qa-dose">${supp.dose} ${supp.unit}</span>
                            </button>
                            ${this.editingCommonSupps ? `
                                <button class="qa-edit-btn" onclick="window.fitnessTracker.editCommonSuppDose(${idx})" title="Edit dose">✏️</button>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    renderSupplementHistory(log) {
        if (!log || log.length === 0) {
            return '<p class="no-log">No supplement history yet.</p>';
        }

        // Group logs by date
        const grouped = {};
        log.forEach(l => {
            const dateKey = new Date(l.date).toDateString();
            if (!grouped[dateKey]) {
                grouped[dateKey] = [];
            }
            grouped[dateKey].push(l);
        });

        // Sort dates descending (most recent first), skip today
        const today = new Date().toDateString();
        const sortedDates = Object.keys(grouped)
            .filter(d => d !== today)
            .sort((a, b) => new Date(b) - new Date(a))
            .slice(0, 7); // Show last 7 days

        if (sortedDates.length === 0) {
            return '<p class="no-log">No previous history. Check "Today\'s Log" above.</p>';
        }

        return sortedDates.map(dateKey => {
            const dateObj = new Date(dateKey);
            const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const entries = grouped[dateKey];

            return `
                <div class="history-day">
                    <div class="history-date">${formattedDate}</div>
                    <div class="history-entries">
                        ${entries.map(l => `
                            <div class="log-entry">
                                <span class="log-name">${l.name}</span>
                                <span class="log-time">${new Date(l.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                                <button class="btn-icon delete log-delete" onclick="window.fitnessTracker.deleteSupplementLog('${l.date}')" title="Delete">×</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    getCommonSupplements() {
        return [
            { name: 'Vitamin D3', dose: '5000', unit: 'IU', reason: 'Immune support, bone health' },
            { name: 'Vitamin C', dose: '1000', unit: 'mg', reason: 'Immune support, antioxidant' },
            { name: 'Vitamin B12', dose: '1000', unit: 'mcg', reason: 'Energy, nerve function' },
            { name: 'Vitamin B Complex', dose: '1', unit: 'cap', reason: 'Energy, metabolism' },
            { name: 'Multivitamin', dose: '1', unit: 'cap', reason: 'General health' },
            { name: 'Omega-3 Fish Oil', dose: '1000', unit: 'mg', reason: 'Heart health, brain function' },
            { name: 'Magnesium', dose: '400', unit: 'mg', reason: 'Muscle relaxation, sleep' },
            { name: 'Magnesium Glycinate', dose: '400', unit: 'mg', reason: 'Sleep, muscle recovery' },
            { name: 'Zinc', dose: '30', unit: 'mg', reason: 'Immune support, testosterone' },
            { name: 'Iron', dose: '18', unit: 'mg', reason: 'Energy, blood health' },
            { name: 'Calcium', dose: '500', unit: 'mg', reason: 'Bone health' },
            { name: 'CoQ10', dose: '100', unit: 'mg', reason: 'Heart health, energy' },
            { name: 'Probiotic', dose: '10', unit: 'billion CFU', reason: 'Gut health, digestion' },
            { name: 'Ashwagandha', dose: '600', unit: 'mg', reason: 'Stress relief, testosterone' },
            { name: 'Creatine', dose: '5', unit: 'g', reason: 'Muscle strength, power' },
            { name: 'Protein Powder', dose: '25', unit: 'g', reason: 'Muscle recovery' },
            { name: 'Collagen', dose: '10', unit: 'g', reason: 'Skin, joints, hair' },
            { name: 'Turmeric/Curcumin', dose: '500', unit: 'mg', reason: 'Anti-inflammatory' },
            { name: 'L-Theanine', dose: '200', unit: 'mg', reason: 'Focus, relaxation' },
            { name: 'Melatonin', dose: '3', unit: 'mg', reason: 'Sleep support' },
            { name: 'Biotin', dose: '5000', unit: 'mcg', reason: 'Hair, skin, nails' },
            { name: 'Vitamin K2', dose: '100', unit: 'mcg', reason: 'Bone health, heart' },
            { name: 'Alpha Lipoic Acid', dose: '300', unit: 'mg', reason: 'Antioxidant, blood sugar' },
            { name: 'NAC', dose: '600', unit: 'mg', reason: 'Liver support, antioxidant' },
            { name: 'Quercetin', dose: '500', unit: 'mg', reason: 'Immune, anti-inflammatory' },
            { name: 'Elderberry', dose: '500', unit: 'mg', reason: 'Immune support' },
            { name: 'Saw Palmetto', dose: '320', unit: 'mg', reason: 'Prostate health' },
            { name: 'DHEA', dose: '25', unit: 'mg', reason: 'Hormone support' },
            { name: 'Folic Acid', dose: '400', unit: 'mcg', reason: 'Cell health' },
            { name: 'Potassium', dose: '99', unit: 'mg', reason: 'Electrolyte balance' }
        ];
    }

    getCommonSupplementsWithCustomDoses() {
        const commonSupps = this.getCommonSupplements();
        const customDoses = this.getCustomSuppDoses();

        return commonSupps.map(supp => {
            const custom = customDoses[supp.name];
            if (custom) {
                return { ...supp, dose: custom.dose, unit: custom.unit };
            }
            return supp;
        });
    }

    getCustomSuppDoses() {
        const saved = localStorage.getItem('synthesis_custom_supp_doses');
        return saved ? JSON.parse(saved) : {};
    }

    saveCustomSuppDose(name, dose, unit) {
        const customDoses = this.getCustomSuppDoses();
        customDoses[name] = { dose, unit };
        localStorage.setItem('synthesis_custom_supp_doses', JSON.stringify(customDoses));
    }

    toggleEditCommonSupps() {
        this.editingCommonSupps = !this.editingCommonSupps;
        this.renderSupplements();
    }

    editCommonSuppDose(idx) {
        const supps = this.getCommonSupplementsWithCustomDoses();
        const supp = supps[idx];
        if (!supp) return;

        const newDose = prompt(`Enter your dose for ${supp.name}:`, supp.dose);
        if (newDose === null) return; // Cancelled

        const newUnit = prompt(`Enter unit (mg, g, IU, mcg, cap, ml, billion CFU):`, supp.unit);
        if (newUnit === null) return; // Cancelled

        this.saveCustomSuppDose(supp.name, newDose, newUnit);
        this.renderSupplements();
    }

    quickLogSupplement(name, dose, unit) {
        // Log directly to today's log without adding to stack
        if (!APP_DATA.user.supplements) {
            APP_DATA.user.supplements = { stack: [], log: [] };
        }
        if (!APP_DATA.user.supplements.log) {
            APP_DATA.user.supplements.log = [];
        }

        APP_DATA.user.supplements.log.push({
            supplementId: 'quick-' + Date.now(),
            name: `${name} (${dose} ${unit})`,
            date: new Date().toISOString()
        });

        saveProgress();
        this.renderSupplements();
    }

    showAddSupplement() {
        const container = document.getElementById('supplements-content');
        const commonSupps = this.getCommonSupplements();

        const html = `
            <div class="add-supp-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderSupplements()">
                        ← Back to Supplements
                    </button>
                </div>
                <h3>Add Supplement</h3>

                <div class="form-group">
                    <label>Quick Add Common Supplements</label>
                    <select id="common-supp-select" onchange="window.fitnessTracker.prefillSupplement()">
                        <option value="">-- Select a common supplement --</option>
                        ${commonSupps.map((s, i) => `<option value="${i}">${s.name}</option>`).join('')}
                    </select>
                </div>

                <p class="form-hint">Select a supplement above to auto-fill, then adjust the dose as needed</p>

                <div class="form-divider">
                    <span>or enter manually</span>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="supp-name" placeholder="e.g., Vitamin D3">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Dose</label>
                        <input type="text" id="supp-dose" placeholder="e.g., 5000">
                    </div>
                    <div class="form-group">
                        <label>Unit</label>
                        <select id="supp-unit">
                            <option>mg</option>
                            <option>g</option>
                            <option>IU</option>
                            <option>mcg</option>
                            <option>cap</option>
                            <option>ml</option>
                            <option>billion CFU</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Timing</label>
                    <select id="supp-timing">
                        <option>Morning</option>
                        <option>With Breakfast</option>
                        <option>Lunch</option>
                        <option>Pre-Workout</option>
                        <option>Post-Workout</option>
                        <option>Evening</option>
                        <option>Before Bed</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Why are you taking it? (optional)</label>
                    <input type="text" id="supp-reason" placeholder="e.g., Immune support">
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.saveSupplement()">Add to Stack</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderSupplements()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    prefillSupplement() {
        const select = document.getElementById('common-supp-select');
        const index = select.value;
        if (index === '') return;

        const commonSupps = this.getCommonSupplements();
        const supp = commonSupps[parseInt(index)];

        document.getElementById('supp-name').value = supp.name;
        document.getElementById('supp-dose').value = supp.dose;
        document.getElementById('supp-reason').value = supp.reason;

        // Set the unit dropdown
        const unitSelect = document.getElementById('supp-unit');
        for (let i = 0; i < unitSelect.options.length; i++) {
            if (unitSelect.options[i].value === supp.unit) {
                unitSelect.selectedIndex = i;
                break;
            }
        }

        // Focus on dose field so user can easily edit it
        const doseInput = document.getElementById('supp-dose');
        doseInput.focus();
        doseInput.select(); // Select all text for easy replacement
    }

    saveSupplement() {
        const supp = {
            id: Date.now().toString(),
            name: document.getElementById('supp-name').value,
            dose: document.getElementById('supp-dose').value,
            unit: document.getElementById('supp-unit').value,
            timing: document.getElementById('supp-timing').value,
            reason: document.getElementById('supp-reason').value
        };

        if (!supp.name) {
            alert('Please enter a supplement name');
            return;
        }

        if (!APP_DATA.user.supplements) {
            APP_DATA.user.supplements = { stack: [], log: [] };
        }

        APP_DATA.user.supplements.stack.push(supp);
        saveProgress();
        this.renderSupplements();
    }

    quickAddSupplement(name, dose, unit) {
        if (!APP_DATA.user.supplements) {
            APP_DATA.user.supplements = { stack: [], log: [] };
        }

        const supp = {
            id: Date.now().toString(),
            name,
            dose,
            unit,
            timing: 'Morning',
            reason: ''
        };

        APP_DATA.user.supplements.stack.push(supp);
        saveProgress();
        this.renderSupplements();
    }

    removeSupplement(id) {
        APP_DATA.user.supplements.stack = APP_DATA.user.supplements.stack.filter(s => s.id !== id);
        saveProgress();
        this.renderSupplements();
    }

    logSupplementTaken(id) {
        const supp = APP_DATA.user.supplements.stack.find(s => s.id === id);
        if (!supp) return;

        APP_DATA.user.supplements.log.push({
            supplementId: id,
            name: supp.name,
            date: new Date().toISOString()
        });

        saveProgress();
        this.renderSupplements();
    }

    renderTodaySupplementLog(log) {
        const today = new Date().toDateString();
        const todayLog = (log || []).filter(l => new Date(l.date).toDateString() === today);

        if (todayLog.length === 0) {
            return '<p class="no-log">No supplements taken today.</p>';
        }

        return todayLog.map((l, idx) => `
            <div class="log-entry">
                <span class="log-name">${l.name}</span>
                <span class="log-time">${new Date(l.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                <button class="btn-icon delete log-delete" onclick="window.fitnessTracker.deleteSupplementLog('${l.date}')" title="Delete">×</button>
            </div>
        `).join('');
    }

    deleteSupplementLog(dateStr) {
        if (!APP_DATA.user.supplements || !APP_DATA.user.supplements.log) return;

        APP_DATA.user.supplements.log = APP_DATA.user.supplements.log.filter(l => l.date !== dateStr);
        saveProgress();
        this.renderSupplements();
    }

    clearAllSupplementHistory() {
        if (!confirm('Are you sure you want to clear ALL supplement history? This cannot be undone.')) {
            return;
        }

        if (!APP_DATA.user.supplements) {
            APP_DATA.user.supplements = { stack: [], log: [] };
        }
        APP_DATA.user.supplements.log = [];
        saveProgress();
        this.renderSupplements();
    }

    // ============================================
    // NUTRITION PLANNER
    // ============================================

    renderNutrition() {
        window.scrollTo(0, 0);
        const container = document.getElementById('nutrition-content');
        if (!container) return;

        const nutrition = APP_DATA.user.nutrition || {
            goals: { calories: 2500, protein: 180, carbs: 250, fats: 80 },
            log: []
        };

        const todayLog = this.getTodayNutrition(nutrition.log);
        const totals = this.calculateNutritionTotals(todayLog);

        const html = `
            ${this.renderSuggestedRecipesSection()}

            <div class="recipes-section">
                <div class="section-header">
                    <h3>My Saved Recipes</h3>
                    <button class="btn-primary" onclick="window.fitnessTracker.showAddRecipe()">+ Add Recipe</button>
                </div>
                ${this.renderRecipesList()}
            </div>

            <div class="nutrition-log">
                <h3>Today's Food</h3>
                <button class="btn-primary" onclick="window.fitnessTracker.showAddFood()">+ Log Food</button>

                <div class="food-log">
                    ${todayLog.length === 0 ?
                        '<p class="no-food">No food logged today.</p>' :
                        todayLog.map(item => `
                            <div class="food-item">
                                <div class="food-info">
                                    <span class="food-name">${item.name}</span>
                                    <span class="food-macros">${item.calories} cal | ${item.protein}p ${item.carbs}c ${item.fats}f</span>
                                </div>
                                <button class="btn-icon delete" onclick="window.fitnessTracker.removeFood('${item.id}')">×</button>
                            </div>
                        `).join('')
                    }
                </div>
            </div>

            <div class="quick-foods">
                <h3>Quick Add</h3>
                <div class="food-search-container">
                    <input type="text" id="food-search-input" class="food-search-input" placeholder="Search foods (e.g., chicken, rice, banana...)" oninput="window.fitnessTracker.searchFoods()">
                    <div id="food-search-results" class="food-search-results"></div>
                </div>
                <div class="quick-food-grid">
                    ${this.getQuickFoods().map(food => `
                        <button class="quick-food-btn" onclick="window.fitnessTracker.quickAddFood('${food.name}', ${food.calories}, ${food.protein}, ${food.carbs}, ${food.fats})">
                            ${food.name}<br><small>${food.calories} cal</small>
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="nutrition-goals">
                <h3>Daily Goals</h3>
                <div class="macro-goals">
                    <div class="macro-goal">
                        <div class="macro-ring" style="--progress: ${(totals.calories / nutrition.goals.calories) * 100}%">
                            <span class="macro-value">${totals.calories}</span>
                            <span class="macro-target">/ ${nutrition.goals.calories}</span>
                        </div>
                        <span class="macro-label">Calories</span>
                    </div>
                    <div class="macro-goal">
                        <div class="macro-bar">
                            <div class="macro-fill protein" style="width: ${Math.min((totals.protein / nutrition.goals.protein) * 100, 100)}%"></div>
                        </div>
                        <span class="macro-text">${totals.protein}g / ${nutrition.goals.protein}g Protein</span>
                    </div>
                    <div class="macro-goal">
                        <div class="macro-bar">
                            <div class="macro-fill carbs" style="width: ${Math.min((totals.carbs / nutrition.goals.carbs) * 100, 100)}%"></div>
                        </div>
                        <span class="macro-text">${totals.carbs}g / ${nutrition.goals.carbs}g Carbs</span>
                    </div>
                    <div class="macro-goal">
                        <div class="macro-bar">
                            <div class="macro-fill fats" style="width: ${Math.min((totals.fats / nutrition.goals.fats) * 100, 100)}%"></div>
                        </div>
                        <span class="macro-text">${totals.fats}g / ${nutrition.goals.fats}g Fats</span>
                    </div>
                </div>
                <button class="btn-secondary" onclick="window.fitnessTracker.showGoalsForm()">Edit Goals</button>
            </div>
        `;

        container.innerHTML = html;

        // Show Recipe Assistant FAB when nutrition is rendered
        if (typeof checkAndShowRecipeAssistant === 'function') {
            checkAndShowRecipeAssistant();
        }
    }

    // ============================================
    // RECIPES
    // ============================================

    getSuggestedRecipes() {
        // Get user's saved recipe ideas from assistant
        const userRecipeIdeas = APP_DATA.user.recipeIdeas || [];

        // Static suggested recipes
        const staticRecipes = [
            // BREAKFAST
            {
                id: 'suggested-1',
                name: 'High-Protein Egg Muffins',
                category: 'Breakfast',
                servings: 4,
                prepTime: '10 min',
                cookTime: '20 min',
                calories: 220,
                protein: 18,
                carbs: 6,
                fats: 14,
                ingredients: `12 large eggs
1 cup diced bell peppers (mixed colors)
1 cup fresh spinach, chopped
1/2 cup shredded cheese
1/4 cup diced onion
4 strips turkey bacon, cooked and crumbled
Salt and pepper to taste
Cooking spray`,
                instructions: `Preheat oven to 350°F (175°C).
Spray a 12-cup muffin tin with cooking spray.
Whisk eggs in a large bowl with salt and pepper.
Divide vegetables, bacon, and cheese evenly among muffin cups.
Pour egg mixture evenly over the fillings.
Bake for 20-22 minutes until set.
Let cool 5 minutes before removing.
Store in fridge up to 5 days - reheat 30 seconds.`,
                notes: 'Make ahead Sunday for quick weekday breakfasts! Customize with your favorite veggies.',
                isSuggested: true
            },
            {
                id: 'suggested-2',
                name: 'Overnight Protein Oats',
                category: 'Breakfast',
                servings: 4,
                prepTime: '10 min',
                cookTime: '0 min (overnight)',
                calories: 380,
                protein: 28,
                carbs: 45,
                fats: 10,
                ingredients: `2 cups rolled oats
2 cups Greek yogurt (plain or vanilla)
2 cups milk (any type)
4 scoops vanilla protein powder
4 tbsp chia seeds
4 tbsp honey or maple syrup
2 tsp vanilla extract
1 cup mixed berries for topping
4 tbsp chopped nuts for topping`,
                instructions: `In 4 mason jars or containers, divide oats, yogurt, and milk evenly.
Add 1 scoop protein powder to each jar.
Add 1 tbsp chia seeds and 1 tbsp honey to each.
Add 1/2 tsp vanilla to each jar.
Stir each jar well, seal, and refrigerate overnight.
In the morning, top with berries and nuts.
Eat cold or microwave 1-2 minutes if preferred warm.`,
                notes: 'Prep all 4 jars Sunday night for grab-and-go breakfasts. Keeps 5 days in fridge.',
                isSuggested: true
            },
            {
                id: 'suggested-3',
                name: 'Turkey Sausage Breakfast Burritos',
                category: 'Breakfast',
                servings: 4,
                prepTime: '10 min',
                cookTime: '15 min',
                calories: 420,
                protein: 32,
                carbs: 35,
                fats: 18,
                ingredients: `1 lb turkey sausage (or chicken sausage)
8 large eggs, scrambled
1 cup black beans, drained and rinsed
1 cup shredded cheese
4 large whole wheat tortillas
1/2 cup salsa
1 avocado, sliced
Hot sauce (optional)`,
                instructions: `Brown turkey sausage in a skillet, breaking into crumbles, about 8 minutes.
Scramble eggs in a separate pan until just set.
Warm tortillas in microwave 20 seconds each.
Divide eggs, sausage, beans, and cheese among tortillas.
Top with salsa and avocado slices.
Roll up burrito-style and serve immediately.
Optional: wrap in foil and freeze for meal prep.`,
                notes: 'Freezer-friendly! Wrap individually in foil, freeze up to 1 month. Reheat in microwave 2-3 min.',
                isSuggested: true
            },
            // LUNCH
            {
                id: 'suggested-4',
                name: 'Greek Chicken Power Bowls',
                category: 'Lunch',
                servings: 4,
                prepTime: '15 min',
                cookTime: '20 min',
                calories: 485,
                protein: 42,
                carbs: 38,
                fats: 18,
                ingredients: `1.5 lbs chicken breast
2 cups quinoa, cooked (or rice)
2 cucumbers, diced
1 pint cherry tomatoes, halved
1 red onion, thinly sliced
1 cup kalamata olives
1 cup feta cheese, crumbled
For dressing:
1/4 cup olive oil
3 tbsp lemon juice
2 tsp dried oregano
Salt and pepper`,
                instructions: `Season chicken with oregano, salt, pepper, and 1 tbsp olive oil.
Grill or pan-cook chicken 6-7 minutes per side until cooked through.
Let chicken rest 5 minutes, then slice.
Divide cooked quinoa among 4 bowls.
Top each with chicken, cucumber, tomatoes, onion, olives, and feta.
Whisk together dressing ingredients.
Drizzle dressing over bowls and serve.`,
                notes: 'Great for meal prep! Store components separately and assemble fresh. Chicken keeps 4 days.',
                isSuggested: true
            },
            {
                id: 'suggested-5',
                name: 'Asian Turkey Lettuce Wraps',
                category: 'Lunch',
                servings: 4,
                prepTime: '10 min',
                cookTime: '12 min',
                calories: 320,
                protein: 35,
                carbs: 18,
                fats: 12,
                ingredients: `1.5 lbs ground turkey (93% lean)
1 tbsp sesame oil
4 cloves garlic, minced
1 tbsp fresh ginger, minced
1 can water chestnuts, diced
4 green onions, sliced
1/4 cup soy sauce (or coconut aminos)
2 tbsp rice vinegar
1 tbsp sriracha (optional)
1 head butter lettuce
Sesame seeds and lime wedges for serving`,
                instructions: `Heat sesame oil in a large skillet over medium-high heat.
Add turkey, break up and cook until no longer pink, about 7 minutes.
Add garlic and ginger, cook 1 minute until fragrant.
Stir in water chestnuts, soy sauce, rice vinegar, and sriracha.
Cook 3-4 minutes until sauce thickens slightly.
Remove from heat, stir in green onions.
Serve in butter lettuce cups with sesame seeds and lime.`,
                notes: 'Low-carb and fresh! Can substitute ground chicken. Serve with cauliflower rice for extra volume.',
                isSuggested: true
            },
            {
                id: 'suggested-6',
                name: 'Loaded Sweet Potato Bar',
                category: 'Lunch',
                servings: 4,
                prepTime: '10 min',
                cookTime: '45 min',
                calories: 440,
                protein: 28,
                carbs: 52,
                fats: 14,
                ingredients: `4 large sweet potatoes
1 lb ground turkey or chicken
1 can black beans, drained
1 cup corn (fresh or frozen)
1 cup Greek yogurt (instead of sour cream)
1 cup shredded cheese
1/2 cup green onions, chopped
1 tsp cumin
1 tsp chili powder
Salt and pepper
Hot sauce (optional)`,
                instructions: `Preheat oven to 400°F.
Pierce sweet potatoes with fork, bake 45-50 min until tender.
Meanwhile, brown ground meat with cumin and chili powder.
Add black beans and corn, heat through.
Slice open sweet potatoes, fluff with fork.
Top each potato with meat mixture, cheese, Greek yogurt, and green onions.
Drizzle with hot sauce if desired.`,
                notes: 'Set up as a "bar" so everyone can customize their own! Greek yogurt adds protein and is lighter than sour cream.',
                isSuggested: true
            },
            // DINNER
            {
                id: 'suggested-7',
                name: 'One-Pan Lemon Herb Salmon',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '25 min',
                calories: 420,
                protein: 38,
                carbs: 25,
                fats: 18,
                ingredients: `4 salmon fillets (6 oz each)
1.5 lbs baby potatoes, halved
4 cups broccoli florets
4 tbsp olive oil, divided
4 cloves garlic, minced
2 lemons (juice of 1, 1 sliced)
2 tsp dried dill (or 2 tbsp fresh)
Salt and pepper
Fresh parsley for garnish`,
                instructions: `Preheat oven to 400°F.
Toss potatoes with 2 tbsp olive oil, salt, pepper on a sheet pan.
Roast potatoes for 10 minutes.
Add broccoli to pan, toss with remaining oil.
Place salmon fillets on pan, season with salt, pepper, dill.
Drizzle lemon juice over salmon, top with lemon slices.
Roast 15-18 more minutes until salmon flakes easily.
Garnish with fresh parsley and serve.`,
                notes: 'One pan = easy cleanup! Salmon is packed with omega-3s. Can substitute asparagus for broccoli.',
                isSuggested: true
            },
            {
                id: 'suggested-8',
                name: 'Healthy Turkey Taco Skillet',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '20 min',
                calories: 395,
                protein: 36,
                carbs: 32,
                fats: 14,
                ingredients: `1.5 lbs ground turkey (93% lean)
1 can black beans, drained
1 can diced tomatoes with green chilies
1 cup frozen corn
1 packet taco seasoning (or homemade)
1 cup shredded cheese
Toppings: avocado, Greek yogurt, cilantro, lime
4 cups cauliflower rice (or regular rice)`,
                instructions: `Brown turkey in large skillet over medium-high heat, 7-8 minutes.
Add taco seasoning, stir to coat.
Add black beans, tomatoes, and corn.
Simmer 10 minutes until slightly thickened.
Sprinkle cheese on top, cover 2 minutes to melt.
Meanwhile, heat cauliflower rice according to package.
Serve taco mixture over cauli rice with desired toppings.`,
                notes: 'Family favorite! Cauliflower rice keeps it lower carb. Regular rice works great too for more carbs.',
                isSuggested: true
            },
            {
                id: 'suggested-9',
                name: 'Garlic Butter Shrimp & Zoodles',
                category: 'Dinner',
                servings: 4,
                prepTime: '15 min',
                cookTime: '10 min',
                calories: 285,
                protein: 32,
                carbs: 12,
                fats: 14,
                ingredients: `1.5 lbs large shrimp, peeled and deveined
4 medium zucchini, spiralized (or 2 bags pre-made zoodles)
4 tbsp butter
6 cloves garlic, minced
1/4 cup white wine (or chicken broth)
Juice of 1 lemon
1/4 cup fresh parsley, chopped
1/4 cup parmesan cheese, grated
Red pepper flakes (optional)
Salt and pepper`,
                instructions: `Pat shrimp dry, season with salt, pepper, and red pepper flakes.
Melt 2 tbsp butter in large skillet over medium-high heat.
Cook shrimp 2 minutes per side until pink. Remove and set aside.
Add remaining butter and garlic, cook 1 minute.
Add wine and lemon juice, simmer 2 minutes.
Add zoodles, toss 2-3 minutes until just tender (don't overcook).
Return shrimp to pan, toss with parsley.
Serve topped with parmesan.`,
                notes: 'Ready in 15 minutes! Zoodles keep it low-carb. Can serve over regular pasta for more carbs.',
                isSuggested: true
            },
            {
                id: 'suggested-10',
                name: 'Sheet Pan Chicken Fajitas',
                category: 'Dinner',
                servings: 4,
                prepTime: '15 min',
                cookTime: '25 min',
                calories: 380,
                protein: 38,
                carbs: 28,
                fats: 14,
                ingredients: `1.5 lbs chicken breast, sliced into strips
3 bell peppers (mixed colors), sliced
2 onions, sliced
3 tbsp olive oil
2 tbsp fajita seasoning (or homemade)
8 small flour tortillas (or lettuce wraps)
Toppings: salsa, Greek yogurt, guacamole, cheese, lime
Fresh cilantro`,
                instructions: `Preheat oven to 425°F.
Toss chicken strips with 2 tbsp oil and fajita seasoning.
Spread chicken on one half of sheet pan.
Toss peppers and onions with remaining oil, spread on other half.
Roast 20-25 minutes, stirring veggies halfway through.
Chicken should reach 165°F internal temp.
Warm tortillas and serve with toppings.
Squeeze fresh lime over everything.`,
                notes: 'Easy cleanup dinner! Great for meal prep. Reheat in skillet for best texture.',
                isSuggested: true
            },
            {
                id: 'suggested-11',
                name: 'Healthy Beef & Broccoli',
                category: 'Dinner',
                servings: 4,
                prepTime: '15 min',
                cookTime: '15 min',
                calories: 365,
                protein: 35,
                carbs: 22,
                fats: 15,
                ingredients: `1.5 lbs flank steak, sliced thin against the grain
6 cups broccoli florets
For sauce:
1/4 cup soy sauce (or coconut aminos)
2 tbsp honey
1 tbsp rice vinegar
1 tbsp sesame oil
4 cloves garlic, minced
1 tbsp fresh ginger, minced
1 tbsp cornstarch + 2 tbsp water
2 tbsp vegetable oil for cooking
Sesame seeds, green onions for garnish`,
                instructions: `Whisk together sauce ingredients (except cornstarch) in a bowl.
Mix cornstarch with water to make slurry.
Heat 1 tbsp oil in large skillet or wok over high heat.
Cook broccoli 3-4 minutes until crisp-tender. Remove and set aside.
Add remaining oil, cook beef in batches 2 minutes until browned.
Return all beef to pan, add sauce.
Add cornstarch slurry, stir until thickened, about 1 minute.
Add broccoli back, toss to coat.
Serve over rice with sesame seeds and green onions.`,
                notes: 'Better than takeout! Slice beef thin against the grain for tenderness. Freezing beef 15 min makes slicing easier.',
                isSuggested: true
            },
            {
                id: 'suggested-12',
                name: 'Mediterranean Baked Chicken Thighs',
                category: 'Dinner',
                servings: 4,
                prepTime: '15 min',
                cookTime: '35 min',
                calories: 425,
                protein: 40,
                carbs: 18,
                fats: 22,
                ingredients: `8 bone-in chicken thighs (or 4 large boneless)
1 pint cherry tomatoes
1 can artichoke hearts, drained and quartered
1/2 cup kalamata olives
1/4 cup sun-dried tomatoes
4 cloves garlic, smashed
3 tbsp olive oil
1 tsp dried oregano
1 tsp dried basil
1/2 tsp red pepper flakes
1/2 cup crumbled feta cheese
Fresh basil for garnish`,
                instructions: `Preheat oven to 425°F.
Season chicken thighs with salt, pepper, oregano, and basil.
Heat olive oil in oven-safe skillet, sear chicken skin-side down 5 minutes.
Flip chicken, add tomatoes, artichokes, olives, sun-dried tomatoes, and garlic around chicken.
Transfer to oven, bake 25-30 minutes until chicken reaches 165°F.
Top with feta and fresh basil before serving.
Serve with crusty bread to soak up the juices!`,
                notes: 'The pan juices are incredible! Great with quinoa or couscous. Boneless thighs cook faster (20-25 min).',
                isSuggested: true
            },
            // MEAL PREP
            {
                id: 'suggested-13',
                name: 'Mason Jar Salads (4-Day Prep)',
                category: 'Meal Prep',
                servings: 4,
                prepTime: '30 min',
                cookTime: '0 min',
                calories: 450,
                protein: 35,
                carbs: 32,
                fats: 22,
                ingredients: `For each jar (bottom to top):
3 tbsp balsamic vinaigrette
1/4 cup chickpeas
1/4 cup cherry tomatoes, halved
1/4 cup cucumber, diced
1/4 cup shredded carrots
1/4 cup feta or goat cheese
4 oz grilled chicken, diced
2 cups mixed greens
---
Also needed:
4 wide-mouth mason jars (32 oz)
1.5 lbs chicken breast, grilled`,
                instructions: `Grill and slice chicken breast, let cool completely.
Layer each jar in this order (important for freshness):
1. Dressing at the bottom
2. Hearty items: chickpeas, tomatoes
3. Crunchy items: cucumber, carrots
4. Cheese
5. Protein: chicken
6. Greens on top
Seal tightly and refrigerate.
When ready to eat, shake jar to distribute dressing, pour into bowl.`,
                notes: 'Order matters! Dressing on bottom keeps greens crisp. Lasts 4-5 days in fridge. Perfect for work lunches!',
                isSuggested: true
            },
            {
                id: 'suggested-14',
                name: 'Freezer-Friendly Burrito Bowls',
                category: 'Meal Prep',
                servings: 4,
                prepTime: '20 min',
                cookTime: '25 min',
                calories: 480,
                protein: 38,
                carbs: 48,
                fats: 16,
                ingredients: `1.5 lbs chicken breast
2 cups brown rice or quinoa, cooked
1 can black beans, drained
1 cup corn
1 cup salsa
1 packet taco seasoning
1 cup shredded cheese
For serving fresh (don't freeze):
Avocado, Greek yogurt, lime, cilantro`,
                instructions: `Cook rice or quinoa according to package.
Season chicken with half the taco seasoning, grill or bake until done.
Dice chicken into bite-sized pieces.
Mix remaining taco seasoning with black beans and corn.
Divide rice among 4 meal prep containers.
Top each with chicken, bean mixture, and salsa.
Add cheese on top.
Store fresh toppings separately.
To freeze: seal and freeze up to 2 months.
Reheat: microwave 3-4 minutes from fridge, 5-6 from frozen.`,
                notes: 'Make a double batch and freeze half! Add fresh toppings after reheating for best results.',
                isSuggested: true
            },
            // SNACKS & SIDES
            {
                id: 'suggested-15',
                name: 'Protein Energy Balls',
                category: 'Snack',
                servings: 4,
                prepTime: '15 min',
                cookTime: '0 min',
                calories: 180,
                protein: 10,
                carbs: 20,
                fats: 8,
                ingredients: `1 cup rolled oats
1/2 cup peanut butter (or almond butter)
1/3 cup honey
1/2 cup chocolate chips (or cacao nibs)
2 scoops vanilla or chocolate protein powder
2 tbsp chia seeds
1 tsp vanilla extract
Pinch of salt`,
                instructions: `Mix all ingredients in a large bowl until well combined.
If too dry, add 1 tbsp milk. If too wet, add more oats.
Refrigerate mixture for 15 minutes (easier to roll).
Roll into 16 balls (about 1.5 tbsp each).
Store in airtight container in fridge up to 1 week.
Can also freeze up to 3 months.`,
                notes: 'Perfect pre or post workout! Makes 16 balls, 4 per serving. Kids love these too!',
                isSuggested: true
            },
            {
                id: 'suggested-16',
                name: 'Crispy Air Fryer Chickpeas',
                category: 'Snack',
                servings: 4,
                prepTime: '5 min',
                cookTime: '15 min',
                calories: 140,
                protein: 7,
                carbs: 22,
                fats: 4,
                ingredients: `2 cans chickpeas, drained and rinsed
1 tbsp olive oil
Choose your seasoning:
- Ranch: 1 tbsp ranch seasoning
- Spicy: 1 tsp cumin, 1/2 tsp cayenne, 1/2 tsp garlic powder
- BBQ: 1 tbsp BBQ seasoning
- Everything Bagel: 1 tbsp everything bagel seasoning
Salt to taste`,
                instructions: `Pat chickpeas very dry with paper towels (key for crispiness!).
Toss with olive oil and chosen seasoning.
Air fryer: 390°F for 12-15 minutes, shaking halfway.
Oven alternative: 400°F for 30-40 minutes, stirring every 10 min.
Chickpeas are done when golden and crunchy.
Let cool completely - they crisp up more as they cool.
Store in open container (sealed = soggy).`,
                notes: 'High protein crunchy snack! Best eaten within 2-3 days. Don\'t store in sealed container.',
                isSuggested: true
            },
            // QUICK & EASY
            {
                id: 'suggested-17',
                name: '15-Minute Stir Fry',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '10 min',
                calories: 340,
                protein: 32,
                carbs: 28,
                fats: 12,
                ingredients: `1.5 lbs protein (chicken, shrimp, or tofu), cubed
4 cups stir fry vegetables (fresh or frozen)
For sauce:
1/4 cup soy sauce
2 tbsp honey
1 tbsp sesame oil
2 cloves garlic, minced
1 tsp ginger, minced
1 tbsp cornstarch + 2 tbsp water
2 tbsp vegetable oil
4 cups cooked rice
Green onions and sesame seeds for garnish`,
                instructions: `Mix sauce ingredients together (except cornstarch).
Heat oil in wok or large skillet over high heat.
Cook protein 3-4 minutes until done, remove and set aside.
Add vegetables, stir fry 3-4 minutes until crisp-tender.
Return protein to pan, add sauce.
Mix cornstarch with water, add to pan.
Stir until sauce thickens, about 1 minute.
Serve over rice with green onions and sesame seeds.`,
                notes: 'Use whatever veggies you have! Frozen stir fry mix works great. Prep sauce ahead to make it even faster.',
                isSuggested: true
            },
            {
                id: 'suggested-18',
                name: 'Caprese Chicken Bake',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '25 min',
                calories: 380,
                protein: 45,
                carbs: 8,
                fats: 18,
                ingredients: `4 chicken breasts (6 oz each)
2 cups cherry tomatoes, halved
8 oz fresh mozzarella, sliced
1/4 cup fresh basil leaves
3 tbsp olive oil
3 tbsp balsamic glaze
4 cloves garlic, minced
Salt and pepper
Italian seasoning`,
                instructions: `Preheat oven to 400°F.
Place chicken in baking dish, season with salt, pepper, Italian seasoning.
Scatter tomatoes and garlic around chicken.
Drizzle with olive oil.
Bake 20 minutes until chicken is almost done.
Top each breast with mozzarella slices.
Bake 5 more minutes until cheese is melted.
Drizzle with balsamic glaze, top with fresh basil.`,
                notes: 'Simple but impressive! Great with a side salad or roasted vegetables. Balsamic glaze makes it special.',
                isSuggested: true
            },
            {
                id: 'suggested-19',
                name: 'Black Bean Soup',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '25 min',
                calories: 320,
                protein: 18,
                carbs: 48,
                fats: 8,
                ingredients: `3 cans black beans (2 drained, 1 with liquid)
1 can diced tomatoes with green chilies
1 onion, diced
4 cloves garlic, minced
4 cups chicken or vegetable broth
1 tbsp cumin
1 tsp chili powder
1/2 tsp smoked paprika
2 tbsp olive oil
Juice of 1 lime
Toppings: Greek yogurt, avocado, cilantro, tortilla strips`,
                instructions: `Heat olive oil in large pot over medium heat.
Sauté onion 5 minutes until soft, add garlic for 1 minute.
Add spices (cumin, chili powder, paprika), stir 30 seconds.
Add all black beans, tomatoes, and broth.
Bring to boil, then simmer 15 minutes.
Use immersion blender to blend half the soup (or mash with fork).
Stir in lime juice, adjust seasonings.
Serve with desired toppings.`,
                notes: 'Vegetarian and budget-friendly! Partial blending makes it creamy while keeping texture. Freezes well!',
                isSuggested: true
            },
            {
                id: 'suggested-20',
                name: 'Egg Roll in a Bowl',
                category: 'Dinner',
                servings: 4,
                prepTime: '10 min',
                cookTime: '15 min',
                calories: 295,
                protein: 28,
                carbs: 14,
                fats: 14,
                ingredients: `1.5 lbs ground pork (or turkey/chicken)
1 bag coleslaw mix (14 oz)
4 green onions, sliced
4 cloves garlic, minced
1 tbsp fresh ginger, minced
3 tbsp soy sauce (or coconut aminos)
1 tbsp sesame oil
1 tbsp rice vinegar
Sriracha to taste
Sesame seeds for garnish`,
                instructions: `Brown ground meat in large skillet over medium-high, 6-7 minutes.
Add garlic and ginger, cook 1 minute.
Add coleslaw mix, stir fry 4-5 minutes until wilted but still has crunch.
Add soy sauce, sesame oil, and rice vinegar.
Toss everything together, cook 2 more minutes.
Drizzle with sriracha if desired.
Top with green onions and sesame seeds.
Serve as is or over rice.`,
                notes: 'All the egg roll flavor without the wrapper! Low carb and ready in 20 minutes. Great leftover too!',
                isSuggested: true
            }
        ];

        // Merge static recipes with user's saved recipe ideas
        return [...staticRecipes, ...userRecipeIdeas];
    }

    renderSuggestedRecipesSection() {
        const suggested = this.getSuggestedRecipes();
        const categories = ['Breakfast', 'Lunch', 'Dinner', 'Meal Prep', 'Snack'];

        let html = '<div class="suggested-recipes-section">';
        html += '<div class="section-header"><h3>Recipe Ideas (Serves 4)</h3></div>';
        html += '<p class="suggested-intro">Nutritious, easy recipes for your family. Tap to view details!</p>';

        // Category filter buttons
        html += '<div class="recipe-filter-btns">';
        html += '<button class="filter-btn active" onclick="window.fitnessTracker.filterSuggestedRecipes(\'all\')">All</button>';
        categories.forEach(cat => {
            html += `<button class="filter-btn" onclick="window.fitnessTracker.filterSuggestedRecipes('${cat}')">${cat}</button>`;
        });
        html += '</div>';

        // Recipe cards
        html += '<div class="suggested-recipes-grid" id="suggested-recipes-grid">';
        suggested.forEach(recipe => {
            html += this.renderSuggestedRecipeCard(recipe);
        });
        html += '</div></div>';

        return html;
    }

    renderSuggestedRecipeCard(recipe) {
        return `
            <div class="suggested-recipe-card" data-category="${recipe.category}" onclick="window.fitnessTracker.viewSuggestedRecipe('${recipe.id}')">
                <div class="src-header">
                    <span class="src-name">${recipe.name}</span>
                    <span class="src-category">${recipe.category}</span>
                </div>
                <div class="src-meta">
                    <span class="src-time">${recipe.prepTime} prep</span>
                    <span class="src-servings">Serves ${recipe.servings}</span>
                </div>
                <div class="src-macros">
                    <span>${recipe.calories} cal</span>
                    <span>${recipe.protein}g protein</span>
                </div>
            </div>
        `;
    }

    filterSuggestedRecipes(category) {
        const grid = document.getElementById('suggested-recipes-grid');
        const cards = grid.querySelectorAll('.suggested-recipe-card');
        const buttons = document.querySelectorAll('.recipe-filter-btns .filter-btn');

        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    viewSuggestedRecipe(id) {
        const recipe = this.getSuggestedRecipes().find(r => r.id === id);
        if (!recipe) return;

        const container = document.getElementById('nutrition-content');
        const savedRecipe = (APP_DATA.user.recipes || []).find(r => r.name === recipe.name);
        const alreadySaved = !!savedRecipe;

        const html = `
            <div class="recipe-detail">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderNutrition()">
                        ← Back to Nutrition
                    </button>
                </div>

                <div class="recipe-detail-header">
                    <h3>${recipe.name}</h3>
                    <span class="recipe-category-tag">${recipe.category}</span>
                </div>

                <div class="recipe-quick-info">
                    <div class="rqi-item">
                        <span class="rqi-label">Prep</span>
                        <span class="rqi-value">${recipe.prepTime}</span>
                    </div>
                    <div class="rqi-item">
                        <span class="rqi-label">Cook</span>
                        <span class="rqi-value">${recipe.cookTime}</span>
                    </div>
                    <div class="rqi-item">
                        <span class="rqi-label">Serves</span>
                        <span class="rqi-value">${recipe.servings}</span>
                    </div>
                </div>

                <div class="recipe-macros-detail">
                    <h4>Nutrition (per serving)</h4>
                    <div class="macros-grid">
                        <div class="macro-item"><span class="macro-num">${recipe.calories}</span><span>Calories</span></div>
                        <div class="macro-item"><span class="macro-num">${recipe.protein}g</span><span>Protein</span></div>
                        <div class="macro-item"><span class="macro-num">${recipe.carbs}g</span><span>Carbs</span></div>
                        <div class="macro-item"><span class="macro-num">${recipe.fats}g</span><span>Fats</span></div>
                    </div>
                </div>

                <div class="recipe-section">
                    <h4>Ingredients</h4>
                    <div class="recipe-ingredients">
                        ${recipe.ingredients.split('\n').map(i => i.trim()).filter(i => i).map(i =>
                            i.startsWith('---') ? '<hr class="ingredient-divider">' :
                            i.startsWith('For ') || i.startsWith('Also') || i.startsWith('Choose') ?
                            `<div class="ingredient-header">${i}</div>` :
                            `<div class="ingredient-item">${i}</div>`
                        ).join('')}
                    </div>
                </div>

                <div class="recipe-section">
                    <h4>Instructions</h4>
                    <div class="recipe-instructions">
                        ${recipe.instructions.split('\n').map(s => s.trim()).filter(s => s).map((step, idx) =>
                            `<div class="instruction-step"><span class="step-num">${idx + 1}.</span> ${step}</div>`
                        ).join('')}
                    </div>
                </div>

                ${recipe.notes ? `
                    <div class="recipe-section">
                        <h4>Tips & Notes</h4>
                        <p class="recipe-notes">${recipe.notes}</p>
                    </div>
                ` : ''}

                <div class="recipe-actions">
                    ${alreadySaved ? `
                        <button class="btn-primary" onclick="window.fitnessTracker.editRecipe('${savedRecipe.id}')">Edit Recipe</button>
                        <button class="btn-secondary" onclick="window.fitnessTracker.toggleFavoriteRecipe('${savedRecipe.id}')">${savedRecipe.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                        <button class="btn-secondary btn-danger" onclick="window.fitnessTracker.deleteRecipe('${savedRecipe.id}')">Delete</button>
                    ` : `
                        <button class="btn-primary" onclick="window.fitnessTracker.saveSuggestedRecipe('${recipe.id}')">Save to My Recipes</button>
                    `}
                    <button class="btn-secondary" onclick="window.fitnessTracker.logRecipeMeal('${recipe.id}')">Log This Meal</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    saveSuggestedRecipe(id) {
        const recipe = this.getSuggestedRecipes().find(r => r.id === id);
        if (!recipe) return;

        if (!APP_DATA.user.recipes) {
            APP_DATA.user.recipes = [];
        }

        // Check if already saved
        if (APP_DATA.user.recipes.some(r => r.name === recipe.name)) {
            alert('This recipe is already in your collection!');
            return;
        }

        const newRecipe = {
            id: 'recipe-' + Date.now(),
            name: recipe.name,
            category: recipe.category,
            servings: recipe.servings,
            calories: recipe.calories,
            protein: recipe.protein,
            carbs: recipe.carbs,
            fats: recipe.fats,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            notes: recipe.notes + (recipe.prepTime ? `\n\nPrep: ${recipe.prepTime}, Cook: ${recipe.cookTime}` : ''),
            isFavorite: false,
            wantToTry: true,
            addedAt: new Date().toISOString()
        };

        APP_DATA.user.recipes.push(newRecipe);
        saveProgress();

        if (window.gamification) {
            window.gamification.awardXP(10, 'Saved Recipe');
        }

        alert('Recipe saved to your collection!');
        this.viewSuggestedRecipe(id); // Refresh to show "Already Saved"
    }

    logRecipeMeal(id) {
        const recipe = this.getSuggestedRecipes().find(r => r.id === id) ||
                       (APP_DATA.user.recipes || []).find(r => r.id === id);
        if (!recipe) return;

        this.quickAddFood(
            recipe.name + ' (1 serving)',
            recipe.calories,
            recipe.protein,
            recipe.carbs,
            recipe.fats
        );

        alert(`Logged ${recipe.name} to today's food!`);
    }

    renderRecipesList() {
        const recipes = APP_DATA.user.recipes || [];

        if (recipes.length === 0) {
            return '<p class="no-recipes">No recipes saved yet. Add your favorites!</p>';
        }

        const favorites = recipes.filter(r => r.isFavorite);
        const toTry = recipes.filter(r => r.wantToTry && !r.isFavorite);
        const others = recipes.filter(r => !r.isFavorite && !r.wantToTry);

        let html = '';

        if (favorites.length > 0) {
            html += `
                <div class="recipe-category">
                    <h4>Favorites</h4>
                    <div class="recipes-grid">
                        ${favorites.map(r => this.renderRecipeCard(r)).join('')}
                    </div>
                </div>
            `;
        }

        if (toTry.length > 0) {
            html += `
                <div class="recipe-category">
                    <h4>Want to Try</h4>
                    <div class="recipes-grid">
                        ${toTry.map(r => this.renderRecipeCard(r)).join('')}
                    </div>
                </div>
            `;
        }

        if (others.length > 0) {
            html += `
                <div class="recipe-category">
                    <h4>All Recipes</h4>
                    <div class="recipes-grid">
                        ${others.map(r => this.renderRecipeCard(r)).join('')}
                    </div>
                </div>
            `;
        }

        return html;
    }

    renderRecipeCard(recipe) {
        return `
            <div class="recipe-card" onclick="window.fitnessTracker.viewRecipe('${recipe.id}')">
                <div class="recipe-card-header">
                    <span class="recipe-name">${recipe.name}</span>
                    <div class="recipe-badges">
                        ${recipe.isFavorite ? '<span class="badge-fav">★</span>' : ''}
                        ${recipe.wantToTry ? '<span class="badge-try">To Try</span>' : ''}
                    </div>
                </div>
                ${recipe.category ? `<span class="recipe-category-tag">${recipe.category}</span>` : ''}
                ${recipe.calories ? `<span class="recipe-macros">${recipe.calories} cal</span>` : ''}
            </div>
        `;
    }

    showAddRecipe() {
        const container = document.getElementById('nutrition-content');

        const html = `
            <div class="recipe-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderNutrition()">
                        ← Back to Nutrition
                    </button>
                </div>
                <h3>Add Recipe</h3>

                <div class="form-group">
                    <label>Recipe Name *</label>
                    <input type="text" id="recipe-name" placeholder="e.g., Protein Pancakes">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Category</label>
                        <select id="recipe-category">
                            <option value="">Select...</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snack">Snack</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Meal Prep">Meal Prep</option>
                            <option value="Smoothie">Smoothie</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Servings</label>
                        <input type="number" id="recipe-servings" placeholder="e.g., 4">
                    </div>
                </div>

                <div class="form-group">
                    <label>Ingredients</label>
                    <textarea id="recipe-ingredients" rows="4" placeholder="One ingredient per line..."></textarea>
                </div>

                <div class="form-group">
                    <label>Instructions</label>
                    <textarea id="recipe-instructions" rows="4" placeholder="Step by step..."></textarea>
                </div>

                <div class="form-group">
                    <label>Equipment Needed</label>
                    <textarea id="recipe-equipment" rows="2" placeholder="e.g., Oven, Air Fryer, Blender, Sheet Pan..."></textarea>
                </div>

                <h4 class="form-section-title">Macros (per serving, optional)</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Calories</label>
                        <input type="number" id="recipe-calories">
                    </div>
                    <div class="form-group">
                        <label>Protein (g)</label>
                        <input type="number" id="recipe-protein">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Carbs (g)</label>
                        <input type="number" id="recipe-carbs">
                    </div>
                    <div class="form-group">
                        <label>Fats (g)</label>
                        <input type="number" id="recipe-fats">
                    </div>
                </div>

                <div class="form-group">
                    <label>Source/URL (optional)</label>
                    <input type="text" id="recipe-source" placeholder="Where did you find this recipe?">
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea id="recipe-notes" rows="2" placeholder="Any personal notes..."></textarea>
                </div>

                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="recipe-favorite"> Mark as Favorite
                    </label>
                </div>
                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="recipe-to-try"> Want to Try
                    </label>
                </div>

                <button class="btn-primary" onclick="window.fitnessTracker.saveRecipe()">Save Recipe</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderNutrition()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveRecipe() {
        const name = document.getElementById('recipe-name').value.trim();
        if (!name) {
            alert('Please enter a recipe name');
            return;
        }

        if (!APP_DATA.user.recipes) {
            APP_DATA.user.recipes = [];
        }

        const recipe = {
            id: Date.now().toString(),
            name: name,
            category: document.getElementById('recipe-category').value,
            servings: parseInt(document.getElementById('recipe-servings').value) || null,
            ingredients: document.getElementById('recipe-ingredients').value,
            instructions: document.getElementById('recipe-instructions').value,
            equipment: document.getElementById('recipe-equipment').value,
            calories: parseInt(document.getElementById('recipe-calories').value) || null,
            protein: parseInt(document.getElementById('recipe-protein').value) || null,
            carbs: parseInt(document.getElementById('recipe-carbs').value) || null,
            fats: parseInt(document.getElementById('recipe-fats').value) || null,
            source: document.getElementById('recipe-source').value,
            notes: document.getElementById('recipe-notes').value,
            isFavorite: document.getElementById('recipe-favorite').checked,
            wantToTry: document.getElementById('recipe-to-try').checked,
            dateAdded: new Date().toISOString()
        };

        APP_DATA.user.recipes.push(recipe);
        saveProgress();

        if (window.gamification) {
            window.gamification.awardXP(15, 'Added Recipe');
        }

        alert('Recipe saved!');
        this.renderNutrition();
    }

    viewRecipe(id) {
        // Check both arrays for the recipe
        let recipe = (APP_DATA.user.recipes || []).find(r => r.id === id);
        if (!recipe) {
            recipe = (APP_DATA.user.recipeIdeas || []).find(r => r.id === id);
        }
        if (!recipe) return;

        const container = document.getElementById('nutrition-content');

        const html = `
            <div class="recipe-detail">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderNutrition()">
                        ← Back to Nutrition
                    </button>
                </div>

                <div class="recipe-detail-header">
                    <h3>${recipe.name}</h3>
                    <div class="recipe-badges-large">
                        ${recipe.isFavorite ? '<span class="badge-fav-lg">★ Favorite</span>' : ''}
                        ${recipe.wantToTry ? '<span class="badge-try-lg">Want to Try</span>' : ''}
                    </div>
                </div>

                ${recipe.category ? `<span class="recipe-category-tag">${recipe.category}</span>` : ''}
                ${recipe.servings ? `<span class="recipe-servings">Serves ${recipe.servings}</span>` : ''}

                ${recipe.calories || recipe.protein || recipe.carbs || recipe.fats ? `
                    <div class="recipe-macros-detail">
                        <h4>Macros (per serving)</h4>
                        <div class="macros-grid">
                            ${recipe.calories ? `<div class="macro-item"><span class="macro-num">${recipe.calories}</span><span>Calories</span></div>` : ''}
                            ${recipe.protein ? `<div class="macro-item"><span class="macro-num">${recipe.protein}g</span><span>Protein</span></div>` : ''}
                            ${recipe.carbs ? `<div class="macro-item"><span class="macro-num">${recipe.carbs}g</span><span>Carbs</span></div>` : ''}
                            ${recipe.fats ? `<div class="macro-item"><span class="macro-num">${recipe.fats}g</span><span>Fats</span></div>` : ''}
                        </div>
                    </div>
                ` : ''}

                ${recipe.ingredients ? `
                    <div class="recipe-section">
                        <h4>Ingredients</h4>
                        <div class="recipe-ingredients">
                            ${recipe.ingredients.split('\n').map(i => i.trim()).filter(i => i).map(i => `<div class="ingredient-item">${i}</div>`).join('')}
                        </div>
                    </div>
                ` : ''}

                ${recipe.instructions ? `
                    <div class="recipe-section">
                        <h4>Instructions</h4>
                        <div class="recipe-instructions">
                            ${recipe.instructions.split('\n').map((step, idx) => step.trim()).filter(s => s).map((step, idx) => `<div class="instruction-step"><span class="step-num">${idx + 1}.</span> ${step}</div>`).join('')}
                        </div>
                    </div>
                ` : ''}

                ${recipe.equipment ? `
                    <div class="recipe-section">
                        <h4>Equipment Needed</h4>
                        <div class="recipe-equipment">
                            ${recipe.equipment.split('\n').map(e => e.trim()).filter(e => e).map(e => `<span class="equipment-tag">${e}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}

                ${recipe.notes ? `
                    <div class="recipe-section">
                        <h4>Notes</h4>
                        <p class="recipe-notes">${recipe.notes}</p>
                    </div>
                ` : ''}

                ${recipe.source ? `
                    <div class="recipe-section">
                        <h4>Source</h4>
                        <p class="recipe-source">${recipe.source.startsWith('http') ? `<a href="${recipe.source}" target="_blank">${recipe.source}</a>` : recipe.source}</p>
                    </div>
                ` : ''}

                <div class="recipe-actions">
                    <button class="btn-primary" onclick="window.fitnessTracker.editRecipe('${recipe.id}')">Edit Recipe</button>
                    <button class="btn-secondary" onclick="window.fitnessTracker.toggleFavoriteRecipe('${recipe.id}')">${recipe.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                    ${recipe.calories ? `<button class="btn-secondary" onclick="window.fitnessTracker.logRecipeMeal('${recipe.id}')">Log This Meal</button>` : ''}
                    <button class="btn-secondary btn-danger" onclick="window.fitnessTracker.deleteRecipe('${recipe.id}')">Delete</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    editRecipe(id) {
        // Check both recipes and recipeIdeas arrays
        let recipe = (APP_DATA.user.recipes || []).find(r => r.id === id);
        let isRecipeIdea = false;
        if (!recipe) {
            recipe = (APP_DATA.user.recipeIdeas || []).find(r => r.id === id);
            isRecipeIdea = true;
        }
        if (!recipe) return;

        const container = document.getElementById('nutrition-content');

        const html = `
            <div class="recipe-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.viewRecipe('${id}')">
                        ← Back to Recipe
                    </button>
                </div>
                <h3>Edit Recipe</h3>
                <input type="hidden" id="recipe-edit-id" value="${id}">
                <input type="hidden" id="recipe-is-idea" value="${isRecipeIdea}">

                <div class="form-group">
                    <label>Recipe Name *</label>
                    <input type="text" id="recipe-name" value="${recipe.name || ''}">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Category</label>
                        <select id="recipe-category">
                            <option value="">Select...</option>
                            <option value="Breakfast" ${recipe.category === 'Breakfast' ? 'selected' : ''}>Breakfast</option>
                            <option value="Lunch" ${recipe.category === 'Lunch' ? 'selected' : ''}>Lunch</option>
                            <option value="Dinner" ${recipe.category === 'Dinner' ? 'selected' : ''}>Dinner</option>
                            <option value="Snack" ${recipe.category === 'Snack' ? 'selected' : ''}>Snack</option>
                            <option value="Dessert" ${recipe.category === 'Dessert' ? 'selected' : ''}>Dessert</option>
                            <option value="Meal Prep" ${recipe.category === 'Meal Prep' ? 'selected' : ''}>Meal Prep</option>
                            <option value="Smoothie" ${recipe.category === 'Smoothie' ? 'selected' : ''}>Smoothie</option>
                            <option value="Other" ${recipe.category === 'Other' ? 'selected' : ''}>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Servings</label>
                        <input type="number" id="recipe-servings" value="${recipe.servings || ''}">
                    </div>
                </div>

                <div class="form-group">
                    <label>Ingredients</label>
                    <textarea id="recipe-ingredients" rows="4">${recipe.ingredients || ''}</textarea>
                </div>

                <div class="form-group">
                    <label>Instructions</label>
                    <textarea id="recipe-instructions" rows="4">${recipe.instructions || ''}</textarea>
                </div>

                <div class="form-group">
                    <label>Equipment Needed</label>
                    <textarea id="recipe-equipment" rows="2" placeholder="e.g., Oven, Air Fryer, Blender, Sheet Pan...">${recipe.equipment || ''}</textarea>
                </div>

                <h4 class="form-section-title">Macros (per serving, optional)</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Calories</label>
                        <input type="number" id="recipe-calories" value="${recipe.calories || ''}">
                    </div>
                    <div class="form-group">
                        <label>Protein (g)</label>
                        <input type="number" id="recipe-protein" value="${recipe.protein || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Carbs (g)</label>
                        <input type="number" id="recipe-carbs" value="${recipe.carbs || ''}">
                    </div>
                    <div class="form-group">
                        <label>Fats (g)</label>
                        <input type="number" id="recipe-fats" value="${recipe.fats || ''}">
                    </div>
                </div>

                <div class="form-group">
                    <label>Source/URL (optional)</label>
                    <input type="text" id="recipe-source" value="${recipe.source || ''}">
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea id="recipe-notes" rows="2">${recipe.notes || ''}</textarea>
                </div>

                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="recipe-favorite" ${recipe.isFavorite ? 'checked' : ''}> Mark as Favorite
                    </label>
                </div>
                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="recipe-to-try" ${recipe.wantToTry ? 'checked' : ''}> Want to Try
                    </label>
                </div>

                <button class="btn-primary" onclick="window.fitnessTracker.updateRecipe()">Save Changes</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.viewRecipe('${id}')">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    updateRecipe() {
        const id = document.getElementById('recipe-edit-id').value;
        const isRecipeIdea = document.getElementById('recipe-is-idea').value === 'true';

        const name = document.getElementById('recipe-name').value.trim();
        if (!name) {
            alert('Please enter a recipe name');
            return;
        }

        const updatedData = {
            name: name,
            category: document.getElementById('recipe-category').value,
            servings: parseInt(document.getElementById('recipe-servings').value) || null,
            ingredients: document.getElementById('recipe-ingredients').value,
            instructions: document.getElementById('recipe-instructions').value,
            equipment: document.getElementById('recipe-equipment').value,
            calories: parseInt(document.getElementById('recipe-calories').value) || null,
            protein: parseInt(document.getElementById('recipe-protein').value) || null,
            carbs: parseInt(document.getElementById('recipe-carbs').value) || null,
            fats: parseInt(document.getElementById('recipe-fats').value) || null,
            source: document.getElementById('recipe-source').value,
            notes: document.getElementById('recipe-notes').value,
            isFavorite: document.getElementById('recipe-favorite').checked,
            wantToTry: document.getElementById('recipe-to-try').checked
        };

        // Update in the correct array
        if (isRecipeIdea) {
            if (!APP_DATA.user.recipeIdeas) APP_DATA.user.recipeIdeas = [];
            const index = APP_DATA.user.recipeIdeas.findIndex(r => r.id === id);
            if (index !== -1) {
                APP_DATA.user.recipeIdeas[index] = { ...APP_DATA.user.recipeIdeas[index], ...updatedData };
            }
        } else {
            if (!APP_DATA.user.recipes) APP_DATA.user.recipes = [];
            const index = APP_DATA.user.recipes.findIndex(r => r.id === id);
            if (index !== -1) {
                APP_DATA.user.recipes[index] = { ...APP_DATA.user.recipes[index], ...updatedData };
            }
        }

        saveProgress();
        this.renderNutrition();
    }

    toggleFavoriteRecipe(id) {
        // Check both arrays for the recipe
        let recipe = (APP_DATA.user.recipes || []).find(r => r.id === id);
        if (!recipe) {
            recipe = (APP_DATA.user.recipeIdeas || []).find(r => r.id === id);
        }
        if (!recipe) return;

        recipe.isFavorite = !recipe.isFavorite;
        saveProgress();
        this.viewRecipe(id);
    }

    deleteRecipe(id) {
        if (confirm('Delete this recipe?')) {
            // Check which array contains the recipe
            const inRecipes = (APP_DATA.user.recipes || []).some(r => r.id === id);
            if (inRecipes) {
                APP_DATA.user.recipes = (APP_DATA.user.recipes || []).filter(r => r.id !== id);
            } else {
                APP_DATA.user.recipeIdeas = (APP_DATA.user.recipeIdeas || []).filter(r => r.id !== id);
            }
            saveProgress();
            this.renderNutrition();
        }
    }

    getQuickFoods() {
        return [
            { name: 'Chicken Breast (6oz)', calories: 280, protein: 53, carbs: 0, fats: 6 },
            { name: 'Rice (1 cup)', calories: 200, protein: 4, carbs: 45, fats: 0 },
            { name: '3 Eggs', calories: 210, protein: 18, carbs: 1, fats: 15 },
            { name: 'Protein Shake', calories: 150, protein: 30, carbs: 3, fats: 2 },
            { name: 'Greek Yogurt', calories: 130, protein: 17, carbs: 8, fats: 0 },
            { name: 'Salmon (6oz)', calories: 350, protein: 40, carbs: 0, fats: 20 },
            { name: 'Oatmeal (1 cup)', calories: 300, protein: 10, carbs: 54, fats: 6 },
            { name: 'Avocado', calories: 240, protein: 3, carbs: 12, fats: 22 }
        ];
    }

    getFoodDatabase() {
        return [
            // Proteins
            { name: 'Chicken Breast (4oz)', calories: 187, protein: 35, carbs: 0, fats: 4, category: 'Protein' },
            { name: 'Chicken Breast (6oz)', calories: 280, protein: 53, carbs: 0, fats: 6, category: 'Protein' },
            { name: 'Chicken Thigh (4oz)', calories: 220, protein: 28, carbs: 0, fats: 11, category: 'Protein' },
            { name: 'Ground Beef 90% lean (4oz)', calories: 200, protein: 23, carbs: 0, fats: 11, category: 'Protein' },
            { name: 'Ground Beef 80% lean (4oz)', calories: 280, protein: 20, carbs: 0, fats: 22, category: 'Protein' },
            { name: 'Ground Turkey (4oz)', calories: 170, protein: 21, carbs: 0, fats: 9, category: 'Protein' },
            { name: 'Salmon (4oz)', calories: 233, protein: 25, carbs: 0, fats: 14, category: 'Protein' },
            { name: 'Salmon (6oz)', calories: 350, protein: 40, carbs: 0, fats: 20, category: 'Protein' },
            { name: 'Tuna (canned, 1 can)', calories: 120, protein: 27, carbs: 0, fats: 1, category: 'Protein' },
            { name: 'Shrimp (4oz)', calories: 120, protein: 24, carbs: 1, fats: 2, category: 'Protein' },
            { name: 'Tilapia (4oz)', calories: 110, protein: 23, carbs: 0, fats: 2, category: 'Protein' },
            { name: 'Steak Sirloin (6oz)', calories: 320, protein: 46, carbs: 0, fats: 14, category: 'Protein' },
            { name: 'Pork Chop (4oz)', calories: 190, protein: 26, carbs: 0, fats: 9, category: 'Protein' },
            { name: 'Tofu (4oz)', calories: 80, protein: 9, carbs: 2, fats: 4, category: 'Protein' },
            { name: 'Tempeh (4oz)', calories: 220, protein: 21, carbs: 8, fats: 13, category: 'Protein' },

            // Eggs & Dairy
            { name: 'Egg (1 large)', calories: 70, protein: 6, carbs: 0, fats: 5, category: 'Dairy' },
            { name: '2 Eggs', calories: 140, protein: 12, carbs: 0, fats: 10, category: 'Dairy' },
            { name: '3 Eggs', calories: 210, protein: 18, carbs: 1, fats: 15, category: 'Dairy' },
            { name: 'Egg Whites (1 cup)', calories: 126, protein: 26, carbs: 2, fats: 0, category: 'Dairy' },
            { name: 'Greek Yogurt (1 cup)', calories: 130, protein: 17, carbs: 8, fats: 0, category: 'Dairy' },
            { name: 'Greek Yogurt (5.3oz)', calories: 100, protein: 12, carbs: 6, fats: 0, category: 'Dairy' },
            { name: 'Cottage Cheese (1 cup)', calories: 220, protein: 28, carbs: 8, fats: 5, category: 'Dairy' },
            { name: 'Milk (1 cup)', calories: 150, protein: 8, carbs: 12, fats: 8, category: 'Dairy' },
            { name: 'Almond Milk (1 cup)', calories: 30, protein: 1, carbs: 1, fats: 2, category: 'Dairy' },
            { name: 'Cheese Cheddar (1oz)', calories: 113, protein: 7, carbs: 0, fats: 9, category: 'Dairy' },
            { name: 'Cheese Mozzarella (1oz)', calories: 85, protein: 6, carbs: 1, fats: 6, category: 'Dairy' },

            // Carbs & Grains
            { name: 'White Rice (1 cup cooked)', calories: 200, protein: 4, carbs: 45, fats: 0, category: 'Carbs' },
            { name: 'Brown Rice (1 cup cooked)', calories: 215, protein: 5, carbs: 45, fats: 2, category: 'Carbs' },
            { name: 'Quinoa (1 cup cooked)', calories: 220, protein: 8, carbs: 39, fats: 4, category: 'Carbs' },
            { name: 'Oatmeal (1 cup cooked)', calories: 150, protein: 5, carbs: 27, fats: 3, category: 'Carbs' },
            { name: 'Oatmeal (1/2 cup dry)', calories: 150, protein: 5, carbs: 27, fats: 3, category: 'Carbs' },
            { name: 'Pasta (1 cup cooked)', calories: 200, protein: 7, carbs: 42, fats: 1, category: 'Carbs' },
            { name: 'Bread (1 slice)', calories: 80, protein: 3, carbs: 15, fats: 1, category: 'Carbs' },
            { name: 'Bread (2 slices)', calories: 160, protein: 6, carbs: 30, fats: 2, category: 'Carbs' },
            { name: 'Bagel (1 medium)', calories: 280, protein: 10, carbs: 55, fats: 2, category: 'Carbs' },
            { name: 'Tortilla Flour (1 large)', calories: 150, protein: 4, carbs: 26, fats: 4, category: 'Carbs' },
            { name: 'Sweet Potato (1 medium)', calories: 100, protein: 2, carbs: 24, fats: 0, category: 'Carbs' },
            { name: 'Potato (1 medium)', calories: 160, protein: 4, carbs: 36, fats: 0, category: 'Carbs' },

            // Fruits
            { name: 'Banana (1 medium)', calories: 105, protein: 1, carbs: 27, fats: 0, category: 'Fruit' },
            { name: 'Apple (1 medium)', calories: 95, protein: 0, carbs: 25, fats: 0, category: 'Fruit' },
            { name: 'Orange (1 medium)', calories: 62, protein: 1, carbs: 15, fats: 0, category: 'Fruit' },
            { name: 'Strawberries (1 cup)', calories: 50, protein: 1, carbs: 12, fats: 0, category: 'Fruit' },
            { name: 'Blueberries (1 cup)', calories: 85, protein: 1, carbs: 21, fats: 0, category: 'Fruit' },
            { name: 'Grapes (1 cup)', calories: 104, protein: 1, carbs: 27, fats: 0, category: 'Fruit' },
            { name: 'Mango (1 cup)', calories: 100, protein: 1, carbs: 25, fats: 0, category: 'Fruit' },
            { name: 'Pineapple (1 cup)', calories: 82, protein: 1, carbs: 22, fats: 0, category: 'Fruit' },

            // Vegetables
            { name: 'Broccoli (1 cup)', calories: 55, protein: 4, carbs: 11, fats: 0, category: 'Vegetable' },
            { name: 'Spinach (1 cup raw)', calories: 7, protein: 1, carbs: 1, fats: 0, category: 'Vegetable' },
            { name: 'Spinach (1 cup cooked)', calories: 41, protein: 5, carbs: 7, fats: 0, category: 'Vegetable' },
            { name: 'Asparagus (1 cup)', calories: 27, protein: 3, carbs: 5, fats: 0, category: 'Vegetable' },
            { name: 'Green Beans (1 cup)', calories: 44, protein: 2, carbs: 10, fats: 0, category: 'Vegetable' },
            { name: 'Bell Pepper (1 medium)', calories: 30, protein: 1, carbs: 7, fats: 0, category: 'Vegetable' },
            { name: 'Carrots (1 cup)', calories: 52, protein: 1, carbs: 12, fats: 0, category: 'Vegetable' },
            { name: 'Cucumber (1 cup)', calories: 16, protein: 1, carbs: 4, fats: 0, category: 'Vegetable' },
            { name: 'Tomato (1 medium)', calories: 22, protein: 1, carbs: 5, fats: 0, category: 'Vegetable' },
            { name: 'Mixed Salad (2 cups)', calories: 20, protein: 2, carbs: 4, fats: 0, category: 'Vegetable' },

            // Fats & Nuts
            { name: 'Avocado (1 whole)', calories: 240, protein: 3, carbs: 12, fats: 22, category: 'Fats' },
            { name: 'Avocado (1/2)', calories: 120, protein: 1, carbs: 6, fats: 11, category: 'Fats' },
            { name: 'Almonds (1oz, 23 nuts)', calories: 164, protein: 6, carbs: 6, fats: 14, category: 'Fats' },
            { name: 'Peanut Butter (2 tbsp)', calories: 190, protein: 8, carbs: 6, fats: 16, category: 'Fats' },
            { name: 'Almond Butter (2 tbsp)', calories: 196, protein: 7, carbs: 6, fats: 18, category: 'Fats' },
            { name: 'Walnuts (1oz)', calories: 185, protein: 4, carbs: 4, fats: 18, category: 'Fats' },
            { name: 'Cashews (1oz)', calories: 157, protein: 5, carbs: 9, fats: 12, category: 'Fats' },
            { name: 'Olive Oil (1 tbsp)', calories: 120, protein: 0, carbs: 0, fats: 14, category: 'Fats' },
            { name: 'Coconut Oil (1 tbsp)', calories: 121, protein: 0, carbs: 0, fats: 13, category: 'Fats' },
            { name: 'Butter (1 tbsp)', calories: 102, protein: 0, carbs: 0, fats: 12, category: 'Fats' },

            // Supplements & Protein
            { name: 'Whey Protein (1 scoop)', calories: 120, protein: 24, carbs: 3, fats: 2, category: 'Supplement' },
            { name: 'Whey Protein (2 scoops)', calories: 240, protein: 48, carbs: 6, fats: 4, category: 'Supplement' },
            { name: 'Casein Protein (1 scoop)', calories: 120, protein: 24, carbs: 3, fats: 1, category: 'Supplement' },
            { name: 'Protein Bar', calories: 200, protein: 20, carbs: 22, fats: 7, category: 'Supplement' },
            { name: 'Mass Gainer (1 serving)', calories: 650, protein: 32, carbs: 110, fats: 8, category: 'Supplement' },
            { name: 'Creatine (5g)', calories: 0, protein: 0, carbs: 0, fats: 0, category: 'Supplement' },

            // Common Meals
            { name: 'Chipotle Chicken Bowl', calories: 685, protein: 52, carbs: 65, fats: 21, category: 'Meal' },
            { name: 'Subway 6" Turkey Sub', calories: 280, protein: 18, carbs: 46, fats: 3, category: 'Meal' },
            { name: 'McDonalds Big Mac', calories: 550, protein: 25, carbs: 46, fats: 30, category: 'Meal' },
            { name: 'Chick-fil-A Sandwich', calories: 440, protein: 28, carbs: 40, fats: 18, category: 'Meal' },
            { name: 'Grilled Chicken Salad', calories: 350, protein: 35, carbs: 15, fats: 18, category: 'Meal' },
            { name: 'Burrito Bowl', calories: 550, protein: 40, carbs: 55, fats: 18, category: 'Meal' },

            // Snacks
            { name: 'Rice Cakes (2)', calories: 70, protein: 1, carbs: 15, fats: 0, category: 'Snack' },
            { name: 'Protein Bar (Quest)', calories: 200, protein: 21, carbs: 21, fats: 8, category: 'Snack' },
            { name: 'Beef Jerky (1oz)', calories: 80, protein: 13, carbs: 3, fats: 1, category: 'Snack' },
            { name: 'String Cheese (1)', calories: 80, protein: 7, carbs: 0, fats: 6, category: 'Snack' },
            { name: 'Hummus (2 tbsp)', calories: 70, protein: 2, carbs: 6, fats: 5, category: 'Snack' },
            { name: 'Crackers (6)', calories: 120, protein: 2, carbs: 20, fats: 4, category: 'Snack' },
            { name: 'Popcorn (3 cups air popped)', calories: 93, protein: 3, carbs: 19, fats: 1, category: 'Snack' },
            { name: 'Dark Chocolate (1oz)', calories: 170, protein: 2, carbs: 13, fats: 12, category: 'Snack' }
        ];
    }

    searchFoods() {
        const searchInput = document.getElementById('food-search-input');
        const resultsDiv = document.getElementById('food-search-results');

        if (!searchInput || !resultsDiv) return;

        const query = searchInput.value.toLowerCase().trim();

        if (query.length < 2) {
            resultsDiv.innerHTML = '';
            resultsDiv.style.display = 'none';
            return;
        }

        const database = this.getFoodDatabase();
        const matches = database.filter(food =>
            food.name.toLowerCase().includes(query) ||
            food.category.toLowerCase().includes(query)
        ).slice(0, 8);

        if (matches.length === 0) {
            resultsDiv.innerHTML = '<div class="food-search-empty">No foods found. Try a different search term.</div>';
            resultsDiv.style.display = 'block';
            return;
        }

        resultsDiv.innerHTML = matches.map(food => `
            <div class="food-search-item" onclick="window.fitnessTracker.selectSearchFood('${food.name.replace(/'/g, "\\'")}', ${food.calories}, ${food.protein}, ${food.carbs}, ${food.fats})">
                <div class="food-search-name">${food.name}</div>
                <div class="food-search-macros">
                    <span class="cal">${food.calories} cal</span>
                    <span class="macro">P: ${food.protein}g</span>
                    <span class="macro">C: ${food.carbs}g</span>
                    <span class="macro">F: ${food.fats}g</span>
                </div>
            </div>
        `).join('');

        resultsDiv.style.display = 'block';
    }

    selectSearchFood(name, calories, protein, carbs, fats) {
        const searchInput = document.getElementById('food-search-input');
        const resultsDiv = document.getElementById('food-search-results');

        // Clear search
        if (searchInput) searchInput.value = '';
        if (resultsDiv) {
            resultsDiv.innerHTML = '';
            resultsDiv.style.display = 'none';
        }

        // Add the food
        this.quickAddFood(name, calories, protein, carbs, fats);
    }

    getTodayNutrition(log) {
        const today = new Date().toDateString();
        return (log || []).filter(item => new Date(item.date).toDateString() === today);
    }

    calculateNutritionTotals(log) {
        return log.reduce((acc, item) => ({
            calories: acc.calories + (item.calories || 0),
            protein: acc.protein + (item.protein || 0),
            carbs: acc.carbs + (item.carbs || 0),
            fats: acc.fats + (item.fats || 0)
        }), { calories: 0, protein: 0, carbs: 0, fats: 0 });
    }

    showAddFood() {
        const container = document.getElementById('nutrition-content');

        const html = `
            <div class="add-food-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderNutrition()">
                        ← Back to Nutrition
                    </button>
                </div>
                <h3>Log Food</h3>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" id="food-date" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-group">
                    <label>Food Name</label>
                    <input type="text" id="food-name" placeholder="e.g., Grilled Chicken">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Calories</label>
                        <input type="number" id="food-cal">
                    </div>
                    <div class="form-group">
                        <label>Protein (g)</label>
                        <input type="number" id="food-protein">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Carbs (g)</label>
                        <input type="number" id="food-carbs">
                    </div>
                    <div class="form-group">
                        <label>Fats (g)</label>
                        <input type="number" id="food-fats">
                    </div>
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.saveFood()">Add Food</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderNutrition()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveFood() {
        const food = {
            id: Date.now().toString(),
            date: document.getElementById('food-date').value + 'T12:00:00',
            name: document.getElementById('food-name').value,
            calories: parseInt(document.getElementById('food-cal').value) || 0,
            protein: parseInt(document.getElementById('food-protein').value) || 0,
            carbs: parseInt(document.getElementById('food-carbs').value) || 0,
            fats: parseInt(document.getElementById('food-fats').value) || 0
        };

        if (!food.name) {
            alert('Please enter a food name');
            return;
        }

        if (!APP_DATA.user.nutrition) {
            APP_DATA.user.nutrition = { goals: { calories: 2500, protein: 180, carbs: 250, fats: 80 }, log: [] };
        }

        APP_DATA.user.nutrition.log.push(food);
        saveProgress();
        this.renderNutrition();
    }

    quickAddFood(name, calories, protein, carbs, fats) {
        if (!APP_DATA.user.nutrition) {
            APP_DATA.user.nutrition = { goals: { calories: 2500, protein: 180, carbs: 250, fats: 80 }, log: [] };
        }

        APP_DATA.user.nutrition.log.push({
            id: Date.now().toString(),
            date: new Date().toISOString(),
            name,
            calories,
            protein,
            carbs,
            fats
        });

        saveProgress();
        this.renderNutrition();
    }

    removeFood(id) {
        APP_DATA.user.nutrition.log = APP_DATA.user.nutrition.log.filter(f => f.id !== id);
        saveProgress();
        this.renderNutrition();
    }

    showGoalsForm() {
        const nutrition = APP_DATA.user.nutrition || { goals: { calories: 2500, protein: 180, carbs: 250, fats: 80 } };
        const container = document.getElementById('nutrition-content');

        const html = `
            <div class="goals-form">
                <div class="form-header">
                    <button class="btn-back-inline" onclick="window.fitnessTracker.renderNutrition()">
                        ← Back to Nutrition
                    </button>
                </div>
                <h3>Set Daily Goals</h3>
                <div class="form-group">
                    <label>Calories</label>
                    <input type="number" id="goal-cal" value="${nutrition.goals.calories}">
                </div>
                <div class="form-group">
                    <label>Protein (g)</label>
                    <input type="number" id="goal-protein" value="${nutrition.goals.protein}">
                </div>
                <div class="form-group">
                    <label>Carbs (g)</label>
                    <input type="number" id="goal-carbs" value="${nutrition.goals.carbs}">
                </div>
                <div class="form-group">
                    <label>Fats (g)</label>
                    <input type="number" id="goal-fats" value="${nutrition.goals.fats}">
                </div>
                <button class="btn-primary" onclick="window.fitnessTracker.saveNutritionGoals()">Save Goals</button>
                <button class="btn-secondary" onclick="window.fitnessTracker.renderNutrition()">Cancel</button>
            </div>
        `;

        container.innerHTML = html;
    }

    saveNutritionGoals() {
        if (!APP_DATA.user.nutrition) {
            APP_DATA.user.nutrition = { goals: {}, log: [] };
        }

        APP_DATA.user.nutrition.goals = {
            calories: parseInt(document.getElementById('goal-cal').value) || 2500,
            protein: parseInt(document.getElementById('goal-protein').value) || 180,
            carbs: parseInt(document.getElementById('goal-carbs').value) || 250,
            fats: parseInt(document.getElementById('goal-fats').value) || 80
        };

        saveProgress();
        this.renderNutrition();
    }

    // Show injection history with delete functionality
    showInjectionHistory() {
        const injections = this.getInjectionHistory();
        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';

        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        };

        let historyHtml = '';
        if (injections.length === 0) {
            historyHtml = '<p style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">No injections logged yet.</p>';
        } else {
            historyHtml = injections.map((inj, index) => `
                <div class="history-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--color-bg-tertiary); border-radius: 0.75rem; margin-bottom: 0.75rem;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: var(--color-text-primary);">${inj.type}</div>
                        <div style="font-size: 0.875rem; color: var(--color-text-secondary);">${formatDate(inj.date)} ${inj.dosage ? '• ' + inj.dosage : ''}</div>
                        ${inj.energy ? `<div style="font-size: 0.875rem; color: #f59e0b;">Energy: ${inj.energy}/10</div>` : ''}
                        ${inj.notes ? `<div style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;">${inj.notes}</div>` : ''}
                    </div>
                    <button class="btn-delete" data-index="${index}" style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem;">Delete</button>
                </div>
            `).join('');
        }

        modal.innerHTML = `
            <div class="injection-modal" style="max-width: 600px;">
                <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="margin: 0;">💉 Injection History</h2>
                    <button class="modal-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-secondary);">×</button>
                </div>
                <div class="history-list" style="max-height: 400px; overflow-y: auto;">
                    ${historyHtml}
                </div>
                <button class="btn-secondary" style="width: 100%; margin-top: 1.5rem;">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        const tracker = this;

        // Close button handlers
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.querySelector('.btn-secondary').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

        // Delete button handlers
        modal.querySelectorAll('.btn-delete').forEach(btn => {
            btn.onclick = function() {
                const index = parseInt(this.dataset.index);
                if (confirm('Delete this injection record?')) {
                    const injections = tracker.getInjectionHistory();
                    injections.splice(index, 1);
                    localStorage.setItem('synthesis_injections', JSON.stringify(injections));
                    modal.remove();
                    tracker.showInjectionHistory(); // Refresh the modal
                    tracker.renderWorkoutHub(); // Refresh the main view
                }
            };
        });
    }

    // Show lab history with delete functionality
    showLabHistory() {
        const labs = this.getLabResults();
        const modal = document.createElement('div');
        modal.className = 'injection-modal-overlay';

        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        };

        const markerLabels = {
            testosterone: 'Total T',
            freeT: 'Free T',
            estradiol: 'E2',
            hematocrit: 'HCT',
            shbg: 'SHBG',
            psa: 'PSA',
            hemoglobin: 'Hemoglobin',
            rbc: 'RBC'
        };

        let historyHtml = '';
        if (labs.length === 0) {
            historyHtml = '<p style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">No lab results logged yet.</p>';
        } else {
            historyHtml = labs.map((lab, index) => {
                const markers = Object.entries(lab)
                    .filter(([key, val]) => key !== 'date' && key !== 'id' && val)
                    .map(([key, val]) => `${markerLabels[key] || key}: ${val}`)
                    .join(' • ');

                return `
                    <div class="history-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--color-bg-tertiary); border-radius: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--color-text-primary);">${formatDate(lab.date)}</div>
                            <div style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;">${markers || 'No markers recorded'}</div>
                        </div>
                        <button class="btn-delete" data-index="${index}" style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem;">Delete</button>
                    </div>
                `;
            }).join('');
        }

        modal.innerHTML = `
            <div class="injection-modal" style="max-width: 600px;">
                <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="margin: 0;">🧪 Lab Results History</h2>
                    <button class="modal-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-secondary);">×</button>
                </div>
                <div class="history-list" style="max-height: 400px; overflow-y: auto;">
                    ${historyHtml}
                </div>
                <button class="btn-secondary" style="width: 100%; margin-top: 1.5rem;">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        const tracker = this;

        // Close button handlers
        modal.querySelector('.modal-close').onclick = () => modal.remove();
        modal.querySelector('.btn-secondary').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

        // Delete button handlers
        modal.querySelectorAll('.btn-delete').forEach(btn => {
            btn.onclick = function() {
                const index = parseInt(this.dataset.index);
                if (confirm('Delete this lab result?')) {
                    const labs = tracker.getLabResults();
                    labs.splice(index, 1);
                    localStorage.setItem('synthesis_labs', JSON.stringify(labs));
                    modal.remove();
                    tracker.showLabHistory(); // Refresh the modal
                    tracker.renderWorkoutHub(); // Refresh the main view
                }
            };
        });
    }

    // Save all health notes
    saveAllHealthNotes() {
        const kneeSelect = document.getElementById('knee-status');
        const energySlider = document.getElementById('energy-level');
        const notesTextarea = document.getElementById('health-notes-text');

        if (!kneeSelect || !energySlider || !notesTextarea) {
            alert('Could not find health notes form fields');
            return;
        }

        const healthNote = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            kneeStatus: kneeSelect.value,
            energyLevel: parseInt(energySlider.value),
            notes: notesTextarea.value
        };

        // Get existing health notes
        const existingNotes = localStorage.getItem('synthesis_health_notes');
        const notes = existingNotes ? JSON.parse(existingNotes) : [];

        notes.unshift(healthNote); // Add to beginning
        localStorage.setItem('synthesis_health_notes', JSON.stringify(notes));

        // Also save energy to the energy history for the chart
        this.saveEnergyToHistory(healthNote.energyLevel);

        alert('Health notes saved!');
    }

    // Get health notes history
    getHealthNotesHistory() {
        const data = localStorage.getItem('synthesis_health_notes');
        return data ? JSON.parse(data) : [];
    }

    // Reset data for specific section
    resetData(type) {
        let message = '';
        let storageKey = '';

        switch(type) {
            case 'injections':
                message = 'Are you sure you want to reset all HRT/injection data? This cannot be undone.';
                storageKey = 'synthesis_injections';
                break;
            case 'labs':
                message = 'Are you sure you want to reset all lab/biomarker data? This cannot be undone.';
                storageKey = 'synthesis_labs';
                break;
            case 'healthNotes':
                message = 'Are you sure you want to reset all health notes? This cannot be undone.';
                storageKey = 'synthesis_health_notes';
                break;
            case 'energy':
                message = 'Are you sure you want to reset all energy history? This cannot be undone.';
                storageKey = 'synthesis_energy_history';
                break;
            default:
                alert('Unknown data type');
                return;
        }

        if (confirm(message)) {
            localStorage.removeItem(storageKey);
            alert('Data has been reset.');
            this.renderWorkoutHub();
        }
    }
}

// Initialize fitness tracker
let fitnessTracker;
document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized when app is ready
});

window.FitnessTracker = FitnessTracker;
