/* ============================================
   VISION BOARD - JAVASCRIPT
   ============================================ */

// State
let visionItems = [];
let gratitudeEntries = [];
let dailyChecklist = {};
let draggedItem = null;
let offsetX = 0;
let offsetY = 0;
let vizTimer = null;
let vizTimeRemaining = 300; // 5 minutes in seconds

// DOM Elements (initialized after DOM loads)
let visionBoard = null;
let imageUpload = null;
let affirmationInput = null;
let affirmationStyle = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements after page loads
    visionBoard = document.getElementById('vision-board');
    imageUpload = document.getElementById('image-upload');
    affirmationInput = document.getElementById('affirmation-input');
    affirmationStyle = document.getElementById('affirmation-style');

    loadFromStorage();
    updateMoonPhase();
    setupEventListeners();
    renderVisionBoard();
    updateGratitudeCount();
    loadDailyChecklist();
});

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
    // Image upload
    imageUpload.addEventListener('change', handleImageUpload);

    // Add affirmation button
    document.getElementById('add-affirmation-btn').addEventListener('click', addAffirmation);

    // Search images button
    document.getElementById('search-images-btn').addEventListener('click', openImageSearch);

    // Category badges
    document.querySelectorAll('.category-badge').forEach(badge => {
        badge.addEventListener('click', () => {
            badge.classList.toggle('active');
        });
    });

    // Template buttons
    document.querySelectorAll('[data-template]').forEach(btn => {
        btn.addEventListener('click', () => loadTemplate(btn.dataset.template));
    });

    // Clear board
    document.getElementById('clear-board-btn').addEventListener('click', clearBoard);

    // Save board
    document.getElementById('save-board-btn').addEventListener('click', () => {
        saveToStorage();
        showNotification('Vision board saved!');
    });

    // Gratitude
    document.getElementById('add-gratitude-btn').addEventListener('click', openGratitudeModal);

    // Visualization timer
    document.getElementById('start-viz-btn').addEventListener('click', startVisualization);
    document.getElementById('stop-viz-btn').addEventListener('click', stopVisualization);

    // Daily checklist
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveDailyChecklist);
    });

    // Download board
    document.getElementById('download-board-btn').addEventListener('click', downloadBoard);

    // Image search input
    document.getElementById('image-search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchImages(e.target.value);
        }
    });
}

// ============================================
// VISION BOARD CORE FUNCTIONALITY
// ============================================

function handleImageUpload(e) {
    const files = e.target.files;
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            addVisionItem({
                type: 'image',
                src: event.target.result,
                x: Math.random() * (visionBoard.offsetWidth - 200),
                y: Math.random() * (visionBoard.offsetHeight - 200),
                width: 200
            });
        };
        reader.readAsDataURL(file);
    });
    // Clear the input so same file can be uploaded again
    e.target.value = '';
}

function addAffirmation() {
    const text = affirmationInput.value.trim();
    if (!text) {
        showNotification('Please enter an affirmation', 'error');
        return;
    }

    const style = affirmationStyle.value;
    addVisionItem({
        type: 'text',
        text: text,
        style: style,
        x: Math.random() * (visionBoard.offsetWidth - 200),
        y: Math.random() * (visionBoard.offsetHeight - 100)
    });

    affirmationInput.value = '';
    showNotification('Affirmation added!');
}

function addVisionItem(item) {
    item.id = Date.now() + Math.random();
    visionItems.push(item);
    renderVisionBoard();
    saveToStorage();
}

function removeVisionItem(id) {
    visionItems = visionItems.filter(item => item.id !== id);
    renderVisionBoard();
    saveToStorage();
    showNotification('Item removed');
}

function renderVisionBoard() {
    // Remove placeholder if we have items
    const placeholder = visionBoard.querySelector('.canvas-placeholder');
    if (visionItems.length > 0 && placeholder) {
        placeholder.style.display = 'none';
    } else if (visionItems.length === 0 && placeholder) {
        placeholder.style.display = 'block';
    }

    // Clear existing items (but keep placeholder)
    visionBoard.querySelectorAll('.vision-item').forEach(el => el.remove());

    // Render each item
    visionItems.forEach(item => {
        const element = createVisionElement(item);
        visionBoard.appendChild(element);
    });
}

function createVisionElement(item) {
    const div = document.createElement('div');
    div.className = 'vision-item';
    div.dataset.id = item.id;
    div.style.left = item.x + 'px';
    div.style.top = item.y + 'px';

    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.style.width = (item.width || 200) + 'px';
        img.draggable = false;
        div.appendChild(img);
    } else if (item.type === 'text') {
        const textDiv = document.createElement('div');
        textDiv.className = `vision-item-text ${item.style || 'bold'}`;
        textDiv.textContent = item.text;
        div.appendChild(textDiv);
    }

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        removeVisionItem(item.id);
    };
    div.appendChild(deleteBtn);

    // Drag functionality
    div.addEventListener('mousedown', startDrag);
    div.addEventListener('touchstart', startDragTouch, { passive: false });

    return div;
}

// ============================================
// DRAG AND DROP
// ============================================

function startDrag(e) {
    if (e.target.classList.contains('delete-btn')) return;

    draggedItem = e.currentTarget;
    draggedItem.classList.add('dragging');

    const rect = draggedItem.getBoundingClientRect();
    const boardRect = visionBoard.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function startDragTouch(e) {
    if (e.target.classList.contains('delete-btn')) return;
    e.preventDefault();

    draggedItem = e.currentTarget;
    draggedItem.classList.add('dragging');

    const touch = e.touches[0];
    const rect = draggedItem.getBoundingClientRect();

    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;

    document.addEventListener('touchmove', dragTouch, { passive: false });
    document.addEventListener('touchend', stopDragTouch);
}

function drag(e) {
    if (!draggedItem) return;

    const boardRect = visionBoard.getBoundingClientRect();
    let x = e.clientX - boardRect.left - offsetX;
    let y = e.clientY - boardRect.top - offsetY;

    // Keep within bounds
    x = Math.max(0, Math.min(x, boardRect.width - draggedItem.offsetWidth));
    y = Math.max(0, Math.min(y, boardRect.height - draggedItem.offsetHeight));

    draggedItem.style.left = x + 'px';
    draggedItem.style.top = y + 'px';
}

function dragTouch(e) {
    if (!draggedItem) return;
    e.preventDefault();

    const touch = e.touches[0];
    const boardRect = visionBoard.getBoundingClientRect();
    let x = touch.clientX - boardRect.left - offsetX;
    let y = touch.clientY - boardRect.top - offsetY;

    x = Math.max(0, Math.min(x, boardRect.width - draggedItem.offsetWidth));
    y = Math.max(0, Math.min(y, boardRect.height - draggedItem.offsetHeight));

    draggedItem.style.left = x + 'px';
    draggedItem.style.top = y + 'px';
}

function stopDrag() {
    if (draggedItem) {
        draggedItem.classList.remove('dragging');

        // Update item position in state
        const id = parseFloat(draggedItem.dataset.id);
        const item = visionItems.find(i => i.id === id);
        if (item) {
            item.x = parseInt(draggedItem.style.left);
            item.y = parseInt(draggedItem.style.top);
            saveToStorage();
        }
    }

    draggedItem = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

function stopDragTouch() {
    if (draggedItem) {
        draggedItem.classList.remove('dragging');

        const id = parseFloat(draggedItem.dataset.id);
        const item = visionItems.find(i => i.id === id);
        if (item) {
            item.x = parseInt(draggedItem.style.left);
            item.y = parseInt(draggedItem.style.top);
            saveToStorage();
        }
    }

    draggedItem = null;
    document.removeEventListener('touchmove', dragTouch);
    document.removeEventListener('touchend', stopDragTouch);
}

// ============================================
// STORAGE
// ============================================

function saveToStorage() {
    localStorage.setItem('synthesis-vision-board', JSON.stringify(visionItems));
    localStorage.setItem('synthesis-gratitude', JSON.stringify(gratitudeEntries));
}

function loadFromStorage() {
    const savedBoard = localStorage.getItem('synthesis-vision-board');
    const savedGratitude = localStorage.getItem('synthesis-gratitude');

    if (savedBoard) {
        try {
            visionItems = JSON.parse(savedBoard);
        } catch (e) {
            visionItems = [];
        }
    }

    if (savedGratitude) {
        try {
            gratitudeEntries = JSON.parse(savedGratitude);
        } catch (e) {
            gratitudeEntries = [];
        }
    }
}

function clearBoard() {
    if (confirm('Are you sure you want to clear your vision board? This cannot be undone.')) {
        visionItems = [];
        renderVisionBoard();
        saveToStorage();
        showNotification('Vision board cleared');
    }
}

// ============================================
// TEMPLATES
// ============================================

function loadTemplate(templateName) {
    const templates = {
        abundance: [
            { type: 'text', text: 'I am a money magnet', style: 'bold', x: 100, y: 50 },
            { type: 'text', text: 'Abundance flows to me effortlessly', style: 'script', x: 300, y: 150 },
            { type: 'text', text: 'I am worthy of wealth', style: 'elegant', x: 150, y: 250 },
            { type: 'text', text: 'Financial freedom is my reality', style: 'bold', x: 350, y: 350 }
        ],
        health: [
            { type: 'text', text: 'My body is healthy and strong', style: 'bold', x: 100, y: 50 },
            { type: 'text', text: 'I radiate vitality and energy', style: 'script', x: 300, y: 150 },
            { type: 'text', text: 'Every cell in my body is vibrant', style: 'elegant', x: 150, y: 250 },
            { type: 'text', text: 'I choose health every day', style: 'bold', x: 350, y: 350 }
        ],
        success: [
            { type: 'text', text: 'Success is my birthright', style: 'bold', x: 100, y: 50 },
            { type: 'text', text: 'I achieve everything I set my mind to', style: 'script', x: 300, y: 150 },
            { type: 'text', text: 'Opportunities come to me easily', style: 'elegant', x: 150, y: 250 },
            { type: 'text', text: 'I am destined for greatness', style: 'bold', x: 350, y: 350 }
        ],
        love: [
            { type: 'text', text: 'I am worthy of deep love', style: 'bold', x: 100, y: 50 },
            { type: 'text', text: 'Love flows to me and through me', style: 'script', x: 300, y: 150 },
            { type: 'text', text: 'My relationships are fulfilling', style: 'elegant', x: 150, y: 250 },
            { type: 'text', text: 'I attract my perfect partner', style: 'bold', x: 350, y: 350 }
        ]
    };

    const template = templates[templateName];
    if (template) {
        template.forEach(item => {
            addVisionItem({ ...item });
        });
        showNotification(`${templateName.charAt(0).toUpperCase() + templateName.slice(1)} template added!`);
    }
}

// ============================================
// MOON PHASE
// ============================================

function updateMoonPhase() {
    const phase = getMoonPhase();
    const moonIcon = document.getElementById('moon-icon');
    const moonPhaseName = document.getElementById('moon-phase-name');
    const moonPhaseDesc = document.getElementById('moon-phase-desc');
    const moonEnergy = document.getElementById('moon-energy');

    // Custom SVG moon icons with yellow and purple gradient
    const moonSVG = (fillPercent, direction = 'right') => {
        const purple = '#8b5cf6';
        const yellow = '#ffd700';
        const darkPurple = '#4c1d95';

        if (fillPercent === 0) {
            // New Moon - dark purple with glow
            return `<svg viewBox="0 0 100 100" width="48" height="48">
                <defs><radialGradient id="newGlow"><stop offset="0%" stop-color="${purple}" stop-opacity="0.3"/><stop offset="100%" stop-color="${darkPurple}" stop-opacity="0"/></radialGradient></defs>
                <circle cx="50" cy="50" r="48" fill="url(#newGlow)"/>
                <circle cx="50" cy="50" r="40" fill="${darkPurple}" stroke="${purple}" stroke-width="2"/>
            </svg>`;
        } else if (fillPercent === 100) {
            // Full Moon - bright yellow/gold with glow
            return `<svg viewBox="0 0 100 100" width="48" height="48">
                <defs><radialGradient id="fullGlow"><stop offset="0%" stop-color="${yellow}"/><stop offset="70%" stop-color="#fbbf24"/><stop offset="100%" stop-color="${purple}" stop-opacity="0.5"/></radialGradient></defs>
                <circle cx="50" cy="50" r="48" fill="${yellow}" fill-opacity="0.2"/>
                <circle cx="50" cy="50" r="40" fill="url(#fullGlow)" stroke="${yellow}" stroke-width="2"/>
            </svg>`;
        } else {
            // Partial moons - yellow lit portion, purple shadow
            const clipId = `clip${fillPercent}${direction}`;
            const gradId = `grad${fillPercent}`;
            const litX = direction === 'right' ? 50 + (50 - fillPercent/2) : 50 - (50 - fillPercent/2);
            return `<svg viewBox="0 0 100 100" width="48" height="48">
                <defs>
                    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="${direction === 'right' ? darkPurple : yellow}"/>
                        <stop offset="50%" stop-color="${direction === 'right' ? purple : '#fbbf24'}"/>
                        <stop offset="100%" stop-color="${direction === 'right' ? yellow : darkPurple}"/>
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="${darkPurple}"/>
                <ellipse cx="${litX}" cy="50" rx="${fillPercent * 0.4}" ry="40" fill="${yellow}" opacity="0.9"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="${purple}" stroke-width="2"/>
            </svg>`;
        }
    };

    const phases = {
        0: { icon: moonSVG(0), name: 'New Moon', desc: 'Perfect time for new beginnings and setting intentions', energy: 'Very High' },
        1: { icon: moonSVG(25, 'right'), name: 'Waxing Crescent', desc: 'Time to take action on your intentions', energy: 'High' },
        2: { icon: moonSVG(50, 'right'), name: 'First Quarter', desc: 'Overcome challenges and stay committed', energy: 'Medium' },
        3: { icon: moonSVG(75, 'right'), name: 'Waxing Gibbous', desc: 'Refine and adjust your goals', energy: 'High' },
        4: { icon: moonSVG(100), name: 'Full Moon', desc: 'Celebrate achievements and release what no longer serves', energy: 'Very High' },
        5: { icon: moonSVG(75, 'left'), name: 'Waning Gibbous', desc: 'Share wisdom and express gratitude', energy: 'Medium' },
        6: { icon: moonSVG(50, 'left'), name: 'Last Quarter', desc: 'Let go and forgive', energy: 'Low' },
        7: { icon: moonSVG(25, 'left'), name: 'Waning Crescent', desc: 'Rest, reflect, and prepare for renewal', energy: 'Low' }
    };

    const currentPhase = phases[phase];
    moonIcon.innerHTML = currentPhase.icon;
    moonPhaseName.textContent = currentPhase.name;
    moonPhaseDesc.textContent = currentPhase.desc;
    moonEnergy.textContent = `✨ Manifestation Energy: ${currentPhase.energy}`;
}

function getMoonPhase() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();

    // Simple moon phase calculation
    let c, e, jd, b;

    if (month < 3) {
        year--;
        month += 12;
    }

    month++;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);

    if (b >= 8) b = 0;

    return b;
}

// ============================================
// GRATITUDE
// ============================================

function openGratitudeModal() {
    document.getElementById('gratitude-modal').style.display = 'flex';
    document.getElementById('gratitude-text').focus();
}

function closeGratitudeModal() {
    document.getElementById('gratitude-modal').style.display = 'none';
    document.getElementById('gratitude-text').value = '';
}

function saveGratitude() {
    const text = document.getElementById('gratitude-text').value.trim();
    if (!text) {
        showNotification('Please write something you are grateful for', 'error');
        return;
    }

    gratitudeEntries.push({
        text: text,
        date: new Date().toISOString()
    });

    saveToStorage();
    updateGratitudeCount();
    closeGratitudeModal();
    showNotification('Gratitude saved! Keep manifesting!');
}

function updateGratitudeCount() {
    const today = new Date().toDateString();
    const todayEntries = gratitudeEntries.filter(entry =>
        new Date(entry.date).toDateString() === today
    );
    document.getElementById('gratitude-count').textContent = todayEntries.length;
}

// ============================================
// VISUALIZATION TIMER
// ============================================

function startVisualization() {
    document.getElementById('start-viz-btn').style.display = 'none';
    document.getElementById('stop-viz-btn').style.display = 'block';

    vizTimer = setInterval(() => {
        vizTimeRemaining--;
        updateTimerDisplay();

        if (vizTimeRemaining <= 0) {
            stopVisualization();
            showNotification('Visualization complete! Great work!');
        }
    }, 1000);
}

function stopVisualization() {
    clearInterval(vizTimer);
    vizTimer = null;
    vizTimeRemaining = 300;
    updateTimerDisplay();

    document.getElementById('start-viz-btn').style.display = 'block';
    document.getElementById('stop-viz-btn').style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(vizTimeRemaining / 60);
    const seconds = vizTimeRemaining % 60;
    document.getElementById('viz-timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ============================================
// DAILY CHECKLIST
// ============================================

function loadDailyChecklist() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('synthesis-checklist-' + today);

    if (saved) {
        try {
            dailyChecklist = JSON.parse(saved);
            Object.keys(dailyChecklist).forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) checkbox.checked = dailyChecklist[id];
            });
        } catch (e) {
            dailyChecklist = {};
        }
    }
}

function saveDailyChecklist() {
    const today = new Date().toDateString();
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
        dailyChecklist[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('synthesis-checklist-' + today, JSON.stringify(dailyChecklist));
}

// ============================================
// IMAGE SEARCH (Placeholder - uses sample images)
// ============================================

function openImageSearch() {
    document.getElementById('image-search-modal').style.display = 'flex';
    document.getElementById('image-search-input').focus();
}

function closeImageSearch() {
    document.getElementById('image-search-modal').style.display = 'none';
    document.getElementById('image-search-input').value = '';
    document.getElementById('image-results').innerHTML = '';
}

function searchImages(query) {
    // Since we can't make external API calls, we'll show placeholder inspiration
    const resultsContainer = document.getElementById('image-results');
    resultsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-secondary);">
            <p>For best results, upload your own inspiring images!</p>
            <p style="margin-top: 10px; font-size: 0.875rem;">
                Search for "${query}" images online and upload them to your vision board.
            </p>
            <button class="btn-tool" style="margin-top: 20px; max-width: 200px;" onclick="closeImageSearch()">
                Got it!
            </button>
        </div>
    `;
}

// ============================================
// DOWNLOAD BOARD
// ============================================

function downloadBoard() {
    // Simple approach - alert user to use screenshot
    showNotification('Use your browser\'s screenshot feature or Print Screen to save your vision board!');
}

// ============================================
// NOTIFICATIONS
// ============================================

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        border-radius: 12px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
