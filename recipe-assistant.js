// ============================================
// RECIPE ASSISTANT - Free Recipe Search
// Uses TheMealDB API (100% free, no key needed)
// Only shows in Nutrition Hub
// ============================================

// Store current recipe data for saving
let currentRecipeData = null;

// Check if assistant should be hidden by user preference
function isAssistantHidden() {
    return localStorage.getItem('synthesis_hide_recipe_assistant') === 'true';
}

// Initialize on page load - hide by default, will show when entering nutrition
document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('recipe-fab');
    const chat = document.getElementById('recipe-assistant');
    if (fab) fab.style.display = 'none';
    if (chat) chat.classList.add('hidden');

    // Clear any previous "hidden" preference so users can see it
    // Remove this line if you want the hide preference to persist
    localStorage.removeItem('synthesis_hide_recipe_assistant');
});

// Also try to show when nutrition content is rendered
function checkAndShowRecipeAssistant() {
    const nutritionView = document.getElementById('nutrition-view');
    if (nutritionView && nutritionView.classList.contains('active')) {
        const fab = document.getElementById('recipe-fab');
        if (fab && !isAssistantHidden()) {
            fab.style.display = 'flex';
        }
    }
}

// Show/hide based on current view - called from app.js switchView
function updateRecipeAssistantVisibility(viewName) {
    const fab = document.getElementById('recipe-fab');
    const chat = document.getElementById('recipe-assistant');

    if (!fab) return;

    if (viewName === 'nutrition' && !isAssistantHidden()) {
        fab.style.display = 'flex';
    } else {
        fab.style.display = 'none';
        if (chat) chat.classList.add('hidden');
        if (fab) fab.classList.remove('active');
    }
}

// Toggle chat window
function toggleRecipeAssistant() {
    const chat = document.getElementById('recipe-assistant');
    const fab = document.getElementById('recipe-fab');

    if (chat.classList.contains('hidden')) {
        chat.classList.remove('hidden');
        fab.classList.add('active');
        document.getElementById('ra-input').focus();
    } else {
        chat.classList.add('hidden');
        fab.classList.remove('active');
    }
}

// Hide assistant completely (can be re-enabled in settings)
function hideRecipeAssistant() {
    const chat = document.getElementById('recipe-assistant');
    const fab = document.getElementById('recipe-fab');

    chat.classList.add('hidden');
    fab.style.display = 'none';
    localStorage.setItem('synthesis_hide_recipe_assistant', 'true');

    addAssistantMessage('Recipe Assistant hidden. You can re-enable it in Profile > Settings.');
}

// Show assistant (called from settings)
function showRecipeAssistant() {
    localStorage.setItem('synthesis_hide_recipe_assistant', 'false');
    // Will show on next visit to nutrition hub
}

// Add a message to the chat
function addAssistantMessage(text, isHtml = false) {
    const messages = document.getElementById('ra-messages');
    const msg = document.createElement('div');
    msg.className = 'ra-message assistant';

    if (isHtml) {
        msg.innerHTML = text;
    } else {
        msg.innerHTML = `<p>${text}</p>`;
    }

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(text) {
    const messages = document.getElementById('ra-messages');
    const msg = document.createElement('div');
    msg.className = 'ra-message user';
    msg.innerHTML = `<p>${text}</p>`;

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// Search recipes using TheMealDB API
async function searchRecipes() {
    const input = document.getElementById('ra-input');
    const query = input.value.trim();

    if (!query) return;

    addUserMessage(query);
    input.value = '';

    addAssistantMessage('Searching for recipes...');

    try {
        // Search by ingredient
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.meals && data.meals.length > 0) {
            const recipes = data.meals.slice(0, 6); // Show up to 6 recipes

            let html = `<p>Found ${data.meals.length} recipes with "${query}":</p>`;
            html += '<div class="ra-recipes">';

            for (const meal of recipes) {
                html += `
                    <div class="ra-recipe-card" onclick="showRecipeDetails('${meal.idMeal}')">
                        <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
                        <span>${meal.strMeal}</span>
                    </div>
                `;
            }

            html += '</div>';
            if (data.meals.length > 6) {
                html += `<p class="ra-hint">Showing 6 of ${data.meals.length} results</p>`;
            }

            // Remove "Searching..." message
            const messages = document.getElementById('ra-messages');
            messages.removeChild(messages.lastChild);

            addAssistantMessage(html, true);
        } else {
            // Try searching by name instead
            const nameResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
            const nameData = await nameResponse.json();

            const messages = document.getElementById('ra-messages');
            messages.removeChild(messages.lastChild);

            if (nameData.meals && nameData.meals.length > 0) {
                const recipes = nameData.meals.slice(0, 6);

                let html = `<p>Found ${nameData.meals.length} recipes matching "${query}":</p>`;
                html += '<div class="ra-recipes">';

                for (const meal of recipes) {
                    html += `
                        <div class="ra-recipe-card" onclick="showRecipeDetails('${meal.idMeal}')">
                            <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
                            <span>${meal.strMeal}</span>
                        </div>
                    `;
                }

                html += '</div>';
                addAssistantMessage(html, true);
            } else {
                addAssistantMessage(`No recipes found for "${query}". Try a different ingredient like "chicken", "beef", "pasta", or "rice".`);
            }
        }
    } catch (error) {
        console.error('Recipe search error:', error);
        const messages = document.getElementById('ra-messages');
        if (messages.lastChild) messages.removeChild(messages.lastChild);
        addAssistantMessage('Sorry, there was an error searching for recipes. Please try again.');
    }
}

// Show full recipe details
async function showRecipeDetails(mealId) {
    addAssistantMessage('Loading recipe details...');

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();

        const messages = document.getElementById('ra-messages');
        messages.removeChild(messages.lastChild);

        if (data.meals && data.meals[0]) {
            const meal = data.meals[0];

            // Get ingredients
            let ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && ingredient.trim()) {
                    ingredients.push(`${measure} ${ingredient}`.trim());
                }
            }

            // Store recipe data for saving
            currentRecipeData = {
                mealId: meal.idMeal,
                name: meal.strMeal,
                category: meal.strCategory,
                area: meal.strArea,
                ingredients: ingredients,
                instructions: meal.strInstructions,
                image: meal.strMealThumb,
                youtube: meal.strYoutube || ''
            };

            // Check if already saved
            const alreadySaved = isRecipeAlreadySaved(meal.strMeal);

            let html = `
                <div class="ra-recipe-detail">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h4>${meal.strMeal}</h4>
                    <p class="ra-category">${meal.strCategory} • ${meal.strArea}</p>

                    <div class="ra-section">
                        <strong>Ingredients:</strong>
                        <ul>
                            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="ra-section">
                        <strong>Instructions:</strong>
                        <p>${meal.strInstructions.replace(/\n/g, '<br>')}</p>
                    </div>

                    <div class="ra-actions">
                        ${alreadySaved ?
                            `<span class="ra-saved-badge">Already in Recipe Ideas</span>` :
                            `<button class="ra-save-btn" onclick="saveRecipeToMyRecipes()">Save to Recipe Ideas</button>`
                        }
                        ${meal.strYoutube ? `
                            <a href="${meal.strYoutube}" target="_blank" class="ra-video-link">
                                Watch Video
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;

            addAssistantMessage(html, true);
        } else {
            addAssistantMessage('Could not load recipe details. Please try again.');
        }
    } catch (error) {
        console.error('Recipe details error:', error);
        const messages = document.getElementById('ra-messages');
        if (messages.lastChild) messages.removeChild(messages.lastChild);
        addAssistantMessage('Sorry, there was an error loading the recipe. Please try again.');
    }
}

// Check if recipe is already saved in Recipe Ideas
function isRecipeAlreadySaved(recipeName) {
    if (!APP_DATA || !APP_DATA.user) return false;
    // Check both recipeIdeas and recipes for completeness
    const inRecipeIdeas = (APP_DATA.user.recipeIdeas || []).some(r => r.name === recipeName);
    const inRecipes = (APP_DATA.user.recipes || []).some(r => r.name === recipeName);
    return inRecipeIdeas || inRecipes;
}

// Save current recipe to Recipe Ideas
function saveRecipeToMyRecipes() {
    if (!currentRecipeData) {
        alert('No recipe to save. Please view a recipe first.');
        return;
    }

    if (!APP_DATA.user.recipeIdeas) {
        APP_DATA.user.recipeIdeas = [];
    }

    // Check if already saved
    if (APP_DATA.user.recipeIdeas.some(r => r.name === currentRecipeData.name)) {
        alert('This recipe is already in your Recipe Ideas!');
        return;
    }

    // Create recipe object matching the Recipe Ideas format
    const newRecipe = {
        id: 'assistant-' + Date.now(),
        name: currentRecipeData.name,
        category: currentRecipeData.category || 'Dinner',
        servings: 4,
        prepTime: '15 min',
        cookTime: '30 min',
        calories: 0, // Not available from TheMealDB
        protein: 0,
        carbs: 0,
        fats: 0,
        ingredients: currentRecipeData.ingredients.join('\n'),
        instructions: currentRecipeData.instructions,
        notes: `Cuisine: ${currentRecipeData.area}${currentRecipeData.youtube ? `\nVideo: ${currentRecipeData.youtube}` : ''}\n\n(Found via Recipe Assistant)`,
        isSuggested: true,
        fromAssistant: true,
        addedAt: new Date().toISOString()
    };

    APP_DATA.user.recipeIdeas.push(newRecipe);
    saveProgress();

    // Award XP if gamification is available
    if (window.gamification) {
        window.gamification.awardXP(10, 'Saved Recipe Idea');
    }

    // Update the button in the chat to show "Already Saved"
    const saveBtn = document.querySelector('.ra-save-btn');
    if (saveBtn) {
        saveBtn.outerHTML = '<span class="ra-saved-badge">Saved to Recipe Ideas!</span>';
    }

    addAssistantMessage(`"${currentRecipeData.name}" has been saved to Recipe Ideas! Scroll up in Nutrition Hub to see it.`);
}

// Get random recipe suggestion
async function getRandomRecipe() {
    addUserMessage('Surprise me!');
    addAssistantMessage('Finding a random recipe for you...');

    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        const messages = document.getElementById('ra-messages');
        messages.removeChild(messages.lastChild);

        if (data.meals && data.meals[0]) {
            const meal = data.meals[0];

            let html = `
                <p>How about this?</p>
                <div class="ra-recipes">
                    <div class="ra-recipe-card" onclick="showRecipeDetails('${meal.idMeal}')">
                        <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
                        <span>${meal.strMeal}</span>
                    </div>
                </div>
            `;

            addAssistantMessage(html, true);
        }
    } catch (error) {
        console.error('Random recipe error:', error);
        const messages = document.getElementById('ra-messages');
        if (messages.lastChild) messages.removeChild(messages.lastChild);
        addAssistantMessage('Sorry, there was an error. Please try again.');
    }
}

// Search by category
async function searchByCategory(category) {
    addUserMessage(`Show me ${category} recipes`);
    addAssistantMessage('Searching...');

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
        const data = await response.json();

        const messages = document.getElementById('ra-messages');
        messages.removeChild(messages.lastChild);

        if (data.meals && data.meals.length > 0) {
            const recipes = data.meals.slice(0, 6);

            let html = `<p>${category} recipes:</p>`;
            html += '<div class="ra-recipes">';

            for (const meal of recipes) {
                html += `
                    <div class="ra-recipe-card" onclick="showRecipeDetails('${meal.idMeal}')">
                        <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
                        <span>${meal.strMeal}</span>
                    </div>
                `;
            }

            html += '</div>';
            addAssistantMessage(html, true);
        }
    } catch (error) {
        console.error('Category search error:', error);
        addAssistantMessage('Sorry, there was an error. Please try again.');
    }
}
