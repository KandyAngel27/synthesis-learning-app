// ============================================
// RECIPE ASSISTANT - Free Recipe Search
// Uses TheMealDB API (100% free, no key needed)
// ============================================

// Check if assistant should be hidden
function isAssistantHidden() {
    return localStorage.getItem('synthesis_hide_recipe_assistant') === 'true';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isAssistantHidden()) {
        const fab = document.getElementById('recipe-fab');
        if (fab) fab.style.display = 'none';
    }
});

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
    const fab = document.getElementById('recipe-fab');
    fab.style.display = 'flex';
    localStorage.setItem('synthesis_hide_recipe_assistant', 'false');
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

                    ${meal.strYoutube ? `
                        <a href="${meal.strYoutube}" target="_blank" class="ra-video-link">
                            Watch Video Tutorial
                        </a>
                    ` : ''}
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
